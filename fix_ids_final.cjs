/**
 * 最终ID整理 — 三步走: 字典匹配 → OpenDota搜索 → 验证
 */
const HttpsProxyAgent = require('https-proxy-agent').HttpsProxyAgent;
const agent = new HttpsProxyAgent('http://127.0.0.1:7897');
const https = require('https');
const fs = require('fs');
const path = require('path');

const DICT_FILE = path.join(__dirname, 'steam_dict.json');
const OUT = path.join(__dirname, 'src', 'data', 'ti_all_players.js');
const BASE = 'https://api.opendota.com/api';

function get(url) {
  return new Promise((resolve, reject) => {
    const u = new URL(url);
    https.request({
      hostname: u.hostname, path: u.pathname + u.search, method: 'GET', agent,
      headers: {'Accept':'application/json','User-Agent':'TIDraft/FIX'}, timeout: 15000,
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

function norm(s) { return (s||'').toLowerCase().replace(/[^a-z0-9]/g,''); }

// 读取
const raw = fs.readFileSync(OUT, 'utf8');
const m = raw.match(/export const TI_PLAYERS\s*=\s*(\[[\s\S]*?\]);/);
if (!m) { console.error('Parse error'); process.exit(1); }
const players = JSON.parse(m[1]);

// 别名表
const ALIASES = {
  'dendi':['dendi','snakemaster'],'puppey':['puppey'],'xboct':['xboct','hvost'],
  'lightofheaven':['lightofheaven','loh','annajm'],'kuroky':['kuroky','kky'],
  'burning':['burning','bgod','xulei'],'ferrari430':['ferrari430','430','lostreakchicken'],
  'faith':['faith'],'yyf':['yyf'],'zhou':['zhou'],'chuan':['chuan','nothumanzhivotnoe'],
  'sansheng':['sansheng'],'hao':['hao'],'mu':['mu'],
  'xiao8':['xiao8'],'yao':['yao'],'ddc':['ddc'],'dd':['dd'],
  'sylar':['sylar','alec'],'fy':['fy','fygod','qijirufeng'],
  'fenrir':['fenrir'],'super':['super'],'rotk':['rotk'],'lanm':['lanm'],'mmy':['mmy'],
  'iceiceice':['iceiceice','ice3','sanbing'],'ohaiyo':['ohaiyo'],
  'admirralbulldog':['admirralbulldog','bulldog'],'akke':['akke'],
  'egm':['egm'],'loda':['loda'],'fear':['fear','kaban'],'universe':['universe'],
  'zai':['zai'],'ppd':['ppd'],'bone7':['bone7'],
  'fata':['fata'],'pieliedie':['pieliedie'],'funn1k':['funn1k'],
  'hyhy':['hyhy'],'winter':['winter','wtr'],'yamateh':['yamateh'],
  'net':['net'],'kyxy':['kyxy'],'xtinct':['xtinct'],
  'xfreedom':['xfreedom'],'sharky':['sharky'],'357':['357'],'dai':['dai'],
  'arsart':['arsart'],'banana':['banana'],'kingj':['kingj'],
  'iceice':['iceice','lixiaoyou'],'cty':['cty'],'agressif':['agressif'],
  'shiki':['shiki'],'q':['q'],'xz':['xz'],'garder':['garder'],
  'moogy':['moogy'],'sccc':['sccc'],'kpii':['kpii'],'kaka':['kaka','xiangcaifensi'],
  'inflame':['inflame'],'ahfu':['ahfu'],'victoria':['victoria'],
  'oldchicken':['oldchicken'],'oldeleven':['oldeleven'],
  'sakata':['sakata'],'injuly':['injuly'],'dogf1ghts':['dogf1ghts'],
  'shadow':['shadow'],'blink':['blink'],
  'faithbian':['faithbian'],'y':['y','innocence'],'xnova':['xnova','lavie'],
  'xinq':['xinq','yandanlouyou'],'chalice':['chalice'],'nothingtosay':['nothingtosay','nts'],
  'jerax':['jerax'],'cr1t':['cr1t'],'rodjer':['rodjer'],
  'nine':['nine'],'resolut1on':['resolution'],
  'moo':['moo'],'misery':['misery'],'w33':['w33','w33ha'],
  'yapzor':['yapzor'],'midone':['midone'],'zayac':['zayac'],
  'micke':['micke'],'insania':['insania','maelle'],'boxi':['boxi'],
  'atf':['atf'],'taiga':['taiga','catharsis'],'misha':['misha'],
  'crystallis':['crystallis','kitr'],'fade':['fade'],
};

async function main() {
// Step 1: 字典匹配
console.log('═══ Step 1: 字典匹配 ═══');
const dict = JSON.parse(fs.readFileSync(DICT_FILE, 'utf8'));
const est = players.filter(p => p.source === 'estimated');
console.log('待匹配:', est.length, '字典:', Object.keys(dict).length);

let fixed = 0;
for (const p of est) {
  const n = norm(p.name);
  const aliases = ALIASES[n] || [n];
  for (const alias of aliases) {
    const al = norm(alias);
    if (dict[al] && dict[al].freq >= 2) {
      const newId = dict[al].id;
      if (newId !== p.account_id) {
        console.log('  ✓ ' + p.name + '@' + p.ti + ': ' + p.account_id + ' → ' + newId + ' (' + alias + ', ' + dict[al].freq + '次)');
        p.account_id = newId;
        fixed++;
        break;
      }
    }
  }
}
console.log('字典匹配: ' + fixed + '人\n');

// Step 2: 对仍未匹配的, 用OpenDota搜索
console.log('═══ Step 2: OpenDota搜索 ═══');
const remaining = players.filter(p => p.source === 'estimated');
// 去重
const unique = [...new Set(remaining.map(p => norm(p.name)))];

for (const name of unique.slice(0, 50)) { // 限制50次搜索
  if (LIMIT) break;
  const q = encodeURIComponent(name);
  process.stdout.write('  ' + name + '... ');
  const results = await api(BASE + '/search?q=' + q + '&similar=1');
  if (results?.length > 0) {
    const best = results[0];
    // 验证: personaname相似度
    const sn = norm(best.personaname || '');
    if (sn === name || sn.includes(name) || name.includes(sn)) {
      console.log('✓ ' + best.personaname + ' (' + best.account_id + ')');
      // 更新所有同名选手
      const targets = players.filter(p => p.source === 'estimated' && norm(p.name) === name);
      for (const t of targets) {
        t.account_id = best.account_id;
        fixed++;
      }
    } else {
      console.log('? ' + best.personaname + ' (sim too low)');
    }
  } else {
    console.log('✗ 未找到');
  }
}
console.log('搜索后总计: ' + fixed + '人\n');

// 保存
const apiCount = players.filter(p => p.source === 'api').length;
const estCount = players.filter(p => p.source === 'estimated').length;
console.log('API: ' + apiCount + '/' + players.length + ' Est: ' + estCount);
console.log('API调用: ' + cnt);

const out = raw
  .replace(/export const TI_PLAYERS\s*=\s*\[[\s\S]*?\];/, 'export const TI_PLAYERS = ' + JSON.stringify(players, null, 2) + ';')
  .replace(/export const DATA_SUMMARY\s*=\s*\{[\s\S]*?\};/, 'export const DATA_SUMMARY = { total: ' + players.length + ', api: ' + apiCount + ', estimated: ' + estCount + ' };');
fs.writeFileSync(OUT, out, 'utf8');
console.log('✅ 写入');
}
main().catch(e => { console.error('Fatal:', e); process.exit(1); });
