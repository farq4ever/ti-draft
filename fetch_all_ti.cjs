/**
 * TI Draft — 统一数据采集 v4.0 (TI1-TI14)
 *
 * 策略:
 *   TI2-TI14: 联赛比赛列表 → 比赛详情(全字段) → 选手名匹配发现ID → 聚合统计
 *   TI1:      OpenDota 无2011年数据, 用准确的roster名+位置默认值
 *
 * 输出: src/data/ti_all_players.js (ES module, stats子对象, snake_case)
 *
 * 运行: node fetch_all_ti.js [tiKey]
 */

const https = require('https');
const fs    = require('fs');
const path  = require('path');

const CONFIG = {
  opendotaBase: 'api.opendota.com',
  rateLimit: 1100,
  retries: 3,
  outputFile: path.join(__dirname, 'src', 'data', 'ti_all_players.js'),
  cacheFile:  path.join(__dirname, '.ti_cache.json'),
};

// ═══════════════════════════════════════════════════════════
// 已知选手别名 (帮助匹配 Steam名 → 职业名)
// ═══════════════════════════════════════════════════════════
const PLAYER_ALIASES = {
  'Dendi':         ['dendi','dendimon','snake master','dendi the supamida'],
  'Puppey':        ['puppey','puppey papu','clament','clement'],
  'XBOCT':         ['xboct','xboct 4','hvost','хвост'],
  'LighTofHeaveN': ['lightofheaven','loh','dmitry','kupriyanov'],
  'ARS-ART':       ['ars-art','arsart','smile'],
  'KuroKy':        ['kuroky','kky','kuro','kuro salehi takhasomi'],
  'Funn1k':        ['funn1k','funnik'],
  'BurNIng':       ['burning','b-god','xulei','徐志雷','b'],
  'MMY':           ['mmy','weapon x','lei zengrong','x!!'],
  'LaNm':          ['lanm','zhang zhicheng','mylm','小8','国士无双'],
  'Mushi':         ['mushi','chai yee fung','musheng', 'jyy', '凯瑞王'],
  'Ferrari_430':   ['ferrari_430','luo feichi','ferrari','430','the pianist'],
  'Faith':         ['faith','zeng hongda','uaena','faith_bian'],  // 注意: 有两个Faith
  'YYF':           ['yyf','jiang cen','月夜枫'],
  'Zhou':          ['zhou','chen yao','鲷'],
  'ChuaN':         ['chuan','wong hock chuan','船','not human'],
  'SanSheng':      ['sansheng','wang zhaohui','狗哥'],
  'Hao':           ['hao','chen zhihao','豪','豪娘'],
  'Mu':            ['mu','zhang pan','牧','smallson','凯瑞王'],
  'xiao8':         ['xiao8','zhang ning','小8','八师傅','下面八'],
  'Yao':           ['yao','yao zhengzheng','姚'],
  'DDC':           ['ddc','liang faming','盖狗'],
  'DD':            ['dd','xie bin'],
  'Sylar':         ['sylar','liu jiajun','塞拉'],
  'fy':            ['fy','xu linsen','fygod','其疾如风','fw d flinta'],
  'Fenrir':        ['fenrir','lu chao'],
  'iceice':        ['iceice','li peng','二冰'],
  'Super':         ['super','xie junhao','包子'],
  'rotk':          ['rotk','bai fan','老队长'],
  'iceiceice':     ['iceiceice','daryl koh','ice3','三冰','z'],
  'hyhy':          ['hyhy','benedict lim','hy'],
  'XtiNcT':        ['xtinct','joel chan'],
  'ky.xY':         ['ky.xy','lee kang yang'],
  'Winter':        ['winter','chan litt binn'],
  'AdmiralBulldog':['admirralbulldog','bulldog','henrik ahnberg'],
  'Akke':          ['akke','joakim akterhall'],
  'EGM':           ['egm','jerry lundkvist'],
  's4':            ['s4','gustav magnusson','carl'],
  'Loda':          ['loda','jonathan berg'],
  'Fear':          ['fear','clinton loomis','old man fear'],
  'SumaiL':        ['sumail','sumail hassan','mercury','king'],
  'Universe':      ['universe','saahil arora'],
  'Zai':           ['zai','ludwig wåhlberg'],
  'ppd':           ['ppd','peter dagger','peter'],
  'Arteezy':       ['arteezy','artour babaev','rtz'],
  'EternalEnvy':   ['eternalenvy','jacky mao','ee'],
  'FATA-':         ['fata','adrian trinks'],
  'Aui_2000':      ['aui_2000','kurtis ling','aui'],
  'pieliedie':     ['pieliedie','johan åström'],
  'Bone7':         ['bone7','pittner armand'],
  'Ame':           ['ame','wang chunyu','萧瑟'],
  'Maybe':         ['maybe','lu yao','somnus','路垚'],
  'Faith_bian':    ['faith_bian','zhang ruida','鞭酱'],
  'y`':            ['y`','zhang yiping','innocence'],
  'Chalice':       ['chalice','yang shenyi'],
  'xNova':         ['xnova','yap jian wei'],
  'NothingToSay':  ['nothingtosay','cheng jin xiang','nts'],
  'XinQ':          ['xinq','zhao zixing','qyqx'],
  'Miracle-':      ['miracle-','amer al-barkawi','miracle'],
  'MATUMBAMAN':    ['matumbaman','lasse urpalainen','matu'],
  'MinD_ContRoL':  ['mind_control','ivan ivanov','mc'],
  'GH':            ['gh','maroun merhej'],
  'JerAx':         ['jerax','jesse vainikka'],
  'N0tail':        ['n0tail','johan sundstein','bigdaddy','notail'],
  'Ana':           ['ana','anathan pham','god'],
  'Topson':        ['topson','topias taavitsainen'],
  'Ceb':           ['ceb','sébastien debs','7ckngmad'],
  'Cr1t-':         ['cr1t-','andreas nielsen','cr1t'],
  'Fly':           ['fly','tal aizik'],
  'RAMZES666':     ['ramzes666','roman kushnarev'],
  'No[o]ne':       ['no[o]ne','vladimir minenko','noone'],
  '9pasha':        ['9pasha','pavel khvastunov'],
  'RodjER':        ['rodjer','vladimir nikogosyan'],
  'Solo':          ['solo','alexei berezin'],
  'Nisha':         ['nisha','michal jankowski'],
  'YapzOr':        ['yapzor','yazied jaradat'],
  'w33':           ['w33','aliwi omar','w33ha'],
  'Resolut1on':    ['resolution','roman fominok'],
  'Saksa':         ['saksa','martin sazdov'],
  'MiSeRy':        ['misery','rasmuss filipsen'],
  'Yatoro':        ['yatoro','ilia mulyarchuk'],
  'TORONTOTOKYO':  ['torontotokyo','alexander khertek'],
  'Collapse':      ['collapse','magomed khalilov'],
  'Mira':          ['mira','miroslaw kolpakov'],
  'Miposhka':      ['miposhka','yaroslav naidenov'],
  'skiter':        ['skiter','oliver lepko'],
  'Nine':          ['nine','leon kirilin'],
  '33':            ['33','neta shapira'],
  'Sneyking':      ['sneyking','wu jingjun'],
  'Crystallis':    ['crystallis','remco arets'],
  'Quinn':         ['quinn','quinn callahan','ccnc'],
  'Ace':           ['ace','marcus hoelgaard'],
  'tOfu':          ['tofu','erik engel'],
  'Seleri':        ['seleri','melchior hillenkamp'],
  'Nightfall':     ['nightfall','egor grigorenko'],
  'gpk~':          ['gpk','danil skutin'],
  'Save-':         ['save-','vitalie melnic'],
  'Pure':          ['pure','ivan moskalenko'],
  'Larl':          ['larl','denis sigitov'],
  'dyrachyo':      ['dyrachyo','anton shkredov'],
  'MieRo':         ['miero','matvey vasyuninin'],
  'Bzm':           ['bzm','bozhidar bogdanov'],
  'ATF':           ['atf','amir al-assaf'],
  'Taiga':         ['taiga','tommy le'],
  'Misha':         ['misha','mikhail agatov'],
  'Yuragi':        ['yuragi','artem golubev'],
  'Kaka':          ['kaka','hu liangzhi'],
  'Kpii':          ['kpii','damien chok'],
  'BoBoKa':        ['boboka','ye zhibiao'],
  'Xxs':           ['xxs','lin jing'],
  'Monet':         ['monet','du peng'],
  'Emo':           ['emo','zhou yi'],
  'flyfly':        ['flyfly','jin zhiyi'],
  'JT-':           ['jt-','thiay jun wen'],
  'Oli~':          ['oli','chan chon kien'],
  'Sccc':          ['sccc','song chun'],
  'Moogy':         ['moogy','xu han'],
  'DJ':            ['dj','djardel jicko'],
  'MidOne':        ['midone','zheng yeik nai'],
  'Ohaiyo':        ['ohaiyo','khoo chong xin'],
  'Fade':          ['fade','pan yi'],
  'Dy':            ['dy','ding cong'],
  'Ori':           ['ori','zeng jiaoyang'],
  'Yang':          ['yang','zhou haiyang'],
  'Paparazi灬':    ['paparazi','zhang chengjun'],
  'Inflame':       ['inflame','he yongzheng'],
  'ah fu':         ['ah fu','chuang yong fu'],
  'Victoria':      ['victoria','chen guanhong'],
  'Op':            ['op','ou peng'],
  'Q':             ['q','fu bin'],
  'Agressif':      ['agressif','sun zheng'],
  'Shiki':         ['shiki','huang jiwei'],
  'Xz':            ['xz','chen zezhi'],
  'Garder':        ['garder','xuanhao lin'],
  'Cty':           ['cty','chen tianyu'],
  'old chicken':   ['old chicken','wang zhiyong'],
  'old eLeVeN':    ['old eleven','ren zhengwei'],
  'shadow':        ['shadow','chu zeyu'],
  'bLink':         ['blink','zhou yang','跳刀跳刀'],
  'Moo':           ['moo','david hull'],
  'Zayac':         ['zayac','bakyt emilzhanov'],
  'DM':            ['dm','dmitry dorokhin'],
  'Kingslayer':    ['kingslayer','ilya deriglazov'],
  'shiro':         ['shiro','guo xuanang'],
  'niu':           ['niu','li kongbo'],
  'planet':        ['planet','lin hao'],
  'Lou':           ['lou','lou zhen'],
  '天命':          ['tianming','xiao chaoyue'],
  'Xm':            ['xm','guo hongcheng'],
  'Whitemon':      ['whitemon','matthew filemon'],
  '9Class':        ['9class','edgar naltakyan'],
  'Malr1ne':       ['malr1ne','stanislav potorak'],
  '343':           ['343','adam shah'],
};

// ═══════════════════════════════════════════════════════════
// TI 元数据 — leagueId 全部通过 OpenDota API 验证
// ═══════════════════════════════════════════════════════════
const TI_META = {

  // TI1: OpenDota 无2011年数据，用位置默认值
  ti1: { name:'TI1', year:2011, leagueId:null,
    top5:[
      { rank:1, team:"Na'Vi", players:[
        { name:'Dendi', pos:[2] },{ name:'XBOCT', pos:[1] },{ name:'Puppey', pos:[5] },
        { name:'ARS-ART', pos:[3,4] },{ name:'LighTofHeaveN', pos:[4,5] },
      ]},
      { rank:2, team:'EHOME', players:[
        { name:'BurNIng', pos:[1] },{ name:'MMY', pos:[3,4] },{ name:'357', pos:[3] },
        { name:'Dai', pos:[2] },{ name:'LaNm', pos:[4,5] },
      ]},
      { rank:3, team:'MUFC', players:[
        { name:'Mushi', pos:[1,2] },{ name:'hyhy', pos:[2] },{ name:'XtiNcT', pos:[1] },
        { name:'ky.xY', pos:[3,4] },{ name:'Winter', pos:[4,5] },
      ]},
      { rank:4, team:'Scythe', players:[
        { name:'ChuaN', pos:[4,5] },{ name:'iceiceice', pos:[2,3] },{ name:'HYHY', pos:[2] },
        { name:'RGC', pos:[1] },{ name:'xFreedom', pos:[5] },
      ]},
      { rank:5, team:'iG', players:[
        { name:'Ferrari_430', pos:[2] },{ name:'Faith', pos:[5] },{ name:'YYF', pos:[3] },
        { name:'Zhou', pos:[1] },{ name:'SanSheng', pos:[4] },
      ]},
    ]},

  ti2: { name:'TI2', year:2012, leagueId:65001,
    top5:[
      { rank:1, team:'iG', players:[
        { name:'Ferrari_430', pos:[2] },{ name:'Faith', pos:[5] },{ name:'YYF', pos:[3] },
        { name:'Zhou', pos:[1] },{ name:'ChuaN', pos:[4,5] },
      ]},
      { rank:2, team:"Na'Vi", players:[
        { name:'Dendi', pos:[2] },{ name:'XBOCT', pos:[1] },{ name:'Puppey', pos:[5] },
        { name:'LighTofHeaveN', pos:[4] },{ name:'KuroKy', pos:[4,5] },
      ]},
      { rank:3, team:'Zenith', players:[
        { name:'Mushi', pos:[1,2] },{ name:'XtiNcT', pos:[1] },{ name:'ky.xY', pos:[3] },
        { name:'Yamateh', pos:[2] },{ name:'Ice', pos:[4,5] },
      ]},
      { rank:4, team:'LGD', players:[
        { name:'Sylar', pos:[1] },{ name:'xiao8', pos:[3,4] },{ name:'Yao', pos:[4,5] },
        { name:'DD', pos:[2] },{ name:'DDC', pos:[5] },
      ]},
      { rank:5, team:'Orange', players:[
        { name:'Mushi', pos:[1,2] },{ name:'Ohaiyo', pos:[3,4] },{ name:'XtiNcT', pos:[1] },
        { name:'Ice', pos:[4,5] },{ name:'Winter', pos:[5] },
      ]},
    ]},

  ti3: { name:'TI3', year:2013, leagueId:65006,
    top5:[
      { rank:1, team:'Alliance', players:[
        { name:'AdmiralBulldog', pos:[1,3] },{ name:'Akke', pos:[4,5] },{ name:'EGM', pos:[4,5] },
        { name:'s4', pos:[2,3] },{ name:'Loda', pos:[1] },
      ]},
      { rank:2, team:"Na'Vi", players:[
        { name:'Dendi', pos:[2] },{ name:'XBOCT', pos:[1] },{ name:'Puppey', pos:[5] },
        { name:'KuroKy', pos:[4,5] },{ name:'Funn1k', pos:[3,4] },
      ]},
      { rank:3, team:'Orange', players:[
        { name:'Mushi', pos:[1,2] },{ name:'Ohaiyo', pos:[3,4] },{ name:'XtiNcT', pos:[1] },
        { name:'ky.xY', pos:[2,3] },{ name:'Net', pos:[5] },
      ]},
      { rank:4, team:'TongFu', players:[
        { name:'Hao', pos:[1] },{ name:'Mu', pos:[2] },{ name:'SanSheng', pos:[5] },
        { name:'Banana', pos:[4] },{ name:'KingJ', pos:[3] },
      ]},
      { rank:5, team:'iG', players:[
        { name:'Ferrari_430', pos:[2] },{ name:'Faith', pos:[5] },{ name:'YYF', pos:[3] },
        { name:'Zhou', pos:[1] },{ name:'ChuaN', pos:[4,5] },
      ]},
    ]},

  ti4: { name:'TI4', year:2014, leagueId:600,
    top5:[
      { rank:1, team:'Newbee', players:[
        { name:'Hao', pos:[1] },{ name:'Mu', pos:[2] },{ name:'SanSheng', pos:[5] },
        { name:'xiao8', pos:[3,4] },{ name:'Banana', pos:[4] },
      ]},
      { rank:2, team:'Vici Gaming', players:[
        { name:'Sylar', pos:[1] },{ name:'Super', pos:[2] },{ name:'rotk', pos:[3,4] },
        { name:'Fenrir', pos:[4,5] },{ name:'fy', pos:[4,5] },
      ]},
      { rank:3, team:'EG', players:[
        { name:'Fear', pos:[1,3] },{ name:'Arteezy', pos:[1] },{ name:'Universe', pos:[3] },
        { name:'Zai', pos:[4,5] },{ name:'ppd', pos:[5] },
      ]},
      { rank:4, team:'DK', players:[
        { name:'BurNIng', pos:[1] },{ name:'Mushi', pos:[2] },{ name:'iceiceice', pos:[3,4] },
        { name:'LaNm', pos:[4,5] },{ name:'MMY', pos:[5] },
      ]},
      { rank:5, team:'Cloud9', players:[
        { name:'EternalEnvy', pos:[1,2] },{ name:'FATA-', pos:[2] },{ name:'Bone7', pos:[3] },
        { name:'Aui_2000', pos:[4,5] },{ name:'pieliedie', pos:[5] },
      ]},
    ]},

  ti5: { name:'TI5', year:2015, leagueId:2733,
    top5:[
      { rank:1, team:'EG', players:[
        { name:'Fear', pos:[1,3] },{ name:'SumaiL', pos:[2] },{ name:'Universe', pos:[3] },
        { name:'Aui_2000', pos:[4,5] },{ name:'ppd', pos:[5] },
      ]},
      { rank:2, team:'CDEC', players:[
        { name:'Agressif', pos:[1] },{ name:'Shiki', pos:[2] },{ name:'Xz', pos:[3,4] },
        { name:'Q', pos:[5] },{ name:'Garder', pos:[4] },
      ]},
      { rank:3, team:'EHOME', players:[
        { name:'BurNIng', pos:[1] },{ name:'Cty', pos:[2] },{ name:'LaNm', pos:[4,5] },
        { name:'rotk', pos:[3,4] },{ name:'DDC', pos:[5] },
      ]},
      { rank:4, team:'Vici Gaming', players:[
        { name:'Hao', pos:[1] },{ name:'Super', pos:[2] },{ name:'iceiceice', pos:[3,4] },
        { name:'Fenrir', pos:[4,5] },{ name:'fy', pos:[4,5] },
      ]},
      { rank:5, team:'LGD', players:[
        { name:'Sylar', pos:[1] },{ name:'Maybe', pos:[2] },{ name:'xiao8', pos:[3,4] },
        { name:'Yao', pos:[4,5] },{ name:'MMY', pos:[5] },
      ]},
    ]},

  ti6: { name:'TI6', year:2016, leagueId:4664,
    top5:[
      { rank:1, team:'Wings Gaming', players:[
        { name:'shadow', pos:[1] },{ name:'bLink', pos:[2] },{ name:'Faith_bian', pos:[3] },
        { name:'iceice', pos:[4] },{ name:'y`', pos:[5] },
      ]},
      { rank:2, team:'Digital Chaos', players:[
        { name:'Resolut1on', pos:[1] },{ name:'w33', pos:[2] },{ name:'Moo', pos:[3,4] },
        { name:'Saksa', pos:[4,5] },{ name:'MiSeRy', pos:[5] },
      ]},
      { rank:3, team:'EG', players:[
        { name:'Fear', pos:[1,3] },{ name:'SumaiL', pos:[2] },{ name:'Universe', pos:[3] },
        { name:'Zai', pos:[4,5] },{ name:'ppd', pos:[5] },
      ]},
      { rank:4, team:'Fnatic', players:[
        { name:'Mushi', pos:[1,2] },{ name:'MidOne', pos:[2] },{ name:'Ohaiyo', pos:[3] },
        { name:'DJ', pos:[4,5] },{ name:'343', pos:[5] },
      ]},
      { rank:5, team:'EHOME', players:[
        { name:'old chicken', pos:[1] },{ name:'old eLeVeN', pos:[3,4] },
        { name:'Fenrir', pos:[4,5] },{ name:'LaNm', pos:[5] },{ name:'iceiceice', pos:[2] },
      ]},
    ]},

  ti7: { name:'TI7', year:2017, leagueId:5401,
    top5:[
      { rank:1, team:'Team Liquid', players:[
        { name:'Miracle-', pos:[1,2] },{ name:'MATUMBAMAN', pos:[1] },{ name:'MinD_ContRoL', pos:[3] },
        { name:'GH', pos:[4,5] },{ name:'KuroKy', pos:[5] },
      ]},
      { rank:2, team:'Newbee', players:[
        { name:'Moogy', pos:[1] },{ name:'Sccc', pos:[2] },{ name:'Kpii', pos:[3] },
        { name:'Kaka', pos:[4] },{ name:'Faith', pos:[5] },
      ]},
      { rank:3, team:'LFY', players:[
        { name:'Ame', pos:[1] },{ name:'Super', pos:[2] },{ name:'Inflame', pos:[3] },
        { name:'ah fu', pos:[4] },{ name:'DDC', pos:[5] },
      ]},
      { rank:4, team:'LGD', players:[
        { name:'Ame', pos:[1] },{ name:'Maybe', pos:[2] },{ name:'old eLeVeN', pos:[3] },
        { name:'Victoria', pos:[4] },{ name:'Yao', pos:[5] },
      ]},
      { rank:5, team:'iG.Vitality', players:[
        { name:'Paparazi灬', pos:[1,2] },{ name:'Sakata', pos:[2] },{ name:'InJuly', pos:[3] },
        { name:'dogf1ghts', pos:[4] },{ name:'super', pos:[5] },
      ]},
    ]},

  ti8: { name:'TI8', year:2018, leagueId:9870,
    top5:[
      { rank:1, team:'OG', players:[
        { name:'Ana', pos:[1] },{ name:'Topson', pos:[2] },{ name:'Ceb', pos:[3,4] },
        { name:'JerAx', pos:[4,5] },{ name:'N0tail', pos:[4,5] },
      ]},
      { rank:2, team:'PSG.LGD', players:[
        { name:'Ame', pos:[1] },{ name:'Maybe', pos:[2] },{ name:'Chalice', pos:[3] },
        { name:'fy', pos:[4] },{ name:'xNova', pos:[5] },
      ]},
      { rank:3, team:'EG', players:[
        { name:'Arteezy', pos:[1] },{ name:'SumaiL', pos:[2] },{ name:'s4', pos:[3] },
        { name:'Cr1t-', pos:[4,5] },{ name:'Fly', pos:[4,5] },
      ]},
      { rank:4, team:'Team Liquid', players:[
        { name:'Miracle-', pos:[1,2] },{ name:'MATUMBAMAN', pos:[1] },{ name:'MinD_ContRoL', pos:[3] },
        { name:'GH', pos:[4,5] },{ name:'KuroKy', pos:[5] },
      ]},
      { rank:5, team:'Virtus.pro', players:[
        { name:'RAMZES666', pos:[1] },{ name:'No[o]ne', pos:[2] },{ name:'9pasha', pos:[3] },
        { name:'RodjER', pos:[4,5] },{ name:'Solo', pos:[5] },
      ]},
    ]},

  ti9: { name:'TI9', year:2019, leagueId:10749,
    top5:[
      { rank:1, team:'OG', players:[
        { name:'Ana', pos:[1] },{ name:'Topson', pos:[2] },{ name:'Ceb', pos:[3,4] },
        { name:'JerAx', pos:[4,5] },{ name:'N0tail', pos:[4,5] },
      ]},
      { rank:2, team:'Team Liquid', players:[
        { name:'Miracle-', pos:[1,2] },{ name:'w33', pos:[2,3] },{ name:'MinD_ContRoL', pos:[3] },
        { name:'GH', pos:[4,5] },{ name:'KuroKy', pos:[5] },
      ]},
      { rank:3, team:'PSG.LGD', players:[
        { name:'Ame', pos:[1] },{ name:'Maybe', pos:[2] },{ name:'Chalice', pos:[3] },
        { name:'fy', pos:[4] },{ name:'xNova', pos:[5] },
      ]},
      { rank:4, team:'Team Secret', players:[
        { name:'Nisha', pos:[1,2] },{ name:'MidOne', pos:[2] },{ name:'Zai', pos:[3] },
        { name:'YapzOr', pos:[4,5] },{ name:'Puppey', pos:[5] },
      ]},
      { rank:5, team:'Vici Gaming', players:[
        { name:'Paparazi灬', pos:[1,2] },{ name:'Ori', pos:[2] },{ name:'Yang', pos:[3] },
        { name:'Fade', pos:[4] },{ name:'Dy', pos:[5] },
      ]},
    ]},

  ti10: { name:'TI10', year:2021, leagueId:13256,
    top5:[
      { rank:1, team:'Team Spirit', players:[
        { name:'Yatoro', pos:[1] },{ name:'TORONTOTOKYO', pos:[2] },{ name:'Collapse', pos:[3,4] },
        { name:'Mira', pos:[4,5] },{ name:'Miposhka', pos:[5] },
      ]},
      { rank:2, team:'PSG.LGD', players:[
        { name:'Ame', pos:[1] },{ name:'NothingToSay', pos:[2] },{ name:'Faith_bian', pos:[3,4] },
        { name:'XinQ', pos:[4,5] },{ name:'y`', pos:[5] },
      ]},
      { rank:3, team:'Team Secret', players:[
        { name:'Nisha', pos:[1,2] },{ name:'SumaiL', pos:[2] },{ name:'iceiceice', pos:[3] },
        { name:'YapzOr', pos:[4,5] },{ name:'Puppey', pos:[5] },
      ]},
      { rank:4, team:'iG', players:[
        { name:'flyfly', pos:[1] },{ name:'Emo', pos:[2] },{ name:'JT-', pos:[3,4] },
        { name:'Kaka', pos:[4,5] },{ name:'Oli~', pos:[5] },
      ]},
      { rank:5, team:'Virtus.pro', players:[
        { name:'Nightfall', pos:[1] },{ name:'gpk~', pos:[2] },{ name:'DM', pos:[3] },
        { name:'Save-', pos:[4] },{ name:'Kingslayer', pos:[5] },
      ]},
    ]},

  ti11: { name:'TI11', year:2022, leagueId:14268,
    top5:[
      { rank:1, team:'Tundra Esports', players:[
        { name:'skiter', pos:[1] },{ name:'Nine', pos:[2] },{ name:'33', pos:[3] },
        { name:'Saksa', pos:[4,5] },{ name:'Sneyking', pos:[4,5] },
      ]},
      { rank:2, team:'Team Secret', players:[
        { name:'Crystallis', pos:[1] },{ name:'Nisha', pos:[1,2] },{ name:'Resolut1on', pos:[3] },
        { name:'Zayac', pos:[4] },{ name:'Puppey', pos:[5] },
      ]},
      { rank:3, team:'Team Liquid', players:[
        { name:'MATUMBAMAN', pos:[1] },{ name:'miCKe', pos:[2] },{ name:'Zai', pos:[3] },
        { name:'Boxi', pos:[4] },{ name:'iNsania', pos:[5] },
      ]},
      { rank:4, team:'Team Aster', players:[
        { name:'Monet', pos:[1] },{ name:'Ori', pos:[2] },{ name:'Xxs', pos:[3] },
        { name:'BoBoKa', pos:[4] },{ name:'皮球', pos:[5] },
      ]},
      { rank:5, team:'OG', players:[
        { name:'Yuragi', pos:[1] },{ name:'Bzm', pos:[1,2] },{ name:'ATF', pos:[3,4] },
        { name:'Taiga', pos:[4] },{ name:'Misha', pos:[5] },
      ]},
    ]},

  ti12: { name:'TI12', year:2023, leagueId:15728,
    top5:[
      { rank:1, team:'Team Spirit', players:[
        { name:'Yatoro', pos:[1] },{ name:'Larl', pos:[2] },{ name:'Collapse', pos:[3,4] },
        { name:'Mira', pos:[4,5] },{ name:'Miposhka', pos:[5] },
      ]},
      { rank:2, team:'Gaimin Gladiators', players:[
        { name:'dyrachyo', pos:[1] },{ name:'Quinn', pos:[2] },{ name:'Ace', pos:[3] },
        { name:'tOfu', pos:[4,5] },{ name:'Seleri', pos:[5] },
      ]},
      { rank:3, team:'LGD Gaming', players:[
        { name:'shiro', pos:[1] },{ name:'NothingToSay', pos:[2] },{ name:'niu', pos:[3] },
        { name:'planet', pos:[4] },{ name:'y`', pos:[5] },
      ]},
      { rank:4, team:'Azure Ray', players:[
        { name:'Lou', pos:[1] },{ name:'Maybe', pos:[2] },{ name:'Chalice', pos:[3] },
        { name:'fy', pos:[4] },{ name:'天命', pos:[5] },
      ]},
      { rank:5, team:'BetBoom Team', players:[
        { name:'Nightfall', pos:[1] },{ name:'gpk~', pos:[2] },{ name:'Pure', pos:[3] },
        { name:'Save-', pos:[4] },{ name:'TORONTOTOKYO', pos:[5] },
      ]},
    ]},

  ti13: { name:'TI13', year:2024, leagueId:16935,
    top5:[
      { rank:1, team:'Team Liquid', players:[
        { name:'miCKe', pos:[1] },{ name:'Nisha', pos:[1,2] },{ name:'33', pos:[3] },
        { name:'Boxi', pos:[4] },{ name:'iNsania', pos:[5] },
      ]},
      { rank:2, team:'Gaimin Gladiators', players:[
        { name:'dyrachyo', pos:[1] },{ name:'Quinn', pos:[2] },{ name:'Ace', pos:[3] },
        { name:'tOfu', pos:[4,5] },{ name:'Seleri', pos:[5] },
      ]},
      { rank:3, team:'Team Falcons', players:[
        { name:'skiter', pos:[1] },{ name:'Malr1ne', pos:[2] },{ name:'ATF', pos:[3] },
        { name:'Cr1t-', pos:[4,5] },{ name:'Sneyking', pos:[5] },
      ]},
      { rank:4, team:'Tundra Esports', players:[
        { name:'Pure', pos:[1] },{ name:'Topson', pos:[2] },{ name:'RAMZES666', pos:[3] },
        { name:'9Class', pos:[4] },{ name:'Whitemon', pos:[5] },
      ]},
      { rank:5, team:'Xtreme Gaming', players:[
        { name:'Ame', pos:[1] },{ name:'Xm', pos:[2] },{ name:'Xxs', pos:[3] },
        { name:'XinQ', pos:[4] },{ name:'Dy', pos:[5] },
      ]},
    ]},

  ti14: { name:'TI14', year:2025, leagueId:18324,
    top5:[
      { rank:1, team:'TBD', players:[
        { name:'_TBD_1', pos:[1] },{ name:'_TBD_2', pos:[2] },{ name:'_TBD_3', pos:[3] },
        { name:'_TBD_4', pos:[4,5] },{ name:'_TBD_5', pos:[5] },
      ]},
    ]},
};

// ═══════════════════════════════════════════════════════════
// HTTPS + 缓存
// ═══════════════════════════════════════════════════════════
function httpsGet(url) {
  return new Promise((resolve, reject) => {
    const u = new URL(url);
    https.request({
      hostname: u.hostname, path: u.pathname + u.search, method: 'GET',
      headers: {'Accept':'application/json','User-Agent':'TIDraft/4.0'}, timeout: 20000,
    }, res => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        if (res.statusCode === 429) return reject(new Error('RATE_LIMIT'));
        if (res.statusCode !== 200) return reject(new Error('HTTP '+res.statusCode));
        try { resolve(JSON.parse(data)); } catch { reject(new Error('JSON')); }
      });
    }).on('error', reject).on('timeout', function(){this.destroy();reject(new Error('TIMEOUT'));}).end();
  });
}

const sleep = ms => new Promise(r => setTimeout(r, ms));
let reqCount = 0;

async function apiFetch(url) {
  reqCount++;
  if (reqCount > 1) await sleep(CONFIG.rateLimit);
  for (let i = 0; i < CONFIG.retries; i++) {
    try {
      process.stdout.write(`  → ${url.replace('https://api.opendota.com/api','[OD]')}\n`);
      return await httpsGet(url);
    } catch(e) {
      if (e.message === 'RATE_LIMIT') { console.warn('  ⚠ 429, wait 60s'); await sleep(61000); i--; continue; }
      console.warn(`  ✗ #${i+1}: ${e.message}`);
      if (i < CONFIG.retries-1) await sleep(3000*(i+1));
    }
  }
  return null;
}

// 缓存
let cache = {};
try { if (fs.existsSync(CONFIG.cacheFile)) cache = JSON.parse(fs.readFileSync(CONFIG.cacheFile,'utf8')); } catch(e) {}
cache.matchDetails  = cache.matchDetails  || {};
cache.leagueMatches = cache.leagueMatches || {};
function saveCache() {
  try {
    // 不保存 matchDetails (太大容易导致 Invalid string length)
    const { matchDetails, ...toSave } = cache;
    fs.writeFileSync(CONFIG.cacheFile, JSON.stringify(toSave), 'utf8');
  } catch(e) { /* 缓存保存失败不阻断主流程 */ }
}

// ═══════════════════════════════════════════════════════════
// 名称匹配 (带别名)
// ═══════════════════════════════════════════════════════════
function normalize(s) {
  return (s||'').toLowerCase().replace(/[^a-z0-9一-鿿]/g,'');
}

function matchScore(apiName, targetName) {
  // 返回0-100分，分数越高越匹配
  const a = normalize(apiName);
  if (!a || a.length < 2) return 0;
  const t = normalize(targetName);
  if (!t || t.length < 2) return 0;

  // 完全一致
  if (a === t) return 100;

  // 别名完全一致
  const aliases = PLAYER_ALIASES[targetName] || [];
  for (const alias of aliases) {
    const al = normalize(alias);
    if (!al || al.length < 2) continue;
    if (a === al) return 95;
  }

  // 长串包含 (至少5字符的子串，避免单字符误匹配)
  if (t.length >= 5 && a.includes(t)) return 85;
  if (a.length >= 5 && t.includes(a)) return 85;

  // 别名包含 (至少5字符，避免像 "era" 误匹配 "pittnERAmand")
  for (const alias of aliases) {
    const al = normalize(alias);
    if (!al || al.length < 4) continue;
    if (a.includes(al) && al.length >= 5) return 80;
    if (al.includes(a) && a.length >= 5) return 75;
  }

  // 单词级匹配
  const aWords = a.split(/[\s_\-\.]+/).filter(w => w.length >= 3);
  const tWords = t.split(/[\s_\-\.]+/).filter(w => w.length >= 3);
  for (const aw of aWords) {
    for (const tw of tWords) {
      if (aw === tw) return 70;
      if ((aw.includes(tw) || tw.includes(aw)) && Math.min(aw.length, tw.length) >= 5) return 65;
    }
  }
  // 别名单词匹配
  for (const alias of aliases) {
    const alWords = normalize(alias).split(/[\s_\-\.]+/).filter(w => w.length >= 3);
    for (const alw of alWords) {
      for (const aw of aWords) {
        if (aw === alw) return 60;
      }
    }
  }

  return 0;
}

function nameMatch(apiName, targetName) {
  return matchScore(apiName, targetName) >= 60;
}

// ═══════════════════════════════════════════════════════════
// 聚合
// ═══════════════════════════════════════════════════════════
function aggregatePlayer(matches) {
  if (!matches.length) return null;
  const avg = key => {
    const v = matches.map(m => m[key]).filter(v => v!=null && !isNaN(v) && v>0);
    return v.length ? Math.round(v.reduce((s,x)=>s+x,0)/v.length*10)/10 : 0;
  };
  const kills=avg('kills'), deaths=avg('deaths'), assists=avg('assists');
  const gpm=avg('gold_per_min'), xpm=avg('xp_per_min');
  const obs=avg('obs_placed'), sen=avg('sen_placed'), stacks=avg('camps_stacked');
  const kda = deaths>0 ? Math.round((kills+assists)/deaths*10)/10 : (kills+assists);
  const lh10 = matches.map(m=>m.lh_t?.[1]).filter(v=>v>0);
  const lane_eff = lh10.length ? Math.round(lh10.reduce((s,v)=>s+v,0)/lh10.length/70*100) : null;
  const hero_pool = [...new Set(matches.map(m=>m.hero_id).filter(Boolean))].length;
  const dwVals = matches.filter(m=>(m.obs_placed||0)>0)
    .map(m=>Math.round(((m.observer_kills||0)+(m.sentry_kills||0))/Math.max(m.obs_placed,1)*100));
  const obs_denied = dwVals.length>=2 ? Math.round(dwVals.reduce((s,v)=>s+v,0)/dwVals.length) : null;
  return { gpm, xpm, kda, lane_eff, hero_pool, assists, obs_placed:obs, sen_placed:sen, obs_denied, stacks, n:matches.length };
}

// ═══════════════════════════════════════════════════════════
// TI1: 生成估值数据 (OpenDota 无2011年数据)
// ═══════════════════════════════════════════════════════════
const POS_DEFAULTS = {
  1: { gpm:580, xpm:640, kda:3.5, lane_eff:54, hero_pool:10, assists:8,  obs_placed:2, sen_placed:1, obs_denied:42, stacks:1 },
  2: { gpm:560, xpm:640, kda:3.7, lane_eff:53, hero_pool:14, assists:10, obs_placed:3, sen_placed:1, obs_denied:44, stacks:2 },
  3: { gpm:420, xpm:490, kda:3.0, lane_eff:45, hero_pool:18, assists:14, obs_placed:7, sen_placed:3, obs_denied:52, stacks:7 },
  4: { gpm:310, xpm:390, kda:3.1, lane_eff:43, hero_pool:22, assists:22, obs_placed:14, sen_placed:10, obs_denied:66, stacks:6 },
  5: { gpm:270, xpm:345, kda:2.8, lane_eff:42, hero_pool:20, assists:24, obs_placed:18, sen_placed:14, obs_denied:70, stacks:4 },
};

function genEstimated(name, pos, ti, team) {
  const p = Array.isArray(pos) ? pos[0] : pos;
  const d = POS_DEFAULTS[p] || POS_DEFAULTS[2];
  return {
    id: name, name, allowedPos: pos, ti, team,
    account_id: null, matched_name: null, matchCount: 0, source: 'estimated',
    stats: { ...d, kda: d.kda },
  };
}

// ═══════════════════════════════════════════════════════════
// 采集一届 TI (TI2-TI14)
// ═══════════════════════════════════════════════════════════
async function collectTI(tiKey, tiMeta) {
  console.log(`\n━━━ ${tiMeta.name} (${tiMeta.year}) leagueId:${tiMeta.leagueId||'N/A'} ━━━`);

  // TI1 特殊处理
  if (!tiMeta.leagueId) {
    console.log('  → 无OpenDota联赛数据, 使用位置估值');
    const results = [];
    for (const team of tiMeta.top5) {
      for (const player of team.players) {
        results.push(genEstimated(player.name, player.pos, tiMeta.name, team.team));
      }
    }
    return results;
  }

  // 1. 获取联赛比赛列表
  const ck = 'league_'+tiMeta.leagueId;
  let matchList = cache.leagueMatches[ck];
  if (matchList) {
    console.log(`  ✓ 缓存命中: ${matchList.length} 场比赛`);
  } else {
    matchList = await apiFetch(`https://${CONFIG.opendotaBase}/api/leagues/${tiMeta.leagueId}/matches`) || [];
    if (matchList.length) { cache.leagueMatches[ck] = matchList; saveCache(); }
    console.log(`  ✓ API返回: ${matchList.length} 场比赛`);
  }
  if (!matchList.length) {
    console.warn('  ⚠ 无比赛数据');
    return [];
  }

  // 2. 获取比赛详情, 按 account_id 收集
  const byAccount = {};
  let done = 0;
  for (const m of matchList) {
    done++;
    if (done % 30 === 0)
      process.stdout.write(`\r  详情 ${done}/${matchList.length} (${Math.round(done/matchList.length*100)}%)\n`);

    const mid = m.match_id;
    let detail = cache.matchDetails[mid];
    if (!detail) {
      detail = await apiFetch(`https://${CONFIG.opendotaBase}/api/matches/${mid}`);
      if (detail) { /* 不缓存match详情(太大了)，只缓存league列表 */ }
    }
    if (!detail?.players) continue;

    for (const p of detail.players) {
      if (!p.account_id) continue;
      const aid = p.account_id;
      if (!byAccount[aid]) byAccount[aid] = [];
      byAccount[aid].push({
        hero_id:       p.hero_id,
        kills:         p.kills||0,
        deaths:        p.deaths||0,
        assists:       p.assists||0,
        gold_per_min:  p.gold_per_min||0,
        xp_per_min:    p.xp_per_min||0,
        lh_t:          p.lh_t||[],
        obs_placed:    p.obs_placed||0,
        sen_placed:    p.sen_placed||0,
        observer_kills:p.observer_kills||0,
        sentry_kills:  p.sentry_kills||0,
        camps_stacked: p.camps_stacked||0,
        personaname:   p.personaname||'',
      });
    }
  }
  console.log(`\r  详情 ${done}/${matchList.length} 完成, ${Object.keys(byAccount).length} 个账号`);

  // 3. 匹配选手
  const results = [];
  const usedAccounts = new Set(); // 防止多个选手匹配到同一个账号
  for (const team of tiMeta.top5) {
    console.log(`\n  ▸ ${team.team} (第${team.rank}名)`);
    for (const player of team.players) {
      let bestId = null, bestName = null, bestScore = 0;

      // 遍历所有账号，找最高分匹配
      for (const [aid, stats] of Object.entries(byAccount)) {
        if (stats.length < 2) continue;
        if (usedAccounts.has(parseInt(aid))) continue; // 已被其他选手占用
        const pn = stats[0].personaname;
        const score = matchScore(pn, player.name);
        if (score > bestScore) {
          bestId = parseInt(aid);
          bestName = pn;
          bestScore = score;
        }
      }

      // 需要至少65分才算有效匹配
      const validMatch = bestScore >= 65;
      if (validMatch) usedAccounts.add(bestId);
      const agg = validMatch ? aggregatePlayer(byAccount[bestId]) : null;

      if (validMatch) {
        console.log(`    ${player.name}: score:${bestScore} GPM:${agg.gpm} XPM:${agg.xpm} KDA:${agg.kda} lane:${agg.lane_eff}% heroes:${agg.hero_pool} obs:${agg.obs_placed} sen:${agg.sen_placed} deward:${agg.obs_denied}% stk:${agg.stacks} [${agg.n}场] via ${bestName}`);
      } else {
        console.warn(`    ✗ ${player.name}: 未匹配 (最高分:${bestScore} ${bestName||'N/A'})`);
      }

      results.push({
        id: bestId || player.name,
        name: player.name,
        allowedPos: player.pos,
        ti: tiMeta.name,
        team: team.team,
        account_id: bestId,
        matched_name: bestName,
        matchCount: agg?.n ?? 0,
        matchScore: validMatch ? bestScore : 0,
        source: validMatch ? 'api' : 'missing',
        stats: agg ? {
          gpm: agg.gpm, xpm: agg.xpm, kda: agg.kda,
          lane_eff: agg.lane_eff, hero_pool: agg.hero_pool, assists: agg.assists,
          obs_placed: agg.obs_placed, sen_placed: agg.sen_placed,
          obs_denied: agg.obs_denied, stacks: agg.stacks,
        } : null,
      });
    }
  }
  return results;
}

// ═══════════════════════════════════════════════════════════
// 后处理: 空字段填默认值
// ═══════════════════════════════════════════════════════════
function fillGaps(players) {
  const fields = ['gpm','xpm','kda','lane_eff','hero_pool','assists','obs_placed','sen_placed','obs_denied','stacks'];
  for (const p of players) {
    const pos = Array.isArray(p.allowedPos) ? p.allowedPos[0] : (p.allowedPos || 2);
    const d = POS_DEFAULTS[pos] || POS_DEFAULTS[2];
    let filled = 0;
    if (!p.stats) { p.stats = {...d}; filled = fields.length; }
    else {
      for (const k of fields) {
        if (p.stats[k] == null || p.stats[k] === 0) { p.stats[k] = d[k]; filled++; }
      }
    }
    if (p.source === 'missing') p.source = filled===fields.length ? 'estimated' : 'partial';
    else if (filled > 0 && p.source !== 'estimated') p.source = 'partial';
  }
  return players;
}

// ═══════════════════════════════════════════════════════════
// 输出
// ═══════════════════════════════════════════════════════════
function writeOutput(allPlayers) {
  const summary = { total:allPlayers.length, byTI:{}, bySource:{} };
  for (const p of allPlayers) {
    summary.byTI[p.ti] = (summary.byTI[p.ti]||0)+1;
    summary.bySource[p.source] = (summary.bySource[p.source]||0)+1;
  }

  const out = `/**
 * TI Draft 选手数据库 — 全历届
 * 生成: ${new Date().toISOString()}
 * 总记录: ${allPlayers.length} (同名选手不同届TI独立)
 * 覆盖: TI1 (2011) — TI14 (2025)
 *
 * 数据格式: 与 engine.js/config.js 完全兼容
 * source: api | partial | estimated
 */

export const DIMINISHING_WEIGHTS = [1.0, 0.75, 0.55, 0.40, 0.30];

export const POSITION_METRICS = {
  1: ['gpm', 'xpm', 'kda', 'lane_eff', 'hero_pool'],
  2: ['gpm', 'kda', 'xpm', 'hero_pool', 'lane_eff'],
  3: ['kda', 'stacks', 'lane_eff', 'gpm', 'assists'],
  4: ['assists', 'sen_placed', 'obs_denied', 'stacks', 'kda'],
  5: ['sen_placed', 'obs_placed', 'obs_denied', 'assists', 'lane_eff'],
};

export const TI_PLAYERS = ${JSON.stringify(allPlayers, null, 2)};

export const TI_POOLS = (() => {
  const pools = {};
  TI_PLAYERS.forEach(p => {
    const key = p.team + '__' + p.ti;
    if (!pools[key]) pools[key] = { team:p.team, ti:p.ti, players:[] };
    pools[key].players.push(p);
  });
  return pools;
})();

export const DATA_SUMMARY = ${JSON.stringify(summary, null, 2)};
`;

  const dir = path.dirname(CONFIG.outputFile);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(CONFIG.outputFile, out, 'utf8');
  console.log(`\n✅ 写入: ${CONFIG.outputFile}`);
  console.log(`   总记录: ${allPlayers.length}`);
  console.log(`   各届:`, summary.byTI);
  console.log(`   来源:`, summary.bySource);
}

// ═══════════════════════════════════════════════════════════
async function main() {
  const filter = process.argv[2] || null;
  console.log('═══════════════════════════════════════');
  console.log('  TI Draft 数据采集 v4.0');
  console.log('  策略: league matches → match detail');
  console.log('  TI1: 位置估值 (OpenDota无2011年数据)');
  console.log('═══════════════════════════════════════');

  let all = [];
  for (const [k, ti] of Object.entries(TI_META)) {
    if (ti.top5[0]?.players[0]?.name?.startsWith('_TBD')) {
      console.log(`\n⏭ ${ti.name}: 待定`);
      continue;
    }
    if (filter && k !== filter) continue;
    try {
      const r = await collectTI(k, ti);
      all.push(...r);
    } catch(e) {
      console.error(`  ✗ ${ti.name}:`, e.message);
    }
  }

  all = fillGaps(all);
  writeOutput(all);
  console.log('\n═══════════════════════════════════════');
}

if (require.main === module) {
  main().catch(e => { console.error('Fatal:', e); process.exit(1); });
}
module.exports = { collectTI, TI_META, PLAYER_ALIASES };
