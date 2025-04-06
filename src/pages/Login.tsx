
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth, UserRole } from '@/contexts/auth';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';
import { LoginForm, ErrorAlert, NetworkStatusAlert, OfflineFirebaseAlert } from '@/components/auth';
import { retryOperation } from '@/contexts/auth/AuthUtils';
import { getNetworkStatus } from '@/lib/firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeRole, setActiveRole] = useState<UserRole>('startup');
  const [isOnline, setIsOnline] = useState(getNetworkStatus());
  const [showFirebaseAlert, setShowFirebaseAlert] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  // Monitor online status
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    window.addEventListener('app-online', handleOnline);
    window.addEventListener('app-offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('app-online', handleOnline);
      window.removeEventListener('app-offline', handleOffline);
    };
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setShowFirebaseAlert(false);
    
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }
    
    try {
      setIsLoading(true);
      
      try {
        await login(email, password, activeRole);
        
        toast({
          title: "Login Successful",
          description: `Welcome back! You've been logged in as a ${activeRole}.`,
        });
        
        // Redirect to the appropriate dashboard
        navigate(`/dashboard/${activeRole}`);
      } catch (error: any) {
        console.error('Login error:', error);
        
        // If we have a network error, try to show a more helpful message
        if (error.message.includes('network') || !navigator.onLine) {
          setShowFirebaseAlert(true);
          if (import.meta.env.DEV) {
            toast({
              title: "Development Mode",
              description: "Using mock authentication in development mode due to network issues.",
            });
          }
        }
        
        throw error;
      }
    } catch (error: any) {
      setError(error.message || "Invalid email or password. Please try again.");
      
      // Show a toast for network errors to make them more visible
      if (error.message.includes("Network error") || error.message.includes("internet connection") || error.message.includes("offline")) {
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

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Login</CardTitle>
          <CardDescription className="text-center">
            Login to access your dashboard
          </CardDescription>
        </CardHeader>
        <CardContent>
          <NetworkStatusAlert />
          
          {showFirebaseAlert && <OfflineFirebaseAlert />}
          
          {error && <ErrorAlert message={error} />}
          
          <LoginForm
            email={email}
            password={password}
            isLoading={isLoading}
            activeRole={activeRole}
            setEmail={setEmail}
            setPassword={setPassword}
            setActiveRole={setActiveRole}
            handleLogin={handleLogin}
          />
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-sm text-center">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-600 hover:underline">
              Register now
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
