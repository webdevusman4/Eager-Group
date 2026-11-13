import type { Metadata } from 'next';
import './v3.css';

export const metadata: Metadata = {
  title: 'Iftikhar Ahmed | Eager Group — Corporate Training & Business Consultancy',
  description:
    'Corporate sales training, business consultancy and executive courses led by Iftikhar Ahmed, founder of Eager Group, Karachi.',
};

export default function V3Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className="v3-root min-h-screen antialiased">{children}</div>;
}
