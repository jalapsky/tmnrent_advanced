import Hero from '@/components/Hero';
import About from '@/components/About';
import Guarantees from '@/components/Guarantees';
import Calculator from '@/components/Calculator';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import HowItWorks from '@/components/HowItWorks';
import Fleet from '@/components/Fleet';
import Testimonials from '@/components/Testimonials';
import Faq from '@/components/Faq';

export default function Home() {
  return (
    <main className="bg-background">
      <Hero />
      <About />
      <HowItWorks />
      <Fleet />
      <Guarantees />
      <Testimonials />
      <Calculator />
      <Faq />
      <ContactForm />
      <Footer />
    </main>
  );
}
