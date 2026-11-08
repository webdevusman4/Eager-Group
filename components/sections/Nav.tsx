'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { content, getWhatsAppUrl } from '@/lib/content';
import { ArrowRight, Menu, X, ExternalLink } from 'lucide-react';

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
        className={`max-w-6xl mx-auto rounded-full px-5 py-3 md:py-3.5 transition-all duration-300 pointer-events-auto flex items-center justify-between shadow-lg ${
          scrolled ? 'glass-arctic-scrolled' : 'glass-arctic'
        }`}
      >
        {/* Brand Logo Image linking to Main Site Home */}
        <a
          href={content.contact.mainSiteUrl}
          className="flex items-center gap-2 hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-bright rounded-lg py-1 px-1"
          aria-label="Eager Consulting & Training Home"
        >
          <Image
            src="/logo.png"
            alt="Eager Consulting & Training"
            width={140}
            height={36}
            priority
            className="h-7 sm:h-8 w-auto object-contain"
          />
        </a>

        {/* Center Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-7">
          <a
            href="#reserve"
            className="text-bodytext hover:text-brand text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-bright rounded px-1.5 py-0.5"
          >
            Reserve
          </a>
          <a
            href="#curriculum"
            className="text-bodytext hover:text-brand text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-bright rounded px-1.5 py-0.5"
          >
            Curriculum
          </a>
          <a
            href="#trainer"
            className="text-bodytext hover:text-brand text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-bright rounded px-1.5 py-0.5"
          >
            Your Trainer
          </a>
          <a
            href="#testimonials"
            className="text-bodytext hover:text-brand text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-bright rounded px-1.5 py-0.5"
          >
            Testimonials
          </a>

          {/* Small Main Site External Link */}
          <a
            href={content.contact.mainSiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-muted hover:text-brand text-xs font-semibold px-2.5 py-1 rounded-full border border-line hover:border-brand/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-bright"
          >
            <span>Main site</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Right Action: Gold CTA Pill Button */}
        <div className="flex items-center gap-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-cta text-brand-deep hover:bg-cta-hover px-4 py-2 text-xs md:text-sm font-semibold active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-bright shadow-sm select-none"
          >
            <span>Reserve a seat</span>
            <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
          </a>

          {/* Mobile hamburger toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-brand-deep hover:bg-tint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-bright"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown sheet */}
      {mobileMenuOpen && (
        <div className="md:hidden max-w-sm mx-auto mt-2 p-5 rounded-3xl glass-arctic pointer-events-auto shadow-2xl border border-line animate-hero-headline">
          <div className="flex flex-col gap-3 text-center">
            <a
              href="#reserve"
              onClick={() => setMobileMenuOpen(false)}
              className="text-bodytext hover:text-brand font-semibold text-sm py-2 border-b border-line"
            >
              Reserve
            </a>
            <a
              href="#curriculum"
              onClick={() => setMobileMenuOpen(false)}
              className="text-bodytext hover:text-brand font-semibold text-sm py-2 border-b border-line"
            >
              Curriculum
            </a>
            <a
              href="#trainer"
              onClick={() => setMobileMenuOpen(false)}
              className="text-bodytext hover:text-brand font-semibold text-sm py-2 border-b border-line"
            >
              Your Trainer
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="text-bodytext hover:text-brand font-semibold text-sm py-2 border-b border-line"
            >
              Testimonials
            </a>
            <a
              href={content.contact.mainSiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 text-brand font-semibold text-xs py-2 text-center"
            >
              <span>Visit Main site</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
