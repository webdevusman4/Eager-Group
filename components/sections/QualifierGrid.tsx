'use client';

import React from 'react';
import { Check, X } from 'lucide-react';
import { SectionPill } from '@/components/ui/SectionPill';
import { content } from '@/lib/content';

export const QualifierGrid: React.FC = () => {
  return (
    <section className="bg-brand-deep py-20 md:py-28 relative z-20 border-t border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <SectionPill variant="onDark">
            {content.qualifier.pill}
          </SectionPill>

          <h2 className="mt-4 text-white font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight">
            {content.qualifier.h2}
          </h2>

          <p className="mt-4 text-white/75 text-base sm:text-lg leading-relaxed">
            {content.qualifier.sub}
          </p>
        </div>

        {/* 2-Column Qualification Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* LEFT CARD: Who This Is For (brand-bright accent & ticks) */}
          <div className="glass-smoked rounded-3xl p-8 sm:p-10 border border-brand-bright/30 shadow-2xl relative flex flex-col justify-between">
            <div>
              {/* Card Header Badge */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <span className="text-white font-bold text-lg sm:text-xl tracking-tight flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-bright" />
                  Who this is for
                </span>
                <span className="px-3 py-1 rounded-full bg-brand-bright/10 border border-brand-bright/30 text-xs font-mono font-semibold text-brand-bright uppercase tracking-wider">
                  Recommended Fit
                </span>
              </div>

              {/* Points */}
              <ul className="mt-6 space-y-5">
                {content.qualifier.forPoints.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    {/* Ticks use --brand-bright: #2F6FDE */}
                    <div className="w-8 h-8 rounded-xl bg-brand-bright/15 border border-brand-bright/30 flex items-center justify-center flex-shrink-0 text-brand-bright mt-0.5">
                      <Check className="w-4 h-4 stroke-[2.5]" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-base leading-snug">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-white/75 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-5 border-t border-white/10">
              <p className="text-xs font-mono text-brand-bright/90">
                ✓ Full qualification criteria verified prior to final seat confirmation.
              </p>
            </div>
          </div>

          {/* RIGHT CARD: Who This Is NOT For (Muted slate #7A8AA3 crosses, not red) */}
          <div className="glass-smoked opacity-95 rounded-3xl p-8 sm:p-10 border border-white/10 shadow-xl relative flex flex-col justify-between">
            <div>
              {/* Card Header Badge */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <span className="text-white/80 font-bold text-lg sm:text-xl tracking-tight flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-muted" />
                  Who this is NOT for
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/15 text-xs font-mono font-semibold text-slate-muted uppercase tracking-wider">
                  Do Not Apply
                </span>
              </div>

              {/* Points */}
              <ul className="mt-6 space-y-6">
                {content.qualifier.notForPoints.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    {/* Crosses use muted slate #7A8AA3, NOT red */}
                    <div className="w-8 h-8 rounded-xl bg-slate-muted/15 border border-slate-muted/30 flex items-center justify-center flex-shrink-0 text-slate-muted mt-0.5">
                      <X className="w-4 h-4 stroke-[2.5]" />
                    </div>
                    <div>
                      <h3 className="text-white/90 font-semibold text-base leading-snug">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-white/65 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-5 border-t border-white/10">
              <p className="text-xs font-mono text-slate-muted">
                ✕ Applicants outside executive qualification will be politely redirected.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
