import React from 'react';
import {
  Laptop,
  Cpu,
  Layers,
  HardDrive,
  Server,
  ShieldCheck,
  Zap,
  Activity,
  Terminal,
  Sparkles,
  Sliders,
  CheckCircle2,
} from 'lucide-react';
import { HARDWARE_SPECS } from '../data/portfolioData';
import { SupportedLanguage } from '../types';
import { TRANSLATIONS } from '../utils/translations';

interface HardwareSectionProps {
  currentLang: SupportedLanguage;
  isDarkMode: boolean;
}

export const HardwareSection: React.FC<HardwareSectionProps> = ({
  currentLang,
  isDarkMode,
}) => {
  const t = TRANSLATIONS[currentLang];

  const getHardwareIcon = (iconName: string) => {
    switch (iconName) {
      case 'Laptop':
        return <Laptop className="w-5 h-5 text-purple-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-emerald-400" />;
      case 'HardDrive':
        return <HardDrive className="w-5 h-5 text-amber-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-rose-400" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="hardware" className="py-16 md:py-24 border-t border-slate-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>{t.hardwareHeading}</span>
          </div>
          <h2
            className={`font-display text-2xl sm:text-4xl font-extrabold tracking-tight ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            Engineering Rig & Local AI Hardware
          </h2>
          <p
            className={`mt-3 text-base leading-relaxed ${
              isDarkMode ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            High-performance hardware specifications tuned for C# compilation, database stress-testing, and local quantized LLM inference.
          </p>
        </div>

        {/* Hardware Component Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 text-left">
          {HARDWARE_SPECS.map((spec) => (
            <div
              key={spec.component}
              className={`p-6 rounded-2xl border transition-all ${
                isDarkMode
                  ? 'bg-slate-900/70 border-slate-800 hover:border-purple-500/40 text-slate-300'
                  : 'bg-white border-slate-200 hover:border-purple-300 shadow-sm text-slate-700'
              }`}
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/60 mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-slate-950 border border-slate-800">
                    {getHardwareIcon(spec.iconName)}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                    {spec.component}
                  </span>
                </div>
              </div>

              <h4
                className={`font-display text-base font-bold mb-2 ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}
              >
                {spec.specification}
              </h4>

              <p className="text-xs text-slate-400 leading-relaxed">
                {spec.details}
              </p>
            </div>
          ))}
        </div>

        {/* Local AI & LLM Inference Architecture Box */}
        <div
          className={`p-7 sm:p-9 rounded-2xl border text-left ${
            isDarkMode
              ? 'bg-slate-900/80 border-slate-800 shadow-xl'
              : 'bg-white border-slate-200 shadow-md'
          }`}
        >
          <div className="flex items-center gap-2.5 mb-4">
            <Zap className="w-5 h-5 text-amber-400" />
            <h3
              className={`font-display text-xl font-bold ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              Local AI & LLM Inference Architecture
            </h3>
            <span className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-amber-500/10 text-amber-400 border border-amber-500/25">
              4 GB VRAM + 32 GB RAM
            </span>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed mb-6">
            Equipped with an <strong className="text-cyan-400">NVIDIA RTX 3050 (4 GB VRAM)</strong> and{' '}
            <strong className="text-purple-400">32 GB DDR4 dual-channel memory</strong>, my local AI pipeline is engineered to maximize GPU offloading for quantized open-source weights while leveraging the high system RAM buffer for extended context windows.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="text-purple-400 font-bold block mb-1">
                Inference Engines
              </span>
              <ul className="space-y-1 text-slate-400">
                <li>• LM Studio & llama.cpp</li>
                <li>• Open WebUI + Docker</li>
                <li>• Cloudflare Workers AI</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="text-cyan-400 font-bold block mb-1">
                Model Architectures
              </span>
              <ul className="space-y-1 text-slate-400">
                <li>• Qwen 2.5 (1.5B / 7B quantized)</li>
                <li>• Gemma 2 (2B / 9B GGUF)</li>
                <li>• Llama 3.2 (1B / 3B compact)</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="text-emerald-400 font-bold block mb-1">
                Quantization Targets
              </span>
              <ul className="space-y-1 text-slate-400">
                <li>• GGUF Q4_K_M (Optimal speed/size)</li>
                <li>• Q8_0 for precision math tasks</li>
                <li>• CUDA Core Layer Offload</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
