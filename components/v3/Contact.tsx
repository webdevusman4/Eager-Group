import React from 'react';
import { content, getWhatsAppUrl } from '@/lib/content-v2';
import { Button, Container } from './ui';

export const Contact: React.FC = () => {
  const { contact } = content;
  const tel = `tel:${contact.phoneDisplay.replace(/\s+/g, '')}`;

  return (
    <section id="contact" aria-labelledby="v3-contact-title" className="scroll-mt-20 bg-[var(--navy)] text-white">
      <Container className="py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
              <span className="h-px w-8 bg-white/50" aria-hidden="true" />
              Contact
            </p>
            <h2 id="v3-contact-title" className="font-serif mt-5 text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.15]">
              Discuss your team, your targets or your next step.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/75">
              Tell us what you are working on. We will reply with a suggested programme or a time to talk.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href={getWhatsAppUrl(contact.whatsappConsultMessage)} external variant="light">
                Message on WhatsApp
              </Button>
              <Button href="#reserve" variant="outlineLight">
                Reserve a masterclass place
              </Button>
            </div>
          </div>

          <dl className="lg:col-span-4 lg:col-start-9 divide-y divide-white/15 border-y border-white/15 self-start text-[15px]">
            <div className="py-5">
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">Phone and WhatsApp</dt>
              <dd className="mt-1.5">
                <a href={tel} className="hover:underline underline-offset-4">{contact.phoneDisplay}</a>
              </dd>
            </div>
            <div className="py-5">
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">Email</dt>
              <dd className="mt-1.5">
                <a href={`mailto:${contact.email}`} className="hover:underline underline-offset-4">{contact.email}</a>
              </dd>
            </div>
            <div className="py-5">
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">Office</dt>
              <dd className="mt-1.5">{contact.location}</dd>
            </div>
          </dl>
        </div>
      </Container>
    </section>
  );
};
