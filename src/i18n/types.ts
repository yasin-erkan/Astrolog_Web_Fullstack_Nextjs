/**
 * i18n type definitions. Ensures every locale module exposes the same shape.
 */

export type Locale = 'en' | 'tr' | 'de' | 'fr';

/** SEO + page content block used for main and sub-pages */
export interface PageBlock {
  metaTitle: string;
  metaDescription: string;
  title: string;
  intro: string;
  body1: string;
  body2?: string;
  highlights?: readonly string[];
}

/** Shorthand for pages that only need title + description (e.g. meta only) */
export interface MetaBlock {
  metaTitle: string;
  metaDescription: string;
}

export type ZodiacElement = 'fire' | 'earth' | 'air' | 'water';

/** Zodiac sign entry for home: name, symbol, slug (URL), element, keywords (3 for tooltip) */
export interface ZodiacSign {
  name: string;
  symbol: string;
  slug: string;
  element: ZodiacElement;
  keywords: readonly [string, string, string];
}
