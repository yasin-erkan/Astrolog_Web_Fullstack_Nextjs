import { notFound } from 'next/navigation';
import { getTranslations } from '@/i18n/translations';
import type { Locale } from '@/i18n/types';
import { ZODIAC_SLUGS, isValidZodiacSlug } from '../slugs';
import SectionSubPageContent from '@/components/SectionSubPageContent';

type SubBlock = { metaTitle: string; metaDescription: string; title: string; intro: string; body1: string; body2?: string; highlights?: readonly string[] };
type LocaleWithSub = { zodiacSub: Record<string, SubBlock> };

export async function generateStaticParams() {
  const locales: Locale[] = ['en', 'tr', 'de', 'fr'];
  return locales.flatMap((lang) => ZODIAC_SLUGS.map((slug) => ({ lang, slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  if (!isValidZodiacSlug(slug)) return { title: 'Zodiac | Astrolog Umran' };
  const { locale } = getTranslations(lang);
  const block = (locale as LocaleWithSub).zodiacSub?.[slug];
  return { title: block?.metaTitle ?? `${slug} | Astrolog Umran`, description: block?.metaDescription };
}

export default async function ZodiacSlugPage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  if (!isValidZodiacSlug(slug)) notFound();
  const { locale } = getTranslations(lang);
  const page = (locale as LocaleWithSub).zodiacSub?.[slug] ?? null;
  return (
    <SectionSubPageContent
      page={page ? { title: page.title, intro: page.intro, body1: page.body1, body2: page.body2, highlights: page.highlights } : null}
      fallbackTitle={slug}
      fallbackBody="Content for this sign is being prepared."
    />
  );
}
