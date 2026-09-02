import React, { useState } from 'react';
import { Project, FilterCategory } from '../types';
import { SELECTED_PROJECTS, CLIENT_BUSINESS_WORK } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { ExternalLink, Filter, Building2, CheckCircle2 } from 'lucide-react';

interface SelectedWorkProps {
  onOpenCaseStudy: (project: Project) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onOpenCaseStudy }) => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('ALL');

  const filters: FilterCategory[] = ['ALL', 'PRODUCTS', 'CLIENT WORK', 'WEB APPS', 'EXPERIMENTS'];

  const filteredProjects = SELECTED_PROJECTS.filter((proj) => {
    if (activeFilter === 'ALL') return true;
    return proj.filterCategories.includes(activeFilter);
  });

  return (
    <section id="work" className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-[#0A0A0A] border-b border-neutral-900">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 border-b border-neutral-900">
          <div className="space-y-4 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-500 flex items-center gap-2">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              PORTFOLIO EVIDENCE
            </span>
            <h2 className="font-heading font-extrabold text-4xl sm:text-6xl text-white tracking-tight">
              SELECTED WORK
            </h2>
            <p className="font-sans text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
              A collection of products, platforms, experiments, and digital experiences I've built.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center gap-2 bg-[#121212] p-1.5 border border-neutral-800 self-start md:self-auto">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`font-mono text-xs tracking-wider uppercase px-3.5 py-2 transition-all duration-200 ${
                  activeFilter === filter
                    ? 'bg-white text-black font-bold shadow-sm'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Major Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenCaseStudy={onOpenCaseStudy}
            />
          ))}
        </div>

        {/* Client & Business Work Section */}
        {(activeFilter === 'ALL' || activeFilter === 'CLIENT WORK') && (
          <div className="pt-16 border-t border-neutral-900 space-y-12">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 border border-neutral-800">
                <Building2 className="w-3.5 h-3.5 text-neutral-400" />
                <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
                  COMMERCIAL EXPERIENCE
                </span>
              </div>
              <h3 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                CLIENT &amp; BUSINESS WORK
              </h3>
              <p className="font-sans text-sm sm:text-base text-neutral-400 leading-relaxed font-light">
                Digital experiences and technology work created to help businesses establish a stronger presence online.
              </p>
            </div>

            {/* Business Work Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CLIENT_BUSINESS_WORK.map((biz) => (
                <div
                  key={biz.id}
                  className="bg-[#121212] border border-neutral-800/90 p-6 flex flex-col justify-between space-y-6 hover:border-neutral-600 transition-colors group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-wider bg-black/60 px-2 py-0.5 border border-neutral-800">
                        {biz.category}
                      </span>
                      <CheckCircle2 className="w-4 h-4 text-neutral-500" />
                    </div>

                    <h4 className="font-heading font-bold text-xl text-white tracking-wide group-hover:text-neutral-200">
                      {biz.name}
                    </h4>

                    <div className="border-l-2 border-neutral-700 pl-3 py-1">
                      <p className="font-mono text-xs text-neutral-300 font-semibold">
                        Role: {biz.contribution}
                      </p>
                    </div>

                    <p className="font-sans text-xs text-neutral-400 leading-relaxed font-light">
                      {biz.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {biz.tech.map((t, idx) => (
                        <span key={idx} className="font-mono text-[9px] text-neutral-500 bg-neutral-900 px-2 py-0.5">
                          {t}
                        </span>
                      ))}
                    </div>

                    {biz.liveUrl ? (
                      <a
                        href={biz.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-[11px] font-bold text-white uppercase tracking-wider flex items-center gap-1 hover:underline"
                      >
                        <span>VISIT</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="font-mono text-[9px] text-neutral-600 uppercase">
                        BUSINESS CLIENT
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
