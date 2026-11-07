export type TeamSide = 'blue' | 'red';
export type DraftTeam = TeamSide;
export type DraftPhase = 'pick' | 'ban';
export interface DraftSlot { side?: TeamSide; type?: DraftPhase; index: number; team?: TeamSide; phase?: DraftPhase; }
export interface DraftHero { id: string; english_hero_name: string; chinese_hero_name?: string; roles?: string; recommended_lane?: string; image_url?: string; win_rate?: string; pick_rate?: string; ban_rate?: string; }
export interface DraftTeamState { picks: Array<DraftHero | null>; bans: Array<DraftHero | null>; }
export interface DraftSlotProps { slot: DraftSlot; hero: DraftHero | null; onOpen: (slot: DraftSlot) => void; onRemove?: (slot: DraftSlot) => void; }
export interface Hero { id: string; name: string; role: 'Roam' | 'Clash' | 'Mid' | 'Farm' | 'Jungle'; avatarUrl: string; counters: string[]; counteredBy: Array<{ id: string; name: string; reason?: string }>; synergies: Array<{ id: string; name: string; reason?: string }>; tags: string[]; }
export interface DraftState { blueTeam: (string | null)[]; redTeam: (string | null)[]; blueBans: (string | null)[]; redBans: (string | null)[]; activeSlot: DraftSlot | null; }
