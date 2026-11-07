import type { DraftHero, DraftSlot } from '../types/draft';

interface DraftSlotProps {
  slot: DraftSlot;
  hero: DraftHero | null;
  onOpen: (slot: DraftSlot) => void;
}

export function DraftSlot({ slot, hero, onOpen }: DraftSlotProps) {
  return (
    <button type="button" onClick={() => onOpen(slot)} className={`group flex min-h-14 w-full items-center gap-3 rounded-xl border px-3 py-2 text-left transition ${hero ? 'border-white/10 bg-white/[0.05]' : 'border-dashed border-slate-600 bg-white/[0.02] hover:border-cyan-300 hover:bg-cyan-300/[0.05]'}`}>
      {hero ? <img src={hero.image_url} alt={hero.english_hero_name} className={`${slot.phase === 'ban' ? 'h-8 w-8' : 'h-10 w-10'} rounded-lg object-cover`} /> : <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/[0.06] text-lg text-slate-500 group-hover:text-cyan-300">+</span>}
      <span className="min-w-0 flex-1">
        {hero ? <><strong className="block truncate text-xs text-slate-100">{hero.english_hero_name}</strong><span className="block truncate text-[10px] text-slate-500">{hero.roles || 'Role unavailable'}</span></> : <span className="text-xs text-slate-500">Add {slot.phase === 'pick' ? 'hero' : 'ban'}</span>}
      </span>
      <span className="text-[10px] text-slate-600">{hero ? 'Change' : `${slot.index + 1}`}</span>
    </button>
  );
}
