import React from 'react';
import { content } from '@/lib/content-v2';
import { SITE } from '@/lib/site';

/** Renders schema.org structured data for search engines. */
export const JsonLd: React.FC<{ data: Record<string, unknown> }> = ({ data }) => (
  <script
    type="application/ld+json"
    // Content is built from our own static data, never from user input.
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
  />
);

export const founderSchema = {
  '@type': 'Person',
  '@id': `${SITE.url}/about#founder`,
  name: SITE.person,
  jobTitle: 'Founder, Eager Group',
  description: content.profile.roles.join(', '),
  image: `${SITE.url}/images/v2/iftikhar-executive-desk.webp`,
  ...(SITE.linkedin ? { sameAs: [SITE.linkedin] } : {}),
};

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'EducationalOrganization'],
  '@id': `${SITE.url}/#organization`,
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/icons/icon-512.png`,
  email: SITE.email,
  telephone: SITE.phone.replace(/\s+/g, ''),
  address: { '@type': 'PostalAddress', addressLocality: 'Karachi', addressCountry: 'PK' },
  parentOrganization: { '@type': 'Organization', name: 'Eager Group' },
  founder: founderSchema,
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: SITE.phone.replace(/\s+/g, ''),
      email: SITE.email,
      areaServed: 'PK',
      availableLanguage: ['English', 'Urdu'],
    },
  ],
};

export const masterclassSchema = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: content.event.name,
  description:
    'A one-day, in-person course covering the full sale, from prospecting to collecting payment and keeping the client.',
  provider: { '@id': `${SITE.url}/#organization`, '@type': 'Organization', name: SITE.name, sameAs: SITE.url },
  instructor: { '@id': `${SITE.url}/about#founder`, '@type': 'Person', name: SITE.person },
  inLanguage: 'en',
  offers: {
    '@type': 'Offer',
    category: 'Paid',
    price: content.event.price,
    priceCurrency: 'PKR',
    url: `${SITE.url}/programmes/executive-sales-masterclass`,
  },
};
