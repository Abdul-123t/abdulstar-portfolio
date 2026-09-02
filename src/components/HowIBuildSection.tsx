import React from 'react';
import { HOW_I_BUILD_STEPS } from '../data/portfolioData';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const HowIBuildSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-[#0A0A0A] border-b border-neutral-900">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="space-y-4 max-w-2xl border-b border-neutral-900 pb-8">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-500 flex items-center gap-2">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            SYSTEMATIC LIFECYCLE
          </span>
          <h2 className="font-heading font-extrabold text-4xl sm:text-6xl text-white tracking-tight">
            HOW I BUILD
          </h2>
          <p className="font-sans text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
            A disciplined 5-step engineering process that takes ideas beyond simple code writing into structured digital products.
          </p>
        </div>

        {/* 5 Sequential Steps Layout */}
        <div className="space-y-6">
          {HOW_I_BUILD_STEPS.map((step, idx) => (
            <div
              key={step.number}
              className="bg-[#121212] border border-neutral-800 p-6 sm:p-8 hover:border-neutral-500 transition-all duration-300 grid grid-cols-1 md:grid-cols-12 gap-6 items-center group"
            >
              {/* Step Number & Title */}
              <div className="md:col-span-4 flex items-center gap-4">
                <span className="font-mono text-2xl font-extrabold text-black bg-white px-3 py-1">
                  {step.number}
                </span>
                <div>
                  <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                    PHASE 0{idx + 1}
                  </span>
                  <h3 className="font-heading font-extrabold text-2xl text-white tracking-wider">
                    {step.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <div className="md:col-span-5">
                <p className="font-sans text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                  "{step.description}"
                </p>
              </div>

              {/* Deliverables Badges */}
              <div className="md:col-span-3 flex flex-wrap gap-1.5 justify-start md:justify-end">
                {step.deliverables.map((deliv, i) => (
                  <span
                    key={i}
                    className="font-mono text-[10px] text-neutral-400 bg-[#0A0A0A] border border-neutral-800 px-2.5 py-1"
                  >
                    {deliv}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
