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
          <div className="flex items-center gap-1.5 sm:gap-2 bg-[#121212] p-1.5 border border-neutral-800 self-stretch sm:self-start md:self-auto overflow-x-auto max-w-full pb-2 sm:pb-1.5">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`font-mono text-[11px] sm:text-xs tracking-wider uppercase px-3 sm:px-3.5 py-1.5 sm:py-2 whitespace-nowrap transition-all duration-200 shrink-0 ${
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
                  CLIENT DIGITAL SETUP
                </span>
              </div>
              <h3 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                CLIENT &amp; BUSINESS WORK
              </h3>
              <p className="font-sans text-sm sm:text-base text-neutral-400 leading-relaxed font-light">
                Google Business Profile setup and digital presence work carried out for local businesses — helping them get found on Google Maps and establish a stronger online footprint.
              </p>
            </div>

            {/* Business Work Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {CLIENT_BUSINESS_WORK.map((biz) => (
                <div
                  key={biz.id}
                  className="bg-[#121212] border border-neutral-800/90 p-6 flex flex-col justify-between space-y-6 hover:border-neutral-600 transition-colors group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-wider bg-black/60 px-2 py-0.5 border border-neutral-800 flex items-center gap-1.5">
                        <MapPin className="w-2.5 h-2.5 text-neutral-500 shrink-0" />
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

                  <div className="space-y-3">
                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1">
                      {biz.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className={`font-mono text-[9px] px-2 py-0.5 ${
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
                    <div className="pt-3 border-t border-neutral-800/80 flex flex-wrap items-center gap-2">
                      {/* Google Profile Button — primary CTA */}
                      {biz.googleProfileUrl && (
                        <a
                          href={biz.googleProfileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          id={`google-profile-${biz.id}`}
                          className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-neutral-500 text-white font-mono text-[10px] font-bold uppercase tracking-wider transition-all duration-200 group/btn"
                        >
                          <MapPin className="w-3 h-3 text-blue-400 shrink-0" />
                          <span>View Google Profile</span>
                          <ExternalLink className="w-2.5 h-2.5 opacity-60 group-hover/btn:opacity-100 transition-opacity" />
                        </a>
                      )}

                      {/* Website link — secondary CTA for businesses that also have a site */}
                      {biz.liveUrl && (
                        <a
                          href={biz.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          id={`website-${biz.id}`}
                          className="inline-flex items-center gap-1 px-3 py-2 border border-neutral-800 hover:border-neutral-600 text-neutral-400 hover:text-white font-mono text-[10px] font-bold uppercase tracking-wider transition-all duration-200"
                          title="Visit website"
                        >
                          <Globe className="w-3 h-3" />
                          <span>Site</span>
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

