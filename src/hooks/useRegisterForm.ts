
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth, UserRole } from '@/contexts/auth';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

export const useRegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeRole, setActiveRole] = useState<UserRole>('startup');
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [isRetrying, setIsRetrying] = useState(false);
  
  const { register } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setError(null);
    };
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    setIsOnline(navigator.onLine);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const checkNetworkConnection = () => {
    if (!navigator.onLine) {
      setError("You are currently offline. Please connect to the internet to register.");
      return false;
    }
    return true;
  };

  const retryRegister = async () => {
    setIsRetrying(true);
    setError(null);
    
    if (!checkNetworkConnection()) {
      setIsRetrying(false);
      return;
    }
    
    try {
      const testTimeout = setTimeout(() => {
        setError("Connection timeout. Please try again later.");
        setIsRetrying(false);
      }, 10000);
      
      await supabase.auth.getSession();
      
      clearTimeout(testTimeout);
      
      toast({
        title: "Connection Restored",
        description: "Your connection to our servers is working now. You can try to register again.",
      });
      
    } catch (error) {
      console.error("Connection test failed:", error);
      setError("Unable to connect to authentication service. Please check your internet and try again.");
    } finally {
      setIsRetrying(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    if (!checkNetworkConnection()) {
      return;
    }
    
    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields");
      return;
    }
    
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }
    
    try {
      setIsLoading(true);
      
      // Create a timeout to show a message if registration takes too long
      const registrationTimeout = setTimeout(() => {
        if (isLoading) {
          setError("The registration is taking longer than expected. Please check your internet connection.");
        }
      }, 8000);
      
      await register(name, email, password, activeRole);
      
      clearTimeout(registrationTimeout);
      
      toast({
        title: "Registration Successful",
        description: `Your ${activeRole} account has been created. Redirecting to dashboard...`,
      });
      
      navigate(`/dashboard/${activeRole}`);
    } catch (error: any) {
      console.error('Registration error:', error);
      setError(error.message || "Unable to create your account. Please try again.");
      
      if (error.message.includes("Network") || error.message.includes("internet connection") || error.message.includes("offline")) {
        toast({
          title: "Network Error",
          description: "Could not connect to authentication service. Please check your internet connection and try again.",
          variant: "destructive"
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    name,
    email,
    password,
    confirmPassword,
    isLoading,
    error,
    activeRole,
    isOnline,
    isRetrying,
    setName,
    setEmail,
    setPassword,
    setConfirmPassword,
    setActiveRole,
    retryRegister,
    handleRegister
  };
};
