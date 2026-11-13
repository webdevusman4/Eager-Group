import Link from 'next/link';
import { Header } from '@/components/site/Header';
import { Footer } from '@/components/site/Footer';

export default function NotFound() {
  return (
    <div className="site-root min-h-screen">
      <Header />
      <main className="surface-navy flex min-h-[70vh] items-center pb-20 pt-40">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8FC2FF]">Page not found</p>
          <h1 className="font-serif mt-5 text-4xl text-white sm:text-5xl">This page has moved or no longer exists.</h1>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/" className="inline-flex min-h-[48px] items-center justify-center rounded-md bg-white px-6 text-[15px] font-semibold text-[var(--ink)]">
              Go to the homepage
            </Link>
            <Link href="/contact" className="glass-dark inline-flex min-h-[48px] items-center justify-center rounded-md px-6 text-[15px] font-semibold text-white">
              Contact us
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
