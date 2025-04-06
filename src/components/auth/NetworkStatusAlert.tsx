
import React, { useState, useEffect } from 'react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { WifiOff, Wifi, AlertCircle, AlertTriangle } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';

const NetworkStatusAlert: React.FC = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [wasOffline, setWasOffline] = useState(false);
  const [testingConnection, setTestingConnection] = useState(false);

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

  const testConnection = async () => {
    setTestingConnection(true);
    try {
      // Try to fetch a small resource to test connection
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);
      
      await fetch('https://www.google.com/favicon.ico', { 
        mode: 'no-cors',
        signal: controller.signal,
        cache: 'no-store'
      });
      
      clearTimeout(timeoutId);
      setIsOnline(true);
      
      toast({
        title: "Connection Test Passed",
        description: "You have internet access now.",
      });
    } catch (error) {
      console.error("Connection test failed:", error);
      setIsOnline(false);
      
      toast({
        title: "Still Offline",
        description: "Unable to connect to internet. Please check your network.",
        variant: "destructive"
      });
    } finally {
      setTestingConnection(false);
    }
  };

  if (isOnline) return null;

  return (
    <Alert variant="destructive" className="mb-4 border-2 border-red-500">
      <AlertTriangle className="h-5 w-5 mr-2" />
      <div className="flex flex-col gap-2">
        <AlertTitle className="text-base font-bold">Network Connection Error</AlertTitle>
        <AlertDescription className="text-sm">
          <p className="mb-2">
            You appear to be offline. Firebase authentication requires an internet connection.
          </p>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={testConnection}
            disabled={testingConnection}
            className="bg-white text-red-600 hover:bg-gray-100 mt-1"
          >
            {testingConnection ? "Testing Connection..." : "Test Connection"}
          </Button>
        </AlertDescription>
      </div>
    </Alert>
  );
};

export default NetworkStatusAlert;
