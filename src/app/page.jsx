import Hero from './components/server/Hero';
import Features from './components/server/Features';
import Pricing from './components/server/Pricing';
import Testimonials from './components/server/Testimonials';
import FAQs from './components/server/FAQs';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQs />
    </>
  );
}
