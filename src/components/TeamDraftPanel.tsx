import { useTranslation } from 'react-i18next';
import type { DraftHero, DraftSlot, DraftTeam, DraftTeamState } from '../types/draft';
import { displayHeroName, type HeroNameMode } from '../lib/hero';
import { DraftSlot as DraftSlotButton } from './DraftSlot';

interface TeamDraftPanelProps { team: DraftTeam; state: DraftTeamState; nameMode: HeroNameMode; onOpenSlot: (slot: DraftSlot) => void; onRemove: (slot: DraftSlot) => void; }

export function TeamDraftPanel({ team, state, nameMode, onOpenSlot, onRemove }: TeamDraftPanelProps) {
  const { t } = useTranslation();
  const isBlue = team === 'blue';
  const renderSlots = (phase: 'pick' | 'ban', heroes: Array<DraftHero | null>) => <div className="grid gap-2 px-3 pb-4">{heroes.map((hero, index) => { const slot = { team, phase, index }; return <DraftSlotButton key={`${phase}-${index}`} slot={slot} hero={hero} displayName={hero ? displayHeroName(hero, nameMode) : ''} onOpen={onOpenSlot} onRemove={onRemove} />; })}</div>;
  return <section className="glass-card overflow-hidden rounded-2xl"><div className={`flex items-center justify-between border-t-2 px-4 py-4 ${isBlue ? 'border-sky-400' : 'border-rose-400'}`}><div><h2 className="m-0 text-sm font-black text-white">{isBlue ? t('blueTeam') : t('redTeam')}</h2><p className="mt-1 text-[11px] text-slate-500">{state.picks.filter(Boolean).length}/5 {t('picksLocked')}</p></div><span className={`h-2.5 w-2.5 rounded-full ${isBlue ? 'bg-sky-400' : 'bg-rose-400'}`} aria-hidden="true" /></div><p className="px-4 pb-2 pt-1 text-[10px] font-black uppercase tracking-[0.16em] text-slate-600">{t('pickPhase')}</p>{renderSlots('pick', state.picks)}<p className="border-t border-white/[0.06] px-4 pb-2 pt-4 text-[10px] font-black uppercase tracking-[0.16em] text-slate-600">{t('banPhase')}</p>{renderSlots('ban', state.bans)}</section>;
}
