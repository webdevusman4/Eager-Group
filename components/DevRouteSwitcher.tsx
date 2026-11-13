'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const DevRouteSwitcher: React.FC = () => {
  const pathname = usePathname();

  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  const isV2 = pathname?.startsWith('/v2');

  return (
    <div
      aria-label="Preview version switcher"
      className="fixed bottom-20 left-4 md:bottom-6 md:left-5 z-50 inline-flex items-center gap-1 rounded-full p-1.5 bg-[#041A3B]/95 backdrop-blur-xl border border-[#10ACFC]/45 text-xs font-semibold shadow-2xl"
    >
      <Link
        href="/"
        className={`rounded-full px-3.5 py-1.5 transition-all ${
          !isV2
            ? 'bg-[#10ACFC] text-[#041A3B] font-bold shadow-sm'
            : 'text-white/75 hover:text-white'
        }`}
      >
        Original (/)
      </Link>
      <Link
        href="/v2"
        className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 transition-all ${
          isV2
            ? 'bg-[#10ACFC] text-[#041A3B] font-bold shadow-sm'
            : 'text-white hover:bg-white/10'
        }`}
      >
        {!isV2 && <span className="w-2 h-2 rounded-full bg-[#10ACFC] animate-pulse" />}
        <span>Redesigned (/v2)</span>
      </Link>
    </div>
  );
};
