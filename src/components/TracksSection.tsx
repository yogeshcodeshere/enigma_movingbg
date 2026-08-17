'use client';

import React from 'react';
import { Activity, TrendingUp, Compass, ArrowRight, Layers } from 'lucide-react';
import { TRACKS } from '../data/hackathonData';

interface TracksSectionProps {
  onSelectTrack: (trackTitle: string) => void;
}

export const TracksSection: React.FC<TracksSectionProps> = ({ onSelectTrack }) => {
  const getTrackIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity':
        return <Activity className="w-8 h-8 text-rose-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-8 h-8 text-emerald-400" />;
      case 'Compass':
        return <Compass className="w-8 h-8 text-cyan-400" />;
      default:
        return <Layers className="w-8 h-8 text-zinc-300" />;
    }
  };

  return (
    <section id="tracks" className="py-20 sm:py-28 px-4 sm:px-8 max-w-7xl mx-auto w-full relative">
      {/* Section Header */}
      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-zinc-300 text-xs font-mono-code tracking-widest uppercase mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          <span>3 CORE DOMAINS</span>
        </div>
        <h2 className="section-title text-3xl sm:text-5xl font-black font-display tracking-tight text-white mb-4">
          WHERE WILL YOU BUILD?
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
          Three critical systems in 2097 require complete reimagining. Select the domain where your team can make the greatest impact.
        </p>
      </div>

      {/* 3 Domain Track Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {TRACKS.map((track) => {
          return (
            <div
              key={track.id}
              onClick={() => onSelectTrack(track.title)}
              className="p-8 rounded-3xl glass-panel-interactive flex flex-col justify-between group cursor-pointer relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="p-4 rounded-2xl glass-pill">
                    {getTrackIcon(track.icon)}
                  </div>
                  <span className="text-xs font-mono-code text-zinc-500">
                    DOMAIN // {track.id.toUpperCase()}
                  </span>
                </div>

                <h3 className="text-2xl font-bold font-display text-white mb-3 tracking-tight">
                  {track.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed mb-6">
                  {track.description}
                </p>

                {/* Key Technologies */}
                <div className="mb-6">
                  <div className="text-[10px] font-mono-code text-zinc-500 uppercase tracking-wider mb-2">
                    FOCUS TECHNOLOGIES
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {track.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-md glass-pill text-[11px] font-mono-code text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Sample Idea Sparks */}
                <div className="space-y-1.5 text-xs font-light">
                  <div className="text-[10px] font-mono-code text-zinc-500 uppercase tracking-wider mb-1">
                    SAMPLE CHALLENGES
                  </div>
                  {track.sampleIdeas.slice(0, 2).map((idea, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-zinc-300">
                      <span className="text-zinc-500 font-mono-code text-[10px] mt-0.5">•</span>
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
                  className="text-xs font-mono-code text-zinc-300 hover:text-white font-semibold flex items-center gap-1.5 group-hover:translate-x-1 transition-transform cursor-pointer"
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
