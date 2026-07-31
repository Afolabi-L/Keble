import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SecurityProviders from "./components/SecurityProviders";
import "./App.css";
import OwnershipShowcase from "./components/OwnershipShowcase";
import TrustSection from "./components/TrustSection";
import PropertyCard from "./components/PropertyCard";
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
      <OwnershipShowcase />
      <TrustSection />
      <PropertyCard />
      <Testimonials />
      <FAQ />
      <Banner />
      <Footer />
    </>
  )
}

export default App;