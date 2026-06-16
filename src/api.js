const BASE_URL = 'https://api.opendota.com/api';

// 1. 顶级战队白名单 (TI冠军及顶级豪门ID)
const TOP_TEAM_IDS = [
  15, 39, 2163, 2586969, 1838315, 6209166, 7119303, 1883502, 13756, 350190, 
  5, 2108395, 2626685, 7390454, 7391077, 8254400, 8255330, 8255888, 1838315
];

// 2. 真实位置映射表 (根据选手广为人知的位置)
const LEGEND_POSITIONS = {
  'Ame': [1], 'Yatoro': [1], 'ana': [1], 'Matumbaman': [1], 'Monet': [1],
  'Somnus': [2], 'Maybe': [2], 'Topson': [2], 'SumaiL': [2], 'NothingToSay': [2],
  'Chalice': [1, 3], 'Faith_bian': [3], 'Collapse': [3], 'Ceb': [3, 4], '33': [3],
  'fy': [4], 'XinQ': [4], 'JerAx': [4], 'GH': [4], 'Mira': [4],
  'y`': [5], 'xNova': [5], 'Miposhka': [5], 'Puppey': [5], 'KuroKy': [5], 'Notail': [1, 5]
};

/** 获取 TI 顶级战队 */
export const fetchTITeams = async (leagueId) => {
  try {
    const response = await fetch(`${BASE_URL}/leagues/${leagueId}/teams`);
    const data = await response.json();
    // 过滤：必须有名字，且要在名门列表里或者胜场极多
    return data.filter(team => 
      team.name && team.team_id && (TOP_TEAM_IDS.includes(team.team_id) || team.wins > 12)
    ).slice(0, 15);
  } catch (error) {
    return [];
  }
};

/** 获取战队选手及其真实属性 */
export const fetchTeamPlayers = async (teamId) => {
  try {
    const response = await fetch(`${BASE_URL}/teams/${teamId}/players`);
    const players = await response.json();
    
    const validPlayers = players
      .filter(p => (p.name || p.personaName) && p.games_played > 10)
      .sort((a, b) => b.games_played - a.games_played)
      .slice(0, 5);

    if (validPlayers.length < 5) return null;

    return validPlayers.map((p, index) => {
      const playerName = p.name || p.personaName;
      // 核心：确定允许位置。如果在名将表里则遵循名将表，否则按队内序号分配1-5
      const allowedPos = LEGEND_POSITIONS[playerName] || [(index % 5) + 1];
      
      return {
        id: p.account_id,
        name: playerName,
        allowedPos: allowedPos,
        stats: generateStatsByPos(allowedPos[0]) // 根据主位置生成数据
      };
    });
  } catch (error) {
    return null;
  }
};

/** 根据位置生成符合 5 项核心指标的数据 */
const generateStatsByPos = (pos) => {
  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
  const randDec = (min, max) => (Math.random() * (max - min) + min).toFixed(1);

  // 基础数据模板
  return {
    gpm: rand(250 + (5 - pos) * 100, 450 + (5 - pos) * 100), // 1号位高GPM
    xpm: rand(300 + (5 - pos) * 100, 500 + (5 - pos) * 100),
    kda: randDec(2, 8),
    assists: rand(pos > 3 ? 15 : 5, pos > 3 ? 35 : 15),
    sen_placed: rand(pos > 3 ? 30 : 0, pos > 3 ? 80 : 10), // 辅助真眼多
    obs_placed: rand(pos > 3 ? 15 : 0, pos > 3 ? 40 : 10), // 5号位假眼多
    obs_denied: rand(pos >= 4 ? 8 : 1, pos >= 4 ? 18 : 6), // 排眼率相关
    stacks: rand(pos === 3 || pos === 4 ? 8 : 0, pos === 3 || pos === 4 ? 22 : 10), // 3/4号位叠野多
    lane_eff: rand(65, 98), // 线优率 %
    hero_pool: rand(6, 16)  // 英雄池数量
  };
};