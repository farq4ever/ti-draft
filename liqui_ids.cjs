/**
 * Liquipedia 慢速采集 v2 — 15s/次, 跳过已修正, 自动换页名
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const OUT = path.join(__dirname, 'src', 'data', 'ti_all_players.js');
const PROXY = 'http://127.0.0.1:7897';

const raw = fs.readFileSync(OUT, 'utf8');
const pm = raw.match(/export const TI_PLAYERS\s*=\s*(\[[\s\S]*?\]);/);
if (!pm) { console.error('Parse'); process.exit(1); }
const players = JSON.parse(pm[1]);

// 旧的错误ID集合 — 这些ID需要被替换
const BAD = new Set([
  86700461,86700470,86700481,86700482,86700483,86700484,86700485,86700486,
  86700487,86700488,86700489,86700490,86700491,86700495,86700498,86700499,
  86700500,86700501,86700503,86712304,86712305,86713546,86713547,86713548,
  86713549,86715323,86730602,86730603,86740106,86740107,86740108,86740109,
  86743551,86745912,86745913,86745914,86698277,91591747,91591620,90882900,
  90882988,90882989,90882987,90892789,94362277,87382579,87278700,82262480,
  82262554,82262664,95065,149462,18486761,111620041,113331514,113331515,
  113331517,113331518,113331519,119514029,149048090,149048091,149048092,
  149048093,149048094,149048095,149048096,149048097,149048098,149048099,
  149048100,149048101,149577192,149577193,374143000,374143001,374143002,
  374143003,374143004,374143005,2015672,19757254,84429681,72312627,86727555,
  73562326,94738847,19672354,111114687
]);

const est = players.filter(p => p.source === 'estimated' && BAD.has(p.account_id));
const unique = [...new Set(est.map(p => p.name))];
console.log('待查: ' + unique.length + ' 个选手\n');

// 名字→Liquipedia页面名映射 (有些选手的页面名不同)
const PAGE_NAMES = {
  'LighTofHeaveN': 'LightofHeaveN','Ferrari_430':'Ferrari_430','ARS-ART':'ARS-ART',
  'ky.xY':'kYxY','XtiNcT':'XtiNcT','xFreedom':'xFreedom','iceiceice':'iceiceice',
  'Bone7':'bOne7','old chicken':'old_chicken','old eLeVeN':'old_eLeVeN',
  'ah fu':'Ah_Fu','Paparazi灬':'Paparazi','flyfly':'flyfly','JT-':'JT-','Oli~':'Oli',
  'Maybe':'Somnus','rotk':'ROtK','FATA-':'FATA','DDC':'DDC_(player)',
  'Yamateh':'YamateH','Net':'Net_(player)','357':'QQQ','Victoria':'Victoria_(player)',
  'Sakata':'Sakata','dogf1ghts':'dogf1ghts','RodjER':'RodjER','ATF':'ATF',
  'Fade':'Fade','Dai':'Dai','Ice':'Ice','SanSheng':'SanSheng',
};

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function main() {
  // 初始长延迟
  console.log('初始化延迟20秒...');
  await sleep(20000);

  let found = 0;
  for (let i = 0; i < unique.length; i++) {
    const name = unique[i];
    const pageName = PAGE_NAMES[name] || name.replace(/ /g, '_');

    try {
      const url = `https://liquipedia.net/dota2/api.php?action=parse&page=${encodeURIComponent(pageName)}&prop=wikitext&format=json`;
      const json = execSync(
        `curl -s "${url}" --max-time 15 --proxy ${PROXY} --compressed`,
        { encoding: 'utf8', timeout: 20000 }
      );

      const d = JSON.parse(json);
      const text = d?.parse?.wikitext?.['*'] || '';
      const sm = text.match(/\|playerid\s*=\s*(\d+)/);

      if (sm) {
        const newId = parseInt(sm[1]);
        const targets = players.filter(p => p.name === name && p.source === 'estimated' && BAD.has(p.account_id));
        for (const t of targets) {
          t.account_id = newId;
          t.source = 'api'; // 标记为API来源
          t._liqui = true;
        }
        found += targets.length;
        console.log(`  ✓ ${name}: ${newId} (${targets.length}条)`);
      } else {
        console.log(`  - ${name}: 无playerid`);
      }
    } catch (e) {
      const msg = (e.message || '').slice(0, 80);
      if (msg.includes('Rate') || msg.includes('DOCTYPE')) {
        console.log(`\n⛔ 限速! 已抓${found}人, 剩${unique.length - i}人`);
        break;
      }
      if (msg.includes('Unexpected token')) {
        console.log(`  - ${name}: 页面不存在`);
      } else {
        console.log(`  ✗ ${name}: ${msg}`);
      }
    }

    // 15秒延迟
    if (i < unique.length - 1) {
      process.stdout.write(`  [${i+1}/${unique.length}] 等18秒...\r`);
      await sleep(18000);
    }
  }

  const apiCount = players.filter(p => p.source === 'api').length;
  const estCount = players.filter(p => p.source === 'estimated').length;
  console.log(`\nLiquipedia: ${found}人 | API: ${apiCount}/${players.length} | Est: ${estCount}`);

  const out = raw
    .replace(/export const TI_PLAYERS\s*=\s*\[[\s\S]*?\];/, 'export const TI_PLAYERS = ' + JSON.stringify(players, null, 2) + ';')
    .replace(/export const DATA_SUMMARY\s*=\s*\{[\s\S]*?\};/, 'export const DATA_SUMMARY = { total: ' + players.length + ', api: ' + apiCount + ', estimated: ' + estCount + ' };');
  fs.writeFileSync(OUT, out, 'utf8');
  console.log('✅ 写入');
}
main().catch(e => { console.error('Fatal:', e); process.exit(1); });
