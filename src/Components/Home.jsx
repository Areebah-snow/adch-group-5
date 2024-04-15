import Features from "./Features";
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
    </div>
  );
};

export default Home;
