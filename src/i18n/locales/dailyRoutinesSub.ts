/**
 * Daily Routines sub-pages: planet-salutation, theta-intentions, crystal-guidance, bodily-awareness.
 */

import type { Locale } from '../types';

export type DailyRoutinesSubBlock = {
  metaTitle: string;
  metaDescription: string;
  title: string;
  intro: string;
  body1: string;
  body2?: string;
  highlights?: readonly string[];
};

const ph = (title: string): DailyRoutinesSubBlock => ({
  metaTitle: `${title} | Astrolog Umran`,
  metaDescription: `${title} – daily rituals.`,
  title,
  intro: 'Content for this section is being prepared. Please check back later.',
  body1: 'You can reach out via the contact page for more information.',
});
const phTr = (title: string): DailyRoutinesSubBlock => ({
  metaTitle: `${title} | Astrolog Umran`,
  metaDescription: `${title} – günlük ritüeller.`,
  title,
  intro: 'Bu bölümün içeriği hazırlanıyor. Lütfen daha sonra tekrar bakın.',
  body1: 'Daha fazla bilgi için iletişim sayfasından ulaşabilirsiniz.',
});
const phDe = (title: string): DailyRoutinesSubBlock => ({
  metaTitle: `${title} | Astrolog Umran`,
  metaDescription: `${title} – tägliche Rituale.`,
  title,
  intro: 'Der Inhalt für diesen Bereich wird vorbereitet. Bitte schauen Sie später wieder vorbei.',
  body1: 'Weitere Informationen erhalten Sie über die Kontaktseite.',
});
const phFr = (title: string): DailyRoutinesSubBlock => ({
  metaTitle: `${title} | Astrolog Umran`,
  metaDescription: `${title} – rituels quotidiens.`,
  title,
  intro: 'Le contenu de cette section est en préparation. Revenez plus tard.',
  body1: 'Vous pouvez nous contacter via la page contact.',
});

export type DailyRoutinesSubLocale = Record<Locale, {
  planetSalutation: DailyRoutinesSubBlock;
  thetaIntentions: DailyRoutinesSubBlock;
  crystalGuidance: DailyRoutinesSubBlock;
  bodilyAwareness: DailyRoutinesSubBlock;
}>;

export const dailyRoutinesSubLocales: DailyRoutinesSubLocale = {
  en: { planetSalutation: ph('Saluting of the Planet of the Day'), thetaIntentions: ph('Intentions in Theta Frequency'), crystalGuidance: ph('Guidance of Crystals'), bodilyAwareness: ph('Bodily Awareness') },
  tr: { planetSalutation: phTr('Günün Gezegenine Selamlama'), thetaIntentions: phTr('Theta Frekansında Niyetler'), crystalGuidance: phTr('Kristallerin Rehberliği'), bodilyAwareness: phTr('Beden Farkındalığı') },
  de: { planetSalutation: phDe('Gruß an den Planeten des Tages'), thetaIntentions: phDe('Absichten in Theta-Frequenz'), crystalGuidance: phDe('Kristallberatung'), bodilyAwareness: phDe('Körperbewusstsein') },
  fr: { planetSalutation: phFr('Salutation à la planète du jour'), thetaIntentions: phFr('Intentions en fréquence Thêta'), crystalGuidance: phFr('Guidance des cristaux'), bodilyAwareness: phFr('Conscience corporelle') },
};
