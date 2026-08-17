import React, { useState, useEffect } from 'react';
import { Search, ArrowRight, X, Target, Trophy, HelpCircle, Shield, FileText } from 'lucide-react';
import { PROBLEM_STATEMENTS, TRACKS, FAQS, RULES } from '../data/hackathonData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
  onOpenRegister: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onOpenRegister,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open handled by parent
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const quickNav = [
    { label: 'Register Squad', id: 'register', icon: Shield, action: onOpenRegister },
    { label: 'Problem Statements (Missions)', id: 'missions', icon: Target },
    { label: 'Domain Tracks', id: 'tracks', icon: Target },
    { label: 'Prizes & Rewards', id: 'prizes', icon: Trophy },
    { label: 'Hackathon Rules', id: 'rules', icon: Shield },
    { label: 'FAQs & Answers', id: 'faq', icon: HelpCircle },
  ];

  const filteredProblems = PROBLEM_STATEMENTS.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.domain.toLowerCase().includes(query.toLowerCase()) ||
      p.techStack.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-xl animate-fadeIn">
      <div className="relative w-full max-w-xl bg-[#0b0b14] border border-purple-500/30 rounded-2xl shadow-2xl overflow-hidden font-sans">
        
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 p-4 border-b border-white/10">
          <Search className="w-5 h-5 text-purple-400 shrink-0" />
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search problem statements, tracks, rules..."
            className="flex-1 bg-transparent text-sm text-white outline-none placeholder:text-zinc-500 font-mono-code"
          />
          <button
            onClick={onClose}
            className="p-1 text-zinc-500 hover:text-white rounded transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="p-3 max-h-96 overflow-y-auto space-y-4 text-xs font-mono-code">
          
          {/* Quick Navigation Section */}
          {!query && (
            <div>
              <div className="text-[10px] text-zinc-500 uppercase tracking-wider px-3 mb-2">
                QUICK NAVIGATION
              </div>
              <div className="space-y-1">
                {quickNav.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        onClose();
                        if (item.action) {
                          item.action();
                        } else {
                          onNavigate(item.id);
                        }
                      }}
                      className="w-full px-3 py-2.5 rounded-xl hover:bg-white/5 text-zinc-300 hover:text-white flex items-center justify-between text-left transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className="w-4 h-4 text-purple-400" />
                        <span className="font-medium font-sans">{item.label}</span>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-zinc-600" />
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Problem Search Results */}
          {query && (
            <div>
              <div className="text-[10px] text-zinc-500 uppercase tracking-wider px-3 mb-2">
                MATCHING CHALLENGES ({filteredProblems.length})
              </div>
              {filteredProblems.length > 0 ? (
                <div className="space-y-1">
                  {filteredProblems.map((prob) => (
                    <button
                      key={prob.id}
                      onClick={() => {
                        onClose();
                        onNavigate('missions');
                      }}
                      className="w-full p-3 rounded-xl hover:bg-white/5 text-left transition-colors cursor-pointer border border-transparent hover:border-white/5"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-white font-bold font-sans text-sm">{prob.title}</span>
                        <span className="text-[10px] text-purple-400 font-mono-code">{prob.domain}</span>
                      </div>
                      <p className="text-zinc-400 text-xs line-clamp-1 font-sans font-light">
                        {prob.description}
                      </p>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="p-6 text-center text-zinc-500">
                  No challenges found matching "{query}"
                </div>
              )}
            </div>
          )}

        </div>

        {/* Footer info */}
        <div className="p-3 bg-black/40 border-t border-white/5 flex items-center justify-between text-[11px] font-mono-code text-zinc-500">
          <span>Navigate with ⌘K</span>
          <span>ESC to close</span>
        </div>

      </div>
    </div>
  );
};
