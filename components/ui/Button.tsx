'use client';

import { clsx } from 'clsx';
import Link from 'next/link';

type Variant = 'primary' | 'outline' | 'whatsapp' | 'linkedin' | 'ghost' | 'disabled';

interface ButtonProps {
  variant?: Variant;
  href?: string;
  external?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  id?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  size?: 'sm' | 'md' | 'lg';
}

const variantStyles: Record<Variant, string> = {
  primary: 'btn-primary text-white',
  outline: 'btn-outline',
  whatsapp: 'btn-whatsapp text-white',
  linkedin: 'btn-linkedin',
  ghost: 'text-brand-gray hover:text-white transition-colors',
  disabled: 'bg-brand-graphite text-brand-gray border border-brand-border cursor-not-allowed opacity-60',
};

const sizeStyles = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

export function Button({
  variant = 'primary',
  href,
  external,
  children,
  className,
  onClick,
  id,
  disabled,
  icon,
  iconPosition = 'left',
  size = 'md',
}: ButtonProps) {
  const isDisabled = disabled || variant === 'disabled';

  const classes = clsx(
    'inline-flex items-center gap-2 font-semibold rounded-[10px] cursor-pointer transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black select-none whitespace-nowrap',
    variantStyles[variant],
    sizeStyles[size],
    isDisabled && 'pointer-events-none',
    className,
  );

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (href && !isDisabled) {
    if (external) {
      return (
        <a
          id={id}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          aria-label={typeof children === 'string' ? children : undefined}
        >
          {content}
        </a>
      );
    }
    return (
      <Link id={id} href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button
      id={id}
      onClick={onClick}
      className={classes}
      disabled={isDisabled}
      aria-disabled={isDisabled}
    >
      {content}
    </button>
  );
}
