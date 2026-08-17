import React, { useState, useEffect } from 'react';
import { BackgroundVideo } from './components/BackgroundVideo';
import { LeftRail } from './components/LeftRail';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutIntro } from './components/AboutIntro';
import { ThemeStory } from './components/ThemeStory';
import { ProblemStatements } from './components/ProblemStatements';
import { TracksSection } from './components/TracksSection';
import { HowItWorksTimeline } from './components/HowItWorksTimeline';
import { PrizesSection } from './components/PrizesSection';
import { WhyParticipate } from './components/WhyParticipate';
import { RulesSection } from './components/RulesSection';
import { FaqSection } from './components/FaqSection';
import { SponsorsOrganizers } from './components/SponsorsOrganizers';
import { CommunityFinalCTA } from './components/CommunityFinalCTA';
import { Footer } from './components/Footer';
import { RegisterModal } from './components/RegisterModal';
import { ChallengeModal } from './components/ChallengeModal';
import { CommandPalette } from './components/CommandPalette';
import { CipherTerminalModal } from './components/CipherTerminalModal';
import { ProblemStatement } from './types';

export default function App() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [selectedChallenge, setSelectedChallenge] = useState<ProblemStatement | null>(null);
  const [selectedTrackForRegister, setSelectedTrackForRegister] = useState('AI & MACHINE LEARNING');
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
    <div className="min-h-screen bg-[#050509] text-zinc-100 selection:bg-purple-600 selection:text-white relative">
      {/* Background Cyberpunk Video Layer */}
      <BackgroundVideo videoUrl="https://res.cloudinary.com/nldi019k/video/upload/v1786973020/add_a_bit_of_cyberpunk_in_the.mp4" />

      {/* Left Perforated Sprocket Filmstrip Rail (Desktop) */}
      <LeftRail onScrollTo={scrollToSection} />

      {/* Main Content Area (offset by left rail on wide screens) */}
      <div className="xl:pl-20 relative z-10 flex flex-col min-h-screen">
        {/* Navigation Bar */}
        <Navbar
          onOpenRegister={() => setIsRegisterOpen(true)}
          onOpenSearch={() => setIsSearchOpen(true)}
          onOpenTerminal={() => setIsTerminalOpen(true)}
        />

        {/* 01 — HERO SECTION */}
        <main>
          <Hero
            onOpenRegister={() => setIsRegisterOpen(true)}
            onExplore={scrollToSection}
            onOpenTerminal={() => setIsTerminalOpen(true)}
          />

          {/* 02 & 03 — INTRO / ABOUT ENIGMA & WHAT IS ENIGMA */}
          <AboutIntro />

          {/* 04 — THEME / STORY SECTION & CIPHER TERMINAL */}
          <ThemeStory />

          {/* 05 — PROBLEM STATEMENTS (THE MISSIONS) */}
          <ProblemStatements
            onSelectChallenge={(challenge) => setSelectedChallenge(challenge)}
          />

          {/* 06 — DOMAIN TRACKS */}
          <TracksSection onSelectTrack={handleOpenRegisterWithTrack} />

          {/* 07 & 08 — HOW IT WORKS & COUNTDOWN TIMELINE */}
          <HowItWorksTimeline />

          {/* 09 — PRIZES (THE REWARD) */}
          <PrizesSection />

          {/* 10 & 11 — WHY PARTICIPATE & JUDGING CRITERIA */}
          <WhyParticipate />

          {/* 12 — RULES */}
          <RulesSection />

          {/* 13 — FAQ */}
          <FaqSection />

          {/* 14 & 15 — SPONSORS & ORGANIZERS (CSI SIESGST) */}
          <SponsorsOrganizers />

          {/* 16 & 17 — COMMUNITY / DISCORD & FINAL CTA */}
          <CommunityFinalCTA
            onOpenRegister={() => setIsRegisterOpen(true)}
            onExploreMissions={() => scrollToSection('missions')}
          />
        </main>

        {/* 18 — FOOTER */}
        <Footer onScrollTo={scrollToSection} />
      </div>

      {/* Interactive Modals */}
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
