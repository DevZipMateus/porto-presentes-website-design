
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // First 20 products from the new catalog
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
    }
  ];

  // Auto-advance carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => prevIndex === products.length - 1 ? 0 : prevIndex + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [products.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? products.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === products.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            Nosso catálogo de produtos
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gray-900 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Conheça nossa linha completa de souvenirs e canecas temáticas regionais, para mais informações sobre preço, modelos e disponibilidade entre em contato.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{transform: `translateX(-${currentIndex * 100}%)`}}
            >
              {products.map(product => (
                <div key={product.id} className="w-full flex-shrink-0">
                  <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-[16/10]">
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="w-full h-full object-contain bg-white p-2 sm:p-4" 
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end">
                      <div className="p-3 sm:p-6 text-white w-full">
                        <h3 className="text-sm sm:text-base lg:text-lg font-semibold">{product.title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={goToPrevious} 
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 sm:p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10" 
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
          </button>

          <button 
            onClick={goToNext} 
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 sm:p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10" 
            aria-label="Próxima imagem"
          >
            <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
          </button>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-8 sm:mt-12 px-4">
          <a 
            href="/catalogo" 
            className="inline-block w-full sm:w-auto bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gray-800 transition-colors duration-300 font-semibold text-base sm:text-lg"
          >
            Ver Catálogo Completo
          </a>
        </div>
      </div>
    </section>
  );
};
