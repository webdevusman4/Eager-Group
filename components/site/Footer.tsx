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
    <footer className="surface-navy navy-panel mb-2 mt-2 sm:mb-4 sm:mt-4">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="inline-flex rounded-full bg-white px-5 py-3">
              <Image src="/logo.png" alt="Eager" width={164} height={42} className="h-7 w-auto" />
            </span>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/65">
              Corporate training, executive programmes and business consultancy, led by {SITE.person}.
            </p>
            <dl className="mt-6 space-y-1.5 text-sm">
              <div>
                <dt className="sr-only">Phone</dt>
                <dd>
                  <a href={SITE.tel} className="text-white hover:text-[var(--gold-soft)]">{SITE.phone}</a>
                </dd>
              </div>
              <div>
                <dt className="sr-only">Email</dt>
                <dd>
                  <a href={`mailto:${SITE.email}`} className="text-white hover:text-[var(--gold-soft)]">{SITE.email}</a>
                </dd>
              </div>
              <div>
                <dt className="sr-only">Location</dt>
                <dd className="text-white/60">{SITE.location}</dd>
              </div>
            </dl>
          </div>

          <nav aria-label="Footer" className="grid gap-10 sm:grid-cols-3 lg:col-span-8">
            {columns.map((col) => (
              <div key={col.heading}>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--gold-soft)]">{col.heading}</p>
                <ul className="mt-4 space-y-2.5 text-sm">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-white/70 transition-colors hover:text-white">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name}. An Eager Group company.
          </p>
          {SITE.linkedin && (
            <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white">
              LinkedIn
            </a>
          )}
        </div>
      </Container>
    </footer>
  );
};
