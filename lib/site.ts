/**
 * Site-wide data for the main Next.js site (app/(site)).
 * Facts come from lib/content-v2.ts; wording here is the plainer corporate copy.
 */
import type { LucideIcon } from 'lucide-react';
import { Briefcase, Mic2, Presentation, TrendingUp } from 'lucide-react';
import { content, getWhatsAppUrl } from './content-v2';

export const SITE = {
  name: 'Eager Consulting & Training',
  url: 'https://eagertrainings.com',
  person: content.profile.name,
  phone: content.contact.phoneDisplay,
  tel: `tel:${content.contact.phoneDisplay.replace(/\s+/g, '')}`,
  email: content.contact.email,
  location: content.contact.location,
  linkedin: content.contact.social.linkedin,
  whatsappNumber: content.contact.whatsappNumber,
  consultUrl: getWhatsAppUrl(content.contact.whatsappConsultMessage),
};

export const NAV_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Programmes', href: '/programmes' },
  { label: 'Eager Group', href: '/eager-group' },
  { label: 'Contact', href: '/contact' },
];

export const FIGURES = [
  { value: 15, suffix: '+', label: 'Years in sales and business growth' },
  { value: 3, suffix: '', label: 'Companies founded and led' },
  { value: 4, suffix: '', label: 'Advisory and training practices' },
  { value: 14, suffix: '+', label: 'Training programmes delivered' },
];

/* ---------------------------------- Services ---------------------------------- */

export interface Service {
  slug: string;
  title: string;
  summary: string;
  intro: string;
  icon: LucideIcon;
  cta: string;
  deliverables: string[];
  whatsappUrl: string;
}

const SERVICE_COPY: Record<string, Omit<Service, 'deliverables' | 'whatsappUrl'>> = {
  'corporate-training': {
    slug: 'corporate-training',
    title: 'Corporate and sales training',
    summary: 'In-house programmes that raise closing rates and make sales teams more accountable.',
    intro:
      'Programmes are built around your team’s own accounts, targets and sales cycle. Sessions are practical and interactive, so people leave with methods they can use the same week.',
    icon: Presentation,
    cta: 'Enquire about training',
  },
  'business-consultancy': {
    slug: 'business-consultancy',
    title: 'Business consultancy',
    summary: 'Hands-on work with founders and directors on sales systems, collections and growth plans.',
    intro:
      'Consultancy is for owners and directors who want a repeatable way to win business, collect what they are owed and grow without losing control of margins.',
    icon: Briefcase,
    cta: 'Discuss a project',
  },
  'stock-market-advisory': {
    slug: 'investment-advisory',
    title: 'Stock market and wealth strategy',
    summary: 'Structured guidance on equity investing, portfolio discipline and risk for individuals.',
    intro:
      'Guidance for individuals and professionals who want to invest with a plan. The focus is on understanding the market, managing risk and building a portfolio over time.',
    icon: TrendingUp,
    cta: 'Ask about advisory',
  },
  'speaking-coaching': {
    slug: 'keynotes-and-coaching',
    title: 'Keynotes and one-to-one coaching',
    summary: 'Talks for conferences and universities, and private coaching for executives and graduates.',
    intro:
      'Keynotes for corporate events, seminars and universities, and private coaching for people working on leadership, career direction or a business decision.',
    icon: Mic2,
    cta: 'Check availability',
  },
};

export const SERVICES: Service[] = content.services.pillars.map((p) => ({
  ...SERVICE_COPY[p.id],
  deliverables: p.deliverables,
  whatsappUrl: getWhatsAppUrl(p.whatsappInquiry),
}));

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);

/* --------------------------------- Programmes --------------------------------- */

export interface Programme {
  slug: string;
  kind: 'flagship' | 'course';
  title: string;
  label: string;
  format: string;
  level: string;
  enrolment: string;
  summary: string;
  highlights: string[];
  image: string;
  whatsappUrl: string;
}

const COURSE_META: Record<string, { slug: string; image: string }> = {
  'stock-market-course': { slug: 'stock-market-mastery', image: '/images/v2/iftikhar-podcast.webp' },
  'collections-negotiation-bootcamp': { slug: 'negotiation-and-collections', image: '/images/v2/iftikhar-seminar.webp' },
  'executive-coaching-program': { slug: 'executive-coaching', image: '/images/v2/iftikhar-keynote.webp' },
};

export const MASTERCLASS_SLUG = 'executive-sales-masterclass';

export const PROGRAMMES: Programme[] = [
  {
    slug: MASTERCLASS_SLUG,
    kind: 'flagship',
    title: content.event.name,
    label: 'Flagship programme',
    format: 'In person, one full day',
    level: 'Owners, executives and sales leaders',
    enrolment: `${content.event.priceLabel} per participant`,
    summary:
      'A one-day course covering the full sale, from finding the right prospects to collecting payment and keeping the client. Places are limited so every participant works directly with Iftikhar.',
    highlights: content.curriculum.modules.map((m) => m.title),
    image: '/images/v2/iftikhar-roundtable.webp',
    whatsappUrl: getWhatsAppUrl(),
  },
  ...content.signatureCourses.map((c) => ({
    slug: COURSE_META[c.id]?.slug ?? c.id,
    kind: 'course' as const,
    title: c.title,
    label: c.badge,
    format: c.format,
    level: c.level,
    enrolment: c.priceTag,
    summary: c.subtitle,
    highlights: c.highlights,
    image: COURSE_META[c.id]?.image ?? '/images/v2/iftikhar-seminar.webp',
    whatsappUrl: getWhatsAppUrl(c.whatsappInquiry),
  })),
];

export const getProgramme = (slug: string) => PROGRAMMES.find((p) => p.slug === slug);

/* ---------------------------------- Audiences --------------------------------- */

export const AUDIENCES = [
  {
    title: 'Owners and senior executives',
    text: 'Growing revenue, protecting margins and building accountable sales leadership.',
    fit: 'Executive Sales Masterclass, business consultancy',
  },
  {
    title: 'Sales leaders and their teams',
    text: 'Prospecting, pitching, handling objections and collecting overdue payments.',
    fit: 'In-house training, negotiation and collections workshop',
  },
  {
    title: 'Investors and professionals',
    text: 'Learning disciplined, risk-managed investing from first principles to advanced practice.',
    fit: 'Stock market programme, portfolio advisory',
  },
  {
    title: 'Universities and educators',
    text: 'Career direction, communication and a practical business mindset for students and faculty.',
    fit: 'Seminars, teacher training, career coaching',
  },
];

/* ---------------------------------- Companies --------------------------------- */

export const COMPANY_SUMMARIES: Record<string, string> = {
  packaging:
    'Commercial and retail packaging, branding and product positioning for FMCG, retail and manufacturing clients.',
  properties: 'Property investment, asset evaluation and residential and commercial development.',
  trainings:
    'The training and consultancy arm, running executive courses, in-house programmes and one-to-one coaching.',
};
