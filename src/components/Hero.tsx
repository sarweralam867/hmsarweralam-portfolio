import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { GitHubIcon, LinkedInIcon } from "./BrandIcons";

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-glow" aria-hidden="true">
        <span className="orbit-sun" />
        <span className="orbit-track orbit-outer"><i /></span>
        <span className="orbit-track orbit-middle"><i /></span>
        <span className="orbit-track orbit-inner"><i /></span>
      </div>
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow"><span />{portfolio.eyebrow}</p>
          <h1>{portfolio.headline}</h1>
          <p className="hero-intro">{portfolio.intro}</p>
          <div className="hero-actions">
            <a className="button primary" href="#research">Explore my work <ArrowDown size={17} /></a>
            <a className="button secondary" href={portfolio.links.resume} target="_blank">View resume <ArrowUpRight size={17} /></a>
          </div>
          <div className="social-row" aria-label="Social links">
            <a href={portfolio.links.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon size={19} /></a>
            <a href={portfolio.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon size={19} /></a>
            <a href={portfolio.links.email} aria-label="Email"><Mail size={19} /></a>
          </div>
        </div>
        <aside className="identity-card" aria-label="Professional profile summary">
          <div className="identity-top">
            <div className="monogram">{portfolio.shortName}</div>
            <div><p className="identity-name">{portfolio.name}</p><p>{portfolio.title}</p></div>
          </div>
          <div className="identity-rule" />
          <p className="availability"><span />{portfolio.availability}</p>
          <div className="metric-grid">
            {portfolio.metrics.map((metric) => (
              <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>
            ))}
          </div>
          <p className="location">Based in {portfolio.location}</p>
        </aside>
      </div>
    </section>
  );
}
