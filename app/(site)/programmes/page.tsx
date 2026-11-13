import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { content } from '@/lib/content-v2';
import { AUDIENCES, MASTERCLASS_SLUG, PROGRAMMES } from '@/lib/site';
import { PageHero } from '@/components/site/PageHero';
import { CtaBand } from '@/components/site/CtaBand';
import { FaqList, ProgrammeCard } from '@/components/site/blocks';
import { Section, SectionHeading } from '@/components/site/ui';

export const metadata: Metadata = {
  title: 'Programmes',
  description:
    'The 8-Hour Executive Sales Masterclass, plus programmes in stock market investing, negotiation and collections, and one-to-one coaching.',
};

export default function ProgrammesPage() {
  const flagship = PROGRAMMES.find((p) => p.slug === MASTERCLASS_SLUG)!;
  const courses = PROGRAMMES.filter((p) => p.kind === 'course');

  return (
    <>
      <PageHero
        eyebrow="Programmes"
        title="Courses, workshops and coaching"
        intro="Open courses for executives, workshops for commercial teams and private coaching for professionals and investors."
        crumbs={[{ label: 'Programmes' }]}
      />

      <Section labelledBy="programmes-flagship">
        <h2 id="programmes-flagship" className="sr-only">Flagship programme</h2>
        <Link
          href={`/programmes/${flagship.slug}`}
          data-reveal
          className="group grid overflow-hidden rounded-2xl border border-[var(--line)] bg-white transition-shadow duration-300 hover:shadow-[0_30px_60px_-30px_rgba(11,31,63,0.35)] lg:grid-cols-2"
        >
          <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
            <Image src={flagship.image} alt="" fill sizes="(min-width: 1024px) 640px, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
            <span className="glass absolute left-5 top-5 rounded-md px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--ink)]">
              {flagship.label}
            </span>
          </div>
          <div className="flex flex-col p-8 sm:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">{flagship.format}</p>
            <h3 className="font-serif mt-4 text-3xl leading-tight text-[var(--ink)] sm:text-4xl">{flagship.title}</h3>
            <p className="mt-5 text-[17px] leading-relaxed text-[var(--muted)]">{flagship.summary}</p>
            <ol className="mt-8 space-y-2.5 text-[15px] text-[var(--ink)]">
              {content.curriculum.modules.map((m) => (
                <li key={m.id} className="flex gap-4">
                  <span className="font-serif w-6 text-[var(--royal)]">{m.id}</span>
                  {m.title}
                </li>
              ))}
            </ol>
            <div className="mt-10 flex items-center justify-between border-t border-[var(--line)] pt-6 lg:mt-auto">
              <span className="font-serif text-2xl text-[var(--ink)]">{content.event.priceLabel}</span>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--royal)]">
                View programme
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
            </div>
          </div>
        </Link>

        <h2 data-reveal className="font-serif mt-24 text-2xl text-[var(--ink)] sm:text-3xl">Other programmes</h2>
        <div data-reveal-group className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((p) => (
            <ProgrammeCard key={p.slug} programme={p} />
          ))}
        </div>
      </Section>

      <Section tone="paper" labelledBy="programmes-audience">
        <SectionHeading id="programmes-audience" eyebrow="Who they are for" title="Built for people responsible for results" />
        <div data-reveal-group className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {AUDIENCES.map((a) => (
            <article key={a.title} data-reveal className="flex flex-col rounded-3xl border border-[var(--line)] bg-white p-7">
              <h3 className="font-semibold leading-snug text-[var(--ink)]">{a.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[var(--muted)]">{a.text}</p>
              <p className="mt-auto pt-6 text-sm">
                <span className="text-[var(--muted)]">Suited to: </span>
                <span className="font-medium text-[var(--ink)]">{a.fit}</span>
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section labelledBy="programmes-faq">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading id="programmes-faq" eyebrow="FAQ" title="Questions about programmes" />
          </div>
          <div className="lg:col-span-8">
            <FaqList category="Courses" />
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
