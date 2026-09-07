import React, { useState } from 'react';
import { Project, FilterCategory } from '../types';
import { SELECTED_PROJECTS, CLIENT_BUSINESS_WORK } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { ExternalLink, Filter, Building2, CheckCircle2, MapPin, Globe } from 'lucide-react';

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

        {/* Client & Business Work Section */}
        {(activeFilter === 'ALL' || activeFilter === 'CLIENT WORK') && (
          <div className="pt-12 sm:pt-16 border-t border-neutral-900 space-y-8 sm:space-y-12">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 border border-neutral-800">
                <Building2 className="w-3.5 h-3.5 text-neutral-400" />
                <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
                  CLIENT DIGITAL SETUP
                </span>
              </div>
              <h3 className="font-heading font-extrabold text-2xl sm:text-4xl text-white tracking-tight">
                CLIENT &amp; BUSINESS WORK
              </h3>
              <p className="font-sans text-xs sm:text-base text-neutral-400 leading-relaxed font-light">
                Google Business Profile setup and digital presence work carried out for local businesses — helping them get found on Google Maps and establish a stronger online footprint.
              </p>
            </div>

            {/* Business Work Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {CLIENT_BUSINESS_WORK.map((biz) => (
                <div
                  key={biz.id}
                  className="bg-[#121212] border border-neutral-800/90 p-4 sm:p-6 flex flex-col justify-between space-y-5 sm:space-y-6 hover:border-neutral-600 transition-colors group overflow-hidden"
                >
                  <div className="space-y-2.5 sm:space-y-3 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-[9px] sm:text-[10px] text-neutral-500 uppercase tracking-wider bg-black/60 px-1.5 sm:px-2 py-0.5 border border-neutral-800 flex items-center gap-1 sm:gap-1.5 truncate min-w-0">
                        <MapPin className="w-2.5 h-2.5 text-neutral-500 shrink-0" />
                        <span className="truncate">{biz.category}</span>
                      </span>
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-neutral-500 shrink-0" />
                    </div>

                    <h4 className="font-heading font-bold text-base sm:text-xl text-white tracking-wide group-hover:text-neutral-200 break-words">
                      {biz.name}
                    </h4>

                    <div className="border-l-2 border-neutral-700 pl-2.5 sm:pl-3 py-1">
                      <p className="font-mono text-[10px] sm:text-xs text-neutral-300 font-semibold">
                        Role: {biz.contribution}
                      </p>
                    </div>

                    <p className="font-sans text-[11px] sm:text-xs text-neutral-400 leading-relaxed font-light">
                      {biz.description}
                    </p>
                  </div>

                  <div className="space-y-2.5 sm:space-y-3 min-w-0">
                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1">
                      {biz.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className={`font-mono text-[8px] sm:text-[9px] px-1.5 sm:px-2 py-0.5 ${
                            t === 'Google Business Profile'
                              ? 'text-blue-400 bg-blue-950/40 border border-blue-800/50'
                              : 'text-neutral-500 bg-neutral-900'
                          }`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-2.5 sm:pt-3 border-t border-neutral-800/80 flex flex-col gap-2">
                      {/* Google Profile Button — primary CTA */}
                      {biz.googleProfileUrl && (
                        <a
                          href={biz.googleProfileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          id={`google-profile-${biz.id}`}
                          className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2.5 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-neutral-500 text-white font-mono text-[10px] font-bold uppercase tracking-wider transition-all duration-200"
                        >
                          <MapPin className="w-3 h-3 text-blue-400 shrink-0" />
                          <span>View Google Profile</span>
                          <ExternalLink className="w-2.5 h-2.5 opacity-60 shrink-0" />
                        </a>
                      )}

                      {/* Website link — secondary CTA */}
                      {biz.liveUrl && (
                        <a
                          href={biz.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          id={`website-${biz.id}`}
                          className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2.5 border border-neutral-800 hover:border-neutral-600 text-neutral-300 hover:text-white font-mono text-[10px] font-bold uppercase tracking-wider transition-all duration-200"
                          title="Visit website"
                        >
                          <Globe className="w-3 h-3 text-neutral-400 shrink-0" />
                          <span>Visit Website</span>
                          <ExternalLink className="w-2.5 h-2.5 opacity-60 shrink-0" />
                        </a>
                      )}

                      {/* Fallback if no links at all */}
                      {!biz.googleProfileUrl && !biz.liveUrl && (
                        <span className="font-mono text-[9px] text-neutral-600 uppercase">
                          BUSINESS CLIENT
                        </span>
                      )}
                    </div>
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

