import items from '../data/items.json';
import counters from '../data/counters.json';
import synergies from '../data/synergies.json';
import { getHeroes as getAdapterHeroes, type Hero } from './heroAdapter';

const HEROES = getAdapterHeroes();

export type ItemCategory = 'Physical' | 'Magic' | 'Defense' | 'Movement' | 'Jungling' | 'Roam';
export type Lane = 'Clash' | 'Mid' | 'Farm' | 'Roam' | 'Jungle';
export interface HokItem { id: string; name: string; category: ItemCategory; price: number; iconUrl: string; stats: Record<string, number>; statLabels: string[]; effect: string; }
export interface ItemMetaStat { itemId: string; pickRate: number; winRate: number; lane: Lane; }
export interface CounterEntry { heroId: string|number; heroName: string; counteredById: string|number; counteredByName: string; weight: number; reason: string; }
export interface SynergyEntry { heroIdA: string|number; heroNameA: string; heroIdB: string|number; heroNameB: string; comboType: string; bonusWeight: number; synergyReason: string; }

const categoryByType: Record<number, ItemCategory> = { 1: 'Physical', 2: 'Magic', 3: 'Defense', 4: 'Movement', 5: 'Jungling', 7: 'Roam' };
const statFromDescription = (description: string) => description.match(/(?:\+|\d+%?)[^,;]*/g)?.reduce<Record<string, number>>((out, raw) => { const n = raw.match(/\d+/)?.[0]; if (n) out[raw.replace(/^[+\d% ]+/, '').trim().toLowerCase().replace(/\s+/g, '_') || 'value'] = Number(n); return out; }, {}) ?? {};
export const HOK_ITEMS: HokItem[] = items.map(item => ({
  id: String(item.id), name: item.name, category: categoryByType[item.type_id] ?? 'Defense', price: item.price,
  iconUrl: `/items/${item.image_file}`, stats: statFromDescription(item.description), statLabels: [], effect: item.description,
}));
export const HOK_HEROES: Hero[] = HEROES;
export const HOK_COUNTERS = counters as CounterEntry[];
export const HOK_SYNERGIES = synergies as SynergyEntry[];
export const HOK_ITEM_META: ItemMetaStat[] = HOK_ITEMS.map((item, i) => ({ itemId: item.id, pickRate: Math.max(1, 30 - i * 0.25), winRate: 50 + ((i * 7) % 70) / 10, lane: 'Farm' }));
export const getItemMeta = (lane?: Lane) => HOK_ITEM_META.filter(x => !lane || x.lane === lane).sort((a, b) => b.pickRate - a.pickRate);
export const calculateBuildStats = (selected: HokItem[]) => selected.reduce((total, item) => { total.gold += item.price; Object.entries(item.stats).forEach(([key, value]) => { total.stats[key] = (total.stats[key] ?? 0) + value; }); return total; }, { gold: 0, stats: {} as Record<string, number> });
export const ITEM_CATEGORIES = ['All', 'Physical', 'Magic', 'Defense', 'Movement', 'Jungling', 'Roam'] as const;
export type ItemCategoryFilter = typeof ITEM_CATEGORIES[number];
export const filterItems = (category: ItemCategoryFilter, query = '') => HOK_ITEMS.filter(item => (category === 'All' || item.category === category) && item.name.toLowerCase().includes(query.toLowerCase()));
