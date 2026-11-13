import { useTranslation } from 'react-i18next';
import type { DraftHero, DraftSlot } from '../types/draft';

interface DraftSlotProps { slot: DraftSlot; hero: DraftHero | null; onOpen: (slot: DraftSlot) => void; onRemove: (slot: DraftSlot) => void; displayName: string; }

export function DraftSlot({ slot, hero, onOpen, onRemove, displayName }: DraftSlotProps) {
  const { t } = useTranslation();
  const roles = hero ? (Array.isArray(hero.roles) ? hero.roles : (hero.roles ?? '').split(',')).map(role => t(`roles.${role.trim()}`, { defaultValue: role.trim() })).join(', ') : '';
  return <div className={`draft-slot ${hero ? 'has-hero' : 'is-empty'}`}>
    <button type="button" onClick={() => onOpen(slot)} className="slot-open" aria-label={hero ? `${displayName} ${t('change')}` : `${slot.phase === 'pick' ? t('addHero') : t('addBan')} ${slot.index + 1}`}>
      {hero ? <img src={hero.image_url} alt={displayName} width="38" height="38" /> : <span className="slot-placeholder" aria-hidden="true">+</span>}
      <span className="slot-copy">{hero ? <><strong>{displayName}</strong><span>{roles || t('roleUnavailable')}</span></> : <span>{slot.phase === 'pick' ? t('addHero') : t('addBan')}</span>}</span>
    </button>
    {hero ? <button type="button" onClick={() => onRemove(slot)} aria-label={`${t('remove')} ${displayName}`} className="slot-remove">×</button> : <span className="slot-number">{String(slot.index + 1).padStart(2, '0')}</span>}
  </div>;
}
