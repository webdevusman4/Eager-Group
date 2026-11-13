import React from 'react';

interface SecondaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'onDark' | 'onLight';
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

export const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  variant = 'onDark',
  href,
  target,
  rel,
  children,
  className = '',
  icon,
  ...props
}) => {
  const baseClasses =
    'group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 min-h-[46px] select-none active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10ACFC]';

  const variantClasses =
    variant === 'onDark'
      ? 'bg-white/10 border border-white/25 text-white backdrop-blur-md hover:bg-white/20 hover:border-[#10ACFC]/60'
      : 'bg-white border border-[#004CA8]/30 text-[#004CA8] hover:bg-[#E7F1FD] hover:border-[#004CA8] shadow-sm';

  const combinedClasses = `${baseClasses} ${variantClasses} ${className}`;

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={combinedClasses}>
        {icon}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {icon}
      <span>{children}</span>
    </button>
  );
};
