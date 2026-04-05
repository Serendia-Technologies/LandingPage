export const locales = ['es', 'en', 'pt'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'es';

export const localeNames: Record<Locale, string> = {
  es: 'Español',
  en: 'English',
  pt: 'Português',
};

export const localeFlags: Record<Locale, string> = {
  es: 'fi-es',
  en: 'fi-gb',
  pt: 'fi-br',
};

export const localeCodes: Record<Locale, string> = {
  es: 'ES',
  en: 'EN',
  pt: 'PT',
};
