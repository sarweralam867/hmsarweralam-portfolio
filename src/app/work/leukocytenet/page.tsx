import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, BrainCircuit, FileText, Microscope } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { leukocyteNet, portfolio } from "@/data/portfolio";
import { absoluteUrl, publicationSeo, siteConfig } from "@/data/site";
import { getArticleStructuredData } from "@/lib/structured-data";

const seo = publicationSeo.leukocyteNet;

export const metadata: Metadata = {
  title: "LeukocyteNet Research Case Study",
  description: seo.description,
  keywords: [...seo.keywords],
  alternates: { canonical: siteConfig.routes.leukocyteNet },
  openGraph: {
    title: `${seo.title} | ${siteConfig.name}`,
    description: seo.description,
    url: siteConfig.routes.leukocyteNet,
    type: "article",
    publishedTime: "2026-06-01T00:00:00Z",
    authors: [siteConfig.url],
    section: "Explainable Healthcare AI",
    tags: [...seo.keywords],
    images: [{ url: `${siteConfig.routes.leukocyteNet}/opengraph-image`, width: 1200, height: 630, alt: seo.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${seo.title} | ${siteConfig.name}`,
    description: seo.description,
    images: [`${siteConfig.routes.leukocyteNet}/opengraph-image`],
  },
  other: {
    citation_title: seo.title,
    citation_author: [...seo.authors],
    citation_publication_date: seo.datePublished,
    citation_journal_title: seo.journal,
    citation_doi: seo.doi,
    citation_abstract_html_url: absoluteUrl(siteConfig.routes.leukocyteNet),
  },
};

export default function LeukocyteNetPage() {
  return (
    <main className="work-page leukocyte-page">
      <JsonLd id="leukocytenet-structured-data" data={getArticleStructuredData("leukocyteNet")} />
      <header className="work-nav">
        <div className="container work-nav-inner">
          <Link className="brand" href="/">
            <span>{portfolio.shortName}</span>
            <strong>{portfolio.name}</strong>
          </Link>
          <Link className="back-link" href="/#projects"><ArrowLeft size={16} />Back to portfolio</Link>
        </div>
      </header>

      <section className="work-hero">
        <div className="work-orbit" aria-hidden="true" />
        <div className="container work-hero-grid">
          <div>
            <p className="eyebrow">{leukocyteNet.label}</p>
            <h1>{leukocyteNet.title}</h1>
            <p className="work-full-title">{leukocyteNet.fullTitle}</p>
            <p className="work-summary">{leukocyteNet.summary}</p>
            <div className="work-actions">
              <a className="button primary" href={leukocyteNet.publication} target="_blank" rel="noreferrer">
                Read publication <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
          <aside className="work-fact-card">
            <Microscope size={29} />
            <dl>
              <div><dt>Domain</dt><dd>Explainable hematology AI</dd></div>
              <div><dt>Publication</dt><dd>{leukocyteNet.venue}</dd></div>
              <div><dt>DOI</dt><dd>{leukocyteNet.doi}</dd></div>
              <div><dt>Design</dt><dd>VGG19 and Swin Transformer fusion</dd></div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="work-section">
        <div className="container work-intro-grid">
          <div>
            <p className="eyebrow">My contribution</p>
            <h2>Combining predictive performance with clinical transparency.</h2>
          </div>
          <p>{leukocyteNet.contribution}</p>
        </div>
      </section>

      <section className="work-section results-section">
        <div className="container">
          <div className="work-section-heading">
            <p className="eyebrow">Study overview</p>
            <h2>Reliable classification with explanations clinicians can inspect.</h2>
          </div>
          <div className="results-layout">
            <div className="results-copy">
              {leukocyteNet.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className="results-grid" aria-label="LeukocyteNet study results">
              {leukocyteNet.results.map((result) => (
                <div key={result.label}><strong>{result.value}</strong><span>{result.label}</span></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="work-section pipeline-section">
        <div className="container">
          <div className="work-section-heading">
            <p className="eyebrow">Model workflow</p>
            <h2>Local morphology, global context, and visible reasoning.</h2>
          </div>
          <div className="pipeline-grid">
            {leukocyteNet.pipeline.map((step) => (
              <article key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="work-section">
        <div className="container technology-grid">
          <div>
            <p className="eyebrow">Technology</p>
            <h2>A fusion architecture built for explainability.</h2>
            <div className="work-tags">{leukocyteNet.technologies.map((item) => <span key={item}>{item}</span>)}</div>
          </div>
          <div className="work-links-card">
            <BrainCircuit size={24} />
            <h3>Explore the research</h3>
            <p>Read the complete methodology, comparative evaluation, and explainability analysis in the published article.</p>
            <a href={leukocyteNet.publication} target="_blank" rel="noreferrer"><FileText size={16} />Read the publication <ArrowUpRight size={16} /></a>
          </div>
        </div>
      </section>

      <footer className="work-footer">
        <div className="container"><p>© {new Date().getFullYear()} {portfolio.name}</p><Link href="/">Return to portfolio</Link></div>
      </footer>
    </main>
  );
}
