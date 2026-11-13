import React from 'react';
import Image from 'next/image';
import { content, getWhatsAppUrl } from '@/lib/content-v2';
import { Button, Container } from './ui';

const FIGURES = [
  { value: '15+', label: 'Years in sales and business growth' },
  { value: '3', label: 'Companies founded and led' },
  { value: '4', label: 'Advisory and training practices' },
  { value: '14+', label: 'Training programmes delivered' },
];

export const Hero: React.FC = () => {
  const consultUrl = getWhatsAppUrl(content.contact.whatsappConsultMessage);

  return (
    <section id="top" aria-labelledby="v3-hero-title" className="bg-white">
      <Container className="pt-12 pb-16 md:pt-20 md:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--royal)]">
              Corporate training · Business consultancy · Executive programmes
            </p>

            <h1
              id="v3-hero-title"
              className="font-serif mt-6 text-[clamp(2.4rem,5vw,4rem)] leading-[1.08] text-[var(--ink)]"
            >
              Empowering people.
              <br />
              Transforming businesses.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-[var(--muted)]">
              Iftikhar Ahmed works with founders, executives and sales teams to build revenue systems
              that last. His advice comes from fifteen years of selling, managing teams and running
              three companies of his own.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href={consultUrl} external>
                Book a consultation
              </Button>
              <Button href="#programmes" variant="secondary">
                View programmes
              </Button>
            </div>
          </div>

          <figure className="lg:col-span-5 mx-auto w-full max-w-xl lg:max-w-none">
            <Image
              src="/images/v2/iftikhar-executive-desk.webp"
              alt="Iftikhar Ahmed at his desk"
              width={1007}
              height={793}
              priority
              sizes="(min-width: 1024px) 460px, (min-width: 640px) 576px, 100vw"
              className="h-auto w-full rounded-md"
            />
            <figcaption className="mt-4 flex items-baseline justify-between gap-4 border-b border-[var(--line)] pb-4 text-sm">
              <span className="font-semibold text-[var(--ink)]">{content.profile.name}</span>
              <span className="text-[var(--muted)] text-right">Founder, Eager Group</span>
            </figcaption>
          </figure>
        </div>

        <dl className="mt-16 md:mt-20 grid grid-cols-2 border-t border-[var(--line)] lg:grid-cols-4">
          {FIGURES.map((f, i) => (
            <div
              key={f.label}
              className={`flex flex-col-reverse justify-end pt-8 pb-2 pr-4 ${i % 2 === 1 ? 'pl-6 border-l border-[var(--line)]' : ''} ${
                i === 2 ? 'lg:pl-6 lg:border-l lg:border-[var(--line)]' : ''
              }`}
            >
              <dt className="mt-2 text-sm leading-snug text-[var(--muted)]">{f.label}</dt>
              <dd className="font-serif text-4xl sm:text-5xl text-[var(--ink)]">{f.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
};
