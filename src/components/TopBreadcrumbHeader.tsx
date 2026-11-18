import { useState, type FocusEvent, type KeyboardEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { Search, ChevronRight, Languages, Type, Globe } from 'lucide-react';
import type { NavView } from './IconRail';

const VIEW_BREADCRUMBS: Record<NavView, string[]> = {
  simulator: ['breadcrumbWorkspace', 'breadcrumbDraftArena'],
  heroes: ['breadcrumbWorkspace', 'breadcrumbHeroDatabase'],
  items: ['breadcrumbWorkspace', 'breadcrumbItemsDatabase'],
  analytics: ['breadcrumbWorkspace', 'breadcrumbMetaScrimLab'],
};

interface TopBreadcrumbHeaderProps {
  activeView: NavView;
  onQuickSearchFocus: () => void;
  quickSearchValue: string;
  onQuickSearchChange: (value: string) => void;
  onQuickSearchBlur?: () => void;
  language: 'en' | 'id';
  onLanguageToggle: () => void;
  nameMode: 'global' | 'title';
  onNameModeToggle: () => void;
  isSearchOpen: boolean;
}

export function TopBreadcrumbHeader({
  activeView,
  onQuickSearchFocus,
  quickSearchValue,
  onQuickSearchChange,
  onQuickSearchBlur,
  language,
  onLanguageToggle,
  nameMode,
  onNameModeToggle,
  isSearchOpen,
}: TopBreadcrumbHeaderProps) {
  const { t } = useTranslation();
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const breadcrumbs = VIEW_BREADCRUMBS[activeView] || [];

  const handleSearchKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape') {
      event.currentTarget.blur();
      onQuickSearchBlur?.();
    }
  };

  const handleSearchFocus = (event: FocusEvent<HTMLInputElement>) => {
    onQuickSearchFocus();
  };

  const handleLanguageSelect = (lang: 'en' | 'id') => {
    if (lang !== language) onLanguageToggle();
    setIsLanguageMenuOpen(false);
  };

  return (
    <header className="top-breadcrumb-header" role="banner">
      <nav className="breadcrumb-nav" aria-label="Breadcrumb">
        <ol className="breadcrumb-list" role="list">
          {breadcrumbs.map((crumbKey, index) => (
            <li key={crumbKey} className="breadcrumb-item">
              {index > 0 && (
                <span className="breadcrumb-separator" aria-hidden="true">
                  <ChevronRight size={12} />
                </span>
              )}
              <span className={index === breadcrumbs.length - 1 ? 'breadcrumb-current' : ''}>
                {t(crumbKey)}
              </span>
            </li>
          ))}
        </ol>
      </nav>

      <div className="header-actions">
        <div className="quick-search-wrapper">
          <Search size={16} aria-hidden="true" className="search-icon" />
          <label htmlFor="global-quick-search" className="sr-only">
            {t('productSearch')}
          </label>
          <input
            id="global-quick-search"
            type="search"
            value={quickSearchValue}
            onChange={(e) => onQuickSearchChange(e.target.value)}
            onFocus={handleSearchFocus}
            onBlur={onQuickSearchBlur}
            onKeyDown={handleSearchKeyDown}
            placeholder={t('productSearch')}
            aria-label={t('productSearch')}
            aria-expanded={isSearchOpen}
            aria-controls="quick-search-modal"
            className="quick-search-input"
            autoComplete="off"
          />
          {quickSearchValue && (
            <button
              type="button"
              onClick={() => onQuickSearchChange('')}
              aria-label={t('clear')}
              className="quick-search-clear"
            >
              {t('clear')}
            </button>
          )}
        </div>

        <div className="language-toggle-wrapper">
          <button
            type="button"
            onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
            aria-expanded={isLanguageMenuOpen}
            aria-haspopup="listbox"
            aria-label={t('language')}
            className="language-toggle-button"
          >
            <Languages size={16} aria-hidden="true" />
            <span className="language-code">{language.toUpperCase()}</span>
          </button>

          {isLanguageMenuOpen && (
            <div className="language-menu" role="listbox" aria-label={t('language')}>
              <button
                type="button"
                role="option"
                aria-selected={language === 'en'}
                onClick={() => handleLanguageSelect('en')}
                className={`language-option ${language === 'en' ? 'is-selected' : ''}`}
              >
                <Globe size={14} aria-hidden="true" />
                <span>English</span>
              </button>
              <button
                type="button"
                role="option"
                aria-selected={language === 'id'}
                onClick={() => handleLanguageSelect('id')}
                className={`language-option ${language === 'id' ? 'is-selected' : ''}`}
              >
                <Globe size={14} aria-hidden="true" />
                <span>Bahasa Indonesia</span>
              </button>
            </div>
          )}
        </div>

        <button
          type="button"
          role="switch"
          aria-checked={nameMode === 'global'}
          aria-label={t('nameMode')}
          onClick={onNameModeToggle}
          className={`name-mode-toggle ${nameMode === 'global' ? 'is-global' : 'is-title'}`}
        >
          {nameMode === 'global' ? (
            <>
              <Globe size={14} aria-hidden="true" />
              <span>{t('globalNames')}</span>
            </>
          ) : (
            <>
              <Type size={14} aria-hidden="true" />
              <span>{t('titleNames')}</span>
            </>
          )}
        </button>
      </div>
    </header>
  );
}

export default TopBreadcrumbHeader;
