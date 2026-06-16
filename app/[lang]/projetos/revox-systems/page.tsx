import { getTranslations, isValidLang, type Lang } from '@/lib/i18n';
import { CaseStudyTemplate } from '@/components/case-study/CaseStudyTemplate';

export default async function RevoxSystemsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const validLang: Lang = isValidLang(lang) ? lang : 'pt';
  const t = getTranslations(validLang);

  return (
    <CaseStudyTemplate
      lang={validLang}
      t={t}
      projectKey="revox"
      imageSrc="/images/revox-mockup.png"
    />
  );
}
