'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MessageCircle, Menu, X } from 'lucide-react';
import { clsx } from 'clsx';
import { type Lang, type Translations } from '@/lib/i18n';
import { LanguageSwitcher } from '@/components/shared/LanguageSwitcher';
import { MobileMenu } from './MobileMenu';

interface HeaderProps {
  lang: Lang;
  t: Translations;
}

const navIds: Record<string, string> = {
  Projetos: 'projetos', Projects: 'projetos',
  Stack: 'stack',
  Processo: 'processo', Process: 'processo',
  Sobre: 'sobre', About: 'sobre',
  Contato: 'contato', Contact: 'contato',
  Início: '', Home: '',
};

export function Header({ lang, t }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const navLinks = [
    { label: t.nav.home, id: '' },
    { label: t.nav.projects, id: 'projetos' },
    { label: t.nav.stack, id: 'stack' },
    { label: t.nav.process, id: 'processo' },
    { label: t.nav.about, id: 'sobre' },
    { label: t.nav.contact, id: 'contato' },
  ];

  const scrollTo = (id: string) => {
    if (!id) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        role="banner"
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'glass-header shadow-glow-sm'
            : 'bg-transparent',
        )}
      >
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="flex h-16 md:h-20 items-center justify-between gap-4">

            {/* Logo + Name */}
            <Link
              href={`/${lang}`}
              className="flex items-center gap-3 shrink-0 group"
              aria-label="Victor Hugo Regep – Home"
            >
              <div className="relative h-10 w-10 rounded-lg overflow-hidden border border-brand-purple/30 group-hover:border-brand-purple/60 transition-colors">
                <Image
                  src="/images/logo.png"
                  alt="VR Logotipo"
                  fill
                  className="object-contain p-0.5"
                  priority
                />
              </div>
              <div className="hidden sm:flex flex-col leading-none">
                <span className="font-heading font-bold text-sm text-white tracking-wide">Victor Hugo Regep</span>
                <span className="font-body text-xs text-brand-gray tracking-wider uppercase mt-0.5">System Product Designer</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav
              aria-label="Menu principal"
              className="hidden lg:flex items-center gap-1"
            >
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.id)}
                  className="px-3 py-2 text-sm font-body text-brand-gray hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Right Controls */}
            <div className="flex items-center gap-2">
              <LanguageSwitcher lang={lang} />

              {/* WhatsApp CTA (desktop) */}
              <a
                id="header-whatsapp-cta"
                href="https://wa.me/5511944645636"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.nav.cta}
                className="hidden md:inline-flex items-center gap-2 btn-whatsapp px-4 py-2 text-sm rounded-lg"
              >
                <MessageCircle size={16} aria-hidden />
                <span className="hidden lg:inline">{t.nav.cta}</span>
              </a>

              {/* Mobile hamburger */}
              <button
                id="mobile-menu-toggle"
                aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                onClick={() => setMobileOpen((v) => !v)}
                className="lg:hidden p-2 rounded-lg border border-brand-border text-brand-gray hover:text-white hover:border-brand-border-hover transition-all"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu
        id="mobile-menu"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        lang={lang}
        t={t}
        navLinks={navLinks}
        onScrollTo={scrollTo}
      />
    </>
  );
}
