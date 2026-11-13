import React from 'react';
import Image from 'next/image';
import { ArrowRight, CalendarDays, MessageCircle, ShieldCheck } from 'lucide-react';
import { content, getWhatsAppUrl, getSeatsLeft, isSoldOut } from '@/lib/content-v2';

const ROLES = ['Certified Corporate Trainer', 'Business Consultant', 'Keynote Speaker'];

export const Hero: React.FC = () => {
  const consultUrl = getWhatsAppUrl(content.contact.whatsappConsultMessage);
  const seatsLeft = getSeatsLeft();
  const soldOut = isSoldOut();
  const metricLabels = ['Years in sales & business growth', 'Companies founded', 'Practice pillars', 'Core training programs'];
  const metrics = content.metrics.map((m, i) => ({ ...m, short: metricLabels[i] ?? m.unit }));
  const sectors = content.ventures.industries.slice(0, 8);

  return (
    <section
      id="top"
      aria-labelledby="v3-hero-title"
      className="relative overflow-hidden v3-hero-bg pt-24 md:pt-32"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-16">
          {/* Copy */}
          <div className="lg:col-span-7">
            <p className="v3-rise inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white px-3.5 py-1.5 text-xs font-semibold text-[var(--royal)] shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--sky)]" aria-hidden="true" />
              Eager Group · Karachi, Pakistan
            </p>

            <h1
              id="v3-hero-title"
              className="v3-rise v3-delay-1 font-display mt-6 text-[clamp(2.25rem,4.6vw,3.6rem)] font-extrabold leading-[1.06] tracking-[-0.025em] text-[var(--ink)]"
            >
              Empowering people.
              <br />
              <span className="text-[var(--royal)]">Transforming businesses.</span>
            </h1>

            <p className="v3-rise v3-delay-2 mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-[var(--body)]">
              Iftikhar Ahmed helps founders, executives and sales teams build revenue systems that
              hold up in the real world. His training and advice draw on 15+ years of building and
              running three companies.
            </p>

            <div className="v3-rise v3-delay-3 mt-9 flex flex-col sm:flex-row gap-3">
              <a
                href={consultUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-[var(--royal)] px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_10px_24px_-10px_rgba(0,72,168,0.6)] hover:bg-[var(--royal-hover)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--royal)] focus-visible:ring-offset-2"
              >
                <MessageCircle className="h-[18px] w-[18px]" aria-hidden="true" />
                Book a consultation
              </a>
              <a
                href="/v2#courses"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg border border-[var(--line)] bg-white px-6 py-3.5 text-[15px] font-semibold text-[var(--ink)] hover:border-[var(--royal)] hover:text-[var(--royal)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--royal)] focus-visible:ring-offset-2"
              >
                Explore courses
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            <ul className="v3-rise v3-delay-4 mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[var(--body)]">
              {ROLES.map((r) => (
                <li key={r} className="inline-flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[var(--royal)]" aria-hidden="true" />
                  {r}
                </li>
              ))}
            </ul>
          </div>

          {/* Visual */}
          <div className="v3-rise v3-delay-2 relative mx-auto w-full max-w-xl lg:col-span-5 lg:max-w-none">
            <div
              aria-hidden="true"
              className="v3-dots absolute -right-6 -top-6 hidden h-40 w-40 rounded-2xl sm:block"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-5 -left-5 hidden h-2/3 w-2/3 rounded-3xl bg-[var(--royal)] sm:block"
            />

            <figure className="relative overflow-hidden rounded-3xl border border-white bg-[var(--ice)] shadow-[0_30px_60px_-24px_rgba(11,31,63,0.45)]">
              <Image
                src="/images/v2/iftikhar-executive-desk.webp"
                alt="Iftikhar Ahmed, founder of Eager Group, at his desk"
                width={1007}
                height={793}
                priority
                sizes="(min-width: 1024px) 480px, (min-width: 640px) 576px, 100vw"
                className="h-auto w-full object-cover"
              />
              <figcaption className="absolute left-4 top-4 rounded-lg bg-white/95 px-3.5 py-2 shadow-sm backdrop-blur">
                <span className="block font-display text-sm font-bold text-[var(--ink)]">
                  {content.profile.name}
                </span>
                <span className="block text-xs text-[var(--body)]">Founder, Eager Group</span>
              </figcaption>
            </figure>

            {/* Masterclass card: floats over the photo on larger screens, sits below it on phones */}
            <a
              href="/v2#reserve"
              className="v3-card group relative mt-4 block rounded-2xl p-5 sm:absolute sm:-bottom-8 sm:right-6 sm:mt-0 sm:w-[320px] hover:border-[var(--royal)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--royal)]"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--royal)]">
                  <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                  Next cohort
                </span>
                {seatsLeft !== null && (
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                      soldOut ? 'bg-red-50 text-red-700' : 'bg-emerald-50 text-emerald-700'
                    }`}
                  >
                    {soldOut ? 'Waitlist open' : `${seatsLeft} seats`}
                  </span>
                )}
              </div>
              <p className="mt-2 font-display text-base font-bold leading-snug text-[var(--ink)]">
                {content.event.name}
              </p>
              <div className="mt-3 flex items-center justify-between border-t border-[var(--line)] pt-3">
                <span className="text-sm text-[var(--body)]">
                  <span className="font-bold text-[var(--ink)]">{content.event.priceLabel}</span> per seat
                </span>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--royal)]">
                  Reserve
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Metrics */}
        <dl className="relative mt-16 sm:mt-24 grid grid-cols-2 lg:grid-cols-4 overflow-hidden rounded-2xl border border-[var(--line)] bg-white">
          {metrics.map((m, i) => (
            <div
              key={m.unit}
              className={`flex flex-col-reverse px-5 py-6 sm:px-7 sm:py-7 ${i % 2 === 1 ? 'border-l' : ''} ${
                i >= 2 ? 'border-t lg:border-t-0' : ''
              } ${i === 2 ? 'lg:border-l' : ''} border-[var(--line)]`}
            >
              <dt className="mt-1 text-sm leading-snug text-[var(--body)]">{m.short}</dt>
              <dd className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--ink)]">
                {m.value}
              </dd>
            </div>
          ))}
        </dl>

        {/* Sectors */}
        <div className="flex flex-col items-start gap-4 py-10 sm:py-12 md:flex-row md:items-center md:gap-8">
          <p className="shrink-0 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--body)]">
            Sectors served
          </p>
          <ul className="flex flex-wrap gap-2">
            {sectors.map((s) => (
              <li
                key={s}
                className="rounded-full border border-[var(--line)] bg-white px-3.5 py-1.5 text-xs sm:text-sm font-medium text-[var(--ink)]/80"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
