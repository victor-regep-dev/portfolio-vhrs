'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { type Lang, type Translations } from '@/lib/i18n';

interface CaseStudyTemplateProps {
  lang: Lang;
  t: Translations;
  projectKey: keyof Translations['projects'];
  imageSrc: string;
}

export function CaseStudyTemplate({ lang, t, projectKey, imageSrc }: CaseStudyTemplateProps) {
  const project = (t.projects[projectKey] as unknown) as {
    badge: string;
    fullTitle: string;
    country: string;
    summary: string;
    role: string;
    badges: string[];
    impact: string;
    confidential: string;
  };
  const isPt = lang === 'pt';

  return (
    <article className="min-h-screen bg-brand-black pt-24 pb-16">
      {/* Background elements */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" aria-hidden />
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full"
        style={{ background: 'radial-gradient(ellipse, rgba(138,43,255,0.15) 0%, transparent 70%)' }}
        aria-hidden
      />

      <div className="container mx-auto px-4 md:px-6 max-w-5xl relative z-10">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <Link
            href={`/${lang}#projetos`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-gray hover:text-white transition-colors group"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" aria-hidden />
            {isPt ? 'Voltar para Projetos' : 'Back to Projects'}
          </Link>
        </motion.div>

        <div className="flex flex-col gap-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-5"
          >
            <div className="flex flex-wrap gap-2">
              {project.badges.map((b) => (
                <Badge key={b} variant="outline">{b}</Badge>
              ))}
            </div>

            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
              {project.fullTitle}
            </h1>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-brand-gray font-body text-sm">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-brand-violet" />
                <span>{project.country}</span>
              </div>
              <span className="hidden sm:inline text-brand-border">•</span>
              <span className="font-semibold text-white/90">{project.role}</span>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden border border-brand-border shadow-glow-lg mt-4"
          >
            <Image
              src={imageSrc}
              alt={`${project.fullTitle} Mockup`}
              fill
              className="object-cover object-top"
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 to-transparent" aria-hidden />
          </motion.div>

          {/* Impact & Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 mt-8"
          >
            <div className="flex flex-col gap-4">
              <h2 className="font-heading font-bold text-2xl text-white">
                {isPt ? 'O Desafio & Visão' : 'Challenge & Vision'}
              </h2>
              <p className="font-body text-brand-gray text-base md:text-lg leading-relaxed">
                {project.summary}
              </p>
            </div>
            
            <div className="flex flex-col gap-4 p-6 rounded-2xl bg-brand-card border border-brand-border">
              <h2 className="font-heading font-bold text-xl text-brand-violet">
                {isPt ? 'Impacto & Resultados' : 'Impact & Results'}
              </h2>
              <p className="font-body text-white/90 text-base leading-relaxed">
                {project.impact}
              </p>
            </div>
          </motion.div>

          {/* Confidentiality Notice */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 p-4 rounded-xl border border-brand-purple/20 bg-brand-purple/5"
          >
            <p className="font-body text-xs text-brand-gray/80 italic text-center">
              {project.confidential}
            </p>
          </motion.div>

        </div>
      </div>
    </article>
  );
}
