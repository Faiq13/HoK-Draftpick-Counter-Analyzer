import gsap from 'gsap';

interface SlidePillOptions {
  leadingDuration?: number;
  trailingDuration?: number;
  leadingEase?: string;
  trailingEase?: string;
}

const DEFAULT_OPTIONS: Required<SlidePillOptions> = {
  leadingDuration: 0.25,
  trailingDuration: 0.35,
  leadingEase: 'power3.out',
  trailingEase: 'power2.inOut',
};

const pillTweens = new WeakMap<HTMLElement, gsap.core.Tween[]>();

function killTweensForPill(pill: HTMLElement): void {
  const tweens = pillTweens.get(pill);
  if (tweens) {
    tweens.forEach(tween => tween.kill());
    pillTweens.delete(pill);
  }
}

function addTweenForPill(pill: HTMLElement, tween: gsap.core.Tween): void {
  const tweens = pillTweens.get(pill) || [];
  tweens.push(tween);
  pillTweens.set(pill, tweens);
}

function getClipPathInsets(
  pillRect: DOMRect,
  targetRect: DOMRect,
  containerRect: DOMRect,
  isVertical: boolean
): { top: number; right: number; bottom: number; left: number } {
  if (isVertical) {
    const top = targetRect.top - containerRect.top;
    const bottom = containerRect.bottom - targetRect.bottom;
    return { top, right: 0, bottom, left: 0 };
  } else {
    const left = targetRect.left - containerRect.left;
    const right = containerRect.right - targetRect.right;
    return { top: 0, right, bottom: 0, left };
  }
}

function animateClipPath(
  pill: HTMLElement,
  startInsets: { top: number; right: number; bottom: number; left: number },
  endInsets: { top: number; right: number; bottom: number; left: number },
  isVertical: boolean,
  options: Required<SlidePillOptions>
): gsap.core.Tween {
  const clipPathValue = (insets: typeof startInsets) =>
    `inset(${insets.top}px ${insets.right}px ${insets.bottom}px ${insets.left}px)`;

  pill.style.clipPath = clipPathValue(startInsets);

  const leadingEdge = isVertical ? 'top' : 'left';
  const trailingEdge = isVertical ? 'bottom' : 'right';

  const tween = gsap.to(pill, {
    duration: options.leadingDuration + options.trailingDuration,
    ease: 'none',
    onStart: () => {
      pill.style.clipPath = clipPathValue(startInsets);
    },
    onUpdate: function () {
      const progress = this.progress();
      const leadingProgress = Math.min(progress / (options.leadingDuration / (options.leadingDuration + options.trailingDuration)), 1);
      const trailingProgress = Math.max((progress - options.leadingDuration / (options.leadingDuration + options.trailingDuration)) / (options.trailingDuration / (options.leadingDuration + options.trailingDuration)), 0);

      const currentInsets = { ...startInsets };

      if (isVertical) {
        currentInsets.top = startInsets.top + (endInsets.top - startInsets.top) * gsap.parseEase(options.leadingEase)(leadingProgress);
        currentInsets.bottom = startInsets.bottom + (endInsets.bottom - startInsets.bottom) * gsap.parseEase(options.trailingEase)(trailingProgress);
      } else {
        currentInsets.left = startInsets.left + (endInsets.left - startInsets.left) * gsap.parseEase(options.leadingEase)(leadingProgress);
        currentInsets.right = startInsets.right + (endInsets.right - startInsets.right) * gsap.parseEase(options.trailingEase)(trailingProgress);
      }

      pill.style.clipPath = clipPathValue(currentInsets);
    },
    onComplete: () => {
      pill.style.clipPath = clipPathValue(endInsets);
    },
  });

  return tween;
}

export function slidePill(
  pill: HTMLElement,
  target: HTMLElement,
  options: SlidePillOptions = {}
): gsap.core.Tween | null {
  if (!pill || !target) return null;

  const mergedOptions = { ...DEFAULT_OPTIONS, ...options };
  killTweensForPill(pill);

  const container = pill.parentElement;
  if (!container) return null;

  const pillRect = pill.getBoundingClientRect();
  const targetRect = target.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();

  const isVertical = containerRect.height > containerRect.width;

  const startInsets = getClipPathInsets(pillRect, pillRect, containerRect, isVertical);
  const endInsets = getClipPathInsets(pillRect, targetRect, containerRect, isVertical);

  if (isVertical) {
    pill.style.width = `${targetRect.width}px`;
    pill.style.height = `${targetRect.height}px`;
  } else {
    pill.style.width = `${targetRect.width}px`;
    pill.style.height = `${targetRect.height}px`;
  }

  const tween = animateClipPath(pill, startInsets, endInsets, isVertical, mergedOptions);
  addTweenForPill(pill, tween);

  tween.eventCallback('onComplete', () => {
    const tweens = pillTweens.get(pill);
    if (tweens) {
      const idx = tweens.indexOf(tween);
      if (idx !== -1) tweens.splice(idx, 1);
    }
  });

  return tween;
}

export function createPillElement(): HTMLElement {
  const pill = document.createElement('div');
  pill.className = 'nav-pill';
  pill.style.position = 'absolute';
  pill.style.top = '0';
  pill.style.left = '0';
  pill.style.pointerEvents = 'none';
  pill.style.zIndex = '0';
  pill.style.borderRadius = '8px';
  pill.style.background = 'rgba(85, 214, 232, 0.15)';
  pill.style.border = '1px solid rgba(85, 214, 232, 0.35)';
  pill.style.boxShadow = '0 0 12px rgba(85, 214, 232, 0.25), inset 0 0 12px rgba(85, 214, 232, 0.1)';
  pill.style.transition = 'width 0.1s ease, height 0.1s ease';
  return pill;
}

export function cleanupPill(pill: HTMLElement): void {
  killTweensForPill(pill);
  pill.style.clipPath = 'none';
}