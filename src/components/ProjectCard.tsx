import React from 'react';
import { Project } from '../types';
import { ExternalLink, FileText, ArrowUpRight, Layers, ShieldCheck, Database, Server } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenCaseStudy }) => {
  return (
    <div className="group bg-[#121212] border border-neutral-800 hover:border-neutral-500 transition-all duration-300 flex flex-col justify-between overflow-hidden">
      {/* Visual Header / Mockup Representation */}
      <div className="relative w-full aspect-[16/10] bg-[#0A0A0A] border-b border-neutral-800 overflow-hidden flex flex-col">
        {/* Browser Mockup Top Bar */}
        <div className="w-full bg-[#181818] border-b border-neutral-800 px-4 py-2.5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-neutral-700"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-neutral-700"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-neutral-700"></span>
          </div>
          <div className="font-mono text-[10px] text-neutral-400 bg-[#0A0A0A] px-2.5 sm:px-3 py-0.5 rounded border border-neutral-800 truncate max-w-[120px] sm:max-w-[200px]">
            {project.liveUrl.replace('https://', '')}
          </div>
          <span className="font-mono text-[10px] text-neutral-500 font-bold">
            {project.year}
          </span>
        </div>

        {/* Mockup Canvas / Interface Details */}
        <div className="flex-1 p-4 sm:p-6 flex flex-col justify-between relative bg-editorial-grid">
          <div className="flex items-center justify-between z-10">
            <span className="font-mono text-xs text-white font-bold tracking-widest bg-neutral-900/90 border border-neutral-700 px-2.5 py-1">
              NO. {project.number}
            </span>
            {project.mockupDetails?.badge && (
              <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest border border-neutral-800 px-2 py-0.5 bg-black/60 truncate max-w-[150px] sm:max-w-none">
                {project.mockupDetails.badge}
              </span>
            )}
          </div>

          {/* Project Interface Feature Mockup Box */}
          <div className="my-auto py-4 z-10">
            <div className="bg-[#121212]/95 border border-neutral-800 p-3.5 sm:p-4 space-y-3 backdrop-blur-sm group-hover:border-neutral-600 transition-colors">
              <div className="flex items-center justify-between">
                <span className="font-heading font-extrabold text-lg sm:text-xl text-white tracking-wider">
                  {project.name}
                </span>
                <span className="font-mono text-[10px] text-neutral-500 uppercase">
                  {project.category.split('·')[0]}
                </span>
              </div>

              {project.mockupDetails?.features && (
                <ul className="space-y-1.5 border-t border-neutral-800/80 pt-2.5">
                  {project.mockupDetails.features.slice(0, 3).map((feat, i) => (
                    <li key={i} className="font-mono text-[11px] text-neutral-400 flex items-center gap-2">
                      <span className="w-1 h-1 bg-white rounded-full shrink-0"></span>
                      <span className="truncate">{feat}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Bottom Badges */}
          <div className="flex items-center justify-between z-10 gap-2">
            <div className="flex flex-wrap gap-1.5 overflow-hidden max-h-7">
              {project.technologies.slice(0, 3).map((tech, i) => (
                <span key={i} className="font-mono text-[9px] text-neutral-400 bg-neutral-900 border border-neutral-800 px-2 py-0.5">
                  {tech}
                </span>
              ))}
            </div>
            {project.caseStudy && (
              <span className="font-mono text-[10px] text-emerald-400 flex items-center gap-1 shrink-0">
                <FileText className="w-3 h-3" />
                <span className="hidden sm:inline">CASE STUDY READY</span>
                <span className="sm:hidden">READY</span>
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Details Body */}
      <div className="p-5 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-widest text-neutral-500">
                {project.category}
              </span>
              <h3 className="font-heading font-extrabold text-xl sm:text-3xl text-white tracking-tight mt-1">
                {project.name}
              </h3>
            </div>
            <span className="font-mono text-sm text-neutral-600 font-bold shrink-0">
              {project.number}
            </span>
          </div>

          <p className="font-sans text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
            "{project.description}"
          </p>
        </div>

        {/* Action CTAs */}
        <div className="pt-4 border-t border-neutral-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center justify-center sm:justify-start gap-2 font-mono text-xs font-bold text-white uppercase tracking-widest hover:text-neutral-300 transition-colors py-2"
          >
            <span>VIEW PROJECT</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </a>

          {project.caseStudy && (
            <button
              onClick={() => onOpenCaseStudy(project)}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:py-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-white font-mono text-xs font-semibold uppercase tracking-wider transition-colors w-full sm:w-auto"
            >
              <FileText className="w-3.5 h-3.5 text-neutral-400" />
              <span>CASE STUDY</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
