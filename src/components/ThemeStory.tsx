import React, { useState } from 'react';
import { Terminal, Key, CheckCircle, HelpCircle, RefreshCw, Sparkles, Shield } from 'lucide-react';
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
      setFeedbackMessage('ACCESS GRANTED: Cipher Decoded Successfully! Protocol unsealed.');
    } else {
      setFeedbackMessage('ACCESS DENIED: Hash mismatch. Check hint and retry.');
    }
  };

  const handleNextCipher = () => {
    setUserInput('');
    setIsDecrypted(false);
    setFeedbackMessage(null);
    setActiveCipherIdx((prev) => (prev + 1) % EASTER_EGG_CIPHERS.length);
  };

  return (
    <section id="theme-story" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto w-full relative">
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#0b0b14] via-[#08080f] to-[#050508] border border-purple-500/20 shadow-2xl relative overflow-hidden">
        {/* Cyber glow elements */}
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left: Story Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono-code tracking-widest uppercase">
              <Key className="w-3.5 h-3.5 text-purple-400" />
              <span>{THEME_STORY_DATA.sectionLabel}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white leading-tight">
              {THEME_STORY_DATA.heading}
            </h2>

            <div className="space-y-3 text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
              {THEME_STORY_DATA.bodyParagraphs.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10">
              <p className="text-xl sm:text-2xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-white to-cyan-300">
                {THEME_STORY_DATA.keyQuestion}
              </p>
            </div>
          </div>

          {/* Right: Interactive Cipher Decryption Terminal Widget */}
          <div className="lg:col-span-5 bg-black/70 backdrop-blur-md rounded-2xl border border-white/10 p-6 font-mono-code shadow-2xl">
            {/* Terminal Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <span className="text-zinc-300 font-semibold text-[11px] ml-2">CIPHER_DECRYPTOR.sh</span>
              </div>
              <span className="text-[10px] text-purple-400">CIPHER #{activeCipherIdx + 1}/3</span>
            </div>

            {/* Terminal Screen */}
            <div className="space-y-4 text-xs">
              <div className="p-3.5 rounded-lg bg-white/5 border border-white/10 space-y-2">
                <div className="text-zinc-500 text-[10px] uppercase tracking-wider">ENCRYPTED PAYLOAD:</div>
                <div className="text-sm font-bold text-cyan-300 break-all select-all">
                  {activeCipher.encoded}
                </div>
              </div>

              <div className="flex items-start gap-2 text-zinc-400 text-[11px]">
                <HelpCircle className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                <span><strong className="text-zinc-300">HINT:</strong> {activeCipher.hint}</span>
              </div>

              <form onSubmit={handleVerify} className="space-y-3">
                <div>
                  <label className="text-[10px] text-zinc-500 uppercase block mb-1">
                    ENTER DECRYPTED TEXT:
                  </label>
                  <div className="flex gap-2">
                    <input
                      id="input-cipher-guess"
                      type="text"
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      placeholder="e.g. DECODE"
                      className="flex-1 bg-black/60 border border-white/15 focus:border-purple-500 rounded-lg px-3 py-2 text-white font-mono-code text-xs outline-none uppercase placeholder:text-zinc-600"
                    />
                    <button
                      id="btn-verify-cipher"
                      type="submit"
                      className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-lg text-xs transition-colors cursor-pointer"
                    >
                      DECRYPT
                    </button>
                  </div>
                </div>
              </form>

              {/* Feedback Alert */}
              {feedbackMessage && (
                <div
                  className={`p-3 rounded-lg text-xs flex items-center gap-2 ${
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
                <span>ENIGMA_SECURITY_GRID v2.6</span>
                <button
                  type="button"
                  onClick={handleNextCipher}
                  className="flex items-center gap-1 text-purple-400 hover:text-purple-300 transition-colors cursor-pointer"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Next Challenge</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
