import React, { useState } from 'react';
import { Search, Menu, X, Terminal, ArrowRight, ShieldCheck } from 'lucide-react';
import { HERO_DATA } from '../data/hackathonData';

interface NavbarProps {
  onOpenRegister: () => void;
  onOpenSearch: () => void;
  onOpenTerminal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRegister, onOpenSearch, onOpenTerminal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Overview', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Missions', href: '#missions' },
    { label: 'Tracks', href: '#tracks' },
    { label: 'Protocol', href: '#protocol' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Prizes', href: '#prizes' },
    { label: 'Rules', href: '#rules' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#06060a]/80 backdrop-blur-xl border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
        
        {/* Brand & Organization Title */}
        <div className="flex items-center gap-3">
          <a
            href="#hero"
            className="flex items-center gap-2.5 group cursor-pointer text-decoration-none"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center font-black font-display text-white text-sm shadow-md group-hover:scale-105 transition-transform">
              E
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold font-display tracking-wider text-white group-hover:text-purple-400 transition-colors">
                ENIGMA
              </span>
              <span className="text-[9px] font-mono-code text-zinc-400 tracking-widest uppercase">
                CSI SIESGST
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-medium text-zinc-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="hover:text-white transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-purple-500 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action Icons & Register Button */}
        <div className="flex items-center gap-3">
          {/* Quick Search Ctrl+K Button */}
          <button
            id="btn-nav-search"
            onClick={onOpenSearch}
            className="hidden sm:flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono-code text-zinc-400 hover:text-white transition-colors cursor-pointer"
            title="Search Sections and Problems (Ctrl+K)"
          >
            <Search className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Search</span>
            <kbd className="text-[10px] bg-black/40 px-1.5 py-0.5 rounded border border-white/10 text-zinc-400">
              ⌘K
            </kbd>
          </button>

          {/* Cipher Terminal Button */}
          <button
            id="btn-nav-terminal"
            onClick={onOpenTerminal}
            className="hidden sm:flex items-center gap-1.5 p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-purple-300 hover:text-white transition-colors cursor-pointer"
            title="Open Cipher Decryptor Terminal"
          >
            <Terminal className="w-3.5 h-3.5 text-purple-400" />
          </button>

          {/* Primary Registration CTA Button */}
          <button
            id="btn-nav-register"
            onClick={onOpenRegister}
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-bold font-display tracking-wider uppercase flex items-center gap-1.5 shadow-lg shadow-purple-900/30 transition-all hover:scale-102 active:scale-98 cursor-pointer"
          >
            <span>REGISTER</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            id="btn-nav-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-white/5 text-zinc-300 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0a10] border-b border-white/10 px-6 py-6 space-y-4">
          <div className="grid grid-cols-2 gap-3 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="p-2.5 rounded-lg bg-white/5 hover:bg-purple-900/30 text-zinc-300 hover:text-white font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSearch();
              }}
              className="w-full py-2.5 px-4 rounded-lg bg-white/5 border border-white/10 text-xs font-mono-code text-zinc-300 flex items-center justify-center gap-2"
            >
              <Search className="w-4 h-4" />
              <span>Search Challenges & Rules (⌘K)</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTerminal();
              }}
              className="w-full py-2.5 px-4 rounded-lg bg-purple-950/40 border border-purple-500/30 text-xs font-mono-code text-purple-300 flex items-center justify-center gap-2"
            >
              <Terminal className="w-4 h-4 text-purple-400" />
              <span>Open Cipher Decryptor Terminal</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRegister();
              }}
              className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-sm tracking-wider uppercase text-center shadow-lg"
            >
              REGISTER NOW
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
