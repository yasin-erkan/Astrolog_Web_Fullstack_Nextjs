import {Cinzel, Montserrat} from 'next/font/google';
import Navbar from '../../components/navbar/Navbar';
import '../../app/globals.css';

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{lang: string}>;
}) {
  const {lang} = await params;
  return (
    <html lang={lang} className={`${cinzel.variable} ${montserrat.variable}`}>
      <body className="font-montserrat antialiased bg-astro-bg text-astro-dark">
        <Navbar lang={lang} />
        {children}
      </body>
    </html>
  );
}
