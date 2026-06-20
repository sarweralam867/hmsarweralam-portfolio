import { MapPin } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container experience-layout">
        <SectionHeading eyebrow="03 / Experience" title="Building, learning, and helping others learn." />
        <div className="timeline">
          {portfolio.experience.map((item) => (
            <article className="timeline-item" key={item.organization}>
              <div className="timeline-dot" aria-hidden="true" />
              <p className="period">{item.period}</p>
              <h3>{item.organization}</h3>
              <p className="role">{item.role}</p>
              <p className="item-location"><MapPin size={14} />{item.location}</p>
              <ul>{item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
