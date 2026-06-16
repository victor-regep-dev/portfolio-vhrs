import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-vhrs.vercel.app'),
  title: {
    default: 'Victor Hugo Regep — System Product Designer, UX/UI & Front-End Developer',
    template: '%s | Victor Hugo Regep',
  },
  description:
    'Portfolio of Victor Hugo Regep, System Product Designer, UX/UI Designer and Front-End Developer with 15+ years of experience creating digital products, Design Systems, SaaS platforms, responsive interfaces and AI-powered automations.',
  keywords: [
    'Product Designer', 'UX Designer', 'UI Designer', 'Front-End Developer',
    'Design Systems', 'SaaS', 'IA', 'Automação', 'Victor Hugo Regep',
    'System Product Designer', 'Portfolio', 'Next.js', 'React',
  ],
  authors: [{ name: 'Victor Hugo Regep' }],
  creator: 'Victor Hugo Regep',
  openGraph: {
    type: 'profile',
    locale: 'pt_BR',
    alternateLocale: 'en',
    url: 'https://portfolio-vhrs.vercel.app/',
    siteName: 'Victor Hugo Regep — System Product Designer',
    title: 'Victor Hugo Regep — System Product Designer, UX/UI & Front-End Developer',
    description:
      'Portfolio de Victor Hugo Regep, System Product Designer com 15+ anos de experiência em Design, Front-End, Design Systems, SaaS e automações com IA.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Victor Hugo Regep — System Product Designer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Victor Hugo Regep — System Product Designer',
    description: 'System Product Designer com 15+ anos conectando design, front-end, IA e SaaS.',
    images: ['/images/og-image.png'],
    creator: '@victorregep',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: {
    canonical: 'https://portfolio-vhrs.vercel.app/pt',
    languages: {
      'pt-BR': 'https://portfolio-vhrs.vercel.app/pt',
      'en': 'https://portfolio-vhrs.vercel.app/en',
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="bg-brand-black text-white font-body antialiased">
        {children}
      </body>
    </html>
  );
}
