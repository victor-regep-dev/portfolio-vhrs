import { getTranslations, isValidLang, type Lang } from '@/lib/i18n';
import { Hero } from '@/components/sections/Hero';
import { Metrics } from '@/components/sections/Metrics';
import { WhyHireMe } from '@/components/sections/WhyHireMe';
import { FeaturedProjects } from '@/components/sections/FeaturedProjects';
import { AllProjects } from '@/components/sections/AllProjects';
import { TechStack } from '@/components/sections/TechStack';
import { ValueSection } from '@/components/sections/ValueSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { DesignCodeAI } from '@/components/sections/DesignCodeAI';
import { ContactCTA } from '@/components/sections/ContactCTA';

interface HomePageProps {
  params: Promise<{ lang: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { lang } = await params;
  const validLang: Lang = isValidLang(lang) ? lang : 'pt';
  const t = getTranslations(validLang);

  return (
    <>
      <Hero lang={validLang} t={t} />
      <Metrics lang={validLang} t={t} />
      <WhyHireMe lang={validLang} t={t} />
      <FeaturedProjects lang={validLang} t={t} />
      <AllProjects lang={validLang} t={t} />
      <TechStack lang={validLang} t={t} />
      <ValueSection lang={validLang} t={t} />
      <ProcessSection lang={validLang} t={t} />
      <DesignCodeAI lang={validLang} t={t} />
      <ContactCTA lang={validLang} t={t} />
    </>
  );
}
