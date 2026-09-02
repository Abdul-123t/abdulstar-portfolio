import React from 'react';
import { TECH_STACK } from '../data/portfolioData';
import { Code2, Cpu, Wrench } from 'lucide-react';

export const TechnologySection: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 px-6 sm:px-8 lg:px-12 bg-[#0E0E0E] border-b border-neutral-900">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-900 pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-500 flex items-center gap-2">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              VERIFIED TOOLING
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
              TECHNOLOGY STACK
            </h2>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
              Technologies active across Hassan's deployed platforms, web applications, and client work.
            </p>
          </div>

          <div className="bg-[#121212] border border-neutral-800 p-3 self-start md:self-auto">
            <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest flex items-center gap-2">
              <Wrench className="w-3.5 h-3.5 text-white" />
              100% FACTUAL &amp; DEPLOYED
            </span>
          </div>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3">
          {TECH_STACK.map((tech, idx) => (
            <div
              key={idx}
              className="bg-[#121212] border border-neutral-800 p-4 flex flex-col justify-between hover:border-neutral-500 transition-colors group"
            >
              <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest">
                {tech.category}
              </span>
              <p className="font-mono text-xs sm:text-sm font-bold text-white tracking-wider mt-3 group-hover:text-neutral-200">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
