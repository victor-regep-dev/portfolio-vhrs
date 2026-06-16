'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { LinkedinIcon as Linkedin } from '@/components/ui/Icons';
import { type Lang, type Translations } from '@/lib/i18n';

interface ContactCTAProps {
  lang: Lang;
  t: Translations;
}

export function ContactCTA({ t }: ContactCTAProps) {
  return (
    <section
      id="contato"
      aria-label={t.cta.title}
      className="section-padding relative bg-brand-graphite overflow-hidden"
    >
      {/* Big background glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at center, rgba(138,43,255,0.12) 0%, transparent 65%)' }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" aria-hidden />

      {/* Animated ring */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-brand-purple/10 animate-spin-slow"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-brand-purple/05 animate-spin-slow"
        style={{ animationDirection: 'reverse', animationDuration: '12s' }}
        aria-hidden
      />

      <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center relative z-10">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="relative w-28 h-28 rounded-3xl overflow-hidden border border-brand-purple/40 shadow-glow-xl animate-glow-pulse">
            <Image
              src="/images/logo.png"
              alt="VR Logotipo"
              fill
              className="object-contain p-3"
            />
            <div className="absolute inset-0 bg-purple-glow opacity-50" aria-hidden />
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight tracking-tight mb-6"
        >
          {t.cta.title.split('?')[0]}
          <span className="text-purple-gradient">?</span>
        </motion.h2>

        {/* Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-body text-brand-gray text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
        >
          {t.cta.text}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            id="cta-whatsapp"
            href="https://wa.me/5511944645636"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.cta.whatsapp}
            className="btn-whatsapp inline-flex items-center gap-3 px-8 py-4 rounded-xl text-base font-semibold"
          >
            <MessageCircle size={20} aria-hidden />
            {t.cta.whatsapp}
          </a>
          <a
            id="cta-linkedin"
            href="https://www.linkedin.com/in/victor-hugo-regep"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.cta.linkedin}
            className="btn-outline inline-flex items-center gap-3 px-8 py-4 rounded-xl text-base font-semibold"
          >
            <Linkedin size={20} aria-hidden />
            {t.cta.linkedin}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
