/**
 * Eager Group & Iftikhar Ahmed — Executive Business Profile & Course Platform (/v2)
 * Single Typed Source of Truth uniting:
 *  1. Executive & Entrepreneurial Business Profile (Eager Group — 3 Companies)
 *  2. Corporate Training, Business Consultancy, Stock Market Strategy & Keynote Services
 *  3. Flagship 8-Hour Executive Sales Masterclass + Signature Courses Catalog
 */

export interface EventConfig {
  name: string;
  tagline: string;
  format: string;
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
  whatsappNumber: string;
  whatsappMessage: string;
  whatsappWaitlistMessage: string;
  whatsappConsultMessage: string;
  email: string;
  directEmail: string;
  phoneDisplay: string;
  location: string;
  mainSiteUrl: string;
  social: {
    linkedin?: string;
    facebook?: string;
    youtube?: string;
  };
}

export interface MetricItem {
  value: string;
  unit: string;
  label: string;
}

export interface VentureItem {
  id: string;
  code: string;
  name: string;
  sector: string;
  description: string;
  highlights: string[];
}

export interface ServicePillarItem {
  id: string;
  badge: string;
  title: string;
  summary: string;
  icon: 'Presentation' | 'Briefcase' | 'TrendingUp' | 'Mic2';
  deliverables: string[];
  whatsappInquiry: string;
  ctaLabel: string;
}

export interface TrainingTopicItem {
  title: string;
  category: 'sales' | 'leadership' | 'wealth';
}

export interface CurriculumModule {
  id: string;
  stageLabel: string;
  stagesCovered: string;
  title: string;
  icon: 'Target' | 'Brain' | 'Scale' | 'FileSignature';
  outcome: string;
  bullets: string[];
  deliverable: string;
}

export interface SignatureCourseItem {
  id: string;
  badge: string;
  level: string;
  format: string;
  title: string;
  subtitle: string;
  priceTag: string;
  highlights: string[];
  whatsappInquiry: string;
  ctaLabel: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  alt: string;
  tag: string;
  title: string;
  caption: string;
}

export interface AudienceSegmentItem {
  title: string;
  roleTag: string;
  description: string;
  outcomes: string[];
}

export interface FaqItem {
  category: 'Courses' | 'Corporate & Advisory';
  question: string;
  answer: string;
}

export interface V2SiteContent {
  profile: {
    name: string;
    shortRole: string;
    roles: string[];
    heroBadge: string;
    h1Line1: string;
    h1Highlight: string;
    h1Line2: string;
    mission: string;
    signatureQuote: string;
    closingQuote: string;
    bioParagraphs: string[];
    principles: {
      numeral: string;
      title: string;
      description: string;
    }[];
  };
  metrics: MetricItem[];
  ventures: {
    pill: string;
    heading: string;
    subheading: string;
    bannerQuote: string;
    companies: VentureItem[];
    industries: string[];
  };
  services: {
    pill: string;
    heading: string;
    subheading: string;
    pillars: ServicePillarItem[];
    topics: TrainingTopicItem[];
  };
  event: EventConfig;
  curriculum: {
    pill: string;
    heading: string;
    subheading: string;
    summary: string;
    modules: CurriculumModule[];
  };
  signatureCourses: SignatureCourseItem[];
  impact: {
    pill: string;
    heading: string;
    subheading: string;
    gallery: GalleryItem[];
    audiences: AudienceSegmentItem[];
  };
  faq: {
    pill: string;
    heading: string;
    subheading: string;
    items: FaqItem[];
  };
  contact: ContactConfig;
  footer: {
    brandName: string;
    groupLabel: string;
    blurb: string;
  };
}

const corporateEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'info@eagertrainings.com';

export const content: V2SiteContent = {
  profile: {
    name: 'Iftikhar Ahmed',
    shortRole: 'Founder, Eager Group & Master Corporate Trainer',
    roles: [
      'Certified Corporate Trainer',
      'Sales & Marketing Expert',
      'Business Consultant',
      'Motivational & Keynote Speaker',
      'Stock Market Strategist',
    ],
    heroBadge: 'Eager Group • Corporate Training, Advisory & Executive Courses',
    h1Line1: 'Empowering People.',
    h1Highlight: 'Transforming Businesses.',
    h1Line2: 'Driving Real-World Growth.',
    mission:
      'Over 15 years of building companies, architecting high-performance commercial sales teams, advising enterprise leaders, and equipping professionals and investors with practical systems that deliver measurable results.',
    signatureQuote: '“I don’t just train businesses — I build and grow them.”',
    closingQuote: '“I help people discover their hidden potential and turn it into real-world results.”',
    bioParagraphs: [
      'Iftikhar Ahmed is a results-driven Certified Corporate Trainer, Sales & Marketing Expert, Business Consultant, Stock Market Strategist, and Keynote Speaker with more than 15 years of hands-on executive experience driving commercial growth and developing high-performance teams.',
      'He has delivered high-impact training programs across corporate organizations, commercial enterprises, and SMEs, as well as leading educational institutions including universities, colleges, and schools across Pakistan.',
      'Alongside corporate advisory, he actively leads three private limited companies under Eager Group and provides dedicated one-on-one executive, career, and investment coaching—ensuring every framework he teaches is battle-tested in real business operations.',
    ],
    principles: [
      {
        numeral: '01',
        title: 'Practical, Implementation-First Systems',
        description:
          'Zero abstract fluff. Every sales script, negotiation tactic, and portfolio rule is engineered for immediate execution the very next morning.',
      },
      {
        numeral: '02',
        title: 'Built by an Active Multi-Venture Founder',
        description:
          'Founder of Eager Packaging Pvt. Ltd., Eager Properties Pvt. Ltd., and Eager Teaching & Trainings Pvt. Ltd.—teaching from real P&L ownership.',
      },
      {
        numeral: '03',
        title: 'Measurable Commercial & Career Impact',
        description:
          'Focused on revenue acceleration, margin protection, stronger leadership culture, and clear career direction for both executives and emerging talent.',
      },
    ],
  },

  metrics: [
    {
      value: '15+',
      unit: 'Years',
      label: 'Driving business growth, sales performance & executive team development',
    },
    {
      value: '03',
      unit: 'Companies',
      label: 'Founded & led across packaging, real estate & corporate training',
    },
    {
      value: '04',
      unit: 'Practice Pillars',
      label: 'Corporate training, business consultancy, stock market advisory & coaching',
    },
    {
      value: '14+',
      unit: 'Core Programs',
      label: 'Specialized modules spanning B2B closing, collections, CRM & equity markets',
    },
  ],

  ventures: {
    pill: 'Entrepreneurial Profile • Eager Group',
    heading: 'Backed by Real Commercial Ventures',
    subheading:
      'Alongside his training and advisory practice, Iftikhar Ahmed has founded and scaled multiple operating companies—bringing authentic boardroom and entrepreneurial execution to every client engagement.',
    bannerQuote: 'I DON’T JUST TRAIN BUSINESSES — I BUILD AND GROW THEM.',
    companies: [
      {
        id: 'packaging',
        code: 'VENTURE 01',
        name: 'Eager Packaging Private Limited',
        sector: 'Industrial & Commercial Packaging',
        description:
          'Delivering innovative, commercial-grade packaging solutions, structural branding, and product positioning for FMCG, retail, and manufacturing clients.',
        highlights: [
          'Custom commercial & retail packaging architecture',
          'Brand shelf-impact & product positioning',
          'Reliable B2B manufacturing supply execution',
        ],
      },
      {
        id: 'properties',
        code: 'VENTURE 02',
        name: 'Eager Properties Private Limited',
        sector: 'Real Estate Investment & Development',
        description:
          'Focused on strategic property investment, commercial asset evaluation, and high-growth real estate development initiatives.',
        highlights: [
          'Strategic property investment & capital allocation',
          'Commercial & residential development advisory',
          'Long-term asset value appreciation',
        ],
      },
      {
        id: 'trainings',
        code: 'VENTURE 03',
        name: 'Eager Teaching & Trainings Private Limited',
        sector: 'Corporate Training & Executive Education',
        description:
          'The flagship learning and consultancy arm delivering executive sales masterclasses, corporate capability programs, stock market education, and 1-on-1 coaching.',
        highlights: [
          'Executive open-enrollment cohorts & masterclasses',
          'Customized in-house corporate & university programs',
          'Sales system architecture & leadership coaching',
        ],
      },
    ],
    industries: [
      'Manufacturing',
      'Packaging & FMCG',
      'Banking & Capital Markets',
      'Pharmaceuticals',
      'Real Estate & Construction',
      'Retail & Distribution',
      'IT & Technology',
      'Startups & SMEs',
      'Universities & Colleges',
      'Professional Services',
    ],
  },

  services: {
    pill: 'Advisory & Corporate Solutions',
    heading: 'Four Practice Pillars Built for Measurable Growth',
    subheading:
      'Partner with Eager Consulting & Training for tailored in-house corporate workshops, commercial revenue consultancy, capital market strategy, or keynote engagements.',
    pillars: [
      {
        id: 'corporate-training',
        badge: 'Pillar 01',
        title: 'Corporate & Sales Training Programs',
        summary:
          'High-energy, practical capability programs designed to upgrade commercial closing rates, leadership accountability, and cross-functional team execution.',
        icon: 'Presentation',
        deliverables: [
          'Corporate Sales & Advanced Closing Techniques',
          'Leadership Development & Team Performance Training',
          'Negotiation, Business Dealing & Margin Protection',
          'Communication Skills & Influential Boardroom Pitching',
        ],
        whatsappInquiry:
          'Hi Iftikhar, we would like to inquire about booking an in-house Corporate / Sales Training Program for our team.',
        ctaLabel: 'Request Corporate Training',
      },
      {
        id: 'business-consultancy',
        badge: 'Pillar 02',
        title: 'Business Consultancy & Revenue Systems',
        summary:
          'Hands-on commercial consulting for founders and directors looking to install repeatable sales pipelines, recover stalled receivables, and scale operations.',
        icon: 'Briefcase',
        deliverables: [
          'Revenue Growth Strategy & Business Expansion Planning',
          'End-to-End Sales System & CRM Architecture',
          'Payment Recovery & Commercial Collection Strategies',
          'Packaging, Branding & Product Market Positioning',
        ],
        whatsappInquiry:
          'Hi Iftikhar, I would like to schedule a Business Consultancy conversation regarding our revenue and growth strategy.',
        ctaLabel: 'Book Growth Consultation',
      },
      {
        id: 'stock-market-advisory',
        badge: 'Pillar 03',
        title: 'Stock Market & Wealth Growth Strategy',
        summary:
          'Structured capital market advisory and disciplined portfolio guidance helping individuals and professionals navigate equity investing with clarity.',
        icon: 'TrendingUp',
        deliverables: [
          'Stock Market Investment Advisory (PSX & Equities)',
          'Structured Portfolio Management & Risk Guidance',
          'Financial Planning & Long-Term Wealth Growth Strategy',
          'Beginner-to-Advanced Investor Mentorship',
        ],
        whatsappInquiry:
          'Hi Iftikhar, I would like to learn more about your Stock Market Investment Advisory and Portfolio Guidance.',
        ctaLabel: 'Explore Market Advisory',
      },
      {
        id: 'speaking-coaching',
        badge: 'Pillar 04',
        title: 'Keynote Speaking & 1-on-1 Coaching',
        summary:
          'Transformational keynotes for corporate conferences and universities, alongside confidential 1-on-1 coaching for executives and emerging leaders.',
        icon: 'Mic2',
        deliverables: [
          'Corporate Conferences, Seminars & Annual Kickoffs',
          'University, College & Youth Career Counseling Sessions',
          'Teacher Training & Institutional Faculty Development',
          'Private 1-on-1 Executive, Career & Mindset Coaching',
        ],
        whatsappInquiry:
          'Hi Iftikhar, I would like to inquire about Keynote Speaking / 1-on-1 Coaching availability.',
        ctaLabel: 'Book Speaking / Coaching',
      },
    ],
    topics: [
      { title: 'Corporate Sales & Marketing', category: 'sales' },
      { title: 'Advanced Sales Strategies & Closing Techniques', category: 'sales' },
      { title: 'Negotiation & Business Dealing Skills', category: 'sales' },
      { title: 'Payment Recovery & Collection Strategies', category: 'sales' },
      { title: 'Customer Relationship Management (CRM)', category: 'sales' },
      { title: 'Packaging, Branding & Product Positioning', category: 'sales' },
      { title: 'Business Growth & Expansion Strategies', category: 'sales' },
      { title: 'Leadership & Team Management', category: 'leadership' },
      { title: 'Communication & Influential Persuasion', category: 'leadership' },
      { title: 'Problem Solving & Executive Decision Making', category: 'leadership' },
      { title: 'Entrepreneurship & Business Mindset', category: 'leadership' },
      { title: 'Career Counseling & Student Guidance', category: 'leadership' },
      { title: 'Teacher Training & Educational Development', category: 'leadership' },
      { title: 'Stock Market Trading, Investing & Portfolio Management', category: 'wealth' },
    ],
  },

  event: {
    name: '8-Hour Executive Sales Masterclass',
    tagline: 'Flagship Open-Enrollment Cohort',
    format: 'In-Person Executive Intensive',
    date_start: null,
    date_end: null,
    startTime: null,
    endTime: null,
    duration: '8 Hours (1 Full Day)',
    venue: null,
    city: 'Karachi',
    price: 30000,
    priceLabel: 'PKR 30,000',
    priceUnit: 'per executive seat',
    seats_total: 8,
    seats_taken: 0,
    includes: [
      'Physical Executive Sales Workbook & Deal Architecture Templates',
      'Curated 5-Star Executive Networking Lunch & All-Day Refreshments',
      'Official Certificate of Participation Signed by Iftikhar Ahmed',
    ],
  },

  curriculum: {
    pill: 'Flagship Masterclass • Enroll Now',
    heading: 'Stop Chasing Deals. Start Closing Them.',
    subheading:
      'One room. Eight intensive hours. Master the complete 6-stage commercial selling system—from high-value prospecting and neuro-selling to margin-safe negotiation, collections, and CRM discipline.',
    summary: '6 Stages of the Sale • 4 Practical Modules • Strictly Capped at 8 Executive Seats',
    modules: [
      {
        id: '01',
        stageLabel: 'MODULE 01',
        stagesCovered: 'Stage 1 of 6',
        title: 'Prospecting & High-Intent Lead Qualification',
        icon: 'Target',
        outcome: 'Fill your commercial pipeline with qualified decision-makers—not browsers.',
        bullets: [
          'Identify and prioritize high-margin enterprise accounts worth pursuing',
          'Disqualify low-intent leads early using structured qualification criteria',
          'Install a repeatable weekly outbound & referral prospecting rhythm',
        ],
        deliverable: 'Pipeline Qualification Scorecard',
      },
      {
        id: '02',
        stageLabel: 'MODULE 02',
        stagesCovered: 'Stages 2–3 of 6',
        title: 'Neuro-Selling: Rapport, Trust & Mastering the Pitch',
        icon: 'Brain',
        outcome: 'Understand how executive buyers decide—and structure pitches that command authority.',
        bullets: [
          'Establish executive rapport and boardroom credibility in the first 3 minutes',
          'Influential communication frameworks tailored to C-suite decision-makers',
          'Architect value-led pitches that connect directly to commercial ROI',
        ],
        deliverable: 'Executive Pitch Architecture Blueprint',
      },
      {
        id: '03',
        stageLabel: 'MODULE 03',
        stagesCovered: 'Stage 4 of 6',
        title: 'Handling Objections & Margin-Safe Negotiation',
        icon: 'Scale',
        outcome: 'Reframe “too expensive” into a structured conversation around commercial value.',
        bullets: [
          'Neutralize price, timing, and competitor objections calmly and systematically',
          'Practical B2B negotiation & commercial deal-structuring levers',
          'Protect gross margins without damaging long-term client goodwill',
        ],
        deliverable: 'Objection & Concession Matrix',
      },
      {
        id: '04',
        stageLabel: 'MODULE 04',
        stagesCovered: 'Stages 5–6 of 6',
        title: 'Advanced Closing, Payment Recovery & CRM Follow-Up',
        icon: 'FileSignature',
        outcome: 'Close the contract, collect cash on schedule, and turn buyers into repeat accounts.',
        bullets: [
          'High-conviction closing techniques that eliminate deal-stalling',
          'Disciplined payment recovery and commercial collection strategies',
          'Post-sale follow-up cadences, account expansion & CRM accountability',
        ],
        deliverable: 'Closing & Receivables Execution Playbook',
      },
    ],
  },

  signatureCourses: [
    {
      id: 'stock-market-course',
      badge: 'Signature Program',
      level: 'Beginner to Advanced',
      format: 'Cohort & 1-on-1 Track',
      title: 'Stock Market Trading, Investing & Portfolio Mastery',
      subtitle:
        'A structured, practical program teaching individuals and professionals how to analyze equities, manage downside risk, execute trades, and build resilient long-term portfolios.',
      priceTag: 'Cohort & Custom Enrollment',
      highlights: [
        'Equity market fundamentals, chart structure & valuation basics',
        'Capital allocation, position sizing & disciplined risk management',
        'Building and rebalancing an effective wealth-growth portfolio',
      ],
      whatsappInquiry:
        'Hi Iftikhar, I would like to get details and fee schedule for the Stock Market Trading & Portfolio Mastery course.',
      ctaLabel: 'Get Syllabus & Enroll',
    },
    {
      id: 'collections-negotiation-bootcamp',
      badge: 'Corporate Intensive',
      level: 'Commercial & SME Teams',
      format: 'In-House or Open Workshop',
      title: 'Negotiation, Payment Recovery & CRM Discipline',
      subtitle:
        'Built for commercial teams in manufacturing, FMCG, distribution, and B2B services facing credit cycles, tough procurement buyers, and stalled receivables.',
      priceTag: 'Corporate Team Booking',
      highlights: [
        'Structured payment recovery without losing strategic accounts',
        'Multi-stakeholder commercial negotiation & deal terms',
        'Practical CRM hygiene and post-sale retention workflows',
      ],
      whatsappInquiry:
        'Hi Iftikhar, we are interested in booking the Negotiation, Payment Recovery & CRM workshop for our commercial team.',
      ctaLabel: 'Book for Your Team',
    },
    {
      id: 'executive-coaching-program',
      badge: 'Private Mentorship',
      level: 'Founders & Professionals',
      format: '1-on-1 Tailored Advisory',
      title: '1-on-1 Executive, Business & Career Growth Coaching',
      subtitle:
        'Direct personal mentorship with Iftikhar Ahmed to break through revenue plateaus, sharpen leadership presence, or map out high-leverage career transitions.',
      priceTag: 'Private Application',
      highlights: [
        'Personalized commercial, leadership, or career roadmap',
        'Direct accountability & real-world deal/portfolio review',
        'Confidential sessions scheduled around executive availability',
      ],
      whatsappInquiry:
        'Hi Iftikhar, I would like to apply for 1-on-1 Executive / Career Growth Coaching.',
      ctaLabel: 'Apply for 1-on-1 Coaching',
    },
  ],

  impact: {
    pill: 'Proven Track Record • Live In Action',
    heading: 'Boardrooms, Conferences & Executive Classrooms',
    subheading:
      'From corporate sales intensives and leadership roundtables to university seminars and media appearances—real snapshots from Iftikhar Ahmed’s training and advisory engagements.',
    gallery: [
      {
        id: 'roundtable',
        image: '/images/v2/iftikhar-roundtable.webp',
        alt: 'Iftikhar Ahmed facilitating an interactive executive workshop',
        tag: 'Corporate Workshop',
        title: 'Interactive Executive Facilitation',
        caption: 'Hands-on commercial workshops focused on live deal simulation, active mindset alignment, and immediate Monday-morning execution.',
      },
      {
        id: 'seminar',
        image: '/images/v2/iftikhar-seminar.webp',
        alt: 'Iftikhar Ahmed delivering a team performance seminar',
        tag: 'Leadership & Teams',
        title: 'High-Performance Team Seminars',
        caption: 'Equipping corporate divisions and emerging leaders with goal clarity, collaborative execution, and accountable performance standards.',
      },
      {
        id: 'keynote',
        image: '/images/v2/iftikhar-keynote.webp',
        alt: 'Iftikhar Ahmed speaking at a corporate keynote event',
        tag: 'Keynote Address',
        title: 'Conferences & Institutional Keynotes',
        caption: 'High-conviction keynote talks inspiring commercial resilience, entrepreneurial ownership, and strategic clarity.',
      },
      {
        id: 'podcast',
        image: '/images/v2/iftikhar-podcast.webp',
        alt: 'Iftikhar Ahmed sharing business and market insights on a podcast',
        tag: 'Thought Leadership',
        title: 'Business & Market Strategy Insights',
        caption: 'Unpacking practical lessons on entrepreneurship, sales systems, and disciplined wealth building in Pakistan’s commercial landscape.',
      },
    ],
    audiences: [
      {
        title: 'C-Level Executives, Founders & Business Owners',
        roleTag: 'Enterprise & SME Leadership',
        description:
          'Scaling commercial revenue, protecting gross margins, expanding into new markets, and installing accountable sales leadership.',
        outcomes: ['Executive Sales Masterclass', 'Business Growth Consultancy'],
      },
      {
        title: 'VPs, Heads of Sales & Commercial Teams',
        roleTag: 'Revenue Divisions',
        description:
          'Upgrading B2B prospecting, boardroom pitching, objection handling, and overdue payment collection across sales reps and managers.',
        outcomes: ['In-House Corporate Training', 'CRM & Collections Bootcamp'],
      },
      {
        title: 'Individual Investors & Professionals',
        roleTag: 'Capital & Wealth Builders',
        description:
          'Learning structured stock market investing, technical & fundamental discipline, and risk-managed portfolio growth from beginner to advanced levels.',
        outcomes: ['Stock Market Mastery', 'Portfolio Advisory'],
      },
      {
        title: 'Universities, Faculty & Emerging Talent',
        roleTag: 'Academic & Career Sector',
        description:
          'Empowering university students, educators, and young professionals with career direction, communication mastery, and a competitive mindset.',
        outcomes: ['Youth & University Seminars', '1-on-1 Career Coaching'],
      },
    ],
  },

  faq: {
    pill: 'Direct Answers',
    heading: 'Frequently Asked Questions',
    subheading:
      'Everything you need to know about enrolling in upcoming courses, corporate group bookings, certifications, and advisory engagements.',
    items: [
      {
        category: 'Courses',
        question: 'What is included in the PKR 30,000 Executive Sales Masterclass seat?',
        answer:
          'Your PKR 30,000 enrollment covers the full 8-hour in-person executive intensive led personally by Iftikhar Ahmed, comprehensive physical sales workbooks and deal-closing framework templates, continuous refreshments, a curated 5-star executive networking lunch, and an official signed Certificate of Participation.',
      },
      {
        category: 'Courses',
        question: 'Is the Stock Market Training suitable for complete beginners as well as active traders?',
        answer:
          'Yes. The Stock Market Trading & Portfolio Mastery track progresses step-by-step from market mechanics and foundational equity analysis to advanced trade execution, capital protection, and long-term portfolio management. Both cohort seats and personalized 1-on-1 tracks are available.',
      },
      {
        category: 'Corporate & Advisory',
        question: 'Can we book Iftikhar Ahmed for a customized in-house corporate training at our company?',
        answer:
          'Absolutely. Eager Teaching & Trainings Pvt. Ltd. designs tailored on-site and off-site programs for corporate teams across Karachi and nationwide—covering B2B sales closing, payment recovery, leadership development, CRM implementation, and team performance.',
      },
      {
        category: 'Corporate & Advisory',
        question: 'Are corporate group discounts and company invoicing available for masterclasses?',
        answer:
          'Yes. Organizations nominating 3 or more executives receive priority corporate invoicing, direct bank transfer coordination, and preferred group enrollment terms through our executive desk.',
      },
      {
        category: 'Courses',
        question: 'Do participants receive a certificate, and what is the seat transfer policy?',
        answer:
          'Every participant completing the masterclass receives an official Certificate of Participation issued by Eager Consulting & Training and signed by Master Trainer Iftikhar Ahmed. Because cohorts are strictly capped at 8 seats, confirmed bookings are non-refundable but can be transferred to another executive from your organization up to 48 hours prior to the session.',
      },
    ],
  },

  contact: {
    whatsappNumber: '923212123037',
    whatsappMessage:
      'Hi Iftikhar, I would like to reserve a seat for the 8-Hour Executive Sales Masterclass (PKR 30,000).',
    whatsappWaitlistMessage:
      'Hi Iftikhar, I would like to join the priority waitlist for the next 8-Hour Executive Sales Masterclass cohort.',
    whatsappConsultMessage:
      'Hi Iftikhar, I would like to discuss Corporate Training / Business Consultancy with Eager Group.',
    email: corporateEmail,
    directEmail: 'iftikhar.mkt@gmail.com',
    phoneDisplay: '+92 321 212 3037',
    location: 'Karachi, Pakistan',
    mainSiteUrl: 'https://eagertrainings.com',
    social: {
      linkedin: 'https://www.linkedin.com/in/iftikhar-ahmed',
    },
  },

  footer: {
    brandName: 'Eager Consulting & Training',
    groupLabel: 'An Eager Group Venture • Karachi, Pakistan',
    blurb:
      'Result-oriented corporate training, executive sales masterclasses, stock market education, and business growth consultancy led by Founder & Master Trainer Iftikhar Ahmed.',
  },
};

export function getSeatsLeft(event: EventConfig = content.event): number | null {
  if (event.seats_total == null) return null;
  return Math.max(0, event.seats_total - (event.seats_taken || 0));
}

export function isSoldOut(event: EventConfig = content.event): boolean {
  const left = getSeatsLeft(event);
  return left !== null && left === 0;
}

export function getDateDisplay(event: EventConfig = content.event): string {
  if (event.date_start) {
    return event.date_end ? `${event.date_start} – ${event.date_end}` : event.date_start;
  }
  return 'Next Cohort Date Announced Upon Registration';
}

export function getTimeDisplay(event: EventConfig = content.event): string {
  if (event.startTime && event.endTime) {
    return `${event.startTime} – ${event.endTime} (${event.duration})`;
  }
  return `Full-Day Intensive (${event.duration})`;
}

export function getVenueDisplay(event: EventConfig = content.event): string {
  if (event.venue) {
    return `${event.venue}, ${event.city}`;
  }
  return `5-Star Executive Venue, ${event.city}`;
}

export function getWhatsAppUrl(customMessage?: string): string {
  const number = content.contact.whatsappNumber;
  const soldOut = isSoldOut();
  const defaultMsg = soldOut
    ? content.contact.whatsappWaitlistMessage
    : content.contact.whatsappMessage;
  const messageToEncode =
    customMessage && customMessage.trim().length > 0 ? customMessage : defaultMsg;
  return `https://wa.me/${number}?text=${encodeURIComponent(messageToEncode)}`;
}

export function scanForPlaceholders(data: unknown = content): string[] {
  const placeholders: string[] = [];

  function traverse(obj: unknown, path = '') {
    if (typeof obj === 'string') {
      const matches = obj.match(/\[PLACEHOLDER[^\]]*\]/gi);
      if (matches) {
        matches.forEach((m) => placeholders.push(`${path}: ${m}`));
      }
    } else if (Array.isArray(obj)) {
      obj.forEach((item, index) => traverse(item, `${path}[${index}]`));
    } else if (obj !== null && typeof obj === 'object') {
      Object.entries(obj).forEach(([key, val]) =>
        traverse(val, path ? `${path}.${key}` : key)
      );
    }
  }

  traverse(data);
  return placeholders;
}
