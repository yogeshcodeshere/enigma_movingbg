'use client';

import React, { useState } from 'react';
import { CheckCircle, HelpCircle, RefreshCw, Shield, Sparkles } from 'lucide-react';
import { THEME_STORY_DATA, EASTER_EGG_CIPHERS } from '../data/hackathonData';

export const ThemeStory: React.FC = () => {
  const [activeCipherIdx, setActiveCipherIdx] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [isDecrypted, setIsDecrypted] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);

  const activeCipher = EASTER_EGG_CIPHERS[activeCipherIdx];

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    if (userInput.trim().toUpperCase() === activeCipher.solution.toUpperCase()) {
      setIsDecrypted(true);
      setFeedbackMessage('ACCESS GRANTED: Protocol unsealed. Welcome to 2097.');
    } else {
      setFeedbackMessage('ACCESS DENIED: Hash mismatch. Review hint and retry.');
    }
  };

  const handleNextCipher = () => {
    setUserInput('');
    setIsDecrypted(false);
    setFeedbackMessage(null);
    setActiveCipherIdx((prev) => (prev + 1) % EASTER_EGG_CIPHERS.length);
  };

  return (
    <section id="theme-story" className="py-20 sm:py-28 px-4 sm:px-8 max-w-7xl mx-auto w-full relative">
      <div className="p-6 sm:p-12 rounded-3xl glass-panel shadow-2xl relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          
          {/* Left: 2097 Story Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-zinc-300 text-xs font-mono-code tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#ff3377]" />
              <span>THE YEAR IS 2097</span>
            </div>

            <h2 className="section-title text-3xl sm:text-5xl font-black font-display tracking-tight text-white leading-tight">
              THE FUTURE IS UNRAVELING.
            </h2>

            <div className="space-y-4 text-sm sm:text-base md:text-lg text-zinc-300 font-light leading-relaxed">
              <p>
                Humanity has reached a future it once believed would be perfect. But the systems built to make life better have begun to fail.
              </p>
              <div className="p-4 rounded-2xl glass-panel border-l-4 border-[#ff3377] font-medium text-white space-y-1">
                <p className="text-zinc-400 font-mono-code text-sm uppercase tracking-wider">CRITICAL FAILING SYSTEMS:</p>
                <p className="text-lg font-display">Healthcare • Finance • Sustainability</p>
              </div>
              <p>
                Three systems now stand between humanity and the future it imagined.
              </p>
              <p className="text-zinc-200">
                <strong className="text-white font-semibold">GENESIS</strong> gives innovators a chance to go back to the beginning—to rethink, rebuild and create solutions for a future worth living in.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10">
              <blockquote className="text-xl sm:text-2xl font-bold font-display text-white italic">
                {THEME_STORY_DATA.keyQuestion}
              </blockquote>
            </div>
          </div>

          {/* Right: Interactive 2097 Decryptor Console */}
          <div className="lg:col-span-5 bg-black/70 backdrop-blur-2xl rounded-3xl border border-white/10 p-5 sm:p-6 font-mono-code shadow-2xl">
            {/* Console Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <span className="text-zinc-300 font-semibold text-[11px] ml-2">GENESIS_2097_ARCHIVE.sh</span>
              </div>
              <span className="text-[10px] text-zinc-400">CIPHER #{activeCipherIdx + 1}/3</span>
            </div>

            {/* Terminal Screen */}
            <div className="space-y-4 text-xs">
              <div className="p-3.5 rounded-xl glass-panel space-y-2">
                <div className="text-zinc-500 text-[10px] uppercase tracking-wider">ENCRYPTED 2097 LOG:</div>
                <div className="text-sm font-bold text-white break-all select-all">
                  {activeCipher.encoded}
                </div>
              </div>

              <div className="flex items-start gap-2 text-zinc-400 text-[11px]">
                <HelpCircle className="w-3.5 h-3.5 text-[#ff3377] shrink-0 mt-0.5" />
                <span><strong className="text-zinc-300">HINT:</strong> {activeCipher.hint}</span>
              </div>

              <form onSubmit={handleVerify} className="space-y-3">
                <div>
                  <label className="text-[10px] text-zinc-500 uppercase block mb-1">
                    INPUT DECODED SEQUENCE:
                  </label>
                  <div className="flex gap-2">
                    <input
                      id="input-cipher-guess"
                      type="text"
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      placeholder="e.g. GENESIS"
                      className="flex-1 glass-input rounded-xl px-3 py-2 text-white font-mono-code text-xs outline-none uppercase placeholder:text-zinc-600"
                    />
                    <button
                      id="btn-verify-cipher"
                      type="submit"
                      className="px-4 py-2 bg-[#ff3377] hover:bg-[#ff4d8d] text-white font-mono-code font-bold rounded-xl text-xs transition-colors cursor-pointer shadow-[0_0_16px_rgba(255,51,119,0.3)]"
                    >
                      DECRYPT
                    </button>
                  </div>
                </div>
              </form>

              {/* Feedback Alert */}
              {feedbackMessage && (
                <div
                  className={`p-3 rounded-xl text-xs flex items-center gap-2 ${
                    isDecrypted
                      ? 'bg-emerald-950/50 border border-emerald-500/40 text-emerald-300'
                      : 'bg-red-950/50 border border-red-500/40 text-red-300'
                  }`}
                >
                  {isDecrypted ? (
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  ) : (
                    <Shield className="w-4 h-4 text-red-400 shrink-0" />
                  )}
                  <span>{feedbackMessage}</span>
                </div>
              )}

              {/* Next Cipher Button */}
              <div className="pt-2 flex justify-between items-center text-[11px] text-zinc-500">
                <span>ENIGMA 5.0 PROTOCOL</span>
                <button
                  type="button"
                  onClick={handleNextCipher}
                  className="flex items-center gap-1 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Next Archive</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
