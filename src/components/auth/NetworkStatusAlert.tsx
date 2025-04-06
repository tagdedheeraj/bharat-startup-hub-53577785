
import React, { useState, useEffect } from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertTriangle, WifiOff } from 'lucide-react';

const NetworkStatusAlert = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [hasConnectionIssue, setHasConnectionIssue] = useState(false);

  useEffect(() => {
    // Check initial connection status
    setIsOnline(navigator.onLine);

    // Actively verify connection by making a fetch request
    const checkConnection = async () => {
      try {
        // Try to fetch a small resource to verify actual connection
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000);
        
        await fetch('https://yzpshizqkdqjdqpcdwex.supabase.co/auth/v1/health', {
          method: 'GET',
          cache: 'no-store',
          signal: controller.signal
        });
        
        clearTimeout(timeoutId);
        setHasConnectionIssue(false);
      } catch (error) {
        console.log("Connection check failed:", error);
        setHasConnectionIssue(true);
      }
    };

    // Run the connection check immediately and every 15 seconds
    checkConnection();
    const intervalId = setInterval(checkConnection, 15000);

    const handleOnline = () => {
      setIsOnline(true);
      checkConnection(); // Verify the connection when online event fires
    };
    
    const handleOffline = () => {
      setIsOnline(false);
      setHasConnectionIssue(true);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    return () => {
      clearInterval(intervalId);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (isOnline && !hasConnectionIssue) return null;

  return (
    <Alert variant="destructive" className="mb-4">
      <WifiOff className="h-4 w-4 mr-2" />
      <AlertDescription className="font-semibold">
        {!isOnline 
          ? "You're currently offline. Connect to the internet to sign up or log in."
          : "Connection to authentication service is unstable. Please check your internet connection and try again."}
      </AlertDescription>
    </Alert>
  );
};

export default NetworkStatusAlert;
