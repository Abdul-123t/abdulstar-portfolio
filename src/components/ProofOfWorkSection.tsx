import React, { useState } from 'react';
import { PROOF_OF_WORK_ITEMS } from '../data/portfolioData';
import { Code2, Terminal, Check, Copy, ExternalLink, ShieldAlert } from 'lucide-react';

export const ProofOfWorkSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const activeItem = PROOF_OF_WORK_ITEMS[activeTab];

  const handleCopyCode = () => {
    if (activeItem?.snippet?.code) {
      navigator.clipboard.writeText(activeItem.snippet.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className="py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-[#0E0E0E] border-b border-neutral-900">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-900 pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-500 flex items-center gap-2">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              VERIFIABLE EVIDENCE
            </span>
            <h2 className="font-heading font-extrabold text-4xl sm:text-6xl text-white tracking-tight">
              PROOF OF WORK
            </h2>
            <p className="font-sans text-base text-neutral-400 font-light leading-relaxed">
              Real code snippets, algorithms, and system logic extracted from Hassan's active builds.
            </p>
          </div>

          <div className="bg-[#121212] border border-neutral-800 p-3 self-start md:self-auto">
            <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              MESSAGE: "I BUILD." NOT "I SAY I CAN BUILD."
            </span>
          </div>
        </div>

        {/* Code & Logic Viewer Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Tabs List */}
          <div className="lg:col-span-4 space-y-3">
            {PROOF_OF_WORK_ITEMS.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(idx)}
                className={`w-full text-left p-5 border transition-all duration-200 ${
                  activeTab === idx
                    ? 'bg-[#121212] border-white text-white'
                    : 'bg-[#0A0A0A] border-neutral-800 text-neutral-400 hover:border-neutral-700'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                    {item.type}
                  </span>
                  <span className="font-mono text-[10px] font-bold text-neutral-600">
                    0{idx + 1}
                  </span>
                </div>
                <h4 className="font-heading font-bold text-base text-white tracking-wide">
                  {item.title}
                </h4>
                <p className="font-sans text-xs text-neutral-400 mt-1 line-clamp-2">
                  {item.description}
                </p>
              </button>
            ))}
          </div>

          {/* Right Interactive Code Terminal Window */}
          <div className="lg:col-span-8 bg-[#0A0A0A] border border-neutral-800 font-mono text-xs overflow-hidden flex flex-col">
            {/* Terminal Top Bar */}
            <div className="bg-[#181818] border-b border-neutral-800 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                <span className="ml-2 font-mono text-xs text-neutral-400">
                  {activeItem.snippet?.filename || 'system.ts'}
                </span>
              </div>

              <button
                onClick={handleCopyCode}
                className="flex items-center gap-1.5 px-3 py-1 bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span className="text-[10px] uppercase">{copied ? 'COPIED' : 'COPY'}</span>
              </button>
            </div>

            {/* Code Body */}
            <div className="p-6 overflow-x-auto text-neutral-300 bg-[#0A0A0A] leading-relaxed">
              <pre className="font-mono text-xs text-neutral-200">
                <code>{activeItem.snippet?.code}</code>
              </pre>
            </div>

            {/* Terminal Footer Info */}
            <div className="border-t border-neutral-800 px-6 py-3 bg-[#121212] flex items-center justify-between text-[10px] text-neutral-500">
              <span>LANG: {activeItem.snippet?.language.toUpperCase()}</span>
              <span>VERIFIED FUNCTIONAL LOGIC</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
