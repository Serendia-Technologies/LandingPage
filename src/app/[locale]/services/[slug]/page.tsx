import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { getServiceBySlug, serviceSlugs } from '@/data/services';
import ServiceHero from '@/components/services/ServiceHero';
import ServiceProcess from '@/components/services/ServiceProcess';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceCTA from '@/components/services/ServiceCTA';

type Props = {
  params: Promise<{ slug: string; locale: string }>;
};

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  const t = await getTranslations({
    locale,
    namespace: `serviceDetail.${service.translationKey}`,
  });
  return {
    title: `${t('title')} | Serendia`,
    description: t('subtitle'),
    alternates: {
      languages: {
        es: `/es/services/${slug}`,
        en: `/en/services/${slug}`,
        pt: `/pt/services/${slug}`,
      },
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <ServiceHero service={service} />
      <ServiceProcess service={service} />
      <ServiceBenefits service={service} />
      <ServiceCTA service={service} />
    </>
  );
}
