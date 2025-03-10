import { useCallback } from 'react';

const aboutImages = [
  '/images/about/south-africa.jpg',
  '/images/about/venice.jpg',
  '/images/about/cima-dasta.jpg',
  '/images/about/mulaz.jpg',
  '/images/about/japan-daruma.jpg',
  '/images/about/trentino.jpg',
  '/images/about/japan.jpg',
];

export const usePreloadImages = () => {
  const preloadAboutImages = useCallback(() => {
    aboutImages.forEach(url => {
      const img = new Image();
      img.src = url;
    });
  }, []);

  return { preloadAboutImages };
}; 
