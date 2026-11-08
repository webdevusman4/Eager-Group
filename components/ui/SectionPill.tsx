import React from 'react';

interface SectionPillProps {
  children: React.ReactNode;
  variant?: 'onDark' | 'onLight';
  className?: string;
  dotColor?: 'bright' | 'brand';
}

export const SectionPill: React.FC<SectionPillProps> = ({
  children,
  variant = 'onLight',
  className = '',
  dotColor,
}) => {
  // Consistent style, sentence case friendly, minimum 12px (text-xs)
  const baseClasses =
    'inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide select-none border transition-colors';

  const variantClasses =
    variant === 'onDark'
      ? 'bg-white/10 border-white/20 text-white backdrop-blur-md'
      : 'bg-tint text-brand border-line';

  return (
    <div className={`${baseClasses} ${variantClasses} ${className}`}>
      {dotColor && (
        <span
          className={`w-1.5 h-1.5 rounded-full ${
            dotColor === 'bright' ? 'bg-brand-bright' : 'bg-brand'
          }`}
        />
      )}
      <span>{children}</span>
    </div>
  );
};
