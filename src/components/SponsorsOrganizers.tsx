'use client';

import React from 'react';
import { Globe, Users, Shield, Building2, Code2, Palette, Sliders } from 'lucide-react';
import { SPONSORS_DATA, ORGANIZERS_DATA } from '../data/hackathonData';

export const SponsorsOrganizers: React.FC = () => {
  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'CORE TEAM':
        return <Shield className="w-5 h-5 text-zinc-300" />;
      case 'TECH TEAM':
        return <Code2 className="w-5 h-5 text-cyan-400" />;
      case 'DESIGN TEAM':
        return <Palette className="w-5 h-5 text-zinc-300" />;
      case 'OPERATIONS':
        return <Sliders className="w-5 h-5 text-zinc-300" />;
      default:
        return <Users className="w-5 h-5 text-zinc-300" />;
    }
  };

  return (
    <section id="sponsors" className="py-20 sm:py-28 px-4 sm:px-8 max-w-7xl mx-auto w-full relative">
      
      {/* 14 — SPONSORS */}
      <div className="mb-28">
        <div className="mb-14 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-zinc-300 text-xs font-mono-code tracking-widest uppercase mb-4">
            <Building2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>{SPONSORS_DATA.sectionLabel}</span>
          </div>
          <h2 className="section-title text-3xl sm:text-5xl font-black font-display tracking-tight text-white mb-4">
            {SPONSORS_DATA.heading}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-zinc-300 font-light leading-relaxed">
            {SPONSORS_DATA.body}
          </p>
        </div>

        {/* Sponsor Tiers with Glassmorphism */}
        <div className="space-y-8">
          {SPONSORS_DATA.tiers.map((tierGroup, idx) => (
            <div key={idx} className="space-y-4">
              <div className="text-xs font-mono-code text-zinc-300 font-bold uppercase tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>{tierGroup.tier}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {tierGroup.sponsors.map((sponsor, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-6 rounded-3xl glass-panel-interactive flex flex-col justify-between group shadow-xl"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-lg font-bold font-display text-white">
                          {sponsor.name}
                        </span>
                        {sponsor.badge && (
                          <span className="px-2 py-0.5 rounded-md glass-pill text-[10px] font-mono-code text-zinc-300 font-semibold">
                            {sponsor.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-zinc-400 font-light">
                        {sponsor.role}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-white/5 flex items-center text-[10px] font-mono-code text-zinc-500">
                      <span>PARTNER PROTOCOL</span>
                      <Globe className="w-3 h-3 ml-auto opacity-70" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 15 — ORGANIZERS */}
      <div id="organizers" className="pt-12 border-t border-white/10">
        <div className="mb-14 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-zinc-300 text-xs font-mono-code tracking-widest uppercase mb-4">
            <Users className="w-3.5 h-3.5 text-cyan-400" />
            <span>ORGANIZING COMMITTEE</span>
          </div>
          <h2 className="section-title text-3xl sm:text-5xl font-black font-display tracking-tight text-white mb-4">
            {ORGANIZERS_DATA.heading}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-zinc-300 font-light leading-relaxed mb-6">
            {ORGANIZERS_DATA.body}
          </p>

          {/* CSI SIESGST Feature Box */}
          <div className="p-6 rounded-3xl glass-panel shadow-xl">
            <h4 className="text-lg font-bold font-display text-white mb-1">
              {ORGANIZERS_DATA.organizationName}
            </h4>
            <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
              {ORGANIZERS_DATA.organizationDesc}
            </p>
          </div>
        </div>

        {/* 4 Organizers Sub-teams */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ORGANIZERS_DATA.teams.map((team, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl glass-panel flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-2xl glass-pill">
                    {getCategoryIcon(team.category)}
                  </div>
                  <div>
                    <h4 className="font-bold font-display text-white text-base">
                      {team.category}
                    </h4>
                    <span className="text-[10px] font-mono-code text-zinc-400">
                      {team.roleDesc}
                    </span>
                  </div>
                </div>

                <div className="space-y-3 pt-3 border-t border-white/5">
                  {team.leads.map((lead, lIdx) => (
                    <div key={lIdx} className="flex items-center justify-between text-xs">
                      <div>
                        <span className="font-semibold text-zinc-200 block">{lead.name}</span>
                        <span className="text-[10px] text-zinc-500 font-mono-code">{lead.role}</span>
                      </div>
                      <span className="text-[11px] font-mono-code text-zinc-400 hover:text-white cursor-pointer">
                        {lead.handle}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-white/5 text-[10px] font-mono-code text-zinc-500">
                TEAM // VERIFIED ORGANIZER
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
