import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import type { DraftHero } from '../types/draft';
import { displayHeroName } from '../lib/hero';
import type { CounterRecommendation, StructuredCounterReason } from '../lib/counter';

interface CounterRecommendationsProps {
  targets: DraftHero[];
  recommendations: CounterRecommendation[];
  nameMode: 'global' | 'title';
  onSelect: (hero: DraftHero) => void;
  labels: {
    title: string;
    empty: string;
    counter: string;
    local: string;
    live: string;
  };
}

function resolveReason(reason: string, t: ReturnType<typeof import('react-i18next').useTranslation>['t']): string {
  if (reason.startsWith('__LIVE_META__:')) {
    const [_, candidate, enemy] = reason.split(':');
    return t('liveMetaCounter', { candidate, enemy });
  }
  if (reason.startsWith('__FALLBACK__:')) {
    const [_, candidate, enemy] = reason.split(':');
    return t('fallbackCounter', { candidate, enemy });
  }
  if (reason.startsWith('__VERIFIED__:')) {
    const [_, counter, target] = reason.split(':');
    return t('verifiedMatchup', { counter, target });
  }
  return reason;
}

export function CounterRecommendations({
  targets,
  recommendations,
  nameMode,
  onSelect,
  labels,
}: CounterRecommendationsProps) {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  
  useEffect(() => {
    const handleLanguageChange = (lng: string) => setLanguage(lng);
    i18n.on('languageChanged', handleLanguageChange);
    return () => i18n.off('languageChanged', handleLanguageChange);
  }, [i18n]);
  
  const isId = language === 'id';
  const targetNames = targets.map(hero => displayHeroName(hero, nameMode)).join(', ');

  return (
    <section className="surface-card recommendations" aria-labelledby="counter-title">
      <div className="panel-heading">
        <div>
          <div className="section-kicker">{t('counterKicker')}</div>
          <h3 id="counter-title">{labels.title}</h3>
          <p>{targetNames ? `${labels.counter} ${targetNames}` : labels.empty}</p>
        </div>
        <span className="live-tag">{labels.live}</span>
      </div>

      {recommendations.length ? (
        <div className="recommendation-list">
          {recommendations.map(rec => {
            const { hero, score, structuredReasons, laneFit, roleFit, metaTier, unpickedLane, unpickedRole } = rec;
            const heroName = displayHeroName(hero, nameMode);

            return (
              <button
                type="button"
                key={hero.id}
                onClick={() => onSelect(hero)}
                className="recommendation-row"
                aria-label={`${heroName}, counter score ${score}`}
              >
                <img
                  src={hero.image_url}
                  alt={heroName}
                  width="44"
                  height="44"
                  loading="lazy"
                />

                <div className="recommendation-copy">
                  <div className="recommendation-header">
                    <strong>{heroName}</strong>
                    <div className="badge-group">
                      {laneFit && (
                        <span className="rec-badge badge-lane" title={unpickedLane || t('laneFit')}>
                          {unpickedLane ? unpickedLane.replace(/\s*lane$/i, '') : t('laneFit')}
                        </span>
                      )}
                      {roleFit && (
                        <span className="rec-badge badge-role" title={unpickedRole || t('roleFit')}>
                          {unpickedRole || t('roleFit')}
                        </span>
                      )}
                      <span className="rec-badge badge-tier">{metaTier} {t('tier')}</span>
                    </div>
                  </div>

                  {structuredReasons && structuredReasons.length > 0 ? (
                    <div className="rec-reasons-list">
                      {structuredReasons.map(sr => {
                        const targetHero = sr.targetHero ?? rec.targets.find(t => t.id === sr.targetHeroId) ?? targets.find(t => t.id === sr.targetHeroId);
                        const targetName = targetHero ? displayHeroName(targetHero, nameMode) : sr.targetHeroName;
                        const reason = isId && sr.reason_id ? sr.reason_id : sr.reason;
                        const displayReason = resolveReason(reason, t);

                        return (
                          <div key={sr.targetHeroId} className="rec-reason-row">
                            <span className="rec-target-name">vs {targetName}</span>
                            <span className="rec-reason-text">{displayReason}</span>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <span className="rec-reason-fallback">
                      {labels.counter} {rec.targets.map(target => displayHeroName(target, nameMode)).join(' + ')}
                    </span>
                  )}
                </div>

                <div className="recommendation-score">
                  <span className="score-val" aria-label={`Score ${score}`}>+{score}</span>
                  <span className="win-rate">{hero.win_rate}</span>
                </div>
              </button>
            );
          })}
        </div>
      ) : (
        <div className="empty-state">{labels.empty}</div>
      )}
    </section>
  );
}
