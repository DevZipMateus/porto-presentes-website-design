
import { useState, useCallback } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  isVisible: boolean;
  onLoad?: () => void;
  onError?: () => void;
}

export const OptimizedImage = ({ 
  src, 
  alt, 
  className = "", 
  isVisible, 
  onLoad, 
  onError 
}: OptimizedImageProps) => {
  const [imageState, setImageState] = useState<'loading' | 'loaded' | 'error'>('loading');
  const [shouldLoad, setShouldLoad] = useState(false);

  const handleImageLoad = useCallback(() => {
    setImageState('loaded');
    onLoad?.();
  }, [onLoad]);

  const handleImageError = useCallback(() => {
    setImageState('error');
    onError?.();
  }, [onError]);

  // Start loading when component becomes visible
  if (isVisible && !shouldLoad) {
    setShouldLoad(true);
  }

  if (!shouldLoad) {
    return <Skeleton className={`w-full h-full ${className}`} />;
  }

  return (
    <div className="relative w-full h-full">
      {imageState === 'loading' && (
        <Skeleton className={`absolute inset-0 ${className}`} />
      )}
      
      {imageState === 'error' ? (
        <div className={`w-full h-full bg-gray-200 flex items-center justify-center ${className}`}>
          <p className="text-gray-500 text-sm">Erro ao carregar imagem</p>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className={`${className} ${imageState === 'loaded' ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
          onLoad={handleImageLoad}
          onError={handleImageError}
          loading="lazy"
        />
      )}
    </div>
  );
};
