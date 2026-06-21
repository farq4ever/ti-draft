/**
 * 构建 personaname → account_id 字典
 * 从联赛比赛详情中提取所有选手的 Steam 名字和 ID 映射
 */
const HttpsProxyAgent = require('https-proxy-agent').HttpsProxyAgent;
const agent = new HttpsProxyAgent('http://127.0.0.1:7897');
const https = require('https');
const fs = require('fs');
const path = require('path');

const CACHE = path.join(__dirname, '.ti_cache.json');
const OUT = path.join(__dirname, 'src', 'data', 'ti_all_players.js');
const DICT_FILE = path.join(__dirname, 'steam_dict.json');
const cache = JSON.parse(fs.readFileSync(CACHE, 'utf8'));
const BASE = 'https://api.opendota.com/api';

function get(url) {
  return new Promise((resolve, reject) => {
    const u = new URL(url);
    https.request({
      hostname: u.hostname, path: u.pathname + u.search, method: 'GET', agent,
      headers: {'Accept':'application/json','User-Agent':'TIDraft/DICT'}, timeout: 20000,
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
      if (e.message === 'RL') { console.warn('\n⛔'); LIMIT=true; return null; }
      if (i < 2) await sleep(1500*(i+1));
    }
  }
  return null;
}

function norm(s) { return (s||'').toLowerCase().replace(/[^a-z0-9一-鿿]/g,''); }

const TIS = {
  TI4:600, TI5:2733, TI6:4664, TI7:5401, TI8:9870, TI9:10749,
  TI10:13256, TI11:14268, TI12:15728, TI13:16935,
};

// 读取已有字典 (增量)
let dict = {};
try { dict = JSON.parse(fs.readFileSync(DICT_FILE, 'utf8')); } catch {}

async function main() {
  console.log('构建 Steam 名字→ID 字典\n');

  for (const [ti, lid] of Object.entries(TIS)) {
    if (LIMIT) break;
    const ck = 'league_' + lid;
    const list = cache.leagueMatches?.[ck];
    if (!list?.length) continue;

    // 均匀采样 100场 (确保覆盖不同阶段)
    const step = Math.max(3, Math.floor(list.length / 100));
    const sample = [];
    for (let i = 0; i < list.length && sample.length < 100; i += step) {
      sample.push(list[i]);
    }
    console.log(`${ti}: ${sample.length}场`);

    for (const m of sample) {
      if (LIMIT) break;
      const det = await api(`${BASE}/matches/${m.match_id}`);
      if (!det?.players) { process.stdout.write('x'); continue; }

      for (const p of det.players) {
        if (!p.account_id) continue;
        const pn = (p.personaname || '').trim();
        if (!pn || pn.length < 2) continue;
        const n = norm(pn);

        if (!dict[n]) dict[n] = { ids: {}, names: {} };
        dict[n].ids[p.account_id] = (dict[n].ids[p.account_id] || 0) + 1;
        dict[n].names[pn] = (dict[n].names[pn] || 0) + 1;
      }
      process.stdout.write('.');
    }
    console.log('');
  }

  // 压缩: 只保留最常见的 account_id
  const compact = {};
  for (const [n, data] of Object.entries(dict)) {
    const bestId = Object.entries(data.ids).sort((a,b)=>b[1]-a[1])[0];
    compact[n] = { id: parseInt(bestId[0]), freq: bestId[1] };
  }

  fs.writeFileSync(DICT_FILE, JSON.stringify(compact, null, 2));
  console.log(`\n字典: ${Object.keys(compact).length} 个名字`);
  console.log(`API调用: ${cnt}`);

  // 用字典匹配我们的选手
  console.log('\n═══ 匹配未收录选手 ═══');
  const raw = fs.readFileSync(OUT, 'utf8');
  const pm = raw.match(/export const TI_PLAYERS = (\[[\s\S]*?\]);\n/);
  const players = JSON.parse(pm[1]);
  const est = players.filter(p => p.source === 'estimated');
  console.log(`未收录: ${est.length}`);

  let matched = 0;
  for (const p of est) {
    const n = norm(p.name);
    const entry = compact[n];
    if (entry && entry.id !== p.account_id) {
      console.log(`  ✓ ${p.name}@${p.ti}: ${p.account_id} → ${entry.id} (频率:${entry.freq})`);
      p.account_id = entry.id;
      matched++;
    }
  }
  console.log(`匹配: ${matched}人`);

  if (matched > 0) {
    const apiCount = players.filter(p=>p.source==='api').length;
    const out = raw
      .replace(/export const TI_PLAYERS = \[[\s\S]*?\];\n/, `export const TI_PLAYERS = ${JSON.stringify(players, null, 2)};\n`)
      .replace(/export const DATA_SUMMARY = \{[\s\S]*?\};/, `export const DATA_SUMMARY = { total: ${players.length}, api: ${apiCount}, estimated: ${players.length - apiCount} };`);
    fs.writeFileSync(OUT, out, 'utf8');
    console.log('✅ ID已更新');
  }
}

main().catch(e => { console.error('Fatal:', e); process.exit(1); });
