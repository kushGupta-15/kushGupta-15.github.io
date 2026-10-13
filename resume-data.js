// Kush Gupta Portfolio Structured Data - Strictly Matching Updated Resume
const PORTFOLIO_DATA = {
  profile: {
    name: "Kush Gupta",
    role: "Full-Stack Software Engineer",
    rolesRotating: [
      "Full-Stack Software Engineer",
      "Next.js 15 & React 18 Developer",
      "AI Integrations (Google Gemini 3.8 Flash)",
      "Real-Time Systems & WebSockets / WebRTC",
      "Knight on LeetCode (Contest Rating: 1861)",
      "FIDE-Rated Chess Player (ID: 25129937)"
    ],
    email: "kushg1517@gmail.com",
    phone: "+91-9625832097",
    location: "Gurugram, Haryana, India",
    university: "Indian Institute of Information Technology, Una (IIIT Una)",
    cgpa: "7.60",
    degree: "B.Tech in Computer Science and Engineering",
    batch: "2023 – Present",
    github: "https://github.com/kushGupta-15",
    linkedin: "https://www.linkedin.com/in/kush-gupta-b8a933293",
    fideUrl: "https://ratings.fide.com/profile/25129937",
    fideId: "25129937",
    avatar: "https://avatars.githubusercontent.com/u/209094231?v=4",
    bio: "B.Tech Computer Science student at IIIT Una seeking a Software Development role, with hands-on experience building and deploying full-stack web applications using React.js, Next.js, TypeScript, and Node.js. Experienced in designing RESTful APIs, integrating AI (Google Gemini), and building real-time systems with WebSockets and WebRTC. Strong problem solver with 750+ DSA problems solved and a LeetCode rating of 1861.",
    stats: [
      { label: "LeetCode Rating", value: 1861, desc: "Knight Rank" },
      { label: "DSA Solved", value: 750, suffix: "+", desc: "LeetCode & GFG" },
      { label: "CGPA @ IIIT Una", value: 7.60, isDecimal: true, desc: "Computer Science" },
      { label: "FIDE Chess ID", value: "25129937", desc: "Inter IIIT Captain" }
    ]
  },

  education: [
    {
      institution: "Indian Institute of Information Technology, Una",
      degree: "B.Tech in Computer Science and Engineering",
      score: "7.60 CGPA (Current)",
      period: "2023 – Present",
      icon: "graduation-cap",
      highlights: [
        "Core Computer Science curriculum focusing on Algorithms, Distributed Systems, Compilers, and OS",
        "Active leader in technical clubs; Inter IIIT Chess Captain (2nd place online tournament 2025)"
      ]
    },
    {
      institution: "CBSE Board",
      degree: "Senior Secondary (Class XII) - Science & Mathematics",
      score: "93.2%",
      period: "2023",
      icon: "award",
      highlights: [
        "Excelled in Mathematics, Physics, and Computer Science",
        "Top tier percentile across CBSE regional candidates"
      ]
    },
    {
      institution: "CBSE Board",
      degree: "Secondary (Class X)",
      score: "99.0%",
      period: "2021",
      icon: "medal",
      highlights: [
        "Outstanding academic achievement with 99.0% aggregate score",
        "Excellence awards in Mathematics and Natural Sciences"
      ]
    }
  ],

  keyCourses: {
    mathematics: [
      "Linear Algebra",
      "Basic Calculus",
      "Discrete Mathematics",
      "Probability & Random Processes"
    ],
    coreSubjects: [
      "DSA",
      "OOPS",
      "Discrete Structures",
      "Computer Organization",
      "Operating Systems",
      "Digital System Design",
      "Computer Networks",
      "DBMS",
      "System Design",
      "Compiler Design",
      "Parallel Architecture and Processing",
      "Machine Learning",
      "Deep Learning",
      "Software Development"
    ]
  },

  courses: [
    "Data Structures & Algorithms (DSA)",
    "Object-Oriented Programming (OOPS)",
    "Discrete Structures",
    "Computer Organization",
    "Operating Systems",
    "Digital System Design",
    "Computer Networks",
    "DBMS",
    "System Design",
    "Compiler Design",
    "Parallel Architecture and Processing",
    "Machine Learning",
    "Deep Learning",
    "Software Development",
    "Linear Algebra",
    "Basic Calculus",
    "Discrete Mathematics",
    "Probability & Random Processes"
  ],

  // STRICTLY FROM RESUME
  skills: {
    languages: ["JavaScript", "TypeScript", "Python", "C++", "SQL"],
    frontend: [
      "React.js",
      "Next.js (App Router, Server Actions, RSC)",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Redux",
      "Zustand",
      "jQuery"
    ],
    backend: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Socket.IO",
      "WebSockets",
      "JWT Authentication",
      "NextAuth",
      "Zod",
      "Arcjet"
    ],
    databasesOrm: [
      "MongoDB",
      "PostgreSQL (Neon)",
      "Prisma ORM",
      "Firebase"
    ],
    aiRealtime: [
      "Google Gemini API",
      "WebRTC",
      "Stream SDK",
      "Web Audio API",
      "Web Speech API"
    ],
    integrationsServices: [
      "Stripe",
      "Inngest",
      "Resend",
      "UploadThing",
      "Cloudinary",
      "Clerk"
    ],
    testingDevops: [
      "Vitest",
      "Node.js Test Runner",
      "GitHub Actions (CI/CD)",
      "Git",
      "GitHub",
      "Docker",
      "AWS",
      "Vercel",
      "Render"
    ],
    libraries: [
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn"
    ],
    tools: [
      "VS Code",
      "Replit",
      "LaTeX"
    ],
    softSkills: [
      "Problem Solving",
      "Analytical Thinking",
      "Leadership (Chess Captain)",
      "Teamwork & Collaboration",
      "Communication",
      "Time Management",
      "Adaptability",
      "Quick Learning"
    ]
  },

  projects: [
    {
      id: "career-wave",
      title: "Career Wave",
      tagline: "Enterprise ATS Platform with Gemini AI Evaluator & Stripe Monetization",
      category: "fullstack ai",
      date: "Aug. 2026 – Sept. 2026",
      featured: true,
      github: "https://github.com/kushGupta-15/Career-wave",
      demo: "https://career-wave-hm4q.vercel.app/",
      imageTag: "Next.js 15 + Gemini AI + Neon",
      tech: ["Next.js 15", "TypeScript", "Prisma ORM", "PostgreSQL (Neon)", "Google Gemini API", "Stripe", "Inngest", "NextAuth", "UploadThing", "Resend", "Arcjet", "Zod"],
      summary: "Enterprise job board built with Next.js 15 App Router and Prisma on serverless PostgreSQL (Neon), featuring Gemini AI resume-to-job ATS scoring and Stripe monetization.",
      highlights: [
        "Architected a Full-Stack ATS Platform: Built an enterprise job board with Next.js 15 App Router, TypeScript, and Prisma ORM on serverless PostgreSQL (Neon), replacing separate REST APIs with type-safe Server Actions and React Server Components.",
        "Engineered Gemini AI ATS Evaluator: Integrated Google Gemini 3.8 Flash to compute real-time resume-to-job ATS match scores, highlight candidate strengths, and identify keyword gaps, alongside a conversational career discovery assistant.",
        "Integrated Stripe Monetization & Inngest Scheduling: Monetized job postings via Stripe Checkout with tiered listing durations and webhook-verified activation; eliminated traditional cron servers by scheduling automated post expirations with Inngest serverless events.",
        "Built Recruiter ATS Dashboard & Notifications: Delivered a recruiter management suite with candidate pipeline status tracking, an in-browser PDF resume previewer, candidate application withdrawal, and Resend transactional email alerts for application milestones.",
        "Hardened Edge Security & Cloud Storage: Implemented NextAuth v5 role-based onboarding (Recruiter vs. Seeker), guarded mutations with Arcjet bot shielding and Zod validation, and integrated UploadThing for secure cloud resume and logo storage."
      ]
    },
    {
      id: "intelliprep",
      title: "IntelliPrep",
      tagline: "Autonomous AI Study Suite & Adaptive Learning Engine",
      category: "fullstack ai",
      date: "2026",
      featured: true,
      github: "https://github.com/kushGupta-15/IntelliPrep",
      demo: "https://intelli-prep-eight.vercel.app/",
      imageTag: "Next.js 15 + Gemini AI + Inngest",
      tech: ["Next.js 15", "React.js", "TypeScript", "Google Gemini API", "PostgreSQL (Neon)", "Inngest", "Stripe", "Clerk", "Tailwind CSS"],
      summary: "Autonomous full-stack educational engine powered by Next.js 15, Google Gemini, and Inngest background workers that deconstructs syllabi into structured chapter notes, Leitner-style spaced repetition flashcards, self-grading quizzes, and an in-context AI Academic Tutor.",
      highlights: [
        "Full-Stack Study Engine: Built with Next.js 15 App Router and React 18 on serverless PostgreSQL (Neon), providing instant chapter generation, course management, and public study portals.",
        "Autonomous Gemini AI Pipeline: Leveraged Google Gemini API to parse complex topics or syllabi into hierarchical chapter curricula, interactive Q&A tutor responses, and dynamic assessment quizzes.",
        "Asynchronous Inngest Workers: Engineered resilient multi-step background pipelines with Inngest for sequential chapter generation, flashcard synthesis, and automatic 429 rate-limit backoff handling.",
        "Adaptive Study Features: Built 4-tier Leitner spaced repetition flashcards with flip animations, an interactive quiz grading system with past score analytics, and variable-speed Web Speech audio narration.",
        "Enterprise Security & Monetization: Secured edge routes with Clerk authentication and sliding-window rate limiting; integrated Stripe payments for credit purchases and premium tier upgrades."
      ]
    },
    {
      id: "docflow",
      title: "DocFlow",
      tagline: "Real-Time Collaborative Workspace & Document Editor",
      category: "fullstack realtime ai",
      date: "2026",
      featured: true,
      github: "https://github.com/kushGupta-15/Docflow",
      demo: "https://docflow-lyart.vercel.app/",
      imageTag: "Next.js 14 + Liveblocks + Firestore",
      tech: ["Next.js 14", "React.js", "TypeScript", "Firebase", "WebSockets", "Google Gemini API", "Clerk", "Tailwind CSS"],
      summary: "Production-grade collaborative document workspace combining block-based rich text editing, conflict-free concurrent synchronization with Liveblocks and Yjs CRDTs, multi-user live cursors, Cloud Firestore persistence, and Google Gemini document intelligence.",
      highlights: [
        "Concurrent Real-Time Collaboration: Integrated Liveblocks and Yjs CRDTs over WebSockets for conflict-free simultaneous document editing with sub-50ms sync latency.",
        "Live Presence & Multi-User Indicators: Delivered real-time live cursor tracking, user presence avatars, and granular room permission authorization via Clerk and Next.js Server Actions.",
        "Google Cloud Firestore Storage: Implemented real-time snapshot listeners with Firebase Admin SDK for immediate document tree reactivity, workspace hierarchies, and RBAC role checks (Owner, Editor, Viewer).",
        "Gemini AI Document Intelligence: Built in-editor AI assistant modals to generate automated document summaries, style rewrites, and multi-lingual translations via Google Gemini API.",
        "Curated Template Gallery: Designed pre-formatted workflow canvases (Sprint Backlogs, Meeting Notes, Project Roadmaps, Brainstorming) alongside an export engine for printing and PDF generation."
      ]
    },
    {
      id: "sketchbattle",
      title: "SketchBattle",
      tagline: "Real-Time Multiplayer Canvas & Algorithmic Game Engine",
      category: "realtime",
      date: "Mar. 2026 – May 2026",
      featured: true,
      github: "https://github.com/kushGupta-15/SketchBattle",
      demo: "https://sketch-battle-rho.vercel.app/",
      imageTag: "React 18 + Socket.IO + WebRTC",
      tech: ["React.js", "TypeScript", "Node.js", "Socket.IO", "WebSockets", "WebRTC", "Web Audio API", "Web Speech API", "MongoDB", "GitHub Actions (CI/CD)"],
      summary: "Synchronized multiplayer drawing and guessing game featuring sub-50ms canvas stroke latency, BFS flood fill, Levenshtein typo alerts, room-scoped WebRTC video, and browser synthesized audio.",
      highlights: [
        "Real-Time Multiplayer Canvas: Built a synchronized drawing engine with sub-50ms latency using React 18, TypeScript, and Socket.IO, featuring a 4-way BFS flood fill algorithm, stroke undo stack, and mid-round canvas history replay upon reconnection.",
        "Algorithmic Game Engine: Implemented core mechanics including speed-tiered rank scoring, Levenshtein distance near-miss typo alerts (“Very Close!”), progressive word hints, and customizable room settings with difficulty tiers.",
        "P2P Video & Synthesized Audio: Integrated room-scoped WebRTC peer-to-peer video streaming alongside WebSockets, and developed a zero-dependency sound effects synthesizer using the native browser Web Audio API.",
        "Mobile-First UX & Voice Input: Designed a fully responsive party-game UI featuring a dedicated main-screen live chat guess input for mobile users, complemented by Web Speech API voice recognition for hands-free guessing.",
        "Security, Persistence & CI/CD: Hardened the backend with bcrypt password hashing, sliding-window IP rate limiting, and 24-hr MongoDB TTL indexes; authored 15 automated tests integrated into a GitHub Actions CI pipeline."
      ]
    },
    {
      id: "streamify",
      title: "Streamify",
      tagline: "Language Exchange Platform with Gemini AI Assistant & Live Video",
      category: "realtime ai",
      date: "Apr. 2025 – June 2025",
      featured: true,
      github: "https://github.com/kushGupta-15/Streamify",
      demo: "https://streamify-2-ezk2.onrender.com/",
      imageTag: "Stream SDK + Gemini AI + WebRTC",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Google Gemini API", "Stream SDK", "WebRTC", "Cloudinary", "Vitest", "Tailwind CSS"],
      summary: "Full-stack language exchange platform connecting global peers through a reciprocal compatibility algorithm, Google Gemini 3.8 Flash bi-directional translation, low-latency video calling, and Cloudinary media processing.",
      highlights: [
        "Smart Reciprocal Matching: Engineered a mutual language-scoring algorithm categorizing partners into tiered compatibility ratings (100% Perfect Exchange, Native Speaker, Study Partner) with real-time search and language filters.",
        "Google Gemini AI Assistant: Integrated Gemini 3.8 Flash in chat with structured JSON output for bi-directional translation with phonetics, grammar diagnostics with explanations, and contextual conversation icebreakers.",
        "Real-Time Chat & WebRTC Video: Implemented low-latency messaging and video calling via Stream SDKs, enforcing backend room-level authorization checks (/api/chat/verify-call) and in-chat call notification prompts.",
        "Security & Database Optimization: Hardened authentication using httpOnly JWT cookies, bcrypt, and rate limiting; optimized social queries (send, accept, reject, unfriend) with compound MongoDB indexes.",
        "Cloud Media & Automated Testing: Built a Cloudinary CDN media pipeline with automated face-centering crops and 5MB validation; ensured reliability with automated test suites using Vitest and Node.js test runner."
      ]
    },
    {
      id: "clv-prediction",
      title: "Customer-Lifetime-Value-Prediction",
      tagline: "Leakage-Free 90-Day Revenue Forecasting & Machine Learning Pipeline",
      category: "ai",
      date: "2026",
      featured: true,
      github: "https://github.com/kushGupta-15/Customer-Lifetime-Value-Prediction",
      demo: "https://customer-lifetime-value-prediction-kh04.onrender.com/",
      imageTag: "Python + NumPy + Pandas + Render",
      tech: ["Python", "NumPy", "Pandas", "Render"],
      summary: "Predicting 90-day future customer spending from transaction history alone on the 1.07M-row UCI Online Retail II dataset, using leakage-free temporal validation and decile lift analysis.",
      highlights: [
        "Leakage-Free Temporal Target Construction: Designed a strict temporal cutoff parameter separating the feature window from the prediction window, asserted in code rather than assumed.",
        "11 Engineered Customer-Level Features: Formulated domain-specific features across RFM (Recency, Frequency, Monetary), tenure/cadence, and behavioral basket breadth.",
        "Comparison of Machine Learning Models: Evaluated models with 50 optimization trials against 5-fold cross-validated MAE.",
        "Explainability & Decile Lift: Evaluated model diagnostics; decile lift analysis showed the top predicted decile captures 54.2% of realized 90-day revenue.",
        "Live Cloud Deployment: Deployed an interactive prediction dashboard and inference endpoint live on Render."
      ]
    },
    {
      id: "airline-microservices",
      title: "Airline Microservices Suite",
      tagline: "Decoupled Distributed Backend Infrastructure for Flight Operations",
      category: "systems",
      date: "2025 – 2026",
      featured: false,
      github: "https://github.com/kushGupta-15/API_Gateway",
      demo: "https://skyflow-api-gateway-vwri.onrender.com",
      imageTag: "API Gateway + Microservices",
      tech: ["Node.js", "Express.js", "REST APIs", "SQL", "Docker"],
      summary: "Modular enterprise airline platform divided into decoupled microservices: API Gateway, Flight Search & Management, Authentication Service, Booking Service, and Automated Reminder Notification Service.",
      highlights: [
        "API Gateway acting as single entry point with reverse proxying, rate-limiting, and request forwarding.",
        "Dedicated Flight Search Service executing high-throughput queries across schedules, airports, and airplane seating.",
        "Independent Auth & Booking services ensuring transactional safety and isolated database instances.",
        "Reminder Service handling asynchronous email notifications for upcoming flights.",
        "Containerized Docker deployment across decoupled Render cloud services."
      ]
    },
    {
      id: "self-corrective-rag",
      title: "Self-Corrective RAG Assistant",
      tagline: "Intelligent Information Retrieval with Self-Reflection Logic",
      category: "ai",
      date: "2026",
      featured: false,
      github: "https://github.com/kushGupta-15/Self-Corrective-RAG-Assistant",
      demo: "https://github.com/kushGupta-15/Self-Corrective-RAG-Assistant",
      imageTag: "Python + Google Gemini API",
      tech: ["Python", "Google Gemini API"],
      summary: "AI-powered retrieval pipeline incorporating corrective self-reflection to validate document relevance, filter hallucinations, and reformulate queries.",
      highlights: [
        "Evaluates document relevancy score prior to LLM synthesis to eliminate noise and false grounding.",
        "Triggers automatic query reformulation if retrieval score falls below confidence threshold.",
        "Demonstrates proficiency in modern generative AI architectures and knowledge grounding.",
        "Structured output verification and feedback scoring implemented with Python."
      ]
    },
    {
      id: "gfg-sync-extension",
      title: "GFG to GitHub Sync Extension",
      tagline: "Automated Chrome Extension for GeeksforGeeks Problem Sync",
      category: "systems",
      date: "2025",
      featured: false,
      github: "https://github.com/kushGupta-15/GFG-sync-extension",
      demo: "https://github.com/kushGupta-15/GFG-sync-extension",
      imageTag: "JavaScript + GitHub REST API",
      tech: ["JavaScript", "HTML", "CSS", "GitHub"],
      summary: "Productivity browser extension that automatically captures accepted code submissions on GeeksforGeeks and pushes solutions to the user's GitHub repository.",
      highlights: [
        "Implemented with Manifest V3 utilizing service workers and background scripts for secure credential handling.",
        "Monitors submission completion via DOM observers and pushes formatted solution files and README problem descriptions to GitHub.",
        "Generates clean folder structures and commits code automatically to GitHub repository upon success.",
        "Helps competitive programmers build a continuous public record of problem-solving activity."
      ]
    }
  ],

  achievements: [
    {
      title: "750+ DSA Problems Solved & Knight on LeetCode",
      subtitle: "Contest Rating: 1861 • Top Tier Algorithmic Competitor",
      badge: "Knight (1861)",
      icon: "code",
      desc: "Solved 750+ algorithmic problems across LeetCode, GeeksforGeeks, and other platforms; Knight on LeetCode with a contest rating of 1861."
    },
    {
      title: "Dynamic Programming Camp Graduate",
      subtitle: "AlgoUniversity led by Codeforces Master Manas Kumar Verma",
      badge: "AlgoUniversity",
      icon: "zap",
      desc: "Completed AlgoUniversity’s Dynamic Programming Camp led by Codeforces Master Manas Kumar Verma, covering Matrix Exponentiation and SQRT Decomposition."
    },
    {
      title: "FIDE-Rated Chess Player & Inter IIIT Captain",
      subtitle: "FIDE ID: 25129937 • 2nd Place Online Inter IIIT (2025)",
      badge: "Official Rating",
      icon: "shield",
      desc: "FIDE-rated chess player (FIDE ID: 25129937) with national and international tournament experience; served as chess captain at Inter IIIT and secured 2nd place in the online Inter IIIT tournament (2025)."
    }
  ]
};

// Export to window
if (typeof window !== 'undefined') {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
