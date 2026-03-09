/**
 * Blog posts – structured for easy swap to CMS (Sanity, Contentful, etc.) later.
 * For now: local array; later: replace getPosts/getPostBySlug with API calls.
 */

export const BLOG_CATEGORY_IDS = ['world', 'reviews', 'astro'] as const;
export type BlogCategoryId = (typeof BLOG_CATEGORY_IDS)[number];

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  content: string;
  image: string | null;
  category: BlogCategoryId;
};

export const POSTS: Post[] = [
  {
    slug: 'welcome-to-astrolog-umran',
    title: 'Welcome to Astrolog Umran',
    excerpt: 'A short introduction to the practice of astrology and holistic healing.',
    date: '2025-01-15',
    content: `
      <p>Welcome to this space where the sky meets the body and the mind.</p>
      <p>Here we explore natal charts, synastry, and the rhythms of the cosmos alongside Pilates, Theta Healing, and daily rituals. Content will grow over time—stay tuned.</p>
    `,
    image: null,
    category: 'astro',
  },
  {
    slug: 'why-birth-chart-matters',
    title: 'Why Your Birth Chart Matters',
    excerpt: 'The natal chart is a map of the sky at the moment you were born—and a mirror of your potential.',
    date: '2025-01-20',
    content: `
      <p>Your birth chart is a snapshot of the sky at the exact time and place of your birth. It reflects your strengths, challenges, and the themes of your life.</p>
      <p>Understanding it can bring clarity and direction. This is the foundation of astrological work.</p>
    `,
    image: null,
    category: 'astro',
  },
  {
    slug: 'mind-body-and-the-stars',
    title: 'Mind, Body and the Stars',
    excerpt: 'How astrology and holistic movement support each other.',
    date: '2025-02-01',
    content: `
      <p>Astrology and body work are not separate. The same awareness that reads the sky can guide how we move and breathe.</p>
      <p>Astro-Pilates and Theta Healing are ways to align the body and the subconscious with the rhythms we see in the chart.</p>
    `,
    image: '/pilates.png',
    category: 'astro',
  },
  {
    slug: 'cosmic-cycles-2025',
    title: 'Cosmic Cycles in 2025',
    excerpt: 'A brief look at the major transits and what they might mean collectively.',
    date: '2025-02-10',
    content: `
      <p>Each year brings its own planetary emphasis. In 2025, certain cycles invite us to slow down and integrate.</p>
      <p>This is a general overview—for your personal timing, a birth chart reading is the way.</p>
    `,
    image: null,
    category: 'world',
  },
  {
    slug: 'client-story-awakening',
    title: 'A Client Story: Awakening to the Chart',
    excerpt: 'One person\'s experience of discovering their natal chart (shared with permission).',
    date: '2025-02-15',
    content: `
      <p>Sometimes the chart puts words to what we already feel. Here, a client reflects on that moment of recognition.</p>
      <p>Names and details are anonymised; the essence is shared with permission.</p>
    `,
    image: null,
    category: 'reviews',
  },
];

export function getPosts(category?: BlogCategoryId): Post[] {
  const list = category
    ? POSTS.filter((p) => p.category === category)
    : [...POSTS];
  return list.sort((a, b) => (b.date > a.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function getPostSlugs(): string[] {
  return POSTS.map((p) => p.slug);
}
