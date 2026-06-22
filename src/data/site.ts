export const siteConfig = {
  url: "https://hmsarweralam-portfolio.vercel.app",
  name: "H. M. Sarwer Alam",
  shortName: "Sarwer Alam",
  title: "H. M. Sarwer Alam | Software Engineer & AI/ML Researcher",
  description:
    "Portfolio of H. M. Sarwer Alam, a software engineer and AI/ML researcher focused on backend development, medical image analysis, explainable AI, RAG, and healthcare AI.",
  locale: "en_US",
  language: "en",
  email: "Sarweralam867@gmail.com",
  profiles: {
    github: "https://github.com/sarweralam867",
    linkedin: "https://www.linkedin.com/in/h-m-sarwer-alam-893431203",
    scholar: "https://scholar.google.com/citations?hl=en&user=1xFdkToAAAAJ",
    orcid: "https://orcid.org/0009-0002-2350-1994",
  },
  routes: {
    home: "/",
    renseg: "/work/renseg",
    leukocyteNet: "/work/leukocytenet",
  },
  projectRepositories: [
    {
      name: "RenSeg",
      url: "https://github.com/sarweralam867/RenSeg",
      description: "Kidney CT localization, unsupervised segmentation, and classification pipeline.",
      language: "Python",
    },
    {
      name: "CiteWeave-DuckSummarizer",
      url: "https://github.com/sarweralam867/CiteWeave-DuckSummarizer",
      description: "Hybrid web summarization using TF-IDF and sentence embeddings.",
      language: "Python",
    },
    {
      name: "Ask My PDF",
      url: "https://github.com/sarweralam867/Ask-My-PDF",
      description: "Local retrieval-augmented generation chatbot for PDF documents.",
      language: "Python",
    },
    {
      name: "Predicting Heart Disease Using Machine Learning",
      url: "https://github.com/sarweralam867/Predicting-Heart-Disease-using-personal-key-indicators-with-the-help-of-Machine-Learning",
      description: "Classical machine learning project for heart disease prediction.",
      language: "Python",
    },
    {
      name: "Random Image Classification",
      url: "https://github.com/sarweralam867/Random-Image-Classification",
      description: "Image classification experiments with established deep learning architectures.",
      language: "Python",
    },
  ],
} as const;

export const publicationSeo = {
  renseg: {
    slug: "renseg",
    title:
      "RenSeg: Leveraging Unsupervised Segmentation Using Localization and Contour-Guided Quickshift for Renal Calculi and Carcinoma Segmentation and Classification",
    description:
      "RenSeg is an AI-based framework for renal calculi and carcinoma analysis using kidney localization, contour-guided unsupervised segmentation, and transfer learning.",
    doi: "10.1109/JBHI.2025.3629580",
    doiUrl: "https://doi.org/10.1109/JBHI.2025.3629580",
    journal: "IEEE Journal of Biomedical and Health Informatics",
    datePublished: "2025",
    authors: [
      "Farhan Faruk",
      "H. M. Sarwer Alam",
      "Rafeed Rahman",
      "Md. Golam Rabiul Alam",
      "Junho Jeong",
      "Md. Kabir Hossain",
      "Jia Uddin",
    ],
    keywords: [
      "renal calculi",
      "renal carcinoma",
      "medical image segmentation",
      "Quickshift",
      "YOLOv8",
      "computed tomography",
      "healthcare AI",
    ],
  },
  leukocyteNet: {
    slug: "leukocytenet",
    title: "LeukocyteNet: An Explainable Transfer-Transformer Fusion Learning Model for Leukocyte Classification",
    description:
      "LeukocyteNet combines VGG19 and Swin Transformer with Grad-CAM, LIME, and saliency maps for explainable white blood cell classification.",
    doi: "10.28991/ESJ-2026-010-03-03",
    doiUrl: "https://doi.org/10.28991/ESJ-2026-010-03-03",
    journal: "Emerging Science Journal",
    datePublished: "2026-06-01",
    authors: [
      "Tasnim Sakib Apon",
      "Md. Golam Rabiul Alam",
      "Md. Tanzim Reza",
      "Sangita Baidya",
      "Mohammad Fahim Tahmid",
      "Md. Ashraful Alam",
      "Farhan Faruk",
      "H. M. Sarwer Alam",
      "Muhammad Almoyad",
      "Khondokar Fida Hasan",
      "Mohammad Ali Moni",
    ],
    keywords: [
      "leukocyte classification",
      "explainable AI",
      "VGG19",
      "Swin Transformer",
      "Grad-CAM",
      "LIME",
      "hematology",
    ],
  },
} as const;

export function absoluteUrl(path: string) {
  return new URL(path, siteConfig.url).toString();
}
