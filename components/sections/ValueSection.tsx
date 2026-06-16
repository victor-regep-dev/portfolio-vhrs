'use client';

import { motion } from 'framer-motion';
import { Target, PenTool, LayoutGrid, Code2, Bot } from 'lucide-react';
import { IconCard } from '@/components/ui/IconCard';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { type Lang, type Translations } from '@/lib/i18n';

interface ValueSectionProps {
  lang: Lang;
  t: Translations;
}

const iconMap: Record<string, React.ReactNode> = {
  target: <Target size={22} />,
  'pen-tool': <PenTool size={22} />,
  'layout-grid': <LayoutGrid size={22} />,
  code2: <Code2 size={22} />,
  bot: <Bot size={22} />,
};

export function ValueSection({ lang, t }: ValueSectionProps) {
  return (
    <section
      id="valor"
      aria-label={t.value.title}
      className="section-padding relative bg-brand-black overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" aria-hidden />
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full"
        style={{ background: 'radial-gradient(ellipse, rgba(138,43,255,0.08) 0%, transparent 70%)' }}
        aria-hidden
      />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <SectionTitle
            title={t.value.title}
            highlightWords={['valor', 'value']}
            align="center"
            size="xl"
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {t.value.cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <IconCard
                icon={iconMap[card.icon] ?? <Target size={22} />}
                title={card.title}
                text={card.text}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
