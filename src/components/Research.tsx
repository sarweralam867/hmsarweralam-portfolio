import { ArrowUpRight, FileText } from "lucide-react";
import Link from "next/link";
import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Research() {
  return (
    <section className="section research-section" id="research">
      <div className="container">
        <SectionHeading
          eyebrow="02 / Research"
          title="Research with clinical and practical intent."
          description="Published work in medical computer vision and explainable learning, with ongoing research in privacy-preserving federated AI."
        />
        <div className="publication-list">
          {portfolio.publications.map((publication, index) => (
            <article className="publication-card" key={publication.title}>
              <div className="publication-index">0{index + 1}</div>
              <div className="publication-main">
                <div className="publication-meta">
                  <span>{publication.type}</span><span>·</span><span>{publication.year}</span>
                  <span className={`status ${publication.status.toLowerCase()}`}>{publication.status}</span>
                </div>
                <h3>{publication.title}</h3>
                <p className="venue">{publication.venue}</p>
                <p className="contribution">{publication.contribution}</p>
                <div className="tag-row">{publication.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
              <div className="publication-links">
                {publication.caseStudy ? (
                  <Link className="publication-action case-study-action" href={publication.caseStudy} aria-label={`Read more about ${publication.title}`}>
                    <ArrowUpRight size={19} /><small>Read more<span className="sr-only"> about {publication.title}</span></small>
                  </Link>
                ) : null}
                {publication.href ? (
                  <a className="publication-action" href={publication.href} target="_blank" rel="noreferrer" aria-label={`Open DOI for ${publication.title}`}>
                    <FileText size={17} /><small>DOI</small>
                  </a>
                ) : (
                  <span className="publication-action"><FileText size={17} aria-hidden="true" /><small>In review</small></span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
