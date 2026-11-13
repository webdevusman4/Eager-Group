# Eager Group — Project Details

A full extraction of what this repository contains, how it is built, what each page says, and what is still unfinished.

---

## 1. Overview

| Item | Value |
|---|---|
| Package name | `eager-sales-masterclass` (v1.0.0, private) |
| Purpose | Marketing / landing site for **Iftikhar Ahmed** and **Eager Consulting & Training** (part of Eager Group), Karachi, Pakistan |
| Primary product | **8-Hour Executive Sales Masterclass**, PKR 30,000 per seat, capped at 8 seats |
| Production domain (metadata) | `https://eagertrainings.com` |
| Conversion channel | WhatsApp click-to-chat (`wa.me/923212123037`) plus `mailto:` links. There is no form, backend, database, or payment integration. |
| Pages | `/` (original masterclass landing page) and `/v2` (redesigned executive profile + courses hub) |
| Rendering | Both routes are fully static (prerendered) |

### Git history

| Commit | Author | Date | Message |
|---|---|---|---|
| `65fb786` | Usman | 2026-11-09 | feat: complete executive sales masterclass landing page |
| `9dc5816` | webdevusman4 | 2026-11-13 | feat(v2): add redesigned Eager Group executive profile and courses landing page |
| `d13768e` | Usman | 2026-11-13 | Merge pull request #1 (`arena/6864e1cf-eager-group`) |

Branches: `main`, `claude/focused-edison-fd370z`.

---

## 2. Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router), resolved to 15.5.x |
| UI | React 19, TypeScript 5.7 (strict) |
| Styling | Tailwind CSS 3.4 + PostCSS + Autoprefixer, plus hand-written CSS component classes |
| Icons | `lucide-react` |
| Fonts | `/`: Inter + JetBrains Mono via `next/font/google`. `/v2`: Plus Jakarta Sans, Inter, JetBrains Mono via `@fontsource/*` (self-hosted) |
| Images | Static `.webp` files in `public/images`; Next image formats set to AVIF/WebP |
| Path alias | `@/*` maps to the repo root |

### NPM scripts

| Script | Command |
|---|---|
| `dev` | `next dev` |
| `build` | `next build` |
| `start` | `next start` |
| `lint` | `next lint` (no ESLint config is committed) |

### Config notes

- `next.config.mjs`: `reactStrictMode: true`, `allowedDevOrigins: ['*.e2b.app', 'e2b.app']` (the site was developed inside an E2B sandbox), image formats AVIF/WebP.
- `.gitignore`: standard Next.js ignores, including `.env`, `.env*.local`, `.vercel`, `next-env.d.ts`.
- Environment variable: `NEXT_PUBLIC_CONTACT_EMAIL` (optional). Falls back to `info@eagertrainings.com`.

---

## 3. Directory structure

```
app/
  layout.tsx          Root layout: fonts, SEO/OpenGraph metadata, PlaceholderScanner, DevRouteSwitcher
  page.tsx            "/" — original masterclass landing page
  globals.css         Tailwind layers + v1 design tokens and glass/surface classes + animations
  v2/
    layout.tsx        /v2 layout: own metadata, .v2-root wrapper, v2 PlaceholderScanner
    page.tsx          "/v2" — redesigned profile + courses page
    v2.css            v2 design tokens (logo-sampled), buttons, cards, grids, fontsource imports
components/
  DevRouteSwitcher.tsx   Dev-only floating toggle between "/" and "/v2"
  PlaceholderScanner.tsx Dev-only console warning for "[PLACEHOLDER]" strings (v1 content)
  sections/              12 v1 page sections
  ui/                    v1 primitives: PrimaryButton, SecondaryButton, SectionPill, StickyMobileCta, WhatsAppFab
  v2/
    PlaceholderScanner.tsx
    sections/            10 v2 page sections
    ui/                  v2 primitives (same five components, v2 styling)
lib/
  content.ts          Typed single source of truth for "/" copy, pricing, schedule, contact
  content-v2.ts       Typed single source of truth for "/v2"
public/
  logo.png
  images/             8 v1 images (hero, trainer, 4 curriculum, OG image)
  images/v2/          6 photos of Iftikhar Ahmed (hero cut-out, desk, roundtable, seminar, keynote, podcast)
scripts/
  verify_content.py   Converts straight apostrophes to typographic ones inside lib/content.ts
```

Source size: about 5,500 lines across 50 text files.

---

## 4. Architecture

- **Content-driven.** Nearly all copy, prices, seat counts, contact details and FAQ text live in `lib/content.ts` (for `/`) and `lib/content-v2.ts` (for `/v2`). Components import `content` and render it.
- **Helper functions** (in both content files):
  - `getSeatsLeft()` returns `seats_total - seats_taken`, or `null` to hide scarcity text.
  - `isSoldOut()` is true when seats left is 0. Sold-out state switches CTAs to "Join the waitlist" and uses the waitlist WhatsApp message.
  - `getDateDisplay()`, `getTimeDisplay()`, `getVenueDisplay()` render "To be announced" (v1) or "Next Cohort Date Announced Upon Registration" / "5-Star Executive Venue, Karachi" (v2) when fields are `null`.
  - `getWhatsAppUrl(message?)` builds a `wa.me` link with a pre-filled, URL-encoded message.
  - `scanForPlaceholders()` walks the content object and lists unreplaced placeholder strings.
- **Two parallel component trees.** v1 and v2 each have their own sections and UI primitives; nothing is shared between them except the root layout.
- **Client components** are used where state or browser APIs are needed: scroll-aware navs, mobile menus, FAQ accordions, the v2 module tabs, the v2 topic filter, and the sticky mobile CTA (appears after 450px of scroll).
- **Dev-only tooling.** `DevRouteSwitcher` and both `PlaceholderScanner`s return `null` in production.

---

## 5. Design systems

### v1 ("/") — navy, ice and gold

| Token | Hex |
|---|---|
| `brand` | `#0048A8` |
| `brand-deep` | `#071F44` |
| `brand-footer` | `#04122B` |
| `brand-bright` | `#2F6FDE` |
| `tint` | `#EEF3FB` |
| `line` | `#D8E2F2` |
| `bodytext` | `#14243D` |
| `muted` | `#5B6B82` |
| `cta` (gold) | `#C9A24B`, hover `#E6CD85` |

CSS classes: `.glass-arctic`, `.glass-arctic-scrolled`, `.surface-elevated`, `.glass-smoked`, `.navy-glass-pill`, `.navy-glass-card`. Animations: `urgency-pulse` dot, staggered `hero-fade-in`. A `prefers-reduced-motion` rule disables animation.

### v2 ("/v2") — colours sampled from the logo

| Token | Hex |
|---|---|
| `--eager-royal` (wordmark blue) | `#004CA8` |
| `--eager-royal-dark` | `#003A82` |
| `--eager-azure` | `#0B7EE8` |
| `--eager-sky` (swoosh cyan) | `#10ACFC` |
| `--eager-navy` | `#041A3B` |
| `--eager-navy-mid` | `#072757` |
| `--eager-ice` | `#F4F8FE` |
| `--eager-tint` | `#E7F1FD` |
| `--eager-border` | `#D4E4F7` |
| `--eager-ink` | `#0B1F3F` |
| `--eager-muted` | `#516684` |

Headings use Plus Jakarta Sans. CSS classes: `.v2-text-gradient`, `.v2-text-gradient-light`, `.v2-btn-royal`, `.v2-btn-sky`, `.v2-nav-glass(-scrolled)`, `.v2-card`, `.v2-dark-section`, `.v2-dark-card`, `.v2-grid-bg(-light)`.

---

## 6. Page "/" — Executive Sales Masterclass landing page

**SEO title:** "8-Hour Executive Sales Masterclass | Iftikhar Ahmed | Eager Consulting & Training". OpenGraph and Twitter cards use `/images/og-image.webp` (1200×630).

| # | Section | Anchor | What it shows |
|---|---|---|---|
| 1 | Nav | — | Floating glass bar. Links: Reserve, Curriculum, Trainer, Testimonials, main site. WhatsApp CTA. Mobile menu. |
| 2 | Hero | — | Pill "Executive Sales Masterclass • 8 hours • Limited seats". H1 "Stop Chasing Deals. **Start Closing** Them." CTAs "Reserve my seat, PKR 30,000" and "See the curriculum". Portrait image. |
| 3 | StatsBanner | — | 15+ years · 3 companies founded · 6 stages of the sale |
| 4 | TrustWall | — | "Industries we serve" chips: Manufacturing, Packaging & FMCG, Banking, Pharma, Retail, Education, IT, Startups & SMEs, Real Estate, Professional Services |
| 5 | ConversionCard | `#reserve` | "One day. Eight hours. Your next level." Three outcomes, date/time/venue (all TBA), price, seats left, inclusions, WhatsApp + email CTAs |
| 6 | QualifierGrid | — | "Is This Masterclass Built For You?" 4 "for" profiles (C-level, VPs/Heads of Sales, founders, commercial directors) and 3 "not for" (beginners, retail counter staff, theory seekers) |
| 7 | Curriculum | `#curriculum` | 4 modules with images, see below. Summary "6 stages of the sale. 4 modules. 1 day." |
| 8 | TrainerTeaser | `#trainer` | Iftikhar Ahmed bio, pull quote, 3 principles, 5 expertise chips, CTA |
| 9 | ExecutiveFaq | `#faq` | 5-question accordion (hardcoded in the component) |
| 10 | Testimonials | `#testimonials` | 3 placeholder testimonials (filtered by `is_approved`) with a visible placeholder notice |
| 11 | FinalCta | — | "The room holds 8. Make sure one of them is yours." Reserve and "Message us on WhatsApp" |
| 12 | Footer | — | Logo, blurb, quick links to eagertrainings.com pages, email, phone, LinkedIn |
| + | WhatsAppFab, StickyMobileCta | — | Floating WhatsApp button; mobile bottom bar with price, seats left, Reserve |

### Masterclass curriculum (v1 wording)

| Module | Title | Outcome | Stages |
|---|---|---|---|
| 01 | Prospecting and Lead Qualification | Fill your pipeline with buyers, not browsers. | 1 of 6 |
| 02 | Neuro-Selling: Rapport, Trust and the Pitch | Understand how buyers decide, then speak to it. | 2–3 of 6 |
| 03 | Objections and Negotiation | Turn "too expensive" into a conversation about value. | 4 of 6 |
| 04 | Closing, Collections and Follow-up | Close the deal. Collect the payment. Keep the client. | 5–6 of 6 |

### Seat inclusions

- Physical executive sales workbook and deal architecture templates
- Curated 5-star executive networking lunch and refreshments
- Certificate of participation signed by Iftikhar Ahmed

---

## 7. Page "/v2" — Eager Group executive profile and courses hub

**SEO title:** "Iftikhar Ahmed | Eager Group — Corporate Training, Business Consultancy & Executive Courses". No OpenGraph override, so it inherits the root OG image.

| # | Section | Anchor | What it shows |
|---|---|---|---|
| 1 | Nav | — | Links: Profile, Eager Group, Services, Courses ("Enroll" badge), Live Impact, FAQ. WhatsApp CTA. |
| 2 | Hero | `#top` | H1 "Empowering People. **Transforming Businesses.** Driving Real-World Growth." Roles list, mission, CTAs to courses and a consultation. Proof strip. Cut-out portrait with a live masterclass pill showing seats and price. 4-metric bar. |
| 3 | ExecutiveProfile | `#profile` | Desk photo, 3-paragraph bio, 3 principles, interactive filter of 14 training topics (All / Sales / Leadership / Wealth) |
| 4 | EagerVentures | `#ventures` | The 3 Eager Group companies and 10 industries |
| 5 | CoreServices | `#services` | 4 practice pillars, each with its own pre-filled WhatsApp inquiry |
| 6 | CoursesShowcase | `#courses` (contains `#reserve`) | Flagship masterclass with tabbed modules and an enrolment card, plus 3 signature courses |
| 7 | ImpactGallery | `#impact` | 4 event photos and 4 audience pathways |
| 8 | ExecutiveFaq | `#faq` | 5 FAQs tagged "Courses" or "Corporate & Advisory" |
| 9 | FinalCta | — | Dual path: reserve a seat or book a consultation. Phone and email links. |
| 10 | Footer | — | Group label, links, phone, corporate email, direct email, LinkedIn |
| + | WhatsAppFab, StickyMobileCta | — | FAB uses the consultation message; sticky bar for enrolment |

### Headline metrics

| Value | Label |
|---|---|
| 15+ Years | Driving business growth, sales performance and team development |
| 03 Companies | Packaging, real estate, corporate training |
| 04 Practice Pillars | Training, consultancy, stock market advisory, coaching |
| 14+ Core Programs | B2B closing, collections, CRM, equity markets |

### Eager Group ventures

| Code | Company | Sector |
|---|---|---|
| Venture 01 | Eager Packaging Private Limited | Industrial and commercial packaging |
| Venture 02 | Eager Properties Private Limited | Real estate investment and development |
| Venture 03 | Eager Teaching & Trainings Private Limited | Corporate training and executive education |

### Practice pillars

| Pillar | Title | CTA |
|---|---|---|
| 01 | Corporate & Sales Training Programs | Request Corporate Training |
| 02 | Business Consultancy & Revenue Systems | Book Growth Consultation |
| 03 | Stock Market & Wealth Growth Strategy (PSX & equities) | Explore Market Advisory |
| 04 | Keynote Speaking & 1-on-1 Coaching | Book Speaking / Coaching |

### Training topics (14)

- **Sales (7):** Corporate Sales & Marketing; Advanced Sales Strategies & Closing; Negotiation & Business Dealing; Payment Recovery & Collections; CRM; Packaging, Branding & Product Positioning; Business Growth & Expansion.
- **Leadership (6):** Leadership & Team Management; Communication & Persuasion; Problem Solving & Decision Making; Entrepreneurship & Business Mindset; Career Counseling & Student Guidance; Teacher Training.
- **Wealth (1):** Stock Market Trading, Investing & Portfolio Management.

### Courses

| Course | Level / format | Price shown |
|---|---|---|
| 8-Hour Executive Sales Masterclass (flagship) | In-person executive intensive, Karachi, 8 seats | PKR 30,000 per executive seat |
| Stock Market Trading, Investing & Portfolio Mastery | Beginner to advanced; cohort and 1-on-1 | Cohort & Custom Enrollment |
| Negotiation, Payment Recovery & CRM Discipline | Commercial & SME teams; in-house or open | Corporate Team Booking |
| 1-on-1 Executive, Business & Career Growth Coaching | Founders & professionals; tailored | Private Application |

v2 masterclass modules add a named deliverable per module: Pipeline Qualification Scorecard, Executive Pitch Architecture Blueprint, Objection & Concession Matrix, Closing & Receivables Execution Playbook.

### Audience pathways

1. C-level executives, founders and business owners
2. VPs, heads of sales and commercial teams
3. Individual investors and professionals
4. Universities, faculty and emerging talent

---

## 8. Business and contact details (from content files)

| Field | Value |
|---|---|
| Trainer | Iftikhar Ahmed — Certified Corporate Trainer, Sales & Marketing Expert, Business Consultant, Keynote Speaker, Stock Market Strategist |
| Signature quote | "I don't just train businesses. I build and grow them." |
| WhatsApp / phone | +92 321 212 3037 |
| Corporate email | info@eagertrainings.com (overridable by `NEXT_PUBLIC_CONTACT_EMAIL`) |
| Direct email (v2 only) | iftikhar.mkt@gmail.com |
| LinkedIn | https://www.linkedin.com/in/iftikhar-ahmed |
| Facebook / YouTube | Empty, so the icons are hidden |
| Location | Karachi, Pakistan |
| Main site | https://eagertrainings.com (/about, /services, /trainings, /contact) |
| Event date, time, venue | All `null` (shown as TBA) |
| Seats | 8 total, 0 taken |
| Policies (FAQ) | Group terms for 3+ executives; non-refundable; transferable to a colleague up to 48 hours before the session |

---

## 9. Build and verification status

Checked on 2026-11-13 with a clean `npm ci`.

| Check | Result |
|---|---|
| `npm ci` | Passed |
| `tsc --noEmit` | Passed, no type errors |
| `next build` | Passed. The first attempt failed inside `next/font` while fetching Google Fonts; a retry succeeded, so it was a transient network fetch. |

| Route | Size | First load JS |
|---|---|---|
| `/` | 15 kB | 126 kB |
| `/v2` | 6.42 kB | 125 kB |

---

## 10. Issues found while reading the code

1. **Broken WhatsApp messages on "/".** The v1 `getWhatsAppUrl()` treats its argument as the literal message. `FinalCta` passes `'waitlist'`, `'default'` and `'question'`, and `StickyMobileCta` passes `'waitlist'` or `'default'`. Visitors get a WhatsApp chat pre-filled with the word "default", "waitlist" or "question" instead of the real message.
2. **Placeholders visible to the public on "/".** The testimonials section shows "[PLACEHOLDER] Replace with real approved testimonials" as a notice and inside all three quotes, and all three are marked `is_approved: true`. The FAQ certificate answer starts with "[PLACEHOLDER: confirm certificate details]".
3. **v1 FAQ is duplicated.** `components/sections/ExecutiveFaq.tsx` hardcodes its own FAQ list and ignores `content.faq`. The two lists already differ: the component asks "Is the certification globally recognized?" while the content file asks "Will I receive a certificate?".
4. **v1 placeholder scanner misses cases.** Its regex only matches upper-case bracket text, so "[PLACEHOLDER: confirm certificate details]" is not reported. The v2 scanner uses a better pattern.
5. **Undefined Tailwind classes in the root layout.** `bg-ice-50`, `text-navy-ink`, `selection:bg-sand-300` and `selection:text-navy` are not defined in `tailwind.config.js`, so they do nothing. `globals.css` sets the body colours instead. The `themeColor` is `#000080`, which does not match either brand palette.
6. **Fonts load twice on "/v2".** The root layout loads Inter and JetBrains Mono through `next/font`, and `v2.css` loads them again through `@fontsource`.
7. **No lint config.** `npm run lint` will prompt to set up ESLint.
8. **`scripts/verify_content.py` rewrites files.** Despite its name it edits `lib/content.ts` in place and only covers the v1 file.

## 11. Content still to supply

- Masterclass date, start and end time, and venue.
- Real, approved testimonials for "/".
- Confirmed certificate wording.
- Facebook and YouTube URLs, if wanted.
- A decision on which page becomes the live homepage, since "/" and "/v2" currently coexist.
