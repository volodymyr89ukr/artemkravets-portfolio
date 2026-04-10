import { About } from '@/components/About';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { PortfolioGrid } from '@/components/PortfolioGrid';
import { Services } from '@/components/Services';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PortfolioGrid />
        <Services />
        <About />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
