import React from 'react';
import { Code2, Server, Cpu, Award, MapPin, GraduationCap } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function About() {
  const { profile } = PORTFOLIO_DATA;

  const coreFocus = [
    {
      title: "Full-Stack Web Architecture",
      desc: "Architecting modern web applications with Next.js 15 App Router, React 18, TypeScript, and serverless databases (Neon, Prisma).",
      icon: Code2,
    },
    {
      title: "Real-Time & Distributed Systems",
      desc: "Building low-latency sync engines using Socket.IO, WebRTC peer-to-peer streaming, and conflict-free CRDT collaborative workspaces.",
      icon: Server,
    },
    {
      title: "Production AI Integrations",
      desc: "Engineering structured AI pipelines with Google Gemini 3.8 Flash for real-time ATS scoring, bi-directional translation, and conversational tutors.",
      icon: Cpu,
    },
    {
      title: "Algorithms & Competitive Edge",
      desc: "Knight on LeetCode (1861 contest rating) with 750+ solved challenges; FIDE-rated chess player and captain of the IIIT Una chess team.",
      icon: Award,
    },
  ];

  return (
    <section id="about" className="py-20 border-b border-slate-200 dark:border-slate-800/80 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-2">
          <h2 className="text-xs font-bold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase">
            About Me
          </h2>
          <p className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            Engineering robust software with high precision.
          </p>
        </div>

        {/* Narrative & Location */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
            <p>
              I am an undergraduate Computer Science student at the <strong className="text-slate-900 dark:text-slate-200 font-semibold">Indian Institute of Information Technology, Una (IIIT Una)</strong> with a current CGPA of <strong className="text-slate-900 dark:text-slate-200 font-semibold">7.60</strong>.
            </p>
            <p>
              My primary engineering focus centers on building reliable web infrastructure, type-safe RESTful APIs, real-time multiplayer networks, and state-of-the-art generative AI systems. I value clear system abstractions, well-structured schemas, test coverage, and performance profiling.
            </p>
            <p>
              Beyond development, I actively compete in algorithmic coding contests (Knight on LeetCode) and competitive chess as a FIDE-rated player (ID: 25129937), where I captained the university team to 2nd place in the Inter-IIIT tournament.
            </p>
          </div>

          {/* Quick Context Card */}
          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-4">
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">Current Base</div>
                  <div className="text-slate-500 dark:text-slate-400">{profile.location}</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <GraduationCap className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">Education</div>
                  <div className="text-slate-500 dark:text-slate-400">IIIT Una • B.Tech CSE (2023–Present)</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Award className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">Competitive Rank</div>
                  <div className="text-slate-500 dark:text-slate-400">Knight on LeetCode (Rating 1861)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {coreFocus.map((focus, idx) => {
            const Icon = focus.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-2 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center gap-2.5 text-slate-900 dark:text-white font-semibold text-sm">
                  <div className="w-7 h-7 rounded-md bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span>{focus.title}</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pl-9.5">
                  {focus.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
