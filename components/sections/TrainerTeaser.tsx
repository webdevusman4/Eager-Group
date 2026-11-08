'use client';

import React from 'react';
import Image from 'next/image';
import { content, getWhatsAppUrl } from '@/lib/content';
import { SectionPill } from '@/components/ui/SectionPill';
import { PrimaryButton } from '@/components/ui/PrimaryButton';

export const TrainerTeaser: React.FC = () => {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <section id="trainer" className="relative bg-white py-24 md:py-32 scroll-mt-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* CSS Grid with explicit row placement so left (7 cols) and right (7 cols) overlap starting at tablet/desktop (md: 768px+) */}
        <div className="grid grid-cols-1 md:grid-cols-12 items-center relative">
          {/* LEFT: Framed Portrait (7 Cols on md+, Row 1) */}
          <div className="md:col-start-1 md:col-span-7 md:row-start-1 relative z-10 w-full max-w-[560px] mx-auto md:mx-0">
            {/* Offset decorative outline behind portrait */}
            <div
              className="absolute -bottom-6 -left-6 w-[70%] h-[40%] rounded-3xl border border-brand/20 pointer-events-none hidden sm:block"
              aria-hidden="true"
            />

            <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden border border-line shadow-2xl bg-brand-deep">
              <Image
                src="/images/trainer-desk.webp"
                alt="Master Trainer Iftikhar Ahmed in his executive consulting office"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 55vw"
                className="object-cover object-center"
              />

              {/* Natural dark gradient vignette at the bottom */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-brand-deep/80 via-transparent to-transparent pointer-events-none"
              />

              {/* Caption chip bottom-left on portrait */}
              <div className="absolute bottom-6 left-6 z-20 glass-smoked rounded-2xl px-4 py-2.5 shadow-xl pointer-events-none border border-white/15">
                <div className="text-xs font-bold uppercase tracking-wider text-white">
                  {content.trainer.portraitCaption.name}
                </div>
                <div className="text-xs font-medium tracking-wide text-brand-bright mt-0.5">
                  Master Trainer
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Overlapping Smoked Glass Bio Panel (Starts at Col 6 on md+, overlapping portrait by 2 cols) */}
          <div className="md:col-start-6 md:col-span-7 md:row-start-1 relative z-20 w-full mt-10 md:mt-0">
            <div className="glass-smoked rounded-3xl p-6 sm:p-8 md:p-9 lg:p-12 shadow-2xl border border-white/15 text-white">
              {/* Header Pill */}
              <SectionPill variant="onDark" className="border-white/20 text-white">
                {content.trainer.pill}
              </SectionPill>

              {/* H2 & Subtitle */}
              <h2 className="mt-4 text-white font-bold text-2xl sm:text-3xl lg:text-[40px] tracking-tight leading-tight">
                {content.trainer.name}
              </h2>
              <p className="mt-1.5 text-white/80 text-xs sm:text-sm font-medium leading-relaxed">
                {content.trainer.subtitle}
              </p>

              {/* Pull quote */}
              <blockquote className="mt-5 sm:mt-6 text-white font-semibold text-base sm:text-lg lg:text-xl leading-snug tracking-tight border-l-2 border-brand-bright pl-4 py-1">
                {content.trainer.pullQuote}
              </blockquote>

              {/* 3 Principles with mono numerals */}
              <div className="mt-6 space-y-3.5">
                {content.trainer.principles.map((p) => (
                  <div key={p.numeral} className="pt-3.5 first:pt-0 border-t first:border-t-0 border-white/15">
                    <div className="flex items-start gap-3">
                      <span className="font-mono text-xs md:text-sm font-bold text-brand-bright flex-shrink-0 mt-0.5">
                        {p.numeral}
                      </span>
                      <div>
                        <span className="font-semibold text-white text-xs sm:text-sm md:text-base">
                          {p.title}{' '}
                        </span>
                        <span className="text-white/75 text-xs sm:text-sm leading-relaxed">
                          {p.description}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bio summary */}
              <p className="mt-5 text-white/75 text-xs sm:text-sm md:text-[15px] leading-relaxed">
                {content.trainer.bio}
              </p>

              {/* Chips */}
              <div className="mt-5 flex flex-wrap gap-2">
                {content.trainer.chips.map((chip) => (
                  <span
                    key={chip}
                    className="inline-block px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-brand-bright/30 text-brand-bright text-xs font-medium bg-brand-bright/10"
                  >
                    {chip}
                  </span>
                ))}
              </div>

              {/* Closing line */}
              <p className="mt-5 text-white font-semibold text-xs sm:text-sm md:text-base italic">
                {content.trainer.closingLine}
              </p>

              {/* CTA button */}
              <div className="mt-7">
                <PrimaryButton
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto text-sm md:text-base px-7 py-3.5"
                >
                  {content.trainer.ctaText}
                </PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
