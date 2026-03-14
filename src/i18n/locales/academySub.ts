/**
 * Academy sub-pages: beginner, recordings, sky-calendar, blog.
 */

import type { Locale } from '../types';

export type AcademySubBlock = {
  metaTitle: string;
  metaDescription: string;
  title: string;
  intro: string;
  body1: string;
  body2?: string;
  highlights?: readonly string[];
};

const ph = (title: string): AcademySubBlock => ({
  metaTitle: `${title} | Astrolog Umran`,
  metaDescription: `${title} – astrology academy.`,
  title,
  intro: 'Content for this section is being prepared. Please check back later.',
  body1: 'You can reach out via the contact page for more information.',
});
const phTr = (title: string): AcademySubBlock => ({
  metaTitle: `${title} | Astrolog Umran`,
  metaDescription: `${title} – astroloji akademisi.`,
  title,
  intro: 'Bu bölümün içeriği hazırlanıyor. Lütfen daha sonra tekrar bakın.',
  body1: 'Daha fazla bilgi için iletişim sayfasından ulaşabilirsiniz.',
});
const phDe = (title: string): AcademySubBlock => ({
  metaTitle: `${title} | Astrolog Umran`,
  metaDescription: `${title} – Astrologie-Akademie.`,
  title,
  intro: 'Der Inhalt für diesen Bereich wird vorbereitet. Bitte schauen Sie später wieder vorbei.',
  body1: 'Weitere Informationen erhalten Sie über die Kontaktseite.',
});
const phFr = (title: string): AcademySubBlock => ({
  metaTitle: `${title} | Astrolog Umran`,
  metaDescription: `${title} – académie d’astrologie.`,
  title,
  intro: 'Le contenu de cette section est en préparation. Revenez plus tard.',
  body1: 'Vous pouvez nous contacter via la page contact.',
});

export type AcademySubLocale = Record<Locale, {
  beginner: AcademySubBlock;
  recordings: AcademySubBlock;
  skyCalendar: AcademySubBlock;
  blog: AcademySubBlock;
}>;

export const academySubLocales: AcademySubLocale = {
  en: { beginner: ph('Beginner Astrology'), recordings: ph('Workshop Recordings'), skyCalendar: ph('Sky Calendar'), blog: ph('Blog') },
  tr: { beginner: phTr('Temel Seviye Astroloji'), recordings: phTr('Atölye Kayıtları'), skyCalendar: phTr('Gökyüzü Takvimi'), blog: phTr('Blog') },
  de: { beginner: phDe('Anfänger-Astrologie'), recordings: phDe('Workshop-Aufzeichnungen'), skyCalendar: phDe('Himmelskalender'), blog: phDe('Blog') },
  fr: { beginner: phFr('Astrologie débutant'), recordings: phFr('Enregistrements d’ateliers'), skyCalendar: phFr('Calendrier du ciel'), blog: phFr('Blog') },
};
