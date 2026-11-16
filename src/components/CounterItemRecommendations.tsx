import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import type { DraftHero, SearchItem } from '../types/draft';
import { displayHeroName, type HeroNameMode } from '../lib/hero';
import { evaluateCounterItems, getItemIconUrl, ITEM_FALLBACK_SVG } from '../lib/counterItems';

interface CounterItemRecommendationsProps {
  enemyPicks: Array<DraftHero | null>;
  items: SearchItem[];
  nameMode: HeroNameMode;
}

export function CounterItemRecommendations({
  enemyPicks,
  items,
  nameMode,
}: CounterItemRecommendationsProps) {
  const { t } = useTranslation();

  const recommendations = useMemo(() => {
    return evaluateCounterItems(items, enemyPicks);
  }, [items, enemyPicks]);

  return (
    <section className="surface-card counter-items-panel" aria-labelledby="counter-items-heading">
      <div className="panel-heading">
        <div>
          <div className="section-kicker">{t('counterItemsKicker')}</div>
          <h3 id="counter-items-heading">{t('counterItemsTitle')}</h3>
          <p>{t('counterItemsSubtitle')}</p>
        </div>
        <span className="live-tag">{t('itemAdvice')}</span>
      </div>

      {recommendations.length > 0 ? (
        <div className="counter-items-grid" role="list" aria-label={t('counterItemsTitle')}>
          {recommendations.map(rec => {
            const { item, priority, categoryKey, defaultCategory, reasonKey, defaultReason, triggerHeroes } = rec;
            const tierLabel = item.tier || 'Tier 3';

            return (
              <div key={item.id} role="listitem" className="counter-item-card">
                <img
                  src={getItemIconUrl(item.icon)}
                  alt={item.name}
                  width="42"
                  height="42"
                  loading="lazy"
                  onError={event => {
                    event.currentTarget.onerror = null;
                    event.currentTarget.src = ITEM_FALLBACK_SVG;
                  }}
                  className="counter-item-icon"
                />

                <div className="counter-item-body">
                  <div className="counter-item-head">
                    <strong>{item.name}</strong>
                    <div className="badge-group">
                      <span className="rec-badge badge-role">
                        {t(categoryKey, defaultCategory)}
                      </span>
                      <span className="rec-badge badge-tier">
                        {tierLabel}
                      </span>
                      <span
                        className={`rec-badge ${
                          priority === 'high' ? 'badge-priority-high' : 'badge-priority-med'
                        }`}
                      >
                        {priority === 'high' ? t('priorityHigh') : t('priorityMedium')}
                      </span>
                    </div>
                  </div>

                  <span className="rec-reason-text">
                    {t(reasonKey, defaultReason)}
                  </span>

                  <div className="counter-item-triggers">
                    <span className="rec-target-name">{t('triggeredBy')}:</span>
                    {triggerHeroes.map(hero => (
                      <span key={hero.id} className="trigger-hero-tag">
                        <img
                          src={hero.image_url}
                          alt=""
                          width="14"
                          height="14"
                          loading="lazy"
                          className="rounded-sm object-cover"
                        />
                        <span>{displayHeroName(hero, nameMode)}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="empty-state">{t('noCounterItems')}</div>
      )}
    </section>
  );
}
