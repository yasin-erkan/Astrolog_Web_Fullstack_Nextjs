import Navbar from '../../components/navbar/Navbar';
import '../../app/globals.css';
import {LOCALES} from '@/constants/nav';
import {cinzel, montserrat} from '@/lib/fonts';
import {ThemeProvider} from '@/components/ThemeProvider';
import {ThemeScript} from '@/components/ThemeScript';

const LOCALE_CODES = LOCALES.map(l => l.code);

export function generateStaticParams() {
  return LOCALE_CODES.map(lang => ({lang}));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{lang: string}>;
}) {
  const {lang} = await params;
  return (
    <html lang={lang} className={`${cinzel.variable} ${montserrat.variable}`} data-theme="dark" suppressHydrationWarning>
      <body className="font-montserrat antialiased">
        <ThemeScript />
        <ThemeProvider>
          <Navbar lang={lang} />
          <div className="min-h-screen overflow-x-hidden">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
