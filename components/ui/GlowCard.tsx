'use client';

import { clsx } from 'clsx';

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowOnHover?: boolean;
  neonBorder?: boolean;
  onClick?: () => void;
  as?: 'div' | 'article' | 'li';
  id?: string;
}

export function GlowCard({
  children,
  className,
  glowOnHover = true,
  neonBorder = false,
  onClick,
  as: Tag = 'div',
  id,
}: GlowCardProps) {
  return (
    <Tag
      id={id}
      onClick={onClick}
      className={clsx(
        'glow-card',
        neonBorder && 'neon-border',
        onClick && 'cursor-pointer',
        className,
      )}
    >
      {/* Inner glow gradient */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: 'linear-gradient(135deg, rgba(138,43,255,0.06) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />
      {children}
    </Tag>
  );
}
