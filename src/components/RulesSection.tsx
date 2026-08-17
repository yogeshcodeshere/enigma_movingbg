import React, { useState } from 'react';
import { ShieldCheck, BookOpen, Download, AlertTriangle, FileText, Check } from 'lucide-react';
import { RULES } from '../data/hackathonData';

export const RulesSection: React.FC = () => {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownloadRulebook = () => {
    setDownloaded(true);
    // Create downloadable markdown text file
    const rulebookContent = `# ENIGMA 2026 — OFFICIAL RULEBOOK & CODE OF CONDUCT
Hosted by CSI SIESGST Student Chapter

## 01. ELIGIBILITY & TEAM COMPOSITION
- Teams must consist of 2 to 4 members.
- Cross-college and interdisciplinary collaborations are allowed.

## 02. ORIGINALITY & IP
- All code, assets, and prototypes must be developed during the official 36-hour hackathon window.
- Open-source packages, public APIs, and foundational models are permitted with explicit citations in README.md.

## 03. SUBMISSION GUIDELINES
- Submission must include: GitHub Repository URL, Live Hosted Prototype URL, 2-minute Loom/YouTube demo, and slide deck.

## 04. CODE OF CONDUCT
- Zero tolerance for harassment, discrimination, or abusive behavior.
- Plagiarism or submitting pre-built repositories results in immediate disqualification.

© 2026 CSI SIESGST. All rights reserved.`;

    const blob = new Blob([rulebookContent], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ENIGMA_2026_OFFICIAL_RULEBOOK.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <section id="rules" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto w-full relative">
      {/* Header */}
      <div className="mb-14 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono-code tracking-widest uppercase mb-4">
          <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
          <span>THE PROTOCOL</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white mb-4">
          KNOW THE RULES. BREAK THE BOUNDARIES.
        </h2>
        <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
          Clear parameters create fair competition. Familiarize yourself with the 8 core operational protocols governing the hackathon arena.
        </p>
      </div>

      {/* 8 Rules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12">
        {RULES.map((item) => (
          <div
            key={item.number}
            className="p-6 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 hover:border-purple-500/30 transition-all flex items-start gap-4 shadow-xl group"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-950/40 border border-purple-500/30 flex items-center justify-center font-black font-display text-purple-300 shrink-0 group-hover:scale-105 group-hover:bg-purple-600 group-hover:text-black transition-all">
              {item.number}
            </div>
            <div>
              <div className="text-[10px] font-mono-code text-zinc-500 uppercase tracking-widest mb-1">
                PROTOCOL RULE {item.number}
              </div>
              <p className="text-sm sm:text-base text-zinc-200 font-light leading-relaxed">
                {item.rule}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Rulebook Download CTA Bar */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-purple-950/40 via-black/60 to-[#080810] border border-purple-500/30 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-xl font-bold font-display text-white">
            NEED DETAILED INTELLECTUAL PROPERTY & SUBMISSION POLICIES?
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 font-light">
            Download the complete PDF/Markdown rulebook including grading rubrics and dispute resolution.
          </p>
        </div>

        <button
          id="btn-download-rulebook"
          onClick={handleDownloadRulebook}
          className="px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold font-display text-xs tracking-wider uppercase flex items-center gap-2 shadow-lg cursor-pointer transition-all shrink-0"
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
