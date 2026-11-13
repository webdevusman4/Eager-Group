import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { SITE } from '@/lib/site';
import { Button, Container, Eyebrow } from './ui';

export const CtaBand: React.FC<{ title?: string; text?: string }> = ({
  title = 'Discuss your team, your targets or your next step.',
  text = 'Tell us what you are working on. We will reply with a suggested programme or a time to talk.',
}) => (
  <section aria-labelledby="cta-title" className="surface-navy navy-panel my-2 py-20 sm:my-4 md:py-28">
    <Container>
      <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div data-reveal className="lg:col-span-7">
          <Eyebrow onDark>Contact</Eyebrow>
          <h2 id="cta-title" className="font-serif mt-5 text-3xl leading-[1.15] text-white sm:text-4xl lg:text-[2.75rem]">
            {title}
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/75">{text}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href={SITE.consultUrl} external variant="gold">
              Message on WhatsApp
            </Button>
            <Button href="/contact" variant="light" arrow>
              Send an enquiry
            </Button>
          </div>
        </div>

        <div data-reveal className="glass-dark rounded-3xl p-2 lg:col-span-5">
          <ul className="divide-y divide-white/10">
            {[
              { icon: Phone, label: 'Phone and WhatsApp', value: SITE.phone, href: SITE.tel },
              { icon: Mail, label: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
              { icon: MapPin, label: 'Office', value: SITE.location },
            ].map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="flex items-center gap-4 p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                  <Icon className="h-[18px] w-[18px] text-[var(--gold-soft)]" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/55">{label}</p>
                  {href ? (
                    <a href={href} className="mt-0.5 block text-white hover:underline hover:underline-offset-4">
                      {value}
                    </a>
                  ) : (
                    <p className="mt-0.5 text-white">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  </section>
);
