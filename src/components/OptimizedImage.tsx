
import { memo } from 'react';
import { useImagePreloader } from '@/hooks/useImagePreloader';
import { Skeleton } from '@/components/ui/skeleton';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  preloadNext?: string[];
  onLoad?: () => void;
  onError?: () => void;
}

export const OptimizedImage = memo(({
  src,
  alt,
  className = '',
  priority = false,
  preloadNext = [],
  onLoad,
  onError
}: OptimizedImageProps) => {
  const { loading, loaded, error, preloadImage } = useImagePreloader(src, {
    priority,
    preloadNext
  });

  // Trigger image loading
  if (!loading && !loaded && !error) {
    preloadImage();
  }

  if (loading) {
    return <Skeleton className={`${className} animate-pulse`} />;
  }

  if (error) {
    return (
      <div className={`${className} bg-gray-200 flex items-center justify-center`}>
        <p className="text-gray-500 text-sm">Erro ao carregar</p>
      </div>
    );
  }

  if (loaded) {
    return (
      <img
        src={src}
        alt={alt}
        className={`${className} transition-opacity duration-300`}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={onLoad}
        onError={onError}
      />
    );
  }

  return <Skeleton className={`${className} animate-pulse`} />;
});

OptimizedImage.displayName = 'OptimizedImage';
