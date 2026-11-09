export type DraftPhase = 'pick' | 'ban';
export type DraftTeam = 'blue' | 'red';

export interface DraftHero {
  id: number;
  chinese_hero_name: string;
  english_hero_name: string;
  roles?: string | string[];
  recommended_lane: string;
  image_url: string;
  hero_page_url: string;
  popularity?: string | number;
  win_rate: string;
  pick_rate: string;
  ban_rate: string;
}

export interface DraftSlot {
  team: DraftTeam;
  phase: DraftPhase;
  index: number;
  hero?: DraftHero | string | null;
  heroId?: string | null;
  side?: 'blue' | 'red' | string;
  type?: 'pick' | 'ban' | string;
  [key: string]: any;
}

export interface DraftTeamState {
  picks: Array<DraftHero | null>;
  bans: Array<DraftHero | null>;
}

export interface DraftState {
  blueTeam: Array<DraftHero | string | null>;
  redTeam: Array<DraftHero | string | null>;
  blueBans: Array<DraftHero | string | null>;
  redBans: Array<DraftHero | string | null>;
  activeSlot?: DraftSlot | null;
}
