import { ArrowUpRight, FileText } from "lucide-react";
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
              <div className="publication-link">
                {publication.href ? (
                  <a href={publication.href} target="_blank" rel="noreferrer" aria-label={`Read ${publication.title}`}>
                    <ArrowUpRight size={20} />
                  </a>
                ) : <FileText size={20} aria-hidden="true" />}
                {publication.doi ? <small>DOI</small> : <small>In review</small>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
