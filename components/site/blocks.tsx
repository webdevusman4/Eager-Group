import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { content, getSeatsLeft, getWhatsAppUrl, isSoldOut } from '@/lib/content-v2';
import type { Programme, Service } from '@/lib/site';
import { Button, Dash, TextLink } from './ui';

/* ------------------------------- Service card ------------------------------- */

export const ServiceCard: React.FC<{ service: Service; index: number; detailed?: boolean }> = ({
  service,
  index,
  detailed,
}) => {
  const Icon = service.icon;
  return (
    <Link
      href={`/services/${service.slug}`}
      data-reveal
      className="group relative flex h-full flex-col rounded-xl border border-[var(--line)] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--royal)]/40 hover:shadow-[0_24px_48px_-24px_rgba(11,31,63,0.3)] sm:p-8"
    >
      <div className="flex items-start justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--royal-soft)] text-[var(--royal)] transition-colors duration-300 group-hover:bg-[var(--royal)] group-hover:text-white">
          <Icon className="h-[22px] w-[22px]" aria-hidden="true" />
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <h3 className="font-serif mt-7 text-xl leading-snug text-[var(--ink)] sm:text-2xl">{service.title}</h3>
      <p className="mt-3 text-[15px] leading-relaxed text-[var(--muted)]">{service.summary}</p>
      {detailed && (
        <ul className="mt-6 space-y-2 text-[15px] text-[var(--text)]">
          {service.deliverables.map((d) => (
            <li key={d} className="flex gap-3">
              <Dash />
              {d}
            </li>
          ))}
        </ul>
      )}
      <span className="mt-auto inline-flex items-center gap-1.5 pt-8 text-sm font-semibold text-[var(--royal)]">
        Learn more
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
      </span>
    </Link>
  );
};

/* ------------------------------ Programme card ------------------------------ */

export const ProgrammeCard: React.FC<{ programme: Programme }> = ({ programme }) => (
  <Link
    href={`/programmes/${programme.slug}`}
    data-reveal
    className="group flex h-full flex-col overflow-hidden rounded-xl border border-[var(--line)] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(11,31,63,0.3)]"
  >
    <div className="relative aspect-[16/10] overflow-hidden">
      <Image
        src={programme.image}
        alt=""
        fill
        sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
      />
      <span className="glass absolute left-4 top-4 rounded-md px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--ink)]">
        {programme.label}
      </span>
    </div>
    <div className="flex flex-1 flex-col p-7">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">{programme.format}</p>
      <h3 className="mt-3 text-lg font-semibold leading-snug text-[var(--ink)]">{programme.title}</h3>
      <p className="mb-6 mt-3 line-clamp-3 text-[15px] leading-relaxed text-[var(--muted)]">{programme.summary}</p>
      <div className="mt-auto flex items-center justify-between border-t border-[var(--line)] pt-5 text-sm">
        <span className="font-medium text-[var(--ink)]">{programme.enrolment}</span>
        <ArrowUpRight
          className="h-4 w-4 text-[var(--royal)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </div>
    </div>
  </Link>
);

/* ------------------------------------ FAQ ----------------------------------- */

export const FaqList: React.FC<{ category?: 'Courses' | 'Corporate & Advisory' }> = ({ category }) => {
  const items = category ? content.faq.items.filter((f) => f.category === category) : content.faq.items;
  return (
    <div className="border-t border-[var(--line)]">
      {items.map((f, i) => (
        <details key={f.question} data-reveal className="group border-b border-[var(--line)]" open={i === 0}>
          <summary className="flex cursor-pointer items-start justify-between gap-6 py-6">
            <span className="text-base font-semibold leading-snug text-[var(--ink)] transition-colors group-hover:text-[var(--royal)] sm:text-lg">
              {f.question}
            </span>
            <span
              aria-hidden="true"
              className="faq-icon mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--line)] text-lg leading-none text-[var(--royal)] transition-transform duration-300"
            >
              +
            </span>
          </summary>
          <p className="pb-7 pr-12 text-[15px] leading-relaxed text-[var(--muted)]">{f.answer}</p>
        </details>
      ))}
    </div>
  );
};

/* ----------------------------- Enrolment panel ------------------------------ */

export const EnrolmentPanel: React.FC<{ glass?: boolean }> = ({ glass }) => {
  const { event } = content;
  const seatsLeft = getSeatsLeft();
  const soldOut = isSoldOut();
  const total = event.seats_total ?? 0;
  const taken = total - (seatsLeft ?? 0);
  const reserveUrl = getWhatsAppUrl(soldOut ? content.contact.whatsappWaitlistMessage : undefined);
  const onDark = !!glass;

  const rows = [
    { term: 'Format', value: 'In person, one full day' },
    { term: 'Duration', value: '8 hours' },
    { term: 'Date', value: event.date_start ?? 'To be announced' },
    { term: 'Venue', value: event.venue ? `${event.venue}, ${event.city}` : `To be announced, ${event.city}` },
  ];

  const muted = onDark ? 'text-white/60' : 'text-[var(--muted)]';
  const strong = onDark ? 'text-white' : 'text-[var(--ink)]';
  const line = onDark ? 'border-white/10 divide-white/10' : 'border-[var(--line)] divide-[var(--line)]';

  return (
    <div className={`rounded-xl p-7 sm:p-8 ${glass ? 'glass-dark-strong' : 'border border-[var(--line)] bg-white shadow-[0_24px_48px_-28px_rgba(11,31,63,0.35)]'}`}>
      <p className={`text-xs font-semibold uppercase tracking-[0.16em] ${muted}`}>Fee per participant</p>
      <p className={`font-serif mt-2 text-4xl ${strong}`}>{event.priceLabel}</p>

      {seatsLeft !== null && total > 0 && (
        <div className="mt-6">
          <div className="flex items-center justify-between text-sm">
            <span className={muted}>Places</span>
            <span className={`flex items-center gap-2 font-medium ${strong}`}>
              <span className="relative flex h-2 w-2">
                {!soldOut && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />}
                <span className={`relative inline-flex h-2 w-2 rounded-full ${soldOut ? 'bg-red-400' : 'bg-emerald-400'}`} />
              </span>
              {soldOut ? 'Fully booked' : `${seatsLeft} of ${total} available`}
            </span>
          </div>
          <div className={`mt-2.5 h-1.5 overflow-hidden rounded-full ${onDark ? 'bg-white/10' : 'bg-[var(--royal-soft)]'}`}>
            <div
              className={`h-full rounded-full ${onDark ? 'bg-[#8FC2FF]' : 'bg-[var(--royal)]'}`}
              style={{ width: `${Math.max(4, (taken / total) * 100)}%` }}
            />
          </div>
        </div>
      )}

      <dl className={`mt-6 divide-y border-y text-[15px] ${line}`}>
        {rows.map((r) => (
          <div key={r.term} className="flex justify-between gap-6 py-3">
            <dt className={muted}>{r.term}</dt>
            <dd className={`text-right font-medium ${strong}`}>{r.value}</dd>
          </div>
        ))}
      </dl>

      <p className={`mt-6 text-sm font-semibold ${strong}`}>Included</p>
      <ul className={`mt-3 space-y-2 text-[15px] ${onDark ? 'text-white/80' : 'text-[var(--text)]'}`}>
        {event.includes.map((inc) => (
          <li key={inc} className="flex gap-3">
            <Dash onDark={onDark} />
            {inc}
          </li>
        ))}
      </ul>

      <Button href={reserveUrl} external variant={onDark ? 'light' : 'primary'} className="mt-8 w-full">
        {soldOut ? 'Join the waitlist' : 'Reserve a place'}
      </Button>
      <p className={`mt-4 text-center text-xs leading-relaxed ${muted}`}>
        Group terms for three or more participants. Places can be transferred to a colleague up to 48 hours before
        the session.
      </p>
    </div>
  );
};

/* ------------------------------- Sector ticker ------------------------------ */

export const SectorTicker: React.FC = () => {
  const sectors = content.ventures.industries;
  return (
    <div className="border-y border-[var(--line)] bg-white py-6">
      <div className="mx-auto flex max-w-7xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <p className="hidden shrink-0 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)] md:block">
          Sectors served
        </p>
        <div className="ticker relative flex-1 overflow-hidden" aria-label={`Sectors served: ${sectors.join(', ')}`}>
          <ul className="ticker-track flex w-max gap-10" aria-hidden="true">
            {[...sectors, ...sectors].map((s, i) => (
              <li key={`${s}-${i}`} className="flex items-center gap-10 whitespace-nowrap text-[15px] font-medium text-[var(--ink)]">
                {s}
                <span className="h-1 w-1 rounded-full bg-[var(--royal)]/50" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

/* ------------------------------ Related links ------------------------------- */

export const RelatedList: React.FC<{ title: string; items: { label: string; href: string; text: string }[] }> = ({
  title,
  items,
}) => (
  <div>
    <h2 className="font-serif text-2xl text-[var(--ink)] sm:text-3xl">{title}</h2>
    <ul data-reveal-group className="mt-8 grid gap-4 md:grid-cols-3">
      {items.map((i) => (
        <li key={i.href} data-reveal className="rounded-xl border border-[var(--line)] bg-white p-6">
          <p className="font-semibold leading-snug text-[var(--ink)]">{i.label}</p>
          <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{i.text}</p>
          <div className="mt-5">
            <TextLink href={i.href}>View</TextLink>
          </div>
        </li>
      ))}
    </ul>
  </div>
);
