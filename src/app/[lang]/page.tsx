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
        <ul className="grid sm:grid-cols-3 gap-6 sm:gap-8 list-none">
          <li className="group rounded-2xl border border-astro-gold/20 theme-border theme-bg p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.12),0_0_0_1px_rgba(179,145,110,0.06)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.22),0_0_0_1px_rgba(179,145,110,0.15)] hover:-translate-y-1 hover:border-astro-gold/40">
            <h3 className="font-cinzel text-lg sm:text-xl text-astro-gold mb-2 tracking-wide">{locale.homeAstrologyConsulting}</h3>
            <p className="text-sm theme-text opacity-90 leading-relaxed">{locale.homeAstrologyWestern} · {locale.homeAstrologyKarma} · {locale.homeAstrologyDraconic}</p>
          </li>
          <li className="group rounded-2xl border border-astro-gold/20 theme-border theme-bg p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.12),0_0_0_1px_rgba(179,145,110,0.06)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.22),0_0_0_1px_rgba(179,145,110,0.15)] hover:-translate-y-1 hover:border-astro-gold/40">
            <h3 className="font-cinzel text-lg sm:text-xl text-astro-gold mb-2 tracking-wide">{locale.homeHolisticMovement}</h3>
            <p className="text-sm theme-text opacity-90 leading-relaxed">{locale.homePilatesPersonal}</p>
          </li>
          <li className="group rounded-2xl border border-astro-gold/20 theme-border theme-bg p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.12),0_0_0_1px_rgba(179,145,110,0.06)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.22),0_0_0_1px_rgba(179,145,110,0.15)] hover:-translate-y-1 hover:border-astro-gold/40">
            <h3 className="font-cinzel text-lg sm:text-xl text-astro-gold mb-2 tracking-wide">{locale.homeConsciousnessTransformation}</h3>
            <p className="text-sm theme-text opacity-90 leading-relaxed">{locale.homeThetaHealing}</p>
          </li>
        </ul>
      </section>

      <section className="max-w-3xl mx-auto py-12 sm:py-16 px-4 theme-bg text-center" aria-labelledby="rituals-heading">
        <h2 id="rituals-heading" className="font-cinzel text-2xl sm:text-3xl text-astro-gold mb-3 theme-text">
          {locale.homeDailyRitualsTitle}
        </h2>
        <p className="font-montserrat text-sm sm:text-base theme-text/90 italic">{locale.homeDailyRitualsSubtitle}</p>
      </section>

      <ZodiacSection signs={signs} title={locale.home.yourSkyGuide} subtitle={locale.home.yourSkyGuideSubtitle} lang={lang} />
    </main>
  );
}
