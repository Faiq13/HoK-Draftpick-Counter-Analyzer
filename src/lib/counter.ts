import matchupRows from '../data/counters.json';
import type { DraftHero } from '../types/draft';

interface LocalMatchupRow {
  heroName: string;
  counteredByName: string;
  weight: number;
  reason: string;
}

export interface CounterEvidence {
  target: DraftHero;
  weight: number;
  reason: string;
}

export interface CounterRecommendation {
  hero: DraftHero;
  targets: DraftHero[];
  evidence: CounterEvidence[];
  score: number;
  reason: 'local';
}

const normalize = (value: string) => value.trim().toLocaleLowerCase();
const heroName = (hero: DraftHero) => hero.english_hero_name || hero.chinese_hero_name;
const data = matchupRows as LocalMatchupRow[];

export function buildCounterRecommendations(heroes: DraftHero[], enemyPicks: DraftHero[], usedIds: Set<number>, limit = 6): CounterRecommendation[] {
  if (!enemyPicks.length) return [];

  const available = heroes.filter(hero => !usedIds.has(hero.id));
  const relationships = new Map<string, LocalMatchupRow[]>();

  for (const row of data) {
    const key = normalize(row.counteredByName);
    const rows = relationships.get(key) ?? [];
    rows.push(row);
    relationships.set(key, rows);
  }

  return available.map(hero => {
    const rows = relationships.get(normalize(hero.chinese_hero_name)) ?? [];
    const evidence = enemyPicks.flatMap(target => rows
      .filter(row => normalize(row.heroName) === normalize(target.chinese_hero_name))
      .map(row => ({ target, weight: row.weight, reason: row.reason })));
    const targets = evidence.map(item => item.target);
    const uniqueTargets = [...new Map(targets.map(target => [target.id, target])).values()];
    const totalWeight = evidence.reduce((sum, item) => sum + item.weight, 0);
    const score = uniqueTargets.length * 1000 + totalWeight;

    return { hero, targets: uniqueTargets, evidence, score, reason: 'local' as const };
  })
    .filter(item => item.targets.length > 0)
    .sort((a, b) => b.score - a.score || heroName(a.hero).localeCompare(heroName(b.hero)))
    .slice(0, limit);
}

export function assertLocalCounterDataIntegrity(heroes: DraftHero[]) {
  const knownNames = new Set(heroes.map(hero => normalize(hero.chinese_hero_name)));
  const missingTargets = data.filter(row => !knownNames.has(normalize(row.heroName)));
  const missingCounters = data.filter(row => !knownNames.has(normalize(row.counteredByName)));
  if (missingTargets.length || missingCounters.length) {
    throw new Error(`Local counter data has unknown heroes: ${missingTargets.length} targets, ${missingCounters.length} counters`);
  }
}

