import React, { useState } from 'react';
import {
  Code2,
  Lock,
  ExternalLink,
  Github,
  Search,
  Layers,
  Sparkles,
  Award,
  Terminal,
  CheckCircle2,
  X,
  SlidersHorizontal,
  ChevronRight,
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project, ProjectCategory, SupportedLanguage } from '../types';
import { TRANSLATIONS } from '../utils/translations';

interface ProjectsSectionProps {
  currentLang: SupportedLanguage;
  isDarkMode: boolean;
  onOpenCipherDemo: (cipherType: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  currentLang,
  isDarkMode,
  onOpenCipherDemo,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const t = TRANSLATIONS[currentLang];

  const categories: { id: ProjectCategory; label: string; count: number }[] = [
    { id: 'all', label: t.filterAll, count: PROJECTS.length },
    {
      id: 'dotnet',
      label: t.filterDotnet,
      count: PROJECTS.filter((p) => p.category === 'dotnet' || p.techStack.includes('C#')).length,
    },
    {
      id: 'crypto',
      label: t.filterCrypto,
      count: PROJECTS.filter((p) => p.category === 'crypto').length,
    },
    {
      id: 'desktop',
      label: t.filterDesktop,
      count: PROJECTS.filter((p) => p.category === 'desktop').length,
    },
    {
      id: 'web',
      label: t.filterWeb,
      count: PROJECTS.filter((p) => p.category === 'web').length,
    },
    {
      id: 'tools',
      label: t.filterTools,
      count: PROJECTS.filter((p) => p.category === 'tools').length,
    },
  ];

  const filteredProjects = PROJECTS.filter((project) => {
    const matchesCategory =
      selectedCategory === 'all' ||
      project.category === selectedCategory ||
      (selectedCategory === 'dotnet' && project.techStack.includes('C#'));

    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      project.title.toLowerCase().includes(q) ||
      project.shortDescription.toLowerCase().includes(q) ||
      project.fullDescription.toLowerCase().includes(q) ||
      project.techStack.some((t) => t.toLowerCase().includes(q));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-16 md:py-24 border-t border-slate-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>{t.projectsHeading}</span>
          </div>
          <h2
            className={`font-display text-2xl sm:text-4xl font-extrabold tracking-tight ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            {t.projectsSubheading}
          </h2>
          <p
            className={`mt-3 text-base leading-relaxed ${
              isDarkMode ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            A comprehensive portfolio of 21 software engineering solutions, academic research modules, and desktop utilities.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          {/* Search Box */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-xs sm:text-sm border transition-all focus:outline-none focus:ring-2 focus:ring-purple-500/50 ${
                isDarkMode
                  ? 'bg-slate-900/90 border-slate-800 text-slate-200 placeholder:text-slate-500'
                  : 'bg-white border-slate-300 text-slate-800 placeholder:text-slate-400 shadow-sm'
              }`}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-600/20'
                    : isDarkMode
                    ? 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200'
                }`}
              >
                <span>{cat.label}</span>
                <span className="ml-1.5 text-[10px] font-mono opacity-70">
                  ({cat.count})
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`flex flex-col justify-between p-6 rounded-2xl border transition-all duration-200 group ${
                project.isFeatured
                  ? isDarkMode
                    ? 'bg-slate-900/80 border-purple-900/40 hover:border-purple-500/60 shadow-lg shadow-purple-950/20'
                    : 'bg-white border-purple-200 hover:border-purple-400 shadow-md'
                  : isDarkMode
                  ? 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700'
                  : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
              }`}
            >
              <div>
                {/* Top Badge Row */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-xs font-bold text-purple-400">
                    #{String(project.importanceRank).padStart(2, '0')}
                  </span>
                  <div className="flex items-center gap-1.5">
                    {project.isFeatured && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/10 text-amber-400 border border-amber-500/25">
                        Featured
                      </span>
                    )}
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-purple-500/10 text-purple-300 border border-purple-500/20">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Title */}
                <h3
                  className={`font-display text-lg font-bold group-hover:text-purple-400 transition-colors line-clamp-1 mb-2 ${
                    isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {project.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3 mb-4">
                  {project.shortDescription}
                </p>

                {/* Key Features Bullet list preview */}
                <div className="space-y-1 mb-4">
                  {project.keyFeatures.slice(0, 2).map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-1.5 text-[11px] text-slate-400 line-clamp-1"
                    >
                      <ChevronRight className="w-3 h-3 text-purple-400 mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer: Tech Stack & Actions */}
              <div className="pt-4 border-t border-slate-800/60 mt-auto">
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2 py-0.5 rounded text-[10px] font-mono border ${
                        isDarkMode
                          ? 'bg-slate-950 text-slate-300 border-slate-800'
                          : 'bg-slate-100 text-slate-700 border-slate-200'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between gap-2 pt-1">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="text-xs font-medium text-purple-400 hover:text-purple-300 flex items-center gap-1"
                  >
                    <span>View Architecture</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.hasInteractiveDemo && (
                      <button
                        onClick={() => onOpenCipherDemo(project.cipherType || 'vigenere')}
                        className="px-2.5 py-1 rounded text-xs font-medium bg-cyan-950 text-cyan-300 border border-cyan-800/60 hover:bg-cyan-900/60 flex items-center gap-1"
                        title="Open Interactive Demo in Crypto Lab"
                      >
                        <Lock className="w-3 h-3" />
                        <span>Try Cipher</span>
                      </button>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className={`p-1.5 rounded-lg border transition-colors ${
                          isDarkMode
                            ? 'bg-slate-950 text-slate-300 border-slate-800 hover:text-white'
                            : 'bg-slate-100 text-slate-700 border-slate-300 hover:text-slate-950'
                        }`}
                        title="GitHub Repo"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <Layers className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <h4 className="text-base font-bold text-slate-300">
              No matching projects found
            </h4>
            <p className="text-xs text-slate-500 mt-1">
              Try adjusting your search query or switching category filter.
            </p>
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in-50">
          <div
            className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border shadow-2xl p-6 sm:p-8 text-left ${
              isDarkMode
                ? 'bg-slate-900 border-slate-700 text-slate-200'
                : 'bg-white border-slate-300 text-slate-800'
            }`}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs text-purple-400 font-bold">
                Project #{String(activeModalProject.importanceRank).padStart(2, '0')}
              </span>
              <span className="px-2 py-0.5 rounded text-xs font-mono uppercase bg-purple-500/10 text-purple-300 border border-purple-500/20">
                {activeModalProject.category}
              </span>
              {activeModalProject.isFeatured && (
                <span className="px-2 py-0.5 rounded text-xs font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  Featured System
                </span>
              )}
            </div>

            <h3
              className={`font-display text-2xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              {activeModalProject.title}
            </h3>

            {activeModalProject.academicContext && (
              <div className="mb-4 p-3 rounded-xl bg-purple-950/40 border border-purple-800/40 text-xs text-purple-300 flex items-center gap-2">
                <Sparkles className="w-4 h-4 shrink-0 text-purple-400" />
                <span>
                  <strong>Academic / Professional Context:</strong>{' '}
                  {activeModalProject.academicContext}
                </span>
              </div>
            )}

            <div className="space-y-4 text-sm leading-relaxed mb-6">
              <div>
                <h4 className="text-xs font-mono uppercase text-slate-400 font-bold mb-1">
                  Architecture & Overview
                </h4>
                <p className="text-slate-300">{activeModalProject.fullDescription}</p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase text-slate-400 font-bold mb-2">
                  Key Technical Features
                </h4>
                <div className="space-y-2">
                  {activeModalProject.keyFeatures.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase text-slate-400 font-bold mb-2">
                  Technologies & Frameworks
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeModalProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded text-xs font-mono bg-slate-950 text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-800">
              <div className="flex items-center gap-2">
                {activeModalProject.githubUrl && (
                  <a
                    href={activeModalProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium bg-slate-800 hover:bg-slate-700 text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>View on GitHub</span>
                  </a>
                )}

                {activeModalProject.hasInteractiveDemo && (
                  <button
                    onClick={() => {
                      const cType = activeModalProject.cipherType || 'vigenere';
                      setActiveModalProject(null);
                      onOpenCipherDemo(cType);
                    }}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium bg-purple-600 hover:bg-purple-500 text-white transition-colors"
                  >
                    <Lock className="w-4 h-4" />
                    <span>Test in Crypto Lab</span>
                  </button>
                )}
              </div>

              <button
                onClick={() => setActiveModalProject(null)}
                className="px-4 py-2 rounded-xl text-xs font-medium border border-slate-700 text-slate-400 hover:text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
