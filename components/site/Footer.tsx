import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PROGRAMMES, SERVICES, SITE } from '@/lib/site';
import { Container } from './ui';

export const Footer: React.FC = () => {
  const columns = [
    {
      heading: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Eager Group', href: '/eager-group' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    { heading: 'Services', links: SERVICES.map((s) => ({ label: s.title, href: `/services/${s.slug}` })) },
    { heading: 'Programmes', links: PROGRAMMES.map((p) => ({ label: p.title, href: `/programmes/${p.slug}` })) },
  ];

  return (
    <footer className="border-t border-[var(--line)] bg-[var(--paper)]">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Image src="/logo.png" alt="Eager" width={164} height={42} className="h-8 w-auto" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-[var(--muted)]">
              Corporate training, executive programmes and business consultancy, led by {SITE.person}.
            </p>
            <dl className="mt-6 space-y-1.5 text-sm">
              <div>
                <dt className="sr-only">Phone</dt>
                <dd>
                  <a href={SITE.tel} className="text-[var(--ink)] hover:text-[var(--royal)]">{SITE.phone}</a>
                </dd>
              </div>
              <div>
                <dt className="sr-only">Email</dt>
                <dd>
                  <a href={`mailto:${SITE.email}`} className="text-[var(--ink)] hover:text-[var(--royal)]">{SITE.email}</a>
                </dd>
              </div>
              <div>
                <dt className="sr-only">Location</dt>
                <dd className="text-[var(--muted)]">{SITE.location}</dd>
              </div>
            </dl>
          </div>

          <nav aria-label="Footer" className="grid gap-10 sm:grid-cols-3 lg:col-span-8">
            {columns.map((col) => (
              <div key={col.heading}>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--ink)]">{col.heading}</p>
                <ul className="mt-4 space-y-2.5 text-sm">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-[var(--muted)] transition-colors hover:text-[var(--royal)]">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-[var(--line)] pt-6 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name}. An Eager Group company.
          </p>
          {SITE.linkedin && (
            <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--royal)]">
              LinkedIn
            </a>
          )}
        </div>
      </Container>
    </footer>
  );
};
