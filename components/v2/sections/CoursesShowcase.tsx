'use client';

import React, { useState } from 'react';
import {
  content,
  getWhatsAppUrl,
  getDateDisplay,
  getTimeDisplay,
  getVenueDisplay,
  getSeatsLeft,
  isSoldOut,
} from '@/lib/content-v2';
import { SectionPill } from '@/components/v2/ui/SectionPill';
import { PrimaryButton } from '@/components/v2/ui/PrimaryButton';
import {
  Target,
  Brain,
  Scale,
  FileSignature,
  Calendar,
  Clock,
  MapPin,
  CheckCircle2,
  Mail,
  FileText,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

const moduleIconMap = {
  Target,
  Brain,
  Scale,
  FileSignature,
};

export const CoursesShowcase: React.FC = () => {
  const [activeModuleIndex, setActiveModuleIndex] = useState(0);

  const whatsappUrl = getWhatsAppUrl();
  const seatsLeft = getSeatsLeft();
  const soldOut = isSoldOut();

  const dateText = getDateDisplay();
  const timeText = getTimeDisplay();
  const venueText = getVenueDisplay();

  const activeModule = content.curriculum.modules[activeModuleIndex];
  const ActiveIcon = moduleIconMap[activeModule.icon] || Target;

  return (
    <section
      id="courses"
      className="relative v2-dark-section v2-grid-bg text-white rounded-t-[2.25rem] py-20 md:py-28 scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Top Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <SectionPill variant="onDark">
            {content.curriculum.pill}
          </SectionPill>

          <h2 className="mt-4 text-white font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.1]">
            {content.curriculum.heading}
          </h2>

          <p className="mt-4 text-white/80 text-base sm:text-lg leading-relaxed">
            {content.curriculum.subheading}
          </p>
        </div>

        {/* PART 1: Flagship 8-Hour Executive Sales Masterclass (Curriculum + Seat Booking Card) */}
        <div id="reserve" className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start scroll-mt-28">
          {/* LEFT (7 cols): Interactive 4-Module / 6-Stage Curriculum Explorer */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            {/* Module Selector Tabs */}
            <div
              className="grid grid-cols-2 sm:grid-cols-4 gap-2.5"
              role="tablist"
              aria-label="Sales Masterclass Modules"
            >
              {content.curriculum.modules.map((mod, idx) => {
                const isSelected = idx === activeModuleIndex;
                return (
                  <button
                    key={mod.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setActiveModuleIndex(idx)}
                    className={`rounded-2xl p-3.5 text-left transition-all border ${
                      isSelected
                        ? 'bg-gradient-to-br from-[#004CA8] to-[#10ACFC] border-[#67D1FF] text-white shadow-lg'
                        : 'bg-[#072757]/70 border-white/15 text-white/75 hover:text-white hover:border-[#10ACFC]/50'
                    }`}
                  >
                    <span className="block font-mono text-[11px] font-bold tracking-wider uppercase opacity-90">
                      {mod.stageLabel}
                    </span>
                    <span className="mt-1 block text-xs font-semibold line-clamp-1">
                      {mod.stagesCovered}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Module Detail Card */}
            <div className="v2-dark-card rounded-3xl p-7 sm:p-9">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-[#10ACFC]/20 border border-[#10ACFC]/40 flex items-center justify-center text-[#67D1FF]">
                    <ActiveIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#10ACFC]">
                      {activeModule.stageLabel} • {activeModule.stagesCovered}
                    </span>
                    <h3 className="text-white font-bold text-xl sm:text-2xl leading-snug mt-0.5">
                      {activeModule.title}
                    </h3>
                  </div>
                </div>
              </div>

              <p className="mt-5 text-[#8CD9FF] font-semibold text-base leading-relaxed">
                {activeModule.outcome}
              </p>

              <ul className="mt-5 space-y-3">
                {activeModule.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-sm sm:text-[15px] text-white/85">
                    <CheckCircle2 className="w-4 h-4 text-[#10ACFC] flex-shrink-0 mt-1" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-[#8CD9FF]">
                  <FileText className="w-4 h-4 text-[#10ACFC]" />
                  <span>Workbook Tool Included: <strong className="text-white">{activeModule.deliverable}</strong></span>
                </div>

                {activeModuleIndex < content.curriculum.modules.length - 1 && (
                  <button
                    type="button"
                    onClick={() => setActiveModuleIndex(activeModuleIndex + 1)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#67D1FF] hover:text-white transition-colors"
                  >
                    <span>Next: Module 0{activeModuleIndex + 2}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Compact All-4-Modules Overview Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {content.curriculum.modules.map((mod, idx) => (
                <button
                  key={mod.id}
                  type="button"
                  onClick={() => setActiveModuleIndex(idx)}
                  className={`flex items-center gap-3 p-3.5 rounded-2xl border text-left transition-all ${
                    idx === activeModuleIndex
                      ? 'bg-white/10 border-[#10ACFC]/60'
                      : 'bg-white/[0.03] border-white/10 hover:bg-white/[0.07]'
                  }`}
                >
                  <span className="w-7 h-7 rounded-lg bg-[#10ACFC]/20 text-[#67D1FF] font-mono text-xs font-bold flex items-center justify-center flex-shrink-0">
                    {mod.id}
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-white truncate">{mod.title}</p>
                    <p className="text-[11px] text-white/60">{mod.stagesCovered}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT (5 cols): Crisp White Logo-Branded Seat Reservation Card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-white text-[#0B1F3F] p-7 sm:p-8 shadow-2xl border border-[#C5DCF8] relative overflow-hidden">
              {/* Top Royal-to-Sky Accent Ribbon */}
              <div
                aria-hidden="true"
                className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-[#004CA8] via-[#0B7EE8] to-[#10ACFC]"
              />

              <div className="flex items-center justify-between gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E7F1FD] text-[#004CA8] text-xs font-bold border border-[#C5DCF8]">
                  <Sparkles className="w-3.5 h-3.5 text-[#0B7EE8]" />
                  {content.event.tagline}
                </span>

                {seatsLeft !== null && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#041A3B] text-white text-xs font-semibold">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        soldOut ? 'bg-red-400' : 'bg-[#10ACFC] animate-urgency-dot'
                      }`}
                    />
                    {soldOut ? 'Sold Out' : `${seatsLeft} Seats Cap`}
                  </span>
                )}
              </div>

              <h3 className="mt-4 text-[#0B1F3F] font-extrabold text-2xl leading-tight">
                {content.event.name}
              </h3>

              {/* Price Display */}
              <div className="mt-4 p-4 rounded-2xl bg-[#F4F8FE] border border-[#D8E6F8] flex items-baseline justify-between gap-2">
                <div>
                  <span className="font-display font-extrabold text-3xl sm:text-4xl text-[#004CA8] tracking-tight">
                    {content.event.priceLabel}
                  </span>
                  <span className="block text-xs font-medium text-[#516684] mt-0.5">
                    {content.event.priceUnit} • All-inclusive
                  </span>
                </div>
                <span className="text-xs font-mono font-semibold text-[#0B7EE8] bg-white px-2.5 py-1 rounded-lg border border-[#D8E6F8]">
                  1-Day Intensive
                </span>
              </div>

              {/* Logistics */}
              <div className="mt-5 space-y-2.5 text-sm">
                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-[#F4F8FE]/70">
                  <Calendar className="w-4 h-4 text-[#004CA8] flex-shrink-0" />
                  <span className="text-[#0B1F3F] font-medium text-xs sm:text-sm">{dateText}</span>
                </div>
                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-[#F4F8FE]/70">
                  <Clock className="w-4 h-4 text-[#004CA8] flex-shrink-0" />
                  <span className="text-[#0B1F3F] font-medium text-xs sm:text-sm">{timeText}</span>
                </div>
                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-[#F4F8FE]/70">
                  <MapPin className="w-4 h-4 text-[#004CA8] flex-shrink-0" />
                  <span className="text-[#0B1F3F] font-medium text-xs sm:text-sm">{venueText}</span>
                </div>
              </div>

              {/* Inclusions */}
              <div className="mt-5 pt-5 border-t border-[#E5EFFB]">
                <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#516684] mb-2.5">
                  Included With Your Seat
                </p>
                <ul className="space-y-2">
                  {content.event.includes.map((inc) => (
                    <li key={inc} className="flex items-start gap-2 text-xs text-[#0B1F3F] font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#004CA8] flex-shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Primary Enrollment CTA */}
              <div className="mt-6">
                <PrimaryButton
                  variant="onLight"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 text-sm sm:text-base"
                >
                  {soldOut ? 'Join Priority Waitlist' : 'Reserve My Seat on WhatsApp'}
                </PrimaryButton>
              </div>

              {/* Corporate Invoicing Note */}
              <div className="mt-4 pt-3.5 border-t border-[#E5EFFB] flex items-center justify-center gap-2 text-xs text-[#516684] text-center">
                <Mail className="w-3.5 h-3.5 text-[#004CA8] flex-shrink-0" />
                <span>
                  Enrolling 3+ executives? Email{' '}
                  <a
                    href={`mailto:${content.contact.email}`}
                    className="font-bold text-[#004CA8] hover:underline"
                  >
                    {content.contact.email}
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* PART 2: Additional Signature Courses & Mentorship Tracks */}
        <div className="mt-20 pt-16 border-t border-white/15">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#10ACFC]">
                More Courses &amp; Specialized Tracks
              </span>
              <h3 className="mt-1.5 text-white font-bold text-2xl sm:text-3xl tracking-tight">
                Specialized Programs &amp; Private Mentorship
              </h3>
            </div>
            <p className="text-sm text-white/70 max-w-md">
              Enroll individually or commission a customized cohort for your commercial team or institution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.signatureCourses.map((course) => {
              const courseUrl = getWhatsAppUrl(course.whatsappInquiry);

              return (
                <div
                  key={course.id}
                  className="v2-dark-card rounded-3xl p-7 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-3 py-1 rounded-full bg-[#10ACFC]/15 border border-[#10ACFC]/30 text-[11px] font-bold text-[#8CD9FF]">
                        {course.badge}
                      </span>
                      <span className="text-[11px] font-mono text-white/65">
                        {course.level}
                      </span>
                    </div>

                    <h4 className="mt-5 text-white font-bold text-xl leading-snug">
                      {course.title}
                    </h4>

                    <p className="mt-2.5 text-white/75 text-sm leading-relaxed">
                      {course.subtitle}
                    </p>

                    <ul className="mt-5 pt-5 border-t border-white/10 space-y-2.5">
                      {course.highlights.map((hl) => (
                        <li key={hl} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/85">
                          <CheckCircle2 className="w-4 h-4 text-[#10ACFC] flex-shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-7 pt-4 border-t border-white/10 flex flex-col gap-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-white/60">{course.format}</span>
                      <span className="font-semibold text-[#67D1FF]">{course.priceTag}</span>
                    </div>

                    <a
                      href={courseUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full py-3 px-4 text-xs sm:text-sm font-semibold bg-white/10 hover:bg-[#10ACFC] text-white border border-white/20 hover:border-[#10ACFC] transition-all"
                    >
                      <span>{course.ctaLabel}</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
