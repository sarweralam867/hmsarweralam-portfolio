import { GraduationCap } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Education() {
  return (
    <section className="section education-section" id="education">
      <div className="container">
        <SectionHeading eyebrow="06 / Education" title="A strong academic foundation." />
        <div className="education-grid">
          {portfolio.education.map((item) => (
            <article key={`${item.school}-${item.degree}`}>
              <GraduationCap size={23} />
              <p className="period">{item.period}</p>
              <h3>{item.school}</h3>
              <p className="degree">{item.degree}</p>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
