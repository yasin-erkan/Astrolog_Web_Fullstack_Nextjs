import {getTranslations} from '@/i18n/translations';
import HolisticMovementPhoto from '@/components/healing/HolisticMovementPhoto';

export default async function HolisticMovementPage({params}: {params: Promise<{lang: string}>}) {
  const {lang} = await params;
  const {t, locale} = getTranslations(lang);
  const hm = (locale as {holisticMovement?: {intro: string; body1: string; body2: string; photoAlt: string}}).holisticMovement;
  return (
    <main className="max-w-[900px] mx-auto px-4 sm:px-6 py-10 sm:py-14">
      <h1 className="font-cinzel text-2xl sm:text-3xl theme-text tracking-wide mb-6">
        {t('nav.holisticMovementPilates')}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 mb-8">
        <div className="md:col-span-2 flex-shrink-0">
          <HolisticMovementPhoto alt={hm?.photoAlt ?? 'Holistic Movement and Pilates'} />
        </div>
        <div className="md:col-span-3 theme-text text-sm sm:text-base opacity-90 leading-relaxed flex flex-col justify-center">
          <p>{hm?.intro}</p>
        </div>
      </div>

      <div className="theme-text opacity-90 text-sm sm:text-base space-y-4 leading-relaxed">
        <p>{hm?.body1}</p>
        <p>{hm?.body2}</p>
      </div>
    </main>
  );
}
