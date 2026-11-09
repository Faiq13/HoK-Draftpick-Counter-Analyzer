import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react';
import gsap from 'gsap';

interface GlassWorkspaceProps {
  children: ReactNode;
  backgroundImage?: string;
}

export function GlassWorkspace({ children, backgroundImage }: GlassWorkspaceProps) {
  const shellRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!shellRef.current) return;
    const ctx = gsap.context(() => {
      const panels = shellRef.current?.querySelectorAll('.gw-panel');
      if (!panels?.length) return;
      gsap.fromTo(panels, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.35, stagger: 0.04, ease: 'power2.out' });
    }, shellRef);
    return () => ctx.revert();
  }, []);

  const style = { '--gw-background-image': backgroundImage ? `url(${backgroundImage})` : 'none' } as CSSProperties;
  return <div ref={shellRef} style={style} className="gw-shell min-h-screen">
    <div className="gw-background" aria-hidden="true" />
    <div className="gw-content">{children}</div>
  </div>;
}

export default GlassWorkspace;
