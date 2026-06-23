/**
 * TI8 真实数据提取 — 全量比赛详情 + account_id 精准匹配
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
      headers: {'Accept':'application/json','User-Agent':'TI8REAL'}, timeout: 20000,
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
      if (e.message === 'RL') { LIMIT=true; return null; }
      if (i < 2) await sleep(1500*(i+1));
    }
  }
  return null;
}

const raw = fs.readFileSync(OUT, 'utf8');
const pm = raw.match(/export const TI_PLAYERS\s*=\s*(\[[\s\S]*?\]);/);
if (!pm) { console.error('Parse error'); process.exit(1); }
const players = JSON.parse(pm[1]);

async function main() {
  const list = cache.leagueMatches?.league_9870;
  if (!list?.length) { console.log('No TI8 cache'); return; }

  // TI8 选手 → account_id set
  const ti8Players = players.filter(p => p.ti === 'TI8' && p.account_id > 1000);
  const idToPlayer = {};
  for (const p of ti8Players) {
    const k = p.account_id;
    if (!idToPlayer[k]) idToPlayer[k] = [];
    idToPlayer[k].push(p);
  }
  console.log('TI8 players:', ti8Players.length, 'unique IDs:', Object.keys(idToPlayer).length);
  console.log('League matches:', list.length, '\n');

  // 累积每个选手的比赛数据
  const acc = {}; // account_id → {gpm:[], xpm:[], ...}
  let matched = 0, total = 0;

  for (const m of list) {
    if (LIMIT) break;
    total++;
    if (total % 50 === 0) process.stdout.write(total+' ');

    const det = await api(BASE + '/matches/' + m.match_id);
    if (!det?.players) { process.stdout.write('x'); continue; }

    for (const p of det.players) {
      if (!p.account_id || !idToPlayer[p.account_id]) continue;
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
      matched++;
    }
    process.stdout.write('.');
  }

  // 聚合 + 应用
  console.log('\n\nMatched:', matched, 'samples');
  let updated = 0;
  for (const [aid, a] of Object.entries(acc)) {
    const targets = idToPlayer[parseInt(aid)];
    if (!targets) continue;

    const avg = arr => arr.length ? Math.round(arr.reduce((s,x)=>s+x,0)/arr.length*10)/10 : null;
    const k = a.kills.reduce((s,x)=>s+x,0), d = a.deaths.reduce((s,x)=>s+x,0), as = a.assists.reduce((s,x)=>s+x,0);
    const newStats = {
      gpm: avg(a.gpm), xpm: avg(a.xpm),
      kda: d>0 ? Math.round((k+as)/d*10)/10 : (k+as),
      lane_eff: a.lane.length ? Math.round(avg(a.lane)/70*100) : null,
      hero_pool: a.heroes.size,
      assists: avg(a.assists),
      obs_placed: avg(a.obs), sen_placed: avg(a.sen),
      obs_denied: null, // not computed from matches endpoint
      stacks: avg(a.stacks),
    };

    for (const p of targets) {
      // Only update if we got meaningful data
      if (a.gpm.length >= 2) {
        const s = p.stats;
        if (newStats.gpm) s.gpm = newStats.gpm;
        if (newStats.xpm) s.xpm = newStats.xpm;
        if (newStats.kda) s.kda = newStats.kda;
        if (newStats.lane_eff) s.lane_eff = newStats.lane_eff;
        if (newStats.hero_pool) s.hero_pool = newStats.hero_pool;
        if (newStats.assists) s.assists = newStats.assists;
        if (newStats.obs_placed) s.obs_placed = newStats.obs_placed;
        if (newStats.sen_placed) s.sen_placed = newStats.sen_placed;
        if (newStats.stacks) s.stacks = newStats.stacks;
        p.matchCount = a.gpm.length;
        p._ti8real = true;
        updated++;
        console.log(p.name + ': GPM=' + s.gpm + ' XPM=' + s.xpm + ' KDA=' + s.kda + ' lane=' + s.lane_eff + '% heroes=' + s.hero_pool + ' (' + a.gpm.length + '场)');
      }
    }
  }

  console.log('\nUpdated:', updated, '| API calls:', cnt, '| Limit:', LIMIT);

  const apiCount = players.filter(p => p.source === 'api').length;
  const out = raw
    .replace(/export const TI_PLAYERS\s*=\s*\[[\s\S]*?\];/, 'export const TI_PLAYERS = ' + JSON.stringify(players, null, 2) + ';')
    .replace(/export const DATA_SUMMARY\s*=\s*\{[\s\S]*?\};/, 'export const DATA_SUMMARY = { total: ' + players.length + ', api: ' + apiCount + ', estimated: ' + (players.length - apiCount) + ' };');
  fs.writeFileSync(OUT, out, 'utf8');
  console.log('Saved');
}

main().catch(e => { console.error('Fatal:', e); process.exit(1); });
