import React from 'react';
import {
  User,
  MapPin,
  Calendar,
  Sparkles,
  BookOpen,
  CheckCircle2,
  Globe2,
  Terminal,
  Cpu,
  Shield,
  Layers,
  HeartHandshake,
} from 'lucide-react';
import {
  PERSONAL_INFO,
  LANGUAGES_SPOKEN,
} from '../data/portfolioData';
import { SupportedLanguage } from '../types';
import { TRANSLATIONS } from '../utils/translations';

interface AboutSectionProps {
  currentLang: SupportedLanguage;
  isDarkMode: boolean;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  currentLang,
  isDarkMode,
}) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <section id="about" className="py-16 md:py-24 border-t border-slate-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-3">
            <User className="w-3.5 h-3.5" />
            <span>{t.aboutHeading}</span>
          </div>
          <h2
            className={`font-display text-2xl sm:text-4xl font-extrabold tracking-tight ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            {t.aboutSubheading}
          </h2>
          <p
            className={`mt-3 text-base leading-relaxed ${
              isDarkMode ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            Developer, researcher, and Information Analyst Assistant bridging mathematical
            rigor, desktop software architecture, and scientific publication systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Origin, Bio & Philosophy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Origin & Academic Background Card */}
            <div
              className={`p-6 sm:p-8 rounded-2xl border ${
                isDarkMode
                  ? 'bg-slate-900/70 border-slate-800 text-slate-300'
                  : 'bg-white border-slate-200 text-slate-700'
              }`}
            >
              <h3
                className={`font-display text-xl font-bold mb-4 flex items-center gap-2.5 ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}
              >
                <MapPin className="w-5 h-5 text-purple-400" />
                <span>{t.originStoryTitle}</span>
              </h3>
              <p className="text-sm sm:text-base leading-relaxed mb-4">
                Born in <strong className="text-purple-400">Soroca, Republic of Moldova</strong> on{' '}
                <span className="font-mono text-purple-300">22 November 2003</span>, I currently
                live, study, and engineer software in <strong className="text-purple-400">Chișinău</strong>.
                My passion for programming emerged early through algorithms, mathematical structures,
                and low-level system understanding.
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                After completing my Bachelor's degree in Computer Science at{' '}
                <strong className="text-purple-400">
                  Ion Creangă State Pedagogical University (2025)
                </strong>{' '}
                with honors (creating a full-featured C# / WinUI 3 Human Resources and Payroll system for my thesis),
                I advanced to Master's studies in Educational IT (group <code className="px-1.5 py-0.5 rounded bg-purple-950 text-purple-300 text-xs font-mono">FMTI_TII_ME251F</code>)
                while serving as an Information Analyst Assistant at the{' '}
                <strong className="text-purple-400">
                  Vladimir Andrunachievici Institute of Mathematics and Computer Science
                </strong>.
              </p>
            </div>

            {/* Engineering Philosophy Card */}
            <div
              className={`p-6 sm:p-8 rounded-2xl border ${
                isDarkMode
                  ? 'bg-slate-900/70 border-slate-800 text-slate-300'
                  : 'bg-white border-slate-200 text-slate-700'
              }`}
            >
              <h3
                className={`font-display text-xl font-bold mb-4 flex items-center gap-2.5 ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}
              >
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span>{t.philosophyTitle}</span>
              </h3>
              <p className="text-sm sm:text-base leading-relaxed mb-4">
                {t.philosophyText}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div
                  className={`flex items-start gap-2.5 p-3 rounded-xl border ${
                    isDarkMode
                      ? 'bg-slate-950/60 border-slate-800'
                      : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <div className="text-xs">
                    <span className="font-semibold block text-slate-200">
                      C# & .NET Specialization
                    </span>
                    <span className="text-slate-400">
                      Strong preference for type safety, LINQ, WinUI 3, and .NET performance.
                    </span>
                  </div>
                </div>

                <div
                  className={`flex items-start gap-2.5 p-3 rounded-xl border ${
                    isDarkMode
                      ? 'bg-slate-950/60 border-slate-800'
                      : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                  <div className="text-xs">
                    <span className="font-semibold block text-slate-200">
                      Mathematical Foundations
                    </span>
                    <span className="text-slate-400">
                      Quasigroup isotopes, modular arithmetic, RSA, and combinatorial optimization.
                    </span>
                  </div>
                </div>

                <div
                  className={`flex items-start gap-2.5 p-3 rounded-xl border ${
                    isDarkMode
                      ? 'bg-slate-950/60 border-slate-800'
                      : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                  <div className="text-xs">
                    <span className="font-semibold block text-slate-200">
                      Scientific Publishing (CSJM)
                    </span>
                    <span className="text-slate-400">
                      Deep domain knowledge in journal lifecycles, peer review, and validation.
                    </span>
                  </div>
                </div>

                <div
                  className={`flex items-start gap-2.5 p-3 rounded-xl border ${
                    isDarkMode
                      ? 'bg-slate-950/60 border-slate-800'
                      : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                  <div className="text-xs">
                    <span className="font-semibold block text-slate-200">
                      Hardware & Optimization
                    </span>
                    <span className="text-slate-400">
                      Deep interest in BIOS, cooling, VRAM offloading, and local LLMs (GGUF).
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Details & Language Proficiency */}
          <div className="lg:col-span-5 space-y-6 text-left">
            {/* Quick Profile Summary Card */}
            <div
              className={`p-6 rounded-2xl border ${
                isDarkMode
                  ? 'bg-slate-900/70 border-slate-800 text-slate-300'
                  : 'bg-white border-slate-200 text-slate-700'
              }`}
            >
              <h3
                className={`font-display text-lg font-bold mb-4 flex items-center gap-2 ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}
              >
                <BookOpen className="w-4 h-4 text-purple-400" />
                <span>Personal & Professional Profile</span>
              </h3>

              <dl className="divide-y divide-slate-800/60 text-xs sm:text-sm">
                <div className="py-2.5 flex justify-between items-center">
                  <dt className="text-slate-400">Full Name</dt>
                  <dd className="font-semibold text-slate-200">Mihai Lungu (Mihai)</dd>
                </div>
                <div className="py-2.5 flex justify-between items-center">
                  <dt className="text-slate-400">Date of Birth</dt>
                  <dd className="font-mono text-purple-300">22 November 2003</dd>
                </div>
                <div className="py-2.5 flex justify-between items-center">
                  <dt className="text-slate-400">Origin / City</dt>
                  <dd className="text-slate-200">Soroca → Chișinău, Moldova</dd>
                </div>
                <div className="py-2.5 flex justify-between items-center">
                  <dt className="text-slate-400">Primary Role</dt>
                  <dd className="text-slate-200">Information Analyst Assistant</dd>
                </div>
                <div className="py-2.5 flex justify-between items-center">
                  <dt className="text-slate-400">Institute</dt>
                  <dd className="text-purple-300 font-medium">Vladimir Andrunachievici IMCS</dd>
                </div>
                <div className="py-2.5 flex justify-between items-center">
                  <dt className="text-slate-400">University</dt>
                  <dd className="text-slate-200">Ion Creangă Pedagogical Univ. (FMTI)</dd>
                </div>
                <div className="py-2.5 flex justify-between items-center">
                  <dt className="text-slate-400">Primary Stack</dt>
                  <dd className="font-mono text-cyan-300">C# / .NET / WinUI 3 / SQL</dd>
                </div>
                <div className="py-2.5 flex justify-between items-center">
                  <dt className="text-slate-400">Primary Hardware</dt>
                  <dd className="text-slate-300">ASUS ROG Strix G15 (RTX 3050)</dd>
                </div>
              </dl>
            </div>

            {/* Language Proficiencies */}
            <div
              className={`p-6 rounded-2xl border ${
                isDarkMode
                  ? 'bg-slate-900/70 border-slate-800 text-slate-300'
                  : 'bg-white border-slate-200 text-slate-700'
              }`}
            >
              <h3
                className={`font-display text-lg font-bold mb-4 flex items-center gap-2 ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}
              >
                <Globe2 className="w-4 h-4 text-cyan-400" />
                <span>{t.languagesHeading}</span>
              </h3>

              <div className="space-y-4">
                {LANGUAGES_SPOKEN.map((lang) => (
                  <div key={lang.code} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-slate-200">
                          {lang.name}
                        </span>
                        <span className="text-slate-400 font-mono text-xs">
                          ({lang.nativeName})
                        </span>
                      </div>
                      <span className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-purple-500/10 text-purple-400 border border-purple-500/20">
                        {lang.cefr} — {lang.level}
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ${
                          lang.code === 'ro'
                            ? 'bg-gradient-to-r from-purple-500 to-indigo-500'
                            : lang.code === 'ru'
                            ? 'bg-gradient-to-r from-indigo-500 to-cyan-500'
                            : 'bg-gradient-to-r from-cyan-500 to-emerald-500'
                        }`}
                        style={{ width: `${lang.percentage}%` }}
                      ></div>
                    </div>

                    <p className="text-[11px] text-slate-400 leading-tight">
                      {lang.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
