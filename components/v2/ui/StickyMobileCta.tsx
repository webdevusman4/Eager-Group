'use client';

import React, { useEffect, useState } from 'react';
import { content, getWhatsAppUrl, getSeatsLeft, isSoldOut } from '@/lib/content-v2';
import { ArrowRight } from 'lucide-react';

export const StickyMobileCta: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 480);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  const soldOut = isSoldOut();
  const seatsLeft = getSeatsLeft();
  const whatsappUrl = getWhatsAppUrl();

  return (
    <aside
      aria-label="Mobile quick course enrollment"
      className="md:hidden fixed bottom-3 left-4 right-4 z-40 rounded-full p-2 pl-4 pr-2 flex items-center justify-between shadow-2xl border border-[#10ACFC]/30 bg-[#041A3B]/95 backdrop-blur-xl"
    >
      <div className="flex flex-col text-left">
        <span className="text-white font-bold text-xs tracking-tight">
          Sales Masterclass • <span className="text-[#10ACFC]">{content.event.priceLabel}</span>
        </span>
        {seatsLeft !== null && (
          <span className="text-white/75 text-[11px] font-medium flex items-center gap-1.5">
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                soldOut ? 'bg-red-400' : 'bg-[#10ACFC]'
              } animate-urgency-dot`}
            />
            {soldOut ? 'Cohort full • Join waitlist' : `${seatsLeft} executive seats open`}
          </span>
        )}
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="v2-btn-sky inline-flex items-center gap-1.5 rounded-full px-4 py-2.5 text-xs font-bold text-white active:scale-95 select-none"
      >
        <span>{soldOut ? 'Waitlist' : 'Enroll Now'}</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </a>
    </aside>
  );
};
