'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { CheckCircle2, Mail, MessageCircle } from 'lucide-react';

interface Props {
  whatsappNumber: string;
  email: string;
  topics: string[];
  defaultTopic?: string;
}

type Fields = { name: string; organisation: string; contact: string; topic: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

/**
 * Enquiry form. There is no server here, so sending opens WhatsApp or the
 * visitor's email app with the message already written.
 */
export const EnquiryForm: React.FC<Props> = ({ whatsappNumber, email, topics, defaultTopic }) => {
  const [fields, setFields] = useState<Fields>({
    name: '',
    organisation: '',
    contact: '',
    topic: defaultTopic ?? topics[0] ?? '',
    message: '',
  });
  const [errors, setErrors] = useState<Errors>({});
  const params = useSearchParams();

  // Pre-select the topic when arriving from a service or programme page (?topic=...).
  useEffect(() => {
    const t = params?.get('topic');
    if (t && topics.includes(t)) setFields((f) => ({ ...f, topic: t }));
  }, [params, topics]);
  const [sentVia, setSentVia] = useState<'whatsapp' | 'email' | null>(null);

  const set = (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFields((f) => ({ ...f, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const validate = (): boolean => {
    const er: Errors = {};
    if (!fields.name.trim()) er.name = 'Please enter your name.';
    if (!fields.contact.trim()) er.contact = 'Please add a phone number or email so we can reply.';
    if (fields.message.trim().length < 10) er.message = 'Please add a short message.';
    setErrors(er);
    return Object.keys(er).length === 0;
  };

  const compose = () =>
    [
      `Hello, my name is ${fields.name.trim()}${fields.organisation.trim() ? ` from ${fields.organisation.trim()}` : ''}.`,
      `Enquiry about: ${fields.topic}`,
      '',
      fields.message.trim(),
      '',
      `Best way to reach me: ${fields.contact.trim()}`,
    ].join('\n');

  const send = (via: 'whatsapp' | 'email') => {
    if (!validate()) return;
    const body = compose();
    const url =
      via === 'whatsapp'
        ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(body)}`
        : `mailto:${email}?subject=${encodeURIComponent(`Enquiry: ${fields.topic}`)}&body=${encodeURIComponent(body)}`;
    if (via === 'whatsapp') window.open(url, '_blank', 'noopener,noreferrer');
    else window.location.href = url;
    setSentVia(via);
  };

  const input =
    'mt-2 block w-full rounded-md border bg-white px-4 py-3 text-[15px] text-[var(--ink)] placeholder:text-[var(--muted)]/70 transition-colors focus:border-[var(--royal)] focus:outline-none focus:ring-2 focus:ring-[var(--royal)]/20';
  const border = (k: keyof Fields) => (errors[k] ? 'border-red-400' : 'border-[var(--line)]');

  return (
    <form
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        send('whatsapp');
      }}
      className="space-y-5"
      aria-describedby="enquiry-note"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="enq-name" className="text-sm font-medium text-[var(--ink)]">
            Name <span className="text-[var(--royal)]">*</span>
          </label>
          <input id="enq-name" autoComplete="name" value={fields.name} onChange={set('name')} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'enq-name-err' : undefined} className={`${input} ${border('name')}`} />
          {errors.name && <p id="enq-name-err" className="mt-1.5 text-sm text-red-600">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="enq-org" className="text-sm font-medium text-[var(--ink)]">
            Organisation
          </label>
          <input id="enq-org" autoComplete="organization" value={fields.organisation} onChange={set('organisation')} className={`${input} ${border('organisation')}`} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="enq-contact" className="text-sm font-medium text-[var(--ink)]">
            Phone or email <span className="text-[var(--royal)]">*</span>
          </label>
          <input id="enq-contact" value={fields.contact} onChange={set('contact')} aria-invalid={!!errors.contact} aria-describedby={errors.contact ? 'enq-contact-err' : undefined} className={`${input} ${border('contact')}`} />
          {errors.contact && <p id="enq-contact-err" className="mt-1.5 text-sm text-red-600">{errors.contact}</p>}
        </div>
        <div>
          <label htmlFor="enq-topic" className="text-sm font-medium text-[var(--ink)]">
            Interested in
          </label>
          <select id="enq-topic" value={fields.topic} onChange={set('topic')} className={`${input} ${border('topic')}`}>
            {topics.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="enq-message" className="text-sm font-medium text-[var(--ink)]">
          Message <span className="text-[var(--royal)]">*</span>
        </label>
        <textarea id="enq-message" rows={5} value={fields.message} onChange={set('message')} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'enq-message-err' : undefined} placeholder="Team size, goals, preferred dates…" className={`${input} ${border('message')} resize-y`} />
        {errors.message && <p id="enq-message-err" className="mt-1.5 text-sm text-red-600">{errors.message}</p>}
      </div>

      <div className="flex flex-col gap-3 pt-1 sm:flex-row">
        <button type="submit" className="inline-flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-md bg-[var(--royal)] px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-[var(--royal-dark)]">
          <MessageCircle className="h-[18px] w-[18px]" aria-hidden="true" />
          Send on WhatsApp
        </button>
        <button type="button" onClick={() => send('email')} className="inline-flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-md border border-[var(--ink)]/20 bg-white px-6 py-3 text-[15px] font-semibold text-[var(--ink)] transition-colors hover:border-[var(--ink)]">
          <Mail className="h-[18px] w-[18px]" aria-hidden="true" />
          Send by email
        </button>
      </div>

      <p id="enquiry-note" className="text-xs leading-relaxed text-[var(--muted)]">
        Your message opens in WhatsApp or your email app, ready to send. Nothing is stored on this website.
      </p>

      {sentVia && (
        <p role="status" className="flex items-start gap-2 rounded-md bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          {sentVia === 'whatsapp'
            ? 'WhatsApp opened in a new tab with your message. Press send there to reach us.'
            : 'Your email app opened with the message. Press send there to reach us.'}
        </p>
      )}
    </form>
  );
};
