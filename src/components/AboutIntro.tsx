'use client';

import React from 'react';
import { Binary, Cpu, Zap, Calendar, MapPin, Clock, Users, Trophy, Layers } from 'lucide-react';
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

  const eventPillars = [
    { icon: Calendar, label: 'EVENT DATE', value: '26 September 2026' },
    { icon: MapPin, label: 'VENUE', value: 'SIES GST College' },
    { icon: Clock, label: 'DURATION', value: '24 Hours Nonstop' },
    { icon: Users, label: 'TEAM SIZE', value: '4 Members / Team' },
    { icon: Trophy, label: 'PRIZE POOL', value: '₹25,000 Verified Cash' },
    { icon: Users, label: 'ELIGIBILITY', value: 'Open to All Students' },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-8 max-w-7xl mx-auto w-full relative">
      {/* 02 — EVENT INFO OVERVIEW */}
      <div className="mb-20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-purple-300 text-xs font-mono-code tracking-widest uppercase mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
          <span>{ABOUT_DATA.sectionLabel}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12">
          <div className="lg:col-span-6">
            <h2 className="section-title text-3xl sm:text-5xl font-black font-display tracking-tight text-white leading-tight">
              {ABOUT_DATA.heading}
            </h2>
            
            {/* Highlight Box */}
            <div className="mt-6 p-6 sm:p-8 rounded-3xl glass-panel border border-purple-500/30 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />
              <p className="text-base sm:text-xl font-bold font-display tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-purple-400 whitespace-pre-line leading-relaxed">
                {ABOUT_DATA.highlight}
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap items-center gap-2 text-xs font-mono-code text-zinc-400">
                <span className="text-purple-400 font-bold">REGISTRATIONS:</span>
                <span>1 SEPTEMBER — 10 SEPTEMBER</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4 text-sm sm:text-base md:text-lg text-zinc-300 font-light leading-relaxed">
            {ABOUT_DATA.bodyParagraphs.map((paragraph, index) => (
              <p key={index} className={index === 0 ? 'text-base sm:text-lg font-normal text-white' : ''}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* 6 Key Event Pillars Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {eventPillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-4 rounded-2xl glass-panel flex flex-col justify-between space-y-2 text-center items-center hover:border-purple-500/40 transition-colors"
              >
                <div className="p-2.5 rounded-xl glass-pill text-purple-400">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono-code text-zinc-500 uppercase tracking-wider block">
                    {item.label}
                  </span>
                  <span className="text-xs sm:text-sm font-bold font-display text-white mt-0.5 block">
                    {item.value}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 03 — WHAT IS ENIGMA 5.0 (THE GENESIS PROTOCOL) */}
      <div className="pt-12 border-t border-white/10">
        <div className="max-w-3xl mb-12">
          <h2 className="section-title text-3xl sm:text-5xl font-black font-display tracking-tight text-white mb-6">
            {WHAT_IS_ENIGMA_DATA.heading}
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
            {WHAT_IS_ENIGMA_DATA.bodyParagraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>

        {/* 3 Feature Cards (01 RETHINK, 02 REBUILD, 03 DISRUPT) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {WHAT_IS_ENIGMA_DATA.featureCards.map((card) => (
            <div
              key={card.number}
              className="p-6 sm:p-8 rounded-3xl glass-panel-interactive flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 group-hover:bg-purple-500/15 rounded-full blur-2xl transition-all pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-black font-display tracking-tight text-zinc-600 group-hover:text-purple-400 transition-colors">
                    {card.number}
                  </span>
                  <div className="p-3 rounded-2xl glass-pill group-hover:border-purple-500/40 transition-colors">
                    {getIcon(card.icon)}
                  </div>
                </div>

                <div className="text-[10px] font-mono-code text-purple-400 tracking-wider mb-1">
                  {card.badge}
                </div>
                <h3 className="text-2xl font-bold font-display text-white tracking-tight mb-3 group-hover:text-purple-200 transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
                  {card.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center text-xs font-mono-code text-zinc-500 group-hover:text-purple-300 transition-colors">
                <span>GENESIS_PROTOCOL // {card.number}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
