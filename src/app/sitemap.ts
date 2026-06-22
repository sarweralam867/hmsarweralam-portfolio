import type { MetadataRoute } from "next";
import { absoluteUrl, siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-06-22T00:00:00Z");

  return [
    {
      url: absoluteUrl(siteConfig.routes.home),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl(siteConfig.routes.renseg),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: absoluteUrl(siteConfig.routes.leukocyteNet),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
