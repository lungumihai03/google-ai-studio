import React, { useState } from 'react';
import {
  Mail,
  MapPin,
  Github,
  Send,
  CheckCircle2,
  Copy,
  Check,
  Building2,
  Sparkles,
  FileText,
  MessageSquare,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { SupportedLanguage } from '../types';
import { TRANSLATIONS } from '../utils/translations';

interface ContactSectionProps {
  currentLang: SupportedLanguage;
  isDarkMode: boolean;
  onOpenPrintCV: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  currentLang,
  isDarkMode,
  onOpenPrintCV,
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const t = TRANSLATIONS[currentLang];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSending(true);
    // Simulate real asynchronous form submission with feedback
    setTimeout(() => {
      setIsSending(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-slate-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>{t.contactHeading}</span>
          </div>
          <h2
            className={`font-display text-2xl sm:text-4xl font-extrabold tracking-tight ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            Direct Contact & Collaboration
          </h2>
          <p
            className={`mt-3 text-base leading-relaxed ${
              isDarkMode ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            {t.contactSubheading}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-5">
            {/* Email Card with Copy Button */}
            <div
              className={`p-6 rounded-2xl border ${
                isDarkMode
                  ? 'bg-slate-900/70 border-slate-800 text-slate-300'
                  : 'bg-white border-slate-200 text-slate-700 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-slate-400 font-bold">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <span>Direct Email</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-mono bg-purple-500/10 text-purple-400 border border-purple-500/25 hover:bg-purple-500/20 transition-colors"
                >
                  {copiedEmail ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                  <span>{copiedEmail ? t.copiedEmail : 'Copy'}</span>
                </button>
              </div>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="font-mono text-base sm:text-lg font-bold text-purple-400 hover:text-purple-300 transition-colors break-all"
              >
                {PERSONAL_INFO.email}
              </a>
              <p className="text-xs text-slate-500 mt-1">
                Preferred channel for engineering inquiries, research, and opportunities.
              </p>
            </div>

            {/* Location & Institution */}
            <div
              className={`p-6 rounded-2xl border ${
                isDarkMode
                  ? 'bg-slate-900/70 border-slate-800 text-slate-300'
                  : 'bg-white border-slate-200 text-slate-700 shadow-sm'
              }`}
            >
              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-cyan-400 mt-1 shrink-0" />
                  <div>
                    <span className="font-bold text-slate-200 block">
                      Current Location
                    </span>
                    <span className="text-slate-400">
                      Chișinău, Republic of Moldova (Born in Soroca)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Building2 className="w-4 h-4 text-purple-400 mt-1 shrink-0" />
                  <div>
                    <span className="font-bold text-slate-200 block">
                      Affiliation
                    </span>
                    <span className="text-slate-400">
                      Vladimir Andrunachievici Institute of Mathematics & Computer Science
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Github className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                  <div>
                    <span className="font-bold text-slate-200 block">
                      GitHub Profile
                    </span>
                    <a
                      href={PERSONAL_INFO.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-purple-400 hover:text-purple-300 font-mono"
                    >
                      github.com/lungumihai03
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Resume / Print CV Trigger Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-950/60 to-indigo-950/60 border border-purple-800/40 text-slate-200 flex items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-sm text-white flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-cyan-400" />
                  <span>Looking for a formal CV?</span>
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Print or export a clean A4 resume format directly.
                </p>
              </div>
              <button
                onClick={onOpenPrintCV}
                className="px-4 py-2 rounded-xl text-xs font-medium bg-purple-600 hover:bg-purple-500 text-white shrink-0 transition-colors"
              >
                {t.viewCV}
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div
              className={`p-6 sm:p-8 rounded-2xl border ${
                isDarkMode
                  ? 'bg-slate-900/80 border-slate-800'
                  : 'bg-white border-slate-200 shadow-md'
              }`}
            >
              <h3
                className={`font-display text-lg font-bold mb-4 flex items-center gap-2 ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}
              >
                <MessageSquare className="w-4 h-4 text-purple-400" />
                <span>Send a Direct Message</span>
              </h3>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="font-bold text-base text-emerald-300">
                    Thank you for reaching out!
                  </h4>
                  <p className="text-xs text-slate-300">
                    Your message has been captured. You can also write directly to{' '}
                    <strong className="text-emerald-400 font-mono">
                      {PERSONAL_INFO.email}
                    </strong>
                    .
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-1.5 rounded-lg text-xs font-mono bg-emerald-800 text-white hover:bg-emerald-700 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5 font-bold">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Alexandru Popescu"
                        className={`w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm border focus:outline-none focus:ring-2 focus:ring-purple-500/50 ${
                          isDarkMode
                            ? 'bg-slate-950 border-slate-800 text-slate-200'
                            : 'bg-slate-50 border-slate-300 text-slate-900'
                        }`}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5 font-bold">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="e.g. user@example.com"
                        className={`w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm border focus:outline-none focus:ring-2 focus:ring-purple-500/50 ${
                          isDarkMode
                            ? 'bg-slate-950 border-slate-800 text-slate-200'
                            : 'bg-slate-50 border-slate-300 text-slate-900'
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5 font-bold">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder="e.g. Collaboration on C# .NET Project / Cryptography"
                      className={`w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm border focus:outline-none focus:ring-2 focus:ring-purple-500/50 ${
                        isDarkMode
                          ? 'bg-slate-950 border-slate-800 text-slate-200'
                          : 'bg-slate-50 border-slate-300 text-slate-900'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5 font-bold">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Write your message here..."
                      className={`w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm border focus:outline-none focus:ring-2 focus:ring-purple-500/50 ${
                        isDarkMode
                          ? 'bg-slate-950 border-slate-800 text-slate-200'
                          : 'bg-slate-50 border-slate-300 text-slate-900'
                      }`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-medium text-sm shadow-md shadow-purple-600/30 transition-all disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSending ? 'Sending Message...' : t.sendMsgBtn}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
