import React from 'react';
import {
  Code2,
  Terminal,
  Lock,
  ArrowRight,
  Github,
  Mail,
  FileText,
  Sparkles,
  MapPin,
  Building2,
  GraduationCap,
  ShieldCheck,
} from 'lucide-react';
import { PERSONAL_INFO, ACHIEVEMENTS } from '../data/portfolioData';
import { SupportedLanguage } from '../types';
import { TRANSLATIONS } from '../utils/translations';

interface HeroProps {
  currentLang: SupportedLanguage;
  isDarkMode: boolean;
  onOpenCryptoLab: () => void;
  onOpenPrintCV: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  currentLang,
  isDarkMode,
  onOpenCryptoLab,
  onOpenPrintCV,
}) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <section
      id="top"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
    >
      {/* Background Decorative Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl" />
        <div className="absolute top-48 right-10 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 left-1/3 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Bio & Core Pitch */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono bg-purple-500/10 text-purple-400 border border-purple-500/25 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>{t.statusBadge}</span>
              <span className="text-slate-500">|</span>
              <span className="flex items-center gap-1 text-slate-300">
                <MapPin className="w-3 h-3 text-purple-400" />
                Chișinău, Moldova
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-mono text-sm tracking-wider uppercase text-purple-400 font-semibold">
                <Code2 className="w-4 h-4" />
                <span>Mihai Lungu — Software Developer</span>
              </div>
              <h1
                className={`font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}
              >
                Engineering{' '}
                <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
                  C# / .NET Solutions
                </span>{' '}
                & Cryptographic Systems.
              </h1>
            </div>

            {/* Paragraph Bio */}
            <p
              className={`text-base sm:text-lg leading-relaxed max-w-2xl ${
                isDarkMode ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              Information Analyst Assistant at the{' '}
              <strong className="font-semibold text-purple-400">
                Vladimir Andrunachievici Institute of Mathematics and Computer Science
              </strong>
              , working on the CSJM scientific publishing ecosystem. Master's
              student in Educational IT (FMTI). Specialized in modern C#, WinUI 3,
              relational databases, and algebraic quasigroup ciphers.
            </p>

            {/* Key Metadata Badges */}
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              <div
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border ${
                  isDarkMode
                    ? 'bg-slate-900/80 border-slate-800 text-slate-300'
                    : 'bg-slate-100 border-slate-300 text-slate-700'
                }`}
              >
                <Building2 className="w-3.5 h-3.5 text-purple-400" />
                <span>Institute of Math & CS (CSJM)</span>
              </div>
              <div
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border ${
                  isDarkMode
                    ? 'bg-slate-900/80 border-slate-800 text-slate-300'
                    : 'bg-slate-100 border-slate-300 text-slate-700'
                }`}
              >
                <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                <span>Master's Candidate (FMTI_TII_ME251F)</span>
              </div>
              <div
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border ${
                  isDarkMode
                    ? 'bg-slate-900/80 border-slate-800 text-slate-300'
                    : 'bg-slate-100 border-slate-300 text-slate-700'
                }`}
              >
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>DigiEduHack 2025 1st Place</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-medium text-sm shadow-lg shadow-purple-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>{t.exploreProjects}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenCryptoLab}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium border transition-all hover:scale-[1.02] ${
                  isDarkMode
                    ? 'bg-slate-900/90 text-purple-300 border-purple-900/50 hover:bg-purple-950/40'
                    : 'bg-purple-50 text-purple-800 border-purple-200 hover:bg-purple-100'
                }`}
              >
                <Lock className="w-4 h-4 text-purple-400" />
                <span>{t.openCryptoLab}</span>
              </button>

              <button
                onClick={onOpenPrintCV}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium border transition-colors ${
                  isDarkMode
                    ? 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800 hover:text-white'
                    : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                }`}
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>{t.viewCV}</span>
              </button>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className={`p-3 rounded-xl border transition-colors ${
                  isDarkMode
                    ? 'bg-slate-900 text-slate-300 border-slate-800 hover:text-white hover:border-slate-700'
                    : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                }`}
                title="GitHub @lungumihai03"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className={`p-3 rounded-xl border transition-colors ${
                  isDarkMode
                    ? 'bg-slate-900 text-slate-300 border-slate-800 hover:text-white hover:border-slate-700'
                    : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                }`}
                title="Email Mihai Lungu"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive C# Code Editor Preview */}
          <div className="lg:col-span-5">
            <div
              className={`rounded-2xl border shadow-2xl overflow-hidden backdrop-blur-xl transition-all ${
                isDarkMode
                  ? 'bg-slate-900/90 border-slate-800 shadow-purple-950/30'
                  : 'bg-white/95 border-slate-200 shadow-slate-900/10'
              }`}
            >
              {/* Window Header */}
              <div
                className={`flex items-center justify-between px-4 py-3 border-b ${
                  isDarkMode
                    ? 'bg-slate-950/60 border-slate-800 text-slate-400'
                    : 'bg-slate-100 border-slate-200 text-slate-600'
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="ml-2 font-mono text-xs text-slate-400">
                    MihaiLungu.cs — C# 12 / .NET 9
                  </span>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  Release
                </span>
              </div>

              {/* Code Content with C# Syntax Highlighting */}
              <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto text-left">
                <pre className="text-slate-300">
                  <span className="text-purple-400">namespace</span>{' '}
                  <span className="text-cyan-300">Institute.Cryptography</span>;
                  {'\n\n'}
                  <span className="text-slate-500">/// &lt;summary&gt;</span>
                  {'\n'}
                  <span className="text-slate-500">
                    /// Developed by Mihai Lungu (Chișinău, Moldova)
                  </span>
                  {'\n'}
                  <span className="text-slate-500">/// &lt;/summary&gt;</span>
                  {'\n'}
                  <span className="text-purple-400">public sealed record</span>{' '}
                  <span className="text-amber-300">DeveloperProfile</span>
                  {'\n'}&#123;
                  {'\n'}  <span className="text-purple-400">public string</span>{' '}
                  Name &#123; <span className="text-purple-400">get</span>; &#125; ={' '}
                  <span className="text-emerald-300">"Mihai Lungu"</span>;
                  {'\n'}  <span className="text-purple-400">public string</span>{' '}
                  PrimaryLanguage &#123; <span className="text-purple-400">get</span>; &#125; ={' '}
                  <span className="text-emerald-300">"C#"</span>;
                  {'\n'}  <span className="text-purple-400">public string</span>{' '}
                  Ecosystem &#123; <span className="text-purple-400">get</span>; &#125; ={' '}
                  <span className="text-emerald-300">".NET 8/9 / WinUI 3"</span>;
                  {'\n'}  <span className="text-purple-400">public string</span>{' '}
                  Role &#123; <span className="text-purple-400">get</span>; &#125; ={' '}
                  <span className="text-emerald-300">"Information Analyst (CSJM)"</span>;
                  {'\n'}&#125;;
                  {'\n\n'}
                  <span className="text-purple-400">public class</span>{' '}
                  <span className="text-amber-300">MarkovskiQuasigroupCipher</span>
                  {'\n'}&#123;
                  {'\n'}  <span className="text-purple-400">public byte</span>[]{' '}
                  <span className="text-blue-300">Transform</span>(
                  <span className="text-purple-400">ReadOnlySpan</span>&lt;
                  <span className="text-purple-400">byte</span>&gt; plaintext,{' '}
                  <span className="text-purple-400">byte</span> leader)
                  {'\n'}  &#123;
                  {'\n'}    <span className="text-purple-400">byte</span> prev = leader;
                  {'\n'}    <span className="text-purple-400">var</span> result ={' '}
                  <span className="text-purple-400">new byte</span>[plaintext.Length];
                  {'\n'}    <span className="text-purple-400">for</span> (
                  <span className="text-purple-400">int</span> i = 0; i &lt; plaintext.Length; i++)
                  {'\n'}    &#123;
                  {'\n'}      result[i] = (<span className="text-purple-400">byte</span>)((3 * prev + 7 * plaintext[i] + 5) % 26);
                  {'\n'}      prev = result[i]; <span className="text-slate-500">// Diffusion</span>
                  {'\n'}    &#125;
                  {'\n'}    <span className="text-purple-400">return</span> result;
                  {'\n'}  &#125;
                  {'\n'}&#125;
                </pre>
              </div>

              {/* Status Footer */}
              <div
                className={`flex items-center justify-between px-4 py-2 text-[11px] font-mono border-t ${
                  isDarkMode
                    ? 'bg-slate-950/80 border-slate-800 text-slate-400'
                    : 'bg-slate-100 border-slate-200 text-slate-600'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>Build Succeeded (0 Errors, 0 Warnings)</span>
                </div>
                <span>ASUS ROG Strix G15</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 sm:mt-16">
          <div
            className={`p-5 rounded-2xl border transition-all ${
              isDarkMode
                ? 'bg-slate-900/60 border-slate-800/80 hover:border-purple-500/40'
                : 'bg-white border-slate-200 hover:border-purple-300'
            }`}
          >
            <div className="text-3xl font-display font-bold text-purple-400">21+</div>
            <div
              className={`text-sm font-medium mt-1 ${
                isDarkMode ? 'text-slate-300' : 'text-slate-800'
              }`}
            >
              {t.quickStatsProjects}
            </div>
            <div className="text-xs text-slate-500 mt-0.5">
              C#, Desktop, Web & Tools
            </div>
          </div>

          <div
            className={`p-5 rounded-2xl border transition-all ${
              isDarkMode
                ? 'bg-slate-900/60 border-slate-800/80 hover:border-purple-500/40'
                : 'bg-white border-slate-200 hover:border-purple-300'
            }`}
          >
            <div className="text-3xl font-display font-bold text-cyan-400">7+</div>
            <div
              className={`text-sm font-medium mt-1 ${
                isDarkMode ? 'text-slate-300' : 'text-slate-800'
              }`}
            >
              {t.quickStatsCiphers}
            </div>
            <div className="text-xs text-slate-500 mt-0.5">
              Markovski, RSA, Isotope, Hill, etc.
            </div>
          </div>

          <div
            className={`p-5 rounded-2xl border transition-all ${
              isDarkMode
                ? 'bg-slate-900/60 border-slate-800/80 hover:border-purple-500/40'
                : 'bg-white border-slate-200 hover:border-purple-300'
            }`}
          >
            <div className="text-3xl font-display font-bold text-amber-400">1st Place</div>
            <div
              className={`text-sm font-medium mt-1 ${
                isDarkMode ? 'text-slate-300' : 'text-slate-800'
              }`}
            >
              {t.quickStatsDigiedu}
            </div>
            <div className="text-xs text-slate-500 mt-0.5">
              Educational Tech Champion 2025
            </div>
          </div>

          <div
            className={`p-5 rounded-2xl border transition-all ${
              isDarkMode
                ? 'bg-slate-900/60 border-slate-800/80 hover:border-purple-500/40'
                : 'bg-white border-slate-200 hover:border-purple-300'
            }`}
          >
            <div className="text-3xl font-display font-bold text-emerald-400">Year 2</div>
            <div
              className={`text-sm font-medium mt-1 ${
                isDarkMode ? 'text-slate-300' : 'text-slate-800'
              }`}
            >
              {t.quickStatsYear}
            </div>
            <div className="text-xs text-slate-500 mt-0.5">
              FMTI Educational IT Master's
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
