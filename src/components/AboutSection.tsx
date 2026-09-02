import React from 'react';
import { ABOUT_COPY, PERSONAL_INFO } from '../data/portfolioData';
import { NamacoLogo } from './NamacoLogo';
import { HassanPhoto } from './HassanPhoto';
import { Globe, Shield, Terminal, Zap } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-[#0E0E0E] border-b border-neutral-900">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Top Header */}
        <div className="border-b border-neutral-900 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-500 flex items-center gap-2">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              FOUNDER PERSPECTIVE
            </span>
            <h2 className="font-heading font-extrabold text-4xl sm:text-6xl text-white tracking-tight">
              ABOUT HASSAN
            </h2>
          </div>

          {/* Affiliation badge */}
          <div className="flex items-center gap-3 bg-[#121212] border border-neutral-800 px-4 py-2">
            <span className="font-mono text-xs text-neutral-400">UMBRELLA BRAND:</span>
            <NamacoLogo size="sm" variant="light" />
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
              "{ABOUT_COPY.headline}"
            </h3>

            <div className="space-y-6 text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
              {ABOUT_COPY.paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Subtle NAMACO Relationship Statement */}
            <div className="pt-6 border-t border-neutral-800 space-y-3">
              <p className="font-mono text-xs text-neutral-400 uppercase tracking-widest font-bold">
                BRAND AFFILIATION &amp; STRUCTURE
              </p>
              <p className="font-sans text-sm text-neutral-400 leading-relaxed bg-[#121212] border border-neutral-800 p-5">
                "{PERSONAL_INFO.brandStatement}"
              </p>
            </div>
          </div>

          {/* Right Column: Founder Portrait & Values Grid */}
          <div className="lg:col-span-5 space-y-8">
            {/* Hassan Photo Card */}
            <div className="flex justify-center lg:justify-end">
              <HassanPhoto size="lg" />
            </div>

            {/* Principles Box */}
            <div className="bg-[#121212] border border-neutral-800 p-6 space-y-4">
              <p className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest pb-2 border-b border-neutral-800">
                FOUNDATION &amp; ETHOS
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Shield className="w-4 h-4 text-white shrink-0 mt-1" />
                  <div>
                    <p className="font-mono text-xs text-white font-bold">Defensible Execution</p>
                    <p className="font-sans text-xs text-neutral-400 mt-0.5">
                      No inflated metrics or false claims. The code and live platforms speak for themselves.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="w-4 h-4 text-white shrink-0 mt-1" />
                  <div>
                    <p className="font-mono text-xs text-white font-bold">African Tech Ambition</p>
                    <p className="font-sans text-xs text-neutral-400 mt-0.5">
                      Building infrastructure and digital products from Nigeria capable of scaling globally.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Zap className="w-4 h-4 text-white shrink-0 mt-1" />
                  <div>
                    <p className="font-mono text-xs text-white font-bold">End-to-End Ownership</p>
                    <p className="font-sans text-xs text-neutral-400 mt-0.5">
                      Working fluently across ideation, design, coding, database logic, and deployment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
