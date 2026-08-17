'use client';

import React from 'react';
import { X, CheckCircle2, FileText, Cpu, ArrowRight } from 'lucide-react';
import { ProblemStatement } from '../types';

interface ChallengeModalProps {
  challenge: ProblemStatement | null;
  onClose: () => void;
  onSelectForRegister: (challenge: ProblemStatement) => void;
}

export const ChallengeModal: React.FC<ChallengeModalProps> = ({
  challenge,
  onClose,
  onSelectForRegister,
}) => {
  if (!challenge) return null;

  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case 'EASY':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'MEDIUM':
        return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30';
      case 'HARD':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
      case 'CHALLENGER':
        return 'bg-purple-500/10 text-purple-400 border-purple-500/30';
      default:
        return 'bg-zinc-500/10 text-zinc-400 border-zinc-500/30';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-2xl animate-fadeIn">
      <div className="relative w-full max-w-2xl max-h-[88vh] sm:max-h-[90vh] overflow-y-auto glass-modal rounded-3xl p-5 sm:p-8 font-sans">
        
        {/* Close Button */}
        <button
          id="btn-close-challenge-modal"
          onClick={onClose}
          className="absolute top-5 right-5 sm:top-6 sm:right-6 p-2 rounded-full glass-pill text-zinc-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Tags */}
        <div className="flex flex-wrap items-center gap-2.5 mb-4 text-xs font-mono-code">
          <span className="px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/30 text-purple-300 font-bold">
            {challenge.domain}
          </span>
          <span className={`px-2.5 py-1 rounded-md border ${getDifficultyColor(challenge.difficulty)} font-semibold`}>
            DIFFICULTY: {challenge.difficulty}
          </span>
          <span className="text-zinc-500 ml-auto">
            ID: {challenge.id}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-xl sm:text-3xl font-bold font-display text-white mb-4 leading-tight">
          {challenge.title}
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-base text-zinc-300 mb-6 leading-relaxed font-light">
          {challenge.description}
        </p>

        {/* Background Story */}
        {challenge.backgroundStory && (
          <div className="mb-6 p-4 rounded-2xl glass-panel font-mono-code text-xs text-zinc-300 space-y-1">
            <span className="text-[10px] text-purple-400 uppercase tracking-widest block font-bold">CONTEXT / THREAT MODEL</span>
            <p className="text-zinc-300 leading-relaxed font-sans font-light">{challenge.backgroundStory}</p>
          </div>
        )}

        {/* Tech Stack */}
        <div className="mb-6">
          <h4 className="text-xs font-mono-code text-zinc-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-purple-400" />
            <span>RECOMMENDED TECH STACK</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {challenge.techStack.map((tech, i) => (
              <span key={i} className="px-2.5 py-1 rounded-md glass-pill text-xs font-mono-code text-zinc-200">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Expected Outcomes */}
        <div className="mb-6">
          <h4 className="text-xs font-mono-code text-zinc-400 uppercase tracking-wider mb-2">
            EXPECTED SYSTEM OUTCOMES
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
            {challenge.expectedOutcomes.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Deliverables */}
        <div className="mb-8">
          <h4 className="text-xs font-mono-code text-zinc-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <FileText className="w-3.5 h-3.5 text-cyan-400" />
            <span>SUBMISSION DELIVERABLES</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {challenge.deliverables.map((deliv, i) => (
              <div key={i} className="p-3 rounded-xl glass-panel text-xs text-zinc-300">
                {deliv}
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-white/10">
          <button
            id="btn-modal-choose-challenge"
            onClick={() => {
              onSelectForRegister(challenge);
              onClose();
            }}
            className="w-full sm:w-auto flex-1 py-3 px-6 rounded-2xl bg-purple-600 hover:bg-purple-500 text-white font-bold font-display text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg cursor-pointer transition-colors"
          >
            <span>REGISTER WITH THIS CHALLENGE</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onClose}
            className="w-full sm:w-auto py-3 px-6 rounded-2xl glass-pill hover:bg-white/10 text-zinc-400 hover:text-white text-xs font-mono-code transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
