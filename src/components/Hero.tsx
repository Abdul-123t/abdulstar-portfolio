import React from 'react';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { NamacoLogo } from './NamacoLogo';

interface HeroProps {
  onExploreWork: () => void;
  onConnect: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onConnect }) => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col justify-between pt-24 sm:pt-28 pb-8 sm:pb-12 px-4 sm:px-8 lg:px-12 border-b border-neutral-900 bg-editorial-grid overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] sm:w-[600px] h-[200px] sm:h-[300px] bg-white/[0.015] blur-3xl rounded-full pointer-events-none" />

      {/* Top Metadata Row */}
      <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 pb-6 sm:pb-8 border-b border-neutral-900/80">
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping shrink-0"></span>
          <span className="font-mono text-[10px] sm:text-xs tracking-widest text-neutral-400 uppercase">
            AVAILABLE FOR PRODUCTS &amp; VENTURES
          </span>
        </div>

        {/* Brand affiliation badge */}
        <div className="flex items-center gap-2 sm:gap-3 bg-neutral-900/80 border border-neutral-800 px-2.5 sm:px-3.5 py-1.5 rounded-full self-start sm:self-auto">
          <span className="font-mono text-[10px] sm:text-[11px] text-neutral-400 tracking-wider">
            {PERSONAL_INFO.brandAffiliation}
          </span>
          <span className="w-1 h-1 rounded-full bg-neutral-600 shrink-0"></span>
          <NamacoLogo size="sm" showSubtitle={false} variant="light" />
        </div>
      </div>

      {/* Main Editorial Hero Content */}
      <div className="relative z-10 max-w-7xl w-full mx-auto my-auto py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-end">
          <div className="lg:col-span-8 space-y-4 sm:space-y-6 min-w-0">
            {/* Small Descriptor */}
            <div className="inline-block">
              <span className="font-mono text-[10px] sm:text-sm font-semibold tracking-[0.2em] sm:tracking-[0.25em] text-neutral-400 uppercase border-l-2 border-white pl-2.5 sm:pl-3">
                {PERSONAL_INFO.role}
              </span>
            </div>

            {/* Oversized Name Header */}
            <h1 className="font-heading font-extrabold text-[1.6rem] leading-[1] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-white uppercase text-balance break-words">
              HASSAN ABDULSATAR <br className="hidden sm:inline" />
              <span className="text-neutral-400"> OLAMIDE</span>
            </h1>

            {/* Primary Headline */}
            <p className="font-heading font-medium text-base sm:text-2xl lg:text-4xl text-neutral-200 tracking-tight leading-snug pt-1 sm:pt-2">
              "{PERSONAL_INFO.headline}"
            </p>

            {/* Supporting Copy */}
            <p className="font-sans text-xs sm:text-base lg:text-lg text-neutral-400 leading-relaxed font-normal">
              {PERSONAL_INFO.supportingCopy}
            </p>

            {/* CTAs */}
            <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-6">
              <button
                onClick={onExploreWork}
                className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 px-5 py-3 sm:px-8 sm:py-4 bg-white text-black font-mono text-[10px] sm:text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:bg-neutral-200 active:scale-95 shadow-lg w-full sm:w-auto"
              >
                <span>VIEW SELECTED WORK</span>
                <ArrowDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-y-1" />
              </button>

              <button
                onClick={onConnect}
                className="group inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-8 sm:py-4 bg-transparent border border-neutral-700 text-white font-mono text-[10px] sm:text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:border-white hover:bg-white/5 active:scale-95 w-full sm:w-auto"
              >
                <span>LET'S CONNECT</span>
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>

          {/* Right Column Stats / Key Focus Badge */}
          <div className="lg:col-span-4 lg:pl-6 border-t lg:border-t-0 lg:border-l border-neutral-800 pt-6 sm:pt-8 lg:pt-0 space-y-4 sm:space-y-6 min-w-0">
            <div className="bg-[#121212] border border-neutral-800 p-4 sm:p-6 space-y-3 sm:space-y-4 overflow-hidden">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-2 sm:pb-3 gap-2">
                <span className="font-mono text-[9px] sm:text-[10px] text-neutral-500 uppercase tracking-widest">
                  CURRENT VENTURE FOCUS
                </span>
                <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-neutral-400 shrink-0" />
              </div>

              <div className="min-w-0">
                <h3 className="font-heading font-bold text-lg sm:text-xl text-white tracking-wider">
                  VEYRA
                </h3>
                <p className="font-mono text-[10px] sm:text-xs text-neutral-400 mt-1">
                  Team formation platform for ambitious young builders.
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between text-[10px] sm:text-xs font-mono text-neutral-500 gap-2">
                <span>STAGE: ACTIVE BUILD</span>
                <a
                  href="https://vetra-waitlist-azure.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline flex items-center gap-1 font-semibold shrink-0"
                >
                  LIVE SITE <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 text-left">
              <div className="border border-neutral-800 p-3 sm:p-4 bg-[#0E0E0E] overflow-hidden">
                <p className="font-mono text-[9px] sm:text-[10px] text-neutral-500 uppercase tracking-widest">
                  LOCATION
                </p>
                <p className="font-heading font-bold text-xs sm:text-sm text-white mt-1">
                  NIGERIA · GLOBAL
                </p>
              </div>
              <div className="border border-neutral-800 p-3 sm:p-4 bg-[#0E0E0E] overflow-hidden">
                <p className="font-mono text-[9px] sm:text-[10px] text-neutral-500 uppercase tracking-widest">
                  SPECTRUM
                </p>
                <p className="font-heading font-bold text-xs sm:text-sm text-white mt-1">
                  IDEA → PROD
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Line / Scroll Prompt */}
      <div className="relative z-10 max-w-7xl w-full mx-auto pt-6 sm:pt-8 border-t border-neutral-900 flex items-center justify-between text-neutral-500 font-mono text-[9px] sm:text-[11px] tracking-widest uppercase gap-2">
        <span className="hidden sm:inline">01 / CONCEPT TO IMPLEMENTATION</span>
        <span className="text-neutral-400 truncate">SERIOUS PRODUCTS · DEFENSIBLE CODE</span>
        <button
          onClick={onExploreWork}
          className="hover:text-white transition-colors flex items-center gap-1 sm:gap-2 shrink-0"
        >
          <span className="hidden sm:inline">SCROLL TO WORK</span>
          <span className="sm:hidden">WORK</span>
          <ArrowDown className="w-3 h-3 sm:w-3.5 sm:h-3.5 animate-bounce" />
        </button>
      </div>
    </section>
  );
};
