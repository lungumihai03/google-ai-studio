import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CryptoPlayground } from './components/CryptoPlayground';
import { PublicationsSection } from './components/PublicationsSection';
import { HardwareSection } from './components/HardwareSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CommandPaletteModal } from './components/CommandPaletteModal';
import { PrintCVModal } from './components/PrintCVModal';
import { SupportedLanguage } from './types';

export default function App() {
  const [currentLang, setCurrentLang] = useState<SupportedLanguage>('en');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState<boolean>(false);
  const [isPrintCVOpen, setIsPrintCVOpen] = useState<boolean>(false);
  const [activeCipherPreset, setActiveCipherPreset] = useState<string>('markovski');

  // Handle global keyboard shortcuts (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleOpenCipherDemo = (cipherType: string) => {
    setActiveCipherPreset(cipherType);
    const target = document.querySelector('#crypto-lab');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigate = (sectionId: string) => {
    const target = document.querySelector(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-200 ${
        isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* Top Fixed Header */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        isDarkMode={isDarkMode}
        onToggleDarkMode={() => setIsDarkMode((prev) => !prev)}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onOpenPrintCV={() => setIsPrintCVOpen(true)}
      />

      {/* Main Portfolio Sections */}
      <main className="no-print">
        <Hero
          currentLang={currentLang}
          isDarkMode={isDarkMode}
          onOpenCryptoLab={() => handleNavigate('#crypto-lab')}
          onOpenPrintCV={() => setIsPrintCVOpen(true)}
        />

        <AboutSection currentLang={currentLang} isDarkMode={isDarkMode} />

        <ExperienceTimeline currentLang={currentLang} isDarkMode={isDarkMode} />

        <SkillsSection currentLang={currentLang} isDarkMode={isDarkMode} />

        <ProjectsSection
          currentLang={currentLang}
          isDarkMode={isDarkMode}
          onOpenCipherDemo={handleOpenCipherDemo}
        />

        <CryptoPlayground
          currentLang={currentLang}
          isDarkMode={isDarkMode}
          activeCipherPreset={activeCipherPreset}
        />

        <PublicationsSection currentLang={currentLang} isDarkMode={isDarkMode} />

        <HardwareSection currentLang={currentLang} isDarkMode={isDarkMode} />

        <ContactSection
          currentLang={currentLang}
          isDarkMode={isDarkMode}
          onOpenPrintCV={() => setIsPrintCVOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        currentLang={currentLang}
        isDarkMode={isDarkMode}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onOpenPrintCV={() => setIsPrintCVOpen(true)}
      />

      {/* Command Palette Terminal Modal */}
      <CommandPaletteModal
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onNavigate={handleNavigate}
        onOpenCryptoDemo={handleOpenCipherDemo}
        isDarkMode={isDarkMode}
      />

      {/* Print-Ready CV Modal */}
      <PrintCVModal
        isOpen={isPrintCVOpen}
        onClose={() => setIsPrintCVOpen(false)}
      />
    </div>
  );
}
