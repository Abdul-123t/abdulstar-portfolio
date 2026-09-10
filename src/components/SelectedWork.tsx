import React, { useState } from 'react';
import { Project, FilterCategory } from '../types';
import { SELECTED_PROJECTS } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';

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
    <section id="work" className="py-16 sm:py-20 lg:py-28 px-4 sm:px-8 lg:px-12 bg-[#0A0A0A] border-b border-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 w-full">
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8 pb-6 sm:pb-8 border-b border-neutral-900">
          <div className="space-y-3 sm:space-y-4">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-500 flex items-center gap-2">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              PORTFOLIO EVIDENCE
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              SELECTED WORK
            </h2>
            <p className="font-sans text-sm sm:text-lg text-neutral-400 font-light leading-relaxed">
              A collection of products, platforms, experiments, and digital experiences I've built.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex items-center gap-1.5 bg-[#121212] p-1 sm:p-1.5 border border-neutral-800 overflow-x-auto -mx-1 px-1 sm:mx-0 sm:px-1.5">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`font-mono text-[10px] sm:text-xs tracking-wider uppercase px-2.5 sm:px-3.5 py-1.5 sm:py-2 whitespace-nowrap transition-all duration-200 shrink-0 ${
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenCaseStudy={onOpenCaseStudy}
            />
          ))}
        </div>


      </div>
    </section>
  );
};

