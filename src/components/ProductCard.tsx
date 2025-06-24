
import { memo } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { OptimizedImage } from './OptimizedImage';

interface Product {
  id: number;
  image: string;
  title: string;
}

interface ProductCardProps {
  product: Product;
  nextImages?: string[];
  onContactClick: () => void;
  priority?: boolean;
}

export const ProductCard = memo(({
  product,
  nextImages = [],
  onContactClick,
  priority = false
}: ProductCardProps) => {
  const { elementRef, shouldRender } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '100px',
    triggerOnce: true
  });

  return (
    <div 
      ref={elementRef}
      className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
    >
      <div className="w-full aspect-square relative overflow-hidden bg-gray-50 p-2 sm:p-3 lg:p-4">
        {shouldRender && (
          <OptimizedImage
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
            priority={priority}
            preloadNext={nextImages}
          />
        )}
      </div>
      
      <div className="p-4 sm:p-6">
        <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 text-center leading-tight">
          {product.title}
        </h3>
        
        <button 
          onClick={onContactClick} 
          className="w-full bg-gray-900 text-white py-2.5 sm:py-3 px-3 sm:px-4 lg:px-6 rounded-lg hover:bg-gray-800 transition-colors duration-300 font-medium text-xs sm:text-sm lg:text-base"
        >
          Para mais informações entre em contato
        </button>
      </div>
    </div>
  );
});

ProductCard.displayName = 'ProductCard';
