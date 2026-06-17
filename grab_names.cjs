/**
 * 查询未匹配选手的Steam personaname → 扩充别名表
 */
const HttpsProxyAgent = require('https-proxy-agent').HttpsProxyAgent;
const agent = new HttpsProxyAgent('http://127.0.0.1:7897');
const https = require('https');
const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, 'src', 'data', 'ti_all_players.js');
const BASE = 'https://api.opendota.com/api';

function get(url) {
  return new Promise((resolve, reject) => {
    const u = new URL(url);
    https.request({
      hostname: u.hostname, path: u.pathname + u.search, method: 'GET', agent,
      headers: {'Accept':'application/json','User-Agent':'TIDraft/NAMES'}, timeout: 15000,
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
  for (let i=0; i<2; i++) {
    try { return await get(url); } catch(e) {
      if (e.message === 'RL') { console.warn('\n⛔ 限额'); LIMIT=true; return null; }
      if (i < 1) await sleep(2000);
    }
  }
  return null;
}

function norm(s) { return (s||'').toLowerCase().replace(/[^a-z0-9一-鿿]/g,''); }

// 读取数据
const raw = fs.readFileSync(OUT, 'utf8');
const pm = raw.match(/export const TI_PLAYERS = (\[[\s\S]*?\]);\n/);
const players = JSON.parse(pm[1]);

// 未匹配选手 (estimated) 按名字去重
const est = players.filter(p => p.source === 'estimated');
const byName = {};
for (const p of est) {
  const n = norm(p.name);
  if (!byName[n]) byName[n] = { name: p.name, ids: new Set() };
  byName[n].ids.add(p.account_id);
}

console.log(`未匹配: ${Object.keys(byName).length} 个不同选手\n`);

async function main() {
  const newAliases = {};

  for (const [nk, data] of Object.entries(byName)) {
    if (LIMIT) break;

    // 查询每个ID, 收集personaname
    const names = new Set();
    for (const id of data.ids) {
      if (id < 1000) continue;
      const p = await api(`${BASE}/players/${id}`);
      if (p?.profile?.personaname) {
        const pn = p.profile.personaname;
        names.add(pn);
        console.log(`  ${data.name} (id:${id}): "${pn}"`);
      }
    }

    if (names.size > 0) {
      newAliases[nk] = [...names];
    }
  }

  console.log(`\n找到 ${Object.keys(newAliases).length} 个选手的Steam名字`);
  console.log(`API调用: ${cnt}`);

  // 输出为别名格式
  const out = {};
  for (const [nk, names] of Object.entries(newAliases)) {
    const clean = names.map(n => norm(n)).filter(n => n.length >= 2);
    out[nk] = [...new Set(clean)];
  }

  const outFile = path.join(__dirname, 'discovered_names.json');
  fs.writeFileSync(outFile, JSON.stringify(out, null, 2));
  console.log(`✅ 写入: ${outFile}`);
}

main().catch(e => { console.error('Fatal:', e); process.exit(1); });
