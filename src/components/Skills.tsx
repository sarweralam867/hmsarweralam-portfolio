import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionHeading eyebrow="05 / Capabilities" title="A practical toolkit for applied intelligence." />
        <div className="skills-grid">
          {portfolio.skillGroups.map((group, index) => (
            <div className="skill-group" key={group.title}>
              <div><span>0{index + 1}</span><h3>{group.title}</h3></div>
              <p>{group.items.join(" · ")}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
