import type { Metadata } from 'next';
import { SERVICES } from '@/lib/site';
import { PageHero } from '@/components/site/PageHero';
import { CtaBand } from '@/components/site/CtaBand';
import { ServiceCard } from '@/components/site/blocks';
import { Section, SectionHeading } from '@/components/site/ui';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Corporate and sales training, business consultancy, stock market strategy, keynotes and one-to-one coaching.',
};

const STEPS = [
  { title: 'A first conversation', text: 'We talk through your goals, your team and what is getting in the way.' },
  { title: 'A tailored plan', text: 'You receive a proposal shaped around your sector, budget and timing.' },
  { title: 'Delivery and follow-up', text: 'Sessions are delivered in person, with follow-up to keep the changes in place.' },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Four practices, one aim: measurable growth"
        intro="From a single workshop to a long-term advisory role, each engagement is shaped around the organisation or person in front of us."
        crumbs={[{ label: 'Services' }]}
      />

      <Section labelledBy="services-list">
        <h2 id="services-list" className="sr-only">All services</h2>
        <div data-reveal-group className="grid gap-6 md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={i} detailed />
          ))}
        </div>
      </Section>

      <Section tone="paper" labelledBy="services-process">
        <SectionHeading id="services-process" eyebrow="How an engagement runs" title="Simple, clear and built around you" />
        <ol data-reveal-group className="mt-14 grid gap-5 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <li key={s.title} data-reveal className="relative rounded-3xl border border-[var(--line)] bg-white p-8">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--royal)] text-sm font-semibold text-white">
                {i + 1}
              </span>
              <h3 className="mt-6 text-lg font-semibold text-[var(--ink)]">{s.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[var(--muted)]">{s.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <CtaBand />
    </>
  );
}
