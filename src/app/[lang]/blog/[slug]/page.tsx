import Link from 'next/link';
import Image from 'next/image';
import {notFound} from 'next/navigation';
import DOMPurify from 'isomorphic-dompurify';
import {getTranslations} from '@/i18n/translations';
import {getPostBySlug, getPostSlugs, BLOG_LOCALES} from '@/lib/blog';
import {getReadingTimeMinutes} from '@/constants/posts';

type Props = {params: Promise<{lang: string; slug: string}>};

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.flatMap((slug) => BLOG_LOCALES.map((lang) => ({lang, slug})));
}

export async function generateMetadata({params}: Props) {
  const {lang, slug} = await params;
  const {t} = getTranslations(lang);
  const post = getPostBySlug(slug, lang);
  if (!post) return {title: t('nav.blog')};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({params}: Props) {
  const {lang, slug} = await params;
  const {t} = getTranslations(lang);
  const post = getPostBySlug(slug, lang);
  if (!post) notFound();

  const sanitizedContent = DOMPurify.sanitize(post.content.trim(), {
    ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'a', 'ul', 'ol', 'li', 'h2', 'h3'],
    ALLOWED_ATTR: ['href', 'target', 'rel'],
  });

  const readingMin = getReadingTimeMinutes(post.content);

  return (
    <main className="max-w-[720px] mx-auto px-4 sm:px-6 py-10 sm:py-14">
      <Link
        href={`/${lang}/blog`}
        className="inline-block font-montserrat text-sm text-astro-gold hover:underline mb-6"
      >
        ← {t('nav.blog')}
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <time
          dateTime={post.date}
          className="text-xs sm:text-sm text-astro-gold/90 font-montserrat uppercase tracking-wider"
        >
          {new Date(post.date).toLocaleDateString(lang === 'tr' ? 'tr-TR' : lang === 'de' ? 'de-DE' : lang === 'fr' ? 'fr-FR' : 'en-GB', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>
        <span className="text-xs theme-text/60 font-montserrat">
          {readingMin} {t('blog.readTime')}
        </span>
      </div>
      <h1 className="font-cinzel text-2xl sm:text-3xl theme-text tracking-wide mb-6">
        {post.title}
      </h1>

      {post.image && (
        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-8 bg-neutral-900">
          <Image
            src={post.image}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 720px"
            className="object-cover object-center"
            priority
          />
        </div>
      )}

      <article
        className="prose prose-lg max-w-none theme-text prose-headings:font-cinzel prose-headings:theme-text prose-p:leading-relaxed prose-a:text-astro-gold prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl"
        dangerouslySetInnerHTML={{__html: sanitizedContent}}
      />
    </main>
  );
}
