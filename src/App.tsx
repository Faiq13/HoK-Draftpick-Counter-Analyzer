import React, { useState } from 'react';
import { ItemCounterPanel } from './components/ItemCounterPanel';
import DashboardLayout from './components/DashboardLayout';
import { DraftBoard } from './components/DraftBoard';
import { CounterRecommendations } from './components/CounterRecommendations';
import { FloatingHeroPicker } from './components/FloatingHeroPicker';
import { HeroCatalogView } from './components/views/HeroCatalogView';
import { HeroCounterView } from './components/views/HeroCounterView';
import { HeroTierView } from './components/views/HeroTierView';
import { DatabaseItemView } from './components/views/DatabaseItemView';
import { getHeroes, type Hero } from './services/heroAdapter';
import type { DraftState } from './types/draft';
import type { AppView } from './components/Sidebar';

const heroes = getHeroes();
const initialDraft: DraftState = { blueTeam: Array(5).fill(null), redTeam: Array(5).fill(null), blueBans: Array(3).fill(null), redBans: Array(3).fill(null), activeSlot: { side: 'blue', type: 'pick', index: 0 } };

export default function App() {
  const [currentView, setCurrentView] = useState<AppView>('dashboard');
  const [draftState, setDraftState] = useState<DraftState>(initialDraft);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [showItems, setShowItems] = useState(false);
  const [language, setLanguage] = useState<'en' | 'id'>('id');
  const pickedOrBannedIds = [...draftState.blueTeam, ...draftState.redTeam, ...draftState.blueBans, ...draftState.redBans].filter((id): id is string => id !== null);
  const selectSlot = (side: 'blue' | 'red', type: 'pick' | 'ban', index: number) => { setDraftState(state => ({ ...state, activeSlot: { side, type, index } })); setPickerOpen(true); };
  const removeHero = (side: 'blue' | 'red', type: 'pick' | 'ban', index: number) => setDraftState(state => { const key = type === 'pick' ? side === 'blue' ? 'blueTeam' : 'redTeam' : side === 'blue' ? 'blueBans' : 'redBans'; const values = [...state[key]]; values[index] = null; return { ...state, [key]: values, activeSlot: { side, type, index } }; });
  const selectHero = (hero: Hero) => { const slot = draftState.activeSlot; if (!slot || pickedOrBannedIds.includes(hero.id)) return; const key = slot.type === 'pick' ? slot.side === 'blue' ? 'blueTeam' : 'redTeam' : slot.side === 'blue' ? 'blueBans' : 'redBans'; const values = [...draftState[key]]; values[slot.index] = hero.id; const nextIndex = values.findIndex((id, index) => index > slot.index && id === null); setDraftState(state => ({ ...state, [key]: values, activeSlot: nextIndex >= 0 ? { ...slot, index: nextIndex } : null })); if (nextIndex < 0) setPickerOpen(false); };
  const selectHeroForActiveSlot = (heroId: string) => { const hero = heroes.find(item => item.id === heroId); if (hero) selectHero(hero); };
  const content = currentView === 'dashboard' ? <section className="mx-auto flex w-full max-w-[1440px] flex-col gap-5 px-8 py-8 max-lg:px-5 max-md:px-4"><div><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300">HoK Draft Analyzer</p><h2 className="mt-2 text-3xl font-black text-white md:text-4xl">Live 5v5 Draft Board</h2><p className="mt-2 text-sm text-slate-300">Pick or ban heroes. Counter recommendations recalculate from every locked enemy pick.</p></div><DraftBoard draftState={draftState} onSelectSlot={selectSlot} onRemoveHero={removeHero} /><CounterRecommendations draftState={draftState} onSelectHeroForActiveSlot={selectHeroForActiveSlot} /><button type="button" onClick={() => { setShowItems(true); setCurrentView('items'); }} className="gw-panel rounded-xl px-4 py-3 text-sm font-bold text-cyan-200 hover:border-cyan-300/50">Submit dan lanjut ke Item Counter</button>{showItems && <ItemCounterPanel draftState={draftState} />}<FloatingHeroPicker open={pickerOpen} excludedIds={pickedOrBannedIds} onSelect={selectHero} onClose={() => setPickerOpen(false)} /></section> : currentView === 'roster' ? <HeroCatalogView /> : currentView === 'counter' ? <HeroCounterView /> : <DatabaseItemView />;
  return <DashboardLayout currentView={currentView} onViewChange={setCurrentView} language={language} onLanguageChange={setLanguage}>{content}</DashboardLayout>;
}
