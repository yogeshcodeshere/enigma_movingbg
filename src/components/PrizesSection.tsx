'use client';

import React from 'react';
import { Trophy, Gift, CheckCircle2, Star } from 'lucide-react';
import { PRIZES, ADDITIONAL_REWARDS } from '../data/hackathonData';

export const PrizesSection: React.FC = () => {
  return (
    <section id="prizes" className="py-20 sm:py-28 px-4 sm:px-8 max-w-7xl mx-auto w-full relative">
      {/* Header */}
      <div className="mb-14 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-zinc-300 text-xs font-mono-code tracking-widest uppercase mb-4">
          <Trophy className="w-3.5 h-3.5 text-cyan-400" />
          <span>THE ₹25,000 PRIZE POOL</span>
        </div>
        <h2 className="section-title text-3xl sm:text-5xl font-black font-display tracking-tight text-white mb-4">
          REBUILD THE FUTURE. CLAIM THE BOUNTY.
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-zinc-300 font-light leading-relaxed">
          Great prototypes deserve real backing. Compete for verified cash rewards, trophies, CSI credentials, and career launchpads.
        </p>
      </div>

      {/* Main Prize Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 items-stretch">
        {PRIZES.map((prize) => {
          const isChampion = prize.isPopular;
          return (
            <div
              key={prize.rank}
              className={`p-6 sm:p-8 rounded-3xl transition-all duration-300 flex flex-col justify-between relative shadow-2xl ${
                isChampion
                  ? 'glass-panel border-white/20 lg:-translate-y-4 shadow-black/80 ring-1 ring-white/20'
                  : 'glass-panel-interactive'
              }`}
            >
              {isChampion && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#ff44f1] text-white font-bold font-mono-code text-[11px] uppercase tracking-widest shadow-[0_0_15px_rgba(255,68,241,0.4)] flex items-center gap-1.5 border border-pink-300/40">
                  <Star className="w-3 h-3 fill-white text-white" />
                  <span>TOP GRAND CHAMPION</span>
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-black font-display text-zinc-600">
                    {prize.rank}
                  </span>
                  <div className="p-3.5 rounded-2xl glass-pill text-zinc-200">
                    <Trophy className="w-6 h-6" />
                  </div>
                </div>

                <div className="text-xs font-mono-code text-zinc-400 uppercase tracking-wider mb-1">
                  {prize.title}
                </div>

                <div className="text-4xl sm:text-5xl font-black font-display text-white mb-4 tracking-tight">
                  {prize.amount}
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed mb-6">
                  {prize.description}
                </p>

                {/* Perks Checklist */}
                <div className="space-y-2.5 pt-4 border-t border-white/5">
                  <span className="text-[10px] font-mono-code text-zinc-500 uppercase tracking-wider block">
                    EXCLUSIVE PERKS & ACCESS
                  </span>
                  {prize.perks.map((perk, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 text-[11px] font-mono-code text-zinc-500 flex justify-between">
                <span>TIER // {prize.rank}</span>
                <span className="text-zinc-300 font-semibold">VERIFIED CASH & TROPHY</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Additional Rewards Bento Strip */}
      <div className="p-6 sm:p-8 rounded-3xl glass-panel shadow-2xl">
        <h3 className="text-xl font-bold font-display text-white mb-6 flex items-center gap-2">
          <Gift className="w-5 h-5 text-cyan-400" />
          <span>ADDITIONAL PERKS FOR ALL PARTICIPANTS</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ADDITIONAL_REWARDS.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl glass-pill hover:bg-white/10 transition-colors flex flex-col justify-between"
            >
              <div className="font-bold text-white text-sm mb-2 font-display">
                {item.title}
              </div>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
