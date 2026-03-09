import Link from 'next/link';
import Image from 'next/image';
import {getTranslations} from '@/i18n/translations';
import {getPosts, getReadingTimeMinutes, BLOG_CATEGORY_IDS, type BlogCategoryId} from '@/constants/posts';

export async function generateMetadata({params}: {params: Promise<{lang: string}>}) {
  const {lang} = await params;
  const {t, locale} = getTranslations(lang);
  const meta = (locale as {meta?: {blog?: string}}).meta;
  return {
    title: t('nav.blog'),
    description: meta?.blog ?? undefined,
  };
}

function isValidCategory(cat: string): cat is BlogCategoryId {
  return BLOG_CATEGORY_IDS.includes(cat as BlogCategoryId);
}

export default async function BlogListPage({
  params,
  searchParams,
}: {
  params: Promise<{lang: string}>;
  searchParams: Promise<{category?: string}>;
}) {
  const {lang} = await params;
  const {category: categoryParam} = await searchParams;
  const category = categoryParam && isValidCategory(categoryParam) ? categoryParam : undefined;
  const {t} = getTranslations(lang);
  const posts = getPosts(category);

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
      <h1 className="font-cinzel text-2xl sm:text-3xl theme-text tracking-wide mb-8">
        {t('nav.blog')}
      </h1>

      <div className="flex flex-wrap gap-2 mb-8">
        <Link
          href={`/${lang}/blog`}
          className={`inline-flex items-center px-3 py-1.5 rounded-full font-montserrat text-xs uppercase tracking-wider transition-colors ${
            !category
              ? 'bg-astro-gold/20 text-astro-gold border border-astro-gold/40'
              : 'theme-border border theme-text/80 hover:border-astro-gold/40 hover:text-astro-gold'
          }`}
        >
          {t('blog.all')}
        </Link>
        {BLOG_CATEGORY_IDS.map((cat) => (
          <Link
            key={cat}
            href={`/${lang}/blog?category=${cat}`}
            className={`inline-flex items-center px-3 py-1.5 rounded-full font-montserrat text-xs uppercase tracking-wider transition-colors ${
              category === cat
                ? 'bg-astro-gold/20 text-astro-gold border border-astro-gold/40'
                : 'theme-border border theme-text/80 hover:border-astro-gold/40 hover:text-astro-gold'
            }`}
          >
            {t(`blog.categories.${cat}`)}
          </Link>
        ))}
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 list-none">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/${lang}/blog/${post.slug}`}
              className="block h-full theme-bg theme-border border rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-[0_12px_40px_rgba(179,145,110,0.2)] hover:border-astro-gold/30 hover:-translate-y-0.5"
            >
              {post.image && (
                <div className="relative aspect-video w-full bg-neutral-800">
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-5 sm:p-6">
                <div className="flex items-center gap-3 mb-2">
                  <time
                    dateTime={post.date}
                    className="text-xs sm:text-sm text-astro-gold/90 font-montserrat uppercase tracking-wider"
                  >
                    {new Date(post.date).toLocaleDateString(
                      lang === 'tr' ? 'tr-TR' : lang === 'de' ? 'de-DE' : lang === 'fr' ? 'fr-FR' : 'en-GB',
                      {year: 'numeric', month: 'short', day: 'numeric'}
                    )}
                  </time>
                  <span className="text-xs theme-text/60 font-montserrat">
                    {getReadingTimeMinutes(post.content)} {t('blog.readTime')}
                  </span>
                </div>
                <h2 className="font-cinzel text-lg sm:text-xl theme-text mb-2 line-clamp-2">
                  {post.title}
                </h2>
                <p className="theme-text opacity-90 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <span className="inline-block mt-3 font-montserrat text-sm font-medium text-astro-gold">
                  {t('common.readMore')}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {posts.length === 0 && (
        <p className="theme-text opacity-70 text-center py-12">{t('common.contentComingSoon')}</p>
      )}
    </main>
  );
}
