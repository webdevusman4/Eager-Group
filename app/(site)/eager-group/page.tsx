import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import { Building2, GraduationCap, Package } from 'lucide-react';
import { content } from '@/lib/content-v2';
import { COMPANY_SUMMARIES } from '@/lib/site';
import { PageHero } from '@/components/site/PageHero';
import { CtaBand } from '@/components/site/CtaBand';
import { Dash, Section, SectionHeading } from '@/components/site/ui';

export const metadata: Metadata = pageMetadata({
  title: 'Eager Group',
  description:
    'Eager Group is three operating companies founded by Iftikhar Ahmed: Eager Packaging, Eager Properties and Eager Teaching & Trainings.',
  path: '/eager-group',
});

const ICONS = { packaging: Package, properties: Building2, trainings: GraduationCap } as const;

export default function EagerGroupPage() {
  return (
    <>
      <PageHero
        eyebrow="Eager Group"
        title="Three operating companies behind the advice"
        intro="Iftikhar founded and leads each of these businesses. The lessons he teaches are the ones he applies in them every day."
        crumbs={[{ label: 'Eager Group' }]}
      />

      <Section labelledBy="group-companies">
        <h2 id="group-companies" className="sr-only">Companies</h2>
        <div className="space-y-6">
          {content.ventures.companies.map((c, i) => {
            const Icon = ICONS[c.id as keyof typeof ICONS] ?? Building2;
            return (
              <article
                key={c.id}
                data-reveal
                className="grid gap-8 rounded-2xl border border-[var(--line)] bg-white p-8 transition-shadow duration-300 hover:shadow-[0_24px_48px_-28px_rgba(11,31,63,0.3)] sm:p-10 lg:grid-cols-12 lg:gap-12"
              >
                <div className="lg:col-span-5">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--royal-soft)] text-[var(--royal)]">
                      <Icon className="h-[22px] w-[22px]" aria-hidden="true" />
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
                      Company {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="font-serif mt-6 text-2xl leading-snug text-[var(--ink)] sm:text-3xl">{c.name}</h3>
                  <p className="mt-2 text-sm font-semibold text-[var(--royal)]">{c.sector}</p>
                </div>
                <div className="lg:col-span-7">
                  <p className="text-[17px] leading-relaxed">{COMPANY_SUMMARIES[c.id] ?? c.description}</p>
                  <ul className="mt-6 grid gap-3 border-t border-[var(--line)] pt-6 text-[15px] text-[var(--ink)] sm:grid-cols-1">
                    {c.highlights.map((h) => (
                      <li key={h} className="flex gap-3">
                        <Dash />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      <Section tone="paper" labelledBy="group-sectors">
        <SectionHeading id="group-sectors" eyebrow="Reach" title="Sectors served across the group" />
        <ul data-reveal-group className="mt-12 flex flex-wrap gap-3">
          {content.ventures.industries.map((s) => (
            <li key={s} data-reveal className="rounded-full border border-[var(--line)] bg-white px-5 py-2.5 text-[15px] font-medium text-[var(--ink)]">
              {s}
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand />
    </>
  );
}
