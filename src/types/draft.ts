export type DraftPhase = 'pick' | 'ban';
export type DraftTeam = 'blue' | 'red';

export interface DraftHero {
  id: number;
  chinese_hero_name: string;
  english_hero_name: string;
  roles: string;
  recommended_lane: string;
  image_url: string;
  hero_page_url: string;
  popularity: string;
  win_rate: string;
  pick_rate: string;
  ban_rate: string;
}

export interface DraftSlot {
  team: DraftTeam;
  phase: DraftPhase;
  index: number;
}

export interface DraftTeamState {
  picks: Array<DraftHero | null>;
  bans: Array<DraftHero | null>;
}
