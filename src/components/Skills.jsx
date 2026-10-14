import React from 'react';
import { Terminal, Layout, Server, Database, Sparkles, Cloud, CheckSquare } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Skills() {
  const { skills } = PORTFOLIO_DATA;

  const categories = [
    {
      title: "Programming Languages",
      icon: Terminal,
      items: skills.languages,
      description: "Core languages for systems, algorithms, and application engineering.",
    },
    {
      title: "Frontend Engineering",
      icon: Layout,
      items: skills.frontend,
      description: "Modern component-driven architectures, SSR, and reactive state stores.",
    },
    {
      title: "Backend & Systems",
      icon: Server,
      items: skills.backend,
      description: "Scalable REST APIs, WebSocket engines, and edge auth pipelines.",
    },
    {
      title: "Databases & Cloud Stores",
      icon: Database,
      items: skills.databases,
      description: "Relational, document, and serverless database integrations with type-safe ORMs.",
    },
    {
      title: "Applied AI & Real-Time",
      icon: Sparkles,
      items: skills.aiRealtime,
      description: "Gemini 3.8 Flash integrations, WebRTC peer media, and CRDT synchronization.",
    },
    {
      title: "Cloud Services & DevOps",
      icon: Cloud,
      items: skills.integrationsCloud,
      description: "Serverless workers, automated deployment workflows, and containerized backends.",
    },
    {
      title: "Testing, CI/CD & Tooling",
      icon: CheckSquare,
      items: skills.testingDevops,
      description: "Automated test runners, GitHub Actions pipelines, and developer environments.",
    },
  ];

  return (
    <section id="skills" className="py-20 border-b border-slate-200 dark:border-slate-800/80 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-2">
          <h2 className="text-xs font-bold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase">
            Technical Stack
          </h2>
          <p className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            Skills & Competencies
          </p>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl">
            Strictly grounded in production application builds, competitive algorithm practice, and verified academic coursework.
          </p>
        </div>

        {/* Structured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-colors flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-2.5 text-slate-900 dark:text-white font-semibold text-sm">
                    <div className="w-7 h-7 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-300">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span>{cat.title}</span>
                  </div>

                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    {cat.description}
                  </p>
                </div>

                {/* Structured Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 mt-3 border-t border-slate-100 dark:border-slate-800">
                  {cat.items.map((item, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-50 dark:bg-slate-850 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700/80 hover:border-slate-300 dark:hover:border-slate-600 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
