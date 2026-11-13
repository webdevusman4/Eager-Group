import React from 'react';

interface SectionPillProps {
  children: React.ReactNode;
  variant?: 'onDark' | 'onLight';
  className?: string;
  showDot?: boolean;
}

export const SectionPill: React.FC<SectionPillProps> = ({
  children,
  variant = 'onLight',
  className = '',
  showDot = true,
}) => {
  const baseClasses =
    'inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide select-none border transition-colors';

  const variantClasses =
    variant === 'onDark'
      ? 'bg-[#10ACFC]/15 border-[#10ACFC]/35 text-[#8CD9FF] backdrop-blur-md'
      : 'bg-[#E7F1FD] text-[#004CA8] border-[#C5DCF8]';

  return (
    <div className={`${baseClasses} ${variantClasses} ${className}`}>
      {showDot && (
        <span
          className={`w-1.5 h-1.5 rounded-full ${
            variant === 'onDark' ? 'bg-[#10ACFC]' : 'bg-[#004CA8]'
          }`}
        />
      )}
      <span>{children}</span>
    </div>
  );
};
