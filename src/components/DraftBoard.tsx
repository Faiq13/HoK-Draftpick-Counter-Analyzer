import React from 'react';
import { Plus, X } from 'lucide-react';
import { getHeroes, type Hero } from '../services/heroAdapter';
import type { DraftState } from '../types/draft';

interface Props { draftState: DraftState; onSelectSlot: (side: 'blue' | 'red', type: 'pick' | 'ban', index: number) => void; onRemoveHero: (side: 'blue' | 'red', type: 'pick' | 'ban', index: number) => void; }
const heroes = getHeroes();
export const DraftBoard: React.FC<Props> = ({ draftState, onSelectSlot, onRemoveHero }) => {
  const findHero = (id: string | null): Hero | undefined => heroes.find(hero => hero.id === id);
  const renderSlot = (side: 'blue' | 'red', type: 'pick' | 'ban', index: number) => {
    const ids = type === 'pick' ? (side === 'blue' ? draftState.blueTeam : draftState.redTeam) : (side === 'blue' ? draftState.blueBans : draftState.redBans);
    const selected = findHero(ids[index]); const active = draftState.activeSlot?.side === side && draftState.activeSlot.type === type && draftState.activeSlot.index === index;
    return <button type="button" key={`${side}-${type}-${index}`} onClick={() => onSelectSlot(side, type, index)} className={`gw-panel relative overflow-hidden rounded-xl border text-left transition hover:-translate-y-0.5 ${type === 'ban' ? 'h-14 w-14' : 'h-24 w-full'} ${active ? 'border-cyan-200 shadow-[0_0_20px_rgba(34,211,238,.4)]' : selected ? side === 'blue' ? 'border-cyan-400/60 bg-cyan-400/10' : 'border-rose-400/60 bg-rose-400/10' : side === 'blue' ? 'border-cyan-400/25' : 'border-rose-400/25'}`}>
      {selected ? <><img src={selected.avatarUrl} alt={selected.name} className="h-full w-full object-cover" /><span className="absolute inset-x-0 bottom-0 truncate bg-black/70 px-1 py-1 text-center text-[10px] font-bold text-white">{selected.name}</span><span role="button" tabIndex={0} aria-label={`Remove ${selected.name}`} onClick={event => { event.stopPropagation(); onRemoveHero(side, type, index); }} className="absolute right-1 top-1 rounded bg-black/70 p-1 text-white"><X size={12} aria-hidden="true" /></span></> : <span className="grid h-full place-items-center text-slate-300"><Plus size={18} aria-hidden="true" /></span>}
    </button>;
  };
  const team = (side: 'blue' | 'red') => <section className={`gw-panel rounded-2xl border p-4 ${side === 'blue' ? 'border-cyan-400/30' : 'border-rose-400/30'}`}><div className="mb-5 flex items-center justify-between"><div className={`text-sm font-black uppercase tracking-[.16em] ${side === 'blue' ? 'text-cyan-300' : 'text-rose-300'}`}>{side === 'blue' ? 'Blue team' : 'Red team'}</div><span className="text-[10px] text-slate-300">{side === 'blue' ? 'YOUR SIDE' : 'OPPONENT'}</span></div><p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-slate-300">Picks</p><div className="grid grid-cols-5 gap-2">{[0, 1, 2, 3, 4].map(index => renderSlot(side, 'pick', index))}</div><p className="mb-2 mt-5 text-[10px] font-bold uppercase tracking-widest text-slate-300">Bans</p><div className="flex gap-2">{[0, 1, 2].map(index => renderSlot(side, 'ban', index))}</div></section>;
  return <div className="grid gap-4 xl:grid-cols-2">{team('blue')}{team('red')}</div>;
};
