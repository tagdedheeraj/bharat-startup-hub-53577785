
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth, UserRole } from '@/contexts/auth';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';
import { LoginForm, ErrorAlert } from '@/components/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeRole, setActiveRole] = useState<UserRole>('startup');
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }
    
    try {
      setIsLoading(true);
      await login(email, password, activeRole);
      
      toast({
        title: "Login Successful",
        description: `Welcome back! You've been logged in as a ${activeRole}.`,
      });
      
      // Redirect to the appropriate dashboard
      navigate(`/dashboard/${activeRole}`);
    } catch (error: any) {
      console.error('Login error:', error);
      setError(error.message || "Invalid email or password. Please try again.");
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
