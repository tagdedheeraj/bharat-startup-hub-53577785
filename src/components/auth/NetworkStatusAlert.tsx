
import React, { useState, useEffect } from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { WifiOff, Wifi } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const NetworkStatusAlert: React.FC = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [wasOffline, setWasOffline] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      if (wasOffline) {
        toast({
          title: "Back Online",
          description: "Your internet connection has been restored.",
        });
      }
    };

    const handleOffline = () => {
      setIsOnline(false);
      setWasOffline(true);
      toast({
        title: "Connection Lost",
        description: "You are currently offline. Some features may be limited.",
        variant: "destructive"
      });
    };

    // Check network status immediately
    setIsOnline(navigator.onLine);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [wasOffline]);

  if (isOnline) return null;

  return (
    <Alert variant="destructive" className="mb-4 border-2 border-red-500 animate-pulse">
      <WifiOff className="h-5 w-5 mr-2" />
      <AlertDescription className="text-base font-medium">
        You are currently offline. Please check your internet connection to sign up or log in.
      </AlertDescription>
    </Alert>
  );
};

export default NetworkStatusAlert;
