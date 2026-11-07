import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getHeroes, type Hero } from '../services/heroAdapter';

const HOK_HEROES = getHeroes();
import { Search } from 'lucide-react';
import { HeroAvatar } from './HeroAvatar';

interface HeroGridProps {
  pickedOrBannedIds: string[];
  onSelectHero: (hero: Hero) => void;
  activeSlotInfo: string | null;
}

export const HeroGrid: React.FC<HeroGridProps> = ({
  pickedOrBannedIds,
  onSelectHero,
  activeSlotInfo,
}) => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState<string>(t('heroCatalog.allRoles'));

  const filteredHeroes = HOK_HEROES.filter(hero => {
    const matchesSearch = hero.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = selectedRole === t('heroCatalog.allRoles') || hero.role === selectedRole;
    return matchesSearch && matchesRole;
  });

  return (
    <div className="bg-[#111827] border border-[#263247] rounded-2xl p-5 shadow-[0_16px_40px_rgba(0,0,0,.25)]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-3">
          <h2 className="font-bold text-base text-white font-display tracking-tight">
            {t('heroCatalog.title')}
          </h2>
          {activeSlotInfo && (
            <span className="text-xs bg-violet-500/15 border border-violet-500/35 text-violet-300 px-3 py-1 rounded-full font-semibold font-display">
              {t('heroCatalog.activeSlot', { slot: activeSlotInfo })}
            </span>
          )}
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
          <input
            type="text"
            placeholder={t('heroCatalog.searchPlaceholder')}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-950/60 border border-slate-700/50 rounded-xl pl-9 pr-4 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition-all duration-200"
          />
        </div>
      </div>

      {/* Instruction */}
      {activeSlotInfo && (
        <div className="mb-4 p-3 bg-violet-500/8 border border-violet-500/25 rounded-xl">
          <p className="text-sm text-violet-300 text-center font-medium font-display leading-relaxed">
            {t('heroCatalog.instruction')}
          </p>
        </div>
      )}

      {/* Role Filter Tabs */}
      <div className="flex gap-1.5 overflow-x-auto pb-3 mb-4 border-b border-slate-800/60">
        {[t('heroCatalog.allRoles'), 'Roam', 'Clash', 'Mid', 'Farm', 'Jungle'].map((role) => (
          <button
            key={role}
            onClick={() => setSelectedRole(role)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 whitespace-nowrap border font-display ${
              selectedRole === role
                ? 'bg-cyan-400 text-[#07111f] border-cyan-300 shadow-lg shadow-cyan-500/25'
                : 'bg-slate-900/60 text-slate-400 border-slate-700/50 hover:border-slate-600 hover:text-slate-200'
            }`}
          >
            {role === t('heroCatalog.allRoles') ? role : t(`roles.${role}`)}
          </button>
        ))}
      </div>

      {/* Hero Grid */}
      <div className="grid grid-cols-5 sm:grid-cols-7 md:grid-cols-9 lg:grid-cols-11 xl:grid-cols-13 gap-1.5">
        {filteredHeroes.map((hero) => {
          const isDisabled = pickedOrBannedIds.includes(hero.id);
          return (
            <div
              key={hero.id}
              onClick={() => !isDisabled && onSelectHero(hero)}
              className={`group relative rounded-xl p-1.5 flex flex-col items-center transition-all duration-200 ${
                isDisabled
                  ? 'opacity-20 grayscale cursor-not-allowed bg-slate-900/30 border border-slate-800/40'
                  : 'bg-[#172235] border border-[#2b3b54] hover:bg-cyan-400/10 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/15 hover:-translate-y-0.5 cursor-pointer'
              }`}
            >
              {/* Role Badge */}
              <div className="absolute top-1 right-1 z-10">
                <span className="px-1 py-0.5 text-[7px] font-bold uppercase tracking-wider rounded-md bg-black/70 text-violet-300 border border-violet-900/50">
                  {t(`roles.${hero.role}`)}
                </span>
              </div>

              {/* Hero Avatar */}
              <div className="relative w-10 h-10 rounded-lg overflow-hidden mb-1.5 ring-1 ring-slate-700/60 group-hover:ring-violet-500/60 transition-all duration-200 flex items-center justify-center bg-slate-800">
                <HeroAvatar
                  hero={hero}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  initialsClassName="text-[9px] font-bold"
                />
              </div>

              {/* Hero Name */}
              <span className="font-semibold text-[9px] text-slate-400 text-center truncate w-full group-hover:text-white transition-colors duration-200 leading-tight font-display">
                {hero.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
