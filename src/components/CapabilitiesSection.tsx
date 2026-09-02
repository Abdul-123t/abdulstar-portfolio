import React from 'react';
import { CAPABILITIES } from '../data/portfolioData';
import { Layout, Server, Layers, FlaskConical, Cpu, CheckCircle2 } from 'lucide-react';

export const CapabilitiesSection: React.FC = () => {
  const capabilityIcons = [Layout, Server, Cpu, Layers, FlaskConical];

  return (
    <section id="capabilities" className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-[#0A0A0A] border-b border-neutral-900">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="space-y-4 max-w-2xl border-b border-neutral-900 pb-8">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-500 flex items-center gap-2">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            TECHNICAL &amp; PRODUCT SCOPE
          </span>
          <h2 className="font-heading font-extrabold text-4xl sm:text-6xl text-white tracking-tight">
            WHAT I BUILD
          </h2>
          <p className="font-sans text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
            Five core capabilities that turn abstract ideas into production-ready software.
          </p>
        </div>

        {/* 5 Capabilities Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CAPABILITIES.map((cap, index) => {
            const Icon = capabilityIcons[index % capabilityIcons.length];
            return (
              <div
                key={cap.id}
                className="bg-[#121212] border border-neutral-800 p-8 flex flex-col justify-between space-y-6 hover:border-neutral-500 transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-black bg-white px-2.5 py-1">
                      0{index + 1}
                    </span>
                    <Icon className="w-6 h-6 text-neutral-400 group-hover:text-white transition-colors" />
                  </div>

                  <div>
                    <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                      {cap.tagline}
                    </span>
                    <h3 className="font-heading font-extrabold text-2xl text-white tracking-wide mt-1">
                      {cap.title}
                    </h3>
                  </div>

                  <p className="font-sans text-sm text-neutral-300 font-light leading-relaxed">
                    "{cap.description}"
                  </p>
                </div>

                <div className="pt-6 border-t border-neutral-800 space-y-3">
                  <p className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                    CORE SKILLSETS
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {cap.skills.map((sk, i) => (
                      <span
                        key={i}
                        className="font-mono text-[10px] text-neutral-300 bg-[#0A0A0A] border border-neutral-800 px-2.5 py-1"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
