import React, { useState, useEffect } from 'react';
import {
  Lock,
  Unlock,
  Key,
  Cpu,
  Sparkles,
  Calculator,
  RotateCcw,
  Copy,
  Check,
  Binary,
  Layers,
  ArrowRight,
  Info,
} from 'lucide-react';
import {
  vigenereEncrypt,
  vigenereDecrypt,
  affineEncrypt,
  playfairEncrypt,
  markovskiQuasigroupDemo,
  rsaDemonstration,
  isotopeCipherDemo,
  CipherResult,
} from '../utils/cryptoAlgorithms';
import { SupportedLanguage } from '../types';
import { TRANSLATIONS } from '../utils/translations';

interface CryptoPlaygroundProps {
  currentLang: SupportedLanguage;
  isDarkMode: boolean;
  activeCipherPreset?: string;
}

export const CryptoPlayground: React.FC<CryptoPlaygroundProps> = ({
  currentLang,
  isDarkMode,
  activeCipherPreset = 'markovski',
}) => {
  const [selectedCipher, setSelectedCipher] = useState<string>(activeCipherPreset);
  const [inputText, setInputText] = useState<string>('CRYPTOGRAPHYRESEARCH');
  const [keyParam, setKeyParam] = useState<string>('MOLDVOA');
  const [affineA, setAffineA] = useState<number>(7);
  const [affineB, setAffineB] = useState<number>(3);
  const [rsaMessage, setRsaMessage] = useState<number>(42);
  const [copied, setCopied] = useState(false);
  const [result, setResult] = useState<CipherResult | null>(null);

  const t = TRANSLATIONS[currentLang];

  useEffect(() => {
    if (activeCipherPreset) {
      setSelectedCipher(activeCipherPreset);
    }
  }, [activeCipherPreset]);

  // Re-run cipher execution when parameters change
  useEffect(() => {
    runCipher();
  }, [selectedCipher, inputText, keyParam, affineA, affineB, rsaMessage]);

  const runCipher = () => {
    let res: CipherResult;
    switch (selectedCipher) {
      case 'markovski':
        res = markovskiQuasigroupDemo(inputText, keyParam[0] || 'M');
        break;
      case 'rsa':
        res = rsaDemonstration(rsaMessage);
        break;
      case 'isotope':
        res = isotopeCipherDemo(inputText);
        break;
      case 'vigenere':
        res = vigenereEncrypt(inputText, keyParam || 'SECRET');
        break;
      case 'playfair':
        res = playfairEncrypt(inputText, keyParam || 'MONARCHY');
        break;
      case 'affine':
        res = affineEncrypt(inputText, affineA, affineB);
        break;
      default:
        res = markovskiQuasigroupDemo(inputText, 'M');
    }
    setResult(res);
  };

  const handleCopy = () => {
    if (result) {
      navigator.clipboard.writeText(result.ciphertext);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const ciphersList = [
    {
      id: 'markovski',
      name: 'Markovski Hybrid Quasigroup',
      tag: 'Research Signature',
      desc: 'Non-linear string transformation based on Latin squares & quasigroups.',
    },
    {
      id: 'rsa',
      name: 'RSA Modular Exponentiation',
      tag: 'Asymmetric Math',
      desc: 'Prime totient φ(n), modular multiplicative inverse, and square-and-multiply.',
    },
    {
      id: 'isotope',
      name: 'Isotope Groupoid Cipher',
      tag: 'Academic Paper',
      desc: 'Algebraic isotopy transformations (α, β, γ) over Galois field Z_26.',
    },
    {
      id: 'vigenere',
      name: 'Vigenère + IoC Analysis',
      tag: 'Polyalphabetic',
      desc: 'Periodic keystream shifts with Index of Coincidence statistical evaluation.',
    },
    {
      id: 'playfair',
      name: 'Playfair Digraph Matrix',
      tag: '5x5 Grid',
      desc: 'Digraph substitution using coordinates across a 5x5 key matrix.',
    },
    {
      id: 'affine',
      name: 'Affine Transformation',
      tag: 'Modular Algebra',
      desc: 'E(x) = (ax + b) mod 26 with Euclidean coprimality enforcement.',
    },
  ];

  return (
    <section id="crypto-lab" className="py-16 md:py-24 border-t border-slate-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-3">
            <Lock className="w-3.5 h-3.5" />
            <span>{t.cryptoLabHeading}</span>
          </div>
          <h2
            className={`font-display text-2xl sm:text-4xl font-extrabold tracking-tight ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            Interactive Cryptography Sandbox
          </h2>
          <p
            className={`mt-3 text-base leading-relaxed ${
              isDarkMode ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            Explore live mathematical demonstrations of the cryptographic algorithms, quasigroup ciphers, and groupoid isotopes researched and implemented by Mihai Lungu.
          </p>
        </div>

        {/* Cipher Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
          {ciphersList.map((cipher) => (
            <button
              key={cipher.id}
              onClick={() => setSelectedCipher(cipher.id)}
              className={`p-3 rounded-xl border text-left transition-all ${
                selectedCipher === cipher.id
                  ? 'bg-purple-600 text-white border-purple-500 shadow-lg shadow-purple-600/30'
                  : isDarkMode
                  ? 'bg-slate-900/80 text-slate-300 border-slate-800 hover:border-purple-500/40 hover:text-white'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-purple-300 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span
                  className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                    selectedCipher === cipher.id
                      ? 'bg-purple-900/60 text-purple-200'
                      : 'bg-purple-500/10 text-purple-400'
                  }`}
                >
                  {cipher.tag}
                </span>
              </div>
              <h4 className="text-xs font-bold font-display line-clamp-1">
                {cipher.name}
              </h4>
            </button>
          ))}
        </div>

        {/* Interactive Lab Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
          {/* Left Column: Controls & Input Parameters */}
          <div className="lg:col-span-5 space-y-6">
            <div
              className={`p-6 rounded-2xl border ${
                isDarkMode
                  ? 'bg-slate-900/70 border-slate-800 text-slate-300'
                  : 'bg-white border-slate-200 text-slate-700 shadow-sm'
              }`}
            >
              <h3
                className={`font-display text-lg font-bold mb-4 flex items-center gap-2 ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}
              >
                <Key className="w-4 h-4 text-purple-400" />
                <span>Cipher Parameters & Input</span>
              </h3>

              {/* Text Input (for non-RSA ciphers) */}
              {selectedCipher !== 'rsa' ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase font-bold">
                      {t.inputPlaintext}
                    </label>
                    <input
                      type="text"
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value.toUpperCase())}
                      placeholder="ENTER TEXT TO ENCRYPT..."
                      className={`w-full px-3.5 py-2.5 rounded-xl font-mono text-sm border focus:outline-none focus:ring-2 focus:ring-purple-500/50 ${
                        isDarkMode
                          ? 'bg-slate-950 border-slate-800 text-slate-200'
                          : 'bg-slate-50 border-slate-300 text-slate-900'
                      }`}
                    />
                  </div>

                  {/* Key / Parameter depending on cipher */}
                  {selectedCipher === 'vigenere' && (
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase font-bold">
                        Vigenère Secret Keyword
                      </label>
                      <input
                        type="text"
                        value={keyParam}
                        onChange={(e) => setKeyParam(e.target.value.toUpperCase())}
                        placeholder="KEYWORD..."
                        className={`w-full px-3.5 py-2.5 rounded-xl font-mono text-sm border focus:outline-none focus:ring-2 focus:ring-purple-500/50 ${
                          isDarkMode
                            ? 'bg-slate-950 border-slate-800 text-slate-200'
                            : 'bg-slate-50 border-slate-300 text-slate-900'
                        }`}
                      />
                    </div>
                  )}

                  {selectedCipher === 'playfair' && (
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase font-bold">
                        Playfair 5x5 Matrix Keyword
                      </label>
                      <input
                        type="text"
                        value={keyParam}
                        onChange={(e) => setKeyParam(e.target.value.toUpperCase())}
                        placeholder="MONARCHY..."
                        className={`w-full px-3.5 py-2.5 rounded-xl font-mono text-sm border focus:outline-none focus:ring-2 focus:ring-purple-500/50 ${
                          isDarkMode
                            ? 'bg-slate-950 border-slate-800 text-slate-200'
                            : 'bg-slate-50 border-slate-300 text-slate-900'
                        }`}
                      />
                    </div>
                  )}

                  {selectedCipher === 'markovski' && (
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase font-bold">
                        Initial Leader Element (L_0)
                      </label>
                      <input
                        type="text"
                        maxLength={1}
                        value={keyParam[0] || 'M'}
                        onChange={(e) => setKeyParam(e.target.value.toUpperCase())}
                        className={`w-20 px-3.5 py-2.5 rounded-xl font-mono text-center text-sm font-bold border focus:outline-none focus:ring-2 focus:ring-purple-500/50 ${
                          isDarkMode
                            ? 'bg-slate-950 border-slate-800 text-purple-400'
                            : 'bg-slate-50 border-slate-300 text-purple-700'
                        }`}
                      />
                      <span className="text-xs text-slate-500 ml-2">
                        Seed value for quasigroup feedback diffusion
                      </span>
                    </div>
                  )}

                  {selectedCipher === 'affine' && (
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-mono text-slate-400 mb-1.5 font-bold">
                          Slope (a) [gcd(a,26)=1]
                        </label>
                        <select
                          value={affineA}
                          onChange={(e) => setAffineA(Number(e.target.value))}
                          className={`w-full px-3.5 py-2.5 rounded-xl font-mono text-sm border ${
                            isDarkMode
                              ? 'bg-slate-950 border-slate-800 text-slate-200'
                              : 'bg-slate-50 border-slate-300 text-slate-900'
                          }`}
                        >
                          {[1, 3, 5, 7, 9, 11, 15, 17, 19, 21, 23, 25].map((val) => (
                            <option key={val} value={val}>
                              a = {val} (Coprime)
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-slate-400 mb-1.5 font-bold">
                          Shift (b) [0..25]
                        </label>
                        <input
                          type="number"
                          min={0}
                          max={25}
                          value={affineB}
                          onChange={(e) => setAffineB(Number(e.target.value))}
                          className={`w-full px-3.5 py-2.5 rounded-xl font-mono text-sm border ${
                            isDarkMode
                              ? 'bg-slate-950 border-slate-800 text-slate-200'
                              : 'bg-slate-50 border-slate-300 text-slate-900'
                          }`}
                        />
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                /* RSA Demonstration Inputs */
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase font-bold">
                      Message Integer M (M &lt; n)
                    </label>
                    <input
                      type="number"
                      min={2}
                      max={3000}
                      value={rsaMessage}
                      onChange={(e) => setRsaMessage(Number(e.target.value))}
                      className={`w-full px-3.5 py-2.5 rounded-xl font-mono text-sm border ${
                        isDarkMode
                          ? 'bg-slate-950 border-slate-800 text-slate-200'
                          : 'bg-slate-50 border-slate-300 text-slate-900'
                      }`}
                    />
                    <p className="text-xs text-slate-500 mt-1">
                      Demo primes configured: p = 61, q = 53 (Modulus n = 3233, φ(n) = 3120).
                    </p>
                  </div>
                </div>
              )}

              {/* Preset Sample Quick Buttons */}
              <div className="pt-4 border-t border-slate-800/60 mt-4">
                <span className="text-xs text-slate-400 font-mono block mb-2 font-bold">
                  Preset Test Inputs:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {['CRYPTOGRAPHYRESEARCH', 'MIHAILUNGU2025', 'QUASIGROUPISOTOPE', 'HELLOWORLD'].map(
                    (sample) => (
                      <button
                        key={sample}
                        onClick={() => setInputText(sample)}
                        className={`px-2.5 py-1 rounded-lg text-xs font-mono border transition-colors ${
                          inputText === sample
                            ? 'bg-purple-950 text-purple-300 border-purple-800'
                            : isDarkMode
                            ? 'bg-slate-950 text-slate-400 border-slate-800 hover:text-slate-200'
                            : 'bg-slate-100 text-slate-600 border-slate-300 hover:text-slate-900'
                        }`}
                      >
                        {sample}
                      </button>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Cipher Math & Information Card */}
            {result && (
              <div
                className={`p-6 rounded-2xl border ${
                  isDarkMode
                    ? 'bg-slate-900/70 border-slate-800 text-slate-300'
                    : 'bg-white border-slate-200 text-slate-700 shadow-sm'
                }`}
              >
                <div className="flex items-center gap-2 mb-3 text-purple-400 font-mono text-xs font-bold uppercase">
                  <Calculator className="w-4 h-4" />
                  <span>Mathematical Formalism</span>
                </div>
                <p className="text-xs leading-relaxed font-mono bg-purple-950/30 text-purple-200 p-3 rounded-xl border border-purple-800/30 mb-3">
                  {result.mathExplanation}
                </p>
                {result.matrixOrKeyInfo && (
                  <pre className="text-xs font-mono whitespace-pre-wrap bg-slate-950 text-slate-300 p-3 rounded-xl border border-slate-800">
                    {result.matrixOrKeyInfo}
                  </pre>
                )}
              </div>
            )}
          </div>

          {/* Right Column: Execution Output, Steps & Metrics */}
          <div className="lg:col-span-7 space-y-6">
            {/* Cipher Output Card */}
            <div
              className={`p-6 sm:p-7 rounded-2xl border shadow-xl ${
                isDarkMode
                  ? 'bg-slate-900/90 border-slate-800'
                  : 'bg-white border-slate-200 shadow-slate-900/5'
              }`}
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/60 mb-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <span
                    className={`font-display text-base font-bold ${
                      isDarkMode ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    Encrypted Transformation Output
                  </span>
                </div>

                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium bg-purple-600 hover:bg-purple-500 text-white transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied!' : t.copyResult}</span>
                </button>
              </div>

              {/* Result Display Box */}
              <div className="p-4 rounded-xl font-mono text-sm sm:text-base font-bold tracking-wider break-all bg-slate-950 text-emerald-400 border border-slate-800 min-h-[4rem] flex items-center">
                {result?.ciphertext || 'Ready for computation...'}
              </div>

              {/* Statistical Metrics Row (IoC & Entropy) */}
              {result?.stats && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 pt-4 border-t border-slate-800/60 text-xs font-mono">
                  <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800">
                    <span className="text-slate-500 block text-[10px]">Plaintext Length</span>
                    <span className="font-bold text-slate-200">
                      {result.stats.inputLength} chars
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800">
                    <span className="text-slate-500 block text-[10px]">Ciphertext Length</span>
                    <span className="font-bold text-slate-200">
                      {result.stats.outputLength} chars
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800">
                    <span className="text-slate-500 block text-[10px]">Index of Coincidence</span>
                    <span className="font-bold text-cyan-400">
                      {result.stats.ioc ?? 'N/A'}
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800">
                    <span className="text-slate-500 block text-[10px]">Shannon Entropy</span>
                    <span className="font-bold text-amber-400">
                      {result.stats.entropy ?? 'N/A'} bits
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Step-by-Step Computational Log */}
            <div
              className={`p-6 rounded-2xl border ${
                isDarkMode
                  ? 'bg-slate-900/70 border-slate-800 text-slate-300'
                  : 'bg-white border-slate-200 text-slate-700 shadow-sm'
              }`}
            >
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-800/60">
                <Binary className="w-4 h-4 text-cyan-400" />
                <h4
                  className={`font-display text-sm font-bold uppercase tracking-wider ${
                    isDarkMode ? 'text-slate-200' : 'text-slate-800'
                  }`}
                >
                  Step-by-Step Algorithmic Trace
                </h4>
              </div>

              <div className="space-y-2 max-h-72 overflow-y-auto pr-2 font-mono text-xs text-slate-300">
                {result?.steps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800/70 leading-relaxed"
                  >
                    {step}
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
