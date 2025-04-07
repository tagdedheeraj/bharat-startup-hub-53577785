
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';
import { LoginForm } from '@/components/auth';
import { UserRole, useAuth } from '@/contexts/auth';
import { toast } from '@/hooks/use-toast';

const Login = () => {
  const [activeRole, setActiveRole] = useState<UserRole>('startup');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    
    try {
      setIsLoading(true);
      
      await login(email, password, activeRole);
      
      toast({
        title: "Login Successful",
        description: `Welcome back! You've been logged in as a ${activeRole}.`,
      });
      
      // Navigate to dashboard
      navigate(`/dashboard/${activeRole}`);
    } catch (error: any) {
      console.error('Login error:', error);
      
      // Simplify error messages for better user experience
      if (error.code === 'auth/invalid-credential' || error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        setError("Invalid email or password. Please try again.");
      } else if (error.message.includes("network") || error.message.includes("internet") || !navigator.onLine) {
        setError("Unable to connect. Please check your internet connection or try again later.");
      } else {
        setError(error.message || "Login failed. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Login</CardTitle>
          <CardDescription className="text-center">
            Sign in to access your account
          </CardDescription>
        </CardHeader>
        
        <CardContent>
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
              <LoginForm 
                activeRole="startup"
                handleLogin={handleLogin}
                isLoading={isLoading}
              />
            </TabsContent>
            
            <TabsContent value="investor">
              <LoginForm 
                activeRole="investor"
                handleLogin={handleLogin}
                isLoading={isLoading}
              />
            </TabsContent>
          </Tabs>
        </CardContent>
        
        <CardFooter>
          <p className="text-sm text-center w-full">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-600 hover:underline">
              Register
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
