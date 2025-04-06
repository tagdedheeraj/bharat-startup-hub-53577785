
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
      // First, check if we're online
      if (!navigator.onLine) {
        throw new Error('You are offline. Please check your internet connection and try again.');
      }

      console.log(`Attempting to login with email: ${email} and role: ${role}`);
      
      // Attempt login with timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });
      
      clearTimeout(timeoutId);
      
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
      
      // Network error handling - more comprehensive
      if (!navigator.onLine || 
          error.message === 'Failed to fetch' || 
          error.message?.includes('network') ||
          error.code === 20 || // Supabase timeout code
          error.name === 'AbortError' ||
          error instanceof TypeError) {
        throw new Error('Network connection error. Please check your internet connection and try again.');
      }
      
      throw new Error(error.message || "Failed to login. Please check your credentials.");
    }
  };

  const register = async (name: string, email: string, password: string, role: UserRole) => {
    try {
      // First, verify we're online
      if (!navigator.onLine) {
        toast({
          title: "You're offline",
          description: "Please connect to the internet to create an account.",
          variant: "destructive"
        });
        throw new Error('You are offline. Please check your internet connection and try again.');
      }
      
      // Attempt to verify external connection to Supabase
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000);
        
        const response = await fetch('https://yzpshizqkdqjdqpcdwex.supabase.co/auth/v1/health', {
          method: 'GET',
          cache: 'no-store',
          signal: controller.signal
        });
        
        clearTimeout(timeoutId);
        
        if (!response.ok) {
          throw new Error('Cannot connect to authentication service. Please try again later.');
        }
      } catch (connectionError) {
        console.error('Connection check failed:', connectionError);
        toast({
          title: "Connection Issue",
          description: "Cannot reach authentication service. Please check your internet connection.",
          variant: "destructive"
        });
        throw new Error('Network connection error. Cannot reach authentication server.');
      }
      
      // Create user in Supabase Auth with timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000);
      
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
      
      clearTimeout(timeoutId);
      
      if (error) throw error;
      
      console.log("Registration successful with Supabase:", data);
      
      toast({
        title: "Registration Successful",
        description: `Your ${role} account has been created successfully.`,
      });
      
      // User state will be updated by onAuthStateChange listener
    } catch (error: any) {
      console.error('Registration error:', error);
      
      // Comprehensive network error handling
      if (!navigator.onLine || 
          error.message === 'Failed to fetch' || 
          error.message?.includes('network') ||
          error.code === 20 || // Supabase timeout code
          error.name === 'AbortError' ||
          error instanceof TypeError) {
        throw new Error('Network connection error. Please check your internet connection and try again.');
      }
      
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
