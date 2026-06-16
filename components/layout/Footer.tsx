'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MessageCircle, Mail, MapPin } from 'lucide-react';
import { LinkedinIcon as Linkedin } from '@/components/ui/Icons';
import { type Lang, type Translations } from '@/lib/i18n';

interface FooterProps {
  lang: Lang;
  t: Translations;
}

export function Footer({ lang, t }: FooterProps) {
  const isPt = lang === 'pt';

  return (
    <footer role="contentinfo" className="relative border-t border-brand-border bg-brand-graphite overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-glow opacity-30" aria-hidden />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand col */}
          <div className="lg:col-span-1 flex flex-col gap-5">
            <Link href={`/${lang}`} className="flex items-center gap-3 group w-fit">
              <div className="relative h-12 w-12 rounded-xl overflow-hidden border border-brand-purple/30 group-hover:border-brand-purple/60 transition-colors">
                <Image src="/images/logo.png" alt="VR Logotipo" fill className="object-contain p-1" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-heading font-bold text-sm text-white">Victor Hugo Regep</span>
                <span className="font-body text-xs text-brand-gray uppercase tracking-wider mt-1">System Product Designer</span>
              </div>
            </Link>
            <p className="font-body text-sm text-brand-gray leading-relaxed max-w-xs">
              {t.footer.description}
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/victor-hugo-regep"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Victor Hugo Regep"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-brand-border text-brand-gray hover:text-white hover:border-brand-border-hover hover:bg-brand-purple/10 transition-all"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://wa.me/5511944645636"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp de Victor Hugo Regep"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-brand-border text-brand-gray hover:text-whatsapp hover:border-whatsapp/40 hover:bg-whatsapp/10 transition-all"
              >
                <MessageCircle size={16} />
              </a>
              <a
                href="mailto:victor.regep@outlook.com"
                aria-label="Email de Victor Hugo Regep"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-brand-border text-brand-gray hover:text-white hover:border-brand-border-hover hover:bg-brand-purple/10 transition-all"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading font-semibold text-sm text-white uppercase tracking-widest">{t.footer.nav}</h3>
            <ul className="flex flex-col gap-2" role="list">
              {t.footer.navLinks.map((label) => (
                <li key={label}>
                  <span className="font-body text-sm text-brand-gray hover:text-white cursor-pointer transition-colors">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading font-semibold text-sm text-white uppercase tracking-widest">{t.footer.services}</h3>
            <ul className="flex flex-col gap-2" role="list">
              {t.footer.serviceLinks.map((label) => (
                <li key={label}>
                  <span className="font-body text-sm text-brand-gray">{label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading font-semibold text-sm text-white uppercase tracking-widest">{t.footer.contact}</h3>
            <ul className="flex flex-col gap-3" role="list">
              <li>
                <a
                  href="https://wa.me/5511944645636"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-brand-gray hover:text-white transition-colors font-body"
                >
                  <MessageCircle size={14} className="text-brand-violet shrink-0" aria-hidden />
                  +55 11 94464-5636
                </a>
              </li>
              <li>
                <a
                  href="mailto:victor.regep@outlook.com"
                  className="flex items-center gap-2 text-sm text-brand-gray hover:text-white transition-colors font-body"
                >
                  <Mail size={14} className="text-brand-violet shrink-0" aria-hidden />
                  victor.regep@outlook.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-brand-gray font-body">
                <MapPin size={14} className="text-brand-violet shrink-0" aria-hidden />
                {t.footer.location}
              </li>
              <li className="flex items-center gap-2 mt-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <span className="font-body text-sm text-green-400">{t.footer.status}</span>
              </li>
            </ul>

            {/* Newsletter placeholder */}
            <div className="mt-4 p-4 rounded-xl bg-brand-card border border-brand-border">
              <p className="text-xs font-body text-white font-semibold mb-1">
                {isPt ? 'Receba insights exclusivos' : 'Receive exclusive insights'}
              </p>
              <p className="text-xs font-body text-brand-gray mb-3">
                {isPt
                  ? 'Conteúdos sobre design, código, automação e produtos digitais.'
                  : 'Content about design, code, automation and digital products.'}
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder={isPt ? 'Seu e-mail' : 'Your email'}
                  className="flex-1 bg-brand-graphite border border-brand-border rounded-lg px-3 py-2 text-xs text-white placeholder-brand-gray/60 focus:outline-none focus:border-brand-purple/50 font-body"
                />
                <button
                  aria-label={isPt ? 'Inscrever' : 'Subscribe'}
                  className="px-3 py-2 bg-brand-purple text-white rounded-lg text-xs font-semibold hover:bg-brand-violet transition-colors"
                >
                  →
                </button>
              </div>
              <p className="text-[10px] text-brand-gray/60 mt-2 font-body">
                {isPt ? 'Sem spam. 50 conteúdos de valor.' : 'No spam. 50 quality pieces of content.'}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-brand-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-brand-gray">{t.footer.copyright}</p>
          <div className="flex items-center gap-4">
            <Link href={`/${lang === 'pt' ? 'en' : 'pt'}`} className="font-body text-xs text-brand-gray hover:text-brand-violet transition-colors">
              {lang === 'pt' ? 'English' : 'Português'}
            </Link>
            <span className="text-brand-border">·</span>
            <span className="font-body text-xs text-brand-gray">
              {isPt ? 'Feito com Next.js' : 'Built with Next.js'}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
