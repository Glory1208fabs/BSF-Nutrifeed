import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Benefits from "../components/Benefits";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Benefits />
      <HowItWorks />
      <CTA />
      <Footer />
    </>
  );
};

export default LandingPage;