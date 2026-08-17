'use client';

import React, { useState } from 'react';
import { Hammer, Users, Sparkles, Award, Trophy, Briefcase, Scale, Layers } from 'lucide-react';
import { WHY_PARTICIPATE, JUDGING_CRITERIA } from '../data/hackathonData';

export const WhyParticipate: React.FC = () => {
  const [activeCriteriaIdx, setActiveCriteriaIdx] = useState<number | null>(null);

  const getWhyIcon = (iconName: string) => {
    switch (iconName) {
      case 'Hammer':
        return <Hammer className="w-6 h-6 text-zinc-300" />;
      case 'Users':
        return <Users className="w-6 h-6 text-zinc-300" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-zinc-300" />;
      case 'Award':
        return <Award className="w-6 h-6 text-zinc-300" />;
      case 'Trophy':
        return <Trophy className="w-6 h-6 text-zinc-300" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-zinc-300" />;
      default:
        return <Layers className="w-6 h-6 text-zinc-300" />;
    }
  };

  return (
    <section id="judging" className="py-20 sm:py-28 px-4 sm:px-8 max-w-7xl mx-auto w-full relative">
      {/* 09 — WHY PARTICIPATE */}
      <div className="mb-28">
        <div className="mb-14 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-zinc-300 text-xs font-mono-code tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>THE EXPERIENCE</span>
          </div>
          <h2 className="section-title text-3xl sm:text-5xl font-black font-display tracking-tight text-white mb-4">
            WHY JOIN ENIGMA 5.0?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-zinc-300 font-light leading-relaxed">
            Whether you want to build a standout portfolio product, test your limits in 24 hours, or win cash prizes — here is why you belong here.
          </p>
        </div>

        {/* 4 Key Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_PARTICIPATE.map((item) => (
            <div
              key={item.number}
              className="p-6 sm:p-8 rounded-3xl glass-panel-interactive flex flex-col justify-between group shadow-xl relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-black font-display text-zinc-600 group-hover:text-zinc-300 transition-colors">
                    {item.number}
                  </span>
                  <div className="p-3 rounded-2xl glass-pill">
                    {getWhyIcon(item.icon)}
                  </div>
                </div>

                <h3 className="text-xl font-bold font-display text-white mb-3 tracking-tight">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 text-[11px] font-mono-code text-zinc-500">
                <span>ENIGMA_VALUE // 0{item.number}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 11 — JUDGING CRITERIA */}
      <div className="pt-12 border-t border-white/10">
        <div className="mb-14 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-zinc-300 text-xs font-mono-code tracking-widest uppercase mb-4">
            <Scale className="w-3.5 h-3.5 text-cyan-400" />
            <span>EVALUATION PROTOCOL</span>
          </div>
          <h2 className="section-title text-3xl sm:text-5xl font-black font-display tracking-tight text-white mb-4">
            HOW WILL YOU BE JUDGED?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-zinc-300 font-light leading-relaxed">
            Our jury panel evaluates every prototype transparently against four core pillars. Focus your efforts to maximize scores across the matrix.
          </p>
        </div>

        {/* Judging Metrics Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {JUDGING_CRITERIA.map((criterion, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setActiveCriteriaIdx(idx)}
              onMouseLeave={() => setActiveCriteriaIdx(null)}
              className={`p-6 sm:p-8 rounded-3xl transition-all duration-300 flex flex-col justify-between shadow-xl ${
                activeCriteriaIdx === idx
                  ? 'glass-panel border-white/20 bg-white/[0.04] ring-1 ring-white/20'
                  : 'glass-panel-interactive'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono-code text-zinc-300 font-bold tracking-wider">
                    WEIGHT: {criterion.weight}
                  </span>
                  <div className="h-1.5 w-16 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#ff44f1] rounded-full shadow-[0_0_8px_rgba(255,68,241,0.45)]"
                      style={{ width: criterion.weight }}
                    />
                  </div>
                </div>

                <h3 className="text-xl font-bold font-display text-white mb-2 tracking-tight">
                  {criterion.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-300 font-medium mb-3">
                  {criterion.description}
                </p>

                <div className="p-3.5 rounded-xl glass-pill text-xs font-mono-code text-zinc-400 leading-relaxed">
                  <span className="text-zinc-200 font-bold block mb-1">METRIC:</span>
                  {criterion.metric}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 text-[11px] font-mono-code text-zinc-500 flex justify-between">
                <span>CRITERION 0{idx + 1}</span>
                <span className="text-zinc-300 font-semibold">{criterion.weight} TOTAL</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
