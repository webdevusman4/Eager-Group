import React from 'react';
import { Nav } from '@/components/sections/Nav';
import { Hero } from '@/components/sections/Hero';
import { StatsBanner } from '@/components/sections/StatsBanner';
import { TrustWall } from '@/components/sections/TrustWall';
import { ConversionCard } from '@/components/sections/ConversionCard';
import { QualifierGrid } from '@/components/sections/QualifierGrid';
import { Curriculum } from '@/components/sections/Curriculum';
import { TrainerTeaser } from '@/components/sections/TrainerTeaser';
import { ExecutiveFaq } from '@/components/sections/ExecutiveFaq';
import { Testimonials } from '@/components/sections/Testimonials';
import { FinalCta } from '@/components/sections/FinalCta';
import { Footer } from '@/components/sections/Footer';
import { WhatsAppFab } from '@/components/ui/WhatsAppFab';
import { StickyMobileCta } from '@/components/ui/StickyMobileCta';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-ice-50">
      {/* 3.0 Floating Arctic Glass Navigation */}
      <Nav />

      {/* 3.1 Hero Section (Navy, 50/50 split, offset framed portrait) */}
      <Hero />

      {/* 3.2 Stats Banner (3 Frosted Arctic Cards straddling Hero edge) */}
      <StatsBanner />

      {/* Psychological Add-on 1: Enterprise Trust Wall (After Hero / Stats) */}
      <TrustWall />

      {/* 3.3 Conversion Card (Ice Light Section, Refraction Orbs, Urgency Pill) */}
      <ConversionCard />

      {/* Psychological Add-on 2: Audience Qualifier Grid (After Conversion Card) */}
      <QualifierGrid />

      {/* 3.4 Curriculum Grid (Navy Section, Elevated White Module Cards) */}
      <Curriculum />

      {/* 3.5 Trainer Teaser (Ice Light Section, Large Portrait + Smoked Bio Panel) */}
      <TrainerTeaser />

      {/* Psychological Add-on 3: The Executive FAQ (Before Testimonials) */}
      <ExecutiveFaq />

      {/* 3.6 Testimonials (Navy Section, Elevated White Cards, Monogram Avatars) */}
      <Testimonials />

      {/* 3.7 Final CTA Card (Light Ice Section with Centered Navy Glass Card) */}
      <FinalCta />

      {/* 3.8 Footer (Navy Night Section with Brand & Contact Details) */}
      <Footer />

      {/* Universal Floating WhatsApp FAB */}
      <WhatsAppFab />

      {/* Mobile-Only Sticky Bottom CTA Pill Bar */}
      <StickyMobileCta />
    </main>
  );
}
