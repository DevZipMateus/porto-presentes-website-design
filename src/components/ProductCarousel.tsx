import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
export const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const products = [{
    id: 1,
    image: "/lovable-uploads/f906c12c-51ae-4f47-b01c-794ab0aafacb.png",
    title: "Canecas Temáticas - Linha Preta"
  }, {
    id: 2,
    image: "/lovable-uploads/4f87b2d9-17b0-4945-b7bc-d4eb3765e624.png",
    title: "Canecas Temáticas - Linha Amarela"
  }, {
    id: 3,
    image: "/lovable-uploads/ea13aaee-2b8d-4afa-a93a-c04148b14593.png",
    title: "Canecas Temáticas - Linha Azul/Rosa"
  }, {
    id: 4,
    image: "/lovable-uploads/9448d98f-d3df-4354-bcac-8fbdc32059d1.png",
    title: "Canecas Regionais - Linha Marrom"
  }, {
    id: 5,
    image: "/lovable-uploads/da596c2c-aff5-4ccf-8450-d9120c93c304.png",
    title: "Canecas Regionais - Linha Preta"
  }, {
    id: 6,
    image: "/lovable-uploads/af2c9f18-6627-4e02-aa0b-02ae8a7d07f0.png",
    title: "Canecas Temáticas Rosa"
  }, {
    id: 7,
    image: "/lovable-uploads/af874fcf-1d94-434c-b9f0-a1093824eb74.png",
    title: "Canecas Regionais Transparentes"
  }, {
    id: 8,
    image: "/lovable-uploads/aed827c9-398f-4986-8d20-c9e9072edc41.png",
    title: "Canecas Pretas Temáticas"
  }];

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
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };
  return <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossos Produtos em Destaque
          </h2>
          <div className="w-24 h-1 bg-gray-900 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conheça nossa linha de souvenirs e canecas temáticas regionais
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <div className="flex transition-transform duration-500 ease-in-out" style={{
            transform: `translateX(-${currentIndex * 100}%)`
          }}>
              {products.map(product => <div key={product.id} className="w-full flex-shrink-0">
                  <div className="relative h-96 md:h-[500px]">
                    <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end">
                      <div className="p-8 text-white">
                        
                      </div>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button onClick={goToPrevious} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110" aria-label="Imagem anterior">
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button onClick={goToNext} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110" aria-label="Próxima imagem">
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {products.map((_, index) => <button key={index} onClick={() => goToSlide(index)} className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentIndex ? 'bg-gray-900 scale-125' : 'bg-gray-400 hover:bg-gray-600'}`} aria-label={`Ir para slide ${index + 1}`} />)}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a href="/catalogo" className="inline-block bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors duration-300 font-semibold text-lg">
            Ver Catálogo Completo
          </a>
        </div>
      </div>
    </section>;
};