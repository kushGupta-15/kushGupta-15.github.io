# Kush Gupta — Portfolio Website ⚡

An aesthetic, responsive, and performance-optimized personal portfolio website engineered for **Kush Gupta** (B.Tech CSE at IIIT Una, Full-Stack Software Engineer, 750+ DSA Problem Solver, and FIDE-Rated Chess Player).

---

## 🌟 Key Features

1. **Modern Visual Aesthetics & Glassmorphism**:
   - Deep slate and indigo/cyan theme with custom CSS design tokens.
   - Interactive **Ambient Canvas** constellation animation responding dynamically to mouse movements.
   - One-click **Dark / Light Theme Toggle** with persistent `localStorage` synchronization.

2. **Hero Section & Dynamic Typing**:
   - Dynamic typing role rotator (*Full-Stack Software Engineer*, *Next.js & TypeScript Developer*, *Real-Time Systems & Socket.IO Builder*, *750+ DSA Competitive Programmer*, *FIDE-Rated Chess Player*).
   - "Seeking Software Engineer Roles" pulsing availability badge.
   - Official GitHub Avatar with glowing gradient ring and floating metric tags.

3. **Live Animated Metrics**:
   - **750+ DSA Solved** (LeetCode & GeeksforGeeks).
   - **21+ Public Repositories** on GitHub.
   - **7.60 CGPA** at IIIT Una.
   - **FIDE ID 25129937** verified chess credentials.

4. **Academic Journey & Coursework**:
   - Detailed timeline: IIIT Una (B.Tech CSE), CBSE Class XII (93.2%), and CBSE Class X (99.0%).
   - Academic coursework grid (System Design, OS, DBMS, Compilers, Computer Networks, Machine Learning, Parallel Processing).

5. **Categorized Skills Matrix**:
   - Languages: C++, JavaScript, TypeScript, Python, SQL.
   - Frontend: React.js 18, Next.js 14/15, Tailwind CSS, Redux, Zustand, HTML5 Canvas.
   - Backend: Node.js, Express.js, Socket.IO, RESTful APIs, JWT Auth, Microservices.
   - Databases: PostgreSQL, MongoDB, Prisma ORM, Sequelize, Firebase.
   - Tools & Cloud: AWS, Docker, Git, Inngest, UploadThing, Arcjet Security, Clerk, VS Code.

6. **Interactive Projects Showcase**:
   - Filterable tabs: *All*, *Full-Stack / Next.js*, *Real-Time & Sockets*, *Distributed Systems & AI*, *Extensions & Tools*.
   - Featured projects:
     - **Career-wave**: Next.js 14, TypeScript, Prisma, PostgreSQL, NextAuth, Inngest, Arcjet, UploadThing, Resend, Zod.
     - **SketchBattle**: React 18, TypeScript, Node.js, Express, Socket.IO, HTML5 Canvas, WebRTC P2P Video Chat, JWT.
     - **Streamify**: React, Express, MongoDB, Stream Chat & Video SDKs, Tailwind CSS, DaisyUI.
     - **Airline Microservices Suite**: API Gateway, Flight Search, Auth, Booking, and Notification services.
     - **GFG Sync Extension**: Chrome extension (Manifest V3) auto-syncing solutions to GitHub.
     - **Self-Corrective RAG Assistant**: AI retrieval pipeline with self-reflection and hallucination filtering.
   - **Deep Dive Modal**: Detailed technical breakdown for every project with direct GitHub repository links.

7. **Competitive Programming & FIDE Chess Spotlight**:
   - 750+ DSA highlight + AlgoUniversity Dynamic Programming Camp completion under Codeforces Master Manas Kumar Verma (Matrix Exponentiation, SQRT Decomposition).
   - Interactive Mini Chessboard Easter Egg with Kush's FIDE Federation link (ID: 25129937).

8. **Contact Form & Printable Resume Modal**:
   - One-click copy buttons for Email (`kushg1517@gmail.com`) and Phone (`+91-9625832097`).
   - Working contact message form triggering prefilled client email.
   - Full-screen Resume viewer with `@media print` CSS for generating clean PDF exports.

---

## 🚀 How to Run Locally

### Option 1: Direct File Open (Zero Dependencies)
Simply navigate to this folder and double-click `index.html` to open it directly in any modern browser (Chrome, Edge, Firefox, Brave, Safari).

### Option 2: Local HTTP Server (Recommended)
Using Node.js:
```bash
# Using npx serve:
npx serve .

# Or using Python:
python -m http.server 3000
```
Open `http://localhost:3000` in your browser.

---

## 🌐 How to Deploy to GitHub Pages (`kushGupta-15.github.io`)

Because this project is built with zero-build static assets (semantic HTML5, modern vanilla JavaScript, Tailwind CSS & Lucide icons via CDN), it can be deployed to GitHub Pages in 2 minutes:

1. Create a new GitHub repository named `kushGupta-15.github.io` (or push to an existing portfolio repo).
2. Push all files inside this directory to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Kush Gupta portfolio website"
   git branch -M main
   git remote add origin https://github.com/kushGupta-15/kushGupta-15.github.io.git
   git push -u origin main
   ```
3. In GitHub Settings -> **Pages**:
   - Set Source to `Deploy from a branch` -> `main` / `/(root)` -> Save.
4. Your website will be live at:
   **`https://kushGupta-15.github.io`**

---

## 📁 File Structure
```
kush-gupta-portfolio/
├── index.html          # Semantic HTML5 layout with all sections and modals
├── styles.css          # Design system, glassmorphism, animations, print stylesheet
├── script.js           # Theme toggle, canvas particles, counters, filters, modals
├── resume-data.js      # Centralized structured data object for profile & projects
├── package.json        # NPM scripts for local development
└── README.md           # Documentation & deployment instructions
```
