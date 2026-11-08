import type { DraftHero, DraftSlot, DraftTeam, DraftTeamState } from '../types/draft';
import { DraftSlot as DraftSlotButton } from './DraftSlot';

interface TeamDraftPanelProps {
  team: DraftTeam;
  state: DraftTeamState;
  onOpenSlot: (slot: DraftSlot) => void;
}

export function TeamDraftPanel({ team, state, onOpenSlot }: TeamDraftPanelProps) {
  const isBlue = team === 'blue';
  const renderSlots = (phase: 'pick' | 'ban', heroes: Array<DraftHero | null>) => (
    <div className="grid gap-2 px-3 pb-4">
      {heroes.map((hero, index) => <DraftSlotButton key={`${phase}-${index}`} slot={{ id: `${team}-${phase}-${index}`, team, phase, side: team, type: phase, index }} hero={hero} onOpen={onOpenSlot} />)}
    </div>
  );

  return <section className="glass-card overflow-hidden rounded-2xl">
    <div className={`flex items-center justify-between border-t-2 px-4 py-4 ${isBlue ? 'border-sky-400' : 'border-rose-400'}`}>
      <div><h2 className="m-0 text-sm font-black text-white">{isBlue ? 'Blue Team' : 'Red Team'}</h2><p className="mt-1 text-[11px] text-slate-500">{state.picks.filter(Boolean).length}/5 picks locked</p></div>
      <span className={`h-2.5 w-2.5 rounded-full ${isBlue ? 'bg-sky-400' : 'bg-rose-400'}`} aria-hidden="true" />
    </div>
    <p className="px-4 pb-2 pt-1 text-[10px] font-black uppercase tracking-[0.16em] text-slate-600">Pick phase</p>
    {renderSlots('pick', state.picks)}
    <p className="border-t border-white/[0.06] px-4 pb-2 pt-4 text-[10px] font-black uppercase tracking-[0.16em] text-slate-600">Ban phase</p>
    {renderSlots('ban', state.bans)}
  </section>;
}
