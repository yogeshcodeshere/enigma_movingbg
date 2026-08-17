import React from 'react';
import { Terminal, Shield, ArrowUp, Github, Disc as Discord, Linkedin, Instagram, Mail } from 'lucide-react';

interface FooterProps {
  onScrollTo: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollTo }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#040407] border-t border-white/10 pt-16 pb-12 px-4 sm:px-8 font-sans relative z-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Ticker Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-white mb-1">
              ENIGMA
            </h2>
            <div className="text-xs font-mono-code text-purple-400 font-bold tracking-widest uppercase">
              DECODE. BUILD. DISRUPT.
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-xs font-mono-code">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-purple-900/30 text-zinc-300 hover:text-white transition-colors"
            >
              <Instagram className="w-3.5 h-3.5 text-purple-400" />
              <span>Instagram</span>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-purple-900/30 text-zinc-300 hover:text-white transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5 text-cyan-400" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://discord.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-purple-900/30 text-zinc-300 hover:text-white transition-colors"
            >
              <span className="text-indigo-400 font-bold">#</span>
              <span>Discord</span>
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-purple-900/30 text-zinc-300 hover:text-white transition-colors"
            >
              <Github className="w-3.5 h-3.5 text-zinc-300" />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Middle Navigation & Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-b border-white/10 text-xs">
          
          {/* Navigation Links */}
          <div>
            <h4 className="font-mono-code text-zinc-400 uppercase tracking-wider mb-4 font-bold">
              NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-zinc-400 font-medium">
              <li><button onClick={() => onScrollTo('hero')} className="hover:text-white transition-colors cursor-pointer">Home</button></li>
              <li><button onClick={() => onScrollTo('about')} className="hover:text-white transition-colors cursor-pointer">About Enigma</button></li>
              <li><button onClick={() => onScrollTo('missions')} className="hover:text-white transition-colors cursor-pointer">Challenges / Missions</button></li>
              <li><button onClick={() => onScrollTo('tracks')} className="hover:text-white transition-colors cursor-pointer">Domain Tracks</button></li>
              <li><button onClick={() => onScrollTo('protocol')} className="hover:text-white transition-colors cursor-pointer">Protocol & Timeline</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono-code text-zinc-400 uppercase tracking-wider mb-4 font-bold">
              ESSENTIALS
            </h4>
            <ul className="space-y-2.5 text-zinc-400 font-medium">
              <li><button onClick={() => onScrollTo('prizes')} className="hover:text-white transition-colors cursor-pointer">Prizes & Perks</button></li>
              <li><button onClick={() => onScrollTo('judging')} className="hover:text-white transition-colors cursor-pointer">Judging Criteria</button></li>
              <li><button onClick={() => onScrollTo('rules')} className="hover:text-white transition-colors cursor-pointer">Official Rules</button></li>
              <li><button onClick={() => onScrollTo('faq')} className="hover:text-white transition-colors cursor-pointer">FAQ & Helpdesk</button></li>
              <li><button onClick={() => onScrollTo('sponsors')} className="hover:text-white transition-colors cursor-pointer">Sponsors Network</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono-code text-zinc-400 uppercase tracking-wider mb-4 font-bold">
              CONTACT & VENUE
            </h4>
            <div className="space-y-3 text-zinc-400">
              <div className="flex items-center gap-2 text-zinc-300">
                <Mail className="w-3.5 h-3.5 text-purple-400" />
                <a href="mailto:contact@csi-siesgst.org" className="hover:text-purple-300">
                  contact@csi-siesgst.org
                </a>
              </div>
              <p className="leading-relaxed">
                SIES Graduate School of Technology, Sector 5, Nerul, Navi Mumbai, Maharashtra 400706
              </p>
              <div className="text-[11px] font-mono-code text-zinc-500">
                HOSTED BY CSI SIESGST STUDENT CHAPTER
              </div>
            </div>
          </div>

          {/* Quick Back to Top */}
          <div className="flex flex-col justify-between items-start sm:items-end">
            <button
              id="btn-footer-back-to-top"
              onClick={scrollToTop}
              className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white transition-colors flex items-center gap-2 font-mono-code text-xs cursor-pointer"
            >
              <span>RETURN TO ORBIT</span>
              <ArrowUp className="w-4 h-4 text-purple-400" />
            </button>

            <div className="text-right text-[11px] font-mono-code text-zinc-500 mt-6 sm:mt-0">
              <span>LATENCY: 12ms</span>
              <span className="mx-2">•</span>
              <span className="text-emerald-400">SYS_HEALTH: OPTIMAL</span>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Manifesto Microcopy */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono-code">
          <div>
            © 2026 ENIGMA. ALL RIGHTS RESERVED.
          </div>

          <div className="text-center md:text-right font-bold text-zinc-400">
            BUILT BY BUILDERS. FOR BUILDERS. <span className="text-purple-400">THAT PUSHES THE BOUNDARIES OF INNOVATION.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
