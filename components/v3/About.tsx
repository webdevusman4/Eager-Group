import React from 'react';
import Image from 'next/image';
import { content } from '@/lib/content-v2';
import { Section, SectionHeading } from './ui';

const PRINCIPLES = [
  {
    title: 'Practical first',
    text: 'Every framework is built to be used at work the next morning, not studied in theory.',
  },
  {
    title: 'Taught by an operator',
    text: 'He runs the companies he talks about, so the advice comes from real accounts and real targets.',
  },
  {
    title: 'Measured by results',
    text: 'Success means more revenue, protected margins, stronger teams and clearer careers.',
  },
];

export const About: React.FC = () => (
  <Section id="about" tone="paper" labelledBy="v3-about-title">
    <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-5">
        <Image
          src="/images/v2/iftikhar-keynote.webp"
          alt="Iftikhar Ahmed speaking at a corporate event"
          width={721}
          height={687}
          sizes="(min-width: 1024px) 440px, 100vw"
          className="h-auto w-full rounded-md"
        />
        <blockquote className="mt-8 border-l-2 border-[var(--royal)] pl-5">
          <p className="font-serif text-xl italic font-normal leading-snug text-[var(--ink)]">
            “I don’t just train businesses. I build and grow them.”
          </p>
          <footer className="mt-3 text-sm text-[var(--muted)]">{content.profile.name}</footer>
        </blockquote>
      </div>

      <div className="lg:col-span-7">
        <SectionHeading
          id="v3-about-title"
          eyebrow="About"
          title="A trainer and consultant who runs his own businesses"
        />

        <div className="mt-8 space-y-5 text-base sm:text-[17px] leading-relaxed">
          <p>
            Iftikhar Ahmed is a certified corporate trainer, sales and marketing specialist,
            business consultant and keynote speaker. He has spent more than fifteen years growing
            revenue and building sales teams.
          </p>
          <p>
            He has delivered training for corporate organisations, small and medium businesses,
            universities, colleges and schools across Pakistan. He also coaches executives,
            professionals and investors one to one.
          </p>
          <p>
            Alongside this work he founded and leads three private limited companies under Eager
            Group, in packaging, property and training.
          </p>
        </div>

        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-[var(--ink)]">
          {content.profile.roles.map((r) => (
            <li key={r} className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-[var(--royal)]" aria-hidden="true" />
              {r}
            </li>
          ))}
        </ul>

        <ol className="mt-12 grid gap-8 border-t border-[var(--line)] pt-10 sm:grid-cols-3 sm:gap-6">
          {PRINCIPLES.map((p, i) => (
            <li key={p.title}>
              <span className="font-serif text-lg text-[var(--royal)]">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-2 font-semibold text-[var(--ink)]">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{p.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </Section>
);
