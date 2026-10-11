// Kush Gupta Portfolio Structured Data - Updated with Latest Resume
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

  courses: [
    "Data Structures & Algorithms",
    "System Design",
    "Operating Systems",
    "Database Management Systems (DBMS)",
    "Computer Networks",
    "Compiler Design",
    "Deep Learning",
    "Machine Learning",
    "Discrete Structures",
    "Computer Organization",
    "Object-Oriented Programming (OOP)",
    "Parallel Architecture & Processing",
    "Software Development",
    "Linear Algebra & Calculus"
  ],

  skills: {
    languages: [
      { name: "JavaScript", level: "Advanced", icon: "file-code" },
      { name: "TypeScript", level: "Advanced", icon: "file-code" },
      { name: "Python", level: "Advanced", icon: "terminal" },
      { name: "C++", level: "Advanced", icon: "code" },
      { name: "SQL", level: "Proficient", icon: "database" }
    ],
    frontend: [
      { name: "React.js", level: "Advanced", icon: "layout" },
      { name: "Next.js 15 (App Router, Server Actions, RSC)", level: "Advanced", icon: "globe" },
      { name: "Tailwind CSS", level: "Advanced", icon: "palette" },
      { name: "Redux Toolkit", level: "Proficient", icon: "cpu" },
      { name: "Zustand", level: "Proficient", icon: "box" },
      { name: "HTML5 / CSS3", level: "Advanced", icon: "file" },
      { name: "jQuery", level: "Familiar", icon: "layers" }
    ],
    backend: [
      { name: "Node.js", level: "Advanced", icon: "server" },
      { name: "Express.js", level: "Advanced", icon: "git-branch" },
      { name: "REST APIs", level: "Advanced", icon: "network" },
      { name: "Socket.IO & WebSockets", level: "Advanced", icon: "activity" },
      { name: "JWT Authentication", level: "Advanced", icon: "shield" },
      { name: "NextAuth v5", level: "Advanced", icon: "key" },
      { name: "Zod Validation", level: "Advanced", icon: "check-circle" },
      { name: "Arcjet Security", level: "Proficient", icon: "shield-check" }
    ],
    databases: [
      { name: "MongoDB", level: "Advanced", icon: "database" },
      { name: "PostgreSQL (Neon)", level: "Advanced", icon: "database" },
      { name: "Prisma ORM", level: "Advanced", icon: "hard-drive" },
      { name: "Firebase", level: "Proficient", icon: "flame" }
    ],
    aiRealtime: [
      { name: "Google Gemini API (3.8 Flash)", level: "Advanced", icon: "sparkles" },
      { name: "WebRTC P2P Video", level: "Advanced", icon: "video" },
      { name: "Stream Chat & Video SDK", level: "Advanced", icon: "message-square" },
      { name: "Web Audio API", level: "Proficient", icon: "volume-2" },
      { name: "Web Speech API", level: "Proficient", icon: "mic" }
    ],
    integrationsDevOps: [
      { name: "Stripe Checkout", level: "Proficient", icon: "credit-card" },
      { name: "Inngest Serverless Events", level: "Proficient", icon: "zap" },
      { name: "Resend Transactional Emails", level: "Proficient", icon: "mail" },
      { name: "UploadThing", level: "Proficient", icon: "upload-cloud" },
      { name: "Cloudinary CDN Pipeline", level: "Proficient", icon: "image" },
      { name: "Clerk Auth", level: "Proficient", icon: "lock" },
      { name: "Vitest & Node.js Test Runner", level: "Proficient", icon: "check-square" },
      { name: "GitHub Actions (CI/CD)", level: "Proficient", icon: "git-pull-request" },
      { name: "Docker", level: "Proficient", icon: "container" },
      { name: "AWS (S3, EC2)", level: "Proficient", icon: "cloud" },
      { name: "Vercel & Render", level: "Advanced", icon: "external-link" }
    ],
    libraries: [
      { name: "NumPy", level: "Proficient", icon: "hash" },
      { name: "Pandas", level: "Proficient", icon: "table" },
      { name: "Matplotlib", level: "Proficient", icon: "bar-chart-2" },
      { name: "Seaborn", level: "Proficient", icon: "pie-chart" },
      { name: "Scikit-Learn", level: "Proficient", icon: "cpu" },
      { name: "XGBoost & LightGBM", level: "Proficient", icon: "trending-up" },
      { name: "Optuna & SHAP", level: "Proficient", icon: "sliders" }
    ]
  },

  projects: [
    {
      id: "career-wave",
      title: "Career Wave",
      tagline: "Enterprise ATS Platform with Gemini AI Evaluator & Stripe Monetization",
      category: "fullstack",
      date: "Aug. 2026 – Sept. 2026",
      featured: true,
      github: "https://github.com/kushGupta-15/Career-wave",
      demo: "https://github.com/kushGupta-15/Career-wave",
      imageTag: "Next.js 15 + Gemini AI + Neon",
      tech: ["Next.js 15", "TypeScript", "Prisma ORM", "PostgreSQL (Neon)", "Gemini 3.8 Flash", "Stripe", "Inngest", "NextAuth v5", "UploadThing", "Resend", "Arcjet", "Zod"],
      summary: "Architected an enterprise ATS job portal replacing traditional REST APIs with Next.js 15 App Router Server Actions, featuring real-time AI ATS resume evaluation, Stripe monetization, and serverless expiration scheduling.",
      highlights: [
        "Architected a Full-Stack ATS Platform: Built an enterprise job board with Next.js 15 App Router, TypeScript, and Prisma ORM on serverless PostgreSQL (Neon), replacing separate REST APIs with type-safe Server Actions and React Server Components.",
        "Engineered Gemini AI ATS Evaluator: Integrated Google Gemini 3.8 Flash to compute real-time resume-to-job ATS match scores, highlight candidate strengths, and identify keyword gaps, alongside a conversational career discovery assistant.",
        "Integrated Stripe Monetization & Inngest Scheduling: Monetized job postings via Stripe Checkout with tiered listing durations and webhook-verified activation; eliminated traditional cron servers by scheduling automated post expirations with Inngest serverless events.",
        "Built Recruiter ATS Dashboard & Notifications: Delivered a recruiter management suite with candidate pipeline status tracking, an in-browser PDF resume previewer, candidate application withdrawal, and Resend transactional email alerts for application milestones.",
        "Hardened Edge Security & Cloud Storage: Implemented NextAuth v5 role-based onboarding (Recruiter vs. Seeker), guarded mutations with Arcjet bot shielding and Zod validation, and integrated UploadThing for secure cloud resume and logo storage."
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
      demo: "https://github.com/kushGupta-15/SketchBattle",
      imageTag: "React 18 + Socket.IO + WebRTC",
      tech: ["React 18", "TypeScript", "Node.js", "Express", "Socket.IO", "WebRTC", "Web Audio API", "Web Speech API", "MongoDB", "GitHub Actions"],
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
      category: "realtime",
      date: "Apr. 2025 – June 2025",
      featured: true,
      github: "https://github.com/kushGupta-15/Streamify",
      demo: "https://github.com/kushGupta-15/Streamify",
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
      imageTag: "Python + XGBoost + LightGBM + Optuna",
      tech: ["Python", "XGBoost", "LightGBM", "Random Forest", "Optuna", "SHAP", "Scikit-Learn", "Pandas", "Render"],
      summary: "Predicting 90-day future customer spending from transaction history alone on the 1.07M-row UCI Online Retail II dataset, using leakage-free temporal validation, multi-model benchmarking, Optuna tuning, and SHAP explainability.",
      highlights: [
        "Leakage-Free Temporal Target Construction: Designed a strict temporal cutoff parameter separating the feature window from the prediction window, asserted in code rather than assumed.",
        "11 Engineered Customer-Level Features: Formulated domain-specific features across RFM (Recency, Frequency, Monetary), tenure/cadence, and behavioral basket breadth.",
        "Comparison of Classical ML Models: Evaluated Linear Regression, Random Forest, XGBoost, and LightGBM with 50 Optuna hyperparameter optimization trials against 5-fold cross-validated MAE.",
        "SHAP Explainability & Decile Lift: Integrated global beeswarm and single-customer waterfall SHAP diagnostics; decile lift analysis showed the top predicted decile captures 54.2% of realized 90-day revenue.",
        "Live Cloud Deployment: Deployed an interactive prediction dashboard and inference endpoint live on Render."
      ]
    },
    {
      id: "airline-microservices",
      title: "Airline Microservices Suite",
      tagline: "Decoupled Backend Infrastructure for Flight Operations",
      category: "systems",
      date: "2025 – 2026",
      featured: false,
      github: "https://github.com/kushGupta-15/API_Gateway",
      demo: "https://github.com/kushGupta-15/API_Gateway",
      imageTag: "API Gateway + Microservices",
      tech: ["Node.js", "Express", "API Gateway", "Sequelize", "MySQL / Postgres", "RabbitMQ / Queue", "Microservices"],
      summary: "Modular enterprise airline platform divided into decoupled microservices: API Gateway, Flight Search & Management, Authentication Service, Booking Service, and Automated Reminder Notification Service.",
      highlights: [
        "API Gateway acting as single entry point with reverse proxying, rate-limiting, and request forwarding.",
        "Dedicated Flight Search Service executing high-throughput queries across schedules, airports, and airplane seating.",
        "Independent Auth & Booking services ensuring transactional safety and isolated database instances.",
        "Reminder Service handling asynchronous email notifications for upcoming flights."
      ]
    },
    {
      id: "gfg-sync-extension",
      title: "GFG-sync-extension",
      tagline: "Automated Chrome Extension for GeeksforGeeks Problem Sync",
      category: "tools",
      date: "2025",
      featured: false,
      github: "https://github.com/kushGupta-15/GFG-sync-extension",
      demo: "https://github.com/kushGupta-15/GFG-sync-extension",
      imageTag: "Chrome Extension + GitHub API",
      tech: ["JavaScript", "Chrome Extensions API (Manifest V3)", "GitHub REST API", "DOM MutationObserver"],
      summary: "Productivity browser extension that automatically captures accepted code submissions on GeeksforGeeks and pushes solutions to the user's GitHub repository.",
      highlights: [
        "Implemented with Manifest V3 utilizing service workers and background scripts for secure credential handling.",
        "Monitors submission completion via DOM observers and pushes formatted solution files and README problem descriptions to GitHub.",
        "Helps competitive programmers build a continuous public record of problem-solving activity."
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
      imageTag: "Python + LLM + Vector Search",
      tech: ["Python", "RAG", "Vector Embeddings", "LangChain / LlamaIndex", "FastAPI"],
      summary: "AI-powered retrieval pipeline incorporating corrective self-reflection to validate document relevance, filter hallucinations, and reformulate queries.",
      highlights: [
        "Evaluates document relevancy score prior to LLM synthesis to eliminate noise and false grounding.",
        "Triggers automatic query reformulation if retrieval score falls below confidence threshold.",
        "Demonstrates proficiency in modern generative AI architectures and knowledge grounding."
      ]
    }
  ],

  achievements: [
    {
      title: "750+ DSA Problems Solved & Knight on LeetCode",
      subtitle: "Contest Rating: 1861 • Top Tier Algorithmic Competitor",
      badge: "Knight (1861)",
      icon: "code",
      desc: "Solved 750+ algorithmic problems across LeetCode, GeeksforGeeks, and CP platforms. Achieved the prestigious Knight rank on LeetCode with an active contest rating of 1861."
    },
    {
      title: "Dynamic Programming Camp Graduate",
      subtitle: "AlgoUniversity led by Codeforces Master Manas Kumar Verma",
      badge: "AlgoUniversity",
      icon: "zap",
      desc: "Completed advanced training focusing on complex DP state transitions, Matrix Exponentiation, Square Root (SQRT) Decomposition, and competitive programming techniques."
    },
    {
      title: "FIDE-Rated Chess Player & Inter IIIT Captain",
      subtitle: "FIDE ID: 25129937 • 2nd Place Online Inter IIIT (2025)",
      badge: "Official Rating",
      icon: "shield",
      desc: "FIDE-rated chess player (FIDE ID: 25129937) with national and international tournament experience; served as chess team captain at Inter IIIT and secured 2nd place in the online Inter IIIT tournament (2025)."
    }
  ]
};

// Export to window
if (typeof window !== 'undefined') {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
