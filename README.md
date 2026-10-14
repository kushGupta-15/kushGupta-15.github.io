# Kush Gupta — Minimalist Developer Portfolio ⚡

A modern, restrained, and enterprise-grade developer portfolio website for **Kush Gupta** — Full Stack Software Engineer and Computer Science undergraduate at **IIIT Una** (Knight on LeetCode with 1861 Contest Rating, 750+ DSA Problems Solved, and FIDE-Rated Chess Player).

Built using **React, Vite, and Tailwind CSS**, adhering strictly to the **60-30-10 design system** with clean typography, precise whitespace, and high readability.

---

## 🎨 Design & Styling System (60-30-10 Rule)

- **60% Base Canvas**: Crisp off-white (`bg-slate-50`) as default light theme, with seamless toggle to deep slate (`bg-slate-950`).
- **30% Structure & Surfaces**: Pure white cards (`bg-white` / `bg-slate-900`) with hairline borders (`border-slate-200` / `border-slate-800`), muted secondary labels (`text-slate-600`), and dark high-contrast headings.
- **10% Focused Accent**: Deep professional indigo (`indigo-600`) for interactive states, focused badges, and micro-interactions.
- **Zero Cheap Fluff**: No heavy particle canvases, distracting icon walls, or gratuitous gradients.

---

## 🛠️ Tech Stack & Architecture

- **Core**: React 18, Vite 6, Tailwind CSS 3
- **Icons**: Lucide React + custom SVGs
- **Typography**: Inter & JetBrains Mono (Google Fonts)
- **Deployment**: Automated GitHub Pages deployment via GitHub Actions (`.github/workflows/deploy.yml`)

---

## 📂 Project Structure

```
kush-gupta-portfolio/
├── public/
│   └── Kush_Gupta_Resume.pdf      # Exact 2-page LaTeX PDF (SHA256 verified)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx             # Minimalist sticky header with theme toggle & resume link
│   │   ├── Hero.jsx               # High-contrast headline, bio, verified metrics & dual CTAs
│   │   ├── About.jsx              # Engineering narrative, location & core pillars
│   │   ├── Projects.jsx           # 3-column clean grid with category filter
│   │   ├── ProjectCard.jsx        # Project card with tech badges, code/demo links
│   │   ├── ProjectModal.jsx       # In-depth architectural accomplishments modal
│   │   ├── Skills.jsx             # Minimalist structured category blocks
│   │   ├── Experience.jsx         # Vertical education timeline & competitive honors
│   │   ├── Contact.jsx            # One-click email copy, inquiry form & social links
│   │   ├── Footer.jsx             # Restrained footer with back-to-top action
│   │   └── Icons.jsx              # Custom SVGs for GitHub, LinkedIn, LeetCode
│   ├── data/
│   │   └── portfolioData.js       # Verified structured data (Profile, Projects, Skills)
│   ├── App.jsx                    # Root app component with theme management
│   ├── main.jsx                   # Vite React entry point
│   └── index.css                  # Tailwind directives and clean typography rules
├── .github/
│   └── workflows/deploy.yml       # Automated GitHub Pages CI/CD pipeline
├── index.html                     # HTML root template with Inter font and SEO tags
├── vite.config.js                 # Vite configuration (React plugin, base: './')
├── tailwind.config.js             # Tailwind typography and theme configuration
└── package.json                   # Project dependencies and build scripts
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Build for Production
```bash
npm run build
```
Generates an optimized static bundle in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Live Website

The portfolio is deployed live on GitHub Pages:  
👉 **[https://kushgupta-15.github.io](https://kushgupta-15.github.io)**
