import Navbar from '@/components/Navbar';
import StoryExperience from '@/components/story/StoryExperience';
import Process from '@/components/Process';
import Works from '@/components/Works';
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
      <StoryExperience />
      <Process />
      <Works />
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
