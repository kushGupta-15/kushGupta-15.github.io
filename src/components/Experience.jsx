import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Experience() {
  const { education, achievements } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-20 border-b border-slate-200 dark:border-slate-800/80 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-2">
          <h2 className="text-xs font-bold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase">
            Trajectory
          </h2>
          <p className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            Education & Technical Milestones
          </p>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl">
            Academic achievements at IIIT Una and competitive algorithmic milestones.
          </p>
        </div>

        {/* 1. Education Timeline */}
        <div className="space-y-6">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span>Academic Background</span>
          </h3>

          <div className="relative pl-6 sm:pl-8 border-l border-slate-200 dark:border-slate-800 space-y-8">
            {education.map((edu, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline Node */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-white dark:border-slate-950 bg-indigo-600 dark:bg-indigo-400" />

                <div className="p-5 sm:p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-2.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                    <span className="font-semibold text-indigo-600 dark:text-indigo-400 text-xs sm:text-sm">
                      {edu.degree}
                    </span>
                    <span className="flex items-center gap-1.5 text-slate-500 font-mono text-[11px]">
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.period}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <span className="font-semibold text-slate-900 dark:text-white">{edu.institution}</span>
                    <span>•</span>
                    <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-medium text-slate-700 dark:text-slate-300">
                      Score: {edu.score}
                    </span>
                  </div>

                  <ul className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                    {edu.highlights.map((h, i) => (
                      <li key={i} className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Technical Milestones & Honors */}
        <div className="space-y-6">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
            <Award className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span>Competitive Milestones & Leadership</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {achievements.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="inline-flex px-2 py-0.5 rounded text-[11px] font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-400 border border-indigo-200/50 dark:border-indigo-800/50">
                    {item.badge}
                  </div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="text-[11px] font-mono text-slate-500 pt-2 border-t border-slate-100 dark:border-slate-800">
                  {item.metric}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
