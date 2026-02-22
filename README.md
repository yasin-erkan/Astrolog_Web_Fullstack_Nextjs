# Astrolog ...

A multilingual website for **Ü.E — Astrology & Holistic Healing**. Built with Next.js 16 and React 19.

---

## Tech Stack

| Area      | Stack                                    |
| --------- | ---------------------------------------- |
| Framework | Next.js 16 (App Router)                  |
| UI        | React 19, Tailwind CSS v4, Framer Motion |
| Language  | TypeScript                               |
| Fonts     | Google Fonts (Cinzel, Montserrat)        |

---

## Project Structure

```
src/
├── app/
│   ├── [lang]/              # Locale segment (tr, en, de, fr)
│   │   ├── layout.tsx       # Root layout, Navbar, fonts
│   │   ├── page.tsx         # Home (hero + zodiac section)
│   │   ├── iletisim/        # Contact
│   │   ├── akademi/         # Academy
│   │   ├── sifa/            # Healing
│   │   ├── astro-pilates/
│   │   └── danismanlik/     # Consultancy
│   │       ├── dogum-haritasi/  # Birth chart
│   │       └── sinastri/
│   └── globals.css
├── components/
│   └── navbar/
│       └── Navbar.tsx       # Logo, menu links, language selector (flags)
├── constants/
│   └── services.ts         # Consultancy & healing service lists
└── middleware.ts            # / → /tr redirect
```

---

## Getting Started

```bash
npm install
npm run dev    # http://localhost:3000
npm run build
npm start
```

Root path `/` redirects to `/tr`.

---

## Locales

- **tr** — Türkçe (default)
- **en** — English
- **de** — Deutsch
- **fr** — Français

URLs: `/[lang]/...` (e.g. `/tr`, `/en/iletisim`). Language is switched via the flag dropdown in the navbar.

---

## Design

- **Palette** (in `tailwind.config.ts`): `astro` theme
  - `astro-gold` (#b3916e) — accent, buttons
  - `astro-dark` (#2d2a26) — text
  - `astro-bg` (#fdfbf7) — background
  - `astro-border`, `astro-muted` — borders and secondary text
- **Fonts:** Cinzel for headings, Montserrat for body.

---

## Current Features

- [x] Multi-language routing and language selector
- [x] Navbar with logo, menu, consultancy dropdown, language dropdown
- [x] Home page (hero, CTA, zodiac section)
- [x] Pages: Contact, Academy, Healing, Astro-Pilates, Consultancy (Birth Chart, Synastry)
- [x] Shared color palette and typography

---

## Roadmap

- [ ] **Content:** About page and localized copy for all languages
- [ ] **Consultancy:** Wire all consultancy/healing sub-pages from `services.ts`
- [ ] **Contact:** Form and/or map integration
- [ ] **CTA:** “Danışmanlık Alın” button → booking or contact flow
- [ ] **Backend / Fullstack:** API, database, auth for admin
- [ ] **Admin:** `/admin` panel for content and bookings
- [ ] **SEO:** Per-page and per-locale metadata, Open Graph
- [ ] **Performance:** Image optimization, lazy loading

---

## License

Private use.
