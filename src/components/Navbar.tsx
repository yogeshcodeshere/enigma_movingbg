'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenRegister: () => void;
  onOpenSearch?: () => void;
  onOpenTerminal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRegister }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#hero' },
    { label: 'Theme 2097', href: '#theme-story' },
    { label: 'Missions', href: '#missions' },
    { label: 'Domains', href: '#tracks' },
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
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#06060a]/90 backdrop-blur-2xl border-b border-white/10 shadow-2xl shadow-black/80'
          : 'bg-transparent border-b border-transparent backdrop-blur-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 h-20 sm:h-24 flex items-center justify-between sm:justify-center sm:gap-10 md:gap-12 lg:gap-14">
        
        {/* Centered Desktop Navigation Links with Minimalist Cyberpunk Underlines */}
        <nav className="hidden sm:flex items-center gap-7 md:gap-9 lg:gap-11 text-sm md:text-[15px] font-semibold text-zinc-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="hover:text-white transition-all relative py-2 hover:after:w-full after:w-0 after:h-0.5 after:bg-[#ff44f1] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200 cursor-pointer tracking-wider font-mono-code uppercase drop-shadow-md hover:scale-105"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Minimalist Cyberpunk #ff44f1 Register CTA Button */}
        <div className="flex items-center gap-4">
          <button
            id="btn-nav-register"
            onClick={onOpenRegister}
            className="px-6 py-2.5 sm:px-7 sm:py-3 rounded-xl bg-[#ff44f1] hover:bg-[#ff6bf4] text-white text-xs sm:text-sm font-mono-code font-bold tracking-widest uppercase flex items-center gap-2 shadow-[0_0_20px_rgba(255,68,241,0.35)] border border-pink-300/40 transition-all hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-md"
          >
            <span>[ REGISTER ]</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            id="btn-nav-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="sm:hidden p-3 rounded-2xl glass-pill text-zinc-200 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden glass-modal border-b border-white/10 px-6 py-6 space-y-4 animate-fadeIn">
          <div className="grid grid-cols-2 gap-3 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="p-3 rounded-xl glass-pill hover:bg-white/10 text-zinc-200 hover:text-white font-semibold transition-colors text-center font-mono-code"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRegister();
              }}
              className="w-full py-3.5 px-4 rounded-xl bg-[#ff44f1] hover:bg-[#ff6bf4] text-white font-mono-code font-bold text-xs tracking-widest uppercase text-center shadow-[0_0_20px_rgba(255,68,241,0.35)] border border-pink-300/40 cursor-pointer"
            >
              [ REGISTER SQUAD ]
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
