import React from 'react';
import { motion } from 'motion/react';
import { Binary, Cpu, Zap, ArrowUpRight, ShieldAlert, Layers } from 'lucide-react';
import { ABOUT_DATA, WHAT_IS_ENIGMA_DATA } from '../data/hackathonData';

export const AboutIntro: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Binary':
        return <Binary className="w-6 h-6 text-purple-400" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-cyan-400" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-pink-400" />;
      default:
        return <Layers className="w-6 h-6 text-purple-400" />;
    }
  };

  return (
    <section id="about" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto w-full relative">
      {/* 02 — INTRO / ABOUT ENIGMA */}
      <div className="mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono-code tracking-widest uppercase mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
          <span>{ABOUT_DATA.sectionLabel}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white leading-tight">
              {ABOUT_DATA.heading}
            </h2>
            
            {/* Highlight box */}
            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-purple-950/40 via-purple-900/20 to-black/40 border border-purple-500/30 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />
              <p className="text-xl sm:text-2xl font-bold font-display tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-purple-400 whitespace-pre-line leading-snug">
                {ABOUT_DATA.highlight}
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-5 text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
            {ABOUT_DATA.bodyParagraphs.map((paragraph, index) => (
              <p key={index} className={index === 0 ? 'text-xl font-normal text-white' : ''}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* 03 — WHAT IS ENIGMA? */}
      <div className="pt-12 border-t border-white/10">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white mb-6">
            {WHAT_IS_ENIGMA_DATA.heading}
          </h2>
          <div className="space-y-4 text-zinc-300 leading-relaxed font-light">
            {WHAT_IS_ENIGMA_DATA.bodyParagraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>

        {/* 3 Feature Cards (01 DECODE, 02 CREATE, 03 DISRUPT) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {WHAT_IS_ENIGMA_DATA.featureCards.map((card) => (
            <div
              key={card.number}
              className="p-8 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle top background glow on hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 group-hover:bg-purple-500/15 rounded-full blur-2xl transition-all" />

              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-3xl font-black font-display tracking-tight text-zinc-600 group-hover:text-purple-400 transition-colors">
                    {card.number}
                  </span>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-purple-500/40 transition-colors">
                    {getIcon(card.icon)}
                  </div>
                </div>

                <div className="text-[10px] font-mono-code text-purple-400 tracking-wider mb-1">
                  {card.badge}
                </div>
                <h3 className="text-2xl font-bold font-display text-white tracking-tight mb-3 group-hover:text-purple-200 transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed font-light">
                  {card.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center text-xs font-mono-code text-zinc-500 group-hover:text-purple-300 transition-colors">
                <span>SYSTEM_PROTOCOL // {card.number}</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
