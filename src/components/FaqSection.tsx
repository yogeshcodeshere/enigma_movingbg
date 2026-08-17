'use client';

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Search } from 'lucide-react';
import { FAQS } from '../data/hackathonData';

export const FaqSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const categories = ['ALL', 'General', 'Team & Participation', 'Rules & Submission', 'Logistics'];

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory = selectedCategory === 'ALL' || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (index: number) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 px-4 sm:px-8 max-w-7xl mx-auto w-full relative">
      {/* Header */}
      <div className="mb-12 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-purple-300 text-xs font-mono-code tracking-widest uppercase mb-4">
          <HelpCircle className="w-3.5 h-3.5 text-purple-400" />
          <span>DECRYPT ANSWERS</span>
        </div>
        <h2 className="section-title text-3xl sm:text-5xl font-black font-display tracking-tight text-white mb-4">
          QUESTIONS? DECRYPT THEM HERE.
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-zinc-300 font-light leading-relaxed">
          Everything you need to know about eligibility, team formation, tooling, submission deadlines, and logistics.
        </p>
      </div>

      {/* Search & Category Filter Controls */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-zinc-500 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            id="input-faq-search"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search keywords (e.g. solo, fee, certificate, tech)..."
            className="w-full pl-11 pr-4 py-3 glass-input rounded-2xl text-sm text-zinc-200 outline-none transition-colors"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-2 rounded-xl text-xs font-mono-code transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-purple-600 text-white font-bold shadow-md shadow-purple-900/30'
                  : 'glass-pill text-zinc-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Accordion FAQ Items with Glassmorphism */}
      <div className="space-y-3">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, index) => {
            const isOpen = openIdx === index;
            return (
              <div
                key={index}
                className="rounded-3xl glass-panel overflow-hidden transition-all duration-200"
              >
                <button
                  id={`btn-faq-toggle-${index}`}
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono-code text-purple-400 font-bold">
                      Q{String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm sm:text-lg font-bold font-display text-white">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-zinc-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-purple-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 text-xs sm:text-base text-zinc-300 font-light leading-relaxed border-t border-white/5">
                    <p>{faq.answer}</p>
                    <div className="mt-3 flex items-center gap-2 text-[10px] font-mono-code text-zinc-500">
                      <span>CATEGORY: {faq.category}</span>
                      <span>•</span>
                      <span>VERIFIED ORGANIZER RESPONSE</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="p-12 text-center text-zinc-500 font-mono-code text-sm glass-panel rounded-3xl">
            No matching questions found for "{searchQuery}". Reach out to us at contact@csi-siesgst.org!
          </div>
        )}
      </div>
    </section>
  );
};
