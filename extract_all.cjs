/**
 * 全TI真实数据提取 — 联赛比赛详情 + account_id匹配
 */
const HttpsProxyAgent = require('https-proxy-agent').HttpsProxyAgent;
const agent = new HttpsProxyAgent('http://127.0.0.1:7897');
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
      hostname: u.hostname, path: u.pathname + u.search, method: 'GET', agent,
      headers: {'Accept':'application/json','User-Agent':'TIDraft/ALL'}, timeout: 20000,
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

const TIS = {
  TI4:{lid:600}, TI5:{lid:2733}, TI6:{lid:4664}, TI7:{lid:5401},
  TI8:{lid:9870}, TI9:{lid:10749}, TI10:{lid:13256}, TI11:{lid:14268},
  TI12:{lid:15728}, TI13:{lid:16935},
};

const raw = fs.readFileSync(OUT, 'utf8');
const pm = raw.match(/export const TI_PLAYERS\s*=\s*(\[[\s\S]*?\]);/);
if (!pm) { console.error('Parse error'); process.exit(1); }
const players = JSON.parse(pm[1]);

async function main() {
  let totalUpdated = 0;

  for (const [ti, meta] of Object.entries(TIS)) {
    if (LIMIT) break;
    const ck = 'league_' + meta.lid;
    const list = cache.leagueMatches?.[ck];
    if (!list?.length) { console.log(ti + ': 无缓存, 跳过'); continue; }

    // 取全量但最多200场(节约API)
    const sample = list.slice(0, Math.min(list.length, 200));
    console.log(`\n${ti}: ${sample.length}场 (共${list.length})`);

    // TI选手 → account_id
    const tiPlayers = players.filter(p => p.ti === ti && p.account_id > 1000);
    const idMap = {};
    for (const p of tiPlayers) {
      if (!idMap[p.account_id]) idMap[p.account_id] = [];
      idMap[p.account_id].push(p);
    }
    if (!Object.keys(idMap).length) { console.log('  无API选手, 跳过'); continue; }

    // 累积
    const acc = {};
    for (const m of sample) {
      if (LIMIT) break;
      const det = await api(BASE + '/matches/' + m.match_id);
      if (!det?.players) { process.stdout.write('x'); continue; }

      for (const p of det.players) {
        if (!p.account_id || !idMap[p.account_id]) continue;
        if (!acc[p.account_id]) acc[p.account_id] = {gpm:[],xpm:[],kills:[],deaths:[],assists:[],obs:[],sen:[],stacks:[],lane:[],heroes:new Set()};
        const a = acc[p.account_id];
        if ((p.gold_per_min||0) > 0) a.gpm.push(p.gold_per_min);
        if ((p.xp_per_min||0) > 0) a.xpm.push(p.xp_per_min);
        if ((p.kills||0)+(p.deaths||0)+(p.assists||0) > 0) {
          a.kills.push(p.kills||0); a.deaths.push(p.deaths||0); a.assists.push(p.assists||0);
        }
        if ((p.obs_placed||0) > 0) a.obs.push(p.obs_placed);
        if ((p.sen_placed||0) > 0) a.sen.push(p.sen_placed);
        if ((p.camps_stacked||0) > 0) a.stacks.push(p.camps_stacked);
        if ((p.lh_t||[])[1] > 0) a.lane.push(p.lh_t[1]);
        if (p.hero_id) a.heroes.add(p.hero_id);
      }
      process.stdout.write('.');
    }

    // 聚合
    const avg = arr => arr.length ? Math.round(arr.reduce((s,x)=>s+x,0)/arr.length*10)/10 : null;
    let tiUpdated = 0;
    for (const [aid, a] of Object.entries(acc)) {
      const targets = idMap[parseInt(aid)];
      if (!targets || a.gpm.length < 2) continue;
      const k = a.kills.reduce((s,x)=>s+x,0), d = a.deaths.reduce((s,x)=>s+x,0), as = a.assists.reduce((s,x)=>s+x,0);
      for (const p of targets) {
        const s = p.stats;
        if (a.gpm.length >= 2) s.gpm = avg(a.gpm);
        if (a.xpm.length >= 2) s.xpm = avg(a.xpm);
        if (a.kills.length >= 2) s.kda = d>0 ? Math.round((k+as)/d*10)/10 : (k+as);
        if (a.heroes.size > 0) s.hero_pool = a.heroes.size;
        if (a.assists.length >= 2) s.assists = avg(a.assists);
        if (a.obs.length >= 2) s.obs_placed = avg(a.obs);
        if (a.sen.length >= 2) s.sen_placed = avg(a.sen);
        if (a.stacks.length >= 2) s.stacks = avg(a.stacks);
        if (a.lane.length >= 2) s.lane_eff = Math.round(avg(a.lane)/70*100);
        p.matchCount = a.gpm.length;
        tiUpdated++;
      }
    }
    console.log(' ' + tiUpdated + '人更新');
    totalUpdated += tiUpdated;
  }

  // 保存
  const apiCount = players.filter(p => p.source === 'api').length;
  console.log('\n总计更新: ' + totalUpdated + ' | API调用: ' + cnt + (LIMIT ? ' ⛔限额' : ''));

  const out = raw
    .replace(/export const TI_PLAYERS\s*=\s*\[[\s\S]*?\];/, 'export const TI_PLAYERS = ' + JSON.stringify(players, null, 2) + ';')
    .replace(/export const DATA_SUMMARY\s*=\s*\{[\s\S]*?\};/, 'export const DATA_SUMMARY = { total: ' + players.length + ', api: ' + apiCount + ', estimated: ' + (players.length - apiCount) + ' };');
  fs.writeFileSync(OUT, out, 'utf8');
  console.log('✅ 写入');
}

main().catch(e => { console.error('Fatal:', e); process.exit(1); });
