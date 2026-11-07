import type { CSSProperties, ReactNode } from 'react';

interface GlassWorkspaceProps {
  children: ReactNode;
  backgroundImage: string;
}

export function GlassWorkspace({ children, backgroundImage }: GlassWorkspaceProps) {
  const style = { '--gw-background-image': `url(${backgroundImage})` } as CSSProperties;
  return <div className="gw-shell" style={style}><div className="gw-background" aria-hidden="true" /><div className="gw-content">{children}</div></div>;
}
