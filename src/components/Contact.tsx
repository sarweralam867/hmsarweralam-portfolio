import { ArrowUpRight, Download, Mail } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { GitHubIcon, LinkedInIcon } from "./BrandIcons";

export function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="container contact-inner">
        <p className="eyebrow">08 / Let’s connect</p>
        <h2>Have an interesting problem to solve?</h2>
        <p>I’m always glad to discuss thoughtful engineering, applied AI, healthcare research, or a promising collaboration.</p>
        <a className="contact-email" href={portfolio.links.email}>{portfolio.email}<ArrowUpRight size={22} /></a>
        <div className="contact-links">
          <a href={portfolio.links.github} target="_blank" rel="noreferrer"><GitHubIcon size={18} />GitHub</a>
          <a href={portfolio.links.linkedin} target="_blank" rel="noreferrer"><LinkedInIcon size={18} />LinkedIn</a>
          <a href={portfolio.links.email}><Mail size={18} />Email</a>
          <a href={portfolio.links.cv} target="_blank"><Download size={18} />Academic CV</a>
        </div>
      </div>
    </section>
  );
}
