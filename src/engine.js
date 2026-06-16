import { DIMINISHING_WEIGHTS, POSITION_METRICS, BENCHMARKS, playerScore } from './config';

// 计算全队 5 人阵容评分
export function calculateTeamScore(roster) {
  let total = 0;
  for (let pos = 1; pos <= 5; pos++) {
    const p = roster[pos];
    if (!p) return 0;
    total += playerScore(p, pos);
  }
  return Math.round(total / 5);
}

// 降权叠加: 计算全队某项指标的有效总值
export function calculateDiminishingTotal(roster, statKey) {
  const values = [1, 2, 3, 4, 5]
    .map(pos => roster[pos]?.stats?.[statKey] || 0)
    .sort((a, b) => b - a);
  return values.reduce((sum, val, idx) => sum + val * (DIMINISHING_WEIGHTS[idx] || 0), 0);
}
