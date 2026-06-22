import { createOgImage, ogImageSize } from "@/lib/og-image";

export const alt = "H. M. Sarwer Alam, Software Engineer and AI/ML Researcher";
export const size = ogImageSize;
export const contentType = "image/png";

export default function Image() {
  return createOgImage({
    eyebrow: "Portfolio",
    title: "H. M. Sarwer Alam",
    description: "Software engineer and AI/ML researcher working across backend systems, medical image analysis, explainable AI, and applied machine learning.",
  });
}
