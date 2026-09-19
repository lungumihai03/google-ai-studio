import React, { useState } from 'react';
import {
  Code2,
  Terminal,
  Globe,
  Lock,
  Cpu,
  Layers,
  CheckCircle2,
  Star,
  Sparkles,
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { SupportedLanguage } from '../types';
import { TRANSLATIONS } from '../utils/translations';

interface SkillsSectionProps {
  currentLang: SupportedLanguage;
  isDarkMode: boolean;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({
  currentLang,
  isDarkMode,
}) => {
  const [selectedCatId, setSelectedCatId] = useState<string>('all');
  const t = TRANSLATIONS[currentLang];

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code2 className="w-4 h-4 text-purple-400" />;
      case 'Terminal':
        return <Terminal className="w-4 h-4 text-cyan-400" />;
      case 'Globe':
        return <Globe className="w-4 h-4 text-emerald-400" />;
      case 'Lock':
        return <Lock className="w-4 h-4 text-amber-400" />;
      case 'Cpu':
        return <Cpu className="w-4 h-4 text-rose-400" />;
      default:
        return <Layers className="w-4 h-4 text-purple-400" />;
    }
  };

  const getLevelBadgeClass = (level: string) => {
    switch (level) {
      case 'Expert':
        return 'bg-purple-500/15 text-purple-400 border-purple-500/30';
      case 'Advanced':
        return 'bg-indigo-500/15 text-indigo-400 border-indigo-500/30';
      case 'Proficient':
        return 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30';
      default:
        return 'bg-slate-700/30 text-slate-300 border-slate-700';
    }
  };

  const filteredCategories =
    selectedCatId === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.id === selectedCatId);

  return (
    <section id="skills" className="py-16 md:py-24 border-t border-slate-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>{t.skillsHeading}</span>
          </div>
          <h2
            className={`font-display text-2xl sm:text-4xl font-extrabold tracking-tight ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            {t.skillsSubheading}
          </h2>
          <p
            className={`mt-3 text-base leading-relaxed ${
              isDarkMode ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            Focused engineering across high-performance C#/.NET desktop applications, robust web publishing platforms, and algorithmic cryptography.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            <button
              onClick={() => setSelectedCatId('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                selectedCatId === 'all'
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-600/20'
                  : isDarkMode
                  ? 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              All Domains
            </button>
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCatId(cat.id)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  selectedCatId === cat.id
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-600/20'
                    : isDarkMode
                    ? 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {getCategoryIcon(cat.iconName)}
                <span>{cat.name.split('(')[0].trim()}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className={`p-6 rounded-2xl border transition-all ${
                isDarkMode
                  ? 'bg-slate-900/70 border-slate-800 hover:border-purple-500/40'
                  : 'bg-white border-slate-200 hover:border-purple-300 shadow-sm'
              }`}
            >
              {/* Category Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/60 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20">
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <div>
                    <h3
                      className={`font-display text-base font-bold leading-snug ${
                        isDarkMode ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {category.name}
                    </h3>
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                {category.description}
              </p>

              {/* Skills List */}
              <div className="space-y-2.5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`flex items-center justify-between p-2.5 rounded-xl border transition-colors ${
                      skill.isPrimary
                        ? isDarkMode
                          ? 'bg-purple-950/20 border-purple-800/50'
                          : 'bg-purple-50/50 border-purple-200'
                        : isDarkMode
                        ? 'bg-slate-950/50 border-slate-800/60 hover:bg-slate-950'
                        : 'bg-slate-50 border-slate-200/80 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {skill.isPrimary && (
                        <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400 shrink-0" />
                      )}
                      <span
                        className={`text-xs font-medium ${
                          isDarkMode ? 'text-slate-200' : 'text-slate-800'
                        }`}
                      >
                        {skill.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {skill.badge && (
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                          {skill.badge}
                        </span>
                      )}
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-mono font-semibold border ${getLevelBadgeClass(
                          skill.level
                        )}`}
                      >
                        {skill.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
