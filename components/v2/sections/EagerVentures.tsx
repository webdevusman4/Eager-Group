import React from 'react';
import { content } from '@/lib/content-v2';
import { SectionPill } from '@/components/v2/ui/SectionPill';
import { Package, Building2, GraduationCap, Check } from 'lucide-react';

const ventureIcons: Record<string, React.ElementType> = {
  packaging: Package,
  properties: Building2,
  trainings: GraduationCap,
};

export const EagerVentures: React.FC = () => {
  return (
    <section
      id="ventures"
      className="relative bg-[#F4F8FE] v2-grid-bg-light py-20 md:py-28 scroll-mt-24 border-y border-[#D8E6F8]"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <SectionPill variant="onLight">
            {content.ventures.pill}
          </SectionPill>

          <h2 className="mt-4 text-[#0B1F3F] font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight">
            {content.ventures.heading}
          </h2>

          <p className="mt-4 text-[#516684] text-base sm:text-lg leading-relaxed">
            {content.ventures.subheading}
          </p>
        </div>

        {/* Signature Eager Group Banner */}
        <div className="mt-10 rounded-2xl bg-gradient-to-r from-[#004CA8] via-[#0B7EE8] to-[#10ACFC] p-5 sm:p-6 text-center shadow-lg">
          <p className="font-display font-bold text-sm sm:text-base md:text-lg tracking-wide uppercase text-white">
            {content.ventures.bannerQuote}
          </p>
        </div>

        {/* 3 Eager Group Venture Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {content.ventures.companies.map((venture) => {
            const IconComponent = ventureIcons[venture.id] || Building2;
            const isTrainingArm = venture.id === 'trainings';

            return (
              <div
                key={venture.id}
                className={`v2-card rounded-3xl p-7 sm:p-8 flex flex-col justify-between relative overflow-hidden ${
                  isTrainingArm ? 'ring-2 ring-[#004CA8]/25' : ''
                }`}
              >
                {/* Top Logo-Gradient Accent Bar */}
                <div
                  aria-hidden="true"
                  className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#004CA8] to-[#10ACFC]"
                />

                <div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#004CA8] to-[#10ACFC] text-white flex items-center justify-center shadow-md">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#E7F1FD] text-[#004CA8] font-mono text-[11px] font-bold tracking-wider">
                      {venture.code}
                    </span>
                  </div>

                  <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-[#0B7EE8]">
                    {venture.sector}
                  </p>

                  <h3 className="mt-1.5 text-[#0B1F3F] font-bold text-xl leading-snug">
                    {venture.name}
                  </h3>

                  <p className="mt-3 text-[#516684] text-sm leading-relaxed">
                    {venture.description}
                  </p>

                  <ul className="mt-5 pt-5 border-t border-[#E5EFFB] space-y-2.5">
                    {venture.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#0B1F3F]">
                        <Check className="w-4 h-4 text-[#004CA8] flex-shrink-0 mt-0.5 stroke-[2.5]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {isTrainingArm && (
                  <div className="mt-6 pt-4 border-t border-[#E5EFFB]">
                    <a
                      href="#courses"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#004CA8] hover:text-[#0B7EE8] transition-colors"
                    >
                      <span>Explore Flagship Courses &amp; Programs →</span>
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Industries We Serve Strip */}
        <div className="mt-14 pt-10 border-t border-[#D8E6F8] text-center">
          <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#516684] mb-5">
            Delivering Commercial Systems &amp; Training Across Core Sectors
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-5xl mx-auto">
            {content.ventures.industries.map((industry) => (
              <span
                key={industry}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#D4E4F7] text-[#0B1F3F] text-xs sm:text-sm font-semibold shadow-sm hover:border-[#10ACFC] transition-colors select-none"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#10ACFC]" />
                {industry}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
