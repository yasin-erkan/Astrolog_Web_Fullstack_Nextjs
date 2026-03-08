import {getTranslations} from '@/i18n/translations';
import HeroSection from '@/components/hero/HeroSection';
import ZodiacSection from '@/components/home/ZodiacSection';

export default async function Home({
  params,
}: {
  params: Promise<{lang: string}>;
}) {
  const {lang} = await params;
  const {locale} = getTranslations(lang);
  const signs = locale.home.zodiacSigns;

  return (
    <main>
      <HeroSection
        subtitle={locale.home.heroSubtitle}
        ctaText={locale.home.bookConsultation}
        floatingLabel={locale.home.heroFloatingLabel}
        lang={lang}
      />

      <ZodiacSection signs={signs} title={locale.home.yourSkyGuide} />
    </main>
  );
}
