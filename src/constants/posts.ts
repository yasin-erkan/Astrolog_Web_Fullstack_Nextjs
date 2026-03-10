/**
 * Blog posts – structured for easy swap to CMS (Sanity, Contentful, etc.) later.
 * Content per locale (en, tr, de, fr).
 */

export const BLOG_CATEGORY_IDS = ['world', 'reviews', 'astro'] as const;
export type BlogCategoryId = (typeof BLOG_CATEGORY_IDS)[number];

export type BlogLocale = 'en' | 'tr' | 'de' | 'fr';
export const BLOG_LOCALES: BlogLocale[] = ['en', 'tr', 'de', 'fr'];

export type PostLocalized = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  content: string;
  image: string | null;
  category: BlogCategoryId;
};

type PostRecord = {
  slug: string;
  date: string;
  image: string | null;
  category: BlogCategoryId;
  locales: Record<BlogLocale, { title: string; excerpt: string; content: string }>;
};

const POSTS_DATA: PostRecord[] = [
  {
    slug: 'welcome-to-astrolog-umran',
    date: '2025-01-15',
    image: '/pilates.png',
    category: 'astro',
    locales: {
      en: {
        title: 'Welcome to Astrolog Umran',
        excerpt: 'A short introduction to the practice of astrology and holistic healing.',
        content: `<p>Welcome to this space where the sky meets the body and the mind.</p>
<p>Here we explore natal charts, synastry, and the rhythms of the cosmos alongside Pilates, Theta Healing, and daily rituals. Content will grow over time—stay tuned.</p>`,
      },
      tr: {
        title: 'Astrolog Ümran\'a Hoş Geldiniz',
        excerpt: 'Astroloji ve bütünsel şifa pratiğine kısa bir giriş.',
        content: `<p>Gökyüzün beden ve zihinle buluştuğu bu alana hoş geldiniz.</p>
<p>Doğum haritaları, sinastri ve kozmosun ritimlerini Pilates, Theta Healing ve günlük ritüellerle birlikte keşfediyoruz. İçerik zamanla büyüyecek—bizi takip edin.</p>`,
      },
      de: {
        title: 'Willkommen bei Astrolog Umran',
        excerpt: 'Eine kurze Einführung in die Praxis der Astrologie und ganzheitlichen Heilung.',
        content: `<p>Willkommen in diesem Raum, in dem Himmel, Körper und Geist sich begegnen.</p>
<p>Hier erkunden wir Geburtshoroskope, Synastrie und die Rhythmen des Kosmos zusammen mit Pilates, Theta Healing und täglichen Ritualen. Der Inhalt wird mit der Zeit wachsen—bleiben Sie dran.</p>`,
      },
      fr: {
        title: 'Bienvenue chez Astrolog Umran',
        excerpt: 'Une courte introduction à la pratique de l\'astrologie et de la guérison holistique.',
        content: `<p>Bienvenue dans cet espace où le ciel rencontre le corps et l'esprit.</p>
<p>Nous y explorons thèmes natals, synastrie et les rythmes du cosmos aux côtés du Pilates, du Theta Healing et des rituels quotidiens. Le contenu s'enrichira avec le temps—restez à l'écoute.</p>`,
      },
    },
  },
  {
    slug: 'why-birth-chart-matters',
    date: '2025-01-20',
    image: '/birth_chart.png',
    category: 'astro',
    locales: {
      en: {
        title: 'Why Your Birth Chart Matters',
        excerpt: 'The natal chart is a map of the sky at the moment you were born—and a mirror of your potential.',
        content: `<p>Your birth chart is a snapshot of the sky at the exact time and place of your birth. It reflects your strengths, challenges, and the themes of your life.</p>
<p>Understanding it can bring clarity and direction. This is the foundation of astrological work.</p>`,
      },
      tr: {
        title: 'Doğum Haritanız Neden Önemli',
        excerpt: 'Doğum haritası, doğduğunuz an gökyüzünün haritası ve potansiyelinizin aynasıdır.',
        content: `<p>Doğum haritanız, doğduğunuz an ve yerde gökyüzünün bir fotoğrafıdır. Güçlü yanlarınızı, zorluklarınızı ve hayat temalarınızı yansıtır.</p>
<p>Onu anlamak netlik ve yön verebilir. Bu, astrolojik çalışmanın temelidir.</p>`,
      },
      de: {
        title: 'Warum Ihr Geburtshoroskop wichtig ist',
        excerpt: 'Das Geburtshoroskop ist eine Karte des Himmels im Moment Ihrer Geburt—und ein Spiegel Ihres Potenzials.',
        content: `<p>Ihr Geburtshoroskop ist eine Momentaufnahme des Himmels zu exakt Ihrer Geburtszeit und -ort. Es spiegelt Ihre Stärken, Herausforderungen und Lebensthemen wider.</p>
<p>Es zu verstehen kann Klarheit und Richtung bringen. Das ist die Grundlage astrologischer Arbeit.</p>`,
      },
      fr: {
        title: 'Pourquoi votre thème natal compte',
        excerpt: 'Le thème natal est une carte du ciel au moment de votre naissance—et un miroir de votre potentiel.',
        content: `<p>Votre thème natal est un instantané du ciel à l'heure et au lieu exacts de votre naissance. Il reflète vos forces, défis et thèmes de vie.</p>
<p>Le comprendre peut apporter clarté et direction. C'est le fondement du travail astrologique.</p>`,
      },
    },
  },
  {
    slug: 'mind-body-and-the-stars',
    date: '2025-02-01',
    image: '/mind_body.png',
    category: 'astro',
    locales: {
      en: {
        title: 'Mind, Body and the Stars',
        excerpt: 'How astrology and holistic movement support each other.',
        content: `<p>Astrology and body work are not separate. The same awareness that reads the sky can guide how we move and breathe.</p>
<p>Astro-Pilates and Theta Healing are ways to align the body and the subconscious with the rhythms we see in the chart.</p>`,
      },
      tr: {
        title: 'Zihin, Beden ve Yıldızlar',
        excerpt: 'Astroloji ile bütüncül hareket birbirini nasıl destekler.',
        content: `<p>Astroloji ve beden çalışması ayrı değildir. Gökyüzünü okuyan aynı farkındalık, nasıl hareket edip nefes alacağımıza rehberlik edebilir.</p>
<p>Astro-Pilates ve Theta Healing, bedeni ve bilinçaltını haritada gördüğümüz ritimlerle uyumlu hale getirmenin yollarıdır.</p>`,
      },
      de: {
        title: 'Geist, Körper und die Sterne',
        excerpt: 'Wie Astrologie und ganzheitliche Bewegung sich gegenseitig unterstützen.',
        content: `<p>Astrologie und Körperarbeit sind nicht getrennt. Dasselbe Bewusstsein, das den Himmel liest, kann leiten, wie wir uns bewegen und atmen.</p>
<p>Astro-Pilates und Theta Healing sind Wege, Körper und Unterbewusstsein mit den Rhythmen in Einklang zu bringen, die wir im Horoskop sehen.</p>`,
      },
      fr: {
        title: 'Esprit, corps et étoiles',
        excerpt: 'Comment l\'astrologie et le mouvement holistique se soutiennent mutuellement.',
        content: `<p>L'astrologie et le travail corporel ne sont pas séparés. La même conscience qui lit le ciel peut guider notre façon de bouger et de respirer.</p>
<p>L'Astro-Pilates et le Theta Healing sont des moyens d'aligner le corps et l'inconscient avec les rythmes que nous voyons dans le thème.</p>`,
      },
    },
  },
  {
    slug: 'cosmic-cycles-2025',
    date: '2025-02-10',
    image: '/cosmic_cycle.png',
    category: 'world',
    locales: {
      en: {
        title: 'Cosmic Cycles in 2025',
        excerpt: 'A brief look at the major transits and what they might mean collectively.',
        content: `<p>Each year brings its own planetary emphasis. In 2025, certain cycles invite us to slow down and integrate.</p>
<p>This is a general overview—for your personal timing, a birth chart reading is the way.</p>`,
      },
      tr: {
        title: '2025\'te Kozmik Döngüler',
        excerpt: 'Önemli transitlere ve toplu anlamlarına kısa bir bakış.',
        content: `<p>Her yıl kendi gezegensel vurgusunu getirir. 2025\'te bazı döngüler yavaşlamaya ve bütünleşmeye davet ediyor.</p>
<p>Bu genel bir bakış—kişisel zamanlamanız için doğum haritası yorumu doğru yoldur.</p>`,
      },
      de: {
        title: 'Kosmische Zyklen 2025',
        excerpt: 'Ein kurzer Blick auf die großen Transite und ihre kollektive Bedeutung.',
        content: `<p>Jedes Jahr bringt seine eigene planetare Betonung. 2025 laden bestimmte Zyklen uns ein, zu verlangsamen und zu integrieren.</p>
<p>Das ist ein allgemeiner Überblick—für Ihre persönliche Zeitgebung ist ein Geburtshoroskop die richtige Wahl.</p>`,
      },
      fr: {
        title: 'Cycles cosmiques en 2025',
        excerpt: 'Un bref aperçu des transits majeurs et de leur sens collectif.',
        content: `<p>Chaque année apporte son propre accent planétaire. En 2025, certains cycles nous invitent à ralentir et à intégrer.</p>
<p>Ceci est un aperçu général—pour votre timing personnel, une lecture de thème natal est la voie.</p>`,
      },
    },
  },
  {
    slug: 'client-story-awakening',
    date: '2025-02-15',
    image: null,
    category: 'reviews',
    locales: {
      en: {
        title: 'A Client Story: Awakening to the Chart',
        excerpt: 'One person\'s experience of discovering their natal chart (shared with permission).',
        content: `<p>Sometimes the chart puts words to what we already feel. Here, a client reflects on that moment of recognition.</p>
<p>Names and details are anonymised; the essence is shared with permission.</p>`,
      },
      tr: {
        title: 'Bir Danışan Hikayesi: Haritaya Uyanış',
        excerpt: 'Doğum haritasını keşfeden bir kişinin deneyimi (izinle paylaşıldı).',
        content: `<p>Bazen harita zaten hissettiklerimize söz verir. Burada bir danışan, o tanıma anını paylaşıyor.</p>
<p>İsimler ve detaylar anonimleştirilmiştir; öz izinle paylaşılmaktadır.</p>`,
      },
      de: {
        title: 'Eine Klientengeschichte: Erwachen zum Horoskop',
        excerpt: 'Die Erfahrung eines Menschen, der sein Geburtshoroskop entdeckt (mit Erlaubnis geteilt).',
        content: `<p>Manchmal gibt das Horoskop dem, was wir bereits fühlen, Worte. Hier reflektiert eine Klientin diesen Moment der Erkenntnis.</p>
<p>Namen und Details sind anonymisiert; das Wesentliche wird mit Erlaubnis geteilt.</p>`,
      },
      fr: {
        title: 'Un témoignage : l\'éveil au thème',
        excerpt: 'L\'expérience d\'une personne découvrant son thème natal (partagé avec permission).',
        content: `<p>Parfois le thème met des mots sur ce que nous ressentons déjà. Ici, une cliente revient sur ce moment de reconnaissance.</p>
<p>Les noms et détails sont anonymisés ; l'essentiel est partagé avec permission.</p>`,
      },
    },
  },
];

const DEFAULT_LOCALE: BlogLocale = 'en';

function getLocale(lang: string): BlogLocale {
  if (lang === 'tr' || lang === 'de' || lang === 'fr') return lang;
  return 'en';
}

export function getPosts(lang: string, category?: BlogCategoryId): PostLocalized[] {
  const locale = getLocale(lang);
  const list = category
    ? POSTS_DATA.filter((p) => p.category === category)
    : [...POSTS_DATA];
  return list
    .sort((a, b) => (b.date > a.date ? 1 : -1))
    .map((p) => ({
      slug: p.slug,
      date: p.date,
      image: p.image,
      category: p.category,
      ...p.locales[locale],
    }));
}

export function getPostBySlug(slug: string, lang: string): PostLocalized | undefined {
  const locale = getLocale(lang);
  const p = POSTS_DATA.find((r) => r.slug === slug);
  if (!p) return undefined;
  return {
    slug: p.slug,
    date: p.date,
    image: p.image,
    category: p.category,
    ...p.locales[locale],
  };
}

export function getPostSlugs(): string[] {
  return POSTS_DATA.map((p) => p.slug);
}

/** Rough reading time from HTML content (~200 words/min). */
export function getReadingTimeMinutes(html: string): number {
  const text = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  const words = text ? text.split(' ').length : 0;
  return Math.max(1, Math.ceil(words / 200));
}
