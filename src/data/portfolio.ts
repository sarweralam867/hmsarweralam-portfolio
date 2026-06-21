export type Link = { label: string; href: string };
export type Experience = {
  organization: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
};
export type Publication = {
  type: string;
  title: string;
  venue: string;
  year: string;
  status: "Published" | "Submitted";
  contribution: string;
  tags: string[];
  href?: string;
  doi?: string;
};
export type Project = {
  title: string;
  category: string;
  description: string;
  tools: string[];
};

export const portfolio = {
  name: "H. M. Sarwer Alam",
  shortName: "SA",
  title: "Software Engineer | AI/ML Researcher",
  eyebrow: "Software Engineer · AI/ML Researcher",
  headline:
    "I build intelligent software, from robust backend systems to trustworthy AI.",
  intro:
    "My work combines practical engineering with applied research, spanning backend development, machine learning, medical image analysis, and explainable AI.",
  email: "Sarweralam867@gmail.com",
  location: "Dhaka, Bangladesh",
  availability: "Open to meaningful engineering and research collaborations",
  links: {
    github: "https://github.com/sarweralam867",
    linkedin: "https://www.linkedin.com/in/h-m-sarwer-alam-893431203",
    email: "mailto:Sarweralam867@gmail.com",
    resume: "/resume.pdf",
    cv: "/cv.pdf",
  },
  metrics: [
    { value: "2", label: "Journal publications" },
    { value: "3.88", label: "CGPA / 4.00" },
    { value: "2025", label: "Best Thesis Award" },
  ],
  about: [
    "I am a Computer Science and Engineering graduate from BRAC University, where I earned a 3.88/4.00 CGPA and received the Best Thesis Award. I now work as a Software Engineer Junior at BNX Network Inc., developing backend and ML-enabled systems.",
    "My work sits where software engineering meets applied research: from FastAPI, Django, TCP services, and C# .NET applications to medical computer vision, explainable models, federated learning, and retrieval-augmented generation.",
  ],
  focusAreas: [
    "Backend systems",
    "Medical image analysis",
    "Explainable AI",
    "Federated learning",
    "RAG systems",
    "Trustworthy healthcare AI",
  ],
  publications: [
    {
      type: "Journal article",
      title:
        "RenSeg: Leveraging Unsupervised Segmentation using Localization and Contour-Guided Quickshift for Renal Calculi and Carcinoma Segmentation and Classification",
      venue: "IEEE Journal of Biomedical and Health Informatics",
      year: "2025",
      status: "Published",
      doi: "10.1109/JBHI.2025.3629580",
      href: "https://doi.org/10.1109/JBHI.2025.3629580",
      contribution:
        "Designed an unsupervised medical image segmentation pipeline focused on accuracy and reliability in clinical applications.",
      tags: ["Medical imaging", "Unsupervised segmentation", "Healthcare AI"],
    },
    {
      type: "Journal article",
      title:
        "LeukocyteNet: An Explainable Transfer-Transformer Fusion Learning Model for Leukocyte Classification",
      venue: "Emerging Science Journal",
      year: "2026",
      status: "Published",
      doi: "10.28991/ESJ-2026-010-03-03",
      href: "https://doi.org/10.28991/ESJ-2026-010-03-03",
      contribution:
        "Co-developed a hybrid CNN Transformer model with explainable AI for leukocyte classification.",
      tags: ["Explainable AI", "CNN Transformer", "Leukocyte classification"],
    },
    {
      type: "Conference paper",
      title:
        "PLFL: A Semi-supervised Federated Learning Approach Leveraging Pseudo-labeling",
      venue: "British Machine Vision Conference (BMVC)",
      year: "2026",
      status: "Submitted",
      contribution:
        "Proposed a privacy-preserving federated semi-supervised model achieving 98.34% accuracy on BloodMNIST.",
      tags: ["Federated learning", "Pseudo-labeling", "Medical AI"],
    },
  ] satisfies Publication[],
  experience: [
    {
      organization: "BNX Network Inc.",
      role: "Software Engineer Junior · formerly Trainee Software Engineer",
      period: "April 2025 to Present",
      location: "Naperville, IL, USA · Dhaka, Bangladesh",
      highlights: [
        "Develop and deploy ML/AI solutions using Random Forest, XGBoost, SVM, Isolation Forest, and FastAPI.",
        "Build backend services with FastAPI and custom TCP server-client architecture, plus web applications with Django.",
        "Integrate solutions into C# .NET applications and contribute to testing, validation, debugging, and performance improvement.",
        "Contribute to SecVA Protector, iConnectNow, IT Bot, and MSP-related systems under senior engineering guidance.",
      ],
    },
    {
      organization: "BRAC University",
      role: "Student Tutor · Undergraduate Teaching Assistant, CSE",
      period: "May 2023 to April 2024",
      location: "Dhaka, Bangladesh",
      highlights: [
        "Provided 12 hours of weekly support in programming, debugging, and problem solving.",
        "Evaluated lab work with constructive feedback and guided students through theory and practical exercises.",
        "Supported Data Structure across two semesters and Programming Language-II for one semester.",
      ],
    },
  ] satisfies Experience[],
  projects: [
    {
      title: "CiteWeave-DuckSummarizer",
      category: "AI / NLP Tool",
      description:
        "A web summarization tool that ranks fetched content with TF-IDF, embeddings, and cosine similarity to produce concise, cited summaries.",
      tools: ["Python", "SentenceTransformer", "TF-IDF", "BeautifulSoup"],
    },
    {
      title: "Ask My PDF: Local RAG Chatbot",
      category: "RAG / Local LLM",
      description:
        "An offline document assistant combining PDF extraction, chunking, sentence embeddings, FAISS retrieval, and local TinyLlama inference.",
      tools: ["Python", "FAISS", "PyTorch", "Transformers"],
    },
    {
      title: "Heart Disease Prediction",
      category: "Healthcare ML",
      description:
        "A comparative disease-prediction study using structured healthcare data, careful preprocessing, and multiple classical ML models.",
      tools: ["scikit-learn", "Pandas", "SVM", "Logistic Regression"],
    },
    {
      title: "Random Image Classification",
      category: "Computer Vision",
      description:
        "An image-classification project exploring established and custom deep-learning architectures across a varied image dataset.",
      tools: ["Python", "ResNet50", "AlexNet", "InceptionNet"],
    },
  ] satisfies Project[],
  skillGroups: [
    { title: "Languages", items: ["Python", "SQL", "C", "C#", "HTML", "CSS"] },
    { title: "Backend & web", items: ["FastAPI", "Django", ".NET", "TCP architecture", "REST APIs"] },
    { title: "Machine learning", items: ["TensorFlow", "PyTorch", "scikit-learn", "OpenCV", "XGBoost", "SVM"] },
    { title: "Applied AI", items: ["RAG", "FAISS", "Sentence Transformers", "Medical imaging", "Explainable AI"] },
    { title: "Tools", items: ["GitHub", "Ubuntu", "CUDA", "Docker (basic)", "Microsoft Office"] },
    { title: "Working strengths", items: ["Problem solving", "Research", "Teamwork", "Communication", "Adaptability"] },
  ],
  education: [
    {
      school: "BRAC University",
      degree: "B.Sc. in Computer Science and Engineering",
      period: "2020 to 2024",
      detail: "CGPA 3.88/4.00 · Vice Chancellor’s List (4 semesters) · Dean’s List (5 semesters)",
    },
    {
      school: "Bir Shreshtha Noor Mohammad Public College",
      degree: "Higher Secondary School Certificate (HSC)",
      period: "2019",
      detail: "GPA 5.00/5.00",
    },
    {
      school: "Bir Shreshtha Noor Mohammad Public College",
      degree: "Secondary School Certificate (SSC)",
      period: "2017",
      detail: "GPA 5.00/5.00",
    },
  ],
  awards: [
    {
      title: "Best Thesis Award, Spring 2024",
      organization: "BRAC University",
      date: "February 28, 2025",
      detail: "Recognized for research on unsupervised segmentation for renal calculi and carcinoma analysis.",
    },
    {
      title: "Senior Executive, Communications & Marketing",
      organization: "BRAC University Computer Club",
      date: "2021 to 2023",
      detail: "Led and organized communication and marketing efforts for club events and activities.",
    },
    {
      title: "House Vice Captain, MJ House",
      organization: "Bir Shreshtha Noor Mohammad Public College",
      date: "2018 to 2019",
      detail: "Helped oversee house activities, events, and competitions.",
    },
  ],
};

export const navigation: Link[] = [
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
