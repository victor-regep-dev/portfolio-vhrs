'use client';

import { clsx } from 'clsx';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'purple' | 'outline' | 'green' | 'blue' | 'gray';
  size?: 'sm' | 'md';
  className?: string;
}

const variantStyles = {
  purple: 'bg-brand-purple/15 text-brand-lilac border border-brand-purple/30',
  outline: 'bg-transparent text-brand-violet border border-brand-violet/40',
  green: 'bg-green-500/15 text-green-400 border border-green-500/30',
  blue: 'bg-blue-500/15 text-blue-400 border border-blue-500/30',
  gray: 'bg-white/5 text-brand-gray border border-white/10',
};

const sizeStyles = {
  sm: 'px-2.5 py-0.5 text-xs',
  md: 'px-3 py-1 text-xs',
};

export function Badge({
  children,
  variant = 'purple',
  size = 'md',
  className,
}: BadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1 font-semibold rounded-full tracking-wide font-body',
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
    >
      {children}
    </span>
  );
}
