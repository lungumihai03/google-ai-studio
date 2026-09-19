import React from 'react';
import {
  FileText,
  Printer,
  X,
  Mail,
  MapPin,
  Github,
  Globe,
  Award,
  BookOpen,
  Briefcase,
  GraduationCap,
  CheckCircle2,
} from 'lucide-react';
import {
  PERSONAL_INFO,
  EXPERIENCES,
  EDUCATIONS,
  ACHIEVEMENTS,
  PUBLICATIONS,
  LANGUAGES_SPOKEN,
} from '../data/portfolioData';

interface PrintCVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrintCVModal: React.FC<PrintCVModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in-50">
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl overflow-hidden text-left">
        {/* Modal Action Header (Excluded from Print) */}
        <div className="no-print flex items-center justify-between px-6 py-4 bg-slate-950 border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-purple-400" />
            <h3 className="font-display text-base font-bold text-white">
              Curriculum Vitae — Mihai Lungu
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium bg-purple-600 hover:bg-purple-500 text-white shadow-md transition-all hover:scale-105"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save as PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Document Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-white text-slate-900 font-sans text-xs sm:text-sm leading-relaxed">
          {/* CV Header */}
          <div className="border-b-2 border-slate-900 pb-5 mb-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Mihai Lungu
                </h1>
                <p className="text-sm font-semibold text-purple-700 mt-0.5">
                  Software Developer & Information Analyst Assistant | C# / .NET Specialist
                </p>
              </div>

              <div className="text-xs text-slate-600 space-y-1 sm:text-right font-mono">
                <div>Chișinău, Republic of Moldova</div>
                <div>{PERSONAL_INFO.email}</div>
                <div>github.com/lungumihai03</div>
              </div>
            </div>
          </div>

          {/* Professional Profile */}
          <div className="mb-6">
            <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-purple-800 border-b border-slate-200 pb-1 mb-2">
              Professional Summary
            </h2>
            <p className="text-slate-700 text-xs sm:text-[13px] leading-relaxed">
              Moldovan software developer and Information Analyst Assistant at the{' '}
              <strong>Vladimir Andrunachievici Institute of Mathematics and Computer Science</strong>,
              actively maintaining and architecting the CSJM (Computer Science Journal Management) system.
              Second-year Master's candidate in Educational IT. Proven track record in C#/.NET engineering,
              WinUI 3 enterprise desktop systems, relational databases, and mathematical cryptography
              (quasigroup isotopes and modular exponentiation). DigiEduHack 2025 1st place laureate.
            </p>
          </div>

          {/* Professional Experience */}
          <div className="mb-6">
            <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-purple-800 border-b border-slate-200 pb-1 mb-3">
              Work Experience
            </h2>
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="mb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">{exp.role}</h3>
                    <div className="text-xs font-medium text-slate-700">
                      {exp.organization} — {exp.location}
                    </div>
                  </div>
                  <span className="text-xs font-mono text-slate-500">{exp.period}</span>
                </div>
                <ul className="mt-2 space-y-1 list-disc list-inside text-xs text-slate-700">
                  {exp.responsibilities.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="mb-6">
            <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-purple-800 border-b border-slate-200 pb-1 mb-3">
              Education & Academic Training
            </h2>
            <div className="space-y-4">
              {EDUCATIONS.map((edu) => (
                <div key={edu.id}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm">
                        {edu.degree} — {edu.field}
                      </h3>
                      <div className="text-xs text-slate-700">
                        {edu.institution}, {edu.faculty}
                      </div>
                    </div>
                    <span className="text-xs font-mono text-slate-500">{edu.period}</span>
                  </div>
                  {edu.thesis && (
                    <p className="text-xs text-slate-600 mt-1 italic">
                      Thesis: {edu.thesis.title}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills & Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-purple-800 border-b border-slate-200 pb-1 mb-2">
                Technical Stack & Skills
              </h2>
              <ul className="text-xs text-slate-700 space-y-1.5">
                <li>
                  <strong>Primary:</strong> C# (C# 10–12), .NET 8/9, .NET Framework 4.8, WinUI 3, WinForms, WPF, LINQ, P/Invoke
                </li>
                <li>
                  <strong>Languages:</strong> C#, C, PHP, SQL (MySQL, PostgreSQL), JavaScript, HTML5/CSS3
                </li>
                <li>
                  <strong>Platforms & Systems:</strong> CSJM Journal System, REST APIs, XAMPP, Apache, Docker, Cloudflare Workers
                </li>
                <li>
                  <strong>Cryptography & Math:</strong> Markovski Quasigroups, RSA, Groupoid Isotopy, Vigenère, Playfair, Genetic Algorithms
                </li>
                <li>
                  <strong>Hardware & AI:</strong> ASUS ROG Strix G15, Local LLM Inference (LM Studio, GGUF Q4_K_M/Q8_0, Qwen, Gemma)
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-purple-800 border-b border-slate-200 pb-1 mb-2">
                Honors & Key Achievements
              </h2>
              <ul className="text-xs text-slate-700 space-y-1.5">
                <li>• <strong>DigiEduHack Moldova 2025:</strong> 1st Place Champion</li>
                <li>• <strong>Microsoft Developer:</strong> Foundational C# Certification (2024)</li>
                <li>• <strong>Student of the Year 2024:</strong> 3rd Degree Academic Distinction</li>
                <li>• <strong>Scientific Conference 2024:</strong> 2nd Place (Genetic Algorithms)</li>
                <li>• <strong>Interuniversity Olympiad 2023:</strong> 1st Place in Computer Science</li>
                <li>• <strong>UX/UI Marathon 2024:</strong> Completed with Excellence (Nova Academy)</li>
              </ul>
            </div>
          </div>

          {/* Languages */}
          <div>
            <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-purple-800 border-b border-slate-200 pb-1 mb-2">
              Languages
            </h2>
            <div className="flex gap-6 text-xs text-slate-700">
              <div><strong>Romanian:</strong> Native (C2)</div>
              <div><strong>Russian:</strong> Fluent (C1)</div>
              <div><strong>English:</strong> Intermediate (B1)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
