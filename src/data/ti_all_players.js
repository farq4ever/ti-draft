/**
 * TI Draft 选手数据库 — v5.0
 * 生成: 2026-06-17T04:33:23.452Z
 * 总记录: 325
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

export const TI_PLAYERS = [
  {
    "name": "Dendi",
    "allowedPos": [
      2
    ],
    "ti": "TI1",
    "team": "Na'Vi",
    "account_id": 70388657,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 560,
      "xpm": 640,
      "kda": 3.7,
      "lane_eff": 53,
      "hero_pool": 14,
      "assists": 10,
      "obs_placed": 3,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 2
    }
  },
  {
    "name": "XBOCT",
    "allowedPos": [
      1
    ],
    "ti": "TI1",
    "team": "Na'Vi",
    "account_id": 118832819,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 580,
      "xpm": 640,
      "kda": 3.5,
      "lane_eff": 54,
      "hero_pool": 10,
      "assists": 8,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1
    },
    "_old_id": 102685548
  },
  {
    "name": "Puppey",
    "allowedPos": [
      5
    ],
    "ti": "TI1",
    "team": "Na'Vi",
    "account_id": 87278757,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 270,
      "xpm": 345,
      "kda": 2.8,
      "lane_eff": 42,
      "hero_pool": 20,
      "assists": 24,
      "obs_placed": 18,
      "sen_placed": 14,
      "obs_denied": 70,
      "stacks": 4
    }
  },
  {
    "name": "ARS-ART",
    "allowedPos": [
      3,
      4
    ],
    "ti": "TI1",
    "team": "Na'Vi",
    "account_id": 101336222,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 420,
      "xpm": 490,
      "kda": 3,
      "lane_eff": 45,
      "hero_pool": 18,
      "assists": 14,
      "obs_placed": 7,
      "sen_placed": 3,
      "obs_denied": 52,
      "stacks": 7
    }
  },
  {
    "name": "LighTofHeaveN",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI1",
    "team": "Na'Vi",
    "account_id": 82262664,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 310,
      "xpm": 390,
      "kda": 3.1,
      "lane_eff": 43,
      "hero_pool": 22,
      "assists": 22,
      "obs_placed": 14,
      "sen_placed": 10,
      "obs_denied": 66,
      "stacks": 6
    }
  },
  {
    "name": "BurNIng",
    "allowedPos": [
      1
    ],
    "ti": "TI1",
    "team": "EHOME",
    "account_id": 86712305,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 580,
      "xpm": 640,
      "kda": 3.5,
      "lane_eff": 54,
      "hero_pool": 10,
      "assists": 8,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1
    }
  },
  {
    "name": "357",
    "allowedPos": [
      3
    ],
    "ti": "TI1",
    "team": "EHOME",
    "account_id": 86700461,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 420,
      "xpm": 490,
      "kda": 3,
      "lane_eff": 45,
      "hero_pool": 18,
      "assists": 14,
      "obs_placed": 7,
      "sen_placed": 3,
      "obs_denied": 52,
      "stacks": 7
    }
  },
  {
    "name": "MMY",
    "allowedPos": [
      3,
      4
    ],
    "ti": "TI1",
    "team": "EHOME",
    "account_id": 86712304,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 420,
      "xpm": 490,
      "kda": 3,
      "lane_eff": 45,
      "hero_pool": 18,
      "assists": 14,
      "obs_placed": 7,
      "sen_placed": 3,
      "obs_denied": 52,
      "stacks": 7
    }
  },
  {
    "name": "Dai",
    "allowedPos": [
      2
    ],
    "ti": "TI1",
    "team": "EHOME",
    "account_id": 86700481,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 560,
      "xpm": 640,
      "kda": 3.7,
      "lane_eff": 53,
      "hero_pool": 14,
      "assists": 10,
      "obs_placed": 3,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 2
    }
  },
  {
    "name": "LaNm",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI1",
    "team": "EHOME",
    "account_id": 86730602,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 310,
      "xpm": 390,
      "kda": 3.1,
      "lane_eff": 43,
      "hero_pool": 22,
      "assists": 22,
      "obs_placed": 14,
      "sen_placed": 10,
      "obs_denied": 66,
      "stacks": 6
    }
  },
  {
    "name": "ChuaN",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI1",
    "team": "Scythe",
    "account_id": 86698277,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 310,
      "xpm": 390,
      "kda": 3.1,
      "lane_eff": 43,
      "hero_pool": 22,
      "assists": 22,
      "obs_placed": 14,
      "sen_placed": 10,
      "obs_denied": 66,
      "stacks": 6
    }
  },
  {
    "name": "iceiceice",
    "allowedPos": [
      2,
      3
    ],
    "ti": "TI1",
    "team": "Scythe",
    "account_id": 91591747,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 560,
      "xpm": 640,
      "kda": 3.7,
      "lane_eff": 53,
      "hero_pool": 14,
      "assists": 10,
      "obs_placed": 3,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 2
    }
  },
  {
    "name": "hyhy",
    "allowedPos": [
      2
    ],
    "ti": "TI1",
    "team": "Scythe",
    "account_id": 90882987,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 560,
      "xpm": 640,
      "kda": 3.7,
      "lane_eff": 53,
      "hero_pool": 14,
      "assists": 10,
      "obs_placed": 3,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 2
    }
  },
  {
    "name": "XtiNcT",
    "allowedPos": [
      1
    ],
    "ti": "TI1",
    "team": "Scythe",
    "account_id": 91591620,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 580,
      "xpm": 640,
      "kda": 3.5,
      "lane_eff": 54,
      "hero_pool": 10,
      "assists": 8,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1
    }
  },
  {
    "name": "xFreedom",
    "allowedPos": [
      5
    ],
    "ti": "TI1",
    "team": "Scythe",
    "account_id": 86713547,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 270,
      "xpm": 345,
      "kda": 2.8,
      "lane_eff": 42,
      "hero_pool": 20,
      "assists": 24,
      "obs_placed": 18,
      "sen_placed": 14,
      "obs_denied": 70,
      "stacks": 4
    }
  },
  {
    "name": "Mushi",
    "allowedPos": [
      1,
      2
    ],
    "ti": "TI1",
    "team": "MUFC",
    "account_id": 100883708,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 580,
      "xpm": 640,
      "kda": 3.5,
      "lane_eff": 54,
      "hero_pool": 10,
      "assists": 8,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1
    }
  },
  {
    "name": "ky.xY",
    "allowedPos": [
      3,
      4
    ],
    "ti": "TI1",
    "team": "MUFC",
    "account_id": 86713546,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 420,
      "xpm": 490,
      "kda": 3,
      "lane_eff": 45,
      "hero_pool": 18,
      "assists": 14,
      "obs_placed": 7,
      "sen_placed": 3,
      "obs_denied": 52,
      "stacks": 7
    }
  },
  {
    "name": "Net",
    "allowedPos": [
      5
    ],
    "ti": "TI1",
    "team": "MUFC",
    "account_id": 90882989,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 270,
      "xpm": 345,
      "kda": 2.8,
      "lane_eff": 42,
      "hero_pool": 20,
      "assists": 24,
      "obs_placed": 18,
      "sen_placed": 14,
      "obs_denied": 70,
      "stacks": 4
    }
  },
  {
    "name": "Winter",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI1",
    "team": "MUFC",
    "account_id": 86762037,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 310,
      "xpm": 390,
      "kda": 3.1,
      "lane_eff": 43,
      "hero_pool": 22,
      "assists": 22,
      "obs_placed": 14,
      "sen_placed": 10,
      "obs_denied": 66,
      "stacks": 6
    },
    "_old_id": 90882900
  },
  {
    "name": "Sharky",
    "allowedPos": [
      1
    ],
    "ti": "TI1",
    "team": "MUFC",
    "account_id": 86713548,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 580,
      "xpm": 640,
      "kda": 3.5,
      "lane_eff": 54,
      "hero_pool": 10,
      "assists": 8,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1
    }
  },
  {
    "name": "Ferrari_430",
    "allowedPos": [
      2
    ],
    "ti": "TI1",
    "team": "iG",
    "account_id": 103735745,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 560,
      "xpm": 640,
      "kda": 3.7,
      "lane_eff": 53,
      "hero_pool": 14,
      "assists": 10,
      "obs_placed": 3,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 2
    }
  },
  {
    "name": "Faith",
    "allowedPos": [
      5
    ],
    "ti": "TI1",
    "team": "iG",
    "account_id": 1214026545,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 270,
      "xpm": 345,
      "kda": 2.8,
      "lane_eff": 42,
      "hero_pool": 20,
      "assists": 24,
      "obs_placed": 18,
      "sen_placed": 14,
      "obs_denied": 70,
      "stacks": 4
    },
    "_old_id": 86743551
  },
  {
    "name": "YYF",
    "allowedPos": [
      3
    ],
    "ti": "TI1",
    "team": "iG",
    "account_id": 86715323,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 420,
      "xpm": 490,
      "kda": 3,
      "lane_eff": 45,
      "hero_pool": 18,
      "assists": 14,
      "obs_placed": 7,
      "sen_placed": 3,
      "obs_denied": 52,
      "stacks": 7
    }
  },
  {
    "name": "Zhou",
    "allowedPos": [
      1
    ],
    "ti": "TI1",
    "team": "iG",
    "account_id": 86700498,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 580,
      "xpm": 640,
      "kda": 3.5,
      "lane_eff": 54,
      "hero_pool": 10,
      "assists": 8,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1
    }
  },
  {
    "name": "SanSheng",
    "allowedPos": [
      4
    ],
    "ti": "TI1",
    "team": "iG",
    "account_id": 86700484,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 310,
      "xpm": 390,
      "kda": 3.1,
      "lane_eff": 43,
      "hero_pool": 22,
      "assists": 22,
      "obs_placed": 14,
      "sen_placed": 10,
      "obs_denied": 66,
      "stacks": 6
    }
  },
  {
    "name": "Ferrari_430",
    "allowedPos": [
      2
    ],
    "ti": "TI2",
    "team": "iG",
    "account_id": 103735745,
    "matchCount": 6407,
    "source": "api",
    "stats": {
      "gpm": 560,
      "xpm": 640,
      "kda": 3.4,
      "lane_eff": 53,
      "hero_pool": 124,
      "assists": 12.8,
      "obs_placed": 3,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 2,
      "n": 6407
    }
  },
  {
    "name": "Faith",
    "allowedPos": [
      5
    ],
    "ti": "TI2",
    "team": "iG",
    "account_id": 1214026545,
    "matchCount": 433,
    "source": "api",
    "stats": {
      "gpm": 270,
      "xpm": 345,
      "kda": 2,
      "lane_eff": 42,
      "hero_pool": 78,
      "assists": 15.9,
      "obs_placed": 18,
      "sen_placed": 14,
      "obs_denied": 70,
      "stacks": 4
    },
    "_old_id": 86743551
  },
  {
    "name": "YYF",
    "allowedPos": [
      3
    ],
    "ti": "TI2",
    "team": "iG",
    "account_id": 86715323,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 420,
      "xpm": 490,
      "kda": 3,
      "lane_eff": 45,
      "hero_pool": 18,
      "assists": 14,
      "obs_placed": 7,
      "sen_placed": 3,
      "obs_denied": 52,
      "stacks": 7
    }
  },
  {
    "name": "Zhou",
    "allowedPos": [
      1
    ],
    "ti": "TI2",
    "team": "iG",
    "account_id": 86700498,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 580,
      "xpm": 640,
      "kda": 3.5,
      "lane_eff": 54,
      "hero_pool": 10,
      "assists": 8,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1
    }
  },
  {
    "name": "ChuaN",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI2",
    "team": "iG",
    "account_id": 86698277,
    "matchCount": 19194,
    "source": "api",
    "stats": {
      "gpm": 310,
      "xpm": 390,
      "kda": 3.4,
      "lane_eff": 43,
      "hero_pool": 123,
      "assists": 11.2,
      "obs_placed": 14,
      "sen_placed": 10,
      "obs_denied": 66,
      "stacks": 6,
      "n": 19194
    }
  },
  {
    "name": "Dendi",
    "allowedPos": [
      2
    ],
    "ti": "TI2",
    "team": "Na'Vi",
    "account_id": 70388657,
    "matchCount": 21318,
    "source": "api",
    "stats": {
      "gpm": 560,
      "xpm": 640,
      "kda": 3.5,
      "lane_eff": 53,
      "hero_pool": 121,
      "assists": 10.3,
      "obs_placed": 3,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 2,
      "n": 21318
    }
  },
  {
    "name": "XBOCT",
    "allowedPos": [
      1
    ],
    "ti": "TI2",
    "team": "Na'Vi",
    "account_id": 118832819,
    "matchCount": 5877,
    "source": "api",
    "stats": {
      "gpm": 580,
      "xpm": 640,
      "kda": 2.5,
      "lane_eff": 54,
      "hero_pool": 124,
      "assists": 13.2,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1
    },
    "_old_id": 102685548
  },
  {
    "name": "Puppey",
    "allowedPos": [
      5
    ],
    "ti": "TI2",
    "team": "Na'Vi",
    "account_id": 87278757,
    "matchCount": 3417,
    "source": "api",
    "stats": {
      "gpm": 270,
      "xpm": 345,
      "kda": 3.3,
      "lane_eff": 42,
      "hero_pool": 111,
      "assists": 12.4,
      "obs_placed": 18,
      "sen_placed": 14,
      "obs_denied": 70,
      "stacks": 4,
      "n": 3417
    }
  },
  {
    "name": "LighTofHeaveN",
    "allowedPos": [
      4
    ],
    "ti": "TI2",
    "team": "Na'Vi",
    "account_id": 82262664,
    "matchCount": 2633,
    "source": "api",
    "stats": {
      "gpm": 310,
      "xpm": 390,
      "kda": 2.7,
      "lane_eff": 43,
      "hero_pool": 123,
      "assists": 11.7,
      "obs_placed": 14,
      "sen_placed": 10,
      "obs_denied": 66,
      "stacks": 6,
      "n": 2633
    }
  },
  {
    "name": "KuroKy",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI2",
    "team": "Na'Vi",
    "account_id": 70388658,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 310,
      "xpm": 390,
      "kda": 3.1,
      "lane_eff": 43,
      "hero_pool": 22,
      "assists": 22,
      "obs_placed": 14,
      "sen_placed": 10,
      "obs_denied": 66,
      "stacks": 6
    }
  },
  {
    "name": "Mushi",
    "allowedPos": [
      1,
      2
    ],
    "ti": "TI2",
    "team": "Zenith",
    "account_id": 100883708,
    "matchCount": 3944,
    "source": "api",
    "stats": {
      "gpm": 580,
      "xpm": 640,
      "kda": 3.3,
      "lane_eff": 54,
      "hero_pool": 117,
      "assists": 13.9,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1,
      "n": 3944
    }
  },
  {
    "name": "XtiNcT",
    "allowedPos": [
      1
    ],
    "ti": "TI2",
    "team": "Zenith",
    "account_id": 91591620,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 580,
      "xpm": 640,
      "kda": 3.5,
      "lane_eff": 54,
      "hero_pool": 10,
      "assists": 8,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1
    }
  },
  {
    "name": "ky.xY",
    "allowedPos": [
      3
    ],
    "ti": "TI2",
    "team": "Zenith",
    "account_id": 86713546,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 420,
      "xpm": 490,
      "kda": 3,
      "lane_eff": 45,
      "hero_pool": 18,
      "assists": 14,
      "obs_placed": 7,
      "sen_placed": 3,
      "obs_denied": 52,
      "stacks": 7
    }
  },
  {
    "name": "Yamateh",
    "allowedPos": [
      2
    ],
    "ti": "TI2",
    "team": "Zenith",
    "account_id": 94362277,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 560,
      "xpm": 640,
      "kda": 3.7,
      "lane_eff": 53,
      "hero_pool": 14,
      "assists": 10,
      "obs_placed": 3,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 2
    }
  },
  {
    "name": "Ice",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI2",
    "team": "Zenith",
    "account_id": 86713549,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 310,
      "xpm": 390,
      "kda": 3.1,
      "lane_eff": 43,
      "hero_pool": 22,
      "assists": 22,
      "obs_placed": 14,
      "sen_placed": 10,
      "obs_denied": 66,
      "stacks": 6
    }
  },
  {
    "name": "Sylar",
    "allowedPos": [
      1
    ],
    "ti": "TI2",
    "team": "LGD",
    "account_id": 86740106,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 580,
      "xpm": 640,
      "kda": 3.5,
      "lane_eff": 54,
      "hero_pool": 10,
      "assists": 8,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1
    }
  },
  {
    "name": "xiao8",
    "allowedPos": [
      3,
      4
    ],
    "ti": "TI2",
    "team": "LGD",
    "account_id": 86700488,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 420,
      "xpm": 490,
      "kda": 3,
      "lane_eff": 45,
      "hero_pool": 18,
      "assists": 14,
      "obs_placed": 7,
      "sen_placed": 3,
      "obs_denied": 52,
      "stacks": 7
    }
  },
  {
    "name": "Yao",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI2",
    "team": "LGD",
    "account_id": 86700490,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 310,
      "xpm": 390,
      "kda": 3.1,
      "lane_eff": 43,
      "hero_pool": 22,
      "assists": 22,
      "obs_placed": 14,
      "sen_placed": 10,
      "obs_denied": 66,
      "stacks": 6
    }
  },
  {
    "name": "DD",
    "allowedPos": [
      2
    ],
    "ti": "TI2",
    "team": "LGD",
    "account_id": 236215455,
    "matchCount": 8339,
    "source": "api",
    "stats": {
      "gpm": 560,
      "xpm": 640,
      "kda": 2.3,
      "lane_eff": 53,
      "hero_pool": 124,
      "assists": 13.2,
      "obs_placed": 3,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 2
    },
    "_old_id": 86700489
  },
  {
    "name": "DDC",
    "allowedPos": [
      5
    ],
    "ti": "TI2",
    "team": "LGD",
    "account_id": 86700491,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 270,
      "xpm": 345,
      "kda": 2.8,
      "lane_eff": 42,
      "hero_pool": 20,
      "assists": 24,
      "obs_placed": 18,
      "sen_placed": 14,
      "obs_denied": 70,
      "stacks": 4
    }
  },
  {
    "name": "Mushi",
    "allowedPos": [
      1,
      2
    ],
    "ti": "TI2",
    "team": "Orange",
    "account_id": 100883708,
    "matchCount": 3944,
    "source": "api",
    "stats": {
      "gpm": 580,
      "xpm": 640,
      "kda": 3.3,
      "lane_eff": 54,
      "hero_pool": 117,
      "assists": 13.9,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1,
      "n": 3944
    }
  },
  {
    "name": "Ohaiyo",
    "allowedPos": [
      3,
      4
    ],
    "ti": "TI2",
    "team": "Orange",
    "account_id": 90882988,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 420,
      "xpm": 490,
      "kda": 3,
      "lane_eff": 45,
      "hero_pool": 18,
      "assists": 14,
      "obs_placed": 7,
      "sen_placed": 3,
      "obs_denied": 52,
      "stacks": 7
    }
  },
  {
    "name": "XtiNcT",
    "allowedPos": [
      1
    ],
    "ti": "TI2",
    "team": "Orange",
    "account_id": 91591620,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 580,
      "xpm": 640,
      "kda": 3.5,
      "lane_eff": 54,
      "hero_pool": 10,
      "assists": 8,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1
    }
  },
  {
    "name": "Ice",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI2",
    "team": "Orange",
    "account_id": 86713549,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 310,
      "xpm": 390,
      "kda": 3.1,
      "lane_eff": 43,
      "hero_pool": 22,
      "assists": 22,
      "obs_placed": 14,
      "sen_placed": 10,
      "obs_denied": 66,
      "stacks": 6
    }
  },
  {
    "name": "Winter",
    "allowedPos": [
      5
    ],
    "ti": "TI2",
    "team": "Orange",
    "account_id": 86762037,
    "matchCount": 14503,
    "source": "api",
    "stats": {
      "gpm": 270,
      "xpm": 345,
      "kda": 3.7,
      "lane_eff": 42,
      "hero_pool": 116,
      "assists": 14.5,
      "obs_placed": 18,
      "sen_placed": 14,
      "obs_denied": 70,
      "stacks": 4
    },
    "_old_id": 90882900
  },
  {
    "name": "AdmiralBulldog",
    "allowedPos": [
      1,
      3
    ],
    "ti": "TI3",
    "team": "Alliance",
    "account_id": 82262554,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 580,
      "xpm": 640,
      "kda": 3.5,
      "lane_eff": 54,
      "hero_pool": 10,
      "assists": 8,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1
    }
  },
  {
    "name": "Akke",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI3",
    "team": "Alliance",
    "account_id": 41288955,
    "matchCount": 4013,
    "source": "api",
    "stats": {
      "gpm": 310,
      "xpm": 390,
      "kda": 3.1,
      "lane_eff": 43,
      "hero_pool": 115,
      "assists": 12.4,
      "obs_placed": 14,
      "sen_placed": 10,
      "obs_denied": 66,
      "stacks": 6
    },
    "_old_id": 82262480
  },
  {
    "name": "EGM",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI3",
    "team": "Alliance",
    "account_id": 41563982,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 310,
      "xpm": 390,
      "kda": 3.1,
      "lane_eff": 43,
      "hero_pool": 22,
      "assists": 22,
      "obs_placed": 14,
      "sen_placed": 10,
      "obs_denied": 66,
      "stacks": 6
    }
  },
  {
    "name": "s4",
    "allowedPos": [
      2,
      3
    ],
    "ti": "TI3",
    "team": "Alliance",
    "account_id": 41231571,
    "matchCount": 9997,
    "source": "api",
    "stats": {
      "gpm": 560,
      "xpm": 640,
      "kda": 3.7,
      "lane_eff": 53,
      "hero_pool": 119,
      "assists": 12.8,
      "obs_placed": 3,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 2,
      "n": 9997
    }
  },
  {
    "name": "Loda",
    "allowedPos": [
      1
    ],
    "ti": "TI3",
    "team": "Alliance",
    "account_id": 2511,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 580,
      "xpm": 640,
      "kda": 3.5,
      "lane_eff": 54,
      "hero_pool": 10,
      "assists": 8,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1
    }
  },
  {
    "name": "Dendi",
    "allowedPos": [
      2
    ],
    "ti": "TI3",
    "team": "Na'Vi",
    "account_id": 70388657,
    "matchCount": 21318,
    "source": "api",
    "stats": {
      "gpm": 560,
      "xpm": 640,
      "kda": 3.5,
      "lane_eff": 53,
      "hero_pool": 121,
      "assists": 10.3,
      "obs_placed": 3,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 2,
      "n": 21318
    }
  },
  {
    "name": "XBOCT",
    "allowedPos": [
      1
    ],
    "ti": "TI3",
    "team": "Na'Vi",
    "account_id": 118832819,
    "matchCount": 5877,
    "source": "api",
    "stats": {
      "gpm": 580,
      "xpm": 640,
      "kda": 2.5,
      "lane_eff": 54,
      "hero_pool": 124,
      "assists": 13.2,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1
    },
    "_old_id": 102685548
  },
  {
    "name": "Puppey",
    "allowedPos": [
      5
    ],
    "ti": "TI3",
    "team": "Na'Vi",
    "account_id": 87278757,
    "matchCount": 3417,
    "source": "api",
    "stats": {
      "gpm": 270,
      "xpm": 345,
      "kda": 3.3,
      "lane_eff": 42,
      "hero_pool": 111,
      "assists": 12.4,
      "obs_placed": 18,
      "sen_placed": 14,
      "obs_denied": 70,
      "stacks": 4,
      "n": 3417
    }
  },
  {
    "name": "KuroKy",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI3",
    "team": "Na'Vi",
    "account_id": 70388658,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 310,
      "xpm": 390,
      "kda": 3.1,
      "lane_eff": 43,
      "hero_pool": 22,
      "assists": 22,
      "obs_placed": 14,
      "sen_placed": 10,
      "obs_denied": 66,
      "stacks": 6
    }
  },
  {
    "name": "Funn1k",
    "allowedPos": [
      3,
      4
    ],
    "ti": "TI3",
    "team": "Na'Vi",
    "account_id": 87278700,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 420,
      "xpm": 490,
      "kda": 3,
      "lane_eff": 45,
      "hero_pool": 18,
      "assists": 14,
      "obs_placed": 7,
      "sen_placed": 3,
      "obs_denied": 52,
      "stacks": 7
    }
  },
  {
    "name": "Mushi",
    "allowedPos": [
      1,
      2
    ],
    "ti": "TI3",
    "team": "Orange",
    "account_id": 100883708,
    "matchCount": 3944,
    "source": "api",
    "stats": {
      "gpm": 580,
      "xpm": 640,
      "kda": 3.3,
      "lane_eff": 54,
      "hero_pool": 117,
      "assists": 13.9,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1,
      "n": 3944
    }
  },
  {
    "name": "Ohaiyo",
    "allowedPos": [
      3,
      4
    ],
    "ti": "TI3",
    "team": "Orange",
    "account_id": 90882988,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 420,
      "xpm": 490,
      "kda": 3,
      "lane_eff": 45,
      "hero_pool": 18,
      "assists": 14,
      "obs_placed": 7,
      "sen_placed": 3,
      "obs_denied": 52,
      "stacks": 7
    }
  },
  {
    "name": "XtiNcT",
    "allowedPos": [
      1
    ],
    "ti": "TI3",
    "team": "Orange",
    "account_id": 91591620,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 580,
      "xpm": 640,
      "kda": 3.5,
      "lane_eff": 54,
      "hero_pool": 10,
      "assists": 8,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1
    }
  },
  {
    "name": "ky.xY",
    "allowedPos": [
      2,
      3
    ],
    "ti": "TI3",
    "team": "Orange",
    "account_id": 86713546,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 560,
      "xpm": 640,
      "kda": 3.7,
      "lane_eff": 53,
      "hero_pool": 14,
      "assists": 10,
      "obs_placed": 3,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 2
    }
  },
  {
    "name": "Net",
    "allowedPos": [
      5
    ],
    "ti": "TI3",
    "team": "Orange",
    "account_id": 90882989,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 270,
      "xpm": 345,
      "kda": 2.8,
      "lane_eff": 42,
      "hero_pool": 20,
      "assists": 24,
      "obs_placed": 18,
      "sen_placed": 14,
      "obs_denied": 70,
      "stacks": 4
    }
  },
  {
    "name": "Hao",
    "allowedPos": [
      1
    ],
    "ti": "TI3",
    "team": "TongFu",
    "account_id": 1675173184,
    "matchCount": 1207,
    "source": "api",
    "stats": {
      "gpm": 580,
      "xpm": 640,
      "kda": 3.4,
      "lane_eff": 54,
      "hero_pool": 82,
      "assists": 9.9,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1
    },
    "_old_id": 86700482
  },
  {
    "name": "Mu",
    "allowedPos": [
      2
    ],
    "ti": "TI3",
    "team": "TongFu",
    "account_id": 86700483,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 560,
      "xpm": 640,
      "kda": 3.7,
      "lane_eff": 53,
      "hero_pool": 14,
      "assists": 10,
      "obs_placed": 3,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 2
    }
  },
  {
    "name": "SanSheng",
    "allowedPos": [
      5
    ],
    "ti": "TI3",
    "team": "TongFu",
    "account_id": 86700484,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 270,
      "xpm": 345,
      "kda": 2.8,
      "lane_eff": 42,
      "hero_pool": 20,
      "assists": 24,
      "obs_placed": 18,
      "sen_placed": 14,
      "obs_denied": 70,
      "stacks": 4
    }
  },
  {
    "name": "Banana",
    "allowedPos": [
      4
    ],
    "ti": "TI3",
    "team": "TongFu",
    "account_id": 86700470,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 310,
      "xpm": 390,
      "kda": 3.1,
      "lane_eff": 43,
      "hero_pool": 22,
      "assists": 22,
      "obs_placed": 14,
      "sen_placed": 10,
      "obs_denied": 66,
      "stacks": 6
    }
  },
  {
    "name": "KingJ",
    "allowedPos": [
      3
    ],
    "ti": "TI3",
    "team": "TongFu",
    "account_id": 86700487,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 420,
      "xpm": 490,
      "kda": 3,
      "lane_eff": 45,
      "hero_pool": 18,
      "assists": 14,
      "obs_placed": 7,
      "sen_placed": 3,
      "obs_denied": 52,
      "stacks": 7
    }
  },
  {
    "name": "Ferrari_430",
    "allowedPos": [
      2
    ],
    "ti": "TI3",
    "team": "iG",
    "account_id": 103735745,
    "matchCount": 6407,
    "source": "api",
    "stats": {
      "gpm": 560,
      "xpm": 640,
      "kda": 3.4,
      "lane_eff": 53,
      "hero_pool": 124,
      "assists": 12.8,
      "obs_placed": 3,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 2,
      "n": 6407
    }
  },
  {
    "name": "Faith",
    "allowedPos": [
      5
    ],
    "ti": "TI3",
    "team": "iG",
    "account_id": 1214026545,
    "matchCount": 433,
    "source": "api",
    "stats": {
      "gpm": 270,
      "xpm": 345,
      "kda": 2,
      "lane_eff": 42,
      "hero_pool": 78,
      "assists": 15.9,
      "obs_placed": 18,
      "sen_placed": 14,
      "obs_denied": 70,
      "stacks": 4
    },
    "_old_id": 86743551
  },
  {
    "name": "YYF",
    "allowedPos": [
      3
    ],
    "ti": "TI3",
    "team": "iG",
    "account_id": 86715323,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 420,
      "xpm": 490,
      "kda": 3,
      "lane_eff": 45,
      "hero_pool": 18,
      "assists": 14,
      "obs_placed": 7,
      "sen_placed": 3,
      "obs_denied": 52,
      "stacks": 7
    }
  },
  {
    "name": "Zhou",
    "allowedPos": [
      1
    ],
    "ti": "TI3",
    "team": "iG",
    "account_id": 86700498,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 580,
      "xpm": 640,
      "kda": 3.5,
      "lane_eff": 54,
      "hero_pool": 10,
      "assists": 8,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1
    }
  },
  {
    "name": "ChuaN",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI3",
    "team": "iG",
    "account_id": 86698277,
    "matchCount": 19194,
    "source": "api",
    "stats": {
      "gpm": 310,
      "xpm": 390,
      "kda": 3.4,
      "lane_eff": 43,
      "hero_pool": 123,
      "assists": 11.2,
      "obs_placed": 14,
      "sen_placed": 10,
      "obs_denied": 66,
      "stacks": 6,
      "n": 19194
    }
  },
  {
    "name": "Hao",
    "allowedPos": [
      1
    ],
    "ti": "TI4",
    "team": "Newbee",
    "account_id": 88508515,
    "matchCount": 4,
    "source": "api",
    "stats": {
      "gpm": 558.5,
      "xpm": 549.8,
      "kda": 11.2,
      "lane_eff": 4,
      "hero_pool": 4,
      "assists": 8.5,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1
    },
    "_old_id": 86700482,
    "_detail": 4
  },
  {
    "name": "Mu",
    "allowedPos": [
      2
    ],
    "ti": "TI4",
    "team": "Newbee",
    "account_id": 86700483,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 560,
      "xpm": 640,
      "kda": 3.7,
      "lane_eff": 53,
      "hero_pool": 14,
      "assists": 10,
      "obs_placed": 3,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 2
    }
  },
  {
    "name": "SanSheng",
    "allowedPos": [
      5
    ],
    "ti": "TI4",
    "team": "Newbee",
    "account_id": 86700484,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 270,
      "xpm": 345,
      "kda": 2.8,
      "lane_eff": 42,
      "hero_pool": 20,
      "assists": 24,
      "obs_placed": 18,
      "sen_placed": 14,
      "obs_denied": 70,
      "stacks": 4
    }
  },
  {
    "name": "xiao8",
    "allowedPos": [
      3,
      4
    ],
    "ti": "TI4",
    "team": "Newbee",
    "account_id": 86700488,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 420,
      "xpm": 490,
      "kda": 3,
      "lane_eff": 45,
      "hero_pool": 18,
      "assists": 14,
      "obs_placed": 7,
      "sen_placed": 3,
      "obs_denied": 52,
      "stacks": 7
    }
  },
  {
    "name": "Banana",
    "allowedPos": [
      4
    ],
    "ti": "TI4",
    "team": "Newbee",
    "account_id": 86700470,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 310,
      "xpm": 390,
      "kda": 3.1,
      "lane_eff": 43,
      "hero_pool": 22,
      "assists": 22,
      "obs_placed": 14,
      "sen_placed": 10,
      "obs_denied": 66,
      "stacks": 6
    }
  },
  {
    "name": "Sylar",
    "allowedPos": [
      1
    ],
    "ti": "TI4",
    "team": "Vici Gaming",
    "account_id": 86740106,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 580,
      "xpm": 640,
      "kda": 3.5,
      "lane_eff": 54,
      "hero_pool": 10,
      "assists": 8,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1
    }
  },
  {
    "name": "Super",
    "allowedPos": [
      2
    ],
    "ti": "TI4",
    "team": "Vici Gaming",
    "account_id": 246907484,
    "matchCount": 1549,
    "source": "api",
    "stats": {
      "gpm": 560,
      "xpm": 640,
      "kda": 2.9,
      "lane_eff": 53,
      "hero_pool": 117,
      "assists": 14.3,
      "obs_placed": 3,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 2
    },
    "_old_id": 86700485
  },
  {
    "name": "rotk",
    "allowedPos": [
      3,
      4
    ],
    "ti": "TI4",
    "team": "Vici Gaming",
    "account_id": 86700486,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 420,
      "xpm": 490,
      "kda": 3,
      "lane_eff": 45,
      "hero_pool": 18,
      "assists": 14,
      "obs_placed": 7,
      "sen_placed": 3,
      "obs_denied": 52,
      "stacks": 7
    }
  },
  {
    "name": "Fenrir",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI4",
    "team": "Vici Gaming",
    "account_id": 1598505868,
    "matchCount": 806,
    "source": "api",
    "stats": {
      "gpm": 310,
      "xpm": 390,
      "kda": 2.8,
      "lane_eff": 43,
      "hero_pool": 57,
      "assists": 20.4,
      "obs_placed": 14,
      "sen_placed": 10,
      "obs_denied": 66,
      "stacks": 6
    },
    "_old_id": 86740107
  },
  {
    "name": "fy",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI4",
    "team": "Vici Gaming",
    "account_id": 86740108,
    "matchCount": 6370,
    "source": "api",
    "stats": {
      "gpm": 310,
      "xpm": 390,
      "kda": 3.2,
      "lane_eff": 43,
      "hero_pool": 115,
      "assists": 12.3,
      "obs_placed": 14,
      "sen_placed": 10,
      "obs_denied": 66,
      "stacks": 6,
      "n": 6370
    }
  },
  {
    "name": "Fear",
    "allowedPos": [
      1,
      3
    ],
    "ti": "TI4",
    "team": "EG",
    "account_id": 87382579,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 332,
      "xpm": 353,
      "kda": 3.5,
      "lane_eff": 54,
      "hero_pool": 10,
      "assists": 8,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1
    },
    "_got_details": true
  },
  {
    "name": "Arteezy",
    "allowedPos": [
      1
    ],
    "ti": "TI4",
    "team": "EG",
    "account_id": 86745912,
    "matchCount": 3105,
    "source": "api",
    "stats": {
      "gpm": 580,
      "xpm": 640,
      "kda": 3.7,
      "lane_eff": 54,
      "hero_pool": 106,
      "assists": 8.7,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1,
      "n": 3105
    }
  },
  {
    "name": "Universe",
    "allowedPos": [
      3
    ],
    "ti": "TI4",
    "team": "EG",
    "account_id": 786151469,
    "matchCount": 206,
    "source": "api",
    "stats": {
      "gpm": 420,
      "xpm": 490,
      "kda": 3.3,
      "lane_eff": 45,
      "hero_pool": 54,
      "assists": 12.2,
      "obs_placed": 7,
      "sen_placed": 3,
      "obs_denied": 52,
      "stacks": 7
    },
    "_old_id": 95065
  },
  {
    "name": "Zai",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI4",
    "team": "EG",
    "account_id": 149462,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 310,
      "xpm": 390,
      "kda": 3.1,
      "lane_eff": 43,
      "hero_pool": 22,
      "assists": 22,
      "obs_placed": 14,
      "sen_placed": 10,
      "obs_denied": 66,
      "stacks": 6
    }
  },
  {
    "name": "ppd",
    "allowedPos": [
      5
    ],
    "ti": "TI4",
    "team": "EG",
    "account_id": 18486761,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 270,
      "xpm": 345,
      "kda": 2.8,
      "lane_eff": 42,
      "hero_pool": 20,
      "assists": 24,
      "obs_placed": 18,
      "sen_placed": 14,
      "obs_denied": 70,
      "stacks": 4
    }
  },
  {
    "name": "BurNIng",
    "allowedPos": [
      1
    ],
    "ti": "TI4",
    "team": "DK",
    "account_id": 86712305,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 580,
      "xpm": 640,
      "kda": 3.5,
      "lane_eff": 54,
      "hero_pool": 10,
      "assists": 8,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1
    }
  },
  {
    "name": "Mushi",
    "allowedPos": [
      2
    ],
    "ti": "TI4",
    "team": "DK",
    "account_id": 89871557,
    "matchCount": 8,
    "source": "api",
    "stats": {
      "gpm": 399.1,
      "xpm": 391.9,
      "kda": 6.5,
      "lane_eff": 53,
      "hero_pool": 7,
      "assists": 6.5,
      "obs_placed": 3,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 2,
      "n": 3944
    },
    "_got_details": true,
    "_detail": 8
  },
  {
    "name": "iceiceice",
    "allowedPos": [
      3,
      4
    ],
    "ti": "TI4",
    "team": "DK",
    "account_id": 91591747,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 420,
      "xpm": 490,
      "kda": 3,
      "lane_eff": 45,
      "hero_pool": 18,
      "assists": 14,
      "obs_placed": 7,
      "sen_placed": 3,
      "obs_denied": 52,
      "stacks": 7
    }
  },
  {
    "name": "LaNm",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI4",
    "team": "DK",
    "account_id": 86730602,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 310,
      "xpm": 390,
      "kda": 3.1,
      "lane_eff": 43,
      "hero_pool": 22,
      "assists": 22,
      "obs_placed": 14,
      "sen_placed": 10,
      "obs_denied": 66,
      "stacks": 6
    }
  },
  {
    "name": "MMY",
    "allowedPos": [
      5
    ],
    "ti": "TI4",
    "team": "DK",
    "account_id": 86712304,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 270,
      "xpm": 345,
      "kda": 2.8,
      "lane_eff": 42,
      "hero_pool": 20,
      "assists": 24,
      "obs_placed": 18,
      "sen_placed": 14,
      "obs_denied": 70,
      "stacks": 4
    }
  },
  {
    "name": "EternalEnvy",
    "allowedPos": [
      1,
      2
    ],
    "ti": "TI4",
    "team": "Cloud9",
    "account_id": 43276219,
    "matchCount": 5,
    "source": "api",
    "stats": {
      "gpm": 595.4,
      "xpm": 525.6,
      "kda": 4.6,
      "lane_eff": 54,
      "hero_pool": 4,
      "assists": 7.4,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1
    },
    "_detail": 5
  },
  {
    "name": "FATA-",
    "allowedPos": [
      2,
      3
    ],
    "ti": "TI4",
    "team": "Cloud9",
    "account_id": 86700501,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 560,
      "xpm": 640,
      "kda": 3.7,
      "lane_eff": 53,
      "hero_pool": 14,
      "assists": 10,
      "obs_placed": 3,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 2
    }
  },
  {
    "name": "Bone7",
    "allowedPos": [
      3
    ],
    "ti": "TI4",
    "team": "Cloud9",
    "account_id": 86700503,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 420,
      "xpm": 490,
      "kda": 3,
      "lane_eff": 45,
      "hero_pool": 18,
      "assists": 14,
      "obs_placed": 7,
      "sen_placed": 3,
      "obs_denied": 52,
      "stacks": 7
    }
  },
  {
    "name": "Aui_2000",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI4",
    "team": "Cloud9",
    "account_id": 40547474,
    "matchCount": 5,
    "source": "api",
    "stats": {
      "gpm": 344.2,
      "xpm": 343.6,
      "kda": 3.3,
      "lane_eff": 43,
      "hero_pool": 3,
      "assists": 8,
      "obs_placed": 14,
      "sen_placed": 10,
      "obs_denied": 66,
      "stacks": 6
    },
    "_old_id": 90892789,
    "_got_details": true,
    "_detail": 5
  },
  {
    "name": "pieliedie",
    "allowedPos": [
      5
    ],
    "ti": "TI4",
    "team": "Cloud9",
    "account_id": 6922000,
    "matchCount": 5,
    "source": "api",
    "stats": {
      "gpm": 275.2,
      "xpm": 282.8,
      "kda": 2.5,
      "lane_eff": 42,
      "hero_pool": 5,
      "assists": 9.4,
      "obs_placed": 18,
      "sen_placed": 14,
      "obs_denied": 70,
      "stacks": 4
    },
    "_detail": 5
  },
  {
    "name": "Fear",
    "allowedPos": [
      1,
      3
    ],
    "ti": "TI5",
    "team": "EG",
    "account_id": 87382579,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 315,
      "xpm": 348,
      "kda": 3.5,
      "lane_eff": 54,
      "hero_pool": 10,
      "assists": 8,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1
    },
    "_got_details": true
  },
  {
    "name": "SumaiL",
    "allowedPos": [
      2
    ],
    "ti": "TI5",
    "team": "EG",
    "account_id": 111620041,
    "matchCount": 5,
    "source": "api",
    "stats": {
      "gpm": 597.4,
      "xpm": 652.6,
      "kda": 5,
      "lane_eff": 4,
      "hero_pool": 4,
      "assists": 8.8,
      "obs_placed": 3,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 2,
      "n": 9459
    },
    "_got_details": true,
    "_detail": 5
  },
  {
    "name": "Universe",
    "allowedPos": [
      3
    ],
    "ti": "TI5",
    "team": "EG",
    "account_id": 786151469,
    "matchCount": 206,
    "source": "api",
    "stats": {
      "gpm": 420,
      "xpm": 490,
      "kda": 3.3,
      "lane_eff": 45,
      "hero_pool": 54,
      "assists": 12.2,
      "obs_placed": 7,
      "sen_placed": 3,
      "obs_denied": 52,
      "stacks": 7
    },
    "_old_id": 95065
  },
  {
    "name": "Aui_2000",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI5",
    "team": "EG",
    "account_id": 40547474,
    "matchCount": 5,
    "source": "api",
    "stats": {
      "gpm": 318.4,
      "xpm": 290.4,
      "kda": 2.3,
      "lane_eff": 1,
      "hero_pool": 4,
      "assists": 5.8,
      "obs_placed": 14,
      "sen_placed": 10,
      "obs_denied": 66,
      "stacks": 6
    },
    "_old_id": 90892789,
    "_got_details": true,
    "_detail": 5
  },
  {
    "name": "ppd",
    "allowedPos": [
      5
    ],
    "ti": "TI5",
    "team": "EG",
    "account_id": 18486761,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 270,
      "xpm": 345,
      "kda": 2.8,
      "lane_eff": 42,
      "hero_pool": 20,
      "assists": 24,
      "obs_placed": 18,
      "sen_placed": 14,
      "obs_denied": 70,
      "stacks": 4
    }
  },
  {
    "name": "Agressif",
    "allowedPos": [
      1
    ],
    "ti": "TI5",
    "team": "CDEC",
    "account_id": 113331514,
    "matchCount": 9561,
    "source": "api",
    "stats": {
      "gpm": 494,
      "xpm": 503.7,
      "kda": 2.5,
      "lane_eff": 3,
      "hero_pool": 6,
      "assists": 8,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1
    }
  },
  {
    "name": "Shiki",
    "allowedPos": [
      2
    ],
    "ti": "TI5",
    "team": "CDEC",
    "account_id": 113331515,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 560,
      "xpm": 640,
      "kda": 3.7,
      "lane_eff": 53,
      "hero_pool": 14,
      "assists": 10,
      "obs_placed": 3,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 2
    }
  },
  {
    "name": "Xz",
    "allowedPos": [
      3,
      4
    ],
    "ti": "TI5",
    "team": "CDEC",
    "account_id": 113331517,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 420,
      "xpm": 490,
      "kda": 3,
      "lane_eff": 45,
      "hero_pool": 18,
      "assists": 14,
      "obs_placed": 7,
      "sen_placed": 3,
      "obs_denied": 52,
      "stacks": 7
    }
  },
  {
    "name": "Q",
    "allowedPos": [
      5
    ],
    "ti": "TI5",
    "team": "CDEC",
    "account_id": 113331518,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 270,
      "xpm": 345,
      "kda": 2.8,
      "lane_eff": 42,
      "hero_pool": 20,
      "assists": 24,
      "obs_placed": 18,
      "sen_placed": 14,
      "obs_denied": 70,
      "stacks": 4
    }
  },
  {
    "name": "Garder",
    "allowedPos": [
      4
    ],
    "ti": "TI5",
    "team": "CDEC",
    "account_id": 113331519,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 310,
      "xpm": 390,
      "kda": 3.1,
      "lane_eff": 43,
      "hero_pool": 22,
      "assists": 22,
      "obs_placed": 14,
      "sen_placed": 10,
      "obs_denied": 66,
      "stacks": 6
    }
  },
  {
    "name": "BurNIng",
    "allowedPos": [
      1
    ],
    "ti": "TI5",
    "team": "EHOME",
    "account_id": 86712305,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 580,
      "xpm": 640,
      "kda": 3.5,
      "lane_eff": 54,
      "hero_pool": 10,
      "assists": 8,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1
    }
  },
  {
    "name": "Cty",
    "allowedPos": [
      2
    ],
    "ti": "TI5",
    "team": "EHOME",
    "account_id": 140613225,
    "matchCount": 8047,
    "source": "api",
    "stats": {
      "gpm": 560,
      "xpm": 640,
      "kda": 2.9,
      "lane_eff": 53,
      "hero_pool": 123,
      "assists": 11.8,
      "obs_placed": 3,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 2
    },
    "_old_id": 86730603
  },
  {
    "name": "LaNm",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI5",
    "team": "EHOME",
    "account_id": 86730602,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 310,
      "xpm": 390,
      "kda": 3.1,
      "lane_eff": 43,
      "hero_pool": 22,
      "assists": 22,
      "obs_placed": 14,
      "sen_placed": 10,
      "obs_denied": 66,
      "stacks": 6
    }
  },
  {
    "name": "rotk",
    "allowedPos": [
      3,
      4
    ],
    "ti": "TI5",
    "team": "EHOME",
    "account_id": 86700486,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 420,
      "xpm": 490,
      "kda": 3,
      "lane_eff": 45,
      "hero_pool": 18,
      "assists": 14,
      "obs_placed": 7,
      "sen_placed": 3,
      "obs_denied": 52,
      "stacks": 7
    }
  },
  {
    "name": "DDC",
    "allowedPos": [
      5
    ],
    "ti": "TI5",
    "team": "EHOME",
    "account_id": 86700491,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 270,
      "xpm": 345,
      "kda": 2.8,
      "lane_eff": 42,
      "hero_pool": 20,
      "assists": 24,
      "obs_placed": 18,
      "sen_placed": 14,
      "obs_denied": 70,
      "stacks": 4
    }
  },
  {
    "name": "Hao",
    "allowedPos": [
      1
    ],
    "ti": "TI5",
    "team": "Vici Gaming",
    "account_id": 88508515,
    "matchCount": 2,
    "source": "api",
    "stats": {
      "gpm": 554,
      "xpm": 580,
      "kda": 5,
      "lane_eff": 4,
      "hero_pool": 1,
      "assists": 9,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1
    },
    "_old_id": 86700482,
    "_detail": 2
  },
  {
    "name": "Super",
    "allowedPos": [
      2
    ],
    "ti": "TI5",
    "team": "Vici Gaming",
    "account_id": 246907484,
    "matchCount": 1549,
    "source": "api",
    "stats": {
      "gpm": 560,
      "xpm": 640,
      "kda": 2.9,
      "lane_eff": 53,
      "hero_pool": 117,
      "assists": 14.3,
      "obs_placed": 3,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 2
    },
    "_old_id": 86700485
  },
  {
    "name": "iceiceice",
    "allowedPos": [
      3,
      4
    ],
    "ti": "TI5",
    "team": "Vici Gaming",
    "account_id": 91591747,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 420,
      "xpm": 490,
      "kda": 3,
      "lane_eff": 45,
      "hero_pool": 18,
      "assists": 14,
      "obs_placed": 7,
      "sen_placed": 3,
      "obs_denied": 52,
      "stacks": 7
    }
  },
  {
    "name": "Fenrir",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI5",
    "team": "Vici Gaming",
    "account_id": 1598505868,
    "matchCount": 806,
    "source": "api",
    "stats": {
      "gpm": 310,
      "xpm": 390,
      "kda": 2.8,
      "lane_eff": 43,
      "hero_pool": 57,
      "assists": 20.4,
      "obs_placed": 14,
      "sen_placed": 10,
      "obs_denied": 66,
      "stacks": 6
    },
    "_old_id": 86740107
  },
  {
    "name": "fy",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI5",
    "team": "Vici Gaming",
    "account_id": 86740108,
    "matchCount": 6370,
    "source": "api",
    "stats": {
      "gpm": 310,
      "xpm": 390,
      "kda": 3.2,
      "lane_eff": 43,
      "hero_pool": 115,
      "assists": 12.3,
      "obs_placed": 14,
      "sen_placed": 10,
      "obs_denied": 66,
      "stacks": 6,
      "n": 6370
    }
  },
  {
    "name": "Sylar",
    "allowedPos": [
      1
    ],
    "ti": "TI5",
    "team": "LGD",
    "account_id": 86740106,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 580,
      "xpm": 640,
      "kda": 3.5,
      "lane_eff": 54,
      "hero_pool": 10,
      "assists": 8,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1
    }
  },
  {
    "name": "Maybe",
    "allowedPos": [
      2
    ],
    "ti": "TI5",
    "team": "LGD",
    "account_id": 119514029,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 560,
      "xpm": 640,
      "kda": 3.7,
      "lane_eff": 53,
      "hero_pool": 14,
      "assists": 10,
      "obs_placed": 3,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 2
    }
  },
  {
    "name": "xiao8",
    "allowedPos": [
      3,
      4
    ],
    "ti": "TI5",
    "team": "LGD",
    "account_id": 86700488,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 420,
      "xpm": 490,
      "kda": 3,
      "lane_eff": 45,
      "hero_pool": 18,
      "assists": 14,
      "obs_placed": 7,
      "sen_placed": 3,
      "obs_denied": 52,
      "stacks": 7
    }
  },
  {
    "name": "Yao",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI5",
    "team": "LGD",
    "account_id": 86700490,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 310,
      "xpm": 390,
      "kda": 3.1,
      "lane_eff": 43,
      "hero_pool": 22,
      "assists": 22,
      "obs_placed": 14,
      "sen_placed": 10,
      "obs_denied": 66,
      "stacks": 6
    }
  },
  {
    "name": "MMY",
    "allowedPos": [
      5
    ],
    "ti": "TI5",
    "team": "LGD",
    "account_id": 86712304,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 270,
      "xpm": 345,
      "kda": 2.8,
      "lane_eff": 42,
      "hero_pool": 20,
      "assists": 24,
      "obs_placed": 18,
      "sen_placed": 14,
      "obs_denied": 70,
      "stacks": 4
    }
  },
  {
    "name": "shadow",
    "allowedPos": [
      1
    ],
    "ti": "TI6",
    "team": "Wings Gaming",
    "account_id": 129585121,
    "matchCount": 4,
    "source": "api",
    "stats": {
      "gpm": 650,
      "xpm": 533,
      "kda": 11.2,
      "lane_eff": 2,
      "hero_pool": 4,
      "assists": 8.8,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 2
    },
    "_old_id": 121712688,
    "_detail": 4
  },
  {
    "name": "bLink",
    "allowedPos": [
      2
    ],
    "ti": "TI6",
    "team": "Wings Gaming",
    "account_id": 149577192,
    "matchCount": 1274,
    "source": "api",
    "stats": {
      "gpm": 560,
      "xpm": 640,
      "kda": 2.9,
      "lane_eff": 53,
      "hero_pool": 114,
      "assists": 14.3,
      "obs_placed": 3,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 2,
      "n": 1274
    }
  },
  {
    "name": "Faith_bian",
    "allowedPos": [
      3
    ],
    "ti": "TI6",
    "team": "Wings Gaming",
    "account_id": 149048090,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 420,
      "xpm": 490,
      "kda": 3,
      "lane_eff": 45,
      "hero_pool": 18,
      "assists": 14,
      "obs_placed": 7,
      "sen_placed": 3,
      "obs_denied": 52,
      "stacks": 7
    }
  },
  {
    "name": "iceice",
    "allowedPos": [
      4
    ],
    "ti": "TI6",
    "team": "Wings Gaming",
    "account_id": 102644565,
    "matchCount": 15980,
    "source": "api",
    "stats": {
      "gpm": 310,
      "xpm": 390,
      "kda": 2.9,
      "lane_eff": 43,
      "hero_pool": 124,
      "assists": 13.3,
      "obs_placed": 14,
      "sen_placed": 10,
      "obs_denied": 66,
      "stacks": 6
    },
    "_old_id": 86740109
  },
  {
    "name": "y`",
    "allowedPos": [
      5
    ],
    "ti": "TI6",
    "team": "Wings Gaming",
    "account_id": 105248644,
    "matchCount": 4063,
    "source": "api",
    "stats": {
      "gpm": 270,
      "xpm": 345,
      "kda": 3.7,
      "lane_eff": 42,
      "hero_pool": 115,
      "assists": 8.8,
      "obs_placed": 18,
      "sen_placed": 14,
      "obs_denied": 70,
      "stacks": 4,
      "n": 4063
    }
  },
  {
    "name": "Resolut1on",
    "allowedPos": [
      1
    ],
    "ti": "TI6",
    "team": "Digital Chaos",
    "account_id": 86725175,
    "matchCount": 12,
    "source": "api",
    "stats": {
      "gpm": 612.1,
      "xpm": 541.8,
      "kda": 5.5,
      "lane_eff": 3,
      "hero_pool": 8,
      "assists": 8.5,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1
    },
    "_detail": 12
  },
  {
    "name": "w33",
    "allowedPos": [
      2
    ],
    "ti": "TI6",
    "team": "Digital Chaos",
    "account_id": 86700461,
    "matchCount": 12,
    "source": "api",
    "stats": {
      "gpm": 582.8,
      "xpm": 549.8,
      "kda": 3.3,
      "lane_eff": 3,
      "hero_pool": 8,
      "assists": 10.3,
      "obs_placed": 1,
      "sen_placed": 1.3,
      "obs_denied": 44,
      "stacks": 4
    },
    "_detail": 12
  },
  {
    "name": "Moo",
    "allowedPos": [
      3,
      4
    ],
    "ti": "TI6",
    "team": "Digital Chaos",
    "account_id": 94274927,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 420,
      "xpm": 490,
      "kda": 3,
      "lane_eff": 45,
      "hero_pool": 18,
      "assists": 14,
      "obs_placed": 7,
      "sen_placed": 3,
      "obs_denied": 52,
      "stacks": 7
    }
  },
  {
    "name": "Saksa",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI6",
    "team": "Digital Chaos",
    "account_id": 77490514,
    "matchCount": 6084,
    "source": "api",
    "stats": {
      "gpm": 310,
      "xpm": 390,
      "kda": 3.4,
      "lane_eff": 43,
      "hero_pool": 125,
      "assists": 12.5,
      "obs_placed": 14,
      "sen_placed": 10,
      "obs_denied": 66,
      "stacks": 6,
      "n": 6084
    }
  },
  {
    "name": "MiSeRy",
    "allowedPos": [
      5
    ],
    "ti": "TI6",
    "team": "Digital Chaos",
    "account_id": 96119269,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 270,
      "xpm": 345,
      "kda": 2.8,
      "lane_eff": 42,
      "hero_pool": 20,
      "assists": 24,
      "obs_placed": 18,
      "sen_placed": 14,
      "obs_denied": 70,
      "stacks": 4
    }
  },
  {
    "name": "Fear",
    "allowedPos": [
      1,
      3
    ],
    "ti": "TI6",
    "team": "EG",
    "account_id": 87382579,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 580,
      "xpm": 640,
      "kda": 3.5,
      "lane_eff": 54,
      "hero_pool": 10,
      "assists": 8,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1
    }
  },
  {
    "name": "SumaiL",
    "allowedPos": [
      2
    ],
    "ti": "TI6",
    "team": "EG",
    "account_id": 111620041,
    "matchCount": 4,
    "source": "api",
    "stats": {
      "gpm": 524,
      "xpm": 544.8,
      "kda": 4.6,
      "lane_eff": 4,
      "hero_pool": 4,
      "assists": 11,
      "obs_placed": 3,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 1,
      "n": 9459
    },
    "_detail": 4
  },
  {
    "name": "Universe",
    "allowedPos": [
      3
    ],
    "ti": "TI6",
    "team": "EG",
    "account_id": 786151469,
    "matchCount": 206,
    "source": "api",
    "stats": {
      "gpm": 420,
      "xpm": 490,
      "kda": 3.3,
      "lane_eff": 45,
      "hero_pool": 54,
      "assists": 12.2,
      "obs_placed": 7,
      "sen_placed": 3,
      "obs_denied": 52,
      "stacks": 7
    },
    "_old_id": 95065
  },
  {
    "name": "Zai",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI6",
    "team": "EG",
    "account_id": 149462,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 310,
      "xpm": 390,
      "kda": 3.1,
      "lane_eff": 43,
      "hero_pool": 22,
      "assists": 22,
      "obs_placed": 14,
      "sen_placed": 10,
      "obs_denied": 66,
      "stacks": 6
    }
  },
  {
    "name": "ppd",
    "allowedPos": [
      5
    ],
    "ti": "TI6",
    "team": "EG",
    "account_id": 18486761,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 270,
      "xpm": 345,
      "kda": 2.8,
      "lane_eff": 42,
      "hero_pool": 20,
      "assists": 24,
      "obs_placed": 18,
      "sen_placed": 14,
      "obs_denied": 70,
      "stacks": 4
    }
  },
  {
    "name": "Mushi",
    "allowedPos": [
      1,
      2
    ],
    "ti": "TI6",
    "team": "Fnatic",
    "account_id": 89871557,
    "matchCount": 12,
    "source": "api",
    "stats": {
      "gpm": 564.6,
      "xpm": 506.6,
      "kda": 5.3,
      "lane_eff": 3,
      "hero_pool": 10,
      "assists": 9.3,
      "obs_placed": 1,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 4,
      "n": 3944
    },
    "_detail": 12
  },
  {
    "name": "MidOne",
    "allowedPos": [
      2
    ],
    "ti": "TI6",
    "team": "Fnatic",
    "account_id": 116585378,
    "matchCount": 7400,
    "source": "api",
    "stats": {
      "gpm": 560,
      "xpm": 640,
      "kda": 4.1,
      "lane_eff": 53,
      "hero_pool": 120,
      "assists": 12.3,
      "obs_placed": 3,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 2
    },
    "_old_id": 149462
  },
  {
    "name": "Ohaiyo",
    "allowedPos": [
      3
    ],
    "ti": "TI6",
    "team": "Fnatic",
    "account_id": 90882988,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 420,
      "xpm": 490,
      "kda": 3,
      "lane_eff": 45,
      "hero_pool": 18,
      "assists": 14,
      "obs_placed": 7,
      "sen_placed": 3,
      "obs_denied": 52,
      "stacks": 7
    }
  },
  {
    "name": "DJ",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI6",
    "team": "Fnatic",
    "account_id": 102099826,
    "matchCount": 7379,
    "source": "api",
    "stats": {
      "gpm": 310,
      "xpm": 390,
      "kda": 3.9,
      "lane_eff": 43,
      "hero_pool": 123,
      "assists": 13,
      "obs_placed": 14,
      "sen_placed": 10,
      "obs_denied": 66,
      "stacks": 6
    },
    "_old_id": 100883709
  },
  {
    "name": "343",
    "allowedPos": [
      5
    ],
    "ti": "TI6",
    "team": "Fnatic",
    "account_id": 86745913,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 270,
      "xpm": 345,
      "kda": 2.8,
      "lane_eff": 42,
      "hero_pool": 20,
      "assists": 24,
      "obs_placed": 18,
      "sen_placed": 14,
      "obs_denied": 70,
      "stacks": 4
    }
  },
  {
    "name": "old chicken",
    "allowedPos": [
      1
    ],
    "ti": "TI6",
    "team": "EHOME",
    "account_id": 360775932,
    "matchCount": 233,
    "source": "api",
    "stats": {
      "gpm": 580,
      "xpm": 640,
      "kda": 2.5,
      "lane_eff": 54,
      "hero_pool": 73,
      "assists": 15.5,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1
    },
    "_old_id": 86700495
  },
  {
    "name": "iceiceice",
    "allowedPos": [
      2
    ],
    "ti": "TI6",
    "team": "EHOME",
    "account_id": 91591747,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 560,
      "xpm": 640,
      "kda": 3.7,
      "lane_eff": 53,
      "hero_pool": 14,
      "assists": 10,
      "obs_placed": 3,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 2
    }
  },
  {
    "name": "old eLeVeN",
    "allowedPos": [
      3,
      4
    ],
    "ti": "TI6",
    "team": "EHOME",
    "account_id": 134276083,
    "matchCount": 9,
    "source": "api",
    "stats": {
      "gpm": 395.6,
      "xpm": 444.4,
      "kda": 2.5,
      "lane_eff": 2,
      "hero_pool": 5,
      "assists": 11.3,
      "obs_placed": 2.2,
      "sen_placed": 1.8,
      "obs_denied": 52,
      "stacks": 4.7
    },
    "_detail": 9
  },
  {
    "name": "LaNm",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI6",
    "team": "EHOME",
    "account_id": 86730602,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 310,
      "xpm": 390,
      "kda": 3.1,
      "lane_eff": 43,
      "hero_pool": 22,
      "assists": 22,
      "obs_placed": 14,
      "sen_placed": 10,
      "obs_denied": 66,
      "stacks": 6
    }
  },
  {
    "name": "Fenrir",
    "allowedPos": [
      5
    ],
    "ti": "TI6",
    "team": "EHOME",
    "account_id": 1598505868,
    "matchCount": 806,
    "source": "api",
    "stats": {
      "gpm": 270,
      "xpm": 345,
      "kda": 2.8,
      "lane_eff": 42,
      "hero_pool": 57,
      "assists": 20.4,
      "obs_placed": 18,
      "sen_placed": 14,
      "obs_denied": 70,
      "stacks": 4
    },
    "_old_id": 86740107
  },
  {
    "name": "Miracle-",
    "allowedPos": [
      1,
      2
    ],
    "ti": "TI7",
    "team": "Team Liquid",
    "account_id": 105248644,
    "matchCount": 4063,
    "source": "api",
    "stats": {
      "gpm": 580,
      "xpm": 640,
      "kda": 3.7,
      "lane_eff": 54,
      "hero_pool": 115,
      "assists": 8.8,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1,
      "n": 4063
    }
  },
  {
    "name": "MATUMBAMAN",
    "allowedPos": [
      1
    ],
    "ti": "TI7",
    "team": "Team Liquid",
    "account_id": 94054712,
    "matchCount": 16921,
    "source": "api",
    "stats": {
      "gpm": 580,
      "xpm": 640,
      "kda": 3.1,
      "lane_eff": 54,
      "hero_pool": 126,
      "assists": 11.1,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1,
      "n": 16921
    }
  },
  {
    "name": "MinD_ContRoL",
    "allowedPos": [
      3
    ],
    "ti": "TI7",
    "team": "Team Liquid",
    "account_id": 34505203,
    "matchCount": 6,
    "source": "api",
    "stats": {
      "gpm": 457.3,
      "xpm": 494.8,
      "kda": 6.5,
      "lane_eff": 3,
      "hero_pool": 6,
      "assists": 13.8,
      "obs_placed": 1,
      "sen_placed": 2,
      "obs_denied": 52,
      "stacks": 1.4
    },
    "_old_id": 101867456,
    "_detail": 6
  },
  {
    "name": "GH",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI7",
    "team": "Team Liquid",
    "account_id": 101356886,
    "matchCount": 6,
    "source": "api",
    "stats": {
      "gpm": 317.7,
      "xpm": 387,
      "kda": 4,
      "lane_eff": 3,
      "hero_pool": 3,
      "assists": 14.7,
      "obs_placed": 1.5,
      "sen_placed": 1.5,
      "obs_denied": 66,
      "stacks": 6
    },
    "_old_id": 123787592,
    "_detail": 6
  },
  {
    "name": "KuroKy",
    "allowedPos": [
      5
    ],
    "ti": "TI7",
    "team": "Team Liquid",
    "account_id": 70388658,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 270,
      "xpm": 345,
      "kda": 2.8,
      "lane_eff": 42,
      "hero_pool": 20,
      "assists": 24,
      "obs_placed": 18,
      "sen_placed": 14,
      "obs_denied": 70,
      "stacks": 4
    }
  },
  {
    "name": "Moogy",
    "allowedPos": [
      1
    ],
    "ti": "TI7",
    "team": "Newbee",
    "account_id": 128742229,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 580,
      "xpm": 640,
      "kda": 3.5,
      "lane_eff": 54,
      "hero_pool": 10,
      "assists": 8,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1
    }
  },
  {
    "name": "Sccc",
    "allowedPos": [
      2
    ],
    "ti": "TI7",
    "team": "Newbee",
    "account_id": 149048090,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 560,
      "xpm": 640,
      "kda": 3.7,
      "lane_eff": 53,
      "hero_pool": 14,
      "assists": 10,
      "obs_placed": 3,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 2
    }
  },
  {
    "name": "Kpii",
    "allowedPos": [
      3
    ],
    "ti": "TI7",
    "team": "Newbee",
    "account_id": 86745914,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 420,
      "xpm": 490,
      "kda": 3,
      "lane_eff": 45,
      "hero_pool": 18,
      "assists": 14,
      "obs_placed": 7,
      "sen_placed": 3,
      "obs_denied": 52,
      "stacks": 7
    }
  },
  {
    "name": "Kaka",
    "allowedPos": [
      4
    ],
    "ti": "TI7",
    "team": "Newbee",
    "account_id": 139876032,
    "matchCount": 13568,
    "source": "api",
    "stats": {
      "gpm": 310,
      "xpm": 390,
      "kda": 3.3,
      "lane_eff": 43,
      "hero_pool": 123,
      "assists": 13.7,
      "obs_placed": 14,
      "sen_placed": 10,
      "obs_denied": 66,
      "stacks": 6
    },
    "_old_id": 103735652
  },
  {
    "name": "Faith",
    "allowedPos": [
      5
    ],
    "ti": "TI7",
    "team": "Newbee",
    "account_id": 1214026545,
    "matchCount": 433,
    "source": "api",
    "stats": {
      "gpm": 270,
      "xpm": 345,
      "kda": 2,
      "lane_eff": 42,
      "hero_pool": 78,
      "assists": 15.9,
      "obs_placed": 18,
      "sen_placed": 14,
      "obs_denied": 70,
      "stacks": 4
    },
    "_old_id": 86743551
  },
  {
    "name": "Ame",
    "allowedPos": [
      1
    ],
    "ti": "TI7",
    "team": "LFY",
    "account_id": 898754153,
    "matchCount": 1854,
    "source": "api",
    "stats": {
      "gpm": 580,
      "xpm": 640,
      "kda": 4.7,
      "lane_eff": 54,
      "hero_pool": 81,
      "assists": 8.5,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1
    },
    "_old_id": 135488229
  },
  {
    "name": "Super",
    "allowedPos": [
      2
    ],
    "ti": "TI7",
    "team": "LFY",
    "account_id": 246907484,
    "matchCount": 1549,
    "source": "api",
    "stats": {
      "gpm": 560,
      "xpm": 640,
      "kda": 2.9,
      "lane_eff": 53,
      "hero_pool": 117,
      "assists": 14.3,
      "obs_placed": 3,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 2
    },
    "_old_id": 86700485
  },
  {
    "name": "Inflame",
    "allowedPos": [
      3
    ],
    "ti": "TI7",
    "team": "LFY",
    "account_id": 236439031,
    "matchCount": 2423,
    "source": "api",
    "stats": {
      "gpm": 420,
      "xpm": 490,
      "kda": 2.9,
      "lane_eff": 45,
      "hero_pool": 114,
      "assists": 14.8,
      "obs_placed": 7,
      "sen_placed": 3,
      "obs_denied": 52,
      "stacks": 7
    },
    "_old_id": 149048092
  },
  {
    "name": "ah fu",
    "allowedPos": [
      4
    ],
    "ti": "TI7",
    "team": "LFY",
    "account_id": 149577193,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 310,
      "xpm": 390,
      "kda": 3.1,
      "lane_eff": 43,
      "hero_pool": 22,
      "assists": 22,
      "obs_placed": 14,
      "sen_placed": 10,
      "obs_denied": 66,
      "stacks": 6
    }
  },
  {
    "name": "DDC",
    "allowedPos": [
      5
    ],
    "ti": "TI7",
    "team": "LFY",
    "account_id": 86700491,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 270,
      "xpm": 345,
      "kda": 2.8,
      "lane_eff": 42,
      "hero_pool": 20,
      "assists": 24,
      "obs_placed": 18,
      "sen_placed": 14,
      "obs_denied": 70,
      "stacks": 4
    }
  },
  {
    "name": "Ame",
    "allowedPos": [
      1
    ],
    "ti": "TI7",
    "team": "LGD",
    "account_id": 898754153,
    "matchCount": 1854,
    "source": "api",
    "stats": {
      "gpm": 580,
      "xpm": 640,
      "kda": 4.7,
      "lane_eff": 54,
      "hero_pool": 81,
      "assists": 8.5,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1
    },
    "_old_id": 135488229
  },
  {
    "name": "Maybe",
    "allowedPos": [
      2
    ],
    "ti": "TI7",
    "team": "LGD",
    "account_id": 119514029,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 560,
      "xpm": 640,
      "kda": 3.7,
      "lane_eff": 53,
      "hero_pool": 14,
      "assists": 10,
      "obs_placed": 3,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 2
    }
  },
  {
    "name": "old eLeVeN",
    "allowedPos": [
      3
    ],
    "ti": "TI7",
    "team": "LGD",
    "account_id": 134276083,
    "matchCount": 9,
    "source": "api",
    "stats": {
      "gpm": 364.8,
      "xpm": 446.2,
      "kda": 2.5,
      "lane_eff": 2,
      "hero_pool": 5,
      "assists": 8.7,
      "obs_placed": 1.8,
      "sen_placed": 3,
      "obs_denied": 52,
      "stacks": 1.5
    },
    "_detail": 9
  },
  {
    "name": "Victoria",
    "allowedPos": [
      4
    ],
    "ti": "TI7",
    "team": "LGD",
    "account_id": 149048093,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 310,
      "xpm": 390,
      "kda": 3.1,
      "lane_eff": 43,
      "hero_pool": 22,
      "assists": 22,
      "obs_placed": 14,
      "sen_placed": 10,
      "obs_denied": 66,
      "stacks": 6
    }
  },
  {
    "name": "Yao",
    "allowedPos": [
      5
    ],
    "ti": "TI7",
    "team": "LGD",
    "account_id": 86700490,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 270,
      "xpm": 345,
      "kda": 2.8,
      "lane_eff": 42,
      "hero_pool": 20,
      "assists": 24,
      "obs_placed": 18,
      "sen_placed": 14,
      "obs_denied": 70,
      "stacks": 4
    }
  },
  {
    "name": "Paparazi灬",
    "allowedPos": [
      1,
      2
    ],
    "ti": "TI7",
    "team": "iG.Vitality",
    "account_id": 1004869752,
    "matchCount": 1581,
    "source": "api",
    "stats": {
      "gpm": 580,
      "xpm": 640,
      "kda": 2.4,
      "lane_eff": 54,
      "hero_pool": 126,
      "assists": 12.8,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1
    },
    "_old_id": 149048094
  },
  {
    "name": "Sakata",
    "allowedPos": [
      2
    ],
    "ti": "TI7",
    "team": "iG.Vitality",
    "account_id": 149048095,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 560,
      "xpm": 640,
      "kda": 3.7,
      "lane_eff": 53,
      "hero_pool": 14,
      "assists": 10,
      "obs_placed": 3,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 2
    }
  },
  {
    "name": "InJuly",
    "allowedPos": [
      3
    ],
    "ti": "TI7",
    "team": "iG.Vitality",
    "account_id": 149048096,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 420,
      "xpm": 490,
      "kda": 3,
      "lane_eff": 45,
      "hero_pool": 18,
      "assists": 14,
      "obs_placed": 7,
      "sen_placed": 3,
      "obs_denied": 52,
      "stacks": 7
    }
  },
  {
    "name": "dogf1ghts",
    "allowedPos": [
      4
    ],
    "ti": "TI7",
    "team": "iG.Vitality",
    "account_id": 149048097,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 310,
      "xpm": 390,
      "kda": 3.1,
      "lane_eff": 43,
      "hero_pool": 22,
      "assists": 22,
      "obs_placed": 14,
      "sen_placed": 10,
      "obs_denied": 66,
      "stacks": 6
    }
  },
  {
    "name": "super",
    "allowedPos": [
      5
    ],
    "ti": "TI7",
    "team": "iG.Vitality",
    "account_id": 246907484,
    "matchCount": 1549,
    "source": "api",
    "stats": {
      "gpm": 270,
      "xpm": 345,
      "kda": 2.9,
      "lane_eff": 42,
      "hero_pool": 117,
      "assists": 14.3,
      "obs_placed": 18,
      "sen_placed": 14,
      "obs_denied": 70,
      "stacks": 4
    },
    "_old_id": 86700485
  },
  {
    "name": "Ana",
    "allowedPos": [
      1
    ],
    "ti": "TI8",
    "team": "OG",
    "account_id": 311360822,
    "matchCount": 9871,
    "source": "api",
    "stats": {
      "gpm": 580,
      "xpm": 640,
      "kda": 3.7,
      "lane_eff": 54,
      "hero_pool": 124,
      "assists": 12.6,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1,
      "n": 9871
    }
  },
  {
    "name": "Topson",
    "allowedPos": [
      2
    ],
    "ti": "TI8",
    "team": "OG",
    "account_id": 94054712,
    "matchCount": 9,
    "source": "api",
    "stats": {
      "gpm": 492.3,
      "xpm": 581.1,
      "kda": 3.3,
      "lane_eff": 3,
      "hero_pool": 6,
      "assists": 14.2,
      "obs_placed": 1,
      "sen_placed": 1.7,
      "obs_denied": 44,
      "stacks": 2.5,
      "n": 16921
    },
    "_detail": 9
  },
  {
    "name": "Ceb",
    "allowedPos": [
      3,
      4
    ],
    "ti": "TI8",
    "team": "OG",
    "account_id": 25907144,
    "matchCount": 22725,
    "source": "api",
    "stats": {
      "gpm": 420,
      "xpm": 490,
      "kda": 3.1,
      "lane_eff": 45,
      "hero_pool": 127,
      "assists": 13.4,
      "obs_placed": 7,
      "sen_placed": 3,
      "obs_denied": 52,
      "stacks": 7,
      "n": 22725
    }
  },
  {
    "name": "JerAx",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI8",
    "team": "OG",
    "account_id": 101867456,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 310,
      "xpm": 390,
      "kda": 3.1,
      "lane_eff": 43,
      "hero_pool": 22,
      "assists": 22,
      "obs_placed": 14,
      "sen_placed": 10,
      "obs_denied": 66,
      "stacks": 6
    }
  },
  {
    "name": "N0tail",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI8",
    "team": "OG",
    "account_id": 87278757,
    "matchCount": 3417,
    "source": "api",
    "stats": {
      "gpm": 310,
      "xpm": 390,
      "kda": 3.3,
      "lane_eff": 43,
      "hero_pool": 111,
      "assists": 12.4,
      "obs_placed": 14,
      "sen_placed": 10,
      "obs_denied": 66,
      "stacks": 6,
      "n": 3417
    }
  },
  {
    "name": "Ame",
    "allowedPos": [
      1
    ],
    "ti": "TI8",
    "team": "PSG.LGD",
    "account_id": 898754153,
    "matchCount": 1854,
    "source": "api",
    "stats": {
      "gpm": 580,
      "xpm": 640,
      "kda": 4.7,
      "lane_eff": 54,
      "hero_pool": 81,
      "assists": 8.5,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1
    },
    "_old_id": 135488229
  },
  {
    "name": "Maybe",
    "allowedPos": [
      2
    ],
    "ti": "TI8",
    "team": "PSG.LGD",
    "account_id": 119514029,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 560,
      "xpm": 640,
      "kda": 3.7,
      "lane_eff": 53,
      "hero_pool": 14,
      "assists": 10,
      "obs_placed": 3,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 2
    }
  },
  {
    "name": "Chalice",
    "allowedPos": [
      3
    ],
    "ti": "TI8",
    "team": "PSG.LGD",
    "account_id": 149577192,
    "matchCount": 1274,
    "source": "api",
    "stats": {
      "gpm": 420,
      "xpm": 490,
      "kda": 2.9,
      "lane_eff": 45,
      "hero_pool": 114,
      "assists": 14.3,
      "obs_placed": 7,
      "sen_placed": 3,
      "obs_denied": 52,
      "stacks": 7,
      "n": 1274
    }
  },
  {
    "name": "fy",
    "allowedPos": [
      4
    ],
    "ti": "TI8",
    "team": "PSG.LGD",
    "account_id": 86740108,
    "matchCount": 6370,
    "source": "api",
    "stats": {
      "gpm": 310,
      "xpm": 390,
      "kda": 3.2,
      "lane_eff": 43,
      "hero_pool": 115,
      "assists": 12.3,
      "obs_placed": 14,
      "sen_placed": 10,
      "obs_denied": 66,
      "stacks": 6,
      "n": 6370
    }
  },
  {
    "name": "xNova",
    "allowedPos": [
      5
    ],
    "ti": "TI8",
    "team": "PSG.LGD",
    "account_id": 94296097,
    "matchCount": 9,
    "source": "api",
    "stats": {
      "gpm": 280.7,
      "xpm": 379.9,
      "kda": 2.5,
      "lane_eff": 1,
      "hero_pool": 7,
      "assists": 14.1,
      "obs_placed": 15,
      "sen_placed": 17.8,
      "obs_denied": 70,
      "stacks": 1.8
    },
    "_old_id": 149048091,
    "_detail": 9
  },
  {
    "name": "Arteezy",
    "allowedPos": [
      1
    ],
    "ti": "TI8",
    "team": "EG",
    "account_id": 86745912,
    "matchCount": 3105,
    "source": "api",
    "stats": {
      "gpm": 580,
      "xpm": 640,
      "kda": 3.7,
      "lane_eff": 54,
      "hero_pool": 106,
      "assists": 8.7,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1,
      "n": 3105
    }
  },
  {
    "name": "SumaiL",
    "allowedPos": [
      2
    ],
    "ti": "TI8",
    "team": "EG",
    "account_id": 111620041,
    "matchCount": 7,
    "source": "api",
    "stats": {
      "gpm": 558.6,
      "xpm": 574.6,
      "kda": 6.4,
      "lane_eff": 4,
      "hero_pool": 6,
      "assists": 9.4,
      "obs_placed": 1,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 1.6,
      "n": 9459
    },
    "_detail": 7
  },
  {
    "name": "s4",
    "allowedPos": [
      3
    ],
    "ti": "TI8",
    "team": "EG",
    "account_id": 41231571,
    "matchCount": 7,
    "source": "api",
    "stats": {
      "gpm": 446,
      "xpm": 457,
      "kda": 4.6,
      "lane_eff": 3,
      "hero_pool": 5,
      "assists": 11,
      "obs_placed": 1,
      "sen_placed": 3,
      "obs_denied": 52,
      "stacks": 1,
      "n": 9997
    },
    "_detail": 7
  },
  {
    "name": "Cr1t-",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI8",
    "team": "EG",
    "account_id": 25907144,
    "matchCount": 7,
    "source": "api",
    "stats": {
      "gpm": 297.1,
      "xpm": 340.3,
      "kda": 2.6,
      "lane_eff": 1,
      "hero_pool": 6,
      "assists": 13.1,
      "obs_placed": 3.4,
      "sen_placed": 3.7,
      "obs_denied": 66,
      "stacks": 2.8
    },
    "_old_id": 123787592,
    "_detail": 7
  },
  {
    "name": "Fly",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI8",
    "team": "EG",
    "account_id": 94054712,
    "matchCount": 16921,
    "source": "api",
    "stats": {
      "gpm": 310,
      "xpm": 390,
      "kda": 3.1,
      "lane_eff": 43,
      "hero_pool": 126,
      "assists": 11.1,
      "obs_placed": 14,
      "sen_placed": 10,
      "obs_denied": 66,
      "stacks": 6,
      "n": 16921
    }
  },
  {
    "name": "Miracle-",
    "allowedPos": [
      1,
      2
    ],
    "ti": "TI8",
    "team": "Team Liquid",
    "account_id": 105248644,
    "matchCount": 4063,
    "source": "api",
    "stats": {
      "gpm": 580,
      "xpm": 640,
      "kda": 3.7,
      "lane_eff": 54,
      "hero_pool": 115,
      "assists": 8.8,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1,
      "n": 4063
    }
  },
  {
    "name": "MATUMBAMAN",
    "allowedPos": [
      1
    ],
    "ti": "TI8",
    "team": "Team Liquid",
    "account_id": 94054712,
    "matchCount": 16921,
    "source": "api",
    "stats": {
      "gpm": 580,
      "xpm": 640,
      "kda": 3.1,
      "lane_eff": 54,
      "hero_pool": 126,
      "assists": 11.1,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1,
      "n": 16921
    }
  },
  {
    "name": "MinD_ContRoL",
    "allowedPos": [
      3
    ],
    "ti": "TI8",
    "team": "Team Liquid",
    "account_id": 34505203,
    "matchCount": 5,
    "source": "api",
    "stats": {
      "gpm": 474.2,
      "xpm": 522.8,
      "kda": 5.9,
      "lane_eff": 4,
      "hero_pool": 4,
      "assists": 11.8,
      "obs_placed": 7,
      "sen_placed": 1,
      "obs_denied": 52,
      "stacks": 3.5
    },
    "_old_id": 101867456,
    "_detail": 5
  },
  {
    "name": "GH",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI8",
    "team": "Team Liquid",
    "account_id": 88271237,
    "matchCount": 14,
    "source": "api",
    "stats": {
      "gpm": 402.3,
      "xpm": 506.9,
      "kda": 4.2,
      "lane_eff": 2,
      "hero_pool": 11,
      "assists": 17.9,
      "obs_placed": 2,
      "sen_placed": 2.3,
      "obs_denied": 66,
      "stacks": 1.8
    },
    "_old_id": 123787592,
    "_detail": 14
  },
  {
    "name": "KuroKy",
    "allowedPos": [
      5
    ],
    "ti": "TI8",
    "team": "Team Liquid",
    "account_id": 70388658,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 270,
      "xpm": 345,
      "kda": 2.8,
      "lane_eff": 42,
      "hero_pool": 20,
      "assists": 24,
      "obs_placed": 18,
      "sen_placed": 14,
      "obs_denied": 70,
      "stacks": 4
    }
  },
  {
    "name": "RAMZES666",
    "allowedPos": [
      1
    ],
    "ti": "TI8",
    "team": "Virtus.pro",
    "account_id": 132851371,
    "matchCount": 7,
    "source": "api",
    "stats": {
      "gpm": 486.6,
      "xpm": 502.1,
      "kda": 3.4,
      "lane_eff": 3,
      "hero_pool": 7,
      "assists": 9.7,
      "obs_placed": 1,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 2.5
    },
    "_old_id": 123787450,
    "_detail": 7
  },
  {
    "name": "No[o]ne",
    "allowedPos": [
      2
    ],
    "ti": "TI8",
    "team": "Virtus.pro",
    "account_id": 106573901,
    "matchCount": 7,
    "source": "api",
    "stats": {
      "gpm": 500.6,
      "xpm": 547.4,
      "kda": 3.6,
      "lane_eff": 4,
      "hero_pool": 6,
      "assists": 6.6,
      "obs_placed": 1.2,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 1.6
    },
    "_old_id": 107854158,
    "_detail": 7
  },
  {
    "name": "9pasha",
    "allowedPos": [
      3
    ],
    "ti": "TI8",
    "team": "Virtus.pro",
    "account_id": 77490514,
    "matchCount": 6084,
    "source": "api",
    "stats": {
      "gpm": 420,
      "xpm": 490,
      "kda": 3.4,
      "lane_eff": 45,
      "hero_pool": 125,
      "assists": 12.5,
      "obs_placed": 7,
      "sen_placed": 3,
      "obs_denied": 52,
      "stacks": 7,
      "n": 6084
    }
  },
  {
    "name": "RodjER",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI8",
    "team": "Virtus.pro",
    "account_id": 149048092,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 310,
      "xpm": 390,
      "kda": 3.1,
      "lane_eff": 43,
      "hero_pool": 22,
      "assists": 22,
      "obs_placed": 14,
      "sen_placed": 10,
      "obs_denied": 66,
      "stacks": 6
    }
  },
  {
    "name": "Solo",
    "allowedPos": [
      5
    ],
    "ti": "TI8",
    "team": "Virtus.pro",
    "account_id": 134556694,
    "matchCount": 7,
    "source": "api",
    "stats": {
      "gpm": 243.4,
      "xpm": 297.3,
      "kda": 2.1,
      "lane_eff": 1,
      "hero_pool": 6,
      "assists": 15,
      "obs_placed": 12,
      "sen_placed": 12.1,
      "obs_denied": 70,
      "stacks": 1.8
    },
    "_old_id": 96119269,
    "_detail": 7
  },
  {
    "name": "Ana",
    "allowedPos": [
      1
    ],
    "ti": "TI9",
    "team": "OG",
    "account_id": 311360822,
    "matchCount": 9871,
    "source": "api",
    "stats": {
      "gpm": 580,
      "xpm": 640,
      "kda": 3.7,
      "lane_eff": 54,
      "hero_pool": 124,
      "assists": 12.6,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1,
      "n": 9871
    }
  },
  {
    "name": "Topson",
    "allowedPos": [
      2
    ],
    "ti": "TI9",
    "team": "OG",
    "account_id": 94054712,
    "matchCount": 3,
    "source": "api",
    "stats": {
      "gpm": 490.7,
      "xpm": 560,
      "kda": 8.8,
      "lane_eff": 2,
      "hero_pool": 3,
      "assists": 10,
      "obs_placed": 1,
      "sen_placed": 2,
      "obs_denied": 44,
      "stacks": 1.5,
      "n": 16921
    },
    "_detail": 3
  },
  {
    "name": "Ceb",
    "allowedPos": [
      3,
      4
    ],
    "ti": "TI9",
    "team": "OG",
    "account_id": 25907144,
    "matchCount": 22725,
    "source": "api",
    "stats": {
      "gpm": 420,
      "xpm": 490,
      "kda": 3.1,
      "lane_eff": 45,
      "hero_pool": 127,
      "assists": 13.4,
      "obs_placed": 7,
      "sen_placed": 3,
      "obs_denied": 52,
      "stacks": 7,
      "n": 22725
    }
  },
  {
    "name": "JerAx",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI9",
    "team": "OG",
    "account_id": 101867456,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 310,
      "xpm": 390,
      "kda": 3.1,
      "lane_eff": 43,
      "hero_pool": 22,
      "assists": 22,
      "obs_placed": 14,
      "sen_placed": 10,
      "obs_denied": 66,
      "stacks": 6
    }
  },
  {
    "name": "N0tail",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI9",
    "team": "OG",
    "account_id": 87278757,
    "matchCount": 3417,
    "source": "api",
    "stats": {
      "gpm": 310,
      "xpm": 390,
      "kda": 3.3,
      "lane_eff": 43,
      "hero_pool": 111,
      "assists": 12.4,
      "obs_placed": 14,
      "sen_placed": 10,
      "obs_denied": 66,
      "stacks": 6,
      "n": 3417
    }
  },
  {
    "name": "Miracle-",
    "allowedPos": [
      1,
      2
    ],
    "ti": "TI9",
    "team": "Team Liquid",
    "account_id": 105248644,
    "matchCount": 4063,
    "source": "api",
    "stats": {
      "gpm": 580,
      "xpm": 640,
      "kda": 3.7,
      "lane_eff": 54,
      "hero_pool": 115,
      "assists": 8.8,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1,
      "n": 4063
    }
  },
  {
    "name": "w33",
    "allowedPos": [
      2,
      3
    ],
    "ti": "TI9",
    "team": "Team Liquid",
    "account_id": 86700461,
    "matchCount": 7,
    "source": "api",
    "stats": {
      "gpm": 588.7,
      "xpm": 641.7,
      "kda": 4.3,
      "lane_eff": 3,
      "hero_pool": 4,
      "assists": 8.7,
      "obs_placed": 1,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 3.8
    },
    "_detail": 7
  },
  {
    "name": "MinD_ContRoL",
    "allowedPos": [
      3
    ],
    "ti": "TI9",
    "team": "Team Liquid",
    "account_id": 34505203,
    "matchCount": 7,
    "source": "api",
    "stats": {
      "gpm": 394.6,
      "xpm": 496.7,
      "kda": 3.8,
      "lane_eff": 3,
      "hero_pool": 6,
      "assists": 17.4,
      "obs_placed": 1,
      "sen_placed": 1,
      "obs_denied": 52,
      "stacks": 2.2
    },
    "_old_id": 101867456,
    "_detail": 7
  },
  {
    "name": "GH",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI9",
    "team": "Team Liquid",
    "account_id": 101356886,
    "matchCount": 10,
    "source": "api",
    "stats": {
      "gpm": 351.4,
      "xpm": 426.7,
      "kda": 4.1,
      "lane_eff": 1,
      "hero_pool": 9,
      "assists": 14.5,
      "obs_placed": 1.6,
      "sen_placed": 3,
      "obs_denied": 66,
      "stacks": 4.7
    },
    "_old_id": 123787592,
    "_detail": 10
  },
  {
    "name": "KuroKy",
    "allowedPos": [
      5
    ],
    "ti": "TI9",
    "team": "Team Liquid",
    "account_id": 70388658,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 270,
      "xpm": 345,
      "kda": 2.8,
      "lane_eff": 42,
      "hero_pool": 20,
      "assists": 24,
      "obs_placed": 18,
      "sen_placed": 14,
      "obs_denied": 70,
      "stacks": 4
    }
  },
  {
    "name": "Ame",
    "allowedPos": [
      1
    ],
    "ti": "TI9",
    "team": "PSG.LGD",
    "account_id": 898754153,
    "matchCount": 1854,
    "source": "api",
    "stats": {
      "gpm": 580,
      "xpm": 640,
      "kda": 4.7,
      "lane_eff": 54,
      "hero_pool": 81,
      "assists": 8.5,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1
    },
    "_old_id": 135488229
  },
  {
    "name": "Maybe",
    "allowedPos": [
      2
    ],
    "ti": "TI9",
    "team": "PSG.LGD",
    "account_id": 119514029,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 560,
      "xpm": 640,
      "kda": 3.7,
      "lane_eff": 53,
      "hero_pool": 14,
      "assists": 10,
      "obs_placed": 3,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 2
    }
  },
  {
    "name": "Chalice",
    "allowedPos": [
      3
    ],
    "ti": "TI9",
    "team": "PSG.LGD",
    "account_id": 149577192,
    "matchCount": 1274,
    "source": "api",
    "stats": {
      "gpm": 420,
      "xpm": 490,
      "kda": 2.9,
      "lane_eff": 45,
      "hero_pool": 114,
      "assists": 14.3,
      "obs_placed": 7,
      "sen_placed": 3,
      "obs_denied": 52,
      "stacks": 7,
      "n": 1274
    }
  },
  {
    "name": "fy",
    "allowedPos": [
      4
    ],
    "ti": "TI9",
    "team": "PSG.LGD",
    "account_id": 86740108,
    "matchCount": 6370,
    "source": "api",
    "stats": {
      "gpm": 310,
      "xpm": 390,
      "kda": 3.2,
      "lane_eff": 43,
      "hero_pool": 115,
      "assists": 12.3,
      "obs_placed": 14,
      "sen_placed": 10,
      "obs_denied": 66,
      "stacks": 6,
      "n": 6370
    }
  },
  {
    "name": "xNova",
    "allowedPos": [
      5
    ],
    "ti": "TI9",
    "team": "PSG.LGD",
    "account_id": 94296097,
    "matchCount": 4,
    "source": "api",
    "stats": {
      "gpm": 265,
      "xpm": 327.3,
      "kda": 2.6,
      "lane_eff": 42,
      "hero_pool": 3,
      "assists": 15.3,
      "obs_placed": 20.5,
      "sen_placed": 29,
      "obs_denied": 70,
      "stacks": 4.3
    },
    "_old_id": 149048091,
    "_detail": 4
  },
  {
    "name": "Nisha",
    "allowedPos": [
      1,
      2
    ],
    "ti": "TI9",
    "team": "Team Secret",
    "account_id": 201358612,
    "matchCount": 4633,
    "source": "api",
    "stats": {
      "gpm": 580,
      "xpm": 640,
      "kda": 3.7,
      "lane_eff": 54,
      "hero_pool": 125,
      "assists": 12.9,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1
    },
    "_old_id": 311360821
  },
  {
    "name": "MidOne",
    "allowedPos": [
      2
    ],
    "ti": "TI9",
    "team": "Team Secret",
    "account_id": 116585378,
    "matchCount": 7400,
    "source": "api",
    "stats": {
      "gpm": 560,
      "xpm": 640,
      "kda": 4.1,
      "lane_eff": 53,
      "hero_pool": 120,
      "assists": 12.3,
      "obs_placed": 3,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 2
    },
    "_old_id": 149462
  },
  {
    "name": "Zai",
    "allowedPos": [
      3
    ],
    "ti": "TI9",
    "team": "Team Secret",
    "account_id": 149462,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 420,
      "xpm": 490,
      "kda": 3,
      "lane_eff": 45,
      "hero_pool": 18,
      "assists": 14,
      "obs_placed": 7,
      "sen_placed": 3,
      "obs_denied": 52,
      "stacks": 7
    }
  },
  {
    "name": "YapzOr",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI9",
    "team": "Team Secret",
    "account_id": 120444583,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 310,
      "xpm": 390,
      "kda": 3.1,
      "lane_eff": 43,
      "hero_pool": 22,
      "assists": 22,
      "obs_placed": 14,
      "sen_placed": 10,
      "obs_denied": 66,
      "stacks": 6
    }
  },
  {
    "name": "Puppey",
    "allowedPos": [
      5
    ],
    "ti": "TI9",
    "team": "Team Secret",
    "account_id": 87278757,
    "matchCount": 6,
    "source": "api",
    "stats": {
      "gpm": 297.8,
      "xpm": 385.5,
      "kda": 3.3,
      "lane_eff": 2,
      "hero_pool": 6,
      "assists": 12.7,
      "obs_placed": 11.5,
      "sen_placed": 12.5,
      "obs_denied": 70,
      "stacks": 3,
      "n": 3417
    },
    "_detail": 6
  },
  {
    "name": "Paparazi灬",
    "allowedPos": [
      1,
      2
    ],
    "ti": "TI9",
    "team": "Vici Gaming",
    "account_id": 1004869752,
    "matchCount": 1581,
    "source": "api",
    "stats": {
      "gpm": 580,
      "xpm": 640,
      "kda": 2.4,
      "lane_eff": 54,
      "hero_pool": 126,
      "assists": 12.8,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1
    },
    "_old_id": 149048094
  },
  {
    "name": "Ori",
    "allowedPos": [
      2
    ],
    "ti": "TI9",
    "team": "Vici Gaming",
    "account_id": 107803494,
    "matchCount": 12226,
    "source": "api",
    "stats": {
      "gpm": 560,
      "xpm": 640,
      "kda": 3.7,
      "lane_eff": 53,
      "hero_pool": 124,
      "assists": 11.1,
      "obs_placed": 3,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 2
    },
    "_old_id": 149048098
  },
  {
    "name": "Yang",
    "allowedPos": [
      3
    ],
    "ti": "TI9",
    "team": "Vici Gaming",
    "account_id": 139937922,
    "matchCount": 14094,
    "source": "api",
    "stats": {
      "gpm": 420,
      "xpm": 490,
      "kda": 3.3,
      "lane_eff": 45,
      "hero_pool": 125,
      "assists": 12.9,
      "obs_placed": 7,
      "sen_placed": 3,
      "obs_denied": 52,
      "stacks": 7
    },
    "_old_id": 149048099
  },
  {
    "name": "Fade",
    "allowedPos": [
      4
    ],
    "ti": "TI9",
    "team": "Vici Gaming",
    "account_id": 149048100,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 310,
      "xpm": 390,
      "kda": 3.1,
      "lane_eff": 43,
      "hero_pool": 22,
      "assists": 22,
      "obs_placed": 14,
      "sen_placed": 10,
      "obs_denied": 66,
      "stacks": 6
    }
  },
  {
    "name": "Dy",
    "allowedPos": [
      5
    ],
    "ti": "TI9",
    "team": "Vici Gaming",
    "account_id": 143693439,
    "matchCount": 9773,
    "source": "api",
    "stats": {
      "gpm": 270,
      "xpm": 345,
      "kda": 3.5,
      "lane_eff": 42,
      "hero_pool": 125,
      "assists": 14.9,
      "obs_placed": 18,
      "sen_placed": 14,
      "obs_denied": 70,
      "stacks": 4
    },
    "_old_id": 149048101
  },
  {
    "name": "Yatoro",
    "allowedPos": [
      1
    ],
    "ti": "TI10",
    "team": "Team Spirit",
    "account_id": 321580662,
    "matchCount": 17014,
    "source": "api",
    "stats": {
      "gpm": 720,
      "xpm": 742,
      "kda": 12.7,
      "lane_eff": 2,
      "hero_pool": 2,
      "assists": 13,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 3
    }
  },
  {
    "name": "TORONTOTOKYO",
    "allowedPos": [
      2
    ],
    "ti": "TI10",
    "team": "Team Spirit",
    "account_id": 396795205,
    "matchCount": 23,
    "source": "api",
    "stats": {
      "gpm": 560,
      "xpm": 640,
      "kda": 4,
      "lane_eff": 53,
      "hero_pool": 18,
      "assists": 10,
      "obs_placed": 3,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 2,
      "n": 23
    }
  },
  {
    "name": "Collapse",
    "allowedPos": [
      3,
      4
    ],
    "ti": "TI10",
    "team": "Team Spirit",
    "account_id": 302214028,
    "matchCount": 22,
    "source": "api",
    "stats": {
      "gpm": 440.4,
      "xpm": 544.5,
      "kda": 3.7,
      "lane_eff": 3,
      "hero_pool": 7,
      "assists": 13.1,
      "obs_placed": 1.6,
      "sen_placed": 1.4,
      "obs_denied": 52,
      "stacks": 1.3
    },
    "_old_id": 362219456,
    "_detail": 22
  },
  {
    "name": "Mira",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI10",
    "team": "Team Spirit",
    "account_id": 256156323,
    "matchCount": 22,
    "source": "api",
    "stats": {
      "gpm": 277.3,
      "xpm": 431.4,
      "kda": 3.2,
      "lane_eff": 2,
      "hero_pool": 10,
      "assists": 13,
      "obs_placed": 4,
      "sen_placed": 7.6,
      "obs_denied": 66,
      "stacks": 3.7
    },
    "_old_id": 388468439,
    "_detail": 22
  },
  {
    "name": "Miposhka",
    "allowedPos": [
      5
    ],
    "ti": "TI10",
    "team": "Team Spirit",
    "account_id": 113331514,
    "matchCount": 22,
    "source": "api",
    "stats": {
      "gpm": 271.2,
      "xpm": 390.5,
      "kda": 3.1,
      "lane_eff": 1,
      "hero_pool": 11,
      "assists": 13.9,
      "obs_placed": 12,
      "sen_placed": 23.7,
      "obs_denied": 70,
      "stacks": 3.6
    },
    "_old_id": 254512171,
    "_detail": 22
  },
  {
    "name": "Ame",
    "allowedPos": [
      1
    ],
    "ti": "TI10",
    "team": "PSG.LGD",
    "account_id": 898754153,
    "matchCount": 1854,
    "source": "api",
    "stats": {
      "gpm": 580,
      "xpm": 640,
      "kda": 4.7,
      "lane_eff": 54,
      "hero_pool": 81,
      "assists": 8.5,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1
    },
    "_old_id": 135488229
  },
  {
    "name": "NothingToSay",
    "allowedPos": [
      2
    ],
    "ti": "TI10",
    "team": "PSG.LGD",
    "account_id": 173978074,
    "matchCount": 14,
    "source": "api",
    "stats": {
      "gpm": 594.7,
      "xpm": 685.1,
      "kda": 6.2,
      "lane_eff": 4,
      "hero_pool": 8,
      "assists": 11.4,
      "obs_placed": 1,
      "sen_placed": 1.3,
      "obs_denied": 44,
      "stacks": 2.8
    },
    "_old_id": 128742229,
    "_detail": 14
  },
  {
    "name": "Faith_bian",
    "allowedPos": [
      3,
      4
    ],
    "ti": "TI10",
    "team": "PSG.LGD",
    "account_id": 149048090,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 420,
      "xpm": 490,
      "kda": 3,
      "lane_eff": 45,
      "hero_pool": 18,
      "assists": 14,
      "obs_placed": 7,
      "sen_placed": 3,
      "obs_denied": 52,
      "stacks": 7
    }
  },
  {
    "name": "XinQ",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI10",
    "team": "PSG.LGD",
    "account_id": 157475523,
    "matchCount": 12527,
    "source": "api",
    "stats": {
      "gpm": 310,
      "xpm": 390,
      "kda": 3.4,
      "lane_eff": 43,
      "hero_pool": 127,
      "assists": 12.2,
      "obs_placed": 14,
      "sen_placed": 10,
      "obs_denied": 66,
      "stacks": 6
    },
    "_old_id": 149048093
  },
  {
    "name": "y`",
    "allowedPos": [
      5
    ],
    "ti": "TI10",
    "team": "PSG.LGD",
    "account_id": 105248644,
    "matchCount": 4063,
    "source": "api",
    "stats": {
      "gpm": 270,
      "xpm": 345,
      "kda": 3.7,
      "lane_eff": 42,
      "hero_pool": 115,
      "assists": 8.8,
      "obs_placed": 18,
      "sen_placed": 14,
      "obs_denied": 70,
      "stacks": 4,
      "n": 4063
    }
  },
  {
    "name": "Nisha",
    "allowedPos": [
      1,
      2
    ],
    "ti": "TI10",
    "team": "Team Secret",
    "account_id": 201358612,
    "matchCount": 4633,
    "source": "api",
    "stats": {
      "gpm": 580,
      "xpm": 640,
      "kda": 3.7,
      "lane_eff": 54,
      "hero_pool": 125,
      "assists": 12.9,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1
    },
    "_old_id": 311360821
  },
  {
    "name": "SumaiL",
    "allowedPos": [
      2
    ],
    "ti": "TI10",
    "team": "Team Secret",
    "account_id": 111620041,
    "matchCount": 7,
    "source": "api",
    "stats": {
      "gpm": 557,
      "xpm": 692.1,
      "kda": 2.4,
      "lane_eff": 2,
      "hero_pool": 5,
      "assists": 5.6,
      "obs_placed": 1,
      "sen_placed": 2,
      "obs_denied": 44,
      "stacks": 2.9,
      "n": 9459
    },
    "_detail": 7
  },
  {
    "name": "iceiceice",
    "allowedPos": [
      3
    ],
    "ti": "TI10",
    "team": "Team Secret",
    "account_id": 91591747,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 420,
      "xpm": 490,
      "kda": 3,
      "lane_eff": 45,
      "hero_pool": 18,
      "assists": 14,
      "obs_placed": 7,
      "sen_placed": 3,
      "obs_denied": 52,
      "stacks": 7
    }
  },
  {
    "name": "YapzOr",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI10",
    "team": "Team Secret",
    "account_id": 120444583,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 310,
      "xpm": 390,
      "kda": 3.1,
      "lane_eff": 43,
      "hero_pool": 22,
      "assists": 22,
      "obs_placed": 14,
      "sen_placed": 10,
      "obs_denied": 66,
      "stacks": 6
    }
  },
  {
    "name": "Puppey",
    "allowedPos": [
      5
    ],
    "ti": "TI10",
    "team": "Team Secret",
    "account_id": 87278757,
    "matchCount": 11,
    "source": "api",
    "stats": {
      "gpm": 312.1,
      "xpm": 435.1,
      "kda": 3.8,
      "lane_eff": 1,
      "hero_pool": 7,
      "assists": 16.7,
      "obs_placed": 2.6,
      "sen_placed": 11.7,
      "obs_denied": 70,
      "stacks": 5.3,
      "n": 3417
    },
    "_detail": 11
  },
  {
    "name": "flyfly",
    "allowedPos": [
      1
    ],
    "ti": "TI10",
    "team": "iG",
    "account_id": 168028715,
    "matchCount": 10,
    "source": "api",
    "stats": {
      "gpm": 624.4,
      "xpm": 691,
      "kda": 6.8,
      "lane_eff": 3,
      "hero_pool": 8,
      "assists": 13.4,
      "obs_placed": 1,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 2
    },
    "_old_id": 149048102,
    "_detail": 10
  },
  {
    "name": "Emo",
    "allowedPos": [
      2
    ],
    "ti": "TI10",
    "team": "iG",
    "account_id": 202217968,
    "matchCount": 13410,
    "source": "api",
    "stats": {
      "gpm": 560,
      "xpm": 640,
      "kda": 4.2,
      "lane_eff": 53,
      "hero_pool": 124,
      "assists": 11.4,
      "obs_placed": 3,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 2
    },
    "_old_id": 149048103
  },
  {
    "name": "JT-",
    "allowedPos": [
      3,
      4
    ],
    "ti": "TI10",
    "team": "iG",
    "account_id": 138857296,
    "matchCount": 10,
    "source": "api",
    "stats": {
      "gpm": 472.2,
      "xpm": 570.5,
      "kda": 4.1,
      "lane_eff": 3,
      "hero_pool": 6,
      "assists": 13.4,
      "obs_placed": 1,
      "sen_placed": 1.5,
      "obs_denied": 52,
      "stacks": 2.3
    },
    "_old_id": 149048104,
    "_detail": 10
  },
  {
    "name": "Kaka",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI10",
    "team": "iG",
    "account_id": 139876032,
    "matchCount": 13568,
    "source": "api",
    "stats": {
      "gpm": 310,
      "xpm": 390,
      "kda": 3.3,
      "lane_eff": 43,
      "hero_pool": 123,
      "assists": 13.7,
      "obs_placed": 14,
      "sen_placed": 10,
      "obs_denied": 66,
      "stacks": 6
    },
    "_old_id": 103735652
  },
  {
    "name": "Oli~",
    "allowedPos": [
      5
    ],
    "ti": "TI10",
    "team": "iG",
    "account_id": 101259972,
    "matchCount": 10,
    "source": "api",
    "stats": {
      "gpm": 262.3,
      "xpm": 407.7,
      "kda": 3.2,
      "lane_eff": 42,
      "hero_pool": 7,
      "assists": 18.6,
      "obs_placed": 8.7,
      "sen_placed": 28.7,
      "obs_denied": 70,
      "stacks": 1.9
    },
    "_old_id": 149048105,
    "_detail": 10
  },
  {
    "name": "Nightfall",
    "allowedPos": [
      1
    ],
    "ti": "TI10",
    "team": "Virtus.pro",
    "account_id": 373520478,
    "matchCount": 9,
    "source": "api",
    "stats": {
      "gpm": 655.1,
      "xpm": 721.9,
      "kda": 3.9,
      "lane_eff": 4,
      "hero_pool": 6,
      "assists": 7.8,
      "obs_placed": 1,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 2.5
    },
    "_old_id": 374143001,
    "_detail": 9
  },
  {
    "name": "gpk~",
    "allowedPos": [
      2
    ],
    "ti": "TI10",
    "team": "Virtus.pro",
    "account_id": 367563618,
    "matchCount": 10173,
    "source": "api",
    "stats": {
      "gpm": 560,
      "xpm": 640,
      "kda": 2.9,
      "lane_eff": 53,
      "hero_pool": 125,
      "assists": 12.9,
      "obs_placed": 3,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 2
    },
    "_old_id": 374143002
  },
  {
    "name": "DM",
    "allowedPos": [
      3
    ],
    "ti": "TI10",
    "team": "Virtus.pro",
    "account_id": 56351509,
    "matchCount": 8,
    "source": "api",
    "stats": {
      "gpm": 428.4,
      "xpm": 534.5,
      "kda": 3.1,
      "lane_eff": 3,
      "hero_pool": 5,
      "assists": 13,
      "obs_placed": 7,
      "sen_placed": 1,
      "obs_denied": 52,
      "stacks": 1
    },
    "_old_id": 374143003,
    "_detail": 8
  },
  {
    "name": "Save-",
    "allowedPos": [
      4
    ],
    "ti": "TI10",
    "team": "Virtus.pro",
    "account_id": 317880638,
    "matchCount": 20652,
    "source": "api",
    "stats": {
      "gpm": 310,
      "xpm": 390,
      "kda": 3.1,
      "lane_eff": 43,
      "hero_pool": 125,
      "assists": 13.8,
      "obs_placed": 14,
      "sen_placed": 10,
      "obs_denied": 66,
      "stacks": 6
    },
    "_old_id": 374143004
  },
  {
    "name": "Kingslayer",
    "allowedPos": [
      5
    ],
    "ti": "TI10",
    "team": "Virtus.pro",
    "account_id": 199833749,
    "matchCount": 5159,
    "source": "api",
    "stats": {
      "gpm": 270,
      "xpm": 345,
      "kda": 3.6,
      "lane_eff": 42,
      "hero_pool": 125,
      "assists": 12.2,
      "obs_placed": 18,
      "sen_placed": 14,
      "obs_denied": 70,
      "stacks": 4
    },
    "_old_id": 374143005
  },
  {
    "name": "skiter",
    "allowedPos": [
      1
    ],
    "ti": "TI11",
    "team": "Tundra Esports",
    "account_id": 100058342,
    "matchCount": 11,
    "source": "api",
    "stats": {
      "gpm": 715,
      "xpm": 703.5,
      "kda": 10.8,
      "lane_eff": 3,
      "hero_pool": 6,
      "assists": 12.5,
      "obs_placed": 1.4,
      "sen_placed": 1.8,
      "obs_denied": 42,
      "stacks": 1.8
    },
    "_old_id": 321580660,
    "_detail": 11
  },
  {
    "name": "Nine",
    "allowedPos": [
      2
    ],
    "ti": "TI11",
    "team": "Tundra Esports",
    "account_id": 396795206,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 560,
      "xpm": 640,
      "kda": 3.7,
      "lane_eff": 53,
      "hero_pool": 14,
      "assists": 10,
      "obs_placed": 3,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 2
    }
  },
  {
    "name": "33",
    "allowedPos": [
      3
    ],
    "ti": "TI11",
    "team": "Tundra Esports",
    "account_id": 86698277,
    "matchCount": 11,
    "source": "api",
    "stats": {
      "gpm": 545.3,
      "xpm": 672.5,
      "kda": 6.8,
      "lane_eff": 2,
      "hero_pool": 6,
      "assists": 19.3,
      "obs_placed": 1.5,
      "sen_placed": 3,
      "obs_denied": 52,
      "stacks": 2.1
    },
    "_old_id": 311360820,
    "_detail": 11
  },
  {
    "name": "Saksa",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI11",
    "team": "Tundra Esports",
    "account_id": 77490514,
    "matchCount": 6086,
    "source": "api",
    "stats": {
      "gpm": 258.5,
      "xpm": 421.5,
      "kda": 2.7,
      "lane_eff": 1,
      "hero_pool": 2,
      "assists": 13,
      "obs_placed": 9,
      "sen_placed": 16,
      "obs_denied": 147,
      "stacks": 6
    }
  },
  {
    "name": "Sneyking",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI11",
    "team": "Tundra Esports",
    "account_id": 10366616,
    "matchCount": 11,
    "source": "api",
    "stats": {
      "gpm": 372.8,
      "xpm": 543.7,
      "kda": 4.2,
      "lane_eff": 1,
      "hero_pool": 5,
      "assists": 19.9,
      "obs_placed": 10.6,
      "sen_placed": 21.1,
      "obs_denied": 66,
      "stacks": 3.3
    },
    "_old_id": 94274926,
    "_detail": 11
  },
  {
    "name": "Crystallis",
    "allowedPos": [
      1
    ],
    "ti": "TI11",
    "team": "Team Secret",
    "account_id": 127617979,
    "matchCount": 15,
    "source": "api",
    "stats": {
      "gpm": 610.1,
      "xpm": 655.7,
      "kda": 5.5,
      "lane_eff": 2,
      "hero_pool": 11,
      "assists": 9.9,
      "obs_placed": 1,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 2.1
    },
    "_old_id": 374143000,
    "_detail": 15
  },
  {
    "name": "Nisha",
    "allowedPos": [
      1,
      2
    ],
    "ti": "TI11",
    "team": "Team Secret",
    "account_id": 201358612,
    "matchCount": 4633,
    "source": "api",
    "stats": {
      "gpm": 580,
      "xpm": 640,
      "kda": 3.7,
      "lane_eff": 54,
      "hero_pool": 125,
      "assists": 12.9,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1
    },
    "_old_id": 311360821
  },
  {
    "name": "Resolut1on",
    "allowedPos": [
      3
    ],
    "ti": "TI11",
    "team": "Team Secret",
    "account_id": 86725175,
    "matchCount": 15,
    "source": "api",
    "stats": {
      "gpm": 505.3,
      "xpm": 606.9,
      "kda": 4.3,
      "lane_eff": 3,
      "hero_pool": 9,
      "assists": 12.9,
      "obs_placed": 1,
      "sen_placed": 3,
      "obs_denied": 52,
      "stacks": 2
    },
    "_detail": 15
  },
  {
    "name": "Zayac",
    "allowedPos": [
      4
    ],
    "ti": "TI11",
    "team": "Team Secret",
    "account_id": 149048106,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 310,
      "xpm": 390,
      "kda": 3.1,
      "lane_eff": 43,
      "hero_pool": 22,
      "assists": 22,
      "obs_placed": 14,
      "sen_placed": 10,
      "obs_denied": 66,
      "stacks": 6
    }
  },
  {
    "name": "Puppey",
    "allowedPos": [
      5
    ],
    "ti": "TI11",
    "team": "Team Secret",
    "account_id": 87278757,
    "matchCount": 15,
    "source": "api",
    "stats": {
      "gpm": 311.6,
      "xpm": 453.5,
      "kda": 3.1,
      "lane_eff": 1,
      "hero_pool": 7,
      "assists": 16.6,
      "obs_placed": 5.2,
      "sen_placed": 15.5,
      "obs_denied": 150,
      "stacks": 3.5
    },
    "_detail": 15
  },
  {
    "name": "MATUMBAMAN",
    "allowedPos": [
      1
    ],
    "ti": "TI11",
    "team": "Team Liquid",
    "account_id": 94054712,
    "matchCount": 16921,
    "source": "api",
    "stats": {
      "gpm": 580,
      "xpm": 640,
      "kda": 3.1,
      "lane_eff": 54,
      "hero_pool": 126,
      "assists": 11.1,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1,
      "n": 16921
    }
  },
  {
    "name": "miCKe",
    "allowedPos": [
      2
    ],
    "ti": "TI11",
    "team": "Team Liquid",
    "account_id": 149048107,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 560,
      "xpm": 640,
      "kda": 3.7,
      "lane_eff": 53,
      "hero_pool": 14,
      "assists": 10,
      "obs_placed": 3,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 2
    }
  },
  {
    "name": "Zai",
    "allowedPos": [
      3
    ],
    "ti": "TI11",
    "team": "Team Liquid",
    "account_id": 149462,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 420,
      "xpm": 490,
      "kda": 3,
      "lane_eff": 45,
      "hero_pool": 18,
      "assists": 14,
      "obs_placed": 7,
      "sen_placed": 3,
      "obs_denied": 52,
      "stacks": 7
    }
  },
  {
    "name": "Boxi",
    "allowedPos": [
      4
    ],
    "ti": "TI11",
    "team": "Team Liquid",
    "account_id": 77490514,
    "matchCount": 16,
    "source": "api",
    "stats": {
      "gpm": 301.8,
      "xpm": 483.8,
      "kda": 2.7,
      "lane_eff": 1,
      "hero_pool": 4,
      "assists": 14.8,
      "obs_placed": 5.5,
      "sen_placed": 9.4,
      "obs_denied": 66,
      "stacks": 1.8
    },
    "_old_id": 149048108,
    "_detail": 16
  },
  {
    "name": "iNSaNiA",
    "allowedPos": [
      5
    ],
    "ti": "TI11",
    "team": "Team Liquid",
    "account_id": 54580962,
    "matchCount": 16,
    "source": "api",
    "stats": {
      "gpm": 297.4,
      "xpm": 407.1,
      "kda": 2.8,
      "lane_eff": 2,
      "hero_pool": 7,
      "assists": 14.9,
      "obs_placed": 11.8,
      "sen_placed": 23.4,
      "obs_denied": 70,
      "stacks": 2.4
    },
    "_old_id": 149048109,
    "_detail": 16
  },
  {
    "name": "Monet",
    "allowedPos": [
      1
    ],
    "ti": "TI11",
    "team": "Team Aster",
    "account_id": 148215639,
    "matchCount": 10473,
    "source": "api",
    "stats": {
      "gpm": 580,
      "xpm": 640,
      "kda": 3.9,
      "lane_eff": 54,
      "hero_pool": 122,
      "assists": 10,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1
    },
    "_old_id": 149048110
  },
  {
    "name": "Ori",
    "allowedPos": [
      2
    ],
    "ti": "TI11",
    "team": "Team Aster",
    "account_id": 107803494,
    "matchCount": 12226,
    "source": "api",
    "stats": {
      "gpm": 560,
      "xpm": 640,
      "kda": 3.7,
      "lane_eff": 53,
      "hero_pool": 124,
      "assists": 11.1,
      "obs_placed": 3,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 2
    },
    "_old_id": 149048098
  },
  {
    "name": "Xxs",
    "allowedPos": [
      3
    ],
    "ti": "TI11",
    "team": "Team Aster",
    "account_id": 129958758,
    "matchCount": 11789,
    "source": "api",
    "stats": {
      "gpm": 420,
      "xpm": 490,
      "kda": 4,
      "lane_eff": 45,
      "hero_pool": 124,
      "assists": 12.1,
      "obs_placed": 7,
      "sen_placed": 3,
      "obs_denied": 52,
      "stacks": 7
    },
    "_old_id": 128742228
  },
  {
    "name": "BoBoKa",
    "allowedPos": [
      4
    ],
    "ti": "TI11",
    "team": "Team Aster",
    "account_id": 149048111,
    "matchCount": 310,
    "source": "api",
    "stats": {
      "gpm": 310,
      "xpm": 390,
      "kda": 2.5,
      "lane_eff": 43,
      "hero_pool": 37,
      "assists": 12,
      "obs_placed": 14,
      "sen_placed": 10,
      "obs_denied": 66,
      "stacks": 6,
      "n": 310
    }
  },
  {
    "name": "皮球",
    "allowedPos": [
      5
    ],
    "ti": "TI11",
    "team": "Team Aster",
    "account_id": 149048112,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 270,
      "xpm": 345,
      "kda": 2.8,
      "lane_eff": 42,
      "hero_pool": 20,
      "assists": 24,
      "obs_placed": 18,
      "sen_placed": 14,
      "obs_denied": 70,
      "stacks": 4
    }
  },
  {
    "name": "Yuragi",
    "allowedPos": [
      1
    ],
    "ti": "TI11",
    "team": "OG",
    "account_id": 167976729,
    "matchCount": 7,
    "source": "api",
    "stats": {
      "gpm": 573.7,
      "xpm": 658,
      "kda": 3.2,
      "lane_eff": 2,
      "hero_pool": 7,
      "assists": 9.3,
      "obs_placed": 1,
      "sen_placed": 4,
      "obs_denied": 42,
      "stacks": 1
    },
    "_old_id": 149048113,
    "_detail": 7
  },
  {
    "name": "Bzm",
    "allowedPos": [
      1,
      2
    ],
    "ti": "TI11",
    "team": "OG",
    "account_id": 93618577,
    "matchCount": 7,
    "source": "api",
    "stats": {
      "gpm": 581.1,
      "xpm": 689,
      "kda": 4.3,
      "lane_eff": 3,
      "hero_pool": 5,
      "assists": 9.4,
      "obs_placed": 1.4,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1.2
    },
    "_old_id": 149048114,
    "_detail": 7
  },
  {
    "name": "ATF",
    "allowedPos": [
      3,
      4
    ],
    "ti": "TI11",
    "team": "OG",
    "account_id": 374143000,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 420,
      "xpm": 490,
      "kda": 3,
      "lane_eff": 45,
      "hero_pool": 18,
      "assists": 14,
      "obs_placed": 7,
      "sen_placed": 3,
      "obs_denied": 52,
      "stacks": 7
    }
  },
  {
    "name": "Taiga",
    "allowedPos": [
      4
    ],
    "ti": "TI11",
    "team": "OG",
    "account_id": 401792574,
    "matchCount": 7,
    "source": "api",
    "stats": {
      "gpm": 273.6,
      "xpm": 353.3,
      "kda": 2.2,
      "lane_eff": 2,
      "hero_pool": 6,
      "assists": 14.6,
      "obs_placed": 5,
      "sen_placed": 11.6,
      "obs_denied": 66,
      "stacks": 4.1
    },
    "_old_id": 149048115,
    "_detail": 7
  },
  {
    "name": "Misha",
    "allowedPos": [
      5
    ],
    "ti": "TI11",
    "team": "OG",
    "account_id": 90125566,
    "matchCount": 7,
    "source": "api",
    "stats": {
      "gpm": 253.7,
      "xpm": 344.1,
      "kda": 1.7,
      "lane_eff": 2,
      "hero_pool": 5,
      "assists": 11.6,
      "obs_placed": 9.9,
      "sen_placed": 15.1,
      "obs_denied": 70,
      "stacks": 2
    },
    "_detail": 7
  },
  {
    "name": "Yatoro",
    "allowedPos": [
      1
    ],
    "ti": "TI12",
    "team": "Team Spirit",
    "account_id": 321580662,
    "matchCount": 17016,
    "source": "api",
    "stats": {
      "gpm": 841,
      "xpm": 854.8,
      "kda": 9.9,
      "lane_eff": 4,
      "hero_pool": 4,
      "assists": 7.3,
      "obs_placed": 1,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1.5
    }
  },
  {
    "name": "Larl",
    "allowedPos": [
      2
    ],
    "ti": "TI12",
    "team": "Team Spirit",
    "account_id": 106305042,
    "matchCount": 11,
    "source": "api",
    "stats": {
      "gpm": 609.4,
      "xpm": 730.4,
      "kda": 5,
      "lane_eff": 4,
      "hero_pool": 8,
      "assists": 16,
      "obs_placed": 1.3,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 1.3
    },
    "_old_id": 149048117,
    "_detail": 11
  },
  {
    "name": "Collapse",
    "allowedPos": [
      3,
      4
    ],
    "ti": "TI12",
    "team": "Team Spirit",
    "account_id": 302214028,
    "matchCount": 11,
    "source": "api",
    "stats": {
      "gpm": 628.3,
      "xpm": 783.3,
      "kda": 5.1,
      "lane_eff": 2,
      "hero_pool": 8,
      "assists": 14.8,
      "obs_placed": 7,
      "sen_placed": 1,
      "obs_denied": 52,
      "stacks": 3.2
    },
    "_old_id": 362219456,
    "_detail": 11
  },
  {
    "name": "Mira",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI12",
    "team": "Team Spirit",
    "account_id": 256156323,
    "matchCount": 11,
    "source": "api",
    "stats": {
      "gpm": 343.4,
      "xpm": 528.4,
      "kda": 3.3,
      "lane_eff": 2,
      "hero_pool": 6,
      "assists": 17.1,
      "obs_placed": 5.5,
      "sen_placed": 9.4,
      "obs_denied": 66,
      "stacks": 6.4
    },
    "_old_id": 388468439,
    "_detail": 11
  },
  {
    "name": "Miposhka",
    "allowedPos": [
      5
    ],
    "ti": "TI12",
    "team": "Team Spirit",
    "account_id": 113331514,
    "matchCount": 11,
    "source": "api",
    "stats": {
      "gpm": 369,
      "xpm": 564.2,
      "kda": 2.9,
      "lane_eff": 1,
      "hero_pool": 7,
      "assists": 19.9,
      "obs_placed": 15,
      "sen_placed": 24.6,
      "obs_denied": 70,
      "stacks": 3.7
    },
    "_old_id": 254512171,
    "_detail": 11
  },
  {
    "name": "dyrachyo",
    "allowedPos": [
      1
    ],
    "ti": "TI12",
    "team": "Gaimin Gladiators",
    "account_id": 116934015,
    "matchCount": 17,
    "source": "api",
    "stats": {
      "gpm": 649.9,
      "xpm": 711.6,
      "kda": 3.8,
      "lane_eff": 3,
      "hero_pool": 10,
      "assists": 8.9,
      "obs_placed": 1.6,
      "sen_placed": 1.4,
      "obs_denied": 42,
      "stacks": 3.8
    },
    "_old_id": 149048118,
    "_detail": 17
  },
  {
    "name": "Quinn",
    "allowedPos": [
      2
    ],
    "ti": "TI12",
    "team": "Gaimin Gladiators",
    "account_id": 221666230,
    "matchCount": 17,
    "source": "api",
    "stats": {
      "gpm": 610.9,
      "xpm": 673.9,
      "kda": 5.8,
      "lane_eff": 4,
      "hero_pool": 9,
      "assists": 10.8,
      "obs_placed": 1.2,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 1.7
    },
    "_old_id": 374143003,
    "_detail": 17
  },
  {
    "name": "Ace",
    "allowedPos": [
      3
    ],
    "ti": "TI12",
    "team": "Gaimin Gladiators",
    "account_id": 97590558,
    "matchCount": 17,
    "source": "api",
    "stats": {
      "gpm": 638.2,
      "xpm": 669.8,
      "kda": 4.3,
      "lane_eff": 3,
      "hero_pool": 10,
      "assists": 11.1,
      "obs_placed": 1,
      "sen_placed": 1,
      "obs_denied": 52,
      "stacks": 3.7
    },
    "_old_id": 374143002,
    "_detail": 17
  },
  {
    "name": "tOfu",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI12",
    "team": "Gaimin Gladiators",
    "account_id": 16497807,
    "matchCount": 17,
    "source": "api",
    "stats": {
      "gpm": 349.4,
      "xpm": 467.2,
      "kda": 5.6,
      "lane_eff": 1,
      "hero_pool": 6,
      "assists": 14.1,
      "obs_placed": 7.8,
      "sen_placed": 12.9,
      "obs_denied": 66,
      "stacks": 4.5
    },
    "_old_id": 149048119,
    "_detail": 17
  },
  {
    "name": "Seleri",
    "allowedPos": [
      5
    ],
    "ti": "TI12",
    "team": "Gaimin Gladiators",
    "account_id": 91730177,
    "matchCount": 17,
    "source": "api",
    "stats": {
      "gpm": 369.6,
      "xpm": 447.9,
      "kda": 4.4,
      "lane_eff": 2,
      "hero_pool": 7,
      "assists": 15.1,
      "obs_placed": 8.1,
      "sen_placed": 14.8,
      "obs_denied": 70,
      "stacks": 4
    },
    "_old_id": 149048120,
    "_detail": 17
  },
  {
    "name": "shiro",
    "allowedPos": [
      1
    ],
    "ti": "TI12",
    "team": "LGD Gaming",
    "account_id": 320252024,
    "matchCount": 10,
    "source": "api",
    "stats": {
      "gpm": 744.4,
      "xpm": 759.5,
      "kda": 4.5,
      "lane_eff": 3,
      "hero_pool": 7,
      "assists": 10.6,
      "obs_placed": 1,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 2.3
    },
    "_old_id": 149048121,
    "_detail": 10
  },
  {
    "name": "NothingToSay",
    "allowedPos": [
      2
    ],
    "ti": "TI12",
    "team": "LGD Gaming",
    "account_id": 173978074,
    "matchCount": 10,
    "source": "api",
    "stats": {
      "gpm": 599.3,
      "xpm": 740.6,
      "kda": 5,
      "lane_eff": 4,
      "hero_pool": 7,
      "assists": 14.1,
      "obs_placed": 1.1,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 1.9
    },
    "_old_id": 128742229,
    "_detail": 10
  },
  {
    "name": "niu",
    "allowedPos": [
      3
    ],
    "ti": "TI12",
    "team": "LGD Gaming",
    "account_id": 145957968,
    "matchCount": 4838,
    "source": "api",
    "stats": {
      "gpm": 420,
      "xpm": 490,
      "kda": 4.5,
      "lane_eff": 45,
      "hero_pool": 117,
      "assists": 12.8,
      "obs_placed": 7,
      "sen_placed": 3,
      "obs_denied": 52,
      "stacks": 7
    },
    "_old_id": 149048122
  },
  {
    "name": "planet",
    "allowedPos": [
      4
    ],
    "ti": "TI12",
    "team": "LGD Gaming",
    "account_id": 150961567,
    "matchCount": 8270,
    "source": "api",
    "stats": {
      "gpm": 310,
      "xpm": 390,
      "kda": 3.5,
      "lane_eff": 43,
      "hero_pool": 126,
      "assists": 15.3,
      "obs_placed": 14,
      "sen_placed": 10,
      "obs_denied": 66,
      "stacks": 6
    },
    "_old_id": 149048123
  },
  {
    "name": "y`",
    "allowedPos": [
      5
    ],
    "ti": "TI12",
    "team": "LGD Gaming",
    "account_id": 105248644,
    "matchCount": 4063,
    "source": "api",
    "stats": {
      "gpm": 270,
      "xpm": 345,
      "kda": 3.7,
      "lane_eff": 42,
      "hero_pool": 115,
      "assists": 8.8,
      "obs_placed": 18,
      "sen_placed": 14,
      "obs_denied": 70,
      "stacks": 4,
      "n": 4063
    }
  },
  {
    "name": "Lou",
    "allowedPos": [
      1
    ],
    "ti": "TI12",
    "team": "Azure Ray",
    "account_id": 185908355,
    "matchCount": 11,
    "source": "api",
    "stats": {
      "gpm": 718.5,
      "xpm": 723.3,
      "kda": 4,
      "lane_eff": 2,
      "hero_pool": 8,
      "assists": 10.3,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1.9
    },
    "_old_id": 149048124,
    "_detail": 11
  },
  {
    "name": "Maybe",
    "allowedPos": [
      2
    ],
    "ti": "TI12",
    "team": "Azure Ray",
    "account_id": 119514029,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 560,
      "xpm": 640,
      "kda": 3.7,
      "lane_eff": 53,
      "hero_pool": 14,
      "assists": 10,
      "obs_placed": 3,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 2
    }
  },
  {
    "name": "Chalice",
    "allowedPos": [
      3
    ],
    "ti": "TI12",
    "team": "Azure Ray",
    "account_id": 149577192,
    "matchCount": 1274,
    "source": "api",
    "stats": {
      "gpm": 420,
      "xpm": 490,
      "kda": 2.9,
      "lane_eff": 45,
      "hero_pool": 114,
      "assists": 14.3,
      "obs_placed": 7,
      "sen_placed": 3,
      "obs_denied": 52,
      "stacks": 7,
      "n": 1274
    }
  },
  {
    "name": "fy",
    "allowedPos": [
      4
    ],
    "ti": "TI12",
    "team": "Azure Ray",
    "account_id": 86740108,
    "matchCount": 6370,
    "source": "api",
    "stats": {
      "gpm": 310,
      "xpm": 390,
      "kda": 3.2,
      "lane_eff": 43,
      "hero_pool": 115,
      "assists": 12.3,
      "obs_placed": 14,
      "sen_placed": 10,
      "obs_denied": 66,
      "stacks": 6,
      "n": 6370
    }
  },
  {
    "name": "天命",
    "allowedPos": [
      5
    ],
    "ti": "TI12",
    "team": "Azure Ray",
    "account_id": 149048125,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 270,
      "xpm": 345,
      "kda": 2.8,
      "lane_eff": 42,
      "hero_pool": 20,
      "assists": 24,
      "obs_placed": 18,
      "sen_placed": 14,
      "obs_denied": 70,
      "stacks": 4
    }
  },
  {
    "name": "Nightfall",
    "allowedPos": [
      1
    ],
    "ti": "TI12",
    "team": "BetBoom Team",
    "account_id": 124801257,
    "matchCount": 13,
    "source": "api",
    "stats": {
      "gpm": 748.1,
      "xpm": 749.8,
      "kda": 6.5,
      "lane_eff": 3,
      "hero_pool": 10,
      "assists": 10,
      "obs_placed": 1,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1.7
    },
    "_old_id": 374143001,
    "_detail": 13
  },
  {
    "name": "gpk~",
    "allowedPos": [
      2
    ],
    "ti": "TI12",
    "team": "BetBoom Team",
    "account_id": 367563618,
    "matchCount": 10173,
    "source": "api",
    "stats": {
      "gpm": 560,
      "xpm": 640,
      "kda": 2.9,
      "lane_eff": 53,
      "hero_pool": 125,
      "assists": 12.9,
      "obs_placed": 3,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 2
    },
    "_old_id": 374143002
  },
  {
    "name": "Pure",
    "allowedPos": [
      3
    ],
    "ti": "TI12",
    "team": "BetBoom Team",
    "account_id": 331855530,
    "matchCount": 13,
    "source": "api",
    "stats": {
      "gpm": 655.9,
      "xpm": 767.5,
      "kda": 4.4,
      "lane_eff": 2,
      "hero_pool": 10,
      "assists": 13.2,
      "obs_placed": 7,
      "sen_placed": 1,
      "obs_denied": 52,
      "stacks": 4.5
    },
    "_old_id": 149048126,
    "_detail": 13
  },
  {
    "name": "Save-",
    "allowedPos": [
      4
    ],
    "ti": "TI12",
    "team": "BetBoom Team",
    "account_id": 317880638,
    "matchCount": 20652,
    "source": "api",
    "stats": {
      "gpm": 310,
      "xpm": 390,
      "kda": 3.1,
      "lane_eff": 43,
      "hero_pool": 125,
      "assists": 13.8,
      "obs_placed": 14,
      "sen_placed": 10,
      "obs_denied": 66,
      "stacks": 6
    },
    "_old_id": 374143004
  },
  {
    "name": "TORONTOTOKYO",
    "allowedPos": [
      5
    ],
    "ti": "TI12",
    "team": "BetBoom Team",
    "account_id": 396795205,
    "matchCount": 23,
    "source": "api",
    "stats": {
      "gpm": 270,
      "xpm": 345,
      "kda": 4,
      "lane_eff": 42,
      "hero_pool": 18,
      "assists": 10,
      "obs_placed": 18,
      "sen_placed": 14,
      "obs_denied": 70,
      "stacks": 4,
      "n": 23
    }
  },
  {
    "name": "miCKe",
    "allowedPos": [
      1
    ],
    "ti": "TI13",
    "team": "Team Liquid",
    "account_id": 149048107,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 580,
      "xpm": 640,
      "kda": 3.5,
      "lane_eff": 54,
      "hero_pool": 10,
      "assists": 8,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1
    }
  },
  {
    "name": "Nisha",
    "allowedPos": [
      1,
      2
    ],
    "ti": "TI13",
    "team": "Team Liquid",
    "account_id": 201358612,
    "matchCount": 4633,
    "source": "api",
    "stats": {
      "gpm": 580,
      "xpm": 640,
      "kda": 3.7,
      "lane_eff": 54,
      "hero_pool": 125,
      "assists": 12.9,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1
    },
    "_old_id": 311360821
  },
  {
    "name": "33",
    "allowedPos": [
      3
    ],
    "ti": "TI13",
    "team": "Team Liquid",
    "account_id": 86698277,
    "matchCount": 9,
    "source": "api",
    "stats": {
      "gpm": 647.6,
      "xpm": 703.3,
      "kda": 12.5,
      "lane_eff": 3,
      "hero_pool": 4,
      "assists": 13.7,
      "obs_placed": 7,
      "sen_placed": 3,
      "obs_denied": 52,
      "stacks": 4.4
    },
    "_old_id": 311360820,
    "_detail": 9
  },
  {
    "name": "Boxi",
    "allowedPos": [
      4
    ],
    "ti": "TI13",
    "team": "Team Liquid",
    "account_id": 77490514,
    "matchCount": 9,
    "source": "api",
    "stats": {
      "gpm": 317.4,
      "xpm": 457.1,
      "kda": 5.1,
      "lane_eff": 1,
      "hero_pool": 3,
      "assists": 14.9,
      "obs_placed": 7.3,
      "sen_placed": 11.9,
      "obs_denied": 66,
      "stacks": 4.1
    },
    "_old_id": 149048108,
    "_detail": 9
  },
  {
    "name": "iNSaNiA",
    "allowedPos": [
      5
    ],
    "ti": "TI13",
    "team": "Team Liquid",
    "account_id": 54580962,
    "matchCount": 9,
    "source": "api",
    "stats": {
      "gpm": 351,
      "xpm": 449.4,
      "kda": 5.2,
      "lane_eff": 42,
      "hero_pool": 4,
      "assists": 16.8,
      "obs_placed": 8.7,
      "sen_placed": 14.7,
      "obs_denied": 70,
      "stacks": 3.7
    },
    "_old_id": 149048109,
    "_detail": 9
  },
  {
    "name": "dyrachyo",
    "allowedPos": [
      1
    ],
    "ti": "TI13",
    "team": "Gaimin Gladiators",
    "account_id": 116934015,
    "matchCount": 16,
    "source": "api",
    "stats": {
      "gpm": 645,
      "xpm": 678.3,
      "kda": 3.7,
      "lane_eff": 3,
      "hero_pool": 10,
      "assists": 9.5,
      "obs_placed": 1.2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 4.9
    },
    "_old_id": 149048118,
    "_detail": 16
  },
  {
    "name": "Quinn",
    "allowedPos": [
      2
    ],
    "ti": "TI13",
    "team": "Gaimin Gladiators",
    "account_id": 221666230,
    "matchCount": 16,
    "source": "api",
    "stats": {
      "gpm": 560.3,
      "xpm": 648.6,
      "kda": 5.4,
      "lane_eff": 4,
      "hero_pool": 11,
      "assists": 9.6,
      "obs_placed": 1.2,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 2.2
    },
    "_old_id": 374143003,
    "_detail": 16
  },
  {
    "name": "Ace",
    "allowedPos": [
      3
    ],
    "ti": "TI13",
    "team": "Gaimin Gladiators",
    "account_id": 97590558,
    "matchCount": 16,
    "source": "api",
    "stats": {
      "gpm": 513.7,
      "xpm": 570.9,
      "kda": 5,
      "lane_eff": 3,
      "hero_pool": 6,
      "assists": 12,
      "obs_placed": 7,
      "sen_placed": 1,
      "obs_denied": 52,
      "stacks": 2.4
    },
    "_old_id": 374143002,
    "_detail": 16
  },
  {
    "name": "tOfu",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI13",
    "team": "Gaimin Gladiators",
    "account_id": 16497807,
    "matchCount": 16,
    "source": "api",
    "stats": {
      "gpm": 342.8,
      "xpm": 437.4,
      "kda": 3.8,
      "lane_eff": 2,
      "hero_pool": 8,
      "assists": 13.8,
      "obs_placed": 8.8,
      "sen_placed": 13.8,
      "obs_denied": 66,
      "stacks": 4.6
    },
    "_old_id": 149048119,
    "_detail": 16
  },
  {
    "name": "Seleri",
    "allowedPos": [
      5
    ],
    "ti": "TI13",
    "team": "Gaimin Gladiators",
    "account_id": 91730177,
    "matchCount": 16,
    "source": "api",
    "stats": {
      "gpm": 325.5,
      "xpm": 431.7,
      "kda": 3.8,
      "lane_eff": 3,
      "hero_pool": 8,
      "assists": 13.4,
      "obs_placed": 6.4,
      "sen_placed": 13.5,
      "obs_denied": 70,
      "stacks": 3.9
    },
    "_old_id": 149048120,
    "_detail": 16
  },
  {
    "name": "skiter",
    "allowedPos": [
      1
    ],
    "ti": "TI13",
    "team": "Team Falcons",
    "account_id": 100058342,
    "matchCount": 12,
    "source": "api",
    "stats": {
      "gpm": 640.4,
      "xpm": 711.3,
      "kda": 6.3,
      "lane_eff": 3,
      "hero_pool": 8,
      "assists": 11.9,
      "obs_placed": 1,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 2.3
    },
    "_old_id": 321580660,
    "_detail": 12
  },
  {
    "name": "Malr1ne",
    "allowedPos": [
      2
    ],
    "ti": "TI13",
    "team": "Team Falcons",
    "account_id": 898455820,
    "matchCount": 13756,
    "source": "api",
    "stats": {
      "gpm": 560,
      "xpm": 640,
      "kda": 3.9,
      "lane_eff": 53,
      "hero_pool": 104,
      "assists": 10.6,
      "obs_placed": 3,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 2
    },
    "_old_id": 149048127
  },
  {
    "name": "ATF",
    "allowedPos": [
      3
    ],
    "ti": "TI13",
    "team": "Team Falcons",
    "account_id": 374143000,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 420,
      "xpm": 490,
      "kda": 3,
      "lane_eff": 45,
      "hero_pool": 18,
      "assists": 14,
      "obs_placed": 7,
      "sen_placed": 3,
      "obs_denied": 52,
      "stacks": 7
    }
  },
  {
    "name": "Cr1t-",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI13",
    "team": "Team Falcons",
    "account_id": 25907144,
    "matchCount": 12,
    "source": "api",
    "stats": {
      "gpm": 373.2,
      "xpm": 518.7,
      "kda": 5.5,
      "lane_eff": 1,
      "hero_pool": 6,
      "assists": 16,
      "obs_placed": 6.8,
      "sen_placed": 8,
      "obs_denied": 66,
      "stacks": 5.5
    },
    "_old_id": 123787592,
    "_detail": 12
  },
  {
    "name": "Sneyking",
    "allowedPos": [
      5
    ],
    "ti": "TI13",
    "team": "Team Falcons",
    "account_id": 10366616,
    "matchCount": 12,
    "source": "api",
    "stats": {
      "gpm": 362.5,
      "xpm": 519.5,
      "kda": 4.5,
      "lane_eff": 2,
      "hero_pool": 8,
      "assists": 16.4,
      "obs_placed": 9.9,
      "sen_placed": 20.1,
      "obs_denied": 70,
      "stacks": 2.5
    },
    "_old_id": 94274926,
    "_detail": 12
  },
  {
    "name": "Pure",
    "allowedPos": [
      1
    ],
    "ti": "TI13",
    "team": "Tundra Esports",
    "account_id": 331855530,
    "matchCount": 13,
    "source": "api",
    "stats": {
      "gpm": 705.1,
      "xpm": 819.8,
      "kda": 6.4,
      "lane_eff": 2,
      "hero_pool": 8,
      "assists": 9.8,
      "obs_placed": 1,
      "sen_placed": 2.3,
      "obs_denied": 42,
      "stacks": 3.4
    },
    "_old_id": 149048126,
    "_detail": 13
  },
  {
    "name": "Topson",
    "allowedPos": [
      2
    ],
    "ti": "TI13",
    "team": "Tundra Esports",
    "account_id": 94054712,
    "matchCount": 13,
    "source": "api",
    "stats": {
      "gpm": 586.8,
      "xpm": 646.2,
      "kda": 3.6,
      "lane_eff": 3,
      "hero_pool": 8,
      "assists": 11.3,
      "obs_placed": 1.7,
      "sen_placed": 1,
      "obs_denied": 25,
      "stacks": 3.2
    },
    "_detail": 13
  },
  {
    "name": "RAMZES666",
    "allowedPos": [
      3
    ],
    "ti": "TI13",
    "team": "Tundra Esports",
    "account_id": 132851371,
    "matchCount": 13,
    "source": "api",
    "stats": {
      "gpm": 505.5,
      "xpm": 620.9,
      "kda": 3.8,
      "lane_eff": 3,
      "hero_pool": 5,
      "assists": 13.6,
      "obs_placed": 7,
      "sen_placed": 3,
      "obs_denied": 52,
      "stacks": 2.5
    },
    "_old_id": 123787450,
    "_detail": 13
  },
  {
    "name": "9Class",
    "allowedPos": [
      4
    ],
    "ti": "TI13",
    "team": "Tundra Esports",
    "account_id": 164199202,
    "matchCount": 8222,
    "source": "api",
    "stats": {
      "gpm": 310,
      "xpm": 390,
      "kda": 2.3,
      "lane_eff": 43,
      "hero_pool": 124,
      "assists": 12.8,
      "obs_placed": 14,
      "sen_placed": 10,
      "obs_denied": 66,
      "stacks": 6
    },
    "_old_id": 149048128
  },
  {
    "name": "Whitemon",
    "allowedPos": [
      5
    ],
    "ti": "TI13",
    "team": "Tundra Esports",
    "account_id": 136829091,
    "matchCount": 13,
    "source": "api",
    "stats": {
      "gpm": 321,
      "xpm": 504.8,
      "kda": 3.6,
      "lane_eff": 1,
      "hero_pool": 7,
      "assists": 15.5,
      "obs_placed": 14.2,
      "sen_placed": 24.1,
      "obs_denied": 70,
      "stacks": 3.5
    },
    "_old_id": 149048129,
    "_detail": 13
  },
  {
    "name": "Ame",
    "allowedPos": [
      1
    ],
    "ti": "TI13",
    "team": "Xtreme Gaming",
    "account_id": 898754153,
    "matchCount": 1854,
    "source": "api",
    "stats": {
      "gpm": 580,
      "xpm": 640,
      "kda": 4.7,
      "lane_eff": 54,
      "hero_pool": 81,
      "assists": 8.5,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1
    },
    "_old_id": 135488229
  },
  {
    "name": "Xm",
    "allowedPos": [
      2
    ],
    "ti": "TI13",
    "team": "Xtreme Gaming",
    "account_id": 137129583,
    "matchCount": 14888,
    "source": "api",
    "stats": {
      "gpm": 560,
      "xpm": 640,
      "kda": 3.7,
      "lane_eff": 53,
      "hero_pool": 124,
      "assists": 11.4,
      "obs_placed": 3,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 2
    },
    "_old_id": 149048130
  },
  {
    "name": "Xxs",
    "allowedPos": [
      3
    ],
    "ti": "TI13",
    "team": "Xtreme Gaming",
    "account_id": 129958758,
    "matchCount": 11789,
    "source": "api",
    "stats": {
      "gpm": 420,
      "xpm": 490,
      "kda": 4,
      "lane_eff": 45,
      "hero_pool": 124,
      "assists": 12.1,
      "obs_placed": 7,
      "sen_placed": 3,
      "obs_denied": 52,
      "stacks": 7
    },
    "_old_id": 128742228
  },
  {
    "name": "XinQ",
    "allowedPos": [
      4
    ],
    "ti": "TI13",
    "team": "Xtreme Gaming",
    "account_id": 157475523,
    "matchCount": 12527,
    "source": "api",
    "stats": {
      "gpm": 310,
      "xpm": 390,
      "kda": 3.4,
      "lane_eff": 43,
      "hero_pool": 127,
      "assists": 12.2,
      "obs_placed": 14,
      "sen_placed": 10,
      "obs_denied": 66,
      "stacks": 6
    },
    "_old_id": 149048093
  },
  {
    "name": "Dy",
    "allowedPos": [
      5
    ],
    "ti": "TI13",
    "team": "Xtreme Gaming",
    "account_id": 143693439,
    "matchCount": 9773,
    "source": "api",
    "stats": {
      "gpm": 270,
      "xpm": 345,
      "kda": 3.5,
      "lane_eff": 42,
      "hero_pool": 125,
      "assists": 14.9,
      "obs_placed": 18,
      "sen_placed": 14,
      "obs_denied": 70,
      "stacks": 4
    },
    "_old_id": 149048101
  }
];

export const TI_POOLS = (() => {
  const pools = {};
  TI_PLAYERS.forEach(p => {
    const key = p.team + '__' + p.ti;
    if (!pools[key]) pools[key] = { team:p.team, ti:p.ti, players:[] };
    pools[key].players.push(p);
  });
  return pools;
})();

export const DATA_SUMMARY = { total: 325, api: 195, estimated: 130 };
