import { createOgImage, ogImageSize } from "@/lib/og-image";

export const alt = "LeukocyteNet research case study by H. M. Sarwer Alam";
export const size = ogImageSize;
export const contentType = "image/png";

export default function Image() {
  return createOgImage({
    eyebrow: "Published Explainable AI Research",
    title: "LeukocyteNet",
    description: "Explainable VGG19 and Swin Transformer fusion learning for white blood cell classification.",
    accent: "#7451ad",
  });
}
