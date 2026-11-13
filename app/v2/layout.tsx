import type { Metadata } from 'next';
import './v2.css';
import { PlaceholderScanner } from '@/components/v2/PlaceholderScanner';

export const metadata: Metadata = {
  title: 'Iftikhar Ahmed | Eager Group — Corporate Training, Business Consultancy & Executive Courses',
  description:
    'Official business profile, corporate training solutions, and flagship executive courses by Iftikhar Ahmed — Certified Corporate Trainer, Sales & Marketing Expert, Business Consultant & Founder of Eager Group.',
};

export default function V2Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="v2-root min-h-screen antialiased">
      <PlaceholderScanner />
      {children}
    </div>
  );
}
