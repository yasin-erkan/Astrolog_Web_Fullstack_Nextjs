import { notFound } from 'next/navigation';
import { getTranslations } from '@/i18n/translations';
import type { Locale } from '@/i18n/types';
import { ACADEMY_SLUGS, SLUG_TO_LOCALE_KEY, SLUG_TO_NAV_KEY, isValidAcademySlug } from '../slugs';
import SectionSubPageContent from '@/components/SectionSubPageContent';

type SubBlock = { metaTitle: string; metaDescription: string; title: string; intro: string; body1: string; body2?: string; highlights?: readonly string[] };
type LocaleWithSub = { academySub: Record<string, SubBlock> };

export async function generateStaticParams() {
  const locales: Locale[] = ['en', 'tr', 'de', 'fr'];
  return locales.flatMap((lang) => ACADEMY_SLUGS.map((slug) => ({ lang, slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  if (!isValidAcademySlug(slug)) return { title: 'Academy | Astrolog Umran' };
  const { locale } = getTranslations(lang);
  const key = SLUG_TO_LOCALE_KEY[slug];
  const block = (locale as LocaleWithSub).academySub?.[key];
  return { title: block?.metaTitle ?? `${slug} | Astrolog Umran`, description: block?.metaDescription };
}

export default async function AcademySlugPage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  if (!isValidAcademySlug(slug)) notFound();
  const { t, locale } = getTranslations(lang);
  const key = SLUG_TO_LOCALE_KEY[slug];
  const navKey = SLUG_TO_NAV_KEY[slug];
  const page = (locale as LocaleWithSub).academySub?.[key] ?? null;
  return (
    <SectionSubPageContent
      page={page ? { title: page.title, intro: page.intro, body1: page.body1, body2: page.body2, highlights: page.highlights } : null}
      fallbackTitle={t(`nav.${navKey}`)}
      fallbackBody={t('common.contentComingSoon')}
    />
  );
}
