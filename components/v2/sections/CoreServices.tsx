import React from 'react';
import { content, getWhatsAppUrl } from '@/lib/content-v2';
import { SectionPill } from '@/components/v2/ui/SectionPill';
import {
  Presentation,
  Briefcase,
  TrendingUp,
  Mic2,
  CheckCircle2,
  ArrowUpRight,
} from 'lucide-react';

const serviceIcons = {
  Presentation,
  Briefcase,
  TrendingUp,
  Mic2,
};

export const CoreServices: React.FC = () => {
  return (
    <section id="services" className="relative bg-white py-20 md:py-28 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <SectionPill variant="onLight">
            {content.services.pill}
          </SectionPill>

          <h2 className="mt-4 text-[#0B1F3F] font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight">
            {content.services.heading}
          </h2>

          <p className="mt-4 text-[#516684] text-base sm:text-lg leading-relaxed">
            {content.services.subheading}
          </p>
        </div>

        {/* 2x2 Practice Pillar Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {content.services.pillars.map((pillar) => {
            const IconComponent = serviceIcons[pillar.icon] || Briefcase;
            const inquiryUrl = getWhatsAppUrl(pillar.whatsappInquiry);

            return (
              <div
                key={pillar.id}
                className="v2-card rounded-3xl p-7 sm:p-9 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#E7F1FD] border border-[#C5DCF8] text-[#004CA8] flex items-center justify-center">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#0B7EE8] bg-[#F4F8FE] px-3 py-1 rounded-full border border-[#D8E6F8]">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="mt-6 text-[#0B1F3F] font-bold text-xl sm:text-2xl tracking-tight">
                    {pillar.title}
                  </h3>

                  <p className="mt-2.5 text-[#516684] text-sm sm:text-[15px] leading-relaxed">
                    {pillar.summary}
                  </p>

                  <ul className="mt-6 pt-5 border-t border-[#E5EFFB] space-y-2.5">
                    {pillar.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-[#0B1F3F] font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#10ACFC] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7 pt-5 border-t border-[#E5EFFB] flex items-center justify-between">
                  <a
                    href={inquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#004CA8] hover:text-[#0B7EE8] group transition-colors"
                  >
                    <span>{pillar.ctaLabel}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <span className="text-xs text-[#516684] font-medium">
                    Tailored Scope
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
