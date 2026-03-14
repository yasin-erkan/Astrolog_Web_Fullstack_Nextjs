import type { Locale } from '../types';

export type BlogLocale = Record<
  Locale,
  {
    blog: {
      all: string;
      notFound: string;
      readTime: string;
      categories: { world: string; reviews: string; astro: string };
    };
  }
>;

export const blogLocales: BlogLocale = {
  en: {
    blog: {
      all: 'All',
    notFound: "404 – We couldn't find this article in the stars.",
    readTime: 'min read',
      categories: { world: 'World News', reviews: 'Client Stories', astro: 'Astro Analysis' },
    },
  },
  tr: {
    blog: {
      all: 'Tümü',
      notFound: '404 – Yıldızlarında böyle bir yazı bulamadık.',
      readTime: 'dk okuma',
      categories: { world: 'Dünya Haberleri', reviews: 'Müşteri Yorumları', astro: 'Astro-Analiz' },
    },
  },
  de: {
    blog: {
      all: 'Alle',
      notFound: '404 – Diesen Artikel haben wir in den Sternen nicht gefunden.',
      readTime: 'Min. Lesezeit',
      categories: { world: 'Weltnachrichten', reviews: 'Kundenstimmen', astro: 'Astro-Analyse' },
    },
  },
  fr: {
    blog: {
      all: 'Tout',
      notFound: "404 – Nous n'avons pas trouvé cet article dans les étoiles.",
      readTime: 'min lecture',
      categories: { world: 'Actualités monde', reviews: 'Témoignages', astro: 'Astro-analyse' },
    },
  },
};
