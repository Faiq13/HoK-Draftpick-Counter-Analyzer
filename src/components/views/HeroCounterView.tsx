import React, { useState, useMemo } from 'react';
import { getHeroes, type Hero } from '../../services/heroAdapter';

const HOK_HEROES = getHeroes();
import { HOKSTATS_COUNTERS } from '../../data/hokStatsCounters';
import { HOK_TIER_DATA } from '../../data/hokTierData';

const TIER_COLORS: Record<string, string> = {
  S: 'text-amber-400 bg-amber-400/10 border-amber-400/30',
  A: 'text-orange-400 bg-orange-400/10 border-orange-400/30',
  B: 'text-blue-400 bg-blue-400/10 border-blue-400/30',
  C: 'text-slate-400 bg-slate-400/10 border-slate-400/20',
};

const ROLE_COLORS: Record<string, string> = {
  Roam:   'bg-cyan-500/20 text-cyan-300',
  Clash:  'bg-orange-500/20 text-orange-300',
  Mid:    'bg-purple-500/20 text-purple-300',
  Farm:   'bg-green-500/20 text-green-300',
  Jungle: 'bg-red-500/20 text-red-300',
};

function findHeroAvatar(name: string): string {
  const hero = HOK_HEROES.find(h => h.name.toLowerCase() === name.toLowerCase());
  return hero?.avatarUrl ?? '/heroes/default.webp';
}

function findHeroRole(name: string): Hero['role'] | undefined {
  return HOK_HEROES.find(h => h.name.toLowerCase() === name.toLowerCase())?.role;
}

function getHeroTier(name: string): string {
  return HOK_TIER_DATA.find(e => e.name.toLowerCase() === name.toLowerCase())?.tier ?? '';
}

interface CounterCardProps {
  name: string;
  label: string;
  variant: 'counter' | 'synergy';
}

const HeroChip: React.FC<{ name: string; variant: 'counter' | 'synergy' }> = ({ name, variant }) => {
  const tier = getHeroTier(name);
  const role = findHeroRole(name);
  return (
    <div className={`flex items-center gap-2 p-2.5 rounded-lg border ${
      variant === 'counter'
        ? 'bg-red-500/5 border-red-500/20'
        : 'bg-emerald-500/5 border-emerald-500/20'
    }`}>
      <img
        src={findHeroAvatar(name)}
        alt={name}
        className="w-8 h-8 rounded-lg object-cover bg-white/5 flex-shrink-0"
        onError={e => { (e.target as HTMLImageElement).src = '/heroes/default.webp'; }}
      />
      <div className="min-w-0">
        <p className="text-xs font-semibold text-white/90 truncate">{name}</p>
        <div className="flex items-center gap-1 mt-0.5">
          {role && <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${ROLE_COLORS[role] ?? 'bg-white/5 text-white/40'}`}>{role}</span>}
          {tier && <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded border ${TIER_COLORS[tier]}`}>{tier}</span>}
        </div>
      </div>
    </div>
  );
};

export const HeroCounterView: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<string | null>(null);

  const heroList = useMemo(() =>
    HOK_HEROES.filter(h =>
      !search || h.name.toLowerCase().includes(search.toLowerCase())
    ).sort((a, b) => a.name.localeCompare(b.name)),
    [search]
  );

  const counterEntry = useMemo(() => {
    if (!selected) return null;
    // Try hokstats first (benchmark), fallback to internal
    const fromStats = HOKSTATS_COUNTERS.find(e => e.name.toLowerCase() === selected.toLowerCase());
    if (fromStats) return fromStats;
    // Fallback: build from internal HOK_HEROES data
    const hero = HOK_HEROES.find(h => h.name === selected);
    if (!hero) return null;
    return {
      name: hero.name,
      role: hero.role,
      tier: getHeroTier(hero.name),
      counters: hero.counters.map(id => HOK_HEROES.find(h => h.id === id)?.name ?? id),
      counteredBy: hero.counteredBy.map(e => e.name),
    };
  }, [selected]);

  const synergyData = useMemo(() => {
    if (!selected) return [];
    const hero = HOK_HEROES.find(h => h.name === selected);
    return hero?.synergies.slice(0, 3).map(s => s.name) ?? [];
  }, [selected]);

  return (
    <div className="p-4 md:p-6 flex flex-col gap-4 min-h-full">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <span className="text-lg">🎯</span>
          <h2 className="text-xl font-bold text-white">Counter Hero</h2>
          <span className="text-[10px] font-semibold text-white/40 bg-white/5 border border-white/10 px-2 py-0.5 rounded-full">
            hokstats.gg · S16
          </span>
        </div>
        <p className="text-xs text-white/40">Pilih hero untuk melihat counter dan sinergi berdasarkan data internasional</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        {/* Hero selector panel */}
        <div className="lg:w-56 flex-shrink-0 flex flex-col gap-2">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Cari hero..."
            className="bg-[#191919] border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-white/30 outline-none focus:border-[#8000ff]/50 transition-all"
          />
          <div className="bg-[#191919] border border-white/8 rounded-xl overflow-hidden">
            <div className="max-h-[420px] overflow-y-auto divide-y divide-white/5">
              {heroList.map(hero => (
                <button
                  key={hero.id}
                  onClick={() => setSelected(hero.name)}
                  className={`w-full flex items-center gap-2.5 px-3 py-2 text-left transition-all ${
                    selected === hero.name
                      ? 'bg-[#8000ff]/20 text-white'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <img
                    src={hero.avatarUrl}
                    alt={hero.name}
                    className="w-6 h-6 rounded-lg object-cover bg-white/5 flex-shrink-0"
                    onError={e => { (e.target as HTMLImageElement).src = '/heroes/default.webp'; }}
                  />
                  <span className="text-xs font-medium truncate">{hero.name}</span>
                  <span className={`ml-auto text-[9px] font-bold ${ROLE_COLORS[hero.role] ?? ''} px-1.5 py-0.5 rounded flex-shrink-0`}>
                    {hero.role[0]}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Detail panel */}
        <div className="flex-1">
          {!selected ? (
            <div className="h-full min-h-[300px] flex items-center justify-center bg-[#191919] border border-white/8 rounded-xl">
              <div className="text-center text-white/25">
                <p className="text-3xl mb-2">⚔️</p>
                <p className="text-sm">Pilih hero untuk melihat matchup</p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {/* Selected hero header */}
              {(() => {
                const hero = HOK_HEROES.find(h => h.name === selected);
                const tier = getHeroTier(selected);
                return (
                  <div className="bg-[#191919] border border-white/8 rounded-xl p-4 flex items-center gap-3">
                    <img
                      src={hero?.avatarUrl ?? '/heroes/default.webp'}
                      alt={selected}
                      className="w-14 h-14 rounded-xl object-cover bg-white/5"
                      onError={e => { (e.target as HTMLImageElement).src = '/heroes/default.webp'; }}
                    />
                    <div>
                      <h3 className="text-base font-bold text-white">{selected}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        {hero && <span className={`text-xs font-bold px-2 py-0.5 rounded ${ROLE_COLORS[hero.role] ?? 'bg-white/5 text-white/40'}`}>{hero.role}</span>}
                        {tier && <span className={`text-xs font-bold px-2 py-0.5 rounded border ${TIER_COLORS[tier]}`}>Tier {tier}</span>}
                      </div>
                    </div>
                  </div>
                );
              })()}

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {/* Countered by (hero yang mengalahkan kita) */}
                <div className="bg-[#191919] border border-red-500/15 rounded-xl p-4 flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-red-400 font-bold text-sm">🛡️ Di-counter oleh</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    {counterEntry && counterEntry.counteredBy.length > 0 ? (
                      counterEntry.counteredBy.slice(0, 3).map(name => (
                        <HeroChip key={name} name={name} variant="counter" />
                      ))
                    ) : (
                      <p className="text-xs text-white/30 py-4 text-center">Tidak ada data</p>
                    )}
                  </div>
                </div>

                {/* Kuat melawan */}
                <div className="bg-[#191919] border border-amber-500/15 rounded-xl p-4 flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-amber-400 font-bold text-sm">⚔️ Kuat melawan</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    {counterEntry && counterEntry.counters.length > 0 ? (
                      counterEntry.counters.slice(0, 3).map(name => (
                        <HeroChip key={name} name={name} variant="counter" />
                      ))
                    ) : (
                      <p className="text-xs text-white/30 py-4 text-center">Tidak ada data</p>
                    )}
                  </div>
                </div>

                {/* Top sinergi */}
                <div className="bg-[#191919] border border-emerald-500/15 rounded-xl p-4 flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400 font-bold text-sm">🤝 Top Sinergi</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    {synergyData.length > 0 ? (
                      synergyData.map(name => (
                        <HeroChip key={name} name={name} variant="synergy" />
                      ))
                    ) : (
                      <p className="text-xs text-white/30 py-4 text-center">Tidak ada data</p>
                    )}
                  </div>
                </div>
              </div>

              <p className="text-[10px] text-white/20">
                Counter data: hokstats.gg (S16, international server) · Sinergi: data internal project
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
