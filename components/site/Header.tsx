'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight, Menu, Phone, X } from 'lucide-react';
import { NAV_LINKS, SITE } from '@/lib/site';

/** Floating pill navigation using the .glass-arctic surfaces. */
export const Header: React.FC = () => {
  const pathname = usePathname() ?? '/';
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div
        className={`mx-auto max-w-6xl rounded-full transition-all duration-300 ${
          scrolled || open ? 'glass-arctic-scrolled' : 'glass-arctic'
        }`}
      >
        <nav aria-label="Main navigation" className="flex h-14 items-center justify-between gap-4 pl-5 pr-2 sm:h-16 sm:pl-6">
          <Link href="/" aria-label="Eager Consulting & Training home" className="flex shrink-0 items-center gap-3.5">
            <Image src="/logo.png" alt="Eager" width={164} height={42} priority className="h-6 w-auto sm:h-7" />
            <span className="hidden border-l border-[#0A1260]/15 pl-3.5 text-[10px] font-semibold uppercase leading-tight tracking-[0.14em] text-[var(--muted)] xl:block">
              Consulting
              <br />
              &amp; Training
            </span>
          </Link>

          <ul className="hidden items-center gap-0.5 lg:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={isActive(l.href) ? 'page' : undefined}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive(l.href)
                      ? 'bg-[var(--navy)] text-white'
                      : 'text-[var(--ink)] hover:bg-[#0A1260]/[0.06] hover:text-[var(--navy)]'
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-2 lg:flex">
            <a
              href={SITE.tel}
              aria-label={`Call ${SITE.phone}`}
              className="flex h-10 w-10 items-center justify-center rounded-full text-[var(--navy)] transition-colors hover:bg-[#0A1260]/[0.06]"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={SITE.consultUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 rounded-full bg-[var(--champagne)] px-5 py-2.5 text-sm font-semibold text-[var(--navy)] transition-colors hover:bg-[var(--champagne-hover)]"
            >
              Book a consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="site-mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--navy)] text-white lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </div>

      <div
        id="site-mobile-menu"
        hidden={!open}
        className="glass-arctic-scrolled mx-auto mt-2 max-w-6xl rounded-3xl !bg-white/[0.97] p-3 lg:hidden"
      >
        <ul>
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                aria-current={isActive(l.href) ? 'page' : undefined}
                className={`block rounded-2xl px-4 py-3.5 text-base font-medium ${
                  isActive(l.href) ? 'bg-[var(--navy)] text-white' : 'text-[var(--ink)]'
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-2 grid gap-2 border-t border-[var(--line)] pt-3 sm:grid-cols-2">
          <a
            href={SITE.consultUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-full bg-[var(--champagne)] px-5 py-3 text-sm font-semibold text-[var(--navy)]"
          >
            Book a consultation
          </a>
          <a
            href={SITE.tel}
            className="flex items-center justify-center gap-2 rounded-full border border-[var(--line)] bg-white px-5 py-3 text-sm font-semibold text-[var(--navy)]"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {SITE.phone}
          </a>
        </div>
      </div>
    </header>
  );
};
