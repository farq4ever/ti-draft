/**
 * 综合数据采集 — Phase 2+3: 比赛详情 + 重查估计选手
 * 走代理 127.0.0.1:7897
 */
const { bootstrap } = require('global-agent');
process.env.GLOBAL_AGENT_HTTP_PROXY = 'http://127.0.0.1:7897';
bootstrap();

const https = require('https');
const fs = require('fs');
const path = require('path');

const CACHE = path.join(__dirname, '.ti_cache.json');
const OUT = path.join(__dirname, 'src', 'data', 'ti_all_players.js');
const cache = JSON.parse(fs.readFileSync(CACHE, 'utf8'));
const BASE = 'https://api.opendota.com/api';

function get(url) {
  return new Promise((resolve, reject) => {
    const u = new URL(url);
    https.request({
      hostname: u.hostname, path: u.pathname + u.search, method: 'GET',
      headers: {'Accept':'application/json','User-Agent':'TIDraft/10'}, timeout: 20000,
    }, res => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => {
        if (res.statusCode === 429) return reject(new Error('RL'));
        if (res.statusCode !== 200) return reject(new Error('H'+res.statusCode));
        try { resolve(JSON.parse(d)); } catch { reject(new Error('J')); }
      });
    }).on('error', reject).on('timeout', function(){this.destroy();reject(new Error('T'));}).end();
  });
}
const sleep = ms => new Promise(r => setTimeout(r, ms));
let cnt = 0, LIMIT = false;
async function api(url) {
  if (LIMIT) return null;
  cnt++; if (cnt > 1) await sleep(1000);
  for (let i=0; i<3; i++) {
    try { return await get(url); } catch(e) {
      if (e.message === 'RL') { console.warn('\n⛔ 限额'); LIMIT=true; return null; }
      if (i < 2) await sleep(1500*(i+1));
    }
  }
  return null;
}

const POS_DEF = {
  1: { gpm:580, xpm:640, kda:3.5, lane_eff:54, hero_pool:10, assists:8,  obs_placed:2, sen_placed:1, obs_denied:42, stacks:1 },
  2: { gpm:560, xpm:640, kda:3.7, lane_eff:53, hero_pool:14, assists:10, obs_placed:3, sen_placed:1, obs_denied:44, stacks:2 },
  3: { gpm:420, xpm:490, kda:3.0, lane_eff:45, hero_pool:18, assists:14, obs_placed:7, sen_placed:3, obs_denied:52, stacks:7 },
  4: { gpm:310, xpm:390, kda:3.1, lane_eff:43, hero_pool:22, assists:22, obs_placed:14, sen_placed:10, obs_denied:66, stacks:6 },
  5: { gpm:270, xpm:345, kda:2.8, lane_eff:42, hero_pool:20, assists:24, obs_placed:18, sen_placed:14, obs_denied:70, stacks:4 },
};

const TIS = {
  TI4:{lid:600, yr:2014}, TI5:{lid:2733, yr:2015}, TI6:{lid:4664, yr:2016},
  TI7:{lid:5401, yr:2017}, TI8:{lid:9870, yr:2018}, TI9:{lid:10749, yr:2019},
  TI10:{lid:13256, yr:2021}, TI11:{lid:14268, yr:2022}, TI12:{lid:15728, yr:2023},
  TI13:{lid:16935, yr:2024},
};

const raw = fs.readFileSync(OUT, 'utf8');
const pm = raw.match(/export const TI_PLAYERS = (\[[\s\S]*?\]);/);
if (!pm) { console.error('解析失败'); process.exit(1); }
const players = JSON.parse(pm[1]);
const startApi = players.filter(p=>p.source==='api').length;
console.log(`开始: API ${startApi}/${players.length}\n`);

// 建索引
const idx = {};
for (const p of players) {
  if (!p.account_id || p.account_id < 1000 || !TIS[p.ti]) continue;
  const key = p.account_id + '__' + p.ti;
  if (!idx[key]) idx[key] = [];
  idx[key].push(p);
}

async function phase2() {
  console.log('═══ 比赛详情 → GPM/XPM/wards ═══\n');
  let updated = 0;

  for (const [tiKey, meta] of Object.entries(TIS)) {
    if (LIMIT) break;
    const ck = 'league_' + meta.lid;
    const list = cache.leagueMatches?.[ck];
    if (!list?.length) continue;

    // 均匀采样 ~30场
    const sample = [];
    const n = list.length;
    const step = Math.max(3, Math.floor(n / 35));
    for (let i = Math.floor(n*0.15); i < n && sample.length < 35; i += step) {
      sample.push(list[i]);
    }
    console.log(`${tiKey}: ${sample.length}场`);

    let tiUp = 0;
    for (const m of sample) {
      if (LIMIT) break;
      const det = await api(`${BASE}/matches/${m.match_id}`);
      if (!det?.players) { process.stdout.write('x'); continue; }

      for (const p of det.players) {
        if (!p.account_id) continue;
        const k = p.account_id + '__' + tiKey;
        const ts = idx[k];
        if (!ts?.length) continue;

        for (const t of ts) {
          let ch = false;
          const s = t.stats;
          if (p.gold_per_min > 0) { s.gpm = p.gold_per_min; ch = true; }
          if (p.xp_per_min > 0) { s.xpm = p.xp_per_min; ch = true; }
          if ((p.obs_placed||0) > 0) { s.obs_placed = p.obs_placed; ch = true; }
          if ((p.sen_placed||0) > 0) { s.sen_placed = p.sen_placed; ch = true; }
          if ((p.camps_stacked||0) > 0) { s.stacks = p.camps_stacked; ch = true; }
          if ((p.lh_t||[])[1] > 0) { s.lane_eff = Math.round(p.lh_t[1]/70*100); ch = true; }
          if (ch && !t._details) { t._details = 1; tiUp++; }
        }
      }
      process.stdout.write('.');
    }
    console.log(` ${tiUp}人`);
    updated += tiUp;
  }
  console.log(`详情: ${updated}人\n`);
}

async function phase3() {
  console.log('═══ 重查 estimated 选手 ═══\n');
  const targets = players.filter(p => p.source === 'estimated' && p.account_id > 100000);
  console.log(`${targets.length} 人待查`);

  let n = 0;
  for (const p of targets) {
    if (LIMIT) break;
    const ti = TIS[p.ti];
    if (!ti) continue;

    process.stdout.write(`  ${p.name.slice(0,12)}@${p.ti} `);
    // league filter
    const r1 = await api(`${BASE}/players/${p.account_id}/matches?league_id=${ti.lid}&significant=1`);
    if (r1?.length >= 2) {
      const av = k => { const v=r1.map(m=>m[k]).filter(v=>v!=null&&!isNaN(v)&&v>0); return v.length?Math.round(v.reduce((s,x)=>s+x,0)/v.length*10)/10:0; };
      const k=av('kills'),d=av('deaths'),a=av('assists');
      p.stats.kda = d>0?Math.round((k+a)/d*10)/10:(k+a)||p.stats.kda;
      p.stats.assists = a||p.stats.assists;
      p.stats.hero_pool = [...new Set(r1.map(m=>m.hero_id).filter(Boolean))].length||p.stats.hero_pool;
      p.matchCount = r1.length; p.source = 'api'; n++;
      console.log(`✓ ${r1.length}场`);
    } else {
      // time fallback
      const dMin = Math.floor(new Date(`${ti.yr}-07-01`).getTime()/1000);
      const dMax = Math.floor(new Date(`${ti.yr}-10-31`).getTime()/1000);
      const r2 = await api(`${BASE}/players/${p.account_id}/matches?limit=200&significant=0`);
      if (r2?.length) {
        const f = r2.filter(m => m.start_time >= dMin && m.start_time <= dMax);
        if (f.length >= 2) {
          const av = k => { const v=f.map(m=>m[k]).filter(v=>v!=null&&!isNaN(v)&&v>0); return v.length?Math.round(v.reduce((s,x)=>s+x,0)/v.length*10)/10:0; };
          const k=av('kills'),d=av('deaths'),a=av('assists');
          p.stats.kda = d>0?Math.round((k+a)/d*10)/10:(k+a)||p.stats.kda;
          p.stats.assists = a||p.stats.assists;
          p.stats.hero_pool = [...new Set(f.map(m=>m.hero_id).filter(Boolean))].length||p.stats.hero_pool;
          p.matchCount = f.length; p.source = 'api'; n++;
          console.log(`✓ ${f.length}场 T`);
        } else console.log('x');
      } else console.log('x');
    }
  }
  console.log(`\n新增: ${n}人`);
}

async function main() {
  await phase2();
  await phase3();

  const apiCount = players.filter(p=>p.source==='api').length;
  const detCount = players.filter(p=>p._details).length;
  console.log(`\n══════════════════`);
  console.log(`API: ${apiCount}/${players.length} (${Math.round(apiCount/players.length*100)}%)`);
  console.log(`有详情: ${detCount}`);
  console.log(`调用: ${cnt}`);
  if (LIMIT) console.log('⛔ 限额');
  console.log('══════════════════');

  const out = raw
    .replace(/export const TI_PLAYERS = \[[\s\S]*?\];/, `export const TI_PLAYERS = ${JSON.stringify(players, null, 2)};`)
    .replace(/export const DATA_SUMMARY = \{[\s\S]*?\};/, `export const DATA_SUMMARY = { total: ${players.length}, api: ${apiCount}, estimated: ${players.length - apiCount} };`);
  fs.writeFileSync(OUT, out, 'utf8');
  console.log('✅ 写入');
}

main().catch(e => { console.error('Fatal:', e); process.exit(1); });
