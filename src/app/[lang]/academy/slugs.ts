export const ACADEMY_SLUGS = ['beginner', 'recordings', 'sky-calendar', 'blog'] as const;

export type AcademySlug = (typeof ACADEMY_SLUGS)[number];

export const SLUG_TO_LOCALE_KEY: Record<AcademySlug, string> = {
  'beginner': 'beginner', 'recordings': 'recordings', 'sky-calendar': 'skyCalendar', 'blog': 'blog',
};

export const SLUG_TO_NAV_KEY: Record<AcademySlug, string> = {
  'beginner': 'beginnerAstrology', 'recordings': 'workshopRecordings', 'sky-calendar': 'skyCalendar', 'blog': 'blog',
};

export function isValidAcademySlug(slug: string): slug is AcademySlug {
  return ACADEMY_SLUGS.includes(slug as AcademySlug);
}
