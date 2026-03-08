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
        introText={locale.home.heroIntro}
        headline={locale.home.heroHeadline}
        subtitle={locale.home.heroSubtitle}
        ctaText={locale.home.bookConsultation}
        floatingLabel={locale.home.heroFloatingLabel}
        lang={lang}
      />

      <section className="max-w-5xl mx-auto py-12 sm:py-16 px-4 theme-bg" aria-labelledby="services-heading">
        <h2 id="services-heading" className="font-cinzel text-2xl sm:text-3xl text-center text-astro-gold mb-10 theme-text">
          {locale.homeServicesTitle}
        </h2>
        <ul className="grid sm:grid-cols-3 gap-6 list-none">
          <li className="border theme-border rounded-xl p-5">
            <h3 className="font-cinzel text-lg text-astro-gold mb-2">{locale.homeAstrologyConsulting}</h3>
            <p className="text-sm theme-text opacity-90">{locale.homeAstrologyWestern} · {locale.homeAstrologyKarma} · {locale.homeAstrologyDraconic}</p>
          </li>
          <li className="border theme-border rounded-xl p-5">
            <h3 className="font-cinzel text-lg text-astro-gold mb-2">{locale.homeHolisticMovement}</h3>
            <p className="text-sm theme-text opacity-90">{locale.homePilatesPersonal}</p>
          </li>
          <li className="border theme-border rounded-xl p-5">
            <h3 className="font-cinzel text-lg text-astro-gold mb-2">{locale.homeConsciousnessTransformation}</h3>
            <p className="text-sm theme-text opacity-90">{locale.homeThetaHealing}</p>
          </li>
        </ul>
      </section>

      <section className="max-w-3xl mx-auto py-12 sm:py-16 px-4 theme-bg text-center" aria-labelledby="rituals-heading">
        <h2 id="rituals-heading" className="font-cinzel text-2xl sm:text-3xl text-astro-gold mb-3 theme-text">
          {locale.homeDailyRitualsTitle}
        </h2>
        <p className="font-montserrat text-sm sm:text-base theme-text/90 italic">{locale.homeDailyRitualsSubtitle}</p>
      </section>

      <ZodiacSection signs={signs} title={locale.home.yourSkyGuide} />
    </main>
  );
}
