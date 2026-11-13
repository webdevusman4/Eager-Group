'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { SectionPill } from '@/components/v2/ui/SectionPill';
import { content } from '@/lib/content-v2';

export const ExecutiveFaq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      className="bg-[#F4F8FE] v2-grid-bg-light py-20 md:py-28 relative z-20 scroll-mt-24 border-t border-[#D8E6F8]"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
          <SectionPill variant="onLight">
            {content.faq.pill}
          </SectionPill>

          <h2 className="mt-4 text-[#0B1F3F] font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight">
            {content.faq.heading}
          </h2>

          <p className="mt-3 text-[#516684] text-base leading-relaxed">
            {content.faq.subheading}
          </p>
        </div>

        {/* Accordion Stack */}
        <div className="space-y-3.5">
          {content.faq.items.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={faq.question}
                className={`bg-white rounded-2xl border overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? 'border-[#004CA8]/45 shadow-md'
                    : 'border-[#D8E6F8] shadow-sm hover:border-[#10ACFC]/60'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10ACFC] rounded-2xl select-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                    <span className="self-start px-2.5 py-0.5 rounded-full bg-[#E7F1FD] text-[#004CA8] font-mono text-[11px] font-bold">
                      {faq.category}
                    </span>
                    <span className="text-[#0B1F3F] font-bold text-sm sm:text-base md:text-lg leading-snug">
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'rotate-180 bg-[#004CA8] border-[#004CA8] text-white'
                        : 'border-[#D4E4F7] text-[#516684] bg-[#F4F8FE]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-0 text-[#516684] text-sm sm:text-[15px] leading-relaxed border-t border-[#E5EFFB]">
                    <p className="pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Contact Prompt */}
        <div className="mt-10 text-center">
          <p className="text-sm text-[#516684] flex flex-wrap items-center justify-center gap-2">
            <HelpCircle className="w-4 h-4 text-[#004CA8]" />
            <span>
              Need a custom corporate proposal or group invoice? Email{' '}
              <a
                href={`mailto:${content.contact.email}`}
                className="text-[#004CA8] font-bold hover:underline"
              >
                {content.contact.email}
              </a>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
