import { useTranslation } from 'react-i18next';
import type { DraftHero, DraftSlot } from '../types/draft';

interface DraftSlotProps {
  slot: DraftSlot;
  hero: DraftHero | null;
  onOpen: (slot: DraftSlot) => void;
  onRemove: (slot: DraftSlot) => void;
  displayName: string;
}

export function DraftSlot({ slot, hero, onOpen, onRemove, displayName }: DraftSlotProps) {
  const { t } = useTranslation();
  return (
    <div className={`gw-panel group flex min-h-14 w-full items-center gap-3 rounded-xl border px-3 py-2 transition ${hero ? 'border-white/10 bg-white/[0.05]' : 'border-dashed border-slate-600 bg-white/[0.02] hover:border-cyan-300 hover:bg-cyan-300/[0.05]'}`}>
      <button type="button" onClick={() => onOpen(slot)} className="flex min-w-0 flex-1 items-center gap-3 text-left" aria-label={hero ? `${displayName} ${t('change')}` : `${slot.phase === 'pick' ? t('addHero') : t('addBan')} ${slot.index + 1}`}>
        {hero ? <img src={hero.image_url} alt={displayName} className={`${slot.phase === 'ban' ? 'h-8 w-8' : 'h-10 w-10'} rounded-lg object-cover`} /> : <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/[0.06] text-lg text-slate-500 group-hover:text-cyan-300">+</span>}
        <span className="min-w-0 flex-1">
          {hero ? <><strong className="block truncate text-xs text-slate-100">{displayName}</strong><span className="block truncate text-[10px] text-slate-500">{hero.roles ? (Array.isArray(hero.roles) ? hero.roles : hero.roles.split(',')).map(role => t(`roles.${role.trim()}`, { defaultValue: role.trim() })).join(', ') : t('roleUnavailable')}</span></> : <span className="text-xs text-slate-500">{slot.phase === 'pick' ? t('addHero') : t('addBan')}</span>}
        </span>
      </button>
      {hero ? <button type="button" onClick={() => onRemove(slot)} aria-label={`${t('remove')} ${displayName}`} className="grid h-8 w-8 shrink-0 place-items-center rounded-lg text-lg text-slate-500 hover:bg-rose-400/10 hover:text-rose-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-rose-300">×</button> : <span className="w-8 text-center text-[10px] text-slate-600">{slot.index + 1}</span>}
    </div>
  );
}
