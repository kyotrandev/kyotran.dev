import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const loadedImages: string[] = [];

const useImageLoadedState = (src: string) => {
  const pathname = usePathname();
  const uniqueImagePath = `${pathname}__${src}`;
  const [mounted, setMounted] = useState(false);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setMounted(true);
    setLoaded(loadedImages.includes(uniqueImagePath));
  }, [uniqueImagePath]);

  return [
    mounted && loaded,
    () => {
      if (!loaded) {
        loadedImages.push(uniqueImagePath);
        setLoaded(true);
      }
    },
  ] as const;
};

export default useImageLoadedState;
