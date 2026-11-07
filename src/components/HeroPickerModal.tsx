import { useEffect, useMemo, useRef, useState } from 'react';
import type { DraftHero, DraftSlot } from '../types/draft';

interface HeroPickerModalProps { slot: DraftSlot; heroes: DraftHero[]; usedIds: Set<number>; onClose: () => void; onSelect: (hero: DraftHero) => void; }

export function HeroPickerModal({ slot, heroes, usedIds, onClose, onSelect }: HeroPickerModalProps) {
  const [search, setSearch] = useState('');
  const [role, setRole] = useState('all');
  const [lane, setLane] = useState('all');
  const dialogRef = useRef<HTMLElement>(null);
  const roles = useMemo(() => [...new Set(heroes.flatMap(hero => String(hero.roles || '').split(',').map(value => value.trim()).filter(Boolean)))].sort(), [heroes]);
  const lanes = useMemo(() => [...new Set(heroes.map(hero => hero.recommended_lane).filter(Boolean))].sort(), [heroes]);
  const filtered = useMemo(() => heroes.filter(hero => !usedIds.has(hero.id) && `${hero.chinese_hero_name} ${hero.english_hero_name}`.toLowerCase().includes(search.toLowerCase()) && (role === 'all' || hero.roles.includes(role)) && (lane === 'all' || hero.recommended_lane === lane)), [heroes, usedIds, search, role, lane]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => event.key === 'Escape' && onClose();
    window.addEventListener('keydown', handleEscape);
    dialogRef.current?.focus();
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm" role="presentation" onMouseDown={event => event.target === event.currentTarget && onClose()}>
    <section ref={dialogRef} tabIndex={-1} role="dialog" aria-modal="true" aria-labelledby="picker-title" className="flex max-h-[min(760px,calc(100vh-32px))] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/[0.12] bg-[#111827] shadow-2xl">
      <div className="flex items-center justify-between gap-4 border-b border-white/[0.08] p-5"><div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-300">{slot.team === 'blue' ? 'Blue' : 'Red'} team · {slot.phase}</p><h2 id="picker-title" className="mt-1 text-xl font-black text-white">Choose hero</h2></div><button type="button" onClick={onClose} aria-label="Close hero picker" className="grid h-10 w-10 place-items-center rounded-xl border border-white/[0.1] text-xl text-slate-400 hover:bg-white/[0.06] hover:text-white">×</button></div>
      <div className="grid gap-3 border-b border-white/[0.08] p-4 sm:grid-cols-[1fr_150px_150px]"><label className="flex h-11 items-center gap-2 rounded-xl border border-white/[0.1] bg-[#172235] px-3 text-slate-400"><span aria-hidden="true">⌕</span><label className="sr-only" htmlFor="hero-picker-search">Search heroes</label><input id="hero-picker-search" autoFocus value={search} onChange={event => setSearch(event.target.value)} placeholder="Search hero name..." className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-slate-500" /></label><label className="sr-only" htmlFor="hero-picker-role">Role</label><select id="hero-picker-role" aria-label="Filter by role" value={role} onChange={event => setRole(event.target.value)} className="h-11 rounded-xl border border-white/[0.1] bg-[#172235] px-3 text-sm text-slate-300"><option value="all">All roles</option>{roles.map(value => <option key={value}>{value}</option>)}</select><label className="sr-only" htmlFor="hero-picker-lane">Lane</label><select id="hero-picker-lane" aria-label="Filter by lane" value={lane} onChange={event => setLane(event.target.value)} className="h-11 rounded-xl border border-white/[0.1] bg-[#172235] px-3 text-sm text-slate-300"><option value="all">All lanes</option>{lanes.map(value => <option key={value}>{value}</option>)}</select></div>
      <div className="min-h-0 overflow-y-auto p-4"><div className="grid grid-cols-3 gap-2 sm:grid-cols-5 md:grid-cols-7">{filtered.map(hero => <button type="button" key={hero.id} onClick={() => onSelect(hero)} className="group rounded-xl border border-white/[0.08] bg-white/[0.03] p-2 text-left hover:border-cyan-300/60 hover:bg-cyan-300/[0.08]"><img src={hero.image_url} alt={hero.english_hero_name} className="aspect-square w-full rounded-lg object-cover"/><strong className="mt-2 block truncate text-[11px] text-slate-200">{hero.english_hero_name}</strong><span className="mt-0.5 block text-[10px] text-slate-500">{hero.win_rate} win</span></button>)}</div>{filtered.length === 0 && <p className="py-12 text-center text-sm text-slate-500">No available heroes match filters.</p>}</div>
    </section>
  </div>;
}
