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
    tone === 'navy' ? 'surface-navy' : tone === 'paper' ? 'bg-[var(--paper)] border-t border-[var(--line)]' : 'bg-white border-t border-[var(--line)]';
  return (
    <section id={id} aria-labelledby={labelledBy} className={`scroll-mt-24 py-20 md:py-28 ${toneClass} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
};

export const Eyebrow: React.FC<{ children: React.ReactNode; onDark?: boolean }> = ({ children, onDark }) => (
  <p
    className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] ${
      onDark ? 'text-[#8FC2FF]' : 'text-[var(--royal)]'
    }`}
  >
    <span className={`h-px w-8 ${onDark ? 'bg-[#8FC2FF]/70' : 'bg-[var(--royal)]'}`} aria-hidden="true" />
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

type ButtonVariant = 'primary' | 'secondary' | 'light' | 'glass';

const BUTTON_STYLES: Record<ButtonVariant, string> = {
  primary: 'bg-[var(--royal)] text-white border border-[var(--royal)] hover:bg-[var(--royal-dark)] shadow-[0_10px_24px_-12px_rgba(0,72,168,0.7)]',
  secondary: 'bg-white text-[var(--ink)] border border-[var(--ink)]/20 hover:border-[var(--ink)]',
  light: 'bg-white text-[var(--ink)] border border-white hover:bg-[#EEF3FB]',
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
  const cls = `group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-md px-6 py-3 text-[15px] font-semibold transition-all duration-200 ${BUTTON_STYLES[variant]} ${className}`;
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
    onDark ? 'text-[#8FC2FF] hover:text-white' : 'text-[var(--royal)] hover:text-[var(--royal-dark)]'
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
    className={`mt-[11px] h-px w-3 shrink-0 ${onDark ? 'bg-[#8FC2FF]' : 'bg-[var(--royal)]'}`}
    aria-hidden="true"
  />
);
