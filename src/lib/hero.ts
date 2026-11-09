import type { DraftHero } from '../types/draft';

export type HeroNameMode = 'global' | 'title';

export const globalHeroName = (hero: DraftHero) => hero.chinese_hero_name || hero.english_hero_name;
export const titleHeroName = (hero: DraftHero) => hero.english_hero_name || hero.chinese_hero_name;
export const displayHeroName = (hero: DraftHero, mode: HeroNameMode) => mode === 'global' ? globalHeroName(hero) : titleHeroName(hero);
