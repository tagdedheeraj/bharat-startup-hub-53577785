
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth, UserRole } from '@/contexts/auth';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from '@/hooks/use-toast';
import { RegisterForm, ErrorAlert, NetworkStatusAlert } from '@/components/auth';
import { retryOperation } from '@/contexts/auth/AuthUtils';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeRole, setActiveRole] = useState<UserRole>('startup');
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  
  const { register } = useAuth();
  const navigate = useNavigate();

  // Monitor online status
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

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
      
      // Use the retry operation utility for better resilience
      await retryOperation(async () => {
        await register(name, email, password, activeRole);
      }, 3);
      
      toast({
        title: "Registration Successful",
        description: `Your ${activeRole} account has been created successfully.`,
      });
      
      // Redirect to the appropriate dashboard
      navigate(`/dashboard/${activeRole}`);
    } catch (error: any) {
      console.error('Registration error:', error);
      setError(error.message || "Unable to create your account. Please try again.");
      
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
