import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Team from "../components/Team";
import Footer from "../components/Footer";
import QuoteForm from "../components/QuoteForm";
import FAQ from "../components/faq";
import ScrollIndicator from "../components/ScrollIndicator";

function HomePage() {
  // Refs for each section to scroll smoothly
  const servicesRef = useRef(null);
  const testimonialsRef = useRef(null);
  const teamRef = useRef(null);
  const faqRef = useRef(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-800">
      <Navbar />

      {/* Hero Section */}
      <div className="relative">
        <Hero>
          <QuoteForm />
        </Hero>
        <ScrollIndicator
          label="Scroll Down"
          onClick={() =>
            servicesRef.current.scrollIntoView({ behavior: "smooth" })
          }
        />
      </div>

      {/* Services Section */}
      <div ref={servicesRef} className="relative">
        <Services />
        <ScrollIndicator
          label="Next"
          onClick={() =>
            testimonialsRef.current.scrollIntoView({ behavior: "smooth" })
          }
        />
      </div>

      {/* Testimonials Section */}
      <div ref={testimonialsRef} className="relative">
        <Testimonials />
        <ScrollIndicator
          label="Keep Going"
          onClick={() =>
            teamRef.current.scrollIntoView({ behavior: "smooth" })
          }
        />
      </div>

      {/* Team Section */}
      <div ref={teamRef} className="relative">
        <Team />
        <ScrollIndicator
          label="Almost There"
          onClick={() =>
            faqRef.current.scrollIntoView({ behavior: "smooth" })
          }
        />
      </div>

      {/* FAQ Section */}
      <div ref={faqRef} className="relative">
        <FAQ />
      
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;
