import { TI_PLAYERS as _TI_PLAYERS, TI_POOLS as _TI_POOLS, POSITION_METRICS } from './data/ti_all_players.js';

// 隐藏TI1 (OpenDota无2011年数据)
export const TI_PLAYERS = _TI_PLAYERS.filter(p => p.ti !== 'TI1');
export const TI_POOLS = (() => {
  const pools = {};
  TI_PLAYERS.forEach(p => {
    const key = p.team + '__' + p.ti;
    if (!pools[key]) pools[key] = { team: p.team, ti: p.ti, players: [] };
    pools[key].players.push(p);
  });
  return pools;
})();
export { POSITION_METRICS };

export const DIMINISHING_WEIGHTS = [1.0, 0.75, 0.55, 0.40, 0.30];

// 满分基准
// 评分基准 (调整到生涯均值水平, 适配现有数据)
export const BENCHMARKS = {
  1: { gpm: 620, xpm: 680, kda: 5.0, lane_eff: 55, hero_pool: 14 },
  2: { gpm: 580, kda: 4.5, xpm: 650, hero_pool: 16, lane_eff: 55 },
  3: { kda: 3.8, stacks: 8, lane_eff: 48, gpm: 460, assists: 18 },
  4: { assists: 22, sen_placed: 14, obs_denied: 65, stacks: 10, kda: 3.5 },
  5: { sen_placed: 16, obs_placed: 18, obs_denied: 65, assists: 24, lane_eff: 50 },
};

// 位置标签
export const POS_LABELS = { 1:'Carry', 2:'Mid', 3:'Offlane', 4:'Soft Sup', 5:'Hard Sup' };

// 位置数据展示
export const POS_DISPLAY = {
  1:[{k:'gpm',l:'GPM',f:v=>Math.round(v)},{k:'xpm',l:'XPM',f:v=>Math.round(v)},{k:'kda',l:'KDA',f:v=>v?.toFixed(1)},{k:'lane_eff',l:'线优率',f:v=>Math.round(v)+'%'},{k:'hero_pool',l:'英雄池',f:v=>Math.round(v)}],
  2:[{k:'gpm',l:'GPM',f:v=>Math.round(v)},{k:'kda',l:'KDA',f:v=>v?.toFixed(1)},{k:'xpm',l:'XPM',f:v=>Math.round(v)},{k:'hero_pool',l:'英雄池',f:v=>Math.round(v)},{k:'lane_eff',l:'线优率',f:v=>Math.round(v)+'%'}],
  3:[{k:'kda',l:'KDA',f:v=>v?.toFixed(1)},{k:'stacks',l:'叠野',f:v=>v?.toFixed(1)},{k:'lane_eff',l:'线优率',f:v=>Math.round(v)+'%'},{k:'gpm',l:'GPM',f:v=>Math.round(v)},{k:'assists',l:'助攻',f:v=>v?.toFixed(1)}],
  4:[{k:'assists',l:'助攻',f:v=>v?.toFixed(1)},{k:'sen_placed',l:'真眼',f:v=>v?.toFixed(1)},{k:'obs_denied',l:'排眼率',f:v=>Math.round(v)+'%'},{k:'stacks',l:'叠野',f:v=>v?.toFixed(1)},{k:'kda',l:'KDA',f:v=>v?.toFixed(1)}],
  5:[{k:'sen_placed',l:'真眼',f:v=>v?.toFixed(1)},{k:'obs_placed',l:'假眼',f:v=>v?.toFixed(1)},{k:'obs_denied',l:'排眼率',f:v=>Math.round(v)+'%'},{k:'assists',l:'助攻',f:v=>v?.toFixed(1)},{k:'lane_eff',l:'线优率',f:v=>Math.round(v)+'%'}],
};

// 选手位置评分
export function playerScore(player, pos) {
  const m = POSITION_METRICS[pos], b = BENCHMARKS[pos];
  if (!m || !b) return 50;
  let t = 0;
  m.forEach((k, i) => { const v = player.stats?.[k] || 0; t += Math.min(v / (b[k] || 1), 1.0) * 100 * (5 - i) / 15; });
  return Math.round(t);
}

// ═══════════════ 化学反应 ═══════════════
const REGIONS = {
  'Dendi':'EU','Puppey':'EU','XBOCT':'EU','LighTofHeaveN':'EU','ARS-ART':'EU','KuroKy':'EU','Funn1k':'EU',
  's4':'EU','AdmiralBulldog':'EU','Akke':'EU','EGM':'EU','Loda':'EU','Miracle-':'EU','MATUMBAMAN':'EU',
  'MinD_ContRoL':'EU','GH':'EU','JerAx':'EU','N0tail':'EU','Ana':'OCE','Topson':'EU','Ceb':'EU',
  'Cr1t-':'EU','Fly':'EU','Nisha':'EU','YapzOr':'EU','w33':'EU','Resolut1on':'EU','Saksa':'EU','MiSeRy':'EU',
  'Zai':'EU','ppd':'NA','Fear':'NA','SumaiL':'NA','Universe':'NA','Arteezy':'NA','EternalEnvy':'NA',
  'FATA-':'EU','Aui_2000':'NA','pieliedie':'EU','Bone7':'EU','RAMZES666':'EU','No[o]ne':'EU','9pasha':'EU',
  'RodjER':'EU','Solo':'EU','Nightfall':'EU','gpk~':'EU','Save-':'EU','Pure':'EU','DM':'EU',
  'Yatoro':'EU','TORONTOTOKYO':'EU','Collapse':'EU','Mira':'EU','Miposhka':'EU','Larl':'EU',
  '33':'EU','skiter':'EU','Nine':'EU','Sneyking':'NA','Quinn':'NA','Ace':'EU','tOfu':'EU','Seleri':'EU',
  'dyrachyo':'EU','MieRo':'EU','Crystallis':'EU','Zayac':'EU','Bzm':'EU','ATF':'EU','Taiga':'EU','Misha':'EU','Yuragi':'EU',
  'Malr1ne':'EU','9Class':'EU','Whitemon':'SEA',
  'Mushi':'SEA','hyhy':'SEA','XtiNcT':'SEA','ky.xY':'SEA','Winter':'SEA','Yamateh':'SEA','Ohaiyo':'SEA',
  'MidOne':'SEA','DJ':'SEA','343':'SEA','Net':'SEA','Ice':'SEA','ChuaN':'SEA','iceiceice':'SEA',
  'NothingToSay':'SEA','xNova':'SEA','ah fu':'SEA','Kpii':'SEA','JT-':'SEA','Oli~':'SEA',
  'BurNIng':'CN','MMY':'CN','LaNm':'CN','Ferrari_430':'CN','Faith':'CN','YYF':'CN','Zhou':'CN',
  'SanSheng':'CN','Hao':'CN','Mu':'CN','xiao8':'CN','Yao':'CN','DDC':'CN','DD':'CN','Sylar':'CN',
  'fy':'CN','Fenrir':'CN','iceice':'CN','Super':'CN','rotk':'CN','Ame':'CN','Maybe':'CN',
  'Faith_bian':'CN','y`':'CN','Chalice':'CN','XinQ':'CN','shadow':'CN','bLink':'CN',
  'old chicken':'CN','old eLeVeN':'CN','Agressif':'CN','Shiki':'CN','Xz':'CN','Q':'CN','Garder':'CN',
  'Cty':'CN','Banana':'CN','KingJ':'CN','Kaka':'CN','Sccc':'CN','Moogy':'CN','Paparazi灬':'CN',
  'Ori':'CN','Yang':'CN','Fade':'CN','Dy':'CN','Inflame':'CN','Victoria':'CN','Op':'CN','BoBoKa':'CN',
  'Xxs':'CN','Monet':'CN','Emo':'CN','flyfly':'CN','shiro':'CN','niu':'CN','planet':'CN','Lou':'CN',
  '天命':'CN','Xm':'CN','皮球':'CN','Sakata':'CN','InJuly':'CN','dogf1ghts':'CN','super':'CN',
  'RGC':'SEA','xFreedom':'SEA','HYHY':'SEA','Dai':'CN','357':'CN',
};

export function calcChemistry(roster) {
  let bonus = 0;
  const details = [];
  const players = Object.values(roster).filter(Boolean);
  if (players.length < 5) return { bonus: 0, details: [] };
  const names = players.map(p => p.name);
  const tis = players.map(p => p.ti);
  const teams = players.map(p => p.team);
  const regions = names.map(n => REGIONS[n] || '??');

  // 统计各属性出现次数，取最大值作为"核心羁绊"
  const freq = arr => { const m = {}; arr.forEach(x => { m[x] = (m[x]||0)+1; }); return Math.max(...Object.values(m)); };
  const modeVal = arr => { const m = {}; arr.forEach(x => { m[x] = (m[x]||0)+1; }); return Object.entries(m).sort((a,b)=>b[1]-a[1])[0]; };

  // 同队：最多几人同队
  const sameTeam = freq(teams);
  if (sameTeam >= 2) { bonus += sameTeam; details.push(`${sameTeam}人同队 (+${sameTeam})`); }

  // 同TI：最多几人同届
  const sameTI = freq(tis);
  if (sameTI >= 2) { bonus += sameTI; details.push(`${sameTI}人同届TI (+${sameTI})`); }

  // 同赛区：最多几人同区
  const validRegions = regions.filter(r => r !== '??');
  const sameRegion = freq(validRegions);
  if (sameRegion >= 2) { bonus += sameRegion; details.push(`${sameRegion}人同赛区 (+${sameRegion})`); }

  // 5个不同TI
  if (new Set(tis).size === 5) { bonus += 2; details.push('跨越时代 +2'); }
  // 4+赛区
  if (new Set(validRegions).size >= 4) { bonus += 1; details.push('四海为家 +1'); }

  return { bonus, details };
}

// ═══════════════ 隐藏属性 ═══════════════
const HIDDEN_TRAITS = [
  { id:'clutch',   label:'大心脏',    desc:'KDA +10%',   fx: p => { p.stats.kda = Math.round(p.stats.kda*1.1*10)/10; } },
  { id:'laner',    label:'对线王',    desc:'线优率 +15%', fx: p => { p.stats.lane_eff = Math.round(p.stats.lane_eff*1.15); } },
  { id:'versatile',label:'绝活海',    desc:'英雄池 +3',   fx: p => { p.stats.hero_pool = (p.stats.hero_pool||10)+3; } },
  { id:'warden',   label:'视野大师',  desc:'真假眼 +30%', fx: p => { p.stats.obs_placed = Math.round(p.stats.obs_placed*1.3); p.stats.sen_placed = Math.round(p.stats.sen_placed*1.3); } },
  { id:'farmer',   label:'刷子',      desc:'GPM +15%',    fx: p => { p.stats.gpm = Math.round(p.stats.gpm*1.15); } },
  { id:'fighter',  label:'节奏发动机',desc:'KDA&助攻 +8%',fx: p => { p.stats.kda = Math.round(p.stats.kda*1.08*10)/10; p.stats.assists = Math.round(p.stats.assists*1.08*10)/10; } },
  { id:'stacker',  label:'远古囤矿',  desc:'叠野 +3',     fx: p => { p.stats.stacks = Math.round((p.stats.stacks||0)+3); } },
  { id:'denier',   label:'反眼狂魔',  desc:'排眼率 +25%', fx: p => { p.stats.obs_denied = Math.min(Math.round(p.stats.obs_denied*1.25), 99); } },
  { id:'captain',  label:'TI老将',    desc:'全属性微升',  fx: p => { Object.keys(p.stats).forEach(k => { if(typeof p.stats[k]==='number') p.stats[k]=Math.round(p.stats[k]*1.05*10)/10; }); } },
];

export function assignHiddenTraits(players) {
  return players.map(p => {
    const count = Math.random() < 0.02 ? 2 : Math.random() < 0.08 ? 1 : 0;
    if (count === 0) return { ...p, traits: [] };
    const shuffled = [...HIDDEN_TRAITS].sort(() => Math.random() - 0.5);
    const assigned = shuffled.slice(0, count);
    const p2 = JSON.parse(JSON.stringify(p));
    assigned.forEach(t => t.fx(p2));
    return { ...p2, traits: assigned, _originalScore: p.score };
  });
}

// ═══════════════ 成就系统 ═══════════════
export const ACHIEVEMENTS = [
  { id:'first_game',   icon:'🎮', title:'初次选秀',   desc:'完成第一次选秀', check: n => n >= 1 },
  { id:'first_win',    icon:'🏆', title:'冠军之路',   desc:'第一次夺得TI冠军', check: (n,wins) => wins >= 1 },
  { id:'three_wins',   icon:'👑', title:'三冠王',     desc:'累计3次夺冠', check: (n,wins) => wins >= 3 },
  { id:'five_wins',    icon:'🌟', title:'TI传奇',     desc:'累计5次夺冠', check: (n,wins) => wins >= 5 },
  { id:'ten_wins',     icon:'💎', title:'不朽之皇',   desc:'累计10次夺冠', check: (n,wins) => wins >= 10 },
  { id:'all_cn',       icon:'🐉', title:'中国荣耀',   desc:'组成全华班阵容', check: (n,r,roster) => roster && Object.values(roster).every(p => p && (REGIONS[p.name]==='CN')) },
  { id:'all_eu',       icon:'👑', title:'欧洲贵族',   desc:'组成全欧班阵容', check: (n,r,roster) => roster && Object.values(roster).every(p => p && (REGIONS[p.name]==='EU')) },
  { id:'all_sea',      icon:'🌴', title:'南洋风暴',   desc:'组成全东南亚阵容', check: (n,r,roster) => roster && Object.values(roster).every(p => p && (REGIONS[p.name]==='SEA')) },
  { id:'five_tis',     icon:'🌐', title:'跨越时代',   desc:'5名选手来自5届不同TI', check: (n,r,roster) => roster && new Set(Object.values(roster).filter(Boolean).map(p=>p.ti)).size === 5 },
  { id:'same_ti',      icon:'🕰️', title:'经典重现',   desc:'5名选手来自同一届TI', check: (n,r,roster) => roster && new Set(Object.values(roster).filter(Boolean).map(p=>p.ti)).size === 1 },
  { id:'chemistry',    icon:'💫', title:'完美羁绊',   desc:'化学反应达到+5以上', check: (n,r,roster) => roster && calcChemistry(roster).bonus >= 5 },
  { id:'chemistry_15', icon:'✨', title:'命运之链',   desc:'化学反应达到+8以上', check: (n,r,roster) => roster && calcChemistry(roster).bonus >= 8 },
  { id:'fireworks',    icon:'🎆', title:'烟火神',     desc:'连续3次获得亚军', check: (n,r,roster,aiScore,meta) => meta?.consecutiveFinalist >= 3 },
  { id:'streak2',      icon:'⚡', title:'连冠王者',   desc:'连续2次夺冠', check: (n,r,roster,aiScore,meta) => meta?.consecutiveChampion >= 2 },
  { id:'streak3',      icon:'👑', title:'王朝建立者', desc:'连续3次夺冠', check: (n,r,roster,aiScore,meta) => meta?.consecutiveChampion >= 3 },
  { id:'streak5',      icon:'🏛️', title:'不朽王朝',   desc:'连续5次夺冠', check: (n,r,roster,aiScore,meta) => meta?.consecutiveChampion >= 5 },
  { id:'comeback',     icon:'🔥', title:'涅槃',       desc:'预选出局后下一把夺冠', check: (n,r,roster,aiScore,meta) => meta?.prevResult === 'qualifier' && r === 'champion' },
  { id:'ten_games',    icon:'💯', title:'百炼成钢',   desc:'累计完成10次选秀', check: n => n >= 10 },
  { id:'fifty_games',  icon:'🎖️', title:'选秀老饕',   desc:'累计完成50次选秀', check: n => n >= 50 },
  { id:'perfect_70',   icon:'💎', title:'天选之人',   desc:'5名选手评分全部≥70', check: (n,r,roster) => roster && Object.values(roster).every(p => p && playerScore(p, Array.isArray(p.allowedPos)?p.allowedPos[0]:2) >= 70) },
  { id:'no_reroll',    icon:'🎯', title:'一锤定音',   desc:'一次刷新都不用直接夺冠', check: (n,r,roster,aiScore,meta) => r === 'champion' && meta?.rerollsUsed === 0 },
];

export function loadAchievements() {
  try { return JSON.parse(localStorage.getItem('tidraft_achievements') || '{}'); } catch { return {}; }
}
export function saveAchievements(data) {
  localStorage.setItem('tidraft_achievements', JSON.stringify(data));
}

// 追踪连续数据
export function getMeta() {
  try { return JSON.parse(localStorage.getItem('tidraft_meta') || '{}'); } catch { return {}; }
}
export function saveMeta(rankId, extra = {}) {
  const meta = getMeta();
  // 亚军连击
  if (rankId === 'finalist') {
    meta.consecutiveFinalist = (meta.consecutiveFinalist || 0) + 1;
  } else {
    meta.consecutiveFinalist = 0;
  }
  // 冠军连击
  if (rankId === 'champion') {
    meta.consecutiveChampion = (meta.consecutiveChampion || 0) + 1;
  } else {
    meta.consecutiveChampion = 0;
  }
  meta.prevResult = rankId;
  // 额外数据
  if (extra.rerollsUsed !== undefined) meta.rerollsUsed = extra.rerollsUsed;
  localStorage.setItem('tidraft_meta', JSON.stringify(meta));
  return meta;
}

// 基础战队评分
export function teamScore(roster) {
  let t = 0;
  for (let pos = 1; pos <= 5; pos++) { if (!roster[pos]) return 0; t += playerScore(roster[pos], pos); }
  return Math.round(t / 5);
}

// 最终评分 = 基础分 + 化学反应加成
export function finalScore(roster) {
  const chem = calcChemistry(roster);
  return Math.min(teamScore(roster) + (chem.bonus || 0), 99);
}

// TI 战绩判定
export function getTIRank(score) {
  if (score >= 88) return { id:'champion', title:'🎖️ TI 冠军', desc:'不朽盾上刻下了你的名字。', color:'text-yellow-400', bg:'from-yellow-600 to-amber-700' };
  if (score >= 83) return { id:'finalist', title:'🥈 TI 决赛', desc:'只差一步就能举起神盾。', color:'text-slate-300', bg:'from-slate-600 to-slate-800' };
  if (score >= 78) return { id:'top4',    title:'🥉 TI 四强', desc:'世界前四，已是无数人仰望的高度。', color:'text-amber-400', bg:'from-amber-700 to-yellow-800' };
  if (score >= 73) return { id:'top8',    title:'📜 TI 八强', desc:'淘汰赛的聚光灯下，你证明了自己的眼光。', color:'text-purple-400', bg:'from-purple-700 to-indigo-800' };
  if (score >= 68) return { id:'group',   title:'📜 小组赛',   desc:'正赛的门槛已经跨过。', color:'text-blue-400', bg:'from-blue-700 to-cyan-800' };
  return { id:'qualifier', title:'💔 预选出局', desc:'胜败皆常事。再次鼓起丧失的勇气吧。', color:'text-slate-500', bg:'from-slate-800 to-slate-900' };
}

// ═══════════════ 音效 (Web Audio API 简单合成) ═══════════════
let audioCtx = null;
function getCtx() { if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)(); return audioCtx; }
export function sfx(type) {
  try {
    const ctx = getCtx();
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.connect(g); g.connect(ctx.destination);
    const now = ctx.currentTime;
    switch (type) {
      case 'pick': o.type = 'sine'; o.frequency.setValueAtTime(600, now); o.frequency.linearRampToValueAtTime(900, now + 0.1); g.gain.setValueAtTime(0.15, now); g.gain.linearRampToValueAtTime(0, now + 0.15); o.start(now); o.stop(now + 0.15); break;
      case 'place': o.type = 'triangle'; o.frequency.setValueAtTime(400, now); o.frequency.linearRampToValueAtTime(800, now + 0.2); g.gain.setValueAtTime(0.2, now); g.gain.linearRampToValueAtTime(0, now + 0.25); o.start(now); o.stop(now + 0.25); break;
      case 'reveal': o.type = 'sine'; o.frequency.setValueAtTime(300, now); o.frequency.linearRampToValueAtTime(1200, now + 0.5); g.gain.setValueAtTime(0.12, now); g.gain.linearRampToValueAtTime(0, now + 0.6); o.start(now); o.stop(now + 0.6); break;
      case 'champion': for (let i = 0; i < 5; i++) { const o2 = ctx.createOscillator(); const g2 = ctx.createGain(); o2.connect(g2); g2.connect(ctx.destination); o2.type = 'sine'; o2.frequency.setValueAtTime([523,659,784,1047,1319][i], now + i * 0.12); g2.gain.setValueAtTime(0.1, now + i * 0.12); g2.gain.linearRampToValueAtTime(0, now + i * 0.12 + 0.3); o2.start(now + i * 0.12); o2.stop(now + i * 0.12 + 0.3); } break;
      case 'fail': o.type = 'sawtooth'; o.frequency.setValueAtTime(200, now); o.frequency.linearRampToValueAtTime(100, now + 0.4); g.gain.setValueAtTime(0.08, now); g.gain.linearRampToValueAtTime(0, now + 0.5); o.start(now); o.stop(now + 0.5); break;
      case 'click': o.type = 'sine'; o.frequency.setValueAtTime(800, now); g.gain.setValueAtTime(0.05, now); g.gain.linearRampToValueAtTime(0, now + 0.05); o.start(now); o.stop(now + 0.05); break;
    }
  } catch (e) { /* silent fail */ }
}
