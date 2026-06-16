'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Code2, Layers, Zap } from 'lucide-react';
import { LinkedinIcon as Linkedin } from '@/components/ui/Icons';
import { type Lang, type Translations } from '@/lib/i18n';

interface HeroProps {
  lang: Lang;
  t: Translations;
}

const codeSnippet = `function connect({
  design, strategy,
  debug = false,
}) {
  const experience = {
    user: process,
    front: imports,
    resultado: valor
  }

  // design que conecta,
  // código que entrega
  return experience;
}`;



export function Hero({ lang, t }: HeroProps) {
  const isPt = lang === 'pt';

  const scrollToProjects = () => {
    document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      aria-label={isPt ? 'Apresentação principal' : 'Main presentation'}
      className="relative min-h-screen flex items-center overflow-hidden bg-brand-black pt-20"
    >
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" aria-hidden />

      {/* Purple radial glow */}
      <div
        className="pointer-events-none absolute top-1/2 right-0 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
        style={{ background: 'radial-gradient(ellipse, rgba(138,43,255,0.15) 0%, transparent 70%)' }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-1/4 left-0 w-[400px] h-[400px] rounded-full"
        style={{ background: 'radial-gradient(ellipse, rgba(138,43,255,0.08) 0%, transparent 70%)' }}
        aria-hidden
      />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl w-full py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* ── LEFT: Content ── */}
          <div className="flex flex-col gap-6 z-10">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold font-body border border-brand-purple/30 bg-brand-purple/10 text-brand-lilac tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-violet animate-pulse" aria-hidden />
                {t.hero.badge}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="font-heading font-bold text-4xl sm:text-5xl xl:text-6xl text-white leading-[1.05] tracking-tight">
                {isPt ? (
                  <>
                    Eu projeto, valido e{' '}
                    <span className="text-purple-gradient">construo</span>{' '}
                    <span className="text-purple-gradient">produtos digitais</span>{' '}
                    <span className="text-purple-gradient">escaláveis.</span>
                  </>
                ) : (
                  <>
                    I design, validate and{' '}
                    <span className="text-purple-gradient">build</span>{' '}
                    <span className="text-purple-gradient">scalable digital</span>{' '}
                    <span className="text-purple-gradient">products.</span>
                  </>
                )}
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-body text-brand-gray text-base md:text-lg leading-relaxed max-w-xl"
            >
              {t.hero.text}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-3"
            >
              <button
                id="hero-view-projects"
                onClick={scrollToProjects}
                className="btn-primary inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold"
              >
                {t.hero.cta1}
                <ArrowRight size={16} aria-hidden />
              </button>
              <a
                id="hero-whatsapp"
                href="https://wa.me/5511944645636"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold"
              >
                <MessageCircle size={16} aria-hidden />
                {t.hero.cta2}
              </a>
              <a
                id="hero-linkedin"
                href="https://www.linkedin.com/in/victor-hugo-regep"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-linkedin inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold"
              >
                <Linkedin size={16} aria-hidden />
                {t.hero.cta3}
              </a>
            </motion.div>

            {/* Status */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-2 mt-1"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="font-body text-sm text-green-400">{t.hero.status}</span>
            </motion.div>
          </div>

          {/* ── RIGHT: Visual ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center z-10"
          >
            {/* Code block background */}
            <div className="absolute top-0 right-0 w-52 rounded-xl bg-brand-card border border-brand-border p-3 text-left hidden lg:block" aria-hidden>
              <div className="flex gap-1 mb-2">
                <span className="w-2 h-2 rounded-full bg-red-500/70" />
                <span className="w-2 h-2 rounded-full bg-yellow-500/70" />
                <span className="w-2 h-2 rounded-full bg-green-500/70" />
              </div>
              <pre className="text-[9px] text-brand-gray/80 leading-relaxed font-mono overflow-hidden">
                <code>{codeSnippet}</code>
              </pre>
            </div>

            {/* Hero image */}
            <div className="relative w-full max-w-md mx-auto">
              {/* Glow ring behind image */}
              <div
                className="absolute inset-0 rounded-2xl animate-glow-pulse"
                style={{ background: 'radial-gradient(ellipse at center, rgba(138,43,255,0.3) 0%, transparent 70%)' }}
                aria-hidden
              />

              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden border border-brand-purple/20 shadow-glow-lg">
                <Image
                  src="/images/hero.png"
                  alt="Victor Hugo Regep — System Product Designer"
                  width={520}
                  height={600}
                  priority
                  className="w-full h-auto object-cover"
                  style={{ maxHeight: '580px', objectPosition: 'top center' }}
                />
                {/* Purple overlay gradient at bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1/3 pointer-events-none"
                  style={{ background: 'linear-gradient(to top, rgba(5,5,7,0.9) 0%, transparent 100%)' }}
                  aria-hidden
                />
                {/* Signature at bottom */}
                <div className="absolute bottom-4 left-0 right-0 flex flex-col items-center gap-0.5">
                  <span className="font-heading text-lg font-bold text-white/90 tracking-wider drop-shadow-lg" style={{ fontStyle: 'italic' }}>
                    Victor Regep
                  </span>
                  <span className="font-body text-xs text-brand-lilac/80 tracking-widest uppercase">
                    {t.hero.role}
                  </span>
                </div>
              </div>

              {/* Floating tech badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -left-4 glass rounded-xl px-3 py-2 flex items-center gap-2 border border-brand-purple/30 shadow-glow-sm"
                aria-hidden
              >
                <Layers size={14} className="text-brand-violet" />
                <span className="text-xs font-semibold text-white font-body">Design System</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -right-4 glass rounded-xl px-3 py-2 flex items-center gap-2 border border-brand-purple/30 shadow-glow-sm"
                aria-hidden
              >
                <Zap size={14} className="text-brand-violet" />
                <span className="text-xs font-semibold text-white font-body">AI & Automation</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute top-1/3 -right-8 glass rounded-xl px-3 py-2 flex items-center gap-2 border border-brand-purple/30 shadow-glow-sm"
                aria-hidden
              >
                <Code2 size={14} className="text-brand-violet" />
                <span className="text-xs font-semibold text-white font-body">Front-End</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32"
        style={{ background: 'linear-gradient(to top, #050507 0%, transparent 100%)' }}
        aria-hidden
      />
    </section>
  );
}
