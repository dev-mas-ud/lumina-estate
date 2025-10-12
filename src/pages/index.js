import About from "@/components/app/landing/About";
import FeaturedProperties from "@/components/app/landing/FeaturedPropertis";
import Footer from "@/components/app/landing/Footer";
import Hero from "@/components/app/landing/Hero";
import NavHeader from "@/components/app/landing/nav/NavHeader";
import Contact from "@/components/app/landing/Contact";
import Testimonials from "@/components/app/landing/Testimonials";
import WhyUs from "@/components/app/landing/WhyUs";

export default function App() {
  return (
    <>
      <NavHeader />
      <Hero />
      <About />
      <WhyUs />
      <FeaturedProperties />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
