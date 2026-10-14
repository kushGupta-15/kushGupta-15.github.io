import React from 'react';
import { ArrowUp, Download } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Footer() {
  const { profile } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 py-12 text-xs text-slate-500 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left: Branding */}
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-md bg-slate-900 dark:bg-white text-white dark:text-slate-950 flex items-center justify-center font-bold text-[10px]">
            KG
          </div>
          <span className="font-semibold text-slate-900 dark:text-white">Kush Gupta</span>
          <span>•</span>
          <span>Full Stack Software Engineer</span>
        </div>

        {/* Center: Navigation / Links */}
        <div className="flex items-center gap-6">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={profile.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            LeetCode
          </a>
          <a
            href={profile.resumeUrl}
            download="Kush_Gupta_Resume.pdf"
            className="hover:text-slate-900 dark:hover:text-white transition-colors inline-flex items-center gap-1 font-medium"
          >
            <Download className="w-3 h-3" />
            <span>Resume (PDF)</span>
          </a>
        </div>

        {/* Right: Back to Top */}
        <div className="flex items-center gap-4">
          <span>© 2026 Kush Gupta</span>
          <button
            onClick={scrollToTop}
            className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-850 transition-colors cursor-pointer"
            title="Back to top"
            aria-label="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
