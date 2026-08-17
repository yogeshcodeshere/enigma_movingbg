import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, Shield, Terminal, Trophy, Users, Calendar, MapPin, ChevronRight, Cpu } from 'lucide-react';
import { HERO_DATA, PROBLEM_STATEMENTS, TRACKS } from '../data/hackathonData';

interface HeroProps {
  onOpenRegister: () => void;
  onExplore: (sectionId: string) => void;
  onOpenTerminal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRegister, onExplore, onOpenTerminal }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [glitchText, setGlitchText] = useState(HERO_DATA.mainTitle);
  const [isGlitching, setIsGlitching] = useState(false);

  // Showcase items for the thumbnail preview carousel (matching bottom right in reference image)
  const previewItems = [
    {
      id: '01',
      title: 'Zero-Knowledge ID Verifier',
      category: 'CYBERSECURITY',
      imageBg: 'from-purple-900/60 to-indigo-950/80',
      difficulty: 'HARD',
      accent: 'border-purple-500/40 text-purple-400',
    },
    {
      id: '02',
      title: 'Autonomous Disaster AI',
      category: 'AI & ML',
      imageBg: 'from-cyan-900/60 to-blue-950/80',
      difficulty: 'CHALLENGER',
      accent: 'border-cyan-500/40 text-cyan-400',
    },
    {
      id: '03',
      title: 'Micro-Payment Channels',
      category: 'FINTECH',
      imageBg: 'from-emerald-900/60 to-teal-950/80',
      difficulty: 'MEDIUM',
      accent: 'border-emerald-500/40 text-emerald-400',
    },
    {
      id: '04',
      title: 'Spatial Canvas Architect',
      category: 'WEB & APP',
      imageBg: 'from-pink-900/60 to-purple-950/80',
      difficulty: 'HARD',
      accent: 'border-pink-500/40 text-pink-400',
    },
    {
      id: '05',
      title: 'Offline Clinic Diagnostic',
      category: 'HEALTHCARE',
      imageBg: 'from-amber-900/60 to-orange-950/80',
      difficulty: 'MEDIUM',
      accent: 'border-amber-500/40 text-amber-400',
    },
  ];

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % previewItems.length);
  };

  const triggerGlitchEffect = () => {
    if (isGlitching) return;
    setIsGlitching(true);
    const chars = '01#$!%&?><][}{_*/=';
    let count = 0;
    const interval = setInterval(() => {
      setGlitchText(
        HERO_DATA.mainTitle
          .split('')
          .map((char, index) => {
            if (index < count) return HERO_DATA.mainTitle[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );
      count += 0.5;
      if (count > HERO_DATA.mainTitle.length) {
        clearInterval(interval);
        setGlitchText(HERO_DATA.mainTitle);
        setIsGlitching(false);
      }
    }, 45);
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col justify-between pt-24 pb-12 px-4 sm:px-8 max-w-7xl mx-auto w-full">
      {/* Top Banner Ticker */}
      <div className="w-full flex items-center justify-between border-b border-white/10 pb-4 mb-8 text-xs font-mono-code text-zinc-400">
        <div className="flex items-center gap-3">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
          </span>
          <span className="text-zinc-200 tracking-wider font-semibold">{HERO_DATA.statusText}</span>
          <span className="hidden md:inline text-zinc-600">|</span>
          <span className="hidden md:inline text-zinc-400 tracking-wide">{HERO_DATA.edition}</span>
        </div>

        <div className="flex items-center gap-4 text-[11px] text-zinc-400">
          <span className="hidden sm:flex items-center gap-1.5 bg-white/5 border border-white/10 px-2.5 py-1 rounded">
            <MapPin className="w-3 h-3 text-purple-400" />
            <span>{HERO_DATA.location}</span>
          </span>
          <button
            id="btn-quick-terminal"
            onClick={onOpenTerminal}
            className="flex items-center gap-1.5 text-purple-300 hover:text-white transition-colors bg-purple-950/40 hover:bg-purple-900/60 border border-purple-500/30 px-2.5 py-1 rounded cursor-pointer"
          >
            <Terminal className="w-3 h-3 text-purple-400" />
            <span>SYS_TERMINAL</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Left Perforated Rail + Metadata + Right Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10">
        
        {/* Left Column: Filmstrip Perforated Rail & Editorial Specs (Direct inspiration from reference image) */}
        <div className="lg:col-span-4 flex flex-col justify-between space-y-8 bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden">
          {/* Subtle Cyber Accent corner */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 blur-xl pointer-events-none" />

          {/* SIESGST / CSI Header block */}
          <div>
            <div className="text-[11px] tracking-widest uppercase font-mono-code text-purple-400 mb-1 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 inline-block" />
              SYSTEM INITIALIZATION
            </div>
            <h3 className="text-xl font-bold font-display text-white tracking-tight">
              CSI SIESGST PRESENTS
            </h3>
            <p className="text-xs text-zinc-400 mt-1">
              Computer Society of India Student Chapter
            </p>
          </div>

          {/* Editorial Specs (styled like CREDITS block in reference image) */}
          <div className="space-y-4 pt-4 border-t border-white/10 font-mono-code text-xs">
            <div>
              <span className="text-zinc-500 uppercase tracking-wider text-[10px] block">ORGANIZATION</span>
              <span className="text-zinc-200 font-medium">{HERO_DATA.hostOrg}</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-zinc-500 uppercase tracking-wider text-[10px] block">PROTOCOL</span>
                <span className="text-purple-300 font-semibold">ENIGMA // 2026</span>
              </div>
              <div>
                <span className="text-zinc-500 uppercase tracking-wider text-[10px] block">TEAM CAPACITY</span>
                <span className="text-zinc-200">2 — 4 BUILDERS</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-zinc-500 uppercase tracking-wider text-[10px] block">DATE</span>
                <span className="text-zinc-200">OCT 24–26, 2026</span>
              </div>
              <div>
                <span className="text-zinc-500 uppercase tracking-wider text-[10px] block">VENUE</span>
                <span className="text-zinc-200">SIESGST / HYBRID</span>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-zinc-500 uppercase tracking-wider text-[10px] block">TOTAL PRIZE POOL</span>
              <div className="flex items-baseline gap-2 mt-0.5">
                <span className="text-2xl font-bold font-display text-white tracking-tight">{HERO_DATA.prizePool}</span>
                <span className="text-[11px] text-purple-400 font-mono-code font-semibold">(CHAMPION: {HERO_DATA.championPrize})</span>
              </div>
            </div>
          </div>

          {/* Social / Channel Codes (matching IN TW YT OS at bottom of reference) */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono-code text-zinc-500">
            <span className="hover:text-purple-400 cursor-pointer transition-colors" onClick={() => onExplore('community')}>DISCORD</span>
            <span>•</span>
            <span className="hover:text-purple-400 cursor-pointer transition-colors" onClick={() => onExplore('sponsors')}>GITHUB</span>
            <span>•</span>
            <span className="hover:text-purple-400 cursor-pointer transition-colors" onClick={() => onExplore('sponsors')}>LINKEDIN</span>
            <span>•</span>
            <span className="hover:text-purple-400 cursor-pointer transition-colors" onClick={() => onExplore('sponsors')}>INSTAGRAM</span>
          </div>
        </div>

        {/* Right Main Hero Content: Title, Two-Tone CTA, and Preview Thumbnails */}
        <div className="lg:col-span-8 flex flex-col justify-between space-y-8">
          
          {/* Eyebrow and Headline Area */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono-code tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>{HERO_DATA.eyebrow}</span>
            </div>

            {/* Giant Display Title with Glitch on hover */}
            <div 
              className="cursor-pointer select-none group"
              onMouseEnter={triggerGlitchEffect}
              onClick={triggerGlitchEffect}
            >
              <h1 
                id="hero-title-enigma"
                className="text-6xl sm:text-8xl md:text-9xl font-black font-display tracking-tighter text-white leading-none glow-purple flex items-baseline gap-4"
              >
                <span>{glitchText}</span>
              </h1>
            </div>

            {/* Hero Tagline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-purple-400 tracking-tight">
              {HERO_DATA.tagline}
            </h2>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed font-light">
              {HERO_DATA.supportingCopy}
            </p>

            {/* Event Details pill */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-mono-code text-zinc-400">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                <Calendar className="w-3.5 h-3.5 text-purple-400" />
                <span>OCT 24–26, 2026</span>
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>SIESGST / HYBRID</span>
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                <Users className="w-3.5 h-3.5 text-emerald-400" />
                <span>TEAM SIZE: 2–4</span>
              </span>
            </div>
          </div>

          {/* Two-Tone Split CTA Block (Faithfully inspired by reference image split block 'Style / Place Bid') */}
          <div className="pt-2">
            <div className="flex flex-col sm:flex-row max-w-xl rounded-xl overflow-hidden shadow-2xl border border-purple-500/30">
              {/* Primary Left Half: High Contrast Lilac / Electric Lavender */}
              <button
                id="btn-hero-register-now"
                onClick={onOpenRegister}
                className="flex-1 py-4 px-6 bg-[#b282fa] hover:bg-[#c296fc] text-black font-bold font-display text-sm tracking-wider uppercase flex items-center justify-center gap-2 transition-all transform active:scale-[0.99] cursor-pointer shadow-lg group"
              >
                <span>{HERO_DATA.primaryCta}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary Right Half: Deep Violet / Dark Cyber Purple */}
              <button
                id="btn-hero-explore-hackathon"
                onClick={() => onExplore('missions')}
                className="flex-1 py-4 px-6 bg-[#4c1d95] hover:bg-[#5b21b6] text-white font-bold font-display text-sm tracking-wider uppercase flex items-center justify-center gap-2 transition-all cursor-pointer group border-t sm:border-t-0 sm:border-l border-white/10"
              >
                <span>{HERO_DATA.secondaryCta}</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-purple-300" />
              </button>
            </div>
          </div>

          {/* Bottom Right: Interactive Thumbnail Carousel (Faithfully inspired by reference image bottom-right cards) */}
          <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10">
            {/* Active Challenge Preview Card */}
            <div className="flex items-center gap-4">
              <div 
                onClick={() => onExplore('missions')}
                className={`w-24 h-16 rounded-xl bg-gradient-to-br ${previewItems[activeSlide].imageBg} border ${previewItems[activeSlide].accent} p-2.5 flex flex-col justify-between cursor-pointer transition-all hover:scale-105 shadow-lg group`}
              >
                <div className="flex items-center justify-between text-[9px] font-mono-code font-bold">
                  <span>{previewItems[activeSlide].category}</span>
                  <Cpu className="w-3 h-3 opacity-70 group-hover:opacity-100" />
                </div>
                <div className="text-[10px] font-bold truncate text-white">
                  {previewItems[activeSlide].title}
                </div>
              </div>

              <div className="text-xs">
                <div className="text-[10px] font-mono-code text-zinc-500 uppercase">FEATURED CHALLENGE</div>
                <div className="font-semibold text-zinc-200">{previewItems[activeSlide].title}</div>
                <span className="text-[10px] font-mono-code text-purple-400">{previewItems[activeSlide].difficulty} • {previewItems[activeSlide].category}</span>
              </div>
            </div>

            {/* Carousel Navigation & Dot Pagination (Inspired by reference dot array) */}
            <div className="flex items-center gap-4 self-end sm:self-center">
              <div className="flex items-center gap-1.5">
                {previewItems.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      activeSlide === idx ? 'w-6 bg-purple-400' : 'w-1.5 bg-zinc-600 hover:bg-zinc-400'
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                id="btn-hero-next-slide"
                onClick={handleNextSlide}
                className="flex items-center gap-1 text-xs font-mono-code text-purple-300 hover:text-white transition-colors cursor-pointer px-2 py-1 rounded bg-white/5 hover:bg-white/10"
              >
                <span>Next</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
