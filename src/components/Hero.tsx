'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { HERO_DATA } from '../data/hackathonData';

interface HeroProps {
  onOpenRegister: () => void;
  onExplore: (sectionId: string) => void;
  onOpenTerminal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRegister, onExplore }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-between items-center text-center pt-28 pb-12 px-4 sm:px-8 max-w-6xl mx-auto w-full z-10 select-none"
    >
      {/* Spacer top */}
      <div className="pt-20" />

      {/* Main Title Group with Left-Aligned ENIGMA 5.0 at the Top-Left of GENESIS */}
      <div className="my-auto flex flex-col items-center justify-center space-y-4 py-6 w-full">

        {/* Typography Lockup Container */}
        <div className="flex flex-col items-start w-fit mx-auto text-left ">
          {/* 1. ENIGMA 5.0 Header Tag Aligned to Top-Left of GENESIS */}
          <div className="pl-1 sm:pl-2">
            <span className="text-xs sm:text-base md:text-xl font-mono-code font-bold tracking-[0.4em] sm:tracking-[0.5em] uppercase text-purple-400 opacity-95 pl-[17px]">
              {HERO_DATA.eyebrow}
            </span>
          </div>

          {/* 2. Monumental GENESIS Display Typography with Flickering Animation */}
          <h1
            id="hero-title-genesis"
            className="genesis-flicker text-6xl pr-2 sm:text-8xl md:text-9xl lg:text-[14rem] xl:text-[17rem] font-black font-display tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-100 to-white/60 leading-none select-none drop-shadow-[0_10px_45px_rgba(168,85,247,0.4)] transition-all cursor-default"
          >
            {HERO_DATA.mainTitle}
          </h1>

          {/* BEYOND THE FUTURE Tagline */}
          <div className="pl-1 sm:pl-2">
            <h2 className="text-xs sm:text-base md:text-xl font-mono-code text-zinc-300 tracking-[0.35em] uppercase font-semibold pl-161">
              {HERO_DATA.tagline}
            </h2>
          </div>
        </div>

        {/* Event Key Specs (26 SEP · SIES GST · 24 HOURS / 4 / TEAM · ₹25K PRIZE POOL) */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm font-mono-code text-zinc-300">
          <span className="px-4 py-1.5 rounded-full glass-pill border border-white/10 text-white font-medium">
            26 SEP • SIES GST • 24 HOURS
          </span>
          <span className="hidden sm:inline text-purple-400">•</span>
          <span className="px-4 py-1.5 rounded-full glass-pill border border-white/10 text-purple-300 font-semibold">
            4 / TEAM • ₹25K PRIZE POOL
          </span>
        </div>

        {/* Minimalist Register CTA */}
        <div className="pt-6">
          <button
            id="btn-hero-register-now"
            onClick={onOpenRegister}
            className="px-8 py-4 rounded-2xl bg-purple-600 hover:bg-purple-500 text-white font-bold font-display text-sm tracking-widest uppercase flex items-center gap-2 shadow-xl shadow-purple-950/60 border border-purple-400/30 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <span>REGISTER NOW</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 3. Subtle Bottom Scroll Indicator to Reveal Event Info */}
      <div
        onClick={() => onExplore('theme-story')}
        className="cursor-pointer group flex flex-col items-center gap-2 text-zinc-400 hover:text-white transition-colors"
      >
        <span className="text-[10px] font-mono-code tracking-[0.25em] uppercase text-zinc-400 group-hover:text-purple-300 transition-colors">
          REGISTRATIONS OPEN: 1 SEP — 10 SEP
        </span>
        <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1 group-hover:border-purple-400 transition-colors">
          <div className="w-1 h-2 rounded-full bg-purple-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
};
