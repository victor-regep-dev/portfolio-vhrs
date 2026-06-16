'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { type Lang, type Translations } from '@/lib/i18n';

interface FeaturedProjectsProps {
  lang: Lang;
  t: Translations;
}

const projects = [
  {
    key: 'maua',
    image: '/images/maua-dashboard.png',
    href: (lang: Lang) => `/${lang}/${lang === 'pt' ? 'projetos' : 'projects'}/instituto-maua`,
  },
  {
    key: 'revox',
    image: '/images/revox-mockup.png',
    href: (lang: Lang) => `/${lang}/${lang === 'pt' ? 'projetos' : 'projects'}/revox-systems`,
  },
];

export function FeaturedProjects({ lang, t }: FeaturedProjectsProps) {
  return (
    <section
      id="projetos"
      aria-label={t.featuredProjects.title}
      className="section-padding relative bg-brand-graphite overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" aria-hidden />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Header row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between gap-4 mb-12 flex-wrap"
        >
          <SectionTitle
            title={t.featuredProjects.title}
            highlightWords={['destaque', 'Featured']}
            size="xl"
          />
          <button
            onClick={() => document.getElementById('todos-projetos')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-outline inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold shrink-0"
          >
            {t.featuredProjects.viewAll}
            <ArrowRight size={16} aria-hidden />
          </button>
        </motion.div>

        {/* Project cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map(({ key, image, href }, i) => {
            const project = t.projects[key as keyof typeof t.projects] as {
              badge: string; title: string; country: string; summary: string;
            };
            return (
              <motion.article
                key={key}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group relative flex flex-col rounded-2xl overflow-hidden bg-brand-card border border-brand-border hover:border-brand-border-hover hover:shadow-glow-lg transition-all duration-400"
              >
                {/* Image */}
                <div className="relative h-56 md:h-64 overflow-hidden">
                  <Image
                    src={image}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(15,15,26,0.95) 100%)' }}
                    aria-hidden
                  />
                  {/* Badge over image */}
                  <div className="absolute top-4 left-4">
                    <Badge variant="purple">{project.badge}</Badge>
                  </div>
                  {/* Purple glow effect on hover */}
                  <div className="absolute inset-0 bg-brand-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" aria-hidden />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3 p-6 flex-1">
                  <h3 className="font-heading font-bold text-xl text-white">{project.title}</h3>

                  <div className="flex items-center gap-1.5 text-xs text-brand-gray font-body">
                    <MapPin size={12} className="text-brand-violet shrink-0" aria-hidden />
                    <span>{project.country}</span>
                  </div>

                  <p className="font-body text-sm text-brand-gray leading-relaxed flex-1">
                    {project.summary}
                  </p>

                  <Link
                    href={href(lang)}
                    className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-brand-violet hover:text-brand-lilac transition-colors group/link"
                    aria-label={`${t.featuredProjects.cta}: ${project.title}`}
                  >
                    {t.featuredProjects.cta}
                    <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" aria-hidden />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
