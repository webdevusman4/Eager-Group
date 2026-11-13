import React from 'react';
import { content } from '@/lib/content-v2';
import { Section, SectionHeading } from './ui';

export const Faq: React.FC = () => (
  <Section id="faq" tone="paper" labelledBy="v3-faq-title">
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-4">
        <SectionHeading id="v3-faq-title" eyebrow="FAQ" title="Common questions" />
        <p className="mt-5 text-[15px] leading-relaxed text-[var(--muted)]">
          Anything else? Email{' '}
          <a href={`mailto:${content.contact.email}`} className="text-[var(--royal)] underline underline-offset-4">
            {content.contact.email}
          </a>{' '}
          or call {content.contact.phoneDisplay}.
        </p>
      </div>

      <div className="lg:col-span-8 border-t border-[var(--line)]">
        {content.faq.items.map((f, i) => (
          <details key={f.question} className="group border-b border-[var(--line)]" open={i === 0}>
            <summary className="flex cursor-pointer items-start justify-between gap-6 py-6">
              <span className="text-base sm:text-lg font-semibold leading-snug text-[var(--ink)]">{f.question}</span>
              <span
                aria-hidden="true"
                className="v3-faq-icon mt-0.5 text-2xl font-light leading-none text-[var(--royal)] transition-transform"
              >
                +
              </span>
            </summary>
            <p className="pb-7 pr-10 text-[15px] leading-relaxed text-[var(--muted)]">{f.answer}</p>
          </details>
        ))}
      </div>
    </div>
  </Section>
);
