
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';
import { UserRole, User, AuthContextType } from './AuthTypes';

export const useAuthFunctions = (
  user: User | null,
  setUser: React.Dispatch<React.SetStateAction<User | null>>,
  isAuthenticated: boolean,
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
): AuthContextType => {
  
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

  return {
    user,
    isAuthenticated,
    login,
    register,
    logout
  };
};
