/**
 * Eager Consulting & Training - 8-Hour Executive Sales Masterclass
 * Single Typed Source of Truth for all landing page copy, pricing, schedule, and content.
 */

export interface EventConfig {
  name: string;
  tagline: string;
  date_start: string | null;
  date_end: string | null;
  startTime: string | null;
  endTime: string | null;
  duration: string;
  venue: string | null;
  city: string;
  price: number;
  priceLabel: string;
  priceUnit: string;
  seats_total: number | null;
  seats_taken: number;
  includes: string[];
}

export interface ContactConfig {
  whatsappNumber: string; // digits only for wa.me link
  whatsappMessage: string;
  whatsappWaitlistMessage: string;
  email: string;
  phoneDisplay: string;
  mainSiteUrl: string;
  social: {
    linkedin?: string;
    facebook?: string;
    youtube?: string;
  };
}

export interface StatItem {
  value: string;
  unit: string;
  label: string;
}

export interface ModuleItem {
  id: string;
  stageLabel: string;
  title: string;
  icon: 'Target' | 'Brain' | 'Scale' | 'FileSignature';
  image: string;
  imageAlt: string;
  outcome: string;
  bullets: string[];
  footer: string;
}

export interface PrincipleItem {
  numeral: string;
  title: string;
  description: string;
}

export interface TrainerConfig {
  pill: string;
  name: string;
  title: string;
  subtitle: string;
  pullQuote: string;
  principles: PrincipleItem[];
  bio: string;
  chips: string[];
  closingLine: string;
  ctaText: string;
  portraitCaption: {
    name: string;
    role: string;
  };
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  is_approved: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SiteContent {
  event: EventConfig;
  contact: ContactConfig;
  showClientLogos: boolean;
  industries: string[];
  hero: {
    pill: string;
    trainerName: string;
    h1Prefix: string;
    h1Highlight: string;
    h1Suffix: string;
    subhead: string;
    ctaPrimary: string;
    ctaWaitlist: string;
    ctaSecondary: string;
  };
  stats: StatItem[];
  conversion: {
    pill: string;
    h2: string;
    outcomes: string[];
    cardPill: string;
    cardTitle: string;
    finePrint1: string;
  };
  qualifier: {
    pill: string;
    h2: string;
    sub: string;
    forPoints: { title: string; desc: string }[];
    notForPoints: { title: string; desc: string }[];
  };
  curriculum: {
    pill: string;
    h2: string;
    sub: string;
    modules: ModuleItem[];
    summary: string;
  };
  trainer: TrainerConfig;
  faq: {
    pill: string;
    h2: string;
    sub: string;
    items: FaqItem[];
  };
  testimonials: {
    pill: string;
    h2: string;
    notice: string;
    items: TestimonialItem[];
  };
  finalCta: {
    h2: string;
    sub: string;
    ctaPrimary: string;
    ctaWaitlist: string;
    ctaSecondary: string;
  };
  footer: {
    brandName: string;
    brandBlurb: string;
    address: string;
    email: string;
    phone: string;
    quickLinks: { label: string; href: string }[];
  };
}

const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@eagertrainings.com";

export const content: SiteContent = {
  event: {
    name: "Executive Sales Masterclass",
    tagline: "8-Hour In-Person Masterclass",
    date_start: null, // If null or empty, displays clean "To be announced"
    date_end: null,
    startTime: null, // If null or empty, displays clean "To be announced"
    endTime: null,
    duration: "8 hours",
    venue: null, // If null or empty, displays clean "To be announced, Karachi"
    city: "Karachi",
    price: 30000,
    priceLabel: "PKR 30,000",
    priceUnit: "per seat",
    seats_total: 8, // Set to null to hide scarcity text, or 0 for sold out
    seats_taken: 0,
    includes: [
      "Physical executive sales workbook & deal architecture templates",
      "Curated 5-star executive networking lunch and refreshments",
      "Official certificate of participation signed by Master Trainer Iftikhar Ahmed",
    ],
  },
  contact: {
    whatsappNumber: "923212123037",
    whatsappMessage: "Hi, I’d like to reserve a seat for the 8-Hour Executive Sales Masterclass (PKR 30,000).",
    whatsappWaitlistMessage: "Hi, I’d like to join the priority waitlist for the next 8-Hour Executive Sales Masterclass.",
    email: contactEmail,
    phoneDisplay: "+92 321 212 3037",
    mainSiteUrl: "https://eagertrainings.com",
    social: {
      linkedin: "https://www.linkedin.com/in/iftikhar-ahmed",
      facebook: "",
      youtube: "",
    },
  },
  showClientLogos: false, // Config flag: false renders clean industries chip row
  industries: [
    "Manufacturing",
    "Packaging & FMCG",
    "Banking",
    "Pharma",
    "Retail",
    "Education",
    "IT",
    "Startups & SMEs",
    "Real Estate",
    "Professional Services",
  ],
  hero: {
    pill: "Executive Sales Masterclass • 8 hours • Limited seats",
    trainerName: "Iftikhar Ahmed, Master Trainer",
    h1Prefix: "Stop Chasing Deals. ",
    h1Highlight: "Start Closing",
    h1Suffix: " Them.",
    subhead: "One room. Eight hours. A practical sales system from a Certified Corporate Trainer with 15+ years of driving business growth and building high-performance teams. Walk in with targets. Walk out with a system you can run on Monday.",
    ctaPrimary: "Reserve my seat, PKR 30,000",
    ctaWaitlist: "Join the waitlist",
    ctaSecondary: "See the curriculum",
  },
  stats: [
    {
      value: "15+",
      unit: "years",
      label: "Driving business growth and building high-performance teams",
    },
    {
      value: "3",
      unit: "companies",
      label: "Founded: packaging, properties and training",
    },
    {
      value: "6",
      unit: "stages",
      label: "Of the sale covered, from first call to post-sale follow-up",
    },
  ],
  conversion: {
    pill: "Reserve your seat",
    h2: "One day. Eight hours. Your next level.",
    outcomes: [
      "A clear process from prospecting to post-sale follow-up",
      "Confidence handling objections and negotiating on value",
      "Practical closing techniques you can apply the very next day",
    ],
    cardPill: "Executive Sales Masterclass",
    cardTitle: "Secure your seat",
    finePrint1: "Registration closes when the room is full.",
  },
  qualifier: {
    pill: "Who it’s for",
    h2: "Is This Masterclass Built For You?",
    sub: "We intentionally cap each cohort to strictly limited seats to preserve peer caliber, active deal simulation, and direct coaching with Master Trainer Iftikhar Ahmed.",
    forPoints: [
      {
        title: "C-Level Executives & Business Owners",
        desc: "Scaling enterprise commercial revenue, protecting gross margins, and holding commercial teams accountable.",
      },
      {
        title: "Vice Presidents & Heads of Sales",
        desc: "Managing high-quota enterprise deal teams, multi-stakeholder pipelines, and strategic revenue quotas.",
      },
      {
        title: "Enterprise Founders & Managing Partners",
        desc: "Personally leading high-ticket commercial negotiations, government bids, or B2B contracts where every deal matters.",
      },
      {
        title: "Senior Commercial Directors & Rainmakers",
        desc: "Seeking a repeatable, non-hyped sales closing system they can run across their commercial division starting Monday.",
      },
    ],
    notForPoints: [
      {
        title: "Absolute Beginners & Junior Interns",
        desc: "This is not an introductory 101 course. We assume you already possess foundational commercial selling experience.",
      },
      {
        title: "Retail Counter Sales Representatives",
        desc: "This program does not cover retail floor selling, e-commerce drop-shipping, or low-ticket transactional purchases.",
      },
      {
        title: "Anyone Looking for Theory Without Practice",
        desc: "Every framework in this masterclass is designed for practical execution on Monday morning, not passive theoretical study.",
      },
    ],
  },
  curriculum: {
    pill: "Curriculum",
    h2: "What you’ll master in eight hours",
    sub: "Every module is built around real-world implementation. You learn it, then you use it.",
    modules: [
      {
        id: "01",
        stageLabel: "MODULE 01",
        title: "Prospecting and Lead Qualification",
        icon: "Target",
        image: "/images/curriculum-prospecting.webp",
        imageAlt: "Sales pipeline prospecting layout and tools",
        outcome: "Fill your pipeline with buyers, not browsers.",
        bullets: [
          "Identify and prioritise the prospects worth your time",
          "Qualify leads before you invest in them",
          "Build a repeatable prospecting rhythm",
        ],
        footer: "Covers stage 1 of 6",
      },
      {
        id: "02",
        stageLabel: "MODULE 02",
        title: "Neuro-Selling: Rapport, Trust and the Pitch",
        icon: "Brain",
        image: "/images/curriculum-neuro-selling.webp",
        imageAlt: "Cognitive connection and trust architecture",
        outcome: "Understand how buyers decide, then speak to it.",
        bullets: [
          "Build rapport and trust in the first minutes",
          "Influential communication that moves decision-makers",
          "Master the pitch so it lands every time",
        ],
        footer: "Covers stages 2–3 of 6",
      },
      {
        id: "03",
        stageLabel: "MODULE 03",
        title: "Objections and Negotiation",
        icon: "Scale",
        image: "/images/curriculum-objections.webp",
        imageAlt: "Executive strategy and negotiation positioning",
        outcome: "Turn “too expensive” into a conversation about value.",
        bullets: [
          "Handle objections effectively and calmly",
          "Negotiation and business-dealing skills",
          "Protect your margins while keeping the relationship",
        ],
        footer: "Covers stage 4 of 6",
      },
      {
        id: "04",
        stageLabel: "MODULE 04",
        title: "Closing, Collections and Follow-up",
        icon: "FileSignature",
        image: "/images/curriculum-closing.webp",
        imageAlt: "Contract signature and deal finalisation",
        outcome: "Close the deal. Collect the payment. Keep the client.",
        bullets: [
          "Advanced closing strategies and techniques",
          "Payment recovery and collection strategies",
          "Post-sale follow-up and CRM discipline",
        ],
        footer: "Covers stages 5–6 of 6",
      },
    ],
    summary: "6 stages of the sale. 4 modules. 1 day.",
  },
  trainer: {
    pill: "Master trainer",
    name: "Iftikhar Ahmed",
    title: "Master Trainer",
    subtitle: "Certified Corporate Trainer | Sales and Marketing Expert | Business Consultant | Keynote Speaker",
    pullQuote: "“I don’t just train businesses. I build and grow them.”",
    principles: [
      {
        numeral: "01",
        title: "Practical before theoretical.",
        description: "Every framework is built for real-world implementation, so you can use it the next morning.",
      },
      {
        numeral: "02",
        title: "Results over rhetoric.",
        description: "Stronger sales performance, stronger teams and measurable business growth.",
      },
      {
        numeral: "03",
        title: "He builds what he teaches.",
        description: "Founder of Eager Packaging Private Limited, Eager Properties Private Limited and Eager Teaching & Trainings Private Limited.",
      },
    ],
    bio: "With 15+ years in sales, marketing and business growth, Iftikhar has delivered training programs across corporate organisations, companies and business environments, as well as schools, colleges and universities.",
    chips: [
      "Corporate and educational sector trainings",
      "Sales system development",
      "Revenue growth strategy",
      "Leadership and team performance",
      "One-on-one coaching",
    ],
    closingLine: "“I help people discover their hidden potential and turn it into real-world results.”",
    ctaText: "Learn directly from him. Reserve a seat.",
    portraitCaption: {
      name: "IFTIKHAR AHMED",
      role: "Certified Corporate Trainer & Business Consultant",
    },
  },
  faq: {
    pill: "Questions",
    h2: "Frequently Asked Questions",
    sub: "Direct answers regarding group enrollments, participation credentials, and what is included in your seat.",
    items: [
      {
        question: "Are group discounts available for corporate teams?",
        answer:
          "Yes. For corporate organizations enrolling 3 or more executives, customized corporate billing, direct bank transfer coordination, and group enrollment privileges are available through our executive booking desk.",
      },
      {
        question: "Will I receive a certificate?",
        answer:
          "[PLACEHOLDER: confirm certificate details] Participants receive an official Certificate of Participation issued by Eager Consulting & Training, signed by Master Trainer Iftikhar Ahmed, documenting completion of the 8-hour executive masterclass curriculum.",
      },
      {
        question: "Will we cover digital B2B pipelines or just face-to-face closing?",
        answer:
          "Both. The curriculum spans modern omni-channel outbound enterprise prospecting, digital pipeline velocity, and multi-stakeholder CRM discipline (Module 01), as well as high-stakes face-to-face boardroom negotiations and contract finalization (Modules 02–04).",
      },
      {
        question: "Are meals and materials included in the 30,000 PKR fee?",
        answer:
          "Yes, entirely. Your 30,000 PKR investment includes comprehensive physical executive workbooks, proprietary deal-closing framework cards, all-day continuous refreshments and espresso, plus a curated 5-star executive networking lunch.",
      },
      {
        question: "What is the seat transfer or replacement policy?",
        answer:
          "Due to strict room limits, reservations cannot be refunded once locked in. However, you may transfer your confirmed seat to another senior executive from your company up to 48 hours before the event starts.",
      },
    ],
  },
  testimonials: {
    pill: "Testimonials",
    h2: "What participants say",
    notice: "[PLACEHOLDER] Replace with real approved testimonials",
    items: [
      {
        id: "t1",
        quote: "[PLACEHOLDER] Replace with real approved testimonials. The sales methodology provided an immediate, structured framework for closing high-ticket enterprise contracts.",
        name: "Enterprise Commercial Lead",
        role: "Director of Business Development",
        company: "Industrial Manufacturing",
        initials: "ED",
        is_approved: true,
      },
      {
        id: "t2",
        quote: "[PLACEHOLDER] Replace with real approved testimonials. Mastered objection handling and value negotiation that protected our commercial margins without stalling client relationships.",
        name: "Managing Partner",
        role: "Managing Director",
        company: "Commercial Packaging",
        initials: "MP",
        is_approved: true,
      },
      {
        id: "t3",
        quote: "[PLACEHOLDER] Replace with real approved testimonials. Real-world, practical sales closing strategies that our revenue leaders implemented the very next Monday.",
        name: "Senior Sales Head",
        role: "Head of Commercial Sales",
        company: "FMCG Distribution",
        initials: "SH",
        is_approved: true,
      },
    ],
  },
  finalCta: {
    h2: "The room holds {seats_total}. Make sure one of them is yours.",
    sub: "PKR 30,000 per seat. Registration closes when the room is full.",
    ctaPrimary: "Reserve my seat",
    ctaWaitlist: "Join the waitlist",
    ctaSecondary: "Message us on WhatsApp",
  },
  footer: {
    brandName: "Eager Consulting & Training",
    brandBlurb: "Result-oriented corporate training, sales system development, and business growth solutions.",
    address: "Karachi, Pakistan",
    email: contactEmail,
    phone: "+92 321 212 3037",
    quickLinks: [
      { label: "Home", href: "https://eagertrainings.com" },
      { label: "About & Team", href: "https://eagertrainings.com/about" },
      { label: "Services", href: "https://eagertrainings.com/services" },
      { label: "Trainings & Events", href: "https://eagertrainings.com/trainings" },
      { label: "Contact & Past Events", href: "https://eagertrainings.com/contact" },
    ],
  },
};

/**
 * Seat scarcity helper: computes seats left from total - taken.
 * Returns null if seats_total is null (hide scarcity).
 */
export function getSeatsLeft(event: EventConfig = content.event): number | null {
  if (event.seats_total == null) return null;
  return Math.max(0, event.seats_total - (event.seats_taken || 0));
}

/**
 * Returns true if the session is sold out.
 */
export function isSoldOut(event: EventConfig = content.event): boolean {
  const left = getSeatsLeft(event);
  return left !== null && left === 0;
}

/**
 * Clean human-readable date display (never renders raw placeholder brackets).
 */
export function getDateDisplay(event: EventConfig = content.event): string {
  if (event.date_start) {
    return event.date_end ? `${event.date_start} – ${event.date_end}` : event.date_start;
  }
  return "To be announced";
}

/**
 * Clean human-readable time display.
 */
export function getTimeDisplay(event: EventConfig = content.event): string {
  if (event.startTime && event.endTime) {
    return `${event.startTime} to ${event.endTime} (${event.duration})`;
  }
  if (event.duration) {
    return `To be announced (${event.duration})`;
  }
  return "To be announced";
}

/**
 * Clean human-readable venue display.
 */
export function getVenueDisplay(event: EventConfig = content.event): string {
  if (event.venue) {
    return `${event.venue}, ${event.city}`;
  }
  return `To be announced, ${event.city}`;
}

/**
 * Helper to build pre-filled WhatsApp click-to-chat links
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const number = content.contact.whatsappNumber;
  const soldOut = isSoldOut();
  const defaultMsg = soldOut ? content.contact.whatsappWaitlistMessage : content.contact.whatsappMessage;
  const msg = encodeURIComponent(customMessage || defaultMsg);
  return `https://wa.me/${number}?text=${msg}`;
}

/**
 * Dev scanner that logs unreplaced bracket placeholders.
 */
export function scanForPlaceholders(data: unknown = content): string[] {
  const placeholders: string[] = [];

  function traverse(obj: unknown, path = '') {
    if (typeof obj === 'string') {
      const matches = obj.match(/\[[A-Z0-9_\s,–:-]+\]/g);
      if (matches) {
        matches.forEach((m) => placeholders.push(`${path}: ${m}`));
      }
    } else if (Array.isArray(obj)) {
      obj.forEach((item, index) => traverse(item, `${path}[${index}]`));
    } else if (obj !== null && typeof obj === 'object') {
      Object.entries(obj).forEach(([key, val]) => traverse(val, path ? `${path}.${key}` : key));
    }
  }

  traverse(data);
  return placeholders;
}
