import { pt } from './pt';
import { en } from './en';

export type Lang = 'pt' | 'en';
export type Translations = typeof pt | typeof en;

export const translations = { pt, en } as const;

export function getTranslations(lang: Lang): Translations {
  return translations[lang] ?? pt;
}

export function isValidLang(lang: string): lang is Lang {
  return lang === 'pt' || lang === 'en';
}
