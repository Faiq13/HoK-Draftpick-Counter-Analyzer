import type { DraftHero } from '../types/draft';

export type StandardLane = 'Clash' | 'Jungling' | 'Mid' | 'Farm' | 'Roam';
export const ALL_STANDARD_LANES: StandardLane[] = ['Clash', 'Jungling', 'Mid', 'Farm', 'Roam'];

export interface LaneCoverage {
  covered: StandardLane[];
  missing: StandardLane[];
  duplicates: Array<{ lane: StandardLane; count: number }>;
}

export interface DamageSplit {
  physicalPercent: number;
  magicPercent: number;
  vulnerabilityWarning: 'skewed_physical' | 'skewed_magic' | null;
}

export interface CompositionTag {
  id: string;
  labelKey: string;
  defaultLabel: string;
  type: 'synergy' | 'warning';
  detail?: string;
  duplicates?: Array<{ lane: StandardLane; count: number }>;
}

export interface TeamSynergyReport {
  teamSize: number;
  laneCoverage: LaneCoverage;
  damageSplit: DamageSplit;
  tags: CompositionTag[];
}

export function normalizeLane(rawLane?: string): StandardLane | null {
  if (!rawLane) return null;
  const l = rawLane.trim().toLowerCase();
  if (l.includes('clash')) return 'Clash';
  if (l.includes('jungl')) return 'Jungling';
  if (l.includes('mid')) return 'Mid';
  if (l.includes('farm')) return 'Farm';
  if (l.includes('roam')) return 'Roam';
  return null;
}

export function rolesOf(hero: DraftHero): string[] {
  if (Array.isArray(hero.roles)) return hero.roles.map(r => r.trim()).filter(Boolean);
  return String(hero.roles || '').split(',').map(v => v.trim()).filter(Boolean);
}

export function getHeroDamageProfile(hero: DraftHero): { physical: number; magic: number } {
  const roles = rolesOf(hero).map(r => r.toLowerCase());
  const name = (hero.chinese_hero_name || hero.english_hero_name || '').toLowerCase();

  // Special hybrids
  if (name.includes('allain')) return { physical: 0.5, magic: 0.5 };
  if (name.includes('di renjie')) return { physical: 0.75, magic: 0.25 };

  // Magic tanks and magical supports
  const magicSupports = ['donghuang', 'zhuangzi', 'ming', 'dolia', 'cai yan', 'yaria', 'kui', 'da qiao', 'sun bin'];
  if (magicSupports.some(m => name.includes(m))) {
    return { physical: 0, magic: 1.0 };
  }

  const isMage = roles.includes('mage');
  const isMarksman = roles.includes('marksman');
  const isFighter = roles.includes('fighter');
  const isAssassin = roles.includes('assassin');
  const isTank = roles.includes('tank');

  if (isMage && !isMarksman && !isFighter) {
    return { physical: 0, magic: 1.0 };
  }
  if (isMage && (isMarksman || isFighter || isAssassin)) {
    return { physical: 0.3, magic: 0.7 };
  }
  if (isMarksman || isFighter || isAssassin || isTank) {
    return { physical: 1.0, magic: 0 };
  }

  return { physical: 0.8, magic: 0.2 };
}

// CC weight: 1.0 for heavy crowd control, 0.5 for moderate, 0 for minimal
function getHeroCcWeight(hero: DraftHero): number {
  const name = (hero.chinese_hero_name || hero.english_hero_name || '').toLowerCase();
  const roles = rolesOf(hero).map(r => r.toLowerCase());

  const heavyCcHeroes = [
    'lian po', 'donghuang', 'liu shan', 'bai qi', 'guiguzi', 'xiang yu', 'zhang fei',
    'liang', 'zhen ji', 'wang zhaojun', 'sun ce', 'mozi', 'kui', 'wu zetian',
    'dharma', 'guan yu', 'wuyan', 'su lie'
  ];
  if (heavyCcHeroes.some(h => name.includes(h))) return 1.0;

  if (roles.includes('tank') || roles.includes('support')) return 0.7;
  if (roles.includes('mage')) return 0.5;

  const moderateCcHeroes = ['arthur', 'dun', 'charlotte', 'biron', 'mulan', 'fuzi', 'daji', 'xiao qiao'];
  if (moderateCcHeroes.some(h => name.includes(h))) return 0.5;

  return 0.2;
}

export function evaluateTeamSynergy(picks: Array<DraftHero | null>): TeamSynergyReport {
  const heroes = (picks || []).filter((h): h is DraftHero => Boolean(h && h.id));
  const teamSize = heroes.length;

  // 1. Lane Coverage
  const laneCounts: Record<StandardLane, number> = {
    Clash: 0,
    Jungling: 0,
    Mid: 0,
    Farm: 0,
    Roam: 0,
  };

  for (const h of heroes) {
    const lane = normalizeLane(h.recommended_lane);
    if (lane) {
      laneCounts[lane]++;
    }
  }

  const covered: StandardLane[] = ALL_STANDARD_LANES.filter(l => laneCounts[l] > 0);
  const missing: StandardLane[] = ALL_STANDARD_LANES.filter(l => laneCounts[l] === 0);
  const duplicates: Array<{ lane: StandardLane; count: number }> = ALL_STANDARD_LANES
    .filter(l => laneCounts[l] > 1)
    .map(l => ({ lane: l, count: laneCounts[l] }));

  // 2. Damage Split
  let totalPhys = 0;
  let totalMag = 0;
  for (const h of heroes) {
    const dmg = getHeroDamageProfile(h);
    totalPhys += dmg.physical;
    totalMag += dmg.magic;
  }

  const totalDmg = totalPhys + totalMag;
  let physicalPercent = 50;
  let magicPercent = 50;
  if (totalDmg > 0) {
    physicalPercent = Math.round((totalPhys / totalDmg) * 100);
    magicPercent = 100 - physicalPercent;
  }

  let vulnerabilityWarning: 'skewed_physical' | 'skewed_magic' | null = null;
  if (teamSize >= 2) {
    if (physicalPercent >= 80) vulnerabilityWarning = 'skewed_physical';
    else if (magicPercent >= 75) vulnerabilityWarning = 'skewed_magic';
  }

  // 3. Composition Tags
  // Candidate positive synergy traits with relative strength ratings
  const positiveTraits: Array<{ tag: CompositionTag; strength: number }> = [];

  // Frontline score
  let frontlineScore = 0;
  for (const h of heroes) {
    const roles = rolesOf(h).map(r => r.toLowerCase());
    const lane = normalizeLane(h.recommended_lane);
    if (roles.includes('tank')) frontlineScore += 1.0;
    else if (roles.includes('fighter') && (lane === 'Clash' || lane === 'Roam')) frontlineScore += 0.6;
  }

  if (frontlineScore >= 1.8) {
    positiveTraits.push({
      tag: {
        id: 'strong_frontline',
        labelKey: 'tagStrongFrontline',
        defaultLabel: 'Strong Frontline',
        type: 'synergy',
      },
      strength: frontlineScore / 1.8,
    });
  }

  // CC / Engage score
  let ccScore = 0;
  for (const h of heroes) {
    ccScore += getHeroCcWeight(h);
  }

  if (ccScore >= 2.2) {
    positiveTraits.push({
      tag: {
        id: 'heavy_cc',
        labelKey: 'tagHeavyCc',
        defaultLabel: 'Heavy CC / Engage',
        type: 'synergy',
      },
      strength: ccScore / 2.2,
    });
  }

  // Burst heroes
  let burstCount = 0;
  for (const h of heroes) {
    const roles = rolesOf(h).map(r => r.toLowerCase());
    const name = (h.chinese_hero_name || h.english_hero_name || '').toLowerCase();
    const isBurstAssassin = roles.includes('assassin');
    const isBurstMage = roles.includes('mage') && !['cai yan', 'sun bin', 'da qiao', 'dr bian', 'milady', 'zhou yu'].some(m => name.includes(m));
    if (isBurstAssassin || isBurstMage) burstCount++;
  }
  if (burstCount >= 2) {
    positiveTraits.push({
      tag: {
        id: 'high_burst',
        labelKey: 'tagHighBurst',
        defaultLabel: 'High Burst',
        type: 'synergy',
      },
      strength: burstCount / 2.0,
    });
  }

  // Poke / Siege
  const pokeHeroes = ['gan & mo', 'nuwa', 'zhou yu', 'milady', 'luban no.7', 'huang zhong', 'garo', 'mozi', 'consort yu', 'bai shouyue', 'shouyue'];
  const pokeCount = heroes.filter(h => {
    const name = (h.chinese_hero_name || h.english_hero_name || '').toLowerCase();
    return pokeHeroes.some(p => name.includes(p));
  }).length;

  if (pokeCount >= 2) {
    positiveTraits.push({
      tag: {
        id: 'poke_siege',
        labelKey: 'tagPokeSiege',
        defaultLabel: 'Poke / Siege',
        type: 'synergy',
      },
      strength: pokeCount / 2.0,
    });
  }

  // High Mobility
  const mobileHeroes = ['li bai', 'han xin', 'nakoruru', 'jing', 'mulan', 'guan yu', 'arli', 'yao', 'zilong', 'sima yi', 'mayene'];
  const mobileCount = heroes.filter(h => {
    const name = (h.chinese_hero_name || h.english_hero_name || '').toLowerCase();
    return mobileHeroes.some(m => name.includes(m));
  }).length;

  if (mobileCount >= 2) {
    positiveTraits.push({
      tag: {
        id: 'high_mobility',
        labelKey: 'tagHighMobility',
        defaultLabel: 'High Mobility',
        type: 'synergy',
      },
      strength: mobileCount / 2.0,
    });
  }

  // High Sustain
  const sustainHeroes = ['cai yan', 'dr bian', 'cheng yaojin', 'yang jian', 'biron', 'agudo', 'sang qi', 'dolia'];
  const sustainCount = heroes.filter(h => {
    const name = (h.chinese_hero_name || h.english_hero_name || '').toLowerCase();
    return sustainHeroes.some(s => name.includes(s));
  }).length;

  if (sustainCount >= 2) {
    positiveTraits.push({
      tag: {
        id: 'high_sustain',
        labelKey: 'tagHighSustain',
        defaultLabel: 'High Sustain',
        type: 'synergy',
      },
      strength: sustainCount / 2.0,
    });
  }

  // Tighten positive tags: cap to top 2-3 strongest traits
  positiveTraits.sort((a, b) => b.strength - a.strength);
  const selectedPositiveTags = positiveTraits.slice(0, 3).map(pt => pt.tag);

  // Warning alerts
  const warningTags: CompositionTag[] = [];

  if (teamSize >= 3 && frontlineScore < 0.6) {
    warningTags.push({
      id: 'low_frontline',
      labelKey: 'tagLowFrontline',
      defaultLabel: 'Low Frontline',
      type: 'warning',
    });
  }

  if (teamSize >= 3 && ccScore < 1.0) {
    warningTags.push({
      id: 'no_hard_cc',
      labelKey: 'tagNoHardCc',
      defaultLabel: 'No Hard CC',
      type: 'warning',
    });
  }

  // Duplicate lane warnings
  if (duplicates.length > 0) {
    warningTags.push({
      id: 'duplicate_lanes',
      labelKey: 'tagDuplicateLanes',
      defaultLabel: 'Duplicate Lanes',
      type: 'warning',
      duplicates,
    });
  }

  // Damage skew warnings are omitted here to prevent duplicates with the Damage Split bar alert
  const tags: CompositionTag[] = [...selectedPositiveTags, ...warningTags];

  return {
    teamSize,
    laneCoverage: { covered, missing, duplicates },
    damageSplit: { physicalPercent, magicPercent, vulnerabilityWarning },
    tags,
  };
}
