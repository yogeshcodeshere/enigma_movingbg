import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { X, Plus, Trash2, CheckCircle, Sparkles, ArrowRight, ShieldCheck, User, Mail, Phone, School, Download, QrCode } from 'lucide-react';
import { TRACKS, PROBLEM_STATEMENTS } from '../data/hackathonData';
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
  defaultTrack = 'AI & MACHINE LEARNING',
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
    members: [
      { name: '', email: '', role: 'Frontend & UI', github: '' },
    ],
    projectIdea: defaultChallengeTitle ? `Focusing on: ${defaultChallengeTitle}` : '',
  });

  const [ticketId, setTicketId] = useState('');

  if (!isOpen) return null;

  const handleAddMember = () => {
    if (formData.members.length >= 3) return; // Max 4 total (1 leader + 3 members)
    setFormData({
      ...formData,
      members: [...formData.members, { name: '', email: '', role: 'Developer', github: '' }],
    });
  };

  const handleRemoveMember = (idx: number) => {
    const updated = formData.members.filter((_, i) => i !== idx);
    setFormData({ ...formData, members: updated });
  };

  const handleMemberChange = (idx: number, field: keyof TeamMember, value: string) => {
    const updated = [...formData.members];
    updated[idx] = { ...updated[idx], [field]: value };
    setFormData({ ...formData, members: updated });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.teamName || !formData.leaderName || !formData.leaderEmail) {
      alert('Please fill in your Team Name and Leader credentials.');
      return;
    }

    const generatedId = `ENIGMA-${Math.floor(100000 + Math.random() * 900000)}`;
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fadeIn">
      <div className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto bg-[#0a0a12] border border-purple-500/30 rounded-3xl shadow-2xl p-6 sm:p-8 font-sans">
        
        {/* Close Button */}
        <button
          id="btn-close-register-modal"
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'FORM' ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-[11px] font-mono-code tracking-widest uppercase mb-2">
                <span>PROTOCOL ENROLLMENT</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black font-display text-white">
                ENIGMA SQUAD REGISTRATION
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-light mt-1">
                Assemble 2 to 4 members. Free registration with offline venue access, meals & swag kits.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 text-xs font-mono-code">
              
              {/* Section 1: Team & Track Info */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-4 font-sans">
                <h4 className="text-xs font-mono-code text-purple-400 font-bold uppercase tracking-wider">
                  01. SQUAD & TRACK SPECIFICATION
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] text-zinc-400 font-mono-code block mb-1">
                      TEAM / SQUAD NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.teamName}
                      onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                      placeholder="e.g. CyberVanguard"
                      className="w-full px-3 py-2 bg-black/50 border border-white/10 focus:border-purple-500 rounded-lg text-sm text-white outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] text-zinc-400 font-mono-code block mb-1">
                      PRIMARY DOMAIN TRACK
                    </label>
                    <select
                      value={formData.track}
                      onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                      className="w-full px-3 py-2 bg-black/50 border border-white/10 focus:border-purple-500 rounded-lg text-xs text-white outline-none"
                    >
                      {TRACKS.map((t) => (
                        <option key={t.id} value={t.title} className="bg-zinc-900 text-white">
                          {t.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] text-zinc-400 font-mono-code block mb-1">
                    INSTITUTION / COLLEGE NAME
                  </label>
                  <input
                    type="text"
                    value={formData.college}
                    onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                    placeholder="e.g. SIES Graduate School of Technology"
                    className="w-full px-3 py-2 bg-black/50 border border-white/10 focus:border-purple-500 rounded-lg text-sm text-white outline-none"
                  />
                </div>
              </div>

              {/* Section 2: Team Leader */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-4 font-sans">
                <h4 className="text-xs font-mono-code text-cyan-400 font-bold uppercase tracking-wider">
                  02. SQUAD LEADER CREDENTIALS
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
                      placeholder="Jane Doe"
                      className="w-full px-3 py-2 bg-black/50 border border-white/10 focus:border-purple-500 rounded-lg text-sm text-white outline-none"
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
                      placeholder="jane@domain.com"
                      className="w-full px-3 py-2 bg-black/50 border border-white/10 focus:border-purple-500 rounded-lg text-sm text-white outline-none"
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
                      className="w-full px-3 py-2 bg-black/50 border border-white/10 focus:border-purple-500 rounded-lg text-sm text-white outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Section 3: Additional Team Members */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-4 font-sans">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-mono-code text-pink-400 font-bold uppercase tracking-wider">
                    03. TEAM MEMBERS ({formData.members.length + 1}/4)
                  </h4>

                  {formData.members.length < 3 && (
                    <button
                      type="button"
                      onClick={handleAddMember}
                      className="px-2.5 py-1 rounded bg-white/10 hover:bg-purple-600 text-white text-[11px] font-mono-code flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <Plus className="w-3 h-3" />
                      <span>Add Teammate</span>
                    </button>
                  )}
                </div>

                <div className="space-y-3">
                  {formData.members.map((member, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-black/40 border border-white/5 flex flex-col sm:flex-row items-start sm:items-center gap-3"
                    >
                      <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-2 w-full">
                        <input
                          type="text"
                          value={member.name}
                          onChange={(e) => handleMemberChange(idx, 'name', e.target.value)}
                          placeholder={`Member #${idx + 2} Name`}
                          className="px-2.5 py-1.5 bg-white/5 border border-white/10 rounded text-xs text-white outline-none"
                        />
                        <input
                          type="email"
                          value={member.email}
                          onChange={(e) => handleMemberChange(idx, 'email', e.target.value)}
                          placeholder="Email"
                          className="px-2.5 py-1.5 bg-white/5 border border-white/10 rounded text-xs text-white outline-none"
                        />
                        <input
                          type="text"
                          value={member.role}
                          onChange={(e) => handleMemberChange(idx, 'role', e.target.value)}
                          placeholder="Role (e.g. Backend/ML)"
                          className="px-2.5 py-1.5 bg-white/5 border border-white/10 rounded text-xs text-white outline-none"
                        />
                      </div>

                      <button
                        type="button"
                        onClick={() => handleRemoveMember(idx)}
                        className="p-1.5 hover:bg-red-500/20 text-zinc-500 hover:text-red-400 rounded transition-colors self-end sm:self-center"
                        title="Remove member"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  id="btn-submit-registration"
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold font-display text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-2xl cursor-pointer transition-all hover:scale-[1.01]"
                >
                  <span>CONFIRM SQUAD & GENERATE ENIGMA PASS</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Success Screen: Digital Pass Preview */
          <div className="text-center py-6 space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-xl">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-mono-code text-purple-400 uppercase tracking-widest block mb-1">
                REGISTRATION CONFIRMED // LIVE PASS
              </span>
              <h2 className="text-3xl font-black font-display text-white">
                WELCOME TO ENIGMA, {formData.teamName.toUpperCase()}
              </h2>
              <p className="text-sm text-zinc-400 font-light mt-1 max-w-md mx-auto">
                Your squad entry credentials have been recorded in the system. Check your inbox ({formData.leaderEmail}) for discord server onboarding!
              </p>
            </div>

            {/* Futuristic Digital Badge Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-950/60 via-[#0a0a14] to-black border border-purple-500/50 shadow-2xl max-w-md mx-auto text-left font-mono-code relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/20 blur-xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div>
                  <div className="text-[10px] text-zinc-400">ENIGMA 2026 OFFICIAL PASS</div>
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
                  <span className="text-[10px] text-zinc-500 block">TRACK</span>
                  <span className="text-purple-300 font-semibold truncate block">{formData.track}</span>
                </div>
                <div>
                  <span className="text-[10px] text-zinc-500 block">VENUE</span>
                  <span className="text-zinc-200">SIESGST / HYBRID</span>
                </div>
                <div>
                  <span className="text-[10px] text-zinc-500 block">STATUS</span>
                  <span className="text-emerald-400 font-bold">VERIFIED ACCESS</span>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-zinc-500">
                <span>CSI SIESGST STUDENT CHAPTER</span>
                <span className="text-purple-400 font-bold">OCT 24–26, 2026</span>
              </div>
            </div>

            <div className="flex justify-center gap-4 pt-2">
              <button
                onClick={onClose}
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold font-display text-xs tracking-wider uppercase cursor-pointer"
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
