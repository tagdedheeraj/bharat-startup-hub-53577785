import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth, UserRole } from '@/contexts/auth';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from '@/hooks/use-toast';
import { RegisterForm, ErrorAlert, NetworkStatusAlert } from '@/components/auth';
import { Button } from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const Register = () => {
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
      
      const timeoutId = setTimeout(() => {
        if (isLoading) {
          setError("The registration is taking longer than expected. Please check your internet connection.");
        }
      }, 8000);
      
      await register(name, email, password, activeRole);
      
      clearTimeout(timeoutId);
      
      toast({
        title: "Registration Successful",
        description: `Your ${activeRole} account has been created. Redirecting to dashboard...`,
      });
      
      navigate(`/dashboard/${activeRole}`);
    } catch (error: any) {
      clearTimeout(timeoutId);
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
          
          {!isOnline && (
            <div className="mb-4 text-center">
              <Button 
                onClick={retryRegister} 
                variant="outline" 
                className="mt-2 w-full"
                disabled={isRetrying}
              >
                {isRetrying ? (
                  <>
                    <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                    Testing Connection...
                  </>
                ) : (
                  <>
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Test Connection
                  </>
                )}
              </Button>
            </div>
          )}
          
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
