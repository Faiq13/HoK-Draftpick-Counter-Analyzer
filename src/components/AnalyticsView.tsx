import { useEffect, useMemo, useRef, useState, type ChangeEvent, type KeyboardEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { Search, ChevronDown, Save, Trash2, X, Upload, Download, ArrowUpDown, Sparkles, Sword, type LucideIcon } from 'lucide-react';
import { displayHeroName } from '../lib/hero';
import { buildCounterRecommendations, getCounterMetaTier, type CounterRecommendation } from '../lib/counter';
import { resolveCounterReason } from '../lib/counterReason';
import type { DraftHero, DraftTeamState, DraftSlot } from '../types/draft';
import { slidePill, createPillElement, cleanupPill } from '../motion';

const PRESET_STORAGE_KEY = 'hok-draft-presets';

interface DraftPreset {
  id: string;
  name: string;
  blue: DraftTeamState;
  red: DraftTeamState;
  createdAt: number;
  updatedAt: number;
}

const emptyTeam = (): DraftTeamState => ({ picks: Array(5).fill(null), bans: Array(3).fill(null) });

interface AnalyticsViewProps {
  heroes: DraftHero[];
  currentTeams: { blue: DraftTeamState; red: DraftTeamState };
  nameMode: 'global' | 'title';
}

export function AnalyticsView({ heroes, currentTeams, nameMode }: AnalyticsViewProps) {
  const { t, i18n } = useTranslation();
  const [presets, setPresets] = useState<DraftPreset[]>([]);
  const [newPresetName, setNewPresetName] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [counterEnemyId, setCounterEnemyId] = useState<number | null>(null);
  const [counterYourId, setCounterYourId] = useState<number | null>(null);
  const [enemySearch, setEnemySearch] = useState('');
  const [yourSearch, setYourSearch] = useState('');
  const presetsTabsRef = useRef<HTMLDivElement>(null);
  const presetsPillRef = useRef<HTMLDivElement>(null);
  const presetButtonRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const [activePresetTab, setActivePresetTab] = useState<'presets' | 'counter'>('presets');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(PRESET_STORAGE_KEY);
      if (stored) setPresets(JSON.parse(stored));
    } catch {
      setPresets([]);
    }
  }, []);

  const savePresets = (newPresets: DraftPreset[]) => {
    setPresets(newPresets);
    localStorage.setItem(PRESET_STORAGE_KEY, JSON.stringify(newPresets));
  };

  const handleSavePreset = () => {
    const name = newPresetName.trim() || `Preset ${Date.now()}`;
    const preset: DraftPreset = {
      id: `preset-${Date.now()}`,
      name,
      blue: { ...currentTeams.blue, picks: [...currentTeams.blue.picks], bans: [...currentTeams.blue.bans] },
      red: { ...currentTeams.red, picks: [...currentTeams.red.picks], bans: [...currentTeams.red.bans] },
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    savePresets([...presets, preset]);
    setNewPresetName('');
    setIsSaving(false);
  };

  const handleLoadPreset = (preset: DraftPreset) => {
    const event = new CustomEvent('hok-load-preset', { detail: preset });
    window.dispatchEvent(event);
  };

  const handleDeletePreset = (id: string) => {
    savePresets(presets.filter(p => p.id !== id));
  };

  const handleExportPreset = (preset: DraftPreset) => {
    const blob = new Blob([JSON.stringify(preset, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${preset.name}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportPreset = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const preset = JSON.parse(e.target?.result as string);
        if (preset.blue && preset.red) {
          const newPreset: DraftPreset = {
            ...preset,
            id: `preset-${Date.now()}`,
            createdAt: Date.now(),
            updatedAt: Date.now(),
          };
          savePresets([...presets, newPreset]);
        }
      } catch {
        // Ignore invalid files
      }
    };
    reader.readAsText(file);
    event.target.value = '';
  };

  const enemyHero = counterEnemyId ? heroes.find(h => h.id === counterEnemyId) : null;
  const yourHero = counterYourId ? heroes.find(h => h.id === counterYourId) : null;

  const matchup = useMemo(() => {
    if (!enemyHero || !yourHero || enemyHero.id === yourHero.id) return null;
    return {
      advantage: buildCounterRecommendations([yourHero], [enemyHero], { limit: 1 })[0],
      threat: buildCounterRecommendations([enemyHero], [yourHero], { limit: 1 })[0],
    };
  }, [enemyHero, yourHero]);

  const localizedReasons = (recommendation: CounterRecommendation) => [...new Set(
    recommendation.structuredReasons.flatMap(reason => {
      const reasons = i18n.language.startsWith('id') ? reason.allReasons_id ?? [reason.reason_id ?? reason.reason] : reason.allReasons;
      return reasons.map(text => resolveCounterReason(text, t));
    })
  )];

  const filteredEnemyHeroes = useMemo(() => {
    const query = enemySearch.trim().toLowerCase();
    return heroes.filter(h => `${h.chinese_hero_name} ${h.english_hero_name}`.toLowerCase().includes(query));
  }, [heroes, enemySearch]);

  const filteredYourHeroes = useMemo(() => {
    const query = yourSearch.trim().toLowerCase();
    return heroes.filter(h => `${h.chinese_hero_name} ${h.english_hero_name}`.toLowerCase().includes(query));
  }, [heroes, yourSearch]);

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, tab: 'presets' | 'counter') => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setActivePresetTab(tab);
    }
  };

  useEffect(() => {
    if (!isMounted || !presetsPillRef.current) return;

    const activeButton = presetButtonRefs.current.get(activePresetTab);
    if (!activeButton) return;

    const pill = presetsPillRef.current;
    const container = presetsTabsRef.current;
    if (!container) return;

    container.insertBefore(pill, container.firstChild);

    requestAnimationFrame(() => {
      slidePill(pill, activeButton);
    });
  }, [activePresetTab, isMounted]);

  useEffect(() => {
    const pill = presetsPillRef.current;
    return () => {
      if (pill) cleanupPill(pill);
    };
  }, []);

  return (
    <div className="analytics-view" role="region" aria-label={t('analytics')}>
      <div className="analytics-header">
        <div className="analytics-tabs-wrapper" role="tablist" aria-label={t('analytics')}>
          <div ref={presetsTabsRef} className="analytics-tabs" role="presentation">
            <div ref={presetsPillRef} className="nav-pill analytics-pill" aria-hidden="true" />
            <button
              type="button"
              role="tab"
              aria-selected={activePresetTab === 'presets'}
              aria-controls="presets-panel"
              id="presets-tab"
              ref={(el) => { if (el) presetButtonRefs.current.set('presets', el); }}
              onClick={() => setActivePresetTab('presets')}
              onKeyDown={(e) => handleKeyDown(e, 'presets')}
              className={`analytics-tab ${activePresetTab === 'presets' ? 'is-active' : ''}`}
            >
              <Sparkles size={18} aria-hidden="true" />
              <span>{t('analyticsSavedPresets')}</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activePresetTab === 'counter'}
              aria-controls="counter-panel"
              id="counter-tab"
              ref={(el) => { if (el) presetButtonRefs.current.set('counter', el); }}
              onClick={() => setActivePresetTab('counter')}
              onKeyDown={(e) => handleKeyDown(e, 'counter')}
              className={`analytics-tab ${activePresetTab === 'counter' ? 'is-active' : ''}`}
            >
              <ArrowUpDown size={18} aria-hidden="true" />
              <span>{t('analyticsCounterLookup')}</span>
            </button>
          </div>
        </div>
      </div>

      {activePresetTab === 'presets' && (
        <div id="presets-panel" role="tabpanel" aria-labelledby="presets-tab" className="analytics-panel">
          <div className="presets-toolbar">
            <div className="preset-save-form">
              <label htmlFor="preset-name" className="sr-only">{t('analyticsPresetName')}</label>
              <input
                id="preset-name"
                type="text"
                value={newPresetName}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setNewPresetName(e.target.value)}
                placeholder={t('analyticsPresetName')}
                className="preset-name-input"
                onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); if (newPresetName.trim()) handleSavePreset(); } }}
              />
              <button
                type="button"
                onClick={handleSavePreset}
                disabled={isSaving || !currentTeams.blue.picks.some(Boolean) && !currentTeams.red.picks.some(Boolean)}
                className="save-preset-button"
              >
                <Save size={16} aria-hidden="true" />
                <span>{isSaving ? t('analyticsSavePreset') : t('analyticsSavePreset')}</span>
              </button>
            </div>
            <label className="import-preset-label">
              <input
                type="file"
                accept=".json"
                onChange={handleImportPreset}
                className="import-preset-input"
                aria-label={t('analyticsLoadPreset')}
              />
              <button type="button" className="import-preset-button">
                <Upload size={16} aria-hidden="true" />
                <span>{t('analyticsLoadPreset')}</span>
              </button>
            </label>
          </div>

          {presets.length === 0 ? (
            <div className="empty-presets" role="status">
              <Sparkles size={48} aria-hidden="true" className="empty-icon" />
              <p>{t('analyticsNoPresets')}</p>
            </div>
          ) : (
            <div className="presets-grid" role="list">
              {presets.map((preset) => (
                <article key={preset.id} className="preset-card" role="listitem">
                  <div className="preset-header">
                    <h3 className="preset-name">{preset.name}</h3>
                    <div className="preset-actions">
                      <button
                        type="button"
                        onClick={() => handleExportPreset(preset)}
                        aria-label={`${t('analyticsLoadPreset')} (export)`}
                        className="preset-action-button"
                      >
                        <Download size={14} aria-hidden="true" />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDeletePreset(preset.id)}
                        aria-label={t('analyticsDeletePreset')}
                        className="preset-action-button destructive"
                      >
                        <Trash2 size={14} aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  <div className="preset-preview">
                    <div className="preset-team preset-blue">
                      <span className="preset-team-label">{t('blueTeam')}</span>
                      <div className="preset-slots">
                        {preset.blue.picks.map((hero, i) => hero ? (
                          <div key={`b-pick-${i}`} className="preset-slot has-hero" title={displayHeroName(hero, nameMode)}>
                            <img src={hero.image_url} alt="" width="28" height="28" className="preset-slot-avatar" />
                          </div>
                        ) : (
                          <div key={`b-pick-empty-${i}`} className="preset-slot empty" />
                        ))}
                      </div>
                    </div>
                    <div className="preset-team preset-red">
                      <span className="preset-team-label">{t('redTeam')}</span>
                      <div className="preset-slots">
                        {preset.red.picks.map((hero, i) => hero ? (
                          <div key={`r-pick-${i}`} className="preset-slot has-hero" title={displayHeroName(hero, nameMode)}>
                            <img src={hero.image_url} alt="" width="28" height="28" className="preset-slot-avatar" />
                          </div>
                        ) : (
                          <div key={`r-pick-empty-${i}`} className="preset-slot empty" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleLoadPreset(preset)}
                    className="load-preset-button"
                  >
                    {t('analyticsLoadPreset')}
                  </button>
                </article>
              ))}
            </div>
          )}
        </div>
      )}

      {activePresetTab === 'counter' && (
        <div id="counter-panel" role="tabpanel" aria-labelledby="counter-tab" className="analytics-panel">
          <div className="counter-lookup">
            <div className="counter-selectors">
              <div className="counter-selector">
                <label htmlFor="counter-enemy" className="counter-selector-label">
                  {t('analyticsSelectEnemyHero')}
                </label>
                <div className="counter-search-wrapper">
                  <Search size={16} aria-hidden="true" />
                  <input
                    id="counter-enemy"
                    type="search"
                    value={enemySearch}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setEnemySearch(e.target.value)}
                    placeholder={t('searchHero')}
                    aria-label={t('analyticsSelectEnemyHero')}
                    className="counter-search-input"
                  />
                </div>
                <div className="counter-options" role="listbox" aria-label={t('analyticsSelectEnemyHero')}>
                  {filteredEnemyHeroes.map(hero => (
                    <button
                      key={hero.id}
                      type="button"
                      role="option"
                      aria-selected={counterEnemyId === hero.id}
                      onClick={() => setCounterEnemyId(hero.id)}
                      className={`counter-option ${counterEnemyId === hero.id ? 'is-selected' : ''}`}
                    >
                      <img src={hero.image_url} alt="" width="28" height="28" className="counter-option-avatar" />
                      <span>{displayHeroName(hero, nameMode)}</span>
                    </button>
                  ))}
                  {!filteredEnemyHeroes.length && <p className="counter-note" role="status">{t('noResults')}</p>}
                </div>
              </div>

              <div className="counter-vs" aria-hidden="true">
                <span>VS</span>
              </div>

              <div className="counter-selector">
                <label htmlFor="counter-your" className="counter-selector-label">
                  {t('analyticsSelectYourHero')}
                </label>
                <div className="counter-search-wrapper">
                  <Search size={16} aria-hidden="true" />
                  <input
                    id="counter-your"
                    type="search"
                    value={yourSearch}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setYourSearch(e.target.value)}
                    placeholder={t('searchHero')}
                    aria-label={t('analyticsSelectYourHero')}
                    className="counter-search-input"
                  />
                </div>
                <div className="counter-options" role="listbox" aria-label={t('analyticsSelectYourHero')}>
                  {filteredYourHeroes.map(hero => (
                    <button
                      key={hero.id}
                      type="button"
                      role="option"
                      aria-selected={counterYourId === hero.id}
                      onClick={() => setCounterYourId(hero.id)}
                      className={`counter-option ${counterYourId === hero.id ? 'is-selected' : ''}`}
                    >
                      <img src={hero.image_url} alt="" width="28" height="28" className="counter-option-avatar" />
                      <span>{displayHeroName(hero, nameMode)}</span>
                    </button>
                  ))}
                  {!filteredYourHeroes.length && <p className="counter-note" role="status">{t('noResults')}</p>}
                </div>
              </div>
            </div>

            {enemyHero && yourHero && (
              <div className="counter-result">
                <div className="counter-matchup-header">
                  <div className="counter-hero enemy">
                    <img src={enemyHero.image_url} alt="" width="56" height="56" className="counter-hero-avatar" />
                    <span>{displayHeroName(enemyHero, nameMode)}</span>
                  </div>
                  <span className="counter-vs-large">VS</span>
                  <div className="counter-hero your">
                    <img src={yourHero.image_url} alt="" width="56" height="56" className="counter-hero-avatar" />
                    <span>{displayHeroName(yourHero, nameMode)}</span>
                  </div>
                </div>
                <div className="counter-stats">
                  <div className="counter-stat">
                    <span className="counter-stat-label">{t('analyticsWinRate')}</span>
                    <span className="counter-stat-value">{enemyHero.win_rate} / {yourHero.win_rate}</span>
                  </div>
                  <div className="counter-stat">
                    <span className="counter-stat-label">{t('analyticsPickRate')}</span>
                    <span className="counter-stat-value">{enemyHero.pick_rate} / {yourHero.pick_rate}</span>
                  </div>
                  <div className="counter-stat">
                    <span className="counter-stat-label">{t('analyticsBanRate')}</span>
                    <span className="counter-stat-value">{enemyHero.ban_rate} / {yourHero.ban_rate}</span>
                  </div>
                </div>
                {enemyHero.id === yourHero.id ? (
                  <p className="counter-note" role="status">{t('analyticsSameHero')}</p>
                ) : (
                  <div className="matchup-analysis" aria-live="polite">
                    <div className="matchup-tiers">
                      <h3>{t('analyticsTierComparison')}</h3>
                      <p>{t('analyticsYourHero')}: {displayHeroName(yourHero, nameMode)} <strong>{getCounterMetaTier(yourHero)}</strong></p>
                      <p>{t('analyticsEnemyHero')}: {displayHeroName(enemyHero, nameMode)} <strong>{getCounterMetaTier(enemyHero)}</strong></p>
                    </div>
                    <section className="matchup-direction advantage" aria-labelledby="your-advantage-heading">
                      <h3 id="your-advantage-heading">{t('analyticsYourAdvantage')}</h3>
                      {matchup?.advantage ? <>
                        <p className="matchup-score">{t('analyticsCounterScore')}: <strong>{matchup.advantage.score}</strong></p>
                        <ul>{localizedReasons(matchup.advantage).map(reason => <li key={reason}>{reason}</li>)}</ul>
                      </> : <p>{t('analyticsNoAdvantage')}</p>}
                    </section>
                    {matchup?.threat && (
                      <section className="matchup-direction threat" aria-labelledby="enemy-threat-heading">
                        <h3 id="enemy-threat-heading">{t('analyticsEnemyThreat')}</h3>
                        <p className="matchup-score">{t('analyticsCounterScore')}: <strong>{matchup.threat.score}</strong></p>
                        <ul>{localizedReasons(matchup.threat).map(reason => <li key={reason}>{reason}</li>)}</ul>
                      </section>
                    )}
                    {!matchup?.advantage && !matchup?.threat && <p className="counter-note">{t('analyticsNoCounterData')}</p>}
                    {(matchup?.advantage || matchup?.threat) && <p className="counter-note">{t('analyticsScoreNote')}</p>}
                  </div>
                )}
              </div>
            )}

            {!enemyHero || !yourHero ? (
              <div className="counter-placeholder" role="status">
                <ArrowUpDown size={48} aria-hidden="true" className="placeholder-icon" />
                <p>{enemyHero ? t('analyticsSelectYourHero') : t('analyticsSelectEnemyHero')}</p>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}

export default AnalyticsView;
