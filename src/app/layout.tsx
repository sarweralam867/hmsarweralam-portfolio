import type { Metadata } from "next";
import { ScrollEffects } from "@/components/ScrollEffects";
import { siteConfig } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: "%s | H. M. Sarwer Alam",
  },
  description: siteConfig.description,
  keywords: ["H. M. Sarwer Alam", "Software Engineer", "AI Researcher", "Machine Learning", "Medical Image Analysis", "Explainable AI", "FastAPI", "Django", "BRAC University"],
  applicationName: `${siteConfig.name} Portfolio`,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: siteConfig.title,
    description: "Software engineer and AI/ML researcher building backend systems and research-driven healthcare AI.",
    url: "/",
    siteName: `${siteConfig.name} Portfolio`,
    locale: siteConfig.locale,
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: siteConfig.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: "Software engineer and AI/ML researcher building backend systems and research-driven healthcare AI.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><ScrollEffects />{children}</body></html>;
}
