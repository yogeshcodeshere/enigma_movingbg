'use client';

import React, { useState } from 'react';
import { Target, ArrowRight } from 'lucide-react';
import { PROBLEM_STATEMENTS } from '../data/hackathonData';
import { ProblemStatement } from '../types';

interface ProblemStatementsProps {
  onSelectChallenge: (challenge: ProblemStatement) => void;
}

export const ProblemStatements: React.FC<ProblemStatementsProps> = ({ onSelectChallenge }) => {
  const [selectedDomain, setSelectedDomain] = useState<string>('ALL');

  const domains = ['ALL', 'HEALTHCARE', 'FINANCE', 'SUSTAINABILITY'];

  const filteredChallenges =
    selectedDomain === 'ALL'
      ? PROBLEM_STATEMENTS
      : PROBLEM_STATEMENTS.filter((p) => p.domain.toUpperCase() === selectedDomain);

  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case 'EASY':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'MEDIUM':
        return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30';
      case 'HARD':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
      case 'CHALLENGER':
        return 'bg-rose-500/10 text-rose-400 border-rose-500/30';
      default:
        return 'bg-zinc-500/10 text-zinc-400 border-zinc-500/30';
    }
  };

  return (
    <section id="missions" className="py-20 sm:py-28 px-4 sm:px-8 max-w-7xl mx-auto w-full relative">
      {/* Section Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-zinc-300 text-xs font-mono-code tracking-widest uppercase mb-4">
          <Target className="w-3.5 h-3.5 text-[#ff44f1]" />
          <span>THE MISSIONS</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="section-title text-3xl sm:text-5xl font-black font-display tracking-tight text-white mb-4">
              CHOOSE YOUR ENIGMA.
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-zinc-300 max-w-2xl font-light leading-relaxed">
              Different problems across Health, Finance, and Sustainability. One objective — build something that matters for the 2097 future.
            </p>
          </div>
        </div>

        {/* Filter Pills with #ff44f1 Active State */}
        <div className="flex flex-wrap gap-2 mt-8">
          {domains.map((domain) => (
            <button
              key={domain}
              id={`filter-${domain.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              onClick={() => setSelectedDomain(domain)}
              className={`px-3.5 py-2 rounded-xl text-xs font-mono-code transition-all cursor-pointer ${
                selectedDomain === domain
                  ? 'bg-[#ff44f1] text-white font-bold shadow-[0_0_18px_rgba(255,68,241,0.35)] border border-pink-300/40'
                  : 'glass-pill text-zinc-400 hover:text-zinc-200 hover:bg-white/10'
              }`}
            >
              {domain}
            </button>
          ))}
        </div>
      </div>

      {/* Problem Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredChallenges.map((challenge) => (
          <div
            key={challenge.id}
            className="p-6 sm:p-7 rounded-3xl glass-panel-interactive flex flex-col justify-between group shadow-xl"
          >
            <div>
              {/* Card Meta Top */}
              <div className="flex items-center justify-between gap-2 mb-4 text-xs font-mono-code">
                <span className="text-zinc-300 font-bold uppercase tracking-wider text-[11px]">
                  {challenge.domain}
                </span>
                <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-bold border ${getDifficultyColor(challenge.difficulty)}`}>
                  {challenge.difficulty}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold font-display text-white mb-3 tracking-tight leading-snug">
                {challenge.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed mb-6 line-clamp-3">
                {challenge.description}
              </p>

              {/* Tech Stack */}
              <div className="mb-6">
                <div className="text-[10px] font-mono-code text-zinc-500 uppercase tracking-wider mb-2">
                  TECH STACK
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {challenge.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded-md glass-pill text-[11px] font-mono-code text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4 border-t border-white/5">
              <button
                id={`btn-view-challenge-${challenge.id.toLowerCase()}`}
                onClick={() => onSelectChallenge(challenge)}
                className="w-full py-2.5 px-4 rounded-xl glass-pill hover:bg-[#ff44f1] hover:text-white text-xs font-mono-code text-zinc-300 font-semibold flex items-center justify-between transition-all cursor-pointer"
              >
                <span>VIEW CHALLENGE</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
