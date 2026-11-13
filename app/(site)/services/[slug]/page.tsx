import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import { notFound } from 'next/navigation';
import { Mail, Phone } from 'lucide-react';
import { SERVICES, SITE, getService } from '@/lib/site';
import { PageHero } from '@/components/site/PageHero';
import { RelatedList } from '@/components/site/blocks';
import { Button, Dash, Section } from '@/components/site/ui';

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const service = getService((await params).slug);
  return service ? pageMetadata({ title: service.title, description: service.summary, path: `/services/${service.slug}`, ownImage: true }) : {};
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const service = getService((await params).slug);
  if (!service) notFound();
  const Icon = service.icon;
  const others = SERVICES.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHero
        eyebrow="Service"
        title={service.title}
        intro={service.summary}
        crumbs={[{ label: 'Services', href: '/services' }, { label: service.title }]}
      />

      <Section labelledBy="service-detail">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <span data-reveal className="flex h-14 w-14 items-center justify-center rounded-3xl bg-[var(--royal-soft)] text-[var(--royal)]">
              <Icon className="h-6 w-6" aria-hidden="true" />
            </span>
            <h2 id="service-detail" data-reveal className="font-serif mt-8 text-3xl leading-snug text-[var(--ink)] sm:text-4xl">
              What this covers
            </h2>
            <p data-reveal className="mt-5 text-[17px] leading-relaxed">{service.intro}</p>
            <ul data-reveal-group className="mt-10 border-t border-[var(--line)]">
              {service.deliverables.map((d) => (
                <li key={d} data-reveal className="flex gap-4 border-b border-[var(--line)] py-5 text-[16px] font-medium text-[var(--ink)]">
                  <Dash />
                  {d}
                </li>
              ))}
            </ul>
          </div>

          <aside data-reveal className="lg:col-span-5">
            <div className="rounded-3xl border border-[var(--line)] bg-[var(--paper)] p-8 lg:sticky lg:top-28">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--royal)]">Next step</p>
              <h3 className="font-serif mt-3 text-2xl text-[var(--ink)]">Discuss this service</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[var(--muted)]">
                Tell us about your organisation and what you want to achieve.
              </p>
              <Button href={service.whatsappUrl} external className="mt-7 w-full">
                {service.cta}
              </Button>
              <Button href={`/contact?topic=${encodeURIComponent(service.title)}`} variant="secondary" className="mt-3 w-full">
                Send an enquiry
              </Button>
              <ul className="mt-7 space-y-3 border-t border-[var(--line)] pt-6 text-sm">
                <li>
                  <a href={SITE.tel} className="flex items-center gap-3 text-[var(--ink)] hover:text-[var(--royal)]">
                    <Phone className="h-4 w-4 text-[var(--royal)]" aria-hidden="true" />
                    {SITE.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 text-[var(--ink)] hover:text-[var(--royal)]">
                    <Mail className="h-4 w-4 text-[var(--royal)]" aria-hidden="true" />
                    {SITE.email}
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      <Section tone="paper">
        <RelatedList
          title="Other services"
          items={others.map((s) => ({ label: s.title, href: `/services/${s.slug}`, text: s.summary }))}
        />
      </Section>
    </>
  );
}
