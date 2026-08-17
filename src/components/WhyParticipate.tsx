import React, { useState } from 'react';
import { Hammer, Users, Sparkles, Award, Trophy, Briefcase, BarChart3, CheckCircle, Scale } from 'lucide-react';
import { WHY_PARTICIPATE, JUDGING_CRITERIA } from '../data/hackathonData';

export const WhyParticipate: React.FC = () => {
  const [activeCriteriaIdx, setActiveCriteriaIdx] = useState<number | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Hammer':
        return <Hammer className="w-6 h-6 text-purple-400" />;
      case 'Users':
        return <Users className="w-6 h-6 text-cyan-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-amber-400" />;
      case 'Award':
        return <Award className="w-6 h-6 text-pink-400" />;
      case 'Trophy':
        return <Trophy className="w-6 h-6 text-emerald-400" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-indigo-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-purple-400" />;
    }
  };

  return (
    <section id="why" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto w-full relative">
      
      {/* 10 — WHY PARTICIPATE? */}
      <div className="mb-28">
        <div className="mb-14 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono-code tracking-widest uppercase mb-4">
            <span>VALUE PROPOSITION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white mb-4">
            WHAT'S IN IT FOR YOU?
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
            Whether you are here to build, learn, compete, or connect — ENIGMA offers exponential returns on your 36 hours of focused sprint effort.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_PARTICIPATE.map((card) => (
            <div
              key={card.number}
              className="p-8 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 group-hover:scale-105 transition-transform">
                    {getIcon(card.icon)}
                  </div>
                  <span className="text-2xl font-black font-display text-zinc-600 group-hover:text-purple-400 transition-colors">
                    {card.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-display text-white mb-3 tracking-tight group-hover:text-purple-200 transition-colors">
                  {card.title}
                </h3>

                <p className="text-sm text-zinc-400 font-light leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 text-[11px] font-mono-code text-zinc-500 flex justify-between">
                <span>ENIGMA_BENEFIT // {card.number}</span>
                <span className="text-purple-400 group-hover:translate-x-1 transition-transform">UNLOCK →</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 11 — JUDGING CRITERIA */}
      <div id="judging" className="pt-12 border-t border-white/10">
        <div className="mb-14 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono-code tracking-widest uppercase mb-4">
            <Scale className="w-3.5 h-3.5 text-purple-400" />
            <span>EVALUATION PROTOCOL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white mb-4">
            HOW WILL YOU BE JUDGED?
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
            Our jury panel evaluates every prototype transparently against six core pillars. Focus your efforts to maximize scores across the evaluation matrix.
          </p>
        </div>

        {/* Judging Metrics Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {JUDGING_CRITERIA.map((criterion, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setActiveCriteriaIdx(idx)}
              onMouseLeave={() => setActiveCriteriaIdx(null)}
              className={`p-6 sm:p-8 rounded-2xl bg-black/40 backdrop-blur-md border transition-all duration-300 flex flex-col justify-between shadow-xl ${
                activeCriteriaIdx === idx
                  ? 'border-purple-500 bg-purple-950/20 shadow-purple-900/30'
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono-code text-purple-400 font-bold tracking-wider">
                    WEIGHT: {criterion.weight}
                  </span>
                  <div className="h-1.5 w-16 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"
                      style={{ width: criterion.weight }}
                    />
                  </div>
                </div>

                <h3 className="text-2xl font-bold font-display text-white mb-2 tracking-tight">
                  {criterion.title}
                </h3>

                <p className="text-sm text-zinc-300 font-medium mb-3">
                  {criterion.description}
                </p>

                <div className="p-3 rounded-lg bg-white/5 border border-white/5 text-xs font-mono-code text-zinc-400 leading-relaxed">
                  <span className="text-zinc-500 uppercase block text-[10px] mb-1">EVALUATION METRIC:</span>
                  {criterion.metric}
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-white/5 text-[11px] font-mono-code text-zinc-500 flex justify-between">
                <span>CRITERION 0{idx + 1}</span>
                <span className="text-purple-400">TOTAL WEIGHT {criterion.weight}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
