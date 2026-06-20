import { Award } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Awards() {
  return (
    <section className="section" id="awards">
      <div className="container awards-layout">
        <SectionHeading eyebrow="07 / Recognition" title="Research, leadership, and service." />
        <div className="award-list">
          {portfolio.awards.map((award) => (
            <article key={award.title}>
              <div className="award-icon"><Award size={19} /></div>
              <div><p className="period">{award.date}</p><h3>{award.title}</h3><p className="award-org">{award.organization}</p><p>{award.detail}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
