import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import { Suspense } from 'react';
import { ExternalLink, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { PROGRAMMES, SERVICES, SITE } from '@/lib/site';
import { PageHero } from '@/components/site/PageHero';
import { EnquiryForm } from '@/components/site/EnquiryForm';
import { FaqList } from '@/components/site/blocks';
import { Section, SectionHeading } from '@/components/site/ui';

export const metadata: Metadata = pageMetadata({
  title: 'Contact',
  description:
    'Contact Eager Consulting & Training in Karachi about training, consultancy, programmes or coaching.',
  path: '/contact',
});

const TOPICS = ['General enquiry', ...PROGRAMMES.map((p) => p.title), ...SERVICES.map((s) => s.title)];

export default function ContactPage() {
  const channels = [
    { icon: MessageCircle, label: 'WhatsApp', value: 'Message us directly', href: SITE.consultUrl, external: true },
    { icon: Phone, label: 'Phone', value: SITE.phone, href: SITE.tel },
    { icon: Mail, label: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
    { icon: MapPin, label: 'Office', value: SITE.location },
    ...(SITE.linkedin ? [{ icon: ExternalLink, label: 'LinkedIn', value: SITE.person, href: SITE.linkedin, external: true }] : []),
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s talk about your goals"
        intro="Whether you are planning team training, considering the masterclass or looking for advice, start with a short message."
        crumbs={[{ label: 'Contact' }]}
      />

      <Section labelledBy="contact-form-title">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading id="contact-channels" eyebrow="Reach us" title="Direct contact" />
            <ul data-reveal-group className="mt-10 space-y-3">
              {channels.map(({ icon: Icon, label, value, href, external }) => {
                const inner = (
                  <>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[var(--royal-soft)] text-[var(--royal)] transition-colors group-hover:bg-[var(--royal)] group-hover:text-white">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">{label}</span>
                      <span className="mt-0.5 block font-medium text-[var(--ink)]">{value}</span>
                    </span>
                  </>
                );
                return (
                  <li key={label} data-reveal>
                    {href ? (
                      <a
                        href={href}
                        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        className="group flex items-center gap-4 rounded-3xl border border-[var(--line)] bg-white p-4 transition-colors hover:border-[#0048A8]/40"
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 rounded-3xl border border-[var(--line)] bg-white p-4">{inner}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div data-reveal className="lg:col-span-7">
            <div className="rounded-[28px] border border-[var(--line)] bg-white p-7 sm:p-10">
              <h2 id="contact-form-title" className="font-serif text-2xl text-[var(--ink)] sm:text-3xl">
                Send an enquiry
              </h2>
              <p className="mt-2 text-[15px] text-[var(--muted)]">Fields marked * are required.</p>
              <div className="mt-8">
                <Suspense fallback={null}>
                  <EnquiryForm whatsappNumber={SITE.whatsappNumber} email={SITE.email} topics={TOPICS} />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="paper" labelledBy="contact-faq">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading id="contact-faq" eyebrow="FAQ" title="Common questions" />
          </div>
          <div className="lg:col-span-8">
            <FaqList />
          </div>
        </div>
      </Section>
    </>
  );
}
