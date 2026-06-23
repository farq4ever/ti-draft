import React, { useState, useEffect, useRef, useCallback } from 'react';
import { RefreshCw, Trophy, Shield, Sparkles, ChevronDown, ChevronUp, RotateCcw, Dices, Share2, Award, Zap, Star } from 'lucide-react';
import { TI_PLAYERS, TI_POOLS, POS_LABELS, POS_DISPLAY, playerScore, finalScore, getTIRank, sfx, assignHiddenTraits, calcChemistry, ACHIEVEMENTS, loadAchievements, saveAchievements, getMeta, saveMeta } from './config';

const POOL_KEYS = Object.keys(TI_POOLS);

function pickTeam() {
  const key = POOL_KEYS[Math.floor(Math.random() * POOL_KEYS.length)];
  const td = TI_POOLS[key];
  const players = assignHiddenTraits(td.players.map(p => {
    const allowed = Array.isArray(p.allowedPos) ? p.allowedPos : [p.allowedPos];
    const scores = {};
    allowed.forEach(pos => { scores[pos] = playerScore(p, pos); });
    const primary = allowed[0];
    return { ...p, score: scores[primary], _scores: scores };
  }));
  return { ...td, players };
}

function fireConfetti() {
  const colors = ['#f59e0b','#fbbf24','#fcd34d','#ffffff','#fef3c7'];
  for (let i = 0; i < 80; i++) {
    const el = document.createElement('div');
    el.style.cssText = `position:fixed;width:8px;height:8px;background:${colors[i%5]};left:${Math.random()*100}%;top:-10px;border-radius:2px;z-index:9999;pointer-events:none;animation:confettiFall ${1+Math.random()*2}s ease-out forwards;animation-delay:${Math.random()*0.5}s`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 3000);
  }
}

export default function App() {
  const [round, setRound] = useState(1);
  const [pool, setPool] = useState(() => pickTeam());
  const [roster, setRoster] = useState({ 1: null, 2: null, 3: null, 4: null, 5: null });
  const [phase, setPhase] = useState('draft');
  const [rerolls, setRerolls] = useState(2);
  const [errorMsg, setErrorMsg] = useState('');
  const [swapping, setSwapping] = useState(null); // {name, ti} of player being repositioned
  const [history, setHistory] = useState([]);
  const [expandedPlayer, setExpandedPlayer] = useState(null);
  const [mobileTab, setMobileTab] = useState('pool');
  const [showCard, setShowCard] = useState(false);
  const [newAchievements, setNewAchievements] = useState([]);
  const [showAchievements, setShowAchievements] = useState(false);
  const [traitReveal, setTraitReveal] = useState(null);
  const traitTimer = useRef(null);
  const canvasRef = useRef(null);

  const myScore = phase === 'reveal' ? finalScore(roster) : null;
  const rankInfo = myScore ? getTIRank(myScore) : null;
  const chemistry = phase === 'reveal' ? calcChemistry(roster) : { bonus: 0, details: [] };

  const resetGame = () => {
    if (phase === 'reveal') return;
    setRound(1); setRoster({ 1: null, 2: null, 3: null, 4: null, 5: null });
    setPhase('draft'); setHistory([]); setExpandedPlayer(null); setRerolls(2);
    setSwapping(null); setShowCard(false); setNewAchievements([]);
    setPool(pickTeam());
    sfx('click');
  };

  const rerollTeam = () => {
    if (rerolls <= 0 || phase !== 'draft') return;
    setRerolls(r => r - 1); setExpandedPlayer(null); setPool(pickTeam());
    sfx('click');
  };

  const handlePick = (player, pos) => {
    if (phase !== 'draft') return;
    const allowed = Array.isArray(player.allowedPos) ? player.allowedPos : [player.allowedPos];
    if (!allowed.includes(pos)) return showError(`${player.name} 不能打 ${pos} 号位`);

    // 如果是换位模式 (点击已入选选手的目标位置)
    if (swapping && swapping.name === player.name) {
      const oldPos = Object.entries(roster).find(([p,pData]) => pData?.name === player.name);
      if (oldPos && parseInt(oldPos[0]) === pos) { setSwapping(null); return; } // 点同一个位置,取消
      const newRoster = { ...roster };
      if (oldPos) delete newRoster[oldPos[0]];
      newRoster[pos] = player;
      setRoster(newRoster);
      setSwapping(null);
      sfx('place');
      return;
    }

    // 普通选人
    if (roster[pos] && roster[pos].name !== player.name) return showError('这个位置已经有人了！');
    sfx('place');
    const newRoster = { ...roster, [pos]: player };
    setRoster(newRoster);
    setHistory([...history, { round, player, pos }]);
    setExpandedPlayer(null);

    // 如果有隐藏属性，先弹窗揭示
    if (player.traits && player.traits.length > 0) {
      setTraitReveal({ player, pos });
      traitTimer.current = setTimeout(() => {
        setTraitReveal(null);
        advanceRound(newRoster);
      }, 3000);
    } else {
      advanceRound(newRoster);
    }
  };

  const dismissTrait = () => {
    if (traitTimer.current) { clearTimeout(traitTimer.current); traitTimer.current = null; }
    setTraitReveal(null);
    advanceRound(roster);
  };

  const advanceRound = (newRoster) => {
    if (round < 5) { setRound(round + 1); setPool(pickTeam()); }
    else { endGame(newRoster); }
  };

  const endGame = (finalRoster) => {
    setPhase('reveal');
    sfx('reveal');
    setTimeout(() => {
      const score = finalScore(finalRoster);
      if (score >= 76) { fireConfetti(); sfx('champion'); }
      else if (score < 55) sfx('fail');
    }, 1800);
    checkAchievements(finalRoster);
  };

  const checkAchievements = (rost) => {
    const stored = loadAchievements();
    const newOnes = [];
    const totalGames = (stored.totalGames || 0) + 1;
    stored.totalGames = totalGames;
    const rank = getTIRank(finalScore(rost));
    const totalWins = (stored.totalWins || 0) + (rank.id === 'champion' ? 1 : 0);
    stored.totalWins = totalWins;
    const oldPrevResult = getMeta().prevResult;  // 保留上一把的结果（saveMeta 会覆盖）
    const meta = saveMeta(rank.id, { rerollsUsed: 2 - rerolls });
    // 涅槃成就需要查看「上一把」结果，传入合并后的 meta
    const metaWithOldPrev = { ...meta, prevResult: oldPrevResult };
    ACHIEVEMENTS.forEach(a => {
      if (stored[a.id]) return;
      let earned = false;
      if (a.check.length <= 1) earned = a.check(totalGames);
      else if (a.check.length === 2) earned = a.check(totalGames, totalWins);
      else if (a.check.length === 3) earned = a.check(totalGames, rank.id, rost);
      else earned = a.check(totalGames, rank.id, rost, undefined, metaWithOldPrev);
      if (earned) { stored[a.id] = Date.now(); newOnes.push(a); }
    });
    saveAchievements(stored);
    setStoredAch(stored);
    if (newOnes.length > 0) { setNewAchievements(newOnes); setTimeout(() => setNewAchievements([]), 5000); }
  };

  const showError = msg => { setErrorMsg(msg); setTimeout(() => setErrorMsg(''), 2000); };

  const flavorText = getFlavorText(myScore || 0);
  const generateShareCard = useCallback(() => {
    setShowCard(true);
    setTimeout(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const W = 600, H = 960;
      canvas.width = W; canvas.height = H;

      // ── Background ──
      const bg = ctx.createLinearGradient(0, 0, 0, H);
      bg.addColorStop(0, '#0d0815'); bg.addColorStop(0.5, '#120a1e'); bg.addColorStop(1, '#06080d');
      ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);

      // Subtle glow at top
      const glow = ctx.createRadialGradient(300, 80, 20, 300, 80, 400);
      glow.addColorStop(0, 'rgba(255,120,20,0.12)'); glow.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = glow; ctx.fillRect(0, 0, W, 300);

      // Decorative lines
      ctx.strokeStyle = 'rgba(255,120,20,0.15)'; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(40, 100); ctx.lineTo(W - 40, 100); ctx.stroke();

      // ── Header ──
      ctx.fillStyle = '#ff6600'; ctx.font = 'bold 32px sans-serif'; ctx.textAlign = 'center';
      ctx.fillText('🏆 举盾', W/2, 55);
      ctx.fillStyle = '#777'; ctx.font = '13px sans-serif';
      ctx.fillText('TI全明星选秀 · 打造你的幻神阵容', W/2, 78);

      // ── Score Circle ──
      const cx = W/2, cy = 160, r = 55;
      const scoreGrad = ctx.createLinearGradient(cx-r, cy-r, cx+r, cy+r);
      scoreGrad.addColorStop(0, '#ff6600'); scoreGrad.addColorStop(1, '#cc3300');
      ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI*2);
      ctx.fillStyle = scoreGrad; ctx.fill();
      ctx.beginPath(); ctx.arc(cx, cy, r-3, 0, Math.PI*2);
      ctx.fillStyle = '#0d0815'; ctx.fill();
      ctx.fillStyle = '#fff'; ctx.font = 'bold 48px sans-serif';
      ctx.fillText(myScore, cx, cy + 14);

      // Rank title
      const rankColor = rankInfo?.bg?.includes('yellow') ? '#facc15' : rankInfo?.bg?.includes('slate') ? '#cbd5e1' : rankInfo?.bg?.includes('orange') ? '#f59e0b' : rankInfo?.bg?.includes('purple') ? '#c084fc' : rankInfo?.bg?.includes('blue') ? '#60a5fa' : '#64748b';
      ctx.fillStyle = rankColor; ctx.font = 'bold 16px sans-serif';
      ctx.fillText(rankInfo?.title || '', cx, cy + r + 28);
      if (chemistry > 0) {
        ctx.fillStyle = '#4ade80'; ctx.font = 'bold 13px sans-serif';
        if (chemistry.bonus > 0) { ctx.fillStyle = '#4ade80'; ctx.font = 'bold 13px sans-serif'; ctx.fillText('💫 化学反应 +' + chemistry.bonus, cx, cy + r + 48); }
      }

      // ── Roster Cards ──
      const cardYStart = 280, cardH = 100, cardGap = 10;
      const cardColors = ['#ff6600','#ff8800','#e040fb','#448aff','#00bcd4'];
      [1,2,3,4,5].forEach((pos, i) => {
        const p = roster[pos]; if (!p) return;
        const y = cardYStart + i * (cardH + cardGap);
        const c = cardColors[pos-1];

        // Card BG
        ctx.fillStyle = '#12101a'; roundRect(ctx, 25, y, W-50, cardH, 12); ctx.fill();
        ctx.strokeStyle = 'rgba(255,255,255,0.06)'; ctx.lineWidth = 1;
        roundRect(ctx, 25, y, W-50, cardH, 12); ctx.stroke();

        // Left accent bar
        ctx.fillStyle = c; roundRect(ctx, 25, y+12, 4, cardH-24, 2); ctx.fill();

        // Position badge
        ctx.fillStyle = c; roundRect(ctx, 48, y+20, 38, 36, 10); ctx.fill();
        ctx.fillStyle = '#fff'; ctx.font = 'bold 22px sans-serif'; ctx.textAlign = 'center';
        ctx.fillText(pos, 67, y+46);

        // Name + origin
        ctx.fillStyle = '#fff'; ctx.font = 'bold 18px sans-serif'; ctx.textAlign = 'left';
        ctx.fillText(p.name, 100, y + 35);
        ctx.fillStyle = '#777'; ctx.font = '11px sans-serif';
        ctx.fillText(p.ti + ' · ' + p.team, 100, y + 53);

        // Stats row
        const disp = POS_DISPLAY[pos] || [];
        const statW = 88;
        disp.forEach(({k,l,f}, si) => {
          const sx = 105 + si * statW;
          ctx.fillStyle = '#444'; ctx.font = 'bold 9px sans-serif'; ctx.textAlign = 'center';
          ctx.fillText(l, sx + statW/2, y + 75);
          ctx.fillStyle = '#ddd'; ctx.font = 'bold 12px sans-serif';
          ctx.fillText(f(p.stats?.[k] ?? 0), sx + statW/2, y + 92);
        });

        // Position score (right side)
        ctx.fillStyle = c; ctx.font = 'bold 22px sans-serif'; ctx.textAlign = 'right';
        ctx.fillText(String(playerScore(p, pos)), W - 40, y + 55);
      });

      // ── Flavor Text ──
      const flavorY = cardYStart + 5*(cardH+cardGap) + 25;
      ctx.fillStyle = '#1a1620'; roundRect(ctx, 25, flavorY, W-50, 70, 12); ctx.fill();
      ctx.strokeStyle = 'rgba(255,255,255,0.05)'; roundRect(ctx, 25, flavorY, W-50, 70, 12); ctx.stroke();
      ctx.fillStyle = '#aaa'; ctx.font = 'italic 11px sans-serif'; ctx.textAlign = 'center';
      wrapText(ctx, flavorText, W/2, flavorY + 25, W-80, 16);

      // ── Footer ──
      ctx.fillStyle = '#444'; ctx.font = '10px sans-serif'; ctx.textAlign = 'center';
      ctx.fillText('分享自 举盾 · TI全明星选秀', W/2, H - 20);
    }, 100);
  }, [myScore, rankInfo, roster, chemistry]);

  // Canvas helper: rounded rect
  function roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x+r, y); ctx.lineTo(x+w-r, y);
    ctx.arcTo(x+w, y, x+w, y+r, r); ctx.lineTo(x+w, y+h-r);
    ctx.arcTo(x+w, y+h, x+w-r, y+h, r); ctx.lineTo(x+r, y+h);
    ctx.arcTo(x, y+h, x, y+h-r, r); ctx.lineTo(x, y+r);
    ctx.arcTo(x, y, x+r, y, r); ctx.closePath();
  }

  // Canvas helper: text wrapping
  function wrapText(ctx, text, x, y, maxW, lineH) {
    const chars = text.split('');
    let line = '', ly = y;
    for (let i = 0; i < chars.length; i++) {
      const test = line + chars[i];
      if (ctx.measureText(test).width > maxW && line.length > 0) {
        ctx.fillText(line, x, ly); line = chars[i]; ly += lineH;
      } else { line = test; }
    }
    if (line) ctx.fillText(line, x, ly);
  }

  const downloadCard = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = 'ti-draft-roster.png';
    link.href = canvas.toDataURL();
    link.click();
  };

  const [storedAch, setStoredAch] = useState(loadAchievements);
  const unlockedCount = ACHIEVEMENTS.filter(a => storedAch[a.id]).length;
  const refreshAch = () => setStoredAch(loadAchievements());

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0e18] via-[#0f111d] to-[#0b0d16] text-slate-200 selection:bg-amber-500/30">
      <style>{`@keyframes confettiFall{0%{transform:translateY(0) rotate(0deg);opacity:1}100%{transform:translateY(100vh) rotate(720deg);opacity:0}}@keyframes cardReveal{0%{transform:rotateY(90deg);opacity:0}100%{transform:rotateY(0);opacity:1}}@keyframes pulse{0%,100%{opacity:1}50%{opacity:.5}}@keyframes slideUp{0%{transform:translateY(20px);opacity:0}100%{transform:translateY(0);opacity:1}}`}</style>
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-15">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-yellow-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-3 py-3 md:px-4 md:py-5 relative z-10">
        {/* HEADER */}
        <header className="flex flex-wrap items-center justify-between gap-2 mb-3 md:mb-5">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-amber-500 blur-md rounded-xl md:rounded-2xl opacity-40" />
              <div className="relative bg-gradient-to-br from-amber-500 to-red-600 p-2 md:p-2.5 rounded-xl md:rounded-2xl shadow-xl">
                <Trophy size={22} className="md:size-7 text-white" fill="rgba(255,255,255,0.2)" />
              </div>
            </div>
            <div>
              <h1 className="text-base md:text-2xl font-black italic tracking-tight text-white">举<span className="text-amber-500">盾</span></h1>
              <p className="text-[8px] md:text-[10px] text-slate-500 font-bold tracking-[0.15em] uppercase">
                {phase === 'draft' ? `第 ${round}/5 轮选秀` : '最终阵容'}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1 md:gap-2">
            {pool && phase === 'draft' && (
              <span className="bg-white/5 border border-white/10 px-2 md:px-3 py-1 md:py-1.5 rounded-lg text-[8px] md:text-[10px] font-black uppercase tracking-wider text-slate-300 max-w-[100px] md:max-w-none truncate">
                {pool.ti} · {pool.team}
              </span>
            )}
            <button onClick={rerollTeam} disabled={rerolls <= 0 || phase !== 'draft'} title="刷新当前可选队伍（保留已选阵容）"
              className="flex items-center gap-1 md:gap-1.5 bg-white/5 border border-blue-500/30 hover:border-blue-400 hover:bg-blue-500/10 px-2 md:px-3 py-1 md:py-1.5 rounded-lg text-[8px] md:text-[10px] font-black uppercase disabled:opacity-20 transition-all cursor-pointer">
              <Dices size={11} className="md:size-3 text-blue-400" />刷新({rerolls})</button>
            <button onClick={resetGame} disabled={phase === 'reveal'} title="完全重开游戏"
              className="flex items-center gap-1 md:gap-1.5 bg-white/5 border border-red-500/30 hover:border-red-400 hover:bg-red-500/10 px-2 md:px-3 py-1 md:py-1.5 rounded-lg text-[8px] md:text-[10px] font-black uppercase disabled:opacity-20 transition-all cursor-pointer">
              <RotateCcw size={11} className="md:size-3 text-red-400" />重开</button>
            {storedAch.totalGames > 0 && (
              <button onClick={() => setShowAchievements(!showAchievements)} title="成就"
                className="flex items-center gap-1 bg-yellow-500/10 border border-yellow-500/30 hover:border-yellow-400 hover:bg-yellow-500/20 px-2.5 py-1.5 rounded-xl text-[10px] font-black transition-all cursor-pointer">
                <Award size={13} className="text-yellow-400" />成就 {unlockedCount}/{ACHIEVEMENTS.length}
              </button>
            )}
            <button onClick={() => setShowAchievements(!showAchievements)} title="查看成就"
              className="flex items-center gap-1 bg-white/5 border border-white/10 hover:border-white/30 px-2 py-1.5 rounded-xl text-[10px] font-black transition-all cursor-pointer md:hidden">
              🏅
            </button>
          </div>
        </header>

        {/* Achievements panel */}
        {showAchievements && (
          <div className="mb-4 p-3 md:p-4 bg-white/[0.03] border border-white/10 rounded-2xl">
            <h3 className="text-xs font-black text-white/40 uppercase tracking-widest mb-3">🏅 成就 ({unlockedCount}/{ACHIEVEMENTS.length})</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
              {ACHIEVEMENTS.map(a => {
                const unlocked = !!storedAch[a.id];
                return (
                  <div key={a.id} className={`p-2 rounded-xl text-center text-[10px] transition-all ${unlocked ? 'bg-yellow-500/10 border border-yellow-500/30' : 'bg-white/[0.02] border border-white/5 opacity-35'}`}>
                    <div className="text-lg">{unlocked ? a.icon : '🔒'}</div>
                    <div className="font-black text-white/80 mt-1">{a.title}</div>
                    <div className="text-[8px] text-white/30 mt-0.5">{a.desc}</div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* New achievements toast */}
        {newAchievements.length > 0 && (
          <div className="fixed top-4 left-1/2 -translate-x-1/2 bg-yellow-600 text-white px-4 py-2.5 rounded-full font-bold text-xs shadow-2xl z-[100] animate-bounce flex items-center gap-2">
            🏅 成就解锁: {newAchievements.map(a => a.title).join(', ')}
          </div>
        )}

        {errorMsg && (
          <div className="fixed top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded-full font-bold text-xs shadow-2xl z-[100] animate-bounce">
            ⚠ {errorMsg}
          </div>
        )}

        {/* Trait reveal popup */}
        {traitReveal && (
          <div className="fixed inset-0 bg-black/70 z-[150] flex items-center justify-center p-4">
            <div className="bg-[#0f0a1a] border-2 border-purple-500/40 rounded-3xl p-6 md:p-8 max-w-sm w-full text-center shadow-2xl animate-in zoom-in-95 duration-300" onClick={e => e.stopPropagation()}>
              <div className="text-4xl mb-3 animate-bounce">🔮</div>
              <h3 className="text-lg font-black text-white mb-1">{traitReveal.player.name}</h3>
              <p className="text-[10px] text-purple-300/60 font-bold uppercase tracking-wider mb-4">隐藏属性揭示</p>
              <div className="space-y-2 mb-4">
                {traitReveal.player.traits.map((t, i) => (
                  <div key={t.id} className="bg-purple-600/10 border border-purple-500/30 rounded-2xl p-3 animate-in slide-in-from-bottom-4 duration-300" style={{ animationDelay: `${i * 0.2}s` }}>
                    <div className="text-sm font-black text-purple-300">{t.label}</div>
                    <div className="text-[10px] text-purple-400/60 font-bold mt-0.5">{t.desc}</div>
                  </div>
                ))}
              </div>
              <button onClick={dismissTrait}
                className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-2.5 rounded-full font-black text-xs uppercase tracking-wider transition-all cursor-pointer">
                确认 {traitReveal.player.name} → Pos {traitReveal.pos}
              </button>
            </div>
          </div>
        )}

        {/* DRAFT PHASE */}
        {phase === 'draft' && (
          <>
            <div className="flex md:hidden gap-1 mb-3">
              <button onClick={() => setMobileTab('pool')} className={`flex-1 py-2 rounded-xl text-[10px] font-black uppercase ${mobileTab === 'pool' ? 'bg-amber-600 text-white' : 'bg-white/5 text-white/30'}`}>🃏 选人({6-round}轮)</button>
              <button onClick={() => setMobileTab('roster')} className={`flex-1 py-2 rounded-xl text-[10px] font-black uppercase ${mobileTab === 'roster' ? 'bg-amber-600 text-white' : 'bg-white/5 text-white/30'}`}>🛡 阵容({Object.values(roster).filter(Boolean).length}/5)</button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 md:gap-5">
              <div className={`lg:col-span-7 ${mobileTab !== 'pool' ? 'hidden md:block' : ''}`}>
                <div className="hidden md:flex items-center gap-2 mb-3">
                  <div className="w-1.5 h-5 bg-amber-500 rounded-full" /><h2 className="text-sm font-black uppercase tracking-widest text-slate-400">可选队员</h2>
                  <span className="text-[10px] text-slate-600 ml-2">还剩 {6 - round} 次选择</span>
                </div>
                <div className="space-y-1.5 md:space-y-2">
                  {pool.players.map((p, i) => (
                    <PlayerCard key={`${p.name}-${i}`} player={p} roster={roster} swapping={swapping}
                      expanded={expandedPlayer === i} onToggle={() => { sfx('pick'); setExpandedPlayer(expandedPlayer === i ? null : i); }}
                      onPick={handlePick} />
                  ))}
                </div>
                {history.length > 0 && (
                  <div className="mt-3 flex gap-1 flex-wrap">
                    {history.map((h, i) => (
                      <span key={i} className="text-[9px] md:text-[10px] bg-white/5 border border-white/10 px-2 py-0.5 md:py-1 rounded-lg font-bold text-slate-400">R{h.round} <span className="text-amber-400">{h.player.name}</span> → {h.pos}</span>
                    ))}
                  </div>
                )}
              </div>
              <div className={`lg:col-span-5 ${mobileTab !== 'roster' ? 'hidden md:block' : ''}`}>
                <RosterPanel roster={roster} score={null} swapping={swapping} onSwapClick={(p) => setSwapping(swapping?.name === p.name ? null : { name: p.name, ti: p.ti })} />
              </div>
            </div>
          </>
        )}

        {/* REVEAL PHASE */}
        {phase === 'reveal' && (
          <RevealScreen roster={roster} score={myScore} rankInfo={rankInfo} chemistry={chemistry}
            onNewGame={() => window.location.reload()}
            onShare={generateShareCard} showCard={showCard} closeCard={() => setShowCard(false)}
            canvasRef={canvasRef} onDownload={downloadCard} />
        )}
      </div>
    </div>
  );
}

// ═══════════════ PLAYER CARD ═══════════════
function PlayerCard({ player, roster, expanded, onToggle, onPick, swapping }) {
  const allowed = Array.isArray(player.allowedPos) ? player.allowedPos : [player.allowedPos];
  const allBlocked = allowed.every(pos => roster[pos] !== null && roster[pos]?.name !== player.name);
  const used = Object.values(roster).some(r => r?.name === player.name && r?.ti === player.ti);
  const unavailable = allBlocked && !used;
  const primary = allowed[0];
  const display = POS_DISPLAY[primary] || [];
  const hasTrait = player.traits && player.traits.length > 0;
  const scoreDiff = player._originalScore ? player.score - player._originalScore : 0;

  return (
    <div className={`rounded-xl md:rounded-2xl border transition-all duration-300 ${unavailable ? 'bg-white/[0.02] border-white/5 opacity-30' : 'bg-white/[0.03] border-white/10 hover:border-amber-500/30 hover:bg-white/[0.05] cursor-pointer'}`}
      onClick={() => !unavailable && onToggle()}>
      <div className="flex items-center p-2.5 md:p-3.5 gap-2 md:gap-3">
        <div className={`w-9 h-9 md:w-11 md:h-11 rounded-lg md:rounded-xl flex items-center justify-center font-black text-sm md:text-base shrink-0 ${unavailable ? 'bg-white/5 text-white/20' : 'bg-gradient-to-br from-amber-600/30 to-red-600/20 text-amber-400 ring-1 ring-amber-500/20'}`}>{primary}</div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <h3 className={`font-black text-xs md:text-sm tracking-tight truncate ${unavailable ? 'text-white/20' : 'text-white'}`}>{player.name}</h3>
            {/* 隐藏属性 — 选前不显示任何提示 */}
          </div>
          <div className="flex gap-0.5 md:gap-1 mt-0.5">
            {allowed.map(ap => (
              <span key={ap} className={`text-[7px] md:text-[8px] font-black px-1 md:px-1.5 py-0.5 rounded-md uppercase tracking-wider ${roster[ap] ? 'bg-white/5 text-white/15 line-through' : 'bg-amber-500/15 text-amber-400 border border-amber-500/20'}`}>{POS_LABELS[ap]}</span>
            ))}
          </div>
        </div>
        <div className="text-right shrink-0 min-w-[60px]">
          {player._scores && Object.keys(player._scores).length > 1 ? (
            <div className="space-y-0.5">
              {Object.entries(player._scores).map(([pos,sc]) => (
                <div key={pos} className={`flex items-center gap-1.5 ${roster[pos] ? 'opacity-20' : ''}`}>
                  <span className={`text-[9px] font-black tracking-wider ${roster[pos] ? 'text-white/15' : 'text-amber-400'}`}>{POS_LABELS[pos]?.slice(0,2)}</span>
                  <span className={`text-sm font-black italic ${roster[pos] ? 'text-white/15' : scoreDiff > 0 ? 'text-green-400' : 'text-amber-400'}`}>{sc}</span>
                </div>
              ))}
            </div>
          ) : (
            <>
              <div className={`text-lg md:text-xl font-black italic ${unavailable ? 'text-white/20' : scoreDiff > 0 ? 'text-green-400' : 'text-amber-400'}`}>{player.score}</div>
              <div className="text-[6px] md:text-[7px] text-white/20 font-black uppercase">Rating</div>
            </>
          )}
        </div>
        {!unavailable && <div className="text-white/20">{expanded ? <ChevronUp size={14} className="md:size-4" /> : <ChevronDown size={14} className="md:size-4" />}</div>}
      </div>
      {expanded && !unavailable && (
        <div className="px-2.5 md:px-3.5 pb-2.5 md:pb-3.5 border-t border-white/5 pt-2 md:pt-3">
          {/* 隐藏属性 — 选前完全不显示，选后才揭示 */}
          {allowed.length > 1 ? (
            <div className="grid gap-1.5 md:gap-2 mb-2 md:mb-3">
              {allowed.map(pos => (
                <div key={pos} className={`rounded-lg md:rounded-xl p-2 md:p-2.5 ${roster[pos] ? 'bg-white/[0.02] opacity-30' : 'bg-white/[0.04]'}`}>
                  <div className="flex justify-between items-center mb-1 md:mb-1.5"><span className="text-[8px] md:text-[9px] font-black text-amber-400 uppercase">{POS_LABELS[pos]} · {playerScore(player, pos)}</span>{roster[pos] && <span className="text-[7px] text-white/30">已填</span>}</div>
                  <div className="grid grid-cols-5 gap-0.5 md:gap-1">{POS_DISPLAY[pos].map(({k,l,f}) => (<div key={k} className="text-center bg-black/30 rounded-md md:rounded-lg py-1"><div className="text-[6px] md:text-[7px] text-white/30 font-black uppercase">{l}</div><div className="text-[9px] md:text-[10px] font-mono font-bold text-white">{f(player.stats?.[k] ?? 0)}</div></div>))}</div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-5 gap-0.5 md:gap-1 mb-2 md:mb-3">{display.map(({k,l,f}) => (<div key={k} className="text-center bg-black/30 rounded-md md:rounded-lg py-1 md:py-1.5"><div className="text-[6px] md:text-[7px] text-white/30 font-black uppercase">{l}</div><div className="text-[10px] md:text-[11px] font-mono font-bold text-white">{f(player.stats?.[k] ?? 0)}</div></div>))}</div>
          )}
          <div className="flex gap-0.5 md:gap-1">{[1,2,3,4,5].map(pos => {
            const isOwn = roster[pos]?.name === player.name;
            const isFilled = roster[pos] && !isOwn;
            const canPick = allowed.includes(pos) && !isFilled;
            const isSwappingThis = swapping && swapping.name === player.name;
            let btnClass = 'bg-white/[0.02] text-white/10 cursor-not-allowed';
            let label = String(pos);
            if (isFilled) { btnClass = 'bg-white/5 text-white/15 cursor-not-allowed'; label = '✓'; }
            else if (canPick && isSwappingThis) {
              btnClass = 'bg-gradient-to-b from-amber-400 to-amber-500 text-black font-bold animate-pulse hover:from-amber-300 active:scale-95 shadow-lg shadow-amber-400/40 cursor-pointer';
              label = player._scores?.[pos] != null ? String(player._scores[pos]) : pos;
            }
            else if (canPick) { btnClass = 'bg-gradient-to-b from-amber-500 to-amber-600 text-white hover:from-amber-400 active:scale-95 shadow-lg shadow-amber-900/30 cursor-pointer'; }
            return (<button key={pos} onClick={e => { e.stopPropagation(); if (canPick) onPick(player, pos); }} disabled={!canPick}
              className={`flex-1 py-2 md:py-2 rounded-lg md:rounded-xl text-[9px] md:text-[10px] font-black transition-all min-h-[36px] md:min-h-0 ${btnClass}`}>{label}</button>);
          })}</div>
        </div>
      )}
      {!expanded && unavailable && <div className="px-2.5 md:px-3.5 pb-2 md:pb-3 text-[8px] md:text-[9px] font-black uppercase text-white/15 text-right">{used ? '已入选' : '无可用位置'}</div>}
    </div>
  );
}

// ═══════════════ ROSTER PANEL ═══════════════
function RosterPanel({ roster, score, swapping, onSwapClick }) {
  return (
    <div className="bg-white/[0.02] border border-white/10 rounded-2xl md:rounded-[2rem] p-3 md:p-5 sticky top-3 md:top-5">
      <div className="text-center mb-3 md:mb-5"><Shield size={16} className="md:size-5 text-amber-500/40 mx-auto mb-1.5 md:mb-2" /><h2 className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.4em] md:tracking-[0.5em] text-white/20">BP 阵容{swapping && <span className="text-amber-400 animate-pulse ml-1">· 换位中</span>}</h2></div>
      <div className="space-y-1.5 md:space-y-2">
        {[1,2,3,4,5].map(pos => {
          const player = roster[pos]; const disp = POS_DISPLAY[pos] || [];
          const isSwapping = swapping && player && swapping.name === player.name;
          const isSwapTarget = swapping && !player; // 空位可以作为换位目标
          const allowedSwapPos = player ? (Array.isArray(player.allowedPos) ? player.allowedPos : [player.allowedPos]) : [];
          const isSwapAvailable = isSwapTarget && swapping && allowedSwapPos.includes(pos);
          return (<div key={pos}
            onClick={() => { if (player && !swapping) { setExpandedPlayer(null); onSwapClick(player); } else if (isSwapTarget && isSwapAvailable && swapping) { const swapPlayer = Object.values(roster).find(p => p?.name === swapping.name && p?.ti === swapping.ti); if (swapPlayer) { const newRoster = { ...roster }; const oldPos = Object.entries(roster).find(([op,opd]) => opd?.name === swapping.name); if (oldPos) delete newRoster[oldPos[0]]; newRoster[pos] = swapPlayer; setRoster(newRoster); setSwapping(null); sfx('place'); } } }}
            className={`rounded-xl md:rounded-2xl border-2 transition-all duration-300 overflow-hidden ${isSwapping ? 'border-amber-400/60 bg-amber-500/[0.08] ring-1 ring-amber-400/30' : isSwapAvailable ? 'border-amber-400/40 border-dashed bg-amber-500/[0.04] cursor-pointer hover:bg-amber-500/[0.08]' : player ? 'border-amber-500/30 bg-amber-500/[0.04] ' + (swapping ? 'opacity-50' : 'cursor-pointer hover:border-amber-400/50') : 'border-dashed border-white/5 bg-white/[0.01]'}`}>
            <div className="flex items-center gap-2 md:gap-3 p-2.5 md:p-3">
              <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl flex items-center justify-center font-black text-xs md:text-sm shrink-0 ${isSwapping ? 'bg-amber-400 text-black shadow-lg shadow-amber-400/30' : player ? 'bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-900/20' : isSwapAvailable ? 'bg-amber-500/20 text-amber-400' : 'bg-white/5 text-white/15'}`}>{isSwapAvailable ? '?' : pos}</div>
              {player ? (<div className="flex-1 min-w-0"><div className="text-[7px] md:text-[8px] text-white/30 font-black uppercase tracking-wider">{POS_LABELS[pos]}</div><div className="flex items-center gap-1"><span className="text-xs md:text-sm font-black text-white truncate">{player.name}</span>{player.traits?.length > 0 && <span className="text-[9px] shrink-0">✨</span>}</div><div className="text-[8px] md:text-[9px] text-amber-400/60 font-bold truncate">{player.ti} · {player.team}</div>{player.traits?.length > 0 && <div className="flex gap-0.5 mt-0.5 flex-wrap">{player.traits.map(t=><span key={t.id} className="text-[6px] md:text-[7px] bg-purple-600/20 border border-purple-500/20 text-purple-300/80 px-1 py-0.5 rounded-full font-bold">{t.label}</span>)}</div>}</div>) : (<div className="flex-1 text-white/15 text-[10px] md:text-xs font-bold italic">{isSwapAvailable ? '点击换至此位...' : '等待英雄...'}</div>)}
              {player && <div className={`font-black text-base md:text-lg shrink-0 ${isSwapping ? 'text-amber-300' : 'text-amber-400'}`}>{isSwapping && allowedSwapPos.length > 1 ? allowedSwapPos.map(ap => playerScore(player, ap)).join(' / ') : playerScore(player, pos)}</div>}
            </div>
            {player && !swapping && (<div className="px-2.5 md:px-3 pb-2.5 md:pb-3"><div className="grid grid-cols-5 gap-0.5 md:gap-1">{disp.map(({k,l,f}) => (<div key={k} className="text-center bg-black/30 rounded-md md:rounded-lg py-1 md:py-1.5"><div className="text-[6px] md:text-[7px] text-white/25 font-black uppercase leading-tight">{l}</div><div className="text-[10px] md:text-[11px] font-mono font-bold text-white/90 mt-0.5">{f(player.stats?.[k] ?? 0)}</div></div>))}</div></div>)}
          </div>);
        })}
      </div>
      <div className="mt-3 md:mt-4 text-center">
        <div className="flex gap-1 justify-center">{[1,2,3,4,5].map(pos => (<div key={pos} className={`w-5 h-1.5 md:w-6 md:h-2 rounded-full transition-all ${roster[pos] ? 'bg-amber-500' : 'bg-white/10'}`} />))}</div>
        <div className="text-[7px] md:text-[8px] text-white/20 font-bold mt-1.5">{Object.values(roster).filter(Boolean).length}/5 已选</div>
      </div>
    </div>
  );
}

// ═══════════════ REVEAL SCREEN ═══════════════
function RevealScreen({ roster, score, rankInfo, chemistry, onNewGame, onShare, showCard, closeCard, canvasRef, onDownload }) {
  const [step, setStep] = useState(0);
  const flavorRef = useRef(null);
  if (!flavorRef.current) flavorRef.current = getFlavorText(score);
  useEffect(() => { const t1=setTimeout(()=>setStep(1),300),t2=setTimeout(()=>setStep(2),900),t3=setTimeout(()=>setStep(3),1600); return ()=>{clearTimeout(t1);clearTimeout(t2);clearTimeout(t3)}; }, []);
  return (
    <div className="max-w-lg mx-auto text-center px-2">
      {step >= 1 && (<>
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700"><div className="inline-flex items-center gap-1.5 md:gap-2 bg-white/5 border border-white/10 px-3 md:px-4 py-1 md:py-1.5 rounded-full mb-4 md:mb-6"><Sparkles size={12} className="md:size-3.5 text-amber-400" /><span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-white/40">传奇阵容 · 集结完毕</span></div></div>

        {/* Roster grid */}
        <div className={`grid grid-cols-5 gap-1 md:gap-2 mb-4 transition-all duration-700 ${step>=2?'opacity-100 translate-y-0':'opacity-0 translate-y-8'}`}>
          {[1,2,3,4,5].map((pos,i) => { const p=roster[pos]; const disp=POS_DISPLAY[pos]||[]; return (
            <div key={pos} className="bg-white/[0.03] border border-white/10 rounded-xl md:rounded-2xl p-1.5 md:p-3 text-center" style={{transitionDelay:`${i*80}ms`,animation:step>=2?`cardReveal .4s ease-out ${i*.1}s both`:''}}>
              <div className="text-[6px] md:text-[8px] font-black text-white/30 uppercase tracking-wider mb-0.5 md:mb-1">{POS_LABELS[pos]}</div>
              <div className="w-7 h-7 md:w-10 md:h-10 mx-auto rounded-lg md:rounded-xl bg-gradient-to-br from-amber-600/30 to-red-600/20 flex items-center justify-center font-black text-[10px] md:text-sm text-amber-400 mb-1 md:mb-2 ring-1 ring-amber-500/20">{pos}</div>
              <div className="text-[9px] md:text-xs font-black text-white truncate mb-0.5">{p.name}</div>
              <div className="text-[7px] md:text-[8px] text-white/30 font-bold truncate">{p.ti}</div>
              <div className="mt-1 md:mt-2 space-y-0.5">{disp.slice(0,3).map(({k,l,f})=>(<div key={k} className="flex justify-between text-[7px] md:text-[8px] px-0.5"><span className="text-white/20">{l}</span><span className="font-mono font-bold text-white/80">{f(p.stats?.[k]??0)}</span></div>))}</div>
            </div>
          )})}
        </div>

        {/* Score card */}
        <div className={`transition-all duration-1000 ${step>=3?'opacity-100 scale-100':'opacity-0 scale-75'}`}>
          <div className={`relative inline-block w-full max-w-sm p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] bg-gradient-to-b ${rankInfo?.bg||'from-slate-800 to-slate-900'} shadow-2xl`}>
            <Trophy size={48} className="md:size-16 text-white/80 mx-auto mb-3 md:mb-4 drop-shadow-lg" fill="rgba(255,255,255,0.1)" />
            <div className="text-[5rem] md:text-[7rem] font-black italic text-white leading-none tracking-tighter drop-shadow-2xl">{score}</div>
            <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-black/30 text-white text-[7px] md:text-[9px] font-black px-2 md:px-2.5 py-0.5 md:py-1 rounded-full uppercase tracking-widest">Rating</div>
            {chemistry.bonus > 0 && (
              <div className="mt-1">
                <div className="text-[9px] md:text-[10px] text-green-400/80 font-bold">💫 化学反应 +{chemistry.bonus}</div>
                <div className="flex flex-wrap justify-center gap-1 mt-0.5">
                  {chemistry.details.map((d, i) => (
                    <span key={i} className="text-[7px] md:text-[8px] bg-green-500/10 border border-green-500/20 text-green-400/70 px-1.5 py-0.5 rounded-full font-bold">{d}</span>
                  ))}
                </div>
              </div>
            )}
            <h2 className="text-lg md:text-2xl font-black italic text-white mt-1 md:mt-2 mb-0.5">{rankInfo?.title||''}</h2>
            <p className="text-white/50 text-[10px] md:text-xs font-bold uppercase tracking-wider mb-3">{rankInfo?.desc||''}</p>

            <div className="border-t border-white/10 pt-4 md:pt-6 mb-5 md:mb-8"><p className="text-white/40 text-[10px] md:text-xs italic leading-relaxed px-2">{flavorRef.current}</p></div>
            <div className="flex gap-2 justify-center flex-wrap">
              <button onClick={onNewGame} className="bg-white text-black px-8 md:px-10 py-3 md:py-3.5 rounded-full font-black uppercase tracking-[0.15em] text-[10px] md:text-xs hover:scale-105 active:scale-95 transition-all shadow-xl cursor-pointer">再来一局</button>
              <button onClick={onShare} className="bg-white/10 border border-white/20 text-white px-6 py-3 rounded-full font-black uppercase tracking-[0.1em] text-[10px] hover:scale-105 transition-all cursor-pointer flex items-center gap-1.5"><Share2 size={14} />分享</button>
            </div>
          </div>
        </div>

        {/* Share canvas (hidden) */}
        {showCard && (
          <div className="fixed inset-0 bg-black/80 z-[200] flex items-center justify-center p-4" onClick={closeCard}>
            <div className="bg-[#0a0c12] rounded-2xl p-4 max-w-sm w-full" onClick={e => e.stopPropagation()}>
              <canvas ref={canvasRef} className="w-full rounded-xl" />
              <div className="flex gap-2 mt-3">
                <button onClick={onDownload} className="flex-1 bg-amber-600 text-white py-3 rounded-xl font-black text-sm">保存图片</button>
                <button onClick={closeCard} className="flex-1 bg-white/10 text-white py-3 rounded-xl font-black text-sm">关闭</button>
              </div>
            </div>
          </div>
        )}
      </>)}
    </div>
  );
}

// ═══════════════ FLAVOR POOLS ═══════════════
const FLAVOR_POOLS = {
  champion:[{w:10,t:'你的名字将永远刻在不朽盾上。从TI1的夏天一路走来，你见过太多传奇的诞生——而今天，轮到你了。举起神盾吧，这是属于你的时代。'},{w:8,t:'"The International Grand Champions——" 当主持人念出你的阵容名字时，全世界的Dota玩家都在为你欢呼。不朽盾的光芒下，你已是传奇。'},{w:6,t:'这一刻值得你所有的坚持。从海选到正赛，从败者组到决赛舞台——不，这不是某一支战队的剧本，这是你亲手写下的选秀传奇。'},{w:3,t:'有人说Dota已死。但你刚刚证明了——不，Dota永远活着，活在不朽盾的金光里，活在每一个深夜排天梯的玩家心中。冠军，敬你。'},{w:1,t:'"GG WP." 对面的队长打出这两个字的时候，你知道这不仅仅是一局游戏的结束。这是一个时代的开始。恭喜你，不朽盾的新主人。'}],
  finalist:[{w:10,t:'只差一步就能举起神盾。决赛的舞台上，你证明了你的选秀是最顶级的——五位来自不同时代的传奇，在你的指挥下奏响了近乎完美的乐章。'},{w:8,t:'亚军的奖杯也很沉重。你的阵容里没有弱者，只是决赛的对手比你多了一点点运气。明年，不朽盾会来到你这边。'},{w:5,t:'决赛。多少职业选手终其一生都未能踏足的舞台。你选的每一个人都曾仰望过这个高度，而你带着他们走到了这里。只是，冠军只有一个。'},{w:2,t:'"It\'s a disaster!" TobiWan的呐喊还在耳边回响。那支几近完美的战队，终究差了一口气。但你知道的——Dota的浪漫，有时候就是差那么一点点。'}],
  top4:[{w:10,t:'四强。全世界只有三支队伍排在你前面。你选的每一个选手都曾在他们的时代里燃烧过，而这支跨越时空的阵容，差一点就能点燃整个赛场。剑心犹在，明年再来。'},{w:8,t:'拿到奖金了，不亏。四强的成绩足以让你在任何Dota社群里抬起头来——你的选秀眼光，是经过TI正赛检验的。'},{w:6,t:'圣剑掉了可以再刷，高地没了可以再守。四强不是终点——你选的阵容里还有太多未兑现的天赋。下一个赛季，你会走得更远。'},{w:3,t:'你的BP纸上，画满了只有自己看得懂的箭头和圈。四强，是对这份认真最好的回报。虽然没能进决赛，但没有人能否认——你懂Dota。'},{w:1,t:'"Liquid are doing it!" 虽然没有拿到冠军，但你的选秀里有一个瞬间让所有观众都站了起来。四强，已是一个美丽的句号。'}],
  top8:[{w:10,t:'八强。淘汰赛的聚光灯下，你证明了自己的眼光。也许阵容的化学反应还需要一点磨合，也许只是签运差了一点——但这些名字，都值得被记住。'},{w:8,t:'八强的成绩不丢人。你选的阵容里有故事，有传奇，有那个让你爱上Dota的瞬间。回去看看录像，下一次的BP会更好。'},{w:6,t:'淘汰赛一轮游？不，这叫"积累了宝贵的TI淘汰赛经验"。你的每一位队员都有过属于自己的高光时刻，只是这次没能凑在一起。'},{w:2,t:'八强。一个让人既满足又不甘心的名次。满足是因为你已经超过了绝大多数人，不甘心是因为——你知道自己本可以走得更远。'}],
  group:[{w:10,t:'小组赛出线。你跨过了正赛的门槛，但征途才刚刚开始。没有人会记得小组赛的比分，但每个人都记得自己第一次看TI时的热血。'},{w:8,t:'你的选秀里有回忆，有青春，有那个通宵看比赛的自己。也许正赛的成绩不算耀眼，但这些名字在一起，就是你对Dota最深的理解。'},{w:6,t:'进了TI正赛，见到了隔壁的冠军战队，学到了很多，明年会更好——这份赛后采访发言，送给你。剑心犹在，传奇需要时间打磨。'},{w:3,t:'小组赛的每一场都是学习。你看着自己的阵容，想着如果再给你一次机会，你会选谁？没关系，机会永远在——Draft Again。'}],
  qualifier:[{w:10,t:'买活还在CD。别灰心——每一支TI冠军战队都曾在预选赛里挣扎过。再次鼓起丧失的勇气吧，下一场选秀，你依然是那个相信奇迹的少年。'},{w:8,t:'预选赛出局。这很痛，但Dota教会我们的一件事就是：输了就再来。你的选秀思路没有问题，只是这次运气不在你这边。'},{w:7,t:'"Don\'t give up!" 每一个Dota玩家都听过队友的这句话。预选赛的失败只是暂时的——下一局，你会有更好的Pick。'},{w:5,t:'也许你选的都是传奇。但传奇也需要正确的组合——五个核心不等于一支战队。回头看看你的阵容，找到那块缺失的拼图。再次鼓起丧失的勇气吧。'},{w:3,t:'剑已折断，但剑心犹在。预选赛的失败从来不是终点——TI历史上，多少冠军在成名前也曾倒在预选的门槛上。站起来，再选一次。'},{w:1,t:'你输了吗？不，你只是还没赢。Dota最美的部分，就是永远有下一场比赛。拿起鼠标，回到选秀界面——那个属于你的不朽盾，还在等你。'}],
};
function pickFlavor(pool) { const t=pool.reduce((s,x)=>s+x.w,0); let r=Math.random()*t; for(const x of pool){ r-=x.w; if(r<=0) return x.t; } return pool[0].t; }
function getFlavorText(score) { if(score>=76)return pickFlavor(FLAVOR_POOLS.champion); if(score>=71)return pickFlavor(FLAVOR_POOLS.finalist); if(score>=66)return pickFlavor(FLAVOR_POOLS.top4); if(score>=61)return pickFlavor(FLAVOR_POOLS.top8); if(score>=56)return pickFlavor(FLAVOR_POOLS.group); return pickFlavor(FLAVOR_POOLS.qualifier); }
