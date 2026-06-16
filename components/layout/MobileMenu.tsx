'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { X, MessageCircle } from 'lucide-react';
import { LinkedinIcon as Linkedin } from '@/components/ui/Icons';
import { clsx } from 'clsx';
import { type Lang, type Translations } from '@/lib/i18n';
import { LanguageSwitcher } from '@/components/shared/LanguageSwitcher';

interface MobileMenuProps {
  id: string;
  open: boolean;
  onClose: () => void;
  lang: Lang;
  t: Translations;
  navLinks: { label: string; id: string }[];
  onScrollTo: (id: string) => void;
}

export function MobileMenu({ id, open, onClose, lang, t, navLinks, onScrollTo }: MobileMenuProps) {
  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const handleNav = (sectionId: string) => {
    onScrollTo(sectionId);
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={clsx(
          'fixed inset-0 z-40 bg-black/80 backdrop-blur-sm transition-opacity duration-300 lg:hidden',
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        )}
        aria-hidden
      />

      {/* Drawer */}
      <div
        id={id}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
        className={clsx(
          'fixed top-0 right-0 z-50 h-full w-80 max-w-[90vw] glass-header shadow-glow-lg transition-transform duration-300 ease-out lg:hidden flex flex-col',
          open ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-brand-border">
          <div className="flex items-center gap-3">
            <div className="relative h-9 w-9 rounded-lg overflow-hidden border border-brand-purple/30">
              <Image src="/images/logo.png" alt="VR" fill className="object-contain p-0.5" />
            </div>
            <span className="font-heading font-bold text-sm text-white">Victor Hugo Regep</span>
          </div>
          <button
            onClick={onClose}
            aria-label="Fechar menu"
            className="p-2 rounded-lg text-brand-gray hover:text-white hover:bg-white/5 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Nav links */}
        <nav aria-label="Menu mobile" className="flex flex-col p-5 gap-1 flex-1 overflow-y-auto">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.id)}
              className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-brand-gray hover:text-white hover:bg-brand-purple/10 border border-transparent hover:border-brand-border transition-all duration-200 text-left font-body text-sm"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTAs at bottom */}
        <div className="p-5 border-t border-brand-border flex flex-col gap-3">
          <a
            href="https://wa.me/5511944645636"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="btn-whatsapp flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold"
          >
            <MessageCircle size={18} aria-hidden />
            {t.nav.cta}
          </a>
          <a
            href="https://www.linkedin.com/in/victor-hugo-regep"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="btn-outline flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold"
          >
            <Linkedin size={18} aria-hidden />
            LinkedIn
          </a>
          <div className="flex items-center justify-center pt-1">
            <LanguageSwitcher lang={lang} />
          </div>
        </div>
      </div>
    </>
  );
}
