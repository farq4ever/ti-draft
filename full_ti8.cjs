/**
 * TI8 全量采集 — 401场比赛全拉, 最大化覆盖率
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
      headers: {'Accept':'application/json','User-Agent':'TIDraft/FULL'}, timeout: 20000,
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

function norm(s) { return (s||'').toLowerCase().replace(/[^a-z0-9一-鿿]/g,''); }

// 合并了 grab_names 发现的新别名
const ALIASES = {
  'dendi':['dendi','snakemaster'],
  'puppey':['puppey','clament'],
  'xboct':['xboct','hvost'],
  'lightofheaven':['lightofheaven','loh','annajm'],
  'kuroky':['kuroky','kky','kuro'],
  'funn1k':['funn1k'],
  'burning':['burning','bgod'],
  'ferrari430':['ferrari430','ferrari','430','lostreakchicken'],
  'faith':['faith','uaena'],
  'yyf':['yyf'],
  'zhou':['zhou'],
  'chuan':['chuan','nothuman','nothumanzhivotnoe'],
  'sansheng':['sansheng'],
  'hao':['hao'],
  'mu':['mu'],
  'xiao8':['xiao8'],
  'yao':['yao'],
  'ddc':['ddc'],
  'dd':['dd'],
  'sylar':['sylar','alec'],
  'fy':['fy','fygod','qijirufeng'],
  'fenrir':['fenrir'],
  'super':['super'],
  'rotk':['rotk'],
  'lanm':['lanm'],
  'mmy':['mmy'],
  'mushi':['mushi','musheng','凯瑞王'],
  'ohaiyo':['ohaiyo'],
  'iceiceice':['iceiceice','ice3'],
  'admirralbulldog':['admirralbulldog','bulldog'],
  'akke':['akke'],
  'egm':['egm'],
  's4':['s4','carl'],
  'loda':['loda'],
  'fear':['fear','oldmanfear','kaban'],
  'sumail':['sumail','mercury','king'],
  'universe':['universe'],
  'zai':['zai'],
  'ppd':['ppd','peterdagger'],
  'arteezy':['arteezy','rtz'],
  'eternalenvy':['eternalenvy','ee'],
  'aui2000':['aui2000','aui','meowmeowcow'],
  'pieliedie':['pieliedie'],
  'ame':['ame','qu'],
  'maybe':['maybe','somnus'],
  'faithbian':['faithbian'],
  'y':['y','innocence'],
  'chalice':['chalice'],
  'xnova':['xnova','lavie'],
  'nothingtosay':['nothingtosay','nts'],
  'xinq':['xinq','yandanlouyou'],
  'miracle':['miracle'],
  'matumbaman':['matumbaman','matu'],
  'mindcontrol':['mindcontrol','mc'],
  'gh':['gh','gh2'],
  'jerax':['jerax'],
  'n0tail':['n0tail','notail','bigdaddy'],
  'ana':['ana'],
  'topson':['topson'],
  'ceb':['ceb','7ckngmad'],
  'cr1t':['cr1t'],
  'fly':['fly'],
  'ramzes666':['ramzes666','666'],
  'noone':['noone','havefun'],
  '9pasha':['9pasha'],
  'rodjer':['rodjer'],
  'solo':['solo'],
  'nisha':['nisha','musor'],
  'yapzor':['yapzor'],
  'yatoro':['yatoro','kaelthas'],
  'torontotokyo':['torontotokyo'],
  'collapse':['collapse','pos3jungler'],
  'mira':['mira','tweekin'],
  'miposhka':['miposhka'],
  'skiter':['skiter'],
  'nine':['nine'],
  '33':['33','nothuman'],
  'saksa':['saksa'],
  'sneyking':['sneyking'],
  'micke':['micke'],
  'insania':['insania','maelle'],
  'boxi':['boxi'],
  'shadow':['shadow'],
  'blink':['blink'],
  'w33':['w33','w33ha'],
  'resolut1on':['resolution'],
  'moo':['moo'],
  'misery':['misery'],
  'iceice':['iceice','lixiaoyou'],
  'oldchicken':['oldchicken'],
  'oldeleven':['oldeleven'],
  'kaka':['kaka','xiangcaifensi'],
  'inflame':['inflame'],
  'ori':['ori'],
  'monet':['monet','lihuowang'],
  'xxs':['xxs'],
  'boboka':['boboka'],
  'emo':['emo','zhuiliezhe'],
  'flyfly':['flyfly','999'],
  'oli':['oli','okok'],
  'nightfall':['nightfall','modem0nesy'],
  'gpk':['gpk'],
  'dm':['dm','bangkok'],
  'save':['save'],
  'kingslayer':['kingslayer'],
  'crystallis':['crystallis','kitr'],
  'dyrachyo':['dyrachyo','maincharacter'],
  'quinn':['quinn','ccnc','antediluvian'],
  'ace':['ace','orbwalk'],
  'tofu':['tofu'],
  'seleri':['seleri'],
  'larl':['larl','londong'],
  'pure':['pure','hauntu'],
  'shiro':['shiro','roselia'],
  'niu':['niu'],
  'planet':['planet','jing'],
  'lou':['lou','present'],
  'malr1ne':['malr1ne'],
  'atf':['atf'],
  'taiga':['taiga','catharsis'],
  'misha':['misha'],
  'yuragi':['yuragi','fullrewire'],
  'bzm':['bzm','basedmeander'],
  '9class':['9class','pele'],
  'whitemon':['whitemon','nongmon'],
  'xm':['xm'],
  'dy':['dy','mczhilong'],
  'winter':['winter','wtr'],
  'yamateh':['yamateh','razerorangeyamateh'],
};

function matchPlayer(apiName, ourName) {
  const a = norm(apiName);
  if (!a || a.length < 2) return false;
  const n = norm(ourName);
  if (a === n) return true;
  const aliases = ALIASES[n] || [];
  for (const alias of aliases) {
    const al = norm(alias);
    if (!al || al.length < 2) continue;
    if (a === al) return true;
    if (al.length >= 5 && a.includes(al)) return true;
    if (a.length >= 5 && al.includes(a)) return true;
  }
  if (n.length >= 4 && a.includes(n)) return true;
  if (a.length >= 4 && n.includes(a)) return true;
  return false;
}

const raw = fs.readFileSync(OUT, 'utf8');
const pm = raw.match(/export const TI_PLAYERS = (\[[\s\S]*?\]);\n/);
const players = JSON.parse(pm[1]);
const startApi = players.filter(p=>p.source==='api').length;
console.log(`开始: API ${startApi}/${players.length}\n`);

// 只处理TI8
const ti8players = players.filter(p => p.ti === 'TI8');

async function main() {
  const list = cache.leagueMatches?.league_9870;
  if (!list?.length) { console.log('无TI8数据'); return; }

  console.log(`TI8: ${list.length}场全部拉取\n`);

  let idFixed = 0, details = 0, newApi = 0;
  for (let i = 0; i < list.length; i++) {
    if (LIMIT) break;
    const m = list[i];
    if (i % 50 === 0) process.stdout.write(`\n  ${i}/${list.length} `);

    const det = await api(`${BASE}/matches/${m.match_id}`);
    if (!det?.players) { process.stdout.write('x'); continue; }

    for (const p of det.players) {
      if (!p.account_id) continue;
      const pn = p.personaname || '';

      for (const t of ti8players) {
        if (!matchPlayer(pn, t.name)) continue;

        // 匹配! 更新ID
        if (t.account_id !== p.account_id) {
          t.account_id = p.account_id; idFixed++;
        }

        // 累积
        if (!t._acc) {
          t._acc = { gpm:[], xpm:[], obs:[], sen:[], stacks:[], lane:[], kills:[], deaths:[], assists:[], heroes:new Set() };
        }
        const ac = t._acc;
        if ((p.gold_per_min||0) > 0) ac.gpm.push(p.gold_per_min);
        if ((p.xp_per_min||0) > 0) ac.xpm.push(p.xp_per_min);
        if ((p.obs_placed||0) > 0) ac.obs.push(p.obs_placed);
        if ((p.sen_placed||0) > 0) ac.sen.push(p.sen_placed);
        if ((p.camps_stacked||0) > 0) ac.stacks.push(p.camps_stacked);
        if ((p.lh_t||[])[1] > 0) ac.lane.push(p.lh_t[1]);
        if ((p.kills||0)+(p.deaths||0)+(p.assists||0) > 0) {
          ac.kills.push(p.kills||0); ac.deaths.push(p.deaths||0); ac.assists.push(p.assists||0);
        }
        if (p.hero_id) ac.heroes.add(p.hero_id);
        details++;
        break;
      }
    }
    process.stdout.write('.');
  }

  // 应用累积数据
  for (const t of ti8players) {
    if (!t._acc) continue;
    const ac = t._acc;
    const avg = arr => arr.length ? Math.round(arr.reduce((s,x)=>s+x,0)/arr.length*10)/10 : null;
    const s = t.stats;
    if (ac.gpm.length > 0) s.gpm = avg(ac.gpm);
    if (ac.xpm.length > 0) s.xpm = avg(ac.xpm);
    if (ac.obs.length > 0) s.obs_placed = avg(ac.obs);
    if (ac.sen.length > 0) s.sen_placed = avg(ac.sen);
    if (ac.stacks.length > 0) s.stacks = avg(ac.stacks);
    if (ac.lane.length > 0) s.lane_eff = Math.round(avg(ac.lane)/70*100);
    if (ac.kills.length > 0) {
      const k=ac.kills.reduce((s,x)=>s+x,0), d=ac.deaths.reduce((s,x)=>s+x,0), a=ac.assists.reduce((s,x)=>s+x,0);
      s.kda = d>0 ? Math.round((k+a)/d*10)/10 : (k+a);
      s.assists = avg(ac.assists);
    }
    if (ac.heroes.size > 0) s.hero_pool = ac.heroes.size;
    if (t.source === 'estimated') { t.source = 'api'; newApi++; }
    t.matchCount = ac.gpm.length || 1;
    t._detail = ac.gpm.length;
    delete t._acc;
  }

  const apiCount = players.filter(p=>p.source==='api').length;
  const detCount = players.filter(p=>p._detail).length;
  console.log(`\n\nTI8: ID修正${idFixed} 详情${details} 新API${newApi}`);
  console.log(`总计: API ${apiCount}/${players.length} (${Math.round(apiCount/players.length*100)}%)`);
  console.log(`有详情: ${detCount} | 调用: ${cnt}`);
  if (LIMIT) console.log('⛔ 限额');

  const out = raw
    .replace(/export const TI_PLAYERS = \[[\s\S]*?\];\n/, `export const TI_PLAYERS = ${JSON.stringify(players, null, 2)};\n`)
    .replace(/export const DATA_SUMMARY = \{[\s\S]*?\};/, `export const DATA_SUMMARY = { total: ${players.length}, api: ${apiCount}, estimated: ${players.length - apiCount} };`);
  fs.writeFileSync(OUT, out, 'utf8');
  console.log('✅ 写入');
}

main().catch(e => { console.error('Fatal:', e); process.exit(1); });
