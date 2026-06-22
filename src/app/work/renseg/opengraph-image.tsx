import { createOgImage, ogImageSize } from "@/lib/og-image";

export const alt = "RenSeg research case study by H. M. Sarwer Alam";
export const size = ogImageSize;
export const contentType = "image/png";

export default function Image() {
  return createOgImage({
    eyebrow: "Published Medical AI Research",
    title: "RenSeg",
    description: "Kidney CT localization, contour-guided unsupervised segmentation, and renal disease classification.",
  });
}
