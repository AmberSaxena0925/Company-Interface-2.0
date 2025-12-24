import Navigation from './components/Navigation';
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
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navigation />
      <Hero />
      <Services />
      <Process />
      <Results />
      <CaseStudies />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
