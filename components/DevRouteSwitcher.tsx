'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const VERSIONS = [
  { label: 'New site (/)', href: '/', match: (p: string) => !p.startsWith('/v1') && !p.startsWith('/v2') },
  { label: 'Original (/v1)', href: '/v1', match: (p: string) => p.startsWith('/v1') },
  { label: 'Arena (/v2)', href: '/v2', match: (p: string) => p.startsWith('/v2') },
];

/** Development-only toggle between the site versions. Renders nothing in production. */
export const DevRouteSwitcher: React.FC = () => {
  const pathname = usePathname() ?? '/';
  if (process.env.NODE_ENV === 'production') return null;

  return (
    <div
      aria-label="Preview version switcher"
      className="fixed bottom-4 left-4 z-[60] inline-flex items-center gap-1 rounded-full border border-white/20 bg-[#081830]/90 p-1 text-[11px] font-semibold shadow-xl backdrop-blur"
    >
      {VERSIONS.map((v) => (
        <Link
          key={v.href}
          href={v.href}
          className={`rounded-full px-3 py-1.5 transition-colors ${
            v.match(pathname) ? 'bg-white text-[#0B1F3F]' : 'text-white/75 hover:text-white'
          }`}
        >
          {v.label}
        </Link>
      ))}
    </div>
  );
};
