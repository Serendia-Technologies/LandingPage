import type { MetadataRoute } from 'next';
import { locales } from '@/i18n/config';
import { serviceSlugs } from '@/data/services';

const BASE_URL = 'https://serendia.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/about', '/contact'];
  const servicePages = serviceSlugs.map((slug) => `/services/${slug}`);
  const allPages = [...pages, ...servicePages];

  const entries: MetadataRoute.Sitemap = [];

  for (const page of allPages) {
    for (const locale of locales) {
      entries.push({
        url: `${BASE_URL}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: page === '' ? 1 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${BASE_URL}/${l}${page}`])
          ),
        },
      });
    }
  }

  return entries;
}
