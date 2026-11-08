import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { PlaceholderScanner } from '@/components/PlaceholderScanner';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://eagertrainings.com'),
  title: '8-Hour Executive Sales Masterclass | Iftikhar Ahmed | Eager Consulting & Training',
  description:
    'A practical 8-hour sales masterclass for executives and business owners, led by Iftikhar Ahmed. PKR 30,000 per seat. Limited seats.',
  openGraph: {
    title: '8-Hour Executive Sales Masterclass | Iftikhar Ahmed',
    description:
      'A practical 8-hour sales masterclass for executives and business owners, led by Iftikhar Ahmed. PKR 30,000 per seat. Limited seats.',
    images: [
      {
        url: '/images/og-image.webp',
        width: 1200,
        height: 630,
        alt: '8-Hour Executive Sales Masterclass by Iftikhar Ahmed',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '8-Hour Executive Sales Masterclass | Iftikhar Ahmed',
    description:
      'A practical 8-hour sales masterclass for executives and business owners, led by Iftikhar Ahmed. PKR 30,000 per seat. Limited seats.',
    images: ['/images/og-image.webp'],
  },
};

export const viewport: Viewport = {
  themeColor: '#000080',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-ice-50 font-sans text-navy-ink antialiased selection:bg-sand-300 selection:text-navy">
        <PlaceholderScanner />
        {children}
      </body>
    </html>
  );
}
