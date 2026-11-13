import type { DraftHero } from '../types/draft';
import { displayHeroName } from '../lib/hero';
import type { CounterRecommendation } from '../lib/counter';

interface CounterRecommendationsProps { targets: DraftHero[]; recommendations: CounterRecommendation[]; nameMode: 'global' | 'title'; onSelect: (hero: DraftHero) => void; labels: { title: string; empty: string; counter: string; local: string; live: string; }; }

export function CounterRecommendations({ targets, recommendations, nameMode, onSelect, labels }: CounterRecommendationsProps) {
  const targetNames = targets.map(hero => displayHeroName(hero, nameMode)).join(', ');
  return <section className="surface-card recommendations" aria-labelledby="counter-title"><div className="panel-heading"><div><div className="section-kicker">COUNTER READOUT / 01</div><h3 id="counter-title">{labels.title}</h3><p>{targetNames ? `${labels.counter} ${targetNames}` : labels.empty}</p></div><span className="live-tag">{labels.live}</span></div>{recommendations.length ? <div className="recommendation-list">{recommendations.map(({ hero, targets: counterTargets, score }) => <button type="button" key={hero.id} onClick={() => onSelect(hero)} className="recommendation-row"><img src={hero.image_url} alt={displayHeroName(hero, nameMode)} width="40" height="40" /><span className="recommendation-copy"><strong>{displayHeroName(hero, nameMode)}</strong><span>{labels.counter} {counterTargets.map(target => displayHeroName(target, nameMode)).join(' + ')}</span><span>{labels.local} · {hero.win_rate} win</span></span><span className="recommendation-score" aria-label={`Score ${score}`}>{hero.win_rate}</span></button>)}</div> : <div className="empty-state">{labels.empty}</div>}</section>;
}
