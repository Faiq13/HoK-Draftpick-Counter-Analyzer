import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getHeroes, type Hero } from '../services/heroAdapter';

const HOK_HEROES = getHeroes();
import { DraftState } from '../types/draft';
import { HOK_ITEM_COUNTERS } from '../data/hokItems';

interface ItemCounterPanelProps {
  draftState: DraftState;
}

export const ItemCounterPanel: React.FC<ItemCounterPanelProps> = ({
  draftState,
}) => {
  const { t, i18n } = useTranslation();
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());
  const enemyPickedIds = draftState.redTeam.filter((id): id is string => id !== null);
  const allyPickedIds = draftState.blueTeam.filter((id): id is string => id !== null);
  const allyRoles = [...new Set(allyPickedIds.map(id => HOK_HEROES.find(hero => hero.id === id)?.role).filter(Boolean))].join(', ');

  if (enemyPickedIds.length === 0) {
    return (
      <div className="bg-[#191919] border border-white/20 rounded-[11px] p-5 shadow-xl text-center py-10">
        <p className="text-white/40 italic text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {t('itemCounterPanel.subtitle').split('→')[0].trim()}
        </p>
      </div>
    );
  }

  const enemyHeroNames = enemyPickedIds
    .map(id => {
      const hero = HOK_HEROES.find(h => h.id === id);
      return hero ? hero.name : null;
    })
    .filter((h): h is string => h !== null);

  const itemPriorities = HOK_ITEM_COUNTERS.filter(item => {
    const lowerEnemies = enemyHeroNames.map(h => h.toLowerCase());

    if (item.category === 'anti-heal') {
      return lowerEnemies.some(l =>
        l.includes('cai-yan') ||
        l.includes('dyadia') ||
        l.includes('ao-yin') ||
        l.includes('yang-jian') ||
        l.includes('fuzi')
      );
    }

    if (item.category === 'anti-physical-burst') {
      return lowerEnemies.some(l =>
        l.includes('lu-bu') ||
        l.includes('butterfly') ||
        l.includes('arthur')
      );
    }

    if (item.category === 'anti-magic-burst') {
      return lowerEnemies.some(l =>
        l.includes('angela') ||
        l.includes('daji') ||
        l.includes('mai-shiranui')
      );
    }

    if (item.category === 'anti-shield') {
      return lowerEnemies.some(l =>
        l.includes('zhang-fei') || l.includes('dun')
      );
    }

    return false;
  });

  const categoryPriority: Record<string, number> = {
    'anti-heal': 1,
    'anti-magic-burst': 2,
    'anti-physical-burst': 3,
    'anti-shield': 4,
  };

  itemPriorities.sort((a, b) => {
    const aPri = categoryPriority[a.category] ?? 99;
    const bPri = categoryPriority[b.category] ?? 99;
    return aPri - bPri;
  });

  const topItems = itemPriorities.slice(0, 5);

  // Category style map
  const categoryStyle: Record<string, { badge: string; icon: string; iconBg: string }> = {
    'anti-heal':          { badge: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/40', icon: '💊', iconBg: 'bg-emerald-600/80' },
    'anti-physical-burst':{ badge: 'bg-blue-500/15 text-blue-400 border-blue-500/40',          icon: '🗡️', iconBg: 'bg-blue-600/80' },
    'anti-magic-burst':   { badge: 'bg-purple-500/15 text-purple-400 border-purple-500/40',    icon: '🔮', iconBg: 'bg-purple-600/80' },
    'anti-shield':        { badge: 'bg-amber-500/15 text-amber-400 border-amber-500/40',        icon: '🛡️', iconBg: 'bg-amber-600/80' },
  };

  return (
    <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800/60 rounded-2xl p-5 shadow-xl">
      {/* Header */}
      <div className="flex items-center gap-2.5 mb-5 border-b border-white/10 pb-4">
        <div className="w-8 h-8 rounded-[6px] bg-amber-500/15 border border-amber-500/30 flex items-center justify-center flex-shrink-0 text-sm">
          ⚔️
        </div>
        <div>
          <h2 className="font-bold text-base text-white leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {t('itemCounterPanel.title')}
          </h2>
          <p className="text-[10px] text-white/40 mt-0.5" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {t('itemCounterPanel.subtitle')}
          </p>
        </div>
      </div>

      {topItems.length === 0 ? (
        <div className="text-center text-white/40 italic py-6 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {t('itemCounterPanel.noSpecificItemCounter')}
        </div>
      ) : (
        <div className="space-y-2.5">
          {topItems.map((item, idx) => {
            const descKey = item.descriptionKey;
            const desc = t(`items.${descKey}`, { defaultValue: '' });

            const style = categoryStyle[item.category] ?? categoryStyle['anti-shield'];

            const initials = item.name
              .split(' ')
              .map(w => w[0])
              .join('')
              .toUpperCase()
              .slice(0, 2);

            return (
              <div
                key={item.id}
                className="bg-slate-950/60 border border-slate-800/60 hover:border-slate-700 rounded-xl p-3.5 flex items-start gap-3.5 transition-all duration-200 hover:-translate-y-0.5 group"
              >
                {/* Item Icon */}
                <div className={`w-12 h-12 rounded-xl flex-shrink-0 overflow-hidden flex items-center justify-center font-bold text-sm text-white ${style.iconBg} border border-white/15`}>
                  {!failedImages.has(item.id) ? (
                    <img
                      src={`https://hub-game.com/hok/images/items/${item.id}.webp`}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={() => setFailedImages(prev => new Set(prev).add(item.id))}
                    />
                  ) : (
                    <span aria-label={item.name}>{initials}</span>
                  )}
                </div>

                {/* Item Info */}
                <div className="flex-1 min-w-0">
                  {/* Row 1: Name + Badge */}
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="font-semibold text-sm text-white leading-tight truncate"
                      style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {item.name}
                    </span>
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[8px] font-bold border flex-shrink-0 ${style.badge}`}
                      style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {t(`itemCounterPanel.categories.${item.category}`)}
                    </span>
                  </div>

                  {/* Row 2: Tactical description — why this item counters the enemy comp */}
                  <p className="text-[11px] text-white/55 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {desc || `${item.triggerConditions?.[0] ?? 'Efek khusus'} melawan ${item.targetHeroes?.slice(0, 3).join(', ') ?? 'komposisi musuh'}.`}<span className="mt-1 block text-[10px] text-cyan-200/70">Role cocok: {allyRoles || 'sesuaikan dengan komposisi tim'}</span>
                  </p>

                  {/* Priority indicator */}
                  <p className="text-[9px] text-white/30 mt-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {t('itemCounterPanel.priority', { index: idx + 1 })}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
