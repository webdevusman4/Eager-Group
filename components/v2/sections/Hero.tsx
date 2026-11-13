import React from 'react';
import Image from 'next/image';
import { content, getWhatsAppUrl, getSeatsLeft, isSoldOut } from '@/lib/content-v2';
import { PrimaryButton } from '@/components/v2/ui/PrimaryButton';
import { SecondaryButton } from '@/components/v2/ui/SecondaryButton';
import { SectionPill } from '@/components/v2/ui/SectionPill';
import { Award, Building2, CheckCircle2, GraduationCap, MessageSquare, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  const consultWhatsappUrl = getWhatsAppUrl(content.contact.whatsappConsultMessage);
  const seatsLeft = getSeatsLeft();
  const soldOut = isSoldOut();

  return (
    <section
      id="top"
      className="relative v2-dark-section v2-grid-bg text-white pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
    >
      {/* Ambient Swoosh Glows inspired by the EAGER logo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 w-[560px] h-[560px] rounded-full bg-[#10ACFC]/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-12 -left-24 w-[460px] h-[460px] rounded-full bg-[#004CA8]/35 blur-3xl"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* LEFT COLUMN (7 cols): Executive Identity + Dual Purpose Value Prop */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <SectionPill variant="onDark">
              {content.profile.heroBadge}
            </SectionPill>

            {/* Name & Multi-Disciplinary Role Strip */}
            <div className="mt-5 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-xs sm:text-sm font-medium text-[#8CD9FF]">
              <span className="font-bold text-white tracking-wide uppercase">
                {content.profile.name}
              </span>
              <span className="text-[#10ACFC]">•</span>
              <span>Certified Corporate Trainer</span>
              <span className="text-[#10ACFC]">•</span>
              <span>Sales &amp; Business Consultant</span>
              <span className="text-[#10ACFC]">•</span>
              <span>Stock Market Strategist</span>
            </div>

            {/* Display Headline */}
            <h1 className="mt-4 font-extrabold text-[clamp(2.25rem,4.8vw,4.1rem)] leading-[1.07] tracking-[-0.025em] text-white">
              <span className="block">{content.profile.h1Line1}</span>
              <span className="block v2-text-gradient-light mt-1">
                {content.profile.h1Highlight}
              </span>
              <span className="block mt-1">{content.profile.h1Line2}</span>
            </h1>

            {/* Executive Mission */}
            <p className="mt-6 text-white/80 text-base sm:text-[17px] leading-[1.68] max-w-2xl">
              {content.profile.mission}
            </p>

            {/* Dual Conversion CTAs: Courses & Corporate Advisory */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <PrimaryButton variant="onDark" href="#courses" className="px-7 py-4 text-sm sm:text-base">
                Explore Courses &amp; Enroll
              </PrimaryButton>
              <SecondaryButton
                variant="onDark"
                href={consultWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                icon={<MessageSquare className="w-4 h-4 text-[#10ACFC]" />}
                className="px-6 py-4 text-sm sm:text-base"
              >
                Book Corporate Training
              </SecondaryButton>
            </div>

            {/* Quick Authority Proof Strip */}
            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3.5 w-full max-w-2xl text-xs text-white/80">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#10ACFC] flex-shrink-0" />
                <span>15+ Years Executive Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#10ACFC] flex-shrink-0" />
                <span>Founder of 3 Eager Ventures</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#10ACFC] flex-shrink-0" />
                <span>Corporate, SME &amp; Investor Tracks</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN (5 cols): Real Portrait of Iftikhar Ahmed + Live Masterclass Spotlight */}
          <div className="lg:col-span-5 relative w-full max-w-[450px] mx-auto lg:ml-auto">
            {/* Offset Architectural Frame in Logo Swoosh Cyan */}
            <div
              aria-hidden="true"
              className="absolute -inset-2.5 rounded-[2rem] bg-gradient-to-br from-[#10ACFC]/35 via-[#004CA8]/20 to-transparent blur-sm pointer-events-none"
            />

            <div className="relative rounded-[1.85rem] overflow-hidden border border-[#10ACFC]/35 bg-gradient-to-b from-[#072B61] via-[#05204A] to-[#041633] shadow-2xl">
              {/* Diagonal Eager Logo Swoosh Accent inside portrait backdrop */}
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(140deg, transparent 32%, rgba(0, 76, 168, 0.65) 32.5%, rgba(16, 172, 252, 0.35) 68%, transparent 68.5%)',
                }}
              />

              {/* Top Floating Flagship Course Pill inside Frame */}
              <a
                href="#courses"
                className="relative z-20 m-4 mb-0 flex items-center justify-between gap-2 rounded-2xl bg-[#041A3B]/85 backdrop-blur-md border border-[#10ACFC]/35 px-4 py-2.5 text-xs hover:border-[#10ACFC] transition-colors group"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#10ACFC] animate-urgency-dot flex-shrink-0" />
                  <span className="font-semibold text-white">
                    8-Hr Executive Sales Masterclass
                  </span>
                </div>
                <span className="font-mono font-bold text-[#67D1FF] group-hover:translate-x-0.5 transition-transform">
                  {soldOut ? 'Waitlist' : seatsLeft ? `${seatsLeft} Seats • ${content.event.priceLabel}` : content.event.priceLabel} →
                </span>
              </a>

              {/* Real Cutout Portrait of Iftikhar Ahmed */}
              <div className="relative z-10 pt-3 px-6 flex justify-center items-end min-h-[380px] sm:min-h-[410px]">
                <Image
                  src="/images/v2/iftikhar-hero-cutout.webp"
                  alt="Iftikhar Ahmed — Founder of Eager Group & Certified Corporate Trainer"
                  width={428}
                  height={513}
                  priority
                  className="w-[82%] max-w-[330px] h-auto object-contain object-bottom drop-shadow-[0_20px_30px_rgba(0,0,0,0.55)]"
                />
              </div>

              {/* Bottom Smoked Nameplate & Signature Philosophy */}
              <div className="relative z-20 p-5 bg-gradient-to-t from-[#031229] via-[#041A3B]/95 to-[#041A3B]/85 border-t border-white/10">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-display font-bold text-base text-white tracking-tight">
                      Iftikhar Ahmed
                    </p>
                    <p className="text-xs text-[#8CD9FF] font-medium">
                      Founder, Eager Group • Master Corporate Trainer
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#10ACFC]/15 border border-[#10ACFC]/30 text-[11px] font-mono font-semibold text-[#8CD9FF]">
                    <Sparkles className="w-3 h-3 text-[#10ACFC]" />
                    Karachi, PK
                  </span>
                </div>
                <p className="mt-2.5 pt-2.5 border-t border-white/10 text-xs italic text-white/85">
                  {content.profile.signatureQuote}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Metric Impact Bar */}
        <div className="mt-14 md:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {content.metrics.map((metric) => (
            <div
              key={metric.label}
              className="v2-dark-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between"
            >
              <div className="flex items-baseline gap-2">
                <span className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                  {metric.value}
                </span>
                <span className="text-xs sm:text-sm font-mono font-semibold uppercase tracking-wider text-[#10ACFC]">
                  {metric.unit}
                </span>
              </div>
              <p className="mt-2.5 text-xs sm:text-sm text-white/75 leading-relaxed">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
