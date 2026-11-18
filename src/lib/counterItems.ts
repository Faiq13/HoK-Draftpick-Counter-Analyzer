import type { DraftHero, SearchItem } from '../types/draft';
import { getHeroDamageProfile, rolesOf } from './synergy';

export const ITEM_FALLBACK_SVG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 44 44' width='44' height='44'%3E%3Crect width='44' height='44' rx='8' fill='%231e293b'/%3E%3Cpath d='M22 8 L32 13 V23 C32 29.5 27.5 35 22 37 C16.5 35 12 29.5 12 23 V13 Z' fill='none' stroke='%2338bdf8' stroke-width='2' stroke-linejoin='round'/%3E%3Ctext x='22' y='27' font-family='sans-serif' font-size='10' font-weight='bold' fill='%2338bdf8' text-anchor='middle'%3EITEM%3C/text%3E%3C/svg%3E";

export function getItemIconUrl(path?: string): string {
  if (!path) return ITEM_FALLBACK_SVG;
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  const base = import.meta.env.BASE_URL ? import.meta.env.BASE_URL.replace(/\/$/, '') : '';
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${cleanPath}`;
}

export interface CounterItemRecommendation {
  item: SearchItem;
  triggerCategory: 'magic' | 'sustain' | 'attack-speed' | 'crowd-control' | 'tank';
  categoryKey: string;
  defaultCategory: string;
  reasonKey: string;
  defaultReason: string;
  triggerHeroes: DraftHero[];
  priority: 'high' | 'medium';
}

const HEAVY_CC_NAMES = [
  'lian po', 'donghuang', 'liu shan', 'bai qi', 'guiguzi', 'xiang yu', 'zhang fei',
  'liang', 'zhen ji', 'wang zhaojun', 'sun ce', 'mozi', 'kui', 'wu zetian',
  'dharma', 'guan yu', 'wuyan', 'su lie', 'frost'
];

const SUSTAIN_NAMES = [
  'cai yan', 'dr bian', 'bian que', 'cheng yaojin', 'yang jian', 'biron', 'agudo',
  'sang qi', 'dolia', 'fuzi', 'arthur', 'allain', 'charlotte', 'meng ya', 'luban no.7', 'marco polo'
];

const norm = (s?: string) => (s || '').toLowerCase();

function heroMatches(hero: DraftHero, list: string[]): boolean {
  const cn = norm(hero.chinese_hero_name);
  const en = norm(hero.english_hero_name);
  return list.some(item => cn.includes(item) || en.includes(item));
}

// ponytail: rule-based threat evaluation; upgrade to dynamic item-stat matrix when item API expands
export function evaluateCounterItems(
  items: SearchItem[],
  enemyPicksInput: Array<DraftHero | null>
): CounterItemRecommendation[] {
  const enemyPicks = (enemyPicksInput || []).filter((h): h is DraftHero => Boolean(h && h.id));
  if (!enemyPicks.length || !items.length) return [];

  const itemMap = new Map<string, SearchItem>();
  for (const item of items) {
    itemMap.set(String(item.id), item);
  }

  const recommendations: CounterItemRecommendation[] = [];

  // 1. Magic Burst / Poke
  const magicThreats = enemyPicks.filter(h => {
    const roles = rolesOf(h).map(r => r.toLowerCase());
    const dmg = getHeroDamageProfile(h);
    return roles.includes('mage') || dmg.magic >= 0.5;
  });

  if (magicThreats.length > 0) {
    const isHeavy = magicThreats.length >= 2;
    const targetItemIds = ['succubus-cloak', 'splendor', 'longnight-guardian'];
    for (const id of targetItemIds) {
      const item = itemMap.get(id);
      if (item) {
        recommendations.push({
          item,
          triggerCategory: 'magic',
          categoryKey: 'catAntiMagic',
          defaultCategory: 'Magic Defense',
          reasonKey: 'reasonMagicBurst',
          defaultReason: 'Heavy enemy magic damage and burst poke',
          triggerHeroes: magicThreats,
          priority: isHeavy ? 'high' : 'medium',
        });
      }
    }
  }

  // 2. High Healing / Lifesteal / Sustain
  const sustainThreats = enemyPicks.filter(h => heroMatches(h, SUSTAIN_NAMES));
  if (sustainThreats.length > 0) {
    const hasDedicatedHealer = sustainThreats.some(h => {
      const name = norm(h.chinese_hero_name) + ' ' + norm(h.english_hero_name);
      return name.includes('cai yan') || name.includes('bian') || name.includes('cheng yaojin') || name.includes('sang qi');
    });
    const targetItemIds = ['mortal-punisher', 'venomous-staff', 'blazing-cape'];
    for (const id of targetItemIds) {
      const item = itemMap.get(id);
      if (item) {
        recommendations.push({
          item,
          triggerCategory: 'sustain',
          categoryKey: 'catAntiHeal',
          defaultCategory: 'Anti-Heal',
          reasonKey: 'reasonHighSustain',
          defaultReason: 'Cut enemy healing, sustain, and lifesteal',
          triggerHeroes: sustainThreats,
          priority: hasDedicatedHealer || sustainThreats.length >= 2 ? 'high' : 'medium',
        });
      }
    }
  }

  // 3. High Attack Speed / Crit Marksmen
  const marksmanThreats = enemyPicks.filter(h => {
    const roles = rolesOf(h).map(r => r.toLowerCase());
    return roles.includes('marksman') || heroMatches(h, ['wukong', 'han xin', 'dian wei']);
  });

  if (marksmanThreats.length > 0) {
    const targetItemIds = ['ominous-premonition', 'cuirass-of-savagery', 'boots-of-fortitude'];
    for (const id of targetItemIds) {
      const item = itemMap.get(id);
      if (item) {
        recommendations.push({
          item,
          triggerCategory: 'attack-speed',
          categoryKey: 'catAntiPhys',
          defaultCategory: 'Physical Defense',
          reasonKey: 'reasonPhysicalDefense',
          defaultReason: 'Physical defense against basic attacks; only Ominous Premonition slows attack speed',
          triggerHeroes: marksmanThreats,
          priority: 'high',
        });
      }
    }
  }

  // 4. Heavy Crowd Control
  const ccThreats = enemyPicks.filter(h => heroMatches(h, HEAVY_CC_NAMES));
  if (ccThreats.length > 0) {
    const targetItemIds = ['boots-of-resistance'];
    for (const id of targetItemIds) {
      const item = itemMap.get(id);
      if (item) {
        recommendations.push({
          item,
          triggerCategory: 'crowd-control',
          categoryKey: 'catAntiCc',
          defaultCategory: 'Tenacity / CC',
          reasonKey: 'reasonHeavyCc',
          defaultReason: 'Tenacity and CC duration reduction against hard lockdown',
          triggerHeroes: ccThreats,
          priority: ccThreats.length >= 2 ? 'high' : 'medium',
        });
      }
    }
  }

  const tankThreats = enemyPicks.filter(h => rolesOf(h).some(role => role.toLowerCase() === 'tank'));
  if (tankThreats.length > 0) {
    const targetItemIds = ['starbreaker', 'doomsday', 'breakthrough-robe'];
    for (const id of targetItemIds) {
      const item = itemMap.get(id);
      if (item) {
        recommendations.push({
          item,
          triggerCategory: 'tank',
          categoryKey: 'catAntiTank',
          defaultCategory: 'Armor / High HP',
          reasonKey: 'reasonTanks',
          defaultReason: 'Enemy tanks: armor penetration or damage based on maximum HP',
          triggerHeroes: tankThreats,
          priority: 'medium',
        });
      }
    }
  }

  // Deduplicate items by item id, retaining highest priority & combining triggers
  const deduped = new Map<string, CounterItemRecommendation>();
  for (const rec of recommendations) {
    const id = String(rec.item.id);
    const existing = deduped.get(id);
    if (!existing) {
      deduped.set(id, rec);
    } else {
      if (rec.priority === 'high' && existing.priority !== 'high') {
        existing.priority = 'high';
        existing.categoryKey = rec.categoryKey;
        existing.defaultCategory = rec.defaultCategory;
        existing.reasonKey = rec.reasonKey;
        existing.defaultReason = rec.defaultReason;
      }
      // Combine trigger heroes uniquely
      const existingHeroIds = new Set(existing.triggerHeroes.map(h => h.id));
      for (const th of rec.triggerHeroes) {
        if (!existingHeroIds.has(th.id)) {
          existing.triggerHeroes.push(th);
          existingHeroIds.add(th.id);
        }
      }
    }
  }

  const result = Array.from(deduped.values());

  // Sort: High priority first, then most trigger heroes, then item name
  result.sort((a, b) => {
    if (a.priority !== b.priority) return a.priority === 'high' ? -1 : 1;
    if (b.triggerHeroes.length !== a.triggerHeroes.length) return b.triggerHeroes.length - a.triggerHeroes.length;
    return a.item.name.localeCompare(b.item.name);
  });

  return result;
}
