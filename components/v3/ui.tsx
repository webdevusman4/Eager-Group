import React from 'react';

export const Container: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;

interface SectionProps {
  id?: string;
  tone?: 'white' | 'paper';
  children: React.ReactNode;
  labelledBy?: string;
}

export const Section: React.FC<SectionProps> = ({ id, tone = 'white', children, labelledBy }) => (
  <section
    id={id}
    aria-labelledby={labelledBy}
    className={`scroll-mt-20 border-t border-[var(--line)] py-20 md:py-28 ${
      tone === 'paper' ? 'bg-[var(--paper)]' : 'bg-white'
    }`}
  >
    <Container>{children}</Container>
  </section>
);

interface SectionHeadingProps {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  align?: 'left' | 'split';
}

/** Eyebrow + serif title. "split" puts the intro beside the title on large screens. */
export const SectionHeading: React.FC<SectionHeadingProps> = ({ id, eyebrow, title, intro, align = 'left' }) => (
  <div className={align === 'split' ? 'grid gap-6 lg:grid-cols-12 lg:gap-10 lg:items-end' : 'max-w-3xl'}>
    <div className={align === 'split' ? 'lg:col-span-6' : ''}>
      <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--royal)]">
        <span className="h-px w-8 bg-[var(--royal)]" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 id={id} className="font-serif mt-5 text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.15] text-[var(--ink)]">
        {title}
      </h2>
    </div>
    {intro && (
      <p
        className={`text-base sm:text-lg leading-relaxed text-[var(--muted)] ${
          align === 'split' ? 'lg:col-span-5 lg:col-start-8' : 'mt-5'
        }`}
      >
        {intro}
      </p>
    )}
  </div>
);

type ButtonVariant = 'primary' | 'secondary' | 'light' | 'outlineLight';

const buttonStyles: Record<ButtonVariant, string> = {
  primary: 'bg-[var(--royal)] text-white hover:bg-[var(--royal-dark)] border border-[var(--royal)]',
  secondary: 'bg-white text-[var(--ink)] border border-[var(--ink)]/25 hover:border-[var(--ink)]',
  light: 'bg-white text-[var(--ink)] border border-white hover:bg-[var(--paper)]',
  outlineLight: 'bg-transparent text-white border border-white/40 hover:border-white',
};

interface ButtonProps {
  href: string;
  variant?: ButtonVariant;
  external?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ href, variant = 'primary', external, children, className = '' }) => (
  <a
    href={href}
    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    className={`inline-flex min-h-[48px] items-center justify-center gap-2 rounded px-6 py-3 text-[15px] font-semibold transition-colors ${buttonStyles[variant]} ${className}`}
  >
    {children}
  </a>
);

/** Plain underlined text link with an arrow, used inside cards and lists. */
export const TextLink: React.FC<{ href: string; external?: boolean; children: React.ReactNode }> = ({
  href,
  external,
  children,
}) => (
  <a
    href={href}
    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--royal)] underline decoration-[var(--royal)]/30 underline-offset-4 hover:decoration-[var(--royal)]"
  >
    {children}
    <span aria-hidden="true">→</span>
  </a>
);
