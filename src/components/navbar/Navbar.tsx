'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useState, useEffect, useRef} from 'react';
import {createPortal} from 'react-dom';

const NAV = {
  accent: '#b3916e',
  text: '#2d2a26',
  border: '#e5e1da',
  bg: '#fdfbf7',
} as const;

const LOCALES = [
  {code: 'tr', flag: '🇹🇷', label: 'Türkçe'},
  {code: 'en', flag: '🇬🇧', label: 'English'},
  {code: 'de', flag: '🇩🇪', label: 'Deutsch'},
  {code: 'fr', flag: '🇫🇷', label: 'Français'},
] as const;

const Navbar = ({lang = 'tr'}: {lang?: string}) => {
  const pathname = usePathname();
  const pathWithoutLang = pathname.replace(/^\/[^/]+/, '') || '';
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const langBtnRef = useRef<HTMLButtonElement>(null);
  const langDropRef = useRef<HTMLDivElement>(null);
  const [langDropPos, setLangDropPos] = useState({top: 0, left: 0});

  useEffect(() => {
    const close = (e: MouseEvent) => {
      const t = e.target as Node;
      if (langRef.current?.contains(t) || langDropRef.current?.contains(t))
        return;
      setLangOpen(false);
    };
    if (langOpen) {
      document.addEventListener('mousedown', close, true);
      return () => document.removeEventListener('mousedown', close, true);
    }
  }, [langOpen]);

  const toggleLang = () => {
    if (!langOpen && langBtnRef.current) {
      const r = langBtnRef.current.getBoundingClientRect();
      setLangDropPos({top: r.bottom + 6, left: r.left});
    }
    setLangOpen(o => !o);
  };

  const isActive = (path: string) => {
    if (path === `/${lang}`)
      return pathname === `/${lang}` || pathname === `/${lang}/`;
    return pathname.startsWith(path);
  };

  const navLinkBase =
    'font-montserrat text-[15px] md:text-[16px] tracking-[0.12em] no-underline py-3 px-3 whitespace-nowrap block min-h-[44px] flex items-center transition-colors';
  const navLinkClass = (active: boolean) =>
    `${navLinkBase} ${active ? 'text-[#b3916e] font-semibold' : 'text-[#2d2a26] hover:text-[#b3916e]'}`;

  return (
    <>
      <nav
        className="sticky top-0 z-[800] w-full pt-6 md:pt-8 pb-0"
        style={{backgroundColor: NAV.bg}}>
        <div
          className="max-w-[1750px] mx-auto flex justify-between items-center px-4 md:px-12"
          style={{gap: 32}}>
          {/* Sol: logo + isim */}
          <Link
            href={`/${lang}`}
            className="flex items-center gap-4 md:gap-5 shrink-0 no-underline">
            <div className="relative w-[70px] h-[70px] md:w-[100px] md:h-[100px] flex justify-center items-center shrink-0">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full overflow-visible">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#b8926a"
                  strokeWidth="0.6"
                  opacity="0.3">
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 50 50"
                    to="360 50 50"
                    dur="50s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle
                  cx="50"
                  cy="50"
                  r="38"
                  fill="none"
                  stroke="#b3916e"
                  strokeWidth="1"
                />
                <path
                  d="M50,20 L54,42 L78,42 L58,54 L66,78 L50,62 L34,78 L42,54 L22,42 L46,42 Z"
                  fill="none"
                  stroke="#b3916e"
                  strokeWidth="1.2"
                />
                <circle cx="50" cy="50" r="3" fill="#b3916e" />
                <circle cx="50" cy="5" r="1.5" fill="#b3916e" />
                <circle cx="50" cy="95" r="1.5" fill="#b3916e" />
              </svg>
              <div className="absolute -bottom-3 md:-bottom-5 font-cinzel text-[18px] md:text-[24px] text-[#b8926a] tracking-[0.3em] indent-[0.3em]">
                ÜE
              </div>
            </div>
            <div
              className="w-px h-12 md:h-[72px] shrink-0"
              style={{backgroundColor: NAV.border}}
              aria-hidden
            />
            <div className="flex flex-col gap-0.5 shrink-0">
              <span className="font-cinzel text-[20px] md:text-[30px] tracking-[0.1em] text-[#2d2a26] uppercase leading-none">
                Ümran Erkan
              </span>
              <span className="font-montserrat text-[10px] md:text-[12px] tracking-[0.25em] text-[#b3916e] uppercase">
                Astroloji & Bütünsel Şifa
              </span>
            </div>
          </Link>

          {/* Sağ: menü linkleri + dil seçici */}
          <div
            className="navbar-desktop hidden md:flex flex-1 min-w-0 items-center overflow-x-auto justify-end"
            style={{gap: 32, marginLeft: 40}}>
            <div className="flex flex-wrap items-center" style={{gap: '28px'}}>
              <Link
                href={`/${lang}`}
                className={navLinkClass(isActive(`/${lang}`))}>
                ANASAYFA
              </Link>
              <div className="group relative flex items-center min-h-[44px] py-3 px-3">
                <span
                  className={`font-montserrat text-[15px] md:text-[16px] tracking-[0.12em] whitespace-nowrap ${
                    pathname.startsWith(`/${lang}/danismanlik`)
                      ? 'text-[#b3916e] font-semibold'
                      : 'text-[#2d2a26] group-hover:text-[#b3916e]'
                  }`}>
                  DANIŞMANLIKLAR ▾
                </span>
                <div className="absolute top-full left-0 mt-1 bg-white min-w-[220px] py-3 px-4 z-[1000] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-150 border border-[#e5e1da] shadow-sm">
                  <Link
                    href={`/${lang}/danismanlik/dogum-haritasi`}
                    className="block py-2 text-[15px] text-[#2d2a26] hover:text-[#b3916e] font-montserrat no-underline">
                    Doğum Haritası
                  </Link>
                  <Link
                    href={`/${lang}/danismanlik/sinastri`}
                    className="block py-2 text-[15px] text-[#2d2a26] hover:text-[#b3916e] font-montserrat no-underline">
                    Sinastri Analizi
                  </Link>
                </div>
              </div>
              <Link
                href={`/${lang}/astro-pilates`}
                className={navLinkClass(isActive(`/${lang}/astro-pilates`))}>
                ASTRO-PİLATES
              </Link>
              <Link
                href={`/${lang}/sifa`}
                className={navLinkClass(isActive(`/${lang}/sifa`))}>
                ŞİFA
              </Link>
              <Link
                href={`/${lang}/akademi`}
                className={navLinkClass(isActive(`/${lang}/akademi`))}>
                AKADEMİ
              </Link>
            </div>

            <span
              className="shrink-0 self-stretch w-px bg-[#e5e1da]"
              style={{marginLeft: 4, marginRight: 4}}
              aria-hidden
            />
            <div
              ref={langRef}
              className="relative flex items-center shrink-0"
              style={{minHeight: 52}}>
              <button
                ref={langBtnRef}
                type="button"
                onMouseDown={e => e.stopPropagation()}
                onClick={toggleLang}
                className="leading-none cursor-pointer bg-transparent border-2 border-[#e5e1da] rounded-lg py-2.5 px-3 hover:border-[#b3916e] min-h-[48px] flex items-center justify-center"
                style={{fontSize: '1.2rem'}}
                aria-expanded={langOpen}
                aria-haspopup="true"
                title={LOCALES.find(l => l.code === lang)?.label}>
                {LOCALES.find(l => l.code === lang)?.flag ?? '🌐'} ▾
              </button>
              {langOpen &&
                typeof document !== 'undefined' &&
                createPortal(
                  <div
                    ref={langDropRef}
                    className="fixed py-4 px-4 bg-white border-2 border-[#e5e1da] shadow-lg z-[99999] flex flex-col gap-3 rounded-lg min-w-[80px]"
                    style={{top: langDropPos.top, left: langDropPos.left}}>
                    {LOCALES.map(({code, flag, label}) => (
                      <Link
                        key={code}
                        href={`/${code}${pathWithoutLang}`}
                        onClick={() => setLangOpen(false)}
                        title={label}
                        className={`no-underline hover:opacity-80 block leading-none py-2 ${code === lang ? 'opacity-100' : 'opacity-70'}`}
                        style={{fontSize: '1.3rem'}}>
                        {flag}
                      </Link>
                    ))}
                  </div>,
                  document.body,
                )}
            </div>
          </div>
        </div>

        <div
          className="w-full mt-6 md:mt-8"
          style={{height: 1, backgroundColor: NAV.border}}
        />
      </nav>
    </>
  );
};

export default Navbar;
