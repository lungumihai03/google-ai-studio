import React, { useState, useEffect } from 'react';
import {
  Code2,
  Moon,
  Sun,
  FileText,
  Terminal,
  Menu,
  X,
  Globe,
  Award,
  Layers,
  Cpu,
  Mail,
  Lock,
} from 'lucide-react';
import { SupportedLanguage } from '../types';
import { TRANSLATIONS } from '../utils/translations';

interface NavbarProps {
  currentLang: SupportedLanguage;
  onLanguageChange: (lang: SupportedLanguage) => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenCommandPalette: () => void;
  onOpenPrintCV: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  isDarkMode,
  onToggleDarkMode,
  onOpenCommandPalette,
  onOpenPrintCV,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const t = TRANSLATIONS[currentLang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.navAbout, href: '#about', icon: null },
    { label: t.navExperience, href: '#experience', icon: null },
    { label: t.navSkills, href: '#skills', icon: null },
    { label: t.navProjects, href: '#projects', icon: null },
    { label: t.navCryptoLab, href: '#crypto-lab', icon: Lock },
    { label: t.navPublications, href: '#publications', icon: null },
    { label: t.navHardware, href: '#hardware', icon: Cpu },
    { label: t.navContact, href: '#contact', icon: Mail },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? isDarkMode
            ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20'
            : 'bg-white/85 backdrop-blur-md border-b border-slate-200/80 shadow-md shadow-slate-900/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Monogram */}
        <a
          href="#top"
          onClick={(e) => handleNavClick(e, '#top')}
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-700 via-indigo-600 to-cyan-500 text-white font-mono font-bold text-lg shadow-md shadow-purple-500/20 group-hover:scale-105 transition-transform duration-200">
            <span>ML</span>
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-slate-950"></span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span
                className={`font-display font-bold text-base sm:text-lg tracking-tight ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}
              >
                Mihai Lungu
              </span>
              <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">
                .NET / C#
              </span>
            </div>
            <span
              className={`text-xs ${
                isDarkMode ? 'text-slate-400' : 'text-slate-500'
              }`}
            >
              Chișinău, Moldova
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  isDarkMode
                    ? 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                    : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100'
                }`}
              >
                {Icon && <Icon className="w-3.5 h-3.5 text-purple-400" />}
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Controls (Terminal, Print CV, Theme, Language) */}
        <div className="hidden sm:flex items-center space-x-2">
          {/* Quick Terminal / Command Palette Button */}
          <button
            onClick={onOpenCommandPalette}
            title="Open Command Palette (Ctrl+K)"
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-mono border transition-all ${
              isDarkMode
                ? 'bg-slate-900/90 text-slate-300 border-slate-800 hover:border-purple-500/50 hover:text-white'
                : 'bg-slate-100 text-slate-700 border-slate-300 hover:border-purple-500/50 hover:text-slate-950'
            }`}
          >
            <Terminal className="w-3.5 h-3.5 text-purple-400" />
            <span className="hidden md:inline">CLI</span>
            <kbd className="px-1 py-0.5 text-[10px] rounded bg-slate-800 text-slate-400 border border-slate-700">
              ⌘K
            </kbd>
          </button>

          {/* Export / Print CV Button */}
          <button
            onClick={onOpenPrintCV}
            title="View & Print CV"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
              isDarkMode
                ? 'bg-purple-950/40 text-purple-300 border-purple-800/60 hover:bg-purple-900/50'
                : 'bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100'
            }`}
          >
            <FileText className="w-3.5 h-3.5 text-purple-500" />
            <span>CV</span>
          </button>

          {/* Language Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                isDarkMode
                  ? 'bg-slate-900/90 text-slate-300 border-slate-800 hover:bg-slate-800'
                  : 'bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200'
              }`}
            >
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span className="uppercase font-mono">{currentLang}</span>
            </button>

            {langDropdownOpen && (
              <div
                className={`absolute right-0 mt-2 w-32 rounded-xl shadow-xl border py-1 z-50 animate-in fade-in-50 duration-150 ${
                  isDarkMode
                    ? 'bg-slate-900 border-slate-800 text-slate-200'
                    : 'bg-white border-slate-200 text-slate-800'
                }`}
              >
                {[
                  { code: 'en', label: 'English' },
                  { code: 'ro', label: 'Română' },
                  { code: 'ru', label: 'Русский' },
                ].map((item) => (
                  <button
                    key={item.code}
                    onClick={() => {
                      onLanguageChange(item.code as SupportedLanguage);
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between transition-colors ${
                      currentLang === item.code
                        ? isDarkMode
                          ? 'bg-purple-950/60 text-purple-300 font-semibold'
                          : 'bg-purple-50 text-purple-700 font-semibold'
                        : isDarkMode
                        ? 'hover:bg-slate-800'
                        : 'hover:bg-slate-100'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="text-[10px] uppercase font-mono opacity-60">
                      {item.code}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={onToggleDarkMode}
            aria-label="Toggle Theme"
            className={`p-2 rounded-lg border transition-colors ${
              isDarkMode
                ? 'bg-slate-900/90 text-amber-300 border-slate-800 hover:bg-slate-800'
                : 'bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200'
            }`}
          >
            {isDarkMode ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Mobile Hamburger Menu Toggle */}
        <div className="flex items-center gap-2 sm:hidden">
          <button
            onClick={onToggleDarkMode}
            className={`p-2 rounded-lg border ${
              isDarkMode
                ? 'bg-slate-900 text-amber-300 border-slate-800'
                : 'bg-slate-100 text-slate-700 border-slate-300'
            }`}
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-lg border ${
              isDarkMode
                ? 'bg-slate-900 text-slate-200 border-slate-800'
                : 'bg-slate-100 text-slate-800 border-slate-300'
            }`}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden border-b px-4 py-4 space-y-2 shadow-2xl ${
            isDarkMode
              ? 'bg-slate-950/95 border-slate-800 text-slate-200'
              : 'bg-white/95 border-slate-200 text-slate-900'
          }`}
        >
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-800/40">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-sm rounded-lg hover:bg-purple-600/10 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="flex gap-2">
              <button
                onClick={onOpenCommandPalette}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-900 text-purple-400 border border-slate-800"
              >
                <Terminal className="w-3.5 h-3.5" />
                CLI
              </button>
              <button
                onClick={onOpenPrintCV}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-purple-900/40 text-purple-300 border border-purple-800"
              >
                <FileText className="w-3.5 h-3.5" />
                CV Resume
              </button>
            </div>

            <div className="flex gap-1">
              {(['en', 'ro', 'ru'] as SupportedLanguage[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => onLanguageChange(lang)}
                  className={`px-2 py-1 text-xs uppercase font-mono rounded ${
                    currentLang === lang
                      ? 'bg-purple-600 text-white font-bold'
                      : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
