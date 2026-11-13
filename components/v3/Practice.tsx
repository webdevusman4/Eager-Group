import React from 'react';
import Image from 'next/image';
import { Section, SectionHeading } from './ui';

const PHOTOS = [
  {
    src: '/images/v2/iftikhar-roundtable.webp',
    alt: 'Iftikhar Ahmed leading a workshop with a corporate team',
    title: 'Corporate workshops',
    caption: 'Practical sessions built around the team’s own accounts and targets.',
  },
  {
    src: '/images/v2/iftikhar-seminar.webp',
    alt: 'Iftikhar Ahmed presenting to a group of professionals',
    title: 'Seminars and university talks',
    caption: 'Leadership, career and communication sessions for teams and students.',
  },
  {
    src: '/images/v2/iftikhar-podcast.webp',
    alt: 'Iftikhar Ahmed speaking on a business podcast',
    title: 'Media and commentary',
    caption: 'Conversations on entrepreneurship, sales and investing in Pakistan.',
  },
];

export const Practice: React.FC = () => (
  <Section id="practice" tone="paper" labelledBy="v3-practice-title">
    <SectionHeading
      id="v3-practice-title"
      eyebrow="In practice"
      title="Workshops, seminars and talks"
      intro="Training is delivered on site, at partner venues and at universities, for groups of every size."
      align="split"
    />

    <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
      {PHOTOS.map((p) => (
        <figure key={p.src}>
          <Image
            src={p.src}
            alt={p.alt}
            width={721}
            height={687}
            sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
            className="aspect-[4/3] h-auto w-full rounded-md object-cover"
          />
          <figcaption className="mt-5">
            <h3 className="font-semibold text-[var(--ink)]">{p.title}</h3>
            <p className="mt-1.5 text-[15px] leading-relaxed text-[var(--muted)]">{p.caption}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  </Section>
);
