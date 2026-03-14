/**
 * Consultation sub-pages: URL slug → locale key (consultationsSub) and nav key (fallback title).
 * Single source of truth for valid slugs and mappings.
 */

export const CONSULTATION_SLUGS = [
  'birth-chart',
  'synastry',
  'horary',
  'rectification',
  'karmic',
  'spiritual-guidance',
  'electional',
  'predictive',
  'solar-return',
  'composite',
  'business-partnership',
] as const;

export type ConsultationSlug = (typeof CONSULTATION_SLUGS)[number];

/** URL slug → key in locale.consultationsSub */
export const SLUG_TO_LOCALE_KEY: Record<ConsultationSlug, string> = {
  'birth-chart': 'birthChart',
  'synastry': 'synastry',
  'horary': 'horary',
  'rectification': 'rectification',
  'karmic': 'karmic',
  'spiritual-guidance': 'spiritualGuidance',
  'electional': 'electional',
  'predictive': 'predictive',
  'solar-return': 'solarReturn',
  'composite': 'composite',
  'business-partnership': 'businessPartnership',
};

/** URL slug → nav key for fallback title (t('nav.xxx')) */
export const SLUG_TO_NAV_KEY: Record<ConsultationSlug, string> = {
  'birth-chart': 'natalChart',
  'synastry': 'synastry',
  'horary': 'horaryAstrology',
  'rectification': 'rectification',
  'karmic': 'karmic',
  'spiritual-guidance': 'spiritualGuidance',
  'electional': 'electional',
  'predictive': 'predictiveAstrology',
  'solar-return': 'solarReturn',
  'composite': 'composite',
  'business-partnership': 'businessPartnership',
};

export function isValidConsultationSlug(slug: string): slug is ConsultationSlug {
  return CONSULTATION_SLUGS.includes(slug as ConsultationSlug);
}
