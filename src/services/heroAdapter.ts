import { HOK_HEROES, type Hero } from '../data/hokHeroes';
import countersData from '../data/counters.json';
import synergiesData from '../data/synergies.json';
import { getHeroAvatar } from '../utils/heroUtils';

export type { Hero };

const normalize = (value: string) => value.toLowerCase().trim();

export const getHeroes = (): Hero[] => HOK_HEROES.map(hero => ({
  ...hero,
  avatarUrl: getHeroAvatar(hero.id),
}));

export const getHeroById = (heroId: string): Hero | undefined => {
  const id = normalize(heroId);
  return getHeroes().find(hero => normalize(hero.id) === id || normalize(hero.name) === id);
};

export const getHeroCounters = (heroId: string) => {
  const id = normalize(heroId);
  return (countersData as any[]).filter(counter =>
    [counter.targetHeroId, counter.heroId, counter.heroName].some(value => value != null && normalize(String(value)) === id),
  );
};

export const getHeroSynergies = (heroId: string) => {
  const id = normalize(heroId);
  return (synergiesData as any[]).filter(synergy =>
    [synergy.heroId1, synergy.heroId2, synergy.heroIdA, synergy.heroIdB, synergy.heroNameA, synergy.heroNameB].some(value => value != null && normalize(String(value)) === id),
  );
};
