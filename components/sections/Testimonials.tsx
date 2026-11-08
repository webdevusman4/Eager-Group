'use client';

import React from 'react';
import { content, TestimonialItem } from '@/lib/content';
import { SectionPill } from '@/components/ui/SectionPill';
import { Quote, AlertCircle } from 'lucide-react';

export const Testimonials: React.FC = () => {
  // Only display testimonials where is_approved is true
  const approvedItems = content.testimonials.items.filter((item) => item.is_approved);

  return (
    <section
      id="testimonials"
      className="bg-gradient-to-b from-[#071F44] to-[#0048A8] text-white rounded-t-[2rem] py-24 md:py-32 scroll-mt-28 relative z-20"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <SectionPill variant="onDark" className="border-white/20 text-white">
            {content.testimonials.pill}
          </SectionPill>

          <h2 className="mt-4 text-white font-bold text-[clamp(2rem,4vw,3.25rem)] leading-[1.1] tracking-[-0.02em]">
            {content.testimonials.h2}
          </h2>

          <p className="mt-3 text-white/80 text-sm md:text-base">
            Verified executive feedback from leaders who transformed their commercial deal architecture.
          </p>

          {/* Explicit Placeholder Notice as required */}
          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-medium text-white/90">
            <AlertCircle className="w-3.5 h-3.5 text-brand-bright flex-shrink-0" />
            <span>[PLACEHOLDER] Replace with real approved testimonials</span>
          </div>
        </div>

        {/* Elevated White Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {approvedItems.map((item: TestimonialItem, idx: number) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 md:p-8 flex flex-col justify-between text-left shadow-xl border border-line"
            >
              <div>
                {/* Quote Glyph */}
                <Quote className="w-10 h-10 text-brand/20 -scale-x-100" />

                {/* Quote Body in Inter 500 */}
                <p className="mt-4 text-bodytext font-medium text-base md:text-lg leading-relaxed italic">
                  “{item.quote}”
                </p>
              </div>

              {/* Attribution */}
              <div className="mt-8 pt-5 border-t border-line">
                <div className="flex items-center gap-3.5">
                  {/* Monogram Avatar */}
                  <div className="w-11 h-11 rounded-full bg-brand-deep text-white flex items-center justify-center font-bold text-sm ring-2 ring-brand-bright flex-shrink-0 shadow-sm">
                    {item.initials}
                  </div>

                  <div className="flex flex-col">
                    <span className="text-brand-deep font-semibold text-sm">
                      {item.name}
                    </span>
                    <span className="text-muted text-xs font-medium">
                      {item.role}, {item.company}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
