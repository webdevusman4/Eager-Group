import { Header } from '@/components/site/Header';
import { Footer } from '@/components/site/Footer';
import { RevealObserver } from '@/components/site/RevealObserver';
import { JsonLd, organizationSchema } from '@/components/site/JsonLd';

export default function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="site-root min-h-screen">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[var(--ink)]"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">{children}</main>
      <Footer />
      <RevealObserver />
      <JsonLd data={organizationSchema} />
    </div>
  );
}
