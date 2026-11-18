import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import type { DraftHero } from '../types/draft';
import {
  evaluateTeamSynergy,
  ALL_STANDARD_LANES,
  type StandardLane,
  type TeamSynergyReport,
} from '../lib/synergy';

interface TeamSynergyPanelProps {
  bluePicks: Array<DraftHero | null>;
  redPicks: Array<DraftHero | null>;
}

export function TeamSynergyPanel({ bluePicks, redPicks }: TeamSynergyPanelProps) {
  const { t } = useTranslation();

  const blueReport = useMemo(() => evaluateTeamSynergy(bluePicks), [bluePicks]);
  const redReport = useMemo(() => evaluateTeamSynergy(redPicks), [redPicks]);

  const renderTeamEvaluation = (side: 'blue' | 'red', report: TeamSynergyReport) => {
    const isBlue = side === 'blue';
    const teamName = isBlue ? t('blueTeam') : t('redTeam');
    const sideTag = isBlue ? t('yourSide') : t('opponent');
    const { laneCoverage, damageSplit, tags, teamSize } = report;

    return (
      <div className={`synergy-team-box ${isBlue ? 'is-blue' : 'is-red'}`}>
        <div className="synergy-team-header">
          <div className="synergy-team-title">
            <span className={`synergy-team-dot ${isBlue ? 'bg-blue' : 'bg-red'}`} aria-hidden="true" />
            <strong>{teamName}</strong>
            <span className={`synergy-side-tag ${isBlue ? 'blue-text' : 'red-text'}`}>{sideTag}</span>
          </div>
          <span className="synergy-lock-count">{teamSize}/5 {t('picksLocked')}</span>
        </div>

        {/* Metric A: Lane Coverage */}
        <div className="synergy-section">
          <div className="synergy-section-head">
            <span className="synergy-label">{t('laneCoverage')}</span>
            <span className="synergy-sublabel">
              {laneCoverage.covered.length === 5
                ? t('allLanesCovered')
                : `${laneCoverage.covered.length}/5 ${t('covered')}`}
            </span>
          </div>

          <div className="synergy-lanes-row" role="group" aria-label={`${teamName} ${t('laneCoverage')}`}>
            {ALL_STANDARD_LANES.map(lane => {
              const isCovered = laneCoverage.covered.includes(lane);
              const duplicate = laneCoverage.duplicates.find(d => d.lane === lane);
              const laneKey = `lane${lane}`;
              const localizedLane = t(laneKey, lane);

              let badgeClass = 'lane-pill';
              if (duplicate) badgeClass += ' is-duplicate';
              else if (isCovered) badgeClass += ' is-covered';
              else badgeClass += ' is-missing';

              return (
                <span
                  key={lane}
                  className={badgeClass}
                  title={
                    duplicate
                      ? `${localizedLane} (${t('duplicate')} x${duplicate.count})`
                      : isCovered
                      ? `${localizedLane} (${t('covered')})`
                      : `${localizedLane} (${t('missing')})`
                  }
                >
                  {localizedLane}
                  {duplicate ? ` x${duplicate.count}` : ''}
                </span>
              );
            })}
          </div>

          {laneCoverage.duplicates.length > 0 && (
            <div className="synergy-warning-text" role="alert">
              ⚠ {t('tagDuplicateLanes')}: {laneCoverage.duplicates.map(d => `${t(`lane${d.lane}`, d.lane)} (x${d.count})`).join(', ')}
            </div>
          )}
        </div>

        {/* Metric B: Damage Split */}
        <div className="synergy-section">
          <div className="synergy-section-head">
            <span className="synergy-label">{t('damageSplit')}</span>
            <span className="synergy-sublabel">
              {teamSize === 0 ? `0% ${t('physical')} / 0% ${t('magic')}` : `${damageSplit.physicalPercent}% ${t('physical')} / ${damageSplit.magicPercent}% ${t('magic')}`}
            </span>
          </div>

          <div
            className="damage-split-track"
            role="progressbar"
            aria-valuenow={damageSplit.physicalPercent}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`${teamName} ${t('damageSplit')}`}
          >
            <div
              className="damage-bar-phys"
              style={{ width: teamSize === 0 ? '0%' : `${damageSplit.physicalPercent}%` }}
              title={`${t('physical')}: ${teamSize === 0 ? 0 : damageSplit.physicalPercent}%`}
            />
            <div
              className="damage-bar-magic"
              style={{ width: teamSize === 0 ? '0%' : `${damageSplit.magicPercent}%` }}
              title={`${t('magic')}: ${teamSize === 0 ? 0 : damageSplit.magicPercent}%`}
            />
          </div>

          <div className="damage-split-legend">
            <span className="legend-phys">⚔ {t('physical')} {teamSize === 0 ? 0 : damageSplit.physicalPercent}%</span>
            <span className="legend-magic">✦ {t('magic')} {teamSize === 0 ? 0 : damageSplit.magicPercent}%</span>
          </div>

          {damageSplit.vulnerabilityWarning && teamSize > 0 && (
            <div className="synergy-warning-text" role="alert">
              ⚠ {damageSplit.vulnerabilityWarning === 'skewed_physical'
                ? t('tagSkewedPhysical')
                : t('tagSkewedMagic')}
            </div>
          )}
        </div>

        {/* Metric C: Composition Tags */}
        <div className="synergy-section">
          <div className="synergy-section-head">
            <span className="synergy-label">{t('compositionTags')}</span>
          </div>

          <div className="composition-tags-wrap">
            {tags.length > 0 ? (
              tags
                .filter(tag => !(tag.id === 'duplicate_lanes' && laneCoverage.duplicates.length > 0))
                .map(tag => {
                  let detailText = '';
                  if (tag.duplicates && tag.duplicates.length > 0) {
                    detailText = ` (${tag.duplicates.map(d => `${t(`lane${d.lane}`, d.lane)} x${d.count}`).join(', ')})`;
                  } else if (tag.detail) {
                    detailText = ` (${tag.detail})`;
                  }

                  return (
                    <span key={tag.id} className={`comp-tag tag-${tag.type}`}>
                      {tag.type === 'warning' ? '⚠ ' : '✦ '}
                      {t(tag.labelKey, tag.defaultLabel)}
                      {detailText}
                    </span>
                  );
                })
            ) : (
              <span className="synergy-sublabel">
                {teamSize === 0 ? t('noPicksYet') : t('balancedDamage')}
              </span>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="surface-card synergy-panel" aria-labelledby="synergy-heading">
      <div className="panel-heading">
        <div>
          <div className="section-kicker">{t('synergyKicker')}</div>
          <h3 id="synergy-heading">{t('teamSynergyTitle')}</h3>
          <p>{t('synergySubtitle')}</p>
        </div>
        <span className="live-tag">{t('liveEval')}</span>
      </div>

      <div className="synergy-grid">
        {renderTeamEvaluation('blue', blueReport)}
        {renderTeamEvaluation('red', redReport)}
      </div>
    </section>
  );
}
