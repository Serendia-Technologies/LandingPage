import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import HeroSection from '@/components/home/HeroSection';
import ServicesOverview from '@/components/home/ServicesOverview';
import WhySerendia from '@/components/home/WhySerendia';
import HowWeWork from '@/components/home/HowWeWork';
import Testimonials from '@/components/home/Testimonials';
import ClientLogos from '@/components/home/ClientLogos';
import CTABanner from '@/components/home/CTABanner';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      languages: {
        es: '/es',
        en: '/en',
        pt: '/pt',
      },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      locale,
      type: 'website',
    },
  };
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <WhySerendia />
      <HowWeWork />
      <Testimonials />
      <ClientLogos />
      <CTABanner />
    </>
  );
}
