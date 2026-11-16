import matchupRows from '../data/counters.json';
import { HOKSTATS_COUNTERS } from '../data/hokStatsCounters';
import type { DraftHero } from '../types/draft';
import { titleHeroName } from './hero';

interface LocalMatchupRow {
  heroId?: number;
  heroName: string;
  counteredById?: number;
  counteredByName: string;
  weight: number;
  reason: string;
  reason_id?: string;
}

export interface CounterEvidence {
  target: DraftHero;
  weight: number;
  reason: string;
  reason_id?: string;
}

export interface StructuredCounterReason {
  targetHero?: DraftHero;
  targetHeroId: number;
  targetHeroName: string;
  weight: number;
  reason: string;
  reason_id?: string;
  allReasons: string[];
  allReasons_id?: string[];
}

export interface CounterRecommendation {
  hero: DraftHero;
  targets: DraftHero[];
  evidence: CounterEvidence[];
  score: number;
  reason: 'local' | 'hybrid' | 'meta';
  reasons: string[];
  reasons_id?: string[];
  structuredReasons: StructuredCounterReason[];
  roleFit: boolean;
  laneFit: boolean;
  unpickedRole: string | null;
  unpickedLane: string | null;
  metaTier: string;
}

export interface CounterRecommendationOptions {
  bluePicks?: Array<DraftHero | null>;
  limit?: number;
  usedIds?: Set<number>;
}

const NAME_ALIASES: Record<string, string> = {
  "shangguan wan'er": 'shangguan',
  'umbreosa': 'umbrosa',
  'zhao yun': 'zilong',
  'dajì': 'daji',
};

const normalize = (value: string) => (value || '').trim().toLowerCase();
const canonical = (value: string) => {
  const norm = normalize(value);
  return NAME_ALIASES[norm] ?? norm;
};

const heroDisplayName = (hero: DraftHero) => hero.chinese_hero_name || hero.english_hero_name;

const rolesOf = (hero: DraftHero): string[] => {
  if (Array.isArray(hero.roles)) return hero.roles.map(r => r.trim()).filter(Boolean);
  return String(hero.roles || '').split(',').map(v => v.trim()).filter(Boolean);
};

const localData = matchupRows as LocalMatchupRow[];

// Build lookup map for local counters: candidateHero -> targetHero -> rows
const counterMap = new Map<string, Map<string, LocalMatchupRow[]>>();
for (const row of localData) {
  const cKey = canonical(row.counteredByName);
  const tKey = canonical(row.heroName);
  let targetMap = counterMap.get(cKey);
  if (!targetMap) {
    targetMap = new Map<string, LocalMatchupRow[]>();
    counterMap.set(cKey, targetMap);
  }
  const rows = targetMap.get(tKey) ?? [];
  rows.push(row);
  targetMap.set(tKey, rows);
}

// Build lookup map for HokStats meta counters
const metaMap = new Map<string, { tier: string; role: string; counters: Set<string>; counteredBy: Set<string> }>();
for (const entry of HOKSTATS_COUNTERS) {
  metaMap.set(canonical(entry.name), {
    tier: entry.tier,
    role: entry.role,
    counters: new Set((entry.counters || []).map(canonical)),
    counteredBy: new Set((entry.counteredBy || []).map(canonical)),
  });
}

function resolveOptions(
  usedIdsOrOptions?: Set<number> | CounterRecommendationOptions,
  limitArg = 6,
  bluePicksArg?: Array<DraftHero | null>
): { limit: number; usedIds: Set<number>; bluePicks: DraftHero[] } {
  let limit = limitArg;
  let usedIds = new Set<number>();
  let bluePicks: DraftHero[] = [];

  if (usedIdsOrOptions instanceof Set) {
    usedIds = usedIdsOrOptions;
    if (Array.isArray(bluePicksArg)) {
      bluePicks = bluePicksArg.filter(Boolean) as DraftHero[];
    }
  } else if (usedIdsOrOptions && typeof usedIdsOrOptions === 'object') {
    if (usedIdsOrOptions.limit !== undefined) limit = usedIdsOrOptions.limit;
    if (usedIdsOrOptions.usedIds) usedIds = usedIdsOrOptions.usedIds;
    if (Array.isArray(usedIdsOrOptions.bluePicks)) {
      bluePicks = usedIdsOrOptions.bluePicks.filter(Boolean) as DraftHero[];
    }
  } else if (Array.isArray(bluePicksArg)) {
    bluePicks = bluePicksArg.filter(Boolean) as DraftHero[];
  }

  return { limit, usedIds, bluePicks };
}

export function buildCounterRecommendations(
  heroes: DraftHero[],
  enemyPicksInput: DraftHero[],
  usedIdsOrOptions?: Set<number> | CounterRecommendationOptions,
  limitArg = 6,
  bluePicksArg?: Array<DraftHero | null>
): CounterRecommendation[] {
  const enemyPicks = (enemyPicksInput || []).filter(Boolean);
  if (!enemyPicks.length) return [];

  const { limit, usedIds, bluePicks } = resolveOptions(usedIdsOrOptions, limitArg, bluePicksArg);

  // Build strict exclusion set of hero IDs and names
  const excludedIds = new Set<number>(usedIds);
  const excludedNames = new Set<string>();

  for (const enemy of enemyPicks) {
    if (enemy?.id != null) excludedIds.add(enemy.id);
    if (enemy?.chinese_hero_name) excludedNames.add(canonical(enemy.chinese_hero_name));
    if (enemy?.english_hero_name) excludedNames.add(canonical(enemy.english_hero_name));
  }

  for (const blue of bluePicks) {
    if (blue?.id != null) excludedIds.add(blue.id);
    if (blue?.chinese_hero_name) excludedNames.add(canonical(blue.chinese_hero_name));
    if (blue?.english_hero_name) excludedNames.add(canonical(blue.english_hero_name));
  }

  // Identify covered lanes and roles on Blue Team
  const blueLanes = new Set(bluePicks.map(h => normalize(h.recommended_lane)).filter(Boolean));
  const blueRoles = new Set(bluePicks.flatMap(h => rolesOf(h).map(normalize)).filter(Boolean));
  const isBlueTeamIncomplete = bluePicks.length < 5;

  const available = heroes.filter(hero => {
    if (!hero || hero.id == null) return false;
    if (excludedIds.has(hero.id)) return false;
    if (hero.chinese_hero_name && excludedNames.has(canonical(hero.chinese_hero_name))) return false;
    if (hero.english_hero_name && excludedNames.has(canonical(hero.english_hero_name))) return false;
    return true;
  });

  const candidates: CounterRecommendation[] = [];

  for (const candidate of available) {
    const candidateCn = canonical(candidate.chinese_hero_name);
    const candidateEn = canonical(candidate.english_hero_name);
    const candidateTargetMap = counterMap.get(candidateCn) ?? counterMap.get(candidateEn);
    const candidateMeta = metaMap.get(candidateCn) ?? metaMap.get(candidateEn);

    const targetMatchups: Array<{
      target: DraftHero;
      weight: number;
      bestReason: string;
      bestReason_id?: string;
      allReasons: string[];
      allReasons_id?: string[];
      isLocal: boolean;
      isMeta: boolean;
    }> = [];

    for (const enemy of enemyPicks) {
      const enemyCn = canonical(enemy.chinese_hero_name);
      const enemyEn = canonical(enemy.english_hero_name);

      const localRows = candidateTargetMap?.get(enemyCn) ?? candidateTargetMap?.get(enemyEn) ?? [];
      const enemyMeta = metaMap.get(enemyCn) ?? metaMap.get(enemyEn);

      const isMetaCounter = Boolean(
        (candidateMeta && (candidateMeta.counters.has(enemyCn) || candidateMeta.counters.has(enemyEn))) ||
        (enemyMeta && (enemyMeta.counteredBy.has(candidateCn) || enemyMeta.counteredBy.has(candidateEn)))
      );

      if (localRows.length === 0 && !isMetaCounter) continue;

      let weight = 3.0;
      let isLocal = false;
      let isMeta = false;
      const rawReasons: string[] = [];
      const rawReasons_id: string[] = [];

      if (localRows.length > 0) {
        isLocal = true;
        const maxLocalWeight = Math.max(...localRows.map(r => Number(r.weight) || 3));
        weight = maxLocalWeight;
        if (isMetaCounter) {
          weight = Math.min(5.0, weight + 0.5);
          isMeta = true;
        }
        for (const row of localRows) {
          if (row.reason && row.reason.trim()) {
            rawReasons.push(row.reason.trim());
            if (row.reason_id && row.reason_id.trim()) {
              rawReasons_id.push(row.reason_id.trim());
            }
          }
        }
      } else if (isMetaCounter) {
        isMeta = true;
        weight = 3.5;
        // Use a key for i18n translation in the component
        rawReasons.push(`__LIVE_META__:${heroDisplayName(candidate)}|${heroDisplayName(enemy)}`);
        rawReasons_id.push(`__LIVE_META__:${heroDisplayName(candidate)}|${heroDisplayName(enemy)}`);
      }

      // Deduplicate reasons
      const uniqueReasons = [...new Set(rawReasons)];
      const uniqueReasons_id = [...new Set(rawReasons_id)];
      // Prefer specific mechanical explanations over generic "Verified matchup..." strings
      const genericPattern = /verified matchup/i;
      uniqueReasons.sort((a, b) => {
        const aGeneric = genericPattern.test(a);
        const bGeneric = genericPattern.test(b);
        if (aGeneric && !bGeneric) return 1;
        if (!aGeneric && bGeneric) return -1;
        return 0;
      });

      const bestReason = uniqueReasons[0] || `${heroDisplayName(candidate)} counters ${heroDisplayName(enemy)}.`;
      const bestReason_id = uniqueReasons_id[0] || `__FALLBACK__:${heroDisplayName(candidate)}|${heroDisplayName(enemy)}`;

      targetMatchups.push({
        target: enemy,
        weight,
        bestReason,
        bestReason_id,
        allReasons: uniqueReasons.length ? uniqueReasons : [bestReason],
        allReasons_id: uniqueReasons_id.length ? uniqueReasons_id : [bestReason_id],
        isLocal,
        isMeta,
      });
    }

    if (!targetMatchups.length) continue;

    // Sort target matchups by weight descending
    targetMatchups.sort((a, b) => b.weight - a.weight);

    // Multi-target normalized matchup score (diminishing returns multiplier per additional target)
    const weights = targetMatchups.map(m => m.weight);
    const multipliers = [1.0, 0.60, 0.40, 0.25, 0.25];
    const effectiveSum = weights.reduce((sum, w, idx) => sum + w * (multipliers[idx] ?? 0.25), 0);
    const S_matchup = effectiveSum * 10.0;

    // Meta / Tier score
    const metaTier = candidateMeta?.tier || (typeof candidate.popularity === 'string' && candidate.popularity.length === 1 ? candidate.popularity : candidate.tier || 'B');
    const tierPointsMap: Record<string, number> = { S: 14, A: 9, B: 4, C: 0 };
    const tierPoints = tierPointsMap[metaTier.toUpperCase()] ?? 4;

    const winRateNum = Number.parseFloat(String(candidate.win_rate || '').replace(/[^\d.-]/g, '')) || 50.0;
    const winRateDelta = Math.max(-2.5, Math.min(2.5, (winRateNum - 50.0) * 0.4));
    const S_meta = tierPoints + winRateDelta;

    // Blue Team open lane / role synergy
    const candidateLaneNorm = normalize(candidate.recommended_lane);
    const candidateRolesNorm = rolesOf(candidate).map(normalize);

    const laneFit = Boolean(isBlueTeamIncomplete && candidateLaneNorm && !blueLanes.has(candidateLaneNorm));
    const unpickedRoleList = candidateRolesNorm.filter(r => !blueRoles.has(r));
    const roleFit = Boolean(isBlueTeamIncomplete && unpickedRoleList.length > 0);

    const allLanesFilled = blueLanes.size >= 5;
    const laneConflict = !allLanesFilled && Boolean(candidateLaneNorm && blueLanes.has(candidateLaneNorm));
    const laneBoost = laneFit ? 6.0 : (laneConflict ? -5.0 : 0.0);
    const roleBoost = roleFit ? 3.0 : 0.0;
    const S_role = laneBoost + roleBoost;

    const rawScore = S_matchup + S_meta + S_role;
    const score = Math.round(rawScore * 10) / 10;

    const allLocal = targetMatchups.every(m => m.isLocal);
    const allMeta = targetMatchups.every(m => m.isMeta && !m.isLocal);
    const reasonType: 'local' | 'hybrid' | 'meta' = allLocal ? 'local' : allMeta ? 'meta' : 'hybrid';

    const uniqueTargets = [...new Map(targetMatchups.map(m => [m.target.id, m.target])).values()];

    const evidence: CounterEvidence[] = targetMatchups.map(m => ({
      target: m.target,
      weight: m.weight,
      reason: m.bestReason,
      reason_id: m.bestReason_id,
    }));

    const structuredReasons: StructuredCounterReason[] = targetMatchups.map(m => ({
      targetHero: m.target,
      targetHeroId: m.target.id,
      targetHeroName: heroDisplayName(m.target),
      weight: m.weight,
      reason: m.bestReason,
      reason_id: m.bestReason_id,
      allReasons: m.allReasons,
      allReasons_id: m.allReasons_id,
    }));

    const reasons = structuredReasons.map(sr => `${sr.targetHeroName}: ${sr.reason}`);
    const reasons_id = structuredReasons.map(sr => `${sr.targetHeroName}: ${sr.reason_id}`);

    const unpickedRole = unpickedRoleList.length ? unpickedRoleList[0].toUpperCase() : null;
    const unpickedLane = laneFit ? candidate.recommended_lane : null;

    candidates.push({
      hero: candidate,
      targets: uniqueTargets,
      evidence,
      score,
      reason: reasonType,
      reasons,
      reasons_id,
      structuredReasons,
      roleFit,
      laneFit,
      unpickedRole,
      unpickedLane,
      metaTier,
    });
  }

  // Sort candidates by score desc, target count desc, name asc
  candidates.sort((a, b) => b.score - a.score || b.targets.length - a.targets.length || titleHeroName(a.hero).localeCompare(titleHeroName(b.hero)));

  return candidates.slice(0, limit);
}

export function assertLocalCounterDataIntegrity(heroes: DraftHero[]) {
  const knownNames = new Set(heroes.map(hero => canonical(hero.chinese_hero_name)));
  const missingTargets = localData.filter(row => !knownNames.has(canonical(row.heroName)));
  const missingCounters = localData.filter(row => !knownNames.has(canonical(row.counteredByName)));
  if (missingTargets.length || missingCounters.length) {
    throw new Error(`Local counter data has unknown heroes: ${missingTargets.length} targets, ${missingCounters.length} counters`);
  }
}
