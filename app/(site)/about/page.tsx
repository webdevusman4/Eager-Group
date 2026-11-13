import type { Metadata } from 'next';
import Image from 'next/image';
import { content } from '@/lib/content-v2';
import { SITE } from '@/lib/site';
import { PageHero } from '@/components/site/PageHero';
import { CtaBand } from '@/components/site/CtaBand';
import { Dash, Section, SectionHeading } from '@/components/site/ui';

export const metadata: Metadata = {
  title: 'About Iftikhar Ahmed',
  description:
    'Iftikhar Ahmed is a certified corporate trainer, sales and marketing specialist, business consultant and keynote speaker, and the founder of Eager Group.',
};

const PRINCIPLES = [
  { title: 'Practical first', text: 'Every framework is built to be used at work the next morning, not studied in theory.' },
  { title: 'Taught by an operator', text: 'He runs the companies he talks about, so the advice comes from real accounts and real targets.' },
  { title: 'Measured by results', text: 'Success means more revenue, protected margins, stronger teams and clearer careers.' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A trainer and consultant who runs his own businesses"
        intro="Fifteen years of selling, leading teams and building companies, turned into training and advice that people can use straight away."
        crumbs={[{ label: 'About' }]}
      />

      <Section labelledBy="about-bio">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div data-reveal className="lg:col-span-5">
            <div className="overflow-hidden rounded-2xl">
              <Image src="/images/v2/iftikhar-keynote.webp" alt={`${SITE.person} speaking at a corporate event`} width={721} height={687} sizes="(min-width: 1024px) 440px, 100vw" className="h-auto w-full" />
            </div>
            <ul className="mt-8 space-y-2.5 text-[15px] text-[var(--ink)]">
              {content.profile.roles.map((r) => (
                <li key={r} className="flex gap-3">
                  <Dash />
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7">
            <SectionHeading id="about-bio" eyebrow={SITE.person} title="Experience built in the field" />
            <div data-reveal className="mt-8 space-y-5 text-[17px] leading-relaxed">
              <p>
                {SITE.person} is a certified corporate trainer, sales and marketing specialist, business consultant,
                stock market strategist and keynote speaker. He has spent more than fifteen years growing revenue and
                building sales teams.
              </p>
              <p>
                He has delivered training for corporate organisations, small and medium businesses, universities,
                colleges and schools across Pakistan. He also coaches executives, professionals and investors one to one.
              </p>
              <p>
                Alongside this work he founded and leads three private limited companies under Eager Group, in
                packaging, property and training. That means the methods he teaches are the ones he uses to run his own
                businesses.
              </p>
            </div>
            <blockquote data-reveal className="mt-10 border-l-2 border-[var(--royal)] pl-6">
              <p className="font-serif text-2xl font-normal italic leading-snug text-[var(--ink)]">
                “I help people discover their hidden potential and turn it into real-world results.”
              </p>
            </blockquote>
          </div>
        </div>
      </Section>

      <Section tone="paper" labelledBy="about-principles">
        <SectionHeading id="about-principles" eyebrow="How he works" title="Three principles behind every engagement" />
        <ol data-reveal-group className="mt-14 grid gap-5 md:grid-cols-3">
          {PRINCIPLES.map((p, i) => (
            <li key={p.title} data-reveal className="rounded-xl border border-[var(--line)] bg-white p-8">
              <span className="font-serif text-3xl text-[var(--royal)]">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-4 text-lg font-semibold text-[var(--ink)]">{p.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[var(--muted)]">{p.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section labelledBy="about-sectors">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading id="about-sectors" eyebrow="Experience" title="Sectors he has worked with" />
          </div>
          <ul data-reveal-group className="grid gap-x-8 sm:grid-cols-2 lg:col-span-7">
            {content.ventures.industries.map((s) => (
              <li key={s} data-reveal className="flex items-center gap-3 border-b border-[var(--line)] py-4 text-[15px] font-medium text-[var(--ink)]">
                <Dash />
                {s}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
