'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { scanForPlaceholders } from '@/lib/content';

export const PlaceholderScanner = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname?.startsWith('/v2')) return;
    if (process.env.NODE_ENV !== 'production') {
      const placeholders = scanForPlaceholders();
      if (placeholders.length > 0) {
        console.warn(
          `[Eager Masterclass] Client action required: ${placeholders.length} unreplaced bracket placeholder(s) detected in content configuration:\n`,
          placeholders.map((p, i) => `  ${i + 1}. ${p}`).join('\n')
        );
      }
    }
  }, [pathname]);

  return null;
};
