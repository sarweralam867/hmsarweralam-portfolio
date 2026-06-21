import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Code2, FileText, ScanLine } from "lucide-react";
import { GitHubIcon } from "@/components/BrandIcons";
import { portfolio, renseg } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "RenSeg Case Study | H. M. Sarwer Alam",
  description:
    "RenSeg is a medical computer vision pipeline for kidney CT localization, contour-guided unsupervised segmentation, and classification preparation.",
};

export default function RenSegPage() {
  return (
    <main className="work-page">
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
            <p className="eyebrow">{renseg.label}</p>
            <h1>{renseg.title}</h1>
            <p className="work-full-title">{renseg.fullTitle}</p>
            <p className="work-summary">{renseg.summary}</p>
            <div className="work-actions">
              <a className="button primary" href={renseg.repository} target="_blank" rel="noreferrer">
                <GitHubIcon size={17} />View repository
              </a>
              <a className="button secondary" href={renseg.publication} target="_blank" rel="noreferrer">
                Read publication <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
          <aside className="work-fact-card">
            <ScanLine size={29} />
            <dl>
              <div><dt>Domain</dt><dd>Medical computer vision</dd></div>
              <div><dt>Publication</dt><dd>{renseg.venue}</dd></div>
              <div><dt>DOI</dt><dd>{renseg.doi}</dd></div>
              <div><dt>Repository</dt><dd>Python · {renseg.license}</dd></div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="work-section">
        <div className="container work-intro-grid">
          <div>
            <p className="eyebrow">My contribution</p>
            <h2>Research shaped into a reproducible workflow.</h2>
          </div>
          <p>{renseg.contribution}</p>
        </div>
      </section>

      <section className="work-section results-section">
        <div className="container">
          <div className="work-section-heading">
            <p className="eyebrow">Study overview</p>
            <h2>Reducing annotation effort without compromising performance.</h2>
          </div>
          <div className="results-layout">
            <div className="results-copy">
              {renseg.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className="results-grid" aria-label="RenSeg study results">
              {renseg.results.map((result) => (
                <div key={result.label}><strong>{result.value}</strong><span>{result.label}</span></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="work-section pipeline-section">
        <div className="container">
          <div className="work-section-heading">
            <p className="eyebrow">System pipeline</p>
            <h2>From CT image to classification-ready data.</h2>
          </div>
          <div className="pipeline-grid">
            {renseg.pipeline.map((step) => (
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
            <h2>Built for transparent experimentation.</h2>
            <div className="work-tags">{renseg.technologies.map((item) => <span key={item}>{item}</span>)}</div>
          </div>
          <div className="work-links-card">
            <Code2 size={24} />
            <h3>Explore the work</h3>
            <p>The public repository includes training, inference, preprocessing, postprocessing, and segmentation entry points.</p>
            <a href={renseg.repository} target="_blank" rel="noreferrer">Open GitHub repository <ArrowUpRight size={16} /></a>
            <a href={renseg.publication} target="_blank" rel="noreferrer"><FileText size={16} />Read the IEEE publication</a>
          </div>
        </div>
      </section>

      <footer className="work-footer">
        <div className="container"><p>© {new Date().getFullYear()} {portfolio.name}</p><Link href="/">Return to portfolio</Link></div>
      </footer>
    </main>
  );
}
