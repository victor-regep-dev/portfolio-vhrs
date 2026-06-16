'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { type Lang, type Translations } from '@/lib/i18n';

interface AllProjectsProps {
  lang: Lang;
  t: Translations;
}

const allProjects = [
  { key: 'maua', image: '/images/maua-dashboard.png', ready: true },
  { key: 'revox', image: '/images/revox-mockup.png', ready: true },
  { key: 'bsgroup', image: '/images/bsgroup-homepage.png', ready: false },
  { key: 'kilimo', image: '/images/kilimo-design-system.png', ready: false },
  { key: 'nordea', image: '/images/nordea-blueprint.png', ready: false },
  { key: 'novoNordisk', image: '/images/novo-nordisk-design-system.png', ready: false },
  { key: 'volksbank', image: '/images/volksbank-design-system.png', ready: false },
];

export function AllProjects({ lang, t }: AllProjectsProps) {
  const hrefBase = lang === 'pt' ? 'projetos' : 'projects';

  return (
    <section
      id="todos-projetos"
      aria-label={t.allProjects.title}
      className="section-padding relative bg-brand-black overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" aria-hidden />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <SectionTitle title={t.allProjects.title} highlightWords={['Todos', 'All']} size="xl" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allProjects.map(({ key, image, ready }, i) => {
            const project = t.projects[key as keyof typeof t.projects] as {
              badge: string; title: string; country: string; summary: string; comingSoon?: boolean;
            };
            const href = `/${lang}/${hrefBase}/${key === 'novoNordisk' ? 'novo-nordisk' : key === 'bsgroup' ? 'bsgroup' : key}`;

            return (
              <motion.article
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`group relative flex flex-col rounded-2xl overflow-hidden border transition-all duration-300 ${
                  ready
                    ? 'bg-brand-card border-brand-border hover:border-brand-border-hover hover:shadow-glow-md'
                    : 'bg-brand-card/60 border-brand-border/50 opacity-75'
                }`}
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={image}
                    alt={project.title}
                    fill
                    className={`object-cover object-top transition-transform duration-500 ${ready ? 'group-hover:scale-105' : 'grayscale-[40%]'}`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to bottom, transparent 30%, rgba(15,15,26,1) 100%)' }}
                    aria-hidden
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant={ready ? 'purple' : 'gray'}>{project.badge}</Badge>
                  </div>
                  {!ready && (
                    <div className="absolute top-3 right-3">
                      <Badge variant="gray">
                        <Clock size={10} aria-hidden />
                        {t.featuredProjects.comingSoon}
                      </Badge>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2 p-5 flex-1">
                  <h3 className="font-heading font-bold text-base text-white">{project.title}</h3>
                  <div className="flex items-center gap-1.5 text-xs text-brand-gray font-body">
                    <MapPin size={11} className="text-brand-violet shrink-0" aria-hidden />
                    <span>{project.country}</span>
                  </div>
                  <p className="font-body text-xs text-brand-gray leading-relaxed flex-1 line-clamp-2">{project.summary}</p>

                  {ready ? (
                    <Link
                      href={href}
                      className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-violet hover:text-brand-lilac transition-colors"
                      aria-label={`${t.featuredProjects.cta}: ${project.title}`}
                    >
                      {t.featuredProjects.cta}
                      <ArrowRight size={14} aria-hidden />
                    </Link>
                  ) : (
                    <span className="mt-2 inline-flex items-center gap-1.5 text-xs text-brand-gray/50 font-body">
                      <Clock size={12} aria-hidden />
                      {t.featuredProjects.comingSoon}
                    </span>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
