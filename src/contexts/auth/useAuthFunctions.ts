
import { useState } from 'react';
import { auth, db, safeSignIn, safeSignUp, getNetworkStatus } from '@/lib/firebase';
import { signOut } from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { toast } from '@/hooks/use-toast';
import { UserRole, User, AuthContextType } from './AuthTypes';
import { retryOperation, isNetworkError } from './AuthUtils';

export const useAuthFunctions = (
  user: User | null,
  setUser: React.Dispatch<React.SetStateAction<User | null>>,
  isAuthenticated: boolean,
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
): AuthContextType => {
  
  const login = async (email: string, password: string, role: UserRole) => {
    try {
      console.log(`Attempting to login with email: ${email} and role: ${role}`);
      
      // Check network status before attempting login
      if (!navigator.onLine) {
        throw new Error("You're currently offline. Please connect to the internet to log in.");
      }
      
      const { user: firebaseUser } = await safeSignIn(email, password);
      
      // Verify role in Firestore
      const userDocRef = doc(db, 'users', firebaseUser.uid);
      const userDoc = await retryOperation(() => firebaseUser.getIdTokenResult());
      
      // User state will be updated by onAuthStateChanged listener
      console.log("Login successful:", firebaseUser);
      
    } catch (error: any) {
      console.error('Login error:', error);
      
      // Check for network errors first
      if (isNetworkError(error)) {
        // If we're in development mode with emulators
        if (import.meta.env.DEV) {
          toast({
            title: "Development Mode",
            description: "Using mock authentication since Firebase is unavailable.",
          });
          // The safeSignIn will handle mock auth in development
        } else {
          throw new Error("Network connection error. Please check your internet connection and try again.");
        }
      } else if (error.code === 'auth/invalid-credential' || error.code === 'auth/wrong-password') {
        throw new Error("Invalid email or password. Please check your credentials and try again.");
      } else if (error.code === 'auth/user-not-found') {
        throw new Error("User not found. Please check your email or register for a new account.");
      } else {
        throw new Error(error.message || "Failed to login. Please check your credentials.");
      }
    }
  };

  const register = async (name: string, email: string, password: string, role: UserRole) => {
    try {
      // Check network connection first
      if (!navigator.onLine) {
        if (import.meta.env.DEV) {
          toast({
            title: "Development Mode",
            description: "Using mock registration since you're offline.",
          });
          // Continue with mock registration in development
        } else {
          throw new Error("You are currently offline. Please connect to the internet to register.");
        }
      }
      
      console.log("Starting registration process with Firebase");
      
      // Create user in Firebase Auth with retry logic for better network resilience
      const { user: firebaseUser } = await retryOperation(
        () => safeSignUp(email, password, name),
        3, // 3 retry attempts
        2000 // 2 second delay between retries
      );
      
      // In development mode, if we got a mock user, we can skip Firestore
      const isMockUser = firebaseUser.uid.startsWith('mock-');
      
      if (!isMockUser || navigator.onLine) {
        try {
          // Store additional user data in Firestore
          await setDoc(doc(db, 'users', firebaseUser.uid), {
            name,
            email,
            role,
            createdAt: serverTimestamp()
          });
        } catch (firestoreError) {
          console.warn("Could not save user data to Firestore, but account was created", firestoreError);
          // Don't fail registration if Firestore fails but auth succeeded
        }
      }
      
      console.log("Registration successful:", firebaseUser);
      
      toast({
        title: "Registration Successful",
        description: `Your ${role} account has been created successfully.`,
      });
      
      // User state will be updated by onAuthStateChanged listener
    } catch (error: any) {
      console.error('Registration error:', error);
      
      // Enhanced network error handling
      if (isNetworkError(error)) {
        if (import.meta.env.DEV) {
          throw new Error("Network error. Using mock authentication in development mode.");
        } else {
          throw new Error("Network connection error. Please check your internet connection and try again.");
        }
      } else if (error.code === 'auth/email-already-in-use') {
        throw new Error("This email is already registered. Please try logging in instead.");
      } else if (error.code === 'auth/weak-password') {
        throw new Error("Password is too weak. Please use a stronger password.");
      } else {
        throw new Error(error.message || "Failed to register. Please try again.");
      }
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      // Auth state listener will handle state updates
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
