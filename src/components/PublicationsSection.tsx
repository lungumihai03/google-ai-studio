import React from 'react';
import {
  BookOpen,
  Award,
  Calendar,
  User,
  Tag,
  CheckCircle2,
  Trophy,
  Medal,
  Sparkles,
  ExternalLink,
  GraduationCap,
} from 'lucide-react';
import { PUBLICATIONS, ACHIEVEMENTS } from '../data/portfolioData';
import { SupportedLanguage } from '../types';
import { TRANSLATIONS } from '../utils/translations';

interface PublicationsSectionProps {
  currentLang: SupportedLanguage;
  isDarkMode: boolean;
}

export const PublicationsSection: React.FC<PublicationsSectionProps> = ({
  currentLang,
  isDarkMode,
}) => {
  const t = TRANSLATIONS[currentLang];

  const getBadgeIcon = (type: string) => {
    switch (type) {
      case 'gold':
        return <Trophy className="w-4 h-4 text-amber-400" />;
      case 'silver':
        return <Medal className="w-4 h-4 text-slate-300" />;
      case 'bronze':
        return <Medal className="w-4 h-4 text-amber-600" />;
      default:
        return <Award className="w-4 h-4 text-purple-400" />;
    }
  };

  return (
    <section id="publications" className="py-16 md:py-24 border-t border-slate-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{t.publicationsHeading}</span>
          </div>
          <h2
            className={`font-display text-2xl sm:text-4xl font-extrabold tracking-tight ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            Scientific Research & Academic Publications
          </h2>
          <p
            className={`mt-3 text-base leading-relaxed ${
              isDarkMode ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            Contributions to algebraic cryptography, enterprise desktop architecture in C#/WinUI 3, and informatics education.
          </p>
        </div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16 text-left">
          {PUBLICATIONS.map((pub) => (
            <div
              key={pub.id}
              className={`flex flex-col justify-between p-6 sm:p-7 rounded-2xl border transition-all ${
                isDarkMode
                  ? 'bg-slate-900/70 border-slate-800 hover:border-purple-500/40 text-slate-300'
                  : 'bg-white border-slate-200 hover:border-purple-300 shadow-sm text-slate-700'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    {pub.focusArea}
                  </span>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-purple-400" />
                    {pub.year}
                  </span>
                </div>

                <h3
                  className={`font-display text-base sm:text-lg font-bold mb-3 leading-snug ${
                    isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {pub.title}
                </h3>

                <div className="text-xs font-mono text-slate-400 mb-3 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-purple-400" />
                  <span>Author: {pub.authors.join(', ')}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                  {pub.summary}
                </p>
              </div>

              {/* Keywords Tagging */}
              <div className="pt-4 border-t border-slate-800/60 mt-auto">
                <div className="text-[11px] font-mono text-purple-400 mb-2">
                  Venue / Scope: {pub.venueOrContext}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {pub.keywords.map((kw) => (
                    <span
                      key={kw}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-950 text-slate-300 border border-slate-800"
                    >
                      #{kw}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section Divider: Honors & Awards */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>{t.achievementsHeading}</span>
          </div>
          <h3
            className={`font-display text-xl sm:text-3xl font-extrabold ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            Laureate Awards & Certifications
          </h3>
        </div>

        {/* Achievements Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
          {ACHIEVEMENTS.map((ach) => (
            <div
              key={ach.id}
              className={`p-5 sm:p-6 rounded-2xl border transition-all ${
                isDarkMode
                  ? 'bg-slate-900/60 border-slate-800 hover:border-amber-500/40 text-slate-300'
                  : 'bg-white border-slate-200 hover:border-amber-300 shadow-sm text-slate-700'
              }`}
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="p-2 rounded-xl bg-slate-950 border border-slate-800">
                  {getBadgeIcon(ach.badgeType)}
                </div>
                <div className="flex items-center gap-1 text-xs font-mono font-bold text-amber-400">
                  <span>{ach.year}</span>
                </div>
              </div>

              <h4
                className={`font-display text-base font-bold mb-1 ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}
              >
                {ach.title}
              </h4>

              <div className="text-xs text-purple-400 font-mono font-medium mb-3">
                {ach.organizer}
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                {ach.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
