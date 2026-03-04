'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {forwardRef, useState, useEffect, useRef} from 'react';
import {createPortal} from 'react-dom';
import {LOCALES} from '@/constants/nav';
import {NAV_ITEMS, NAV_CTA, isNavGroup, type NavItem, type NavItemChild} from '@/constants/navConfig';
import {useTheme} from '@/components/ThemeProvider';
import {getTranslations} from '@/i18n/translations';

const DROPDOWN_GRID_IDS = ['consultations', 'healing'] as const;
const DROPDOWN_GROUP_LABEL = 'text-[10px] font-montserrat uppercase tracking-[0.2em] text-astro-gold/70';
const DROPDOWN_LINK = 'block py-0.5 text-[13px] font-montserrat no-underline rounded transition-colors duration-150 border-l-2 pl-2 -ml-px';
const DROPDOWN_LINK_ACTIVE = 'text-astro-gold font-semibold border-astro-gold';
const DROPDOWN_LINK_INACTIVE = 'theme-text border-transparent hover:text-astro-gold';

type NavDropdownPanelProps = {
  item: NavItem & { children: NonNullable<NavItem['children']> };
  lang: string;
  t: (key: string) => string;
  isChildActive: (path: string, segment: string) => boolean;
  setOpenMenu: (id: string | null) => void;
  dropdownPos: { top: number; left: number };
  isGrid: boolean;
  groupLabelClass: string;
  linkClass: string;
  linkActiveClass: string;
  linkInactiveClass: string;
};

const NavDropdownPanel = forwardRef<HTMLDivElement, NavDropdownPanelProps>(function NavDropdownPanel(
  { item, lang, t, isChildActive, setOpenMenu, dropdownPos, isGrid, groupLabelClass, linkClass, linkActiveClass, linkInactiveClass },
  ref,
) {
  const renderGroup = (child: Extract<NavItemChild, { groupKey: string; items: unknown[] }>) => (
    <div key={child.groupKey} className="flex flex-col gap-0.5">
      <span className={groupLabelClass}>{t(child.groupKey)}</span>
      {child.items.map((link, i) => {
        const childPath = `/${lang}/${item.path}/${link.pathSegment}`;
        const active = isChildActive(item.path, link.pathSegment);
        const featured = isGrid && i === 0;
        return (
          <Link
            key={link.pathSegment}
            href={childPath}
            onClick={() => setOpenMenu(null)}
            className={`${linkClass} ${active ? linkActiveClass : linkInactiveClass} ${featured ? 'font-semibold' : 'font-normal'}`}>
            {t(link.labelKey)}
          </Link>
        );
      })}
    </div>
  );

  const children = item.children!;
  const gridChildren = isGrid ? children.filter((c): c is Extract<NavItemChild, { groupKey: string }> => isNavGroup(c)) : null;

  return (
    <div
      ref={ref}
      className={`nav-dropdown fixed theme-bg theme-border border rounded-lg shadow-(--nav-dropdown-shadow) z-9999 ${
        isGrid ? 'min-w-[320px] max-w-[400px] py-2.5 px-4' : 'min-w-[220px] py-2.5 px-3'
      }`}
      style={{ top: dropdownPos.top, left: dropdownPos.left }}>
      {isGrid && gridChildren?.length ? (
        <div className="grid grid-cols-2 gap-x-8 gap-y-3">
          {gridChildren.map(renderGroup)}
        </div>
      ) : (
        <div className="flex flex-col gap-0.5">
          {children.map(child => {
            if (isNavGroup(child)) return renderGroup(child);
            const childPath = `/${lang}/${item.path}/${child.pathSegment}`;
            const active = isChildActive(item.path, child.pathSegment);
            return (
              <Link
                key={child.pathSegment}
                href={childPath}
                onClick={() => setOpenMenu(null)}
                className={`${linkClass} py-1 ${active ? linkActiveClass : linkInactiveClass}`}>
                {t(child.labelKey)}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
});

const Navbar = ({lang = 'en'}: {lang?: string}) => {
  const {theme, toggleTheme} = useTheme();
  const {t} = getTranslations(lang);
  const pathname = usePathname();
  const pathWithoutLang = pathname.replace(/^\/[^/]+/, '') || '';
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const dropdownTriggerRef = useRef<HTMLButtonElement>(null);
  const dropdownPanelRef = useRef<HTMLDivElement>(null);
  const [dropdownPos, setDropdownPos] = useState({top: 0, left: 0});
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const langBtnRef = useRef<HTMLButtonElement>(null);
  const langDropRef = useRef<HTMLDivElement>(null);
  const [langDropPos, setLangDropPos] = useState({top: 0, left: 0});

  useEffect(() => {
    if (openMenu && dropdownTriggerRef.current) {
      const r = dropdownTriggerRef.current.getBoundingClientRect();
      setDropdownPos({top: r.bottom + 6, left: r.left});
    }
  }, [openMenu]);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        menuRef.current?.contains(target) ||
        dropdownPanelRef.current?.contains(target)
      )
        return;
      setOpenMenu(null);
    };
    document.addEventListener('mousedown', close, true);
    return () => document.removeEventListener('mousedown', close, true);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        langRef.current?.contains(target) ||
        langDropRef.current?.contains(target)
      )
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

  const basePath = (path: string) => (path ? `/${lang}/${path}` : `/${lang}`);
  const isActive = (path: string) => {
    const full = basePath(path);
    if (path === '') return pathname === `/${lang}` || pathname === `/${lang}/`;
    return (
      pathname === full ||
      pathname === `${full}/` ||
      pathname.startsWith(`${full}/`)
    );
  };
  const isChildActive = (path: string, segment: string) => {
    const full = `/${lang}/${path}/${segment}`;
    return pathname === full || pathname === `${full}/`;
  };

  const navLinkBase =
    'nav-link font-montserrat text-[13px] md:text-[13px] lg:text-[14px] xl:text-[15px] tracking-widest no-underline py-2.5 px-2 md:px-2.5 rounded-md whitespace-nowrap block min-h-[44px] flex items-center transition-all duration-200';
  const navLinkClass = (active: boolean) =>
    `${navLinkBase} ${active ? 'nav-link-active text-astro-gold font-semibold' : 'theme-text'}`;

  return (
    <>
      <nav className="astro-nav theme-bg sticky top-0 z-800 w-full pt-8 md:pt-12 pb-0 transition-colors">
        <div
          className="max-w-[1750px] mx-auto flex justify-between items-center pl-4 pr-4 md:pl-12 md:pr-16 lg:pr-20"
          style={{gap: 48}}>
          <Link
            href={`/${lang}`}
            className="flex items-center gap-4 md:gap-5 shrink-0 no-underline rounded-lg transition-all duration-200 hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-astro-gold/50">
            <div className="relative w-[70px] h-[70px] md:w-[100px] md:h-[100px] flex justify-center items-center shrink-0">
              <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible" aria-hidden>
                <circle cx="50" cy="50" r="45" fill="none" stroke="#b8926a" strokeWidth="0.6" opacity="0.3">
                  <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="50s" repeatCount="indefinite" />
                </circle>
                <circle cx="50" cy="50" r="38" fill="none" stroke="#b3916e" strokeWidth="1" />
                <path d="M50,20 L54,42 L78,42 L58,54 L66,78 L50,62 L34,78 L42,54 L22,42 L46,42 Z" fill="none" stroke="#b3916e" strokeWidth="1.2" />
                <circle cx="50" cy="50" r="3" fill="#b3916e" />
                <circle cx="50" cy="5" r="1.5" fill="#b3916e" />
                <circle cx="50" cy="95" r="1.5" fill="#b3916e" />
              </svg>
            </div>
            <div
              className="w-px h-12 md:h-[72px] shrink-0 opacity-60"
              style={{backgroundColor: 'var(--theme-border)'}}
              aria-hidden
            />
            <div className="flex flex-col gap-0.5 shrink-0">
              <span className="font-cinzel text-[20px] md:text-[30px] tracking-widest theme-text uppercase leading-none">
                Astrolog
              </span>
              <span className="font-montserrat text-[10px] md:text-[12px] tracking-[0.25em] text-astro-gold uppercase">
                {t('brand.tagline')}
              </span>
            </div>
          </Link>

          <div
            ref={menuRef}
            className="navbar-desktop hidden md:flex flex-1 min-w-0 items-center md:ml-12 lg:ml-16 gap-0">
            {/* Center: nav links get all remaining space so they don't wrap when locale text is longer */}
            <div className="flex flex-nowrap items-center gap-2 md:gap-3 lg:gap-4 xl:gap-6 min-w-0 flex-1 overflow-x-auto">
              {NAV_ITEMS.map(item => {
                const hasChildren = item.children && item.children.length > 0;
                const fullPath = basePath(item.path);
                const sectionActive =
                  isActive(item.path) ||
                  (item.path && pathname.startsWith(fullPath));

                if (!hasChildren) {
                  return (
                    <Link
                      key={item.id}
                      href={fullPath}
                      className={navLinkClass(isActive(item.path))}>
                      {t(item.labelKey)}
                    </Link>
                  );
                }

                return (
                  <div
                    key={item.id}
                    className="relative flex items-center min-h-[44px]">
                    <button
                      ref={el => {
                        if (openMenu === item.id) dropdownTriggerRef.current = el;
                        else if (dropdownTriggerRef.current === el) dropdownTriggerRef.current = null;
                      }}
                      type="button"
                      onClick={e => {
                        const next = openMenu === item.id ? null : item.id;
                        if (next) {
                          const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
                          setDropdownPos({top: r.bottom + 6, left: r.left});
                        }
                        setOpenMenu(next);
                      }}
                      data-open={openMenu === item.id ? 'true' : undefined}
                      className={`nav-dropdown-trigger font-montserrat text-[13px] md:text-[13px] lg:text-[14px] xl:text-[15px] tracking-widest py-2.5 px-2 md:px-2.5 rounded-md whitespace-nowrap min-h-[44px] flex items-center gap-0.5 transition-all duration-200 bg-transparent border-0 cursor-pointer ${
                        sectionActive || openMenu === item.id
                          ? 'text-astro-gold font-semibold'
                          : 'theme-text'
                      }`}
                      aria-expanded={openMenu === item.id}
                      aria-haspopup="true">
                      {t(item.labelKey)} ▾
                    </button>
                    {openMenu === item.id &&
                      typeof document !== 'undefined' &&
                      createPortal(
                        <NavDropdownPanel
                          ref={dropdownPanelRef}
                          item={item as NavItem & { children: NonNullable<NavItem['children']> }}
                          lang={lang}
                          t={t}
                          isChildActive={isChildActive}
                          setOpenMenu={setOpenMenu}
                          dropdownPos={dropdownPos}
                          isGrid={DROPDOWN_GRID_IDS.includes(item.id as (typeof DROPDOWN_GRID_IDS)[number])}
                          groupLabelClass={DROPDOWN_GROUP_LABEL}
                          linkClass={DROPDOWN_LINK}
                          linkActiveClass={DROPDOWN_LINK_ACTIVE}
                          linkInactiveClass={DROPDOWN_LINK_INACTIVE}
                        />,
                        document.body,
                      )}
                  </div>
                );
              })}
            </div>

            {/* CTA: Free Chart / Daily hook */}
            <Link
              href={`/${lang}/${NAV_CTA.path}`}
              className="shrink-0 px-3 py-2 rounded-md bg-astro-gold font-montserrat text-[12px] lg:text-[13px] tracking-widest uppercase no-underline font-semibold transition-all duration-200 hover:brightness-110 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-astro-gold focus-visible:ring-offset-2 focus-visible:ring-offset-(--theme-bg)"
              style={{color: 'var(--theme-on-accent)'}}>
              {t(NAV_CTA.labelKey)}
            </Link>

            {/* Right: theme + lang only; narrow block pushed to the edge via ml-auto */}
            <div className="flex items-center shrink-0 gap-1.5 ml-auto">
              <span
                className="self-stretch w-px theme-border"
                style={{backgroundColor: 'var(--theme-border)'}}
                aria-hidden
              />
              <button
                type="button"
                onClick={toggleTheme}
                className="p-2 rounded-md theme-text hover:opacity-80 transition-opacity duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-astro-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-(--theme-bg)"
                title={
                  theme === 'dark' ? t('nav.lightMode') : t('nav.darkMode')
                }
                aria-label="Toggle theme">
                <span className="text-xl leading-none">{theme === 'dark' ? '☀️' : '🌙'}</span>
              </button>
              <div
                ref={langRef}
                className="relative flex items-center shrink-0"
                style={{minHeight: 52}}>
                <button
                  ref={langBtnRef}
                  type="button"
                  onMouseDown={e => e.stopPropagation()}
                  onClick={toggleLang}
                  className="nav-btn leading-none cursor-pointer bg-transparent border-2 theme-border rounded-lg py-2.5 px-3 min-h-[48px] flex items-center justify-center theme-text transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-astro-gold/50"
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
                      className="nav-lang-dropdown fixed py-3 px-3 theme-bg border-2 theme-border z-99999 flex flex-col gap-1 rounded-lg min-w-[80px]"
                      style={{top: langDropPos.top, left: langDropPos.left}}>
                      {LOCALES.map(({code, flag, label}) => (
                        <Link
                          key={code}
                          href={`/${code}${pathWithoutLang}`}
                          onClick={() => setLangOpen(false)}
                          title={label}
                          className={`no-underline block leading-none py-2.5 px-2 rounded-md transition-transform duration-200 hover:scale-110 ${code === lang ? 'opacity-100' : 'opacity-70 hover:opacity-90'}`}
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

          {/* Mobile: hamburger */}
          <div className="flex md:hidden items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setMobileOpen(o => !o)}
              className="nav-btn p-3 rounded-lg border-2 theme-border theme-text focus:outline-none focus-visible:ring-2 focus-visible:ring-astro-gold/50"
              aria-expanded={mobileOpen}
              aria-label="Menu">
              <span
                className="block w-6 h-0.5 rounded"
                style={{backgroundColor: 'var(--theme-text)'}}
              />
              <span
                className="block w-6 h-0.5 mt-1.5 rounded"
                style={{backgroundColor: 'var(--theme-text)'}}
              />
              <span
                className="block w-6 h-0.5 mt-1.5 rounded"
                style={{backgroundColor: 'var(--theme-text)'}}
              />
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        <div
          className={`md:hidden theme-bg border-t theme-border overflow-y-auto transition-all duration-300 ease-out ${
            mobileOpen
              ? 'max-h-[85vh] opacity-100'
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
          style={{
            backgroundColor: 'var(--theme-bg)',
            borderColor: 'var(--theme-border)',
          }}>
          <div className="py-4 px-4 flex flex-col gap-1">
            {NAV_ITEMS.map(item => {
              const hasChildren = item.children && item.children.length > 0;
              const fullPath = basePath(item.path);
              if (!hasChildren) {
                return (
                  <Link
                    key={item.id}
                    href={fullPath}
                    onClick={() => setMobileOpen(false)}
                    className={navLinkClass(isActive(item.path))}>
                    {t(item.labelKey)}
                  </Link>
                );
              }
              return (
                <div key={item.id} className="flex flex-col gap-0">
                  <span
                    className={`py-3 px-3 font-montserrat text-[15px] tracking-[0.12em] ${
                      isActive(item.path) || pathname.startsWith(fullPath)
                        ? 'text-astro-gold font-semibold'
                        : 'theme-text'
                    }`}>
                    {t(item.labelKey)}
                  </span>
                  {item.children!.map(child => {
                    if (isNavGroup(child)) {
                      return (
                        <div key={child.groupKey} className="flex flex-col">
                          <span className="py-1.5 pl-6 pr-3 text-[11px] font-montserrat uppercase tracking-widest text-astro-gold/80">
                            {t(child.groupKey)}
                          </span>
                          {child.items.map(link => {
                            const childPath = `/${lang}/${item.path}/${link.pathSegment}`;
                            const active = isChildActive(item.path, link.pathSegment);
                            return (
                              <Link
                                key={link.pathSegment}
                                href={childPath}
                                onClick={() => setMobileOpen(false)}
                                className={`py-2 pl-8 pr-3 text-[14px] font-montserrat no-underline rounded-md ${
                                  active ? 'text-astro-gold font-semibold' : 'theme-text'
                                }`}>
                                {t(link.labelKey)}
                              </Link>
                            );
                          })}
                        </div>
                      );
                    }
                    const childPath = `/${lang}/${item.path}/${child.pathSegment}`;
                    const active = isChildActive(item.path, child.pathSegment);
                    return (
                      <Link
                        key={child.pathSegment}
                        href={childPath}
                        onClick={() => setMobileOpen(false)}
                        className={`py-2.5 pl-6 pr-3 text-[14px] font-montserrat no-underline rounded-md ${
                          active ? 'text-astro-gold font-semibold' : 'theme-text'
                        }`}>
                        {t(child.labelKey)}
                      </Link>
                    );
                  })}
                </div>
              );
            })}
            <Link
              href={`/${lang}/${NAV_CTA.path}`}
              onClick={() => setMobileOpen(false)}
              className="mt-3 py-3 px-4 rounded-lg bg-astro-gold font-montserrat text-sm font-semibold uppercase tracking-widest no-underline text-center"
              style={{color: 'var(--theme-on-accent)'}}>
              {t(NAV_CTA.labelKey)}
            </Link>
            <div
              className="flex items-center gap-3 mt-4 pt-4 border-t theme-border"
              style={{borderColor: 'var(--theme-border)'}}>
              <button
                type="button"
                onClick={toggleTheme}
                className="nav-btn py-2.5 px-4 rounded-lg border-2 theme-border theme-text"
                aria-label="Toggle theme">
                {theme === 'dark' ? '☀️' : '🌙'}
              </button>
              <div ref={langRef} className="flex gap-2">
                {LOCALES.map(({code, flag, label}) => (
                  <Link
                    key={code}
                    href={`/${code}${pathWithoutLang}`}
                    onClick={() => {
                      setMobileOpen(false);
                      setLangOpen(false);
                    }}
                    title={label}
                    className="p-2 rounded-md theme-text no-underline text-xl">
                    {flag}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          className="w-full mt-6 md:mt-8 h-px theme-border"
          style={{backgroundColor: 'var(--theme-border)'}}
        />
      </nav>
    </>
  );
};

export default Navbar;
