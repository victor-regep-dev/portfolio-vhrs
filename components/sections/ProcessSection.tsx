'use client';

import { motion } from 'framer-motion';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { type Lang, type Translations } from '@/lib/i18n';

interface ProcessSectionProps {
  lang: Lang;
  t: Translations;
}

export function ProcessSection({ lang, t }: ProcessSectionProps) {
  return (
    <section
      id="processo"
      aria-label={t.process.title}
      className="section-padding relative bg-brand-graphite overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" aria-hidden />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <SectionTitle
            title={t.process.title}
            subtitle={t.process.subtitle}
            highlightWords={['processo', 'process']}
            align="center"
            size="xl"
          />
        </motion.div>

        {/* Timeline — responsive grid 2×5 on desktop, 1 col on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {t.process.steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group relative flex flex-col gap-3 p-5 rounded-2xl bg-brand-card border border-brand-border hover:border-brand-border-hover hover:shadow-glow-sm hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Gradient top accent */}
              <div className="pointer-events-none absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-purple/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden />

              {/* Step number */}
              <span className="font-heading font-black text-3xl text-purple-gradient leading-none">
                {step.number}
              </span>

              {/* Divider */}
              <div className="w-8 h-0.5 bg-brand-purple/30 group-hover:bg-brand-purple/60 transition-colors rounded-full" aria-hidden />

              {/* Content */}
              <h3 className="font-heading font-bold text-sm text-white">{step.title}</h3>
              <p className="font-body text-xs text-brand-gray leading-relaxed">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
