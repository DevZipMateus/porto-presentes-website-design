
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
      image: "/lovable-uploads/produtos/produtos/580340088468056.jpeg",
      title: "Produto 1"
    },
    {
      id: 2,
      image: "/lovable-uploads/produtos/produtos/623891720055917.jpeg",
      title: "Produto 2"
    },
    {
      id: 3,
      image: "/lovable-uploads/produtos/produtos/647352331655232.jpeg",
      title: "Produto 3"
    },
    {
      id: 4,
      image: "/lovable-uploads/produtos/produtos/651306504620318.jpeg",
      title: "Produto 4"
    },
    {
      id: 5,
      image: "/lovable-uploads/produtos/produtos/683588124517672.jpeg",
      title: "Produto 5"
    },
    {
      id: 6,
      image: "/lovable-uploads/produtos/produtos/700988782758344.jpeg",
      title: "Produto 6"
    },
    {
      id: 7,
      image: "/lovable-uploads/produtos/produtos/704326299229811.jpeg",
      title: "Produto 7"
    },
    {
      id: 8,
      image: "/lovable-uploads/produtos/produtos/730192932715223.jpeg",
      title: "Produto 8"
    },
    {
      id: 9,
      image: "/lovable-uploads/produtos/produtos/746123964454635.jpeg",
      title: "Produto 9"
    },
    {
      id: 10,
      image: "/lovable-uploads/produtos/produtos/762529152878073.jpeg",
      title: "Produto 10"
    },
    {
      id: 11,
      image: "/lovable-uploads/produtos/produtos/772198988824942.jpeg",
      title: "Produto 11"
    },
    {
      id: 12,
      image: "/lovable-uploads/produtos/produtos/780695417621974.jpeg",
      title: "Produto 12"
    },
    {
      id: 13,
      image: "/lovable-uploads/produtos/produtos/1037446415146929.jpeg",
      title: "Produto 13"
    },
    {
      id: 14,
      image: "/lovable-uploads/produtos/produtos/1037763915136493.jpeg",
      title: "Produto 14"
    },
    {
      id: 15,
      image: "/lovable-uploads/produtos/produtos/1068162175259042.jpeg",
      title: "Produto 15"
    },
    {
      id: 16,
      image: "/lovable-uploads/produtos/produtos/1069720575108821.jpeg",
      title: "Produto 16"
    },
    {
      id: 17,
      image: "/lovable-uploads/produtos/produtos/1088517909841281.jpeg",
      title: "Produto 17"
    },
    {
      id: 18,
      image: "/lovable-uploads/produtos/produtos/1178749930690776.jpeg",
      title: "Produto 18"
    },
    {
      id: 19,
      image: "/lovable-uploads/produtos/produtos/1198935675306163.jpeg",
      title: "Produto 19"
    },
    {
      id: 20,
      image: "/lovable-uploads/produtos/produtos/1219112736162937.jpeg",
      title: "Produto 20"
    },
    {
      id: 21,
      image: "/lovable-uploads/produtos/produtos/1219666542758189.jpeg",
      title: "Produto 21"
    },
    {
      id: 22,
      image: "/lovable-uploads/produtos/produtos/1225944189076296.jpeg",
      title: "Produto 22"
    },
    {
      id: 23,
      image: "/lovable-uploads/produtos/produtos/1228230939001413.jpeg",
      title: "Produto 23"
    },
    {
      id: 24,
      image: "/lovable-uploads/produtos/produtos/1232940405230956.jpeg",
      title: "Produto 24"
    },
    {
      id: 25,
      image: "/lovable-uploads/produtos/produtos/1245440066937165.jpeg",
      title: "Produto 25"
    },
    {
      id: 26,
      image: "/lovable-uploads/produtos/produtos/1245495706981218.jpeg",
      title: "Produto 26"
    },
    {
      id: 27,
      image: "/lovable-uploads/produtos/produtos/1269908621461302.jpeg",
      title: "Produto 27"
    },
    {
      id: 28,
      image: "/lovable-uploads/produtos/produtos/1312409950889865.jpeg",
      title: "Produto 28"
    },
    {
      id: 29,
      image: "/lovable-uploads/produtos/produtos/1358308235261523.jpeg",
      title: "Produto 29"
    },
    {
      id: 30,
      image: "/lovable-uploads/produtos/produtos/1360814218335330.jpeg",
      title: "Produto 30"
    },
    {
      id: 31,
      image: "/lovable-uploads/produtos/produtos/1363246671448196.jpeg",
      title: "Produto 31"
    },
    {
      id: 32,
      image: "/lovable-uploads/produtos/produtos/1370181527419342.jpeg",
      title: "Produto 32"
    },
    {
      id: 33,
      image: "/lovable-uploads/produtos/produtos/1398469508146377.jpeg",
      title: "Produto 33"
    },
    {
      id: 34,
      image: "/lovable-uploads/produtos/produtos/1405310160808979.jpeg",
      title: "Produto 34"
    },
    {
      id: 35,
      image: "/lovable-uploads/produtos/produtos/1430611948254104.jpeg",
      title: "Produto 35"
    },
    {
      id: 36,
      image: "/lovable-uploads/produtos/produtos/1444630790060584.jpeg",
      title: "Produto 36"
    },
    {
      id: 37,
      image: "/lovable-uploads/produtos/produtos/1466429271193260.jpeg",
      title: "Produto 37"
    },
    {
      id: 38,
      image: "/lovable-uploads/produtos/produtos/1599728914054657.jpeg",
      title: "Produto 38"
    },
    {
      id: 39,
      image: "/lovable-uploads/produtos/produtos/1629064404435155.jpeg",
      title: "Produto 39"
    },
    {
      id: 40,
      image: "/lovable-uploads/produtos/produtos/1649618172414651.jpeg",
      title: "Produto 40"
    },
    {
      id: 41,
      image: "/lovable-uploads/produtos/produtos/1718507029029098.jpeg",
      title: "Produto 41"
    },
    {
      id: 42,
      image: "/lovable-uploads/produtos/produtos/1774057396800709.jpeg",
      title: "Produto 42"
    },
    {
      id: 43,
      image: "/lovable-uploads/produtos/produtos/1779332083018069.jpeg",
      title: "Produto 43"
    },
    {
      id: 44,
      image: "/lovable-uploads/produtos/produtos/1878077353035436.jpeg",
      title: "Produto 44"
    },
    {
      id: 45,
      image: "/lovable-uploads/produtos/produtos/1887598298693587.jpeg",
      title: "Produto 45"
    },
    {
      id: 46,
      image: "/lovable-uploads/produtos/produtos/1889866588521167.jpeg",
      title: "Produto 46"
    },
    {
      id: 47,
      image: "/lovable-uploads/produtos/produtos/1979692592857044.jpeg",
      title: "Produto 47"
    },
    {
      id: 48,
      image: "/lovable-uploads/produtos/produtos/1982601202274397.jpeg",
      title: "Produto 48"
    },
    {
      id: 49,
      image: "/lovable-uploads/produtos/produtos/2186947578424808.jpeg",
      title: "Produto 49"
    },
    {
      id: 50,
      image: "/lovable-uploads/produtos/produtos/2812960572238511.jpeg",
      title: "Produto 50"
    },
    {
      id: 51,
      image: "/lovable-uploads/produtos/produtos/3024169927741558.jpeg",
      title: "Produto 51"
    },
    {
      id: 52,
      image: "/lovable-uploads/produtos/produtos/3158158797673175.jpeg",
      title: "Produto 52"
    },
    {
      id: 53,
      image: "/lovable-uploads/produtos/produtos/3195899833894667.jpeg",
      title: "Produto 53"
    },
    {
      id: 54,
      image: "/lovable-uploads/produtos/produtos/3529280133879201.jpeg",
      title: "Produto 54"
    },
    {
      id: 55,
      image: "/lovable-uploads/produtos/produtos/3559760984160253.jpeg",
      title: "Produto 55"
    },
    {
      id: 56,
      image: "/lovable-uploads/produtos/produtos/3713693332262247.jpeg",
      title: "Produto 56"
    },
    {
      id: 57,
      image: "/lovable-uploads/produtos/produtos/4071359136474629.jpeg",
      title: "Produto 57"
    },
    {
      id: 58,
      image: "/lovable-uploads/produtos/produtos/4168997083421455.jpeg",
      title: "Produto 58"
    },
    {
      id: 59,
      image: "/lovable-uploads/produtos/produtos/4205870249644871.jpeg",
      title: "Produto 59"
    },
    {
      id: 60,
      image: "/lovable-uploads/produtos/produtos/10041645129258009.jpeg",
      title: "Produto 60"
    },
    {
      id: 61,
      image: "/lovable-uploads/produtos/produtos/24298635316388029.jpeg",
      title: "Produto 61"
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
              Conheça nossa linha completa de souvenirs e presentes personalizados. Produtos de qualidade, para informação sobre preço clique no botão abaixo da imagem escolhida.
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map(product => (
                <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-full h-64 sm:h-72 md:h-80 overflow-hidden bg-gray-50 p-4">
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="w-full h-full object-contain hover:scale-105 transition-transform duration-300" 
                      loading="lazy" 
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 text-center leading-tight">
                      {product.title}
                    </h3>
                    
                    <button 
                      onClick={handleContactClick} 
                      className="w-full bg-gray-900 text-white py-3 px-4 sm:px-6 rounded-lg hover:bg-gray-800 transition-colors duration-300 font-medium text-sm sm:text-base"
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
