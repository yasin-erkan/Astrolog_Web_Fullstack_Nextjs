/**
 * Central i18n: merges locale modules and exposes getTranslations.
 * Add new domains in locales/*.ts and merge below.
 */

import type { Locale } from './types';
import { navLocales } from './locales/nav';
import { homeLocales } from './locales/home';
import { blogLocales } from './locales/blog';
import { pagesLocales } from './locales/pages';
import { consultationsSubLocales } from './locales/consultationsSub';
import { healingSubLocales } from './locales/healingSub';
import { academySubLocales } from './locales/academySub';
import { dailyRoutinesSubLocales } from './locales/dailyRoutinesSub';
import { zodiacSubLocales } from './locales/zodiacSub';

function mergeEn() {
  return {
    ...navLocales.en,
    ...homeLocales.en,
    blog: blogLocales.en.blog,
    ...pagesLocales.en,
    consultationsSub: consultationsSubLocales.en,
    healingSub: healingSubLocales.en,
    academySub: academySubLocales.en,
    dailyRoutinesSub: dailyRoutinesSubLocales.en,
    zodiacSub: zodiacSubLocales.en,
  };
}

function mergeTr() {
  return {
    ...navLocales.tr,
    ...homeLocales.tr,
    blog: blogLocales.tr.blog,
    ...pagesLocales.tr,
    consultationsSub: consultationsSubLocales.tr,
    healingSub: healingSubLocales.tr,
    academySub: academySubLocales.tr,
    dailyRoutinesSub: dailyRoutinesSubLocales.tr,
    zodiacSub: zodiacSubLocales.tr,
  };
}

function mergeDe() {
  return {
    ...navLocales.de,
    ...homeLocales.de,
    blog: blogLocales.de.blog,
    ...pagesLocales.de,
    consultationsSub: consultationsSubLocales.de,
    healingSub: healingSubLocales.de,
    academySub: academySubLocales.de,
    dailyRoutinesSub: dailyRoutinesSubLocales.de,
    zodiacSub: zodiacSubLocales.de,
  };
}

function mergeFr() {
  return {
    ...navLocales.fr,
    ...homeLocales.fr,
    blog: blogLocales.fr.blog,
    ...pagesLocales.fr,
    consultationsSub: consultationsSubLocales.fr,
    healingSub: healingSubLocales.fr,
    academySub: academySubLocales.fr,
    dailyRoutinesSub: dailyRoutinesSubLocales.fr,
    zodiacSub: zodiacSubLocales.fr,
  };
}

export type { Locale };
export type { PageBlock, MetaBlock, ZodiacSign } from './types';

export const translations = {
  en: mergeEn(),
  tr: mergeTr(),
  de: mergeDe(),
  fr: mergeFr(),
} as const;

function getByPath(obj: unknown, path: string): unknown {
  return path.split('.').reduce((acc: unknown, key) => (acc as Record<string, unknown>)?.[key], obj);
}

export function getTranslations(lang: string) {
  const locale = (translations[lang as Locale] ?? translations.en) as (typeof translations)['en'];
  return {
    t: (key: string): string => {
      let v = getByPath(locale, key);
      if (v === undefined && key.includes('.')) {
        const parts = key.split('.');
        const top = (locale as Record<string, unknown>)[parts[0]!];
        if (parts.length >= 2 && top && typeof top === 'object') {
          const subKey = parts.slice(1).join('.');
          v = (top as Record<string, string>)[subKey];
        }
      }
      return typeof v === 'string' ? v : (v ? String(v) : key);
    },
    locale: locale as (typeof translations)['en'],
  };
}
