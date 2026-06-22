import { leukocyteNet, portfolio, renseg } from "@/data/portfolio";
import { absoluteUrl, publicationSeo, siteConfig } from "@/data/site";

const personId = `${siteConfig.url}/#person`;
const websiteId = `${siteConfig.url}/#website`;

export function getProfileStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        inLanguage: siteConfig.language,
        publisher: { "@id": personId },
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteConfig.url}/#profile-page`,
        url: siteConfig.url,
        name: siteConfig.title,
        description: siteConfig.description,
        inLanguage: siteConfig.language,
        isPartOf: { "@id": websiteId },
        mainEntity: { "@id": personId },
        hasPart: siteConfig.projectRepositories.map((project) => ({
          "@type": "SoftwareSourceCode",
          name: project.name,
          description: project.description,
          codeRepository: project.url,
          programmingLanguage: project.language,
          author: { "@id": personId },
        })),
      },
      {
        "@type": "Person",
        "@id": personId,
        name: siteConfig.name,
        alternateName: [siteConfig.shortName, "H.M. Sarwer Alam"],
        url: siteConfig.url,
        jobTitle: ["Software Engineer", "AI/ML Researcher"],
        sameAs: Object.values(siteConfig.profiles),
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "BRAC University",
          sameAs: "https://www.bracu.ac.bd/",
        },
        worksFor: {
          "@type": "Organization",
          name: "BNX Network Inc.",
        },
        knowsAbout: [
          "Software Engineering",
          "Backend Development",
          "Machine Learning",
          "Medical Image Analysis",
          "Explainable Artificial Intelligence",
          "Retrieval-Augmented Generation",
          "Federated Learning",
          "Healthcare Artificial Intelligence",
        ],
        award: ["Best Thesis Award, Spring 2024, BRAC University"],
        subjectOf: [
          { "@id": `${absoluteUrl(siteConfig.routes.renseg)}#article` },
          { "@id": `${absoluteUrl(siteConfig.routes.leukocyteNet)}#article` },
        ],
      },
    ],
  };
}

type PublicationKey = keyof typeof publicationSeo;

export function getArticleStructuredData(key: PublicationKey) {
  const publication = publicationSeo[key];
  const path = key === "renseg" ? siteConfig.routes.renseg : siteConfig.routes.leukocyteNet;
  const details = key === "renseg" ? renseg : leukocyteNet;
  const url = absoluteUrl(path);

  return {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    "@id": `${url}#article`,
    headline: publication.title,
    name: publication.title,
    description: publication.description,
    abstract: [details.summary, ...details.overview].join(" "),
    url,
    sameAs: publication.doiUrl,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    datePublished: publication.datePublished,
    inLanguage: siteConfig.language,
    author: publication.authors.map((name) =>
      name === siteConfig.name ? { "@id": personId } : { "@type": "Person", name },
    ),
    publisher: {
      "@type": "Organization",
      name: publication.journal,
    },
    isPartOf: {
      "@type": "Periodical",
      name: publication.journal,
    },
    identifier: {
      "@type": "PropertyValue",
      propertyID: "DOI",
      value: publication.doi,
      url: publication.doiUrl,
    },
    keywords: publication.keywords,
    about: publication.keywords.map((name) => ({ "@type": "Thing", name })),
    image: absoluteUrl(`${path}/opengraph-image`),
    citation: publication.doiUrl,
  };
}

export function getProfileSummary() {
  return {
    name: portfolio.name,
    title: portfolio.title,
    headline: portfolio.headline,
    about: portfolio.about,
  };
}
