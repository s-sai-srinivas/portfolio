// ============================================================
//  PORTFOLIO CONTENT — edit anything here, site hot-reloads.
// ============================================================

export const portfolio = {
  name: "S Sai Srinivas",
  firstName: "Sai",
  role: "Full-Stack Developer",
  tagline:
    "I build end-to-end web experiences — from responsive UIs to APIs and the databases behind them.",
  // Roles that cycle in the hero typing animation
  roles: [
    "Full-Stack Developer",
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "Problem Solver",
  ],
  email: "your.email@gmail.com", // TODO: add your real email
  location: "Hyderabad, India",
  resumeUrl: "#", // TODO: link to your resume PDF
  availability: "Open to opportunities",

  socials: {
    github: "https://github.com/s-sai-srinivas",
    linkedin: "https://www.linkedin.com/in/s-sai-srinivas/",
    twitter: "https://x.com/", // TODO: add your X/Twitter or remove
  },

  about: [
    "I'm a full-stack developer and MCA graduate from Nizam College, Hyderabad — disciplined, energetic, and big on ownership. I like taking a feature from a blank file all the way to production: the interface, the API, and the data model underneath.",
    "I trained as an apprentice at AccioJob, where I sharpened my frontend and JavaScript fundamentals, and I keep building — quizzes, trackers, auth flows, even iOS tooling. Curious by default, structured by habit.",
  ],

  stats: [
    { value: 24, suffix: "+", label: "Repositories" },
    { value: 5, suffix: "", label: "Major Projects" },
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
      items: ["Go", "Node.js", "REST APIs", "JWT Auth", "RBAC", "Rate Limiting", "Multi-Agent AI"],
    },
    {
      category: "Database & Infra",
      items: ["PostgreSQL", "Prisma", "GORM", "Supabase", "Redis", "SQLite"],
    },
    {
      category: "DevOps & Tools",
      items: ["Docker", "Git", "GitHub Actions", "Vitest", "Swift", "Judge0", "Monorepos"],
    },
  ],

  // Row of tech that scrolls in the marquee strip
  marquee: [
    "Go", "React", "Next.js", "TypeScript", "PostgreSQL", "Prisma",
    "Docker", "Supabase", "Redis", "Tailwind", "Gemini AI", "Swift",
  ],

  projects: [
    {
      title: "Smart Academy",
      description:
        "Production-oriented coding education platform — multi-agent AI course/quiz/contest generation, Judge0 code execution, JPlag plagiarism detection, and 6-role RBAC dashboards.",
      tech: ["Go", "Gin", "React", "PostgreSQL", "Redis", "Docker"],
      live: "https://github.com/s-sai-srinivas/Smart-Academy",
      github: "https://github.com/s-sai-srinivas/Smart-Academy",
      gradient: "from-blue-600 to-teal-500",
    },
    {
      title: "ProofReader",
      description:
        "AI-powered proofreading platform with a configurable rules engine — Gemini AI corrections, JWT auth, admin panel, and a full Vitest-covered API surface.",
      tech: ["Next.js 16", "Prisma", "PostgreSQL", "Gemini AI", "Vitest"],
      live: "https://github.com/s-sai-srinivas/ProofReader",
      github: "https://github.com/s-sai-srinivas/ProofReader",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      title: "Trainova — CoachOS",
      description:
        "Mobile-first AI coaching PWA for fitness trainers — dual trainer/athlete portals, custom JWT auth, offline IndexedDB sync, and progress photo tracking.",
      tech: ["Next.js 16", "TypeScript", "Prisma", "PostgreSQL", "PWA"],
      live: "https://github.com/s-sai-srinivas/Trainova",
      github: "https://github.com/s-sai-srinivas/Trainova",
      gradient: "from-cyan-500 to-teal-400",
    },
    {
      title: "ScanConnect",
      description:
        "QR digital business hub for restaurants — one QR, one page, every link. Public business hub, menu management, and share-ready onboarding.",
      tech: ["Next.js 15", "Supabase", "Tailwind", "shadcn/ui"],
      live: "https://github.com/s-sai-srinivas/ScanConnect",
      github: "https://github.com/s-sai-srinivas/ScanConnect",
      gradient: "from-sky-500 to-blue-500",
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
      company: "AccioJob",
      role: "Full-Stack Development Apprentice",
      period: "2022 — Present",
      points: [
        "Training across the full stack — frontend fundamentals, JavaScript, React, and backend concepts.",
        "Built and shipped multiple hands-on projects: quizzes, API-driven apps, auth flows and games.",
      ],
    },
    {
      company: "Nizam College, Hyderabad",
      role: "Master of Computer Applications (MCA)",
      period: "2022 — 2024",
      points: [
        "Postgraduate degree in Computer Science — data structures, algorithms, DBMS and software engineering.",
        "Certified in Java, JavaScript and HTML/CSS/Bootstrap via Udemy alongside coursework.",
      ],
    },
  ],
};
