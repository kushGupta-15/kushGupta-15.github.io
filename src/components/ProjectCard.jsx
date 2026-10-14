import React from 'react';
import { ExternalLink, Layers, ArrowRight } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectCard({ project, onSelect }) {
  return (
    <article className="group flex flex-col justify-between p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-card-hover transition-all duration-200">
      
      {/* Top Meta */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs text-slate-500">
          <span className="font-mono text-[11px] uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-semibold">
            {project.category}
          </span>
          <span>{project.date}</span>
        </div>

        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
            {project.tagline}
          </p>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
          {project.summary}
        </p>
      </div>

      {/* Tech Stack Badges */}
      <div className="pt-5 mt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-4">
        <div className="flex flex-wrap gap-1.5">
          {project.tech.slice(0, 5).map((t, i) => (
            <span
              key={i}
              className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 5 && (
            <span className="px-1.5 py-0.5 text-[11px] font-medium text-slate-400">
              +{project.tech.length - 5}
            </span>
          )}
        </div>

        {/* Action Links */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-3 text-xs font-semibold">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors"
                title="View Source on GitHub"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Code</span>
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                title="View Live Demo"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Demo</span>
              </a>
            )}
          </div>

          <button
            onClick={() => onSelect(project)}
            className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            title="Read architecture overview"
          >
            <span>Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

    </article>
  );
}
