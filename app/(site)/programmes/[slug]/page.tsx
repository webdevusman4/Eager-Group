import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Clock, MapPin, Users, Wallet } from 'lucide-react';
import { content } from '@/lib/content-v2';
import { MASTERCLASS_SLUG, PROGRAMMES, getProgramme } from '@/lib/site';
import { PageHero } from '@/components/site/PageHero';
import { CtaBand } from '@/components/site/CtaBand';
import { ModuleExplorer } from '@/components/site/ModuleExplorer';
import { EnrolmentPanel, FaqList, RelatedList } from '@/components/site/blocks';
import { Button, Dash, Section, SectionHeading } from '@/components/site/ui';

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return PROGRAMMES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const p = getProgramme((await params).slug);
  return p ? { title: p.title, description: p.summary } : {};
}

export default async function ProgrammePage({ params }: { params: Promise<Params> }) {
  const programme = getProgramme((await params).slug);
  if (!programme) notFound();
  const isFlagship = programme.slug === MASTERCLASS_SLUG;
  const others = PROGRAMMES.filter((p) => p.slug !== programme.slug);

  const facts = isFlagship
    ? [
        { icon: Clock, label: 'Duration', value: '8 hours, one day' },
        { icon: MapPin, label: 'Location', value: content.event.venue ?? `${content.event.city}, venue to be announced` },
        { icon: Users, label: 'Group size', value: `Up to ${content.event.seats_total} participants` },
        { icon: Wallet, label: 'Fee', value: content.event.priceLabel },
      ]
    : [
        { icon: Clock, label: 'Format', value: programme.format },
        { icon: Users, label: 'Level', value: programme.level },
        { icon: Wallet, label: 'Enrolment', value: programme.enrolment },
      ];

  return (
    <>
      <PageHero
        eyebrow={programme.label}
        title={programme.title}
        intro={programme.summary}
        crumbs={[{ label: 'Programmes', href: '/programmes' }, { label: programme.title }]}
      >
        <dl data-reveal-group className={`mt-12 grid gap-3 sm:grid-cols-2 ${isFlagship ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`}>
          {facts.map(({ icon: Icon, label, value }) => (
            <div key={label} data-reveal className="glass-dark flex items-center gap-4 rounded-xl p-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                <Icon className="h-[18px] w-[18px] text-[#8FC2FF]" aria-hidden="true" />
              </span>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-white/55">{label}</dt>
                <dd className="mt-0.5 text-[15px] font-medium text-white">{value}</dd>
              </div>
            </div>
          ))}
        </dl>
      </PageHero>

      {isFlagship ? (
        <>
          <Section tone="paper" labelledBy="masterclass-modules">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-8">
                <SectionHeading
                  id="masterclass-modules"
                  eyebrow="Curriculum"
                  title="Four modules, six stages of the sale"
                  intro="Select a module to see what it covers and the workbook tool you take away."
                />
                <div data-reveal className="mt-12">
                  <ModuleExplorer />
                </div>
              </div>
              <aside id="reserve" className="scroll-mt-28 lg:col-span-4">
                <div data-reveal className="lg:sticky lg:top-28">
                  <EnrolmentPanel />
                </div>
              </aside>
            </div>
          </Section>

          <Section labelledBy="masterclass-faq">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-4">
                <SectionHeading id="masterclass-faq" eyebrow="FAQ" title="Before you book" />
              </div>
              <div className="lg:col-span-8">
                <FaqList category="Courses" />
              </div>
            </div>
          </Section>
        </>
      ) : (
        <Section labelledBy="programme-detail">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <SectionHeading id="programme-detail" eyebrow="What you will learn" title="Programme highlights" />
              <ul data-reveal-group className="mt-10 border-t border-[var(--line)]">
                {programme.highlights.map((h) => (
                  <li key={h} data-reveal className="flex gap-4 border-b border-[var(--line)] py-5 text-[16px] font-medium text-[var(--ink)]">
                    <Dash />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
            <aside data-reveal className="lg:col-span-5">
              <div className="overflow-hidden rounded-xl border border-[var(--line)] bg-white lg:sticky lg:top-28">
                <div className="relative aspect-[16/10]">
                  <Image src={programme.image} alt="" fill sizes="(min-width: 1024px) 460px, 100vw" className="object-cover" />
                </div>
                <div className="p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--royal)]">Enrolment</p>
                  <p className="font-serif mt-2 text-2xl text-[var(--ink)]">{programme.enrolment}</p>
                  <p className="mt-3 text-[15px] leading-relaxed text-[var(--muted)]">
                    Ask for the syllabus, dates and fees. Places and schedules are arranged directly with Iftikhar.
                  </p>
                  <Button href={programme.whatsappUrl} external className="mt-7 w-full">
                    Request details
                  </Button>
                  <Button href={`/contact?topic=${encodeURIComponent(programme.title)}`} variant="secondary" className="mt-3 w-full">
                    Send an enquiry
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </Section>
      )}

      <Section tone="paper">
        <RelatedList
          title="Other programmes"
          items={others.map((p) => ({ label: p.title, href: `/programmes/${p.slug}`, text: p.format }))}
        />
      </Section>

      <CtaBand />
    </>
  );
}
