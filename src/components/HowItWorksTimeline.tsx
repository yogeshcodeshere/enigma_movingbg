import React, { useState, useEffect } from 'react';
import { ArrowRight, Clock, Calendar, CheckCircle2, Shield, Flame, Activity } from 'lucide-react';
import { PROTOCOL_STEPS, TIMELINE_EVENTS } from '../data/hackathonData';

export const HowItWorksTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  // Target date: October 24, 2026 09:00:00 IST (UTC+5:30)
  const targetDate = new Date('2026-10-24T09:00:00+05:30').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section id="protocol" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto w-full relative">
      
      {/* 07 — HOW IT WORKS */}
      <div className="mb-28">
        <div className="mb-14 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono-code tracking-widest uppercase mb-4">
            <span>THE PROTOCOL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white mb-4">
            FROM IDEA TO EXECUTION.
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
            Follow the six stages of the ENIGMA deployment sequence — from initial squad assembly to final victory on stage.
          </p>
        </div>

        {/* 6 Step Interactive Progression Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROTOCOL_STEPS.map((step, idx) => (
            <div
              key={step.number}
              onClick={() => setActiveStep(idx)}
              className={`p-6 sm:p-8 rounded-2xl bg-black/40 backdrop-blur-md border transition-all duration-300 flex flex-col justify-between group shadow-xl cursor-pointer ${
                activeStep === idx
                  ? 'border-purple-500 bg-purple-950/20 shadow-purple-900/30'
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-black font-display text-zinc-600 group-hover:text-purple-400 transition-colors">
                    {step.number}
                  </span>
                  <span className="text-[10px] font-mono-code px-2.5 py-1 rounded bg-white/5 border border-white/10 text-purple-300 font-semibold uppercase">
                    {step.milestone}
                  </span>
                </div>

                <h3 className="text-2xl font-bold font-display text-white mb-2 tracking-tight group-hover:text-purple-200 transition-colors">
                  {step.title}
                </h3>

                <p className="text-sm font-medium text-zinc-200 mb-3">
                  {step.description}
                </p>

                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  {step.details}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-[11px] font-mono-code text-zinc-500">
                <span>STAGE 0{idx + 1} OF 06</span>
                <span className="text-purple-400 font-semibold group-hover:translate-x-1 transition-transform">
                  PROTOCOL ACTIVE →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 08 — TIMELINE & COUNTDOWN */}
      <div id="timeline" className="pt-12 border-t border-white/10">
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono-code tracking-widest uppercase mb-4">
            <Clock className="w-3.5 h-3.5 text-purple-400" />
            <span>THE COUNTDOWN</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white mb-4">
                EVERY SECOND COUNTS.
              </h2>
              <p className="text-base sm:text-lg text-zinc-300 max-w-xl font-light leading-relaxed">
                Mark your calendars. Sync your schedules. The clock is ticking toward the grand opening ceremony.
              </p>
            </div>

            {/* Live Countdown Display Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-950/40 via-[#0a0a14] to-black/60 border border-purple-500/30 shadow-2xl flex items-center gap-4 sm:gap-6">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-black font-display text-white tracking-tight">
                  {String(timeLeft.days).padStart(2, '0')}
                </div>
                <div className="text-[10px] font-mono-code text-purple-400 uppercase tracking-widest mt-1">DAYS</div>
              </div>
              <span className="text-2xl font-bold text-zinc-600">:</span>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-black font-display text-white tracking-tight">
                  {String(timeLeft.hours).padStart(2, '0')}
                </div>
                <div className="text-[10px] font-mono-code text-purple-400 uppercase tracking-widest mt-1">HRS</div>
              </div>
              <span className="text-2xl font-bold text-zinc-600">:</span>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-black font-display text-white tracking-tight">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </div>
                <div className="text-[10px] font-mono-code text-purple-400 uppercase tracking-widest mt-1">MIN</div>
              </div>
              <span className="text-2xl font-bold text-zinc-600">:</span>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-black font-display text-white tracking-tight text-purple-400">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </div>
                <div className="text-[10px] font-mono-code text-purple-400 uppercase tracking-widest mt-1">SEC</div>
              </div>
            </div>
          </div>
        </div>

        {/* Chronological Timeline Milestone Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TIMELINE_EVENTS.map((event, index) => {
            const isCompleted = event.status === 'COMPLETED';
            const isActive = event.status === 'ACTIVE';

            return (
              <div
                key={index}
                className={`p-6 rounded-2xl bg-black/40 backdrop-blur-md border transition-all duration-300 flex flex-col justify-between shadow-xl ${
                  isActive
                    ? 'border-purple-500 bg-purple-950/30 shadow-purple-900/30'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-mono-code font-bold text-purple-400">
                      {event.date}
                    </span>
                    <span
                      className={`text-[10px] font-mono-code px-2 py-0.5 rounded font-semibold uppercase ${
                        isCompleted
                          ? 'bg-zinc-800 text-zinc-400 border border-zinc-700'
                          : isActive
                          ? 'bg-purple-500 text-black font-bold animate-pulse'
                          : 'bg-white/5 text-zinc-400 border border-white/10'
                      }`}
                    >
                      {event.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-display text-white mb-2 tracking-tight">
                    {event.title}
                  </h3>

                  <p className="text-sm text-zinc-300 font-light leading-relaxed">
                    {event.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-white/5 text-[11px] font-mono-code text-zinc-500 flex items-center justify-between">
                  <span>TIME: {event.time}</span>
                  <span>EVENT 0{index + 1}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
};
