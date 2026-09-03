import React from 'react';
import { POSITIONING_COPY } from '../data/portfolioData';
import { Layers, Terminal, Layout, Rocket, Cpu } from 'lucide-react';

export const Positioning: React.FC = () => {
  const pillars = [
    { icon: Layers, label: '01. PRODUCT THINKING', desc: 'Framing problems & scope' },
    { icon: Layout, label: '02. INTERFACE DESIGN', desc: 'High-contrast editorial UI' },
    { icon: Terminal, label: '03. FRONTEND ENGINEERING', desc: 'Responsive React & Vite' },
    { icon: Cpu, label: '04. BACKEND & DATA', desc: 'APIs, Auth, PostgreSQL' },
    { icon: Rocket, label: '05. DEPLOYMENT', desc: 'Vercel, Netlify, Edge' },
  ];

  return (
    <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-[#0E0E0E] border-b border-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Editorial Text */}
          <div className="lg:col-span-7 space-y-6">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-500 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
              CORE METHODOLOGY
            </span>

            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.05] text-balance">
              {POSITIONING_COPY.headline}
            </h2>

            <p className="font-sans text-lg sm:text-xl text-neutral-400 font-light leading-relaxed max-w-2xl">
              {POSITIONING_COPY.body}
            </p>
          </div>

          {/* Visual Pillars Grid */}
          <div className="lg:col-span-5 bg-[#0A0A0A] border border-neutral-800 p-6 sm:p-8 space-y-4">
            <p className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest pb-2 border-b border-neutral-800">
              FULL PRODUCT SPECTRUM
            </p>

            <div className="space-y-3">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="flex flex-col xs:flex-row items-start xs:items-center justify-between gap-1 xs:gap-3 p-3 bg-[#121212] border border-neutral-800/80 hover:border-neutral-600 transition-colors group"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <Icon className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors shrink-0" />
                      <span className="font-mono text-xs text-neutral-200 font-bold tracking-wider truncate">
                        {pillar.label}
                      </span>
                    </div>
                    <span className="font-mono text-[10px] text-neutral-500 shrink-0">
                      {pillar.desc}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
