'use client';

import React from 'react';
import Image from 'next/image';
import { content, getWhatsAppUrl, ModuleItem } from '@/lib/content';
import { SectionPill } from '@/components/ui/SectionPill';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { Target, Brain, Scale, FileSignature, ChevronRight } from 'lucide-react';

const iconMap = {
  Target,
  Brain,
  Scale,
  FileSignature,
};

export const Curriculum: React.FC = () => {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <section id="curriculum" className="bg-gradient-to-b from-[#071F44] to-[#0048A8] text-white rounded-t-[2rem] py-24 md:py-32 scroll-mt-28 relative z-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <SectionPill variant="onDark">
            {content.curriculum.pill}
          </SectionPill>

          <h2 className="mt-4 text-white font-bold text-[clamp(2rem,4vw,3.25rem)] leading-[1.1] tracking-[-0.02em]">
            {content.curriculum.h2}
          </h2>

          <p className="mt-4 text-white/80 text-base md:text-lg leading-relaxed">
            {content.curriculum.sub}
          </p>
        </div>

        {/* 2x2 Grid of Elevated White Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {content.curriculum.modules.map((module: ModuleItem) => {
            const IconComponent = iconMap[module.icon] || Target;

            return (
              <div
                key={module.id}
                className="surface-elevated rounded-3xl p-6 md:p-8 flex flex-col justify-between text-left"
              >
                <div>
                  {/* Image with stage pill chip on top right */}
                  <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-brand-deep shadow-md">
                    <Image
                      src={module.image}
                      alt={module.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-3.5 right-3.5 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono font-semibold text-brand tracking-wider shadow-sm border border-line">
                      {module.stageLabel}
                    </div>
                  </div>

                  {/* Icon + Title */}
                  <div className="mt-6 flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center text-brand flex-shrink-0">
                      <IconComponent className="w-5 h-5 text-brand" />
                    </div>
                    <h3 className="text-brand-deep font-bold text-xl md:text-2xl tracking-tight leading-snug">
                      {module.title}
                    </h3>
                  </div>

                  {/* Outcome Sentence */}
                  <p className="mt-3 text-muted font-medium text-sm md:text-[15px] leading-relaxed">
                    {module.outcome}
                  </p>

                  {/* 3 Bullets */}
                  <ul className="mt-5 space-y-2.5">
                    {module.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-bodytext text-sm">
                        <ChevronRight className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Footer Divider and Stage Tracker */}
                <div className="mt-8 pt-4 border-t border-line flex items-center justify-between">
                  <span className="font-mono text-xs text-muted uppercase tracking-wider">
                    {module.footer}
                  </span>
                  <span className="font-mono text-xs font-semibold text-brand">
                    STAGE {module.id}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Centered CTA beneath grid */}
        <div className="mt-16 flex flex-col items-center justify-center text-center gap-4">
          <p className="text-white/85 font-medium text-base md:text-lg">
            {content.curriculum.summary}
          </p>
          <PrimaryButton
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base px-8 py-4"
          >
            Reserve my seat
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
};
