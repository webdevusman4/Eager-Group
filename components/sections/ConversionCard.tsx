'use client';

import React from 'react';
import {
  content,
  getWhatsAppUrl,
  getDateDisplay,
  getTimeDisplay,
  getVenueDisplay,
  getSeatsLeft,
  isSoldOut,
} from '@/lib/content';
import { SectionPill } from '@/components/ui/SectionPill';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { Calendar, Clock, MapPin, CheckCircle2, Mail } from 'lucide-react';

export const ConversionCard: React.FC = () => {
  const whatsappUrl = getWhatsAppUrl();
  const seatsLeft = getSeatsLeft();
  const soldOut = isSoldOut();

  const dateText = getDateDisplay();
  const timeText = getTimeDisplay();
  const venueText = getVenueDisplay();

  return (
    <section id="reserve" className="relative bg-tint py-24 md:py-32 scroll-mt-28 overflow-hidden">
      {/* Soft blurred refraction orbs behind the glass card */}
      <div
        className="absolute top-1/3 right-1/4 w-[420px] h-[420px] rounded-full bg-brand/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-1/6 w-[360px] h-[360px] rounded-full bg-cta/20 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* LEFT Column: Outcomes & Context */}
          <div className="order-2 lg:order-1 lg:col-span-6 flex flex-col items-start">
            <SectionPill variant="onLight">
              {content.conversion.pill}
            </SectionPill>

            <h2 className="mt-4 text-brand-deep font-bold text-[clamp(2rem,4vw,3.25rem)] leading-[1.1] tracking-[-0.02em]">
              {content.conversion.h2}
            </h2>

            <p className="mt-5 text-muted text-base md:text-lg leading-relaxed">
              Designed specifically for founders, sales heads, and senior executives who demand a systematic, non-hyped approach to pipeline velocity and closing high-stakes commercial deals.
            </p>

            <div className="mt-8 space-y-4 w-full">
              {content.conversion.outcomes.map((outcome) => (
                <div key={outcome} className="flex items-start gap-3.5">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand/10 flex items-center justify-center text-brand mt-0.5">
                    <CheckCircle2 className="w-5 h-5 text-brand" />
                  </div>
                  <span className="text-bodytext font-medium text-base leading-snug">
                    {outcome}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-line w-full flex items-center gap-3 text-muted text-sm">
              <Mail className="w-4 h-4 text-brand flex-shrink-0" />
              <span>
                Need executive corporate invoicing or bank transfer details? Contact{' '}
                <a
                  href={`mailto:${content.contact.email}`}
                  className="font-semibold text-brand hover:underline focus-visible:ring-1 focus-visible:ring-brand rounded"
                >
                  {content.contact.email}
                </a>
              </span>
            </div>
          </div>

          {/* RIGHT Column: The Arctic Glass Conversion Card */}
          <div className="order-1 lg:order-2 lg:col-span-6">
            <div className="glass-arctic rounded-3xl p-8 md:p-10 shadow-2xl relative border border-line">
              {/* Header Pill & Title */}
              <div className="flex flex-col items-start">
                <span className="inline-block px-3.5 py-1.5 rounded-full bg-tint text-brand text-xs font-semibold border border-line">
                  {content.conversion.cardPill}
                </span>

                <h3 className="mt-3 text-brand-deep font-bold text-2xl md:text-3xl tracking-tight">
                  {content.conversion.cardTitle}
                </h3>
              </div>

              {/* Event Logistics Rows */}
              <div className="mt-6 space-y-3.5">
                {/* Date */}
                <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/70 border border-line">
                  <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center text-brand flex-shrink-0">
                    <Calendar className="w-5 h-5 text-brand" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted uppercase tracking-wider">Date</p>
                    <p className="text-brand-deep font-semibold text-sm md:text-base">{dateText}</p>
                  </div>
                </div>

                {/* Time */}
                <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/70 border border-line">
                  <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center text-brand flex-shrink-0">
                    <Clock className="w-5 h-5 text-brand" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted uppercase tracking-wider">Time</p>
                    <p className="text-brand-deep font-semibold text-sm md:text-base">{timeText}</p>
                  </div>
                </div>

                {/* Venue */}
                <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/70 border border-line">
                  <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center text-brand flex-shrink-0">
                    <MapPin className="w-5 h-5 text-brand" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted uppercase tracking-wider">Venue</p>
                    <p className="text-brand-deep font-semibold text-sm md:text-base">{venueText}</p>
                  </div>
                </div>
              </div>

              {/* Hairline Divider */}
              <div className="my-6 border-t border-line" />

              {/* Price & Scarcity */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-cta font-bold text-4xl md:text-5xl tracking-tight leading-none">
                    {content.event.priceLabel}
                  </span>
                  <span className="text-muted text-sm font-medium">
                    {content.event.priceUnit}
                  </span>
                </div>

                {/* Scarcity Pill (hidden if seats_total is null) */}
                {seatsLeft !== null && (
                  <div className="inline-flex items-center gap-2 rounded-full bg-tint px-3.5 py-1.5 text-xs font-bold text-brand-deep border border-line shadow-sm self-start sm:self-auto select-none">
                    <span className={`w-2 h-2 rounded-full ${soldOut ? 'bg-slate-muted' : 'bg-brand-bright animate-urgency-dot'}`} />
                    <span>{soldOut ? 'Sold out' : `Only ${seatsLeft} Seats Left`}</span>
                  </div>
                )}
              </div>

              {/* Optional Included items if provided */}
              {content.event.includes && content.event.includes.length > 0 && (
                <div className="mt-5 space-y-2 pt-4 border-t border-line">
                  <p className="text-xs font-semibold text-muted uppercase tracking-wider">Included with seat:</p>
                  <ul className="text-xs text-bodytext space-y-1.5">
                    {content.event.includes.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Full-width Primary Action (Gold CTA) */}
              <div className="mt-6">
                <PrimaryButton
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-base py-4"
                >
                  {soldOut ? content.hero.ctaWaitlist : 'Reserve my seat'}
                </PrimaryButton>
              </div>

              {/* Fine Print */}
              <div className="mt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-muted gap-2 text-center sm:text-left">
                <span>{content.conversion.finePrint1}</span>
                <a
                  href={`mailto:${content.contact.email}`}
                  className="text-brand font-medium hover:underline"
                >
                  Questions? {content.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
