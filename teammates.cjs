/**
 * v2 — 按战队匹配队友, 防止匿名账号污染
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
      headers: {'Accept':'application/json','User-Agent':'TIDraft/TM2'}, timeout: 20000,
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
  cnt++; if(cnt>1) await sleep(1000);
  for(let i=0;i<3;i++){
    try{return await get(url);}catch(e){
      if(e.message==='RL'){LIMIT=true;return null;}
      if(i<2)await sleep(1500*(i+1));
    }
  }
  return null;
}

const TIS={TI4:600,TI5:2733,TI6:4664,TI7:5401,TI8:9870,TI9:10749,TI10:13256,TI11:14268,TI12:15728,TI13:16935};

const raw=fs.readFileSync(OUT,'utf8');
const pm=raw.match(/export const TI_PLAYERS = (\[[\s\S]*?\]);\n/);
const players=JSON.parse(pm[1]);

async function main(){
  // 按TI+Team分组
  const teamMap={};
  for(const p of players){
    const k=p.ti+'__'+p.team;
    if(!teamMap[k])teamMap[k]={ti:p.ti,team:p.team,api:[],est:[]};
    if(p.source==='api'&&p.account_id>1000)teamMap[k].api.push(p);
    else if(p.source==='estimated')teamMap[k].est.push(p);
  }

  let total=0;

  for(const [ti,meta] of Object.entries(TIS)){
    if(LIMIT)break;
    const tiTeams=Object.values(teamMap).filter(t=>t.ti===ti&&t.api.length>0&&t.est.length>0);
    if(!tiTeams.length){console.log(ti+': 无混合队');continue;}

    const ck='league_'+meta;
    const list=cache.leagueMatches?.[ck];
    if(!list?.length)continue;

    // API选手的ID集合
    const apiIds=new Set();
    tiTeams.forEach(t=>t.api.forEach(p=>apiIds.add(p.account_id)));

    // 收集: 在比赛中, API选手的同队其他人 → candidates
    const cands={}; // account_id → { count, teams: Set of (apiPlayerName) }
    const sorted=[...list].sort((a,b)=>b.match_id-a.match_id).slice(0,60);
    for(const m of sorted){
      if(LIMIT)break;
      const det=await api(BASE+'/matches/'+m.match_id);
      if(!det?.players){process.stdout.write('x');continue;}
      const found=det.players.filter(p=>apiIds.has(p.account_id));
      if(!found.length){process.stdout.write('.');continue;}

      // 确定每个API选手在哪一方
      for(const apiP of found){
        const side=Math.floor(apiP.player_slot/128); // 0=radiant, 1=dire
        const same=det.players.filter(p=>p.account_id&&p.account_id!==apiP.account_id&&Math.floor(p.player_slot/128)===side);
        for(const tm of same){
          const aid=tm.account_id;
          if(!cands[aid])cands[aid]={count:0,teams:new Set()};
          cands[aid].count++;
          cands[aid].teams.add(apiP.account_id); // 记录这个队友和哪个API选手同队过
        }
      }
      process.stdout.write('.');
    }

    // 分配: 对每支战队的estimated选手, 找最佳匹配
    let tiFound=0;
    const used=new Set();

    for(const team of tiTeams){
      const estNames=new Set(team.est.map(p=>p.name));
      // 该队API选手的ID
      const teamApiIds=new Set(team.api.map(p=>p.account_id));

      // 候选: 必须与该队的API选手同队过, 且不能与太多其他队的API选手同队
      const viable=[];
      for(const [aid,data]of Object.entries(cands)){
        const id=parseInt(aid);
        if(used.has(id))continue;
        // 要求至少2次出现, 且主要和本队API选手同队
        const withOurTeam=[...data.teams].filter(x=>teamApiIds.has(x)).length;
        const withOthers=data.teams.size-withOurTeam;
        if(data.count>=2 && withOurTeam>=1 && withOthers<=1){
          viable.push({id,count:data.count,withOurTeam,withOthers});
        }
      }
      viable.sort((a,b)=>b.count-a.count);

      // 取前N个 (不超过est数量)
      const take=Math.min(viable.length,team.est.length);
      for(let i=0;i<take;i++){
        const ep=team.est[i];
        console.log('  '+ep.name+'@'+ti+': '+ep.account_id+' → '+viable[i].id+' ('+viable[i].count+'次共现)');
        ep.account_id=viable[i].id;
        used.add(viable[i].id);
        tiFound++;
      }
    }
    console.log(ti+': '+tiFound+'人匹配');
    total+=tiFound;
  }

  console.log('\n总计:'+total+' | 调用:'+cnt);
  if(total>0){
    const apiCount=players.filter(p=>p.source==='api').length;
    const out=raw
      .replace(/export const TI_PLAYERS = \[[\s\S]*?\];\n/,`export const TI_PLAYERS = ${JSON.stringify(players,null,2)};\n`)
      .replace(/export const DATA_SUMMARY = \{[\s\S]*?\};/,`export const DATA_SUMMARY = { total: ${players.length}, api: ${apiCount}, estimated: ${players.length - apiCount} };`);
    fs.writeFileSync(OUT,out,'utf8');
    console.log('✅ 写入');
  }
}

main().catch(e=>{console.error('Fatal:',e);process.exit(1);});
