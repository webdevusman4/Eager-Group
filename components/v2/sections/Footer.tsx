import React from 'react';
import Image from 'next/image';
import { content } from '@/lib/content-v2';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#03132B] text-white rounded-t-[2.25rem] pt-16 pb-14 border-t border-[#10ACFC]/20 relative z-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Col 1 (4 cols): EAGER Logo & Group Overview */}
          <div className="md:col-span-4 flex flex-col items-start">
            <a
              href="#top"
              className="inline-block bg-white rounded-xl px-3.5 py-2 shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10ACFC]"
            >
              <Image
                src="/logo.png"
                alt="Eager Group"
                width={140}
                height={36}
                className="h-7 w-auto object-contain"
              />
            </a>
            <p className="mt-4 text-white/75 text-sm leading-relaxed">
              {content.footer.blurb}
            </p>
            <p className="mt-4 text-xs font-mono text-[#67D1FF] tracking-wide uppercase">
              {content.footer.groupLabel}
            </p>
          </div>

          {/* Col 2 (3 cols): Eager Group Companies */}
          <div className="md:col-span-3">
            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#10ACFC]">
              Eager Group Ventures
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-white/80">
              {content.ventures.companies.map((v) => (
                <li key={v.id}>
                  <a
                    href="#ventures"
                    className="hover:text-[#67D1FF] transition-colors block"
                  >
                    {v.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 (2 cols): Quick Section Links */}
          <div className="md:col-span-2">
            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#10ACFC]">
              Explore
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-white/75">
              <li>
                <a href="#profile" className="hover:text-white transition-colors">
                  Executive Profile
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Advisory Services
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-colors">
                  Sales Masterclass
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-colors">
                  Stock Market Course
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4 (3 cols): Executive Contact Desk */}
          <div className="md:col-span-3">
            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#10ACFC]">
              Executive Desk
            </p>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#10ACFC] flex-shrink-0" />
                <span>{content.contact.location}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#10ACFC] flex-shrink-0" />
                <a
                  href={`tel:${content.contact.phoneDisplay.replace(/\s+/g, '')}`}
                  className="hover:text-white transition-colors"
                >
                  {content.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#10ACFC] flex-shrink-0" />
                <a
                  href={`mailto:${content.contact.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {content.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#67D1FF] flex-shrink-0" />
                <a
                  href={`mailto:${content.contact.directEmail}`}
                  className="hover:text-white transition-colors break-all text-xs text-white/70"
                >
                  {content.contact.directEmail}
                </a>
              </li>
            </ul>

            {content.contact.social.linkedin && (
              <div className="mt-5 flex items-center gap-3">
                <a
                  href={content.contact.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Iftikhar Ahmed LinkedIn profile"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-[#004CA8] text-xs font-semibold text-white transition-all"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                  <span>Connect on LinkedIn</span>
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/55 gap-4">
          <p>
            © {currentYear} {content.footer.brandName} • Eager Group of Companies. All rights reserved.
          </p>
          <p className="font-mono text-xs text-[#67D1FF]/80">
            Empowering People • Transforming Businesses
          </p>
        </div>
      </div>
    </footer>
  );
};
