import { ArrowRight } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <SectionHeading eyebrow="04 / Selected projects" title="Ideas carried through to working systems." />
        <div className="project-grid">
          {portfolio.projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <div className="project-top"><span>0{index + 1}</span><ArrowRight size={20} /></div>
              <p className="project-category">{project.category}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-row">{project.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
