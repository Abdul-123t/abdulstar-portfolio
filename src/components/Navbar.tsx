import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { NamacoLogo } from './NamacoLogo';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'work', label: 'WORK' },
    { id: 'about', label: 'ABOUT' },
    { id: 'capabilities', label: 'CAPABILITIES' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Left Branding */}
        <button
          onClick={() => handleNavClick('hero')}
          className="group flex items-center gap-3 text-left focus:outline-none min-w-0"
        >
          <div className="flex flex-col min-w-0">
            <span className="font-heading font-extrabold text-xs sm:text-sm md:text-base tracking-wider text-white group-hover:text-neutral-300 transition-colors truncate">
              HASSAN ABDULSATAR OLAMIDE
            </span>
            <span className="font-mono text-[9px] sm:text-[10px] tracking-widest text-neutral-400 uppercase flex items-center gap-1.5 sm:gap-2 mt-0.5 truncate">
              <span>PRODUCT BUILDER</span>
              <span className="w-1 h-1 rounded-full bg-neutral-600 shrink-0"></span>
              <span className="text-neutral-500 truncate">NAMACO AFFILIATED</span>
            </span>
          </div>
        </button>

        {/* Center Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`font-mono text-xs tracking-widest relative py-1 transition-colors duration-200 uppercase ${
                activeSection === item.id
                  ? 'text-white font-bold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={() => handleNavClick('contact')}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black text-xs font-mono tracking-widest font-bold uppercase transition-all duration-200 hover:bg-neutral-200 active:scale-95"
          >
            <span>LET'S CONNECT</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-white hover:text-neutral-300 focus:outline-none shrink-0"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Editorial Overlay Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] h-[calc(100vh-60px)] bg-[#0A0A0A] z-40 flex flex-col justify-between p-6 sm:p-8 border-t border-neutral-800 animate-in fade-in duration-200 overflow-y-auto">
          <div className="flex flex-col gap-5 pt-4">
            <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-500 mb-1">
              Navigation
            </p>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left font-heading text-xl sm:text-2xl font-bold tracking-wider py-2 uppercase flex items-center justify-between border-b border-neutral-900 ${
                  activeSection === item.id ? 'text-white border-white' : 'text-neutral-400'
                }`}
              >
                <span>{item.label}</span>
                <span className="font-mono text-xs text-neutral-600">0{navItems.indexOf(item) + 1}</span>
              </button>
            ))}
          </div>

          <div className="space-y-6 pt-6 pb-4 border-t border-neutral-800 mt-6">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full py-3.5 bg-white text-black font-mono text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2"
            >
              <span>LET'S CONNECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <div className="pt-2 flex items-center justify-between">
              <NamacoLogo size="sm" variant="light" />
              <span className="font-mono text-[10px] text-neutral-500">NIGERIA · GLOBAL</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
