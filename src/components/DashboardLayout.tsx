import React, { useEffect, useRef, useState } from 'react';
import { Command, Menu, Search, X } from 'lucide-react';
import Sidebar, { type AppView } from './Sidebar';
import { GlassWorkspace } from './ui/GlassWorkspace';

interface DashboardLayoutProps { currentView: AppView; onViewChange: (view: AppView) => void; language: 'en' | 'id'; onLanguageChange: (language: 'en' | 'id') => void; children?: React.ReactNode; }
const viewTitles: Record<AppView, { eyebrow: string; title: string; description: string }> = {
  dashboard: { eyebrow: 'Competitive workspace', title: 'Draft Board', description: 'Build and review your next ranked draft.' },
  roster: { eyebrow: 'Hero intelligence', title: 'Hero Roster', description: 'Browse the current hero pool and meta context.' },
  counter: { eyebrow: 'Matchup intelligence', title: 'Counter Matrix', description: 'Find answers before the opposing draft locks in.' },
  items: { eyebrow: 'Build intelligence', title: 'Item Lab', description: 'Compare item paths for each draft situation.' },
};

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ currentView, onViewChange, language, onLanguageChange, children }) => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const pageCopy = viewTitles[currentView];
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => { if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); setSearchOpen(true); } if (event.key === 'Escape') { setSearchOpen(false); setMobileSidebarOpen(false); } };
    window.addEventListener('keydown', onKey); return () => window.removeEventListener('keydown', onKey);
  }, []);
  useEffect(() => { if (searchOpen) searchInputRef.current?.focus(); }, [searchOpen]);
  const changeView = (view: AppView) => { onViewChange(view); setMobileSidebarOpen(false); };
  return <GlassWorkspace backgroundImage="/bg-gloss.jpg">
    <div className="flex min-h-screen w-full overflow-x-hidden text-slate-100">
      {mobileSidebarOpen && <button type="button" aria-label="Close navigation" onClick={() => setMobileSidebarOpen(false)} className="fixed inset-0 z-30 bg-black/70 md:hidden" />}
      <div className={`fixed inset-y-0 left-0 z-40 transition-transform duration-200 md:relative md:z-auto md:translate-x-0 ${mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}><Sidebar currentView={currentView} onViewChange={changeView} /></div>
      <div className="flex min-h-screen min-w-0 flex-1 flex-col">
        <header className="gw-panel relative z-20 flex min-h-[86px] items-center justify-between gap-4 border-x-0 border-t-0 rounded-none px-8 py-4 max-lg:px-5 max-md:min-h-[76px] max-md:px-4">
          <div className="flex min-w-0 items-center gap-3"><button type="button" aria-label={mobileSidebarOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMobileSidebarOpen(open => !open)} className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/[0.12] bg-white/[0.03] text-slate-300 md:hidden">{mobileSidebarOpen ? <X size={19} aria-hidden="true" /> : <Menu size={19} aria-hidden="true" />}</button><div className="min-w-0"><p className="truncate text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300">{pageCopy.eyebrow}</p><h1 className="mt-1 truncate text-xl font-black tracking-tight text-white md:text-2xl">{pageCopy.title}</h1><p className="hidden truncate text-xs text-slate-400 md:block">{pageCopy.description}</p></div></div>
          <div className="flex shrink-0 items-center gap-3"><div className="flex rounded-xl border border-white/[0.12] bg-white/[0.06] p-1" role="group" aria-label="Language"><button type="button" onClick={() => onLanguageChange('en')} className={`rounded-lg px-2 py-1 text-xs font-bold ${language === 'en' ? 'bg-cyan-300 text-slate-950' : 'text-slate-300'}`}>EN</button><button type="button" onClick={() => onLanguageChange('id')} className={`rounded-lg px-2 py-1 text-xs font-bold ${language === 'id' ? 'bg-cyan-300 text-slate-950' : 'text-slate-300'}`}>ID</button></div><button type="button" onClick={() => setSearchOpen(open => !open)} aria-expanded={searchOpen} aria-label="Open quick search" className="flex h-11 min-w-[220px] items-center gap-3 rounded-xl border border-white/[0.1] bg-white/[0.06] px-3 text-left text-slate-300 max-lg:min-w-0 max-lg:w-11 max-lg:justify-center max-lg:px-0"><Search size={17} aria-hidden="true" /><span className="flex-1 text-sm max-lg:hidden">Quick search...</span><span className="hidden items-center gap-1 rounded border border-white/[0.1] px-1.5 py-0.5 text-[10px] text-slate-400 lg:inline-flex"><Command size={10} aria-hidden="true" />K</span></button></div>\n           {searchOpen && <div className="absolute right-8 top-[calc(100%+12px)] z-50 w-[min(420px,calc(100vw-32px))] rounded-2xl border border-white/[0.12] bg-[#111827] p-3 shadow-2xl max-md:right-4"><label className="flex h-12 items-center gap-3 rounded-xl border border-cyan-300/30 bg-[#172235] px-3 text-slate-400"><Search size={17} aria-hidden="true" /><span className="sr-only">Search heroes and items</span><input ref={searchInputRef} type="search" aria-label="Search heroes and items" placeholder="Search heroes and items" className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-slate-500" /><button type="button" aria-label="Close search" onClick={() => setSearchOpen(false)} className="grid h-8 w-8 place-items-center rounded-lg"><X size={15} aria-hidden="true" /></button></label><p className="px-1 pb-1 pt-3 text-[11px] text-slate-400">Search hero and item catalog.</p></div>}
        </header>
        <main id="main-content" className="min-h-0 flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  </GlassWorkspace>;
};
export default DashboardLayout;

