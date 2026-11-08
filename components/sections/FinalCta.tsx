'use client';

import React from 'react';
import { content, getWhatsAppUrl, isSoldOut } from '@/lib/content';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { SecondaryButton } from '@/components/ui/SecondaryButton';
import { MessageSquare } from 'lucide-react';

export const FinalCta: React.FC = () => {
  const soldOut = isSoldOut();
  const whatsappUrl = getWhatsAppUrl(soldOut ? 'waitlist' : 'default');
  const questionUrl = getWhatsAppUrl('question');

  // Compute dynamic heading using real seats_total
  let heading = content.finalCta.h2;
  if (soldOut) {
    heading = 'This cohort is fully booked. Join the priority waitlist for the next session.';
  } else if (content.event.seats_total) {
    heading = `The room holds strictly ${content.event.seats_total} seats. Make sure one of them is yours.`;
  }

  return (
    <section className="bg-white py-24 md:py-32 relative z-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Centered Navy Glass Card */}
        <div className="navy-glass-card rounded-3xl p-8 sm:p-12 md:p-16 text-white text-center shadow-2xl relative overflow-hidden border border-white/10">
          {/* Subtle brand glow inside */}
          <div
            className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-brand/25 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <h2 className="relative z-10 text-white font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight max-w-2xl mx-auto">
            {heading}
          </h2>

          <p className="relative z-10 mt-5 text-white/80 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            {soldOut
              ? 'Future sessions are scheduled based on waitlist demand. Register your interest to be notified first.'
              : content.finalCta.sub}
          </p>

          {/* Action Buttons */}
          <div className="relative z-10 mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <PrimaryButton
              variant="onDark"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-base px-8 py-4"
            >
              {soldOut ? 'Join the waitlist' : content.finalCta.ctaPrimary}
            </PrimaryButton>

            <SecondaryButton
              variant="onDark"
              href={questionUrl}
              target="_blank"
              rel="noopener noreferrer"
              icon={<MessageSquare className="w-4 h-4 text-white/80" />}
              className="w-full sm:w-auto text-base px-8 py-4"
            >
              {content.finalCta.ctaSecondary}
            </SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};
