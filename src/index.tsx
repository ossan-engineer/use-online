import { useState, useEffect } from 'react';

export const useOnline = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const handleOnLiine = () => setIsOnline(true);
  const handleOffLine = () => setIsOnline(false);

  useEffect(() => {
    window.addEventListener('online', handleOnLiine);
    window.addEventListener('offline', handleOffLine);

    return () => {
      window.removeEventListener('online', handleOnLiine);
      window.removeEventListener('offline', handleOffLine);
    };
  }, []);

  return isOnline;
};
