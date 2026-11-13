import { useTranslation } from 'react-i18next';
import type { DraftHero, DraftSlot, DraftTeam, DraftTeamState } from '../types/draft';
import { displayHeroName, type HeroNameMode } from '../lib/hero';
import { DraftSlot as DraftSlotButton } from './DraftSlot';

interface TeamDraftPanelProps { team: DraftTeam; state: DraftTeamState; nameMode: HeroNameMode; onOpenSlot: (slot: DraftSlot) => void; onRemove: (slot: DraftSlot) => void; }

export function TeamDraftPanel({ team, state, nameMode, onOpenSlot, onRemove }: TeamDraftPanelProps) {
  const { t } = useTranslation();
  const isBlue = team === 'blue';
  const renderSlots = (phase: 'pick' | 'ban', heroes: Array<DraftHero | null>) => <div className="slot-list">{heroes.map((hero, index) => { const slot = { team, phase, index }; return <DraftSlotButton key={`${phase}-${index}`} slot={slot} hero={hero} displayName={hero ? displayHeroName(hero, nameMode) : ''} onOpen={onOpenSlot} onRemove={onRemove} />; })}</div>;
  return <section className="surface-card team-panel" aria-label={`${isBlue ? t('blueTeam') : t('redTeam')} draft slots`}><div className={`team-accent ${isBlue ? 'blue' : 'red'}`} /><div className="panel-heading"><div><h3>{isBlue ? t('blueTeam') : t('redTeam')}</h3><p>{state.picks.filter(Boolean).length}/5 {t('picksLocked')}</p></div><span className={`team-tag ${isBlue ? 'blue-text' : 'red-text'}`}>{isBlue ? 'YOUR SIDE' : 'OPPONENT'}</span></div><p className="phase-label">{t('pickPhase')}</p>{renderSlots('pick', state.picks)}<p className="phase-label">{t('banPhase')}</p>{renderSlots('ban', state.bans)}</section>;
}
