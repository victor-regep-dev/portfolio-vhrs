'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { LayoutGrid, Code2, Bot } from 'lucide-react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { type Lang, type Translations } from '@/lib/i18n';

interface DesignCodeAIProps {
  lang: Lang;
  t: Translations;
}

const iconMap: Record<string, React.ReactNode> = {
  'layout-grid': <LayoutGrid size={22} />,
  code2: <Code2 size={22} />,
  bot: <Bot size={22} />,
};

export function DesignCodeAI({ lang, t }: DesignCodeAIProps) {
  return (
    <section
      id="design-code-ia"
      aria-label={t.designCodeAI.title}
      className="section-padding relative bg-brand-black overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" aria-hidden />

      {/* Big glow behind logo */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
        style={{ background: 'radial-gradient(ellipse, rgba(138,43,255,0.2) 0%, transparent 70%)' }}
        aria-hidden
      />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — Logo + headline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-8 items-start"
          >
            {/* Big VR logo */}
            <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-3xl overflow-hidden border border-brand-purple/30 shadow-glow-xl animate-glow-pulse">
              <Image
                src="/images/logo.png"
                alt="VR Logotipo — Victor Hugo Regep"
                fill
                className="object-contain p-4"
              />
              <div className="absolute inset-0 bg-purple-glow opacity-40" aria-hidden />
            </div>

            <SectionTitle
              title={t.designCodeAI.title}
              highlightWords={['código', 'IA', 'code', 'AI']}
              size="xl"
            />

            <p className="font-body text-brand-gray text-base leading-relaxed max-w-md">
              {t.designCodeAI.text}
            </p>
          </motion.div>

          {/* Right — 3 cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-5"
          >
            {t.designCodeAI.cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.12 }}
                className="group flex gap-5 p-5 rounded-2xl bg-brand-card border border-brand-border hover:border-brand-border-hover hover:shadow-glow-md hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden />
                <div className="shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-purple/10 border border-brand-purple/20 text-brand-violet group-hover:bg-brand-purple/20 transition-all">
                  {iconMap[card.icon] ?? <Code2 size={22} />}
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-heading font-bold text-base text-white">{card.title}</h3>
                  <p className="font-body text-sm text-brand-gray leading-relaxed">{card.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
