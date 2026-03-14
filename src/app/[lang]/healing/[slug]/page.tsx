import { notFound } from 'next/navigation';
import { getTranslations } from '@/i18n/translations';
import type { Locale } from '@/i18n/types';
import { HEALING_SLUGS, SLUG_TO_LOCALE_KEY, SLUG_TO_NAV_KEY, isValidHealingSlug } from '../slugs';
import SectionSubPageContent from '@/components/SectionSubPageContent';
import HolisticMovementPhoto from '@/components/healing/HolisticMovementPhoto';

type SubBlock = {
  metaTitle: string;
  metaDescription: string;
  title: string;
  intro: string;
  body1: string;
  body2?: string;
  highlights?: readonly string[];
  photoAlt?: string;
};

type LocaleWithSub = { healingSub: Record<string, SubBlock> };

export async function generateStaticParams() {
  const locales: Locale[] = ['en', 'tr', 'de', 'fr'];
  return locales.flatMap((lang) => HEALING_SLUGS.map((slug) => ({ lang, slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  if (!isValidHealingSlug(slug)) return { title: 'Healing | Astrolog Umran' };
  const { locale } = getTranslations(lang);
  const key = SLUG_TO_LOCALE_KEY[slug];
  const block = (locale as LocaleWithSub).healingSub?.[key];
  return { title: block?.metaTitle ?? `${slug} | Astrolog Umran`, description: block?.metaDescription };
}

export default async function HealingSlugPage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  if (!isValidHealingSlug(slug)) notFound();
  const { t, locale } = getTranslations(lang);
  const key = SLUG_TO_LOCALE_KEY[slug];
  const navKey = SLUG_TO_NAV_KEY[slug];
  const page = (locale as LocaleWithSub).healingSub?.[key] ?? null;
  const rightSlot = slug === 'holistic-movement' && page?.photoAlt
    ? <HolisticMovementPhoto alt={page.photoAlt} />
    : undefined;
  return (
    <SectionSubPageContent
      page={page ? { title: page.title, intro: page.intro, body1: page.body1, body2: page.body2, highlights: page.highlights } : null}
      fallbackTitle={t(`nav.${navKey}`)}
      fallbackBody={t('common.contentComingSoon')}
      rightSlot={rightSlot}
    />
  );
}
