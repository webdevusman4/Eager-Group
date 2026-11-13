'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { content } from '@/lib/content-v2';
import { SectionPill } from '@/components/v2/ui/SectionPill';
import { CheckCircle2, Quote } from 'lucide-react';

type TopicFilter = 'all' | 'sales' | 'leadership' | 'wealth';

const FILTER_TABS: { id: TopicFilter; label: string }[] = [
  { id: 'all', label: 'All 14 Topics' },
  { id: 'sales', label: 'Sales, CRM & Commercial' },
  { id: 'leadership', label: 'Leadership & Education' },
  { id: 'wealth', label: 'Stock Market & Wealth' },
];

export const ExecutiveProfile: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<TopicFilter>('all');

  const filteredTopics =
    activeFilter === 'all'
      ? content.services.topics
      : content.services.topics.filter((t) => t.category === activeFilter);

  return (
    <section id="profile" className="relative bg-white py-20 md:py-28 scroll-mt-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top 2-Column Executive Biography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* LEFT (5 cols): Real Executive Office & Speaking Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#D4E4F7] shadow-xl bg-[#041A3B]">
              <div className="relative aspect-[5/4] w-full">
                <Image
                  src="/images/v2/iftikhar-executive-desk.webp"
                  alt="Iftikhar Ahmed in his executive consulting office"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-center"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#041A3B]/80 via-transparent to-transparent"
                />
              </div>

              <div className="p-5 bg-[#041A3B] text-white border-t border-white/10">
                <div className="flex items-start gap-3">
                  <Quote className="w-5 h-5 text-[#10ACFC] flex-shrink-0 mt-0.5 -scale-x-100" />
                  <p className="text-sm font-medium text-white/90 italic leading-relaxed">
                    {content.profile.closingQuote}
                  </p>
                </div>
              </div>
            </div>

            {/* Role Credential Chips under Photo */}
            <div className="mt-4 flex flex-wrap gap-2">
              {content.profile.roles.map((role) => (
                <span
                  key={role}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F4F8FE] border border-[#D4E4F7] text-xs font-semibold text-[#004CA8]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10ACFC]" />
                  {role}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT (7 cols): Professional Narrative & 3 Operating Principles */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <SectionPill variant="onLight">
              Professional Profile • About the Mentor
            </SectionPill>

            <h2 className="mt-4 text-[#0B1F3F] font-extrabold text-3xl sm:text-4xl lg:text-[42px] leading-[1.12] tracking-tight">
              15+ Years Turning Commercial Strategy Into{' '}
              <span className="v2-text-gradient">Measurable Results</span>
            </h2>

            <div className="mt-5 space-y-4 text-[#516684] text-base leading-relaxed">
              {content.profile.bioParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* 3 Operating Principles */}
            <div className="mt-8 grid grid-cols-1 gap-3.5 w-full">
              {content.profile.principles.map((p) => (
                <div
                  key={p.numeral}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-[#F4F8FE] border border-[#D8E6F8] hover:border-[#10ACFC]/60 transition-colors"
                >
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#004CA8] to-[#10ACFC] text-white font-mono text-xs font-bold flex-shrink-0 shadow-sm">
                    {p.numeral}
                  </span>
                  <div>
                    <h3 className="text-[#0B1F3F] font-bold text-sm sm:text-base">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-[#516684] text-xs sm:text-sm leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Interactive Key Training & Speaking Topics Matrix (from Official Brochure) */}
        <div className="mt-16 pt-14 border-t border-[#E2ECF9]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#004CA8]">
                Key Training &amp; Speaking Topics
              </span>
              <h3 className="mt-1 text-[#0B1F3F] font-bold text-2xl sm:text-3xl tracking-tight">
                Specialized Corporate &amp; Institutional Modules
              </h3>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter training topics">
              {FILTER_TABS.map((tab) => {
                const isActive = activeFilter === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveFilter(tab.id)}
                    className={`px-3.5 py-2 rounded-full text-xs font-semibold transition-all ${
                      isActive
                        ? 'bg-[#004CA8] text-white shadow-md'
                        : 'bg-[#F4F8FE] text-[#516684] border border-[#D4E4F7] hover:text-[#004CA8] hover:border-[#004CA8]/40'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredTopics.map((topic) => (
              <div
                key={topic.title}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-[#D8E6F8] hover:border-[#10ACFC] hover:bg-[#F4F8FE]/60 transition-all"
              >
                <CheckCircle2 className="w-4 h-4 text-[#004CA8] flex-shrink-0" />
                <span className="text-sm font-medium text-[#0B1F3F] leading-snug">
                  {topic.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
