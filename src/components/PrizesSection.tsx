'use client';

import React from 'react';
import { Trophy, Gift, CheckCircle2, Star } from 'lucide-react';
import { PRIZES, ADDITIONAL_REWARDS } from '../data/hackathonData';

export const PrizesSection: React.FC = () => {
  return (
    <section id="prizes" className="py-20 sm:py-28 px-4 sm:px-8 max-w-7xl mx-auto w-full relative">
      {/* Header */}
      <div className="mb-14 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-purple-300 text-xs font-mono-code tracking-widest uppercase mb-4">
          <Trophy className="w-3.5 h-3.5 text-purple-400" />
          <span>THE REWARD</span>
        </div>
        <h2 className="section-title text-3xl sm:text-5xl font-black font-display tracking-tight text-white mb-4">
          CRACK THE CODE. CLAIM THE PRIZE.
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-zinc-300 font-light leading-relaxed">
          Great ideas deserve more than applause. Compete for prizes, recognition, opportunities, and the chance to turn your hackathon project into something bigger.
        </p>
      </div>

      {/* Main Prize Cards Grid with Glassmorphism */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 items-stretch">
        {PRIZES.map((prize) => {
          const isChampion = prize.isPopular;
          return (
            <div
              key={prize.rank}
              className={`p-6 sm:p-8 rounded-3xl transition-all duration-300 flex flex-col justify-between relative shadow-2xl ${
                isChampion
                  ? 'glass-panel border-purple-500 bg-gradient-to-b from-purple-950/40 via-black/60 to-black/80 lg:-translate-y-4 shadow-purple-900/40 ring-1 ring-purple-500/40'
                  : 'glass-panel-interactive'
              }`}
            >
              {isChampion && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-purple-500 text-black font-bold font-mono-code text-[11px] uppercase tracking-widest shadow-lg flex items-center gap-1.5">
                  <Star className="w-3 h-3 fill-black text-black" />
                  <span>TOP GRAND PRIZE</span>
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-black font-display text-zinc-600">
                    {prize.rank}
                  </span>
                  <div
                    className="p-3.5 rounded-2xl glass-pill"
                    style={{ borderColor: `${prize.accent}50`, color: prize.accent }}
                  >
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
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 text-[11px] font-mono-code text-zinc-500 flex justify-between">
                <span>TIER // {prize.rank}</span>
                <span className="text-purple-400 font-semibold">VERIFIED CASH & GRANTS</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Additional Rewards Bento Strip */}
      <div className="p-6 sm:p-8 rounded-3xl glass-panel shadow-2xl">
        <h3 className="text-xl font-bold font-display text-white mb-6 flex items-center gap-2">
          <Gift className="w-5 h-5 text-purple-400" />
          <span>ADDITIONAL REWARDS FOR ALL TEAMS</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {ADDITIONAL_REWARDS.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl glass-pill hover:border-purple-500/40 transition-colors flex flex-col justify-between"
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
