
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';
import { RegisterForm } from '@/components/auth';
import { UserRole, useAuth } from '@/contexts/auth';
import { toast } from '@/hooks/use-toast';

const Register = () => {
  const [activeRole, setActiveRole] = useState<UserRole>('startup');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    // Validación básica
    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }
    
    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      return;
    }
    
    try {
      setIsLoading(true);
      
      await register(name, email, password, activeRole);
      
      toast({
        title: "Registro exitoso",
        description: `Tu cuenta de ${activeRole === 'startup' ? 'startup' : 'inversor'} ha sido creada. ¡Bienvenido!`,
      });
      
      // Navegar al dashboard
      navigate(`/dashboard/${activeRole}`);
    } catch (error: any) {
      console.error('Error de registro:', error);
      setError(error.message || "Error al registrarse. Por favor, inténtalo de nuevo.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Crear una cuenta</CardTitle>
          <CardDescription className="text-center">
            Regístrate como startup o inversor para comenzar
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
            ¿Ya tienes una cuenta?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Iniciar sesión
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Register;
