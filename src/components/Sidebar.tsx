import React from 'react';
import {
  Boxes,
  Crosshair,
  Gamepad2,
  LayoutDashboard,
  Swords,
  type LucideIcon,
} from 'lucide-react';

export type AppView = 'dashboard' | 'roster' | 'counter' | 'items';

interface SidebarItem {
  id: AppView;
  label: string;
  description: string;
  icon: LucideIcon;
}

interface SidebarProps {
  currentView: AppView;
  onViewChange: (view: AppView) => void;
}

const sidebarItems: SidebarItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    description: 'Draft Board',
    icon: LayoutDashboard,
  },
  {
    id: 'roster',
    label: 'Hero Roster',
    description: 'Meta Catalog',
    icon: Swords,
  },
  {
    id: 'counter',
    label: 'Counter Matrix',
    description: 'Matchup Intel',
    icon: Crosshair,
  },
  {
    id: 'items',
    label: 'Item Lab',
    description: 'Build Database',
    icon: Boxes,
  },
];

export const Sidebar: React.FC<SidebarProps> = ({ currentView, onViewChange }) => {
  return (
    <aside className="flex h-full w-[264px] shrink-0 flex-col border-r border-white/[0.08] bg-[#111827] px-4 py-5 text-slate-100">
      <div className="flex items-center gap-3 border-b border-white/[0.08] px-2 pb-6">
        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-cyan-300/30 bg-cyan-400/10 text-cyan-300 shadow-[0_0_24px_rgba(34,211,238,0.12)]">
          <Gamepad2 size={22} strokeWidth={1.8} aria-hidden="true" />
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-black tracking-[0.12em] text-white">HoK</p>
          <p className="truncate text-[10px] font-bold uppercase tracking-[0.14em] text-cyan-300">Draft Analyzer</p>
        </div>
      </div>

      <div className="px-2 pb-3 pt-7">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Main Menu</p>
      </div>

      <nav aria-label="Main navigation" className="space-y-2">
        {sidebarItems.map(({ id, label, description, icon: Icon }) => {
          const isActive = id === currentView;

          return (
            <button
              key={id}
              type="button"
              aria-current={isActive ? 'page' : undefined}
              onClick={() => onViewChange(id)}
              className={`group flex min-h-[58px] w-full items-center gap-3 rounded-xl border px-3 text-left transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 ${
                isActive
                  ? 'border-cyan-300/25 bg-cyan-300/10 text-white shadow-[inset_3px_0_0_#67e8f9]'
                  : 'border-transparent text-slate-400 hover:border-white/[0.08] hover:bg-white/[0.04] hover:text-white active:bg-white/[0.08]'
              }`}
            >
              <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg transition ${isActive ? 'bg-cyan-300/15 text-cyan-300' : 'bg-white/[0.04] text-slate-500 group-hover:text-slate-300'}`}>
                <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-semibold">{label}</span>
                <span className={`mt-0.5 block text-[11px] ${isActive ? 'text-cyan-200/70' : 'text-slate-500 group-hover:text-slate-400'}`}>
                  {description}
                </span>
              </span>
              {isActive && <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" aria-hidden="true" />}
            </button>
          );
        })}
      </nav>

      <div className="mt-auto space-y-3 border-t border-white/[0.08] pt-4">
        <div className="rounded-xl border border-emerald-300/20 bg-emerald-300/[0.06] p-3">
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-300" aria-hidden="true" />
            Adapter online
          </div>
          <p className="mt-1 text-[11px] leading-5 text-slate-400">Hero data is ready for analysis.</p>
        </div>
        <p className="px-2 text-[10px] uppercase tracking-[0.14em] text-slate-600">HoK Draft Analyzer</p>
      </div>
    </aside>
  );
};

export default Sidebar;
