import { useEffect, useRef, useState, type MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Sword,
  Users,
  Package,
  BarChart2,
  type LucideIcon,
} from 'lucide-react';
import { slidePill, createPillElement, cleanupPill } from '../motion';

export type NavView = 'simulator' | 'heroes' | 'items' | 'analytics';

interface NavItem {
  id: NavView;
  icon: LucideIcon;
  tooltipKey: string;
  labelKey: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'simulator', icon: Sword, tooltipKey: 'tooltipSimulator', labelKey: 'simulator' },
  { id: 'heroes', icon: Users, tooltipKey: 'tooltipHeroes', labelKey: 'database' },
  { id: 'items', icon: Package, tooltipKey: 'tooltipItems', labelKey: 'items' },
  { id: 'analytics', icon: BarChart2, tooltipKey: 'tooltipAnalytics', labelKey: 'analytics' },
];

interface IconRailProps {
  activeView: NavView;
  onViewChange: (view: NavView) => void;
  isMobile?: boolean;
}

export function IconRail({ activeView, onViewChange, isMobile = false }: IconRailProps) {
  const { t } = useTranslation();
  const railRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<Map<NavView, HTMLButtonElement>>(new Map());
  const pillRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    if (!isMounted || !pillRef.current) return;

    const activeButton = buttonRefs.current.get(activeView);
    if (!activeButton) return;

    const pill = pillRef.current;
    const rail = railRef.current;
    if (!rail) return;

    if (!isMobile) {
      rail.insertBefore(pill, rail.firstChild);
    }

    const animatePill = () => {
      requestAnimationFrame(() => {
        slidePill(pill, activeButton);
      });
    };

    animatePill();
  }, [activeView, isMounted, isMobile]);

  useEffect(() => {
    const pill = pillRef.current;
    return () => {
      if (pill) cleanupPill(pill);
    };
  }, []);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, view: NavView) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onViewChange(view);
    }
  };

  if (isMobile) {
    return (
      <nav
        className="icon-rail icon-rail-mobile"
        role="navigation"
        aria-label={t('workspace')}
        data-testid="icon-rail-mobile"
      >
        {NAV_ITEMS.map(({ id, icon: Icon, tooltipKey, labelKey }) => (
          <button
            key={id}
            type="button"
            ref={(el) => { if (el) buttonRefs.current.set(id, el); }}
            onClick={() => onViewChange(id)}
            onKeyDown={(e) => handleKeyDown(e, id)}
            className={`icon-rail-button ${activeView === id ? 'is-active' : ''}`}
            aria-label={t(tooltipKey)}
            aria-current={activeView === id ? 'page' : undefined}
            data-view={id}
            title={t(tooltipKey)}
          >
            <Icon size={20} aria-hidden="true" />
            <span className="icon-rail-tooltip">{t(labelKey)}</span>
          </button>
        ))}
        <div
          ref={pillRef}
          className="nav-pill mobile-pill"
          aria-hidden="true"
        />
      </nav>
    );
  }

  return (
    <nav
      ref={railRef}
      className="icon-rail sticky top-0 h-screen"
      role="navigation"
      aria-label={t('workspace')}
      data-testid="icon-rail"
    >
      <div
        ref={pillRef}
        className="nav-pill"
        aria-hidden="true"
      />
      {NAV_ITEMS.map(({ id, icon: Icon, tooltipKey, labelKey }) => (
        <button
          key={id}
          type="button"
          ref={(el) => { if (el) buttonRefs.current.set(id, el); }}
          onClick={() => onViewChange(id)}
          onKeyDown={(e) => handleKeyDown(e, id)}
          className={`icon-rail-button ${activeView === id ? 'is-active' : ''}`}
          aria-label={t(tooltipKey)}
          aria-current={activeView === id ? 'page' : undefined}
          data-view={id}
        >
          <Icon size={22} aria-hidden="true" />
          <span className="icon-rail-tooltip">{t(labelKey)}</span>
        </button>
      ))}
    </nav>
  );
}

export default IconRail;
