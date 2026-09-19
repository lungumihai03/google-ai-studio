import React, { useState } from 'react';
import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  Building2,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  BookOpen,
  Code2,
} from 'lucide-react';
import { EXPERIENCES, EDUCATIONS } from '../data/portfolioData';
import { SupportedLanguage } from '../types';
import { TRANSLATIONS } from '../utils/translations';

interface ExperienceTimelineProps {
  currentLang: SupportedLanguage;
  isDarkMode: boolean;
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({
  currentLang,
  isDarkMode,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'work' | 'education'>('all');
  const t = TRANSLATIONS[currentLang];

  return (
    <section id="experience" className="py-16 md:py-24 border-t border-slate-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{t.academicTimeline}</span>
          </div>
          <h2
            className={`font-display text-2xl sm:text-4xl font-extrabold tracking-tight ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            Professional Work & Academic Milestones
          </h2>
          <p
            className={`mt-3 text-base leading-relaxed ${
              isDarkMode ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            A continuous blend of production scientific software engineering, academic research, and pedagogical software development.
          </p>

          {/* Filter Tabs */}
          <div className="flex justify-center gap-2 mt-6">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                activeTab === 'all'
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-600/20'
                  : isDarkMode
                  ? 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              All Milestones
            </button>
            <button
              onClick={() => setActiveTab('work')}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                activeTab === 'work'
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-600/20'
                  : isDarkMode
                  ? 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              Professional Work (CSJM)
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                activeTab === 'education'
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-600/20'
                  : isDarkMode
                  ? 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              Education & Degrees
            </button>
          </div>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
          {/* Work Experiences */}
          {(activeTab === 'all' || activeTab === 'work') && (
            <div className={`${activeTab === 'work' ? 'lg:col-span-12' : 'lg:col-span-6'} space-y-6`}>
              <div className="flex items-center gap-2 pb-2 border-b border-slate-800">
                <Briefcase className="w-5 h-5 text-purple-400" />
                <h3
                  className={`font-display text-xl font-bold ${
                    isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  Professional Experience
                </h3>
              </div>

              {EXPERIENCES.map((exp) => (
                <div
                  key={exp.id}
                  className={`p-6 sm:p-7 rounded-2xl border transition-all ${
                    isDarkMode
                      ? 'bg-slate-900/70 border-slate-800 hover:border-purple-500/40 text-slate-300'
                      : 'bg-white border-slate-200 hover:border-purple-300 text-slate-700'
                  }`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 mb-1.5">
                        Current Position (Since Oct 2025)
                      </span>
                      <h4
                        className={`text-lg font-bold ${
                          isDarkMode ? 'text-white' : 'text-slate-900'
                        }`}
                      >
                        {exp.role}
                      </h4>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-purple-400">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
                    <Building2 className="w-3.5 h-3.5 text-purple-400" />
                    <span className="font-medium text-slate-200">
                      {exp.organization}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      {exp.location}
                    </span>
                  </div>

                  <p className="text-sm leading-relaxed mb-4">{exp.description}</p>

                  <div className="space-y-2 mb-5">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                      Core Responsibilities & Technical Impact:
                    </span>
                    {exp.responsibilities.map((resp, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm">
                        <CheckCircle2 className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/60">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-2.5 py-1 rounded text-xs font-mono border ${
                          isDarkMode
                            ? 'bg-slate-950 text-slate-300 border-slate-800'
                            : 'bg-slate-100 text-slate-700 border-slate-300'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Education Timeline */}
          {(activeTab === 'all' || activeTab === 'education') && (
            <div className={`${activeTab === 'education' ? 'lg:col-span-12' : 'lg:col-span-6'} space-y-6`}>
              <div className="flex items-center gap-2 pb-2 border-b border-slate-800">
                <GraduationCap className="w-5 h-5 text-cyan-400" />
                <h3
                  className={`font-display text-xl font-bold ${
                    isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  Education & Academic Degrees
                </h3>
              </div>

              {EDUCATIONS.map((edu) => (
                <div
                  key={edu.id}
                  className={`p-6 rounded-2xl border transition-all ${
                    isDarkMode
                      ? 'bg-slate-900/70 border-slate-800 hover:border-cyan-500/40 text-slate-300'
                      : 'bg-white border-slate-200 hover:border-cyan-300 text-slate-700'
                  }`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1.5">
                    <div>
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono font-semibold border mb-1.5 ${
                          edu.status === 'In Progress'
                            ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/25'
                            : 'bg-purple-500/10 text-purple-400 border-purple-500/25'
                        }`}
                      >
                        {edu.status === 'In Progress' ? 'Active / Master’s Year 2' : 'Honors Graduate'}
                      </span>
                      <h4
                        className={`text-lg font-bold ${
                          isDarkMode ? 'text-white' : 'text-slate-900'
                        }`}
                      >
                        {edu.degree} — {edu.field}
                      </h4>
                    </div>
                    <span className="text-xs font-mono text-cyan-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.period}
                    </span>
                  </div>

                  <div className="text-xs text-slate-400 mb-3 space-y-0.5">
                    <div className="text-slate-200 font-medium">{edu.institution}</div>
                    <div>{edu.faculty} {edu.group && <span className="font-mono text-purple-300">({edu.group})</span>}</div>
                  </div>

                  {edu.thesis && (
                    <div
                      className={`p-3.5 rounded-xl border my-3 text-xs ${
                        isDarkMode
                          ? 'bg-slate-950/80 border-slate-800 text-slate-300'
                          : 'bg-slate-50 border-slate-200 text-slate-800'
                      }`}
                    >
                      <span className="font-bold text-purple-400 block mb-1">
                        Thesis: "{edu.thesis.title}"
                      </span>
                      <p className="leading-relaxed text-slate-400 mb-2">
                        {edu.thesis.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {edu.thesis.technologies.map((t) => (
                          <span
                            key={t}
                            className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-purple-950 text-purple-300 border border-purple-800/40"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="space-y-1.5 pt-1">
                    {edu.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs">
                        <ChevronRight className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
