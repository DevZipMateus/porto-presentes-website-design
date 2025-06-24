
import { useState, useEffect, useMemo, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

interface Product {
  id: number;
  image: string;
  title: string;
}

interface ImageState {
  [key: string]: 'loading' | 'loaded' | 'error';
}

export const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageStates, setImageStates] = useState<ImageState>({});

  // Memoized products list to prevent unnecessary re-renders
  const products = useMemo<Product[]>(() => [
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
  ], []);

  // Get indices for current, previous, and next images
  const getAdjacentIndices = useCallback((index: number) => {
    const prevIndex = index === 0 ? products.length - 1 : index - 1;
    const nextIndex = index === products.length - 1 ? 0 : index + 1;
    return { prevIndex, currentIndex: index, nextIndex };
  }, [products.length]);

  // Preload images function
  const preloadImage = useCallback((src: string) => {
    if (imageStates[src] === 'loaded' || imageStates[src] === 'loading') return;

    setImageStates(prev => ({ ...prev, [src]: 'loading' }));

    const img = new Image();
    img.onload = () => {
      setImageStates(prev => ({ ...prev, [src]: 'loaded' }));
    };
    img.onerror = () => {
      setImageStates(prev => ({ ...prev, [src]: 'error' }));
    };
    img.src = src;
  }, [imageStates]);

  // Preload current and adjacent images
  useEffect(() => {
    const { prevIndex, currentIndex, nextIndex } = getAdjacentIndices(currentIndex);
    
    // Preload current, previous, and next images
    preloadImage(products[currentIndex].image);
    preloadImage(products[prevIndex].image);
    preloadImage(products[nextIndex].image);
  }, [currentIndex, products, preloadImage, getAdjacentIndices]);

  // Auto-advance carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => prevIndex === products.length - 1 ? 0 : prevIndex + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [products.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex(currentIndex === 0 ? products.length - 1 : currentIndex - 1);
  }, [currentIndex, products.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex(currentIndex === products.length - 1 ? 0 : currentIndex + 1);
  }, [currentIndex, products.length]);

  // Render optimized carousel item
  const renderCarouselItem = useCallback((product: Product, isVisible: boolean) => {
    const imageState = imageStates[product.image] || 'loading';
    
    return (
      <div key={product.id} className="w-full flex-shrink-0">
        <div className="relative aspect-square sm:aspect-[4/3] md:aspect-[3/2] lg:aspect-[16/10] xl:aspect-[2/1]">
          {imageState === 'loading' && (
            <Skeleton className="w-full h-full rounded-lg" />
          )}
          {isVisible && imageState !== 'loading' && (
            <>
              {imageState === 'loaded' ? (
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-contain bg-white p-1 sm:p-2 md:p-3 lg:p-4" 
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-lg">
                  <p className="text-gray-500 text-sm">Erro ao carregar imagem</p>
                </div>
              )}
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end">
                <div className="p-2 sm:p-3 md:p-4 lg:p-6 text-white w-full">
                  <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold">{product.title}</h3>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }, [imageStates]);

  // Get only the images that need to be rendered
  const renderableProducts = useMemo(() => {
    const { prevIndex, nextIndex } = getAdjacentIndices(currentIndex);
    return [
      { ...products[prevIndex], index: prevIndex },
      { ...products[currentIndex], index: currentIndex },
      { ...products[nextIndex], index: nextIndex }
    ];
  }, [currentIndex, products, getAdjacentIndices]);

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="text-center mb-6 sm:mb-8 lg:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4 px-2">
            Nosso catálogo de produtos
          </h2>
          <div className="w-12 sm:w-16 lg:w-20 xl:w-24 h-1 bg-gray-900 mx-auto mb-3 sm:mb-4 lg:mb-6"></div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-2 sm:px-4">
            Conheça nossa linha completa de souvenirs e canecas temáticas regionais, para mais informações sobre preço, modelos e disponibilidade entre em contato.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Optimized Carousel Container */}
          <div className="relative overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl shadow-lg sm:shadow-xl lg:shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{transform: `translateX(-${currentIndex * 100}%)`}}
            >
              {products.map((product, index) => {
                const isVisible = renderableProducts.some(rp => rp.index === index);
                return renderCarouselItem(product, isVisible);
              })}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={goToPrevious} 
            className="absolute left-1 sm:left-2 lg:left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-1.5 sm:p-2 lg:p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10" 
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4 lg:h-6 lg:w-6" />
          </button>

          <button 
            onClick={goToNext} 
            className="absolute right-1 sm:right-2 lg:right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-1.5 sm:p-2 lg:p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10" 
            aria-label="Próxima imagem"
          >
            <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 lg:h-6 lg:w-6" />
          </button>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-6 sm:mt-8 lg:mt-12 px-2 sm:px-4">
          <a 
            href="/catalogo" 
            className="inline-block w-full sm:w-auto bg-gray-900 text-white px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-lg hover:bg-gray-800 transition-colors duration-300 font-semibold text-sm sm:text-base lg:text-lg"
          >
            Ver Catálogo Completo
          </a>
        </div>
      </div>
    </section>
  );
};
