import React, { useMemo } from 'react';
import { Sparkles } from 'lucide-react';
import { getHeroes, type Hero } from '../services/heroAdapter';
import { HOK_COUNTERS } from '../services/metaAnalyzerData';
import type { DraftState } from '../types/draft';
import { HeroAvatar } from './HeroAvatar';

interface Props { draftState: DraftState; onSelectHeroForActiveSlot: (heroId: string) => void; }
const heroes = getHeroes();
const heroById = new Map(heroes.map(hero => [hero.id, hero]));
const ROLES: Hero['role'][] = ['Roam', 'Clash', 'Mid', 'Farm', 'Jungle'];
export const CounterRecommendations: React.FC<Props> = ({ draftState, onSelectHeroForActiveSlot }) => {
  const enemyIds = draftState.redTeam.filter((id): id is string => id !== null);
  const selectedIds = useMemo(() => new Set([...draftState.blueTeam, ...draftState.redTeam, ...draftState.blueBans, ...draftState.redBans].filter((id): id is string => id !== null)), [draftState]);
  const recommendations = useMemo(() => {
    const scored = heroes.filter(hero => !selectedIds.has(hero.id)).map(hero => {
      let score = 0; const matched: string[] = []; const reasons: string[] = [];
      enemyIds.forEach(enemyId => { const enemy = heroById.get(enemyId); if (!enemy) return; const dataset = HOK_COUNTERS.find(entry => String(entry.heroId) === enemy.id && String(entry.counteredById) === hero.id); const counter = enemy.counteredBy.some(entry => entry.id === hero.id) || hero.counters.includes(enemy.id) || Boolean(dataset); if (counter) { score += 40; matched.push(enemy.name); reasons.push(dataset?.reason ?? enemy.counteredBy.find(entry => entry.id === hero.id)?.reason ?? `Effective against ${enemy.name}`); } if (hero.counteredBy.some(entry => entry.id === enemy.id)) score -= 20; });
      return { hero, score, matched, reason: reasons[0] ?? 'Available pick' };
    }).filter(item => item.score > 0).sort((a, b) => b.score - a.score || a.hero.name.localeCompare(b.hero.name));
    return new Map(ROLES.map(role => [role, scored.filter(item => item.hero.role === role).slice(0, 3)]));
  }, [enemyIds, selectedIds]);
  return <section className="gw-panel rounded-2xl p-5"><div className="mb-5 flex items-center gap-2 border-b border-white/10 pb-4"><Sparkles size={16} className="text-cyan-300" aria-hidden="true" /><h2 className="font-bold text-base text-white">Live counter recommendations</h2><span className="ml-auto text-[10px] text-emerald-300">{enemyIds.length} enemy picks</span></div>{enemyIds.length === 0 ? <p className="py-8 text-center text-sm text-slate-300">Select Red Team heroes to calculate counters.</p> : <div className="grid grid-cols-1 gap-3 lg:grid-cols-5">{ROLES.map(role => <div key={role} className="gw-panel rounded-xl p-3"><h3 className="mb-3 border-b border-white/10 pb-2 text-sm font-bold text-cyan-200">{role}</h3>{(recommendations.get(role) ?? []).length === 0 ? <p className="text-xs text-slate-400">No direct counter found.</p> : <div className="space-y-2">{recommendations.get(role)!.map(item => <button type="button" key={item.hero.id} onClick={() => onSelectHeroForActiveSlot(item.hero.id)} className="flex w-full items-center gap-2 rounded-lg border border-white/10 bg-black/20 p-2 text-left hover:border-cyan-300/50"><HeroAvatar hero={item.hero} className="h-9 w-9 shrink-0 rounded-lg object-cover" /><span className="min-w-0 flex-1"><strong className="block truncate text-xs text-white">{item.hero.name}</strong><small className="block truncate text-[10px] text-slate-300">{item.reason}</small></span><span className="text-[10px] font-bold text-emerald-300">{item.score}</span></button>)}</div>}</div>)}</div>}</section>;
};
