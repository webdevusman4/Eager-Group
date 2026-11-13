import React from 'react';
import { Nav } from '@/components/v2/sections/Nav';
import { Hero } from '@/components/v2/sections/Hero';
import { ExecutiveProfile } from '@/components/v2/sections/ExecutiveProfile';
import { EagerVentures } from '@/components/v2/sections/EagerVentures';
import { CoreServices } from '@/components/v2/sections/CoreServices';
import { CoursesShowcase } from '@/components/v2/sections/CoursesShowcase';
import { ImpactGallery } from '@/components/v2/sections/ImpactGallery';
import { ExecutiveFaq } from '@/components/v2/sections/ExecutiveFaq';
import { FinalCta } from '@/components/v2/sections/FinalCta';
import { Footer } from '@/components/v2/sections/Footer';
import { WhatsAppFab } from '@/components/v2/ui/WhatsAppFab';
import { StickyMobileCta } from '@/components/v2/ui/StickyMobileCta';

export default function HomeV2() {
  return (
    <main className="relative min-h-screen bg-white">
      {/* 1. Logo-Aligned Floating Glass Navigation */}
      <Nav />

      {/* 2. Executive Authority + Course Spotlight Hero & 4-Metric Bar */}
      <Hero />

      {/* 3. Professional Profile & Interactive 14-Topic Expertise Explorer */}
      <ExecutiveProfile />

      {/* 4. Entrepreneurial Profile — Eager Group (3 Ventures + Industries) */}
      <EagerVentures />

      {/* 5. Four Advisory & Corporate Training Practice Pillars */}
      <CoreServices />

      {/* 6. Courses Hub — Flagship 8-Hr Sales Masterclass + Signature Courses */}
      <CoursesShowcase />

      {/* 7. Real Live Workshop/Keynote Gallery & Audience Pathways */}
      <ImpactGallery />

      {/* 8. Frequently Asked Questions (Courses & Corporate Bookings) */}
      <ExecutiveFaq />

      {/* 9. Dual-Path Conversion Banner & Eager Group Footer */}
      <FinalCta />
      <Footer />

      {/* Floating Actions */}
      <WhatsAppFab />
      <StickyMobileCta />
    </main>
  );
}
