'use client';

import React, { useState } from 'react';
import { BackgroundVideo } from '@/components/BackgroundVideo';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { AboutIntro } from '@/components/AboutIntro';
import { ThemeStory } from '@/components/ThemeStory';
import { ProblemStatements } from '@/components/ProblemStatements';
import { TracksSection } from '@/components/TracksSection';
import { HowItWorksTimeline } from '@/components/HowItWorksTimeline';
import { PrizesSection } from '@/components/PrizesSection';
import { WhyParticipate } from '@/components/WhyParticipate';
import { RulesSection } from '@/components/RulesSection';
import { FaqSection } from '@/components/FaqSection';
import { SponsorsOrganizers } from '@/components/SponsorsOrganizers';
import { CommunityFinalCTA } from '@/components/CommunityFinalCTA';
import { Footer } from '@/components/Footer';
import { RegisterModal } from '@/components/RegisterModal';
import { ChallengeModal } from '@/components/ChallengeModal';
import { CommandPalette } from '@/components/CommandPalette';
import { CipherTerminalModal } from '@/components/CipherTerminalModal';
import { ProblemStatement } from '@/types';

export default function Home() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [selectedChallenge, setSelectedChallenge] = useState<ProblemStatement | null>(null);
  const [selectedTrackForRegister, setSelectedTrackForRegister] = useState('HEALTHCARE');
  const [selectedChallengeForRegister, setSelectedChallengeForRegister] = useState('');

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenRegisterWithTrack = (trackTitle: string) => {
    setSelectedTrackForRegister(trackTitle);
    setSelectedChallengeForRegister('');
    setIsRegisterOpen(true);
  };

  const handleSelectChallengeForRegister = (challenge: ProblemStatement) => {
    setSelectedTrackForRegister(challenge.domain);
    setSelectedChallengeForRegister(challenge.title);
    setIsRegisterOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#06060a] text-zinc-100 selection:bg-purple-600 selection:text-white relative">
      {/* Background Ambient Video & Glass Glow Canvas */}
      <BackgroundVideo videoUrl="https://res.cloudinary.com/nldi019k/video/upload/v1786978680/add_a_bit_of_cyberpunk_in_the_1.mp4" />

      {/* Main Content Area (Clean centered layout, no sidebar) */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Almost Invisible Glass Navigation Bar */}
        <Navbar
          onOpenRegister={() => setIsRegisterOpen(true)}
          onOpenSearch={() => setIsSearchOpen(true)}
          onOpenTerminal={() => setIsTerminalOpen(true)}
        />

        {/* Main Content Sections */}
        <main className="w-full flex-1">
          {/* 01 — HERO SECTION */}
          <Hero
            onOpenRegister={() => setIsRegisterOpen(true)}
            onExplore={scrollToSection}
            onOpenTerminal={() => setIsTerminalOpen(true)}
          />

          {/* 02 — THEME STORY (2097 LORE) */}
          <ThemeStory />

          {/* 03 — EVENT INFO & WHAT IS ENIGMA 5.0 */}
          <AboutIntro />

          {/* 04 — PROBLEM STATEMENTS (HEALTH, FINANCE, SUSTAINABILITY) */}
          <ProblemStatements
            onSelectChallenge={(challenge) => setSelectedChallenge(challenge)}
          />

          {/* 05 — 3 DOMAIN TRACKS */}
          <TracksSection onSelectTrack={handleOpenRegisterWithTrack} />

          {/* 06 — PROTOCOL & 24-HOUR TIMELINE */}
          <HowItWorksTimeline />

          {/* 07 — PRIZES (₹25,000 POOL) */}
          <PrizesSection />

          {/* 08 — WHY PARTICIPATE & JUDGING CRITERIA */}
          <WhyParticipate />

          {/* 09 — RULES (4 MEMBERS, 24 HOURS, OPEN ELIGIBILITY) */}
          <RulesSection />

          {/* 10 — FAQ DECRYPTOR */}
          <FaqSection />

          {/* 11 — SPONSORS & ORGANIZERS */}
          <SponsorsOrganizers />

          {/* 12 — COMMUNITY & FINAL CTA */}
          <CommunityFinalCTA
            onOpenRegister={() => setIsRegisterOpen(true)}
            onExploreMissions={() => scrollToSection('missions')}
          />
        </main>

        {/* 13 — FOOTER */}
        <Footer onScrollTo={scrollToSection} />
      </div>

      {/* Glassmorphic Interactive Modals */}
      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        defaultTrack={selectedTrackForRegister}
        defaultChallengeTitle={selectedChallengeForRegister}
      />

      <ChallengeModal
        challenge={selectedChallenge}
        onClose={() => setSelectedChallenge(null)}
        onSelectForRegister={handleSelectChallengeForRegister}
      />

      <CommandPalette
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={scrollToSection}
        onOpenRegister={() => {
          setIsSearchOpen(false);
          setIsRegisterOpen(true);
        }}
      />

      <CipherTerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        onOpenRegister={() => setIsRegisterOpen(true)}
      />
    </div>
  );
}
