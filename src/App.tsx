import { useEffect, useMemo, useState } from 'react';
import { ChevronDown, Database, Languages, Search, Swords, X } from 'lucide-react';
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

type Tab = 'simulator' | 'database';
type SortKey = 'name' | 'role' | 'lane' | 'tier' | 'win' | 'pick' | 'ban';
type SearchItem = { id: string | number; name: string; category: string; price: number; icon: string };

function LandingPage({ onStart }: { onStart: () => void }) {
  const { t } = useTranslation();
  return <main className="landing-page">
    <div className="landing-nav"><div className="landing-brand"><span className="brand-mark" aria-hidden="true"><Swords size={18} /></span><strong>HOK DRAFT ANALYZER</strong></div><span>{t('workspace')}</span></div>
    <section className="landing-main"><div className="landing-index">01 / DRAFT ROOM</div><h1>READ THE<br /><em>DRAFT.</em><br />WIN MORE.</h1><p>{t('landingLead')}</p><button type="button" className="primary-action" onClick={onStart}>{t('start')} <span aria-hidden="true">↗</span></button></section>
    <div className="landing-footer"><span>{t('ticker')}</span><span>LOCAL DATA / NO ACCOUNT</span></div>
  </main>;
}

function App() {
  const [heroes, setHeroes] = useState<DraftHero[]>([]);
  const [items, setItems] = useState<SearchItem[]>([]);
  const [teams, setTeams] = useState({ blue: emptyTeam(), red: emptyTeam() });
  const [activeSlot, setActiveSlot] = useState<DraftSlot | null>(null);
  const [activeTab, setActiveTab] = useState<Tab>('simulator');
  const [databaseSearch, setDatabaseSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');
  const [laneFilter, setLaneFilter] = useState('all');
  const [tierFilter, setTierFilter] = useState('all');
  const [sortKey, setSortKey] = useState<SortKey>('name');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [loadError, setLoadError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [nameMode, setNameMode] = useState<HeroNameMode>('title');
  const { t, i18n } = useTranslation();
  const language = i18n.language.startsWith('id') ? 'id' : 'en';
  const copy = { title: t('title'), search: t('search'), simulator: t('simulator'), database: t('database'), loading: t('loading') };

  useEffect(() => {
    Promise.all([
      fetch('/heroes.json').then(response => { if (!response.ok) throw new Error('heroes.json unavailable'); return response.json() as Promise<DraftHero[]>; }),
      fetch('/items.json').then(response => { if (!response.ok) throw new Error('items.json unavailable'); return response.json() as Promise<SearchItem[]>; }),
    ]).then(([heroData, itemData]) => { setHeroes(heroData); setItems(itemData); }).catch(error => setLoadError(error instanceof Error ? error.message : 'Could not load draft data')).finally(() => setIsLoading(false));
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

  const selectSort = (key: SortKey) => {
    if (sortKey === key) setSortDirection(value => value === 'asc' ? 'desc' : 'asc');
    else { setSortKey(key); setSortDirection(key === 'name' || key === 'role' || key === 'lane' ? 'asc' : 'desc'); }
  };
  const clearFilters = () => { setDatabaseSearch(''); setRoleFilter('all'); setLaneFilter('all'); setTierFilter('all'); };
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
  return <GlassWorkspace backgroundImage="/bg-gloss.jpg"><div className="app-shell-inner">
    <header className="app-topbar"><div className="brand-lockup"><span className="brand-mark" aria-hidden="true"><Swords size={19} /></span><div><p className="brand-name">HoK Draft Analyzer</p><h1 className="brand-title">{copy.title}</h1></div></div><div className="top-actions"><button type="button" onClick={() => void i18n.changeLanguage(language === 'en' ? 'id' : 'en')} className="language-button" aria-label={t('language')}><Languages size={15} aria-hidden="true" /> {language.toUpperCase()}</button><button type="button" role="switch" aria-checked={nameMode === 'global'} aria-label={t('nameMode')} onClick={() => setNameMode(value => value === 'title' ? 'global' : 'title')} className={`name-mode ${nameMode === 'global' ? 'is-active' : ''}`}><span aria-hidden="true" />{nameMode === 'global' ? t('globalNames') : t('titleNames')}</button><label className="quick-search"><Search size={15} aria-hidden="true" /><span>FIND</span><input aria-label={copy.search} placeholder={copy.search} value={databaseSearch} onFocus={() => setIsSearchOpen(true)} onChange={event => { setDatabaseSearch(event.target.value); setIsSearchOpen(true); }} /></label><span className="sync-status"><span className="sync-dot" aria-hidden="true" /> {t('heroAdapter')}</span></div></header>
    <div className="app-frame"><aside className="side-nav"><p className="side-label">{t('workspace')}</p><button type="button" onClick={() => setActiveTab('simulator')} data-active={activeTab === 'simulator'} className="nav-button"><Swords size={17} aria-hidden="true" /><span className="nav-copy"><strong>{copy.simulator}</strong><span>{t('pickPhase')} / {t('banPhase')}</span></span></button><button type="button" onClick={() => setActiveTab('database')} data-active={activeTab === 'database'} className="nav-button"><Database size={17} aria-hidden="true" /><span className="nav-copy"><strong>{copy.database}</strong><span>{t('databaseDescription')}</span></span></button><div className="nav-footer">{t('draftOnline')}<small>{t('heroDataLoaded')}</small></div></aside>
      <main className="workspace"><div className="page-heading"><div><p className="section-kicker">{t('workspace')}</p><h2>{activeTab === 'simulator' ? copy.simulator : copy.database}</h2><p>{activeTab === 'simulator' ? t('simulatorDescription') : t('databaseDescription')}</p></div><span className="page-mode">{t('live')} / LOCAL DATA</span></div><div className="view-tabs" role="tablist" aria-label={t('workspace')}><button type="button" role="tab" aria-selected={activeTab === 'simulator'} onClick={() => setActiveTab('simulator')} data-active={activeTab === 'simulator'} className="view-tab">{copy.simulator}</button><button type="button" role="tab" aria-selected={activeTab === 'database'} onClick={() => setActiveTab('database')} data-active={activeTab === 'database'} className="view-tab">{copy.database}</button></div>
        {isLoading ? <div role="status" className="surface-card state-card"><span className="state-mark" aria-hidden="true">◌</span><strong>{copy.loading}</strong><p>{t('loadingDetail')}</p></div> : loadError ? <div role="alert" className="surface-card state-card state-error"><strong>{t('loadError')}</strong><p>{loadError}</p><button type="button" className="secondary-action" onClick={() => window.location.reload()}>{t('retry')}</button></div> : activeTab === 'simulator' ? <div className="draft-grid"><TeamDraftPanel team="blue" state={teams.blue} nameMode={nameMode} onOpenSlot={setActiveSlot} onRemove={removeHero} /><div className="center-stack"><CounterRecommendations targets={enemyPicks} recommendations={recommendations} nameMode={nameMode} onSelect={selectRecommendation} labels={labels} /><section className="surface-card flow-card"><div className="flow-index">DRAFT FLOW / 02</div><h3>{t('flowTitle')}</h3><p>{t('chooseSlot')}</p><div className="flow-steps"><span className="is-current">01 {t('pickPhase')}</span><span>02 {t('counterRecommendations')}</span><span>03 {t('banPhase')}</span></div></section></div><TeamDraftPanel team="red" state={teams.red} nameMode={nameMode} onOpenSlot={setActiveSlot} onRemove={removeHero} /></div> : <section className="surface-card database-card"><div className="database-intro"><div><div className="section-kicker">ROSTER INDEX</div><h3>{filteredDatabase.length} {t('hero')}</h3></div><button type="button" className="clear-button" onClick={clearFilters}>{t('clear')} <X size={14} aria-hidden="true" /></button></div><div className="filter-row"><label className="filter-field filter-wide"><span>{t('searchHero')}</span><div className="field-with-icon"><Search size={15} aria-hidden="true" /><input aria-label={t('searchHero')} value={databaseSearch} onChange={event => setDatabaseSearch(event.target.value)} placeholder={t('searchHero')} /></div></label><label className="filter-field"><span>{t('role')}</span><div className="select-wrap"><select value={roleFilter} onChange={event => setRoleFilter(event.target.value)}><option value="all">{t('allRoles')}</option>{roles.map(role => <option key={role} value={role}>{t(`roles.${role}`, { defaultValue: role })}</option>)}</select><ChevronDown size={14} aria-hidden="true" /></div></label><label className="filter-field"><span>{t('lane')}</span><div className="select-wrap"><select value={laneFilter} onChange={event => setLaneFilter(event.target.value)}><option value="all">{t('allLanes')}</option>{lanes.map(lane => <option key={lane} value={lane}>{t(`lanes.${lane}`, { defaultValue: lane })}</option>)}</select><ChevronDown size={14} aria-hidden="true" /></div></label><label className="filter-field"><span>{t('tier')}</span><div className="select-wrap"><select value={tierFilter} onChange={event => setTierFilter(event.target.value)}><option value="all">{t('tier')}: all</option>{tiers.map(tier => <option key={tier} value={tier}>{tier}</option>)}</select><ChevronDown size={14} aria-hidden="true" /></div></label></div><div className="table-wrap"><table className="meta-table"><thead><tr>{([['name', t('hero')], ['role', t('role')], ['lane', t('lane')], ['tier', t('tier')], ['win', t('win')], ['pick', t('pick')], ['ban', t('ban')]] as const).map(([key, label]) => <th key={key}><button type="button" onClick={() => selectSort(key)}>{label}<span aria-hidden="true">{sortKey === key ? sortDirection === 'asc' ? ' ↑' : ' ↓' : ''}</span></button></th>)}</tr></thead><tbody>{filteredDatabase.map(hero => <tr key={hero.id}><td><span className="hero-cell"><img src={hero.image_url} alt="" width="32" height="32" />{displayHeroName(hero, nameMode)}</span></td><td>{rolesOf(hero).join(', ') || t('roleUnavailable')}</td><td>{hero.recommended_lane || 'N/A'}</td><td><span className="tier-chip">{hero.popularity || 'N/A'}</span></td><td>{hero.win_rate}</td><td>{hero.pick_rate}</td><td>{hero.ban_rate}</td></tr>)}</tbody></table>{filteredDatabase.length === 0 && <div className="no-results"><strong>{t('noResults')}</strong><span>{t('clear')}</span></div>}</div></section>}
      </main></div>
    {activeSlot && <HeroPickerModal slot={activeSlot} heroes={heroes} usedIds={usedIds} nameMode={nameMode} onClose={() => setActiveSlot(null)} onSelect={pickHero} />}
    {isSearchOpen && <QuickSearchModal heroes={heroes} items={items} nameMode={nameMode} onClose={() => setIsSearchOpen(false)} onNavigate={target => { setIsSearchOpen(false); setActiveTab(target === 'hero' ? 'database' : 'simulator'); }} />}
  </div></GlassWorkspace>;
}

export default App;
