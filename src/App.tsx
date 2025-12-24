import Navigation from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Results from './components/Results';
import CaseStudies from './components/CaseStudies';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Fixed Navigation */}
      <Navigation />

      {/* Page Sections */}
      <main className="pt-20">
        <section id="hero">
          <Hero />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="process">
          <Process />
        </section>

        <section id="results">
          <Results />
        </section>

        <section id="case-studies">
          <CaseStudies />
        </section>

        <section id="pricing">
          <Pricing />
        </section>

        <section id="testimonials">
          <Testimonials />
        </section>

        <section id="faq">
          <FAQ />
        </section>

        <section id="contact">
          <Footer />
        </section>
      </main>
    </div>
  );
}

export default App;
