
import { SEOHead } from "@/components/SEOHead";
import { Navbar } from "@/components/Navbar";
import { Products } from "@/components/Products";
import { ProductCarousel } from "@/components/ProductCarousel";
import { InstagramSection } from "@/components/InstagramSection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Catalogo = () => {
  return (
    <>
      <SEOHead />
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="pt-16">
          <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Catálogo de Produtos
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Explore nossa coleção completa de souvenirs e presentes personalizados
              </p>
            </div>
          </section>
          
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

export default Catalogo;
