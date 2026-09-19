import React from 'react';
import {
  Code2,
  Github,
  Mail,
  Heart,
  Terminal,
  MapPin,
  FileText,
  Lock,
  Cpu,
  ArrowUp,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { SupportedLanguage } from '../types';
import { TRANSLATIONS } from '../utils/translations';

interface FooterProps {
  currentLang: SupportedLanguage;
  isDarkMode: boolean;
  onOpenCommandPalette: () => void;
  onOpenPrintCV: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentLang,
  isDarkMode,
  onOpenCommandPalette,
  onOpenPrintCV,
}) => {
  const t = TRANSLATIONS[currentLang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={`border-t py-12 transition-colors ${
        isDarkMode
          ? 'bg-slate-950 border-slate-800 text-slate-400'
          : 'bg-slate-50 border-slate-200 text-slate-600'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10 text-left">
          {/* Col 1: Brand & Monogram */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-700 via-indigo-600 to-cyan-500 text-white font-mono font-bold text-base shadow-md">
                ML
              </div>
              <div>
                <span
                  className={`font-display font-bold text-base block ${
                    isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  Mihai Lungu
                </span>
                <span className="text-xs text-purple-400 font-mono">
                  Software Developer & Information Analyst
                </span>
              </div>
            </div>

            <p className="text-xs leading-relaxed max-w-md">
              Information Analyst Assistant at Vladimir Andrunachievici Institute of Mathematics & Computer Science. Specialized in C#/.NET engineering, scientific publishing architectures (CSJM), and applied cryptography.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono">
              <MapPin className="w-3.5 h-3.5 text-purple-400" />
              <span>Chișinău, Republic of Moldova</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-2.5">
            <h4
              className={`font-mono text-xs font-bold uppercase tracking-wider ${
                isDarkMode ? 'text-slate-200' : 'text-slate-900'
              }`}
            >
              Explore
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#about" className="hover:text-purple-400 transition-colors">
                  {t.navAbout}
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-purple-400 transition-colors">
                  {t.navExperience}
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-purple-400 transition-colors">
                  {t.navSkills}
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-purple-400 transition-colors">
                  {t.navProjects}
                </a>
              </li>
              <li>
                <a href="#crypto-lab" className="hover:text-purple-400 transition-colors">
                  {t.navCryptoLab}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Tools & Terminal */}
          <div className="space-y-2.5">
            <h4
              className={`font-mono text-xs font-bold uppercase tracking-wider ${
                isDarkMode ? 'text-slate-200' : 'text-slate-900'
              }`}
            >
              Developer Tools
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={onOpenCommandPalette}
                  className="flex items-center gap-1.5 hover:text-purple-400 transition-colors"
                >
                  <Terminal className="w-3.5 h-3.5 text-purple-400" />
                  <span>Developer CLI (Ctrl+K)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenPrintCV}
                  className="flex items-center gap-1.5 hover:text-purple-400 transition-colors"
                >
                  <FileText className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Print-Ready CV</span>
                </button>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 hover:text-purple-400 transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-emerald-400" />
                  <span>GitHub @lungumihai03</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-1.5 hover:text-purple-400 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-rose-400" />
                  <span>Direct Email</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Mihai Lungu. Crafted with precision for high-performance software engineering.</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-slate-900 text-purple-400 border border-slate-800">
              Stack: C# • .NET • React • Tailwind
            </span>
            <button
              onClick={scrollToTop}
              className={`p-2 rounded-lg border transition-colors ${
                isDarkMode
                  ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
                  : 'bg-white border-slate-200 text-slate-700 hover:text-slate-950 hover:bg-slate-100'
              }`}
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
