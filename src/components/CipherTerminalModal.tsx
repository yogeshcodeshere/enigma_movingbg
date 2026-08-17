'use client';

import React, { useState, useRef, useEffect } from 'react';
import { X, Terminal as TerminalIcon, CornerDownLeft } from 'lucide-react';
import { RULES, TRACKS } from '../data/hackathonData';

interface CipherTerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenRegister: () => void;
}

interface CommandLog {
  command?: string;
  output: string | React.ReactNode;
  isError?: boolean;
}

export const CipherTerminalModal: React.FC<CipherTerminalModalProps> = ({
  isOpen,
  onClose,
  onOpenRegister,
}) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandLog[]>([
    {
      output: (
        <div className="text-zinc-300 space-y-1">
          <div className="text-purple-400 font-bold">ENIGMA COMMAND INTERFACE v2.6.0 (SIESGST KERNEL)</div>
          <div className="text-xs text-zinc-400">Type <span className="text-cyan-400">help</span> to list available subroutines, or <span className="text-cyan-400">register</span> to initialize squad entry.</div>
        </div>
      ),
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history, isOpen]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    const newLogs: CommandLog[] = [...history, { command: inputVal, output: '' }];

    switch (cmd) {
      case 'help':
        newLogs[newLogs.length - 1].output = (
          <div className="space-y-1 text-zinc-300 text-xs">
            <div><span className="text-cyan-400 font-bold">help</span> — Display this manual</div>
            <div><span className="text-cyan-400 font-bold">status</span> — Check hackathon & registration telemetry</div>
            <div><span className="text-cyan-400 font-bold">tracks</span> — List 6 official problem domain tracks</div>
            <div><span className="text-cyan-400 font-bold">prizes</span> — Display cash pools & rewards</div>
            <div><span className="text-cyan-400 font-bold">rules</span> — Display 8 protocol commandments</div>
            <div><span className="text-cyan-400 font-bold">decode</span> — Run Caesar shift decryptor subroutine</div>
            <div><span className="text-cyan-400 font-bold">register</span> — Open squad registration portal</div>
            <div><span className="text-cyan-400 font-bold">clear</span> — Purge terminal buffer</div>
          </div>
        );
        break;

      case 'status':
        newLogs[newLogs.length - 1].output = (
          <div className="text-emerald-400 space-y-1 text-xs">
            <div>[✓] REGISTRATIONS: LIVE</div>
            <div>[✓] LOCATION: SIESGST Campus, Nerul / Hybrid Cloud</div>
            <div>[✓] DATES: October 24–26, 2026 (36 Hours)</div>
            <div>[✓] SYSTEM LATENCY: 14ms (Optimal)</div>
          </div>
        );
        break;

      case 'tracks':
        newLogs[newLogs.length - 1].output = (
          <div className="text-zinc-300 space-y-1 text-xs">
            {TRACKS.map((t, idx) => (
              <div key={idx}>• <span className="text-purple-300 font-semibold">{t.title}</span> — {t.description}</div>
            ))}
          </div>
        );
        break;

      case 'prizes':
        newLogs[newLogs.length - 1].output = (
          <div className="text-zinc-300 space-y-1 text-xs">
            <div>🏆 <span className="text-purple-400 font-bold">CHAMPION:</span> ₹75,000 + Cloud Grants + VC Pitches</div>
            <div>🥈 <span className="text-cyan-400 font-bold">RUNNER UP:</span> ₹45,000 + Accelerator Interviews</div>
            <div>🥉 <span className="text-pink-400 font-bold">SECOND RUNNER UP:</span> ₹25,000 + Tech Bundles</div>
          </div>
        );
        break;

      case 'rules':
        newLogs[newLogs.length - 1].output = (
          <div className="text-zinc-300 space-y-1 text-xs">
            {RULES.map((r, i) => (
              <div key={i}>[{r.number}] {r.rule}</div>
            ))}
          </div>
        );
        break;

      case 'decode':
        newLogs[newLogs.length - 1].output = (
          <div className="text-purple-300 text-xs">
            Decrypted string: "DISRUPT_CONVENTIONAL_LIMITS" (Key: ROT-3)
          </div>
        );
        break;

      case 'register':
        onClose();
        onOpenRegister();
        return;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        newLogs[newLogs.length - 1].output = (
          <span className="text-red-400 text-xs">
            Command not recognized: '{inputVal}'. Type 'help' for available subroutines.
          </span>
        );
        break;
    }

    setHistory(newLogs);
    setInputVal('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-2xl animate-fadeIn font-mono-code">
      <div className="relative w-full max-w-2xl glass-modal rounded-3xl overflow-hidden flex flex-col h-[520px]">
        
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#0d0d18]/80 border-b border-white/10 text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <TerminalIcon className="w-4 h-4 text-purple-400" />
            <span className="text-white font-bold">ENIGMA_CONSOLE // root@siesgst</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] text-emerald-400">ONLINE</span>
            <button
              onClick={onClose}
              className="p-1 hover:text-white glass-pill rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Output Area */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              {item.command && (
                <div className="flex items-center gap-2 text-purple-400">
                  <span>root@enigma:~#</span>
                  <span className="text-white font-semibold">{item.command}</span>
                </div>
              )}
              <div className="pl-4">{item.output}</div>
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>

        {/* Terminal Input Line */}
        <form onSubmit={handleCommand} className="p-3 bg-black/60 border-t border-white/10 flex items-center gap-2">
          <span className="text-purple-400 text-xs">root@enigma:~#</span>
          <input
            autoFocus
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type 'help', 'tracks', 'prizes'..."
            className="flex-1 bg-transparent text-xs text-white outline-none font-mono-code"
          />
          <button type="submit" className="text-zinc-500 hover:text-purple-400 p-1">
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>

      </div>
    </div>
  );
};
