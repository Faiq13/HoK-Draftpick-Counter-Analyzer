import React from 'react';
import { useTranslation } from 'react-i18next';
import { getHeroes, type Hero } from '../services/heroAdapter';

const HOK_HEROES = getHeroes();
import { HOK_SYNERGIES } from '../services/metaAnalyzerData';
import { DraftState } from '../types/draft';
import { Sparkles } from 'lucide-react';
import { HeroAvatar } from './HeroAvatar';
import synergyTranslations from '../data/synergyTranslations.json';

interface TeamSynergyPanelProps {
  draftState: DraftState;
  onSelectHeroForActiveSlot?: (heroId: string) => void;
}

const ROLES: Hero['role'][] = ['Roam', 'Clash', 'Mid', 'Farm', 'Jungle'];

function getLocalizedReason(t: (key: string, options?: any) => string, heroId: string, targetId: string, type: string, fallback?: string) {
  const path = `tactical.${type}s.${heroId}.${targetId}`;
  const localized = t(path, { defaultValue: '' });
  if (localized) return localized;
  if (type === 'synergy' && fallback) {
    return (synergyTranslations as Record<string, string>)[fallback] ?? fallback;
  }
  return '';
}

export const TeamSynergyPanel: React.FC<TeamSynergyPanelProps> = ({
  draftState,
  onSelectHeroForActiveSlot,
}) => {
  const { t } = useTranslation();
  const enemyPickedIds = draftState.redTeam.filter(
    (id): id is string => id !== null
  );
  const allyPickedIds = draftState.blueTeam.filter(
    (id): id is string => id !== null
  );

  const unavailableIds = new Set(
    [
      ...draftState.blueTeam,
      ...draftState.redTeam,
      ...draftState.blueBans,
      ...draftState.redBans,
    ].filter((id): id is string => id !== null)
  );

  const heroById: Record<string, Hero> = {};
  HOK_HEROES.forEach(h => { heroById[h.id] = h; });

  const candidates: Array<{ hero: Hero; score: number; reasons: string[] }> = [];

  HOK_HEROES.forEach(hero => {
    if (unavailableIds.has(hero.id)) return;

    let score = 0;
    const reasons: string[] = [];

    for (const allyId of allyPickedIds) {
      const ally = heroById[allyId];
      if (!ally) continue;

      const synergy = HOK_SYNERGIES.find(e => String(e.heroIdA) === hero.id && String(e.heroIdB) === ally.id) ?? HOK_SYNERGIES.find(e => String(e.heroIdB) === hero.id && String(e.heroIdA) === ally.id);
      if (synergy) {
        score += 20;
        const localizedReason = getLocalizedReason(t, hero.id, ally.id, 'synergy', synergy?.synergyReason);
        if (localizedReason) {
          reasons.push(localizedReason);
        } else {
          reasons.push(synergy.synergyReason ?? t('synergyPanel.synergyLabel') + ' ' + ally.name);
        }
      }

      const allySynergy = ally.synergies.find(
        (e: any) => e.id === hero.id
      );
      if (allySynergy && !hero.synergies.some((f: any) => f.id === ally.id)) {
        score += 20;
        const localizedReason = getLocalizedReason(t, ally.id, hero.id, 'synergy', allySynergy?.reason);
        if (localizedReason) {
          reasons.push(localizedReason);
        } else {
          reasons.push(allySynergy.reason ?? t('synergyPanel.synergyLabel') + ' ' + ally.name);
        }
      }
    }

    if (reasons.length > 1) {
      score += 10 * (reasons.length - 1);
    }

    if (score > 0) {
      candidates.push({ hero, score, reasons });
    }
  });

  candidates.sort((a, b) => b.score - a.score || a.hero.name.localeCompare(b.hero.name, 'en'));

  const topByRole = ROLES.map(role => ({
    role,
    heroes: candidates
      .filter((c) => c.hero.role === role)
      .slice(0, 3),
  }));

  const renderRoleColumn = (role: Hero['role'], heroes: Array<{ hero: Hero; score: number; reasons: string[] }>) => (
    <div key={role} className="bg-slate-900/70 backdrop-blur-md border border-slate-800/60 rounded-xl p-4 flex flex-col gap-3 min-w-0 flex-1 transition-all duration-200 hover:-translate-y-0.5">
      {/* Role Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-2">
        <span className="font-bold text-sm text-[#c084fc]" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {t(`roles.${role}`)}
        </span>
        <span className="text-[9px] bg-black/60 text-white/50 px-2 py-0.5 rounded-full border border-white/10"
          style={{ fontFamily: 'Poppins, sans-serif' }}>
          {t('synergyPanel.synergyLabel')}
        </span>
      </div>

      {/* Hero List */}
      <div className="flex flex-col gap-2">
        {heroes.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-5 text-center rounded-[8px] bg-black/30 border border-dashed border-white/10">
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mb-2 text-white/30">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <p className="text-[11px] text-white/40 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {t('synergyPanel.noSpecificSynergy')}
            </p>
          </div>
        ) : (
          heroes.map((item) => (
            <div
              key={item.hero.id}
              onClick={() => onSelectHeroForActiveSlot?.(item.hero.id)}
              className="bg-slate-950/60 hover:bg-violet-500/8 border border-slate-800/60 hover:border-violet-500/40 rounded-xl p-3 flex flex-row items-start gap-3 transition-all duration-200 hover:-translate-y-0.5 shadow-sm group cursor-pointer"
            >
              {/* Avatar */}
              <div className="relative w-11 h-11 rounded-[6px] flex-shrink-0 overflow-hidden ring-1 ring-white/15 group-hover:ring-[#8000ff]/60 transition-all">
                <HeroAvatar
                  hero={item.hero}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              {/* Info */}
              <div className="flex-1 min-w-0">
                <span className="font-semibold text-xs text-white group-hover:text-white truncate block mb-1"
                  style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {item.hero.name}
                </span>
                <p className="text-[10px] text-white/60 leading-relaxed line-clamp-2"
                  title={item.reasons[0]}
                  style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {item.reasons[0]}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );

  return (
    <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800/60 rounded-2xl p-5 shadow-xl">
      {/* Panel Header */}
      <div className="flex items-center gap-2.5 mb-5 border-b border-white/10 pb-4">
        <div className="w-8 h-8 rounded-[6px] bg-[#8000ff]/15 border border-[#8000ff]/30 flex items-center justify-center flex-shrink-0">
          <Sparkles className="w-4 h-4 text-[#c084fc]" />
        </div>
        <h2 className="font-bold text-base text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {t('synergyPanel.title')}
        </h2>
      </div>

      {allyPickedIds.length === 0 ? (
        <div className="text-center py-10 text-white/40 text-sm">
          {draftState.activeSlot ? (
            <>
              <p className="font-semibold text-[#c084fc] mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {t('synergyPanel.waitingForActiveSlot', { side: draftState.activeSlot.side === 'blue' ? t('header.blueSide') : t('header.redSide') })}
              </p>
              <p style={{ fontFamily: 'Poppins, sans-serif' }}>
                {draftState.activeSlot.side === 'blue' ? t('synergyPanel.waitingForAllyPick') : t('synergyPanel.waitingForOurPick')}
              </p>
            </>
          ) : (
            <p style={{ fontFamily: 'Poppins, sans-serif' }}>{t('synergyPanel.waitingForAlly')}</p>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-3">
          {topByRole.map(({ role, heroes }) => renderRoleColumn(role, heroes))}
        </div>
      )}
    </div>
  );
};
