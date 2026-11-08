'use client';

import React, { useEffect, useState } from 'react';
import { content, getWhatsAppUrl, getSeatsLeft, isSoldOut } from '@/lib/content';
import { ArrowRight } from 'lucide-react';

export const StickyMobileCta: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Appear after hero scrolls out of view (~450px)
      if (window.scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  const soldOut = isSoldOut();
  const seatsLeft = getSeatsLeft();
  const whatsappUrl = getWhatsAppUrl(soldOut ? 'waitlist' : 'default');

  return (
    <aside
      aria-label="Mobile quick registration"
      className="md:hidden fixed bottom-3 left-4 right-4 z-40 navy-glass-pill rounded-full p-2.5 pl-5 pr-2 flex items-center justify-between shadow-2xl transition-all duration-300 animate-hero-headline border border-line/20"
    >
      <div className="flex flex-col text-left">
        <span className="text-cta font-bold text-sm tracking-tight">
          {content.event.priceLabel}
        </span>
        {seatsLeft !== null && (
          <span className="text-white/80 text-xs font-medium flex items-center gap-1.5">
            <span className={`w-1.5 h-1.5 rounded-full ${soldOut ? 'bg-red-400' : 'bg-cta'} animate-urgency-dot`} />
            {soldOut ? 'Sold out (Waitlist)' : `${seatsLeft} seats left`}
          </span>
        )}
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-full bg-cta px-4 py-2 text-xs font-bold text-brand-deep hover:bg-cta-hover active:scale-95 transition-all select-none shadow-md"
      >
        <span>{soldOut ? 'Join waitlist' : 'Reserve'}</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </a>
    </aside>
  );
};
