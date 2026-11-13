import React from 'react';
import Image from 'next/image';
import { content } from '@/lib/content-v2';
import { SectionPill } from '@/components/v2/ui/SectionPill';
import { Users } from 'lucide-react';

export const ImpactGallery: React.FC = () => {
  return (
    <section id="impact" className="relative bg-white py-20 md:py-28 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <SectionPill variant="onLight">
            {content.impact.pill}
          </SectionPill>

          <h2 className="mt-4 text-[#0B1F3F] font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight">
            {content.impact.heading}
          </h2>

          <p className="mt-4 text-[#516684] text-base sm:text-lg leading-relaxed">
            {content.impact.subheading}
          </p>
        </div>

        {/* 4-Photo Real Action Gallery Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {content.impact.gallery.map((item) => (
            <div
              key={item.id}
              className="group v2-card rounded-3xl overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[4/4] w-full overflow-hidden bg-[#041A3B]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#041A3B]/75 via-transparent to-transparent"
                  />
                  <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-[#041A3B]/85 backdrop-blur-md border border-[#10ACFC]/40 text-[11px] font-semibold text-[#8CD9FF]">
                    {item.tag}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="text-[#0B1F3F] font-bold text-base leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[#516684] text-xs sm:text-sm leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Who We Empower — 4-Segment Audience Fit */}
        <div className="mt-20 pt-16 border-t border-[#E2ECF9]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-[#004CA8]">
                <Users className="w-3.5 h-3.5 text-[#10ACFC]" />
                Who We Work With
              </span>
              <h3 className="mt-1.5 text-[#0B1F3F] font-bold text-2xl sm:text-3xl tracking-tight">
                Tailored Pathways for Leaders, Teams &amp; Investors
              </h3>
            </div>
            <p className="text-sm text-[#516684] max-w-md">
              Whether you lead an enterprise commercial division, manage an SME, or want structured equity market skills, there is a dedicated track built for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {content.impact.audiences.map((aud) => (
              <div
                key={aud.title}
                className="rounded-3xl p-6 bg-[#F4F8FE] border border-[#D8E6F8] hover:border-[#10ACFC] transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block text-[11px] font-mono font-bold uppercase tracking-wider text-[#0B7EE8]">
                    {aud.roleTag}
                  </span>
                  <h4 className="mt-2 text-[#0B1F3F] font-bold text-base sm:text-lg leading-snug">
                    {aud.title}
                  </h4>
                  <p className="mt-2.5 text-[#516684] text-xs sm:text-sm leading-relaxed">
                    {aud.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-[#DCE9F9] flex flex-wrap gap-1.5">
                  {aud.outcomes.map((out) => (
                    <span
                      key={out}
                      className="px-2.5 py-1 rounded-full bg-white border border-[#C5DCF8] text-[11px] font-semibold text-[#004CA8]"
                    >
                      {out}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
