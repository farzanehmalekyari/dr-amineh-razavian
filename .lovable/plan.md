
# Dr. Zahra Salehi — Bilingual Aesthetic Clinic Website

A mobile-first, SEO-optimized, premium medical-aesthetic site built on the existing TanStack Start stack. Bilingual EN/AR with full RTL support, custom luxury design system, and interactive before/after sweep galleries.

## 1. Design system

Update `src/styles.css` with the brand palette and typography:
- Colors → semantic OKLCH tokens for `--background` (warm ivory #F8F3F0), `--card` (soft cream #FCF9F7), `--muted` (nude beige #EFE4DE), `--primary` (dusty rose #C88B87), `--primary-foreground`, `--accent` (pale blush #D7A29E), `--foreground` (cocoa #4A3733), `--muted-foreground` (warm taupe #6A5751), `--border` (#E7D8D1), `--navy` (#1F2E4C). Plus gradient and elegant shadow tokens.
- Fonts → load Amiri + Mada from Google Fonts in `__root.tsx` head; register `--font-serif: Amiri`, `--font-sans: Mada` in `@theme inline`. Apply Amiri to all h1–h3, Mada to body/UI.
- RTL → enable via `html[dir="rtl"]` selector; use logical CSS properties throughout.

## 2. Bilingual + RTL infrastructure

- `src/i18n/translations.ts` — flat object `{ en: {...}, ar: {...} }` keyed by section (nav, hero, services, faq, etc.). All copy from the brief plus elegant Arabic equivalents.
- `src/i18n/LanguageContext.tsx` — React context + `useT()` hook. Persists choice in `localStorage`, sets `<html lang>` and `dir` via effect. Wrap app in `__root.tsx` RootComponent.
- Desktop: language toggle in navbar (EN | AR). Mobile: toggle inside hamburger sheet and as compact pill in header.

## 3. Routes (TanStack file-based)

Create under `src/routes/`:
- `index.tsx` (Home), `about.tsx`, `services.tsx`, `blog.tsx`, `contact.tsx`, `thank-you.tsx`, `privacy-policy.tsx`, `medical-disclaimer.tsx`
- Each route defines its own `head()` with the SEO title/description from the brief (translated to active language is not feasible in head — keep English meta for crawlers, on-page copy switches).
- `__root.tsx` keeps providers + global `<Header />`, `<Footer />`, `<MobileBottomNav />`, scroll-to-top.

## 4. Shared components (`src/components/`)

- `Header.tsx` — logo mark + nav links + language toggle + Book CTA. Mobile: logo + hamburger opening a solid-background Sheet (shadcn) with nav, language toggle, WhatsApp link.
- `Footer.tsx` — brand blurb, doctor portrait, page links, services links, social icons (Instagram, WhatsApp), contact info, legal links, medical disclaimer paragraph.
- `MobileBottomNav.tsx` — fixed bottom bar appearing after `scrollY > 200`. Items: Home, Services, Blog, Contact, WhatsApp (primary pill).
- `BeforeAfterSlider.tsx` — interactive sweep slider. Uses pointer events (`onPointerDown/Move/Up` + `setPointerCapture`) for unified mouse/touch handling; circular handle with chevron icons; vertical divider; Before/After labels. Wrapper sets `touch-action: none` only on the handle so horizontal carousel scroll still works outside the handle area.
- `SectionHeading.tsx` — eyebrow + serif heading + subheading pattern reused everywhere.
- `ServiceCard.tsx`, `InstaCard.tsx`, `BlogCard.tsx`, `FaqAccordion.tsx` (wraps shadcn Accordion), `TrustStrip.tsx`, `BookingForm.tsx` (Zod + react-hook-form, redirects to `/thank-you`).
- `HorizontalScroller.tsx` — mobile horizontal snap-scroll wrapper with `overflow-x-auto snap-x snap-mandatory`, used for services/results/insta/blog/testimonials on mobile while staying as grid on `md:`.

## 5. Home page sections

Built from brief, in order: Hero (split desktop / stacked mobile with floating credential card and trust bar), Signature Services (3 cards + trust strip), Before/After Gallery (filter tabs + 3 BeforeAfterSlider cards, horizontal scroll on mobile, disclaimer), FAQ accordion (8 items), Instagram preview (3 cards), Booking section (trust points + form).

## 6. Other pages

- **Services** — hero, category nav (anchor links), 3 grouped service sections with detail cards (name / benefit / best for / expected result / CTA), "Not Sure?" block, FAQ, final CTA.
- **Blog** — hero, category pills, grid of 10 article cards (placeholder excerpts + read time), CTA.
- **About** — hero, bio, credentials grid, philosophy block, locations, CTA.
- **Contact** — hero, BookingForm, WhatsApp CTA, contact cards, map placeholder (static image), trust + disclaimer.
- **Thank You** — centered confirmation with WhatsApp + Home buttons.
- **Privacy Policy & Medical Disclaimer** — long-form static copy with the disclaimer text from the brief.

## 7. Images

Generate with `imagegen` (fast tier) into `src/assets/`:
- `doctor-hero.jpg` (warm clinic portrait, navy scrubs, soft window light)
- `doctor-portrait-about.jpg`, `doctor-portrait-footer.jpg`
- Service category images: `face-refinement.jpg`, `skin-rejuvenation.jpg`, `hair-body.jpg`
- Before/After pairs (6 images): lips, botox, chin × before/after each
- Instagram tile images (3), blog cover images (10, varied treatments)
- Clinic interior + consultation imagery for Contact/About

All `<img>` use ES6 imports, descriptive alt text, `loading="lazy"` except above-the-fold hero.

## 8. SEO & accessibility

- Per-route `head()` with title, description, og:title, og:description, og:type, canonical (leaf only). Home gets JSON-LD `MedicalBusiness`/`Physician` schema with name, areaServed Dubai, services list. FAQ page injects `FAQPage` JSON-LD.
- Semantic HTML (`<header>`, `<main>`, `<section>`, `<nav>`, `<article>`, `<footer>`), single H1 per page, descriptive alt text, focus-visible rings using `--ring`, AA contrast verified on rose-on-cream combos.
- Disclaimer text near every Before/After block and in footer.

## 9. Technical notes (advanced section)

- BeforeAfterSlider implementation: position state `0–100`, percentage clip-path on the "after" image overlay (`clip-path: inset(0 0 0 ${pos}%)` flipped for RTL via logical direction), handle uses `setPointerCapture(e.pointerId)` so drag continues past element bounds. Carousel parent uses `overflow-x-auto`; slider stops propagation only on `pointerdown` over the handle hit area.
- Form: react-hook-form + zod schema (already-recommended pattern). On submit, store to localStorage stub (no backend requested) then `navigate({ to: '/thank-you' })`.
- WhatsApp link: `https://wa.me/<placeholder>` constant in `src/lib/contact.ts` — easy to update later.
- No Lovable Cloud needed (no auth/DB/email in scope; form is client-only redirect).
- Sticky mobile bottom nav uses `position: fixed` + `pb-[env(safe-area-inset-bottom)]`; main content gets `pb-20 md:pb-0` to avoid overlap.

## 10. Build order

1. Design tokens + fonts + i18n scaffolding
2. Shared layout: Header, Footer, MobileBottomNav, LanguageProvider
3. BeforeAfterSlider + shared section components
4. Generate hero + key images in parallel
5. Home page (all sections)
6. Services, About, Contact, Blog
7. Thank You, Privacy, Disclaimer
8. SEO metadata pass + JSON-LD
9. Mobile QA pass (hamburger background, bottom nav, horizontal scroll, slider drag)

Total estimated scope: ~30 new files. Ready to build on approval.
