import React from 'react';
import {
  content,
  getDateDisplay,
  getVenueDisplay,
  getSeatsLeft,
  getWhatsAppUrl,
  isSoldOut,
} from '@/lib/content-v2';
import { Button, Section, SectionHeading, TextLink } from './ui';

export const Programmes: React.FC = () => {
  const { event, curriculum, signatureCourses } = content;
  const seatsLeft = getSeatsLeft();
  const soldOut = isSoldOut();
  const reserveUrl = getWhatsAppUrl(soldOut ? content.contact.whatsappWaitlistMessage : undefined);

  const details = [
    { term: 'Format', value: 'In person, one full day' },
    { term: 'Duration', value: '8 hours' },
    { term: 'Date', value: event.date_start ? getDateDisplay() : 'To be announced' },
    { term: 'Venue', value: event.venue ? getVenueDisplay() : `To be announced, ${event.city}` },
    {
      term: 'Places',
      value:
        seatsLeft === null ? 'Limited' : soldOut ? 'Fully booked, waitlist open' : `${seatsLeft} of ${event.seats_total} available`,
    },
  ];

  return (
    <Section id="programmes" tone="paper" labelledBy="v3-programmes-title">
      <SectionHeading
        id="v3-programmes-title"
        eyebrow="Flagship programme"
        title="The 8-Hour Executive Sales Masterclass"
        intro="A one-day course covering the full sale, from finding the right prospects to collecting payment and keeping the client. Places are limited so every participant works directly with Iftikhar."
        align="split"
      />

      <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-12">
        {/* Modules */}
        <ol className="lg:col-span-7 border-t border-[var(--line)]">
          {curriculum.modules.map((m) => (
            <li key={m.id} className="grid gap-3 border-b border-[var(--line)] py-8 sm:grid-cols-[130px_1fr] sm:gap-6">
              <div>
                <span className="font-serif text-3xl text-[var(--royal)]">{m.id}</span>
                <p className="mt-1 whitespace-nowrap text-xs font-medium uppercase tracking-[0.12em] text-[var(--muted)]">
                  {m.stagesCovered}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold leading-snug text-[var(--ink)]">{m.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[var(--muted)]">{m.outcome}</p>
                <ul className="mt-4 space-y-1.5 text-[15px] text-[var(--text)]">
                  {m.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-[11px] h-px w-3 shrink-0 bg-[var(--royal)]" aria-hidden="true" />
                      {b}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-[var(--muted)]">
                  Workbook tool: <span className="font-medium text-[var(--ink)]">{m.deliverable}</span>
                </p>
              </div>
            </li>
          ))}
        </ol>

        {/* Enrolment details */}
        <aside id="reserve" aria-label="Masterclass enrolment details" className="lg:col-span-5 scroll-mt-24">
          <div className="border border-[var(--line)] bg-white p-7 sm:p-9 lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">Fee per participant</p>
            <p className="font-serif mt-2 text-4xl text-[var(--ink)]">{event.priceLabel}</p>

            <dl className="mt-8 divide-y divide-[var(--line)] border-y border-[var(--line)] text-[15px]">
              {details.map((d) => (
                <div key={d.term} className="flex justify-between gap-6 py-3.5">
                  <dt className="text-[var(--muted)]">{d.term}</dt>
                  <dd className="text-right font-medium text-[var(--ink)]">{d.value}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-7 text-sm font-semibold text-[var(--ink)]">Included</p>
            <ul className="mt-3 space-y-2 text-[15px] text-[var(--text)]">
              {event.includes.map((inc) => (
                <li key={inc} className="flex gap-3">
                  <span className="mt-[11px] h-px w-3 shrink-0 bg-[var(--royal)]" aria-hidden="true" />
                  {inc}
                </li>
              ))}
            </ul>

            <Button href={reserveUrl} external className="mt-8 w-full">
              {soldOut ? 'Join the waitlist' : 'Reserve a place'}
            </Button>
            <p className="mt-4 text-center text-sm text-[var(--muted)]">
              Or email{' '}
              <a href={`mailto:${content.contact.email}`} className="text-[var(--royal)] underline underline-offset-4">
                {content.contact.email}
              </a>
            </p>
            <p className="mt-6 border-t border-[var(--line)] pt-5 text-xs leading-relaxed text-[var(--muted)]">
              Group terms are available for three or more participants from one organisation. Places
              are non-refundable but can be transferred to a colleague up to 48 hours before the session.
            </p>
          </div>
        </aside>
      </div>

      {/* Other programmes */}
      <div className="mt-24">
        <h3 className="font-serif text-2xl sm:text-3xl text-[var(--ink)]">Other programmes</h3>
        <div className="mt-8 grid border-t border-l border-[var(--line)] bg-white md:grid-cols-3">
          {signatureCourses.map((c) => (
            <article key={c.id} className="flex flex-col border-b border-r border-[var(--line)] p-7 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">{c.format}</p>
              <h4 className="mt-3 text-lg font-semibold leading-snug text-[var(--ink)]">{c.title}</h4>
              <p className="mt-3 text-[15px] leading-relaxed text-[var(--muted)]">{c.subtitle}</p>
              <dl className="mt-6 space-y-1 text-sm">
                <div className="flex gap-2">
                  <dt className="text-[var(--muted)]">Level:</dt>
                  <dd className="font-medium text-[var(--ink)]">{c.level}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="text-[var(--muted)]">Enrolment:</dt>
                  <dd className="font-medium text-[var(--ink)]">{c.priceTag}</dd>
                </div>
              </dl>
              <div className="mt-auto pt-7">
                <TextLink href={getWhatsAppUrl(c.whatsappInquiry)} external>
                  Request details
                </TextLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
};
