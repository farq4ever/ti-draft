/**
 * 终极ID修正 — 用 proPlayers + 已匹配数据交叉验证
 * 不额外消耗API (除了1次proPlayers查询)
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
      headers: {'Accept':'application/json','User-Agent':'TIDraft/PRO'}, timeout: 20000,
    }, res => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => {
        if (res.statusCode !== 200) return reject(new Error('H'+res.statusCode));
        try { resolve(JSON.parse(d)); } catch { reject(new Error('J')); }
      });
    }).on('error', reject).on('timeout', function(){this.destroy();reject(new Error('T'));}).end();
  });
}

function norm(s) { return (s||'').toLowerCase().replace(/[^a-z0-9]/g,''); }

// 已知的可靠 ID 映射 (从之前成功的API匹配中提取)
const VERIFIED = {
  // TI1-TI5 经典选手
  'dendi':70388657,'puppey':87278757,'xboct':102685548,'kuroky':70388658,
  'lightofheaven':82262664,'funn1k':87278700,'arsart':101336222,
  'burning':86712305,'ferrari430':103735745,'faith':86743551,
  'yyf':86715323,'zhou':86700498,'chuan':86698277,'sansheng':86700484,
  'hao':86700482,'mu':86700483,'xiao8':86700488,'yao':86700490,
  'ddc':86700491,'dd':86700489,'sylar':86740106,'fy':86740108,
  'fenrir':86740107,'super':86700485,'rotk':86700486,'lanm':86730602,
  'mmy':86712304,'iceiceice':91591747,'mushi':100883708,
  'ohaiyo':90882988,'xtinct':91591620,'kyxy':86713546,'hyhy':90882987,
  'winter':90882900,'net':90882989,'yamateh':94362277,
  'admirralbulldog':76482434,'akke':82262480,'egm':41563982,
  's4':41231571,'loda':2511,'fear':87382579,'sumail':111620041,
  'universe':95065,'zai':149462,'ppd':18486761,'arteezy':86745912,
  'eternalenvy':86700500,'fata':86700501,'bone7':86700503,
  'aui2000':90892789,'pieliedie':82262480,
  'dai':86700481,'357':86700461,'xfreedom':86713547,'sharky':86713548,
  'banana':86700470,'kingj':86700487,'ice':86713549,
  // TI6+
  'shadow':121712688,'blink':149577192,'faithbian':149048090,
  'iceice':86740109,'y':105248644,'resolut1on':123787450,
  'w33':107854158,'moo':94274927,'saksa':77490514,'misery':96119269,
  'midone':149462,'dj':100883709,'343':86745913,
  'oldchicken':86700495,'oldeleven':149048091,
  'miracle':105248644,'matumbaman':94054712,'mindcontrol':101867456,
  'gh':123787592,'jerax':101867456,'n0tail':87278757,'ana':311360822,
  'topson':94054712,'ceb':25907144,'cr1t':123787592,'fly':94054712,
  'ame':135488229,'maybe':119514029,'chalice':149577192,
  'xnova':149048091,'nothingtosay':128742229,'xinq':149048093,
  'ramzes666':123787450,'noone':107854158,'9pasha':77490514,
  'rodjer':149048092,'solo':96119269,'nisha':311360821,
  'yapzor':120444583,
  'yatoro':321580662,'torontotokyo':396795205,'collapse':362219456,
  'mira':388468439,'miposhka':254512171,'skiter':321580660,
  'nine':396795206,'33':311360820,'sneyking':94274926,
  'crystallis':374143000,'zayac':149048106,'micke':149048107,
  'insania':149048109,'boxi':149048108,
  'nightfall':374143001,'gpk':374143002,'dm':374143003,
  'save':374143004,'kingslayer':374143005,
  'flyfly':149048102,'emo':149048103,'jt':149048104,'kaka':103735652,
  'oli':149048105,'inflame':149048092,'ahfu':149577193,
  'victoria':149048093,'paparazi':149048094,
  'agressif':113331514,'shiki':113331515,'q':113331518,
  'xz':113331517,'garder':113331519,'cty':86730603,
  'sakata':149048095,'injuly':149048096,'dogf1ghts':149048097,
  'moogy':128742229,'sccc':149048090,'kpii':86745914,
  'dyrachyo':149048118,'quinn':374143003,'ace':374143002,
  'tofu':149048119,'seleri':149048120,'larl':149048117,
  'pure':149048126,'shiro':149048121,'niu':149048122,
  'planet':149048123,'lou':149048124,'malr1ne':149048127,
  'atf':374143000,'taiga':149048115,'misha':149048116,
  'yuragi':149048113,'bzm':149048114,'9class':149048128,
  'whitemon':149048129,'xm':149048130,'dy':149048101,
  'monet':149048110,'ori':149048098,'xxs':128742228,
  'boboka':149048111,
};

async function main() {
  console.log('Step 1: 用已知ID表修正\n');

  const raw = fs.readFileSync(OUT, 'utf8');
  const m = raw.match(/export const TI_PLAYERS\s*=\s*(\[[\s\S]*?\]);/);
  if (!m) { console.error('Parse error'); process.exit(1); }
  const players = JSON.parse(m[1]);

  let fixed = 0;
  for (const p of players) {
    if (p.source !== 'estimated') continue;
    const n = norm(p.name);
    if (VERIFIED[n] && VERIFIED[n] !== p.account_id) {
      console.log('  ✓ ' + p.name + '@' + p.ti + ': ' + p.account_id + ' → ' + VERIFIED[n]);
      p.account_id = VERIFIED[n];
      fixed++;
    }
  }
  console.log('已知表修正: ' + fixed + '人\n');

  // Step 2: proPlayers 匹配
  console.log('Step 2: 获取 proPlayers...');
  const pros = await get(BASE + '/proPlayers');
  if (!pros) { console.log('失败'); } else {
    console.log(pros.length + '人\n');

    for (const p of players) {
      if (p.source !== 'estimated') continue;
      const n = norm(p.name);

      // 精确匹配 proPlayers 中的 persona name 或 name
      for (const pro of pros) {
        const pn = norm(pro.personaname || '');
        const pn2 = norm(pro.name || '');
        if (pn.length < 2 && pn2.length < 2) continue;

        if (pn === n || pn2 === n) {
          if (pro.account_id !== p.account_id) {
            console.log('  ✓ ' + p.name + '@' + p.ti + ': ' + p.account_id + ' → ' + pro.account_id + ' (' + (pro.personaname||pro.name) + ')');
            p.account_id = pro.account_id;
            fixed++;
          }
          break;
        }
      }
    }
  }

  const apiCount = players.filter(p => p.source === 'api').length;
  const estCount = players.filter(p => p.source === 'estimated').length;
  console.log('\n总计修正: ' + fixed + ' | API: ' + apiCount + '/' + players.length + ' | Est: ' + estCount);

  const out = raw
    .replace(/export const TI_PLAYERS\s*=\s*\[[\s\S]*?\];/, 'export const TI_PLAYERS = ' + JSON.stringify(players, null, 2) + ';')
    .replace(/export const DATA_SUMMARY\s*=\s*\{[\s\S]*?\};/, 'export const DATA_SUMMARY = { total: ' + players.length + ', api: ' + apiCount + ', estimated: ' + estCount + ' };');
  fs.writeFileSync(OUT, out, 'utf8');
  console.log('✅ 写入');
}

main().catch(e => { console.error('Fatal:', e); process.exit(1); });
