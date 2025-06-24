
import { useState, useCallback, useEffect } from 'react';

interface ImageState {
  [key: string]: 'loading' | 'loaded' | 'error';
}

export const useImagePreloader = () => {
  const [imageStates, setImageStates] = useState<ImageState>({});

  const preloadImage = useCallback((src: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      if (imageStates[src] === 'loaded') {
        resolve();
        return;
      }

      if (imageStates[src] === 'loading') {
        // Wait for the existing load to complete
        const checkLoaded = () => {
          if (imageStates[src] === 'loaded') {
            resolve();
          } else if (imageStates[src] === 'error') {
            reject();
          } else {
            setTimeout(checkLoaded, 100);
          }
        };
        checkLoaded();
        return;
      }

      setImageStates(prev => ({ ...prev, [src]: 'loading' }));

      const img = new Image();
      img.onload = () => {
        setImageStates(prev => ({ ...prev, [src]: 'loaded' }));
        resolve();
      };
      img.onerror = () => {
        setImageStates(prev => ({ ...prev, [src]: 'error' }));
        reject();
      };
      img.src = src;
    });
  }, [imageStates]);

  const preloadImages = useCallback((srcs: string[]) => {
    return Promise.all(srcs.map(src => preloadImage(src).catch(() => {})));
  }, [preloadImage]);

  const getImageState = useCallback((src: string) => {
    return imageStates[src] || 'loading';
  }, [imageStates]);

  return { preloadImage, preloadImages, getImageState };
};
