
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth, UserRole } from '@/contexts/auth';
import { toast } from '@/hooks/use-toast';

export const useRegisterForm = () => {
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

  return {
    name,
    email,
    password,
    confirmPassword,
    activeRole,
    isLoading,
    error,
    setName,
    setEmail,
    setPassword,
    setConfirmPassword,
    setActiveRole,
    handleRegister
  };
};
