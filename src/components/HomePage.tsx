import Navbar from '@/components/Navbar';
import CinematicExperience from '@/components/cinematic/CinematicExperience';
import Benefits from '@/components/Benefits';
import Features from '@/components/Features';
import Tools from '@/components/Tools';
import Team from '@/components/Team';
import Stats from '@/components/Stats';
import Awards from '@/components/Awards';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { homepageFaqs } from '@/data/faqs';

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <CinematicExperience />
      <Benefits />
      <Features />
      <Tools />
      <Team />
      <Stats />
      <Awards />
      <Testimonials />
      <Pricing />
      <FAQ items={homepageFaqs} />
      <Contact />
      <Footer />
    </main>
  );
}
