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
  href,
  target,
  rel,
  children,
  className = '',
  showArrow = true,
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 min-h-[44px] select-none shadow-md active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-bright';

  // Token --cta: #C9A24B with --brand-deep: #071F44 text, hover #E6CD85
  const variantClasses = 'bg-cta text-brand-deep hover:bg-cta-hover';

  const combinedClasses = `${baseClasses} ${variantClasses} ${className}`;

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={combinedClasses}>
        <span>{children}</span>
        {showArrow && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      <span>{children}</span>
      {showArrow && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
    </button>
  );
};
