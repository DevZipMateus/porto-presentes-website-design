
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Catalogo = () => {
  const handleContactClick = () => {
    const message = "Olá! Vi um produto no catálogo e gostaria de mais informações.";
    const whatsappUrl = `https://wa.me/5547996773591?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const products = [
    {
      id: 1,
      image: "/lovable-uploads/f906c12c-51ae-4f47-b01c-794ab0aafacb.png",
      title: "Canecas Temáticas - Linha Preta"
    },
    {
      id: 2,
      image: "/lovable-uploads/4f87b2d9-17b0-4945-b7bc-d4eb3765e624.png",
      title: "Canecas Temáticas - Linha Amarela"
    },
    {
      id: 3,
      image: "/lovable-uploads/ea13aaee-2b8d-4afa-a93a-c04148b14593.png",
      title: "Canecas Temáticas - Linha Azul/Rosa"
    },
    {
      id: 4,
      image: "/lovable-uploads/9448d98f-d3df-4354-bcac-8fbdc32059d1.png",
      title: "Canecas Regionais - Linha Marrom"
    },
    {
      id: 5,
      image: "/lovable-uploads/da596c2c-aff5-4ccf-8450-d9120c93c304.png",
      title: "Canecas Regionais - Linha Preta"
    },
    {
      id: 6,
      image: "/lovable-uploads/9c4e46e8-e1ff-47bb-9331-db6f2b82682d.png",
      title: "Canecas Regionais - Linha Branca"
    },
    {
      id: 7,
      image: "/lovable-uploads/92de80f1-e30b-47c5-9c4e-4e3e88df5258.png",
      title: "Canecas Regionais - Linha Amarela"
    },
    {
      id: 8,
      image: "/lovable-uploads/4d0e73a8-45a4-4964-b484-0e88d471ef59.png",
      title: "Canecas Regionais - Linha Azul"
    },
    {
      id: 9,
      image: "/lovable-uploads/49c7ffd2-e24c-4011-a20b-45ef712bc3fe.png",
      title: "Canecas Regionais - Linha Rosa"
    },
    {
      id: 10,
      image: "/lovable-uploads/b0c7d8c2-0d96-490c-a637-4a4f249fa5da.png",
      title: "Canecas Regionais - Linha Verde"
    },
    {
      id: 11,
      image: "/lovable-uploads/af2c9f18-6627-4e02-aa0b-02ae8a7d07f0.png",
      title: "Canecas Temáticas Rosa - Cristo Redentor, Bondinho e Praia"
    },
    {
      id: 12,
      image: "/lovable-uploads/af874fcf-1d94-434c-b9f0-a1093824eb74.png",
      title: "Canecas Regionais Transparentes - Diferentes Cores"
    },
    {
      id: 13,
      image: "/lovable-uploads/cf5c586a-141b-4fd2-9233-59c0a7aa916b.png",
      title: "Canecas Azuis e Amarelas - Linha Regional"
    },
    {
      id: 14,
      image: "/lovable-uploads/2be2ec80-7d40-4363-9fd1-8661752b2034.png",
      title: "Canecas Azuis e Roxas - Linha Regional"
    },
    {
      id: 15,
      image: "/lovable-uploads/aed827c9-398f-4986-8d20-c9e9072edc41.png",
      title: "Canecas Pretas Temáticas - Linha Premium"
    },
    {
      id: 16,
      image: "/lovable-uploads/6239ecfd-2724-4ddb-8521-ca8280263273.png",
      title: "Canecas Brancas Temáticas - Linha Clássica"
    },
    {
      id: 17,
      image: "/lovable-uploads/be4bd2f8-2128-4cbe-8257-36d30d5ede96.png",
      title: "Canecas Pretas - Linha Temática Especial"
    },
    {
      id: 18,
      image: "/lovable-uploads/6f8c1404-6dd3-41d7-a1a5-b16338be6828.png",
      title: "Canecas Azuis - Linha Regional Especial"
    },
    {
      id: 19,
      image: "/lovable-uploads/d9dbb97c-7d73-41a9-a8ea-783372009ada.png",
      title: "Canecas Azuis e Amarelas - Mix Regional"
    },
    {
      id: 20,
      image: "/lovable-uploads/eecd52fe-d390-40b8-8e6a-adce7a817831.png",
      title: "Canecas Amarelas - Linha Regional Completa"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Catálogo de Produtos
            </h1>
            <div className="w-24 h-1 bg-gray-900 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça nossa linha completa de souvenirs e presentes personalizados. 
              Produtos de qualidade com temas regionais brasileiros.
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div 
                  key={product.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                      {product.title}
                    </h3>
                    
                    <button
                      onClick={handleContactClick}
                      className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors duration-300 font-medium"
                    >
                      Para mais informações entre em contato
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gray-900 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Precisa de Algo Personalizado?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Desenvolvemos produtos exclusivos com sua arte e tema desejado. 
              Entre em contato e vamos criar algo único para seu negócio.
            </p>
            <button
              onClick={handleContactClick}
              className="bg-white text-gray-900 py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-semibold text-lg"
            >
              Solicitar Orçamento Personalizado
            </button>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Catalogo;
