
import { useState, useEffect } from 'react';
import { isFirestoreAvailable } from '@/lib/firebase/firestore';

export const useTeamOfflineState = () => {
  const [isOffline, setIsOffline] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkFirestoreAvailability = async () => {
      const available = await isFirestoreAvailable();
      setIsOffline(!available);
    };
    checkFirestoreAvailability();
  }, []);

  return { isOffline, setIsOffline, error, setError };
};
