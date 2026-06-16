'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { type Lang, type Translations } from '@/lib/i18n';

interface TechStackProps {
  lang: Lang;
  t: Translations;
}

const techData = [
  { name: 'Figma', icon: '🎨', years: 6, category: 'design' },
  { name: 'Photoshop', icon: '📷', years: 18, category: 'design' },
  { name: 'Illustrator', icon: '✏️', years: 18, category: 'design' },
  { name: 'Adobe XD', icon: '🖥️', years: 6, category: 'design' },
  { name: 'HTML', icon: '🌐', years: 16, category: 'frontend' },
  { name: 'CSS', icon: '🎨', years: 16, category: 'frontend' },
  { name: 'JavaScript', icon: '⚡', years: 16, category: 'frontend' },
  { name: 'TypeScript', icon: '📘', years: 5, category: 'frontend' },
  { name: 'Python', icon: '🐍', years: 4, category: 'backend' },
  { name: 'SQL', icon: '🗃️', years: 4, category: 'backend' },
  { name: 'Angular', icon: '🅰️', years: 5, category: 'frontend' },
  { name: 'React', icon: '⚛️', years: 5, category: 'frontend' },
  { name: 'Vue.js', icon: '💚', years: 5, category: 'frontend' },
  { name: 'n8n', icon: '🔗', years: 2, category: 'automation' },
];

const svgIcons: Record<string, string> = {
  Figma: 'Fg',
  Photoshop: 'Ps',
  Illustrator: 'Ai',
  'Adobe XD': 'Xd',
  HTML: 'H',
  CSS: 'C',
  JavaScript: 'JS',
  TypeScript: 'TS',
  Python: 'Py',
  SQL: 'SQL',
  Angular: 'Ng',
  React: 'Re',
  'Vue.js': 'Vu',
  n8n: 'n8n',
};

const categoryColors: Record<string, string> = {
  design: 'text-pink-400',
  frontend: 'text-brand-violet',
  backend: 'text-blue-400',
  automation: 'text-green-400',
};

export function TechStack({ lang, t }: TechStackProps) {
  const [active, setActive] = useState<string | null>(null);
  const isPt = lang === 'pt';

  return (
    <section
      id="stack"
      aria-label={t.stack.title}
      className="section-padding relative bg-brand-graphite overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" aria-hidden />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Left: title + selected info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <SectionTitle title={t.stack.title} size="xl" />
            <p className="font-body text-sm text-brand-gray">{t.stack.subtitle}</p>

            {/* Active tech display */}
            <AnimatePresence mode="wait">
              {active ? (
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="p-5 rounded-2xl bg-brand-card border border-brand-border shadow-glow-md"
                >
                  {(() => {
                    const tech = techData.find((t) => t.name === active)!;
                    return (
                      <>
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-brand-purple/15 border border-brand-purple/30 font-heading font-bold text-sm ${categoryColors[tech.category]}`}>
                            {svgIcons[tech.name]}
                          </div>
                          <div>
                            <p className="font-heading font-bold text-white text-lg">{tech.name}</p>
                            <p className="font-body text-xs text-brand-gray capitalize">{tech.category}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-2 rounded-full bg-brand-black overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${Math.min((tech.years / 20) * 100, 100)}%` }}
                              transition={{ duration: 0.8, ease: 'easeOut' }}
                              className="h-full rounded-full bg-gradient-to-r from-brand-purple to-brand-violet"
                            />
                          </div>
                          <span className="font-heading font-bold text-brand-violet text-sm shrink-0">
                            {tech.years} {isPt ? 'anos' : 'years'}
                          </span>
                        </div>
                        <p className="mt-2 font-body text-xs text-brand-gray">{t.stack.yearsLabel}</p>
                      </>
                    );
                  })()}
                </motion.div>
              ) : (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-5 rounded-2xl bg-brand-card/40 border border-dashed border-brand-border flex items-center justify-center"
                >
                  <p className="font-body text-xs text-brand-gray/60 text-center">
                    {t.stack.subtitle}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <p className="font-body text-xs text-brand-gray/60 italic">{t.stack.otherTools}</p>
          </motion.div>

          {/* Right: tech grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-3">
              {techData.map((tech, i) => (
                <motion.button
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  onClick={() => setActive(active === tech.name ? null : tech.name)}
                  aria-pressed={active === tech.name}
                  aria-label={`${tech.name}: ${tech.years} ${isPt ? 'anos' : 'years'}`}
                  className={`tech-card flex flex-col items-center gap-2 p-3 rounded-xl transition-all duration-200 ${
                    active === tech.name ? 'active border-brand-violet/60 bg-brand-purple/10' : ''
                  }`}
                >
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-brand-black border border-brand-border font-heading font-bold text-xs ${categoryColors[tech.category]}`}>
                    {svgIcons[tech.name]}
                  </div>
                  <span className="font-body text-[10px] text-brand-gray text-center leading-tight">{tech.name}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
