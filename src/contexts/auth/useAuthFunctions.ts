
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
      
      // Improved error messages
      if (error.message.includes('fetch')) {
        throw new Error("Network connection error. Please check your internet connection and try again.");
      } else if (error.message.includes('Invalid login credentials')) {
        throw new Error("Invalid email or password. Please check your credentials and try again.");
      } else {
        throw new Error(error.message || "Failed to login. Please check your credentials.");
      }
    }
  };

  const register = async (name: string, email: string, password: string, role: UserRole) => {
    try {
      // Check network connection first
      if (!navigator.onLine) {
        throw new Error("You are currently offline. Please connect to the internet to register.");
      }
      
      console.log("Starting registration process with Supabase");
      
      // Create user in Supabase Auth with retry logic
      const { data, error } = await retryOperation(
        async () => supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              name,
              role,
            }
          }
        }),
        3, // 3 retry attempts
        1000 // 1 second delay between retries
      );
      
      if (error) throw error;
      
      console.log("Registration successful with Supabase:", data);
      
      toast({
        title: "Registration Successful",
        description: `Your ${role} account has been created successfully.`,
      });
      
      // User state will be updated by onAuthStateChange listener
    } catch (error: any) {
      console.error('Registration error:', error);
      
      // Enhanced error messages based on common issues
      if (error.message.includes('fetch') || error.message.includes('network')) {
        throw new Error("Network connection error. Please check your internet connection and try again.");
      } else if (error.message.includes('User already registered')) {
        throw new Error("This email is already registered. Please try logging in instead.");
      } else if (error.message.includes('rate limit')) {
        throw new Error("Too many registration attempts. Please wait a moment and try again.");
      } else {
        throw new Error(error.message || "Failed to register. Please try again.");
      }
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
  
  // Helper function for retry logic
  const retryOperation = async (operation: () => Promise<any>, maxRetries: number, delay: number) => {
    let lastError;
    
    for (let i = 0; i < maxRetries; i++) {
      try {
        return await operation();
      } catch (error: any) {
        console.log(`Attempt ${i + 1} failed. Retrying...`, error);
        lastError = error;
        
        if (i < maxRetries - 1) {
          await new Promise(resolve => setTimeout(resolve, delay));
        }
      }
    }
    
    throw lastError;
  };

  return {
    user,
    isAuthenticated,
    login,
    register,
    logout
  };
};
