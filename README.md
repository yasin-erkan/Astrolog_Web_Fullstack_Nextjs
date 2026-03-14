Multilingual site for **Astrolog Umran** — Astrology & Holistic Healing.  
Next.js 16, React 19, Tailwind v4, Framer Motion. **TR, EN, DE, FR.**

The project is actively maintained. See **Features** and **Roadmap** below.

---

## Demo

|                                                        |
| :----------------------------------------------------: |
| ![Astrolog Umran site demo](public/astrolog_umran.gif) |
|           _Site preview — Astrolog Umran_              |

---

## Tech Stack

| Area      | Stack                                                      |
| --------- | ---------------------------------------------------------- |
| Framework | Next.js 16 (App Router)                                    |
| UI        | React 19, Tailwind CSS v4, Framer Motion                   |
| Language  | TypeScript                                                 |
| Fonts     | Google Fonts (Cinzel, Montserrat)                          |
| i18n      | Modular locales (`src/i18n/locales/*.ts`) — en, tr, de, fr |

---

## Project Structure

```
src/
├── app/
│   ├── [lang]/                        # Locale: tr, en, de, fr
│   │   ├── layout.tsx                 # Root layout, Navbar, Footer, theme
│   │   ├── loading.tsx                # Astrolog-themed loading animation
│   │   ├── page.tsx                   # Home (Hero, Services, Rituals, ZodiacSection)
│   │   ├── consultations/
│   │   │   ├── page.tsx               # Main consultations page
│   │   │   ├── slugs.ts               # Valid slugs + slug → locale/nav key
│   │   │   └── [slug]/page.tsx        # birth-chart, synastry, horary, etc.
│   │   ├── healing/
│   │   │   ├── page.tsx
│   │   │   ├── slugs.ts
│   │   │   └── [slug]/page.tsx        # holistic-movement, theta-healing, etc.
│   │   ├── academy/
│   │   │   ├── page.tsx
│   │   │   ├── slugs.ts
│   │   │   └── [slug]/page.tsx        # beginner, recordings, sky-calendar, blog
│   │   ├── daily-routines/
│   │   │   ├── page.tsx
│   │   │   ├── slugs.ts
│   │   │   └── [slug]/page.tsx        # planet-salutation, theta-intentions, etc.
│   │   ├── zodiac/
│   │   │   ├── slugs.ts
│   │   │   └── [slug]/page.tsx        # aries, taurus, ... (12 signs)
│   │   ├── blog/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx        # Blog post detail
│   │   ├── free-chart/
│   │   └── contact/
│   └── globals.css                    # Theme vars, hero, nav, footer, zodiac
├── components/
│   ├── hero/
│   │   ├── HeroSection.tsx            # Rings, moon phase, CTA, floating Birth Chart seal (theme-aware)
│   │   └── MoonPhase.tsx
│   ├── home/
│   │   └── ZodiacSection.tsx          # 12 signs → /zodiac/[slug], element colors, hover tooltip (keywords)
│   ├── navbar/
│   │   └── Navbar.tsx                 # Logo, dropdowns, theme/lang, CTA, aria-labels
│   ├── footer/
│   │   └── Footer.tsx
│   ├── SectionSubPageContent.tsx      # Shared sub-page layout (title, intro, body, highlights, optional rightSlot)
│   └── healing/
│       └── HolisticMovementPhoto.tsx
├── constants/
│   ├── navConfig.ts
│   ├── nav.ts
│   ├── posts.ts                       # Blog posts (localized title, excerpt, content)
│   └── footer.ts
├── i18n/
│   ├── types.ts                       # Locale, PageBlock, ZodiacSign, ZodiacElement
│   ├── translations.ts                # Merges locale modules, getTranslations(), t()
│   └── locales/
│       ├── nav.ts
│       ├── home.ts                    # Hero, yourSkyGuide, yourSkyGuideSubtitle, zodiacSigns (slug, element, keywords)
│       ├── blog.ts
│       ├── pages.ts                   # Main pages (consultations, healing, academy, …)
│       ├── consultationsSub.ts        # Per-consultation sub-page content (4 langs)
│       ├── healingSub.ts
│       ├── academySub.ts
│       ├── dailyRoutinesSub.ts
│       └── zodiacSub.ts               # Per-sign page content (4 langs)
└── lib/
    ├── fonts.ts
    ├── blog.ts                        # getPosts, getPostBySlug (re-exports from constants/posts)
    └── moonPhase.ts
public/
├── astrolog_umran.gif   # Demo GIF
├── umran_foto.jpg
├── pilates.png
└── logo.png
```

---

## Getting Started

Root `/` redirects to default locale (e.g. `/tr`).

---

## Locales & Routes

- **Locales:** tr, en, de, fr — all content and SEO (metaTitle, metaDescription) per page/sub-page.
- **URLs:** `/[lang]/...` (e.g. `/en/consultations/birth-chart`, `/tr/zodiac/aries`).
- **Dynamic [slug] sections:** Consultations, Healing, Academy, Daily Routines, Zodiac — one `slugs.ts` + `[slug]/page.tsx` per section; `generateStaticParams` for static generation.
- **Nav:** Dropdowns (Consultations, Healing, Academy), theme toggle, language selector; aria-labels for accessibility.

---

## Design

- **Theme:** CSS vars in `globals.css` — `--theme-bg`, `--theme-text`, `--theme-border`; dark mode via `[data-theme="dark"]`.
- **Accent:** `#b3916e` (astro-gold) — buttons, links, logo, hero.
- **Fonts:** Cinzel (headings), Montserrat (body).
- **Hero:** Zodiac rings, dynamic moon phase, stagger, CTA, floating “Birth Chart” seal (smaller, theme-aware for light/dark).
- **Home:** “Your Sky Guide” — subtitle CTA (e.g. “Choose your sign and start your journey”), 12 zodiac cards linking to `/[lang]/zodiac/[slug]`, element-based border/glow (fire/earth/air/water), hover tooltip with 3 keywords per sign.
- **Sub-pages:** Shared `SectionSubPageContent` (or consultation-specific component); optional `rightSlot` for image (e.g. holistic-movement photo).
- **Responsive:** Mobile hamburger, fixed dropdowns, loading state (`loading.tsx`) for [lang] routes.

---

## Features

- [x] Multi-language (tr, en, de, fr) and language switcher
- [x] Nav: logo (Astrolog Umran), Consultations / Healing / Academy dropdowns, CTA “Free Chart”, theme + lang; aria-labels
- [x] Home: hero (rings, moon phase, CTA, floating Birth Chart seal), Services strip, Daily Rituals teaser, ZodiacSection (links to /zodiac/[slug], element colors, keyword tooltips)
- [x] Consultations, Healing, Academy, Daily Routines: main page + [slug] sub-pages (single template per section, content from locale modules)
- [x] Zodiac: 12 sign pages at /[lang]/zodiac/[slug] with localized content (intro, body, “today” tip, highlights)
- [x] Blog: list + [slug] detail; localized posts (title, excerpt, content)
- [x] SEO: metaTitle / metaDescription per page and sub-page (from i18n)
- [x] Loading: astrolog-themed loading animation for [lang] routes
- [x] Dark/light theme
- [x] Responsive layout and nav

---

## Roadmap

- [ ] Content: expand copy where placeholder; About page if needed
- [ ] Contact: form and/or map
- [ ] CTA: booking or contact flow
- [ ] Backend / CMS: feed consultationsSub, healingSub, academySub, dailyRoutinesSub, zodiacSub (and blog) from API; same page/layout shape

---

## License

Private use.
