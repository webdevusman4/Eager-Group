import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const Container: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => <div className={`relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;

type Tone = 'white' | 'paper' | 'navy';

export const Section: React.FC<{
  id?: string;
  tone?: Tone;
  labelledBy?: string;
  className?: string;
  children: React.ReactNode;
}> = ({ id, tone = 'white', labelledBy, className = '', children }) => {
  const toneClass =
    tone === 'navy' ? 'surface-navy navy-panel my-2 sm:my-4' : tone === 'paper' ? 'bg-[var(--paper)] border-t border-[var(--line)]' : 'bg-white border-t border-[var(--line)]';
  return (
    <section id={id} aria-labelledby={labelledBy} className={`scroll-mt-24 py-20 md:py-28 ${toneClass} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
};

export const Eyebrow: React.FC<{ children: React.ReactNode; onDark?: boolean }> = ({ children, onDark }) => (
  <p
    className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] ${
      onDark ? 'text-[var(--gold-soft)]' : 'text-[var(--royal)]'
    }`}
  >
    <span className={`h-px w-8 ${onDark ? 'bg-[#E8CF95]/70' : 'bg-[var(--gold)]'}`} aria-hidden="true" />
    {children}
  </p>
);

export const SectionHeading: React.FC<{
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  split?: boolean;
  onDark?: boolean;
}> = ({ id, eyebrow, title, intro, split, onDark }) => (
  <div data-reveal className={split ? 'grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-10' : 'max-w-3xl'}>
    <div className={split ? 'lg:col-span-6' : ''}>
      <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow>
      <h2
        id={id}
        className={`font-serif mt-5 text-3xl leading-[1.15] sm:text-4xl lg:text-[2.75rem] ${
          onDark ? 'text-white' : 'text-[var(--ink)]'
        }`}
      >
        {title}
      </h2>
    </div>
    {intro && (
      <p
        className={`text-base leading-relaxed sm:text-lg ${onDark ? 'text-white/75' : 'text-[var(--muted)]'} ${
          split ? 'lg:col-span-5 lg:col-start-8' : 'mt-5'
        }`}
      >
        {intro}
      </p>
    )}
  </div>
);

type ButtonVariant = 'primary' | 'gold' | 'secondary' | 'light' | 'glass';

/** primary = navy pill (on light), gold = champagne pill (on navy). */
const BUTTON_STYLES: Record<ButtonVariant, string> = {
  primary: 'bg-[var(--navy)] text-white border border-[var(--navy)] hover:bg-[var(--navy-mid)] shadow-[0_12px_26px_-14px_rgba(10,18,96,0.8)]',
  gold: 'bg-[var(--champagne)] text-[var(--navy)] border border-[var(--champagne)] hover:bg-[var(--champagne-hover)] shadow-[0_12px_28px_-14px_rgba(201,162,75,0.7)]',
  secondary: 'bg-white text-[var(--ink)] border border-[#0C1650]/20 hover:border-[var(--ink)]',
  light: 'bg-white text-[var(--navy)] border border-white hover:bg-[var(--paper)]',
  glass: 'glass-dark text-white hover:bg-white/15',
};

export const Button: React.FC<{
  href: string;
  variant?: ButtonVariant;
  external?: boolean;
  arrow?: boolean;
  className?: string;
  children: React.ReactNode;
}> = ({ href, variant = 'primary', external, arrow, className = '', children }) => {
  const cls = `group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full px-7 py-3 text-[15px] font-semibold transition-all duration-200 ${BUTTON_STYLES[variant]} ${className}`;
  const inner = (
    <>
      {children}
      {arrow && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />}
    </>
  );
  if (external || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
    return (
      <a href={href} className={cls} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
};

export const TextLink: React.FC<{
  href: string;
  external?: boolean;
  onDark?: boolean;
  children: React.ReactNode;
}> = ({ href, external, onDark, children }) => {
  const cls = `group inline-flex items-center gap-1.5 text-sm font-semibold ${
    onDark ? 'text-[var(--gold-soft)] hover:text-white' : 'text-[var(--royal)] hover:text-[var(--royal-dark)]'
  }`;
  const inner = (
    <>
      <span className="underline-offset-4 group-hover:underline">{children}</span>
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
    </>
  );
  return external || href.startsWith('http') ? (
    <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
      {inner}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
};

/** Short horizontal rule used as a list bullet. */
export const Dash: React.FC<{ onDark?: boolean }> = ({ onDark }) => (
  <span
    className={`mt-[11px] h-px w-3 shrink-0 ${onDark ? 'bg-[var(--gold-soft)]' : 'bg-[var(--royal)]'}`}
    aria-hidden="true"
  />
);
