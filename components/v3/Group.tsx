import React from 'react';
import { content } from '@/lib/content-v2';
import { Section, SectionHeading } from './ui';

const SUMMARIES: Record<string, string> = {
  packaging: 'Commercial and retail packaging, branding and product positioning for FMCG, retail and manufacturing clients.',
  properties: 'Property investment, asset evaluation and residential and commercial development.',
  trainings: 'The training and consultancy arm, running executive courses, in-house programmes and coaching.',
};

export const Group: React.FC = () => (
  <Section id="group" labelledBy="v3-group-title">
    <SectionHeading
      id="v3-group-title"
      eyebrow="Eager Group"
      title="Three operating companies behind the advice"
      intro="Iftikhar founded and leads each of these businesses. The lessons he teaches are the ones he applies in them."
      align="split"
    />

    <div className="mt-14 grid gap-10 border-t border-[var(--line)] pt-10 md:grid-cols-3 md:gap-0 md:divide-x md:divide-[var(--line)]">
      {content.ventures.companies.map((c, i) => (
        <article key={c.id} className={`${i > 0 ? 'md:pl-8 lg:pl-10' : ''} ${i < 2 ? 'md:pr-8 lg:pr-10' : ''}`}>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--royal)]">{c.sector}</p>
          <h3 className="font-serif mt-3 text-xl sm:text-2xl leading-snug text-[var(--ink)]">{c.name}</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-[var(--muted)]">{SUMMARIES[c.id] ?? c.description}</p>
        </article>
      ))}
    </div>
  </Section>
);
