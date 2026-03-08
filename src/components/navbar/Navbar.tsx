'use client';

import Link from 'next/link';
import Image from 'next/image';
import {usePathname} from 'next/navigation';
import {forwardRef, useState, useEffect, useRef} from 'react';
import {createPortal} from 'react-dom';
import {LOCALES} from '@/constants/nav';
import {NAV_ITEMS, NAV_CTA, isNavGroup, type NavItem, type NavItemChild} from '@/constants/navConfig';
import {useTheme} from '@/components/ThemeProvider';
import {getTranslations} from '@/i18n/translations';

const DROPDOWN_GRID_IDS = ['consultations', 'healing'] as const;
const DROPDOWN_GROUP_LABEL = 'nav-dd-label font-montserrat';
const DROPDOWN_LINK = 'nav-dd-link font-montserrat';
const DROPDOWN_LINK_ACTIVE = 'nav-dd-link-active';
const DROPDOWN_LINK_INACTIVE = '';

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
    <div key={child.groupKey} className="nav-dd-group">
      <span className={groupLabelClass}>{t(child.groupKey)}</span>
      {child.items.map((link) => {
        const childPath = `/${lang}/${item.path}/${link.pathSegment}`;
        const active = isChildActive(item.path, link.pathSegment);
        return (
          <Link
            key={link.pathSegment}
            href={childPath}
            onClick={() => setOpenMenu(null)}
            className={`${linkClass} ${active ? linkActiveClass : linkInactiveClass}`}>
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
      className={`nav-dropdown fixed theme-bg theme-border border rounded-xl shadow-(--nav-dropdown-shadow) z-9999 ${
        isGrid ? 'min-w-[340px] max-w-[420px] py-4 px-5' : 'min-w-[240px] py-3 px-4'
      }`}
      style={{ top: dropdownPos.top, left: dropdownPos.left }}>
      {isGrid && gridChildren?.length ? (
        <div className="grid grid-cols-2 gap-x-10 gap-y-4">
          {gridChildren.map(renderGroup)}
        </div>
      ) : (
        <div className="nav-dd-group">
          {children.map(child => {
            if (isNavGroup(child)) return renderGroup(child);
            const childPath = `/${lang}/${item.path}/${child.pathSegment}`;
            const active = isChildActive(item.path, child.pathSegment);
            return (
              <Link
                key={child.pathSegment}
                href={childPath}
                onClick={() => setOpenMenu(null)}
                className={`${linkClass} ${active ? linkActiveClass : linkInactiveClass}`}>
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
      <nav className="astro-nav theme-bg fixed top-0 left-0 right-0 z-800 w-full pt-3 md:pt-4 pb-0 transition-colors">
        <div
          className="max-w-[1750px] mx-auto flex flex-wrap items-center justify-between gap-3 pl-4 pr-4 md:pl-12 md:pr-16 lg:pr-20 md:gap-5">
          <Link
            href={`/${lang}`}
            className="flex items-center gap-3 md:gap-4 shrink-0 no-underline rounded-lg transition-all duration-200 hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-astro-gold/50">
            <div className="relative w-[60px] h-[60px] md:w-[88px] md:h-[88px] flex justify-center items-center shrink-0 overflow-hidden rounded-full">
              <Image
                src="/logo.png"
                alt="Astrolog Umran"
                width={88}
                height={88}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div
              className="w-px h-10 md:h-14 shrink-0 opacity-60"
              style={{backgroundColor: 'var(--theme-border)'}}
              aria-hidden
            />
            <div className="flex flex-col gap-0.5 shrink-0">
              <span className="font-cinzel text-[16px] md:text-[22px] tracking-widest theme-text uppercase leading-none">
                Astrolog Umran
              </span>
              <span className="font-montserrat text-[9px] md:text-[11px] tracking-[0.25em] text-astro-gold uppercase">
                {t('brand.tagline')}
              </span>
            </div>
          </Link>

          {/* Center + Right: flex row; center scrolls, right fixed 220px */}
          <div
            ref={menuRef}
            className="navbar-desktop hidden md:flex flex-1 min-w-0 items-center md:ml-4 lg:ml-6 gap-0 overflow-hidden">
            <div className="flex flex-nowrap items-center gap-2 md:gap-2 lg:gap-3 xl:gap-4 min-w-0 flex-1 overflow-x-auto overflow-y-hidden scrollbar-none py-1">
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

            {/* Right: fixed width; CTA has min-width so text never clips */}
            <div className="flex items-center shrink-0 w-[240px] lg:w-[280px] gap-2 pl-3">
              <Link
                href={`/${lang}/${NAV_CTA.path}`}
                className="nav-cta flex-1 min-w-[8.5rem] py-2.5 rounded-md font-montserrat text-[13px] lg:text-[14px] tracking-widest uppercase no-underline font-semibold transition-all duration-200 hover:brightness-110 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-astro-gold focus-visible:ring-offset-2 focus-visible:ring-offset-(--theme-bg) text-center whitespace-nowrap overflow-hidden text-ellipsis px-3">
                {t(NAV_CTA.labelKey)}
              </Link>
              <div className="flex items-center shrink-0 gap-1.5">
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
              className="nav-cta mt-3 py-3 px-4 rounded-lg bg-astro-gold font-montserrat text-sm font-semibold uppercase tracking-widest no-underline text-center">
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
