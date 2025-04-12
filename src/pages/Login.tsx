
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
      
      // La navegación se hará después de que el login sea exitoso
      navigate(`/dashboard/${activeRole}`);
    } catch (error: any) {
      console.error('Error de inicio de sesión:', error);
      setError(error.message || "Error al iniciar sesión. Por favor, inténtalo de nuevo.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Iniciar sesión</CardTitle>
          <CardDescription className="text-center">
            Accede a tu cuenta
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
              <TabsTrigger value="investor">Inversor</TabsTrigger>
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
            ¿No tienes una cuenta?{" "}
            <Link to="/register" className="text-blue-600 hover:underline">
              Registrarse
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
