'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Menu, X, ArrowRight } from 'lucide-react';
import { content, getWhatsAppUrl } from '@/lib/content-v2';

// Sections live on the full /v2 page until this design replaces it.
const LINKS = [
  { label: 'About', href: '/v2#profile' },
  { label: 'Eager Group', href: '/v2#ventures' },
  { label: 'Services', href: '/v2#services' },
  { label: 'Courses', href: '/v2#courses' },
  { label: 'FAQ', href: '/v2#faq' },
];

export const Nav: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const consultUrl = getWhatsAppUrl(content.contact.whatsappConsultMessage);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'bg-white/95 backdrop-blur-md border-b border-[var(--line)] shadow-[0_6px_24px_-12px_rgba(11,31,63,0.18)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 md:h-20 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8"
      >
        <a
          href="/v3"
          aria-label="Eager Group home"
          className="flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--royal)] focus-visible:ring-offset-4"
        >
          <Image
            src="/logo.png"
            alt="Eager"
            width={164}
            height={42}
            priority
            className="h-7 md:h-8 w-auto"
          />
          <span className="hidden xl:block h-6 w-px bg-[var(--line)]" aria-hidden="true" />
          <span className="hidden xl:block text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--body)] leading-tight">
            Consulting
            <br />
            &amp; Training
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {LINKS.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="rounded-md px-3.5 py-2 text-sm font-medium text-[var(--ink)]/80 hover:text-[var(--royal)] hover:bg-[var(--royal-soft)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--royal)]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${content.contact.phoneDisplay.replace(/\s+/g, '')}`}
            className="text-sm font-medium text-[var(--body)] hover:text-[var(--royal)] transition-colors"
          >
            {content.contact.phoneDisplay}
          </a>
          <a
            href={consultUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-[var(--royal)] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[var(--royal-hover)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--royal)] focus-visible:ring-offset-2"
          >
            Book a consultation
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="v3-mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-lg text-[var(--ink)] hover:bg-[var(--royal-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--royal)]"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div id="v3-mobile-menu" className="lg:hidden border-t border-[var(--line)] bg-white">
          <ul className="mx-auto max-w-7xl px-4 sm:px-6 py-3">
            {LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 text-base font-medium text-[var(--ink)] hover:bg-[var(--royal-soft)] hover:text-[var(--royal)]"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="mt-2 border-t border-[var(--line)] pt-4 pb-2">
              <a
                href={consultUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--royal)] px-5 py-3 text-sm font-semibold text-white"
              >
                Book a consultation
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
