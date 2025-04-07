
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';
import { RegisterForm } from '@/components/auth';
import { UserRole, useAuth } from '@/contexts/auth';
import { toast } from '@/hooks/use-toast';

const Register = () => {
  const [activeRole, setActiveRole] = useState<UserRole>('startup');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const confirmPassword = formData.get('confirmPassword') as string;
    
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
      } else if (error.message.includes("network") || error.message.includes("internet") || !navigator.onLine) {
        setError("Unable to connect. Please check your internet connection or try again later.");
      } else {
        setError(error.message || "Registration failed. Please try again.");
      }
    } finally {
      setIsLoading(false);
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
              />
            </TabsContent>
            
            <TabsContent value="investor">
              <RegisterForm 
                role="investor" 
                handleRegister={handleRegister}
                isLoading={isLoading}
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
