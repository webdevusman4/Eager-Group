import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Container, Eyebrow } from './ui';

interface Crumb {
  label: string;
  href?: string;
}

/** Dark banner at the top of every inner page, with breadcrumbs. */
export const PageHero: React.FC<{
  eyebrow: string;
  title: string;
  intro?: string;
  crumbs?: Crumb[];
  children?: React.ReactNode;
}> = ({ eyebrow, title, intro, crumbs = [], children }) => (
  <section className="surface-navy pb-16 pt-32 md:pb-20 md:pt-40">
    <Container>
      <nav aria-label="Breadcrumb" className="mb-10">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/60">
          <li>
            <Link href="/" className="hover:text-white">
              Home
            </Link>
          </li>
          {crumbs.map((c) => (
            <li key={c.label} className="flex items-center gap-1.5">
              <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              {c.href ? (
                <Link href={c.href} className="hover:text-white">
                  {c.label}
                </Link>
              ) : (
                <span aria-current="page" className="text-white/85">
                  {c.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <div data-reveal className="max-w-3xl">
        <Eyebrow onDark>{eyebrow}</Eyebrow>
        <h1 className="font-serif mt-5 text-[clamp(2.2rem,4.6vw,3.6rem)] leading-[1.1] text-white">{title}</h1>
        {intro && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">{intro}</p>}
      </div>
      {children}
    </Container>
  </section>
);
