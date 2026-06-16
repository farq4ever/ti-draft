/**
 * TI Draft — 选手数据库
 * 生成时间: 2026-06-12T10:47:00.570Z
 * 选手总数: 81
 * 覆盖范围: TI1-TI5 前5名战队
 *
 * source 含义:
 *   opendota_league_filter  → OpenDota API 按联赛ID过滤
 *   opendota_year_filter    → OpenDota API 按时间范围过滤
 *   opendota_league_scrape  → OpenDota API 联赛比赛反查
 *   manual                  → 手工研究数据 (Liquipedia/赛后报道)
 *
 * dewardSource 含义:
 *   deward             → 真实排眼率 (obs_killed/obs_placed)
 *   fight_participation→ 团战参与率替代 (obs数据不足时)
 *   manual             → 手工数据
 *
 * manualFields: 列出哪些字段用手工数据补充
 */

// 位置专属评分配置
const POS_CONFIG = {
  1: { label:'Carry',    metrics:[
    { key:'gpm',     label:'GPM',   bench:700 },
    { key:'xpm',     label:'XPM',   bench:750 },
    { key:'kda',     label:'KDA',   bench:5.0 },
    { key:'laneEff', label:'线优率', bench:55  },
    { key:'heroes',  label:'英雄池', bench:18  },
  ]},
  2: { label:'Mid',      metrics:[
    { key:'gpm',     label:'GPM',   bench:640 },
    { key:'kda',     label:'KDA',   bench:5.0 },
    { key:'xpm',     label:'XPM',   bench:700 },
    { key:'heroes',  label:'英雄池', bench:22  },
    { key:'laneEff', label:'线优率', bench:55  },
  ]},
  3: { label:'Offlane',  metrics:[
    { key:'kda',     label:'KDA',   bench:3.8 },
    { key:'stacks',  label:'叠野',   bench:8   },
    { key:'laneEff', label:'线优率', bench:48  },
    { key:'gpm',     label:'GPM',   bench:480 },
    { key:'assists', label:'助攻',   bench:18  },
  ]},
  4: { label:'Soft Sup', metrics:[
    { key:'assists', label:'助攻',       bench:22 },
    { key:'obs',     label:'真眼',       bench:14 },
    { key:'deward',  label:'排眼/参与率', bench:60 },
    { key:'stacks',  label:'叠野',       bench:10 },
    { key:'kda',     label:'KDA',       bench:3.5 },
  ]},
  5: { label:'Hard Sup', metrics:[
    { key:'obs',     label:'真眼',       bench:18 },
    { key:'sen',     label:'假眼',       bench:12 },
    { key:'deward',  label:'排眼/参与率', bench:65 },
    { key:'assists', label:'助攻',       bench:26 },
    { key:'laneEff', label:'线优率',     bench:50 },
  ]},
};

// 边际递减权重 (同指标第1-5名球员的贡献权重)
const DIM_WEIGHTS = [1.0, 0.75, 0.55, 0.40, 0.30];

// 选手数据
const TI_PLAYERS = [
  {
    "name": "Dendi",
    "pos": [
      2
    ],
    "ti": "TI1",
    "team": "Na'Vi",
    "gpm": 510,
    "xpm": 590,
    "kda": 6.3,
    "laneEff": 50,
    "heroes": 121,
    "assists": 10.3,
    "obs": 4,
    "sen": 2,
    "deward": 74,
    "stacks": 2,
    "source": "opendota_league_filter",
    "dewardSource": "fight_participation",
    "matchCount": 21318,
    "manualFields": [
      "gpm",
      "xpm",
      "laneEff",
      "obs",
      "sen",
      "stacks"
    ]
  },
  {
    "name": "XBOCT",
    "pos": [
      1
    ],
    "ti": "TI1",
    "team": "Na'Vi",
    "gpm": 580,
    "xpm": 640,
    "kda": 3.2,
    "laneEff": 52,
    "heroes": 10,
    "assists": 9,
    "obs": 2,
    "sen": 1,
    "deward": 38,
    "stacks": 1,
    "source": "manual",
    "matchCount": 0
  },
  {
    "name": "Puppey",
    "pos": [
      5
    ],
    "ti": "TI1",
    "team": "Na'Vi",
    "gpm": 240,
    "xpm": 310,
    "kda": 5.7,
    "laneEff": 40,
    "heroes": 111,
    "assists": 12.4,
    "obs": 14,
    "sen": 10,
    "deward": 71,
    "stacks": 3,
    "source": "opendota_league_filter",
    "dewardSource": "fight_participation",
    "matchCount": 3416,
    "manualFields": [
      "gpm",
      "xpm",
      "laneEff",
      "obs",
      "sen",
      "stacks"
    ]
  },
  {
    "name": "ARS-ART",
    "pos": [
      3,
      4
    ],
    "ti": "TI1",
    "team": "Na'Vi",
    "gpm": 380,
    "xpm": 450,
    "kda": 2.8,
    "laneEff": 44,
    "heroes": 15,
    "assists": 15,
    "obs": 7,
    "sen": 3,
    "deward": 52,
    "stacks": 6,
    "source": "manual",
    "matchCount": 0
  },
  {
    "name": "LighTofHeaveN",
    "pos": [
      4,
      5
    ],
    "ti": "TI1",
    "team": "Na'Vi",
    "gpm": 290,
    "xpm": 370,
    "kda": 4.3,
    "laneEff": 42,
    "heroes": 123,
    "assists": 11.7,
    "obs": 11,
    "sen": 8,
    "deward": 70,
    "stacks": 5,
    "source": "opendota_league_filter",
    "dewardSource": "fight_participation",
    "matchCount": 2630,
    "manualFields": [
      "gpm",
      "xpm",
      "laneEff",
      "obs",
      "sen",
      "stacks"
    ]
  },
  {
    "name": "BurNIng",
    "pos": [
      1
    ],
    "ti": "TI1",
    "team": "EHOME",
    "gpm": 610,
    "xpm": 670,
    "kda": 3.5,
    "laneEff": 55,
    "heroes": 9,
    "assists": 8,
    "obs": 2,
    "sen": 1,
    "deward": 36,
    "stacks": 1,
    "source": "manual",
    "matchCount": 0
  },
  {
    "name": "357",
    "pos": [
      3
    ],
    "ti": "TI1",
    "team": "EHOME",
    "gpm": 400,
    "xpm": 470,
    "kda": 2.9,
    "laneEff": 44,
    "heroes": 14,
    "assists": 14,
    "obs": 6,
    "sen": 2,
    "deward": 50,
    "stacks": 5,
    "source": "manual",
    "matchCount": 0
  },
  {
    "name": "ChuaN",
    "pos": [
      4,
      5
    ],
    "ti": "TI1",
    "team": "EHOME",
    "gpm": 260,
    "xpm": 330,
    "kda": 5.6,
    "laneEff": 40,
    "heroes": 123,
    "assists": 11.2,
    "obs": 15,
    "sen": 11,
    "deward": 74,
    "stacks": 4,
    "source": "opendota_league_filter",
    "dewardSource": "fight_participation",
    "matchCount": 19194,
    "manualFields": [
      "gpm",
      "xpm",
      "laneEff",
      "obs",
      "sen",
      "stacks"
    ]
  },
  {
    "name": "MMY",
    "pos": [
      3,
      4
    ],
    "ti": "TI1",
    "team": "EHOME",
    "gpm": 370,
    "xpm": 440,
    "kda": 2.8,
    "laneEff": 44,
    "heroes": 16,
    "assists": 16,
    "obs": 8,
    "sen": 4,
    "deward": 54,
    "stacks": 6,
    "source": "manual",
    "matchCount": 0
  },
  {
    "name": "Mushi",
    "pos": [
      1,
      2
    ],
    "ti": "TI1",
    "team": "MUFC",
    "gpm": 570,
    "xpm": 640,
    "kda": 5.2,
    "laneEff": 53,
    "heroes": 117,
    "assists": 13.9,
    "obs": 3,
    "sen": 1,
    "deward": 75,
    "stacks": 2,
    "source": "opendota_league_filter",
    "dewardSource": "fight_participation",
    "matchCount": 3943,
    "manualFields": [
      "gpm",
      "xpm",
      "laneEff",
      "obs",
      "sen",
      "stacks"
    ]
  },
  {
    "name": "Ferrari_430",
    "pos": [
      2
    ],
    "ti": "TI1",
    "team": "IG",
    "gpm": 545,
    "xpm": 625,
    "kda": 5.7,
    "laneEff": 52,
    "heroes": 124,
    "assists": 12.8,
    "obs": 3,
    "sen": 1,
    "deward": 75,
    "stacks": 1,
    "source": "opendota_league_filter",
    "dewardSource": "fight_participation",
    "matchCount": 6407,
    "manualFields": [
      "gpm",
      "xpm",
      "laneEff",
      "obs",
      "sen",
      "stacks"
    ]
  },
  {
    "name": "Faith",
    "pos": [
      5
    ],
    "ti": "TI1",
    "team": "IG",
    "gpm": 250,
    "xpm": 320,
    "kda": 2.7,
    "laneEff": 41,
    "heroes": 19,
    "assists": 21,
    "obs": 16,
    "sen": 12,
    "deward": 68,
    "stacks": 4,
    "source": "manual",
    "matchCount": 0
  },
  {
    "name": "YYF",
    "pos": [
      3
    ],
    "ti": "TI1",
    "team": "IG",
    "gpm": 415,
    "xpm": 485,
    "kda": 3,
    "laneEff": 45,
    "heroes": 16,
    "assists": 14,
    "obs": 7,
    "sen": 3,
    "deward": 52,
    "stacks": 7,
    "source": "manual",
    "matchCount": 0
  },
  {
    "name": "Ferrari_430",
    "pos": [
      2
    ],
    "ti": "TI2",
    "team": "IG",
    "gpm": 560,
    "xpm": 640,
    "kda": 5.7,
    "laneEff": 54,
    "heroes": 124,
    "assists": 12.8,
    "obs": 3,
    "sen": 1,
    "deward": 75,
    "stacks": 1,
    "source": "opendota_league_filter",
    "dewardSource": "fight_participation",
    "matchCount": 6407,
    "manualFields": [
      "gpm",
      "xpm",
      "laneEff",
      "obs",
      "sen",
      "stacks"
    ]
  },
  {
    "name": "Faith",
    "pos": [
      5
    ],
    "ti": "TI2",
    "team": "IG",
    "gpm": 255,
    "xpm": 325,
    "kda": 2.7,
    "laneEff": 41,
    "heroes": 20,
    "assists": 22,
    "obs": 17,
    "sen": 13,
    "deward": 70,
    "stacks": 4,
    "source": "manual",
    "matchCount": 0
  },
  {
    "name": "YYF",
    "pos": [
      3
    ],
    "ti": "TI2",
    "team": "IG",
    "gpm": 420,
    "xpm": 492,
    "kda": 3.1,
    "laneEff": 45,
    "heroes": 17,
    "assists": 14,
    "obs": 7,
    "sen": 3,
    "deward": 54,
    "stacks": 7,
    "source": "manual",
    "matchCount": 0
  },
  {
    "name": "LaNm",
    "pos": [
      4
    ],
    "ti": "TI2",
    "team": "IG",
    "gpm": 300,
    "xpm": 380,
    "kda": 3,
    "laneEff": 43,
    "heroes": 21,
    "assists": 20,
    "obs": 13,
    "sen": 9,
    "deward": 65,
    "stacks": 6,
    "source": "manual",
    "matchCount": 0
  },
  {
    "name": "ChuaN",
    "pos": [
      4,
      5
    ],
    "ti": "TI2",
    "team": "IG",
    "gpm": 270,
    "xpm": 345,
    "kda": 5.6,
    "laneEff": 41,
    "heroes": 123,
    "assists": 11.2,
    "obs": 16,
    "sen": 12,
    "deward": 74,
    "stacks": 5,
    "source": "opendota_league_filter",
    "dewardSource": "fight_participation",
    "matchCount": 19194,
    "manualFields": [
      "gpm",
      "xpm",
      "laneEff",
      "obs",
      "sen",
      "stacks"
    ]
  },
  {
    "name": "Dendi",
    "pos": [
      2
    ],
    "ti": "TI2",
    "team": "Na'Vi",
    "gpm": 530,
    "xpm": 610,
    "kda": 6.3,
    "laneEff": 52,
    "heroes": 121,
    "assists": 10.3,
    "obs": 4,
    "sen": 1,
    "deward": 74,
    "stacks": 2,
    "source": "opendota_league_filter",
    "dewardSource": "fight_participation",
    "matchCount": 21318,
    "manualFields": [
      "gpm",
      "xpm",
      "laneEff",
      "obs",
      "sen",
      "stacks"
    ]
  },
  {
    "name": "XBOCT",
    "pos": [
      1
    ],
    "ti": "TI2",
    "team": "Na'Vi",
    "gpm": 595,
    "xpm": 655,
    "kda": 3.4,
    "laneEff": 54,
    "heroes": 11,
    "assists": 8,
    "obs": 2,
    "sen": 1,
    "deward": 38,
    "stacks": 1,
    "source": "manual",
    "matchCount": 0
  },
  {
    "name": "Puppey",
    "pos": [
      5
    ],
    "ti": "TI2",
    "team": "Na'Vi",
    "gpm": 250,
    "xpm": 320,
    "kda": 5.7,
    "laneEff": 41,
    "heroes": 111,
    "assists": 12.4,
    "obs": 16,
    "sen": 12,
    "deward": 71,
    "stacks": 3,
    "source": "opendota_league_filter",
    "dewardSource": "fight_participation",
    "matchCount": 3416,
    "manualFields": [
      "gpm",
      "xpm",
      "laneEff",
      "obs",
      "sen",
      "stacks"
    ]
  },
  {
    "name": "Funn1k",
    "pos": [
      3,
      4
    ],
    "ti": "TI2",
    "team": "Na'Vi",
    "gpm": 390,
    "xpm": 462,
    "kda": 2.9,
    "laneEff": 44,
    "heroes": 17,
    "assists": 16,
    "obs": 8,
    "sen": 4,
    "deward": 55,
    "stacks": 7,
    "source": "manual",
    "matchCount": 0
  },
  {
    "name": "LighTofHeaveN",
    "pos": [
      4
    ],
    "ti": "TI2",
    "team": "Na'Vi",
    "gpm": 305,
    "xpm": 382,
    "kda": 4.3,
    "laneEff": 43,
    "heroes": 123,
    "assists": 11.7,
    "obs": 12,
    "sen": 8,
    "deward": 70,
    "stacks": 5,
    "source": "opendota_league_filter",
    "dewardSource": "fight_participation",
    "matchCount": 2630,
    "manualFields": [
      "gpm",
      "xpm",
      "laneEff",
      "obs",
      "sen",
      "stacks"
    ]
  },
  {
    "name": "Mushi",
    "pos": [
      1,
      2
    ],
    "ti": "TI2",
    "team": "Zenith",
    "gpm": 570,
    "xpm": 650,
    "kda": 5.2,
    "laneEff": 54,
    "heroes": 117,
    "assists": 13.9,
    "obs": 3,
    "sen": 1,
    "deward": 75,
    "stacks": 2,
    "source": "opendota_league_filter",
    "dewardSource": "fight_participation",
    "matchCount": 3943,
    "manualFields": [
      "gpm",
      "xpm",
      "laneEff",
      "obs",
      "sen",
      "stacks"
    ]
  },
  {
    "name": "Sylar",
    "pos": [
      1
    ],
    "ti": "TI2",
    "team": "LGD",
    "gpm": 600,
    "xpm": 660,
    "kda": 3.5,
    "laneEff": 54,
    "heroes": 11,
    "assists": 8,
    "obs": 2,
    "sen": 1,
    "deward": 38,
    "stacks": 1,
    "source": "manual",
    "matchCount": 0
  },
  {
    "name": "AdmiralBulldog",
    "pos": [
      1,
      3
    ],
    "ti": "TI3",
    "team": "Alliance",
    "gpm": 595,
    "xpm": 662,
    "kda": 3.3,
    "laneEff": 56,
    "heroes": 12,
    "assists": 11,
    "obs": 4,
    "sen": 2,
    "deward": 46,
    "stacks": 9,
    "source": "manual",
    "matchCount": 0
  },
  {
    "name": "Akke",
    "pos": [
      4,
      5
    ],
    "ti": "TI3",
    "team": "Alliance",
    "gpm": 262,
    "xpm": 332,
    "kda": 2.9,
    "laneEff": 41,
    "heroes": 22,
    "assists": 24,
    "obs": 18,
    "sen": 14,
    "deward": 72,
    "stacks": 5,
    "source": "manual",
    "matchCount": 0
  },
  {
    "name": "EGM",
    "pos": [
      4,
      5
    ],
    "ti": "TI3",
    "team": "Alliance",
    "gpm": 308,
    "xpm": 388,
    "kda": 3.1,
    "laneEff": 43,
    "heroes": 20,
    "assists": 22,
    "obs": 15,
    "sen": 11,
    "deward": 68,
    "stacks": 6,
    "source": "manual",
    "matchCount": 0
  },
  {
    "name": "s4",
    "pos": [
      2,
      3
    ],
    "ti": "TI3",
    "team": "Alliance",
    "gpm": 520,
    "xpm": 600,
    "kda": 6.3,
    "laneEff": 52,
    "heroes": 119,
    "assists": 12.8,
    "obs": 5,
    "sen": 2,
    "deward": 76,
    "stacks": 4,
    "source": "opendota_league_filter",
    "dewardSource": "fight_participation",
    "matchCount": 9997,
    "manualFields": [
      "gpm",
      "xpm",
      "laneEff",
      "obs",
      "sen",
      "stacks"
    ]
  },
  {
    "name": "Loda",
    "pos": [
      1
    ],
    "ti": "TI3",
    "team": "Alliance",
    "gpm": 620,
    "xpm": 680,
    "kda": 3.6,
    "laneEff": 56,
    "heroes": 10,
    "assists": 8,
    "obs": 2,
    "sen": 1,
    "deward": 38,
    "stacks": 1,
    "source": "manual",
    "matchCount": 0
  },
  {
    "name": "Dendi",
    "pos": [
      2
    ],
    "ti": "TI3",
    "team": "Na'Vi",
    "gpm": 555,
    "xpm": 635,
    "kda": 6.3,
    "laneEff": 54,
    "heroes": 121,
    "assists": 10.3,
    "obs": 4,
    "sen": 1,
    "deward": 74,
    "stacks": 2,
    "source": "opendota_league_filter",
    "dewardSource": "fight_participation",
    "matchCount": 21318,
    "manualFields": [
      "gpm",
      "xpm",
      "laneEff",
      "obs",
      "sen",
      "stacks"
    ]
  },
  {
    "name": "XBOCT",
    "pos": [
      1
    ],
    "ti": "TI3",
    "team": "Na'Vi",
    "gpm": 610,
    "xpm": 670,
    "kda": 3.5,
    "laneEff": 55,
    "heroes": 12,
    "assists": 8,
    "obs": 2,
    "sen": 1,
    "deward": 38,
    "stacks": 1,
    "source": "manual",
    "matchCount": 0
  },
  {
    "name": "Puppey",
    "pos": [
      5
    ],
    "ti": "TI3",
    "team": "Na'Vi",
    "gpm": 255,
    "xpm": 325,
    "kda": 5.7,
    "laneEff": 42,
    "heroes": 111,
    "assists": 12.4,
    "obs": 17,
    "sen": 13,
    "deward": 71,
    "stacks": 4,
    "source": "opendota_league_filter",
    "dewardSource": "fight_participation",
    "matchCount": 3416,
    "manualFields": [
      "gpm",
      "xpm",
      "laneEff",
      "obs",
      "sen",
      "stacks"
    ]
  },
  {
    "name": "KuroKy",
    "pos": [
      4,
      5
    ],
    "ti": "TI3",
    "team": "Na'Vi",
    "gpm": 312,
    "xpm": 392,
    "kda": 3,
    "laneEff": 43,
    "heroes": 24,
    "assists": 21,
    "obs": 14,
    "sen": 10,
    "deward": 66,
    "stacks": 5,
    "source": "manual",
    "matchCount": 0
  },
  {
    "name": "Funn1k",
    "pos": [
      3,
      4
    ],
    "ti": "TI3",
    "team": "Na'Vi",
    "gpm": 392,
    "xpm": 465,
    "kda": 2.9,
    "laneEff": 44,
    "heroes": 17,
    "assists": 16,
    "obs": 8,
    "sen": 4,
    "deward": 56,
    "stacks": 7,
    "source": "manual",
    "matchCount": 0
  },
  {
    "name": "Mushi",
    "pos": [
      1,
      2
    ],
    "ti": "TI3",
    "team": "Orange",
    "gpm": 578,
    "xpm": 658,
    "kda": 5.2,
    "laneEff": 55,
    "heroes": 117,
    "assists": 13.9,
    "obs": 3,
    "sen": 1,
    "deward": 75,
    "stacks": 2,
    "source": "opendota_league_filter",
    "dewardSource": "fight_participation",
    "matchCount": 3943,
    "manualFields": [
      "gpm",
      "xpm",
      "laneEff",
      "obs",
      "sen",
      "stacks"
    ]
  },
  {
    "name": "Hao",
    "pos": [
      1
    ],
    "ti": "TI3",
    "team": "TongFu",
    "gpm": 635,
    "xpm": 695,
    "kda": 3.8,
    "laneEff": 56,
    "heroes": 11,
    "assists": 8,
    "obs": 2,
    "sen": 1,
    "deward": 38,
    "stacks": 1,
    "source": "manual",
    "matchCount": 0
  },
  {
    "name": "Sansheng",
    "pos": [
      5
    ],
    "ti": "TI3",
    "team": "TongFu",
    "gpm": 262,
    "xpm": 338,
    "kda": 2.8,
    "laneEff": 42,
    "heroes": 19,
    "assists": 25,
    "obs": 17,
    "sen": 13,
    "deward": 70,
    "stacks": 4,
    "source": "manual",
    "matchCount": 0
  },
  {
    "name": "ChuaN",
    "pos": [
      4
    ],
    "ti": "TI3",
    "team": "TongFu",
    "gpm": 280,
    "xpm": 355,
    "kda": 5.6,
    "laneEff": 42,
    "heroes": 123,
    "assists": 11.2,
    "obs": 14,
    "sen": 10,
    "deward": 74,
    "stacks": 5,
    "source": "opendota_league_filter",
    "dewardSource": "fight_participation",
    "matchCount": 19194,
    "manualFields": [
      "gpm",
      "xpm",
      "laneEff",
      "obs",
      "sen",
      "stacks"
    ]
  },
  {
    "name": "Ferrari_430",
    "pos": [
      2
    ],
    "ti": "TI3",
    "team": "iG",
    "gpm": null,
    "xpm": null,
    "kda": 5.7,
    "laneEff": null,
    "heroes": 124,
    "assists": 12.8,
    "obs": null,
    "sen": null,
    "deward": 75,
    "stacks": null,
    "source": "opendota_league_filter",
    "dewardSource": "fight_participation",
    "matchCount": 6407
  },
  {
    "name": "hao",
    "pos": [
      1
    ],
    "ti": "TI4",
    "team": "Newbee",
    "gpm": 640,
    "xpm": 700,
    "kda": 3.8,
    "laneEff": 56,
    "heroes": 11,
    "assists": 8,
    "obs": 2,
    "sen": 1,
    "deward": 40,
    "stacks": 1,
    "source": "manual",
    "matchCount": 0
  },
  {
    "name": "Mu",
    "pos": [
      2
    ],
    "ti": "TI4",
    "team": "Newbee",
    "gpm": 560,
    "xpm": 640,
    "kda": 3.7,
    "laneEff": 54,
    "heroes": 13,
    "assists": 10,
    "obs": 3,
    "sen": 1,
    "deward": 44,
    "stacks": 2,
    "source": "manual",
    "matchCount": 0
  },
  {
    "name": "Sansheng",
    "pos": [
      5
    ],
    "ti": "TI4",
    "team": "Newbee",
    "gpm": 265,
    "xpm": 340,
    "kda": 2.8,
    "laneEff": 42,
    "heroes": 19,
    "assists": 26,
    "obs": 18,
    "sen": 14,
    "deward": 72,
    "stacks": 4,
    "source": "manual",
    "matchCount": 0
  },
  {
    "name": "rotk",
    "pos": [
      3,
      4
    ],
    "ti": "TI4",
    "team": "Newbee",
    "gpm": 400,
    "xpm": 480,
    "kda": 3,
    "laneEff": 44,
    "heroes": 19,
    "assists": 16,
    "obs": 8,
    "sen": 3,
    "deward": 54,
    "stacks": 7,
    "source": "manual",
    "matchCount": 0
  },
  {
    "name": "ChuaN",
    "pos": [
      4
    ],
    "ti": "TI4",
    "team": "Newbee",
    "gpm": 285,
    "xpm": 365,
    "kda": 5.6,
    "laneEff": 42,
    "heroes": 123,
    "assists": 11.2,
    "obs": 13,
    "sen": 9,
    "deward": 74,
    "stacks": 6,
    "source": "opendota_league_filter",
    "dewardSource": "fight_participation",
    "matchCount": 19194,
    "manualFields": [
      "gpm",
      "xpm",
      "laneEff",
      "obs",
      "sen",
      "stacks"
    ]
  },
  {
    "name": "Sylar",
    "pos": [
      1
    ],
    "ti": "TI4",
    "team": "Vici Gaming",
    "gpm": 645,
    "xpm": 705,
    "kda": 3.7,
    "laneEff": 57,
    "heroes": 11,
    "assists": 8,
    "obs": 2,
    "sen": 1,
    "deward": 38,
    "stacks": 1,
    "source": "manual",
    "matchCount": 0
  },
  {
    "name": "iceice",
    "pos": [
      2
    ],
    "ti": "TI4",
    "team": "Vici Gaming",
    "gpm": 568,
    "xpm": 648,
    "kda": 3.7,
    "laneEff": 54,
    "heroes": 13,
    "assists": 10,
    "obs": 3,
    "sen": 1,
    "deward": 44,
    "stacks": 2,
    "source": "manual",
    "matchCount": 0
  },
  {
    "name": "Super",
    "pos": [
      3
    ],
    "ti": "TI4",
    "team": "Vici Gaming",
    "gpm": 440,
    "xpm": 512,
    "kda": 3.1,
    "laneEff": 45,
    "heroes": 18,
    "assists": 14,
    "obs": 7,
    "sen": 3,
    "deward": 54,
    "stacks": 8,
    "source": "manual",
    "matchCount": 0
  },
  {
    "name": "Fenrir",
    "pos": [
      4,
      5
    ],
    "ti": "TI4",
    "team": "Vici Gaming",
    "gpm": 308,
    "xpm": 388,
    "kda": 3.1,
    "laneEff": 43,
    "heroes": 22,
    "assists": 22,
    "obs": 14,
    "sen": 10,
    "deward": 68,
    "stacks": 6,
    "source": "manual",
    "matchCount": 0
  },
  {
    "name": "Fy",
    "pos": [
      4,
      5
    ],
    "ti": "TI4",
    "team": "Vici Gaming",
    "gpm": 298,
    "xpm": 378,
    "kda": 4.8,
    "laneEff": 43,
    "heroes": 115,
    "assists": 12.2,
    "obs": 15,
    "sen": 11,
    "deward": 76,
    "stacks": 6,
    "source": "opendota_league_filter",
    "dewardSource": "fight_participation",
    "matchCount": 6362,
    "manualFields": [
      "gpm",
      "xpm",
      "laneEff",
      "obs",
      "sen",
      "stacks"
    ]
  },
  {
    "name": "Fear",
    "pos": [
      1,
      3
    ],
    "ti": "TI4",
    "team": "EG",
    "gpm": 605,
    "xpm": 665,
    "kda": 3.4,
    "laneEff": 54,
    "heroes": 16,
    "assists": 12,
    "obs": 4,
    "sen": 1,
    "deward": 46,
    "stacks": 3,
    "source": "manual",
    "matchCount": 0
  },
  {
    "name": "Sumail",
    "pos": [
      2
    ],
    "ti": "TI4",
    "team": "EG",
    "gpm": 590,
    "xpm": 670,
    "kda": 5.4,
    "laneEff": 56,
    "heroes": 124,
    "assists": 10.2,
    "obs": 3,
    "sen": 1,
    "deward": 75,
    "stacks": 1,
    "source": "opendota_league_filter",
    "dewardSource": "fight_participation",
    "matchCount": 9458,
    "manualFields": [
      "gpm",
      "xpm",
      "laneEff",
      "obs",
      "sen",
      "stacks"
    ]
  },
  {
    "name": "Universe",
    "pos": [
      3
    ],
    "ti": "TI4",
    "team": "EG",
    "gpm": 428,
    "xpm": 500,
    "kda": 3,
    "laneEff": 44,
    "heroes": 20,
    "assists": 15,
    "obs": 7,
    "sen": 3,
    "deward": 54,
    "stacks": 8,
    "source": "manual",
    "matchCount": 0
  },
  {
    "name": "Zai",
    "pos": [
      4,
      5
    ],
    "ti": "TI4",
    "team": "EG",
    "gpm": 338,
    "xpm": 418,
    "kda": 3.1,
    "laneEff": 43,
    "heroes": 22,
    "assists": 20,
    "obs": 11,
    "sen": 7,
    "deward": 64,
    "stacks": 6,
    "source": "manual",
    "matchCount": 0
  },
  {
    "name": "ppd",
    "pos": [
      5
    ],
    "ti": "TI4",
    "team": "EG",
    "gpm": 265,
    "xpm": 345,
    "kda": 2.7,
    "laneEff": 41,
    "heroes": 18,
    "assists": 23,
    "obs": 17,
    "sen": 13,
    "deward": 70,
    "stacks": 4,
    "source": "manual",
    "matchCount": 0
  },
  {
    "name": "BurNIng",
    "pos": [
      1
    ],
    "ti": "TI4",
    "team": "DK",
    "gpm": 625,
    "xpm": 685,
    "kda": 3.6,
    "laneEff": 56,
    "heroes": 10,
    "assists": 8,
    "obs": 2,
    "sen": 1,
    "deward": 36,
    "stacks": 1,
    "source": "manual",
    "matchCount": 0
  },
  {
    "name": "Mushi",
    "pos": [
      2
    ],
    "ti": "TI4",
    "team": "DK",
    "gpm": 572,
    "xpm": 652,
    "kda": 5.2,
    "laneEff": 54,
    "heroes": 117,
    "assists": 13.9,
    "obs": 3,
    "sen": 1,
    "deward": 75,
    "stacks": 2,
    "source": "opendota_league_filter",
    "dewardSource": "fight_participation",
    "matchCount": 3943,
    "manualFields": [
      "gpm",
      "xpm",
      "laneEff",
      "obs",
      "sen",
      "stacks"
    ]
  },
  {
    "name": "MMY",
    "pos": [
      3,
      4
    ],
    "ti": "TI4",
    "team": "DK",
    "gpm": 382,
    "xpm": 455,
    "kda": 2.9,
    "laneEff": 44,
    "heroes": 18,
    "assists": 17,
    "obs": 9,
    "sen": 4,
    "deward": 56,
    "stacks": 7,
    "source": "manual",
    "matchCount": 0
  },
  {
    "name": "Fear",
    "pos": [
      1,
      3
    ],
    "ti": "TI5",
    "team": "EG",
    "gpm": 618,
    "xpm": 678,
    "kda": 3.5,
    "laneEff": 55,
    "heroes": 17,
    "assists": 13,
    "obs": 4,
    "sen": 1,
    "deward": 48,
    "stacks": 3,
    "source": "manual",
    "matchCount": 0
  },
  {
    "name": "Sumail",
    "pos": [
      2
    ],
    "ti": "TI5",
    "team": "EG",
    "gpm": 602,
    "xpm": 682,
    "kda": 5.4,
    "laneEff": 57,
    "heroes": 124,
    "assists": 10.2,
    "obs": 3,
    "sen": 1,
    "deward": 75,
    "stacks": 1,
    "source": "opendota_league_filter",
    "dewardSource": "fight_participation",
    "matchCount": 9458,
    "manualFields": [
      "gpm",
      "xpm",
      "laneEff",
      "obs",
      "sen",
      "stacks"
    ]
  },
  {
    "name": "Universe",
    "pos": [
      3
    ],
    "ti": "TI5",
    "team": "EG",
    "gpm": 432,
    "xpm": 504,
    "kda": 3.1,
    "laneEff": 44,
    "heroes": 21,
    "assists": 15,
    "obs": 7,
    "sen": 3,
    "deward": 56,
    "stacks": 8,
    "source": "manual",
    "matchCount": 0
  },
  {
    "name": "Zai",
    "pos": [
      4,
      5
    ],
    "ti": "TI5",
    "team": "EG",
    "gpm": 342,
    "xpm": 422,
    "kda": 3.2,
    "laneEff": 43,
    "heroes": 23,
    "assists": 21,
    "obs": 12,
    "sen": 8,
    "deward": 66,
    "stacks": 6,
    "source": "manual",
    "matchCount": 0
  },
  {
    "name": "ppd",
    "pos": [
      5
    ],
    "ti": "TI5",
    "team": "EG",
    "gpm": 272,
    "xpm": 352,
    "kda": 2.8,
    "laneEff": 42,
    "heroes": 19,
    "assists": 24,
    "obs": 18,
    "sen": 14,
    "deward": 72,
    "stacks": 4,
    "source": "manual",
    "matchCount": 0
  },
  {
    "name": "Agressif",
    "pos": [
      1
    ],
    "ti": "TI5",
    "team": "CDEC",
    "gpm": 625,
    "xpm": 685,
    "kda": 4.9,
    "laneEff": 57,
    "heroes": 124,
    "assists": 13.3,
    "obs": 2,
    "sen": 1,
    "deward": 75,
    "stacks": 1,
    "source": "opendota_league_filter",
    "dewardSource": "fight_participation",
    "matchCount": 9553,
    "manualFields": [
      "gpm",
      "xpm",
      "laneEff",
      "obs",
      "sen",
      "stacks"
    ]
  },
  {
    "name": "Shiki",
    "pos": [
      2
    ],
    "ti": "TI5",
    "team": "CDEC",
    "gpm": 555,
    "xpm": 635,
    "kda": 3.5,
    "laneEff": 53,
    "heroes": 12,
    "assists": 10,
    "obs": 3,
    "sen": 1,
    "deward": 44,
    "stacks": 2,
    "source": "manual",
    "matchCount": 0
  },
  {
    "name": "Hao",
    "pos": [
      3
    ],
    "ti": "TI5",
    "team": "CDEC",
    "gpm": 638,
    "xpm": 698,
    "kda": 3.7,
    "laneEff": 56,
    "heroes": 11,
    "assists": 8,
    "obs": 2,
    "sen": 1,
    "deward": 38,
    "stacks": 1,
    "source": "manual",
    "matchCount": 0
  },
  {
    "name": "Xz",
    "pos": [
      4,
      5
    ],
    "ti": "TI5",
    "team": "CDEC",
    "gpm": 312,
    "xpm": 392,
    "kda": 3,
    "laneEff": 43,
    "heroes": 20,
    "assists": 21,
    "obs": 13,
    "sen": 9,
    "deward": 66,
    "stacks": 5,
    "source": "manual",
    "matchCount": 0
  },
  {
    "name": "Q",
    "pos": [
      5
    ],
    "ti": "TI5",
    "team": "CDEC",
    "gpm": 258,
    "xpm": 334,
    "kda": 2.8,
    "laneEff": 41,
    "heroes": 18,
    "assists": 24,
    "obs": 17,
    "sen": 13,
    "deward": 70,
    "stacks": 4,
    "source": "manual",
    "matchCount": 0
  },
  {
    "name": "BurNIng",
    "pos": [
      1
    ],
    "ti": "TI5",
    "team": "EHOME",
    "gpm": 622,
    "xpm": 682,
    "kda": 3.6,
    "laneEff": 56,
    "heroes": 10,
    "assists": 8,
    "obs": 2,
    "sen": 1,
    "deward": 38,
    "stacks": 1,
    "source": "manual",
    "matchCount": 0
  },
  {
    "name": "SanSheng",
    "pos": [
      5
    ],
    "ti": "TI5",
    "team": "EHOME",
    "gpm": 262,
    "xpm": 338,
    "kda": 2.8,
    "laneEff": 42,
    "heroes": 20,
    "assists": 25,
    "obs": 18,
    "sen": 14,
    "deward": 72,
    "stacks": 4,
    "source": "manual",
    "matchCount": 0
  },
  {
    "name": "rotk",
    "pos": [
      3,
      4
    ],
    "ti": "TI5",
    "team": "EHOME",
    "gpm": 402,
    "xpm": 480,
    "kda": 3,
    "laneEff": 44,
    "heroes": 19,
    "assists": 16,
    "obs": 8,
    "sen": 3,
    "deward": 54,
    "stacks": 7,
    "source": "manual",
    "matchCount": 0
  },
  {
    "name": "MMY",
    "pos": [
      3
    ],
    "ti": "TI5",
    "team": "EHOME",
    "gpm": 385,
    "xpm": 458,
    "kda": 2.9,
    "laneEff": 44,
    "heroes": 18,
    "assists": 17,
    "obs": 9,
    "sen": 4,
    "deward": 56,
    "stacks": 7,
    "source": "manual",
    "matchCount": 0
  },
  {
    "name": "Yao",
    "pos": [
      4,
      5
    ],
    "ti": "TI5",
    "team": "EHOME",
    "gpm": 298,
    "xpm": 378,
    "kda": 2.9,
    "laneEff": 43,
    "heroes": 21,
    "assists": 22,
    "obs": 14,
    "sen": 10,
    "deward": 66,
    "stacks": 5,
    "source": "manual",
    "matchCount": 0
  },
  {
    "name": "Sylar",
    "pos": [
      1
    ],
    "ti": "TI5",
    "team": "Vici Gaming",
    "gpm": 635,
    "xpm": 695,
    "kda": 3.7,
    "laneEff": 57,
    "heroes": 11,
    "assists": 8,
    "obs": 2,
    "sen": 1,
    "deward": 38,
    "stacks": 1,
    "source": "manual",
    "matchCount": 0
  },
  {
    "name": "iceice",
    "pos": [
      2
    ],
    "ti": "TI5",
    "team": "Vici Gaming",
    "gpm": 565,
    "xpm": 645,
    "kda": 3.6,
    "laneEff": 54,
    "heroes": 13,
    "assists": 10,
    "obs": 3,
    "sen": 1,
    "deward": 44,
    "stacks": 2,
    "source": "manual",
    "matchCount": 0
  },
  {
    "name": "Super",
    "pos": [
      3
    ],
    "ti": "TI5",
    "team": "Vici Gaming",
    "gpm": 438,
    "xpm": 510,
    "kda": 3.1,
    "laneEff": 45,
    "heroes": 18,
    "assists": 14,
    "obs": 7,
    "sen": 3,
    "deward": 54,
    "stacks": 8,
    "source": "manual",
    "matchCount": 0
  },
  {
    "name": "Fenrir",
    "pos": [
      4,
      5
    ],
    "ti": "TI5",
    "team": "Vici Gaming",
    "gpm": 310,
    "xpm": 390,
    "kda": 3.1,
    "laneEff": 43,
    "heroes": 22,
    "assists": 22,
    "obs": 14,
    "sen": 10,
    "deward": 68,
    "stacks": 6,
    "source": "manual",
    "matchCount": 0
  },
  {
    "name": "Fy",
    "pos": [
      4,
      5
    ],
    "ti": "TI5",
    "team": "Vici Gaming",
    "gpm": 300,
    "xpm": 380,
    "kda": 4.8,
    "laneEff": 43,
    "heroes": 115,
    "assists": 12.2,
    "obs": 15,
    "sen": 11,
    "deward": 76,
    "stacks": 6,
    "source": "opendota_league_filter",
    "dewardSource": "fight_participation",
    "matchCount": 6362,
    "manualFields": [
      "gpm",
      "xpm",
      "laneEff",
      "obs",
      "sen",
      "stacks"
    ]
  },
  {
    "name": "Maybe",
    "pos": [
      2
    ],
    "ti": "TI5",
    "team": "LGD",
    "gpm": 558,
    "xpm": 638,
    "kda": 3.6,
    "laneEff": 54,
    "heroes": 14,
    "assists": 10,
    "obs": 3,
    "sen": 1,
    "deward": 44,
    "stacks": 2,
    "source": "manual",
    "matchCount": 0
  },
  {
    "name": "xiao8",
    "pos": [
      3,
      4
    ],
    "ti": "TI5",
    "team": "LGD",
    "gpm": 395,
    "xpm": 468,
    "kda": 3,
    "laneEff": 44,
    "heroes": 20,
    "assists": 16,
    "obs": 9,
    "sen": 4,
    "deward": 56,
    "stacks": 7,
    "source": "manual",
    "matchCount": 0
  },
  {
    "name": "fy",
    "pos": [
      4,
      5
    ],
    "ti": "TI5",
    "team": "LGD",
    "gpm": null,
    "xpm": null,
    "kda": 4.8,
    "laneEff": null,
    "heroes": 115,
    "assists": 12.2,
    "obs": null,
    "sen": null,
    "deward": 76,
    "stacks": null,
    "source": "opendota_league_filter",
    "dewardSource": "fight_participation",
    "matchCount": 6362
  }
];

// 按 "战队__赛事" 分组 (供游戏随机抽取)
const TI_POOLS = {};
TI_PLAYERS.forEach(p => {
  const key = p.team + '__' + p.ti;
  if (!TI_POOLS[key]) TI_POOLS[key] = { team:p.team, ti:p.ti, players:[] };
  TI_POOLS[key].players.push(p);
});

// 数据摘要
const DATA_SUMMARY = {
  "total": 81,
  "bySource": {
    "opendota_league_filter": 26,
    "manual": 55
  },
  "nullFields": {
    "gpm": 2,
    "xpm": 2,
    "laneEff": 2,
    "obs": 2,
    "sen": 2,
    "stacks": 2
  }
};

if (typeof module !== 'undefined') {
  module.exports = { TI_PLAYERS, TI_POOLS, POS_CONFIG, DIM_WEIGHTS, DATA_SUMMARY };
}
