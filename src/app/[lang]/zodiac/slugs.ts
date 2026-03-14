export const ZODIAC_SLUGS = [
  'aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo',
  'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces',
] as const;

export type ZodiacSlug = (typeof ZODIAC_SLUGS)[number];

export function isValidZodiacSlug(slug: string): slug is ZodiacSlug {
  return ZODIAC_SLUGS.includes(slug as ZodiacSlug);
}
