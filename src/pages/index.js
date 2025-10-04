import About from "@/components/app/landing/About";
import FeaturedProperties from "@/components/app/landing/FeaturedPropertis";
import Hero from "@/components/app/landing/Hero";
import NavHeader from "@/components/app/landing/nav/NavHeader";
import WhyUs from "@/components/app/landing/WhyUs";

export default function App() {
  return (
    <>
      <NavHeader />
      <Hero />
      <About />
      <WhyUs />
      <FeaturedProperties />
    </>
  );
}
