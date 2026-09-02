/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Positioning } from './components/Positioning';
import { SelectedWork } from './components/SelectedWork';
import { AboutSection } from './components/AboutSection';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { TechnologySection } from './components/TechnologySection';
import { HowIBuildSection } from './components/HowIBuildSection';
import { ProofOfWorkSection } from './components/ProofOfWorkSection';
import { CurrentlyBuildingSection } from './components/CurrentlyBuildingSection';
import { ContactSection } from './components/ContactSection';
import { FooterSection } from './components/FooterSection';
import { CaseStudyModal } from './components/CaseStudyModal';
import { Project } from './types';
import { SELECTED_PROJECTS } from './data/portfolioData';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedCaseStudyProject, setSelectedCaseStudyProject] = useState<Project | null>(null);

  // ScrollSpy observer
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'work', 'about', 'capabilities', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E5E5E5] font-sans selection:bg-white selection:text-black">
      {/* Sticky Refined Header Navigation */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          onExploreWork={() => handleNavigate('work')}
          onConnect={() => handleNavigate('contact')}
        />

        {/* Editorial Positioning Transition */}
        <Positioning />

        {/* Selected Work & Case Studies Grid */}
        <SelectedWork
          onOpenCaseStudy={(proj) => setSelectedCaseStudyProject(proj)}
        />

        {/* Currently Building Feature Spotlight */}
        <CurrentlyBuildingSection />

        {/* Editorial About Section */}
        <AboutSection />

        {/* What I Build Capabilities */}
        <CapabilitiesSection />

        {/* How I Build Methodology */}
        <HowIBuildSection />

        {/* Deployed Technology Stack */}
        <TechnologySection />

        {/* Proof of Work Logic Snippets */}
        <ProofOfWorkSection />

        {/* Direct Contact & Collaboration Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <FooterSection onNavigate={handleNavigate} />

      {/* Case Study Deep-Dive Modal */}
      <CaseStudyModal
        project={selectedCaseStudyProject}
        onClose={() => setSelectedCaseStudyProject(null)}
      />
    </div>
  );
}
