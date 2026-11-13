import React from 'react';
import { ArrowRight } from 'lucide-react';

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'onDark' | 'onLight';
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
  className?: string;
  showArrow?: boolean;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  variant = 'onLight',
  href,
  target,
  rel,
  children,
  className = '',
  showArrow = true,
  ...props
}) => {
  const baseClasses =
    'group inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-semibold tracking-wide min-h-[46px] select-none active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10ACFC] focus-visible:ring-offset-2';

  const variantClasses =
    variant === 'onDark' ? 'v2-btn-sky' : 'v2-btn-royal';

  const combinedClasses = `${baseClasses} ${variantClasses} ${className}`;

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={combinedClasses}>
        <span>{children}</span>
        {showArrow && (
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      <span>{children}</span>
      {showArrow && (
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </button>
  );
};
