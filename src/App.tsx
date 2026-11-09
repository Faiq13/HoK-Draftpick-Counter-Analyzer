import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CounterRecommendations } from './components/CounterRecommendations';
import { HeroPickerModal } from './components/HeroPickerModal';
import { TeamDraftPanel } from './components/TeamDraftPanel';
import { QuickSearchModal } from './components/QuickSearchModal';
import { GlassWorkspace } from './components/ui/adjustable-glass-dashboard';
import { buildCounterRecommendations } from './lib/counter';
import { displayHeroName, type HeroNameMode } from './lib/hero';
import type { DraftHero, DraftSlot, DraftTeamState } from './types/draft';

const emptyTeam = (): DraftTeamState => ({ picks: Array(5).fill(null), bans: Array(3).fill(null) });
const parsePercent = (value: string | number | undefined) => Number.parseFloat(String(value || '').replace(/[^\d.-]/g, '')) || 0;
const rolesOf = (hero: DraftHero) => (Array.isArray(hero.roles) ? hero.roles : String(hero.roles || '').split(',')).map(value => value.trim()).filter(Boolean);

function LandingPage({ onStart }: { onStart: () => void }) {
  const { t } = useTranslation();
  return <main className="landing-page"><div className="landing-nav"><strong>⌁ HOK DRAFT ANALYZER</strong><span>{t('workspace')}</span></div><section className="landing-copy"><p>{t('landingKicker')}</p><h1>READ THE<br/><b>DRAFT.</b> WIN MORE.</h1><p className="landing-lead">{t('landingLead')}</p><button type="button" onClick={onStart}>{t('start')} ↗</button></section><div className="landing-ticker">{t('ticker')}</div></main>;
}

function App() {
  const [heroes, setHeroes] = useState<DraftHero[]>([]);
  const [teams, setTeams] = useState({ blue: emptyTeam(), red: emptyTeam() });
  const [activeSlot, setActiveSlot] = useState<DraftSlot | null>(null);
  const [activeTab, setActiveTab] = useState<'simulator' | 'database'>('simulator');
  const [databaseSearch, setDatabaseSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');
  const [laneFilter, setLaneFilter] = useState('all');
  const [tierFilter, setTierFilter] = useState('all');
  const [sortKey, setSortKey] = useState<'name' | 'role' | 'lane' | 'tier' | 'win' | 'pick' | 'ban'>('name');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [loadError, setLoadError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState<Array<{ id: string | number; name: string; category: string; price: number; icon: string }>>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [nameMode, setNameMode] = useState<HeroNameMode>('title');
  const { t, i18n } = useTranslation();
  const language = i18n.language.startsWith('id') ? 'id' : 'en';
  const copy = { title: t('title'), search: t('search'), simulator: t('simulator'), database: t('database'), loading: t('loading') };

  useEffect(() => {
    Promise.all([
      fetch('/heroes.json').then(response => { if (!response.ok) throw new Error('heroes.json unavailable'); return response.json() as Promise<DraftHero[]>; }),
      fetch('/items.json').then(response => { if (!response.ok) throw new Error('items.json unavailable'); return response.json(); }),
    ]).then(([data, itemData]) => { setHeroes(data); setItems(itemData); }).catch(error => setLoadError(error instanceof Error ? error.message : 'Could not load hero data')).finally(() => setIsLoading(false));
  }, []);

  const usedIds = useMemo(() => new Set(Object.values(teams).flatMap(team => [...team.picks, ...team.bans]).filter(Boolean).map(hero => (hero as DraftHero).id)), [teams]);
  const enemyPicks = useMemo(() => teams.red.picks.filter(Boolean) as DraftHero[], [teams.red.picks]);
  const recommendations = useMemo(() => buildCounterRecommendations(heroes, enemyPicks, usedIds), [heroes, enemyPicks, usedIds]);
  const roles = useMemo(() => [...new Set(heroes.flatMap(hero => rolesOf(hero)))].sort(), [heroes]);
  const lanes = useMemo(() => [...new Set(heroes.map(hero => hero.recommended_lane).filter(Boolean))].sort(), [heroes]);
  const tiers = useMemo(() => [...new Set(heroes.map(hero => String(hero.popularity || '').trim()).filter(Boolean))].sort(), [heroes]);

  const filteredDatabase = useMemo(() => {
    const query = databaseSearch.trim().toLowerCase();
    return heroes.filter(hero => {
      const matchesName = `${hero.chinese_hero_name} ${hero.english_hero_name}`.toLowerCase().includes(query);
      return matchesName && (roleFilter === 'all' || rolesOf(hero).includes(roleFilter)) && (laneFilter === 'all' || hero.recommended_lane === laneFilter) && (tierFilter === 'all' || String(hero.popularity) === tierFilter);
    }).sort((a, b) => {
      const direction = sortDirection === 'asc' ? 1 : -1;
      if (sortKey === 'name') return displayHeroName(a, nameMode).localeCompare(displayHeroName(b, nameMode)) * direction;
      if (sortKey === 'role') return rolesOf(a).join(', ').localeCompare(rolesOf(b).join(', ')) * direction;
      if (sortKey === 'lane') return String(a.recommended_lane).localeCompare(String(b.recommended_lane)) * direction;
      if (sortKey === 'tier') return String(a.popularity).localeCompare(String(b.popularity)) * direction;
      const key = sortKey === 'win' ? a.win_rate : sortKey === 'pick' ? a.pick_rate : a.ban_rate;
      const other = sortKey === 'win' ? b.win_rate : sortKey === 'pick' ? b.pick_rate : b.ban_rate;
      return (parsePercent(key) - parsePercent(other)) * direction;
    });
  }, [heroes, databaseSearch, roleFilter, laneFilter, tierFilter, sortKey, sortDirection, nameMode]);

  const selectSort = (key: typeof sortKey) => {
    if (sortKey === key) setSortDirection(value => value === 'asc' ? 'desc' : 'asc');
    else { setSortKey(key); setSortDirection(key === 'name' || key === 'role' || key === 'lane' ? 'asc' : 'desc'); }
  };

  const removeHero = (slot: DraftSlot) => {
    const collection = slot.phase === 'pick' ? 'picks' : 'bans';
    setTeams(current => ({ ...current, [slot.team]: { ...current[slot.team], [collection]: current[slot.team][collection].map((item, index) => index === slot.index ? null : item) } }));
    setActiveSlot(null);
  };

  const pickHero = (hero: DraftHero) => {
    if (!activeSlot || usedIds.has(hero.id)) return;
    const collection = activeSlot.phase === 'pick' ? 'picks' : 'bans';
    setTeams(current => ({ ...current, [activeSlot.team]: { ...current[activeSlot.team], [collection]: current[activeSlot.team][collection].map((item, index) => index === activeSlot.index ? hero : item) } }));
    const slots = teams[activeSlot.team][collection];
    const nextIndex = slots.findIndex((item, index) => index > activeSlot.index && !item);
    setActiveSlot(nextIndex >= 0 ? { ...activeSlot, index: nextIndex } : null);
  };

  const selectRecommendation = (hero: DraftHero) => {
    const index = teams.blue.picks.findIndex(item => !item);
    if (index < 0 || usedIds.has(hero.id)) return;
    setTeams(current => ({ ...current, blue: { ...current.blue, picks: current.blue.picks.map((item, itemIndex) => itemIndex === index ? hero : item) } }));
  };

  const showLanding = window.localStorage.getItem('hok-dashboard-started') !== '1';
  if (showLanding) return <LandingPage onStart={() => { window.localStorage.setItem('hok-dashboard-started', '1'); window.location.reload(); }} />;

  const labels = { title: t('counterRecommendations'), empty: enemyPicks.length ? t('noResults') : t('selectOpposing'), counter: t('counterHero'), local: t('localMatchupData'), live: t('live') };
  return <GlassWorkspace backgroundImage="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1920&auto=format&fit=crop"><div className="min-h-screen bg-transparent text-slate-100">
    <header className="glass-shell sticky top-0 z-20 flex w-full min-h-[78px] items-center justify-between gap-5 rounded-b-2xl px-8 py-4 max-md:px-4"><div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-xl border border-cyan-300/30 bg-cyan-300/10 text-xl text-cyan-300">⌁</span><div><p className="m-0 text-[10px] font-black uppercase tracking-[0.18em] text-cyan-300">HoK Draft Analyzer</p><h1 className="m-0 text-lg font-black text-white">{copy.title}</h1></div></div><div className="ml-auto flex items-center gap-3"><button type="button" onClick={() => void i18n.changeLanguage(language === 'en' ? 'id' : 'en')} className="rounded-lg border border-white/[0.1] px-3 py-2 text-xs font-bold text-slate-300" aria-label={t('language')}>{language.toUpperCase()}</button><button type="button" role="switch" aria-checked={nameMode === 'global'} aria-label={t('nameMode')} onClick={() => setNameMode(value => value === 'title' ? 'global' : 'title')} className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-bold ${nameMode === 'global' ? 'border-cyan-300/40 bg-cyan-300/10 text-cyan-200' : 'border-white/[0.1] text-slate-300'}`}><span className={`h-2.5 w-2.5 rounded-full ${nameMode === 'global' ? 'bg-cyan-300' : 'bg-slate-500'}`} aria-hidden="true" />{nameMode === 'global' ? t('globalNames') : t('titleNames')}</button><label className="flex h-11 w-72 items-center gap-2 rounded-xl border border-white/[0.1] bg-[#172235] px-3 text-slate-500 max-md:w-11 max-md:justify-center"><span aria-hidden="true">⌕</span><input aria-label={copy.search} placeholder={copy.search} className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none max-md:hidden" value={databaseSearch} onFocus={() => setIsSearchOpen(true)} onChange={event => { setDatabaseSearch(event.target.value); setIsSearchOpen(true); }} /></label><span className="rounded-lg border border-emerald-300/25 bg-emerald-300/[0.08] px-3 py-2 text-xs font-bold text-emerald-300 max-lg:hidden">● {t('heroAdapter')}</span></div></header>
    <div className="grid min-h-[calc(100vh-78px)] grid-cols-[240px_minmax(0,1fr)] max-md:block"><aside className="glass-shell flex flex-col border-y-0 border-l-0 rounded-none p-4 max-md:hidden"><nav className="grid gap-2" aria-label="Primary navigation"><button type="button" onClick={() => setActiveTab('simulator')} className={`glass-card-hover rounded-xl px-3 py-3 text-left text-sm font-bold ${activeTab === 'simulator' ? 'border-cyan-300/35 bg-cyan-300/10 text-cyan-100 shadow-[inset_3px_0_#67e8f9]' : 'text-slate-300 hover:bg-white/[0.05]'}`}>◈ {copy.simulator}<span className="mt-1 block text-[11px] font-normal text-slate-500">{t('pickPhase')} / {t('banPhase')}</span></button><button type="button" onClick={() => setActiveTab('database')} className={`glass-card-hover rounded-xl px-3 py-3 text-left text-sm font-bold ${activeTab === 'database' ? 'border-cyan-300/35 bg-cyan-300/10 text-cyan-100 shadow-[inset_3px_0_#67e8f9]' : 'text-slate-300 hover:bg-white/[0.05]'}`}>▦ {copy.database}<span className="mt-1 block text-[11px] font-normal text-slate-500">{t('databaseDescription')}</span></button></nav><div className="mt-auto rounded-xl border border-emerald-300/20 bg-emerald-300/[0.06] p-3 text-xs text-emerald-300">{t('draftOnline')}<span className="mt-1 block text-[11px] text-slate-400">{t('heroDataLoaded')}</span></div></aside>
      <main className="min-w-0 p-8 max-lg:p-5 max-md:p-4"><div className="mb-6 flex items-end justify-between gap-4"><div><p className="m-0 text-[10px] font-black uppercase tracking-[0.18em] text-cyan-300">{t('workspace')}</p><h2 className="m-0 mt-1 text-3xl font-black tracking-tight text-white">{activeTab === 'simulator' ? copy.simulator : copy.database}</h2><p className="m-0 mt-2 text-sm text-slate-500">{activeTab === 'simulator' ? t('simulatorDescription') : t('databaseDescription')}</p></div></div><div className="mb-5 flex gap-2 border-b border-white/[0.08] md:hidden"><button type="button" onClick={() => setActiveTab('simulator')} className={`border-b-2 px-4 py-3 text-sm font-bold ${activeTab === 'simulator' ? 'border-cyan-300 text-cyan-300' : 'border-transparent text-slate-500'}`}>{copy.simulator}</button><button type="button" onClick={() => setActiveTab('database')} className={`border-b-2 px-4 py-3 text-sm font-bold ${activeTab === 'database' ? 'border-cyan-300 text-cyan-300' : 'border-transparent text-slate-500'}`}>{copy.database}</button></div>
        {isLoading ? <div role="status" className="rounded-xl border border-white/[0.08] bg-[#111827] p-8 text-center text-sm text-slate-400">{copy.loading}</div> : loadError ? <div role="alert" className="rounded-xl border border-rose-300/30 bg-rose-300/10 p-5 text-rose-200">{loadError}</div> : activeTab === 'simulator' ? <div className="grid gap-4 lg:grid-cols-[minmax(190px,1fr)_minmax(360px,1.6fr)_minmax(190px,1fr)]"><TeamDraftPanel team="blue" state={teams.blue} nameMode={nameMode} onOpenSlot={setActiveSlot} onRemove={removeHero} /><div className="grid content-start gap-4"><CounterRecommendations targets={enemyPicks} recommendations={recommendations} nameMode={nameMode} onSelect={selectRecommendation} labels={labels} /><div className="glass-card rounded-2xl p-4"><div className="flex items-center justify-between gap-3"><p className="m-0 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">{t('pickPhase')} / {t('banPhase')}</p><span className="rounded-full border border-emerald-300/25 bg-emerald-300/[0.08] px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-300">{t('live')}</span></div><p className="mt-2 text-sm leading-relaxed text-slate-300">{t('chooseSlot')}</p></div></div><TeamDraftPanel team="red" state={teams.red} nameMode={nameMode} onOpenSlot={setActiveSlot} onRemove={removeHero} /></div> : <section className="glass-card rounded-2xl p-4"><div className="mb-4 flex flex-wrap gap-3"><input value={databaseSearch} onChange={event => setDatabaseSearch(event.target.value)} placeholder={t('searchHero')} className="h-11 min-w-56 rounded-xl border border-white/[0.1] bg-[#172235] px-3 text-sm text-white outline-none"/><select aria-label={t('role')} value={roleFilter} onChange={event => setRoleFilter(event.target.value)} className="h-11 rounded-xl border border-white/[0.1] bg-[#172235] px-3 text-sm text-slate-300"><option value="all">{t('allRoles')}</option>{roles.map(role => <option key={role} value={role}>{t(`roles.${role}`, { defaultValue: role })}</option>)}</select><select aria-label={t('lane')} value={laneFilter} onChange={event => setLaneFilter(event.target.value)} className="h-11 rounded-xl border border-white/[0.1] bg-[#172235] px-3 text-sm text-slate-300"><option value="all">{t('allLanes')}</option>{lanes.map(lane => <option key={lane} value={lane}>{t(`lanes.${lane}`, { defaultValue: lane })}</option>)}</select><select aria-label={t('tier')} value={tierFilter} onChange={event => setTierFilter(event.target.value)} className="h-11 rounded-xl border border-white/[0.1] bg-[#172235] px-3 text-sm text-slate-300"><option value="all">{t('tier')}: all</option>{tiers.map(tier => <option key={tier}>{tier}</option>)}</select><button type="button" onClick={() => { setDatabaseSearch(''); setRoleFilter('all'); setLaneFilter('all'); setTierFilter('all'); }} className="h-11 rounded-xl border border-white/[0.1] px-3 text-xs font-bold text-slate-400 hover:border-cyan-300 hover:text-cyan-300">{t('clear')}</button></div><div className="overflow-x-auto"><table className="w-full min-w-[780px] text-left text-sm"><thead><tr className="border-b border-white/[0.08] text-[10px] uppercase tracking-[0.14em] text-slate-500">{([['name', t('hero')], ['role', t('role')], ['lane', t('lane')], ['tier', t('tier')], ['win', t('win')], ['pick', t('pick')], ['ban', t('ban')]] as const).map(([key, label]) => <th key={key} className="p-3"><button type="button" onClick={() => selectSort(key)} className="font-black hover:text-cyan-300">{label}{sortKey === key ? ` ${sortDirection === 'asc' ? '↑' : '↓'}` : ''}</button></th>)}</tr></thead><tbody>{filteredDatabase.map(hero => <tr key={hero.id} className="border-b border-white/[0.05] text-slate-300 hover:bg-white/[0.03]"><td className="p-3"><div className="flex items-center gap-3"><img src={hero.image_url} alt="" className="h-9 w-9 rounded-lg object-cover"/><span className="font-bold text-white">{displayHeroName(hero, nameMode)}</span></div></td><td className="p-3">{rolesOf(hero).join(', ') || t('roleUnavailable')}</td><td className="p-3">{hero.recommended_lane || '—'}</td><td className="p-3">{hero.popularity || '—'}</td><td className="p-3">{hero.win_rate}</td><td className="p-3">{hero.pick_rate}</td><td className="p-3">{hero.ban_rate}</td></tr>)}</tbody></table>{filteredDatabase.length === 0 && <p className="p-10 text-center text-sm text-slate-500">{t('noResults')}</p>}</div></section>}
      </main>
    </div>
    {activeSlot && <HeroPickerModal slot={activeSlot} heroes={heroes} usedIds={usedIds} nameMode={nameMode} onClose={() => setActiveSlot(null)} onSelect={pickHero} />}
    {isSearchOpen && <QuickSearchModal heroes={heroes} items={items} nameMode={nameMode} onClose={() => setIsSearchOpen(false)} onNavigate={target => { setIsSearchOpen(false); setActiveTab(target === 'hero' ? 'database' : 'simulator'); }} />}
  </div></GlassWorkspace>;
}

export default App;
