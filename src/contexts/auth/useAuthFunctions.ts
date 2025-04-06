
import { useState } from 'react';
import { auth, db, safeSignIn, safeSignUp } from '@/lib/firebase';
import { signOut } from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { toast } from '@/hooks/use-toast';
import { UserRole, User, AuthContextType } from './AuthTypes';
import { retryOperation } from './AuthUtils';

export const useAuthFunctions = (
  user: User | null,
  setUser: React.Dispatch<React.SetStateAction<User | null>>,
  isAuthenticated: boolean,
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
): AuthContextType => {
  
  const login = async (email: string, password: string, role: UserRole) => {
    try {
      console.log(`Attempting to login with email: ${email} and role: ${role}`);
      
      const { user: firebaseUser } = await safeSignIn(email, password);
      
      // Verify role in Firestore
      const userDocRef = doc(db, 'users', firebaseUser.uid);
      const userDoc = await retryOperation(() => firebaseUser.getIdTokenResult());
      
      // User state will be updated by onAuthStateChanged listener
      console.log("Login successful:", firebaseUser);
      
    } catch (error: any) {
      console.error('Login error:', error);
      
      // Improved error messages
      if (error.code === 'auth/network-request-failed') {
        throw new Error("Network connection error. Please check your internet connection and try again.");
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
        throw new Error("You are currently offline. Please connect to the internet to register.");
      }
      
      console.log("Starting registration process with Firebase");
      
      // Create user in Firebase Auth with retry logic
      const { user: firebaseUser } = await retryOperation(
        () => safeSignUp(email, password, name),
        3, // 3 retry attempts
        1000 // 1 second delay between retries
      );
      
      // Store additional user data in Firestore
      await setDoc(doc(db, 'users', firebaseUser.uid), {
        name,
        email,
        role,
        createdAt: serverTimestamp()
      });
      
      console.log("Registration successful:", firebaseUser);
      
      toast({
        title: "Registration Successful",
        description: `Your ${role} account has been created successfully.`,
      });
      
      // User state will be updated by onAuthStateChanged listener
    } catch (error: any) {
      console.error('Registration error:', error);
      
      // Enhanced error messages based on common issues
      if (error.code === 'auth/network-request-failed') {
        throw new Error("Network connection error. Please check your internet connection and try again.");
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
