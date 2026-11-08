import { useEffect, useMemo, useRef, useState } from 'react';
import type { DraftHero } from '../types/draft';

export type SearchResult =
  | { type: 'hero'; id: string; name: string; role: string; tier: string; avatar: string }
  | { type: 'item'; id: string; name: string; category: string; price: number; icon: string };

type SearchItem = Omit<Extract<SearchResult, { type: 'item' }>, 'id' | 'type'> & { id: string | number };

interface QuickSearchModalProps {
  heroes: DraftHero[];
  items: SearchItem[];
  onClose: () => void;
  onNavigate: (target: 'hero' | 'item' | 'counter', id: string) => void;
}

export function QuickSearchModal({ heroes, items, onClose, onNavigate }: QuickSearchModalProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const query = searchTerm.toLowerCase().trim();
  const results = useMemo<SearchResult[]>(() => {
    if (!query) return [];
    return [
      ...heroes.filter(hero => `${hero.chinese_hero_name} ${hero.english_hero_name} ${hero.roles} ${hero.popularity}`.toLowerCase().includes(query)).map(hero => ({
        type: 'hero' as const,
        id: String(hero.id),
        name: hero.english_hero_name || hero.chinese_hero_name,
        role: hero.roles,
        tier: hero.popularity,
        avatar: hero.image_url,
      })),
      ...items.filter(item => `${item.name} ${item.category}`.toLowerCase().includes(query)).map(item => ({ ...item, type: 'item' as const, id: String(item.id) })),
    ];
  }, [heroes, items, query]);

  useEffect(() => {
    inputRef.current?.focus();
    const handleEscape = (event: KeyboardEvent) => event.key === 'Escape' && onClose();
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/70 p-4 pt-[12vh] backdrop-blur-sm" role="presentation" onMouseDown={event => event.target === event.currentTarget && onClose()}>
    <section role="dialog" aria-modal="true" aria-labelledby="quick-search-title" className="w-full max-w-2xl overflow-hidden rounded-2xl border border-white/[0.12] bg-[#111827] shadow-2xl">
      <div className="flex items-center gap-3 border-b border-white/[0.08] p-4"><span aria-hidden="true" className="text-slate-500">⌕</span><input ref={inputRef} value={searchTerm} onChange={event => setSearchTerm(event.target.value)} placeholder="Search heroes and items..." aria-label="Search heroes and items" className="min-w-0 flex-1 bg-transparent text-white outline-none placeholder:text-slate-500"/><button type="button" onClick={onClose} aria-label="Close global search" className="rounded-lg px-2 text-xl text-slate-500 hover:text-white">×</button></div>
      <h2 id="quick-search-title" className="sr-only">Global search results</h2>
      <div className="max-h-[min(520px,65vh)] overflow-y-auto p-3">{query && results.length === 0 && <p className="py-12 text-center text-sm text-slate-400">Tidak ada hero atau item yang cocok dengan '{searchTerm.trim()}'</p>}{!query && <p className="py-12 text-center text-sm text-slate-500">Ketik nama hero, role, tier, item, atau kategori.</p>}{results.map(result => <button type="button" key={`${result.type}-${result.id}`} onClick={() => { onNavigate(result.type === 'hero' ? 'hero' : 'item', result.id); onClose(); }} className="flex w-full items-center gap-3 rounded-xl p-3 text-left hover:bg-cyan-300/[0.08]">{result.type === 'hero' ? <img src={result.avatar} alt={result.name} className="h-11 w-11 rounded-lg object-cover"/> : <span className="grid h-11 w-11 place-items-center rounded-lg bg-white/[0.06] text-xl" aria-hidden="true">{result.icon}</span>}<span className="min-w-0 flex-1"><strong className="block truncate text-sm text-slate-100">{result.name}</strong><span className="block truncate text-xs text-slate-500">{result.type === 'hero' ? `${result.role} · Tier ${result.tier}` : `${result.category} · ${result.price.toLocaleString()}`}</span></span><span className="text-[10px] font-bold uppercase text-cyan-300">{result.type}</span></button>)}</div>
    </section>
  </div>;
}
