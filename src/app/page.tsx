import Hero from '@/components/Hero';
import About from '@/components/About';
import Guarantees from '@/components/Guarantees';
import Calculator from '@/components/Calculator';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Guarantees />
      <Calculator />
      <ContactForm />
      <Footer />
    </main>
  );
}
