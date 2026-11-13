'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { content, getWhatsAppUrl } from '@/lib/content-v2';

const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Programmes', href: '#programmes' },
  { label: 'Eager Group', href: '#group' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export const Nav: React.FC = () => {
  const [open, setOpen] = useState(false);
  const consultUrl = getWhatsAppUrl(content.contact.whatsappConsultMessage);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-white">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 md:h-[72px] max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8"
      >
        <a href="#top" aria-label="Eager Consulting & Training, back to top" className="flex items-center gap-4">
          <Image src="/logo.png" alt="Eager" width={164} height={42} priority className="h-7 md:h-8 w-auto" />
          <span className="hidden xl:block border-l border-[var(--line)] pl-4 text-[11px] font-semibold uppercase leading-tight tracking-[0.14em] text-[var(--muted)]">
            Consulting
            <br />
            &amp; Training
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-7">
          {LINKS.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="text-sm font-medium text-[var(--ink)] hover:text-[var(--royal)] transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href={consultUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded bg-[var(--royal)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[var(--royal-dark)] transition-colors"
          >
            Book a consultation
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="v3-mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="lg:hidden -mr-2 inline-flex h-11 w-11 items-center justify-center rounded text-[var(--ink)]"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div id="v3-mobile-menu" className="lg:hidden border-t border-[var(--line)] bg-white">
          <ul className="mx-auto max-w-7xl px-4 sm:px-6 py-2">
            {LINKS.map((l) => (
              <li key={l.label} className="border-b border-[var(--line)] last:border-b-0">
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3.5 text-base font-medium text-[var(--ink)]"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-5">
            <a
              href={consultUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center rounded bg-[var(--royal)] px-5 py-3 text-sm font-semibold text-white"
            >
              Book a consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
