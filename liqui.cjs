/**
 * Liquipedia 数据采集 — 抓取 TI 官方战队阵容
 * 用于验证和补充选手数据
 */
const HttpsProxyAgent = require('https-proxy-agent').HttpsProxyAgent;
const agent = new HttpsProxyAgent('http://127.0.0.1:7897');
const https = require('https');
const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, 'src', 'data', 'ti_all_players.js');
const LP_BASE = 'liquipedia.net';

function get(path) {
  return new Promise((resolve, reject) => {
    https.request({
      hostname: LP_BASE, path, method: 'GET', agent,
      headers: {'Accept-Encoding':'gzip','User-Agent':'TIDraft/LP'}, timeout: 15000,
    }, res => {
      let d = ''; res.on('data', c => d += c);
      res.on('end', () => {
        if (res.statusCode !== 200) return reject(new Error('H'+res.statusCode));
        try { resolve(JSON.parse(d)); } catch { reject(new Error('J')); }
      });
    }).on('error', reject).on('timeout', function(){this.destroy();reject(new Error('T'));}).end();
  });
}

const sleep = ms => new Promise(r => setTimeout(r, ms));
let cnt = 0;
async function api(p) {
  cnt++; if (cnt > 1) await sleep(2000); // Liquipedia rate limit: 2s
  for (let i=0; i<2; i++) {
    try { return await get(p); } catch(e) {
      if (i < 1) await sleep(3000);
    }
  }
  return null;
}

// TI页面列表
const TI_PAGES = {
  TI4: 'The_International/2014',
  TI5: 'The_International/2015',
  TI6: 'The_International/2016',
  TI7: 'The_International/2017',
  TI8: 'The_International/2018',
  TI9: 'The_International/2019',
  TI10: 'The_International/2021',
  TI11: 'The_International/2022',
  TI12: 'The_International/2023',
  TI13: 'The_International/2024',
};

// 只解析 Top5 (placement=1 或 placement=2 或 placement=3 或 placement=4)
function parseRosters(wikitext) {
  const teams = [];
  // 匹配所有 TeamCard
  const re = /\{\{TeamCard\n([\s\S]*?)\}\}/g;
  let m;
  while ((m = re.exec(wikitext)) !== null) {
    const block = m[1];
    const team = (block.match(/\|team=([^\n|]+)/)||[])[1]?.trim();
    const placement = (block.match(/\|placement=([^\n|]+)/)||[])[1]?.trim() || '';
    const players = [];
    for (let i=1; i<=5; i++) {
      const p = (block.match(new RegExp('\\|p'+i+'=([^\\n|]+)'))||[])[1]?.trim();
      if (p) players.push(p);
    }
    if (team && players.length === 5) {
      // 判断是否Top5 (placement 是 1,2,3,4 或者没填但team在invited列表前11)
      const num = parseInt(placement) || 0;
      teams.push({ team, players, placement: num });
    }
  }
  return teams;
}

async function main() {
  console.log('Liquipedia TI 阵容采集\n');

  const allRosters = {}; // TI → [{team, players}]

  for (const [ti, page] of Object.entries(TI_PAGES)) {
    const url = `/dota2/api.php?action=parse&page=${encodeURIComponent(page)}&prop=wikitext&format=json`;
    console.log(`${ti}: ${page}...`);
    const data = await api(url);
    if (!data?.parse?.wikitext) {
      console.log('  失败');
      continue;
    }
    const teams = parseRosters(data.parse.wikitext['*']);
    allRosters[ti] = teams;
    teams.forEach(t => console.log(`  ${t.team}: ${t.players.join(', ')}`));
  }

  // 保存
  const outFile = path.join(__dirname, 'liqui_rosters.json');
  fs.writeFileSync(outFile, JSON.stringify(allRosters, null, 2));
  console.log(`\n✅ 保存: ${outFile}`);
  console.log(`总计: ${Object.values(allRosters).flat().length} 支战队`);

  // 交叉对比我们的数据
  console.log('\n═══ 数据对比 ═══');
  const raw = fs.readFileSync(OUT, 'utf8');
  const pm = raw.match(/export const TI_PLAYERS = (\[[\s\S]*?\]);\n/);
  const players = JSON.parse(pm[1]);

  for (const [ti, teams] of Object.entries(allRosters)) {
    for (const t of teams) {
      const ourPlayers = players.filter(p => p.ti === ti && p.team.toLowerCase().replace(/[^a-z]/g,'') === t.team.toLowerCase().replace(/[^a-z]/g,''));
      if (ourPlayers.length === 0) {
        console.log(`  ❌ ${ti} ${t.team}: 数据库无此队`);
      } else {
        const ourNames = new Set(ourPlayers.map(p => p.name.toLowerCase()));
        const lpNames = new Set(t.players.map(n => n.toLowerCase()));
        const missing = [...lpNames].filter(n => !ourNames.has(n));
        const extra = [...ourNames].filter(n => !lpNames.has(n));
        if (missing.length > 0) console.log(`  ⚠ ${ti} ${t.team}: Liquipedia有但DB无: ${missing.join(', ')}`);
        if (extra.length > 0) console.log(`  ⚠ ${ti} ${t.team}: DB有但Liquipedia无: ${extra.join(', ')}`);
      }
    }
  }
}

main().catch(e => { console.error('Fatal:', e); process.exit(1); });
