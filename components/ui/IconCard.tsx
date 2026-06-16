'use client';

import { clsx } from 'clsx';

interface IconCardProps {
  icon: React.ReactNode;
  title: string;
  text: string;
  className?: string;
  glowColor?: string;
}

export function IconCard({ icon, title, text, className, glowColor }: IconCardProps) {
  return (
    <div
      className={clsx(
        'group relative flex flex-col gap-4 p-6 rounded-[16px] transition-all duration-300',
        'bg-brand-card border border-brand-border',
        'hover:border-brand-border-hover hover:shadow-glow-md hover:-translate-y-1',
        className,
      )}
      style={glowColor ? { '--glow-color': glowColor } as React.CSSProperties : undefined}
    >
      {/* Background gradient on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-br from-brand-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden />

      {/* Icon */}
      <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-purple/10 border border-brand-purple/20 text-brand-violet group-hover:bg-brand-purple/20 group-hover:border-brand-purple/40 transition-all duration-300">
        {icon}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2">
        <h3 className="font-heading font-semibold text-white text-base leading-snug">{title}</h3>
        <p className="font-body text-brand-gray text-sm leading-relaxed">{text}</p>
      </div>
    </div>
  );
}
