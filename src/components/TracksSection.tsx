'use client';

import React, { useState } from 'react';
import { Brain, ShieldCheck, Layout, TrendingUp, Activity, Compass, ArrowRight } from 'lucide-react';
import { TRACKS } from '../data/hackathonData';

interface TracksSectionProps {
  onSelectTrack: (trackTitle: string) => void;
}

export const TracksSection: React.FC<TracksSectionProps> = ({ onSelectTrack }) => {
  const [activeTrackId, setActiveTrackId] = useState<string>('ai-ml');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain':
        return <Brain className="w-6 h-6" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6" />;
      case 'Layout':
        return <Layout className="w-6 h-6" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6" />;
      case 'Activity':
        return <Activity className="w-6 h-6" />;
      case 'Compass':
        return <Compass className="w-6 h-6" />;
      default:
        return <Compass className="w-6 h-6" />;
    }
  };

  return (
    <section id="tracks" className="py-20 sm:py-28 px-4 sm:px-8 max-w-7xl mx-auto w-full relative">
      {/* Header */}
      <div className="mb-14 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-purple-300 text-xs font-mono-code tracking-widest uppercase mb-4">
          <span>SECTION 06 // DOMAIN TRACKS</span>
        </div>
        <h2 className="section-title text-3xl sm:text-5xl font-black font-display tracking-tight text-white mb-4">
          FIND YOUR DOMAIN.
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-zinc-300 font-light leading-relaxed">
          From intelligent systems to human-centric experiences, choose the battlefield where your ideas can make the biggest impact.
        </p>
      </div>

      {/* Grid of 6 Track Cards with Glassmorphism */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TRACKS.map((track) => {
          const isSelected = activeTrackId === track.id;
          return (
            <div
              key={track.id}
              onClick={() => setActiveTrackId(track.id)}
              className={`p-6 sm:p-8 rounded-3xl transition-all duration-300 cursor-pointer flex flex-col justify-between group shadow-xl ${
                isSelected
                  ? 'glass-panel border-purple-500 bg-purple-950/20 shadow-purple-900/30 ring-1 ring-purple-500/30'
                  : 'glass-panel-interactive'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div
                    className="p-3.5 rounded-2xl glass-pill group-hover:scale-105 transition-all"
                    style={{ color: track.accentColor }}
                  >
                    {getIcon(track.icon)}
                  </div>
                  <span className="text-[10px] font-mono-code text-zinc-500 tracking-wider uppercase">
                    TRACK_ID: {track.id}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-display text-white mb-2 tracking-tight group-hover:text-purple-300 transition-colors">
                  {track.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed mb-6">
                  {track.description}
                </p>

                {/* Core technologies */}
                <div className="mb-6 space-y-2">
                  <div className="text-[10px] font-mono-code text-zinc-500 uppercase tracking-wider">
                    TARGET DOMAINS & TECH
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {track.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md glass-pill text-[11px] font-mono-code text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Sample project ideas */}
                <div className="space-y-1.5 text-xs text-zinc-400 border-t border-white/5 pt-4">
                  <div className="text-[10px] font-mono-code text-purple-400/80 uppercase">
                    SAMPLE CHALLENGE CONCEPTS:
                  </div>
                  {track.sampleIdeas.slice(0, 2).map((idea, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-zinc-300">
                      <span className="text-purple-400 font-mono-code text-[10px] mt-0.5">•</span>
                      <span className="line-clamp-1">{idea}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectTrack(track.title);
                  }}
                  className="text-xs font-mono-code text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-1.5 group-hover:translate-x-1 transition-transform"
                >
                  <span>Build in this Track</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
