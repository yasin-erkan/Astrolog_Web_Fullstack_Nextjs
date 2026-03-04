Multilingual site for **Astrology & Holistic Healing**
Next.js 16, React 19, Tailwind v4, Framer Motion. TR, EN, DE, FR.

---

## Screenshots

Add `screenshot-1.png`, `screenshot-2.png`, `screenshot-3.png` to `public/screenshots/`; they render below at 640px width.

| |
| :---: |
| <img src="./public/screenshots/screenshot-1.png" alt="Home" width="640" /> |

| |
| :---: |
| <img src="./public/screenshots/screenshot-2.png" alt="Screenshot 2" width="640" /> |

| |
| :---: |
| <img src="./public/screenshots/screenshot-3.png" alt="Screenshot 3" width="640" /> |

---

## Tech Stack

| Area      | Stack                                     |
| --------- | ----------------------------------------- |
| Framework | Next.js 16 (App Router)                   |
| UI        | React 19, Tailwind CSS v4, Framer Motion  |
| Language  | TypeScript                                |
| Fonts     | Google Fonts (Cinzel, Montserrat)         |
| i18n      | In-app `translations.ts` (en, tr, de, fr) |

---

## Project Structure

```
src/
├── app/
│   ├── [lang]/                    # Locale: tr, en, de, fr
│   │   ├── layout.tsx             # Root layout, Navbar, theme
│   │   ├── page.tsx               # Home (HeroSection + zodiac grid)
│   │   ├── consultations/         # Birth chart, Synastry, Karmic, etc.
│   │   ├── healing/               # Sessions, events, sub-pages
│   │   ├── academy/               # Beginner, recordings, blog, sky-calendar
│   │   ├── free-chart/
│   │   └── contact/
│   └── globals.css                # Theme vars, hero, nav, zodiac
├── components/
│   ├── hero/
│   │   └── HeroSection.tsx        # Parallax rings, stagger, CTA fill, floating box
│   └── navbar/
│       └── Navbar.tsx             # Logo (star/moon), mega dropdowns, theme/lang
├── constants/
│   ├── navConfig.ts               # NAV_ITEMS (Consultations, Healing, Academy), NAV_CTA
│   └── nav.ts
├── i18n/
│   └── translations.ts            # t(), getTranslations, all locale copy
└── lib/
    └── fonts.ts
public/
└── screenshots/                  # Add screenshot-1.png, screenshot-2.png, screenshot-3.png
```

---

## Getting Started

```bash
npm install
npm run dev   # http://localhost:3000
npm run build
npm start
```

Root `/` redirects to `/tr`.

---

## Locales & Routes

- **tr** (default), **en**, **de**, **fr**
- URLs: `/[lang]/...` (e.g. `/en/consultations/birth-chart`)
- Nav: click-to-open dropdowns (Consultations, Healing, Academy), theme toggle, language selector

---

## Design

- **Theme:** CSS vars in `globals.css` — `--theme-bg`, `--theme-text`, `--theme-border`; dark mode `[data-theme="dark"]`.
- **Accent:** `#b3916e` (astro-gold) — buttons, links, logo, hero.
- **Fonts:** Cinzel (headings / luxury), Montserrat (body); italic extralight for hero subtitle.
- **Hero:** Layered parallax (rotating rings), staggerChildren slide-up, CTA with left-to-right fill on hover, floating “Birth Chart” box (i18n).
- **Logo:** SVG — rotating outer ring, inner ring, 8-point star, center + top/bottom dots (no text inside).
- **Responsive:** Mobile hamburger, dropdowns in portal with fixed position, hero and nav scale for small screens.

---

## Features

- [x] Multi-language (tr, en, de, fr) and language switcher
- [x] Nav: logo, Consultations / Healing / Academy mega dropdowns (click), CTA “Free Chart”, theme + lang
- [x] Home: hero (parallax rings, stagger, CTA, floating box), zodiac sign grid
- [x] Consultations: Birth Chart, Synastry, Karmic, Spiritual, Business, Electional
- [x] Healing: sessions + events groups; Academy: beginner, recordings, blog, sky-calendar
- [x] Dark/light theme
- [x] Responsive layout and nav

---

## Roadmap

- [ ] Content: About, localized copy
- [ ] Contact: form / map
- [ ] CTA: booking or contact flow
- [ ] SEO: per-page and per-locale metadata
- [ ] Backend / admin if needed

---

## License

Private use.
