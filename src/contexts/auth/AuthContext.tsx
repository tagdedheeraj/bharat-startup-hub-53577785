
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';
import { UserRole, User, AuthContextType } from './AuthTypes';

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);

  console.log("Auth state:", { user, isAuthenticated }); // Debug auth state

  // Listen for auth state changes
  useEffect(() => {
    // Set up auth state listener first
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log("Supabase auth state changed:", event, session);
        if (session) {
          // Get user's role from metadata
          const role = session.user?.user_metadata?.role as UserRole || 'startup';

          setUser({
            id: session.user.id,
            name: session.user.user_metadata?.name || '',
            email: session.user.email || '',
            role: role
          });
          setIsAuthenticated(true);
        } else {
          setUser(null);
          setIsAuthenticated(false);
        }
      }
    );

    // Then check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log("Retrieved session:", session);
      if (session) {
        // Get user's role from metadata
        const role = session.user?.user_metadata?.role as UserRole || 'startup';

        setUser({
          id: session.user.id,
          name: session.user.user_metadata?.name || '',
          email: session.user.email || '',
          role: role
        });
        setIsAuthenticated(true);
      }
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const login = async (email: string, password: string, role: UserRole) => {
    try {
      console.log(`Attempting to login with email: ${email} and role: ${role}`);
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });
      
      if (error) throw error;
      
      console.log("Login successful with Supabase:", data);
      
      // Check if user has the role they're trying to log in with
      if (data.user.user_metadata?.role && data.user.user_metadata.role !== role) {
        // If roles don't match, log them out and throw an error
        console.error(`Role mismatch: user is ${data.user.user_metadata.role}, trying to login as ${role}`);
        await supabase.auth.signOut();
        throw new Error(`You are registered as a ${data.user.user_metadata.role}, not as a ${role}.`);
      }
      
      // User state will be updated by onAuthStateChange listener
    } catch (error: any) {
      console.error('Login error:', error);
      throw new Error(error.message || "Failed to login. Please check your credentials.");
    }
  };

  const register = async (name: string, email: string, password: string, role: UserRole) => {
    try {
      // Create user in Supabase Auth
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name,
            role,
          }
        }
      });
      
      if (error) throw error;
      
      console.log("Registration successful with Supabase:", data);
      
      toast({
        title: "Registration Successful",
        description: `Your ${role} account has been created successfully.`,
      });
      
      // User state will be updated by onAuthStateChange listener
    } catch (error: any) {
      console.error('Registration error:', error);
      throw new Error(error.message || "Failed to register. Please try again.");
    }
  };

  const logout = async () => {
    try {
      await supabase.auth.signOut();
      setUser(null);
      setIsAuthenticated(false);
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, register, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
