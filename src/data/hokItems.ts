// AUTO-GENERATED — FASE 2: Item Counter Database Honor of Kings
// Tactical mappings for counter items against hero compositions
//
// Item categories:
// - Anti-Heal/Regen: Reduces enemy healing effects
// - Anti-Physical Burst: Counters physical burst damage from assassins/marksmen
// - Anti-Magic Burst: Counters magical burst damage from mages
// - Anti-Shield: Pierces enemy shields

export interface ItemCounter {
  id: string;
  name: string;
  category: 'anti-heal' | 'anti-physical-burst' | 'anti-magic-burst' | 'anti-shield';
  descriptionKey: string; // Key for translatable description
  triggerConditions: string[]; // Conditions that trigger this item's recommendation
  targetHeroes: string[]; // Example hero names that trigger this item
}

export const HOK_ITEM_COUNTERS: ItemCounter[] = [
  {
    id: 'venomous-staff',
    name: 'Venomous Staff',
    category: 'anti-heal',
    descriptionKey: 'venomous-staff-desc',
    triggerConditions: [
      'Musuh memiliki hero dengan healing',
      'Musuh memiliki lifesteal',
    ],
    targetHeroes: ['Cai Yan', 'Dyadia', "Ao'yin", 'Yang Jian', 'Fuzi'],
  },
  {
    id: 'sea-tremor',
    name: 'Sea Tremor',
    category: 'anti-heal',
    descriptionKey: 'sea-tremor-desc',
    triggerConditions: [
      'Musuh memiliki hero dengan healing',
      'Musuh memiliki lifesteal',
    ],
    targetHeroes: ['Cai Yan', 'Dyadia', "Ao'yin", 'Yang Jian', 'Fuzi'],
  },
  {
    id: 'ominous-premonition',
    name: 'Ominous Premonition',
    category: 'anti-physical-burst',
    descriptionKey: 'ominous-premonition-desc',
    triggerConditions: [
      'Musuh memiliki burst assassin fisik',
      'Musuh memiliki burst marksman fisik',
    ],
    targetHeroes: ['Lu Bu', 'Butterfly', 'Arthur'], // Physical burst assassins
  },
  {
    id: 'cuirass-of-savagery',
    name: 'Cuirass of Savagery',
    category: 'anti-physical-burst',
    descriptionKey: 'cuirass-savagery-desc',
    triggerConditions: [
      'Musuh memiliki burst assassin fisik',
      'Musuh memiliki burst marksman fisik',
    ],
    targetHeroes: ['Lu Bu', 'Butterfly', 'Arthur'],
  },
  {
    id: 'eye-of-phoenix',
    name: 'Eye of the Phoenix',
    category: 'anti-physical-burst',
    descriptionKey: 'eye-phoenix-desc',
    triggerConditions: [
      'Musuh memiliki burst assassin fisik',
      'Musuh memiliki burst marksman fisik',
    ],
    targetHeroes: ['Lu Bu', 'Butterfly', 'Arthur'],
  },
  {
    id: 'splendor',
    name: 'Splendor',
    category: 'anti-magic-burst',
    descriptionKey: 'splendor-desc',
    triggerConditions: [
      'Musuh memiliki mage burst',
      'Musuh memiliki magical damage burst',
    ],
    targetHeroes: ['Angela', 'Daji', 'Mai Shiranui'],
  },
  {
    id: 'nightmarish-gaze',
    name: 'Nightmarish Gaze',
    category: 'anti-magic-burst',
    descriptionKey: 'nightmarish-gaze-desc',
    triggerConditions: [
      'Musuh memiliki mage burst',
      'Musuh memiliki magical damage burst',
    ],
    targetHeroes: ['Angela', 'Daji', 'Mai Shiranui'],
  },
  {
    id: 'breakthrough-armor',
    name: 'Breakthrough Armor',
    category: 'anti-magic-burst',
    descriptionKey: 'breakthrough-armor-desc',
    triggerConditions: [
      'Musuh memiliki mage burst',
      'Musuh memiliki magical damage burst',
    ],
    targetHeroes: ['Angela', 'Daji', 'Mai Shiranui'],
  },
  {
    id: 'shadow-blade',
    name: 'Shadow Blade',
    category: 'anti-shield',
    descriptionKey: 'shadow-blade-desc',
    triggerConditions: [
      'Musuh memiliki shielder',
      'Musuh memiliki barang perisai',
    ],
    targetHeroes: ['Zhang Fei', 'Dun'], // Shield heroes
  },
  {
    id: 'armor-piercing',
    name: 'Armor-Piercing',
    category: 'anti-shield',
    descriptionKey: 'armor-piercing-desc',
    triggerConditions: [
      'Musuh memiliki shielder',
      'Musuh memiliki barang perisai',
    ],
    targetHeroes: ['Zhang Fei', 'Dun'],
  },
];

// Translatable descriptions for item effects (Indonesian/English)
export const ITEM_DESCRIPTIONS: Record<string, { en: string; id: string }> = {
  'venomous-staff-desc': {
    en: 'Reduces enemy healing by 50%',
    id: 'Mengurangi efek pemulihan HP sebesar 50%',
  },
  'sea-tremor-desc': {
    en: 'Nullifies lifesteal effects',
    id: 'Menghilangkan efek lifesteal',
  },
  'ominous-premonition-desc': {
    en: 'Increases physical resistance against burst',
    id: 'Meningkatkan resistensi fisik terhadap burst',
  },
  'cuirass-of-savagery-desc': {
    en: 'Armor reduction against physical damage',
    id: 'Pengurangan armor terhadap damage fisik',
  },
  'eye-of-phoenix-desc': {
    en: 'Reflects some magical damage back',
    id: 'Mengesankan damage magis kembali',
  },
  'splendor-desc': {
    en: 'Reduces magical damage taken',
    id: 'Mengurangi damage magis yang diterima',
  },
  'nightmarish-gaze-desc': {
    en: 'Impairs enemy spell casting',
    id: 'Mengganggu pemutaran sihir musuh',
  },
  'breakthrough-armor-desc': {
    en: 'Armor penetration against mages',
    id: 'Penetrasi armor melawan mage',
  },
  'shadow-blade-desc': {
    en: 'Armor penetration against shields',
    id: 'Penetrasi armor melawan perisai',
  },
  'armor-piercing-desc': {
    en: 'Armor penetration effect',
    id: 'Efektif penetrasi armor',
  },
};