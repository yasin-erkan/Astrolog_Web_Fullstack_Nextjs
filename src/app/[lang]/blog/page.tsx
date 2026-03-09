import Link from 'next/link';
import {getTranslations} from '@/i18n/translations';
import {getPosts} from '@/lib/blog';

export async function generateMetadata({params}: {params: Promise<{lang: string}>}) {
  const {lang} = await params;
  const {t, locale} = getTranslations(lang);
  const meta = (locale as {meta?: {blog?: string}}).meta;
  return {
    title: t('nav.blog'),
    description: meta?.blog ?? undefined,
  };
}

export default async function BlogListPage({params}: {params: Promise<{lang: string}>}) {
  const {lang} = await params;
  const {t} = getTranslations(lang);
  const posts = getPosts();

  return (
    <main className="max-w-[900px] mx-auto px-4 sm:px-6 py-10 sm:py-14">
      <h1 className="font-cinzel text-2xl sm:text-3xl theme-text tracking-wide mb-8">
        {t('nav.blog')}
      </h1>

      <ul className="space-y-6 list-none">
        {posts.map((post) => (
          <li
            key={post.slug}
            className="theme-bg theme-border border rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <time
              dateTime={post.date}
              className="text-xs sm:text-sm text-astro-gold/90 font-montserrat uppercase tracking-wider block mb-2"
            >
              {new Date(post.date).toLocaleDateString(lang === 'tr' ? 'tr-TR' : lang === 'de' ? 'de-DE' : lang === 'fr' ? 'fr-FR' : 'en-GB', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <h2 className="font-cinzel text-lg sm:text-xl theme-text mb-2">
              <Link href={`/${lang}/blog/${post.slug}`} className="hover:text-astro-gold transition-colors">
                {post.title}
              </Link>
            </h2>
            <p className="theme-text opacity-90 text-sm sm:text-base leading-relaxed mb-4">
              {post.excerpt}
            </p>
            <Link
              href={`/${lang}/blog/${post.slug}`}
              className="inline-flex items-center font-montserrat text-sm font-medium text-astro-gold hover:underline"
            >
              {t('common.readMore')}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
