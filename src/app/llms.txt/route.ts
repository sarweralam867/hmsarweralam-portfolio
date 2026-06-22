import { portfolio } from "@/data/portfolio";
import { absoluteUrl, publicationSeo, siteConfig } from "@/data/site";

export const dynamic = "force-static";

export function GET() {
  const text = `# ${siteConfig.name}

> ${portfolio.title}. ${portfolio.headline}

This is the canonical portfolio of ${siteConfig.name}, a software engineer and published AI/ML researcher based in Dhaka, Bangladesh.

## Primary pages

- [Portfolio](${siteConfig.url}): Experience, research, projects, skills, education, and contact information.
- [RenSeg case study](${absoluteUrl(siteConfig.routes.renseg)}): ${publicationSeo.renseg.description}
- [LeukocyteNet case study](${absoluteUrl(siteConfig.routes.leukocyteNet)}): ${publicationSeo.leukocyteNet.description}

## Authoritative profiles

- [GitHub](${siteConfig.profiles.github})
- [LinkedIn](${siteConfig.profiles.linkedin})
- [Google Scholar](${siteConfig.profiles.scholar})
- [ORCID](${siteConfig.profiles.orcid})

## Publications

- [${publicationSeo.renseg.title}](${publicationSeo.renseg.doiUrl})
- [${publicationSeo.leukocyteNet.title}](${publicationSeo.leukocyteNet.doiUrl})

For a complete machine-readable overview, see [llms-full.txt](${absoluteUrl("/llms-full.txt")}).
`;

  return new Response(text, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
