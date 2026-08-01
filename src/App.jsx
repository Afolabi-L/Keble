import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SecurityProviders from "./components/SecurityProviders";
import "./App.css";
import Showcase from "./components/Showcase";
import TrustSection from "./components/TrustSection";
import PropertyShowcase from "./components/PropertyShowcase";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <SecurityProviders />
      <Showcase />
      <TrustSection />
      <PropertyShowcase />
      <Testimonials />
      <FAQ />
      <Banner />
      <Footer />
    </>
  )
}

export default App;