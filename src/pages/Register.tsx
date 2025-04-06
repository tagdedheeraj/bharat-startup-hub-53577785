
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth, UserRole } from '@/contexts/auth';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from '@/hooks/use-toast';
import { RegisterForm, ErrorAlert, NetworkStatusAlert } from '@/components/auth';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeRole, setActiveRole] = useState<UserRole>('startup');
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [retryCount, setRetryCount] = useState(0);
  
  const { register } = useAuth();
  const navigate = useNavigate();

  // Monitor online status more aggressively
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setError(null); // Clear network errors when we go online
    };
    
    const handleOffline = () => {
      setIsOnline(false);
      setError("You are offline. Please check your internet connection and try again.");
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    // Set initial status
    setIsOnline(navigator.onLine);

    // Ping test to verify actual connectivity
    const checkRealConnection = async () => {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000);
        
        await fetch('https://yzpshizqkdqjdqpcdwex.supabase.co/auth/v1/health', { 
          cache: 'no-store',
          signal: controller.signal
        });
        
        clearTimeout(timeoutId);
        
        // If we get here, connection is working
        setError(null);
      } catch (err) {
        console.log("Connection test failed:", err);
        if (navigator.onLine) {
          // Browser thinks we're online but test failed
          setError("Connection to authentication service is unstable. Please check your internet connection.");
        }
      }
    };
    
    // Run the test immediately and then every 10 seconds
    checkRealConnection();
    const interval = setInterval(checkRealConnection, 10000);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      clearInterval(interval);
    };
  }, []);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    // Check online status first
    if (!navigator.onLine) {
      setError("You are offline. Please check your internet connection and try again.");
      
      toast({
        title: "Network Error",
        description: "You're currently offline. Please connect to the internet to register.",
        variant: "destructive"
      });
      return;
    }
    
    // Form validation
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
      
      // Try up to 2 times if we get network errors
      try {
        await register(name, email, password, activeRole);
        
        // Show success message
        toast({
          title: "Registration Successful",
          description: "Your account has been created. Redirecting to dashboard...",
        });
        
        // Redirect to the appropriate dashboard
        navigate(`/dashboard/${activeRole}`);
      } catch (error: any) {
        if (error.message.includes('Network') && retryCount < 2) {
          // If network error, retry one more time
          setRetryCount(prev => prev + 1);
          setTimeout(async () => {
            try {
              await register(name, email, password, activeRole);
              
              toast({
                title: "Registration Successful",
                description: "Your account has been created. Redirecting to dashboard...",
              });
              
              navigate(`/dashboard/${activeRole}`);
            } catch (retryError: any) {
              throw retryError;
            } finally {
              setRetryCount(0);
            }
          }, 2000);
        } else {
          throw error;
        }
      }
    } catch (error: any) {
      console.error('Registration error:', error);
      
      // Handle network errors explicitly
      if (error.message.includes('Network error') || 
          error.message.includes('Failed to fetch') || 
          error.message.includes('offline') ||
          error.message.includes('Cannot reach authentication')) {
        setError("Network connection error. Please check your internet connection and try again.");
        
        toast({
          title: "Connection Error",
          description: "Failed to connect to authentication service. Please check your internet connection.",
          variant: "destructive"
        });
      } else {
        setError(error.message || "Unable to create your account. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Create an Account</CardTitle>
          <CardDescription className="text-center">
            Register to access exclusive features
          </CardDescription>
        </CardHeader>
        <CardContent>
          <NetworkStatusAlert />
          
          {error && <ErrorAlert message={error} />}
          
          <Tabs defaultValue="startup" onValueChange={(value) => setActiveRole(value as UserRole)}>
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="startup">Startup</TabsTrigger>
              <TabsTrigger value="investor">Investor</TabsTrigger>
            </TabsList>
            
            <TabsContent value="startup">
              <RegisterForm
                role="startup"
                name={name}
                email={email}
                password={password}
                confirmPassword={confirmPassword}
                isLoading={isLoading}
                isOnline={isOnline}
                setName={setName}
                setEmail={setEmail}
                setPassword={setPassword}
                setConfirmPassword={setConfirmPassword}
                handleRegister={handleRegister}
              />
            </TabsContent>
            
            <TabsContent value="investor">
              <RegisterForm
                role="investor"
                name={name}
                email={email}
                password={password}
                confirmPassword={confirmPassword}
                isLoading={isLoading}
                isOnline={isOnline}
                setName={setName}
                setEmail={setEmail}
                setPassword={setPassword}
                setConfirmPassword={setConfirmPassword}
                handleRegister={handleRegister}
              />
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-sm text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Register;
