import { useEffect, useId, useRef, useState, type KeyboardEvent } from 'react';
import { ChevronDown } from 'lucide-react';

interface FilterDropdownProps {
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
}

export function FilterDropdown({ label, value, options, onChange }: FilterDropdownProps) {
  const id = useId();
  const [open, setOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const optionRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const selectedIndex = options.findIndex(option => option.value === value);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, [open]);

  useEffect(() => {
    if (open) optionRefs.current[focusedIndex]?.focus();
  }, [open, focusedIndex]);

  const openMenu = () => {
    setFocusedIndex(Math.max(0, selectedIndex));
    setOpen(true);
  };

  const handleMenuKey = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      setOpen(false);
      triggerRef.current?.focus();
    } else if (['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) {
      event.preventDefault();
      setFocusedIndex(index => event.key === 'Home' ? 0 : event.key === 'End' ? options.length - 1
        : (index + (event.key === 'ArrowDown' ? 1 : -1) + options.length) % options.length);
    }
  };

  return (
    <div ref={rootRef} className="filter-field tier-dropdown-wrapper" onBlur={event => {
      if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpen(false);
    }}>
      <label id={`${id}-label`} htmlFor={`${id}-trigger`} className="filter-label">{label}</label>
      <div className="tier-dropdown">
        <button ref={triggerRef} id={`${id}-trigger`} type="button" className="tier-dropdown-trigger"
          aria-haspopup="listbox" aria-expanded={open} aria-controls={open ? `${id}-menu` : undefined}
          aria-labelledby={`${id}-label ${id}-value`}
          onClick={() => open ? setOpen(false) : openMenu()}
          onKeyDown={event => {
            if (event.key === 'ArrowDown' || event.key === 'ArrowUp') { event.preventDefault(); openMenu(); }
          }}>
          <span id={`${id}-value`}>{options[selectedIndex]?.label ?? value}</span>
          <ChevronDown size={14} aria-hidden="true" />
        </button>
        {open && (
          <div id={`${id}-menu`} className="tier-dropdown-menu" role="listbox" aria-labelledby={`${id}-label`} onKeyDown={handleMenuKey}>
            {options.map((option, index) => (
              <button key={option.value} ref={element => { optionRefs.current[index] = element; }} type="button" role="option"
                aria-selected={option.value === value} tabIndex={index === focusedIndex ? 0 : -1}
                className={`tier-dropdown-option ${option.value === value ? 'is-selected' : ''}`}
                onFocus={() => setFocusedIndex(index)} onClick={() => {
                  onChange(option.value);
                  setOpen(false);
                  triggerRef.current?.focus();
                }}>
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
