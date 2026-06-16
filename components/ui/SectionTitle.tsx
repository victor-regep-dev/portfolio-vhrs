'use client';

import { clsx } from 'clsx';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  highlightWords?: string[];
  align?: 'left' | 'center' | 'right';
  size?: 'lg' | 'xl' | '2xl';
  className?: string;
  titleClassName?: string;
  id?: string;
}

const sizeStyles = {
  lg: 'text-3xl md:text-4xl',
  xl: 'text-4xl md:text-5xl',
  '2xl': 'text-4xl md:text-5xl lg:text-6xl',
};

function highlightTitle(title: string, words: string[] = []) {
  if (!words.length) return <>{title}</>;

  let result = title;
  const parts: { text: string; highlight: boolean }[] = [];

  // Simple word-by-word split preserving highlights
  const wordsLower = words.map((w) => w.toLowerCase());
  const tokens = result.split(/(\s+)/);

  tokens.forEach((token) => {
    const isHighlight = wordsLower.some((w) =>
      token.toLowerCase().includes(w),
    );
    parts.push({ text: token, highlight: isHighlight });
  });

  return (
    <>
      {parts.map((part, i) =>
        part.highlight ? (
          <span key={i} className="text-purple-gradient">
            {part.text}
          </span>
        ) : (
          <span key={i}>{part.text}</span>
        ),
      )}
    </>
  );
}

export function SectionTitle({
  title,
  subtitle,
  highlightWords = [],
  align = 'left',
  size = 'xl',
  className,
  titleClassName,
  id,
}: SectionTitleProps) {
  const alignStyles = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right',
  };

  return (
    <div
      id={id}
      className={clsx(
        'max-w-3xl',
        alignStyles[align],
        className,
      )}
    >
      <h2
        className={clsx(
          'font-heading font-bold text-white leading-tight tracking-tight',
          sizeStyles[size],
          titleClassName,
        )}
      >
        {highlightTitle(title, highlightWords)}
      </h2>
      {subtitle && (
        <p className="mt-3 text-brand-gray text-base md:text-lg leading-relaxed font-body">
          {subtitle}
        </p>
      )}
    </div>
  );
}
