import Link from 'next/link';
import {notFound} from 'next/navigation';
import {getTranslations} from '@/i18n/translations';
import {getPostBySlug, getPostSlugs} from '@/lib/blog';

type Props = {params: Promise<{lang: string; slug: string}>};

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({slug}));
}

export async function generateMetadata({params}: Props) {
  const {lang, slug} = await params;
  const {t} = getTranslations(lang);
  const post = getPostBySlug(slug);
  if (!post) return {title: t('nav.blog')};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({params}: Props) {
  const {lang, slug} = await params;
  const {t} = getTranslations(lang);
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <main className="max-w-[720px] mx-auto px-4 sm:px-6 py-10 sm:py-14">
      <Link
        href={`/${lang}/blog`}
        className="inline-block font-montserrat text-sm text-astro-gold hover:underline mb-6"
      >
        ← {t('nav.blog')}
      </Link>

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
      <h1 className="font-cinzel text-2xl sm:text-3xl theme-text tracking-wide mb-6">
        {post.title}
      </h1>

      <div
        className="theme-text opacity-90 text-sm sm:text-base leading-relaxed [&_p]:mb-4 [&_p:last-child]:mb-0"
        dangerouslySetInnerHTML={{__html: post.content.trim()}}
      />
    </main>
  );
}
