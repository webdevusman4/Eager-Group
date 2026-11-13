import React from 'react';
import Image from 'next/image';
import { content } from '@/lib/content-v2';
import { Container } from './ui';

const COLUMNS = [
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Eager Group', href: '#group' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    heading: 'Services',
    links: [
      { label: 'Corporate training', href: '#services' },
      { label: 'Business consultancy', href: '#services' },
      { label: 'Keynotes and coaching', href: '#services' },
    ],
  },
  {
    heading: 'Programmes',
    links: [
      { label: 'Executive Sales Masterclass', href: '#programmes' },
      { label: 'Other programmes', href: '#programmes' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
];

export const Footer: React.FC = () => (
  <footer className="border-t border-[var(--line)] bg-white">
    <Container className="py-14">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Image src="/logo.png" alt="Eager" width={164} height={42} className="h-8 w-auto" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-[var(--muted)]">
            {content.footer.brandName}. Corporate training, executive programmes and business
            consultancy, led by {content.profile.name}.
          </p>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-6 lg:col-start-6">
          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--ink)]">{col.heading}</p>
              <ul className="mt-4 space-y-2.5 text-sm">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-[var(--muted)] hover:text-[var(--royal)] transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="mt-12 flex flex-col gap-3 border-t border-[var(--line)] pt-6 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {content.footer.brandName}. An Eager Group company, Karachi.
        </p>
        {content.contact.social.linkedin && (
          <a
            href={content.contact.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--royal)] transition-colors"
          >
            LinkedIn
          </a>
        )}
      </div>
    </Container>
  </footer>
);
