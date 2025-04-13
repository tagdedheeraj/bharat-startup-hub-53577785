
import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { isFirestoreAvailable } from '@/lib/firebase';

export const useNetworkStatus = () => {
  const [isOffline, setIsOffline] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkNetworkStatus = async () => {
      const firestoreAvailable = await isFirestoreAvailable();
      setIsOffline(!firestoreAvailable);
      
      if (!firestoreAvailable) {
        toast.warning("Operating in offline mode. Changes won't be saved to the database.");
      }
      
      setIsLoading(false);
    };
    
    checkNetworkStatus();
    
    // Add online/offline event listeners
    const handleOnline = () => {
      toast.success("You're back online");
      setIsOffline(false);
    };
    
    const handleOffline = () => {
      toast.warning("You're offline. Changes won't be saved.");
      setIsOffline(true);
    };
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return { isOffline, isLoading };
};
