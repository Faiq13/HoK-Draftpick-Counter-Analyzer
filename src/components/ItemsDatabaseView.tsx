import { useEffect, useMemo, useRef, useState, type ChangeEvent, type KeyboardEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { Search, ChevronDown, X, Shield, Sparkles, Zap, Heart, Sword, type LucideIcon } from 'lucide-react';
import { getItemIconUrl, ITEM_FALLBACK_SVG } from '../lib/counterItems';
import type { SearchItem } from '../types/draft';
import { slidePill, createPillElement, cleanupPill } from '../motion';
import { FilterDropdown } from './FilterDropdown';

interface ItemCategory {
  id: string;
  labelKey: string;
  icon: LucideIcon;
  defaultCategory: string;
}

const ITEM_CATEGORIES: ItemCategory[] = [
  { id: 'all', labelKey: 'itemsCategoryAll', icon: Sparkles, defaultCategory: 'All' },
  { id: 'physical', labelKey: 'itemsCategoryPhysical', icon: Sword, defaultCategory: 'Physical' },
  { id: 'magic', labelKey: 'itemsCategoryMagic', icon: Sparkles, defaultCategory: 'Magic' },
  { id: 'defense', labelKey: 'itemsCategoryDefense', icon: Shield, defaultCategory: 'Defense' },
  { id: 'movement', labelKey: 'itemsCategoryMovement', icon: Zap, defaultCategory: 'Movement' },
];

const CATEGORY_MAP: Record<string, string> = {
  Physical: 'physical',
  Magic: 'magic',
  Defense: 'defense',
  Movement: 'movement',
};

const TIER_ORDER = ['Tier 1', 'Tier 2', 'Tier 3'];

interface ItemsDatabaseViewProps {
  items: SearchItem[];
  highlightedItemId: string | null;
  onHighlightClear: () => void;
  nameMode: 'global' | 'title';
}

export function ItemsDatabaseView({
  items,
  highlightedItemId,
  onHighlightClear,
  nameMode,
}: ItemsDatabaseViewProps) {
  const { t, i18n } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeTier, setActiveTier] = useState('all');
  const [sortKey, setSortKey] = useState<'name' | 'category' | 'tier' | 'price'>('name');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const categoryTabsRef = useRef<HTMLDivElement>(null);
  const categoryPillRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    if (!isMounted || !categoryPillRef.current) return;

    const activeButton = buttonRefs.current.get(activeCategory);
    if (!activeButton) return;

    const pill = categoryPillRef.current;
    const container = categoryTabsRef.current;
    if (!container) return;

    container.insertBefore(pill, container.firstChild);

    requestAnimationFrame(() => {
      slidePill(pill, activeButton);
    });
  }, [activeCategory, isMounted]);

  useEffect(() => {
    const pill = categoryPillRef.current;
    return () => {
      if (pill) cleanupPill(pill);
    };
  }, []);

  useEffect(() => {
    if (highlightedItemId) {
      const item = items.find(i => String(i.id) === highlightedItemId);
      if (item) {
        const category = CATEGORY_MAP[item.category] || 'other';
        setActiveCategory(category);
        setActiveTier('all');
        setSearchQuery('');
      }
      onHighlightClear();
    }
  }, [highlightedItemId, items, onHighlightClear]);

  const filteredItems = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return items
      .filter((item) => {
        const matchesSearch = !query || item.name.toLowerCase().includes(query) || item.category.toLowerCase().includes(query);
        const matchesCategory = activeCategory === 'all' || CATEGORY_MAP[item.category] === activeCategory;
        const matchesTier = activeTier === 'all' || item.tier === activeTier;
        return matchesSearch && matchesCategory && matchesTier;
      })
      .sort((a, b) => {
        const direction = sortDirection === 'asc' ? 1 : -1;
        let aVal: string | number = '';
        let bVal: string | number = '';

        switch (sortKey) {
          case 'name':
            aVal = a.name.toLowerCase();
            bVal = b.name.toLowerCase();
            break;
          case 'category':
            aVal = (CATEGORY_MAP[a.category] || 'other');
            bVal = (CATEGORY_MAP[b.category] || 'other');
            break;
          case 'tier':
            aVal = TIER_ORDER.indexOf(a.tier || '');
            bVal = TIER_ORDER.indexOf(b.tier || '');
            break;
          case 'price':
            aVal = a.price;
            bVal = b.price;
            break;
        }

        if (aVal < bVal) return -1 * direction;
        if (aVal > bVal) return 1 * direction;
        return 0;
      });
  }, [items, searchQuery, activeCategory, activeTier, sortKey, sortDirection]);

  const uniqueTiers = useMemo(() => [...new Set(items.map(i => i.tier).filter((t): t is string => Boolean(t)))].sort((a, b) => TIER_ORDER.indexOf(a) - TIER_ORDER.indexOf(b)), [items]);

  const selectSort = (key: 'name' | 'category' | 'tier' | 'price') => {
    if (sortKey === key) setSortDirection(d => d === 'asc' ? 'desc' : 'asc');
    else { setSortKey(key); setSortDirection(key === 'name' || key === 'category' ? 'asc' : 'desc'); }
  };

  const clearFilters = () => {
    setSearchQuery('');
    setActiveCategory('all');
    setActiveTier('all');
  };

  const getCategoryLabel = (category: string) => {
    const cat = ITEM_CATEGORIES.find(c => c.id === category);
    return cat ? t(cat.labelKey) : category;
  };

  const getCategoryIcon = (itemCategory: string): LucideIcon => {
    const mapped = CATEGORY_MAP[itemCategory] || 'other';
    const cat = ITEM_CATEGORIES.find(c => c.id === mapped);
    return cat?.icon || Heart;
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, categoryId: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setActiveCategory(categoryId);
    }
  };

  return (
    <section className="surface-card database-card items-database-view" aria-labelledby="items-database-heading">
      <div className="database-intro">
        <div>
          <p className="section-kicker">{t('rosterIndex')}</p>
          <h2 id="items-database-heading" className="database-title">
            {filteredItems.length} {t('items')}
          </h2>
        </div>
        <button type="button" className="clear-button" onClick={clearFilters}>
          {t('clear')} <X size={14} aria-hidden="true" />
        </button>
      </div>

      {/* Category tabs - full width row above search/filter */}
      <div className="category-tabs-row" role="tablist" aria-label={t('itemsCategory')}>
        <div ref={categoryTabsRef} className="category-tabs-full" role="presentation">
          <div
            ref={categoryPillRef}
            className="nav-pill category-pill-full"
            aria-hidden="true"
          />
          {ITEM_CATEGORIES.map(({ id, labelKey, icon: Icon }) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={activeCategory === id}
              aria-controls={`category-panel-${id}`}
              id={`category-tab-${id}`}
              ref={(el) => { if (el) buttonRefs.current.set(id, el); }}
              onClick={() => setActiveCategory(id)}
              onKeyDown={(e) => handleKeyDown(e, id)}
              className={`category-tab-full ${activeCategory === id ? 'is-active' : ''}`}
              data-category={id}
            >
              <Icon size={16} aria-hidden="true" />
              <span>{t(labelKey)}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="filter-row">
        <label className="filter-field filter-wide" htmlFor="items-search">
          <span>{t('search')}</span>
          <div className="field-with-icon">
            <Search size={15} aria-hidden="true" />
            <input
              id="items-search"
              type="search"
              value={searchQuery}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
              placeholder={t('itemsSearchPlaceholder')}
              aria-label={t('itemsSearchPlaceholder')}
              className="filter-input"
            />
          </div>
        </label>

        <FilterDropdown label={t('itemsTierFilter')} value={activeTier} onChange={setActiveTier}
          options={[{ value: 'all', label: t('itemsTierAll') }, ...uniqueTiers.map(tier => ({ value: tier, label: tier }))]} />
      </div>

      <div className="table-wrap">
        {filteredItems.length === 0 ? (
          <div className="no-results" role="status">
            <p>{t('itemsNoResults')}</p>
            <span>{searchQuery ? `"${searchQuery}"` : ''}</span>
          </div>
        ) : (
          <table className="meta-table" role="grid">
            <thead>
              <tr>
                <th scope="col">
                  <button type="button" onClick={() => selectSort('name')} className="sortable-header">
                    {t('items')} {sortKey === 'name' ? (sortDirection === 'asc' ? '↑' : '↓') : ''}
                  </button>
                </th>
                <th scope="col">
                  <button type="button" onClick={() => selectSort('category')} className="sortable-header">
                    {t('itemsCategory')} {sortKey === 'category' ? (sortDirection === 'asc' ? '↑' : '↓') : ''}
                  </button>
                </th>
                <th scope="col">
                  <button type="button" onClick={() => selectSort('tier')} className="sortable-header">
                    {t('tier')} {sortKey === 'tier' ? (sortDirection === 'asc' ? '↑' : '↓') : ''}
                  </button>
                </th>
                <th scope="col">
                  <button type="button" onClick={() => selectSort('price')} className="sortable-header">
                    {t('itemsPrice')} {sortKey === 'price' ? (sortDirection === 'asc' ? '↑' : '↓') : ''}
                  </button>
                </th>
                <th scope="col">{t('itemsCounterRole')}</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.map((item) => {
                const Icon = getCategoryIcon(item.category);
                const counterRole = { label: i18n.language.startsWith('id') ? item.counterRoleId || item.counterRole : item.counterRole, tone: 'default' };
                const isHighlighted = highlightedItemId && String(item.id) === highlightedItemId;

                return (
                  <tr
                    key={item.id}
                    className={isHighlighted ? 'is-highlighted' : ''}
                    role="row"
                    id={`item-${item.id}`}
                    data-item-id={item.id}
                  >
                    <td className="item-cell">
                      <div className="item-cell-content">
                        <img
                          src={getItemIconUrl(item.icon)}
                          alt=""
                          width="36"
                          height="36"
                          className="item-icon"
                          onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = ITEM_FALLBACK_SVG; }}
                        />
                        <div className="item-info">
                          <strong>{item.name}</strong>
                          <span className="item-category-tag">
                            <Icon size={12} aria-hidden="true" />
                            {getCategoryLabel(CATEGORY_MAP[item.category] || 'other')}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="category-badge">
                        <Icon size={12} aria-hidden="true" />
                        {getCategoryLabel(CATEGORY_MAP[item.category] || 'other')}
                      </span>
                    </td>
                    <td>
                      {item.tier && <span className="tier-chip">{item.tier}</span>}
                    </td>
                    <td className="price-cell">{item.price.toLocaleString()}</td>
                    <td>
                      <span
                        className={`counter-role-badge tone-${counterRole.tone}`}
                        data-tone={counterRole.tone}
                      >
                        {counterRole.label}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>

      {filteredItems.length > 0 && (
        <div className="database-summary" aria-live="polite">
          <span>{filteredItems.length} {t('items')} • {t('itemsCategory')}: {getCategoryLabel(activeCategory)} • {t('itemsTierFilter')}: {activeTier === 'all' ? t('itemsTierAll') : activeTier}</span>
        </div>
      )}
    </section>
  );
}

export default ItemsDatabaseView;
