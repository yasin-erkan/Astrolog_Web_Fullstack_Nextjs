'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';

const NOT_FOUND_MESSAGES: Record<string, string> = {
  en: "404 – We couldn't find this article in the stars.",
  tr: '404 – Yıldızlarında böyle bir yazı bulamadık.',
  de: '404 – Diesen Artikel haben wir in den Sternen nicht gefunden.',
  fr: "404 – Nous n'avons pas trouvé cet article dans les étoiles.",
};

export default function BlogNotFoundClient() {
  const pathname = usePathname();
  const lang = pathname?.split('/')[1] ?? 'en';
  const message = NOT_FOUND_MESSAGES[lang] ?? NOT_FOUND_MESSAGES.en;

  return (
    <main className="max-w-lg mx-auto px-4 sm:px-6 py-20 sm:py-28 text-center">
      <p className="font-cinzel text-2xl sm:text-3xl theme-text tracking-wide mb-4">{message}</p>
      <Link
        href={`/${lang}/blog`}
        className="inline-block font-montserrat text-sm font-medium text-astro-gold hover:underline mt-6"
      >
        ← Blog
      </Link>
    </main>
  );
}
