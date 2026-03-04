import {getTranslations} from '@/i18n/translations';

export default async function SkyCalendarPage({
  params,
}: {
  params: Promise<{lang: string}>;
}) {
  const {lang} = await params;
  const {t} = getTranslations(lang);
  return (
    <main className="max-w-[900px] mx-auto px-4 sm:px-6 py-10 sm:py-16">
      <h1 className="font-cinzel text-3xl md:text-4xl theme-text tracking-wide mb-6">{t('nav.skyCalendar')}</h1>
      <p className="theme-text opacity-90 leading-relaxed">{t('common.contentComingSoon')}</p>
    </main>
  );
}
