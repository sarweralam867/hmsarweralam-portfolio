import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <SectionHeading eyebrow="01 / About" title="Engineering discipline, research curiosity." />
        <div className="about-content">
          {portfolio.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <div className="focus-list">
            {portfolio.focusAreas.map((area) => <span key={area}>{area}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
