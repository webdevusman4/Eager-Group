import React from 'react';
import { content, getWhatsAppUrl, isSoldOut } from '@/lib/content-v2';
import { PrimaryButton } from '@/components/v2/ui/PrimaryButton';
import { SecondaryButton } from '@/components/v2/ui/SecondaryButton';
import { MessageSquare, PhoneCall } from 'lucide-react';

export const FinalCta: React.FC = () => {
  const soldOut = isSoldOut();
  const seatWhatsappUrl = getWhatsAppUrl();
  const consultWhatsappUrl = getWhatsAppUrl(content.contact.whatsappConsultMessage);

  return (
    <section className="bg-white py-20 md:py-24 relative z-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="v2-dark-section rounded-[2.25rem] p-8 sm:p-12 md:p-16 text-white text-center shadow-2xl relative overflow-hidden border border-[#10ACFC]/30">
          {/* Eager Swoosh Glows */}
          <div
            aria-hidden="true"
            className="absolute -top-24 -right-20 w-72 h-72 rounded-full bg-[#10ACFC]/25 blur-3xl pointer-events-none"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-24 -left-20 w-72 h-72 rounded-full bg-[#004CA8]/45 blur-3xl pointer-events-none"
          />

          <span className="relative z-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#10ACFC]/15 border border-[#10ACFC]/35 text-xs font-semibold text-[#8CD9FF]">
            Ready to Partner or Enroll?
          </span>

          <h2 className="relative z-10 mt-5 text-white font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight max-w-3xl mx-auto">
            {soldOut
              ? 'Next Cohort Priority Waitlist & Corporate Bookings Now Open.'
              : `Secure One of ${content.event.seats_total ?? 8} Masterclass Seats — or Commission a Custom Program.`}
          </h2>

          <p className="relative z-10 mt-4 text-white/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Join the upcoming <strong className="text-white">8-Hour Executive Sales Masterclass ({content.event.priceLabel})</strong> in Karachi, explore our Stock Market &amp; Coaching tracks, or invite Iftikhar Ahmed to train your corporate team.
          </p>

          <div className="relative z-10 mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <PrimaryButton
              variant="onDark"
              href={seatWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-sm sm:text-base px-8 py-4"
            >
              {soldOut ? 'Join Masterclass Waitlist' : 'Reserve Sales Masterclass Seat'}
            </PrimaryButton>

            <SecondaryButton
              variant="onDark"
              href={consultWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              icon={<MessageSquare className="w-4 h-4 text-[#10ACFC]" />}
              className="w-full sm:w-auto text-sm sm:text-base px-7 py-4"
            >
              Corporate Training &amp; Advisory
            </SecondaryButton>
          </div>

          <div className="relative z-10 mt-7 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/75">
            <a
              href={`tel:${content.contact.phoneDisplay.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#10ACFC]" />
              <span>Direct Desk: {content.contact.phoneDisplay}</span>
            </a>
            <span>•</span>
            <a
              href={`mailto:${content.contact.email}`}
              className="hover:text-white transition-colors"
            >
              {content.contact.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
