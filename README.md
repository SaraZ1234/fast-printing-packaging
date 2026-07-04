# Fast Printing & Packaging — Website

A full company website built with **Next.js 14 (App Router) + React + TypeScript + Tailwind CSS**.

## Design concept
The visual identity is built entirely from the subject: registration marks,
CMYK control bars, crop marks, and job-ticket typography — the actual marks
found on a real press sheet — rather than generic stock-photo hero sections.

- **Colors**: uncoated paper stock (`#EFEAE0`), press black (`#1A1A18`), and the
  four process-printing inks — cyan, magenta, yellow — plus a kraft/corrugate
  brown for the packaging sections.
- **Type**: Space Grotesk (display), Inter (body), IBM Plex Mono (labels/specs —
  evokes a job ticket or spec sheet).
- **Signature element**: the registration-mark crosshair and CMYK color bar,
  reused throughout as navigation flourishes, section dividers, and the footer.

## Pages
- `/` — Home: hero, spec strip, services grid, process, packaging feature, CTA
- `/services` — Full service catalog (Print / Packaging / Finishing)
- `/portfolio` — Sample job log
- `/about` — Company story, timeline, stats
- `/contact` — Quote request form (job-ticket styled) + direct contact info

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm run start
```

## Project structure

```
app/
  layout.tsx        Root layout, fonts, metadata
  globals.css        Tailwind + shared "press sheet" utility classes
  page.tsx           Home page
  services/page.tsx
  portfolio/page.tsx
  about/page.tsx
  contact/page.tsx
components/
  Header.tsx
  Footer.tsx
  RegistrationMark.tsx   Signature SVG motif
  CmykBar.tsx            Process-color swatch strip
  ServiceCard.tsx
  StatBlock.tsx
  QuoteForm.tsx          Client-side quote request form
```

## Connecting the quote form to a backend
`components/QuoteForm.tsx` currently just shows a confirmation state on submit.
To make it functional, replace the `handleSubmit` function with a `fetch` call
to your own API route (e.g. `app/api/quote/route.ts`) or a form service like
Formspree / Resend, and forward the field values from the form's `FormData`.

## A plain-HTML preview
If you just want to see the look of the homepage without running Node, open
`preview.html` in this folder directly in a browser — it's a static,
dependency-free HTML/CSS version of the homepage hero and services section
(Tailwind loaded via CDN). The real site (this Next.js project) is the
source of truth for content and all four pages.
