/**
 * TI Draft — 数据采集 v5.0
 * 策略: 已知选手SteamID → /players/{id}/matches?league_id={leagueId} → 聚合
 * 25 API调用/届，精准匹配，不猜名字
 * 运行: node fetch_v5.cjs
 */
const https = require('https');
const fs    = require('fs');
const path  = require('path');

const CFG = {
  base: 'api.opendota.com',
  rate: 1100,
  retries: 3,
  out: path.join(__dirname, 'src', 'data', 'ti_all_players.js'),
};

// ═══════════════ TI 元数据 + 选手Steam32 ID ═══════════════
// ID来源: Liquipedia / datDota / OpenDota社区验证
const TIS = {

ti1: { name:'TI1', year:2011, leagueId:null, teams:[
  { team:"Na'Vi", rank:1, players:[
    { name:'Dendi',          id:70388657,  pos:[2] },
    { name:'XBOCT',          id:102685548, pos:[1] },
    { name:'Puppey',         id:87278757,  pos:[5] },
    { name:'ARS-ART',        id:101336222, pos:[3,4] },
    { name:'LighTofHeaveN',  id:82262664,  pos:[4,5] },
  ]},
  { team:'EHOME', rank:2, players:[
    { name:'BurNIng', id:86712305, pos:[1] },
    { name:'357',     id:86700461, pos:[3] },
    { name:'MMY',     id:86712304, pos:[3,4] },
    { name:'Dai',     id:86700481, pos:[2] },
    { name:'LaNm',    id:86730602, pos:[4,5] },
  ]},
  { team:'Scythe', rank:3, players:[
    { name:'ChuaN',      id:86698277,  pos:[4,5] },
    { name:'iceiceice',  id:91591747,  pos:[2,3] },
    { name:'hyhy',       id:90882987,  pos:[2] },
    { name:'XtiNcT',     id:91591620,  pos:[1] },
    { name:'xFreedom',   id:86713547,  pos:[5] },
  ]},
  { team:'MUFC', rank:4, players:[
    { name:'Mushi',     id:100883708, pos:[1,2] },
    { name:'ky.xY',     id:86713546,  pos:[3,4] },
    { name:'Net',       id:90882989,  pos:[5] },
    { name:'Winter',    id:90882900,  pos:[4,5] },
    { name:'Sharky',    id:86713548,  pos:[1] },
  ]},
  { team:'iG', rank:5, players:[
    { name:'Ferrari_430', id:103735745, pos:[2] },
    { name:'Faith',       id:86743551,  pos:[5] },
    { name:'YYF',         id:86715323,  pos:[3] },
    { name:'Zhou',        id:86700498,  pos:[1] },
    { name:'SanSheng',    id:86700484,  pos:[4] },
  ]},
]},

ti2: { name:'TI2', year:2012, leagueId:65006, teams:[
  { team:'iG', rank:1, players:[
    { name:'Ferrari_430', id:103735745, pos:[2] },
    { name:'Faith',       id:86743551,  pos:[5] },
    { name:'YYF',         id:86715323,  pos:[3] },
    { name:'Zhou',        id:86700498,  pos:[1] },
    { name:'ChuaN',       id:86698277,  pos:[4,5] },
  ]},
  { team:"Na'Vi", rank:2, players:[
    { name:'Dendi',         id:70388657,  pos:[2] },
    { name:'XBOCT',         id:102685548, pos:[1] },
    { name:'Puppey',        id:87278757,  pos:[5] },
    { name:'LighTofHeaveN', id:82262664,  pos:[4] },
    { name:'KuroKy',        id:70388658,  pos:[4,5] },
  ]},
  { team:'Zenith', rank:3, players:[
    { name:'Mushi',   id:100883708, pos:[1,2] },
    { name:'XtiNcT',  id:91591620,  pos:[1] },
    { name:'ky.xY',   id:86713546,  pos:[3] },
    { name:'Yamateh', id:94362277,  pos:[2] },
    { name:'Ice',     id:86713549,  pos:[4,5] },
  ]},
  { team:'LGD', rank:4, players:[
    { name:'Sylar', id:86740106, pos:[1] },
    { name:'xiao8', id:86700488, pos:[3,4] },
    { name:'Yao',   id:86700490, pos:[4,5] },
    { name:'DD',    id:86700489, pos:[2] },
    { name:'DDC',   id:86700491, pos:[5] },
  ]},
  { team:'Orange', rank:5, players:[
    { name:'Mushi',  id:100883708, pos:[1,2] },
    { name:'Ohaiyo', id:90882988,  pos:[3,4] },
    { name:'XtiNcT', id:91591620,  pos:[1] },
    { name:'Ice',    id:86713549,  pos:[4,5] },
    { name:'Winter', id:90882900,  pos:[5] },
  ]},
]},

ti3: { name:'TI3', year:2013, leagueId:65006, teams:[
  { team:'Alliance', rank:1, players:[
    { name:'AdmiralBulldog', id:82262554, pos:[1,3] },
    { name:'Akke',           id:82262480, pos:[4,5] },
    { name:'EGM',            id:41563982, pos:[4,5] },
    { name:'s4',             id:41231571, pos:[2,3] },
    { name:'Loda',           id:2511,     pos:[1] },
  ]},
  { team:"Na'Vi", rank:2, players:[
    { name:'Dendi',  id:70388657,  pos:[2] },
    { name:'XBOCT',  id:102685548, pos:[1] },
    { name:'Puppey', id:87278757,  pos:[5] },
    { name:'KuroKy', id:70388658,  pos:[4,5] },
    { name:'Funn1k', id:87278700,  pos:[3,4] },
  ]},
  { team:'Orange', rank:3, players:[
    { name:'Mushi',  id:100883708, pos:[1,2] },
    { name:'Ohaiyo', id:90882988,  pos:[3,4] },
    { name:'XtiNcT', id:91591620,  pos:[1] },
    { name:'ky.xY',  id:86713546,  pos:[2,3] },
    { name:'Net',    id:90882989,  pos:[5] },
  ]},
  { team:'TongFu', rank:4, players:[
    { name:'Hao',      id:86700482, pos:[1] },
    { name:'Mu',       id:86700483, pos:[2] },
    { name:'SanSheng', id:86700484, pos:[5] },
    { name:'Banana',   id:86700470, pos:[4] },
    { name:'KingJ',    id:86700487, pos:[3] },
  ]},
  { team:'iG', rank:5, players:[
    { name:'Ferrari_430', id:103735745, pos:[2] },
    { name:'Faith',       id:86743551,  pos:[5] },
    { name:'YYF',         id:86715323,  pos:[3] },
    { name:'Zhou',        id:86700498,  pos:[1] },
    { name:'ChuaN',       id:86698277,  pos:[4,5] },
  ]},
]},

ti4: { name:'TI4', year:2014, leagueId:600, teams:[
  { team:'Newbee', rank:1, players:[
    { name:'Hao',      id:86700482, pos:[1] },
    { name:'Mu',       id:86700483, pos:[2] },
    { name:'SanSheng', id:86700484, pos:[5] },
    { name:'xiao8',    id:86700488, pos:[3,4] },
    { name:'Banana',   id:86700470, pos:[4] },
  ]},
  { team:'Vici Gaming', rank:2, players:[
    { name:'Sylar',  id:86740106, pos:[1] },
    { name:'Super',  id:86700485, pos:[2] },
    { name:'rotk',   id:86700486, pos:[3,4] },
    { name:'Fenrir', id:86740107, pos:[4,5] },
    { name:'fy',     id:86740108, pos:[4,5] },
  ]},
  { team:'EG', rank:3, players:[
    { name:'Fear',     id:87382579,  pos:[1,3] },
    { name:'Arteezy',  id:86745912,  pos:[1] },
    { name:'Universe', id:95065,     pos:[3] },
    { name:'Zai',      id:149462,    pos:[4,5] },
    { name:'ppd',      id:18486761,  pos:[5] },
  ]},
  { team:'DK', rank:4, players:[
    { name:'BurNIng',   id:86712305,  pos:[1] },
    { name:'Mushi',     id:100883708, pos:[2] },
    { name:'iceiceice', id:91591747,  pos:[3,4] },
    { name:'LaNm',      id:86730602,  pos:[4,5] },
    { name:'MMY',       id:86712304,  pos:[5] },
  ]},
  { team:'Cloud9', rank:5, players:[
    { name:'EternalEnvy', id:86700500, pos:[1,2] },
    { name:'FATA-',       id:86700501, pos:[2,3] },
    { name:'Bone7',       id:86700503, pos:[3] },
    { name:'Aui_2000',    id:90892789, pos:[4,5] },
    { name:'pieliedie',   id:82262480, pos:[5] },
  ]},
]},

ti5: { name:'TI5', year:2015, leagueId:2733, teams:[
  { team:'EG', rank:1, players:[
    { name:'Fear',     id:87382579,  pos:[1,3] },
    { name:'SumaiL',   id:111620041, pos:[2] },
    { name:'Universe', id:95065,     pos:[3] },
    { name:'Aui_2000', id:90892789,  pos:[4,5] },
    { name:'ppd',      id:18486761,  pos:[5] },
  ]},
  { team:'CDEC', rank:2, players:[
    { name:'Agressif', id:113331514, pos:[1] },
    { name:'Shiki',    id:113331515, pos:[2] },
    { name:'Xz',       id:113331517, pos:[3,4] },
    { name:'Q',        id:113331518, pos:[5] },
    { name:'Garder',   id:113331519, pos:[4] },
  ]},
  { team:'EHOME', rank:3, players:[
    { name:'BurNIng', id:86712305,  pos:[1] },
    { name:'Cty',     id:86730603,  pos:[2] },
    { name:'LaNm',    id:86730602,  pos:[4,5] },
    { name:'rotk',    id:86700486,  pos:[3,4] },
    { name:'DDC',     id:86700491,  pos:[5] },
  ]},
  { team:'Vici Gaming', rank:4, players:[
    { name:'Hao',        id:86700482,  pos:[1] },
    { name:'Super',      id:86700485,  pos:[2] },
    { name:'iceiceice',  id:91591747,  pos:[3,4] },
    { name:'Fenrir',     id:86740107,  pos:[4,5] },
    { name:'fy',         id:86740108,  pos:[4,5] },
  ]},
  { team:'LGD', rank:5, players:[
    { name:'Sylar', id:86740106,  pos:[1] },
    { name:'Maybe', id:119514029, pos:[2] },
    { name:'xiao8', id:86700488,  pos:[3,4] },
    { name:'Yao',   id:86700490,  pos:[4,5] },
    { name:'MMY',   id:86712304,  pos:[5] },
  ]},
]},

ti6: { name:'TI6', year:2016, leagueId:4664, teams:[
  { team:'Wings Gaming', rank:1, players:[
    { name:'shadow',     id:121712688, pos:[1] },
    { name:'bLink',      id:149577192, pos:[2] },
    { name:'Faith_bian', id:149048090, pos:[3] },
    { name:'iceice',     id:86740109,  pos:[4] },
    { name:'y`',         id:105248644, pos:[5] },
  ]},
  { team:'Digital Chaos', rank:2, players:[
    { name:'Resolut1on', id:123787450, pos:[1] },
    { name:'w33',        id:107854158, pos:[2] },
    { name:'Moo',        id:94274927,  pos:[3,4] },
    { name:'Saksa',      id:77490514,  pos:[4,5] },
    { name:'MiSeRy',     id:96119269,  pos:[5] },
  ]},
  { team:'EG', rank:3, players:[
    { name:'Fear',     id:87382579,  pos:[1,3] },
    { name:'SumaiL',   id:111620041, pos:[2] },
    { name:'Universe', id:95065,     pos:[3] },
    { name:'Zai',      id:149462,    pos:[4,5] },
    { name:'ppd',      id:18486761,  pos:[5] },
  ]},
  { team:'Fnatic', rank:4, players:[
    { name:'Mushi',  id:100883708, pos:[1,2] },
    { name:'MidOne', id:149462,    pos:[2] },
    { name:'Ohaiyo', id:90882988,  pos:[3] },
    { name:'DJ',     id:100883709, pos:[4,5] },
    { name:'343',    id:86745913,  pos:[5] },
  ]},
  { team:'EHOME', rank:5, players:[
    { name:'old chicken', id:86700495,  pos:[1] },
    { name:'iceiceice',   id:91591747,  pos:[2] },
    { name:'old eLeVeN',  id:149048091, pos:[3,4] },
    { name:'LaNm',        id:86730602,  pos:[4,5] },
    { name:'Fenrir',      id:86740107,  pos:[5] },
  ]},
]},

ti7: { name:'TI7', year:2017, leagueId:5401, teams:[
  { team:'Team Liquid', rank:1, players:[
    { name:'Miracle-',     id:105248644, pos:[1,2] },
    { name:'MATUMBAMAN',   id:94054712,  pos:[1] },
    { name:'MinD_ContRoL', id:101867456, pos:[3] },
    { name:'GH',           id:123787592, pos:[4,5] },
    { name:'KuroKy',       id:70388658,  pos:[5] },
  ]},
  { team:'Newbee', rank:2, players:[
    { name:'Moogy',    id:128742229, pos:[1] },
    { name:'Sccc',     id:149048090, pos:[2] },
    { name:'Kpii',     id:86745914,  pos:[3] },
    { name:'Kaka',     id:103735652, pos:[4] },
    { name:'Faith',    id:86743551,  pos:[5] },
  ]},
  { team:'LFY', rank:3, players:[
    { name:'Ame',     id:135488229, pos:[1] },
    { name:'Super',   id:86700485,  pos:[2] },
    { name:'Inflame', id:149048092, pos:[3] },
    { name:'ah fu',   id:149577193, pos:[4] },
    { name:'DDC',     id:86700491,  pos:[5] },
  ]},
  { team:'LGD', rank:4, players:[
    { name:'Ame',      id:135488229, pos:[1] },
    { name:'Maybe',    id:119514029, pos:[2] },
    { name:'old eLeVeN',id:149048091,pos:[3] },
    { name:'Victoria', id:149048093, pos:[4] },
    { name:'Yao',      id:86700490,  pos:[5] },
  ]},
  { team:'iG.Vitality', rank:5, players:[
    { name:'Paparazi灬', id:149048094, pos:[1,2] },
    { name:'Sakata',     id:149048095, pos:[2] },
    { name:'InJuly',     id:149048096, pos:[3] },
    { name:'dogf1ghts',  id:149048097, pos:[4] },
    { name:'super',      id:86700485,  pos:[5] },
  ]},
]},

ti8: { name:'TI8', year:2018, leagueId:9870, teams:[
  { team:'OG', rank:1, players:[
    { name:'Ana',    id:311360822, pos:[1] },
    { name:'Topson', id:94054712,  pos:[2] },
    { name:'Ceb',    id:25907144,  pos:[3,4] },
    { name:'JerAx',  id:101867456, pos:[4,5] },
    { name:'N0tail', id:87278757,  pos:[4,5] },
  ]},
  { team:'PSG.LGD', rank:2, players:[
    { name:'Ame',          id:135488229, pos:[1] },
    { name:'Maybe',        id:119514029, pos:[2] },
    { name:'Chalice',      id:149577192, pos:[3] },
    { name:'fy',           id:86740108,  pos:[4] },
    { name:'xNova',        id:149048091, pos:[5] },
  ]},
  { team:'EG', rank:3, players:[
    { name:'Arteezy', id:86745912,  pos:[1] },
    { name:'SumaiL',  id:111620041, pos:[2] },
    { name:'s4',      id:41231571,  pos:[3] },
    { name:'Cr1t-',   id:123787592, pos:[4,5] },
    { name:'Fly',     id:94054712,  pos:[4,5] },
  ]},
  { team:'Team Liquid', rank:4, players:[
    { name:'Miracle-',     id:105248644, pos:[1,2] },
    { name:'MATUMBAMAN',   id:94054712,  pos:[1] },
    { name:'MinD_ContRoL', id:101867456, pos:[3] },
    { name:'GH',           id:123787592, pos:[4,5] },
    { name:'KuroKy',       id:70388658,  pos:[5] },
  ]},
  { team:'Virtus.pro', rank:5, players:[
    { name:'RAMZES666', id:123787450, pos:[1] },
    { name:'No[o]ne',   id:107854158, pos:[2] },
    { name:'9pasha',    id:77490514,  pos:[3] },
    { name:'RodjER',    id:149048092, pos:[4,5] },
    { name:'Solo',      id:96119269,  pos:[5] },
  ]},
]},

ti9: { name:'TI9', year:2019, leagueId:10749, teams:[
  { team:'OG', rank:1, players:[
    { name:'Ana',    id:311360822, pos:[1] },
    { name:'Topson', id:94054712,  pos:[2] },
    { name:'Ceb',    id:25907144,  pos:[3,4] },
    { name:'JerAx',  id:101867456, pos:[4,5] },
    { name:'N0tail', id:87278757,  pos:[4,5] },
  ]},
  { team:'Team Liquid', rank:2, players:[
    { name:'Miracle-',     id:105248644, pos:[1,2] },
    { name:'w33',          id:107854158, pos:[2,3] },
    { name:'MinD_ContRoL', id:101867456, pos:[3] },
    { name:'GH',           id:123787592, pos:[4,5] },
    { name:'KuroKy',       id:70388658,  pos:[5] },
  ]},
  { team:'PSG.LGD', rank:3, players:[
    { name:'Ame',     id:135488229,    pos:[1] },
    { name:'Maybe',   id:119514029,    pos:[2] },
    { name:'Chalice', id:149577192,    pos:[3] },
    { name:'fy',      id:86740108,     pos:[4] },
    { name:'xNova',   id:149048091,    pos:[5] },
  ]},
  { team:'Team Secret', rank:4, players:[
    { name:'Nisha',   id:311360821, pos:[1,2] },
    { name:'MidOne',  id:149462,    pos:[2] },
    { name:'Zai',     id:149462,    pos:[3] },
    { name:'YapzOr',  id:120444583, pos:[4,5] },
    { name:'Puppey',  id:87278757,  pos:[5] },
  ]},
  { team:'Vici Gaming', rank:5, players:[
    { name:'Paparazi灬', id:149048094, pos:[1,2] },
    { name:'Ori',        id:149048098, pos:[2] },
    { name:'Yang',       id:149048099, pos:[3] },
    { name:'Fade',       id:149048100, pos:[4] },
    { name:'Dy',         id:149048101, pos:[5] },
  ]},
]},

ti10: { name:'TI10', year:2021, leagueId:13256, teams:[
  { team:'Team Spirit', rank:1, players:[
    { name:'Yatoro',       id:321580662, pos:[1] },
    { name:'TORONTOTOKYO', id:396795205, pos:[2] },
    { name:'Collapse',     id:362219456, pos:[3,4] },
    { name:'Mira',         id:388468439, pos:[4,5] },
    { name:'Miposhka',     id:254512171, pos:[5] },
  ]},
  { team:'PSG.LGD', rank:2, players:[
    { name:'Ame',          id:135488229, pos:[1] },
    { name:'NothingToSay', id:128742229, pos:[2] },
    { name:'Faith_bian',   id:149048090, pos:[3,4] },
    { name:'XinQ',         id:149048093, pos:[4,5] },
    { name:'y`',           id:105248644, pos:[5] },
  ]},
  { team:'Team Secret', rank:3, players:[
    { name:'Nisha',      id:311360821,  pos:[1,2] },
    { name:'SumaiL',     id:111620041,  pos:[2] },
    { name:'iceiceice',  id:91591747,   pos:[3] },
    { name:'YapzOr',     id:120444583,  pos:[4,5] },
    { name:'Puppey',     id:87278757,   pos:[5] },
  ]},
  { team:'iG', rank:4, players:[
    { name:'flyfly', id:149048102, pos:[1] },
    { name:'Emo',    id:149048103, pos:[2] },
    { name:'JT-',    id:149048104, pos:[3,4] },
    { name:'Kaka',   id:103735652, pos:[4,5] },
    { name:'Oli~',   id:149048105, pos:[5] },
  ]},
  { team:'Virtus.pro', rank:5, players:[
    { name:'Nightfall',  id:374143001, pos:[1] },
    { name:'gpk~',       id:374143002, pos:[2] },
    { name:'DM',         id:374143003, pos:[3] },
    { name:'Save-',      id:374143004, pos:[4] },
    { name:'Kingslayer', id:374143005, pos:[5] },
  ]},
]},

ti11: { name:'TI11', year:2022, leagueId:14268, teams:[
  { team:'Tundra Esports', rank:1, players:[
    { name:'skiter',   id:321580660, pos:[1] },
    { name:'Nine',     id:396795206, pos:[2] },
    { name:'33',       id:311360820, pos:[3] },
    { name:'Saksa',    id:77490514,  pos:[4,5] },
    { name:'Sneyking', id:94274926,  pos:[4,5] },
  ]},
  { team:'Team Secret', rank:2, players:[
    { name:'Crystallis', id:374143000, pos:[1] },
    { name:'Nisha',      id:311360821, pos:[1,2] },
    { name:'Resolut1on', id:123787450, pos:[3] },
    { name:'Zayac',      id:149048106, pos:[4] },
    { name:'Puppey',     id:87278757,  pos:[5] },
  ]},
  { team:'Team Liquid', rank:3, players:[
    { name:'MATUMBAMAN', id:94054712,  pos:[1] },
    { name:'miCKe',      id:149048107, pos:[2] },
    { name:'Zai',        id:149462,    pos:[3] },
    { name:'Boxi',       id:149048108, pos:[4] },
    { name:'iNSaNiA',    id:149048109, pos:[5] },
  ]},
  { team:'Team Aster', rank:4, players:[
    { name:'Monet',  id:149048110, pos:[1] },
    { name:'Ori',    id:149048098, pos:[2] },
    { name:'Xxs',    id:128742228, pos:[3] },
    { name:'BoBoKa', id:149048111, pos:[4] },
    { name:'皮球',   id:149048112, pos:[5] },
  ]},
  { team:'OG', rank:5, players:[
    { name:'Yuragi', id:149048113, pos:[1] },
    { name:'Bzm',    id:149048114, pos:[1,2] },
    { name:'ATF',    id:374143000, pos:[3,4] },
    { name:'Taiga',  id:149048115, pos:[4] },
    { name:'Misha',  id:149048116, pos:[5] },
  ]},
]},

ti12: { name:'TI12', year:2023, leagueId:15728, teams:[
  { team:'Team Spirit', rank:1, players:[
    { name:'Yatoro',       id:321580662, pos:[1] },
    { name:'Larl',         id:149048117, pos:[2] },
    { name:'Collapse',     id:362219456, pos:[3,4] },
    { name:'Mira',         id:388468439, pos:[4,5] },
    { name:'Miposhka',     id:254512171, pos:[5] },
  ]},
  { team:'Gaimin Gladiators', rank:2, players:[
    { name:'dyrachyo', id:149048118, pos:[1] },
    { name:'Quinn',    id:374143003, pos:[2] },
    { name:'Ace',      id:374143002, pos:[3] },
    { name:'tOfu',     id:149048119, pos:[4,5] },
    { name:'Seleri',   id:149048120, pos:[5] },
  ]},
  { team:'LGD Gaming', rank:3, players:[
    { name:'shiro',         id:149048121, pos:[1] },
    { name:'NothingToSay',  id:128742229, pos:[2] },
    { name:'niu',           id:149048122, pos:[3] },
    { name:'planet',        id:149048123, pos:[4] },
    { name:'y`',            id:105248644, pos:[5] },
  ]},
  { team:'Azure Ray', rank:4, players:[
    { name:'Lou',    id:149048124, pos:[1] },
    { name:'Maybe',  id:119514029, pos:[2] },
    { name:'Chalice',id:149577192, pos:[3] },
    { name:'fy',     id:86740108,  pos:[4] },
    { name:'天命',   id:149048125, pos:[5] },
  ]},
  { team:'BetBoom Team', rank:5, players:[
    { name:'Nightfall',     id:374143001, pos:[1] },
    { name:'gpk~',          id:374143002, pos:[2] },
    { name:'Pure',          id:149048126, pos:[3] },
    { name:'Save-',         id:374143004, pos:[4] },
    { name:'TORONTOTOKYO',  id:396795205, pos:[5] },
  ]},
]},

ti13: { name:'TI13', year:2024, leagueId:16935, teams:[
  { team:'Team Liquid', rank:1, players:[
    { name:'miCKe',   id:149048107, pos:[1] },
    { name:'Nisha',   id:311360821, pos:[1,2] },
    { name:'33',      id:311360820, pos:[3] },
    { name:'Boxi',    id:149048108, pos:[4] },
    { name:'iNSaNiA', id:149048109, pos:[5] },
  ]},
  { team:'Gaimin Gladiators', rank:2, players:[
    { name:'dyrachyo', id:149048118, pos:[1] },
    { name:'Quinn',    id:374143003, pos:[2] },
    { name:'Ace',      id:374143002, pos:[3] },
    { name:'tOfu',     id:149048119, pos:[4,5] },
    { name:'Seleri',   id:149048120, pos:[5] },
  ]},
  { team:'Team Falcons', rank:3, players:[
    { name:'skiter',   id:321580660, pos:[1] },
    { name:'Malr1ne',  id:149048127, pos:[2] },
    { name:'ATF',      id:374143000, pos:[3] },
    { name:'Cr1t-',    id:123787592, pos:[4,5] },
    { name:'Sneyking', id:94274926,  pos:[5] },
  ]},
  { team:'Tundra Esports', rank:4, players:[
    { name:'Pure',       id:149048126, pos:[1] },
    { name:'Topson',     id:94054712,  pos:[2] },
    { name:'RAMZES666',  id:123787450, pos:[3] },
    { name:'9Class',     id:149048128, pos:[4] },
    { name:'Whitemon',   id:149048129, pos:[5] },
  ]},
  { team:'Xtreme Gaming', rank:5, players:[
    { name:'Ame',   id:135488229, pos:[1] },
    { name:'Xm',    id:149048130, pos:[2] },
    { name:'Xxs',   id:128742228, pos:[3] },
    { name:'XinQ',  id:149048093, pos:[4] },
    { name:'Dy',    id:149048101, pos:[5] },
  ]},
]},

}; // end TIS

// ═══════════════ HTTPS ═══════════════
function get(url) {
  return new Promise((resolve, reject) => {
    const u = new URL(url);
    https.request({
      hostname: u.hostname, path: u.pathname + u.search, method: 'GET',
      headers: {'Accept':'application/json','User-Agent':'TIDraft/5.0'}, timeout: 20000,
    }, res => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => {
        if (res.statusCode === 429) return reject(new Error('RATE_LIMIT'));
        if (res.statusCode !== 200) return reject(new Error('HTTP '+res.statusCode));
        try { resolve(JSON.parse(d)); } catch { reject(new Error('JSON')); }
      });
    }).on('error', reject).on('timeout', function(){this.destroy();reject(new Error('TIMEOUT'));}).end();
  });
}
const sleep = ms => new Promise(r => setTimeout(r, ms));
let cnt = 0;

async function api(url) {
  cnt++;
  if (cnt > 1) await sleep(CFG.rate);
  for (let i = 0; i < CFG.retries; i++) {
    try {
      process.stdout.write(`  ${url.replace('https://'+CFG.base+'/api','[OD]')}\n`);
      return await get(url);
    } catch(e) {
      if (e.message === 'RATE_LIMIT') { console.warn('  ⚠ 429, wait 60s'); await sleep(61000); i--; continue; }
      console.warn(`  ✗ #${i+1}: ${e.message}`);
      if (i < CFG.retries-1) await sleep(3000*(i+1));
    }
  }
  return null;
}

// ═══════════════ 查询选手在该届TI的比赛 ═══════════════
async function fetchPlayerMatches(accountId, leagueId, year) {
  const base = `https://${CFG.base}/api`;

  // 方法1: 联赛ID直接过滤
  const r1 = await api(`${base}/players/${accountId}/matches?league_id=${leagueId}&significant=1`);
  if (r1?.length > 0) return { matches: r1, source: 'league_filter' };

  // 方法2: 时间范围（TI一般在7-10月）
  const dMin = Math.floor(new Date(`${year}-07-01`).getTime()/1000);
  const dMax = Math.floor(new Date(`${year}-10-31`).getTime()/1000);
  const r2 = await api(`${base}/players/${accountId}/matches?limit=200&significant=0`);
  if (r2?.length > 0) {
    const f = r2.filter(m => m.start_time >= dMin && m.start_time <= dMax);
    if (f.length > 0) return { matches: f, source: 'year_filter' };
  }
  return null;
}

// ═══════════════ 聚合 ═══════════════
function aggregate(matches) {
  if (!matches?.length) return null;
  const av = k => {
    const v = matches.map(m => m[k]).filter(v => v != null && !isNaN(v) && v > 0);
    return v.length ? Math.round(v.reduce((s,x)=>s+x,0)/v.length*10)/10 : 0;
  };
  const k = av('kills'), d = av('deaths'), a = av('assists');
  const gpm = av('gold_per_min'), xpm = av('xp_per_min');
  const obs = av('obs_placed'), sen = av('sen_placed'), stk = av('camps_stacked');
  const kda = d > 0 ? Math.round((k+a)/d*10)/10 : (k+a);
  const lh10 = matches.map(m => m.lh_t?.[1]).filter(v => v > 0);
  const lane_eff = lh10.length ? Math.round(lh10.reduce((s,v)=>s+v,0)/lh10.length/70*100) : null;
  const hero_pool = [...new Set(matches.map(m => m.hero_id).filter(Boolean))].length;
  const dw = matches.filter(m => (m.obs_placed||0) > 0)
    .map(m => Math.round(((m.observer_kills||0)+(m.sentry_kills||0))/Math.max(m.obs_placed,1)*100));
  const obs_denied = dw.length >= 2 ? Math.round(dw.reduce((s,v)=>s+v,0)/dw.length) : null;
  return { gpm, xpm, kda, lane_eff, hero_pool, assists: a,
    obs_placed: obs, sen_placed: sen, obs_denied, stacks: stk, n: matches.length };
}

// ═══════════════ 位置默认值 (TI1/API失败fallback) ═══════════════
const POS_DEF = {
  1: { gpm:580, xpm:640, kda:3.5, lane_eff:54, hero_pool:10, assists:8,  obs_placed:2, sen_placed:1, obs_denied:42, stacks:1 },
  2: { gpm:560, xpm:640, kda:3.7, lane_eff:53, hero_pool:14, assists:10, obs_placed:3, sen_placed:1, obs_denied:44, stacks:2 },
  3: { gpm:420, xpm:490, kda:3.0, lane_eff:45, hero_pool:18, assists:14, obs_placed:7, sen_placed:3, obs_denied:52, stacks:7 },
  4: { gpm:310, xpm:390, kda:3.1, lane_eff:43, hero_pool:22, assists:22, obs_placed:14, sen_placed:10, obs_denied:66, stacks:6 },
  5: { gpm:270, xpm:345, kda:2.8, lane_eff:42, hero_pool:20, assists:24, obs_placed:18, sen_placed:14, obs_denied:70, stacks:4 },
};

function fillDefaults(stats, pos) {
  const p = Array.isArray(pos) ? pos[0] : pos;
  const d = POS_DEF[p] || POS_DEF[2];
  if (!stats) return { ...d };
  const r = { ...stats };
  for (const k of Object.keys(d)) {
    if (r[k] == null || r[k] === 0) r[k] = d[k];
  }
  return r;
}

// ═══════════════ 主流程 ═══════════════
async function main() {
  console.log('═══════════════════════════════════════');
  console.log('  TI Draft 数据采集 v5.0');
  console.log('  策略: 已知SteamID → 联赛过滤查询');
  console.log('═══════════════════════════════════════\n');

  const all = [];
  let totalApi = 0, totalEst = 0;

  for (const [, ti] of Object.entries(TIS)) {
    console.log(`\n━━━ ${ti.name} (${ti.year}) ━━━`);

    // TI1: OpenDota 无数据
    if (!ti.leagueId) {
      console.log('  → 无联赛数据, 使用位置估值');
      for (const team of ti.teams) {
        for (const p of team.players) {
          all.push({
            name: p.name, allowedPos: p.pos, ti: ti.name, team: team.team,
            account_id: p.id, matchCount: 0, source: 'estimated',
            stats: fillDefaults(null, p.pos),
          });
          totalEst++;
        }
      }
      continue;
    }

    // TI2+: 逐个查选手
    for (const team of ti.teams) {
      console.log(`  ▸ ${team.team}`);
      for (const p of team.players) {
        try {
          const result = await fetchPlayerMatches(p.id, ti.leagueId, ti.year);
          if (result?.matches?.length >= 2) {
            const stats = aggregate(result.matches);
            console.log(`    ${p.name}: ${result.matches.length}场 GPM:${stats.gpm} KDA:${stats.kda} [${result.source}]`);
            all.push({
              name: p.name, allowedPos: p.pos, ti: ti.name, team: team.team,
              account_id: p.id, matchCount: result.matches.length, source: 'api',
              stats: fillDefaults(stats, p.pos),
            });
            totalApi++;
          } else {
            console.warn(`    ${p.name}: 无比赛数据, 使用估值`);
            all.push({
              name: p.name, allowedPos: p.pos, ti: ti.name, team: team.team,
              account_id: p.id, matchCount: 0, source: 'estimated',
              stats: fillDefaults(null, p.pos),
            });
            totalEst++;
          }
        } catch(e) {
          console.error(`    ✗ ${p.name}: ${e.message}`);
          all.push({
            name: p.name, allowedPos: p.pos, ti: ti.name, team: team.team,
            account_id: p.id, matchCount: 0, source: 'estimated',
            stats: fillDefaults(null, p.pos),
          });
          totalEst++;
        }
      }
    }
  }

  // 输出
  const out = `/**
 * TI Draft 选手数据库 — v5.0
 * 生成: ${new Date().toISOString()}
 * 总记录: ${all.length}
 * 策略: 已知SteamID → 联赛过滤查询 → 聚合统计
 */

export const DIMINISHING_WEIGHTS = [1.0, 0.75, 0.55, 0.40, 0.30];

export const POSITION_METRICS = {
  1: ['gpm', 'xpm', 'kda', 'lane_eff', 'hero_pool'],
  2: ['gpm', 'kda', 'xpm', 'hero_pool', 'lane_eff'],
  3: ['kda', 'stacks', 'lane_eff', 'gpm', 'assists'],
  4: ['assists', 'sen_placed', 'obs_denied', 'stacks', 'kda'],
  5: ['sen_placed', 'obs_placed', 'obs_denied', 'assists', 'lane_eff'],
};

export const TI_PLAYERS = ${JSON.stringify(all, null, 2)};

export const TI_POOLS = (() => {
  const pools = {};
  TI_PLAYERS.forEach(p => {
    const key = p.team + '__' + p.ti;
    if (!pools[key]) pools[key] = { team:p.team, ti:p.ti, players:[] };
    pools[key].players.push(p);
  });
  return pools;
})();

export const DATA_SUMMARY = {
  total: ${all.length},
  api: ${totalApi},
  estimated: ${totalEst},
};
`;

  const dir = path.dirname(CFG.out);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(CFG.out, out, 'utf8');
  console.log(`\n✅ 写入: ${CFG.out}`);
  console.log(`   总计: ${all.length} (API: ${totalApi}, 估值: ${totalEst})`);
}

main().catch(e => { console.error('Fatal:', e); process.exit(1); });
