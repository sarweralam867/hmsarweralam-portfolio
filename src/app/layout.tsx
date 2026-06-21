import type { Metadata } from "next";
import { ScrollEffects } from "@/components/ScrollEffects";
import "./globals.css";

export const metadata: Metadata = {
  title: "H. M. Sarwer Alam | Software Engineer & AI/ML Researcher",
  description: "Portfolio of H. M. Sarwer Alam, a software engineer and AI/ML researcher focused on backend development, medical image analysis, explainable AI, RAG, and healthcare AI.",
  keywords: ["H. M. Sarwer Alam", "Software Engineer", "AI Researcher", "Machine Learning", "Medical Image Analysis", "Explainable AI", "FastAPI", "Django", "BRAC University"],
  authors: [{ name: "H. M. Sarwer Alam" }],
  openGraph: {
    title: "H. M. Sarwer Alam | Software Engineer & AI/ML Researcher",
    description: "Software engineer and AI/ML researcher building backend systems and research-driven healthcare AI.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><ScrollEffects />{children}</body></html>;
}
