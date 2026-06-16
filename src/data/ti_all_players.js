/**
 * TI Draft 选手数据库 — TI1-TI13
 * 生成: 2026-06-16T02:44:48.968Z
 * 总记录: 325
 *
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

export const TI_PLAYERS = [
  {
    "id": "Dendi",
    "name": "Dendi",
    "allowedPos": [
      2
    ],
    "ti": "TI1",
    "team": "Na'Vi",
    "account_id": null,
    "matched_name": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 509.6,
      "xpm": 620.8,
      "kda": 3.8,
      "lane_eff": 57.8,
      "hero_pool": 11.9,
      "assists": 9.1,
      "obs_placed": 2.9,
      "sen_placed": 1,
      "obs_denied": 48,
      "stacks": 1.7
    }
  },
  {
    "id": "XBOCT",
    "name": "XBOCT",
    "allowedPos": [
      1
    ],
    "ti": "TI1",
    "team": "Na'Vi",
    "account_id": null,
    "matched_name": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 458.2,
      "xpm": 467.2,
      "kda": 2.3,
      "lane_eff": 32.9,
      "hero_pool": 8.5,
      "assists": 6.3,
      "obs_placed": 1.5,
      "sen_placed": 1,
      "obs_denied": 25.6,
      "stacks": 1
    }
  },
  {
    "id": "Puppey",
    "name": "Puppey",
    "allowedPos": [
      5
    ],
    "ti": "TI1",
    "team": "Na'Vi",
    "account_id": null,
    "matched_name": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 270,
      "xpm": 293.3,
      "kda": 2.8,
      "lane_eff": 35.7,
      "hero_pool": 20,
      "assists": 20.4,
      "obs_placed": 18,
      "sen_placed": 11.9,
      "obs_denied": 70,
      "stacks": 3.4
    }
  },
  {
    "id": "ARS-ART",
    "name": "ARS-ART",
    "allowedPos": [
      3,
      4
    ],
    "ti": "TI1",
    "team": "Na'Vi",
    "account_id": null,
    "matched_name": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 357,
      "xpm": 416.5,
      "kda": 2.6,
      "lane_eff": 38.3,
      "hero_pool": 15.3,
      "assists": 11.9,
      "obs_placed": 6,
      "sen_placed": 2.6,
      "obs_denied": 44.2,
      "stacks": 6
    }
  },
  {
    "id": "LighTofHeaveN",
    "name": "LighTofHeaveN",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI1",
    "team": "Na'Vi",
    "account_id": null,
    "matched_name": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 325.5,
      "xpm": 370.5,
      "kda": 2.6,
      "lane_eff": 45.2,
      "hero_pool": 20.9,
      "assists": 18.7,
      "obs_placed": 14.7,
      "sen_placed": 9.5,
      "obs_denied": 56.1,
      "stacks": 6.3
    }
  },
  {
    "id": "BurNIng",
    "name": "BurNIng",
    "allowedPos": [
      1
    ],
    "ti": "TI1",
    "team": "EHOME",
    "account_id": null,
    "matched_name": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 510.4,
      "xpm": 582.4,
      "kda": 3.3,
      "lane_eff": 52.4,
      "hero_pool": 10,
      "assists": 8.2,
      "obs_placed": 2.1,
      "sen_placed": 1.1,
      "obs_denied": 47,
      "stacks": 1
    }
  },
  {
    "id": "MMY",
    "name": "MMY",
    "allowedPos": [
      3,
      4
    ],
    "ti": "TI1",
    "team": "EHOME",
    "account_id": null,
    "matched_name": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 344.4,
      "xpm": 387.1,
      "kda": 2.3,
      "lane_eff": 32.9,
      "hero_pool": 12.6,
      "assists": 9.4,
      "obs_placed": 4.5,
      "sen_placed": 1.8,
      "obs_denied": 30.2,
      "stacks": 6
    }
  },
  {
    "id": "357",
    "name": "357",
    "allowedPos": [
      3
    ],
    "ti": "TI1",
    "team": "EHOME",
    "account_id": null,
    "matched_name": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 445.2,
      "xpm": 475.3,
      "kda": 2.6,
      "lane_eff": 49.1,
      "hero_pool": 18,
      "assists": 12.7,
      "obs_placed": 7.8,
      "sen_placed": 3.1,
      "obs_denied": 48.9,
      "stacks": 6
    }
  },
  {
    "id": "Dai",
    "name": "Dai",
    "allowedPos": [
      2
    ],
    "ti": "TI1",
    "team": "EHOME",
    "account_id": null,
    "matched_name": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 476,
      "xpm": 544,
      "kda": 3.1,
      "lane_eff": 45.1,
      "hero_pool": 11.9,
      "assists": 8.5,
      "obs_placed": 2.6,
      "sen_placed": 1,
      "obs_denied": 37.4,
      "stacks": 1.7
    }
  },
  {
    "id": "LaNm",
    "name": "LaNm",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI1",
    "team": "EHOME",
    "account_id": null,
    "matched_name": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 306.9,
      "xpm": 440.7,
      "kda": 3,
      "lane_eff": 47.7,
      "hero_pool": 20.9,
      "assists": 24,
      "obs_placed": 13,
      "sen_placed": 10.7,
      "obs_denied": 60.1,
      "stacks": 6.3
    }
  },
  {
    "id": "Mushi",
    "name": "Mushi",
    "allowedPos": [
      1,
      2
    ],
    "ti": "TI1",
    "team": "MUFC",
    "account_id": null,
    "matched_name": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 655.4,
      "xpm": 710.4,
      "kda": 3.8,
      "lane_eff": 57.8,
      "hero_pool": 10.5,
      "assists": 8.2,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 40.7,
      "stacks": 1
    }
  },
  {
    "id": "hyhy",
    "name": "hyhy",
    "allowedPos": [
      2
    ],
    "ti": "TI1",
    "team": "MUFC",
    "account_id": null,
    "matched_name": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 375.2,
      "xpm": 505.6,
      "kda": 2.3,
      "lane_eff": 38.7,
      "hero_pool": 11.9,
      "assists": 6.7,
      "obs_placed": 2.4,
      "sen_placed": 1,
      "obs_denied": 32.1,
      "stacks": 1.7
    }
  },
  {
    "id": "XtiNcT",
    "name": "XtiNcT",
    "allowedPos": [
      1
    ],
    "ti": "TI1",
    "team": "MUFC",
    "account_id": null,
    "matched_name": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 643.8,
      "xpm": 684.8,
      "kda": 3.6,
      "lane_eff": 53.5,
      "hero_pool": 9.5,
      "assists": 7.3,
      "obs_placed": 1.7,
      "sen_placed": 1.1,
      "obs_denied": 45.8,
      "stacks": 1.1
    }
  },
  {
    "id": "ky.xY",
    "name": "ky.xY",
    "allowedPos": [
      3,
      4
    ],
    "ti": "TI1",
    "team": "MUFC",
    "account_id": null,
    "matched_name": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 470.4,
      "xpm": 534.1,
      "kda": 3.2,
      "lane_eff": 46.4,
      "hero_pool": 18,
      "assists": 13.6,
      "obs_placed": 6.6,
      "sen_placed": 2.7,
      "obs_denied": 45.8,
      "stacks": 6
    }
  },
  {
    "id": "Winter",
    "name": "Winter",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI1",
    "team": "MUFC",
    "account_id": null,
    "matched_name": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 288.3,
      "xpm": 393.9,
      "kda": 3.4,
      "lane_eff": 37.4,
      "hero_pool": 20.9,
      "assists": 22.7,
      "obs_placed": 15.5,
      "sen_placed": 8.9,
      "obs_denied": 64,
      "stacks": 6.3
    }
  },
  {
    "id": "ChuaN",
    "name": "ChuaN",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI1",
    "team": "Scythe",
    "account_id": null,
    "matched_name": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 269.7,
      "xpm": 347.1,
      "kda": 2.8,
      "lane_eff": 40,
      "hero_pool": 20.9,
      "assists": 21.3,
      "obs_placed": 13.9,
      "sen_placed": 10.1,
      "obs_denied": 68,
      "stacks": 6.3
    }
  },
  {
    "id": "iceiceice",
    "name": "iceiceice",
    "allowedPos": [
      2,
      3
    ],
    "ti": "TI1",
    "team": "Scythe",
    "account_id": null,
    "matched_name": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 442.4,
      "xpm": 467.2,
      "kda": 2.5,
      "lane_eff": 32.3,
      "hero_pool": 11.9,
      "assists": 7.9,
      "obs_placed": 2.2,
      "sen_placed": 1,
      "obs_denied": 26.8,
      "stacks": 1.7
    }
  },
  {
    "id": "HYHY",
    "name": "HYHY",
    "allowedPos": [
      2
    ],
    "ti": "TI1",
    "team": "Scythe",
    "account_id": null,
    "matched_name": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 588,
      "xpm": 608,
      "kda": 3.1,
      "lane_eff": 55.7,
      "hero_pool": 13.3,
      "assists": 8.5,
      "obs_placed": 3.2,
      "sen_placed": 1,
      "obs_denied": 37.4,
      "stacks": 2.1
    }
  },
  {
    "id": "RGC",
    "name": "RGC",
    "allowedPos": [
      1
    ],
    "ti": "TI1",
    "team": "Scythe",
    "account_id": null,
    "matched_name": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 585.8,
      "xpm": 556.8,
      "kda": 3.6,
      "lane_eff": 48.1,
      "hero_pool": 10.5,
      "assists": 7.3,
      "obs_placed": 2.1,
      "sen_placed": 1,
      "obs_denied": 45.8,
      "stacks": 1
    }
  },
  {
    "id": "xFreedom",
    "name": "xFreedom",
    "allowedPos": [
      5
    ],
    "ti": "TI1",
    "team": "Scythe",
    "account_id": null,
    "matched_name": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 256.5,
      "xpm": 362.3,
      "kda": 2.4,
      "lane_eff": 39.9,
      "hero_pool": 21,
      "assists": 20.4,
      "obs_placed": 17.1,
      "sen_placed": 14.7,
      "obs_denied": 59.5,
      "stacks": 3.8
    }
  },
  {
    "id": "Ferrari_430",
    "name": "Ferrari_430",
    "allowedPos": [
      2
    ],
    "ti": "TI1",
    "team": "iG",
    "account_id": null,
    "matched_name": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 476,
      "xpm": 544,
      "kda": 3.1,
      "lane_eff": 45.1,
      "hero_pool": 11.9,
      "assists": 8.5,
      "obs_placed": 2.6,
      "sen_placed": 1,
      "obs_denied": 37.4,
      "stacks": 1.7
    }
  },
  {
    "id": "Faith",
    "name": "Faith",
    "allowedPos": [
      5
    ],
    "ti": "TI1",
    "team": "iG",
    "account_id": null,
    "matched_name": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 229.5,
      "xpm": 293.3,
      "kda": 2.4,
      "lane_eff": 35.7,
      "hero_pool": 17,
      "assists": 20.4,
      "obs_placed": 15.3,
      "sen_placed": 11.9,
      "obs_denied": 59.5,
      "stacks": 3.4
    }
  },
  {
    "id": "YYF",
    "name": "YYF",
    "allowedPos": [
      3
    ],
    "ti": "TI1",
    "team": "iG",
    "account_id": null,
    "matched_name": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 357,
      "xpm": 416.5,
      "kda": 2.6,
      "lane_eff": 38.3,
      "hero_pool": 15.3,
      "assists": 11.9,
      "obs_placed": 6,
      "sen_placed": 2.6,
      "obs_denied": 44.2,
      "stacks": 6
    }
  },
  {
    "id": "Zhou",
    "name": "Zhou",
    "allowedPos": [
      1
    ],
    "ti": "TI1",
    "team": "iG",
    "account_id": null,
    "matched_name": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 585.8,
      "xpm": 556.8,
      "kda": 3.6,
      "lane_eff": 48.1,
      "hero_pool": 10.5,
      "assists": 7.3,
      "obs_placed": 2.1,
      "sen_placed": 1,
      "obs_denied": 45.8,
      "stacks": 1
    }
  },
  {
    "id": "SanSheng",
    "name": "SanSheng",
    "allowedPos": [
      4
    ],
    "ti": "TI1",
    "team": "iG",
    "account_id": null,
    "matched_name": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 306.9,
      "xpm": 440.7,
      "kda": 3,
      "lane_eff": 47.7,
      "hero_pool": 20.9,
      "assists": 24,
      "obs_placed": 13,
      "sen_placed": 10.7,
      "obs_denied": 60.1,
      "stacks": 6.3
    }
  },
  {
    "id": "Ferrari_430",
    "name": "Ferrari_430",
    "allowedPos": [
      2
    ],
    "ti": "TI2",
    "team": "iG",
    "account_id": null,
    "matched_name": null,
    "matchCount": 0,
    "matchScore": 0,
    "source": "estimated",
    "stats": {
      "gpm": 487.2,
      "xpm": 569.6,
      "kda": 3.4,
      "lane_eff": 49.3,
      "hero_pool": 13.3,
      "assists": 9.7,
      "obs_placed": 3,
      "sen_placed": 1,
      "obs_denied": 45.3,
      "stacks": 2.1
    }
  },
  {
    "id": "Faith",
    "name": "Faith",
    "allowedPos": [
      5
    ],
    "ti": "TI2",
    "team": "iG",
    "account_id": null,
    "matched_name": null,
    "matchCount": 0,
    "matchScore": 0,
    "source": "estimated",
    "stats": {
      "gpm": 243,
      "xpm": 327.8,
      "kda": 2.8,
      "lane_eff": 44.1,
      "hero_pool": 22,
      "assists": 20.4,
      "obs_placed": 16.2,
      "sen_placed": 13.3,
      "obs_denied": 70,
      "stacks": 4.2
    }
  },
  {
    "id": "YYF",
    "name": "YYF",
    "allowedPos": [
      3
    ],
    "ti": "TI2",
    "team": "iG",
    "account_id": null,
    "matched_name": null,
    "matchCount": 0,
    "matchScore": 0,
    "source": "estimated",
    "stats": {
      "gpm": 243.6,
      "xpm": 298.9,
      "kda": 1.9,
      "lane_eff": 30.2,
      "hero_pool": 12.6,
      "assists": 10.2,
      "obs_placed": 5.3,
      "sen_placed": 2.4,
      "obs_denied": 42.6,
      "stacks": 6
    }
  },
  {
    "id": 90137663,
    "name": "Zhou",
    "allowedPos": [
      1
    ],
    "ti": "TI2",
    "team": "iG",
    "account_id": 90137663,
    "matched_name": "Zhou",
    "matchCount": 31,
    "matchScore": 100,
    "source": "api",
    "stats": {
      "gpm": 494.5,
      "xpm": 508,
      "kda": 4.7,
      "lane_eff": 54,
      "hero_pool": 8,
      "assists": 8.7,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1
    }
  },
  {
    "id": "ChuaN",
    "name": "ChuaN",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI2",
    "team": "iG",
    "account_id": null,
    "matched_name": null,
    "matchCount": 0,
    "matchScore": 0,
    "source": "estimated",
    "stats": {
      "gpm": 282.1,
      "xpm": 378.3,
      "kda": 3.2,
      "lane_eff": 46.9,
      "hero_pool": 18.7,
      "assists": 20,
      "obs_placed": 13.6,
      "sen_placed": 10.3,
      "obs_denied": 71.9,
      "stacks": 5.1
    }
  },
  {
    "id": 70388657,
    "name": "Dendi",
    "allowedPos": [
      2
    ],
    "ti": "TI2",
    "team": "Na'Vi",
    "account_id": 70388657,
    "matched_name": "Snake master",
    "matchCount": 27,
    "matchScore": 95,
    "source": "api",
    "stats": {
      "gpm": 348.5,
      "xpm": 411.1,
      "kda": 3.6,
      "lane_eff": 53,
      "hero_pool": 9,
      "assists": 7.5,
      "obs_placed": 3,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 2
    }
  },
  {
    "id": "XBOCT",
    "name": "XBOCT",
    "allowedPos": [
      1
    ],
    "ti": "TI2",
    "team": "Na'Vi",
    "account_id": null,
    "matched_name": null,
    "matchCount": 0,
    "matchScore": 0,
    "source": "estimated",
    "stats": {
      "gpm": 464,
      "xpm": 480,
      "kda": 2.4,
      "lane_eff": 35.1,
      "hero_pool": 6,
      "assists": 6.8,
      "obs_placed": 1.6,
      "sen_placed": 1,
      "obs_denied": 29.4,
      "stacks": 1
    }
  },
  {
    "id": 87278757,
    "name": "Puppey",
    "allowedPos": [
      5
    ],
    "ti": "TI2",
    "team": "Na'Vi",
    "account_id": 87278757,
    "matched_name": "Puppey",
    "matchCount": 27,
    "matchScore": 100,
    "source": "api",
    "stats": {
      "gpm": 281.1,
      "xpm": 307,
      "kda": 2.7,
      "lane_eff": 42,
      "hero_pool": 13,
      "assists": 8.4,
      "obs_placed": 18,
      "sen_placed": 14,
      "obs_denied": 70,
      "stacks": 4
    }
  },
  {
    "id": "LighTofHeaveN",
    "name": "LighTofHeaveN",
    "allowedPos": [
      4
    ],
    "ti": "TI2",
    "team": "Na'Vi",
    "account_id": null,
    "matched_name": null,
    "matchCount": 0,
    "matchScore": 0,
    "source": "estimated",
    "stats": {
      "gpm": 337.9,
      "xpm": 401.7,
      "kda": 3,
      "lane_eff": 39.1,
      "hero_pool": 18.7,
      "assists": 24,
      "obs_placed": 14.4,
      "sen_placed": 9.7,
      "obs_denied": 60.1,
      "stacks": 5.1
    }
  },
  {
    "id": "KuroKy",
    "name": "KuroKy",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI2",
    "team": "Na'Vi",
    "account_id": null,
    "matched_name": null,
    "matchCount": 0,
    "matchScore": 0,
    "source": "estimated",
    "stats": {
      "gpm": 220.1,
      "xpm": 222.3,
      "kda": 2.3,
      "lane_eff": 25.4,
      "hero_pool": 16.5,
      "assists": 13.4,
      "obs_placed": 10.8,
      "sen_placed": 6.3,
      "obs_denied": 52.1,
      "stacks": 3.9
    }
  },
  {
    "id": 89871557,
    "name": "Mushi",
    "allowedPos": [
      1,
      2
    ],
    "ti": "TI2",
    "team": "Zenith",
    "account_id": 89871557,
    "matched_name": "mushi",
    "matchCount": 18,
    "matchScore": 100,
    "source": "api",
    "stats": {
      "gpm": 506.3,
      "xpm": 551.2,
      "kda": 3.6,
      "lane_eff": 54,
      "hero_pool": 8,
      "assists": 7.4,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1
    }
  },
  {
    "id": "XtiNcT",
    "name": "XtiNcT",
    "allowedPos": [
      1
    ],
    "ti": "TI2",
    "team": "Zenith",
    "account_id": null,
    "matched_name": null,
    "matchCount": 0,
    "matchScore": 0,
    "source": "estimated",
    "stats": {
      "gpm": 649.6,
      "xpm": 697.6,
      "kda": 3.7,
      "lane_eff": 55.6,
      "hero_pool": 10,
      "assists": 7.8,
      "obs_placed": 1.9,
      "sen_placed": 1,
      "obs_denied": 37,
      "stacks": 1
    }
  },
  {
    "id": "ky.xY",
    "name": "ky.xY",
    "allowedPos": [
      3
    ],
    "ti": "TI2",
    "team": "Zenith",
    "account_id": null,
    "matched_name": null,
    "matchCount": 0,
    "matchScore": 0,
    "source": "estimated",
    "stats": {
      "gpm": 357,
      "xpm": 416.5,
      "kda": 2.6,
      "lane_eff": 38.3,
      "hero_pool": 15.3,
      "assists": 11.9,
      "obs_placed": 6,
      "sen_placed": 2.6,
      "obs_denied": 44.2,
      "stacks": 6
    }
  },
  {
    "id": 94362277,
    "name": "Yamateh",
    "allowedPos": [
      2
    ],
    "ti": "TI2",
    "team": "Zenith",
    "account_id": 94362277,
    "matched_name": "[Razer]Orange.YamateH",
    "matchCount": 18,
    "matchScore": 85,
    "source": "api",
    "stats": {
      "gpm": 421.3,
      "xpm": 444.7,
      "kda": 3.3,
      "lane_eff": 53,
      "hero_pool": 8,
      "assists": 7.9,
      "obs_placed": 3,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 2
    }
  },
  {
    "id": "Ice",
    "name": "Ice",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI2",
    "team": "Zenith",
    "account_id": null,
    "matched_name": null,
    "matchCount": 0,
    "matchScore": 0,
    "source": "estimated",
    "stats": {
      "gpm": 182.9,
      "xpm": 245.7,
      "kda": 2.1,
      "lane_eff": 30.5,
      "hero_pool": 16.5,
      "assists": 17.4,
      "obs_placed": 11.6,
      "sen_placed": 5.7,
      "obs_denied": 40.3,
      "stacks": 3.9
    }
  },
  {
    "id": "Sylar",
    "name": "Sylar",
    "allowedPos": [
      1
    ],
    "ti": "TI2",
    "team": "LGD",
    "account_id": null,
    "matched_name": null,
    "matchCount": 0,
    "matchScore": 0,
    "source": "estimated",
    "stats": {
      "gpm": 493,
      "xpm": 544,
      "kda": 3,
      "lane_eff": 45.9,
      "hero_pool": 8.5,
      "assists": 6.8,
      "obs_placed": 1.7,
      "sen_placed": 1,
      "obs_denied": 35.7,
      "stacks": 1
    }
  },
  {
    "id": "xiao8",
    "name": "xiao8",
    "allowedPos": [
      3,
      4
    ],
    "ti": "TI2",
    "team": "LGD",
    "account_id": null,
    "matched_name": null,
    "matchCount": 0,
    "matchScore": 0,
    "source": "estimated",
    "stats": {
      "gpm": 432.6,
      "xpm": 445.9,
      "kda": 3.3,
      "lane_eff": 43.7,
      "hero_pool": 15.3,
      "assists": 14.4,
      "obs_placed": 6.4,
      "sen_placed": 3.3,
      "obs_denied": 50.4,
      "stacks": 6
    }
  },
  {
    "id": "Yao",
    "name": "Yao",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI2",
    "team": "LGD",
    "account_id": null,
    "matched_name": null,
    "matchCount": 0,
    "matchScore": 0,
    "source": "estimated",
    "stats": {
      "gpm": 238.7,
      "xpm": 269.1,
      "kda": 1.9,
      "lane_eff": 35.7,
      "hero_pool": 16.5,
      "assists": 14.7,
      "obs_placed": 8.3,
      "sen_placed": 8.1,
      "obs_denied": 48.2,
      "stacks": 3.9
    }
  },
  {
    "id": "DD",
    "name": "DD",
    "allowedPos": [
      2
    ],
    "ti": "TI2",
    "team": "LGD",
    "account_id": null,
    "matched_name": null,
    "matchCount": 0,
    "matchScore": 0,
    "source": "estimated",
    "stats": {
      "gpm": 397.6,
      "xpm": 364.8,
      "kda": 2.7,
      "lane_eff": 31.3,
      "hero_pool": 10.5,
      "assists": 6.1,
      "obs_placed": 2.3,
      "sen_placed": 1,
      "obs_denied": 34.8,
      "stacks": 1.3
    }
  },
  {
    "id": "DDC",
    "name": "DDC",
    "allowedPos": [
      5
    ],
    "ti": "TI2",
    "team": "LGD",
    "account_id": null,
    "matched_name": null,
    "matchCount": 0,
    "matchScore": 0,
    "source": "estimated",
    "stats": {
      "gpm": 229.5,
      "xpm": 293.3,
      "kda": 2.4,
      "lane_eff": 35.7,
      "hero_pool": 17,
      "assists": 20.4,
      "obs_placed": 15.3,
      "sen_placed": 11.9,
      "obs_denied": 59.5,
      "stacks": 3.4
    }
  },
  {
    "id": 100883708,
    "name": "Mushi",
    "allowedPos": [
      1,
      2
    ],
    "ti": "TI2",
    "team": "Orange",
    "account_id": 100883708,
    "matched_name": "凯瑞王",
    "matchCount": 17,
    "matchScore": 95,
    "source": "api",
    "stats": {
      "gpm": 229.1,
      "xpm": 242.9,
      "kda": 2.5,
      "lane_eff": 54,
      "hero_pool": 8,
      "assists": 8.9,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1
    }
  },
  {
    "id": "Ohaiyo",
    "name": "Ohaiyo",
    "allowedPos": [
      3,
      4
    ],
    "ti": "TI2",
    "team": "Orange",
    "account_id": null,
    "matched_name": null,
    "matchCount": 0,
    "matchScore": 0,
    "source": "estimated",
    "stats": {
      "gpm": 256.2,
      "xpm": 328.3,
      "kda": 2.2,
      "lane_eff": 35.6,
      "hero_pool": 15.3,
      "assists": 8.5,
      "obs_placed": 4.7,
      "sen_placed": 2.2,
      "obs_denied": 41.1,
      "stacks": 6
    }
  },
  {
    "id": "XtiNcT",
    "name": "XtiNcT",
    "allowedPos": [
      1
    ],
    "ti": "TI2",
    "team": "Orange",
    "account_id": null,
    "matched_name": null,
    "matchCount": 0,
    "matchScore": 0,
    "source": "estimated",
    "stats": {
      "gpm": 649.6,
      "xpm": 697.6,
      "kda": 3.7,
      "lane_eff": 55.6,
      "hero_pool": 10,
      "assists": 7.8,
      "obs_placed": 1.9,
      "sen_placed": 1,
      "obs_denied": 37,
      "stacks": 1
    }
  },
  {
    "id": "Ice",
    "name": "Ice",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI2",
    "team": "Orange",
    "account_id": null,
    "matched_name": null,
    "matchCount": 0,
    "matchScore": 0,
    "source": "estimated",
    "stats": {
      "gpm": 182.9,
      "xpm": 245.7,
      "kda": 2.1,
      "lane_eff": 30.5,
      "hero_pool": 16.5,
      "assists": 17.4,
      "obs_placed": 11.6,
      "sen_placed": 5.7,
      "obs_denied": 40.3,
      "stacks": 3.9
    }
  },
  {
    "id": "Winter",
    "name": "Winter",
    "allowedPos": [
      5
    ],
    "ti": "TI2",
    "team": "Orange",
    "account_id": null,
    "matched_name": null,
    "matchCount": 0,
    "matchScore": 0,
    "source": "estimated",
    "stats": {
      "gpm": 229.5,
      "xpm": 293.3,
      "kda": 2.4,
      "lane_eff": 35.7,
      "hero_pool": 17,
      "assists": 20.4,
      "obs_placed": 15.3,
      "sen_placed": 11.9,
      "obs_denied": 59.5,
      "stacks": 3.4
    }
  },
  {
    "id": 76482434,
    "name": "AdmiralBulldog",
    "allowedPos": [
      1,
      3
    ],
    "ti": "TI3",
    "team": "Alliance",
    "account_id": 76482434,
    "matched_name": "AdmiralBulldog",
    "matchCount": 26,
    "matchScore": 100,
    "source": "api",
    "stats": {
      "gpm": 484.8,
      "xpm": 500.2,
      "kda": 4,
      "lane_eff": 54,
      "hero_pool": 6,
      "assists": 9.8,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1
    }
  },
  {
    "id": 41288955,
    "name": "Akke",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI3",
    "team": "Alliance",
    "account_id": 41288955,
    "matched_name": "Akke",
    "matchCount": 27,
    "matchScore": 100,
    "source": "api",
    "stats": {
      "gpm": 253.1,
      "xpm": 267.9,
      "kda": 3.7,
      "lane_eff": 43,
      "hero_pool": 7,
      "assists": 9.5,
      "obs_placed": 14,
      "sen_placed": 10,
      "obs_denied": 66,
      "stacks": 6
    }
  },
  {
    "id": "EGM",
    "name": "EGM",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI3",
    "team": "Alliance",
    "account_id": null,
    "matched_name": null,
    "matchCount": 0,
    "matchScore": 0,
    "source": "estimated",
    "stats": {
      "gpm": 269.7,
      "xpm": 347.1,
      "kda": 2.8,
      "lane_eff": 40,
      "hero_pool": 20.9,
      "assists": 21.3,
      "obs_placed": 13.9,
      "sen_placed": 10.1,
      "obs_denied": 68,
      "stacks": 6.3
    }
  },
  {
    "id": 41231571,
    "name": "s4",
    "allowedPos": [
      2,
      3
    ],
    "ti": "TI3",
    "team": "Alliance",
    "account_id": 41231571,
    "matched_name": "Carl",
    "matchCount": 26,
    "matchScore": 95,
    "source": "api",
    "stats": {
      "gpm": 404.6,
      "xpm": 461.5,
      "kda": 4.5,
      "lane_eff": 53,
      "hero_pool": 13,
      "assists": 10.3,
      "obs_placed": 3,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 2
    }
  },
  {
    "id": "Loda",
    "name": "Loda",
    "allowedPos": [
      1
    ],
    "ti": "TI3",
    "team": "Alliance",
    "account_id": null,
    "matched_name": null,
    "matchCount": 0,
    "matchScore": 0,
    "source": "estimated",
    "stats": {
      "gpm": 597.4,
      "xpm": 582.4,
      "kda": 3.8,
      "lane_eff": 52.4,
      "hero_pool": 8.5,
      "assists": 8.2,
      "obs_placed": 1.8,
      "sen_placed": 1.1,
      "obs_denied": 40.7,
      "stacks": 1
    }
  },
  {
    "id": 70388657,
    "name": "Dendi",
    "allowedPos": [
      2
    ],
    "ti": "TI3",
    "team": "Na'Vi",
    "account_id": 70388657,
    "matched_name": "Snake master",
    "matchCount": 31,
    "matchScore": 95,
    "source": "api",
    "stats": {
      "gpm": 416.3,
      "xpm": 464.8,
      "kda": 3.8,
      "lane_eff": 53,
      "hero_pool": 15,
      "assists": 7.9,
      "obs_placed": 3,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 2
    }
  },
  {
    "id": "XBOCT",
    "name": "XBOCT",
    "allowedPos": [
      1
    ],
    "ti": "TI3",
    "team": "Na'Vi",
    "account_id": null,
    "matched_name": null,
    "matchCount": 0,
    "matchScore": 0,
    "source": "estimated",
    "stats": {
      "gpm": 469.8,
      "xpm": 492.8,
      "kda": 2.6,
      "lane_eff": 37.3,
      "hero_pool": 6.5,
      "assists": 4.9,
      "obs_placed": 1.1,
      "sen_placed": 1,
      "obs_denied": 33.2,
      "stacks": 1
    }
  },
  {
    "id": 87278757,
    "name": "Puppey",
    "allowedPos": [
      5
    ],
    "ti": "TI3",
    "team": "Na'Vi",
    "account_id": 87278757,
    "matched_name": "Puppey",
    "matchCount": 31,
    "matchScore": 100,
    "source": "api",
    "stats": {
      "gpm": 262.6,
      "xpm": 269.1,
      "kda": 2.6,
      "lane_eff": 42,
      "hero_pool": 13,
      "assists": 9.4,
      "obs_placed": 18,
      "sen_placed": 14,
      "obs_denied": 70,
      "stacks": 4
    }
  },
  {
    "id": "KuroKy",
    "name": "KuroKy",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI3",
    "team": "Na'Vi",
    "account_id": null,
    "matched_name": null,
    "matchCount": 0,
    "matchScore": 0,
    "source": "estimated",
    "stats": {
      "gpm": 232.5,
      "xpm": 253.5,
      "kda": 2.6,
      "lane_eff": 32.3,
      "hero_pool": 14.3,
      "assists": 18.7,
      "obs_placed": 10.5,
      "sen_placed": 6.5,
      "obs_denied": 56.1,
      "stacks": 4.5
    }
  },
  {
    "id": "Funn1k",
    "name": "Funn1k",
    "allowedPos": [
      3,
      4
    ],
    "ti": "TI3",
    "team": "Na'Vi",
    "account_id": null,
    "matched_name": null,
    "matchCount": 0,
    "matchScore": 0,
    "source": "estimated",
    "stats": {
      "gpm": 344.4,
      "xpm": 387.1,
      "kda": 2.3,
      "lane_eff": 32.9,
      "hero_pool": 12.6,
      "assists": 9.4,
      "obs_placed": 4.5,
      "sen_placed": 1.8,
      "obs_denied": 30.2,
      "stacks": 6
    }
  },
  {
    "id": 89871557,
    "name": "Mushi",
    "allowedPos": [
      1,
      2
    ],
    "ti": "TI3",
    "team": "Orange",
    "account_id": 89871557,
    "matched_name": "mushi",
    "matchCount": 29,
    "matchScore": 100,
    "source": "api",
    "stats": {
      "gpm": 430.2,
      "xpm": 451.2,
      "kda": 3.8,
      "lane_eff": 54,
      "hero_pool": 19,
      "assists": 9.5,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1
    }
  },
  {
    "id": "Ohaiyo",
    "name": "Ohaiyo",
    "allowedPos": [
      3,
      4
    ],
    "ti": "TI3",
    "team": "Orange",
    "account_id": null,
    "matched_name": null,
    "matchCount": 0,
    "matchScore": 0,
    "source": "estimated",
    "stats": {
      "gpm": 268.8,
      "xpm": 357.7,
      "kda": 2.5,
      "lane_eff": 27.5,
      "hero_pool": 12.6,
      "assists": 11.1,
      "obs_placed": 4.1,
      "sen_placed": 2,
      "obs_denied": 39.5,
      "stacks": 6
    }
  },
  {
    "id": "XtiNcT",
    "name": "XtiNcT",
    "allowedPos": [
      1
    ],
    "ti": "TI3",
    "team": "Orange",
    "account_id": null,
    "matched_name": null,
    "matchCount": 0,
    "matchScore": 0,
    "source": "estimated",
    "stats": {
      "gpm": 655.4,
      "xpm": 710.4,
      "kda": 3.8,
      "lane_eff": 57.8,
      "hero_pool": 10.5,
      "assists": 8.2,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 40.7,
      "stacks": 1
    }
  },
  {
    "id": "ky.xY",
    "name": "ky.xY",
    "allowedPos": [
      2,
      3
    ],
    "ti": "TI3",
    "team": "Orange",
    "account_id": null,
    "matched_name": null,
    "matchCount": 0,
    "matchScore": 0,
    "source": "estimated",
    "stats": {
      "gpm": 487.2,
      "xpm": 569.6,
      "kda": 3.4,
      "lane_eff": 49.3,
      "hero_pool": 13.3,
      "assists": 9.7,
      "obs_placed": 3,
      "sen_placed": 1,
      "obs_denied": 45.3,
      "stacks": 2.1
    }
  },
  {
    "id": "Net",
    "name": "Net",
    "allowedPos": [
      5
    ],
    "ti": "TI3",
    "team": "Orange",
    "account_id": null,
    "matched_name": null,
    "matchCount": 0,
    "matchScore": 0,
    "source": "estimated",
    "stats": {
      "gpm": 243,
      "xpm": 327.8,
      "kda": 2.8,
      "lane_eff": 44.1,
      "hero_pool": 22,
      "assists": 20.4,
      "obs_placed": 16.2,
      "sen_placed": 13.3,
      "obs_denied": 70,
      "stacks": 4.2
    }
  },
  {
    "id": 88508515,
    "name": "Hao",
    "allowedPos": [
      1
    ],
    "ti": "TI3",
    "team": "TongFu",
    "account_id": 88508515,
    "matched_name": "Hao",
    "matchCount": 26,
    "matchScore": 100,
    "source": "api",
    "stats": {
      "gpm": 514.2,
      "xpm": 503.5,
      "kda": 3.9,
      "lane_eff": 54,
      "hero_pool": 10,
      "assists": 9.6,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1
    }
  },
  {
    "id": 100883708,
    "name": "Mu",
    "allowedPos": [
      2
    ],
    "ti": "TI3",
    "team": "TongFu",
    "account_id": 100883708,
    "matched_name": "凯瑞王",
    "matchCount": 25,
    "matchScore": 95,
    "source": "api",
    "stats": {
      "gpm": 213.4,
      "xpm": 234.3,
      "kda": 2.7,
      "lane_eff": 53,
      "hero_pool": 9,
      "assists": 8.8,
      "obs_placed": 3,
      "sen_placed": 1,
      "obs_denied": 44,
      "stacks": 2
    }
  },
  {
    "id": "SanSheng",
    "name": "SanSheng",
    "allowedPos": [
      5
    ],
    "ti": "TI3",
    "team": "TongFu",
    "account_id": null,
    "matched_name": null,
    "matchCount": 0,
    "matchScore": 0,
    "source": "estimated",
    "stats": {
      "gpm": 243,
      "xpm": 327.8,
      "kda": 2.8,
      "lane_eff": 44.1,
      "hero_pool": 22,
      "assists": 20.4,
      "obs_placed": 16.2,
      "sen_placed": 13.3,
      "obs_denied": 70,
      "stacks": 4.2
    }
  },
  {
    "id": "Banana",
    "name": "Banana",
    "allowedPos": [
      4
    ],
    "ti": "TI3",
    "team": "TongFu",
    "account_id": null,
    "matched_name": null,
    "matchCount": 0,
    "matchScore": 0,
    "source": "estimated",
    "stats": {
      "gpm": 288.3,
      "xpm": 393.9,
      "kda": 3.4,
      "lane_eff": 37.4,
      "hero_pool": 20.9,
      "assists": 22.7,
      "obs_placed": 15.5,
      "sen_placed": 8.9,
      "obs_denied": 64,
      "stacks": 6.3
    }
  },
  {
    "id": "KingJ",
    "name": "KingJ",
    "allowedPos": [
      3
    ],
    "ti": "TI3",
    "team": "TongFu",
    "account_id": null,
    "matched_name": null,
    "matchCount": 0,
    "matchScore": 0,
    "source": "estimated",
    "stats": {
      "gpm": 243.6,
      "xpm": 298.9,
      "kda": 1.9,
      "lane_eff": 30.2,
      "hero_pool": 12.6,
      "assists": 10.2,
      "obs_placed": 5.3,
      "sen_placed": 2.4,
      "obs_denied": 42.6,
      "stacks": 6
    }
  },
  {
    "id": "Ferrari_430",
    "name": "Ferrari_430",
    "allowedPos": [
      2
    ],
    "ti": "TI3",
    "team": "iG",
    "account_id": null,
    "matched_name": null,
    "matchCount": 0,
    "matchScore": 0,
    "source": "estimated",
    "stats": {
      "gpm": 498.4,
      "xpm": 595.2,
      "kda": 3.6,
      "lane_eff": 53.5,
      "hero_pool": 14.7,
      "assists": 10.9,
      "obs_placed": 3.4,
      "sen_placed": 1,
      "obs_denied": 40,
      "stacks": 1.9
    }
  },
  {
    "id": "Faith",
    "name": "Faith",
    "allowedPos": [
      5
    ],
    "ti": "TI3",
    "team": "iG",
    "account_id": null,
    "matched_name": null,
    "matchCount": 0,
    "matchScore": 0,
    "source": "estimated",
    "stats": {
      "gpm": 256.5,
      "xpm": 362.3,
      "kda": 2.4,
      "lane_eff": 39.9,
      "hero_pool": 21,
      "assists": 20.4,
      "obs_placed": 17.1,
      "sen_placed": 14.7,
      "obs_denied": 59.5,
      "stacks": 3.8
    }
  },
  {
    "id": "YYF",
    "name": "YYF",
    "allowedPos": [
      3
    ],
    "ti": "TI3",
    "team": "iG",
    "account_id": null,
    "matched_name": null,
    "matchCount": 0,
    "matchScore": 0,
    "source": "estimated",
    "stats": {
      "gpm": 256.2,
      "xpm": 328.3,
      "kda": 2.2,
      "lane_eff": 35.6,
      "hero_pool": 15.3,
      "assists": 8.5,
      "obs_placed": 4.7,
      "sen_placed": 2.2,
      "obs_denied": 41.1,
      "stacks": 6
    }
  },
  {
    "id": 90137663,
    "name": "Zhou",
    "allowedPos": [
      1
    ],
    "ti": "TI3",
    "team": "iG",
    "account_id": 90137663,
    "matched_name": "Zhou",
    "matchCount": 22,
    "matchScore": 100,
    "source": "api",
    "stats": {
      "gpm": 437.1,
      "xpm": 438.4,
      "kda": 2.4,
      "lane_eff": 54,
      "hero_pool": 10,
      "assists": 7.2,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1
    }
  },
  {
    "id": "ChuaN",
    "name": "ChuaN",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI3",
    "team": "iG",
    "account_id": null,
    "matched_name": null,
    "matchCount": 0,
    "matchScore": 0,
    "source": "estimated",
    "stats": {
      "gpm": 294.5,
      "xpm": 409.5,
      "kda": 2.6,
      "lane_eff": 40.9,
      "hero_pool": 23.1,
      "assists": 18.7,
      "obs_placed": 13.3,
      "sen_placed": 10.5,
      "obs_denied": 56.1,
      "stacks": 5.7
    }
  },
  {
    "id": "Hao",
    "name": "Hao",
    "allowedPos": [
      1
    ],
    "ti": "TI4",
    "team": "Newbee",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 591.6,
      "xpm": 569.6,
      "kda": 3.7,
      "lane_eff": 50.2,
      "hero_pool": 11,
      "assists": 7.8,
      "obs_placed": 2.3,
      "sen_placed": 1,
      "obs_denied": 37,
      "stacks": 1.1
    }
  },
  {
    "id": "Mu",
    "name": "Mu",
    "allowedPos": [
      2
    ],
    "ti": "TI4",
    "team": "Newbee",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 375.2,
      "xpm": 505.6,
      "kda": 2.3,
      "lane_eff": 38.7,
      "hero_pool": 11.9,
      "assists": 6.7,
      "obs_placed": 2.4,
      "sen_placed": 1,
      "obs_denied": 32.1,
      "stacks": 1.7
    }
  },
  {
    "id": "SanSheng",
    "name": "SanSheng",
    "allowedPos": [
      5
    ],
    "ti": "TI4",
    "team": "Newbee",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 256.5,
      "xpm": 362.3,
      "kda": 2.4,
      "lane_eff": 39.9,
      "hero_pool": 21,
      "assists": 20.4,
      "obs_placed": 17.1,
      "sen_placed": 14.7,
      "obs_denied": 59.5,
      "stacks": 3.8
    }
  },
  {
    "id": "xiao8",
    "name": "xiao8",
    "allowedPos": [
      3,
      4
    ],
    "ti": "TI4",
    "team": "Newbee",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 457.8,
      "xpm": 504.7,
      "kda": 2.9,
      "lane_eff": 41,
      "hero_pool": 15.3,
      "assists": 15.3,
      "obs_placed": 7.2,
      "sen_placed": 2.9,
      "obs_denied": 47.3,
      "stacks": 6
    }
  },
  {
    "id": "Banana",
    "name": "Banana",
    "allowedPos": [
      4
    ],
    "ti": "TI4",
    "team": "Newbee",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 300.7,
      "xpm": 425.1,
      "kda": 2.8,
      "lane_eff": 44.3,
      "hero_pool": 18.7,
      "assists": 21.3,
      "obs_placed": 15.3,
      "sen_placed": 9.1,
      "obs_denied": 68,
      "stacks": 5.1
    }
  },
  {
    "id": "Sylar",
    "name": "Sylar",
    "allowedPos": [
      1
    ],
    "ti": "TI4",
    "team": "Vici Gaming",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 330.6,
      "xpm": 377.6,
      "kda": 2.1,
      "lane_eff": 34,
      "hero_pool": 6.5,
      "assists": 5.4,
      "obs_placed": 1.4,
      "sen_placed": 1,
      "obs_denied": 30.7,
      "stacks": 1
    }
  },
  {
    "id": "Super",
    "name": "Super",
    "allowedPos": [
      2
    ],
    "ti": "TI4",
    "team": "Vici Gaming",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 576.8,
      "xpm": 582.4,
      "kda": 4,
      "lane_eff": 51.4,
      "hero_pool": 11.9,
      "assists": 10.3,
      "obs_placed": 2.7,
      "sen_placed": 1.1,
      "obs_denied": 42.7,
      "stacks": 1.7
    }
  },
  {
    "id": "rotk",
    "name": "rotk",
    "allowedPos": [
      3,
      4
    ],
    "ti": "TI4",
    "team": "Vici Gaming",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 268.8,
      "xpm": 357.7,
      "kda": 2.5,
      "lane_eff": 27.5,
      "hero_pool": 12.6,
      "assists": 11.1,
      "obs_placed": 4.1,
      "sen_placed": 2,
      "obs_denied": 39.5,
      "stacks": 6
    }
  },
  {
    "id": "Fenrir",
    "name": "Fenrir",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI4",
    "team": "Vici Gaming",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 189.1,
      "xpm": 261.3,
      "kda": 2.3,
      "lane_eff": 34,
      "hero_pool": 18.7,
      "assists": 13.4,
      "obs_placed": 9.4,
      "sen_placed": 7.3,
      "obs_denied": 52.1,
      "stacks": 5.1
    }
  },
  {
    "id": "fy",
    "name": "fy",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI4",
    "team": "Vici Gaming",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 263.5,
      "xpm": 331.5,
      "kda": 2.6,
      "lane_eff": 36.6,
      "hero_pool": 18.7,
      "assists": 18.7,
      "obs_placed": 11.9,
      "sen_placed": 8.5,
      "obs_denied": 56.1,
      "stacks": 5.1
    }
  },
  {
    "id": "Fear",
    "name": "Fear",
    "allowedPos": [
      1,
      3
    ],
    "ti": "TI4",
    "team": "EG",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 568.4,
      "xpm": 710.4,
      "kda": 3.3,
      "lane_eff": 57.8,
      "hero_pool": 9,
      "assists": 8.2,
      "obs_placed": 1.7,
      "sen_placed": 1,
      "obs_denied": 47,
      "stacks": 1
    }
  },
  {
    "id": "Arteezy",
    "name": "Arteezy",
    "allowedPos": [
      1
    ],
    "ti": "TI4",
    "team": "EG",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 638,
      "xpm": 672,
      "kda": 3.5,
      "lane_eff": 51.3,
      "hero_pool": 9,
      "assists": 6.8,
      "obs_placed": 2.2,
      "sen_placed": 1.1,
      "obs_denied": 42,
      "stacks": 1
    }
  },
  {
    "id": "Universe",
    "name": "Universe",
    "allowedPos": [
      3
    ],
    "ti": "TI4",
    "team": "EG",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 432.6,
      "xpm": 445.9,
      "kda": 3.3,
      "lane_eff": 43.7,
      "hero_pool": 15.3,
      "assists": 14.4,
      "obs_placed": 6.4,
      "sen_placed": 3.3,
      "obs_denied": 50.4,
      "stacks": 6
    }
  },
  {
    "id": "Zai",
    "name": "Zai",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI4",
    "team": "EG",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 313.1,
      "xpm": 339.3,
      "kda": 3.2,
      "lane_eff": 38.3,
      "hero_pool": 23.1,
      "assists": 20,
      "obs_placed": 15,
      "sen_placed": 9.3,
      "obs_denied": 71.9,
      "stacks": 5.7
    }
  },
  {
    "id": "ppd",
    "name": "ppd",
    "allowedPos": [
      5
    ],
    "ti": "TI4",
    "team": "EG",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 270,
      "xpm": 293.3,
      "kda": 2.8,
      "lane_eff": 35.7,
      "hero_pool": 20,
      "assists": 20.4,
      "obs_placed": 18,
      "sen_placed": 11.9,
      "obs_denied": 70,
      "stacks": 3.4
    }
  },
  {
    "id": "BurNIng",
    "name": "BurNIng",
    "allowedPos": [
      1
    ],
    "ti": "TI4",
    "team": "DK",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 527.8,
      "xpm": 620.8,
      "kda": 3.6,
      "lane_eff": 58.9,
      "hero_pool": 8.5,
      "assists": 7.3,
      "obs_placed": 1.9,
      "sen_placed": 1,
      "obs_denied": 45.8,
      "stacks": 1
    }
  },
  {
    "id": "Mushi",
    "name": "Mushi",
    "allowedPos": [
      2
    ],
    "ti": "TI4",
    "team": "DK",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 487.2,
      "xpm": 569.6,
      "kda": 3.4,
      "lane_eff": 49.3,
      "hero_pool": 13.3,
      "assists": 9.7,
      "obs_placed": 3,
      "sen_placed": 1,
      "obs_denied": 45.3,
      "stacks": 2.1
    }
  },
  {
    "id": "iceiceice",
    "name": "iceiceice",
    "allowedPos": [
      3,
      4
    ],
    "ti": "TI4",
    "team": "DK",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 357,
      "xpm": 416.5,
      "kda": 2.6,
      "lane_eff": 38.3,
      "hero_pool": 15.3,
      "assists": 11.9,
      "obs_placed": 6,
      "sen_placed": 2.6,
      "obs_denied": 44.2,
      "stacks": 6
    }
  },
  {
    "id": "LaNm",
    "name": "LaNm",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI4",
    "team": "DK",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 344.1,
      "xpm": 417.3,
      "kda": 3.2,
      "lane_eff": 42.6,
      "hero_pool": 20.9,
      "assists": 20,
      "obs_placed": 12.2,
      "sen_placed": 11.3,
      "obs_denied": 71.9,
      "stacks": 6.3
    }
  },
  {
    "id": "MMY",
    "name": "MMY",
    "allowedPos": [
      5
    ],
    "ti": "TI4",
    "team": "DK",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 229.5,
      "xpm": 293.3,
      "kda": 2.4,
      "lane_eff": 35.7,
      "hero_pool": 17,
      "assists": 20.4,
      "obs_placed": 15.3,
      "sen_placed": 11.9,
      "obs_denied": 59.5,
      "stacks": 3.4
    }
  },
  {
    "id": "EternalEnvy",
    "name": "EternalEnvy",
    "allowedPos": [
      1,
      2
    ],
    "ti": "TI4",
    "team": "Cloud9",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 551,
      "xpm": 672,
      "kda": 3,
      "lane_eff": 51.3,
      "hero_pool": 10.5,
      "assists": 6.8,
      "obs_placed": 1.9,
      "sen_placed": 1.1,
      "obs_denied": 35.7,
      "stacks": 1
    }
  },
  {
    "id": "FATA-",
    "name": "FATA-",
    "allowedPos": [
      2
    ],
    "ti": "TI4",
    "team": "Cloud9",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 554.4,
      "xpm": 723.2,
      "kda": 3.6,
      "lane_eff": 58.8,
      "hero_pool": 13.3,
      "assists": 10.9,
      "obs_placed": 2.8,
      "sen_placed": 1.1,
      "obs_denied": 40,
      "stacks": 2.1
    }
  },
  {
    "id": "Bone7",
    "name": "Bone7",
    "allowedPos": [
      3
    ],
    "ti": "TI4",
    "team": "Cloud9",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 432.6,
      "xpm": 445.9,
      "kda": 3.3,
      "lane_eff": 43.7,
      "hero_pool": 15.3,
      "assists": 14.4,
      "obs_placed": 6.4,
      "sen_placed": 3.3,
      "obs_denied": 50.4,
      "stacks": 6
    }
  },
  {
    "id": "Aui_2000",
    "name": "Aui_2000",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI4",
    "team": "Cloud9",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 344.1,
      "xpm": 417.3,
      "kda": 3.2,
      "lane_eff": 42.6,
      "hero_pool": 20.9,
      "assists": 20,
      "obs_placed": 12.2,
      "sen_placed": 11.3,
      "obs_denied": 71.9,
      "stacks": 6.3
    }
  },
  {
    "id": "pieliedie",
    "name": "pieliedie",
    "allowedPos": [
      5
    ],
    "ti": "TI4",
    "team": "Cloud9",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 270,
      "xpm": 293.3,
      "kda": 2.8,
      "lane_eff": 35.7,
      "hero_pool": 20,
      "assists": 20.4,
      "obs_placed": 18,
      "sen_placed": 11.9,
      "obs_denied": 70,
      "stacks": 3.4
    }
  },
  {
    "id": "Fear",
    "name": "Fear",
    "allowedPos": [
      1,
      3
    ],
    "ti": "TI5",
    "team": "EG",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 574.2,
      "xpm": 723.2,
      "kda": 3.4,
      "lane_eff": 59.9,
      "hero_pool": 9.5,
      "assists": 8.7,
      "obs_placed": 1.9,
      "sen_placed": 1.1,
      "obs_denied": 38.2,
      "stacks": 1.1
    }
  },
  {
    "id": "SumaiL",
    "name": "SumaiL",
    "allowedPos": [
      2
    ],
    "ti": "TI5",
    "team": "EG",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 319.2,
      "xpm": 377.6,
      "kda": 2.3,
      "lane_eff": 33.4,
      "hero_pool": 9.1,
      "assists": 6.7,
      "obs_placed": 2.1,
      "sen_placed": 1,
      "obs_denied": 32.1,
      "stacks": 1.5
    }
  },
  {
    "id": "Universe",
    "name": "Universe",
    "allowedPos": [
      3
    ],
    "ti": "TI5",
    "team": "EG",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 445.2,
      "xpm": 475.3,
      "kda": 2.6,
      "lane_eff": 49.1,
      "hero_pool": 18,
      "assists": 12.7,
      "obs_placed": 7.8,
      "sen_placed": 3.1,
      "obs_denied": 48.9,
      "stacks": 6
    }
  },
  {
    "id": "Aui_2000",
    "name": "Aui_2000",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI5",
    "team": "EG",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 263.5,
      "xpm": 331.5,
      "kda": 2.6,
      "lane_eff": 36.6,
      "hero_pool": 18.7,
      "assists": 18.7,
      "obs_placed": 11.9,
      "sen_placed": 8.5,
      "obs_denied": 56.1,
      "stacks": 5.1
    }
  },
  {
    "id": "ppd",
    "name": "ppd",
    "allowedPos": [
      5
    ],
    "ti": "TI5",
    "team": "EG",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 283.5,
      "xpm": 327.8,
      "kda": 2.4,
      "lane_eff": 44.1,
      "hero_pool": 19,
      "assists": 20.4,
      "obs_placed": 18.9,
      "sen_placed": 13.3,
      "obs_denied": 59.5,
      "stacks": 4.2
    }
  },
  {
    "id": "Agressif",
    "name": "Agressif",
    "allowedPos": [
      1
    ],
    "ti": "TI5",
    "team": "CDEC",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 643.8,
      "xpm": 684.8,
      "kda": 3.6,
      "lane_eff": 53.5,
      "hero_pool": 9.5,
      "assists": 7.3,
      "obs_placed": 1.7,
      "sen_placed": 1.1,
      "obs_denied": 45.8,
      "stacks": 1.1
    }
  },
  {
    "id": "Shiki",
    "name": "Shiki",
    "allowedPos": [
      2
    ],
    "ti": "TI5",
    "team": "CDEC",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 330.4,
      "xpm": 403.2,
      "kda": 2.5,
      "lane_eff": 37.6,
      "hero_pool": 10.5,
      "assists": 7.9,
      "obs_placed": 2.5,
      "sen_placed": 1,
      "obs_denied": 26.8,
      "stacks": 1.3
    }
  },
  {
    "id": "Xz",
    "name": "Xz",
    "allowedPos": [
      3,
      4
    ],
    "ti": "TI5",
    "team": "CDEC",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 432.6,
      "xpm": 445.9,
      "kda": 3.3,
      "lane_eff": 43.7,
      "hero_pool": 15.3,
      "assists": 14.4,
      "obs_placed": 6.4,
      "sen_placed": 3.3,
      "obs_denied": 50.4,
      "stacks": 6
    }
  },
  {
    "id": "Q",
    "name": "Q",
    "allowedPos": [
      5
    ],
    "ti": "TI5",
    "team": "CDEC",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 189,
      "xpm": 293.3,
      "kda": 2,
      "lane_eff": 35.7,
      "hero_pool": 14,
      "assists": 20.4,
      "obs_placed": 12.6,
      "sen_placed": 11.9,
      "obs_denied": 49,
      "stacks": 3.4
    }
  },
  {
    "id": "Garder",
    "name": "Garder",
    "allowedPos": [
      4
    ],
    "ti": "TI5",
    "team": "CDEC",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 344.1,
      "xpm": 417.3,
      "kda": 3.2,
      "lane_eff": 42.6,
      "hero_pool": 20.9,
      "assists": 20,
      "obs_placed": 12.2,
      "sen_placed": 11.3,
      "obs_denied": 71.9,
      "stacks": 6.3
    }
  },
  {
    "id": "BurNIng",
    "name": "BurNIng",
    "allowedPos": [
      1
    ],
    "ti": "TI5",
    "team": "EHOME",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 533.6,
      "xpm": 633.6,
      "kda": 3.7,
      "lane_eff": 61,
      "hero_pool": 9,
      "assists": 7.8,
      "obs_placed": 2.1,
      "sen_placed": 1.1,
      "obs_denied": 37,
      "stacks": 1
    }
  },
  {
    "id": "Cty",
    "name": "Cty",
    "allowedPos": [
      2
    ],
    "ti": "TI5",
    "team": "EHOME",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 420,
      "xpm": 416,
      "kda": 3.1,
      "lane_eff": 39.8,
      "hero_pool": 9.1,
      "assists": 8.5,
      "obs_placed": 2.3,
      "sen_placed": 1,
      "obs_denied": 37.4,
      "stacks": 1.5
    }
  },
  {
    "id": "LaNm",
    "name": "LaNm",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI5",
    "team": "EHOME",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 263.5,
      "xpm": 331.5,
      "kda": 2.6,
      "lane_eff": 36.6,
      "hero_pool": 18.7,
      "assists": 18.7,
      "obs_placed": 11.9,
      "sen_placed": 8.5,
      "obs_denied": 56.1,
      "stacks": 5.1
    }
  },
  {
    "id": "rotk",
    "name": "rotk",
    "allowedPos": [
      3,
      4
    ],
    "ti": "TI5",
    "team": "EHOME",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 281.4,
      "xpm": 387.1,
      "kda": 1.8,
      "lane_eff": 32.9,
      "hero_pool": 15.3,
      "assists": 9.4,
      "obs_placed": 5.5,
      "sen_placed": 1.8,
      "obs_denied": 38,
      "stacks": 6
    }
  },
  {
    "id": "DDC",
    "name": "DDC",
    "allowedPos": [
      5
    ],
    "ti": "TI5",
    "team": "EHOME",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 270,
      "xpm": 293.3,
      "kda": 2.8,
      "lane_eff": 35.7,
      "hero_pool": 20,
      "assists": 20.4,
      "obs_placed": 18,
      "sen_placed": 11.9,
      "obs_denied": 70,
      "stacks": 3.4
    }
  },
  {
    "id": "Hao",
    "name": "Hao",
    "allowedPos": [
      1
    ],
    "ti": "TI5",
    "team": "Vici Gaming",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 597.4,
      "xpm": 582.4,
      "kda": 3.8,
      "lane_eff": 52.4,
      "hero_pool": 8.5,
      "assists": 8.2,
      "obs_placed": 1.8,
      "sen_placed": 1.1,
      "obs_denied": 40.7,
      "stacks": 1
    }
  },
  {
    "id": "Super",
    "name": "Super",
    "allowedPos": [
      2
    ],
    "ti": "TI5",
    "team": "Vici Gaming",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 588,
      "xpm": 608,
      "kda": 3.1,
      "lane_eff": 55.7,
      "hero_pool": 13.3,
      "assists": 8.5,
      "obs_placed": 3.2,
      "sen_placed": 1,
      "obs_denied": 37.4,
      "stacks": 2.1
    }
  },
  {
    "id": "iceiceice",
    "name": "iceiceice",
    "allowedPos": [
      3,
      4
    ],
    "ti": "TI5",
    "team": "Vici Gaming",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 243.6,
      "xpm": 298.9,
      "kda": 1.9,
      "lane_eff": 30.2,
      "hero_pool": 12.6,
      "assists": 10.2,
      "obs_placed": 5.3,
      "sen_placed": 2.4,
      "obs_denied": 42.6,
      "stacks": 6
    }
  },
  {
    "id": "Fenrir",
    "name": "Fenrir",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI5",
    "team": "Vici Gaming",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 201.5,
      "xpm": 292.5,
      "kda": 2.6,
      "lane_eff": 28,
      "hero_pool": 16.5,
      "assists": 18.7,
      "obs_placed": 9.1,
      "sen_placed": 7.5,
      "obs_denied": 56.1,
      "stacks": 3.9
    }
  },
  {
    "id": "fy",
    "name": "fy",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI5",
    "team": "Vici Gaming",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 182.9,
      "xpm": 245.7,
      "kda": 2.1,
      "lane_eff": 30.5,
      "hero_pool": 16.5,
      "assists": 17.4,
      "obs_placed": 11.6,
      "sen_placed": 5.7,
      "obs_denied": 40.3,
      "stacks": 3.9
    }
  },
  {
    "id": "Sylar",
    "name": "Sylar",
    "allowedPos": [
      1
    ],
    "ti": "TI5",
    "team": "LGD",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 336.4,
      "xpm": 390.4,
      "kda": 2.2,
      "lane_eff": 36.2,
      "hero_pool": 7,
      "assists": 5.8,
      "obs_placed": 1.5,
      "sen_placed": 1,
      "obs_denied": 34.4,
      "stacks": 1
    }
  },
  {
    "id": "Maybe",
    "name": "Maybe",
    "allowedPos": [
      2
    ],
    "ti": "TI5",
    "team": "LGD",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 442.4,
      "xpm": 467.2,
      "kda": 2.5,
      "lane_eff": 32.3,
      "hero_pool": 11.9,
      "assists": 7.9,
      "obs_placed": 2.2,
      "sen_placed": 1,
      "obs_denied": 26.8,
      "stacks": 1.7
    }
  },
  {
    "id": "xiao8",
    "name": "xiao8",
    "allowedPos": [
      3,
      4
    ],
    "ti": "TI5",
    "team": "LGD",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 470.4,
      "xpm": 534.1,
      "kda": 3.2,
      "lane_eff": 46.4,
      "hero_pool": 18,
      "assists": 13.6,
      "obs_placed": 6.6,
      "sen_placed": 2.7,
      "obs_denied": 45.8,
      "stacks": 6
    }
  },
  {
    "id": "Yao",
    "name": "Yao",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI5",
    "team": "LGD",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 182.9,
      "xpm": 245.7,
      "kda": 2.1,
      "lane_eff": 30.5,
      "hero_pool": 16.5,
      "assists": 17.4,
      "obs_placed": 11.6,
      "sen_placed": 5.7,
      "obs_denied": 40.3,
      "stacks": 3.9
    }
  },
  {
    "id": "MMY",
    "name": "MMY",
    "allowedPos": [
      5
    ],
    "ti": "TI5",
    "team": "LGD",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 162,
      "xpm": 224.3,
      "kda": 2,
      "lane_eff": 31.5,
      "hero_pool": 16,
      "assists": 20.4,
      "obs_placed": 10.8,
      "sen_placed": 9.1,
      "obs_denied": 49,
      "stacks": 3
    }
  },
  {
    "id": "shadow",
    "name": "shadow",
    "allowedPos": [
      1
    ],
    "ti": "TI6",
    "team": "Wings Gaming",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 487.2,
      "xpm": 531.2,
      "kda": 2.9,
      "lane_eff": 43.7,
      "hero_pool": 8,
      "assists": 6.3,
      "obs_placed": 1.6,
      "sen_placed": 1,
      "obs_denied": 31.9,
      "stacks": 1
    }
  },
  {
    "id": "bLink",
    "name": "bLink",
    "allowedPos": [
      2
    ],
    "ti": "TI6",
    "team": "Wings Gaming",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 364,
      "xpm": 480,
      "kda": 3.1,
      "lane_eff": 34.5,
      "hero_pool": 10.5,
      "assists": 8.5,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 37.4,
      "stacks": 1.3
    }
  },
  {
    "id": "Faith_bian",
    "name": "Faith_bian",
    "allowedPos": [
      3
    ],
    "ti": "TI6",
    "team": "Wings Gaming",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 331.8,
      "xpm": 357.7,
      "kda": 2,
      "lane_eff": 27.5,
      "hero_pool": 15.3,
      "assists": 11.1,
      "obs_placed": 5.1,
      "sen_placed": 2,
      "obs_denied": 31.7,
      "stacks": 6
    }
  },
  {
    "id": "iceice",
    "name": "iceice",
    "allowedPos": [
      4
    ],
    "ti": "TI6",
    "team": "Wings Gaming",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 201.5,
      "xpm": 292.5,
      "kda": 2.6,
      "lane_eff": 28,
      "hero_pool": 16.5,
      "assists": 18.7,
      "obs_placed": 9.1,
      "sen_placed": 7.5,
      "obs_denied": 56.1,
      "stacks": 3.9
    }
  },
  {
    "id": "y`",
    "name": "y`",
    "allowedPos": [
      5
    ],
    "ti": "TI6",
    "team": "Wings Gaming",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 202.5,
      "xpm": 224.3,
      "kda": 2.4,
      "lane_eff": 31.5,
      "hero_pool": 13,
      "assists": 20.4,
      "obs_placed": 13.5,
      "sen_placed": 9.1,
      "obs_denied": 59.5,
      "stacks": 3
    }
  },
  {
    "id": "Resolut1on",
    "name": "Resolut1on",
    "allowedPos": [
      1
    ],
    "ti": "TI6",
    "team": "Digital Chaos",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 475.6,
      "xpm": 505.6,
      "kda": 2.7,
      "lane_eff": 39.4,
      "hero_pool": 7,
      "assists": 5.4,
      "obs_placed": 1.3,
      "sen_placed": 1,
      "obs_denied": 24.4,
      "stacks": 1
    }
  },
  {
    "id": "w33",
    "name": "w33",
    "allowedPos": [
      2
    ],
    "ti": "TI6",
    "team": "Digital Chaos",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 632.8,
      "xpm": 710.4,
      "kda": 4,
      "lane_eff": 56.7,
      "hero_pool": 14.7,
      "assists": 10.3,
      "obs_placed": 3,
      "sen_placed": 1,
      "obs_denied": 42.7,
      "stacks": 1.9
    }
  },
  {
    "id": "Moo",
    "name": "Moo",
    "allowedPos": [
      3,
      4
    ],
    "ti": "TI6",
    "team": "Digital Chaos",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 331.8,
      "xpm": 357.7,
      "kda": 2,
      "lane_eff": 27.5,
      "hero_pool": 15.3,
      "assists": 11.1,
      "obs_placed": 5.1,
      "sen_placed": 2,
      "obs_denied": 31.7,
      "stacks": 6
    }
  },
  {
    "id": "Saksa",
    "name": "Saksa",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI6",
    "team": "Digital Chaos",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 282.1,
      "xpm": 378.3,
      "kda": 3.2,
      "lane_eff": 46.9,
      "hero_pool": 18.7,
      "assists": 20,
      "obs_placed": 13.6,
      "sen_placed": 10.3,
      "obs_denied": 71.9,
      "stacks": 5.1
    }
  },
  {
    "id": "MiSeRy",
    "name": "MiSeRy",
    "allowedPos": [
      5
    ],
    "ti": "TI6",
    "team": "Digital Chaos",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 175.5,
      "xpm": 258.8,
      "kda": 2.4,
      "lane_eff": 27.3,
      "hero_pool": 15,
      "assists": 20.4,
      "obs_placed": 11.7,
      "sen_placed": 10.5,
      "obs_denied": 59.5,
      "stacks": 2.6
    }
  },
  {
    "id": "Fear",
    "name": "Fear",
    "allowedPos": [
      1,
      3
    ],
    "ti": "TI6",
    "team": "EG",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 580,
      "xpm": 544,
      "kda": 3.5,
      "lane_eff": 45.9,
      "hero_pool": 10,
      "assists": 6.8,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1
    }
  },
  {
    "id": "SumaiL",
    "name": "SumaiL",
    "allowedPos": [
      2
    ],
    "ti": "TI6",
    "team": "EG",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 330.4,
      "xpm": 403.2,
      "kda": 2.5,
      "lane_eff": 37.6,
      "hero_pool": 10.5,
      "assists": 7.9,
      "obs_placed": 2.5,
      "sen_placed": 1,
      "obs_denied": 26.8,
      "stacks": 1.3
    }
  },
  {
    "id": "Universe",
    "name": "Universe",
    "allowedPos": [
      3
    ],
    "ti": "TI6",
    "team": "EG",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 457.8,
      "xpm": 504.7,
      "kda": 2.9,
      "lane_eff": 41,
      "hero_pool": 15.3,
      "assists": 15.3,
      "obs_placed": 7.2,
      "sen_placed": 2.9,
      "obs_denied": 47.3,
      "stacks": 6
    }
  },
  {
    "id": "Zai",
    "name": "Zai",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI6",
    "team": "EG",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 337.9,
      "xpm": 401.7,
      "kda": 3,
      "lane_eff": 39.1,
      "hero_pool": 18.7,
      "assists": 24,
      "obs_placed": 14.4,
      "sen_placed": 9.7,
      "obs_denied": 60.1,
      "stacks": 5.1
    }
  },
  {
    "id": "ppd",
    "name": "ppd",
    "allowedPos": [
      5
    ],
    "ti": "TI6",
    "team": "EG",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 297,
      "xpm": 362.3,
      "kda": 2.8,
      "lane_eff": 39.9,
      "hero_pool": 18,
      "assists": 20.4,
      "obs_placed": 19.8,
      "sen_placed": 14.7,
      "obs_denied": 70,
      "stacks": 3.8
    }
  },
  {
    "id": "Mushi",
    "name": "Mushi",
    "allowedPos": [
      1,
      2
    ],
    "ti": "TI6",
    "team": "Fnatic",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 510.4,
      "xpm": 582.4,
      "kda": 3.3,
      "lane_eff": 52.4,
      "hero_pool": 10,
      "assists": 8.2,
      "obs_placed": 2.1,
      "sen_placed": 1.1,
      "obs_denied": 47,
      "stacks": 1
    }
  },
  {
    "id": "MidOne",
    "name": "MidOne",
    "allowedPos": [
      2
    ],
    "ti": "TI6",
    "team": "Fnatic",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 565.6,
      "xpm": 556.8,
      "kda": 3.8,
      "lane_eff": 47.2,
      "hero_pool": 14.7,
      "assists": 9.1,
      "obs_placed": 3.2,
      "sen_placed": 1,
      "obs_denied": 48,
      "stacks": 1.9
    }
  },
  {
    "id": "Ohaiyo",
    "name": "Ohaiyo",
    "allowedPos": [
      3
    ],
    "ti": "TI6",
    "team": "Fnatic",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 306.6,
      "xpm": 298.9,
      "kda": 2.4,
      "lane_eff": 30.2,
      "hero_pool": 15.3,
      "assists": 10.2,
      "obs_placed": 4.3,
      "sen_placed": 2.4,
      "obs_denied": 34.8,
      "stacks": 6
    }
  },
  {
    "id": "DJ",
    "name": "DJ",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI6",
    "team": "Fnatic",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 207.7,
      "xpm": 308.1,
      "kda": 1.9,
      "lane_eff": 31.4,
      "hero_pool": 18.7,
      "assists": 14.7,
      "obs_placed": 11.1,
      "sen_placed": 6.1,
      "obs_denied": 48.2,
      "stacks": 5.1
    }
  },
  {
    "id": "343",
    "name": "343",
    "allowedPos": [
      5
    ],
    "ti": "TI6",
    "team": "Fnatic",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 162,
      "xpm": 224.3,
      "kda": 2,
      "lane_eff": 31.5,
      "hero_pool": 16,
      "assists": 20.4,
      "obs_placed": 10.8,
      "sen_placed": 9.1,
      "obs_denied": 49,
      "stacks": 3
    }
  },
  {
    "id": "old chicken",
    "name": "old chicken",
    "allowedPos": [
      1
    ],
    "ti": "TI6",
    "team": "EHOME",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 359.6,
      "xpm": 441.6,
      "kda": 2.7,
      "lane_eff": 44.8,
      "hero_pool": 6,
      "assists": 5.4,
      "obs_placed": 1.5,
      "sen_placed": 1,
      "obs_denied": 24.4,
      "stacks": 1
    }
  },
  {
    "id": "old eLeVeN",
    "name": "old eLeVeN",
    "allowedPos": [
      3,
      4
    ],
    "ti": "TI6",
    "team": "EHOME",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 445.2,
      "xpm": 475.3,
      "kda": 2.6,
      "lane_eff": 49.1,
      "hero_pool": 18,
      "assists": 12.7,
      "obs_placed": 7.8,
      "sen_placed": 3.1,
      "obs_denied": 48.9,
      "stacks": 6
    }
  },
  {
    "id": "Fenrir",
    "name": "Fenrir",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI6",
    "team": "EHOME",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 213.9,
      "xpm": 323.7,
      "kda": 2.1,
      "lane_eff": 34.8,
      "hero_pool": 14.3,
      "assists": 17.4,
      "obs_placed": 8.8,
      "sen_placed": 7.7,
      "obs_denied": 40.3,
      "stacks": 4.5
    }
  },
  {
    "id": "LaNm",
    "name": "LaNm",
    "allowedPos": [
      5
    ],
    "ti": "TI6",
    "team": "EHOME",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 243,
      "xpm": 327.8,
      "kda": 2.8,
      "lane_eff": 44.1,
      "hero_pool": 22,
      "assists": 20.4,
      "obs_placed": 16.2,
      "sen_placed": 13.3,
      "obs_denied": 70,
      "stacks": 4.2
    }
  },
  {
    "id": "iceiceice",
    "name": "iceiceice",
    "allowedPos": [
      2
    ],
    "ti": "TI6",
    "team": "EHOME",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 330.4,
      "xpm": 403.2,
      "kda": 2.5,
      "lane_eff": 37.6,
      "hero_pool": 10.5,
      "assists": 7.9,
      "obs_placed": 2.5,
      "sen_placed": 1,
      "obs_denied": 26.8,
      "stacks": 1.3
    }
  },
  {
    "id": "Miracle-",
    "name": "Miracle-",
    "allowedPos": [
      1,
      2
    ],
    "ti": "TI7",
    "team": "Team Liquid",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 504.6,
      "xpm": 569.6,
      "kda": 3.2,
      "lane_eff": 50.2,
      "hero_pool": 9.5,
      "assists": 7.8,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 43.3,
      "stacks": 1.1
    }
  },
  {
    "id": "MATUMBAMAN",
    "name": "MATUMBAMAN",
    "allowedPos": [
      1
    ],
    "ti": "TI7",
    "team": "Team Liquid",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 336.4,
      "xpm": 390.4,
      "kda": 2.2,
      "lane_eff": 36.2,
      "hero_pool": 7,
      "assists": 5.8,
      "obs_placed": 1.5,
      "sen_placed": 1,
      "obs_denied": 34.4,
      "stacks": 1
    }
  },
  {
    "id": "MinD_ContRoL",
    "name": "MinD_ContRoL",
    "allowedPos": [
      3
    ],
    "ti": "TI7",
    "team": "Team Liquid",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 357,
      "xpm": 416.5,
      "kda": 2.6,
      "lane_eff": 38.3,
      "hero_pool": 15.3,
      "assists": 11.9,
      "obs_placed": 6,
      "sen_placed": 2.6,
      "obs_denied": 44.2,
      "stacks": 6
    }
  },
  {
    "id": "GH",
    "name": "GH",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI7",
    "team": "Team Liquid",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 325.5,
      "xpm": 370.5,
      "kda": 2.6,
      "lane_eff": 45.2,
      "hero_pool": 20.9,
      "assists": 18.7,
      "obs_placed": 14.7,
      "sen_placed": 9.5,
      "obs_denied": 56.1,
      "stacks": 6.3
    }
  },
  {
    "id": "KuroKy",
    "name": "KuroKy",
    "allowedPos": [
      5
    ],
    "ti": "TI7",
    "team": "Team Liquid",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 189,
      "xpm": 293.3,
      "kda": 2,
      "lane_eff": 35.7,
      "hero_pool": 14,
      "assists": 20.4,
      "obs_placed": 12.6,
      "sen_placed": 11.9,
      "obs_denied": 49,
      "stacks": 3.4
    }
  },
  {
    "id": "Moogy",
    "name": "Moogy",
    "allowedPos": [
      1
    ],
    "ti": "TI7",
    "team": "Newbee",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 382.8,
      "xpm": 492.8,
      "kda": 2,
      "lane_eff": 37.3,
      "hero_pool": 8,
      "assists": 4.9,
      "obs_placed": 1.4,
      "sen_placed": 1,
      "obs_denied": 26.9,
      "stacks": 1
    }
  },
  {
    "id": "Sccc",
    "name": "Sccc",
    "allowedPos": [
      2
    ],
    "ti": "TI7",
    "team": "Newbee",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 588,
      "xpm": 608,
      "kda": 3.1,
      "lane_eff": 55.7,
      "hero_pool": 13.3,
      "assists": 8.5,
      "obs_placed": 3.2,
      "sen_placed": 1,
      "obs_denied": 37.4,
      "stacks": 2.1
    }
  },
  {
    "id": "Kpii",
    "name": "Kpii",
    "allowedPos": [
      3
    ],
    "ti": "TI7",
    "team": "Newbee",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 369.6,
      "xpm": 445.9,
      "kda": 2.8,
      "lane_eff": 43.7,
      "hero_pool": 18,
      "assists": 14.4,
      "obs_placed": 7.4,
      "sen_placed": 3.3,
      "obs_denied": 58.2,
      "stacks": 6
    }
  },
  {
    "id": "Kaka",
    "name": "Kaka",
    "allowedPos": [
      4
    ],
    "ti": "TI7",
    "team": "Newbee",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 263.5,
      "xpm": 331.5,
      "kda": 2.6,
      "lane_eff": 36.6,
      "hero_pool": 18.7,
      "assists": 18.7,
      "obs_placed": 11.9,
      "sen_placed": 8.5,
      "obs_denied": 56.1,
      "stacks": 5.1
    }
  },
  {
    "id": "Faith",
    "name": "Faith",
    "allowedPos": [
      5
    ],
    "ti": "TI7",
    "team": "Newbee",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 229.5,
      "xpm": 293.3,
      "kda": 2.4,
      "lane_eff": 35.7,
      "hero_pool": 17,
      "assists": 20.4,
      "obs_placed": 15.3,
      "sen_placed": 11.9,
      "obs_denied": 59.5,
      "stacks": 3.4
    }
  },
  {
    "id": "Ame",
    "name": "Ame",
    "allowedPos": [
      1
    ],
    "ti": "TI7",
    "team": "LFY",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 475.6,
      "xpm": 505.6,
      "kda": 2.7,
      "lane_eff": 39.4,
      "hero_pool": 7,
      "assists": 5.4,
      "obs_placed": 1.3,
      "sen_placed": 1,
      "obs_denied": 24.4,
      "stacks": 1
    }
  },
  {
    "id": "Super",
    "name": "Super",
    "allowedPos": [
      2
    ],
    "ti": "TI7",
    "team": "LFY",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 610.4,
      "xpm": 659.2,
      "kda": 3.6,
      "lane_eff": 48.2,
      "hero_pool": 11.9,
      "assists": 10.9,
      "obs_placed": 3.1,
      "sen_placed": 1,
      "obs_denied": 40,
      "stacks": 1.7
    }
  },
  {
    "id": "Inflame",
    "name": "Inflame",
    "allowedPos": [
      3
    ],
    "ti": "TI7",
    "team": "LFY",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 306.6,
      "xpm": 298.9,
      "kda": 2.4,
      "lane_eff": 30.2,
      "hero_pool": 15.3,
      "assists": 10.2,
      "obs_placed": 4.3,
      "sen_placed": 2.4,
      "obs_denied": 34.8,
      "stacks": 6
    }
  },
  {
    "id": "ah fu",
    "name": "ah fu",
    "allowedPos": [
      4
    ],
    "ti": "TI7",
    "team": "LFY",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 257.3,
      "xpm": 315.9,
      "kda": 2.4,
      "lane_eff": 33.1,
      "hero_pool": 16.5,
      "assists": 16.1,
      "obs_placed": 9.9,
      "sen_placed": 6.9,
      "obs_denied": 44.2,
      "stacks": 3.9
    }
  },
  {
    "id": "DDC",
    "name": "DDC",
    "allowedPos": [
      5
    ],
    "ti": "TI7",
    "team": "LFY",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 297,
      "xpm": 362.3,
      "kda": 2.8,
      "lane_eff": 39.9,
      "hero_pool": 18,
      "assists": 20.4,
      "obs_placed": 19.8,
      "sen_placed": 14.7,
      "obs_denied": 70,
      "stacks": 3.8
    }
  },
  {
    "id": "Ame",
    "name": "Ame",
    "allowedPos": [
      1
    ],
    "ti": "TI7",
    "team": "LGD",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 475.6,
      "xpm": 505.6,
      "kda": 2.7,
      "lane_eff": 39.4,
      "hero_pool": 7,
      "assists": 5.4,
      "obs_placed": 1.3,
      "sen_placed": 1,
      "obs_denied": 24.4,
      "stacks": 1
    }
  },
  {
    "id": "Maybe",
    "name": "Maybe",
    "allowedPos": [
      2
    ],
    "ti": "TI7",
    "team": "LGD",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 464.8,
      "xpm": 518.4,
      "kda": 2.9,
      "lane_eff": 40.8,
      "hero_pool": 10.5,
      "assists": 7.3,
      "obs_placed": 2.1,
      "sen_placed": 1,
      "obs_denied": 29.5,
      "stacks": 1.3
    }
  },
  {
    "id": "old eLeVeN",
    "name": "old eLeVeN",
    "allowedPos": [
      3
    ],
    "ti": "TI7",
    "team": "LGD",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 457.8,
      "xpm": 504.7,
      "kda": 2.9,
      "lane_eff": 41,
      "hero_pool": 15.3,
      "assists": 15.3,
      "obs_placed": 7.2,
      "sen_placed": 2.9,
      "obs_denied": 47.3,
      "stacks": 6
    }
  },
  {
    "id": "Victoria",
    "name": "Victoria",
    "allowedPos": [
      4
    ],
    "ti": "TI7",
    "team": "LGD",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 306.9,
      "xpm": 440.7,
      "kda": 3,
      "lane_eff": 47.7,
      "hero_pool": 20.9,
      "assists": 24,
      "obs_placed": 13,
      "sen_placed": 10.7,
      "obs_denied": 60.1,
      "stacks": 6.3
    }
  },
  {
    "id": "Yao",
    "name": "Yao",
    "allowedPos": [
      5
    ],
    "ti": "TI7",
    "team": "LGD",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 189,
      "xpm": 293.3,
      "kda": 2,
      "lane_eff": 35.7,
      "hero_pool": 14,
      "assists": 20.4,
      "obs_placed": 12.6,
      "sen_placed": 11.9,
      "obs_denied": 49,
      "stacks": 3.4
    }
  },
  {
    "id": "Paparazi灬",
    "name": "Paparazi灬",
    "allowedPos": [
      1,
      2
    ],
    "ti": "TI7",
    "team": "iG.Vitality",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 481.4,
      "xpm": 518.4,
      "kda": 2.8,
      "lane_eff": 41.6,
      "hero_pool": 7.5,
      "assists": 5.8,
      "obs_placed": 1.4,
      "sen_placed": 1,
      "obs_denied": 28.1,
      "stacks": 1
    }
  },
  {
    "id": "Sakata",
    "name": "Sakata",
    "allowedPos": [
      2
    ],
    "ti": "TI7",
    "team": "iG.Vitality",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 330.4,
      "xpm": 403.2,
      "kda": 2.5,
      "lane_eff": 37.6,
      "hero_pool": 10.5,
      "assists": 7.9,
      "obs_placed": 2.5,
      "sen_placed": 1,
      "obs_denied": 26.8,
      "stacks": 1.3
    }
  },
  {
    "id": "InJuly",
    "name": "InJuly",
    "allowedPos": [
      3
    ],
    "ti": "TI7",
    "team": "iG.Vitality",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 268.8,
      "xpm": 357.7,
      "kda": 2.5,
      "lane_eff": 27.5,
      "hero_pool": 12.6,
      "assists": 11.1,
      "obs_placed": 4.1,
      "sen_placed": 2,
      "obs_denied": 39.5,
      "stacks": 6
    }
  },
  {
    "id": "dogf1ghts",
    "name": "dogf1ghts",
    "allowedPos": [
      4
    ],
    "ti": "TI7",
    "team": "iG.Vitality",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 282.1,
      "xpm": 378.3,
      "kda": 3.2,
      "lane_eff": 46.9,
      "hero_pool": 18.7,
      "assists": 20,
      "obs_placed": 13.6,
      "sen_placed": 10.3,
      "obs_denied": 71.9,
      "stacks": 5.1
    }
  },
  {
    "id": "super",
    "name": "super",
    "allowedPos": [
      5
    ],
    "ti": "TI7",
    "team": "iG.Vitality",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 189,
      "xpm": 293.3,
      "kda": 2,
      "lane_eff": 35.7,
      "hero_pool": 14,
      "assists": 20.4,
      "obs_placed": 12.6,
      "sen_placed": 11.9,
      "obs_denied": 49,
      "stacks": 3.4
    }
  },
  {
    "id": "Ana",
    "name": "Ana",
    "allowedPos": [
      1
    ],
    "ti": "TI8",
    "team": "OG",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 464,
      "xpm": 480,
      "kda": 2.4,
      "lane_eff": 35.1,
      "hero_pool": 6,
      "assists": 6.8,
      "obs_placed": 1.6,
      "sen_placed": 1,
      "obs_denied": 29.4,
      "stacks": 1
    }
  },
  {
    "id": "Topson",
    "name": "Topson",
    "allowedPos": [
      2
    ],
    "ti": "TI8",
    "team": "OG",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 408.8,
      "xpm": 390.4,
      "kda": 2.9,
      "lane_eff": 35.5,
      "hero_pool": 11.9,
      "assists": 7.3,
      "obs_placed": 1.8,
      "sen_placed": 1,
      "obs_denied": 29.5,
      "stacks": 1.7
    }
  },
  {
    "id": "Ceb",
    "name": "Ceb",
    "allowedPos": [
      3,
      4
    ],
    "ti": "TI8",
    "team": "OG",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 268.8,
      "xpm": 357.7,
      "kda": 2.5,
      "lane_eff": 27.5,
      "hero_pool": 12.6,
      "assists": 11.1,
      "obs_placed": 4.1,
      "sen_placed": 2,
      "obs_denied": 39.5,
      "stacks": 6
    }
  },
  {
    "id": "JerAx",
    "name": "JerAx",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI8",
    "team": "OG",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 232.5,
      "xpm": 253.5,
      "kda": 2.6,
      "lane_eff": 32.3,
      "hero_pool": 14.3,
      "assists": 18.7,
      "obs_placed": 10.5,
      "sen_placed": 6.5,
      "obs_denied": 56.1,
      "stacks": 4.5
    }
  },
  {
    "id": "N0tail",
    "name": "N0tail",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI8",
    "team": "OG",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 300.7,
      "xpm": 425.1,
      "kda": 2.8,
      "lane_eff": 44.3,
      "hero_pool": 18.7,
      "assists": 21.3,
      "obs_placed": 15.3,
      "sen_placed": 9.1,
      "obs_denied": 68,
      "stacks": 5.1
    }
  },
  {
    "id": "Ame",
    "name": "Ame",
    "allowedPos": [
      1
    ],
    "ti": "TI8",
    "team": "PSG.LGD",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 481.4,
      "xpm": 518.4,
      "kda": 2.8,
      "lane_eff": 41.6,
      "hero_pool": 7.5,
      "assists": 5.8,
      "obs_placed": 1.4,
      "sen_placed": 1,
      "obs_denied": 28.1,
      "stacks": 1
    }
  },
  {
    "id": "Maybe",
    "name": "Maybe",
    "allowedPos": [
      2
    ],
    "ti": "TI8",
    "team": "PSG.LGD",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 476,
      "xpm": 544,
      "kda": 3.1,
      "lane_eff": 45.1,
      "hero_pool": 11.9,
      "assists": 8.5,
      "obs_placed": 2.6,
      "sen_placed": 1,
      "obs_denied": 37.4,
      "stacks": 1.7
    }
  },
  {
    "id": "Chalice",
    "name": "Chalice",
    "allowedPos": [
      3
    ],
    "ti": "TI8",
    "team": "PSG.LGD",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 407.4,
      "xpm": 534.1,
      "kda": 2.7,
      "lane_eff": 46.4,
      "hero_pool": 15.3,
      "assists": 13.6,
      "obs_placed": 7.6,
      "sen_placed": 2.7,
      "obs_denied": 53.6,
      "stacks": 6
    }
  },
  {
    "id": "fy",
    "name": "fy",
    "allowedPos": [
      4
    ],
    "ti": "TI8",
    "team": "PSG.LGD",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 220.1,
      "xpm": 222.3,
      "kda": 2.3,
      "lane_eff": 25.4,
      "hero_pool": 16.5,
      "assists": 13.4,
      "obs_placed": 10.8,
      "sen_placed": 6.3,
      "obs_denied": 52.1,
      "stacks": 3.9
    }
  },
  {
    "id": "xNova",
    "name": "xNova",
    "allowedPos": [
      5
    ],
    "ti": "TI8",
    "team": "PSG.LGD",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 162,
      "xpm": 224.3,
      "kda": 2,
      "lane_eff": 31.5,
      "hero_pool": 16,
      "assists": 20.4,
      "obs_placed": 10.8,
      "sen_placed": 9.1,
      "obs_denied": 49,
      "stacks": 3
    }
  },
  {
    "id": "Arteezy",
    "name": "Arteezy",
    "allowedPos": [
      1
    ],
    "ti": "TI8",
    "team": "EG",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 661.2,
      "xpm": 723.2,
      "kda": 3.9,
      "lane_eff": 59.9,
      "hero_pool": 11,
      "assists": 8.7,
      "obs_placed": 2.2,
      "sen_placed": 1.1,
      "obs_denied": 44.5,
      "stacks": 1.1
    }
  },
  {
    "id": "SumaiL",
    "name": "SumaiL",
    "allowedPos": [
      2
    ],
    "ti": "TI8",
    "team": "EG",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 352.8,
      "xpm": 454.4,
      "kda": 2.9,
      "lane_eff": 30.2,
      "hero_pool": 9.1,
      "assists": 7.3,
      "obs_placed": 2.4,
      "sen_placed": 1,
      "obs_denied": 29.5,
      "stacks": 1.5
    }
  },
  {
    "id": "s4",
    "name": "s4",
    "allowedPos": [
      3
    ],
    "ti": "TI8",
    "team": "EG",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 432.6,
      "xpm": 445.9,
      "kda": 3.3,
      "lane_eff": 43.7,
      "hero_pool": 15.3,
      "assists": 14.4,
      "obs_placed": 6.4,
      "sen_placed": 3.3,
      "obs_denied": 50.4,
      "stacks": 6
    }
  },
  {
    "id": "Cr1t-",
    "name": "Cr1t-",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI8",
    "team": "EG",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 282.1,
      "xpm": 378.3,
      "kda": 3.2,
      "lane_eff": 46.9,
      "hero_pool": 18.7,
      "assists": 20,
      "obs_placed": 13.6,
      "sen_placed": 10.3,
      "obs_denied": 71.9,
      "stacks": 5.1
    }
  },
  {
    "id": "Fly",
    "name": "Fly",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI8",
    "team": "EG",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 232.5,
      "xpm": 253.5,
      "kda": 2.6,
      "lane_eff": 32.3,
      "hero_pool": 14.3,
      "assists": 18.7,
      "obs_placed": 10.5,
      "sen_placed": 6.5,
      "obs_denied": 56.1,
      "stacks": 4.5
    }
  },
  {
    "id": "Miracle-",
    "name": "Miracle-",
    "allowedPos": [
      1,
      2
    ],
    "ti": "TI8",
    "team": "Team Liquid",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 510.4,
      "xpm": 582.4,
      "kda": 3.3,
      "lane_eff": 52.4,
      "hero_pool": 10,
      "assists": 8.2,
      "obs_placed": 2.1,
      "sen_placed": 1.1,
      "obs_denied": 47,
      "stacks": 1
    }
  },
  {
    "id": "MATUMBAMAN",
    "name": "MATUMBAMAN",
    "allowedPos": [
      1
    ],
    "ti": "TI8",
    "team": "Team Liquid",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 342.2,
      "xpm": 403.2,
      "kda": 2.3,
      "lane_eff": 38.3,
      "hero_pool": 7.5,
      "assists": 6.3,
      "obs_placed": 1.7,
      "sen_placed": 1,
      "obs_denied": 25.6,
      "stacks": 1
    }
  },
  {
    "id": "MinD_ContRoL",
    "name": "MinD_ContRoL",
    "allowedPos": [
      3
    ],
    "ti": "TI8",
    "team": "Team Liquid",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 369.6,
      "xpm": 445.9,
      "kda": 2.8,
      "lane_eff": 43.7,
      "hero_pool": 18,
      "assists": 14.4,
      "obs_placed": 7.4,
      "sen_placed": 3.3,
      "obs_denied": 58.2,
      "stacks": 6
    }
  },
  {
    "id": "GH",
    "name": "GH",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI8",
    "team": "Team Liquid",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 337.9,
      "xpm": 401.7,
      "kda": 3,
      "lane_eff": 39.1,
      "hero_pool": 18.7,
      "assists": 24,
      "obs_placed": 14.4,
      "sen_placed": 9.7,
      "obs_denied": 60.1,
      "stacks": 5.1
    }
  },
  {
    "id": "KuroKy",
    "name": "KuroKy",
    "allowedPos": [
      5
    ],
    "ti": "TI8",
    "team": "Team Liquid",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 202.5,
      "xpm": 224.3,
      "kda": 2.4,
      "lane_eff": 31.5,
      "hero_pool": 13,
      "assists": 20.4,
      "obs_placed": 13.5,
      "sen_placed": 9.1,
      "obs_denied": 59.5,
      "stacks": 3
    }
  },
  {
    "id": "RAMZES666",
    "name": "RAMZES666",
    "allowedPos": [
      1
    ],
    "ti": "TI8",
    "team": "Virtus.pro",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 371.2,
      "xpm": 467.2,
      "kda": 2.9,
      "lane_eff": 32.9,
      "hero_pool": 7,
      "assists": 6.3,
      "obs_placed": 1.2,
      "sen_placed": 1,
      "obs_denied": 31.9,
      "stacks": 1
    }
  },
  {
    "id": "No[o]ne",
    "name": "No[o]ne",
    "allowedPos": [
      2
    ],
    "ti": "TI8",
    "team": "Virtus.pro",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 621.6,
      "xpm": 684.8,
      "kda": 3.8,
      "lane_eff": 52.5,
      "hero_pool": 13.3,
      "assists": 9.1,
      "obs_placed": 2.6,
      "sen_placed": 1.1,
      "obs_denied": 48,
      "stacks": 2.1
    }
  },
  {
    "id": "9pasha",
    "name": "9pasha",
    "allowedPos": [
      3
    ],
    "ti": "TI8",
    "team": "Virtus.pro",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 369.6,
      "xpm": 445.9,
      "kda": 2.8,
      "lane_eff": 43.7,
      "hero_pool": 18,
      "assists": 14.4,
      "obs_placed": 7.4,
      "sen_placed": 3.3,
      "obs_denied": 58.2,
      "stacks": 6
    }
  },
  {
    "id": "RodjER",
    "name": "RodjER",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI8",
    "team": "Virtus.pro",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 325.5,
      "xpm": 370.5,
      "kda": 2.6,
      "lane_eff": 45.2,
      "hero_pool": 20.9,
      "assists": 18.7,
      "obs_placed": 14.7,
      "sen_placed": 9.5,
      "obs_denied": 56.1,
      "stacks": 6.3
    }
  },
  {
    "id": "Solo",
    "name": "Solo",
    "allowedPos": [
      5
    ],
    "ti": "TI8",
    "team": "Virtus.pro",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 283.5,
      "xpm": 327.8,
      "kda": 2.4,
      "lane_eff": 44.1,
      "hero_pool": 19,
      "assists": 20.4,
      "obs_placed": 18.9,
      "sen_placed": 13.3,
      "obs_denied": 59.5,
      "stacks": 4.2
    }
  },
  {
    "id": "Ana",
    "name": "Ana",
    "allowedPos": [
      1
    ],
    "ti": "TI9",
    "team": "OG",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 469.8,
      "xpm": 492.8,
      "kda": 2.6,
      "lane_eff": 37.3,
      "hero_pool": 6.5,
      "assists": 4.9,
      "obs_placed": 1.1,
      "sen_placed": 1,
      "obs_denied": 33.2,
      "stacks": 1
    }
  },
  {
    "id": "Topson",
    "name": "Topson",
    "allowedPos": [
      2
    ],
    "ti": "TI9",
    "team": "OG",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 420,
      "xpm": 416,
      "kda": 3.1,
      "lane_eff": 39.8,
      "hero_pool": 9.1,
      "assists": 8.5,
      "obs_placed": 2.3,
      "sen_placed": 1,
      "obs_denied": 37.4,
      "stacks": 1.5
    }
  },
  {
    "id": "Ceb",
    "name": "Ceb",
    "allowedPos": [
      3,
      4
    ],
    "ti": "TI9",
    "team": "OG",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 281.4,
      "xpm": 387.1,
      "kda": 1.8,
      "lane_eff": 32.9,
      "hero_pool": 15.3,
      "assists": 9.4,
      "obs_placed": 5.5,
      "sen_placed": 1.8,
      "obs_denied": 38,
      "stacks": 6
    }
  },
  {
    "id": "JerAx",
    "name": "JerAx",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI9",
    "team": "OG",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 244.9,
      "xpm": 284.7,
      "kda": 2.1,
      "lane_eff": 26.2,
      "hero_pool": 18.7,
      "assists": 17.4,
      "obs_placed": 10.2,
      "sen_placed": 6.7,
      "obs_denied": 40.3,
      "stacks": 5.1
    }
  },
  {
    "id": "N0tail",
    "name": "N0tail",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI9",
    "team": "OG",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 313.1,
      "xpm": 339.3,
      "kda": 3.2,
      "lane_eff": 38.3,
      "hero_pool": 23.1,
      "assists": 20,
      "obs_placed": 15,
      "sen_placed": 9.3,
      "obs_denied": 71.9,
      "stacks": 5.7
    }
  },
  {
    "id": "Miracle-",
    "name": "Miracle-",
    "allowedPos": [
      1,
      2
    ],
    "ti": "TI9",
    "team": "Team Liquid",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 516.2,
      "xpm": 595.2,
      "kda": 3.4,
      "lane_eff": 54.5,
      "hero_pool": 10.5,
      "assists": 8.7,
      "obs_placed": 2.3,
      "sen_placed": 1,
      "obs_denied": 38.2,
      "stacks": 1
    }
  },
  {
    "id": "w33",
    "name": "w33",
    "allowedPos": [
      2,
      3
    ],
    "ti": "TI9",
    "team": "Team Liquid",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 498.4,
      "xpm": 595.2,
      "kda": 3.6,
      "lane_eff": 53.5,
      "hero_pool": 14.7,
      "assists": 10.9,
      "obs_placed": 3.4,
      "sen_placed": 1,
      "obs_denied": 40,
      "stacks": 1.9
    }
  },
  {
    "id": "MinD_ContRoL",
    "name": "MinD_ContRoL",
    "allowedPos": [
      3
    ],
    "ti": "TI9",
    "team": "Team Liquid",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 382.2,
      "xpm": 475.3,
      "kda": 3.1,
      "lane_eff": 49.1,
      "hero_pool": 15.3,
      "assists": 12.7,
      "obs_placed": 6.8,
      "sen_placed": 3.1,
      "obs_denied": 56.7,
      "stacks": 6
    }
  },
  {
    "id": "GH",
    "name": "GH",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI9",
    "team": "Team Liquid",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 350.3,
      "xpm": 432.9,
      "kda": 3.4,
      "lane_eff": 46,
      "hero_pool": 23.1,
      "assists": 22.7,
      "obs_placed": 14.1,
      "sen_placed": 9.9,
      "obs_denied": 64,
      "stacks": 5.7
    }
  },
  {
    "id": "KuroKy",
    "name": "KuroKy",
    "allowedPos": [
      5
    ],
    "ti": "TI9",
    "team": "Team Liquid",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 216,
      "xpm": 258.8,
      "kda": 2,
      "lane_eff": 27.3,
      "hero_pool": 12,
      "assists": 20.4,
      "obs_placed": 14.4,
      "sen_placed": 10.5,
      "obs_denied": 49,
      "stacks": 2.6
    }
  },
  {
    "id": "Ame",
    "name": "Ame",
    "allowedPos": [
      1
    ],
    "ti": "TI9",
    "team": "PSG.LGD",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 487.2,
      "xpm": 531.2,
      "kda": 2.9,
      "lane_eff": 43.7,
      "hero_pool": 8,
      "assists": 6.3,
      "obs_placed": 1.6,
      "sen_placed": 1,
      "obs_denied": 31.9,
      "stacks": 1
    }
  },
  {
    "id": "Maybe",
    "name": "Maybe",
    "allowedPos": [
      2
    ],
    "ti": "TI9",
    "team": "PSG.LGD",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 319.2,
      "xpm": 377.6,
      "kda": 2.3,
      "lane_eff": 33.4,
      "hero_pool": 9.1,
      "assists": 6.7,
      "obs_placed": 2.1,
      "sen_placed": 1,
      "obs_denied": 32.1,
      "stacks": 1.5
    }
  },
  {
    "id": "Chalice",
    "name": "Chalice",
    "allowedPos": [
      3
    ],
    "ti": "TI9",
    "team": "PSG.LGD",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 420,
      "xpm": 416.5,
      "kda": 3,
      "lane_eff": 38.3,
      "hero_pool": 18,
      "assists": 11.9,
      "obs_placed": 7,
      "sen_placed": 2.6,
      "obs_denied": 52,
      "stacks": 6
    }
  },
  {
    "id": "fy",
    "name": "fy",
    "allowedPos": [
      4
    ],
    "ti": "TI9",
    "team": "PSG.LGD",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 232.5,
      "xpm": 253.5,
      "kda": 2.6,
      "lane_eff": 32.3,
      "hero_pool": 14.3,
      "assists": 18.7,
      "obs_placed": 10.5,
      "sen_placed": 6.5,
      "obs_denied": 56.1,
      "stacks": 4.5
    }
  },
  {
    "id": "xNova",
    "name": "xNova",
    "allowedPos": [
      5
    ],
    "ti": "TI9",
    "team": "PSG.LGD",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 175.5,
      "xpm": 258.8,
      "kda": 2.4,
      "lane_eff": 27.3,
      "hero_pool": 15,
      "assists": 20.4,
      "obs_placed": 11.7,
      "sen_placed": 10.5,
      "obs_denied": 59.5,
      "stacks": 2.6
    }
  },
  {
    "id": "Nisha",
    "name": "Nisha",
    "allowedPos": [
      1,
      2
    ],
    "ti": "TI9",
    "team": "Team Secret",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 545.2,
      "xpm": 659.2,
      "kda": 3.9,
      "lane_eff": 49.1,
      "hero_pool": 10,
      "assists": 8.7,
      "obs_placed": 1.8,
      "sen_placed": 1,
      "obs_denied": 44.5,
      "stacks": 1
    }
  },
  {
    "id": "MidOne",
    "name": "MidOne",
    "allowedPos": [
      2
    ],
    "ti": "TI9",
    "team": "Team Secret",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 599.2,
      "xpm": 633.6,
      "kda": 3.4,
      "lane_eff": 59.9,
      "hero_pool": 14.7,
      "assists": 9.7,
      "obs_placed": 2.7,
      "sen_placed": 1.1,
      "obs_denied": 45.3,
      "stacks": 1.9
    }
  },
  {
    "id": "Zai",
    "name": "Zai",
    "allowedPos": [
      3
    ],
    "ti": "TI9",
    "team": "Team Secret",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 407.4,
      "xpm": 534.1,
      "kda": 2.7,
      "lane_eff": 46.4,
      "hero_pool": 15.3,
      "assists": 13.6,
      "obs_placed": 7.6,
      "sen_placed": 2.7,
      "obs_denied": 53.6,
      "stacks": 6
    }
  },
  {
    "id": "YapzOr",
    "name": "YapzOr",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI9",
    "team": "Team Secret",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 195.3,
      "xpm": 276.9,
      "kda": 2.4,
      "lane_eff": 24.5,
      "hero_pool": 14.3,
      "assists": 16.1,
      "obs_placed": 11.3,
      "sen_placed": 5.9,
      "obs_denied": 44.2,
      "stacks": 4.5
    }
  },
  {
    "id": "Puppey",
    "name": "Puppey",
    "allowedPos": [
      5
    ],
    "ti": "TI9",
    "team": "Team Secret",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 297,
      "xpm": 362.3,
      "kda": 2.8,
      "lane_eff": 39.9,
      "hero_pool": 18,
      "assists": 20.4,
      "obs_placed": 19.8,
      "sen_placed": 14.7,
      "obs_denied": 70,
      "stacks": 3.8
    }
  },
  {
    "id": "Paparazi灬",
    "name": "Paparazi灬",
    "allowedPos": [
      1,
      2
    ],
    "ti": "TI9",
    "team": "Vici Gaming",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 493,
      "xpm": 544,
      "kda": 3,
      "lane_eff": 45.9,
      "hero_pool": 8.5,
      "assists": 6.8,
      "obs_placed": 1.7,
      "sen_placed": 1,
      "obs_denied": 35.7,
      "stacks": 1
    }
  },
  {
    "id": "Ori",
    "name": "Ori",
    "allowedPos": [
      2
    ],
    "ti": "TI9",
    "team": "Vici Gaming",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 554.4,
      "xpm": 723.2,
      "kda": 3.6,
      "lane_eff": 58.8,
      "hero_pool": 13.3,
      "assists": 10.9,
      "obs_placed": 2.8,
      "sen_placed": 1.1,
      "obs_denied": 40,
      "stacks": 2.1
    }
  },
  {
    "id": "Yang",
    "name": "Yang",
    "allowedPos": [
      3
    ],
    "ti": "TI9",
    "team": "Vici Gaming",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 420,
      "xpm": 416.5,
      "kda": 3,
      "lane_eff": 38.3,
      "hero_pool": 18,
      "assists": 11.9,
      "obs_placed": 7,
      "sen_placed": 2.6,
      "obs_denied": 52,
      "stacks": 6
    }
  },
  {
    "id": "Fade",
    "name": "Fade",
    "allowedPos": [
      4
    ],
    "ti": "TI9",
    "team": "Vici Gaming",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 344.1,
      "xpm": 417.3,
      "kda": 3.2,
      "lane_eff": 42.6,
      "hero_pool": 20.9,
      "assists": 20,
      "obs_placed": 12.2,
      "sen_placed": 11.3,
      "obs_denied": 71.9,
      "stacks": 6.3
    }
  },
  {
    "id": "Dy",
    "name": "Dy",
    "allowedPos": [
      5
    ],
    "ti": "TI9",
    "team": "Vici Gaming",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 216,
      "xpm": 258.8,
      "kda": 2,
      "lane_eff": 27.3,
      "hero_pool": 12,
      "assists": 20.4,
      "obs_placed": 14.4,
      "sen_placed": 10.5,
      "obs_denied": 49,
      "stacks": 2.6
    }
  },
  {
    "id": "Yatoro",
    "name": "Yatoro",
    "allowedPos": [
      1
    ],
    "ti": "TI10",
    "team": "Team Spirit",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 493,
      "xpm": 544,
      "kda": 3,
      "lane_eff": 45.9,
      "hero_pool": 8.5,
      "assists": 6.8,
      "obs_placed": 1.7,
      "sen_placed": 1,
      "obs_denied": 35.7,
      "stacks": 1
    }
  },
  {
    "id": "TORONTOTOKYO",
    "name": "TORONTOTOKYO",
    "allowedPos": [
      2
    ],
    "ti": "TI10",
    "team": "Team Spirit",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 352.8,
      "xpm": 454.4,
      "kda": 2.9,
      "lane_eff": 30.2,
      "hero_pool": 9.1,
      "assists": 7.3,
      "obs_placed": 2.4,
      "sen_placed": 1,
      "obs_denied": 29.5,
      "stacks": 1.5
    }
  },
  {
    "id": "Collapse",
    "name": "Collapse",
    "allowedPos": [
      3,
      4
    ],
    "ti": "TI10",
    "team": "Team Spirit",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 394.8,
      "xpm": 504.7,
      "kda": 3.4,
      "lane_eff": 41,
      "hero_pool": 18,
      "assists": 15.3,
      "obs_placed": 6.2,
      "sen_placed": 2.9,
      "obs_denied": 55.1,
      "stacks": 6
    }
  },
  {
    "id": "Mira",
    "name": "Mira",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI10",
    "team": "Team Spirit",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 288.3,
      "xpm": 393.9,
      "kda": 3.4,
      "lane_eff": 37.4,
      "hero_pool": 20.9,
      "assists": 22.7,
      "obs_placed": 15.5,
      "sen_placed": 8.9,
      "obs_denied": 64,
      "stacks": 6.3
    }
  },
  {
    "id": "Miposhka",
    "name": "Miposhka",
    "allowedPos": [
      5
    ],
    "ti": "TI10",
    "team": "Team Spirit",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 175.5,
      "xpm": 258.8,
      "kda": 2.4,
      "lane_eff": 27.3,
      "hero_pool": 15,
      "assists": 20.4,
      "obs_placed": 11.7,
      "sen_placed": 10.5,
      "obs_denied": 59.5,
      "stacks": 2.6
    }
  },
  {
    "id": "Ame",
    "name": "Ame",
    "allowedPos": [
      1
    ],
    "ti": "TI10",
    "team": "PSG.LGD",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 533.6,
      "xpm": 633.6,
      "kda": 3.7,
      "lane_eff": 61,
      "hero_pool": 9,
      "assists": 7.8,
      "obs_placed": 2.1,
      "sen_placed": 1.1,
      "obs_denied": 37,
      "stacks": 1
    }
  },
  {
    "id": "NothingToSay",
    "name": "NothingToSay",
    "allowedPos": [
      2
    ],
    "ti": "TI10",
    "team": "PSG.LGD",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 375.2,
      "xpm": 505.6,
      "kda": 2.3,
      "lane_eff": 38.7,
      "hero_pool": 11.9,
      "assists": 6.7,
      "obs_placed": 2.4,
      "sen_placed": 1,
      "obs_denied": 32.1,
      "stacks": 1.7
    }
  },
  {
    "id": "Faith_bian",
    "name": "Faith_bian",
    "allowedPos": [
      3,
      4
    ],
    "ti": "TI10",
    "team": "PSG.LGD",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 268.8,
      "xpm": 357.7,
      "kda": 2.5,
      "lane_eff": 27.5,
      "hero_pool": 12.6,
      "assists": 11.1,
      "obs_placed": 4.1,
      "sen_placed": 2,
      "obs_denied": 39.5,
      "stacks": 6
    }
  },
  {
    "id": "XinQ",
    "name": "XinQ",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI10",
    "team": "PSG.LGD",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 182.9,
      "xpm": 245.7,
      "kda": 2.1,
      "lane_eff": 30.5,
      "hero_pool": 16.5,
      "assists": 17.4,
      "obs_placed": 11.6,
      "sen_placed": 5.7,
      "obs_denied": 40.3,
      "stacks": 3.9
    }
  },
  {
    "id": "y`",
    "name": "y`",
    "allowedPos": [
      5
    ],
    "ti": "TI10",
    "team": "PSG.LGD",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 189,
      "xpm": 293.3,
      "kda": 2,
      "lane_eff": 35.7,
      "hero_pool": 14,
      "assists": 20.4,
      "obs_placed": 12.6,
      "sen_placed": 11.9,
      "obs_denied": 49,
      "stacks": 3.4
    }
  },
  {
    "id": "Nisha",
    "name": "Nisha",
    "allowedPos": [
      1,
      2
    ],
    "ti": "TI10",
    "team": "Team Secret",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 591.6,
      "xpm": 569.6,
      "kda": 3.7,
      "lane_eff": 50.2,
      "hero_pool": 11,
      "assists": 7.8,
      "obs_placed": 2.3,
      "sen_placed": 1,
      "obs_denied": 37,
      "stacks": 1.1
    }
  },
  {
    "id": "SumaiL",
    "name": "SumaiL",
    "allowedPos": [
      2
    ],
    "ti": "TI10",
    "team": "Team Secret",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 431.2,
      "xpm": 441.6,
      "kda": 2.3,
      "lane_eff": 44,
      "hero_pool": 10.5,
      "assists": 6.7,
      "obs_placed": 1.8,
      "sen_placed": 1,
      "obs_denied": 32.1,
      "stacks": 1.3
    }
  },
  {
    "id": "iceiceice",
    "name": "iceiceice",
    "allowedPos": [
      3
    ],
    "ti": "TI10",
    "team": "Team Secret",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 344.4,
      "xpm": 387.1,
      "kda": 2.3,
      "lane_eff": 32.9,
      "hero_pool": 12.6,
      "assists": 9.4,
      "obs_placed": 4.5,
      "sen_placed": 1.8,
      "obs_denied": 30.2,
      "stacks": 6
    }
  },
  {
    "id": "YapzOr",
    "name": "YapzOr",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI10",
    "team": "Team Secret",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 207.7,
      "xpm": 308.1,
      "kda": 1.9,
      "lane_eff": 31.4,
      "hero_pool": 18.7,
      "assists": 14.7,
      "obs_placed": 11.1,
      "sen_placed": 6.1,
      "obs_denied": 48.2,
      "stacks": 5.1
    }
  },
  {
    "id": "Puppey",
    "name": "Puppey",
    "allowedPos": [
      5
    ],
    "ti": "TI10",
    "team": "Team Secret",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 189,
      "xpm": 293.3,
      "kda": 2,
      "lane_eff": 35.7,
      "hero_pool": 14,
      "assists": 20.4,
      "obs_placed": 12.6,
      "sen_placed": 11.9,
      "obs_denied": 49,
      "stacks": 3.4
    }
  },
  {
    "id": "flyfly",
    "name": "flyfly",
    "allowedPos": [
      1
    ],
    "ti": "TI10",
    "team": "iG",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 469.8,
      "xpm": 492.8,
      "kda": 2.6,
      "lane_eff": 37.3,
      "hero_pool": 6.5,
      "assists": 4.9,
      "obs_placed": 1.1,
      "sen_placed": 1,
      "obs_denied": 33.2,
      "stacks": 1
    }
  },
  {
    "id": "Emo",
    "name": "Emo",
    "allowedPos": [
      2
    ],
    "ti": "TI10",
    "team": "iG",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 352.8,
      "xpm": 454.4,
      "kda": 2.9,
      "lane_eff": 30.2,
      "hero_pool": 9.1,
      "assists": 7.3,
      "obs_placed": 2.4,
      "sen_placed": 1,
      "obs_denied": 29.5,
      "stacks": 1.5
    }
  },
  {
    "id": "JT-",
    "name": "JT-",
    "allowedPos": [
      3,
      4
    ],
    "ti": "TI10",
    "team": "iG",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 344.4,
      "xpm": 387.1,
      "kda": 2.3,
      "lane_eff": 32.9,
      "hero_pool": 12.6,
      "assists": 9.4,
      "obs_placed": 4.5,
      "sen_placed": 1.8,
      "obs_denied": 30.2,
      "stacks": 6
    }
  },
  {
    "id": "Kaka",
    "name": "Kaka",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI10",
    "team": "iG",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 201.5,
      "xpm": 292.5,
      "kda": 2.6,
      "lane_eff": 28,
      "hero_pool": 16.5,
      "assists": 18.7,
      "obs_placed": 9.1,
      "sen_placed": 7.5,
      "obs_denied": 56.1,
      "stacks": 3.9
    }
  },
  {
    "id": "Oli~",
    "name": "Oli~",
    "allowedPos": [
      5
    ],
    "ti": "TI10",
    "team": "iG",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 256.5,
      "xpm": 362.3,
      "kda": 2.4,
      "lane_eff": 39.9,
      "hero_pool": 21,
      "assists": 20.4,
      "obs_placed": 17.1,
      "sen_placed": 14.7,
      "obs_denied": 59.5,
      "stacks": 3.8
    }
  },
  {
    "id": "Nightfall",
    "name": "Nightfall",
    "allowedPos": [
      1
    ],
    "ti": "TI10",
    "team": "Virtus.pro",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 464,
      "xpm": 480,
      "kda": 2.4,
      "lane_eff": 35.1,
      "hero_pool": 6,
      "assists": 6.8,
      "obs_placed": 1.6,
      "sen_placed": 1,
      "obs_denied": 29.4,
      "stacks": 1
    }
  },
  {
    "id": "gpk~",
    "name": "gpk~",
    "allowedPos": [
      2
    ],
    "ti": "TI10",
    "team": "Virtus.pro",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 543.2,
      "xpm": 697.6,
      "kda": 3.4,
      "lane_eff": 54.6,
      "hero_pool": 11.9,
      "assists": 9.7,
      "obs_placed": 3.3,
      "sen_placed": 1,
      "obs_denied": 45.3,
      "stacks": 1.7
    }
  },
  {
    "id": "DM",
    "name": "DM",
    "allowedPos": [
      3
    ],
    "ti": "TI10",
    "team": "Virtus.pro",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 445.2,
      "xpm": 475.3,
      "kda": 2.6,
      "lane_eff": 49.1,
      "hero_pool": 18,
      "assists": 12.7,
      "obs_placed": 7.8,
      "sen_placed": 3.1,
      "obs_denied": 48.9,
      "stacks": 6
    }
  },
  {
    "id": "Save-",
    "name": "Save-",
    "allowedPos": [
      4
    ],
    "ti": "TI10",
    "team": "Virtus.pro",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 337.9,
      "xpm": 401.7,
      "kda": 3,
      "lane_eff": 39.1,
      "hero_pool": 18.7,
      "assists": 24,
      "obs_placed": 14.4,
      "sen_placed": 9.7,
      "obs_denied": 60.1,
      "stacks": 5.1
    }
  },
  {
    "id": "Kingslayer",
    "name": "Kingslayer",
    "allowedPos": [
      5
    ],
    "ti": "TI10",
    "team": "Virtus.pro",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 243,
      "xpm": 327.8,
      "kda": 2.8,
      "lane_eff": 44.1,
      "hero_pool": 22,
      "assists": 20.4,
      "obs_placed": 16.2,
      "sen_placed": 13.3,
      "obs_denied": 70,
      "stacks": 4.2
    }
  },
  {
    "id": "skiter",
    "name": "skiter",
    "allowedPos": [
      1
    ],
    "ti": "TI11",
    "team": "Tundra Esports",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 568.4,
      "xpm": 710.4,
      "kda": 3.3,
      "lane_eff": 57.8,
      "hero_pool": 9,
      "assists": 8.2,
      "obs_placed": 1.7,
      "sen_placed": 1,
      "obs_denied": 47,
      "stacks": 1
    }
  },
  {
    "id": "Nine",
    "name": "Nine",
    "allowedPos": [
      2
    ],
    "ti": "TI11",
    "team": "Tundra Esports",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 565.6,
      "xpm": 556.8,
      "kda": 3.8,
      "lane_eff": 47.2,
      "hero_pool": 14.7,
      "assists": 9.1,
      "obs_placed": 3.2,
      "sen_placed": 1,
      "obs_denied": 48,
      "stacks": 1.9
    }
  },
  {
    "id": "33",
    "name": "33",
    "allowedPos": [
      3
    ],
    "ti": "TI11",
    "team": "Tundra Esports",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 344.4,
      "xpm": 387.1,
      "kda": 2.3,
      "lane_eff": 32.9,
      "hero_pool": 12.6,
      "assists": 9.4,
      "obs_placed": 4.5,
      "sen_placed": 1.8,
      "obs_denied": 30.2,
      "stacks": 6
    }
  },
  {
    "id": "Saksa",
    "name": "Saksa",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI11",
    "team": "Tundra Esports",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 275.9,
      "xpm": 362.7,
      "kda": 3,
      "lane_eff": 43.4,
      "hero_pool": 23.1,
      "assists": 24,
      "obs_placed": 15.8,
      "sen_placed": 8.7,
      "obs_denied": 60.1,
      "stacks": 5.7
    }
  },
  {
    "id": "Sneyking",
    "name": "Sneyking",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI11",
    "team": "Tundra Esports",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 201.5,
      "xpm": 292.5,
      "kda": 2.6,
      "lane_eff": 28,
      "hero_pool": 16.5,
      "assists": 18.7,
      "obs_placed": 9.1,
      "sen_placed": 7.5,
      "obs_denied": 56.1,
      "stacks": 3.9
    }
  },
  {
    "id": "Crystallis",
    "name": "Crystallis",
    "allowedPos": [
      1
    ],
    "ti": "TI11",
    "team": "Team Secret",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 580,
      "xpm": 544,
      "kda": 3.5,
      "lane_eff": 45.9,
      "hero_pool": 10,
      "assists": 6.8,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1
    }
  },
  {
    "id": "Nisha",
    "name": "Nisha",
    "allowedPos": [
      1,
      2
    ],
    "ti": "TI11",
    "team": "Team Secret",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 597.4,
      "xpm": 582.4,
      "kda": 3.8,
      "lane_eff": 52.4,
      "hero_pool": 8.5,
      "assists": 8.2,
      "obs_placed": 1.8,
      "sen_placed": 1.1,
      "obs_denied": 40.7,
      "stacks": 1
    }
  },
  {
    "id": "Resolut1on",
    "name": "Resolut1on",
    "allowedPos": [
      3
    ],
    "ti": "TI11",
    "team": "Team Secret",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 470.4,
      "xpm": 534.1,
      "kda": 3.2,
      "lane_eff": 46.4,
      "hero_pool": 18,
      "assists": 13.6,
      "obs_placed": 6.6,
      "sen_placed": 2.7,
      "obs_denied": 45.8,
      "stacks": 6
    }
  },
  {
    "id": "Zayac",
    "name": "Zayac",
    "allowedPos": [
      4
    ],
    "ti": "TI11",
    "team": "Team Secret",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 282.1,
      "xpm": 378.3,
      "kda": 3.2,
      "lane_eff": 46.9,
      "hero_pool": 18.7,
      "assists": 20,
      "obs_placed": 13.6,
      "sen_placed": 10.3,
      "obs_denied": 71.9,
      "stacks": 5.1
    }
  },
  {
    "id": "Puppey",
    "name": "Puppey",
    "allowedPos": [
      5
    ],
    "ti": "TI11",
    "team": "Team Secret",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 202.5,
      "xpm": 224.3,
      "kda": 2.4,
      "lane_eff": 31.5,
      "hero_pool": 13,
      "assists": 20.4,
      "obs_placed": 13.5,
      "sen_placed": 9.1,
      "obs_denied": 59.5,
      "stacks": 3
    }
  },
  {
    "id": "MATUMBAMAN",
    "name": "MATUMBAMAN",
    "allowedPos": [
      1
    ],
    "ti": "TI11",
    "team": "Team Liquid",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 620.6,
      "xpm": 633.6,
      "kda": 3.2,
      "lane_eff": 61,
      "hero_pool": 10.5,
      "assists": 7.8,
      "obs_placed": 1.8,
      "sen_placed": 1.1,
      "obs_denied": 43.3,
      "stacks": 1
    }
  },
  {
    "id": "miCKe",
    "name": "miCKe",
    "allowedPos": [
      2
    ],
    "ti": "TI11",
    "team": "Team Liquid",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 599.2,
      "xpm": 633.6,
      "kda": 3.4,
      "lane_eff": 59.9,
      "hero_pool": 14.7,
      "assists": 9.7,
      "obs_placed": 2.7,
      "sen_placed": 1.1,
      "obs_denied": 45.3,
      "stacks": 1.9
    }
  },
  {
    "id": "Zai",
    "name": "Zai",
    "allowedPos": [
      3
    ],
    "ti": "TI11",
    "team": "Team Liquid",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 243.6,
      "xpm": 298.9,
      "kda": 1.9,
      "lane_eff": 30.2,
      "hero_pool": 12.6,
      "assists": 10.2,
      "obs_placed": 5.3,
      "sen_placed": 2.4,
      "obs_denied": 42.6,
      "stacks": 6
    }
  },
  {
    "id": "Boxi",
    "name": "Boxi",
    "allowedPos": [
      4
    ],
    "ti": "TI11",
    "team": "Team Liquid",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 275.9,
      "xpm": 362.7,
      "kda": 3,
      "lane_eff": 43.4,
      "hero_pool": 23.1,
      "assists": 24,
      "obs_placed": 15.8,
      "sen_placed": 8.7,
      "obs_denied": 60.1,
      "stacks": 5.7
    }
  },
  {
    "id": "iNsania",
    "name": "iNsania",
    "allowedPos": [
      5
    ],
    "ti": "TI11",
    "team": "Team Liquid",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 229.5,
      "xpm": 293.3,
      "kda": 2.4,
      "lane_eff": 35.7,
      "hero_pool": 17,
      "assists": 20.4,
      "obs_placed": 15.3,
      "sen_placed": 11.9,
      "obs_denied": 59.5,
      "stacks": 3.4
    }
  },
  {
    "id": "Monet",
    "name": "Monet",
    "allowedPos": [
      1
    ],
    "ti": "TI11",
    "team": "Team Aster",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 527.8,
      "xpm": 620.8,
      "kda": 3.6,
      "lane_eff": 58.9,
      "hero_pool": 8.5,
      "assists": 7.3,
      "obs_placed": 1.9,
      "sen_placed": 1,
      "obs_denied": 45.8,
      "stacks": 1
    }
  },
  {
    "id": "Ori",
    "name": "Ori",
    "allowedPos": [
      2
    ],
    "ti": "TI11",
    "team": "Team Aster",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 565.6,
      "xpm": 556.8,
      "kda": 3.8,
      "lane_eff": 47.2,
      "hero_pool": 14.7,
      "assists": 9.1,
      "obs_placed": 3.2,
      "sen_placed": 1,
      "obs_denied": 48,
      "stacks": 1.9
    }
  },
  {
    "id": "Xxs",
    "name": "Xxs",
    "allowedPos": [
      3
    ],
    "ti": "TI11",
    "team": "Team Aster",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 357,
      "xpm": 416.5,
      "kda": 2.6,
      "lane_eff": 38.3,
      "hero_pool": 15.3,
      "assists": 11.9,
      "obs_placed": 6,
      "sen_placed": 2.6,
      "obs_denied": 44.2,
      "stacks": 6
    }
  },
  {
    "id": "BoBoKa",
    "name": "BoBoKa",
    "allowedPos": [
      4
    ],
    "ti": "TI11",
    "team": "Team Aster",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 226.3,
      "xpm": 237.9,
      "kda": 2.4,
      "lane_eff": 28.8,
      "hero_pool": 18.7,
      "assists": 16.1,
      "obs_placed": 8.5,
      "sen_placed": 7.9,
      "obs_denied": 44.2,
      "stacks": 5.1
    }
  },
  {
    "id": "皮球",
    "name": "皮球",
    "allowedPos": [
      5
    ],
    "ti": "TI11",
    "team": "Team Aster",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 229.5,
      "xpm": 293.3,
      "kda": 2.4,
      "lane_eff": 35.7,
      "hero_pool": 17,
      "assists": 20.4,
      "obs_placed": 15.3,
      "sen_placed": 11.9,
      "obs_denied": 59.5,
      "stacks": 3.4
    }
  },
  {
    "id": "Yuragi",
    "name": "Yuragi",
    "allowedPos": [
      1
    ],
    "ti": "TI11",
    "team": "OG",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 493,
      "xpm": 544,
      "kda": 3,
      "lane_eff": 45.9,
      "hero_pool": 8.5,
      "assists": 6.8,
      "obs_placed": 1.7,
      "sen_placed": 1,
      "obs_denied": 35.7,
      "stacks": 1
    }
  },
  {
    "id": "Bzm",
    "name": "Bzm",
    "allowedPos": [
      1,
      2
    ],
    "ti": "TI11",
    "team": "OG",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 411.8,
      "xpm": 364.8,
      "kda": 2.6,
      "lane_eff": 31.9,
      "hero_pool": 7.5,
      "assists": 4.9,
      "obs_placed": 1.5,
      "sen_placed": 1,
      "obs_denied": 33.2,
      "stacks": 1
    }
  },
  {
    "id": "ATF",
    "name": "ATF",
    "allowedPos": [
      3,
      4
    ],
    "ti": "TI11",
    "team": "OG",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 331.8,
      "xpm": 357.7,
      "kda": 2,
      "lane_eff": 27.5,
      "hero_pool": 15.3,
      "assists": 11.1,
      "obs_placed": 5.1,
      "sen_placed": 2,
      "obs_denied": 31.7,
      "stacks": 6
    }
  },
  {
    "id": "Taiga",
    "name": "Taiga",
    "allowedPos": [
      4
    ],
    "ti": "TI11",
    "team": "OG",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 257.3,
      "xpm": 315.9,
      "kda": 2.4,
      "lane_eff": 33.1,
      "hero_pool": 16.5,
      "assists": 16.1,
      "obs_placed": 9.9,
      "sen_placed": 6.9,
      "obs_denied": 44.2,
      "stacks": 3.9
    }
  },
  {
    "id": "Misha",
    "name": "Misha",
    "allowedPos": [
      5
    ],
    "ti": "TI11",
    "team": "OG",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 243,
      "xpm": 327.8,
      "kda": 2.8,
      "lane_eff": 44.1,
      "hero_pool": 22,
      "assists": 20.4,
      "obs_placed": 16.2,
      "sen_placed": 13.3,
      "obs_denied": 70,
      "stacks": 4.2
    }
  },
  {
    "id": "Yatoro",
    "name": "Yatoro",
    "allowedPos": [
      1
    ],
    "ti": "TI12",
    "team": "Team Spirit",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 330.6,
      "xpm": 377.6,
      "kda": 2.1,
      "lane_eff": 34,
      "hero_pool": 6.5,
      "assists": 5.4,
      "obs_placed": 1.4,
      "sen_placed": 1,
      "obs_denied": 30.7,
      "stacks": 1
    }
  },
  {
    "id": "Larl",
    "name": "Larl",
    "allowedPos": [
      2
    ],
    "ti": "TI12",
    "team": "Team Spirit",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 397.6,
      "xpm": 364.8,
      "kda": 2.7,
      "lane_eff": 31.3,
      "hero_pool": 10.5,
      "assists": 6.1,
      "obs_placed": 2.3,
      "sen_placed": 1,
      "obs_denied": 34.8,
      "stacks": 1.3
    }
  },
  {
    "id": "Collapse",
    "name": "Collapse",
    "allowedPos": [
      3,
      4
    ],
    "ti": "TI12",
    "team": "Team Spirit",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 420,
      "xpm": 416.5,
      "kda": 3,
      "lane_eff": 38.3,
      "hero_pool": 18,
      "assists": 11.9,
      "obs_placed": 7,
      "sen_placed": 2.6,
      "obs_denied": 52,
      "stacks": 6
    }
  },
  {
    "id": "Mira",
    "name": "Mira",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI12",
    "team": "Team Spirit",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 313.1,
      "xpm": 339.3,
      "kda": 3.2,
      "lane_eff": 38.3,
      "hero_pool": 23.1,
      "assists": 20,
      "obs_placed": 15,
      "sen_placed": 9.3,
      "obs_denied": 71.9,
      "stacks": 5.7
    }
  },
  {
    "id": "Miposhka",
    "name": "Miposhka",
    "allowedPos": [
      5
    ],
    "ti": "TI12",
    "team": "Team Spirit",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 202.5,
      "xpm": 224.3,
      "kda": 2.4,
      "lane_eff": 31.5,
      "hero_pool": 13,
      "assists": 20.4,
      "obs_placed": 13.5,
      "sen_placed": 9.1,
      "obs_denied": 59.5,
      "stacks": 3
    }
  },
  {
    "id": "dyrachyo",
    "name": "dyrachyo",
    "allowedPos": [
      1
    ],
    "ti": "TI12",
    "team": "Gaimin Gladiators",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 661.2,
      "xpm": 723.2,
      "kda": 3.9,
      "lane_eff": 59.9,
      "hero_pool": 11,
      "assists": 8.7,
      "obs_placed": 2.2,
      "sen_placed": 1.1,
      "obs_denied": 44.5,
      "stacks": 1.1
    }
  },
  {
    "id": "Quinn",
    "name": "Quinn",
    "allowedPos": [
      2
    ],
    "ti": "TI12",
    "team": "Gaimin Gladiators",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 442.4,
      "xpm": 467.2,
      "kda": 2.5,
      "lane_eff": 32.3,
      "hero_pool": 11.9,
      "assists": 7.9,
      "obs_placed": 2.2,
      "sen_placed": 1,
      "obs_denied": 26.8,
      "stacks": 1.7
    }
  },
  {
    "id": "Ace",
    "name": "Ace",
    "allowedPos": [
      3
    ],
    "ti": "TI12",
    "team": "Gaimin Gladiators",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 394.8,
      "xpm": 504.7,
      "kda": 3.4,
      "lane_eff": 41,
      "hero_pool": 18,
      "assists": 15.3,
      "obs_placed": 6.2,
      "sen_placed": 2.9,
      "obs_denied": 55.1,
      "stacks": 6
    }
  },
  {
    "id": "tOfu",
    "name": "tOfu",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI12",
    "team": "Gaimin Gladiators",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 207.7,
      "xpm": 308.1,
      "kda": 1.9,
      "lane_eff": 31.4,
      "hero_pool": 18.7,
      "assists": 14.7,
      "obs_placed": 11.1,
      "sen_placed": 6.1,
      "obs_denied": 48.2,
      "stacks": 5.1
    }
  },
  {
    "id": "Seleri",
    "name": "Seleri",
    "allowedPos": [
      5
    ],
    "ti": "TI12",
    "team": "Gaimin Gladiators",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 283.5,
      "xpm": 327.8,
      "kda": 2.4,
      "lane_eff": 44.1,
      "hero_pool": 19,
      "assists": 20.4,
      "obs_placed": 18.9,
      "sen_placed": 13.3,
      "obs_denied": 59.5,
      "stacks": 4.2
    }
  },
  {
    "id": "shiro",
    "name": "shiro",
    "allowedPos": [
      1
    ],
    "ti": "TI12",
    "team": "LGD Gaming",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 371.2,
      "xpm": 467.2,
      "kda": 2.9,
      "lane_eff": 32.9,
      "hero_pool": 7,
      "assists": 6.3,
      "obs_placed": 1.2,
      "sen_placed": 1,
      "obs_denied": 31.9,
      "stacks": 1
    }
  },
  {
    "id": "NothingToSay",
    "name": "NothingToSay",
    "allowedPos": [
      2
    ],
    "ti": "TI12",
    "team": "LGD Gaming",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 397.6,
      "xpm": 364.8,
      "kda": 2.7,
      "lane_eff": 31.3,
      "hero_pool": 10.5,
      "assists": 6.1,
      "obs_placed": 2.3,
      "sen_placed": 1,
      "obs_denied": 34.8,
      "stacks": 1.3
    }
  },
  {
    "id": "niu",
    "name": "niu",
    "allowedPos": [
      3
    ],
    "ti": "TI12",
    "team": "LGD Gaming",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 382.2,
      "xpm": 475.3,
      "kda": 3.1,
      "lane_eff": 49.1,
      "hero_pool": 15.3,
      "assists": 12.7,
      "obs_placed": 6.8,
      "sen_placed": 3.1,
      "obs_denied": 56.7,
      "stacks": 6
    }
  },
  {
    "id": "planet",
    "name": "planet",
    "allowedPos": [
      4
    ],
    "ti": "TI12",
    "team": "LGD Gaming",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 294.5,
      "xpm": 409.5,
      "kda": 2.6,
      "lane_eff": 40.9,
      "hero_pool": 23.1,
      "assists": 18.7,
      "obs_placed": 13.3,
      "sen_placed": 10.5,
      "obs_denied": 56.1,
      "stacks": 5.7
    }
  },
  {
    "id": "y`",
    "name": "y`",
    "allowedPos": [
      5
    ],
    "ti": "TI12",
    "team": "LGD Gaming",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 216,
      "xpm": 258.8,
      "kda": 2,
      "lane_eff": 27.3,
      "hero_pool": 12,
      "assists": 20.4,
      "obs_placed": 14.4,
      "sen_placed": 10.5,
      "obs_denied": 49,
      "stacks": 2.6
    }
  },
  {
    "id": "Lou",
    "name": "Lou",
    "allowedPos": [
      1
    ],
    "ti": "TI12",
    "team": "Azure Ray",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 388.6,
      "xpm": 505.6,
      "kda": 2.1,
      "lane_eff": 39.4,
      "hero_pool": 8.5,
      "assists": 5.4,
      "obs_placed": 1.6,
      "sen_placed": 1,
      "obs_denied": 30.7,
      "stacks": 1
    }
  },
  {
    "id": "Maybe",
    "name": "Maybe",
    "allowedPos": [
      2
    ],
    "ti": "TI12",
    "team": "Azure Ray",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 386.4,
      "xpm": 531.2,
      "kda": 2.5,
      "lane_eff": 42.9,
      "hero_pool": 9.1,
      "assists": 7.9,
      "obs_placed": 1.9,
      "sen_placed": 1,
      "obs_denied": 26.8,
      "stacks": 1.5
    }
  },
  {
    "id": "Chalice",
    "name": "Chalice",
    "allowedPos": [
      3
    ],
    "ti": "TI12",
    "team": "Azure Ray",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 294,
      "xpm": 416.5,
      "kda": 2.1,
      "lane_eff": 38.3,
      "hero_pool": 12.6,
      "assists": 11.9,
      "obs_placed": 4.9,
      "sen_placed": 2.6,
      "obs_denied": 36.4,
      "stacks": 6
    }
  },
  {
    "id": "fy",
    "name": "fy",
    "allowedPos": [
      4
    ],
    "ti": "TI12",
    "team": "Azure Ray",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 325.5,
      "xpm": 370.5,
      "kda": 2.6,
      "lane_eff": 45.2,
      "hero_pool": 20.9,
      "assists": 18.7,
      "obs_placed": 14.7,
      "sen_placed": 9.5,
      "obs_denied": 56.1,
      "stacks": 6.3
    }
  },
  {
    "id": "天命",
    "name": "天命",
    "allowedPos": [
      5
    ],
    "ti": "TI12",
    "team": "Azure Ray",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 202.5,
      "xpm": 224.3,
      "kda": 2.4,
      "lane_eff": 31.5,
      "hero_pool": 13,
      "assists": 20.4,
      "obs_placed": 13.5,
      "sen_placed": 9.1,
      "obs_denied": 59.5,
      "stacks": 3
    }
  },
  {
    "id": "Nightfall",
    "name": "Nightfall",
    "allowedPos": [
      1
    ],
    "ti": "TI12",
    "team": "BetBoom Team",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 475.6,
      "xpm": 505.6,
      "kda": 2.7,
      "lane_eff": 39.4,
      "hero_pool": 7,
      "assists": 5.4,
      "obs_placed": 1.3,
      "sen_placed": 1,
      "obs_denied": 24.4,
      "stacks": 1
    }
  },
  {
    "id": "gpk~",
    "name": "gpk~",
    "allowedPos": [
      2
    ],
    "ti": "TI12",
    "team": "BetBoom Team",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 565.6,
      "xpm": 556.8,
      "kda": 3.8,
      "lane_eff": 47.2,
      "hero_pool": 14.7,
      "assists": 9.1,
      "obs_placed": 3.2,
      "sen_placed": 1,
      "obs_denied": 48,
      "stacks": 1.9
    }
  },
  {
    "id": "Pure",
    "name": "Pure",
    "allowedPos": [
      3
    ],
    "ti": "TI12",
    "team": "BetBoom Team",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 306.6,
      "xpm": 298.9,
      "kda": 2.4,
      "lane_eff": 30.2,
      "hero_pool": 15.3,
      "assists": 10.2,
      "obs_placed": 4.3,
      "sen_placed": 2.4,
      "obs_denied": 34.8,
      "stacks": 6
    }
  },
  {
    "id": "Save-",
    "name": "Save-",
    "allowedPos": [
      4
    ],
    "ti": "TI12",
    "team": "BetBoom Team",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 269.7,
      "xpm": 347.1,
      "kda": 2.8,
      "lane_eff": 40,
      "hero_pool": 20.9,
      "assists": 21.3,
      "obs_placed": 13.9,
      "sen_placed": 10.1,
      "obs_denied": 68,
      "stacks": 6.3
    }
  },
  {
    "id": "TORONTOTOKYO",
    "name": "TORONTOTOKYO",
    "allowedPos": [
      5
    ],
    "ti": "TI12",
    "team": "BetBoom Team",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 189,
      "xpm": 293.3,
      "kda": 2,
      "lane_eff": 35.7,
      "hero_pool": 14,
      "assists": 20.4,
      "obs_placed": 12.6,
      "sen_placed": 11.9,
      "obs_denied": 49,
      "stacks": 3.4
    }
  },
  {
    "id": "miCKe",
    "name": "miCKe",
    "allowedPos": [
      1
    ],
    "ti": "TI13",
    "team": "Team Liquid",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 655.4,
      "xpm": 710.4,
      "kda": 3.8,
      "lane_eff": 57.8,
      "hero_pool": 10.5,
      "assists": 8.2,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 40.7,
      "stacks": 1
    }
  },
  {
    "id": "Nisha",
    "name": "Nisha",
    "allowedPos": [
      1,
      2
    ],
    "ti": "TI13",
    "team": "Team Liquid",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 609,
      "xpm": 608,
      "kda": 3,
      "lane_eff": 56.7,
      "hero_pool": 9.5,
      "assists": 6.8,
      "obs_placed": 2.1,
      "sen_placed": 1,
      "obs_denied": 35.7,
      "stacks": 1.1
    }
  },
  {
    "id": "33",
    "name": "33",
    "allowedPos": [
      3
    ],
    "ti": "TI13",
    "team": "Team Liquid",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 243.6,
      "xpm": 298.9,
      "kda": 1.9,
      "lane_eff": 30.2,
      "hero_pool": 12.6,
      "assists": 10.2,
      "obs_placed": 5.3,
      "sen_placed": 2.4,
      "obs_denied": 42.6,
      "stacks": 6
    }
  },
  {
    "id": "Boxi",
    "name": "Boxi",
    "allowedPos": [
      4
    ],
    "ti": "TI13",
    "team": "Team Liquid",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 300.7,
      "xpm": 425.1,
      "kda": 2.8,
      "lane_eff": 44.3,
      "hero_pool": 18.7,
      "assists": 21.3,
      "obs_placed": 15.3,
      "sen_placed": 9.1,
      "obs_denied": 68,
      "stacks": 5.1
    }
  },
  {
    "id": "iNsania",
    "name": "iNsania",
    "allowedPos": [
      5
    ],
    "ti": "TI13",
    "team": "Team Liquid",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 175.5,
      "xpm": 258.8,
      "kda": 2.4,
      "lane_eff": 27.3,
      "hero_pool": 15,
      "assists": 20.4,
      "obs_placed": 11.7,
      "sen_placed": 10.5,
      "obs_denied": 59.5,
      "stacks": 2.6
    }
  },
  {
    "id": "dyrachyo",
    "name": "dyrachyo",
    "allowedPos": [
      1
    ],
    "ti": "TI13",
    "team": "Gaimin Gladiators",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 493,
      "xpm": 544,
      "kda": 3,
      "lane_eff": 45.9,
      "hero_pool": 8.5,
      "assists": 6.8,
      "obs_placed": 1.7,
      "sen_placed": 1,
      "obs_denied": 35.7,
      "stacks": 1
    }
  },
  {
    "id": "Quinn",
    "name": "Quinn",
    "allowedPos": [
      2
    ],
    "ti": "TI13",
    "team": "Gaimin Gladiators",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 453.6,
      "xpm": 492.8,
      "kda": 2.7,
      "lane_eff": 36.6,
      "hero_pool": 9.1,
      "assists": 6.1,
      "obs_placed": 1.7,
      "sen_placed": 1,
      "obs_denied": 34.8,
      "stacks": 1.5
    }
  },
  {
    "id": "Ace",
    "name": "Ace",
    "allowedPos": [
      3
    ],
    "ti": "TI13",
    "team": "Gaimin Gladiators",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 407.4,
      "xpm": 534.1,
      "kda": 2.7,
      "lane_eff": 46.4,
      "hero_pool": 15.3,
      "assists": 13.6,
      "obs_placed": 7.6,
      "sen_placed": 2.7,
      "obs_denied": 53.6,
      "stacks": 6
    }
  },
  {
    "id": "tOfu",
    "name": "tOfu",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI13",
    "team": "Gaimin Gladiators",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 220.1,
      "xpm": 222.3,
      "kda": 2.3,
      "lane_eff": 25.4,
      "hero_pool": 16.5,
      "assists": 13.4,
      "obs_placed": 10.8,
      "sen_placed": 6.3,
      "obs_denied": 52.1,
      "stacks": 3.9
    }
  },
  {
    "id": "Seleri",
    "name": "Seleri",
    "allowedPos": [
      5
    ],
    "ti": "TI13",
    "team": "Gaimin Gladiators",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 297,
      "xpm": 362.3,
      "kda": 2.8,
      "lane_eff": 39.9,
      "hero_pool": 18,
      "assists": 20.4,
      "obs_placed": 19.8,
      "sen_placed": 14.7,
      "obs_denied": 70,
      "stacks": 3.8
    }
  },
  {
    "id": "skiter",
    "name": "skiter",
    "allowedPos": [
      1
    ],
    "ti": "TI13",
    "team": "Team Falcons",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 580,
      "xpm": 544,
      "kda": 3.5,
      "lane_eff": 45.9,
      "hero_pool": 10,
      "assists": 6.8,
      "obs_placed": 2,
      "sen_placed": 1,
      "obs_denied": 42,
      "stacks": 1
    }
  },
  {
    "id": "Malr1ne",
    "name": "Malr1ne",
    "allowedPos": [
      2
    ],
    "ti": "TI13",
    "team": "Team Falcons",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 476,
      "xpm": 544,
      "kda": 3.1,
      "lane_eff": 45.1,
      "hero_pool": 11.9,
      "assists": 8.5,
      "obs_placed": 2.6,
      "sen_placed": 1,
      "obs_denied": 37.4,
      "stacks": 1.7
    }
  },
  {
    "id": "ATF",
    "name": "ATF",
    "allowedPos": [
      3
    ],
    "ti": "TI13",
    "team": "Team Falcons",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 357,
      "xpm": 416.5,
      "kda": 2.6,
      "lane_eff": 38.3,
      "hero_pool": 15.3,
      "assists": 11.9,
      "obs_placed": 6,
      "sen_placed": 2.6,
      "obs_denied": 44.2,
      "stacks": 6
    }
  },
  {
    "id": "Cr1t-",
    "name": "Cr1t-",
    "allowedPos": [
      4,
      5
    ],
    "ti": "TI13",
    "team": "Team Falcons",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 313.1,
      "xpm": 339.3,
      "kda": 3.2,
      "lane_eff": 38.3,
      "hero_pool": 23.1,
      "assists": 20,
      "obs_placed": 15,
      "sen_placed": 9.3,
      "obs_denied": 71.9,
      "stacks": 5.7
    }
  },
  {
    "id": "Sneyking",
    "name": "Sneyking",
    "allowedPos": [
      5
    ],
    "ti": "TI13",
    "team": "Team Falcons",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 189,
      "xpm": 293.3,
      "kda": 2,
      "lane_eff": 35.7,
      "hero_pool": 14,
      "assists": 20.4,
      "obs_placed": 12.6,
      "sen_placed": 11.9,
      "obs_denied": 49,
      "stacks": 3.4
    }
  },
  {
    "id": "Pure",
    "name": "Pure",
    "allowedPos": [
      1
    ],
    "ti": "TI13",
    "team": "Tundra Esports",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 359.6,
      "xpm": 441.6,
      "kda": 2.7,
      "lane_eff": 44.8,
      "hero_pool": 6,
      "assists": 5.4,
      "obs_placed": 1.5,
      "sen_placed": 1,
      "obs_denied": 24.4,
      "stacks": 1
    }
  },
  {
    "id": "Topson",
    "name": "Topson",
    "allowedPos": [
      2
    ],
    "ti": "TI13",
    "team": "Tundra Esports",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 397.6,
      "xpm": 364.8,
      "kda": 2.7,
      "lane_eff": 31.3,
      "hero_pool": 10.5,
      "assists": 6.1,
      "obs_placed": 2.3,
      "sen_placed": 1,
      "obs_denied": 34.8,
      "stacks": 1.3
    }
  },
  {
    "id": "RAMZES666",
    "name": "RAMZES666",
    "allowedPos": [
      3
    ],
    "ti": "TI13",
    "team": "Tundra Esports",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 294,
      "xpm": 416.5,
      "kda": 2.1,
      "lane_eff": 38.3,
      "hero_pool": 12.6,
      "assists": 11.9,
      "obs_placed": 4.9,
      "sen_placed": 2.6,
      "obs_denied": 36.4,
      "stacks": 6
    }
  },
  {
    "id": "9Class",
    "name": "9Class",
    "allowedPos": [
      4
    ],
    "ti": "TI13",
    "team": "Tundra Esports",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 288.3,
      "xpm": 393.9,
      "kda": 3.4,
      "lane_eff": 37.4,
      "hero_pool": 20.9,
      "assists": 22.7,
      "obs_placed": 15.5,
      "sen_placed": 8.9,
      "obs_denied": 64,
      "stacks": 6.3
    }
  },
  {
    "id": "Whitemon",
    "name": "Whitemon",
    "allowedPos": [
      5
    ],
    "ti": "TI13",
    "team": "Tundra Esports",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 229.5,
      "xpm": 293.3,
      "kda": 2.4,
      "lane_eff": 35.7,
      "hero_pool": 17,
      "assists": 20.4,
      "obs_placed": 15.3,
      "sen_placed": 11.9,
      "obs_denied": 59.5,
      "stacks": 3.4
    }
  },
  {
    "id": "Ame",
    "name": "Ame",
    "allowedPos": [
      1
    ],
    "ti": "TI13",
    "team": "Xtreme Gaming",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 551,
      "xpm": 672,
      "kda": 3,
      "lane_eff": 51.3,
      "hero_pool": 10.5,
      "assists": 6.8,
      "obs_placed": 1.9,
      "sen_placed": 1.1,
      "obs_denied": 35.7,
      "stacks": 1
    }
  },
  {
    "id": "Xm",
    "name": "Xm",
    "allowedPos": [
      2
    ],
    "ti": "TI13",
    "team": "Xtreme Gaming",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 442.4,
      "xpm": 467.2,
      "kda": 2.5,
      "lane_eff": 32.3,
      "hero_pool": 11.9,
      "assists": 7.9,
      "obs_placed": 2.2,
      "sen_placed": 1,
      "obs_denied": 26.8,
      "stacks": 1.7
    }
  },
  {
    "id": "Xxs",
    "name": "Xxs",
    "allowedPos": [
      3
    ],
    "ti": "TI13",
    "team": "Xtreme Gaming",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 382.2,
      "xpm": 475.3,
      "kda": 3.1,
      "lane_eff": 49.1,
      "hero_pool": 15.3,
      "assists": 12.7,
      "obs_placed": 6.8,
      "sen_placed": 3.1,
      "obs_denied": 56.7,
      "stacks": 6
    }
  },
  {
    "id": "XinQ",
    "name": "XinQ",
    "allowedPos": [
      4
    ],
    "ti": "TI13",
    "team": "Xtreme Gaming",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 220.1,
      "xpm": 222.3,
      "kda": 2.3,
      "lane_eff": 25.4,
      "hero_pool": 16.5,
      "assists": 13.4,
      "obs_placed": 10.8,
      "sen_placed": 6.3,
      "obs_denied": 52.1,
      "stacks": 3.9
    }
  },
  {
    "id": "Dy",
    "name": "Dy",
    "allowedPos": [
      5
    ],
    "ti": "TI13",
    "team": "Xtreme Gaming",
    "account_id": null,
    "matchCount": 0,
    "source": "estimated",
    "stats": {
      "gpm": 283.5,
      "xpm": 327.8,
      "kda": 2.4,
      "lane_eff": 44.1,
      "hero_pool": 19,
      "assists": 20.4,
      "obs_placed": 18.9,
      "sen_placed": 13.3,
      "obs_denied": 59.5,
      "stacks": 4.2
    }
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

export const DATA_SUMMARY = {
  "total": 325,
  "byTI": {
    "TI1": 25,
    "TI2": 25,
    "TI3": 25,
    "TI4": 25,
    "TI5": 25,
    "TI6": 25,
    "TI7": 25,
    "TI8": 25,
    "TI9": 25,
    "TI10": 25,
    "TI11": 25,
    "TI12": 25,
    "TI13": 25
  },
  "bySource": {
    "estimated": 310,
    "api": 15
  }
};
