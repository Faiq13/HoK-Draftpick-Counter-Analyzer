export interface DraftState {
  blueTeam: (string | null)[]; // 5 hero IDs
  redTeam: (string | null)[];  // 5 hero IDs
  blueBans: (string | null)[]; // 3 hero IDs
  redBans: (string | null)[];  // 3 hero IDs
  activeSlot: {
    side: 'blue' | 'red';
    type: 'pick' | 'ban';
    index: number;
  } | null;
}
