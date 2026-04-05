import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import ContactForm from '@/components/contact/ContactForm';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contact' });
  return {
    title: `${t('formTitle')} | Serendia`,
    description: t('formSubtitle'),
    alternates: {
      languages: {
        es: '/es/contact',
        en: '/en/contact',
        pt: '/pt/contact',
      },
    },
  };
}

export default function ContactPage() {
  return <ContactForm />;
}
