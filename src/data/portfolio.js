// ============================================================
//  PORTFOLIO CONTENT — edit anything here, site hot-reloads.
// ============================================================

export const portfolio = {
  name: "S Sai Srinivas",
  firstName: "Sai",
  role: "Full-Stack Developer",
  tagline:
    "Full-stack developer with team-lead experience — I take products from a blank file to production: the UI, the API, and the data underneath.",
  // Roles that cycle in the hero typing animation
  roles: [
    "Full-Stack Developer",
    "Team Lead",
    "Software Engineer",
    "Backend Developer",
    "Problem Solver",
  ],
  email: "s.saisrinivas28@gmail.com",
  location: "London, United Kingdom",
  resumeUrl: "/resume.pdf",
  availability: "Open to full-stack & SDE roles in the UK",

  socials: {
    github: "https://github.com/s-sai-srinivas",
    linkedin: "https://www.linkedin.com/in/s-sai-srinivas/",
  },

  about: [
    "I'm a full-stack developer with team-lead experience — at Aurelia Academy I led a development team while building and shipping features across the stack with React, Node.js and JavaScript. I'm completing an MSc in Computer Science at the University of East London (graduating January 2027), and hold an MCA from Nizam College.",
    "I've shipped 8 live products spanning Go, Next.js, NestJS, Python and even iOS — from a multi-agent AI education platform to a pixel-faithful e-commerce simulator. Now looking for full-stack developer and SDE roles in the UK.",
  ],

  stats: [
    { value: 24, suffix: "+", label: "Repositories" },
    { value: 8, suffix: "", label: "Major Projects" },
    { value: 3, suffix: "", label: "Certifications" },
    { value: 100, suffix: "%", label: "Commitment" },
  ],

  skills: [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "shadcn/ui", "HTML5", "CSS3"],
    },
    {
      category: "Backend",
      items: ["Go", "Node.js", "NestJS", "Python", "REST APIs", "JWT Auth", "RBAC", "Multi-Agent AI"],
    },
    {
      category: "Database & Infra",
      items: ["PostgreSQL", "Prisma", "GORM", "Supabase", "Redis", "SQLite"],
    },
    {
      category: "DevOps & Tools",
      items: ["Docker", "Git", "GitHub Actions", "Vitest", "Swift", "Judge0", "scikit-learn", "Monorepos"],
    },
  ],

  // Row of tech that scrolls in the marquee strip
  marquee: [
    "Go", "React", "Next.js", "TypeScript", "PostgreSQL", "Prisma",
    "Docker", "Supabase", "Redis", "Tailwind", "Groq", "NestJS",
  ],

  projects: [
    {
      title: "Smart Academy",
      description:
        "Production-oriented coding education platform — a multi-agent AI pipeline (Extractor → Architect → Writer → Quizmaster → Critic) generates courses, quizzes and contests from lesson plans. Judge0 code execution, JPlag plagiarism detection, Redis job queue, Prometheus metrics, and 6-role RBAC dashboards.",
      tech: ["Go", "Gin", "React", "PostgreSQL", "Redis", "Docker"],
      live: "https://smart-academy-eight.vercel.app",
      github: "https://github.com/s-sai-srinivas/Smart-Academy",
      gradient: "from-blue-600 to-teal-500",
      featured: true,
    },
    {
      title: "EcomSim",
      description:
        "Amazon-style e-commerce simulator — real catalog data, full browse→cart→checkout→order-tracking loop, wishlist, and Playwright e2e coverage.",
      tech: ["Next.js 16", "TypeScript", "Prisma", "Zustand", "Playwright"],
      live: "https://ecomsim-ecru.vercel.app",
      github: "https://github.com/s-sai-srinivas/EcomSim",
      gradient: "from-indigo-500 to-sky-400",
    },
    {
      title: "School Management System",
      description:
        "Full-stack school platform — NestJS backend with 10 modules (students, attendance, fees, homework, notices, reports, SMS), JWT + Passport auth, and role-based dashboards for Admin/Teacher/Parent.",
      tech: ["NestJS", "Next.js 16", "Prisma", "PostgreSQL", "Jest"],
      live: "https://school-management-omega-olive.vercel.app",
      github: "https://github.com/s-sai-srinivas/SchoolManagement",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      title: "ProofReader",
      description:
        "AI-powered proofreading platform with a configurable rules engine — Groq-powered corrections, JWT auth, admin panel, and a full Vitest-covered API surface.",
      tech: ["Next.js 16", "Prisma", "PostgreSQL", "Groq", "Vitest"],
      live: "https://proofreader-liard.vercel.app",
      github: "https://github.com/s-sai-srinivas/ProofReader",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      title: "Trainova — CoachOS",
      description:
        "Mobile-first AI coaching PWA for fitness trainers — dual trainer/athlete portals, custom JWT auth, offline IndexedDB sync, and progress photo tracking.",
      tech: ["Next.js 16", "TypeScript", "Prisma", "PostgreSQL", "PWA"],
      live: "https://trainova-theta.vercel.app",
      github: "https://github.com/s-sai-srinivas/Trainova",
      gradient: "from-cyan-500 to-teal-400",
    },
    {
      title: "ScanConnect",
      description:
        "QR digital business hub for restaurants — one QR, one page, every link. Public business hub, menu management, and share-ready onboarding.",
      tech: ["Next.js 15", "Supabase", "Tailwind", "shadcn/ui"],
      live: "https://scanconnect-seven.vercel.app",
      github: "https://github.com/s-sai-srinivas/ScanConnect",
      gradient: "from-sky-500 to-blue-500",
    },
    {
      title: "Fake Review Detection — NLP/ML",
      description:
        "MSc dissertation project — an ML pipeline detecting fake reviews on healthcare platforms. TF-IDF + lemmatized NLP preprocessing, comparing Logistic Regression, Naive Bayes and SVM (best: 0.83 F1).",
      tech: ["Python", "scikit-learn", "NLTK", "TF-IDF", "SVM"],
      live: "https://fake-review-detector-tau.vercel.app",
      github: "https://github.com/s-sai-srinivas/fake-healthcare-review-detection",
      gradient: "from-teal-500 to-emerald-400",
    },
    {
      title: "TuneTorrent",
      description:
        "iOS music, torrent and file manager — SwiftData persistence, Live Activities, sideloadable via iloader, with a CI pipeline that builds the IPA.",
      tech: ["Swift", "SwiftData", "iOS", "GitHub Actions"],
      live: "https://github.com/s-sai-srinivas/TuneTorrent",
      github: "https://github.com/s-sai-srinivas/TuneTorrent",
      gradient: "from-indigo-500 to-sky-400",
    },
  ],

  experience: [
    {
      company: "Aurelia Academy",
      role: "Team Lead & Full-Stack Developer",
      period: "Jun 2026 — Sep 2026 · Remote",
      points: [
        "Led a development team while building and shipping full-stack features with React, Node.js and JavaScript.",
        "Owned delivery end to end — task breakdown, code review, and unblocking teammates.",
      ],
    },
    {
      company: "University of East London",
      role: "MSc Computer Science",
      period: "May 2025 — Jan 2027",
      points: [
        "Dissertation: AI-based detection of fake reviews in online healthcare platforms using NLP + ML (SVM, LR, NB comparison).",
        "Supervised by Dr. Zainb Dawod.",
      ],
    },
    {
      company: "AccioJob",
      role: "Full-Stack Development Trainee",
      period: "Mar 2022 — Dec 2024 · Remote",
      points: [
        "Completed project-based full-stack development training covering HTML, CSS, JavaScript and React.",
        "Built and shipped multiple hands-on projects: quizzes, API-driven apps, auth flows and games.",
      ],
    },
    {
      company: "Nizam College, Hyderabad",
      role: "Master of Computer Applications (MCA)",
      period: "Nov 2022 — Sep 2024",
      points: [
        "Postgraduate degree in Computer Science — data structures, algorithms, DBMS and software engineering.",
        "Certified in Java, JavaScript and HTML/CSS/Bootstrap via Udemy alongside coursework.",
      ],
    },
    {
      company: "Osmania University",
      role: "BSc Computer & Information Sciences",
      period: "2018 — 2021",
      points: [
        "Undergraduate degree in computer and information sciences — CGPA 8.5.",
        "Built the programming and math foundation for the postgraduate work that followed.",
      ],
    },
  ],
};
