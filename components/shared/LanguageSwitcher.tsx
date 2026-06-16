'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';
import { type Lang } from '@/lib/i18n';

interface LanguageSwitcherProps {
  lang: Lang;
}

export function LanguageSwitcher({ lang }: LanguageSwitcherProps) {
  const pathname = usePathname();

  // Replace current lang prefix with new one
  const getAltPath = (newLang: Lang) => {
    const segments = pathname.split('/');
    segments[1] = newLang;
    return segments.join('/');
  };

  return (
    <div
      role="navigation"
      aria-label="Selecionar idioma"
      className="flex items-center gap-1 rounded-lg border border-brand-border p-1 bg-brand-graphite"
    >
      {(['pt', 'en'] as Lang[]).map((l) => (
        <Link
          key={l}
          href={getAltPath(l)}
          aria-label={l === 'pt' ? 'Versão em português' : 'English version'}
          aria-current={lang === l ? 'page' : undefined}
          className={clsx(
            'px-2.5 py-1 rounded-md text-xs font-semibold font-body uppercase tracking-wider transition-all duration-200',
            lang === l
              ? 'bg-brand-purple text-white shadow-glow-sm'
              : 'text-brand-gray hover:text-white',
          )}
        >
          {l.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
