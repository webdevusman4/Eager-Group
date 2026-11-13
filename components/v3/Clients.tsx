import React from 'react';
import { content } from '@/lib/content-v2';
import { Section, SectionHeading } from './ui';

const AUDIENCES = [
  {
    title: 'Owners and senior executives',
    text: 'Growing revenue, protecting margins and building accountable sales leadership.',
    fit: 'Executive Sales Masterclass, business consultancy',
  },
  {
    title: 'Sales leaders and their teams',
    text: 'Prospecting, pitching, handling objections and collecting overdue payments.',
    fit: 'In-house training, negotiation and collections workshop',
  },
  {
    title: 'Investors and professionals',
    text: 'Learning disciplined, risk-managed investing from first principles to advanced practice.',
    fit: 'Stock market programme, portfolio advisory',
  },
  {
    title: 'Universities and educators',
    text: 'Career direction, communication and a practical business mindset for students and faculty.',
    fit: 'Seminars, teacher training, career coaching',
  },
];

export const Clients: React.FC = () => (
  <Section id="clients" labelledBy="v3-clients-title">
    <SectionHeading id="v3-clients-title" eyebrow="Who we work with" title="Built for people responsible for results" />

    <div className="mt-14 grid gap-px overflow-hidden border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-4">
      {AUDIENCES.map((a) => (
        <article key={a.title} className="flex flex-col bg-white p-7">
          <h3 className="font-semibold leading-snug text-[var(--ink)]">{a.title}</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-[var(--muted)]">{a.text}</p>
          <p className="mt-auto pt-6 text-sm">
            <span className="text-[var(--muted)]">Suited to: </span>
            <span className="font-medium text-[var(--ink)]">{a.fit}</span>
          </p>
        </article>
      ))}
    </div>

    <div className="mt-14 grid gap-4 border-t border-[var(--line)] pt-8 lg:grid-cols-12">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)] lg:col-span-3">Sectors served</p>
      <p className="text-[15px] leading-loose text-[var(--ink)] lg:col-span-9">
        {content.ventures.industries.join('  ·  ')}
      </p>
    </div>
  </Section>
);
