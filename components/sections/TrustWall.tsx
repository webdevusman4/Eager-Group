'use client';

import React from 'react';
import { content } from '@/lib/content';
import { SectionPill } from '@/components/ui/SectionPill';

export const TrustWall: React.FC = () => {
  return (
    <section className="bg-white pt-16 pb-12 relative overflow-hidden border-b border-line">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-8">
          <SectionPill variant="onLight">
            Industries we serve
          </SectionPill>
          <p className="mt-3 text-muted text-sm md:text-base leading-relaxed">
            Delivering practical commercial deal systems and executive sales performance across core corporate sectors.
          </p>
        </div>

        {/* Clean Industries Chip Row */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-4xl mx-auto">
          {content.industries.map((ind) => (
            <div
              key={ind}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-tint border border-line text-brand text-xs sm:text-sm font-semibold hover:border-brand/40 transition-colors select-none"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-bright" />
              <span>{ind}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
