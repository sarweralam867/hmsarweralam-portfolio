import { leukocyteNet, portfolio, renseg } from "@/data/portfolio";
import { absoluteUrl, publicationSeo, siteConfig } from "@/data/site";

export const dynamic = "force-static";

function list(items: readonly string[]) {
  return items.map((item) => `- ${item}`).join("\n");
}

export function GET() {
  const experience = portfolio.experience
    .map((item) => `### ${item.organization}\n${item.role}\n${item.period}\n${list(item.highlights)}`)
    .join("\n\n");
  const projects = portfolio.projects
    .map((project) => `### ${project.title}\n${project.category}\n${project.description}\nTechnologies: ${project.tools.join(", ")}`)
    .join("\n\n");

  const text = `# ${siteConfig.name}: Full Portfolio Context

Canonical URL: ${siteConfig.url}

## Identity

- Name: ${siteConfig.name}
- Professional title: ${portfolio.title}
- Location: ${portfolio.location}
- GitHub: ${siteConfig.profiles.github}
- LinkedIn: ${siteConfig.profiles.linkedin}
- Google Scholar: ${siteConfig.profiles.scholar}
- ORCID: ${siteConfig.profiles.orcid}

## Professional summary

${portfolio.about.join("\n\n")}

Focus areas: ${portfolio.focusAreas.join(", ")}.

## Experience

${experience}

## Published research

### RenSeg
Title: ${publicationSeo.renseg.title}
Journal: ${publicationSeo.renseg.journal}
DOI: ${publicationSeo.renseg.doi}
Case study: ${absoluteUrl(siteConfig.routes.renseg)}
Summary: ${renseg.summary}
Contribution: ${renseg.contribution}
Results: ${renseg.results.map((result) => `${result.value} ${result.label}`).join("; ")}.

### LeukocyteNet
Title: ${publicationSeo.leukocyteNet.title}
Journal: ${publicationSeo.leukocyteNet.journal}
DOI: ${publicationSeo.leukocyteNet.doi}
Case study: ${absoluteUrl(siteConfig.routes.leukocyteNet)}
Summary: ${leukocyteNet.summary}
Contribution: ${leukocyteNet.contribution}
Results: ${leukocyteNet.results.map((result) => `${result.value} ${result.label}`).join("; ")}.

## Selected projects

${projects}

## Education

${portfolio.education.map((item) => `- ${item.degree}, ${item.school}, ${item.period}. ${item.detail}`).join("\n")}

## Awards and leadership

${portfolio.awards.map((item) => `- ${item.title}, ${item.organization}, ${item.date}. ${item.detail}`).join("\n")}

## Contact

- Email: ${siteConfig.email}
- Portfolio: ${siteConfig.url}

This document summarizes public, verified portfolio information. Residential addresses, phone numbers, and private reference details are intentionally excluded.
`;

  return new Response(text, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
