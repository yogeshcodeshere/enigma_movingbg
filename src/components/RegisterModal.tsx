'use client';

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { X, CheckCircle, ArrowRight, Users } from 'lucide-react';
import { TRACKS } from '../data/hackathonData';
import { TeamMember, RegistrationData } from '../types';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTrack?: string;
  defaultChallengeTitle?: string;
}

export const RegisterModal: React.FC<RegisterModalProps> = ({
  isOpen,
  onClose,
  defaultTrack = 'HEALTHCARE',
  defaultChallengeTitle = '',
}) => {
  const [step, setStep] = useState<'FORM' | 'SUCCESS'>('FORM');
  const [formData, setFormData] = useState<RegistrationData>({
    teamName: '',
    leaderName: '',
    leaderEmail: '',
    leaderPhone: '',
    college: 'SIES Graduate School of Technology',
    track: defaultTrack,
    experienceLevel: 'INTERMEDIATE',
    // Exactly 3 members + 1 leader = 4 members per team
    members: [
      { name: '', email: '', role: 'Developer / ML', github: '' },
      { name: '', email: '', role: 'Frontend & UI', github: '' },
      { name: '', email: '', role: 'Backend & Systems', github: '' },
    ],
    projectIdea: defaultChallengeTitle ? `Focusing on: ${defaultChallengeTitle}` : '',
  });

  const [ticketId, setTicketId] = useState('');

  if (!isOpen) return null;

  const handleMemberChange = (idx: number, field: keyof TeamMember, value: string) => {
    const updated = [...formData.members];
    updated[idx] = { ...updated[idx], [field]: value };
    setFormData({ ...formData, members: updated });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.teamName || !formData.leaderName || !formData.leaderEmail) {
      alert('Please fill in your Squad Name and Leader credentials.');
      return;
    }

    const generatedId = `ENIGMA5-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketId(generatedId);
    setStep('SUCCESS');

    // Trigger celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#a855f7', '#06b6d4', '#ec4899', '#ffffff'],
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-2xl animate-fadeIn">
      <div className="relative w-full max-w-2xl max-h-[88vh] sm:max-h-[92vh] overflow-y-auto glass-modal rounded-3xl p-5 sm:p-8 font-sans">
        
        {/* Close Button */}
        <button
          id="btn-close-register-modal"
          onClick={onClose}
          className="absolute top-5 right-5 sm:top-6 sm:right-6 p-2 rounded-full glass-pill text-zinc-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'FORM' ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-purple-300 text-[11px] font-mono-code tracking-widest uppercase mb-2">
                <span>ENIGMA 5.0 • 4-MEMBER SQUAD</span>
              </div>
              <h2 className="text-xl sm:text-3xl font-black font-display text-white">
                GENESIS SQUAD REGISTRATION
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-light mt-1">
                26 September • SIES GST College • 24 Hours • Free Registration (Open Eligibility)
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 text-xs font-mono-code">
              
              {/* Section 1: Team & Domain Track */}
              <div className="p-4 sm:p-5 rounded-2xl glass-panel space-y-4 font-sans">
                <h4 className="text-xs font-mono-code text-purple-400 font-bold uppercase tracking-wider">
                  01. SQUAD & DOMAIN SELECTION
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] text-zinc-400 font-mono-code block mb-1">
                      SQUAD / TEAM NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.teamName}
                      onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                      placeholder="e.g. GenesisArchitects"
                      className="w-full px-3.5 py-2.5 glass-input rounded-xl text-sm text-white outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] text-zinc-400 font-mono-code block mb-1">
                      PRIMARY DOMAIN TRACK *
                    </label>
                    <select
                      value={formData.track}
                      onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                      className="w-full px-3.5 py-2.5 glass-input rounded-xl text-xs text-white outline-none cursor-pointer"
                    >
                      {TRACKS.map((t) => (
                        <option key={t.id} value={t.title} className="bg-[#0b0b14] text-white">
                          {t.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] text-zinc-400 font-mono-code block mb-1">
                    COLLEGE / INSTITUTION NAME
                  </label>
                  <input
                    type="text"
                    value={formData.college}
                    onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                    placeholder="e.g. SIES Graduate School of Technology"
                    className="w-full px-3.5 py-2.5 glass-input rounded-xl text-sm text-white outline-none"
                  />
                </div>
              </div>

              {/* Section 2: Team Leader (Member 1) */}
              <div className="p-4 sm:p-5 rounded-2xl glass-panel space-y-4 font-sans">
                <h4 className="text-xs font-mono-code text-cyan-400 font-bold uppercase tracking-wider">
                  02. SQUAD LEADER (MEMBER 1/4)
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="text-[11px] text-zinc-400 font-mono-code block mb-1">
                      LEADER FULL NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.leaderName}
                      onChange={(e) => setFormData({ ...formData, leaderName: e.target.value })}
                      placeholder="Leader Name"
                      className="w-full px-3 py-2 glass-input rounded-xl text-sm text-white outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] text-zinc-400 font-mono-code block mb-1">
                      LEADER EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.leaderEmail}
                      onChange={(e) => setFormData({ ...formData, leaderEmail: e.target.value })}
                      placeholder="leader@domain.com"
                      className="w-full px-3 py-2 glass-input rounded-xl text-sm text-white outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] text-zinc-400 font-mono-code block mb-1">
                      PHONE NUMBER *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.leaderPhone}
                      onChange={(e) => setFormData({ ...formData, leaderPhone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-3 py-2 glass-input rounded-xl text-sm text-white outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Section 3: Teammates (Members 2, 3, 4) */}
              <div className="p-4 sm:p-5 rounded-2xl glass-panel space-y-4 font-sans">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-mono-code text-pink-400 font-bold uppercase tracking-wider">
                    03. SQUAD MEMBERS (2, 3 & 4)
                  </h4>
                  <span className="text-[10px] font-mono-code text-zinc-400">
                    REQUIRED: 4 MEMBERS TOTAL
                  </span>
                </div>

                <div className="space-y-3">
                  {formData.members.map((member, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl glass-panel flex flex-col sm:flex-row items-start sm:items-center gap-3"
                    >
                      <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-2 w-full">
                        <input
                          type="text"
                          value={member.name}
                          onChange={(e) => handleMemberChange(idx, 'name', e.target.value)}
                          placeholder={`Member #${idx + 2} Full Name`}
                          className="px-2.5 py-1.5 glass-input rounded-lg text-xs text-white outline-none"
                        />
                        <input
                          type="email"
                          value={member.email}
                          onChange={(e) => handleMemberChange(idx, 'email', e.target.value)}
                          placeholder={`Member #${idx + 2} Email`}
                          className="px-2.5 py-1.5 glass-input rounded-lg text-xs text-white outline-none"
                        />
                        <input
                          type="text"
                          value={member.role}
                          onChange={(e) => handleMemberChange(idx, 'role', e.target.value)}
                          placeholder="Specialization (UI / Backend / AI)"
                          className="px-2.5 py-1.5 glass-input rounded-lg text-xs text-white outline-none"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  id="btn-submit-registration"
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#ff44f1] hover:bg-[#ff6bf4] text-white font-mono-code font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_0_24px_rgba(255,68,241,0.35)] border border-pink-300/40 cursor-pointer transition-all hover:scale-[1.01]"
                >
                  <span>SUBMIT 4-MEMBER SQUAD REGISTRATION</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Success Screen */
          <div className="text-center py-6 space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-xl">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-mono-code text-purple-400 uppercase tracking-widest block mb-1">
                REGISTRATION CONFIRMED // ENIGMA 5.0 PASS
              </span>
              <h2 className="text-2xl sm:text-3xl font-black font-display text-white">
                WELCOME TO GENESIS, {formData.teamName.toUpperCase()}
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-light mt-1 max-w-md mx-auto">
                Your 4-builder squad has been registered for 26 September at SIES GST College. Onboarding details will be sent to {formData.leaderEmail}.
              </p>
            </div>

            {/* Futuristic Digital Pass */}
            <div className="p-6 rounded-3xl glass-panel border border-purple-500/50 shadow-2xl max-w-md mx-auto text-left font-mono-code relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/20 blur-xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div>
                  <div className="text-[10px] text-zinc-400">ENIGMA 5.0 • GENESIS PASS</div>
                  <div className="font-bold text-white text-sm">{formData.teamName}</div>
                </div>
                <div className="text-right">
                  <div className="text-[9px] text-purple-400">PASS ID</div>
                  <div className="font-bold text-xs text-white">{ticketId}</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs mb-4">
                <div>
                  <span className="text-[10px] text-zinc-500 block">SQUAD LEADER</span>
                  <span className="text-zinc-200 font-semibold">{formData.leaderName}</span>
                </div>
                <div>
                  <span className="text-[10px] text-zinc-500 block">DOMAIN</span>
                  <span className="text-purple-300 font-semibold truncate block">{formData.track}</span>
                </div>
                <div>
                  <span className="text-[10px] text-zinc-500 block">VENUE</span>
                  <span className="text-zinc-200">SIES GST College</span>
                </div>
                <div>
                  <span className="text-[10px] text-zinc-500 block">DATE & SPRINT</span>
                  <span className="text-emerald-400 font-bold">26 SEP (24 HOURS)</span>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-zinc-500">
                <span>CSI SIESGST STUDENT CHAPTER</span>
                <span className="text-purple-400 font-bold">₹25,000 PRIZE POOL</span>
              </div>
            </div>

            <div className="flex justify-center gap-4 pt-2">
              <button
                onClick={onClose}
                className="px-6 py-3 rounded-xl glass-pill hover:bg-white/10 text-white font-bold font-display text-xs tracking-wider uppercase cursor-pointer"
              >
                RETURN TO SYSTEM
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
