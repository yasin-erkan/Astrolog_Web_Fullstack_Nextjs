import {getTranslations} from '@/i18n/translations';
import HeroSection from '@/components/hero/HeroSection';

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

      {/* Zodiac signs: card grid with hover glow / lift */}
      <section className="max-w-7xl mx-auto py-12 sm:py-16 md:py-24 px-4 sm:px-6 theme-bg">
        <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl text-center mb-10 md:mb-16 theme-text">
          {locale.home.yourSkyGuide}
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-3 sm:gap-4 md:gap-5">
          {signs.map(sign => (
            <div
              key={sign.name}
              className="zodiac-card group/card cursor-pointer rounded-xl border theme-border bg-(--theme-bg) p-4 sm:p-5 flex flex-col items-center justify-center text-center transition-all duration-300 ease-out hover:border-astro-gold hover:shadow-[0_0_28px_rgba(179,145,110,0.22)] hover:shadow-astro-gold/20 hover:-translate-y-1 hover:scale-[1.02] focus-within:border-astro-gold focus-within:shadow-[0_0_28px_rgba(179,145,110,0.22)] focus-within:-translate-y-1 focus-within:scale-[1.02] focus:outline-none">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 theme-border flex items-center justify-center mb-3 transition-all duration-300 group-hover/card:border-astro-gold group-hover/card:shadow-[0_0_24px_rgba(179,145,110,0.35)] group-hover/card:scale-110 group-hover/card:bg-astro-gold/5">
                <span className="text-2xl sm:text-3xl transition-transform duration-300 group-hover/card:scale-110">{sign.symbol}</span>
              </div>
              <span className="text-[10px] sm:text-xs font-montserrat uppercase tracking-widest text-(--theme-text)/70 transition-colors duration-300 group-hover/card:text-astro-gold">
                {sign.name}
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
