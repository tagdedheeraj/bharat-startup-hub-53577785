
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle, Wifi, WifiOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { RegisterForm } from '@/components/auth';
import { UserRole, useAuth } from '@/contexts/auth';
import { toast } from '@/hooks/use-toast';
import { canConnectToFirebase } from '@/lib/firebase';

const Register = () => {
  const [activeRole, setActiveRole] = useState<UserRole>('startup');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isCheckingConnection, setIsCheckingConnection] = useState(false);
  const [canConnect, setCanConnect] = useState<boolean | null>(null);
  
  const { register } = useAuth();
  const navigate = useNavigate();

  // Check Firebase connectivity on load
  useEffect(() => {
    const checkConnection = async () => {
      setIsCheckingConnection(true);
      try {
        const canConnect = await canConnectToFirebase();
        setCanConnect(canConnect);
      } catch (error) {
        setCanConnect(false);
        console.error("Error checking Firebase connectivity:", error);
      } finally {
        setIsCheckingConnection(false);
      }
    };
    
    if (navigator.onLine) {
      checkConnection();
    } else {
      setCanConnect(false);
    }
    
    // Also check when we go online/offline
    const handleOnline = () => checkConnection();
    const handleOffline = () => setCanConnect(false);
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    // Basic validation
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
      
      await register(name, email, password, activeRole);
      
      toast({
        title: "Registration Successful",
        description: `Your ${activeRole} account has been created. Welcome!`,
      });
      
      // Navigate to dashboard
      navigate(`/dashboard/${activeRole}`);
    } catch (error: any) {
      console.error('Registration error:', error);
      
      // Simplify error messages for better user experience
      if (error.code === 'auth/email-already-in-use') {
        setError("This email is already registered. Please try logging in instead.");
      } else if (error.code === 'auth/weak-password') {
        setError("Please use a stronger password.");
      } else if (error.code === 'auth/invalid-email') {
        setError("Please enter a valid email address.");
      } else if (error.message?.includes("network") || 
                 error.message?.includes("internet") || 
                 error.message?.includes("connect") || 
                 !navigator.onLine) {
        setError("Unable to connect to the server. Please check your internet connection or try again later.");
      } else {
        setError(error.message || "Registration failed. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const retryConnection = async () => {
    setIsCheckingConnection(true);
    setError(null);
    
    try {
      const canConnect = await canConnectToFirebase();
      setCanConnect(canConnect);
      
      if (canConnect) {
        toast({
          title: "Connection Restored",
          description: "We can now connect to the authentication service.",
        });
      } else {
        setError("Still unable to connect to the server. Please check your internet connection or try again later.");
      }
    } catch (error) {
      setCanConnect(false);
      setError("Connection test failed. Please try again later.");
    } finally {
      setIsCheckingConnection(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Create an Account</CardTitle>
          <CardDescription className="text-center">
            Register as a startup or investor to get started
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          {/* Connection Status Alert */}
          {canConnect === false && (
            <Alert variant="destructive" className="mb-4">
              <WifiOff className="h-4 w-4" />
              <AlertTitle>Connection Issue</AlertTitle>
              <AlertDescription>
                <p className="mb-2">Unable to connect to the authentication service. This could be due to:</p>
                <ul className="list-disc pl-5 mb-2 text-sm">
                  <li>Your internet connection is offline</li>
                  <li>Authentication service is temporarily unavailable</li>
                  <li>Firewall or network restrictions</li>
                </ul>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={retryConnection} 
                  disabled={isCheckingConnection}
                  className="mt-2 bg-white text-red-600 hover:bg-gray-100"
                >
                  {isCheckingConnection ? "Testing Connection..." : "Test Connection"}
                </Button>
              </AlertDescription>
            </Alert>
          )}
          
          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          
          <Tabs defaultValue="startup" onValueChange={(value) => setActiveRole(value as UserRole)}>
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="startup">Startup</TabsTrigger>
              <TabsTrigger value="investor">Investor</TabsTrigger>
            </TabsList>
            
            <TabsContent value="startup">
              <RegisterForm 
                role="startup" 
                handleRegister={handleRegister}
                isLoading={isLoading}
                name={name}
                email={email}
                password={password}
                confirmPassword={confirmPassword}
                setName={setName}
                setEmail={setEmail}
                setPassword={setPassword}
                setConfirmPassword={setConfirmPassword}
              />
            </TabsContent>
            
            <TabsContent value="investor">
              <RegisterForm 
                role="investor" 
                handleRegister={handleRegister}
                isLoading={isLoading}
                name={name}
                email={email}
                password={password}
                confirmPassword={confirmPassword}
                setName={setName}
                setEmail={setEmail}
                setPassword={setPassword}
                setConfirmPassword={setConfirmPassword}
              />
            </TabsContent>
          </Tabs>
        </CardContent>
        
        <CardFooter>
          <p className="text-sm text-center w-full">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Register;
