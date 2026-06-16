'use client';

import { motion } from 'framer-motion';
import {
  Target, Code2, LayoutGrid, Bot, Medal, Network,
} from 'lucide-react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { type Lang, type Translations } from '@/lib/i18n';

interface WhyHireMeProps {
  lang: Lang;
  t: Translations;
}

const iconMap: Record<string, React.ReactNode> = {
  target: <Target size={22} />,
  code2: <Code2 size={22} />,
  'layout-grid': <LayoutGrid size={22} />,
  bot: <Bot size={22} />,
  medal: <Medal size={22} />,
  network: <Network size={22} />,
};

export function WhyHireMe({ lang, t }: WhyHireMeProps) {
  return (
    <section
      id="sobre"
      aria-label={t.whyHire.title}
      className="section-padding relative bg-brand-black overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" aria-hidden />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Title side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <SectionTitle
              title={t.whyHire.title}
              highlightWords={['Victor Regep', 'contratar']}
              size="xl"
            />

            {/* Decorative VR logo hint */}
            <div className="relative w-24 h-24 rounded-2xl overflow-hidden border border-brand-purple/30 bg-brand-card flex items-center justify-center shadow-glow-md hidden lg:flex">
              <span className="font-heading text-3xl font-black text-purple-gradient">VR</span>
              <div className="absolute inset-0 bg-purple-glow opacity-40" aria-hidden />
            </div>

            <p className="font-body text-sm text-brand-gray leading-relaxed hidden lg:block max-w-xs">
              {lang === 'pt'
                ? 'Um profissional que une visão de produto, execução técnica e inteligência estratégica.'
                : 'A professional who combines product vision, technical execution and strategic intelligence.'}
            </p>
          </motion.div>

          {/* Cards grid */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {t.whyHire.cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group relative flex gap-4 p-5 rounded-2xl bg-brand-card border border-brand-border hover:border-brand-border-hover hover:shadow-glow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden />

                {/* Icon */}
                <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-purple/10 border border-brand-purple/20 text-brand-violet group-hover:bg-brand-purple/20 transition-all">
                  {iconMap[card.icon] ?? <Target size={22} />}
                </div>

                {/* Text */}
                <div className="flex flex-col gap-1">
                  <h3 className="font-heading font-semibold text-sm text-white">{card.title}</h3>
                  <p className="font-body text-xs text-brand-gray leading-relaxed">{card.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
