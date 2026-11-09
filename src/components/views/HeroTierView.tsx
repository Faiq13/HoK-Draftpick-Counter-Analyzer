import React, { useState, useMemo } from 'react';
import { HOK_TIER_DATA, HeroTierEntry } from '../../data/hokTierData';
import { getHeroes } from '../../services/heroAdapter';

const HOK_HEROES = getHeroes();

const LANE_FILTERS = ['All', 'Clash', 'Mid', 'Farm', 'Roaming', 'Jungling'] as const;
type LaneFilter = typeof LANE_FILTERS[number];

const TIER_COLORS: Record<string, string> = {
  S: 'text-amber-400 bg-amber-400/10 border-amber-400/30',
  A: 'text-orange-400 bg-orange-400/10 border-orange-400/30',
  B: 'text-blue-400 bg-blue-400/10 border-blue-400/30',
  C: 'text-slate-400 bg-slate-400/10 border-slate-400/20',
};

type SortKey = 'tier' | 'winRate' | 'pickRate' | 'banRate' | 'name';
type SortDir = 'asc' | 'desc';

const tierOrder: Record<string, number> = { S: 0, A: 1, B: 2, C: 3 };

function parsePercent(s: string) { return parseFloat(s.replace('%', '')); }

// Map HoK Camp role string to lane filter label
function matchLane(entry: HeroTierEntry, filter: LaneFilter): boolean {
  if (filter === 'All') return true;
  const r = entry.role.toLowerCase();
  if (filter === 'Clash') return r.includes('fighter') || r.includes('tank');
  if (filter === 'Mid') return r.includes('mage') && !r.includes('support');
  if (filter === 'Farm') return r.includes('marksman');
  if (filter === 'Roaming') return r.includes('support');
  if (filter === 'Jungling') return r.includes('assassin');
  return true;
}

// Find avatar URL from internal hero data
function findAvatarUrl(name: string): string {
  const normalized = name.toLowerCase().replace(/['\s.]/g, '-').replace(/--+/g, '-');
  const hero = HOK_HEROES.find(h =>
    h.name.toLowerCase() === name.toLowerCase() ||
    h.id === normalized ||
    h.id.includes(normalized.slice(0, 5))
  );
  return hero?.avatarUrl ?? '/heroes/default.webp';
}

export const HeroTierView: React.FC = () => {
  const [laneFilter, setLaneFilter] = useState<LaneFilter>('All');
  const [sortKey, setSortKey] = useState<SortKey>('tier');
  const [sortDir, setSortDir] = useState<SortDir>('asc');

  const handleSort = (key: SortKey) => {
    if (sortKey === key) setSortDir(d => d === 'asc' ? 'desc' : 'asc');
    else { setSortKey(key); setSortDir(key === 'tier' || key === 'name' ? 'asc' : 'desc'); }
  };

  const data = useMemo(() => {
    // Deduplicate by name (keep first occurrence = higher tier from camp data)
    const seen = new Set<string>();
    const filtered = HOK_TIER_DATA.filter(e => {
      if (!matchLane(e, laneFilter)) return false;
      if (seen.has(e.name)) return false;
      seen.add(e.name);
      return true;
    });

    return filtered.sort((a, b) => {
      let cmp = 0;
      if (sortKey === 'tier') cmp = tierOrder[a.tier] - tierOrder[b.tier];
      else if (sortKey === 'name') cmp = a.name.localeCompare(b.name);
      else if (sortKey === 'winRate') cmp = parsePercent(a.winRate) - parsePercent(b.winRate);
      else if (sortKey === 'pickRate') cmp = parsePercent(a.pickRate) - parsePercent(b.pickRate);
      else if (sortKey === 'banRate') cmp = parsePercent(a.banRate) - parsePercent(b.banRate);
      return sortDir === 'asc' ? cmp : -cmp;
    });
  }, [laneFilter, sortKey, sortDir]);

  const SortIcon = ({ k }: { k: SortKey }) => {
    if (sortKey !== k) return <span className="text-white/20 ml-1">↕</span>;
    return <span className="text-[#c084fc] ml-1">{sortDir === 'asc' ? '↑' : '↓'}</span>;
  };

  const th = (label: string, key: SortKey) => (
    <th
      className="px-3 py-2.5 text-left text-[11px] font-bold text-white/40 uppercase tracking-wider cursor-pointer hover:text-white/70 transition-colors whitespace-nowrap select-none"
      onClick={() => handleSort(key)}
    >
      {label}<SortIcon k={key} />
    </th>
  );

  return (
    <div className="p-5 md:p-7 flex flex-col gap-5 min-h-full bg-[#0B0E14]">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <span className="text-lg">🏆</span>
          <h2 className="text-xl font-bold text-white">Hero Tier</h2>
          <span className="text-[10px] font-semibold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2 py-0.5 rounded-full">
            S16 · Update 10/29/2026
          </span>
        </div>
        <p className="text-xs text-white/40">Statistik resmi dari HoK Camp — Diamond tier ke atas · 120 hero</p>
      </div>

      {/* Lane filter tabs */}
      <div className="flex gap-1 flex-wrap">
        {LANE_FILTERS.map(f => (
          <button
            key={f}
            onClick={() => setLaneFilter(f)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              laneFilter === f
                ? 'bg-[#8000ff]/25 border border-[#8000ff]/50 text-[#c084fc]'
                : 'text-white/40 border border-white/10 hover:text-white/70 hover:bg-white/5'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="bg-[#111827] border border-[#263247] rounded-xl overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,.2)]">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b border-white/8 bg-white/[0.02]">
              <tr>
                {th('Hero', 'name')}
                <th className="px-3 py-2.5 text-left text-[11px] font-bold text-white/40 uppercase tracking-wider whitespace-nowrap">Role</th>
                {th('Tier', 'tier')}
                {th('Win%', 'winRate')}
                {th('Pick%', 'pickRate')}
                {th('Ban%', 'banRate')}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {data.map((entry, i) => (
                <tr key={`${entry.name}-${i}`} className="hover:bg-white/[0.03] transition-colors">
                  <td className="px-3 py-2.5">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={findAvatarUrl(entry.name)}
                        alt={entry.name}
                        className="w-7 h-7 rounded-lg object-cover bg-white/5 flex-shrink-0"
                        onError={e => { (e.target as HTMLImageElement).src = '/heroes/default.webp'; }}
                      />
                      <span className="font-medium text-white/90 text-sm">{entry.name}</span>
                    </div>
                  </td>
                  <td className="px-3 py-2.5 text-xs text-white/50">{entry.role}</td>
                  <td className="px-3 py-2.5">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded border ${TIER_COLORS[entry.tier]}`}>
                      {entry.tier}
                    </span>
                  </td>
                  <td className="px-3 py-2.5 text-sm font-mono text-white/70">{entry.winRate}</td>
                  <td className="px-3 py-2.5 text-sm font-mono text-white/70">{entry.pickRate}</td>
                  <td className="px-3 py-2.5 text-sm font-mono text-white/70">{entry.banRate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-4 py-2 border-t border-white/5 text-[10px] text-white/25">
          {data.length} hero ditampilkan · Sumber: camp.honorofkings.com
        </div>
      </div>
    </div>
  );
};
