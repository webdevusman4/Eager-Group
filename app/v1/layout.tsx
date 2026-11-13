import type { Metadata } from 'next';
import { PlaceholderScanner } from '@/components/PlaceholderScanner';

export const metadata: Metadata = {
  title: { absolute: '8-Hour Executive Sales Masterclass | Iftikhar Ahmed | Eager Consulting & Training' },
  description:
    'A practical 8-hour sales masterclass for executives and business owners, led by Iftikhar Ahmed. PKR 30,000 per seat. Limited seats.',
  robots: { index: false },
};

export default function V1Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <PlaceholderScanner />
      {children}
    </>
  );
}
