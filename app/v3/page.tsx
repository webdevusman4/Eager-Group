import { Nav } from '@/components/v3/Nav';
import { Hero } from '@/components/v3/Hero';
import { About } from '@/components/v3/About';
import { Services } from '@/components/v3/Services';
import { Programmes } from '@/components/v3/Programmes';
import { Group } from '@/components/v3/Group';
import { Practice } from '@/components/v3/Practice';
import { Clients } from '@/components/v3/Clients';
import { Faq } from '@/components/v3/Faq';
import { Contact } from '@/components/v3/Contact';
import { Footer } from '@/components/v3/Footer';

export default function HomeV3() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Programmes />
        <Group />
        <Practice />
        <Clients />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
