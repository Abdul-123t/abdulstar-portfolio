import React, { useEffect } from 'react';
import { Project } from '../types';
import { X, ExternalLink, ShieldCheck, Database, Server, Layers, Cpu, Code2, ArrowUpRight } from 'lucide-react';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project || !project.caseStudy) return null;

  const cs = project.caseStudy;

  const sections = [
    { num: '01', title: 'OVERVIEW', body: cs.overview },
    { num: '02', title: 'THE PROBLEM', body: cs.problem },
    { num: '03', title: 'PRODUCT VISION', body: cs.productVision },
    { num: '04', title: 'USER EXPERIENCE', body: cs.userExperience },
    { num: '05', title: 'DESIGN', body: cs.design },
    { num: '06', title: 'TECHNICAL ARCHITECTURE', body: cs.technicalArchitecture },
    { num: '07', title: 'AUTHENTICATION', body: cs.authentication },
    { num: '08', title: 'DATABASE SCHEMA', body: cs.database },
    { num: '09', title: 'DEPLOYMENT PIPELINE', body: cs.deployment },
    { num: '10', title: 'CHALLENGES ENCOUNTERED', body: cs.challenges },
    { num: '11', title: 'LESSONS LEARNED', body: cs.lessonsLearned },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-10 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-5xl bg-[#0A0A0A] border border-neutral-700 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Sticky Header */}
        <div className="bg-[#121212] border-b border-neutral-800 px-6 sm:px-8 py-5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs font-bold text-black bg-white px-2.5 py-1">
              CASE STUDY NO. {project.number}
            </span>
            <div>
              <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-white tracking-wider">
                {project.name}
              </h2>
              <p className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest">
                {project.category}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 border border-neutral-700 hover:border-white text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <span>LIVE URL</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onClose}
              className="p-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-neutral-300 hover:text-white transition-colors"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Case Study Body */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-12">
          {/* Top Banner / Truthful Metrics Box */}
          <div className="bg-[#121212] border border-neutral-800 p-6 sm:p-8 space-y-4">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
              <span className="font-mono text-xs text-neutral-400 font-bold uppercase tracking-widest">
                STAGE &amp; DEPLOYMENT STATUS
              </span>
              <span className="font-mono text-xs text-emerald-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                ACTIVE ON VERCEL/NETLIFY
              </span>
            </div>

            <p className="font-mono text-xs text-neutral-300 italic">
              "{cs.metrics || 'Early-stage project focused primarily on product validation and technical execution.'}"
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              <div className="bg-[#0A0A0A] p-3 border border-neutral-800">
                <span className="font-mono text-[9px] text-neutral-500 uppercase">ROLE</span>
                <p className="font-mono text-xs text-white font-bold mt-0.5">{project.role}</p>
              </div>
              <div className="bg-[#0A0A0A] p-3 border border-neutral-800">
                <span className="font-mono text-[9px] text-neutral-500 uppercase">YEAR</span>
                <p className="font-mono text-xs text-white font-bold mt-0.5">{project.year}</p>
              </div>
              <div className="bg-[#0A0A0A] p-3 border border-neutral-800">
                <span className="font-mono text-[9px] text-neutral-500 uppercase">FRONTEND</span>
                <p className="font-mono text-xs text-white font-bold mt-0.5">{project.technologies[0]}</p>
              </div>
              <div className="bg-[#0A0A0A] p-3 border border-neutral-800">
                <span className="font-mono text-[9px] text-neutral-500 uppercase">HOSTING</span>
                <p className="font-mono text-xs text-white font-bold mt-0.5">{project.technologies[project.technologies.length - 1]}</p>
              </div>
            </div>
          </div>

          {/* Architecture Diagram Visualization if available */}
          {cs.architectureDiagram && (
            <div className="bg-[#121212] border border-neutral-800 p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-white" />
                  {cs.architectureDiagram.title}
                </span>
                <span className="font-mono text-[10px] text-neutral-500">SYSTEM FLOW</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                {cs.architectureDiagram.nodes.map((node, i) => (
                  <div key={i} className="bg-[#0A0A0A] border border-neutral-800 p-4 space-y-2">
                    <span className="font-mono text-[10px] text-neutral-500 uppercase">STEP 0{i + 1}</span>
                    <h4 className="font-heading font-bold text-sm text-white">{node.label}</h4>
                    <p className="font-mono text-[11px] text-neutral-400">{node.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 11 Case Study Sections Grid */}
          <div className="space-y-10">
            {sections.map((sec) => (
              <div key={sec.num} className="border-l-2 border-neutral-800 hover:border-white pl-6 space-y-2 transition-colors">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-neutral-500">
                    {sec.num} —
                  </span>
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-white tracking-wider">
                    {sec.title}
                  </h3>
                </div>
                <p className="font-sans text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                  {sec.body}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Live Action Footer */}
          <div className="pt-8 border-t border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="font-mono text-xs text-neutral-400">
                Project verified &amp; hosted directly on public production URL.
              </p>
            </div>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-black font-mono text-xs font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors"
            >
              <span>VISIT LIVE {project.name} PLATFORM</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
