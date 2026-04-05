import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import CompanyStory from '@/components/about/CompanyStory';
import Values from '@/components/about/Values';
import Team from '@/components/about/Team';
import CTABanner from '@/components/home/CTABanner';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });
  const meta = await getTranslations({ locale, namespace: 'metadata' });
  return {
    title: `${t('storyLabel')} | Serendia`,
    description: meta('description'),
    alternates: {
      languages: {
        es: '/es/about',
        en: '/en/about',
        pt: '/pt/about',
      },
    },
  };
}

export default function AboutPage() {
  return (
    <>
      <CompanyStory />
      <Values />
      <Team />
      <CTABanner />
    </>
  );
}
