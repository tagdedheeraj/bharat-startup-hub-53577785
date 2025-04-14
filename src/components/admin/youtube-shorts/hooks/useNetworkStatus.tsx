
import { useState, useEffect } from 'react';
import { isFirestoreAvailable } from '@/lib/firebase/firestore';

export const useNetworkStatus = () => {
  const [isOffline, setIsOffline] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [lastChecked, setLastChecked] = useState<Date | null>(null);

  useEffect(() => {
    const checkNetworkStatus = async () => {
      setIsLoading(true);
      try {
        // Check Firebase availability
        const available = await isFirestoreAvailable();
        setIsOffline(!available);
        setLastChecked(new Date());
      } catch (error) {
        console.error("Error checking network status:", error);
        setIsOffline(true);
      } finally {
        setIsLoading(false);
      }
    };

    // Check on mount
    checkNetworkStatus();

    // Set up event listeners for online/offline status
    const handleOnline = () => {
      checkNetworkStatus();
    };

    const handleOffline = () => {
      setIsOffline(true);
      setLastChecked(new Date());
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Clean up
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Function to manually check network status
  const checkStatus = async () => {
    setIsLoading(true);
    try {
      const available = await isFirestoreAvailable();
      setIsOffline(!available);
      setLastChecked(new Date());
    } catch (error) {
      console.error("Error checking network status:", error);
      setIsOffline(true);
    } finally {
      setIsLoading(false);
    }
  };

  return { isOffline, isLoading, lastChecked, checkStatus };
};
