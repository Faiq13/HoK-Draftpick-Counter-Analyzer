import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react';
import gsap from 'gsap';

interface GlassWorkspaceProps { children: ReactNode; backgroundImage?: string; }

export function GlassWorkspace({ children, backgroundImage }: GlassWorkspaceProps) {
  const shellRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!shellRef.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => { gsap.fromTo('.app-topbar, .side-nav, .workspace', { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.3, stagger: 0.04, ease: 'power2.out' }); }, shellRef);
    return () => ctx.revert();
  }, []);
  const style = { '--gw-background-image': backgroundImage ? `url(${backgroundImage})` : 'none' } as CSSProperties;
  return <div ref={shellRef} style={style} className="app-shell"><div className="gw-background" aria-hidden="true" /><div className="gw-content">{children}</div></div>;
}

export default GlassWorkspace;
