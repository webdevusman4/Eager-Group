import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, CalendarDays } from 'lucide-react';
import { content, getSeatsLeft, isSoldOut } from '@/lib/content-v2';
import { COMPANY_SUMMARIES, FIGURES, MASTERCLASS_SLUG, PROGRAMMES, SERVICES, SITE } from '@/lib/site';
import { Button, Container, Dash, Eyebrow, Section, SectionHeading, TextLink } from '@/components/site/ui';
import { CountUp } from '@/components/site/CountUp';
import { CtaBand } from '@/components/site/CtaBand';
import { EnrolmentPanel, ProgrammeCard, SectorTicker, ServiceCard } from '@/components/site/blocks';

export default function HomePage() {
  const seatsLeft = getSeatsLeft();
  const soldOut = isSoldOut();
  const courses = PROGRAMMES.filter((p) => p.kind === 'course');

  return (
    <>
      {/* Hero */}
      <section aria-labelledby="home-title" className="surface-navy pb-16 pt-32 md:pb-20 md:pt-40">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-12">
            <div data-reveal className="lg:col-span-7">
              <Eyebrow onDark>Corporate training · Business consultancy · Executive programmes</Eyebrow>
              <h1 id="home-title" className="font-serif mt-6 text-[clamp(2.5rem,5.4vw,4.25rem)] leading-[1.05] text-white">
                Empowering people.
                <br />
                <span className="italic font-normal text-[#B9D6FF]">Transforming businesses.</span>
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/75">
                {SITE.person} works with founders, executives and sales teams to build revenue systems that last. His
                advice comes from fifteen years of selling, managing teams and running three companies of his own.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button href={SITE.consultUrl} external variant="light">
                  Book a consultation
                </Button>
                <Button href="/programmes" variant="glass" arrow>
                  Explore programmes
                </Button>
              </div>
            </div>

            <div data-reveal className="relative mx-auto w-full max-w-lg lg:col-span-5 lg:max-w-none">
              <div className="relative overflow-hidden rounded-2xl border border-white/15">
                <Image
                  src="/images/v2/iftikhar-executive-desk.webp"
                  alt={`${SITE.person} at his desk`}
                  width={1007}
                  height={793}
                  priority
                  sizes="(min-width: 1024px) 480px, (min-width: 640px) 512px, 100vw"
                  className="h-auto w-full"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#081830]/70 to-transparent" />
                <div className="glass-dark absolute left-4 top-4 rounded-lg px-3.5 py-2">
                  <p className="text-sm font-semibold text-white">{SITE.person}</p>
                  <p className="text-xs text-white/70">Founder, Eager Group</p>
                </div>
              </div>

              <Link
                href={`/programmes/${MASTERCLASS_SLUG}`}
                className="glass group relative mt-4 block rounded-xl p-5 transition-transform duration-300 hover:-translate-y-0.5 sm:absolute sm:-bottom-10 sm:-left-8 sm:mt-0 sm:w-[300px]"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--royal)]">
                    <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                    Next cohort
                  </span>
                  {seatsLeft !== null && (
                    <span className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700">
                      <span className="relative flex h-1.5 w-1.5">
                        {!soldOut && <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />}
                        <span className={`relative h-1.5 w-1.5 rounded-full ${soldOut ? 'bg-red-500' : 'bg-emerald-500'}`} />
                      </span>
                      {soldOut ? 'Waitlist' : `${seatsLeft} places`}
                    </span>
                  )}
                </div>
                <p className="mt-2 font-semibold leading-snug text-[var(--ink)]">{content.event.name}</p>
                <div className="mt-3 flex items-center justify-between border-t border-[var(--line)] pt-3 text-sm">
                  <span className="font-semibold text-[var(--ink)]">{content.event.priceLabel}</span>
                  <span className="inline-flex items-center gap-1 font-semibold text-[var(--royal)]">
                    Details
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </div>
          </div>

          <dl data-reveal-group className="glass-dark mt-16 grid grid-cols-2 rounded-xl sm:mt-24 lg:grid-cols-4">
            {FIGURES.map((f, i) => (
              <div
                key={f.label}
                data-reveal
                className={`flex flex-col-reverse justify-end p-6 sm:p-7 ${i % 2 === 1 ? 'border-l border-white/10' : ''} ${
                  i >= 2 ? 'border-t border-white/10 lg:border-t-0' : ''
                } ${i === 2 ? 'lg:border-l' : ''}`}
              >
                <dt className="mt-2 text-sm leading-snug text-white/65">{f.label}</dt>
                <dd className="font-serif text-4xl text-white sm:text-5xl">
                  <CountUp value={f.value} suffix={f.suffix} />
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <SectorTicker />

      {/* Services */}
      <Section id="services" labelledBy="home-services">
        <SectionHeading
          id="home-services"
          eyebrow="Services"
          title="Four practices, one aim: measurable growth"
          intro="Each engagement is shaped around the organisation or person in front of us, from a single workshop to a long-term advisory role."
          split
        />
        <div data-reveal-group className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={i} />
          ))}
        </div>
      </Section>

      {/* Flagship */}
      <Section tone="navy" labelledBy="home-flagship">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <SectionHeading
              id="home-flagship"
              eyebrow="Flagship programme"
              title="The 8-Hour Executive Sales Masterclass"
              intro="One day covering the full sale, from finding the right prospects to collecting payment and keeping the client. Places are capped so every participant works directly with Iftikhar."
              onDark
            />
            <ol data-reveal-group className="mt-12 grid gap-4 sm:grid-cols-2">
              {content.curriculum.modules.map((m) => (
                <li key={m.id} data-reveal className="glass-dark rounded-xl p-6 transition-colors duration-300 hover:bg-white/10">
                  <span className="font-serif text-2xl text-[#8FC2FF]">{m.id}</span>
                  <p className="mt-3 font-semibold leading-snug text-white">{m.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{m.outcome}</p>
                </li>
              ))}
            </ol>
            <div data-reveal className="mt-10">
              <TextLink href={`/programmes/${MASTERCLASS_SLUG}`} onDark>
                See the full programme
              </TextLink>
            </div>
          </div>
          <div data-reveal className="lg:col-span-5">
            <EnrolmentPanel glass />
          </div>
        </div>
      </Section>

      {/* About */}
      <Section tone="paper" labelledBy="home-about">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div data-reveal className="relative lg:col-span-5">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/images/v2/iftikhar-keynote.webp"
                alt={`${SITE.person} speaking at a corporate event`}
                width={721}
                height={687}
                sizes="(min-width: 1024px) 440px, 100vw"
                className="h-auto w-full"
              />
            </div>
            <blockquote className="glass relative -mt-16 ml-6 mr-6 rounded-xl p-6 sm:ml-10 sm:mr-0 sm:max-w-sm">
              <p className="font-serif text-lg font-normal italic leading-snug text-[var(--ink)]">
                “I don’t just train businesses. I build and grow them.”
              </p>
              <footer className="mt-3 text-sm text-[var(--muted)]">{SITE.person}</footer>
            </blockquote>
          </div>
          <div className="lg:col-span-7">
            <SectionHeading id="home-about" eyebrow="About" title="A trainer and consultant who runs his own businesses" />
            <div data-reveal className="mt-8 space-y-5 text-[17px] leading-relaxed">
              <p>
                {SITE.person} is a certified corporate trainer, sales and marketing specialist, business consultant and
                keynote speaker with more than fifteen years of experience growing revenue and building sales teams.
              </p>
              <p>
                He has trained corporate teams, small businesses, universities and schools across Pakistan, and coaches
                executives, professionals and investors one to one.
              </p>
            </div>
            <div data-reveal className="mt-8">
              <Button href="/about" variant="secondary" arrow>
                More about Iftikhar
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Other programmes */}
      <Section labelledBy="home-programmes">
        <SectionHeading
          id="home-programmes"
          eyebrow="Programmes"
          title="More ways to learn with Iftikhar"
          intro="Open courses, team workshops and private coaching for investors, commercial teams and professionals."
          split
        />
        <div data-reveal-group className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((p) => (
            <ProgrammeCard key={p.slug} programme={p} />
          ))}
        </div>
      </Section>

      {/* Eager Group */}
      <Section tone="paper" labelledBy="home-group">
        <SectionHeading
          id="home-group"
          eyebrow="Eager Group"
          title="Three operating companies behind the advice"
          intro="Iftikhar founded and leads each of these businesses. The lessons he teaches are the ones he applies in them."
          split
        />
        <div data-reveal-group className="mt-14 grid gap-5 md:grid-cols-3">
          {content.ventures.companies.map((c) => (
            <article key={c.id} data-reveal className="rounded-xl border border-[var(--line)] bg-white p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--royal)]">{c.sector}</p>
              <h3 className="font-serif mt-3 text-xl leading-snug text-[var(--ink)]">{c.name}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[var(--muted)]">{COMPANY_SUMMARIES[c.id] ?? c.description}</p>
            </article>
          ))}
        </div>
        <div data-reveal className="mt-10">
          <TextLink href="/eager-group">About Eager Group</TextLink>
        </div>
      </Section>

      {/* In practice */}
      <Section labelledBy="home-practice">
        <SectionHeading id="home-practice" eyebrow="In practice" title="Workshops, seminars and talks" />
        <div data-reveal-group className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            { src: '/images/v2/iftikhar-roundtable.webp', title: 'Corporate workshops', text: 'Practical sessions built around the team’s own accounts and targets.' },
            { src: '/images/v2/iftikhar-seminar.webp', title: 'Seminars and university talks', text: 'Leadership, career and communication sessions for teams and students.' },
            { src: '/images/v2/iftikhar-podcast.webp', title: 'Media and commentary', text: 'Conversations on entrepreneurship, sales and investing in Pakistan.' },
          ].map((p) => (
            <figure key={p.src} data-reveal className="group">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image src={p.src} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
              </div>
              <figcaption className="mt-5">
                <p className="font-semibold text-[var(--ink)]">{p.title}</p>
                <p className="mt-1.5 flex gap-3 text-[15px] leading-relaxed text-[var(--muted)]">
                  <Dash />
                  {p.text}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
