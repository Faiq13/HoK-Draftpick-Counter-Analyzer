import React, { useState } from 'react';
import type { Hero } from '../services/heroAdapter';

interface HeroAvatarProps {
  hero: Hero;
  /** Ukuran + border container, mis. "w-10 h-10 rounded-md border border-slate-600". */
  className?: string;
  /** Ukuran teks inisial saat gambar gagal dimuat. */
  initialsClassName?: string;
}

const failedAvatarCache = new Set<string>();

const getRoleColor = (role: string) => {
  switch (role) {
    case 'Roam': return 'bg-emerald-600';
    case 'Clash': return 'bg-amber-600';
    case 'Mid': return 'bg-purple-600';
    case 'Farm': return 'bg-blue-600';
    case 'Jungle': return 'bg-rose-600';
    default: return 'bg-slate-600';
  }
};

const getInitials = (name: string) => {
  const parts = name.replace(/[^a-zA-Z0-9 ]/g, '').split(' ').filter(Boolean);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
};

/**
 * Avatar hero dengan fallback inisial berwarna role.
 *
 * Container selalu punya ukuran dari `className`, jadi saat file .webp gagal
 * dimuat (404 / format tidak didukung) layout grid tidak bergeser.
 */
export const HeroAvatar: React.FC<HeroAvatarProps> = ({
  hero,
  className = 'w-10 h-10 rounded-md',
  initialsClassName = 'text-[10px]',
}) => {
  const [failed, setFailed] = useState(() => failedAvatarCache.has(hero.avatarUrl));

  return (
    <div className={`relative overflow-hidden flex items-center justify-center bg-slate-700 ${className}`}>
      {!failed ? (
        <img
          src={hero.avatarUrl}
          alt={hero.name}
          loading="lazy"
          decoding="async"
          draggable={false}
          className="w-full h-full object-cover"
          onError={() => {
            failedAvatarCache.add(hero.avatarUrl);
            setFailed(true);
          }}
        />
      ) : (
        <div
          className={`w-full h-full flex flex-col items-center justify-center text-white font-bold ${getRoleColor(hero.role)} ${initialsClassName}`}
          aria-label={hero.name}
        >
          <span>{getInitials(hero.name)}</span>
        </div>
      )}
    </div>
  );
};
