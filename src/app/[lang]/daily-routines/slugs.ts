export const DAILY_ROUTINES_SLUGS = ['planet-salutation', 'theta-intentions', 'crystal-guidance', 'bodily-awareness'] as const;

export type DailyRoutinesSlug = (typeof DAILY_ROUTINES_SLUGS)[number];

export const SLUG_TO_LOCALE_KEY: Record<DailyRoutinesSlug, string> = {
  'planet-salutation': 'planetSalutation', 'theta-intentions': 'thetaIntentions',
  'crystal-guidance': 'crystalGuidance', 'bodily-awareness': 'bodilyAwareness',
};

export const SLUG_TO_NAV_KEY: Record<DailyRoutinesSlug, string> = {
  'planet-salutation': 'planetSalutation', 'theta-intentions': 'thetaIntentions',
  'crystal-guidance': 'crystalGuidance', 'bodily-awareness': 'bodilyAwareness',
};

export function isValidDailyRoutinesSlug(slug: string): slug is DailyRoutinesSlug {
  return DAILY_ROUTINES_SLUGS.includes(slug as DailyRoutinesSlug);
}
