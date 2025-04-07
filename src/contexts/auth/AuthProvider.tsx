
import React, { useState, useEffect, ReactNode } from 'react';
import { User, UserRole, AuthContextType } from './AuthTypes';
import { AuthContext } from './AuthContext';
import { toast } from '@/hooks/use-toast';
import * as localAuth from '@/lib/localStorage/auth';

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);

  console.log("Auth state:", { user, isAuthenticated }); // Debug auth state

  // Cargar usuario desde localStorage al inicio
  useEffect(() => {
    const storedUser = localAuth.getCurrentUser();
    if (storedUser) {
      setUser(storedUser);
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  // Funciones de autenticación
  const login = async (email: string, password: string, role: UserRole): Promise<void> => {
    try {
      await localAuth.login(email, password, role);
      
      const loggedInUser = localAuth.getCurrentUser();
      if (loggedInUser) {
        setUser(loggedInUser);
        setIsAuthenticated(true);
        
        toast({
          title: "Inicio de sesión exitoso",
          description: `¡Bienvenido ${loggedInUser.name}!`,
        });
      }
    } catch (error: any) {
      console.error('Error de inicio de sesión:', error);
      throw error;
    }
  };

  const register = async (name: string, email: string, password: string, role: UserRole): Promise<void> => {
    try {
      await localAuth.register(name, email, password, role);
      
      const registeredUser = localAuth.getCurrentUser();
      if (registeredUser) {
        setUser(registeredUser);
        setIsAuthenticated(true);
        
        toast({
          title: "Registro exitoso",
          description: `¡Bienvenido ${registeredUser.name}!`,
        });
      }
    } catch (error: any) {
      console.error('Error de registro:', error);
      throw error;
    }
  };

  const logout = async (): Promise<void> => {
    try {
      await localAuth.logout();
      setUser(null);
      setIsAuthenticated(false);
      
      toast({
        title: "Sesión cerrada",
        description: "Has cerrado sesión correctamente.",
      });
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
      throw error;
    }
  };

  const authValue: AuthContextType = {
    user,
    isAuthenticated,
    login,
    register,
    logout
  };

  return (
    <AuthContext.Provider value={authValue}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
