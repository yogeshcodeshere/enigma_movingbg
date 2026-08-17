'use client';

import React, { useState } from 'react';
import { MessageSquare, Users, Zap } from 'lucide-react';

interface CommunityFinalCTAProps {
  onOpenRegister: () => void;
  onExploreMissions: () => void;
}

export const CommunityFinalCTA: React.FC<CommunityFinalCTAProps> = ({
  onOpenRegister,
  onExploreMissions,
}) => {
  const [selectedRole] = useState('ALL');

  const simulatedHackers = [
    { name: 'Alex M.', role: 'AI / LangChain', college: 'SIESGST', seeking: 'Frontend Designer' },
    { name: 'Priya K.', role: 'Solidity / ZK', college: 'IIT Bombay', seeking: 'Rust Engineer' },
    { name: 'Dev R.', role: 'UI/UX & 3D Motion', college: 'NID', seeking: 'Full-stack Dev' },
    { name: 'Sameer T.', role: 'Go / Distributed Systems', college: 'VJTI', seeking: 'ML Specialist' },
  ];

  const filteredHackers =
    selectedRole === 'ALL'
      ? simulatedHackers
      : simulatedHackers.filter((h) => h.role.toLowerCase().includes(selectedRole.toLowerCase()));

  return (
    <section id="community" className="py-20 sm:py-28 px-4 sm:px-8 max-w-7xl mx-auto w-full relative">
      
      {/* 16 — COMMUNITY / DISCORD */}
      <div className="mb-28 p-6 sm:p-12 rounded-3xl glass-panel shadow-2xl relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-zinc-300 text-xs font-mono-code tracking-widest uppercase">
              <MessageSquare className="w-3.5 h-3.5 text-[#ff44f1]" />
              <span>THE NETWORK</span>
            </div>

            <h2 className="section-title text-3xl sm:text-5xl font-black font-display tracking-tight text-white leading-tight">
              DON'T BUILD ALONE.
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-zinc-300 font-light leading-relaxed">
              Join the ENIGMA community for announcements, updates, team formation, mentorship, discussions, and everything happening before the hackathon.
            </p>

            <div className="space-y-3 pt-2">
              <a
                id="btn-discord-join"
                href="https://discord.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#5865F2] hover:bg-[#4752c4] text-white font-mono-code font-bold text-xs sm:text-sm tracking-wider uppercase shadow-lg shadow-[#5865F2]/30 transition-all hover:scale-102 active:scale-98"
              >
                <span>JOIN THE COMMUNITY →</span>
              </a>

              <p className="text-xs font-mono-code text-zinc-400 font-medium block">
                YOUR NEXT TEAMMATE MIGHT ALREADY BE HERE.
              </p>
            </div>
          </div>

          {/* Right: Teammate Matchmaker Radar Preview */}
          <div className="lg:col-span-6 bg-black/60 backdrop-blur-2xl rounded-2xl border border-white/10 p-5 sm:p-6 font-mono-code">
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 text-xs">
              <div className="flex items-center gap-2 text-zinc-300">
                <Users className="w-4 h-4 text-[#ff44f1]" />
                <span className="font-bold">TEAM FORMATION INCUBATOR</span>
              </div>
              <span className="flex items-center gap-1.5 text-emerald-400 text-[10px]">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>142 ONLINE</span>
              </span>
            </div>

            {/* Hacker Feed List */}
            <div className="space-y-2.5 mb-4">
              {filteredHackers.map((hacker, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl glass-pill hover:bg-white/10 transition-colors flex items-center justify-between text-xs"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white">{hacker.name}</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-zinc-300 font-semibold">
                        {hacker.role}
                      </span>
                    </div>
                    <span className="text-[10px] text-zinc-500">{hacker.college} • Seeking: {hacker.seeking}</span>
                  </div>

                  <a
                    href="https://discord.com"
                    target="_blank"
                    rel="noreferrer"
                    className="px-2.5 py-1 rounded-lg glass-pill hover:bg-[#ff44f1] hover:text-white text-zinc-300 text-[10px] font-semibold transition-colors"
                  >
                    CONNECT
                  </a>
                </div>
              ))}
            </div>

            <div className="text-[10px] text-zinc-500 text-center">
              Verified Discord channel matches solo registrants within 10 minutes of sign up.
            </div>
          </div>

        </div>
      </div>

      {/* 17 — FINAL CTA with Minimalistic Glassmorphism */}
      <div id="final-cta" className="p-8 sm:p-16 rounded-3xl glass-panel shadow-2xl text-center relative overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-zinc-300 text-xs font-mono-code tracking-widest uppercase">
            <Zap className="w-3.5 h-3.5 text-[#ff44f1]" />
            <span>FINAL PROTOCOL INITIATION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-7xl font-black font-display tracking-tight text-white leading-none">
            READY TO CRACK THE CODE?
          </h2>

          <div className="space-y-1 text-base sm:text-xl text-zinc-300 font-light leading-relaxed">
            <p>The challenge is waiting.</p>
            <p>The clock is ticking.</p>
            <p>Your solution is still an idea.</p>
            <p className="text-xl sm:text-2xl font-bold font-display text-white pt-2">
              Make it real.
            </p>
          </div>

          {/* Action CTAs with Cyberpunk #ff44f1 button */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              id="btn-final-enter-enigma"
              onClick={onOpenRegister}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#ff44f1] hover:bg-[#ff6bf4] text-white font-mono-code font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_0_24px_rgba(255,68,241,0.35)] border border-pink-300/40 hover:scale-105 active:scale-98 transition-all cursor-pointer"
            >
              <span>[ ENTER ENIGMA → ]</span>
            </button>

            <button
              id="btn-final-view-problems"
              onClick={onExploreMissions}
              className="w-full sm:w-auto px-8 py-4 rounded-xl glass-pill hover:bg-white/10 text-zinc-200 hover:text-white font-mono-code font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <span>VIEW PROBLEM STATEMENTS</span>
            </button>
          </div>

          <div className="text-xs font-mono-code text-zinc-500 pt-4">
            REGISTRATION DEADLINE: 10 SEPTEMBER 2026 // 4 MEMBERS PER SQUAD
          </div>
        </div>
      </div>

    </section>
  );
};
