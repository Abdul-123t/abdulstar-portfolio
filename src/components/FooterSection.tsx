import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { NamacoLogo } from './NamacoLogo';
import { Mail, Phone, Instagram, Linkedin, ArrowUp, MessageSquare } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const FooterSection: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0A0A] border-t border-neutral-900 py-16 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 items-start pb-12 border-b border-neutral-900">
          {/* Identity Column */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="font-heading font-extrabold text-xl text-white tracking-wider">
              {PERSONAL_INFO.fullName}
            </h3>
            <p className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
              {PERSONAL_INFO.role}
            </p>
            <div className="pt-2">
              <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest block mb-2">
                BUILDING UNDER:
              </span>
              <NamacoLogo size="sm" variant="light" />
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
              NAVIGATION
            </span>
            <ul className="space-y-2 font-mono text-xs uppercase tracking-wider">
              {['work', 'about', 'capabilities', 'contact'].map((id) => (
                <li key={id}>
                  <button
                    onClick={() => onNavigate(id)}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {id.toUpperCase()}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact Column */}
          <div className="md:col-span-4 space-y-3">
            <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
              DIRECT REACH
            </span>
            <div className="space-y-2 font-mono text-xs text-neutral-400">
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-neutral-500" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-white transition-colors">
                  {PERSONAL_INFO.email}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-neutral-500" />
                <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:text-white transition-colors">
                  {PERSONAL_INFO.phone} (Call)
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-500" />
                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 font-bold hover:underline transition-colors"
                >
                  WhatsApp ({PERSONAL_INFO.phone})
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Linkedin className="w-3.5 h-3.5 text-neutral-500" />
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {PERSONAL_INFO.linkedin}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Instagram className="w-3.5 h-3.5 text-neutral-500" />
                <a
                  href={PERSONAL_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {PERSONAL_INFO.instagram}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-neutral-500">
          <p>© 2026 Hassan Abdulsatar Olamide. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors uppercase tracking-widest"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
