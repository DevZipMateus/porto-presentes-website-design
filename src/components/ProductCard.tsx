
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
  onContactClick: () => void;
  onImageVisible?: (src: string) => void;
}

export const ProductCard = memo(({ product, onContactClick, onImageVisible }: ProductCardProps) => {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '50px',
    freezeOnceVisible: true
  });

  const handleImageLoad = () => {
    if (isVisible && onImageVisible) {
      onImageVisible(product.image);
    }
  };

  return (
    <div 
      ref={ref}
      className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
    >
      <div className="w-full aspect-square relative overflow-hidden bg-gray-50 p-2 sm:p-3 lg:p-4">
        <OptimizedImage
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
          isVisible={isVisible}
          onLoad={handleImageLoad}
        />
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
