/**
 * 智能采集 — 比赛详情 + personaname匹配 + ID自动修正
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
      headers: {'Accept':'application/json','User-Agent':'TIDraft/SMART'}, timeout: 20000,
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

// 扩充别名 (添加已知Steam名)
const ALIASES = {
  'dendi':['dendi','dendimon','snakemaster'],
  'puppey':['puppey','clament'],
  'xboct':['xboct','hvost'],
  'lightofheaven':['lightofheaven','loh'],
  'kuroky':['kuroky','kky','kuro'],
  'funn1k':['funn1k'],
  'burning':['burning','bgod','xulei','b'],
  'ferrari430':['ferrari430','ferrari','430','thepianist'],
  'faith':['faith','uaena','zenghongda'],
  'yyf':['yyf','jiangcen'],
  'zhou':['zhou','chenyao'],
  'chuan':['chuan','nothuman','wonghockchuan'],
  'sansheng':['sansheng','wangzhaohui'],
  'hao':['hao','chenzhihao'],
  'mu':['mu','zhangpan','smallson'],
  'xiao8':['xiao8','zhangning'],
  'yao':['yao','yaozhengzheng'],
  'ddc':['ddc','liangfaming'],
  'dd':['dd','xiebin'],
  'sylar':['sylar','liujiajun'],
  'fy':['fy','fygod','qijirufeng'],
  'fenrir':['fenrir','luchao'],
  'super':['super','xiejunhao'],
  'rotk':['rotk','baifan','laoduichang'],
  'lanm':['lanm','zhangzhicheng','guotushiwei'],
  'mmy':['mmy','weaponx','leizengrong','x!!'],
  'mushi':['mushi','musheng','chaiyeefung','凯瑞王','牧神'],
  'ohaiyo':['ohaiyo','khoochongxin'],
  'xtinct':['xtinct','joelchan'],
  'kyxy':['kyxy','leekangyang'],
  'iceiceice':['iceiceice','ice3','darylkoh','sanbing'],
  'admirralbulldog':['admirralbulldog','bulldog','henrikahnberg'],
  'akke':['akke','joakimakterhall'],
  'egm':['egm','jerrylundkvist'],
  's4':['s4','gustavmagnusson','carl'],
  'loda':['loda','jonathanberg'],
  'fear':['fear','clintonloomis','oldmanfear'],
  'sumail':['sumail','sumailhassan','mercury','king'],
  'universe':['universe','saahilarora'],
  'zai':['zai','ludwigwahlberg'],
  'ppd':['ppd','peterdagger','peter'],
  'arteezy':['arteezy','artourbabaev','rtz'],
  'eternalenvy':['eternalenvy','jackymao','ee'],
  'fata':['fata','adriantrinks'],
  'aui2000':['aui2000','kurtisling','aui','meowmeowcow'],
  'pieliedie':['pieliedie','johanastrom'],
  'bone7':['bone7','pittnerarmand'],
  'ame':['ame','wangchunyu','xiaose','qu'],
  'maybe':['maybe','luyao','somnus'],
  'faithbian':['faithbian','zhangruida'],
  'y':['y','zhangyiping','innocence'],
  'chalice':['chalice','yangshenyi'],
  'xnova':['xnova','yapjianwei','lavie'],
  'nothingtosay':['nothingtosay','chengjinxiang','nts'],
  'xinq':['xinq','zhaozixing','qyqx','yandanlouyou'],
  'miracle':['miracle','ameralbarkawi'],
  'matumbaman':['matumbaman','lasseurpalainen','matu'],
  'mindcontrol':['mindcontrol','ivanivanov','mc'],
  'gh':['gh','marounmerhej','gh2'],
  'jerax':['jerax','jesivainikka'],
  'n0tail':['n0tail','johansundstein','bigdaddy','notail'],
  'ana':['ana','anathanpham','god'],
  'topson':['topson','topiastaavitsainen'],
  'ceb':['ceb','sebastiendebs','7ckngmad'],
  'cr1t':['cr1t','andreasnielsen'],
  'fly':['fly','talaizik'],
  'ramzes666':['ramzes666','romankushnarev','666'],
  'noone':['noone','vladimirmenko','havefun'],
  '9pasha':['9pasha','pavelkhvastunov'],
  'rodjer':['rodjer','vladimirnikogosyan'],
  'solo':['solo','alexei berezin'],
  'nisha':['nisha','michaljankowski','musor'],
  'yapzor':['yapzor','yaziedjaradat'],
  'w33':['w33','aliwiomar','w33ha'],
  'resolut1on':['resolution','romanfominok'],
  'saksa':['saksa','martinsazdov'],
  'misery':['misery','rasmussfilipsen'],
  'moo':['moo','davidhull'],
  'yatoro':['yatoro','iliamulyarchuk','kaelthas'],
  'torontotokyo':['torontotokyo','alexanderkhertek'],
  'collapse':['collapse','magomedkhalilov','pos3jungler'],
  'mira':['mira','miroslawkolpakov','tweekin'],
  'miposhka':['miposhka','yaroslavnaidenov'],
  'skiter':['skiter','oliverlepko','goingtobethebestcarry'],
  'nine':['nine','leonkirilin'],
  '33':['33','netashapira','nothuman'],
  'sneyking':['sneyking','wujingjun'],
  'crystallis':['crystallis','remcoarets','kitr'],
  'nisha':['nisha','michaljankowski','musor'],
  'zayac':['zayac','bakytemilzhanov'],
  'micke':['micke'],
  'insania':['insania','maelle'],
  'boxi':['boxi'],
  'monet':['monet','dupeng','lihuowang'],
  'ori':['ori','zengjiaoyang'],
  'xxs':['xxs','linjing'],
  'boboka':['boboka','yezhibiao'],
  'dyrachyo':['dyrachyo','antonshkredov','maincharacter'],
  'quinn':['quinn','quinncallahan','ccnc','antediluvian'],
  'ace':['ace','marcushoelgaard','orbwalk'],
  'tofu':['tofu','erikengel'],
  'seleri':['seleri','melchiorhillenkamp'],
  'larl':['larl','denissigitov','londong'],
  'pure':['pure','ivanmoskalenko','hauntu'],
  'nightfall':['nightfall','egorgrigorenko','modem0nesy'],
  'gpk':['gpk','danilskutin'],
  'dm':['dm','dmitrydorokhin','bangkok'],
  'save':['save','vitailiemelnic'],
  'kingslayer':['kingslayer','ilyaderiglazov','kingslayer'],
  'flyfly':['flyfly','jinzhiyi','999'],
  'emo':['emo','zhouyi','zhuiliezhe'],
  'jt':['jt','thiayjunwen'],
  'oli':['oli','chanchonkien','okok'],
  'kaka':['kaka','huliangzhi','xiangcaifensi'],
  'inflame':['inflame','heyongzheng'],
  'ahfu':['ahfu','chuangyongfu'],
  'victoria':['victoria','chenguanhong'],
  'paparazi':['paparazi','zhangchengjun'],
  'agressif':['agressif','sunzheng'],
  'shiki':['shiki','huangjiwei'],
  'q':['q','fubin'],
  'xz':['xz','chenzezhi'],
  'garder':['garder','xuanhaolin'],
  'cty':['cty','chentianyu','late'],
  'oldchicken':['oldchicken','wangzhiyong','oldchicken'],
  'oldeleven':['oldeleven','renzhengwei'],
  'shadow':['shadow','chuzeyu','notidelshadow'],
  'blink':['blink','zhouyang','tiaodaotiaodao'],
  'iceice':['iceice','lipeng','erbing','lixiaoyou'],
  'shadow':['shadow','chuzeyu'],
  'moogy':['moogy','xuhan'],
  'sccc':['sccc','songchun'],
  'kpii':['kpii','damienchok'],
  'sakata':['sakata'],
  'injuly':['injuly'],
  'dogf1ghts':['dogf1ghts'],
  'shiro':['shiro','guoxuanang','roselia'],
  'niu':['niu','likongbo'],
  'planet':['planet','linhao','jing'],
  'lou':['lou','louzhen','present'],
  'malr1ne':['malr1ne','stanislavpotorak'],
  'atf':['atf','amiralassaf'],
  'taiga':['taiga','tommyle','catharsis'],
  'misha':['misha','mikhailagatov'],
  'yuragi':['yuragi','artemgolubev','fullrewire'],
  'bzm':['bzm','bozhidarbogdanov','basedmeander'],
  '9class':['9class','edgarnaltakyan','pele'],
  'whitemon':['whitemon','matthewfilemon','nongmon'],
  'xm':['xm','guohongcheng'],
  'dy':['dy','dingcong','mczhilong'],
  'hyhy':['hyhy','benedictlim'],
  'winter':['winter','chanlittbinn','wtr'],
  'yamateh':['yamateh'],
  'net':['net'],
  'banana':['banana'],
  'kingj':['kingj'],
  'xfreedom':['xfreedom'],
  'sharky':['sharky'],
  '357':['357'],
  'dai':['dai'],
  'arsart':['arsart','smile'],
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
    // 长名包含 (≥5字符)
    if (al.length >= 5 && a.includes(al)) return true;
    if (a.length >= 5 && al.includes(a)) return true;
  }
  // 宽松匹配: API名包含玩家名或反之 (≥4字符)
  if (n.length >= 4 && a.includes(n)) return true;
  if (a.length >= 4 && n.includes(a)) return true;
  return false;
}

const POS_DEF = {
  1: { gpm:580, xpm:640, kda:3.5, lane_eff:54, hero_pool:10, assists:8,  obs_placed:2, sen_placed:1, obs_denied:42, stacks:1 },
  2: { gpm:560, xpm:640, kda:3.7, lane_eff:53, hero_pool:14, assists:10, obs_placed:3, sen_placed:1, obs_denied:44, stacks:2 },
  3: { gpm:420, xpm:490, kda:3.0, lane_eff:45, hero_pool:18, assists:14, obs_placed:7, sen_placed:3, obs_denied:52, stacks:7 },
  4: { gpm:310, xpm:390, kda:3.1, lane_eff:43, hero_pool:22, assists:22, obs_placed:14, sen_placed:10, obs_denied:66, stacks:6 },
  5: { gpm:270, xpm:345, kda:2.8, lane_eff:42, hero_pool:20, assists:24, obs_placed:18, sen_placed:14, obs_denied:70, stacks:4 },
};

const TIS = {
  TI4:{lid:600}, TI5:{lid:2733}, TI6:{lid:4664}, TI7:{lid:5401},
  TI8:{lid:9870}, TI9:{lid:10749}, TI10:{lid:13256}, TI11:{lid:14268},
  TI12:{lid:15728}, TI13:{lid:16935},
};

const raw = fs.readFileSync(OUT, 'utf8');
const pm = raw.match(/export const TI_PLAYERS = (\[[\s\S]*?\]);\n/);
if (!pm) { console.error('解析失败'); process.exit(1); }
const players = JSON.parse(pm[1]);
const startApi = players.filter(p=>p.source==='api').length;
console.log(`开始: API ${startApi}/${players.length}\n`);

async function main() {
  let idFixed = 0, statsUpdated = 0, newApi = 0;

  // 按TI名字建索引
  const byTi = {};
  for (const p of players) {
    if (!byTi[p.ti]) byTi[p.ti] = [];
    byTi[p.ti].push(p);
  }

  for (const [tiKey, meta] of Object.entries(TIS)) {
    if (LIMIT) break;
    const ck = 'league_' + meta.lid;
    const list = cache.leagueMatches?.[ck];
    if (!list?.length) continue;

    // 按match_id降序, 取前40场(最新=最可能正赛)
    const sorted = [...list].sort((a,b)=>b.match_id-a.match_id).slice(0,60);
    console.log(`\n${tiKey}: ${sorted.length}场 (最高ID:${sorted[0]?.match_id})`);

    let tiId=0, tiStats=0, tiNew=0;
    for (const m of sorted) {
      if (LIMIT) break;
      const det = await api(`${BASE}/matches/${m.match_id}`);
      if (!det?.players) { process.stdout.write('x'); continue; }

      for (const p of det.players) {
        if (!p.account_id) continue;
        const pn = p.personaname || '';

        // 找匹配的数据库选手
        const targets = byTi[tiKey] || [];
        for (const t of targets) {
          if (!matchPlayer(pn, t.name)) continue;

          // 匹配成功! 更新ID
          if (t.account_id !== p.account_id) {
            t.account_id = p.account_id;
            tiId++;
          }

          // 累积数据 (用于多场比赛平均)
          if (!t._acc) {
            t._acc = { gpm:[], xpm:[], kda:[], obs:[], sen:[], stacks:[], lane:[], kills:[], deaths:[], assists:[], heroes:new Set() };
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
          tiStats++;
          break; // 已匹配,停搜
        }
      }
      process.stdout.write('.');
    }
    console.log(` ID:${tiId} 详情:${tiStats} 新API:${tiNew}`);
    idFixed += tiId; statsUpdated += tiStats; newApi += tiNew;
  }

  // 应用累积数据 (计算平均值)
  let applied = 0;
  for (const p of players) {
    if (!p._acc) continue;
    const ac = p._acc;
    const avg = arr => arr.length ? Math.round(arr.reduce((s,x)=>s+x,0)/arr.length*10)/10 : null;
    const s = p.stats;
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
    if (p.source === 'estimated') { p.source = 'api'; newApi++; }
    p.matchCount = ac.gpm.length || 1;
    p._detail = ac.gpm.length;
    applied++;
    delete p._acc;
  }
  console.log(`应用数据: ${applied}人`);

  const apiCount = players.filter(p=>p.source==='api').length;
  const detCount = players.filter(p=>p._detail).length;
  console.log(`\n══════════════════`);
  console.log(`ID修正: ${idFixed} | 详情: ${statsUpdated} | 新API: ${newApi}`);
  console.log(`API: ${apiCount}/${players.length} (${Math.round(apiCount/players.length*100)}%)`);
  console.log(`有详情: ${detCount}`);
  console.log(`API调用: ${cnt}`);
  if (LIMIT) console.log('⛔ 限额');
  console.log('══════════════════');

  const out = raw
    .replace(/export const TI_PLAYERS = \[[\s\S]*?\];\n/, `export const TI_PLAYERS = ${JSON.stringify(players, null, 2)};\n`)
    .replace(/export const DATA_SUMMARY = \{[\s\S]*?\};/, `export const DATA_SUMMARY = { total: ${players.length}, api: ${apiCount}, estimated: ${players.length - apiCount} };`);
  fs.writeFileSync(OUT, out, 'utf8');
  console.log('✅ 写入');
}

main().catch(e => { console.error('Fatal:', e); process.exit(1); });
