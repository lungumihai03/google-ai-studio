import React, { useState, useEffect, useRef } from 'react';
import {
  Terminal,
  X,
  Send,
  CornerDownLeft,
  Sparkles,
  Layers,
  Cpu,
  Lock,
  BookOpen,
} from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, HARDWARE_SPECS } from '../data/portfolioData';

interface CommandPaletteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
  onOpenCryptoDemo: (cipher: string) => void;
  isDarkMode: boolean;
}

interface LogEntry {
  command: string;
  output: React.ReactNode;
}

export const CommandPaletteModal: React.FC<CommandPaletteModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onOpenCryptoDemo,
  isDarkMode,
}) => {
  const [input, setInput] = useState('');
  const [logs, setLogs] = useState<LogEntry[]>([
    {
      command: 'init',
      output: (
        <div>
          <p className="text-purple-400 font-bold">
            Mihai Lungu — Developer CLI Terminal [Version 2.4.0]
          </p>
          <p className="text-slate-400 text-xs mt-1">
            Type <span className="text-cyan-300 font-bold font-mono">help</span> for a list of available commands, or try{' '}
            <span className="text-cyan-300 font-bold font-mono">about</span>,{' '}
            <span className="text-cyan-300 font-bold font-mono">projects</span>,{' '}
            <span className="text-cyan-300 font-bold font-mono">skills</span>,{' '}
            <span className="text-cyan-300 font-bold font-mono">crypto</span>, or{' '}
            <span className="text-cyan-300 font-bold font-mono">hardware</span>.
          </p>
        </div>
      ),
    },
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  if (!isOpen) return null;

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    let output: React.ReactNode = null;

    switch (trimmed) {
      case 'help':
        output = (
          <div className="space-y-1 text-xs">
            <p className="text-purple-400 font-bold">Available Commands:</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-slate-300">
              <div><strong className="text-cyan-400">about</strong> — Display developer background & bio</div>
              <div><strong className="text-cyan-400">skills</strong> — Summary of C#/.NET & tech stack</div>
              <div><strong className="text-cyan-400">projects</strong> — List 21 engineering projects</div>
              <div><strong className="text-cyan-400">crypto</strong> — Jump to Interactive Crypto Lab</div>
              <div><strong className="text-cyan-400">thesis</strong> — Bachelor's & Master's research details</div>
              <div><strong className="text-cyan-400">hardware</strong> — View ASUS ROG Strix G15 specs</div>
              <div><strong className="text-cyan-400">contact</strong> — Show email and GitHub links</div>
              <div><strong className="text-cyan-400">clear</strong> — Clear terminal screen</div>
            </div>
          </div>
        );
        break;

      case 'about':
        output = (
          <div className="text-xs text-slate-300 space-y-1">
            <p>
              <strong className="text-purple-400">Mihai Lungu</strong> | Born 22 Nov 2003 in Soroca, living in Chișinău.
            </p>
            <p>
              Information Analyst Assistant at Vladimir Andrunachievici Institute of Mathematics and Computer Science (working on CSJM).
            </p>
            <p>
              Master's candidate at Ion Creangă Pedagogical University (FMTI). Primary language: <span className="text-emerald-400 font-bold">C#</span>.
            </p>
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="text-xs text-slate-300 space-y-1">
            <p className="text-purple-400 font-bold">Core Stack:</p>
            <p>• C# (Expert), .NET 8/9, .NET Framework 4.8, WinUI 3, WinForms, WPF</p>
            <p>• C, PHP, SQL (MySQL, PostgreSQL), JavaScript, HTML5/CSS3</p>
            <p>• CSJM platform, REST APIs, XAMPP, Apache, Docker, Cloudflare Workers</p>
            <p>• Cryptography: Markovski quasigroups, RSA modular exponentiation, Isotope ciphers</p>
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="text-xs text-slate-300 space-y-1">
            <p className="text-purple-400 font-bold">Top Selected Projects (21 Total):</p>
            <ol className="list-decimal list-inside space-y-0.5">
              {PROJECTS.slice(0, 8).map((p) => (
                <li key={p.id}>
                  <span className="font-bold text-slate-200">{p.title}</span> —{' '}
                  <span className="text-slate-400">{p.techStack.slice(0, 3).join(', ')}</span>
                </li>
              ))}
            </ol>
            <p className="text-cyan-400 text-[11px] mt-1">
              Scroll down to the Projects section to explore all 21 items with live filters!
            </p>
          </div>
        );
        break;

      case 'crypto':
        onClose();
        onNavigate('#crypto-lab');
        return;

      case 'hardware':
        output = (
          <div className="text-xs text-slate-300 space-y-1 font-mono">
            <p className="text-purple-400 font-bold">ASUS ROG Strix G15 (G513QC):</p>
            <p>• CPU: AMD Ryzen 5 5600H (6C/12T, up to 4.2 GHz)</p>
            <p>• GPU: NVIDIA GeForce RTX 3050 (4 GB GDDR6 VRAM)</p>
            <p>• RAM: 32 GB DDR4 3200 MHz Dual Channel</p>
            <p>• Storage: 1.5 TB Total NVMe SSDs (512 GB + 1 TB)</p>
            <p>• OS: Windows 11 Pro Optimized</p>
          </div>
        );
        break;

      case 'thesis':
        output = (
          <div className="text-xs text-slate-300 space-y-1">
            <p>
              <strong className="text-purple-400">Bachelor's Thesis (2025):</strong> HR & Accounting Management Module in C# / WinUI 3.
            </p>
            <p>
              <strong className="text-cyan-400">Master's Thesis (Current):</strong> Digital Platform Architecture for Scientific Publications (CSJM).
            </p>
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="text-xs text-slate-300 space-y-1 font-mono">
            <p>Email: <span className="text-purple-400">{PERSONAL_INFO.email}</span></p>
            <p>GitHub: <span className="text-cyan-400">{PERSONAL_INFO.github}</span></p>
            <p>Location: Chișinău, Republic of Moldova</p>
          </div>
        );
        break;

      case 'clear':
        setLogs([]);
        setInput('');
        return;

      case 'sudo':
        output = (
          <p className="text-rose-400 text-xs">
            Permission denied: Mihai Lungu already holds root authority over this workspace.
          </p>
        );
        break;

      default:
        output = (
          <p className="text-rose-400 text-xs">
            Command not recognized: "{trimmed}". Type <span className="text-cyan-300 font-mono">help</span> for a list of commands.
          </p>
        );
    }

    setLogs((prev) => [...prev, { command: cmd, output }]);
    setInput('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in-50">
      <div
        className={`relative w-full max-w-2xl rounded-2xl border shadow-2xl overflow-hidden text-left flex flex-col h-[32rem] ${
          isDarkMode
            ? 'bg-slate-950 border-slate-800 text-slate-200'
            : 'bg-slate-900 border-slate-700 text-slate-200'
        }`}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
            <span className="ml-2 font-mono text-xs text-slate-400 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-purple-400" />
              mihai@rog-strix: ~/portfolio
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal Output Area */}
        <div className="flex-1 p-4 overflow-y-auto font-mono text-xs space-y-4">
          {logs.map((log, i) => (
            <div key={i} className="space-y-1.5">
              <div className="flex items-center gap-2 text-slate-400">
                <span className="text-purple-400 font-bold">guest@mihai-portfolio:~$</span>
                <span className="text-white">{log.command}</span>
              </div>
              <div className="pl-4 border-l border-slate-800 text-slate-300">
                {log.output}
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Terminal Input Line */}
        <div className="p-3 bg-slate-900/90 border-t border-slate-800 flex items-center gap-2 shrink-0">
          <span className="text-purple-400 font-mono text-xs font-bold shrink-0">
            guest@mihai:~$
          </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleCommand(input);
              }
            }}
            placeholder="Type a command (e.g. help, about, skills, projects, crypto)..."
            className="flex-1 bg-transparent font-mono text-xs text-white focus:outline-none placeholder:text-slate-600"
          />
          <button
            onClick={() => handleCommand(input)}
            className="p-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white transition-colors"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
