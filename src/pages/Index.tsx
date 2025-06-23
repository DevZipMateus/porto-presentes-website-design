
import { SEOHead } from "@/components/SEOHead";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Products } from "@/components/Products";
import { ProductCarousel } from "@/components/ProductCarousel";
import { InstagramSection } from "@/components/InstagramSection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <>
      <SEOHead />
      <div className="min-h-screen bg-white overflow-x-hidden">
        <Navbar />
        <main className="relative">
          <Hero />
          <About />
          <Services />
          <ProductCarousel />
          <Products />
          <InstagramSection />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Index;
