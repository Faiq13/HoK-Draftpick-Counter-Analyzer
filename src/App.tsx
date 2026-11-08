import { useEffect, useMemo, useState } from 'react';
import { CounterRecommendations } from './components/CounterRecommendations';
import { HeroPickerModal } from './components/HeroPickerModal';
import { TeamDraftPanel } from './components/TeamDraftPanel';
import { QuickSearchModal } from './components/QuickSearchModal';
import { GlassWorkspace } from './components/ui/adjustable-glass-dashboard';
import type { DraftHero, DraftSlot, DraftTeamState } from './types/draft';

const emptyTeam = (): DraftTeamState => ({ picks: Array(5).fill(null), bans: Array(3).fill(null) });
const parsePercent = (value: string) => Number.parseFloat(String(value || '').replace(/[^\d.-]/g, '')) || 0;

function App() {
  const [heroes, setHeroes] = useState<DraftHero[]>([]);
  const [teams, setTeams] = useState({ blue: emptyTeam(), red: emptyTeam() });
  const [activeSlot, setActiveSlot] = useState<DraftSlot | null>(null);
  const [activeTab, setActiveTab] = useState<'simulator' | 'database'>('simulator');
  const [databaseSearch, setDatabaseSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');
  const [laneFilter, setLaneFilter] = useState('all');
  const [loadError, setLoadError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState<Array<{ id: string | number; name: string; category: string; price: number; icon: string }>>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [language, setLanguage] = useState<'en' | 'id'>('en');
  const copy = {
    en: { title: '5v5 Draft Simulator', search: 'Search heroes and items...', simulator: 'Draft Simulator', database: 'Hero Database', online: 'Draft engine online', loaded: 'Hero data loaded', loading: '{copy.loading}', empty: 'Select a slot, then pick or ban.' },
    id: { title: 'Simulator Draft 5v5', search: 'Cari hero dan item...', simulator: 'Simulator Draft', database: 'Database Hero', online: 'Mesin draft aktif', loaded: 'Data hero dimuat', loading: 'Memuat roster hero...', empty: 'Pilih slot, lalu pick atau ban.' },
  }[language];

  useEffect(() => {
    Promise.all([
      fetch('/heroes.json').then(response => { if (!response.ok) throw new Error('heroes.json unavailable'); return response.json(); }),
      fetch('/items.json').then(response => { if (!response.ok) throw new Error('items.json unavailable'); return response.json(); }),
    ])
      .then(([data, itemData]) => { setHeroes(data); setItems(itemData); })
      .catch(error => setLoadError(error instanceof Error ? error.message : 'Could not load hero data'))
      .finally(() => setIsLoading(false));
  }, []);

  const usedIds = useMemo(() => new Set(Object.values(teams).flatMap(team => [...team.picks, ...team.bans]).filter(Boolean).map(hero => (hero as DraftHero).id)), [teams]);
  const enemyPicks = teams.red.picks.filter(Boolean);
  const enemyBans = teams.red.bans.filter(Boolean);
  const enemyTarget = enemyPicks[enemyPicks.length - 1] || enemyBans[enemyBans.length - 1] || null;
  const selectedHeroes = useMemo(() => Object.values(teams).flatMap(team => [...team.picks, ...team.bans]).filter(Boolean) as DraftHero[], [teams]);
  const recommendations = useMemo(() => {
    const score = (hero: DraftHero) => parsePercent(hero.win_rate) + parsePercent(hero.pick_rate) * 0.25 + selectedHeroes.reduce((total, target) => {
      const sharedRole = hero.roles.split(',').some(role => target.roles.includes(role.trim()));
      return total + (sharedRole ? 0.05 : 0);
    }, 0);
    return heroes.filter(hero => !usedIds.has(hero.id)).sort((a, b) => score(b) - score(a)).slice(0, 5);
  }, [heroes, usedIds, selectedHeroes]);
  const roles = useMemo(() => [...new Set(heroes.flatMap(hero => String(hero.roles || '').split(',').map(role => role.trim()).filter(Boolean)))].sort(), [heroes]);
  const lanes = useMemo(() => [...new Set(heroes.map(hero => hero.recommended_lane).filter(Boolean))].sort(), [heroes]);
  const filteredDatabase = useMemo(() => heroes.filter(hero => `${hero.chinese_hero_name} ${hero.english_hero_name}`.toLowerCase().includes(databaseSearch.toLowerCase()) && (roleFilter === 'all' || hero.roles.includes(roleFilter)) && (laneFilter === 'all' || hero.recommended_lane === laneFilter)), [heroes, databaseSearch, roleFilter, laneFilter]);

  const pickHero = (hero: DraftHero) => {
    if (!activeSlot || usedIds.has(hero.id)) return;
    setTeams(current => ({ ...current, [activeSlot.team]: { ...current[activeSlot.team], [activeSlot.phase === 'pick' ? 'picks' : 'bans']: current[activeSlot.team][activeSlot.phase === 'pick' ? 'picks' : 'bans'].map((item, index) => index === activeSlot.index ? hero : item) } }));
    const slots = teams[activeSlot.team][activeSlot.phase === 'pick' ? 'picks' : 'bans'];
    const nextIndex = slots.findIndex((item, index) => index > activeSlot.index && !item);
    setActiveSlot(nextIndex >= 0 ? { ...activeSlot, index: nextIndex } : null);
  };

  return <GlassWorkspace backgroundImage="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1920&auto=format&fit=crop"><div className="min-h-screen bg-transparent text-slate-100">
    <header className="glass-shell sticky top-0 z-20 flex w-full min-h-[78px] items-center justify-between gap-5 rounded-b-2xl px-8 py-4 max-md:px-4"><div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-xl border border-cyan-300/30 bg-cyan-300/10 text-xl text-cyan-300">⌁</span><div><p className="m-0 text-[10px] font-black uppercase tracking-[0.18em] text-cyan-300">HoK Draft Analyzer</p><h1 className="m-0 text-lg font-black text-white">{copy.title}</h1></div></div><div className="ml-auto flex items-center gap-3"><button type="button" onClick={() => setLanguage(value => value === 'en' ? 'id' : 'en')} className="rounded-lg border border-white/[0.1] px-3 py-2 text-xs font-bold text-slate-300" aria-label="Toggle language">{language.toUpperCase()}</button><label className="flex h-11 w-72 items-center gap-2 rounded-xl border border-white/[0.1] bg-[#172235] px-3 text-slate-500 max-md:w-11 max-md:justify-center"><span aria-hidden="true">⌕</span><input aria-label="Quick search" placeholder={copy.search} className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none max-md:hidden" value={databaseSearch} onFocus={() => setIsSearchOpen(true)} onChange={event => { setDatabaseSearch(event.target.value); setIsSearchOpen(true); }} /></label><span className="rounded-lg border border-emerald-300/25 bg-emerald-300/[0.08] px-3 py-2 text-xs font-bold text-emerald-300 max-lg:hidden">● heroAdapter synced</span></div></header>
    <div className="grid min-h-[calc(100vh-78px)] grid-cols-[240px_minmax(0,1fr)] max-md:block"><aside className="glass-shell flex flex-col border-y-0 border-l-0 rounded-none p-4 max-md:hidden"><nav className="grid gap-2" aria-label="Primary navigation"><button type="button" onClick={() => setActiveTab('simulator')} className={`glass-card-hover rounded-xl px-3 py-3 text-left text-sm font-bold ${activeTab === 'simulator' ? 'border-cyan-300/35 bg-cyan-300/10 text-cyan-100 shadow-[inset_3px_0_#67e8f9]' : 'text-slate-300 hover:bg-white/[0.05]'}`}>◈ Draft Simulator<span className="mt-1 block text-[11px] font-normal text-slate-500">Pick / Ban phase</span></button><button type="button" onClick={() => setActiveTab('database')} className={`glass-card-hover rounded-xl px-3 py-3 text-left text-sm font-bold ${activeTab === 'database' ? 'border-cyan-300/35 bg-cyan-300/10 text-cyan-100 shadow-[inset_3px_0_#67e8f9]' : 'text-slate-300 hover:bg-white/[0.05]'}`}>▦ Hero Database<span className="mt-1 block text-[11px] font-normal text-slate-500">Meta roster</span></button></nav><div className="mt-auto rounded-xl border border-emerald-300/20 bg-emerald-300/[0.06] p-3 text-xs text-emerald-300">Draft engine online<span className="mt-1 block text-[11px] text-slate-400">Hero data loaded</span></div></aside>
      <main className="min-w-0 p-8 max-lg:p-5 max-md:p-4"><div className="mb-6 flex items-end justify-between gap-4"><div><p className="m-0 text-[10px] font-black uppercase tracking-[0.18em] text-cyan-300">Competitive workspace</p><h2 className="m-0 mt-1 text-3xl font-black tracking-tight text-white">{activeTab === 'simulator' ? copy.simulator : copy.database}</h2><p className="m-0 mt-2 text-sm text-slate-500">{activeTab === 'simulator' ? 'Select a slot, then pick or ban. Counter candidates update live.' : 'Secondary reference view for hero roles and meta values.'}</p></div></div><div className="mb-5 flex gap-2 border-b border-white/[0.08]"><button type="button" onClick={() => setActiveTab('simulator')} className={`border-b-2 px-4 py-3 text-sm font-bold ${activeTab === 'simulator' ? 'border-cyan-300 text-cyan-300' : 'border-transparent text-slate-500'}`}>Draft Simulator</button><button type="button" onClick={() => setActiveTab('database')} className={`border-b-2 px-4 py-3 text-sm font-bold ${activeTab === 'database' ? 'border-cyan-300 text-cyan-300' : 'border-transparent text-slate-500'}`}>Hero Meta Database</button></div>
        {isLoading ? <div role="status" className="rounded-xl border border-white/[0.08] bg-[#111827] p-8 text-center text-sm text-slate-400">{copy.loading}</div> : loadError ? <div role="alert" className="rounded-xl border border-rose-300/30 bg-rose-300/10 p-5 text-rose-200">{loadError}. Run Vite through `npm run dev` from project root.</div> : activeTab === 'simulator' ? <div className="grid gap-4 lg:grid-cols-[minmax(190px,1fr)_minmax(320px,1.5fr)_minmax(190px,1fr)]"><TeamDraftPanel team="blue" state={teams.blue} onOpenSlot={setActiveSlot} /><div className="grid gap-4"><CounterRecommendations target={enemyTarget} candidates={recommendations} /><div className="glass-card rounded-2xl p-5"><p className="m-0 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Draft flow</p><p className="mt-2 text-sm text-slate-300">Choose any Blue or Red slot to open roster picker. Modal supports search, role, lane, and live stats.</p></div></div><TeamDraftPanel team="red" state={teams.red} onOpenSlot={setActiveSlot} /></div> : <section className="glass-card rounded-2xl p-4"><div className="mb-4 flex flex-wrap gap-3"><input value={databaseSearch} onChange={event => setDatabaseSearch(event.target.value)} placeholder="Search hero name..." className="h-11 min-w-56 rounded-xl border border-white/[0.1] bg-[#172235] px-3 text-sm text-white outline-none"/><select value={roleFilter} onChange={event => setRoleFilter(event.target.value)} className="h-11 rounded-xl border border-white/[0.1] bg-[#172235] px-3 text-sm text-slate-300"><option value="all">All roles</option>{roles.map(role => <option key={role}>{role}</option>)}</select><select value={laneFilter} onChange={event => setLaneFilter(event.target.value)} className="h-11 rounded-xl border border-white/[0.1] bg-[#172235] px-3 text-sm text-slate-300"><option value="all">All lanes</option>{lanes.map(lane => <option key={lane}>{lane}</option>)}</select></div><div className="overflow-x-auto"><table className="w-full min-w-[680px] text-left text-sm"><thead className="text-[10px] uppercase tracking-[0.12em] text-slate-500"><tr><th className="p-3">Hero</th><th className="p-3">Role</th><th className="p-3">Lane</th><th className="p-3">Tier</th><th className="p-3">Win</th><th className="p-3">Pick</th><th className="p-3">Ban</th></tr></thead><tbody>{filteredDatabase.map(hero => <tr key={hero.id} className="border-t border-white/[0.06]"><td className="p-3"><span className="flex items-center gap-3"><img src={hero.image_url} alt={hero.english_hero_name} className="h-9 w-9 rounded-lg object-cover"/><strong>{hero.english_hero_name}</strong></span></td><td className="p-3 text-slate-400">{hero.roles}</td><td className="p-3 text-slate-400">{hero.recommended_lane}</td><td className="p-3 text-cyan-300">{hero.popularity}</td><td className="p-3">{hero.win_rate}</td><td className="p-3">{hero.pick_rate}</td><td className="p-3">{hero.ban_rate}</td></tr>)}</tbody></table></div></section>}
      </main>
    </div>
    {activeSlot && <HeroPickerModal slot={activeSlot} heroes={heroes} usedIds={usedIds} onClose={() => setActiveSlot(null)} onSelect={pickHero} />}
     {isSearchOpen && <QuickSearchModal heroes={heroes} items={items} onClose={() => setIsSearchOpen(false)} onNavigate={(target) => { setIsSearchOpen(false); setActiveTab(target === 'hero' ? 'database' : 'simulator'); }} />}
  </div></GlassWorkspace>;
}

export default App;
