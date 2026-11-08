'use client';

import React from 'react';
import Image from 'next/image';
import { content, getWhatsAppUrl, getSeatsLeft, isSoldOut } from '@/lib/content';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { SecondaryButton } from '@/components/ui/SecondaryButton';
import { SectionPill } from '@/components/ui/SectionPill';
import { BookOpen } from 'lucide-react';

export const Hero: React.FC = () => {
  const whatsappUrl = getWhatsAppUrl();
  const seatsLeft = getSeatsLeft();
  const soldOut = isSoldOut();

  return (
    <section className="relative text-white min-h-[100svh] pt-32 pb-40 md:pt-36 md:pb-48 overflow-hidden flex items-center bg-brand-deep">
      {/* Background container */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Hero skyline image */}
        <Image
          src="/images/hero-ambient.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-45"
        />

        {/* Left-to-right gradient overlay (--brand-deep: #071F44 at 95% on left -> 35% on right) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to right, rgba(7, 31, 68, 0.95) 0%, rgba(7, 31, 68, 0.70) 50%, rgba(7, 31, 68, 0.35) 100%)',
          }}
        />

        {/* Radial gradient of logo blue #0048A8 at ~40% opacity centered top-right behind portrait */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 75% 35%, rgba(0, 72, 168, 0.40) 0%, transparent 100%)',
          }}
        />

        {/* Subtle white radial glow behind headline */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/[0.05] rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-14 items-center">
          {/* LEFT Column: Copy & CTAs */}
          <div className="flex flex-col items-start max-w-2xl">
            {/* Eyebrow Pill */}
            <div className="animate-hero-headline">
              <SectionPill variant="onDark" className="text-white border-white/20">
                {content.hero.pill}
              </SectionPill>
            </div>

            {/* Trainer Name Line */}
            <p className="mt-4 text-brand-bright font-medium text-lg tracking-normal animate-hero-headline">
              {content.hero.trainerName}
            </p>

            {/* H1 Headline */}
            <h1 className="mt-4 text-white font-bold text-[clamp(2.5rem,5.5vw,4.75rem)] leading-[1.05] tracking-[-0.02em] animate-hero-headline">
              {content.hero.h1Prefix}
              <span className="text-brand-bright">{content.hero.h1Highlight}</span>
              {content.hero.h1Suffix}
            </h1>

            {/* Subhead */}
            <p className="mt-6 text-white/80 text-[17px] leading-[1.65] max-w-[62ch] animate-hero-subhead">
              {content.hero.subhead}
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto animate-hero-actions">
              <PrimaryButton
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {soldOut ? content.hero.ctaWaitlist : content.hero.ctaPrimary}
              </PrimaryButton>
              <SecondaryButton
                variant="onDark"
                href="#curriculum"
                icon={<BookOpen className="w-4 h-4 text-white/80" />}
              >
                {content.hero.ctaSecondary}
              </SecondaryButton>
            </div>

            {/* Microcopy with computed seats counter (hidden if seats_total is null) */}
            {seatsLeft !== null && (
              <p className="mt-4 text-white/70 text-xs flex items-center gap-2 animate-hero-actions">
                <span className={`w-2 h-2 rounded-full ${soldOut ? 'bg-slate-muted' : 'bg-brand-bright animate-urgency-dot'}`} />
                <span>
                  {soldOut
                    ? 'Session sold out. Join the waitlist for the next cohort.'
                    : `Only ${seatsLeft} seats left. Registration closes when the room is full.`}
                </span>
              </p>
            )}
          </div>

          {/* RIGHT Column: Offset Framed Portrait */}
          <div className="relative w-full max-w-[500px] mx-auto lg:ml-auto aspect-[4/5] animate-hero-portrait">
            {/* Offset decorative outline rectangle */}
            <div
              className="absolute -bottom-5 -left-5 w-[65%] h-[32%] rounded-3xl border border-brand-bright/30 pointer-events-none"
              aria-hidden="true"
            />

            {/* Portrait Card */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-brand-deep">
              <Image
                src="/images/hero-portrait.webp"
                alt="Master Trainer Iftikhar Ahmed in executive suit"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                className="object-cover object-top"
              />

              {/* Caption chip bottom-left inside portrait */}
              <div className="absolute bottom-5 left-5 right-5 sm:right-auto glass-smoked rounded-2xl p-3.5 md:p-4 text-left">
                <p className="text-white font-bold text-xs tracking-wider uppercase">
                  {content.trainer.portraitCaption.name}
                </p>
                <p className="text-white/75 text-xs mt-0.5">
                  {content.trainer.portraitCaption.role}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
