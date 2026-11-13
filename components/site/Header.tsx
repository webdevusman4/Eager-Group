'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Phone, X } from 'lucide-react';
import { NAV_LINKS, SITE } from '@/lib/site';

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
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      <div
        className={`glass mx-auto max-w-7xl rounded-xl transition-shadow duration-300 ${
          scrolled || open ? 'shadow-[0_16px_40px_-16px_rgba(11,31,63,0.35)]' : ''
        } ${open ? '!bg-white/[0.97]' : ''}`}
      >
        <nav aria-label="Main navigation" className="flex h-16 items-center justify-between gap-6 px-4 sm:px-5 lg:h-[68px]">
          <Link href="/" aria-label="Eager Consulting & Training home" className="flex shrink-0 items-center gap-4">
            <Image src="/logo.png" alt="Eager" width={164} height={42} priority className="h-7 w-auto lg:h-8" />
            <span className="hidden border-l border-[var(--line)] pl-4 text-[10.5px] font-semibold uppercase leading-tight tracking-[0.14em] text-[var(--muted)] xl:block">
              Consulting
              <br />
              &amp; Training
            </span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={isActive(l.href) ? 'page' : undefined}
                  className={`relative rounded-md px-3.5 py-2 text-sm font-medium transition-colors ${
                    isActive(l.href) ? 'text-[var(--royal)]' : 'text-[var(--ink)] hover:text-[var(--royal)]'
                  }`}
                >
                  {l.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-[var(--royal)] transition-transform duration-300 ${
                      isActive(l.href) ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-4 lg:flex">
            <a href={SITE.tel} className="flex items-center gap-2 text-sm font-medium text-[var(--muted)] hover:text-[var(--royal)]">
              <Phone className="h-4 w-4" aria-hidden="true" />
              {SITE.phone}
            </a>
            <a
              href={SITE.consultUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md bg-[var(--royal)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--royal-dark)]"
            >
              Book a consultation
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="site-mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="-mr-1.5 inline-flex h-11 w-11 items-center justify-center rounded-md text-[var(--ink)] lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        <div
          id="site-mobile-menu"
          hidden={!open}
          className="border-t border-[var(--line)]/80 px-4 pb-5 sm:px-5 lg:hidden"
        >
          <ul className="py-2">
            {NAV_LINKS.map((l) => (
              <li key={l.href} className="border-b border-[var(--line)]/70 last:border-b-0">
                <Link
                  href={l.href}
                  aria-current={isActive(l.href) ? 'page' : undefined}
                  className={`block py-3.5 text-base font-medium ${isActive(l.href) ? 'text-[var(--royal)]' : 'text-[var(--ink)]'}`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="grid gap-2 sm:grid-cols-2">
            <a
              href={SITE.consultUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-md bg-[var(--royal)] px-5 py-3 text-sm font-semibold text-white"
            >
              Book a consultation
            </a>
            <a
              href={SITE.tel}
              className="flex items-center justify-center gap-2 rounded-md border border-[var(--line)] bg-white px-5 py-3 text-sm font-semibold text-[var(--ink)]"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {SITE.phone}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
