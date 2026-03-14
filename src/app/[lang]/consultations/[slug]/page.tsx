import { notFound } from 'next/navigation';
import { getTranslations } from '@/i18n/translations';
import type { Locale } from '@/i18n/types';
import { CONSULTATION_SLUGS, SLUG_TO_LOCALE_KEY, SLUG_TO_NAV_KEY, isValidConsultationSlug } from '../slugs';
import ConsultationSubPageContent from '../ConsultationSubPageContent';

type SubBlock = {
  metaTitle: string;
  metaDescription: string;
  title: string;
  intro: string;
  body1: string;
  body2?: string;
  highlights?: readonly string[];
};

type LocaleWithSub = { consultationsSub: Record<string, SubBlock> };

export async function generateStaticParams() {
  const locales: Locale[] = ['en', 'tr', 'de', 'fr'];
  return locales.flatMap((lang) =>
    CONSULTATION_SLUGS.map((slug) => ({ lang, slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!isValidConsultationSlug(slug)) return { title: 'Consultations | Astrolog Umran' };
  const { locale } = getTranslations(lang);
  const key = SLUG_TO_LOCALE_KEY[slug];
  const block = (locale as LocaleWithSub).consultationsSub?.[key];
  return {
    title: block?.metaTitle ?? `${slug} | Astrolog Umran`,
    description: block?.metaDescription,
  };
}

export default async function ConsultationSlugPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!isValidConsultationSlug(slug)) notFound();
  const { t, locale } = getTranslations(lang);
  const key = SLUG_TO_LOCALE_KEY[slug];
  const navKey = SLUG_TO_NAV_KEY[slug];
  const page = (locale as LocaleWithSub).consultationsSub?.[key] ?? null;
  return (
    <ConsultationSubPageContent
      page={page}
      fallbackTitle={t(`nav.${navKey}`)}
      fallbackBody={t('common.contentComingSoon')}
    />
  );
}
