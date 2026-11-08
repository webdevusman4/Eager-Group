'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { SectionPill } from '@/components/ui/SectionPill';
import { content } from '@/lib/content';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: 'Are group discounts available for corporate teams?',
    answer:
      'Yes. For corporate organizations enrolling 3 or more executives, customized corporate billing, direct bank transfer coordination, and group enrollment privileges are available through our executive booking desk.',
  },
  {
    question: 'Is the certification globally recognized?',
    answer:
      '[PLACEHOLDER: confirm certificate details] Participants receive an official Certificate of Participation issued by Eager Consulting & Training, signed by Master Trainer Iftikhar Ahmed, documenting completion of 8 intensive hours of executive sales frameworks.',
  },
  {
    question: 'Will we cover digital B2B pipelines or just face-to-face closing?',
    answer:
      'Both. The curriculum spans modern omni-channel outbound enterprise prospecting, digital pipeline velocity, and multi-stakeholder CRM discipline (Module 01), as well as high-stakes face-to-face boardroom negotiations and contract finalization (Modules 02–04).',
  },
  {
    question: 'Are meals and materials included in the 30,000 PKR fee?',
    answer:
      'Yes, entirely. Your 30,000 PKR investment includes comprehensive physical executive workbooks, proprietary deal-closing framework cards, all-day continuous refreshments and espresso, plus a curated 5-star executive networking lunch.',
  },
  {
    question: 'What is the seat transfer or replacement policy?',
    answer:
      'Due to strict room limits, reservations cannot be refunded once locked in. However, you may transfer your confirmed seat to another senior executive from your company up to 48 hours before the event starts.',
  },
];

export const ExecutiveFaq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // first item open by default

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="bg-tint py-24 md:py-32 relative z-20 scroll-mt-28 border-t border-line">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14">
          <SectionPill variant="onLight">
            Questions
          </SectionPill>

          <h2 className="mt-4 text-bodytext font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>

          <p className="mt-3 text-muted text-base leading-relaxed">
            Direct answers on corporate invoicing, masterclass credentials, and what is included in your seat.
          </p>
        </div>

        {/* Accordion Stack */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-line overflow-hidden transition-all duration-300 shadow-sm hover:border-brand/30 hover:shadow-md"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-bright rounded-2xl transition-colors select-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-bodytext font-semibold text-base sm:text-lg leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'rotate-180 bg-brand/10 border-brand/30 text-brand'
                        : 'border-line text-muted bg-tint/60'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-muted text-sm sm:text-base leading-relaxed border-t border-line/60 mt-1 animate-hero-subhead">
                    <p className="pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom micro-help text */}
        <div className="mt-10 text-center">
          <p className="text-sm text-muted flex items-center justify-center gap-2">
            <HelpCircle className="w-4 h-4 text-brand" />
            <span>
              Have a specific corporate question? Reach our desk directly at{' '}
              <a
                href={`mailto:${content.contact.email}`}
                className="text-brand font-semibold hover:underline"
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
