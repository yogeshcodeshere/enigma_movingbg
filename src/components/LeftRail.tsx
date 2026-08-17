import React from 'react';

interface LeftRailProps {
  onScrollTo: (id: string) => void;
}

export const LeftRail: React.FC<LeftRailProps> = ({ onScrollTo }) => {
  return (
    <aside 
      aria-label="Sprocket Navigation Rail"
      className="hidden xl:flex fixed left-0 top-0 bottom-0 w-20 z-30 flex-col items-center justify-between py-6 bg-[#06060a]/90 backdrop-blur-md border-r border-white/10 select-none"
    >
      {/* Top Sprocket Perforation Hole */}
      <div className="flex flex-col items-center gap-6">
        <div className="sprocket-hole" title="Perforation Track // 01" />
        <div className="sprocket-hole" title="Perforation Track // 02" />
      </div>

      {/* Massive Vertical Rotated Typography: ENIGMA (Matching PRESSURD in reference layout) */}
      <div 
        onClick={() => onScrollTo('hero')}
        className="cursor-pointer group flex items-center justify-center my-auto transform -rotate-90 origin-center"
      >
        <span className="text-3xl font-black font-display tracking-[0.25em] text-white/80 group-hover:text-purple-400 group-hover:glow-purple transition-all duration-300 whitespace-nowrap">
          ENIGMA
        </span>
      </div>

      {/* Bottom Sprocket Perforation Holes & Status Dot */}
      <div className="flex flex-col items-center gap-6">
        <div className="sprocket-hole" title="Perforation Track // 03" />
        <div className="sprocket-hole" title="Perforation Track // 04" />
        
        {/* Terminal Protocol ID */}
        <div className="text-[10px] font-mono-code text-zinc-500 transform rotate-90 tracking-widest mt-2">
          v2.6
        </div>
      </div>
    </aside>
  );
};
