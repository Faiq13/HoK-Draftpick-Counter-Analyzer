import { useEffect, useMemo, useRef, useState, type KeyboardEvent } from 'react';
import { ChevronDown, Languages, Search, Swords, X, Globe, Type, Save } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { CounterRecommendations } from './components/CounterRecommendations';
import { CounterItemRecommendations } from './components/CounterItemRecommendations';
import { HeroPickerModal } from './components/HeroPickerModal';
import { TeamDraftPanel } from './components/TeamDraftPanel';
import { TeamSynergyPanel } from './components/TeamSynergyPanel';
import { QuickSearchModal } from './components/QuickSearchModal';
import { IconRail, type NavView } from './components/IconRail';
import { TopBreadcrumbHeader } from './components/TopBreadcrumbHeader';
import { ItemsDatabaseView } from './components/ItemsDatabaseView';
import { FilterDropdown } from './components/FilterDropdown';
import { AnalyticsView } from './components/AnalyticsView';
import { GlassWorkspace } from './components/ui/adjustable-glass-dashboard';
import { buildCounterRecommendations } from './lib/counter';
import { displayHeroName, type HeroNameMode } from './lib/hero';
import matchupRows from './data/counters.json';
import { slidePill, createPillElement, cleanupPill } from './motion';
import type { DraftHero, DraftSlot, DraftTeamState, SearchItem } from './types/draft';

const emptyTeam = (): DraftTeamState => ({ picks: Array(5).fill(null), bans: Array(3).fill(null) });
const parsePercent = (value: string | number | undefined) => Number.parseFloat(String(value || '').replace(/[^\d.-]/g, '')) || 0;
const rolesOf = (hero: DraftHero) => (Array.isArray(hero.roles) ? hero.roles : String(hero.roles || '').split(',')).map(value => value.trim()).filter(Boolean);

type SortKey = 'name' | 'role' | 'lane' | 'tier' | 'win' | 'pick' | 'ban';
type SearchTarget = 'hero' | 'item' | 'counter';
type LocalMatchupRow = { heroName: string; counteredByName: string; weight: number; reason: string };
const localMatchups = matchupRows as LocalMatchupRow[];

function LandingPage({ onStart }: { onStart: () => void }) {
  const { t } = useTranslation();
  return <main className="landing-page">
    <div className="landing-nav"><div className="landing-brand"><span className="brand-mark" aria-hidden="true"><Swords size={18} /></span><strong>HOK DRAFT ANALYZER</strong></div><span>{t('workspace')}</span></div>
    <section className="landing-main"><div className="landing-index">01 / DRAFT ROOM</div><h1>READ THE<br /><em>DRAFT.</em><br />WIN MORE.</h1><p>{t('landingLead')}</p><button type="button" className="primary-action" onClick={onStart}>{t('start')} <span aria-hidden="true">↗</span></button></section>
    <div className="landing-footer"><span>{t('ticker')}</span><span>{t('localDataNoAccount')}</span></div>
  </main>;
}

function SimulatorView({ teams, enemyPicks, bluePicks, recommendations, nameMode, onOpenSlot, onRemove, onSelectRecommendation, labels, items, selectRecommendation, onSavePreset }: any) {
  return (
    <div className="draft-grid">
      <TeamDraftPanel team="blue" state={teams.blue} nameMode={nameMode} onOpenSlot={onOpenSlot} onRemove={onRemove} />
      <div className="center-stack">
        <CenterPanel
          enemyPicks={enemyPicks}
          bluePicks={bluePicks}
          redPicks={teams.red.picks}
          recommendations={recommendations}
          nameMode={nameMode}
          onSelectRecommendation={onSelectRecommendation}
          labels={labels}
          items={items}
        />
      </div>
      <TeamDraftPanel team="red" state={teams.red} nameMode={nameMode} onOpenSlot={onOpenSlot} onRemove={onRemove} />
    </div>
  );
}

function CenterPanel({
  enemyPicks,
  bluePicks,
  redPicks,
  recommendations,
  nameMode,
  onSelectRecommendation,
  labels,
  items,
}: {
  enemyPicks: DraftHero[];
  bluePicks: DraftHero[];
  redPicks: DraftHero[];
  recommendations: import('./lib/counter').CounterRecommendation[];
  nameMode: HeroNameMode;
  onSelectRecommendation: (hero: DraftHero) => void;
  labels: { title: string; empty: string; counter: string; local: string; live: string };
  items: SearchItem[];
}) {
  const { t } = useTranslation();
  const tabsRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const [activeTab, setActiveTab] = useState<'counters' | 'items' | 'synergy'>('counters');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => { setIsMounted(true); return () => setIsMounted(false); }, []);

  useEffect(() => {
    if (!isMounted || !pillRef.current || !tabsRef.current) return;
    const activeButton = buttonRefs.current.get(activeTab);
    if (!activeButton) return;
    const pill = pillRef.current;
    const container = tabsRef.current;
    container.insertBefore(pill, container.firstChild);
    requestAnimationFrame(() => slidePill(pill, activeButton));
  }, [activeTab, isMounted]);

  useEffect(() => {
    const pill = pillRef.current;
    return () => { if (pill) cleanupPill(pill); };
  }, []);

  const counterLabels = { title: labels.title, empty: labels.empty, counter: labels.counter, local: labels.local, live: labels.live };

  return (
    <section className="surface-card center-panel" aria-labelledby="center-panel-heading">
      <div className="center-panel-heading">
        <div className="center-tabs-wrapper" role="tablist" aria-label={t('counterRecommendations')}>
          <div ref={tabsRef} className="center-tabs" role="presentation">
            <div ref={pillRef} className="nav-pill center-pill" aria-hidden="true" />
            {[
              { id: 'counters', label: t('heroCountersTab') },
              { id: 'items', label: t('itemCountersTab') },
              { id: 'synergy', label: t('teamSynergyTab') },
            ].map(({ id, label }) => (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={activeTab === id}
                aria-controls={`center-panel-${id}`}
                id={`center-tab-${id}`}
                ref={(el) => { if (el) buttonRefs.current.set(id, el); }}
                onClick={() => setActiveTab(id as 'counters' | 'items' | 'synergy')}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActiveTab(id as 'counters' | 'items' | 'synergy'); } }}
                className={`center-tab ${activeTab === id ? 'is-active' : ''}`}
                data-tab={id}
              >
                <span className="center-tab-label">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div id="center-panel-counters" role="tabpanel" aria-labelledby="center-tab-counters" className="center-panel-content" hidden={activeTab !== 'counters'}>
        <CounterRecommendations
          targets={enemyPicks}
          recommendations={recommendations}
          nameMode={nameMode}
          onSelect={onSelectRecommendation}
          labels={counterLabels}
        />
      </div>

      <div id="center-panel-items" role="tabpanel" aria-labelledby="center-tab-items" className="center-panel-content" hidden={activeTab !== 'items'}>
        {enemyPicks.length > 0 ? (
          <CounterItemRecommendations enemyPicks={enemyPicks} items={items} nameMode={nameMode} />
        ) : (
          <div className="empty-state" style={{padding: '24px', textAlign: 'center'}}>{t('selectOpposing')}</div>
        )}
      </div>

      <div id="center-panel-synergy" role="tabpanel" aria-labelledby="center-tab-synergy" className="center-panel-content" hidden={activeTab !== 'synergy'}>
        <TeamSynergyPanel bluePicks={bluePicks} redPicks={redPicks} />
      </div>
    </section>
  );
}

interface HeroesDatabaseViewProps {
  filteredDatabase: DraftHero[];
  roles: string[];
  lanes: string[];
  tierOptions: readonly string[];
  databaseSearch: string;
  setDatabaseSearch: (value: string) => void;
  roleFilter: string;
  setRoleFilter: (value: string) => void;
  laneFilter: string;
  setLaneFilter: (value: string) => void;
  tierFilter: string;
  setTierFilter: (value: string) => void;
  sortKey: SortKey;
  sortDirection: 'asc' | 'desc';
  selectSort: (key: SortKey) => void;
  clearFilters: () => void;
  selectedHeroId: number | null;
  setSelectedHeroId: (id: number | null) => void;
  nameMode: HeroNameMode;
  selectedHero: DraftHero | null;
  selectedHeroMatchups: LocalMatchupRow[];
  t: (key: string) => string;
}

function HeroesDatabaseView({
  filteredDatabase, roles, lanes, tierOptions, databaseSearch, setDatabaseSearch,
  roleFilter, setRoleFilter, laneFilter, setLaneFilter, tierFilter, setTierFilter,
  sortKey, sortDirection, selectSort, clearFilters, selectedHeroId, setSelectedHeroId,
  nameMode, selectedHero, selectedHeroMatchups, t
}: HeroesDatabaseViewProps) {
  return (
    <section className="surface-card database-card">
      <div className="database-intro">
        <div>
          <div className="section-kicker">{t('rosterIndex')}</div>
          <h3>{filteredDatabase.length} {t('hero')}</h3>
          <p className="tier-metric-note">{t('tierMetricNote')}</p>
        </div>
        <button type="button" className="clear-button" onClick={clearFilters}>{t('clear')} <X size={14} aria-hidden="true" /></button>
      </div>
      <div className="filter-row">
        <label className="filter-field filter-wide">
          <span>{t('searchHero')}</span>
          <div className="field-with-icon">
            <Search size={15} aria-hidden="true" />
            <input aria-label={t('searchHero')} value={databaseSearch} onChange={event => { setDatabaseSearch(event.target.value); }} className="filter-input" />
          </div>
        </label>
        <FilterDropdown label={t('role')} value={roleFilter} onChange={setRoleFilter}
          options={[{ value: 'all', label: t('allRoles') }, ...roles.map(role => ({ value: role, label: t(`roles.${role}`) === `roles.${role}` ? role : t(`roles.${role}`) }))]} />
        <FilterDropdown label={t('lane')} value={laneFilter} onChange={setLaneFilter}
          options={[{ value: 'all', label: t('allLanes') }, ...lanes.map(lane => ({ value: lane, label: t(`lanes.${lane}`) === `lanes.${lane}` ? lane : t(`lanes.${lane}`) }))]} />
        <FilterDropdown label={t('tier')} value={tierFilter} onChange={setTierFilter}
          options={[{ value: 'all', label: t('itemsTierAll') }, ...tierOptions.map(tier => ({ value: tier, label: tier }))]} />
      </div>
      {filteredDatabase.length === 0 ? (
        <div className="no-results" role="status">
          <p>{t('noResults')}</p>
          <span>{databaseSearch ? `"${databaseSearch}"` : t('noHeroes')}</span>
        </div>
      ) : (
        <>
          <div className="table-wrap">
            <table className="meta-table" role="grid">
              <thead>
                <tr>
                  <th scope="col"><button type="button" onClick={() => selectSort('name')} className="sortable-header">{t('hero')} {sortKey === 'name' ? (sortDirection === 'asc' ? '↑' : '↓') : ''}</button></th>
                  <th scope="col"><button type="button" onClick={() => selectSort('role')} className="sortable-header">{t('role')} {sortKey === 'role' ? (sortDirection === 'asc' ? '↑' : '↓') : ''}</button></th>
                  <th scope="col"><button type="button" onClick={() => selectSort('lane')} className="sortable-header">{t('lane')} {sortKey === 'lane' ? (sortDirection === 'asc' ? '↑' : '↓') : ''}</button></th>
                  <th scope="col"><button type="button" onClick={() => selectSort('tier')} className="sortable-header">{t('tier')} {sortKey === 'tier' ? (sortDirection === 'asc' ? '↑' : '↓') : ''}</button></th>
                  <th scope="col"><button type="button" onClick={() => selectSort('win')} className="sortable-header">{t('win')} {sortKey === 'win' ? (sortDirection === 'asc' ? '↑' : '↓') : ''}</button></th>
                  <th scope="col"><button type="button" onClick={() => selectSort('pick')} className="sortable-header">{t('pick')} {sortKey === 'pick' ? (sortDirection === 'asc' ? '↑' : '↓') : ''}</button></th>
                  <th scope="col"><button type="button" onClick={() => selectSort('ban')} className="sortable-header">{t('ban')} {sortKey === 'ban' ? (sortDirection === 'asc' ? '↑' : '↓') : ''}</button></th>
                </tr>
              </thead>
              <tbody>
                {filteredDatabase.map(hero => (
                  <tr key={hero.id} className={selectedHeroId === hero.id ? 'is-selected' : ''} onClick={() => setSelectedHeroId(selectedHeroId === hero.id ? null : hero.id)} role="row">
                    <td className="hero-cell"><img src={hero.image_url} alt="" width="32" height="32" className="hero-avatar" onError={event => { event.currentTarget.onerror = null; event.currentTarget.src = '/hero-placeholder.webp'; }} /><span>{displayHeroName(hero, nameMode)}</span></td>
                    <td>{rolesOf(hero).map((r, i) => <span key={i} className="badge-role">{r}</span>)}</td>
                    <td>{t(`lanes.${hero.recommended_lane}`) || hero.recommended_lane}</td>
                    <td>{hero.popularity && <span className="tier-chip">{hero.popularity}</span>}</td>
                    <td>{hero.win_rate}</td>
                    <td>{hero.pick_rate}</td>
                    <td>{hero.ban_rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {selectedHero && (
            <div className="database-detail">
              <div><strong>{displayHeroName(selectedHero, nameMode)}</strong><span>{rolesOf(selectedHero).join(', ')}</span></div>
              <div><strong>{t('lane')}</strong><span>{t(`lanes.${selectedHero.recommended_lane}`) || selectedHero.recommended_lane}</span></div>
              <div><strong>{t('tier')}</strong><span>{selectedHero.popularity || '—'}</span></div>
              <div><strong>{t('win')}</strong><span>{selectedHero.win_rate}</span></div>
              <div><strong>{t('pick')}</strong><span>{selectedHero.pick_rate}</span></div>
              <div><strong>{t('ban')}</strong><span>{selectedHero.ban_rate}</span></div>
              {selectedHeroMatchups.length > 0 && (
                <>
                  <div><strong>{t('matchups')}</strong></div>
                  {selectedHeroMatchups.slice(0, 10).map((matchup, i) => (
                    <div key={i}><span className="rec-target-name">{matchup.counteredByName}</span><span className="rec-reason-text"> — {matchup.reason}</span></div>
                  ))}
                </>
              )}
            </div>
          )}
        </>
      )}
    </section>
  );
}

function App() {
  const [heroes, setHeroes] = useState<DraftHero[]>([]);
  const [items, setItems] = useState<SearchItem[]>([]);
  const [teams, setTeams] = useState({ blue: emptyTeam(), red: emptyTeam() });
  const [activeSlot, setActiveSlot] = useState<DraftSlot | null>(null);
  const [activeView, setActiveView] = useState<NavView>('simulator');
  const [databaseSearch, setDatabaseSearch] = useState('');
  const [selectedHeroId, setSelectedHeroId] = useState<number | null>(null);
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const [roleFilter, setRoleFilter] = useState('all');
  const [laneFilter, setLaneFilter] = useState('all');
  const [tierFilter, setTierFilter] = useState('all');
  const [sortKey, setSortKey] = useState<SortKey>('tier');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [loadError, setLoadError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [nameMode, setNameMode] = useState<HeroNameMode>(() => (window.localStorage.getItem('hok-name-mode') as HeroNameMode) || 'title');
  const [hasStarted, setHasStarted] = useState(() => window.localStorage.getItem('hok-dashboard-started') === 'true');
  const [highlightedItemId, setHighlightedItemId] = useState<string | null>(null);
  const { t, i18n } = useTranslation();
  const language = i18n.language.startsWith('id') ? 'id' : 'en';
  const copy = { title: t('title'), search: t('search'), simulator: t('simulator'), database: t('database'), items: t('items'), analytics: t('analytics'), loading: t('loading') };

  useEffect(() => {
    Promise.all([
      fetch('/heroes.json').then(response => { if (!response.ok) throw new Error('heroes.json unavailable'); return response.json() as Promise<DraftHero[]>; }),
      fetch('/items.json').then(response => { if (!response.ok) throw new Error('items.json unavailable'); return response.json() as Promise<SearchItem[]>; }),
    ]).then(([heroData, itemData]) => { setHeroes(heroData); setItems(itemData); }).catch(error => setLoadError(error instanceof Error ? error.message : 'Could not load draft data')).finally(() => setIsLoading(false));
  }, []);

  const usedIds = useMemo(() => new Set(Object.values(teams).flatMap(team => [...team.picks, ...team.bans].filter(Boolean).map(hero => (hero as DraftHero).id))), [teams]);
  const enemyPicks = useMemo(() => teams.red.picks.filter(Boolean) as DraftHero[], [teams.red.picks]);
  const bluePicks = useMemo(() => teams.blue.picks.filter(Boolean) as DraftHero[], [teams.blue.picks]);
  const recommendations = useMemo(() => buildCounterRecommendations(heroes, enemyPicks, usedIds, 6, bluePicks), [heroes, enemyPicks, usedIds, bluePicks]);
  const roles = useMemo(() => [...new Set(heroes.flatMap(hero => rolesOf(hero)))].sort(), [heroes]);
  const lanes = useMemo(() => [...new Set(heroes.map(hero => hero.recommended_lane).filter(Boolean))].sort(), [heroes]);
  const tierOptions = useMemo(() => ['S', 'A', 'B', 'C'] as const, []);

  const TIER_PRIORITY: Record<string, number> = { S: 4, A: 3, B: 2, C: 1 };

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
      if (sortKey === 'tier') {
        const tierA = TIER_PRIORITY[String(a.popularity).toUpperCase()] ?? 0;
        const tierB = TIER_PRIORITY[String(b.popularity).toUpperCase()] ?? 0;
        if (tierA !== tierB) return (tierA - tierB) * direction;
        // Tie-break by win rate descending
        const winA = parsePercent(a.win_rate);
        const winB = parsePercent(b.win_rate);
        return (winA - winB) * direction;
      }
      const key = sortKey === 'win' ? a.win_rate : sortKey === 'pick' ? a.pick_rate : a.ban_rate;
      const other = sortKey === 'win' ? b.win_rate : sortKey === 'pick' ? b.pick_rate : b.ban_rate;
      return (parsePercent(key) - parsePercent(other)) * direction;
    });
  }, [heroes, databaseSearch, roleFilter, laneFilter, tierFilter, sortKey, sortDirection, nameMode]);

  const selectedHero = selectedHeroId === null ? null : heroes.find(hero => hero.id === selectedHeroId) ?? null;
  const selectedItem = selectedItemId === null ? null : items.find(item => String(item.id) === selectedItemId) ?? null;
  const selectedHeroMatchups = selectedHero ? localMatchups.filter(row => row.counteredByName === selectedHero.chinese_hero_name || row.heroName === selectedHero.chinese_hero_name) : [];
  useEffect(() => {
    if (activeView !== 'heroes' || (selectedHeroId === null && selectedItemId === null)) return;
    document.getElementById(selectedHeroId === null ? `item-${selectedItemId}` : `hero-${selectedHeroId}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, [activeView, selectedHeroId, selectedItemId]);

  const selectSort = (key: SortKey) => {
    if (sortKey === key) setSortDirection(value => value === 'asc' ? 'desc' : 'asc');
    else { setSortKey(key); setSortDirection(key === 'name' || key === 'role' || key === 'lane' ? 'asc' : 'desc'); }
  };
  const clearFilters = () => { setDatabaseSearch(''); setRoleFilter('all'); setLaneFilter('all'); setTierFilter('all'); setSelectedHeroId(null); setSelectedItemId(null); };
  const navigateFromSearch = (target: SearchTarget, id: string) => {
    if (target === 'hero') {
      const heroId = Number(id);
      const hero = heroes.find(item => item.id === heroId);
      setActiveView('heroes');
      setDatabaseSearch(hero ? '' : id);
      setSelectedHeroId(hero ? hero.id : null);
      setSelectedItemId(null);
      return;
    }
    if (target === 'item') {
      setActiveView('items');
      setHighlightedItemId(id);
      setSelectedItemId(id);
      setSelectedHeroId(null);
      setDatabaseSearch('');
    }
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

  const handleSavePreset = () => {
    const name = `Draft ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    const preset = {
      id: `preset-${Date.now()}`,
      name,
      blue: { ...teams.blue, picks: [...teams.blue.picks], bans: [...teams.blue.bans] },
      red: { ...teams.red, picks: [...teams.red.picks], bans: [...teams.red.bans] },
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    try {
      const stored = localStorage.getItem('hok-draft-presets');
      const presets = stored ? JSON.parse(stored) : [];
      localStorage.setItem('hok-draft-presets', JSON.stringify([...presets, preset]));
    } catch {
      localStorage.setItem('hok-draft-presets', JSON.stringify([preset]));
    }
  };

  const handleLoadPreset = (event: CustomEvent<{ blue: DraftTeamState; red: DraftTeamState }>) => {
    const { blue, red } = event.detail;
    setTeams({ blue, red });
    setActiveView('simulator');
  };

  useEffect(() => {
    window.addEventListener('hok-load-preset', handleLoadPreset as EventListener);
    return () => window.removeEventListener('hok-load-preset', handleLoadPreset as EventListener);
  }, []);

  useEffect(() => {
    window.localStorage.setItem('hok-name-mode', nameMode);
  }, [nameMode]);

  if (!hasStarted) return <LandingPage onStart={() => { window.localStorage.setItem('hok-dashboard-started', 'true'); setHasStarted(true); }} />;

  const labels = { title: t('counterRecommendations'), empty: enemyPicks.length ? t('noResults') : t('selectOpposing'), counter: t('counterHero'), local: t('localMatchupData'), live: t('live') };
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 760;

  let viewContent: React.ReactNode;
  if (isLoading) {
    viewContent = <div role="status" className="surface-card state-card"><span className="state-mark" aria-hidden="true">◌</span><strong>{copy.loading}</strong><p>{t('loadingDetail')}</p></div>;
  } else if (loadError) {
    viewContent = <div role="alert" className="surface-card state-card state-error"><strong>{t('loadError')}</strong><p>{loadError}</p><button type="button" className="secondary-action" onClick={() => window.location.reload()}>{t('retry')}</button></div>;
  } else if (activeView === 'simulator') {
    viewContent = (
      <SimulatorView
        teams={teams}
        enemyPicks={enemyPicks}
        bluePicks={bluePicks}
        recommendations={recommendations}
        nameMode={nameMode}
        onOpenSlot={setActiveSlot}
        onRemove={removeHero}
        onSelectRecommendation={selectRecommendation}
        labels={labels}
        items={items}
        selectRecommendation={selectRecommendation}
        onSavePreset={handleSavePreset}
      />
    );
  } else if (activeView === 'heroes') {
    viewContent = (
      <HeroesDatabaseView
        filteredDatabase={filteredDatabase}
        roles={roles}
        lanes={lanes}
        tierOptions={tierOptions}
        databaseSearch={databaseSearch}
        setDatabaseSearch={setDatabaseSearch}
        roleFilter={roleFilter}
        setRoleFilter={setRoleFilter}
        laneFilter={laneFilter}
        setLaneFilter={setLaneFilter}
        tierFilter={tierFilter}
        setTierFilter={setTierFilter}
        sortKey={sortKey}
        sortDirection={sortDirection}
        selectSort={selectSort}
        clearFilters={clearFilters}
        selectedHeroId={selectedHeroId}
        setSelectedHeroId={setSelectedHeroId}
        nameMode={nameMode}
        selectedHero={selectedHero}
        selectedHeroMatchups={selectedHeroMatchups}
        t={t}
      />
    );
  } else if (activeView === 'items') {
    viewContent = <ItemsDatabaseView items={items} highlightedItemId={highlightedItemId} onHighlightClear={() => setHighlightedItemId(null)} nameMode={nameMode} />;
  } else {
    viewContent = <AnalyticsView heroes={heroes} currentTeams={teams} nameMode={nameMode} />;
  }

  return (
    <GlassWorkspace backgroundImage="/bg-gloss.jpg">
      <div className="app-shell-inner">
        <TopBreadcrumbHeader
          activeView={activeView}
          onQuickSearchFocus={() => setIsSearchOpen(true)}
          quickSearchValue={databaseSearch}
          onQuickSearchChange={setDatabaseSearch}
          onQuickSearchBlur={() => setIsSearchOpen(false)}
          language={language}
          onLanguageToggle={() => void i18n.changeLanguage(language === 'en' ? 'id' : 'en')}
          nameMode={nameMode}
          onNameModeToggle={() => setNameMode(value => value === 'title' ? 'global' : 'title')}
          isSearchOpen={isSearchOpen}
        />
        <div className="app-frame">
          <IconRail
            activeView={activeView}
            onViewChange={setActiveView}
            isMobile={isMobile}
          />
          <main className="workspace">
            <div className="page-heading">
              <div>
                <p className="section-kicker">{t('workspace')}</p>
                <h2>
                  {activeView === 'simulator' ? copy.simulator :
                   activeView === 'heroes' ? copy.database :
                   activeView === 'items' ? copy.items :
                   copy.analytics}
                </h2>
                <p>
                  {activeView === 'simulator' ? t('simulatorDescription') :
                   activeView === 'heroes' ? t('databaseDescription') :
                   activeView === 'items' ? t('itemsDescription') :
                   t('analyticsDescription')}
                </p>
              </div>
              <div className="page-heading-actions">
                {activeView === 'simulator' && (
                  <button
                    type="button"
                    onClick={handleSavePreset}
                    disabled={!bluePicks.some(Boolean) && !teams.red.picks.some(Boolean)}
                    className="save-preset-button"
                    aria-label={t('analyticsSavePreset')}
                    title={t('analyticsSavePreset')}
                  >
                    <Save size={14} aria-hidden="true" />
                    <span>{t('analyticsSavePreset')}</span>
                  </button>
                )}
                <span className="page-mode">{t('live')} / {t('localData')}</span>
              </div>
            </div>
            {viewContent}
          </main>
        </div>
        {activeSlot && <HeroPickerModal slot={activeSlot} heroes={heroes} usedIds={usedIds} nameMode={nameMode} onClose={() => setActiveSlot(null)} onSelect={pickHero} />}
        {isSearchOpen && <QuickSearchModal heroes={heroes} items={items} nameMode={nameMode} onClose={() => setIsSearchOpen(false)} onNavigate={navigateFromSearch} />}
      </div>
    </GlassWorkspace>
  );
}

export default App;
