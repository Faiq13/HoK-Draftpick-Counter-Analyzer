export type DraftPhase = 'pick' | 'ban';
export type DraftTeam = 'blue' | 'red';
export interface DraftHero { id: any; name?: string; role?: string; roles?: string | string[]; avatar?: string; popularity?: number | string; chinese_hero_name?: string; english_hero_name?: string; recommended_lane?: string; image_url?: string; hero_page_url?: string; win_rate?: string; pick_rate?: string; ban_rate?: string; }
export interface DraftSlot { id?: string; hero?: DraftHero | null; side?: string; type?: string; team?: DraftTeam; phase?: DraftPhase; index: number; }
export interface DraftTeamState { picks: any[]; bans: any[]; }
export interface DraftState { blueTeam: any[]; redTeam: any[]; blueBans: any[]; redBans: any[]; activeSlot?: DraftSlot | null; }
