import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import '../../app/globals.css';
import {LOCALES} from '@/constants/nav';
import {cinzel, montserrat} from '@/lib/fonts';
import {ThemeProvider} from '@/components/ThemeProvider';
import {ThemeScript} from '@/components/ThemeScript';
import {getTranslations} from '@/i18n/translations';

const LOCALE_CODES = LOCALES.map(l => l.code);

export function generateStaticParams() {
  return LOCALE_CODES.map(lang => ({lang}));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{lang: string}>;
}) {
  const {lang} = await params;
  const {locale} = getTranslations(lang);
  const name = locale.brand?.name ?? 'Astrolog Umran';
  const tagline = locale.brand?.tagline ?? '';
  const description = (locale as {meta?: {defaultDescription?: string}}).meta?.defaultDescription ?? 'Astrolog Umran – Astrology & holistic healing.';
  return {
    title: {default: `${name} – ${tagline}`, template: '%s | Astrolog Umran'},
    description,
    openGraph: {
      title: `${name} – ${tagline}`,
      description,
      type: 'website',
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{lang: string}>;
}) {
  const {lang} = await params;
  const {locale} = getTranslations(lang);
  const motto = locale.brand?.motto;
  return (
    <html lang={lang} className={`${cinzel.variable} ${montserrat.variable}`} data-theme="dark" suppressHydrationWarning>
      <body className="font-montserrat antialiased">
        <ThemeScript />
        <ThemeProvider>
          <Navbar lang={lang} />
          <div className="min-h-screen overflow-x-hidden flex flex-col pt-[72px] md:pt-20">
            {children}
            <Footer lang={lang} motto={motto} />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
