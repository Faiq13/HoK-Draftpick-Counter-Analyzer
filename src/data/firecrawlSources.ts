/** Firecrawl verification record. Data remains in the typed local datasets for deterministic builds. */
export const FIRECRAWL_SOURCES = {
  heroTier: 'https://camp.honorofkings.com/h5/app/index.html?lang_type=en#/hero-hot-list',
  heroDatabase: 'https://www.mlcounters.app/#heroes',
  matchupAccuracy: 'https://hokstats.gg/id/counters/',
  verifiedAt: '2026-11-06',
  note: 'Local HOK_HEROES contains 120 typed records; latest public HoKStats index exposes 119 international heroes. Local dataset is retained because it includes the additional project hero record and matchup edges used by the app.',
} as const;
