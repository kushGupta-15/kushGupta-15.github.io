// Kush Gupta Portfolio Structured Data
const PORTFOLIO_DATA = {
  profile: {
    name: "Kush Gupta",
    role: "Full-Stack Software Engineer",
    rolesRotating: [
      "Full-Stack Software Engineer",
      "Next.js & TypeScript Developer",
      "Real-Time Systems & Socket.IO Builder",
      "750+ DSA Competitive Programmer",
      "FIDE-Rated Chess Player (ID: 25129937)"
    ],
    email: "kushg1517@gmail.com",
    phone: "+91-9625832097",
    location: "Gurugram, India",
    university: "Indian Institute of Information Technology, Una (IIIT Una)",
    cgpa: "7.60",
    degree: "B.Tech in Computer Science and Engineering",
    batch: "2023 – Present",
    github: "https://github.com/kushGupta-15",
    linkedin: "https://www.linkedin.com/in/kush-gupta-b8a933293",
    fideUrl: "https://ratings.fide.com/profile/25129937",
    fideId: "25129937",
    avatar: "https://avatars.githubusercontent.com/u/209094231?v=4",
    bio: "B.Tech Computer Science student at IIIT Una seeking a Software Engineer role. Hands-on experience architecting and deploying production-grade full-stack web applications using React.js, Next.js, Node.js, and Python. Passionate about performant RESTful APIs, distributed microservices, real-time WebSockets, and clean system design.",
    stats: [
      { label: "DSA Solved", value: 750, suffix: "+", desc: "LeetCode & GFG" },
      { label: "GitHub Repos", value: 21, suffix: "+", desc: "Open Source Codebases" },
      { label: "CGPA (IIIT Una)", value: 7.60, isDecimal: true, desc: "Computer Science" },
      { label: "FIDE Chess ID", value: "25129937", desc: "Rated Competitor" }
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
        "Active member of coding clubs and technical initiatives"
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
      { name: "C++", level: "Advanced", icon: "code" },
      { name: "JavaScript (ES6+)", level: "Advanced", icon: "file-code" },
      { name: "TypeScript", level: "Advanced", icon: "file-code" },
      { name: "Python", level: "Proficient", icon: "terminal" },
      { name: "SQL", level: "Proficient", icon: "database" }
    ],
    frontend: [
      { name: "React.js 18", level: "Advanced", icon: "layout" },
      { name: "Next.js 14/15", level: "Advanced", icon: "globe" },
      { name: "Tailwind CSS", level: "Advanced", icon: "palette" },
      { name: "Redux Toolkit", level: "Proficient", icon: "cpu" },
      { name: "Zustand", level: "Proficient", icon: "box" },
      { name: "HTML5 / CSS3", level: "Advanced", icon: "file" },
      { name: "jQuery", level: "Familiar", icon: "layers" }
    ],
    backend: [
      { name: "Node.js", level: "Advanced", icon: "server" },
      { name: "Express.js", level: "Advanced", icon: "git-branch" },
      { name: "Socket.IO", level: "Advanced", icon: "activity" },
      { name: "RESTful APIs", level: "Advanced", icon: "network" },
      { name: "JWT Auth / OAuth", level: "Advanced", icon: "shield" },
      { name: "Microservices", level: "Proficient", icon: "share-2" }
    ],
    databases: [
      { name: "PostgreSQL", level: "Advanced", icon: "database" },
      { name: "Prisma ORM", level: "Advanced", icon: "hard-drive" },
      { name: "MongoDB", level: "Advanced", icon: "database" },
      { name: "Sequelize", level: "Proficient", icon: "server" },
      { name: "Firebase", level: "Proficient", icon: "flame" }
    ],
    toolsCloud: [
      { name: "AWS (S3, EC2)", level: "Proficient", icon: "cloud" },
      { name: "Docker", level: "Proficient", icon: "container" },
      { name: "Git & GitHub", level: "Advanced", icon: "github" },
      { name: "Inngest", level: "Proficient", icon: "zap" },
      { name: "UploadThing", level: "Proficient", icon: "upload-cloud" },
      { name: "Arcjet Security", level: "Proficient", icon: "shield-check" },
      { name: "Clerk / NextAuth", level: "Advanced", icon: "key" },
      { name: "VS Code", level: "Expert", icon: "monitor" },
      { name: "LaTeX", level: "Proficient", icon: "file-text" }
    ],
    datascience: [
      { name: "NumPy", level: "Proficient", icon: "hash" },
      { name: "Pandas", level: "Proficient", icon: "table" },
      { name: "Matplotlib", level: "Proficient", icon: "bar-chart-2" },
      { name: "Seaborn", level: "Proficient", icon: "pie-chart" }
    ]
  },

  projects: [
    {
      id: "career-wave",
      title: "Career-wave",
      tagline: "Full-Stack Job Portal & Applicant Workflow System",
      category: "fullstack",
      date: "Aug. 2026",
      featured: true,
      github: "https://github.com/kushGupta-15/Career-wave",
      demo: "https://github.com/kushGupta-15/Career-wave",
      imageTag: "Next.js + Prisma + Postgres",
      tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "NextAuth", "Inngest", "UploadThing", "Resend", "Arcjet", "Zod"],
      summary: "Modern job posting and recruitment portal enabling companies to publish verified openings and job seekers to discover, filter, and track applications seamlessly.",
      highlights: [
        "Built with Next.js App Router and TypeScript, leveraging Server Actions for end-to-end type safety and high performance.",
        "Designed a relational PostgreSQL database schema with Prisma ORM, modeling companies, applicants, job tiers, and resumes.",
        "Engineered secure multi-provider authentication (Google & GitHub OAuth) via NextAuth with granular role-based authorization.",
        "Delivered a paid job-posting workflow backed by Inngest-driven expiration scheduling, UploadThing resume handling, Resend email triggers, Zod schema validation, and Arcjet rate-limiting security."
      ]
    },
    {
      id: "sketchbattle",
      title: "SketchBattle",
      tagline: "Multiplayer Real-Time Drawing & Guessing Battle Arena",
      category: "realtime",
      date: "Mar. 2026 – Apr. 2026",
      featured: true,
      github: "https://github.com/kushGupta-15/SketchBattle",
      demo: "https://github.com/kushGupta-15/SketchBattle",
      imageTag: "React 18 + Socket.IO + Canvas",
      tech: ["React 18", "TypeScript", "Node.js", "Express", "Socket.IO", "HTML5 Canvas", "WebRTC", "JWT", "MongoDB"],
      summary: "High-octane Skribbl.io-inspired real-time multiplayer drawing and word-guessing web application with synchronized canvas strokes and interactive audio/video.",
      highlights: [
        "Engineered real-time canvas stroke synchronization across active players using Socket.IO event streaming with sub-50ms latency.",
        "Developed custom HTML5 Canvas drawing engine with brush dynamics, color palettes, thickness adjustments, and instant undo/clear.",
        "Implemented synchronized game loop: timed rounds, progressive word hints, dynamic leaderboard scoring, and reconnection fault-tolerance.",
        "Integrated peer-to-peer WebRTC video/audio chat along with secure JWT authentication across both RESTful endpoints and WebSocket handshakes."
      ]
    },
    {
      id: "streamify",
      title: "Streamify",
      tagline: "Global Language Exchange Platform with Live Video & Chat",
      category: "realtime",
      date: "Apr. 2025 – May 2025",
      featured: true,
      github: "https://github.com/kushGupta-15/Streamify",
      demo: "https://github.com/kushGupta-15/Streamify",
      imageTag: "Stream SDKs + Node.js + MongoDB",
      tech: ["React.js", "JavaScript", "Stream Chat SDK", "Stream Video SDK", "Node.js", "Express", "MongoDB", "Tailwind CSS", "DaisyUI"],
      summary: "A global community platform connecting learners worldwide for language exchange through instant messaging and 1-on-1 video calls.",
      highlights: [
        "Developed RESTful backend with Express and MongoDB featuring robust JWT-secured onboarding, session management, and profile customization.",
        "Engineered an interactive friend-request architecture supporting pending, accepted, and blocked states using MongoDB relational queries.",
        "Integrated Stream Chat and Stream Video SDKs for ultra-low latency interactive communication and peer practice sessions.",
        "Crafted a responsive, customizable theme-enabled UI built with Tailwind CSS and DaisyUI."
      ]
    },
    {
      id: "airline-microservices",
      title: "Airline Microservices Suite",
      tagline: "Distributed Microservices Architecture for Flight Operations",
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
      category: "systems",
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
      title: "750+ DSA Problems Solved",
      subtitle: "LeetCode, GeeksforGeeks & Coding Platforms",
      badge: "Algorithms & CP",
      icon: "code",
      desc: "Demonstrated strong algorithmic problem-solving ability across Graphs, Dynamic Programming, Trees, Heap, Two Pointers, and Advanced Data Structures."
    },
    {
      title: "Dynamic Programming Camp Graduate",
      subtitle: "AlgoUniversity under Codeforces Master Manas Kumar Verma",
      badge: "AlgoUniversity",
      icon: "zap",
      desc: "Completed advanced training focusing on complex DP state transitions, Matrix Exponentiation, Square Root (SQRT) Decomposition, and competitive programming techniques."
    },
    {
      title: "FIDE-Rated Chess Player",
      subtitle: "FIDE ID: 25129937 • International Chess Federation",
      badge: "Official Rating",
      icon: "shield",
      desc: "Active competitor with extensive experience representing in state, national, and international standard chess tournaments. Brings sharp tactical intuition and strategic depth to engineering."
    }
  ]
};

// Export to window
if (typeof window !== 'undefined') {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
