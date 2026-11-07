import React, { useMemo, useState } from 'react';
import { Search, X } from 'lucide-react';
import { getHeroes, type Hero } from '../services/heroAdapter';

const HOK_HEROES = getHeroes();
import { HeroAvatar } from './HeroAvatar';

const ROLES = ['All', 'Clash', 'Mid', 'Farm', 'Roam', 'Jungle'] as const;
interface Props { open: boolean; excludedIds: string[]; onSelect: (hero: Hero) => void; onClose: () => void; }
export const FloatingHeroPicker: React.FC<Props> = ({ open, excludedIds, onSelect, onClose }) => {
  const [query, setQuery] = useState(''); const [role, setRole] = useState<(typeof ROLES)[number]>('All');
  const heroes = useMemo(() => HOK_HEROES.filter(h => !excludedIds.includes(h.id) && (!query || h.name.toLowerCase().includes(query.toLowerCase())) && (role === 'All' || h.role === role)), [excludedIds, query, role]);
  if (!open) return null;
  return <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onClick={onClose}>
    <section className="w-full max-w-3xl max-h-[80vh] rounded-2xl border border-slate-700 bg-slate-900 p-4 shadow-2xl" onClick={e => e.stopPropagation()}>
      <div className="flex items-center gap-3 mb-3"><h2 className="font-bold text-white flex-1">Select Hero</h2><button onClick={onClose}><X /></button></div>
      <div className="flex gap-2 mb-3"><div className="flex items-center gap-2 flex-1 rounded-lg bg-slate-800 px-3"><Search className="w-4"/><input autoFocus value={query} onChange={e => setQuery(e.target.value)} placeholder="Search hero..." className="w-full bg-transparent py-2 outline-none" /></div></div>
      <div className="flex flex-wrap gap-2 mb-4">{ROLES.map(r => <button key={r} onClick={() => setRole(r)} className={`rounded-full px-3 py-1 text-xs ${role === r ? 'bg-amber-500 text-black' : 'bg-slate-800 text-slate-300'}`}>{r}</button>)}</div>
      <div className="grid max-h-[55vh] grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2 overflow-y-auto">{heroes.map(hero => <button key={hero.id} onClick={() => onSelect(hero)} className="rounded-lg p-1 hover:bg-amber-500/20"><HeroAvatar hero={hero} className="h-14 w-full" /><span className="block truncate text-[10px] text-white">{hero.name}</span></button>)}</div>
    </section>
  </div>;
};