import type { Metadata } from 'next';
import { getTranslations, isValidLang, type Lang } from '@/lib/i18n';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

interface LangLayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export async function generateStaticParams() {
  return [{ lang: 'pt' }, { lang: 'en' }];
}

export async function generateMetadata({ params }: LangLayoutProps): Promise<Metadata> {
  const { lang } = await params;
  const validLang: Lang = isValidLang(lang) ? lang : 'pt';
  const t = getTranslations(validLang);

  return {
    title: t.seo.title,
    description: t.seo.description,
    alternates: {
      canonical: `https://portfolio-vhrs.vercel.app/${validLang}`,
      languages: {
        'pt-BR': 'https://portfolio-vhrs.vercel.app/pt',
        'en': 'https://portfolio-vhrs.vercel.app/en',
      },
    },
    openGraph: {
      locale: validLang === 'pt' ? 'pt_BR' : 'en',
      alternateLocale: validLang === 'pt' ? 'en' : 'pt_BR',
    },
  };
}

export default async function LangLayout({ children, params }: LangLayoutProps) {
  const { lang } = await params;
  const validLang: Lang = isValidLang(lang) ? lang : 'pt';
  const t = getTranslations(validLang);

  return (
    <>
      <Header lang={validLang} t={t} />
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <Footer lang={validLang} t={t} />
    </>
  );
}
