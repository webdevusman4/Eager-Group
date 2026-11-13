'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { content, getWhatsAppUrl } from '@/lib/content-v2';
import { ArrowRight, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Profile', href: '#profile' },
  { label: 'Eager Group', href: '#ventures' },
  { label: 'Services', href: '#services' },
  { label: 'Courses', href: '#courses', badge: 'Enroll' },
  { label: 'Live Impact', href: '#impact' },
  { label: 'FAQ', href: '#faq' },
];

export const Nav: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = getWhatsAppUrl();

  return (
    <header className="fixed top-4 inset-x-0 z-50 px-4 pointer-events-none">
      <nav
        aria-label="Main Navigation"
        className={`max-w-6xl mx-auto rounded-full px-4 sm:px-6 py-2.5 md:py-3 transition-all duration-300 pointer-events-auto flex items-center justify-between ${
          scrolled ? 'v2-nav-glass-scrolled' : 'v2-nav-glass'
        }`}
      >
        {/* EAGER Brand Logo + Tag */}
        <a
          href="#top"
          className="flex items-center gap-3 hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10ACFC] rounded-full py-1 px-1"
          aria-label="Eager Group & Iftikhar Ahmed Home"
        >
          <Image
            src="/logo.png"
            alt="Eager Group"
            width={140}
            height={36}
            priority
            className="h-7 sm:h-8 w-auto object-contain"
          />
          <span className="hidden lg:inline-block h-4 w-px bg-[#D4E4F7]" />
          <span className="hidden lg:inline-block text-[11px] font-mono font-semibold uppercase tracking-wider text-[#004CA8]">
            Consulting &amp; Trainings
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="inline-flex items-center gap-1.5 text-[#0B1F3F] hover:text-[#004CA8] hover:bg-[#E7F1FD]/70 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10ACFC] rounded-full px-3 py-1.5"
            >
              <span>{link.label}</span>
              {link.badge && (
                <span className="px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-[#004CA8] text-white leading-none">
                  {link.badge}
                </span>
              )}
            </a>
          ))}
        </div>

        {/* Right CTA + Mobile Toggle */}
        <div className="flex items-center gap-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="v2-btn-royal inline-flex items-center gap-1.5 rounded-full px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold active:scale-95 select-none"
          >
            <span>Reserve Seat</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-[#041A3B] hover:bg-[#E7F1FD] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10ACFC]"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Sheet */}
      {mobileMenuOpen && (
        <div className="md:hidden max-w-sm mx-auto mt-2 p-5 rounded-3xl v2-nav-glass-scrolled pointer-events-auto shadow-2xl">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-[#0B1F3F] hover:text-[#004CA8] hover:bg-[#E7F1FD]/60 font-semibold text-sm py-2.5 px-3 rounded-xl transition-colors"
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-[#004CA8] text-white">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-[#D4E4F7]">
              <a
                href={getWhatsAppUrl(content.contact.whatsappConsultMessage)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full py-2.5 px-4 text-xs font-semibold text-[#004CA8] bg-[#E7F1FD] hover:bg-[#D4E4F7]/70 transition-colors"
              >
                <span>Book Corporate Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
