import React from 'react';
import { content, getWhatsAppUrl } from '@/lib/content-v2';
import { Section, SectionHeading, TextLink } from './ui';

// Plain-language versions of the four practices; deliverables come from content-v2.
const PRACTICES: Record<string, { title: string; summary: string; cta: string }> = {
  'corporate-training': {
    title: 'Corporate and sales training',
    summary: 'In-house programmes that raise closing rates and make sales teams more accountable.',
    cta: 'Enquire about training',
  },
  'business-consultancy': {
    title: 'Business consultancy',
    summary: 'Hands-on work with founders and directors on sales systems, collections and growth plans.',
    cta: 'Discuss a consultancy project',
  },
  'stock-market-advisory': {
    title: 'Stock market and wealth strategy',
    summary: 'Structured guidance on equity investing, portfolio discipline and risk for individuals.',
    cta: 'Ask about advisory',
  },
  'speaking-coaching': {
    title: 'Keynotes and one-to-one coaching',
    summary: 'Talks for conferences and universities, and private coaching for executives and graduates.',
    cta: 'Check availability',
  },
};

export const Services: React.FC = () => (
  <Section id="services" labelledBy="v3-services-title">
    <SectionHeading
      id="v3-services-title"
      eyebrow="Services"
      title="Four practices, one aim: measurable growth"
      intro="Each engagement is shaped around the organisation or person in front of us, from a single workshop to a long-term advisory role."
      align="split"
    />

    <div className="mt-14 grid border-t border-l border-[var(--line)] md:grid-cols-2">
      {content.services.pillars.map((p, i) => {
        const copy = PRACTICES[p.id];
        return (
          <article key={p.id} className="flex flex-col border-b border-r border-[var(--line)] p-7 sm:p-10">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
              Practice {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="font-serif mt-4 text-2xl text-[var(--ink)]">{copy?.title ?? p.title}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-[var(--muted)]">{copy?.summary ?? p.summary}</p>
            <ul className="mt-6 space-y-2.5 text-[15px] text-[var(--text)]">
              {p.deliverables.map((d) => (
                <li key={d} className="flex gap-3">
                  <span className="mt-[11px] h-px w-3 shrink-0 bg-[var(--royal)]" aria-hidden="true" />
                  {d}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-8">
              <TextLink href={getWhatsAppUrl(p.whatsappInquiry)} external>
                {copy?.cta ?? p.ctaLabel}
              </TextLink>
            </div>
          </article>
        );
      })}
    </div>
  </Section>
);
