import {getTranslations} from '@/i18n/translations';

export async function generateMetadata({params}: {params: Promise<{lang: string}>}) {
  const {lang} = await params;
  const {locale} = getTranslations(lang);
  const page = (locale as {healingPage?: {metaTitle?: string; metaDescription?: string}}).healingPage;
  return {
    title: page?.metaTitle ?? 'Healing | Astrolog Umran',
    description: page?.metaDescription ?? undefined,
  };
}

export default async function HealingPage({
  params,
}: {
  params: Promise<{lang: string}>;
}) {
  const {lang} = await params;
  const {t, locale} = getTranslations(lang);
  const page = (locale as unknown as {
    healingPage: {
      title: string;
      intro: string;
      body1: string;
      body2?: string;
      highlights?: readonly string[];
    };
  }).healingPage;
  return (
    <main className="max-w-[900px] mx-auto px-4 sm:px-6 py-10 sm:py-16">
      <h1 className="font-cinzel text-3xl md:text-4xl theme-text tracking-wide mb-6">
        {page.title || t('pages.healing')}
      </h1>
      <p className="theme-text opacity-90 leading-relaxed mb-4">{page.intro}</p>
      <p className="theme-text opacity-90 leading-relaxed mb-4">{page.body1}</p>
      {page.body2 && <p className="theme-text opacity-90 leading-relaxed mb-4">{page.body2}</p>}
      {page.highlights && page.highlights.length > 0 && (
        <ul className="list-disc pl-5 space-y-1 theme-text opacity-90">
          {page.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </main>
  );
}
