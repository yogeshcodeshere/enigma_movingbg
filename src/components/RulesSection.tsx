'use client';

import React, { useState } from 'react';
import { ShieldCheck, Download, Check } from 'lucide-react';
import { RULES } from '../data/hackathonData';

export const RulesSection: React.FC = () => {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownloadRulebook = () => {
    setDownloaded(true);
    // Create downloadable markdown text file
    const rulebookContent = `# ENIGMA 5.0 — GENESIS OFFICIAL RULEBOOK
Theme: GENESIS: BEYOND THE FUTURE
Venue: SIES GST College, Nerul
Date: 26 September 2026 (24 Hours)
Team Size: Exactly 4 Members / Squad

## 01. ELIGIBILITY & TEAM COMPOSITION
- Exactly 4 members per squad.
- Open eligibility — students from all colleges and disciplines.

## 02. ORIGINALITY & IP
- All code, architecture, and prototypes must be developed during the 24-hour sprint.
- Open-source packages and foundational APIs are permitted with citations.

## 03. SUBMISSION GUIDELINES
- GitHub repo with documentation.
- Live demo link and presentation deck.

© 2026 CSI SIESGST. All rights reserved.`;

    const blob = new Blob([rulebookContent], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ENIGMA_5_OFFICIAL_RULEBOOK.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <section id="rules" className="py-20 sm:py-28 px-4 sm:px-8 max-w-7xl mx-auto w-full relative">
      {/* Header */}
      <div className="mb-14 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-zinc-300 text-xs font-mono-code tracking-widest uppercase mb-4">
          <ShieldCheck className="w-3.5 h-3.5 text-[#ff3377]" />
          <span>THE PROTOCOL RULES</span>
        </div>
        <h2 className="section-title text-3xl sm:text-5xl font-black font-display tracking-tight text-white mb-4">
          KNOW THE RULES. BUILD THE FUTURE.
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-zinc-300 font-light leading-relaxed">
          Clear parameters create fair competition. Familiarize yourself with the 5 core operational protocols governing the ENIGMA 5.0 arena.
        </p>
      </div>

      {/* Rules Grid with Clean Glassmorphic Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12">
        {RULES.map((item) => (
          <div
            key={item.number}
            className="p-6 rounded-3xl glass-panel-interactive flex items-start gap-4 shadow-xl group"
          >
            <div className="w-10 h-10 rounded-xl glass-pill flex items-center justify-center font-black font-mono-code text-zinc-300 shrink-0">
              {item.number}
            </div>
            <div>
              <div className="text-[10px] font-mono-code text-zinc-500 uppercase tracking-widest mb-1">
                PROTOCOL RULE {item.number}
              </div>
              <p className="text-xs sm:text-sm text-zinc-200 font-light leading-relaxed">
                {item.rule}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Rulebook Download CTA Bar with Mild Cyberpunk Pink Button */}
      <div className="p-6 sm:p-8 rounded-3xl glass-panel shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-lg sm:text-xl font-bold font-display text-white">
            NEED DETAILED PROTOCOL & SUBMISSION POLICIES?
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 font-light">
            Download the official Markdown rulebook including grading rubrics and dispute resolution.
          </p>
        </div>

        <button
          id="btn-download-rulebook"
          onClick={handleDownloadRulebook}
          className="px-6 py-3.5 rounded-xl bg-[#ff3377] hover:bg-[#ff4d8d] text-white font-mono-code font-bold text-xs tracking-wider uppercase flex items-center gap-2 shadow-[0_0_20px_rgba(255,51,119,0.3)] border border-pink-400/30 cursor-pointer transition-all shrink-0"
        >
          {downloaded ? (
            <>
              <Check className="w-4 h-4 text-white" />
              <span>RULEBOOK SAVED!</span>
            </>
          ) : (
            <>
              <Download className="w-4 h-4" />
              <span>READ FULL RULEBOOK →</span>
            </>
          )}
        </button>
      </div>
    </section>
  );
};
