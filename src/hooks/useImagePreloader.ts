
import { useState, useEffect, useCallback } from 'react';

interface ImageState {
  loading: boolean;
  loaded: boolean;
  error: boolean;
}

interface UseImagePreloaderOptions {
  priority?: boolean;
  preloadNext?: string[];
}

export const useImagePreloader = (
  src: string,
  options: UseImagePreloaderOptions = {}
) => {
  const { priority = false, preloadNext = [] } = options;
  const [imageState, setImageState] = useState<ImageState>({
    loading: false,
    loaded: false,
    error: false
  });

  const loadImage = useCallback((imageSrc: string, isPriority = false) => {
    return new Promise<void>((resolve, reject) => {
      const img = new Image();
      
      img.onload = () => {
        if (imageSrc === src) {
          setImageState({
            loading: false,
            loaded: true,
            error: false
          });
        }
        resolve();
      };
      
      img.onerror = () => {
        if (imageSrc === src) {
          setImageState({
            loading: false,
            loaded: false,
            error: true
          });
        }
        reject();
      };

      // Set loading attribute for priority images
      if (isPriority) {
        img.loading = 'eager';
      }
      
      img.src = imageSrc;
    });
  }, [src]);

  const preloadImage = useCallback(() => {
    if (imageState.loaded || imageState.loading || imageState.error) return;

    setImageState(prev => ({ ...prev, loading: true }));
    
    loadImage(src, priority).catch(() => {
      // Error handling is done in loadImage
    });
  }, [src, priority, imageState, loadImage]);

  // Preload additional images
  useEffect(() => {
    if (imageState.loaded && preloadNext.length > 0) {
      preloadNext.forEach(nextSrc => {
        loadImage(nextSrc).catch(() => {
          // Silent fail for preloaded images
        });
      });
    }
  }, [imageState.loaded, preloadNext, loadImage]);

  return {
    ...imageState,
    preloadImage
  };
};
