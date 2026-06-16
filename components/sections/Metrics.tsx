'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Layers, Code, Zap, Users } from 'lucide-react';
import { type Lang, type Translations } from '@/lib/i18n';

interface MetricsProps {
  lang: Lang;
  t: Translations;
}

const iconMap: Record<string, React.ReactNode> = {
  award: <Award size={24} />,
  layers: <Layers size={24} />,
  figma: <Users size={24} />,
  code: <Code size={24} />,
  zap: <Zap size={24} />,
};

function AnimatedNumber({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (!isInView) return;
    const numericPart = parseInt(value.replace(/\D/g, ''), 10);
    const suffix = value.replace(/[0-9]/g, '');
    const duration = 1200;
    const steps = 40;
    const interval = duration / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += numericPart / steps;
      if (current >= numericPart) {
        setDisplay(`${numericPart}${suffix}`);
        clearInterval(timer);
      } else {
        setDisplay(`${Math.floor(current)}${suffix}`);
      }
    }, interval);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return <span ref={ref}>{display}</span>;
}

export function Metrics({ lang, t }: MetricsProps) {
  return (
    <section
      id="metricas"
      aria-label={lang === 'pt' ? 'Métricas e experiência' : 'Metrics and experience'}
      className="relative bg-brand-graphite py-8 overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0 bg-purple-glow opacity-20" aria-hidden />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {t.metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group flex items-start gap-3 p-4 rounded-xl hover:bg-brand-card/30 transition-all duration-300"
            >
              {/* Icon */}
              <div className="text-brand-violet group-hover:text-brand-lilac transition-colors mt-1">
                {iconMap[metric.icon] ?? <Zap size={24} />}
              </div>

              {/* Stacked Value and Label */}
              <div className="flex flex-col">
                <div className="font-heading font-bold text-3xl md:text-4xl text-purple-gradient leading-none">
                  <AnimatedNumber value={metric.value} />
                </div>
                <p className="font-body text-xs text-brand-gray mt-1 leading-snug">
                  {metric.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
