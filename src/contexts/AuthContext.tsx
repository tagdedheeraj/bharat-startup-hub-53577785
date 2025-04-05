
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define user types
export type UserRole = 'startup' | 'investor' | null;

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string, role: UserRole) => Promise<void>;
  register: (name: string, email: string, password: string, role: UserRole) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  // Check for existing session on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  // Simple mock login function (in a real app, this would call an API)
  const login = async (email: string, password: string, role: UserRole) => {
    // This is just a mock implementation
    const mockUser: User = {
      id: role === 'startup' ? 'startup-123' : 'investor-456',
      name: role === 'startup' ? 'Sample Startup' : 'Sample Investor',
      email,
      role
    };

    // In a real app, you would validate credentials against a backend
    console.log(`Logging in as ${role} with email: ${email}`);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Store user in local storage
    localStorage.setItem('user', JSON.stringify(mockUser));
    setUser(mockUser);
    setIsAuthenticated(true);
  };

  const register = async (name: string, email: string, password: string, role: UserRole) => {
    // This is just a mock implementation
    const mockUser: User = {
      id: Math.random().toString(36).substring(2, 11),
      name,
      email,
      role
    };

    // In a real app, you would register the user with a backend
    console.log(`Registering as ${role} with name: ${name}, email: ${email}`);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Store user in local storage
    localStorage.setItem('user', JSON.stringify(mockUser));
    setUser(mockUser);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
