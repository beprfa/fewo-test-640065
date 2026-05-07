# SPECS — Sonnenhof Alpenblick

Updated: 2026-05-04

## What the site does

Marketing and booking-inquiry website for **Sonnenhof Alpenblick**, a vacation rental property in Aschau im Chiemgau, Bavaria. The site presents two holiday apartments ("Alpenpanorama" and "Bergwiese") to prospective guests and lets them send a booking request. Templates here are cloned by the back-end (`WebsitePublishService`) and `%%%MARKER%%%` placeholders are replaced with per-tenant data before deploying to Cloudflare Pages.

### Pages

| Route | Purpose |
|---|---|
| `/` | German landing page — hero, apartment cards, estate info, directions, FAQ, CTA |
| `/en` | English landing page (same structure, translated) |
| `/contact` | Preisübersicht (per-apartment) + Buchungsanfrage form (DE) |
| `/en/contact` | Price overview + booking request form (EN) |
| `/privacy`, `/en/privacy` | Privacy policy |
| `/terms`, `/en/terms` | Legal notice / imprint |
| `/agb`, `/en/agb` | AGB / Terms and Conditions (only deployed for hosts who set `BookingConditions.eigeneAgb`) |

### Key features

- **Bilingual (DE / EN)** — separate page trees under `/` and `/en`, with dedicated navigation and layout per language.
- **Navigation** (BFW-494) — main nav: Startseite / Ferienwohnungen / Landhaus / Anreise / **Preise**, plus secondary "Buchungsanfrage" CTA. EN: Home / Apartments / The Estate / Getting Here / **Prices**, plus "Booking Request" CTA. The "Preise" / "Prices" nav entry targets `/contact` (the same page as Buchungsanfrage).
- **Apartment listings** — each apartment card shows an image carousel, amenity icons, the "Ab X €/Nacht" line, and a read-only availability calendar.
- **Apartment-card date-picker** (BFW-448 + BFW-495) — backend-injected date pickers + "Buchungsanfrage" button below the calendar. Min-stay 1 night enforced inline ("Mindestens 1 Übernachtung" / "Minimum 1 night"). Button is disabled until both dates are valid; on click it writes `{ apartmentSlug, checkIn, checkOut }` to `sessionStorage['mfws_booking_draft']` and navigates to `/contact`. No live price calc on the card; the price is shown only on `/contact`.
- **Image carousel** — client-side vanilla JS with prev/next buttons, touch-swipe support, lazy preloading of adjacent images.
- **Availability calendar** — month-view grid rendered client-side; marks days as available (green), reserved (yellow), booked (red), or past (dimmed). Fetches bookings from `/api/public/tenants/{slug}/bookings`. Supports Astro View Transitions re-init.
- **Per-apartment Preisübersicht** (BFW-491, Variant B) — `/contact` shows one card per apartment with base price, optional surcharge, and every additional service with its calculation type (einmalig / pro Nacht / pro Person/Nacht) and (Pflicht|optional) flag. Notes (BFW-487) appear inline. Replaces the old summary table; service-derived items no longer live in the global Konditionen card grid.
- **Booking request form** (BFW-492) — order: Wohnung → Anzahl Gäste → (per-apartment Zusatzleistungen) → Anreise + Abreise → Live-Preis → Name + E-Mail → Telefon → Nachricht → Datenschutz → AGB (gated) → Submit. Live price line calls `/api/public/tenants/{slug}/apartments/{slug}/price-calculation`. Submit button is disabled until privacy + (AGB if rendered) + valid dates. Min-stay 1 night enforced. Form prefills from `sessionStorage['mfws_booking_draft']` (set by apartment-card CTA) or from `?apartment=&checkIn=&checkOut=` URL params (URL wins).
- **AGB checkbox** (BFW-492) — appears below the Datenschutz checkbox only for hosts whose `BookingConditions.eigeneAgb=true` and `agbText` is non-blank. Backend collapses the `%%%AGB_CHECKBOX_<lang>_START/END%%%` block when the host has no AGB. The link inside the label points to `/agb` (DE) / `/en/agb` (EN).
- **Directions section** — embedded OpenStreetMap iframe, Google Maps "plan route" link, and transport options (car, train, airport).
- **FAQ** — accordion-style frequently asked questions; entries about Haustiere / Babybett / Kurtaxe are conditionally rendered by the backend based on the host's apartment services.
- **Dark mode** — follows system preference; Tailwind `dark:` variants throughout.
- **SEO** — Open Graph tags, sitemap generation, configurable robots meta.
- **Static output** — the entire site is pre-rendered at build time (no SSR).

### Content model

All page content is inline in `.astro` files (no CMS). Backend `%%%MARKER%%%` placeholders inject per-tenant content at publish time; see `docs/specs/SPEC-PAngV-PRICING.md` and `docs/specs/SPECS-back-end.md` in the monorepo for the marker contract. The blog subsystem inherited from AstroWind is present but disabled (`isEnabled: false`).

### Navigation

Defined in `src/navigation.ts`. Each language has its own `headerData` / `footerData` export with links pointing to anchor sections on the landing page or to subpages. The footer AGB link is wrapped in `%%%FOOTER_AGB_LINK_<lang>_START/END%%%` markers — backend collapses the line when the host has no AGB.

### Markers consumed by this template

The fewo-demo-6 templates carry block markers that the back-end fills at publish time:

| Marker | File | Replaced by |
|---|---|---|
| `%%%PRICE_OVERVIEW_DE_START/END%%%`, `_EN` | `src/pages/contact.astro`, `en/contact.astro` | per-apartment price cards (BFW-491) |
| `%%%BOOKING_CONDITIONS_DE_START/END%%%`, `_EN` | `src/pages/contact.astro`, `en/contact.astro` | tenant-wide `terms` array (Anzahlung, Stornierung, Check-in/-out, Schlüsselübergabe, Parken) |
| `%%%ADDITIONAL_SERVICES_DE_START/END%%%`, `_EN` | `src/pages/contact.astro`, `en/contact.astro` | concatenated per-apartment service-checkbox blocks (BFW-467) |
| `%%%AGB_CHECKBOX_DE_START/END%%%`, `_EN` | `src/pages/contact.astro`, `en/contact.astro` | AGB checkbox HTML (collapsed when host has no AGB, BFW-492) |
| `%%%FOOTER_AGB_LINK_DE_START/END%%%`, `_EN` | `src/navigation.ts` | footer AGB link (collapsed when host has no AGB) |
| `%%%APARTMENT_OPTIONS_DE_START/END%%%`, `_EN` | `src/pages/contact.astro`, `en/contact.astro` | apartment `<option>` list |
| `%%%APARTMENT_CARDS_DE_START/END%%%`, `_EN` | `src/pages/index.astro`, `en/index.astro` | apartment cards including date-picker widget |

Plus simple markers (`640065`, `http://localhost:9080`, `Musterhaus Sonnenschein`, `nicole.neckermann@icloud.com`, etc.) used by the AvailabilityCalendar and various inline texts.
