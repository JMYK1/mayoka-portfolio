# mayoka.dev — Next.js Portfolio

John Mayoka's personal portfolio site built with **Next.js 14 (App Router)**, TypeScript, and CSS Modules.

## 🚀 Deploy to Vercel (3 steps)

### Option A — GitHub + Vercel (recommended)
1. Push this project to a GitHub repo
2. Go to [vercel.com/new](https://vercel.com/new) → Import your repo
3. Vercel auto-detects Next.js — click **Deploy** ✅

### Option B — Vercel CLI
```bash
npm i -g vercel
vercel login
vercel --prod
```

## 🛠 Local Development

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## 📁 Project Structure

```
mayoka-portfolio/
├── app/
│   ├── layout.tsx          # Root layout + SEO metadata
│   ├── page.tsx            # Main homepage
│   ├── globals.css         # All styles & animations
│   └── components/
│       ├── Nav.tsx         # Sticky navbar
│       ├── Cursor.tsx      # Custom cursor
│       ├── Terminal.tsx    # Animated hero terminal
│       ├── Stats.tsx       # Animated counters
│       ├── SecurityTools.tsx  # Password / SHA256 / JWT tools
│       ├── ContactForm.tsx    # Contact form
│       └── Reveal.tsx      # Scroll-reveal wrapper
├── public/
│   ├── resume.pdf          # ← Add your resume here
│   └── images/             # ← Add project screenshots here
├── next.config.js
├── vercel.json
├── tsconfig.json
└── package.json
```

## ✅ SEO Checklist (already done)

- [x] `<title>` optimized for "security engineer NYC", "Next.js developer"
- [x] `<meta description>` with keywords
- [x] Open Graph tags (LinkedIn / Facebook sharing)
- [x] Twitter/X card meta tags
- [x] JSON-LD structured data (Schema.org Person)
- [x] `canonical` URL
- [x] `robots` directives for Google
- [x] Next.js font optimization (no layout shift)

## 📝 Customization

1. **Add your Google Search Console token** in `app/layout.tsx` → `verification.google`
2. **Add your resume PDF** to `public/resume.pdf` — Replace `public/resume.pdf` with your real resume PDF.
3. **Add project screenshots** to `public/images/projects/`
4. **Update stats** in `app/components/Stats.tsx`
5. **Update writeup links** in `app/page.tsx` → `WRITEUPS` array

## 🔗 Connect a Custom Domain

In Vercel dashboard → Project → Settings → Domains → Add `mayoka.dev`
Then update your DNS:
```
A     @    76.76.21.21
CNAME www  cname.vercel-dns.com
```
