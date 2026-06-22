# H. M. Sarwer Alam Portfolio

Personal portfolio of H. M. Sarwer Alam, a software engineer and AI/ML researcher working across backend systems, medical image analysis, explainable AI, and applied machine learning.

## Tech stack

- Next.js 16 App Router
- React 19 and TypeScript
- Tailwind CSS 4
- Lucide icons
- Vercel-ready static content

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Content

All portfolio content is centralized in `src/data/portfolio.ts`. Replace `public/resume.pdf` and `public/cv.pdf` to update the downloadable documents.

## Deployment

Import this repository into Vercel and use the default Next.js settings. The site has no backend, database, environment variables, or runtime filesystem dependency.

## Search discovery

The site generates canonical metadata, JSON-LD, Open Graph cards, `robots.txt`, `sitemap.xml`, `llms.txt`, and `llms-full.txt`. After deployment, add the canonical URL to Google Search Console and Bing Webmaster Tools, then submit `/sitemap.xml` and request indexing for the homepage and both research case studies.

The résumé and CV remain downloadable but are served with `X-Robots-Tag: noindex, noarchive` to reduce exposure of private details contained in the PDFs.
