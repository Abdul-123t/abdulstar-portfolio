import React from 'react';
import { ArrowUpRight, Sparkles, Users, Layers } from 'lucide-react';
import { NamacoLogo } from './NamacoLogo';

export const CurrentlyBuildingSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-[#0A0A0A] border-b border-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#121212] border border-neutral-800 p-8 sm:p-12 lg:p-16 relative overflow-hidden group hover:border-neutral-600 transition-all duration-300">
          {/* Top Label */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-neutral-800">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0A0A0A] border border-neutral-800">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-mono text-xs text-neutral-300 font-bold tracking-widest uppercase">
                CURRENTLY BUILDING
              </span>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs text-neutral-500">
              <span>STAGE: WAITLIST &amp; ACTIVE BUILD</span>
            </div>
          </div>

          {/* Main Showcase Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-10 items-center">
            <div className="lg:col-span-8 space-y-6">
              <h3 className="font-heading font-extrabold text-4xl sm:text-6xl text-white tracking-tight">
                VEYRA
              </h3>

              <p className="font-sans text-xl sm:text-2xl text-neutral-200 font-light leading-relaxed">
                "Exploring better ways for ambitious builders to find the right people, form teams, and build together."
              </p>

              <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
                Continuing to explore product ideas, full-stack systems, and technology ventures under NAMACO.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="https://vetra-waitlist-azure.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-mono text-xs font-bold tracking-widest uppercase hover:bg-neutral-200 transition-colors shadow-lg"
                >
                  <span>JOIN VEYRA WAITLIST</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#0A0A0A] border border-neutral-800 p-6 space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                  VENTURE AFFILIATION
                </span>
                <Sparkles className="w-4 h-4 text-white" />
              </div>

              <div className="space-y-3">
                <NamacoLogo size="md" variant="light" />
                <p className="font-sans text-xs text-neutral-400 leading-relaxed pt-2">
                  Developed under the umbrella identity of NAMACO TECHNOLOGY NIGERIA LIMITED.
                </p>
              </div>

              <div className="pt-2 border-t border-neutral-800/80 font-mono text-[10px] text-neutral-500 flex items-center justify-between">
                <span>EST. 2026</span>
                <span>NIGERIA · GLOBAL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
