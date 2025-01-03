import { i18nEn } from '@/i18n/en';
import { i18nRu } from '@/i18n/ru';
import { i18nPt } from '@/i18n/pt';
import { I18nLocaleInterface } from '@/i18n/i18n.interface';

export const getI18n = (lang: string): I18nLocaleInterface => {
  switch (lang) {
    case 'en':
      return i18nEn;
    case 'ru':
      return i18nRu;
    case 'pt':
      return i18nPt;
    default: {
      throw new Error(`Language ${lang} is not supported`);
    }
  }
};

export const replaceTextVars = (string: string, object: Record<string, string>) =>
  string.replaceAll(/\{([^}]+)\}/gi, (_, a) => a.split('.').reduce((b, c) => b?.[c], object));
