export interface HokCampHero { id: string; name: string; role?: string; avatarUrl?: string; }
const API_BASE = 'https://hok-camp-api.example.com';
export async function getAllHeroes(signal?: AbortSignal): Promise<HokCampHero[]> { try { const response = await fetch(`${API_BASE}/get_all_heroes`, { signal }); if (!response.ok) throw new Error(`HoK Camp API ${response.status}`); return await response.json() as HokCampHero[]; } catch { return []; } }
export async function getHeroRankings(signal?: AbortSignal): Promise<unknown[]> { try { const response = await fetch(`${API_BASE}/get_hero_rankings`, { signal }); if (!response.ok) throw new Error(`HoK Camp API ${response.status}`); return await response.json() as unknown[]; } catch { return []; } }
