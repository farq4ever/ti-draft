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
    "account_id": 89625472,
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
    "account_id": 107644273,
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
    "account_id": 89326318,
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
    "account_id": 90892734,
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
    "account_id": 89399750,
    "matchCount": 0,
    "source": "api",
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
    },
    "_liqui": true
  },
  {
    "name": "MMY",
    "allowedPos": [
      3,
      4
    ],
    "ti": "TI1",
    "team": "EHOME",
    "account_id": 89407113,
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
    "account_id": 89423756,
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
    "account_id": 88553213,
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
    "account_id": 84772440,
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
    "account_id": 87394977,
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
    "account_id": 89330493,
    "matchCount": 0,
    "source": "fabricated",
    "stats": {
      "gpm": 530,
      "xpm": 580,
      "kda": 3,
      "lane_eff": 50,
      "hero_pool": 8,
      "assists": 7,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 40,
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
    "account_id": 82630959,
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
    "account_id": 89871557,
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
    "account_id": 91644707,
    "matchCount": 0,
    "source": "api",
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
    },
    "_liqui": true
  },
  {
    "name": "Net",
    "allowedPos": [
      5
    ],
    "ti": "TI1",
    "team": "MUFC",
    "account_id": 89249333,
    "matchCount": 0,
    "source": "api",
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
    "_liqui": true
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
    "account_id": 89251386,
    "matchCount": 0,
    "source": "api",
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
    "_liqui": true
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
    "account_id": 90045009,
    "matchCount": 0,
    "source": "api",
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
    },
    "_liqui": true
  },
  {
    "name": "Zhou",
    "allowedPos": [
      1
    ],
    "ti": "TI1",
    "team": "iG",
    "account_id": 90137663,
    "matchCount": 0,
    "source": "api",
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
    "_liqui": true
  },
  {
    "name": "SanSheng",
    "allowedPos": [
      4
    ],
    "ti": "TI1",
    "team": "iG",
    "account_id": 100883708,
    "matchCount": 0,
    "source": "api",
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
    "_liqui": true
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
    "account_id": 90045009,
    "matchCount": 0,
    "source": "api",
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
    },
    "_liqui": true
  },
  {
    "name": "Zhou",
    "allowedPos": [
      1
    ],
    "ti": "TI2",
    "team": "iG",
    "account_id": 90137663,
    "matchCount": 0,
    "source": "api",
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
    "_liqui": true
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
    "account_id": 82262664,
    "matchCount": 0,
    "source": "api",
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
    "_liqui": true
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
    "account_id": 89330493,
    "matchCount": 0,
    "source": "fabricated",
    "stats": {
      "gpm": 530,
      "xpm": 580,
      "kda": 3,
      "lane_eff": 50,
      "hero_pool": 8,
      "assists": 7,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 40,
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
    "account_id": 91644707,
    "matchCount": 0,
    "source": "api",
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
    },
    "_liqui": true
  },
  {
    "name": "Yamateh",
    "allowedPos": [
      2
    ],
    "ti": "TI2",
    "team": "Zenith",
    "account_id": 121052479,
    "matchCount": 0,
    "source": "api",
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
    },
    "_liqui": true
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
    "source": "fabricated",
    "stats": {
      "gpm": 280,
      "xpm": 355,
      "kda": 2.7,
      "lane_eff": 40,
      "hero_pool": 16,
      "assists": 18,
      "obs_placed": 11,
      "sen_placed": 7,
      "obs_denied": 55,
      "stacks": 4
    }
  },
  {
    "name": "Sylar",
    "allowedPos": [
      1
    ],
    "ti": "TI2",
    "team": "LGD",
    "account_id": 108382060,
    "matchCount": 0,
    "source": "api",
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
    "_liqui": true
  },
  {
    "name": "xiao8",
    "allowedPos": [
      3,
      4
    ],
    "ti": "TI2",
    "team": "LGD",
    "account_id": 98887913,
    "matchCount": 0,
    "source": "api",
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
    },
    "_liqui": true
  },
  {
    "name": "Yao",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI2",
    "team": "LGD",
    "account_id": 98878010,
    "matchCount": 0,
    "source": "api",
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
    "_liqui": true
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
    "account_id": 114239371,
    "matchCount": 0,
    "source": "api",
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
    "_liqui": true
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
    "account_id": 93616251,
    "matchCount": 0,
    "source": "api",
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
    },
    "_liqui": true
  },
  {
    "name": "XtiNcT",
    "allowedPos": [
      1
    ],
    "ti": "TI2",
    "team": "Orange",
    "account_id": 89330493,
    "matchCount": 0,
    "source": "fabricated",
    "stats": {
      "gpm": 530,
      "xpm": 580,
      "kda": 3,
      "lane_eff": 50,
      "hero_pool": 8,
      "assists": 7,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 40,
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
    "source": "fabricated",
    "stats": {
      "gpm": 280,
      "xpm": 355,
      "kda": 2.7,
      "lane_eff": 40,
      "hero_pool": 16,
      "assists": 18,
      "obs_placed": 11,
      "sen_placed": 7,
      "obs_denied": 55,
      "stacks": 4
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
    "account_id": 76482434,
    "matchCount": 0,
    "source": "api",
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
    "_liqui": true
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
    "account_id": 3916428,
    "matchCount": 0,
    "source": "api",
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
    "_liqui": true
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
    "account_id": 101495620,
    "matchCount": 0,
    "source": "api",
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
    "_liqui": true
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
    "account_id": 82262664,
    "matchCount": 0,
    "source": "api",
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
    "_liqui": true
  },
  {
    "name": "Funn1k",
    "allowedPos": [
      3,
      4
    ],
    "ti": "TI3",
    "team": "Na'Vi",
    "account_id": 86723143,
    "matchCount": 0,
    "source": "api",
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
    },
    "_liqui": true
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
    "account_id": 93616251,
    "matchCount": 0,
    "source": "api",
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
    },
    "_liqui": true
  },
  {
    "name": "XtiNcT",
    "allowedPos": [
      1
    ],
    "ti": "TI3",
    "team": "Orange",
    "account_id": 89330493,
    "matchCount": 0,
    "source": "fabricated",
    "stats": {
      "gpm": 530,
      "xpm": 580,
      "kda": 3,
      "lane_eff": 50,
      "hero_pool": 8,
      "assists": 7,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 40,
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
    "account_id": 91644707,
    "matchCount": 0,
    "source": "api",
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
    },
    "_liqui": true
  },
  {
    "name": "Net",
    "allowedPos": [
      5
    ],
    "ti": "TI3",
    "team": "Orange",
    "account_id": 89249333,
    "matchCount": 0,
    "source": "api",
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
    "_liqui": true
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
    "account_id": 89157606,
    "matchCount": 0,
    "source": "api",
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
    },
    "_liqui": true
  },
  {
    "name": "SanSheng",
    "allowedPos": [
      5
    ],
    "ti": "TI3",
    "team": "TongFu",
    "account_id": 100883708,
    "matchCount": 0,
    "source": "api",
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
    "_liqui": true
  },
  {
    "name": "Banana",
    "allowedPos": [
      4
    ],
    "ti": "TI3",
    "team": "TongFu",
    "account_id": 89217927,
    "matchCount": 0,
    "source": "api",
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
    "_liqui": true
  },
  {
    "name": "KingJ",
    "allowedPos": [
      3
    ],
    "ti": "TI3",
    "team": "TongFu",
    "account_id": 89230834,
    "matchCount": 0,
    "source": "api",
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
    },
    "_liqui": true
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
    "account_id": 90045009,
    "matchCount": 0,
    "source": "api",
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
    },
    "_liqui": true
  },
  {
    "name": "Zhou",
    "allowedPos": [
      1
    ],
    "ti": "TI3",
    "team": "iG",
    "account_id": 90137663,
    "matchCount": 0,
    "source": "api",
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
    "_liqui": true
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
    "matchCount": 34,
    "source": "api",
    "stats": {
      "gpm": 554.4,
      "xpm": 521.1,
      "kda": 4.8,
      "lane_eff": 54,
      "hero_pool": 15,
      "assists": 7.9,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1
    },
    "_old_id": 86700482,
    "_detail": 34
  },
  {
    "name": "Mu",
    "allowedPos": [
      2
    ],
    "ti": "TI4",
    "team": "Newbee",
    "account_id": 89157606,
    "matchCount": 34,
    "source": "api",
    "stats": {
      "gpm": 472.4,
      "xpm": 478.5,
      "kda": 4.8,
      "lane_eff": 53,
      "hero_pool": 12,
      "assists": 8.1,
      "obs_placed": 3,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 2
    },
    "_liqui": true,
    "_detail": 34
  },
  {
    "name": "SanSheng",
    "allowedPos": [
      5
    ],
    "ti": "TI4",
    "team": "Newbee",
    "account_id": 100883708,
    "matchCount": 34,
    "source": "api",
    "stats": {
      "gpm": 278.6,
      "xpm": 260.8,
      "kda": 3.4,
      "lane_eff": 42,
      "hero_pool": 10,
      "assists": 9.2,
      "obs_placed": 18,
      "sen_placed": 14,
      "obs_denied": 70,
      "stacks": 4
    },
    "_liqui": true,
    "_detail": 34
  },
  {
    "name": "xiao8",
    "allowedPos": [
      3,
      4
    ],
    "ti": "TI4",
    "team": "Newbee",
    "account_id": 98887913,
    "matchCount": 34,
    "source": "api",
    "stats": {
      "gpm": 425.5,
      "xpm": 420.1,
      "kda": 3.9,
      "lane_eff": 45,
      "hero_pool": 11,
      "assists": 10.4,
      "obs_placed": 7,
      "sen_placed": 3,
      "obs_denied": 52,
      "stacks": 7
    },
    "_liqui": true,
    "_detail": 34
  },
  {
    "name": "Banana",
    "allowedPos": [
      4
    ],
    "ti": "TI4",
    "team": "Newbee",
    "account_id": 89217927,
    "matchCount": 34,
    "source": "api",
    "stats": {
      "gpm": 295.7,
      "xpm": 281.3,
      "kda": 3.8,
      "lane_eff": 43,
      "hero_pool": 15,
      "assists": 9.1,
      "obs_placed": 14,
      "sen_placed": 10,
      "obs_denied": 66,
      "stacks": 6
    },
    "_liqui": true,
    "_detail": 34
  },
  {
    "name": "Sylar",
    "allowedPos": [
      1
    ],
    "ti": "TI4",
    "team": "Vici Gaming",
    "account_id": 108382060,
    "matchCount": 30,
    "source": "api",
    "stats": {
      "gpm": 533.9,
      "xpm": 496.9,
      "kda": 4.9,
      "lane_eff": 54,
      "hero_pool": 8,
      "assists": 8.1,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1
    },
    "_liqui": true,
    "_detail": 30
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
    "account_id": 91698091,
    "matchCount": 30,
    "source": "api",
    "stats": {
      "gpm": 386.2,
      "xpm": 361.6,
      "kda": 3.2,
      "lane_eff": 45,
      "hero_pool": 8,
      "assists": 10.7,
      "obs_placed": 7,
      "sen_placed": 3,
      "obs_denied": 52,
      "stacks": 7
    },
    "_liqui": true,
    "_detail": 30
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
    "matchCount": 29,
    "source": "api",
    "stats": {
      "gpm": 311.4,
      "xpm": 314.9,
      "kda": 2.5,
      "lane_eff": 54,
      "hero_pool": 14,
      "assists": 10.6,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1
    },
    "_got_details": true,
    "_detail": 34
  },
  {
    "name": "Arteezy",
    "allowedPos": [
      1
    ],
    "ti": "TI4",
    "team": "EG",
    "account_id": 86745912,
    "matchCount": 22,
    "source": "api",
    "stats": {
      "gpm": 505.5,
      "xpm": 521.4,
      "kda": 3,
      "lane_eff": 54,
      "hero_pool": 8,
      "assists": 7.1,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1,
      "n": 3105
    },
    "_detail": 22
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
    "account_id": 73562326,
    "matchCount": 22,
    "source": "api",
    "stats": {
      "gpm": 359.9,
      "xpm": 374.5,
      "kda": 3.3,
      "lane_eff": 43,
      "hero_pool": 12,
      "assists": 8.5,
      "obs_placed": 14,
      "sen_placed": 10,
      "obs_denied": 66,
      "stacks": 6
    },
    "_liqui": true,
    "_detail": 22
  },
  {
    "name": "ppd",
    "allowedPos": [
      5
    ],
    "ti": "TI4",
    "team": "EG",
    "account_id": 86727555,
    "matchCount": 22,
    "source": "api",
    "stats": {
      "gpm": 247.5,
      "xpm": 282.8,
      "kda": 2.6,
      "lane_eff": 42,
      "hero_pool": 10,
      "assists": 7.6,
      "obs_placed": 18,
      "sen_placed": 14,
      "obs_denied": 70,
      "stacks": 4
    },
    "_liqui": true,
    "_detail": 22
  },
  {
    "name": "BurNIng",
    "allowedPos": [
      1
    ],
    "ti": "TI4",
    "team": "DK",
    "account_id": 90892734,
    "matchCount": 22,
    "source": "api",
    "stats": {
      "gpm": 527.1,
      "xpm": 493.5,
      "kda": 3.5,
      "lane_eff": 54,
      "hero_pool": 10,
      "assists": 8,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1
    },
    "_detail": 24
  },
  {
    "name": "Mushi",
    "allowedPos": [
      2
    ],
    "ti": "TI4",
    "team": "DK",
    "account_id": 89871557,
    "matchCount": 22,
    "source": "api",
    "stats": {
      "gpm": 469.7,
      "xpm": 482.6,
      "kda": 3.9,
      "lane_eff": 53,
      "hero_pool": 14,
      "assists": 8.5,
      "obs_placed": 3,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 2,
      "n": 3944
    },
    "_got_details": true,
    "_detail": 24
  },
  {
    "name": "iceiceice",
    "allowedPos": [
      3,
      4
    ],
    "ti": "TI4",
    "team": "DK",
    "account_id": 84772440,
    "matchCount": 22,
    "source": "api",
    "stats": {
      "gpm": 417.2,
      "xpm": 434.1,
      "kda": 3,
      "lane_eff": 45,
      "hero_pool": 10,
      "assists": 11.2,
      "obs_placed": 7,
      "sen_placed": 3,
      "obs_denied": 52,
      "stacks": 7
    },
    "_detail": 24
  },
  {
    "name": "LaNm",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI4",
    "team": "DK",
    "account_id": 89423756,
    "matchCount": 22,
    "source": "api",
    "stats": {
      "gpm": 288,
      "xpm": 307,
      "kda": 3.6,
      "lane_eff": 43,
      "hero_pool": 14,
      "assists": 11.3,
      "obs_placed": 14,
      "sen_placed": 10,
      "obs_denied": 66,
      "stacks": 6
    },
    "_detail": 24
  },
  {
    "name": "MMY",
    "allowedPos": [
      5
    ],
    "ti": "TI4",
    "team": "DK",
    "account_id": 89407113,
    "matchCount": 22,
    "source": "api",
    "stats": {
      "gpm": 253,
      "xpm": 264.2,
      "kda": 3.1,
      "lane_eff": 42,
      "hero_pool": 8,
      "assists": 9.2,
      "obs_placed": 18,
      "sen_placed": 14,
      "obs_denied": 70,
      "stacks": 4
    },
    "_detail": 24
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
    "matchCount": 23,
    "source": "api",
    "stats": {
      "gpm": 530,
      "xpm": 497.7,
      "kda": 3.1,
      "lane_eff": 54,
      "hero_pool": 12,
      "assists": 6.7,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1
    },
    "_detail": 26
  },
  {
    "name": "FATA-",
    "allowedPos": [
      2,
      3
    ],
    "ti": "TI4",
    "team": "Cloud9",
    "account_id": 86799300,
    "matchCount": 29,
    "source": "api",
    "stats": {
      "gpm": 449,
      "xpm": 458.7,
      "kda": 3.4,
      "lane_eff": 53,
      "hero_pool": 18,
      "assists": 9.6,
      "obs_placed": 3,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 2
    },
    "_liqui": true,
    "_detail": 34
  },
  {
    "name": "Bone7",
    "allowedPos": [
      3
    ],
    "ti": "TI4",
    "team": "Cloud9",
    "account_id": 88719902,
    "matchCount": 23,
    "source": "api",
    "stats": {
      "gpm": 396.3,
      "xpm": 388.2,
      "kda": 3.1,
      "lane_eff": 45,
      "hero_pool": 10,
      "assists": 8.3,
      "obs_placed": 7,
      "sen_placed": 3,
      "obs_denied": 52,
      "stacks": 7
    },
    "_liqui": true,
    "_detail": 26
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
    "matchCount": 23,
    "source": "api",
    "stats": {
      "gpm": 324.3,
      "xpm": 306.8,
      "kda": 2.4,
      "lane_eff": 43,
      "hero_pool": 9,
      "assists": 7.2,
      "obs_placed": 14,
      "sen_placed": 10,
      "obs_denied": 66,
      "stacks": 6
    },
    "_old_id": 90892789,
    "_got_details": true,
    "_detail": 26
  },
  {
    "name": "pieliedie",
    "allowedPos": [
      5
    ],
    "ti": "TI4",
    "team": "Cloud9",
    "account_id": 6922000,
    "matchCount": 23,
    "source": "api",
    "stats": {
      "gpm": 262,
      "xpm": 272.1,
      "kda": 2.2,
      "lane_eff": 42,
      "hero_pool": 9,
      "assists": 8.4,
      "obs_placed": 18,
      "sen_placed": 14,
      "obs_denied": 70,
      "stacks": 4
    },
    "_detail": 26
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
    "matchCount": 18,
    "source": "api",
    "stats": {
      "gpm": 287,
      "xpm": 293.9,
      "kda": 2.4,
      "lane_eff": 54,
      "hero_pool": 12,
      "assists": 8.2,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1
    },
    "_got_details": true,
    "_detail": 18
  },
  {
    "name": "SumaiL",
    "allowedPos": [
      2
    ],
    "ti": "TI5",
    "team": "EG",
    "account_id": 111620041,
    "matchCount": 27,
    "source": "api",
    "stats": {
      "gpm": 572.7,
      "xpm": 605.5,
      "kda": 4.6,
      "lane_eff": 53,
      "hero_pool": 8,
      "assists": 8.2,
      "obs_placed": 3,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 2,
      "n": 9459
    },
    "_got_details": true,
    "_detail": 27
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
    "matchCount": 27,
    "source": "api",
    "stats": {
      "gpm": 322.3,
      "xpm": 314.5,
      "kda": 2.7,
      "lane_eff": 43,
      "hero_pool": 10,
      "assists": 6.9,
      "obs_placed": 14,
      "sen_placed": 10,
      "obs_denied": 66,
      "stacks": 6
    },
    "_old_id": 90892789,
    "_got_details": true,
    "_detail": 27
  },
  {
    "name": "ppd",
    "allowedPos": [
      5
    ],
    "ti": "TI5",
    "team": "EG",
    "account_id": 86727555,
    "matchCount": 27,
    "source": "api",
    "stats": {
      "gpm": 261.6,
      "xpm": 300.5,
      "kda": 2.6,
      "lane_eff": 42,
      "hero_pool": 10,
      "assists": 8.8,
      "obs_placed": 18,
      "sen_placed": 14,
      "obs_denied": 70,
      "stacks": 4
    },
    "_liqui": true,
    "_detail": 27
  },
  {
    "name": "Agressif",
    "allowedPos": [
      1
    ],
    "ti": "TI5",
    "team": "CDEC",
    "account_id": 113331514,
    "matchCount": 14,
    "source": "api",
    "stats": {
      "gpm": 445.7,
      "xpm": 440.5,
      "kda": 3.3,
      "lane_eff": 54,
      "hero_pool": 11,
      "assists": 9.7,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1
    },
    "_detail": 14
  },
  {
    "name": "Shiki",
    "allowedPos": [
      2
    ],
    "ti": "TI5",
    "team": "CDEC",
    "account_id": 101375717,
    "matchCount": 29,
    "source": "api",
    "stats": {
      "gpm": 485.9,
      "xpm": 508.8,
      "kda": 4.8,
      "lane_eff": 53,
      "hero_pool": 12,
      "assists": 9.7,
      "obs_placed": 3,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 2
    },
    "_liqui": true,
    "_detail": 45
  },
  {
    "name": "Xz",
    "allowedPos": [
      3,
      4
    ],
    "ti": "TI5",
    "team": "CDEC",
    "account_id": 131237305,
    "matchCount": 29,
    "source": "api",
    "stats": {
      "gpm": 351.9,
      "xpm": 378.8,
      "kda": 4.3,
      "lane_eff": 48,
      "hero_pool": 8,
      "assists": 12.2,
      "obs_placed": 7,
      "sen_placed": 3,
      "obs_denied": 52,
      "stacks": 7
    },
    "_liqui": true,
    "_detail": 45
  },
  {
    "name": "Q",
    "allowedPos": [
      5
    ],
    "ti": "TI5",
    "team": "CDEC",
    "account_id": 140153524,
    "matchCount": 29,
    "source": "api",
    "stats": {
      "gpm": 296.1,
      "xpm": 315,
      "kda": 3.1,
      "lane_eff": 42,
      "hero_pool": 11,
      "assists": 9.9,
      "obs_placed": 18,
      "sen_placed": 14,
      "obs_denied": 70,
      "stacks": 4
    },
    "_liqui": true,
    "_detail": 45
  },
  {
    "name": "Garder",
    "allowedPos": [
      4
    ],
    "ti": "TI5",
    "team": "CDEC",
    "account_id": 142750189,
    "matchCount": 29,
    "source": "api",
    "stats": {
      "gpm": 278.3,
      "xpm": 285.6,
      "kda": 2.9,
      "lane_eff": 43,
      "hero_pool": 8,
      "assists": 10.6,
      "obs_placed": 14,
      "sen_placed": 10,
      "obs_denied": 66,
      "stacks": 6
    },
    "_liqui": true,
    "_detail": 45
  },
  {
    "name": "BurNIng",
    "allowedPos": [
      1
    ],
    "ti": "TI5",
    "team": "EHOME",
    "account_id": 90892734,
    "matchCount": 18,
    "source": "api",
    "stats": {
      "gpm": 495.2,
      "xpm": 462.2,
      "kda": 3.1,
      "lane_eff": 54,
      "hero_pool": 9,
      "assists": 6,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1
    },
    "_detail": 18
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
    "account_id": 89423756,
    "matchCount": 21,
    "source": "api",
    "stats": {
      "gpm": 264.1,
      "xpm": 290.5,
      "kda": 2.6,
      "lane_eff": 43,
      "hero_pool": 10,
      "assists": 9.4,
      "obs_placed": 14,
      "sen_placed": 10,
      "obs_denied": 66,
      "stacks": 6
    },
    "_detail": 35
  },
  {
    "name": "rotk",
    "allowedPos": [
      3,
      4
    ],
    "ti": "TI5",
    "team": "EHOME",
    "account_id": 91698091,
    "matchCount": 21,
    "source": "api",
    "stats": {
      "gpm": 315.9,
      "xpm": 336.4,
      "kda": 2.4,
      "lane_eff": 48,
      "hero_pool": 8,
      "assists": 12.4,
      "obs_placed": 7,
      "sen_placed": 3,
      "obs_denied": 52,
      "stacks": 7
    },
    "_liqui": true,
    "_detail": 35
  },
  {
    "name": "DDC",
    "allowedPos": [
      5
    ],
    "ti": "TI5",
    "team": "EHOME",
    "account_id": 114239371,
    "matchCount": 21,
    "source": "api",
    "stats": {
      "gpm": 250,
      "xpm": 275.7,
      "kda": 2.4,
      "lane_eff": 42,
      "hero_pool": 7,
      "assists": 6.4,
      "obs_placed": 18,
      "sen_placed": 14,
      "obs_denied": 70,
      "stacks": 4
    },
    "_liqui": true,
    "_detail": 35
  },
  {
    "name": "Hao",
    "allowedPos": [
      1
    ],
    "ti": "TI5",
    "team": "Vici Gaming",
    "account_id": 88508515,
    "matchCount": 24,
    "source": "api",
    "stats": {
      "gpm": 573,
      "xpm": 557.2,
      "kda": 4.8,
      "lane_eff": 54,
      "hero_pool": 12,
      "assists": 9,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1
    },
    "_old_id": 86700482,
    "_detail": 24
  },
  {
    "name": "Super",
    "allowedPos": [
      2
    ],
    "ti": "TI5",
    "team": "Vici Gaming",
    "account_id": 86745912,
    "matchCount": 22,
    "source": "api",
    "stats": {
      "gpm": 616.7,
      "xpm": 611.9,
      "kda": 3.8,
      "lane_eff": 53,
      "hero_pool": 7,
      "assists": 7.6,
      "obs_placed": 3,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 2
    },
    "_old_id": 86700485,
    "_detail": 22
  },
  {
    "name": "iceiceice",
    "allowedPos": [
      3,
      4
    ],
    "ti": "TI5",
    "team": "Vici Gaming",
    "account_id": 84772440,
    "matchCount": 24,
    "source": "api",
    "stats": {
      "gpm": 336,
      "xpm": 362.8,
      "kda": 2.7,
      "lane_eff": 48,
      "hero_pool": 10,
      "assists": 11,
      "obs_placed": 7,
      "sen_placed": 3,
      "obs_denied": 52,
      "stacks": 7
    },
    "_detail": 24
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
    "account_id": 108382060,
    "matchCount": 26,
    "source": "api",
    "stats": {
      "gpm": 570,
      "xpm": 545.9,
      "kda": 5.3,
      "lane_eff": 54,
      "hero_pool": 7,
      "assists": 7.2,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1
    },
    "_liqui": true,
    "_detail": 26
  },
  {
    "name": "Maybe",
    "allowedPos": [
      2
    ],
    "ti": "TI5",
    "team": "LGD",
    "account_id": 106863163,
    "matchCount": 26,
    "source": "api",
    "stats": {
      "gpm": 577.9,
      "xpm": 569.7,
      "kda": 8.2,
      "lane_eff": 53,
      "hero_pool": 9,
      "assists": 10.1,
      "obs_placed": 3,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 2
    },
    "_liqui": true,
    "_detail": 26
  },
  {
    "name": "xiao8",
    "allowedPos": [
      3,
      4
    ],
    "ti": "TI5",
    "team": "LGD",
    "account_id": 98887913,
    "matchCount": 26,
    "source": "api",
    "stats": {
      "gpm": 303.5,
      "xpm": 291.1,
      "kda": 3.1,
      "lane_eff": 45,
      "hero_pool": 12,
      "assists": 10.2,
      "obs_placed": 7,
      "sen_placed": 3,
      "obs_denied": 52,
      "stacks": 7
    },
    "_liqui": true,
    "_detail": 26
  },
  {
    "name": "Yao",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI5",
    "team": "LGD",
    "account_id": 98878010,
    "matchCount": 26,
    "source": "api",
    "stats": {
      "gpm": 301.7,
      "xpm": 319.5,
      "kda": 3.8,
      "lane_eff": 43,
      "hero_pool": 7,
      "assists": 12.4,
      "obs_placed": 14,
      "sen_placed": 10,
      "obs_denied": 66,
      "stacks": 6
    },
    "_liqui": true,
    "_detail": 26
  },
  {
    "name": "MMY",
    "allowedPos": [
      5
    ],
    "ti": "TI5",
    "team": "LGD",
    "account_id": 89407113,
    "matchCount": 26,
    "source": "api",
    "stats": {
      "gpm": 274.6,
      "xpm": 287.8,
      "kda": 3.3,
      "lane_eff": 42,
      "hero_pool": 10,
      "assists": 8.8,
      "obs_placed": 18,
      "sen_placed": 14,
      "obs_denied": 70,
      "stacks": 4
    },
    "_detail": 26
  },
  {
    "name": "shadow",
    "allowedPos": [
      1
    ],
    "ti": "TI6",
    "team": "Wings Gaming",
    "account_id": 129585121,
    "matchCount": 25,
    "source": "api",
    "stats": {
      "gpm": 539.4,
      "xpm": 502.2,
      "kda": 5.4,
      "lane_eff": 54,
      "hero_pool": 14,
      "assists": 9,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1.3
    },
    "_old_id": 121712688,
    "_detail": 35
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
    "account_id": 118134220,
    "matchCount": 25,
    "source": "api",
    "stats": {
      "gpm": 385.8,
      "xpm": 413.5,
      "kda": 4.4,
      "lane_eff": 48,
      "hero_pool": 16,
      "assists": 13.1,
      "obs_placed": 1.3,
      "sen_placed": 1.5,
      "obs_denied": 52,
      "stacks": 2.6
    },
    "_liqui": true,
    "_detail": 35
  },
  {
    "name": "iceice",
    "allowedPos": [
      4
    ],
    "ti": "TI6",
    "team": "Wings Gaming",
    "account_id": 102644565,
    "matchCount": 25,
    "source": "api",
    "stats": {
      "gpm": 317.5,
      "xpm": 321.5,
      "kda": 3.2,
      "lane_eff": 43,
      "hero_pool": 16,
      "assists": 13.4,
      "obs_placed": 7.2,
      "sen_placed": 4,
      "obs_denied": 66,
      "stacks": 2.9
    },
    "_old_id": 86740109,
    "_detail": 35
  },
  {
    "name": "y`",
    "allowedPos": [
      5
    ],
    "ti": "TI6",
    "team": "Wings Gaming",
    "account_id": 105248644,
    "matchCount": 19,
    "source": "api",
    "stats": {
      "gpm": 568.6,
      "xpm": 528.4,
      "kda": 4.8,
      "lane_eff": 42,
      "hero_pool": 16,
      "assists": 9.7,
      "obs_placed": 18,
      "sen_placed": 14,
      "obs_denied": 70,
      "stacks": 1,
      "n": 4063
    },
    "_detail": 19
  },
  {
    "name": "Resolut1on",
    "allowedPos": [
      1
    ],
    "ti": "TI6",
    "team": "Digital Chaos",
    "account_id": 86725175,
    "matchCount": 40,
    "source": "api",
    "stats": {
      "gpm": 587,
      "xpm": 536.7,
      "kda": 5.8,
      "lane_eff": 54,
      "hero_pool": 16,
      "assists": 9.4,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1.6
    },
    "_detail": 47
  },
  {
    "name": "w33",
    "allowedPos": [
      2
    ],
    "ti": "TI6",
    "team": "Digital Chaos",
    "account_id": 86700461,
    "matchCount": 40,
    "source": "api",
    "stats": {
      "gpm": 566.1,
      "xpm": 530.8,
      "kda": 4.8,
      "lane_eff": 53,
      "hero_pool": 15,
      "assists": 10.6,
      "obs_placed": 1,
      "sen_placed": 1.2,
      "obs_denied": 44,
      "stacks": 2.7
    },
    "_detail": 47
  },
  {
    "name": "Moo",
    "allowedPos": [
      3,
      4
    ],
    "ti": "TI6",
    "team": "Digital Chaos",
    "account_id": 84429681,
    "matchCount": 40,
    "source": "api",
    "stats": {
      "gpm": 420.5,
      "xpm": 429.9,
      "kda": 3.6,
      "lane_eff": 48,
      "hero_pool": 11,
      "assists": 11,
      "obs_placed": 1,
      "sen_placed": 1,
      "obs_denied": 52,
      "stacks": 1.3
    },
    "_liqui": true,
    "_detail": 47
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
    "account_id": 87382579,
    "matchCount": 40,
    "source": "api",
    "stats": {
      "gpm": 305.5,
      "xpm": 302.1,
      "kda": 2.8,
      "lane_eff": 42,
      "hero_pool": 16,
      "assists": 12.6,
      "obs_placed": 3.6,
      "sen_placed": 5.3,
      "obs_denied": 70,
      "stacks": 1.6
    },
    "_liqui": true,
    "_detail": 47
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
    "matchCount": 40,
    "source": "api",
    "stats": {
      "gpm": 305.5,
      "xpm": 302.1,
      "kda": 2.8,
      "lane_eff": 54,
      "hero_pool": 16,
      "assists": 12.6,
      "obs_placed": 3.6,
      "sen_placed": 5.3,
      "obs_denied": 42,
      "stacks": 1.6
    },
    "_detail": 47
  },
  {
    "name": "SumaiL",
    "allowedPos": [
      2
    ],
    "ti": "TI6",
    "team": "EG",
    "account_id": 111620041,
    "matchCount": 23,
    "source": "api",
    "stats": {
      "gpm": 589,
      "xpm": 524.5,
      "kda": 5,
      "lane_eff": 53,
      "hero_pool": 15,
      "assists": 10.3,
      "obs_placed": 3,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 1.8,
      "n": 9459
    },
    "_detail": 30
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
    "account_id": 73562326,
    "matchCount": 23,
    "source": "api",
    "stats": {
      "gpm": 304.8,
      "xpm": 338.2,
      "kda": 3.7,
      "lane_eff": 43,
      "hero_pool": 13,
      "assists": 15.3,
      "obs_placed": 3.4,
      "sen_placed": 5.5,
      "obs_denied": 66,
      "stacks": 1.5
    },
    "_liqui": true,
    "_detail": 30
  },
  {
    "name": "ppd",
    "allowedPos": [
      5
    ],
    "ti": "TI6",
    "team": "EG",
    "account_id": 86727555,
    "matchCount": 23,
    "source": "api",
    "stats": {
      "gpm": 276.1,
      "xpm": 296,
      "kda": 2.9,
      "lane_eff": 42,
      "hero_pool": 10,
      "assists": 14.7,
      "obs_placed": 13,
      "sen_placed": 11.2,
      "obs_denied": 70,
      "stacks": 2.1
    },
    "_liqui": true,
    "_detail": 30
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
    "matchCount": 25,
    "source": "api",
    "stats": {
      "gpm": 579.2,
      "xpm": 499.7,
      "kda": 3.6,
      "lane_eff": 54,
      "hero_pool": 14,
      "assists": 9,
      "obs_placed": 1,
      "sen_placed": 1.5,
      "obs_denied": 42,
      "stacks": 2.1,
      "n": 3944
    },
    "_detail": 42
  },
  {
    "name": "MidOne",
    "allowedPos": [
      2
    ],
    "ti": "TI6",
    "team": "Fnatic",
    "account_id": 116585378,
    "matchCount": 25,
    "source": "api",
    "stats": {
      "gpm": 511.3,
      "xpm": 504,
      "kda": 3.6,
      "lane_eff": 53,
      "hero_pool": 11,
      "assists": 8.2,
      "obs_placed": 1,
      "sen_placed": 4,
      "obs_denied": 44,
      "stacks": 1.9
    },
    "_old_id": 149462,
    "_detail": 42
  },
  {
    "name": "Ohaiyo",
    "allowedPos": [
      3
    ],
    "ti": "TI6",
    "team": "Fnatic",
    "account_id": 93616251,
    "matchCount": 25,
    "source": "api",
    "stats": {
      "gpm": 365.7,
      "xpm": 396.1,
      "kda": 3.1,
      "lane_eff": 48,
      "hero_pool": 11,
      "assists": 11.5,
      "obs_placed": 1.3,
      "sen_placed": 2,
      "obs_denied": 52,
      "stacks": 1.8
    },
    "_liqui": true,
    "_detail": 42
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
    "matchCount": 25,
    "source": "api",
    "stats": {
      "gpm": 316.2,
      "xpm": 315,
      "kda": 2.9,
      "lane_eff": 43,
      "hero_pool": 14,
      "assists": 11.3,
      "obs_placed": 4.6,
      "sen_placed": 5.9,
      "obs_denied": 66,
      "stacks": 2.6
    },
    "_old_id": 100883709,
    "_detail": 42
  },
  {
    "name": "343",
    "allowedPos": [
      5
    ],
    "ti": "TI6",
    "team": "Fnatic",
    "account_id": 111034589,
    "matchCount": 25,
    "source": "api",
    "stats": {
      "gpm": 249.2,
      "xpm": 251.8,
      "kda": 2.4,
      "lane_eff": 42,
      "hero_pool": 13,
      "assists": 11.3,
      "obs_placed": 11.6,
      "sen_placed": 17.2,
      "obs_denied": 70,
      "stacks": 1.9
    },
    "_liqui": true,
    "_detail": 42
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
    "account_id": 84772440,
    "matchCount": 30,
    "source": "api",
    "stats": {
      "gpm": 620.5,
      "xpm": 529.5,
      "kda": 4.5,
      "lane_eff": 53,
      "hero_pool": 11,
      "assists": 9.8,
      "obs_placed": 3,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 3.2
    },
    "_detail": 45
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
    "matchCount": 30,
    "source": "api",
    "stats": {
      "gpm": 402.9,
      "xpm": 448.1,
      "kda": 4.1,
      "lane_eff": 48,
      "hero_pool": 11,
      "assists": 12.4,
      "obs_placed": 2,
      "sen_placed": 2.1,
      "obs_denied": 52,
      "stacks": 3.3
    },
    "_detail": 45
  },
  {
    "name": "LaNm",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI6",
    "team": "EHOME",
    "account_id": 89423756,
    "matchCount": 30,
    "source": "api",
    "stats": {
      "gpm": 317.9,
      "xpm": 365.3,
      "kda": 3.6,
      "lane_eff": 43,
      "hero_pool": 7,
      "assists": 14.3,
      "obs_placed": 3.5,
      "sen_placed": 3.1,
      "obs_denied": 66,
      "stacks": 2.1
    },
    "_detail": 45
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
    "matchCount": 36,
    "source": "api",
    "stats": {
      "gpm": 585.5,
      "xpm": 589,
      "kda": 4.1,
      "lane_eff": 54,
      "hero_pool": 22,
      "assists": 8.3,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1.9,
      "n": 4063
    },
    "_detail": 36
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
    "matchCount": 35,
    "source": "api",
    "stats": {
      "gpm": 445.8,
      "xpm": 475.9,
      "kda": 3.3,
      "lane_eff": 48,
      "hero_pool": 11,
      "assists": 12.8,
      "obs_placed": 1.1,
      "sen_placed": 1.7,
      "obs_denied": 52,
      "stacks": 1.8
    },
    "_old_id": 101867456,
    "_detail": 35
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
    "matchCount": 35,
    "source": "api",
    "stats": {
      "gpm": 315.1,
      "xpm": 356.8,
      "kda": 2.7,
      "lane_eff": 43,
      "hero_pool": 8,
      "assists": 13.5,
      "obs_placed": 1.7,
      "sen_placed": 1.9,
      "obs_denied": 66,
      "stacks": 3.4
    },
    "_old_id": 123787592,
    "_detail": 35
  },
  {
    "name": "KuroKy",
    "allowedPos": [
      5
    ],
    "ti": "TI7",
    "team": "Team Liquid",
    "account_id": 82262664,
    "matchCount": 36,
    "source": "api",
    "stats": {
      "gpm": 258.3,
      "xpm": 316.9,
      "kda": 2.3,
      "lane_eff": 42,
      "hero_pool": 15,
      "assists": 12.8,
      "obs_placed": 14,
      "sen_placed": 9.8,
      "obs_denied": 70,
      "stacks": 1.6
    },
    "_liqui": true,
    "_detail": 36
  },
  {
    "name": "Moogy",
    "allowedPos": [
      1
    ],
    "ti": "TI7",
    "team": "Newbee",
    "account_id": 117281554,
    "matchCount": 27,
    "source": "api",
    "stats": {
      "gpm": 520,
      "xpm": 550.6,
      "kda": 5.2,
      "lane_eff": 54,
      "hero_pool": 12,
      "assists": 8.9,
      "obs_placed": 1,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1.3
    },
    "_liqui": true,
    "_detail": 27
  },
  {
    "name": "Sccc",
    "allowedPos": [
      2
    ],
    "ti": "TI7",
    "team": "Newbee",
    "account_id": 149486894,
    "matchCount": 27,
    "source": "api",
    "stats": {
      "gpm": 570.8,
      "xpm": 606.4,
      "kda": 5.2,
      "lane_eff": 53,
      "hero_pool": 20,
      "assists": 9.6,
      "obs_placed": 1.1,
      "sen_placed": 2,
      "obs_denied": 44,
      "stacks": 2.4
    },
    "_liqui": true,
    "_detail": 27
  },
  {
    "name": "Kpii",
    "allowedPos": [
      3
    ],
    "ti": "TI7",
    "team": "Newbee",
    "account_id": 87012746,
    "matchCount": 27,
    "source": "api",
    "stats": {
      "gpm": 388.7,
      "xpm": 468.2,
      "kda": 3.3,
      "lane_eff": 48,
      "hero_pool": 13,
      "assists": 10.6,
      "obs_placed": 7,
      "sen_placed": 1,
      "obs_denied": 52,
      "stacks": 2.6
    },
    "_liqui": true,
    "_detail": 27
  },
  {
    "name": "Kaka",
    "allowedPos": [
      4
    ],
    "ti": "TI7",
    "team": "Newbee",
    "account_id": 139876032,
    "matchCount": 28,
    "source": "api",
    "stats": {
      "gpm": 284.4,
      "xpm": 366.4,
      "kda": 2.3,
      "lane_eff": 43,
      "hero_pool": 9,
      "assists": 12.4,
      "obs_placed": 11.4,
      "sen_placed": 3.6,
      "obs_denied": 66,
      "stacks": 1.9
    },
    "_old_id": 103735652,
    "_detail": 28
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
    "account_id": 86745912,
    "matchCount": 20,
    "source": "api",
    "stats": {
      "gpm": 511.3,
      "xpm": 541.5,
      "kda": 5.8,
      "lane_eff": 53,
      "hero_pool": 10,
      "assists": 10.4,
      "obs_placed": 1,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 2.4
    },
    "_old_id": 86700485,
    "_detail": 20
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
    "source": "fabricated",
    "stats": {
      "gpm": 285,
      "xpm": 360,
      "kda": 2.8,
      "lane_eff": 41,
      "hero_pool": 17,
      "assists": 19,
      "obs_placed": 12,
      "sen_placed": 8,
      "obs_denied": 57,
      "stacks": 5
    }
  },
  {
    "name": "DDC",
    "allowedPos": [
      5
    ],
    "ti": "TI7",
    "team": "LFY",
    "account_id": 114239371,
    "matchCount": 26,
    "source": "api",
    "stats": {
      "gpm": 256,
      "xpm": 326.7,
      "kda": 4.4,
      "lane_eff": 42,
      "hero_pool": 8,
      "assists": 13.9,
      "obs_placed": 9.8,
      "sen_placed": 10,
      "obs_denied": 70,
      "stacks": 2.2
    },
    "_liqui": true,
    "_detail": 40
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
    "account_id": 106863163,
    "matchCount": 30,
    "source": "api",
    "stats": {
      "gpm": 537.1,
      "xpm": 586,
      "kda": 5,
      "lane_eff": 53,
      "hero_pool": 12,
      "assists": 9,
      "obs_placed": 1,
      "sen_placed": 1.7,
      "obs_denied": 44,
      "stacks": 1.6
    },
    "_liqui": true,
    "_detail": 41
  },
  {
    "name": "old eLeVeN",
    "allowedPos": [
      3
    ],
    "ti": "TI7",
    "team": "LGD",
    "account_id": 134276083,
    "matchCount": 30,
    "source": "api",
    "stats": {
      "gpm": 397.2,
      "xpm": 485.9,
      "kda": 2.7,
      "lane_eff": 48,
      "hero_pool": 8,
      "assists": 10.3,
      "obs_placed": 1.4,
      "sen_placed": 1.8,
      "obs_denied": 52,
      "stacks": 1.8
    },
    "_detail": 41
  },
  {
    "name": "Victoria",
    "allowedPos": [
      4
    ],
    "ti": "TI7",
    "team": "LGD",
    "account_id": 107081378,
    "matchCount": 30,
    "source": "api",
    "stats": {
      "gpm": 254.6,
      "xpm": 333.7,
      "kda": 3.9,
      "lane_eff": 43,
      "hero_pool": 8,
      "assists": 13.7,
      "obs_placed": 5.7,
      "sen_placed": 5.4,
      "obs_denied": 66,
      "stacks": 1.6
    },
    "_liqui": true,
    "_detail": 41
  },
  {
    "name": "Yao",
    "allowedPos": [
      5
    ],
    "ti": "TI7",
    "team": "LGD",
    "account_id": 98878010,
    "matchCount": 30,
    "source": "api",
    "stats": {
      "gpm": 249.1,
      "xpm": 291.6,
      "kda": 3,
      "lane_eff": 42,
      "hero_pool": 10,
      "assists": 12.9,
      "obs_placed": 7.6,
      "sen_placed": 9.8,
      "obs_denied": 70,
      "stacks": 2.9
    },
    "_liqui": true,
    "_detail": 41
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
    "account_id": 173880329,
    "matchCount": 17,
    "source": "api",
    "stats": {
      "gpm": 520.5,
      "xpm": 564.6,
      "kda": 3.8,
      "lane_eff": 53,
      "hero_pool": 12,
      "assists": 8.8,
      "obs_placed": 1,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 2
    },
    "_liqui": true,
    "_detail": 26
  },
  {
    "name": "InJuly",
    "allowedPos": [
      3
    ],
    "ti": "TI7",
    "team": "iG.Vitality",
    "account_id": 111291593,
    "matchCount": 17,
    "source": "api",
    "stats": {
      "gpm": 368.4,
      "xpm": 416.7,
      "kda": 3.6,
      "lane_eff": 48,
      "hero_pool": 7,
      "assists": 14.7,
      "obs_placed": 2.3,
      "sen_placed": 1.2,
      "obs_denied": 52,
      "stacks": 2.1
    },
    "_liqui": true,
    "_detail": 26
  },
  {
    "name": "dogf1ghts",
    "allowedPos": [
      4
    ],
    "ti": "TI7",
    "team": "iG.Vitality",
    "account_id": 103940975,
    "matchCount": 17,
    "source": "api",
    "stats": {
      "gpm": 261.6,
      "xpm": 326.6,
      "kda": 2.8,
      "lane_eff": 43,
      "hero_pool": 6,
      "assists": 15,
      "obs_placed": 6.2,
      "sen_placed": 3.3,
      "obs_denied": 66,
      "stacks": 2.1
    },
    "_liqui": true,
    "_detail": 26
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
    "matchCount": 30,
    "source": "api",
    "stats": {
      "gpm": 568.5,
      "xpm": 563.4,
      "kda": 3.3,
      "lane_eff": 54,
      "hero_pool": 13,
      "assists": 11.7,
      "obs_placed": 1.5,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1.3,
      "n": 9871
    },
    "_detail": 45,
    "_ti8real": true
  },
  {
    "name": "Topson",
    "allowedPos": [
      2
    ],
    "ti": "TI8",
    "team": "OG",
    "account_id": 94054712,
    "matchCount": 30,
    "source": "api",
    "stats": {
      "gpm": 517.4,
      "xpm": 555.7,
      "kda": 2.7,
      "lane_eff": 53,
      "hero_pool": 9,
      "assists": 11,
      "obs_placed": 1,
      "sen_placed": 1.1,
      "obs_denied": 44,
      "stacks": 1.6,
      "n": 16921
    },
    "_detail": 45,
    "_ti8real": true
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
    "matchCount": 27,
    "source": "api",
    "stats": {
      "gpm": 304.1,
      "xpm": 439.7,
      "kda": 3.5,
      "lane_eff": 48,
      "hero_pool": 13,
      "assists": 19.1,
      "obs_placed": 3.3,
      "sen_placed": 4.1,
      "obs_denied": 52,
      "stacks": 1.9,
      "n": 22725
    },
    "_detail": 38,
    "_ti8real": true
  },
  {
    "name": "JerAx",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI8",
    "team": "OG",
    "account_id": 26771994,
    "matchCount": 30,
    "source": "api",
    "stats": {
      "gpm": 327.6,
      "xpm": 437.3,
      "kda": 2.9,
      "lane_eff": 43,
      "hero_pool": 12,
      "assists": 14.6,
      "obs_placed": 3.9,
      "sen_placed": 7,
      "obs_denied": 66,
      "stacks": 2.3
    },
    "_liqui": true,
    "_detail": 45,
    "_ti8real": true
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
    "matchCount": 26,
    "source": "api",
    "stats": {
      "gpm": 289.7,
      "xpm": 340.4,
      "kda": 2.6,
      "lane_eff": 43,
      "hero_pool": 12,
      "assists": 16.7,
      "obs_placed": 13.5,
      "sen_placed": 16.6,
      "obs_denied": 66,
      "stacks": 2.1,
      "n": 3417
    },
    "_detail": 26,
    "_ti8real": true
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
    "account_id": 106863163,
    "matchCount": 30,
    "source": "api",
    "stats": {
      "gpm": 605,
      "xpm": 639.3,
      "kda": 4.7,
      "lane_eff": 53,
      "hero_pool": 13,
      "assists": 10.9,
      "obs_placed": 1.2,
      "sen_placed": 2,
      "obs_denied": 44,
      "stacks": 2.3
    },
    "_liqui": true,
    "_detail": 30,
    "_ti8real": true
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
    "matchCount": 30,
    "source": "api",
    "stats": {
      "gpm": 285.3,
      "xpm": 357.5,
      "kda": 2.5,
      "lane_eff": 42,
      "hero_pool": 13,
      "assists": 14.7,
      "obs_placed": 15.5,
      "sen_placed": 22.8,
      "obs_denied": 70,
      "stacks": 1.4
    },
    "_old_id": 149048091,
    "_detail": 30,
    "_ti8real": true
  },
  {
    "name": "Arteezy",
    "allowedPos": [
      1
    ],
    "ti": "TI8",
    "team": "EG",
    "account_id": 86745912,
    "matchCount": 27,
    "source": "api",
    "stats": {
      "gpm": 541.6,
      "xpm": 584.7,
      "kda": 4.7,
      "lane_eff": 54,
      "hero_pool": 13,
      "assists": 12.5,
      "obs_placed": 5.5,
      "sen_placed": 9,
      "obs_denied": 42,
      "stacks": 2.2,
      "n": 3105
    },
    "_detail": 38,
    "_ti8real": true
  },
  {
    "name": "SumaiL",
    "allowedPos": [
      2
    ],
    "ti": "TI8",
    "team": "EG",
    "account_id": 184445673,
    "matchCount": 8,
    "source": "api",
    "stats": {
      "gpm": 391.3,
      "xpm": 482,
      "kda": 2,
      "lane_eff": 53,
      "hero_pool": 5,
      "assists": 11.9,
      "obs_placed": 1,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 1.7,
      "n": 9459
    },
    "_detail": 46,
    "_ti8real": true
  },
  {
    "name": "s4",
    "allowedPos": [
      3
    ],
    "ti": "TI8",
    "team": "EG",
    "account_id": 41231571,
    "matchCount": 27,
    "source": "api",
    "stats": {
      "gpm": 468.5,
      "xpm": 538.3,
      "kda": 4.7,
      "lane_eff": 48,
      "hero_pool": 11,
      "assists": 14.7,
      "obs_placed": 1,
      "sen_placed": 1,
      "obs_denied": 52,
      "stacks": 1.9,
      "n": 9997
    },
    "_detail": 38,
    "_ti8real": true
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
    "matchCount": 27,
    "source": "api",
    "stats": {
      "gpm": 304.1,
      "xpm": 439.7,
      "kda": 3.5,
      "lane_eff": 43,
      "hero_pool": 13,
      "assists": 19.1,
      "obs_placed": 3.3,
      "sen_placed": 4.1,
      "obs_denied": 66,
      "stacks": 1.9
    },
    "_old_id": 123787592,
    "_detail": 7,
    "_ti8real": true
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
    "matchCount": 30,
    "source": "api",
    "stats": {
      "gpm": 517.4,
      "xpm": 555.7,
      "kda": 2.7,
      "lane_eff": 43,
      "hero_pool": 9,
      "assists": 11,
      "obs_placed": 1,
      "sen_placed": 1.1,
      "obs_denied": 66,
      "stacks": 1.6,
      "n": 16921
    },
    "_ti8real": true
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
    "matchCount": 24,
    "source": "api",
    "stats": {
      "gpm": 625.9,
      "xpm": 630,
      "kda": 4,
      "lane_eff": 54,
      "hero_pool": 17,
      "assists": 9.5,
      "obs_placed": 1,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1.8,
      "n": 4063
    },
    "_detail": 24,
    "_ti8real": true
  },
  {
    "name": "MATUMBAMAN",
    "allowedPos": [
      1
    ],
    "ti": "TI8",
    "team": "Team Liquid",
    "account_id": 94054712,
    "matchCount": 30,
    "source": "api",
    "stats": {
      "gpm": 517.4,
      "xpm": 555.7,
      "kda": 2.7,
      "lane_eff": 54,
      "hero_pool": 9,
      "assists": 11,
      "obs_placed": 1,
      "sen_placed": 1.1,
      "obs_denied": 42,
      "stacks": 1.6,
      "n": 16921
    },
    "_ti8real": true
  },
  {
    "name": "MinD_ContRoL",
    "allowedPos": [
      3
    ],
    "ti": "TI8",
    "team": "Team Liquid",
    "account_id": 34505203,
    "matchCount": 24,
    "source": "api",
    "stats": {
      "gpm": 465.3,
      "xpm": 522.4,
      "kda": 4.3,
      "lane_eff": 48,
      "hero_pool": 13,
      "assists": 12.1,
      "obs_placed": 1,
      "sen_placed": 1.5,
      "obs_denied": 52,
      "stacks": 2
    },
    "_old_id": 101867456,
    "_detail": 24,
    "_ti8real": true
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
    "matchCount": 30,
    "source": "api",
    "stats": {
      "gpm": 446.4,
      "xpm": 497.9,
      "kda": 3.5,
      "lane_eff": 43,
      "hero_pool": 18,
      "assists": 13.6,
      "obs_placed": 2,
      "sen_placed": 1.7,
      "obs_denied": 66,
      "stacks": 1.5
    },
    "_old_id": 123787592,
    "_detail": 69,
    "_ti8real": true
  },
  {
    "name": "KuroKy",
    "allowedPos": [
      5
    ],
    "ti": "TI8",
    "team": "Team Liquid",
    "account_id": 82262664,
    "matchCount": 24,
    "source": "api",
    "stats": {
      "gpm": 304.2,
      "xpm": 383.9,
      "kda": 2.7,
      "lane_eff": 42,
      "hero_pool": 14,
      "assists": 16.2,
      "obs_placed": 15.3,
      "sen_placed": 15.2,
      "obs_denied": 70,
      "stacks": 1.3
    },
    "_liqui": true,
    "_detail": 24,
    "_ti8real": true
  },
  {
    "name": "RAMZES666",
    "allowedPos": [
      1
    ],
    "ti": "TI8",
    "team": "Virtus.pro",
    "account_id": 132851371,
    "matchCount": 25,
    "source": "api",
    "stats": {
      "gpm": 558.4,
      "xpm": 605,
      "kda": 5.1,
      "lane_eff": 54,
      "hero_pool": 13,
      "assists": 11.3,
      "obs_placed": 1,
      "sen_placed": 1.3,
      "obs_denied": 42,
      "stacks": 2
    },
    "_old_id": 123787450,
    "_detail": 25,
    "_ti8real": true
  },
  {
    "name": "No[o]ne",
    "allowedPos": [
      2
    ],
    "ti": "TI8",
    "team": "Virtus.pro",
    "account_id": 106573901,
    "matchCount": 25,
    "source": "api",
    "stats": {
      "gpm": 559.6,
      "xpm": 598.6,
      "kda": 5.7,
      "lane_eff": 53,
      "hero_pool": 15,
      "assists": 11,
      "obs_placed": 1.2,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 1.7
    },
    "_old_id": 107854158,
    "_detail": 25,
    "_ti8real": true
  },
  {
    "name": "9pasha",
    "allowedPos": [
      3
    ],
    "ti": "TI8",
    "team": "Virtus.pro",
    "account_id": 77490514,
    "matchCount": 7,
    "source": "api",
    "stats": {
      "gpm": 415.6,
      "xpm": 466.4,
      "kda": 2.6,
      "lane_eff": 48,
      "hero_pool": 5,
      "assists": 11.3,
      "obs_placed": 1,
      "sen_placed": 2,
      "obs_denied": 52,
      "stacks": 3,
      "n": 6084
    },
    "_detail": 7,
    "_ti8real": true
  },
  {
    "name": "RodjER",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI8",
    "team": "Virtus.pro",
    "account_id": 159020918,
    "matchCount": 25,
    "source": "api",
    "stats": {
      "gpm": 283.7,
      "xpm": 406.7,
      "kda": 3.3,
      "lane_eff": 43,
      "hero_pool": 11,
      "assists": 15.1,
      "obs_placed": 4.1,
      "sen_placed": 7.4,
      "obs_denied": 66,
      "stacks": 2.1
    },
    "_liqui": true,
    "_detail": 25,
    "_ti8real": true
  },
  {
    "name": "Solo",
    "allowedPos": [
      5
    ],
    "ti": "TI8",
    "team": "Virtus.pro",
    "account_id": 134556694,
    "matchCount": 25,
    "source": "api",
    "stats": {
      "gpm": 276.4,
      "xpm": 351.6,
      "kda": 2.8,
      "lane_eff": 42,
      "hero_pool": 8,
      "assists": 18.6,
      "obs_placed": 13.3,
      "sen_placed": 15.5,
      "obs_denied": 70,
      "stacks": 2
    },
    "_old_id": 96119269,
    "_detail": 25,
    "_ti8real": true
  },
  {
    "name": "Ana",
    "allowedPos": [
      1
    ],
    "ti": "TI9",
    "team": "OG",
    "account_id": 311360822,
    "matchCount": 28,
    "source": "api",
    "stats": {
      "gpm": 672.5,
      "xpm": 705.3,
      "kda": 6.8,
      "lane_eff": 54,
      "hero_pool": 10,
      "assists": 11.9,
      "obs_placed": 1,
      "sen_placed": 1.5,
      "obs_denied": 42,
      "stacks": 2.2,
      "n": 9871
    },
    "_detail": 28
  },
  {
    "name": "Topson",
    "allowedPos": [
      2
    ],
    "ti": "TI9",
    "team": "OG",
    "account_id": 94054712,
    "matchCount": 28,
    "source": "api",
    "stats": {
      "gpm": 538.9,
      "xpm": 649.3,
      "kda": 5.6,
      "lane_eff": 53,
      "hero_pool": 13,
      "assists": 12.9,
      "obs_placed": 1.4,
      "sen_placed": 1.3,
      "obs_denied": 44,
      "stacks": 2,
      "n": 16921
    },
    "_detail": 28
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
    "matchCount": 24,
    "source": "api",
    "stats": {
      "gpm": 299.6,
      "xpm": 422.3,
      "kda": 3.5,
      "lane_eff": 48,
      "hero_pool": 11,
      "assists": 14.3,
      "obs_placed": 2.6,
      "sen_placed": 1.5,
      "obs_denied": 52,
      "stacks": 2,
      "n": 22725
    },
    "_detail": 24
  },
  {
    "name": "JerAx",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI9",
    "team": "OG",
    "account_id": 26771994,
    "matchCount": 28,
    "source": "api",
    "stats": {
      "gpm": 330.7,
      "xpm": 445.8,
      "kda": 3.7,
      "lane_eff": 43,
      "hero_pool": 13,
      "assists": 14.8,
      "obs_placed": 5.3,
      "sen_placed": 6.7,
      "obs_denied": 66,
      "stacks": 1.7
    },
    "_liqui": true,
    "_detail": 28
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
    "matchCount": 28,
    "source": "api",
    "stats": {
      "gpm": 299.2,
      "xpm": 392.6,
      "kda": 3,
      "lane_eff": 43,
      "hero_pool": 11,
      "assists": 13.6,
      "obs_placed": 13.6,
      "sen_placed": 19.4,
      "obs_denied": 66,
      "stacks": 2.3,
      "n": 3417
    },
    "_detail": 28
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
    "matchCount": 32,
    "source": "api",
    "stats": {
      "gpm": 633.6,
      "xpm": 611.4,
      "kda": 4.1,
      "lane_eff": 54,
      "hero_pool": 19,
      "assists": 9.5,
      "obs_placed": 1,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1.6,
      "n": 4063
    },
    "_detail": 32
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
    "matchCount": 32,
    "source": "api",
    "stats": {
      "gpm": 597.7,
      "xpm": 643.3,
      "kda": 3.6,
      "lane_eff": 53,
      "hero_pool": 14,
      "assists": 8.9,
      "obs_placed": 1,
      "sen_placed": 1.3,
      "obs_denied": 44,
      "stacks": 3.5
    },
    "_detail": 32
  },
  {
    "name": "MinD_ContRoL",
    "allowedPos": [
      3
    ],
    "ti": "TI9",
    "team": "Team Liquid",
    "account_id": 34505203,
    "matchCount": 32,
    "source": "api",
    "stats": {
      "gpm": 403,
      "xpm": 499.3,
      "kda": 3.4,
      "lane_eff": 48,
      "hero_pool": 14,
      "assists": 14.6,
      "obs_placed": 1,
      "sen_placed": 1.6,
      "obs_denied": 52,
      "stacks": 2.3
    },
    "_old_id": 101867456,
    "_detail": 32
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
    "matchCount": 32,
    "source": "api",
    "stats": {
      "gpm": 311.2,
      "xpm": 401.3,
      "kda": 4.1,
      "lane_eff": 43,
      "hero_pool": 13,
      "assists": 14.4,
      "obs_placed": 1.6,
      "sen_placed": 4.1,
      "obs_denied": 66,
      "stacks": 3.6
    },
    "_old_id": 123787592,
    "_detail": 32
  },
  {
    "name": "KuroKy",
    "allowedPos": [
      5
    ],
    "ti": "TI9",
    "team": "Team Liquid",
    "account_id": 82262664,
    "matchCount": 32,
    "source": "api",
    "stats": {
      "gpm": 266.1,
      "xpm": 372.5,
      "kda": 2.6,
      "lane_eff": 42,
      "hero_pool": 13,
      "assists": 15.1,
      "obs_placed": 16.9,
      "sen_placed": 21.4,
      "obs_denied": 70,
      "stacks": 1.7
    },
    "_liqui": true,
    "_detail": 32
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
    "account_id": 106863163,
    "matchCount": 26,
    "source": "api",
    "stats": {
      "gpm": 619.7,
      "xpm": 658.3,
      "kda": 6.9,
      "lane_eff": 53,
      "hero_pool": 11,
      "assists": 9.9,
      "obs_placed": 1,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 2.8
    },
    "_liqui": true,
    "_detail": 26
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
    "matchCount": 26,
    "source": "api",
    "stats": {
      "gpm": 277.9,
      "xpm": 357.4,
      "kda": 2.7,
      "lane_eff": 42,
      "hero_pool": 10,
      "assists": 14.3,
      "obs_placed": 16.9,
      "sen_placed": 26.8,
      "obs_denied": 70,
      "stacks": 3.6
    },
    "_old_id": 149048091,
    "_detail": 26
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
    "matchCount": 28,
    "source": "api",
    "stats": {
      "gpm": 525.7,
      "xpm": 588.2,
      "kda": 3.9,
      "lane_eff": 53,
      "hero_pool": 19,
      "assists": 10.9,
      "obs_placed": 1.3,
      "sen_placed": 1.3,
      "obs_denied": 44,
      "stacks": 2.2
    },
    "_old_id": 149462,
    "_detail": 28
  },
  {
    "name": "Zai",
    "allowedPos": [
      3
    ],
    "ti": "TI9",
    "team": "Team Secret",
    "account_id": 73562326,
    "matchCount": 28,
    "source": "api",
    "stats": {
      "gpm": 410.3,
      "xpm": 495.6,
      "kda": 3.4,
      "lane_eff": 48,
      "hero_pool": 17,
      "assists": 13.4,
      "obs_placed": 1.1,
      "sen_placed": 1.7,
      "obs_denied": 52,
      "stacks": 2.6
    },
    "_liqui": true,
    "_detail": 28
  },
  {
    "name": "YapzOr",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI9",
    "team": "Team Secret",
    "account_id": 89117038,
    "matchCount": 28,
    "source": "api",
    "stats": {
      "gpm": 334.9,
      "xpm": 443.6,
      "kda": 5.6,
      "lane_eff": 43,
      "hero_pool": 13,
      "assists": 14.3,
      "obs_placed": 3.2,
      "sen_placed": 5.7,
      "obs_denied": 66,
      "stacks": 2.1
    },
    "_liqui": true,
    "_detail": 28
  },
  {
    "name": "Puppey",
    "allowedPos": [
      5
    ],
    "ti": "TI9",
    "team": "Team Secret",
    "account_id": 87278757,
    "matchCount": 28,
    "source": "api",
    "stats": {
      "gpm": 299.2,
      "xpm": 392.6,
      "kda": 3,
      "lane_eff": 42,
      "hero_pool": 11,
      "assists": 13.6,
      "obs_placed": 13.6,
      "sen_placed": 19.4,
      "obs_denied": 70,
      "stacks": 2.3,
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
    "matchCount": 23,
    "source": "api",
    "stats": {
      "gpm": 605,
      "xpm": 671,
      "kda": 5.1,
      "lane_eff": 53,
      "hero_pool": 14,
      "assists": 11.2,
      "obs_placed": 1,
      "sen_placed": 1.7,
      "obs_denied": 44,
      "stacks": 2.7
    },
    "_old_id": 149048098,
    "_detail": 23
  },
  {
    "name": "Yang",
    "allowedPos": [
      3
    ],
    "ti": "TI9",
    "team": "Vici Gaming",
    "account_id": 139937922,
    "matchCount": 23,
    "source": "api",
    "stats": {
      "gpm": 454.1,
      "xpm": 583.5,
      "kda": 4.2,
      "lane_eff": 48,
      "hero_pool": 10,
      "assists": 13.7,
      "obs_placed": 1,
      "sen_placed": 1.3,
      "obs_denied": 52,
      "stacks": 2.1
    },
    "_old_id": 149048099,
    "_detail": 23
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
    "source": "fabricated",
    "stats": {
      "gpm": 275,
      "xpm": 350,
      "kda": 2.6,
      "lane_eff": 39,
      "hero_pool": 15,
      "assists": 17,
      "obs_placed": 10,
      "sen_placed": 7,
      "obs_denied": 54,
      "stacks": 4
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
    "matchCount": 23,
    "source": "api",
    "stats": {
      "gpm": 283.3,
      "xpm": 413.1,
      "kda": 3,
      "lane_eff": 42,
      "hero_pool": 7,
      "assists": 14.3,
      "obs_placed": 17.3,
      "sen_placed": 32.3,
      "obs_denied": 70,
      "stacks": 6.6
    },
    "_old_id": 149048101,
    "_detail": 23
  },
  {
    "name": "Yatoro",
    "allowedPos": [
      1
    ],
    "ti": "TI10",
    "team": "Team Spirit",
    "account_id": 321580662,
    "matchCount": 36,
    "source": "api",
    "stats": {
      "gpm": 695.8,
      "xpm": 688.4,
      "kda": 5.9,
      "lane_eff": 54,
      "hero_pool": 21,
      "assists": 6.6,
      "obs_placed": 1,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 2.4
    },
    "_detail": 36
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
    "matchCount": 36,
    "source": "api",
    "stats": {
      "gpm": 444.5,
      "xpm": 537.1,
      "kda": 3.8,
      "lane_eff": 48,
      "hero_pool": 11,
      "assists": 11.8,
      "obs_placed": 1.3,
      "sen_placed": 1.7,
      "obs_denied": 52,
      "stacks": 1.6
    },
    "_old_id": 362219456,
    "_detail": 36
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
    "matchCount": 36,
    "source": "api",
    "stats": {
      "gpm": 279.4,
      "xpm": 415.8,
      "kda": 3.1,
      "lane_eff": 43,
      "hero_pool": 11,
      "assists": 12.5,
      "obs_placed": 4.2,
      "sen_placed": 8.1,
      "obs_denied": 66,
      "stacks": 3.8
    },
    "_old_id": 388468439,
    "_detail": 36
  },
  {
    "name": "Miposhka",
    "allowedPos": [
      5
    ],
    "ti": "TI10",
    "team": "Team Spirit",
    "account_id": 113331514,
    "matchCount": 36,
    "source": "api",
    "stats": {
      "gpm": 269.9,
      "xpm": 380,
      "kda": 2.7,
      "lane_eff": 42,
      "hero_pool": 13,
      "assists": 13.1,
      "obs_placed": 11,
      "sen_placed": 22,
      "obs_denied": 70,
      "stacks": 3.5
    },
    "_old_id": 254512171,
    "_detail": 36
  },
  {
    "name": "Ame",
    "allowedPos": [
      1
    ],
    "ti": "TI10",
    "team": "PSG.LGD",
    "account_id": 898754153,
    "matchCount": 28,
    "source": "api",
    "stats": {
      "gpm": 722.8,
      "xpm": 718.2,
      "kda": 8.3,
      "lane_eff": 54,
      "hero_pool": 13,
      "assists": 7.6,
      "obs_placed": 1,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 2.9
    },
    "_old_id": 135488229,
    "_detail": 28
  },
  {
    "name": "NothingToSay",
    "allowedPos": [
      2
    ],
    "ti": "TI10",
    "team": "PSG.LGD",
    "account_id": 173978074,
    "matchCount": 28,
    "source": "api",
    "stats": {
      "gpm": 604.4,
      "xpm": 689.5,
      "kda": 6.8,
      "lane_eff": 53,
      "hero_pool": 12,
      "assists": 9.9,
      "obs_placed": 1.2,
      "sen_placed": 1.2,
      "obs_denied": 44,
      "stacks": 2.9
    },
    "_old_id": 128742229,
    "_detail": 28
  },
  {
    "name": "Faith_bian",
    "allowedPos": [
      3,
      4
    ],
    "ti": "TI10",
    "team": "PSG.LGD",
    "account_id": 118134220,
    "matchCount": 28,
    "source": "api",
    "stats": {
      "gpm": 467.7,
      "xpm": 549,
      "kda": 5.2,
      "lane_eff": 48,
      "hero_pool": 14,
      "assists": 12.1,
      "obs_placed": 1,
      "sen_placed": 1,
      "obs_denied": 52,
      "stacks": 1.5
    },
    "_liqui": true,
    "_detail": 28
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
    "matchCount": 28,
    "source": "api",
    "stats": {
      "gpm": 339.7,
      "xpm": 485,
      "kda": 4.5,
      "lane_eff": 43,
      "hero_pool": 15,
      "assists": 13.4,
      "obs_placed": 4.1,
      "sen_placed": 5.9,
      "obs_denied": 66,
      "stacks": 2.5
    },
    "_old_id": 149048093,
    "_detail": 28
  },
  {
    "name": "y`",
    "allowedPos": [
      5
    ],
    "ti": "TI10",
    "team": "PSG.LGD",
    "account_id": 105248644,
    "matchCount": 14,
    "source": "api",
    "stats": {
      "gpm": 583.7,
      "xpm": 657.9,
      "kda": 4.4,
      "lane_eff": 42,
      "hero_pool": 8,
      "assists": 6.8,
      "obs_placed": 1.4,
      "sen_placed": 1.5,
      "obs_denied": 70,
      "stacks": 1.2,
      "n": 4063
    },
    "_detail": 14
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
    "matchCount": 28,
    "source": "api",
    "stats": {
      "gpm": 666.6,
      "xpm": 729.8,
      "kda": 5.1,
      "lane_eff": 53,
      "hero_pool": 13,
      "assists": 7.7,
      "obs_placed": 1.2,
      "sen_placed": 2,
      "obs_denied": 44,
      "stacks": 2.2,
      "n": 9459
    },
    "_detail": 38
  },
  {
    "name": "iceiceice",
    "allowedPos": [
      3
    ],
    "ti": "TI10",
    "team": "Team Secret",
    "account_id": 84772440,
    "matchCount": 20,
    "source": "api",
    "stats": {
      "gpm": 467.4,
      "xpm": 521,
      "kda": 4,
      "lane_eff": 48,
      "hero_pool": 8,
      "assists": 10.7,
      "obs_placed": 7,
      "sen_placed": 1,
      "obs_denied": 52,
      "stacks": 1.9
    },
    "_detail": 20
  },
  {
    "name": "YapzOr",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI10",
    "team": "Team Secret",
    "account_id": 89117038,
    "matchCount": 25,
    "source": "api",
    "stats": {
      "gpm": 307.7,
      "xpm": 469.4,
      "kda": 4.7,
      "lane_eff": 43,
      "hero_pool": 12,
      "assists": 16.2,
      "obs_placed": 14.8,
      "sen_placed": 21.2,
      "obs_denied": 66,
      "stacks": 1.8
    },
    "_liqui": true,
    "_detail": 25
  },
  {
    "name": "Puppey",
    "allowedPos": [
      5
    ],
    "ti": "TI10",
    "team": "Team Secret",
    "account_id": 87278757,
    "matchCount": 25,
    "source": "api",
    "stats": {
      "gpm": 318.8,
      "xpm": 441.7,
      "kda": 3.3,
      "lane_eff": 42,
      "hero_pool": 12,
      "assists": 16.6,
      "obs_placed": 3.5,
      "sen_placed": 12.7,
      "obs_denied": 70,
      "stacks": 3.8,
      "n": 3417
    },
    "_detail": 25
  },
  {
    "name": "flyfly",
    "allowedPos": [
      1
    ],
    "ti": "TI10",
    "team": "iG",
    "account_id": 168028715,
    "matchCount": 25,
    "source": "api",
    "stats": {
      "gpm": 633.7,
      "xpm": 693.5,
      "kda": 7,
      "lane_eff": 54,
      "hero_pool": 14,
      "assists": 10.7,
      "obs_placed": 1,
      "sen_placed": 1.8,
      "obs_denied": 42,
      "stacks": 1.8
    },
    "_old_id": 149048102,
    "_detail": 25
  },
  {
    "name": "Emo",
    "allowedPos": [
      2
    ],
    "ti": "TI10",
    "team": "iG",
    "account_id": 202217968,
    "matchCount": 25,
    "source": "api",
    "stats": {
      "gpm": 638.7,
      "xpm": 738.5,
      "kda": 6.7,
      "lane_eff": 53,
      "hero_pool": 8,
      "assists": 11.2,
      "obs_placed": 1.1,
      "sen_placed": 1.5,
      "obs_denied": 44,
      "stacks": 2
    },
    "_old_id": 149048103,
    "_detail": 25
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
    "matchCount": 25,
    "source": "api",
    "stats": {
      "gpm": 524.9,
      "xpm": 611.3,
      "kda": 5.1,
      "lane_eff": 48,
      "hero_pool": 10,
      "assists": 12.7,
      "obs_placed": 1,
      "sen_placed": 1.4,
      "obs_denied": 52,
      "stacks": 1.8
    },
    "_old_id": 149048104,
    "_detail": 25
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
    "matchCount": 25,
    "source": "api",
    "stats": {
      "gpm": 289.4,
      "xpm": 432.3,
      "kda": 2.7,
      "lane_eff": 43,
      "hero_pool": 9,
      "assists": 13.8,
      "obs_placed": 9.7,
      "sen_placed": 5.5,
      "obs_denied": 66,
      "stacks": 4
    },
    "_old_id": 103735652,
    "_detail": 25
  },
  {
    "name": "Oli~",
    "allowedPos": [
      5
    ],
    "ti": "TI10",
    "team": "iG",
    "account_id": 101259972,
    "matchCount": 25,
    "source": "api",
    "stats": {
      "gpm": 275.4,
      "xpm": 415,
      "kda": 3.4,
      "lane_eff": 42,
      "hero_pool": 12,
      "assists": 16.6,
      "obs_placed": 8.2,
      "sen_placed": 27.1,
      "obs_denied": 70,
      "stacks": 2.4
    },
    "_old_id": 149048105,
    "_detail": 25
  },
  {
    "name": "Nightfall",
    "allowedPos": [
      1
    ],
    "ti": "TI10",
    "team": "Virtus.pro",
    "account_id": 124801257,
    "matchCount": 24,
    "source": "api",
    "stats": {
      "gpm": 680.8,
      "xpm": 760.7,
      "kda": 6.3,
      "lane_eff": 54,
      "hero_pool": 7,
      "assists": 9,
      "obs_placed": 1,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1.9
    },
    "_old_id": 374143001,
    "_detail": 37
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
    "matchCount": 24,
    "source": "api",
    "stats": {
      "gpm": 477.5,
      "xpm": 535,
      "kda": 3.9,
      "lane_eff": 48,
      "hero_pool": 10,
      "assists": 13.4,
      "obs_placed": 7,
      "sen_placed": 1,
      "obs_denied": 52,
      "stacks": 1.4
    },
    "_old_id": 374143003,
    "_detail": 24
  },
  {
    "name": "Save-",
    "allowedPos": [
      4
    ],
    "ti": "TI10",
    "team": "Virtus.pro",
    "account_id": 317880638,
    "matchCount": 24,
    "source": "api",
    "stats": {
      "gpm": 298,
      "xpm": 457.8,
      "kda": 2.8,
      "lane_eff": 43,
      "hero_pool": 9,
      "assists": 15.8,
      "obs_placed": 6.5,
      "sen_placed": 7.9,
      "obs_denied": 66,
      "stacks": 2
    },
    "_old_id": 374143004,
    "_detail": 24
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
    "matchCount": 26,
    "source": "api",
    "stats": {
      "gpm": 702.9,
      "xpm": 684.7,
      "kda": 9.6,
      "lane_eff": 54,
      "hero_pool": 8,
      "assists": 10.6,
      "obs_placed": 1.3,
      "sen_placed": 1.4,
      "obs_denied": 42,
      "stacks": 1.6
    },
    "_old_id": 321580660,
    "_detail": 26
  },
  {
    "name": "Nine",
    "allowedPos": [
      2
    ],
    "ti": "TI11",
    "team": "Tundra Esports",
    "account_id": 94786276,
    "matchCount": 26,
    "source": "api",
    "stats": {
      "gpm": 558.5,
      "xpm": 706.2,
      "kda": 6.1,
      "lane_eff": 53,
      "hero_pool": 12,
      "assists": 13.3,
      "obs_placed": 1.4,
      "sen_placed": 1.3,
      "obs_denied": 44,
      "stacks": 1.9
    },
    "_liqui": true
  },
  {
    "name": "33",
    "allowedPos": [
      3
    ],
    "ti": "TI11",
    "team": "Tundra Esports",
    "account_id": 86698277,
    "matchCount": 26,
    "source": "api",
    "stats": {
      "gpm": 589.8,
      "xpm": 692.7,
      "kda": 7,
      "lane_eff": 48,
      "hero_pool": 6,
      "assists": 16.2,
      "obs_placed": 1.3,
      "sen_placed": 1.7,
      "obs_denied": 52,
      "stacks": 2.7
    },
    "_old_id": 311360820,
    "_detail": 26
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
    "matchCount": 30,
    "source": "api",
    "stats": {
      "gpm": 312.6,
      "xpm": 494.5,
      "kda": 2.9,
      "lane_eff": 43,
      "hero_pool": 8,
      "assists": 15.6,
      "obs_placed": 5.1,
      "sen_placed": 8.7,
      "obs_denied": 147,
      "stacks": 1.5
    },
    "_detail": 31
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
    "matchCount": 26,
    "source": "api",
    "stats": {
      "gpm": 343.8,
      "xpm": 504.5,
      "kda": 3.7,
      "lane_eff": 43,
      "hero_pool": 9,
      "assists": 17.4,
      "obs_placed": 9.7,
      "sen_placed": 21.5,
      "obs_denied": 66,
      "stacks": 3.2
    },
    "_old_id": 94274926,
    "_detail": 26
  },
  {
    "name": "Crystallis",
    "allowedPos": [
      1
    ],
    "ti": "TI11",
    "team": "Team Secret",
    "account_id": 127617979,
    "matchCount": 29,
    "source": "api",
    "stats": {
      "gpm": 595.7,
      "xpm": 679,
      "kda": 6,
      "lane_eff": 54,
      "hero_pool": 15,
      "assists": 9.3,
      "obs_placed": 1,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1.9
    },
    "_old_id": 374143000,
    "_detail": 29
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
    "matchCount": 29,
    "source": "api",
    "stats": {
      "gpm": 522.8,
      "xpm": 636.8,
      "kda": 4.4,
      "lane_eff": 48,
      "hero_pool": 12,
      "assists": 12.6,
      "obs_placed": 1,
      "sen_placed": 3,
      "obs_denied": 52,
      "stacks": 1.8
    },
    "_detail": 29
  },
  {
    "name": "Zayac",
    "allowedPos": [
      4
    ],
    "ti": "TI11",
    "team": "Team Secret",
    "account_id": 111030315,
    "matchCount": 29,
    "source": "api",
    "stats": {
      "gpm": 278.7,
      "xpm": 477.8,
      "kda": 2.8,
      "lane_eff": 43,
      "hero_pool": 8,
      "assists": 16.5,
      "obs_placed": 12,
      "sen_placed": 16.7,
      "obs_denied": 66,
      "stacks": 2.2
    },
    "_liqui": true
  },
  {
    "name": "Puppey",
    "allowedPos": [
      5
    ],
    "ti": "TI11",
    "team": "Team Secret",
    "account_id": 87278757,
    "matchCount": 29,
    "source": "api",
    "stats": {
      "gpm": 317.5,
      "xpm": 442.3,
      "kda": 3.1,
      "lane_eff": 42,
      "hero_pool": 9,
      "assists": 15.2,
      "obs_placed": 4.6,
      "sen_placed": 13.7,
      "obs_denied": 150,
      "stacks": 3.4
    },
    "_detail": 29
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
    "account_id": 152962063,
    "matchCount": 30,
    "source": "api",
    "stats": {
      "gpm": 653,
      "xpm": 778.7,
      "kda": 6.3,
      "lane_eff": 53,
      "hero_pool": 10,
      "assists": 10.9,
      "obs_placed": 1.4,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 2.5
    },
    "_liqui": true
  },
  {
    "name": "Zai",
    "allowedPos": [
      3
    ],
    "ti": "TI11",
    "team": "Team Liquid",
    "account_id": 73562326,
    "matchCount": 30,
    "source": "api",
    "stats": {
      "gpm": 474.7,
      "xpm": 591.8,
      "kda": 4.4,
      "lane_eff": 48,
      "hero_pool": 12,
      "assists": 14.8,
      "obs_placed": 1.3,
      "sen_placed": 1.4,
      "obs_denied": 52,
      "stacks": 2
    },
    "_liqui": true,
    "_detail": 31
  },
  {
    "name": "Boxi",
    "allowedPos": [
      4
    ],
    "ti": "TI11",
    "team": "Team Liquid",
    "account_id": 77490514,
    "matchCount": 30,
    "source": "api",
    "stats": {
      "gpm": 312.6,
      "xpm": 494.5,
      "kda": 2.9,
      "lane_eff": 43,
      "hero_pool": 8,
      "assists": 15.6,
      "obs_placed": 5.1,
      "sen_placed": 8.7,
      "obs_denied": 66,
      "stacks": 1.5
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
    "matchCount": 30,
    "source": "api",
    "stats": {
      "gpm": 304.8,
      "xpm": 409.4,
      "kda": 3.3,
      "lane_eff": 42,
      "hero_pool": 8,
      "assists": 15.3,
      "obs_placed": 11.9,
      "sen_placed": 23.4,
      "obs_denied": 70,
      "stacks": 2.8
    },
    "_old_id": 149048109,
    "_detail": 31
  },
  {
    "name": "Monet",
    "allowedPos": [
      1
    ],
    "ti": "TI11",
    "team": "Team Aster",
    "account_id": 148215639,
    "matchCount": 25,
    "source": "api",
    "stats": {
      "gpm": 663.6,
      "xpm": 687.2,
      "kda": 6.8,
      "lane_eff": 54,
      "hero_pool": 15,
      "assists": 7.7,
      "obs_placed": 1,
      "sen_placed": 1.3,
      "obs_denied": 42,
      "stacks": 2.1
    },
    "_old_id": 149048110,
    "_detail": 25
  },
  {
    "name": "Ori",
    "allowedPos": [
      2
    ],
    "ti": "TI11",
    "team": "Team Aster",
    "account_id": 107803494,
    "matchCount": 25,
    "source": "api",
    "stats": {
      "gpm": 546.9,
      "xpm": 653.1,
      "kda": 3.5,
      "lane_eff": 53,
      "hero_pool": 11,
      "assists": 9.1,
      "obs_placed": 1.4,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 2.2
    },
    "_old_id": 149048098,
    "_detail": 25
  },
  {
    "name": "Xxs",
    "allowedPos": [
      3
    ],
    "ti": "TI11",
    "team": "Team Aster",
    "account_id": 129958758,
    "matchCount": 25,
    "source": "api",
    "stats": {
      "gpm": 460.8,
      "xpm": 588.5,
      "kda": 6.6,
      "lane_eff": 48,
      "hero_pool": 12,
      "assists": 12.5,
      "obs_placed": 1.2,
      "sen_placed": 1,
      "obs_denied": 52,
      "stacks": 1.3
    },
    "_old_id": 128742228,
    "_detail": 25
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
    "account_id": 183378746,
    "matchCount": 25,
    "source": "api",
    "stats": {
      "gpm": 274.6,
      "xpm": 373.9,
      "kda": 2.6,
      "lane_eff": 42,
      "hero_pool": 11,
      "assists": 12,
      "obs_placed": 11.5,
      "sen_placed": 26.6,
      "obs_denied": 70,
      "stacks": 1.5
    },
    "_liqui": true
  },
  {
    "name": "Yuragi",
    "allowedPos": [
      1
    ],
    "ti": "TI11",
    "team": "OG",
    "account_id": 167976729,
    "matchCount": 21,
    "source": "api",
    "stats": {
      "gpm": 630.3,
      "xpm": 675.8,
      "kda": 3.7,
      "lane_eff": 54,
      "hero_pool": 18,
      "assists": 9.1,
      "obs_placed": 1,
      "sen_placed": 2.3,
      "obs_denied": 42,
      "stacks": 2.2
    },
    "_old_id": 149048113,
    "_detail": 21
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
    "matchCount": 21,
    "source": "api",
    "stats": {
      "gpm": 540.6,
      "xpm": 671.7,
      "kda": 4,
      "lane_eff": 54,
      "hero_pool": 11,
      "assists": 10.1,
      "obs_placed": 1.8,
      "sen_placed": 1.2,
      "obs_denied": 42,
      "stacks": 1.7
    },
    "_old_id": 149048114,
    "_detail": 21
  },
  {
    "name": "ATF",
    "allowedPos": [
      3,
      4
    ],
    "ti": "TI11",
    "team": "OG",
    "account_id": 183719386,
    "matchCount": 21,
    "source": "api",
    "stats": {
      "gpm": 482,
      "xpm": 598.2,
      "kda": 2.9,
      "lane_eff": 48,
      "hero_pool": 10,
      "assists": 9.9,
      "obs_placed": 1,
      "sen_placed": 1,
      "obs_denied": 52,
      "stacks": 2.1
    },
    "_liqui": true,
    "_detail": 21
  },
  {
    "name": "Taiga",
    "allowedPos": [
      4
    ],
    "ti": "TI11",
    "team": "OG",
    "account_id": 401792574,
    "matchCount": 21,
    "source": "api",
    "stats": {
      "gpm": 276.2,
      "xpm": 384.5,
      "kda": 2.3,
      "lane_eff": 43,
      "hero_pool": 11,
      "assists": 13.6,
      "obs_placed": 6.1,
      "sen_placed": 11.2,
      "obs_denied": 66,
      "stacks": 4.8
    },
    "_old_id": 149048115,
    "_detail": 21
  },
  {
    "name": "Misha",
    "allowedPos": [
      5
    ],
    "ti": "TI11",
    "team": "OG",
    "account_id": 90125566,
    "matchCount": 21,
    "source": "api",
    "stats": {
      "gpm": 247,
      "xpm": 343.3,
      "kda": 1.7,
      "lane_eff": 42,
      "hero_pool": 11,
      "assists": 11.7,
      "obs_placed": 9.1,
      "sen_placed": 14.8,
      "obs_denied": 70,
      "stacks": 2.8
    },
    "_detail": 21
  },
  {
    "name": "Yatoro",
    "allowedPos": [
      1
    ],
    "ti": "TI12",
    "team": "Team Spirit",
    "account_id": 321580662,
    "matchCount": 21,
    "source": "api",
    "stats": {
      "gpm": 811,
      "xpm": 848.7,
      "kda": 6.1,
      "lane_eff": 54,
      "hero_pool": 12,
      "assists": 11.2,
      "obs_placed": 1,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 2.4
    },
    "_detail": 21
  },
  {
    "name": "Larl",
    "allowedPos": [
      2
    ],
    "ti": "TI12",
    "team": "Team Spirit",
    "account_id": 106305042,
    "matchCount": 21,
    "source": "api",
    "stats": {
      "gpm": 609.1,
      "xpm": 730.2,
      "kda": 5.4,
      "lane_eff": 53,
      "hero_pool": 10,
      "assists": 17.1,
      "obs_placed": 1.5,
      "sen_placed": 1.1,
      "obs_denied": 44,
      "stacks": 1.3
    },
    "_old_id": 149048117,
    "_detail": 21
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
    "matchCount": 21,
    "source": "api",
    "stats": {
      "gpm": 674,
      "xpm": 820.1,
      "kda": 4.7,
      "lane_eff": 48,
      "hero_pool": 11,
      "assists": 14.2,
      "obs_placed": 3,
      "sen_placed": 1,
      "obs_denied": 52,
      "stacks": 3.1
    },
    "_old_id": 362219456,
    "_detail": 21
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
    "matchCount": 21,
    "source": "api",
    "stats": {
      "gpm": 353.1,
      "xpm": 542.4,
      "kda": 3.5,
      "lane_eff": 43,
      "hero_pool": 10,
      "assists": 18,
      "obs_placed": 5.8,
      "sen_placed": 10.3,
      "obs_denied": 66,
      "stacks": 5.7
    },
    "_old_id": 388468439,
    "_detail": 21
  },
  {
    "name": "Miposhka",
    "allowedPos": [
      5
    ],
    "ti": "TI12",
    "team": "Team Spirit",
    "account_id": 113331514,
    "matchCount": 21,
    "source": "api",
    "stats": {
      "gpm": 384.4,
      "xpm": 577,
      "kda": 3.7,
      "lane_eff": 42,
      "hero_pool": 9,
      "assists": 21.3,
      "obs_placed": 13.1,
      "sen_placed": 21.2,
      "obs_denied": 70,
      "stacks": 3.6
    },
    "_old_id": 254512171,
    "_detail": 21
  },
  {
    "name": "dyrachyo",
    "allowedPos": [
      1
    ],
    "ti": "TI12",
    "team": "Gaimin Gladiators",
    "account_id": 116934015,
    "matchCount": 27,
    "source": "api",
    "stats": {
      "gpm": 661.1,
      "xpm": 729.7,
      "kda": 3.4,
      "lane_eff": 54,
      "hero_pool": 14,
      "assists": 8.1,
      "obs_placed": 1.5,
      "sen_placed": 1.4,
      "obs_denied": 42,
      "stacks": 4.3
    },
    "_old_id": 149048118,
    "_detail": 27
  },
  {
    "name": "Quinn",
    "allowedPos": [
      2
    ],
    "ti": "TI12",
    "team": "Gaimin Gladiators",
    "account_id": 221666230,
    "matchCount": 27,
    "source": "api",
    "stats": {
      "gpm": 611.6,
      "xpm": 669.3,
      "kda": 5.9,
      "lane_eff": 53,
      "hero_pool": 13,
      "assists": 10.1,
      "obs_placed": 1.1,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 1.9
    },
    "_old_id": 374143003,
    "_detail": 27
  },
  {
    "name": "Ace",
    "allowedPos": [
      3
    ],
    "ti": "TI12",
    "team": "Gaimin Gladiators",
    "account_id": 97590558,
    "matchCount": 27,
    "source": "api",
    "stats": {
      "gpm": 610.6,
      "xpm": 663.5,
      "kda": 4.1,
      "lane_eff": 48,
      "hero_pool": 11,
      "assists": 11.3,
      "obs_placed": 1,
      "sen_placed": 1,
      "obs_denied": 52,
      "stacks": 3.7
    },
    "_old_id": 374143002,
    "_detail": 27
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
    "matchCount": 27,
    "source": "api",
    "stats": {
      "gpm": 354,
      "xpm": 470.6,
      "kda": 4.7,
      "lane_eff": 43,
      "hero_pool": 8,
      "assists": 13.3,
      "obs_placed": 7.1,
      "sen_placed": 12.2,
      "obs_denied": 66,
      "stacks": 4.4
    },
    "_old_id": 149048119,
    "_detail": 27
  },
  {
    "name": "Seleri",
    "allowedPos": [
      5
    ],
    "ti": "TI12",
    "team": "Gaimin Gladiators",
    "account_id": 91730177,
    "matchCount": 27,
    "source": "api",
    "stats": {
      "gpm": 345.8,
      "xpm": 449.2,
      "kda": 3.8,
      "lane_eff": 42,
      "hero_pool": 11,
      "assists": 14.8,
      "obs_placed": 8.9,
      "sen_placed": 15.7,
      "obs_denied": 70,
      "stacks": 4.5
    },
    "_old_id": 149048120,
    "_detail": 27
  },
  {
    "name": "shiro",
    "allowedPos": [
      1
    ],
    "ti": "TI12",
    "team": "LGD Gaming",
    "account_id": 320252024,
    "matchCount": 18,
    "source": "api",
    "stats": {
      "gpm": 748.6,
      "xpm": 761.2,
      "kda": 4.9,
      "lane_eff": 54,
      "hero_pool": 9,
      "assists": 10.4,
      "obs_placed": 1,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 2.2
    },
    "_old_id": 149048121,
    "_detail": 18
  },
  {
    "name": "NothingToSay",
    "allowedPos": [
      2
    ],
    "ti": "TI12",
    "team": "LGD Gaming",
    "account_id": 173978074,
    "matchCount": 18,
    "source": "api",
    "stats": {
      "gpm": 599.6,
      "xpm": 723.3,
      "kda": 4.8,
      "lane_eff": 53,
      "hero_pool": 10,
      "assists": 13.9,
      "obs_placed": 1.1,
      "sen_placed": 1.2,
      "obs_denied": 44,
      "stacks": 2.7
    },
    "_old_id": 128742229,
    "_detail": 18
  },
  {
    "name": "niu",
    "allowedPos": [
      3
    ],
    "ti": "TI12",
    "team": "LGD Gaming",
    "account_id": 145957968,
    "matchCount": 18,
    "source": "api",
    "stats": {
      "gpm": 610.9,
      "xpm": 737.8,
      "kda": 6.9,
      "lane_eff": 48,
      "hero_pool": 10,
      "assists": 12.6,
      "obs_placed": 7,
      "sen_placed": 3,
      "obs_denied": 52,
      "stacks": 1.8
    },
    "_old_id": 149048122,
    "_detail": 18
  },
  {
    "name": "planet",
    "allowedPos": [
      4
    ],
    "ti": "TI12",
    "team": "LGD Gaming",
    "account_id": 150961567,
    "matchCount": 18,
    "source": "api",
    "stats": {
      "gpm": 371.8,
      "xpm": 509.3,
      "kda": 4.5,
      "lane_eff": 43,
      "hero_pool": 8,
      "assists": 17.6,
      "obs_placed": 8.2,
      "sen_placed": 10.3,
      "obs_denied": 66,
      "stacks": 6.2
    },
    "_old_id": 149048123,
    "_detail": 18
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
    "matchCount": 20,
    "source": "api",
    "stats": {
      "gpm": 706.1,
      "xpm": 714.8,
      "kda": 4,
      "lane_eff": 57,
      "hero_pool": 11,
      "assists": 10.8,
      "obs_placed": 1,
      "sen_placed": 1.3,
      "obs_denied": 42,
      "stacks": 1.9
    },
    "_old_id": 149048124,
    "_detail": 20
  },
  {
    "name": "Maybe",
    "allowedPos": [
      2
    ],
    "ti": "TI12",
    "team": "Azure Ray",
    "account_id": 106863163,
    "matchCount": 20,
    "source": "api",
    "stats": {
      "gpm": 557.8,
      "xpm": 643.2,
      "kda": 3.8,
      "lane_eff": 22,
      "hero_pool": 10,
      "assists": 9.1,
      "obs_placed": 1.8,
      "sen_placed": 1.3,
      "obs_denied": 44,
      "stacks": 1.9
    },
    "_liqui": true
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
    "account_id": 158847773,
    "matchCount": 20,
    "source": "api",
    "stats": {
      "gpm": 311.6,
      "xpm": 413.6,
      "kda": 2.3,
      "lane_eff": 42,
      "hero_pool": 9,
      "assists": 14.7,
      "obs_placed": 13.3,
      "sen_placed": 23,
      "obs_denied": 70,
      "stacks": 2.2
    },
    "_liqui": true
  },
  {
    "name": "Nightfall",
    "allowedPos": [
      1
    ],
    "ti": "TI12",
    "team": "BetBoom Team",
    "account_id": 85696663,
    "matchCount": 9,
    "source": "api",
    "stats": {
      "gpm": 335.4,
      "xpm": 452.4,
      "kda": 2.6,
      "lane_eff": 35,
      "hero_pool": 4,
      "assists": 13.6,
      "obs_placed": 6.9,
      "sen_placed": 8.6,
      "obs_denied": 42,
      "stacks": 6.8
    },
    "_old_id": 374143001,
    "_detail": 30
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
    "matchCount": 21,
    "source": "api",
    "stats": {
      "gpm": 640.8,
      "xpm": 744.6,
      "kda": 4.9,
      "lane_eff": 48,
      "hero_pool": 11,
      "assists": 12.8,
      "obs_placed": 7,
      "sen_placed": 1.1,
      "obs_denied": 52,
      "stacks": 3.9
    },
    "_old_id": 149048126,
    "_detail": 21
  },
  {
    "name": "Save-",
    "allowedPos": [
      4
    ],
    "ti": "TI12",
    "team": "BetBoom Team",
    "account_id": 320219866,
    "matchCount": 8,
    "source": "api",
    "stats": {
      "gpm": 393.3,
      "xpm": 491,
      "kda": 2,
      "lane_eff": 43,
      "hero_pool": 6,
      "assists": 16.4,
      "obs_placed": 11.4,
      "sen_placed": 23.8,
      "obs_denied": 66,
      "stacks": 4.4
    },
    "_old_id": 374143004,
    "_detail": 8
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
    "account_id": 152962063,
    "matchCount": 18,
    "source": "api",
    "stats": {
      "gpm": 733.9,
      "xpm": 834.4,
      "kda": 6.4,
      "lane_eff": 54,
      "hero_pool": 9,
      "assists": 11.8,
      "obs_placed": 1,
      "sen_placed": 1.5,
      "obs_denied": 42,
      "stacks": 4.3
    },
    "_liqui": true
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
    "matchCount": 18,
    "source": "api",
    "stats": {
      "gpm": 623.4,
      "xpm": 788.8,
      "kda": 6.9,
      "lane_eff": 54,
      "hero_pool": 10,
      "assists": 12.8,
      "obs_placed": 1.8,
      "sen_placed": 1.7,
      "obs_denied": 42,
      "stacks": 2.2
    },
    "_old_id": 311360821,
    "_detail": 18
  },
  {
    "name": "33",
    "allowedPos": [
      3
    ],
    "ti": "TI13",
    "team": "Team Liquid",
    "account_id": 86698277,
    "matchCount": 18,
    "source": "api",
    "stats": {
      "gpm": 613.8,
      "xpm": 694.1,
      "kda": 6.3,
      "lane_eff": 48,
      "hero_pool": 6,
      "assists": 13.2,
      "obs_placed": 7,
      "sen_placed": 1,
      "obs_denied": 52,
      "stacks": 4.5
    },
    "_old_id": 311360820,
    "_detail": 18
  },
  {
    "name": "Boxi",
    "allowedPos": [
      4
    ],
    "ti": "TI13",
    "team": "Team Liquid",
    "account_id": 77490514,
    "matchCount": 18,
    "source": "api",
    "stats": {
      "gpm": 321.9,
      "xpm": 491.3,
      "kda": 4.6,
      "lane_eff": 43,
      "hero_pool": 5,
      "assists": 15.1,
      "obs_placed": 7.2,
      "sen_placed": 11.8,
      "obs_denied": 66,
      "stacks": 4.3
    },
    "_old_id": 149048108,
    "_detail": 18
  },
  {
    "name": "iNSaNiA",
    "allowedPos": [
      5
    ],
    "ti": "TI13",
    "team": "Team Liquid",
    "account_id": 54580962,
    "matchCount": 18,
    "source": "api",
    "stats": {
      "gpm": 344.8,
      "xpm": 472.8,
      "kda": 4.5,
      "lane_eff": 42,
      "hero_pool": 8,
      "assists": 16.6,
      "obs_placed": 8.9,
      "sen_placed": 15.1,
      "obs_denied": 70,
      "stacks": 4.2
    },
    "_old_id": 149048109,
    "_detail": 18
  },
  {
    "name": "dyrachyo",
    "allowedPos": [
      1
    ],
    "ti": "TI13",
    "team": "Gaimin Gladiators",
    "account_id": 116934015,
    "matchCount": 22,
    "source": "api",
    "stats": {
      "gpm": 659.1,
      "xpm": 705.5,
      "kda": 3.9,
      "lane_eff": 54,
      "hero_pool": 12,
      "assists": 8.7,
      "obs_placed": 1.2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 4.7
    },
    "_old_id": 149048118,
    "_detail": 22
  },
  {
    "name": "Quinn",
    "allowedPos": [
      2
    ],
    "ti": "TI13",
    "team": "Gaimin Gladiators",
    "account_id": 221666230,
    "matchCount": 22,
    "source": "api",
    "stats": {
      "gpm": 559.1,
      "xpm": 644,
      "kda": 4.4,
      "lane_eff": 53,
      "hero_pool": 14,
      "assists": 9,
      "obs_placed": 1.3,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 2.1
    },
    "_old_id": 374143003,
    "_detail": 22
  },
  {
    "name": "Ace",
    "allowedPos": [
      3
    ],
    "ti": "TI13",
    "team": "Gaimin Gladiators",
    "account_id": 97590558,
    "matchCount": 22,
    "source": "api",
    "stats": {
      "gpm": 513.7,
      "xpm": 578,
      "kda": 4.5,
      "lane_eff": 48,
      "hero_pool": 9,
      "assists": 11.3,
      "obs_placed": 7,
      "sen_placed": 1,
      "obs_denied": 52,
      "stacks": 2.4
    },
    "_old_id": 374143002,
    "_detail": 22
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
    "matchCount": 22,
    "source": "api",
    "stats": {
      "gpm": 341.5,
      "xpm": 441,
      "kda": 3.6,
      "lane_eff": 43,
      "hero_pool": 10,
      "assists": 13.2,
      "obs_placed": 8.2,
      "sen_placed": 13.3,
      "obs_denied": 66,
      "stacks": 5.2
    },
    "_old_id": 149048119,
    "_detail": 22
  },
  {
    "name": "Seleri",
    "allowedPos": [
      5
    ],
    "ti": "TI13",
    "team": "Gaimin Gladiators",
    "account_id": 91730177,
    "matchCount": 22,
    "source": "api",
    "stats": {
      "gpm": 322.2,
      "xpm": 433,
      "kda": 3.4,
      "lane_eff": 42,
      "hero_pool": 11,
      "assists": 12.8,
      "obs_placed": 6.9,
      "sen_placed": 13.3,
      "obs_denied": 70,
      "stacks": 4.5
    },
    "_old_id": 149048120,
    "_detail": 22
  },
  {
    "name": "skiter",
    "allowedPos": [
      1
    ],
    "ti": "TI13",
    "team": "Team Falcons",
    "account_id": 100058342,
    "matchCount": 20,
    "source": "api",
    "stats": {
      "gpm": 633.2,
      "xpm": 697.6,
      "kda": 6.5,
      "lane_eff": 54,
      "hero_pool": 11,
      "assists": 12.3,
      "obs_placed": 1,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 2.1
    },
    "_old_id": 321580660,
    "_detail": 20
  },
  {
    "name": "Malr1ne",
    "allowedPos": [
      2
    ],
    "ti": "TI13",
    "team": "Team Falcons",
    "account_id": 898455820,
    "matchCount": 20,
    "source": "api",
    "stats": {
      "gpm": 595.5,
      "xpm": 742,
      "kda": 8.1,
      "lane_eff": 53,
      "hero_pool": 9,
      "assists": 12.2,
      "obs_placed": 1.5,
      "sen_placed": 1.3,
      "obs_denied": 44,
      "stacks": 2.6
    },
    "_old_id": 149048127,
    "_detail": 20
  },
  {
    "name": "ATF",
    "allowedPos": [
      3
    ],
    "ti": "TI13",
    "team": "Team Falcons",
    "account_id": 183719386,
    "matchCount": 20,
    "source": "api",
    "stats": {
      "gpm": 570.5,
      "xpm": 681,
      "kda": 5.5,
      "lane_eff": 48,
      "hero_pool": 10,
      "assists": 12.6,
      "obs_placed": 1,
      "sen_placed": 1,
      "obs_denied": 52,
      "stacks": 3.2
    },
    "_liqui": true
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
    "matchCount": 20,
    "source": "api",
    "stats": {
      "gpm": 365.5,
      "xpm": 517.7,
      "kda": 4.9,
      "lane_eff": 43,
      "hero_pool": 9,
      "assists": 16.1,
      "obs_placed": 6.6,
      "sen_placed": 8.6,
      "obs_denied": 66,
      "stacks": 5.3
    },
    "_old_id": 123787592,
    "_detail": 20
  },
  {
    "name": "Sneyking",
    "allowedPos": [
      5
    ],
    "ti": "TI13",
    "team": "Team Falcons",
    "account_id": 10366616,
    "matchCount": 20,
    "source": "api",
    "stats": {
      "gpm": 345.3,
      "xpm": 504.2,
      "kda": 4.2,
      "lane_eff": 42,
      "hero_pool": 11,
      "assists": 16.7,
      "obs_placed": 9.5,
      "sen_placed": 19.2,
      "obs_denied": 70,
      "stacks": 2.5
    },
    "_old_id": 94274926,
    "_detail": 20
  },
  {
    "name": "Pure",
    "allowedPos": [
      1
    ],
    "ti": "TI13",
    "team": "Tundra Esports",
    "account_id": 331855530,
    "matchCount": 22,
    "source": "api",
    "stats": {
      "gpm": 696.8,
      "xpm": 794.3,
      "kda": 5.2,
      "lane_eff": 82,
      "hero_pool": 10,
      "assists": 8.6,
      "obs_placed": 1,
      "sen_placed": 2.3,
      "obs_denied": 42,
      "stacks": 3.3
    },
    "_old_id": 149048126,
    "_detail": 22
  },
  {
    "name": "Topson",
    "allowedPos": [
      2
    ],
    "ti": "TI13",
    "team": "Tundra Esports",
    "account_id": 94054712,
    "matchCount": 22,
    "source": "api",
    "stats": {
      "gpm": 574.2,
      "xpm": 660,
      "kda": 3.6,
      "lane_eff": 40,
      "hero_pool": 12,
      "assists": 10.5,
      "obs_placed": 1.7,
      "sen_placed": 1,
      "obs_denied": 25,
      "stacks": 2.8
    },
    "_detail": 22
  },
  {
    "name": "RAMZES666",
    "allowedPos": [
      3
    ],
    "ti": "TI13",
    "team": "Tundra Esports",
    "account_id": 132851371,
    "matchCount": 22,
    "source": "api",
    "stats": {
      "gpm": 523.2,
      "xpm": 634.4,
      "kda": 3.8,
      "lane_eff": 54,
      "hero_pool": 8,
      "assists": 12.5,
      "obs_placed": 7,
      "sen_placed": 1,
      "obs_denied": 52,
      "stacks": 2.5
    },
    "_old_id": 123787450,
    "_detail": 22
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
    "matchCount": 22,
    "source": "api",
    "stats": {
      "gpm": 301.5,
      "xpm": 471.8,
      "kda": 3.3,
      "lane_eff": 42,
      "hero_pool": 8,
      "assists": 13.7,
      "obs_placed": 13,
      "sen_placed": 21.9,
      "obs_denied": 70,
      "stacks": 3.1
    },
    "_old_id": 149048129,
    "_detail": 22
  },
  {
    "name": "Ame",
    "allowedPos": [
      1
    ],
    "ti": "TI13",
    "team": "Xtreme Gaming",
    "account_id": 898754153,
    "matchCount": 15,
    "source": "api",
    "stats": {
      "gpm": 672.3,
      "xpm": 720.8,
      "kda": 5.3,
      "lane_eff": 54,
      "hero_pool": 10,
      "assists": 6.7,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 2.7
    },
    "_old_id": 135488229,
    "_detail": 15
  },
  {
    "name": "Xm",
    "allowedPos": [
      2
    ],
    "ti": "TI13",
    "team": "Xtreme Gaming",
    "account_id": 137129583,
    "matchCount": 15,
    "source": "api",
    "stats": {
      "gpm": 565.7,
      "xpm": 620.5,
      "kda": 4.5,
      "lane_eff": 53,
      "hero_pool": 8,
      "assists": 8.8,
      "obs_placed": 1.8,
      "sen_placed": 1.2,
      "obs_denied": 44,
      "stacks": 2.4
    },
    "_old_id": 149048130,
    "_detail": 15
  },
  {
    "name": "Xxs",
    "allowedPos": [
      3
    ],
    "ti": "TI13",
    "team": "Xtreme Gaming",
    "account_id": 129958758,
    "matchCount": 15,
    "source": "api",
    "stats": {
      "gpm": 513.4,
      "xpm": 580.3,
      "kda": 3.7,
      "lane_eff": 48,
      "hero_pool": 8,
      "assists": 10.7,
      "obs_placed": 7,
      "sen_placed": 1,
      "obs_denied": 52,
      "stacks": 1.7
    },
    "_old_id": 128742228,
    "_detail": 15
  },
  {
    "name": "XinQ",
    "allowedPos": [
      4
    ],
    "ti": "TI13",
    "team": "Xtreme Gaming",
    "account_id": 157475523,
    "matchCount": 15,
    "source": "api",
    "stats": {
      "gpm": 331.1,
      "xpm": 462.5,
      "kda": 3.2,
      "lane_eff": 43,
      "hero_pool": 9,
      "assists": 10.9,
      "obs_placed": 4.5,
      "sen_placed": 9,
      "obs_denied": 66,
      "stacks": 3.5
    },
    "_old_id": 149048093,
    "_detail": 15
  },
  {
    "name": "Dy",
    "allowedPos": [
      5
    ],
    "ti": "TI13",
    "team": "Xtreme Gaming",
    "account_id": 143693439,
    "matchCount": 15,
    "source": "api",
    "stats": {
      "gpm": 317.6,
      "xpm": 452.4,
      "kda": 2.8,
      "lane_eff": 42,
      "hero_pool": 10,
      "assists": 13.1,
      "obs_placed": 11.3,
      "sen_placed": 17.3,
      "obs_denied": 70,
      "stacks": 2.9
    },
    "_old_id": 149048101,
    "_detail": 15
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

export const DATA_SUMMARY = { total: 325, api: 300, estimated: 25 };
