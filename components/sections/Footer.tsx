'use client';

import React from 'react';
import Image from 'next/image';
import { content } from '@/lib/content';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#04122B] text-white rounded-t-[2rem] pt-16 pb-12 border-t border-white/10 relative z-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Col 1: Brand Logo & Blurb */}
          <div className="md:col-span-5 flex flex-col items-start">
            <a
              href="https://eagertrainings.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white rounded-lg px-3 py-1.5 shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-bright"
            >
              <Image
                src="/logo.png"
                alt="Eager Consulting & Training"
                width={140}
                height={36}
                className="h-7 w-auto object-contain"
              />
            </a>
            <p className="mt-4 text-white/75 text-sm max-w-sm leading-relaxed">
              {content.footer.brandBlurb}
            </p>
            <p className="mt-4 text-xs font-mono text-brand-bright tracking-wide uppercase">
              Masterclass Division • Karachi
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-3">
            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-bright">
              Navigation
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {content.footer.quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/75 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-bright rounded px-1 -mx-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Contact */}
          <div className="md:col-span-4">
            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-bright">
              Executive Desk
            </p>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-brand-bright flex-shrink-0" />
                <span>{content.footer.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-bright flex-shrink-0" />
                <a
                  href={`mailto:${content.footer.email}`}
                  className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-bright rounded"
                >
                  {content.footer.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-bright flex-shrink-0" />
                <a
                  href={`tel:${content.footer.phone.replace(/\s+/g, '')}`}
                  className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-bright rounded"
                >
                  {content.footer.phone}
                </a>
              </li>
            </ul>

            {/* Social Icons (only showing non-empty URLs) */}
            <div className="mt-6 flex items-center gap-3">
              {content.contact.social.linkedin && (
                <a
                  href={content.contact.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all focus-visible:ring-2 focus-visible:ring-brand-bright"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </a>
              )}
              {content.contact.social.facebook && (
                <a
                  href={content.contact.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook page"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all focus-visible:ring-2 focus-visible:ring-brand-bright"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z" />
                  </svg>
                </a>
              )}
              {content.contact.social.youtube && (
                <a
                  href={content.contact.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube channel"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all focus-visible:ring-2 focus-visible:ring-brand-bright"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM9.75 15.02V8.98L15 12l-5.25 3.02z" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
          <p>© {currentYear} {content.footer.brandName}. All rights reserved.</p>
          <p className="font-mono text-xs text-white/50">
            Strictly limited executive seating • High-urgency booking
          </p>
        </div>
      </div>
    </footer>
  );
};
