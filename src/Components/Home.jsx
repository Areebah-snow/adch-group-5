import Features from "./Features";
import Footer from "./Footer";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import Navbar from "./Navbar";
import Testimonials from "./Testimonial";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials/>
      <Footer />
    </div>
  );
};

export default Home;
