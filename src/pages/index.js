import About from "@/components/app/landing/About";
import FeaturedProperties from "@/components/app/landing/FeaturedPropertis";
import Footer from "@/components/app/landing/Footer";
import Hero from "@/components/app/landing/Hero";
import NavHeader from "@/components/app/landing/nav/NavHeader";
import Newsletter from "@/components/app/landing/Newsletter";
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
      <Newsletter />
      <Footer />
    </>
  );
}
