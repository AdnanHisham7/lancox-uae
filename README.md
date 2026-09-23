# LANCOX FZCO — Corporate Website & Technical SEO Platform

> **Bridging the best to the esteemed hands…**  
> Production-ready, static-first corporate website for **LANCOX FZCO**, a licensed industrial trading enterprise based in Jebel Ali Free Zone (JAFZA), Dubai, United Arab Emirates.

---

## 1. Technical Stack & Architecture

- **Static Site Generator**: [Astro 5](https://astro.build/) with TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with a bespoke Light Mode Industrial design system:
  - **Canvas Background**: Architectural Warm Ivory (`#fbfaf7` / `#f5f3ed`)
  - **Typography**: Deep Industrial Graphite (`#12161c`) & Muted Charcoal (`#4b5563`)
  - **Brand Accent**: Refined JAFZA Bronze / Warm Amber Gold (`#b58424` / `#9b6c1a`)
  - **Surfaces & Borders**: Pure White (`#ffffff`) with hairline borders (`#e5e2da`) and soft elevation
- **Typography**: Precision Modern Sans-Serif (`Plus Jakarta Sans` + `Inter` loaded asynchronously)
- **Zero Heavy SPA Dependencies**: 100% static HTML pre-rendering ensuring search engine crawlers (Googlebot, Bingbot, Yandex, etc.) immediately read pure semantic content with zero hydration latency or layout shift (CLS = 0).
- **Interactive Islands**: Vanilla JavaScript micro-scripts for navigation drawers, scroll elevation, provider-agnostic RFQ form submission handling, and CSS infinite marquee animations with reduced-motion fallbacks.

---

## 2. Information Architecture & Route Map

| Route | Canonical Purpose & SEO Focus |
| :--- | :--- |
| [`/`](https://lancoxuae.com/) | **Homepage**: Cinematic hero, verified credibility strip, 5 core capabilities, 6 industries preview, Why LANCOX pillars, continuous marquee, and final RFQ CTA. |
| [`/about/`](https://lancoxuae.com/about/) | **About LANCOX FZCO**: Corporate profile, JAFZA location advantages, vision, mission, and 4 core operational objectives. |
| [`/products/`](https://lancoxuae.com/products/) | **Products Hub**: Unified technical catalog overview covering all 5 core divisions with specification filters. |
| [`/products/electrical/`](https://lancoxuae.com/products/electrical/) | **Electrical Division**: LV/MV/HV cables, conduits, switchgear, RMUs, transformers, explosion-proof fittings, lighting, and cable containment. |
| [`/products/mechanical/`](https://lancoxuae.com/products/mechanical/) | **Mechanical Division**: Seamless/ERW/SAW pipes, industrial valves (gate, globe, ball, check, MOV), pumps, compressors, boilers, and flanges. |
| [`/products/fasteners/`](https://lancoxuae.com/products/fasteners/) | **Fasteners Division**: High-tensile stud bolts (A193 B7/B8M), heavy hex nuts (A194 2H), structural bolts (A325), washers, and custom parts to print. |
| [`/products/instrumentation/`](https://lancoxuae.com/products/instrumentation/) | **Instrumentation Division**: Stainless tubing, compression fittings, flow meters, pressure transmitters, manifolds, RTDs, and fire & gas detectors. |
| [`/products/safety/`](https://lancoxuae.com/products/safety/) | **Safety Division**: Certified PPE, EN ISO safety shoes, FR coveralls (NFPA 2112), helmets, protective eyewear, and firefighting equipment. |
| [`/industries/`](https://lancoxuae.com/industries/) | **Industries Served**: Deep technical breakdown of 6 sectors (Oil & Gas, Petrochemical, Energy, Construction, Processing & Manufacturing, General Industries). |
| [`/trade-network/`](https://lancoxuae.com/trade-network/) | **Trade Network**: Global sourcing corridors, AML (Approved Manufacturer List) compliance, and international engineering standards (API, ASME, ASTM, IEC, DIN). |
| [`/contact/`](https://lancoxuae.com/contact/) | **Contact & RFQ Center**: Verified JAFZA office address, direct telephone/mobile links, WhatsApp desk, and interactive RFQ quotation form. |
| [`/404/`](https://lancoxuae.com/404/) | **404 Not Found**: Helpful error page with search intent recovery and `noindex` directive. |

---

## 3. Central Configuration (`src/config/site.config.ts`)

All business details, official contact numbers, addresses, and third-party verification codes are stored in a single source of truth:

```typescript
// src/config/site.config.ts
export const siteConfig = {
  name: "LANCOX FZCO",
  domain: "lancoxuae.com",
  siteUrl: "https://lancoxuae.com",
  address: {
    full: "G6304, Ground Floor, Dubai Traders Market, Yiwu Market, P.O. Box 16888, Jebel Ali, Dubai, UAE",
    // ...
  },
  contact: {
    email: "lancoxuae@outlook.com",
    phoneDisplay: "+971 4 265 8536",
    mobile1Display: "+971 56 867 3271",
    mobile2Display: "+971 50 941 0053",
    whatsapp: "971568673271",
  },
  analytics: {
    googleTagManagerId: import.meta.env.PUBLIC_GTM_ID || "GTM-LANCOX_PLACEHOLDER",
    googleAnalyticsId: import.meta.env.PUBLIC_GA_MEASUREMENT_ID || "G-LANCOX_PLACEHOLDER",
    googleSearchConsoleToken: import.meta.env.PUBLIC_GSC_TOKEN || "google-site-verification-token-placeholder",
    bingWebmasterToken: import.meta.env.PUBLIC_BING_TOKEN || "bing-site-verification-token-placeholder",
  },
};
```

---

## 4. Local Development & Build Commands

### Prerequisites
- Node.js >= 18.17 (Tested on Node.js v24)
- npm >= 9.x

### Run Local Development Server
```bash
npm run dev
# Server will start on http://localhost:4321
```

### Production Build
```bash
npm run build
# Compiles static production output to the ./dist directory
```

### Local Preview of Production Build
```bash
npm run preview
# Serves the ./dist folder locally at http://localhost:4321
```

### Run Automated SEO Audit Test
```bash
node scripts/seo-audit.mjs
# Validates single H1s, titles, meta descriptions, canonical URLs, JSON-LD, and robots.txt
```

---

## 5. Deployment Options (Pure Static Hosting)

The generated `./dist` directory can be deployed directly to any static web host or CDN:

### Option A: Cloudflare Pages (Recommended for UAE & Global CDN)
1. Link your Git repository in the Cloudflare Pages dashboard.
2. Build command: `npm run build`
3. Build output directory: `dist`
4. Set custom domain: `lancoxuae.com`

### Option B: Netlify
1. Connect Git repository.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Forms: Add `data-netlify="true"` to `src/components/ContactForm.astro` for instant serverless form processing.

### Option C: Vercel
1. Import repository.
2. Framework preset: **Astro**.
3. Output directory: `dist`.

### Option D: Traditional Nginx / Apache Server
Upload all contents of the `./dist/` directory to your web root (`/var/www/html` or `public_html`). Ensure trailing slash handling:
```nginx
# Sample Nginx directive
location / {
    try_files $uri $uri/ =404;
}
```

---

## 6. Post-Launch SEO & Search Engine Verification

### Step 1: Google Search Console (GSC)
1. Add property `https://lancoxuae.com` in [Google Search Console](https://search.google.com/search-console).
2. Choose **HTML tag** verification.
3. Copy the token and paste it into `.env`:
   ```env
   PUBLIC_GSC_TOKEN="YOUR_GSC_VERIFICATION_TOKEN"
   ```
4. Rebuild (`npm run build`) and redeploy.
5. In Search Console, click **Sitemaps** and submit:
   ```
   https://lancoxuae.com/sitemap-index.xml
   ```

### Step 2: Bing Webmaster Tools
1. Import your verified site from Google Search Console into [Bing Webmaster Tools](https://www.bing.com/webmasters), or use the verification token in `.env`:
   ```env
   PUBLIC_BING_TOKEN="YOUR_BING_VERIFICATION_TOKEN"
   ```

### Step 3: Google Analytics 4 & Google Tag Manager
1. Update `.env` with your container ID and measurement ID:
   ```env
   PUBLIC_GTM_ID="GTM-XXXXXXX"
   PUBLIC_GA_MEASUREMENT_ID="G-XXXXXXXXXX"
   ```
2. The site includes built-in conversion event tracking hooks for:
   - `quote_request_submitted`
   - `phone-click`
   - `email-click`
   - `whatsapp-click`

---

## 7. Connecting the RFQ Form to a Live Service

The contact form in `src/components/ContactForm.astro` is completely provider-agnostic. To activate live email submissions, you can choose any of the following with zero backend infrastructure:

1. **Formspree**: Create a form at [formspree.io](https://formspree.io) and update the form action:
   ```html
   <form action="https://formspree.io/f/your_form_id" method="POST">
   ```
2. **Web3Forms**: Create an access key at [web3forms.com](https://web3forms.com) and add the hidden `<input type="hidden" name="access_key" value="YOUR_KEY">`.
3. **EmailJS** / **Custom API**: Attach a simple `fetch()` POST handler in the client script inside `src/components/ContactForm.astro`.

---

## 8. Client Verification Notice

All company data, location coordinates in Yiwu Market / Dubai Traders Market, telephone numbers, emails, scopes, and objectives are derived strictly from the official **LANCOX FZCO** profile. No unverified claims, fake project counts, or unauthorized third-party logos were introduced.
