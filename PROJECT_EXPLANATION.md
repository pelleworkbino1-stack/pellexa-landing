# Pellexa Landing — Full Project & Website Explanation

This document explains **what Pellexa is**, **how the website is structured**, and **how the codebase works** end to end.

---

## 1. What is Pellexa?

**Pellexa** is a multi-vertical strategic sourcing and technology company. The public site positions Pellexa as a bridge between Tier-1 / specialized manufacturing capacity and enterprise buyers — sourcing, logistics, and local delivery/implementation.

The website is not a single product page. It is a **corporate hub** with dedicated landing experiences for each business line:

| Vertical | What Pellexa sells / offers | Primary routes |
|---|---|---|
| **Corporate hub** | Brand overview + entry into all divisions | `/` |
| **LED Screens** | Custom indoor/outdoor/rental LED displays | `/led`, `/led/:market`, or `led.pellexa.com` |
| **Agri-Food** | Matcha + cacao derivatives sourcing | `/food`, `/food/matcha`, `/food/cacao` |
| **General Sourcing** | Industrial & specialized sourcing from Asia partner facilities | `/sourcing` |
| **Acrylic** | Partner-fabricated acrylic (retail, TCG, architectural, industrial) | `/acrylic` |

Public brand URL: **https://pellexa.com**  
LED subdomain: **https://led.pellexa.com**

---

## 2. What this repository is

| Item | Detail |
|---|---|
| Package name | `pellexa-landing` |
| Type | Frontend marketing / lead-gen SPA + one serverless contact API |
| Stack | React 19, TypeScript, Vite 8, Tailwind CSS 4, Framer Motion, React Router 7 |
| Deploy target | Vercel (`vercel.json` SPA rewrites + `/api` serverless) |
| Email delivery | Resend (`RESEND_API_KEY`) → `led.sales@pellexa.com` (LED contact form) |

This is a **client-rendered Vite app**. There is no traditional backend beyond the Vercel function in `api/contact.ts`. Most other contact CTAs use `mailto:` handoffs to vertical-specific inboxes.

---

## 3. High-level architecture

```
Browser
  └─ React Router (src/App.tsx)
       ├─ ThemeProvider  → sets .theme-parent | .theme-led | .theme-agri on <html>
       ├─ Parent / Agri / Sourcing / Acrylic pages
       │    └─ LangProvider (EN / HE) for hub content
       └─ LED pages
            └─ MarketProvider (global / ph / il / matcha override)
                 └─ Market-driven sections (Hero, Solutions, Contact, …)

Forms (LED)
  └─ POST /api/contact
       ├─ Dev: Vite middleware plugin (vite.config.ts)
       └─ Prod: Vercel serverless (api/contact.ts)
            └─ Resend email
```

### Design philosophy of the code

1. **Content is data.** Page copy lives in market / parent content files under `src/markets/`, not hard-coded inside every component.
2. **One component set, many markets.** LED sections (`Hero`, `Solutions`, `FAQ`, etc.) read from `useMarket()` and re-render for Philippines, Israel, Global, or Matcha.
3. **Theme is route-driven, not prop-drilled.** `ThemeProvider` swaps CSS variables via a class on `<html>`. Components use tokens like `text-brand-400` and automatically pick up the right color.
4. **Canvas + silver stay locked.** All branches share the same dark canvas and silver structural chrome; only the accent brand color changes.

---

## 4. Website map (user-facing)

### 4.1 Corporate hub — `/`

**Purpose:** Introduce Pellexa as the holding / strategic brand and route visitors into verticals.

**Page:** `src/pages/ParentPage.tsx`

**Sections:**
- `ParentNavbar` — navigation + EN/HE language toggle
- `ParentHero` — brand hero
- `SolutionsGrid` — cards into LED, Agri-Food, General Sourcing
- `ParentAbout` — company pillars
- `ParentContact` — contact CTA
- `ParentFooter`

**i18n:** English (`parent-en.ts`) and Hebrew (`parent-he.ts`) via `LangContext`. Language is stored in cookie `pellexa_lang`. HTML `lang` / `dir` switch to RTL for Hebrew.

**Theme:** `.theme-parent` — Premium Sky Blue (`#00A3FF`) + Bronze secondary runway.

---

### 4.2 LED Solutions — `/led` and `/led/:market`

**Purpose:** Full LED sales landing page with regional localization.

**Page:** `src/pages/LedPage.tsx`

**Section flow:**
1. Market banner / selector
2. Scroll progress bar
3. Navbar
4. Hero
5. Why Pellexa
6. Advantage
7. Solutions (indoor / outdoor / rental, etc.)
8. Showcase (optional per market — `showcase.visible`)
9. Process
10. FAQ
11. Contact (rich project intake form → API email)
12. Footer

**Markets:**

| Market ID | File | Language | Direction | Notes |
|---|---|---|---|---|
| `global` | `markets/global.ts` | English | LTR | Default |
| `ph` | `markets/ph.ts` | English | LTR | Philippines-focused copy |
| `il` | `markets/il.ts` | Hebrew | RTL | Israel-focused copy |
| `matcha` | `markets/matcha.ts` | English | LTR | Also used as content override for `/food/matcha` |

**Market resolution** (`MarketContext`):
1. Optional `override` prop (used by Matcha page)
2. Else URL param `/:market` or `/led/:market`
3. Else cookie `pellexa_market`
4. Else `global`

**Subdomain mode:** On `led.pellexa.com`, routes collapse to `/` and `/:market` (no `/led` prefix). “Back to hub” links go to `https://pellexa.com`. Detection lives in `src/lib/site.ts`.

**Theme:** `.theme-led` — Electric Cyan (`#00F2FE`).

---

### 4.3 Agri-Food hub — `/food`

**Purpose:** Portfolio entry for food / ingredient lines.

**Page:** `src/pages/FoodPage.tsx`

- Hub hero + grid cards
- **Matcha Sourcing** → `/food/matcha`
- **Cacao Derivatives** → `/food/cacao`
- Shared parent navbar / contact / footer patterns
- Theme: `.theme-agri` (Matcha green + Cocoa brown secondary)

---

### 4.4 Matcha — `/food/matcha`

**Purpose:** Dedicated matcha procurement landing (tier grades, process, FAQ, food contact form).

**Page:** `src/pages/MatchaPage.tsx`

Reuses the LED section components (`Hero`, `WhyPellexa`, `Advantage`, `Solutions`, `Process`, `FAQ`) but feeds them **matcha market content** via:

```tsx
<MarketProvider override={matcha}>
```

Contact uses `FoodContact` instead of the LED `Contact` form. Navbar is the parent hub navbar.

---

### 4.5 Cacao — `/food/cacao`

**Purpose:** Enterprise cacao derivatives portfolio (powder, butter, liquor).

**Page:** `src/pages/CocoaPage.tsx`

- Body: `CocoaPortfolio` — grades, overviews, applications matrix, QC / certifications, logistics, master CTA
- Contact: `ParentContact`
- Content source of truth for portfolio copy: `docs/cocoa_knowlage.md`
- Structured into TypeScript in `parent-en.ts` / `parent-he.ts` under `content.cocoa`

Positioning is **white-label / technical** — grades and specs without naming a supplier brand, driving consultation rather than catalog SKUs.

---

### 4.6 General Sourcing — `/sourcing`

**Purpose:** B2B sourcing from audited Asia manufacturing partners for enterprise / luxury accounts.

**Page:** `src/pages/GeneralSourcingPage.tsx`

- Categories: heavy equipment & machinery, building & construction materials, custom acrylic & TCG enclosures, luxury brand packaging
- Structural gate: **FCL Minimums — Dynamic MOQ for Specialized Lines** (FCL-scale for standard industrial lines; project-based dynamic MOQ for specialized/custom fabrication)
- Featured deep-link card into Acrylic (`/acrylic`)
- Five-stage partner production pipeline including CIF/DDP shipping
- Operational-scope disclaimer (`scopeDisclaimer`)
- Contact: mailto `pelle@pellexa.com` with copy-to-clipboard fallback
- Theme: parent (Sky Blue + Bronze)

---

### 4.7 Acrylic — `/acrylic`

**Purpose:** Acrylic sourcing vertical — partner fabrication and third-party QC, not an in-house plant.

**Page:** `src/pages/AcrylicSourcingPage.tsx`

Capability surfaces (quoted against partner capability, not a fixed catalog):
- Custom acrylic boxes (incl. TCG / ETB specialization)
- Protective display architecture
- Luxury retail enclosures
- Large-format / industrial components

Specs are framed as **partner-capability baselines** confirmed at consultation. Dual-MOQ badge matches `/sourcing`. Contact: mailto `pelle@pellexa.com` with copy-to-clipboard fallback. Theme: parent.

---

## 5. Brand & design system

Defined in `src/index.css` and dispatched by `src/theme/ThemeProvider.tsx` + `src/theme/brandRegistry.ts`.

### Three-tier tokens

| Tier | Tokens | Behavior |
|---|---|---|
| **1 — Locked** | `--canvas-*`, `--silver-*` | Same on every page. Obsidian canvas + industrial silver structure. |
| **2 — Semantic** | `--ink-*` | Body / muted / dim text that works on dark canvas. |
| **3 — Dynamic** | `--brand-*`, `--brand-secondary-*` | Swapped per route theme class. |

### Branch themes

| Class | Routes | Primary accent | Secondary |
|---|---|---|---|
| `.theme-parent` | `/`, `/sourcing`, `/acrylic` | Sky Blue `#00A3FF` | Bronze (eyebrows / chrome) |
| `.theme-led` | `/led/*` and `led.pellexa.com` | Electric Cyan `#00F2FE` | (secondary inert) |
| `.theme-agri` | `/food/*` | Vibrant Matcha / green runway | Cocoa Brown `#8B5A2B` |

### Typography

- Body: **Inter**
- Display / headlines: **Space Grotesk**
- Loaded from Google Fonts in `index.html`

### Motion

Framer Motion powers entrance animations, scroll reveals (`useInView`), and section transitions. CSS keyframes (`grid-pulse`, `glow-drift`, `ken-burns`, `matcha-breathe`, etc.) add atmospheric motion without changing layout.

### Brand assets

- `public/brand/pellexa-icon.png` — favicon / app icon
- `public/brand/pellexa-logo-full.png` — logo lockup
- Source PNGs processed by `npm run brand:extract` (`scripts/extract-brand.mjs` using Sharp)

---

## 6. Routing reference

From `src/App.tsx`:

### On apex domain (`pellexa.com`)

| Path | Page |
|---|---|
| `/` | Parent hub |
| `/led` | LED (default market) |
| `/led/:market` | LED regional (`global` \| `ph` \| `il`) |
| `/food` | Agri-Food hub |
| `/food/matcha` | Matcha product line |
| `/food/cacao` | Cacao portfolio |
| `/sourcing` | General sourcing |
| `/acrylic` | Acrylic supply |

### On LED subdomain (`led.pellexa.com`)

| Path | Page |
|---|---|
| `/` | LED (default market) |
| `/:market` | LED regional |

`vercel.json` rewrites all non-API paths to `index.html` so client routing works on refresh.

---

## 7. Content & localization model

### LED markets (`MarketConfig`)

Each market file exports a full `MarketConfig` including:
- Meta / SEO strings
- Nav, hero, why, advantage, solutions, showcase, process, FAQ, contact, footer
- `lang`, `dir`, `timezone`, `locale` (used for form timestamps and document direction)

Types: `src/markets/types.ts`  
Registry: `src/markets/index.ts`

### Parent / agri hub (`ParentContent`)

- `parent-en.ts` / `parent-he.ts`
- Includes cacao portfolio registry (`cocoa`) used by `/food` and `/food/cacao`

### Contact form depth (LED)

The LED contact form is a multi-section intake (install type, primary use, viewing distance, size, shape, mounting, maintenance access, features, content type, location/date, contact details). Copy for every label lives inside `market.contact`. Submission can go through the API (Resend) and/or generate a mailto / clipboard preview depending on UI flow in `Contact.tsx`.

---

## 8. Backend / API

### Production — `api/contact.ts`

- Vercel Node serverless handler
- Accepts `POST` JSON: `name`, `email`, optional `company`, `location`, `projectType`, `screenSize`, `details`, `market`, `timezone`, `locale`
- Validates name + email
- Sends HTML email via Resend
- From: `Pellexa Website <noreply@pellexa.com>`
- To: `led.sales@pellexa.com`
- Reply-To: submitter email

### Local development — Vite plugin in `vite.config.ts`

Same endpoint `/api/contact` is emulated in the Vite middleware so `npm run dev` can send real emails when `RESEND_API_KEY` is present in `.env`.

### Env vars

| Variable | Required for | Purpose |
|---|---|---|
| `RESEND_API_KEY` | Contact form email | Resend API authentication |

Other verticals currently lean on **mailto** (`pelle@pellexa.com` from parent contact content; `/sourcing` and `/acrylic` use the same address).

---

## 9. Folder structure

```
pellexa-landing-master/
├── api/
│   └── contact.ts              # Vercel serverless contact endpoint
├── docs/
│   └── cocoa_knowlage.md       # Cacao portfolio source copy
├── public/
│   └── brand/                  # Logos & icons
├── scripts/
│   └── extract-brand.mjs       # Brand PNG processing (Sharp)
├── src/
│   ├── App.tsx                 # Router + providers
│   ├── main.tsx                # React entry
│   ├── index.css               # Design tokens + themes
│   ├── assets/images/          # Hero / showcase / solution imagery
│   ├── components/             # LED + shared sections
│   │   ├── food/               # Agri contact
│   │   └── parent/             # Hub / cocoa / parent chrome
│   ├── context/
│   │   ├── MarketContext.tsx   # LED market + cookie
│   │   └── LangContext.tsx     # Parent EN/HE
│   ├── hooks/
│   │   └── useMarket.ts
│   ├── lib/
│   │   └── site.ts             # Subdomain helpers
│   ├── markets/                # All localized content registries
│   ├── pages/                  # Route-level page compositions
│   └── theme/
│       ├── brandRegistry.ts    # Path → brand key map
│       └── ThemeProvider.tsx   # Applies theme class on <html>
├── index.html                  # SEO meta + OG + JSON-LD
├── package.json
├── vite.config.ts
├── vercel.json
└── PROJECT_EXPLANATION.md      # This file
```

---

## 10. Key components (by role)

### Shared / LED section stack

| Component | Role |
|---|---|
| `Navbar` | LED nav + CTA |
| `Hero` | Market hero + CTAs + stats |
| `WhyPellexa` | Value stats |
| `Advantage` | Feature pillars |
| `Solutions` | Solution cards (optional image / link) |
| `Showcase` | Project gallery (when enabled) |
| `Process` | Step timeline |
| `FAQ` | Accordion |
| `Contact` | LED lead form |
| `Footer` | LED footer |
| `MarketSelector` / `MarketBanner` | Regional switcher |
| `ScrollProgress` | Top scroll indicator |
| `PellexaLogo` | Brand mark |

### Parent / agri

| Component | Role |
|---|---|
| `ParentNavbar` / `ParentHero` / `SolutionsGrid` / `ParentAbout` / `ParentContact` / `ParentFooter` | Corporate hub |
| `CocoaPortfolio` | Full cacao marketing body |
| `FoodContact` | Agri-Food enterprise procurement CTA |

---

## 11. SEO & social

`index.html` sets baseline:
- Title / description for Pellexa
- Open Graph + Twitter cards
- Canonical `https://pellexa.com`
- Organization JSON-LD (`schema.org`)

Individual pages override `document.title` and meta tags in `useEffect` (LED markets, Matcha, Cocoa, Sourcing, Acrylic, Food hub).

---

## 12. How to run locally

```bash
# Install
npm install

# Dev server (http://localhost:5173 by default)
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Regenerate transparent brand assets from source PNGs
npm run brand:extract
```

Optional `.env` for local contact emails:

```env
RESEND_API_KEY=re_xxxxxxxx
```

---

## 13. Deployment notes

1. Deploy to **Vercel** (or any host that supports Vite static output + `/api` Node functions).
2. Set `RESEND_API_KEY` in the host environment.
3. Ensure domain DNS:
   - Apex → main app
   - Optional `led` subdomain → same deployment (subdomain detection is hostname-based in the browser)
4. SPA fallback is already configured in `vercel.json`.

---

## 14. Business narrative (how the site sells)

1. **Hub first:** Visitor lands on Pellexa corporate identity and picks a vertical.
2. **Vertical depth:** Each line has its own story, visuals, and conversion path — not a generic “services” list.
3. **Trust via specificity:** LED uses project specs and process; cacao uses analytical parameters, certifications, and logistics language; acrylic / sourcing use MOQ and capability baselines.
4. **Conversion is consultation-led:** Forms and CTAs push toward quoting / technical consultation rather than e-commerce checkout.
5. **Market-aware LED:** Same product story, localized language and RTL where needed (Israel).

---

## 15. Mental model for developers

When you change something, ask which layer it belongs to:

| Change | Where to edit |
|---|---|
| LED Israel / PH / Global wording | `src/markets/il.ts`, `ph.ts`, `global.ts` |
| Matcha wording | `src/markets/matcha.ts` |
| Parent hub EN/HE | `src/markets/parent-en.ts`, `parent-he.ts` |
| Cacao portfolio facts / copy | Prefer update `docs/cocoa_knowlage.md` then sync parent market cocoa objects |
| Accent color for a branch | `src/index.css` theme scopes + keep `brandRegistry` routes in sync |
| New route / vertical | `App.tsx` + new page + optionally new theme entry |
| LED lead email behavior | `api/contact.ts` + Vite plugin in `vite.config.ts` |
| Layout / animation of a section | Corresponding file under `src/components/` |

**Do not** hard-code branch colors inside components. Use token utilities (`bg-brand-500`, `border-silver-anchor`, `text-ink-muted`) so themes stay consistent.

---

## 16. Summary

**Pellexa Landing** is a multi-brand, multi-market marketing site for a strategic sourcing company. The React + Vite app serves:

- a bilingual corporate hub,
- a multi-region LED sales funnel with serverless lead email,
- agri-food product lines (matcha + cacao),
- and industrial sourcing verticals (general Asia hub + acrylic).

Shared UI, locked corporate canvas/silver chrome, and route-based brand themes keep the family of pages cohesive while each vertical stays visually and commercially distinct.
