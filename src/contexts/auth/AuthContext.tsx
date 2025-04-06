
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import {
  onAuthStateChanged,
  signOut,
  updateProfile,
  User as FirebaseUser
} from 'firebase/auth';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db, safeSignIn, safeSignUp } from '@/lib/firebase';
import { toast } from '@/hooks/use-toast';
import { UserRole, User, AuthContextType } from './AuthTypes';
import { fetchUserData, createUserRecord, handleLoginError, handleRegistrationError } from './AuthUtils';

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
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      console.log("Firebase auth state changed:", firebaseUser); // Debug Firebase auth state
      
      if (firebaseUser) {
        try {
          const userData = await fetchUserData(firebaseUser);
          
          if (userData) {
            setUser(userData);
            setIsAuthenticated(true);
          } else {
            // User record in Firestore not found
            await signOut(auth);
            setUser(null);
            setIsAuthenticated(false);
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
          setUser(null);
          setIsAuthenticated(false);
        }
      } else {
        setUser(null);
        setIsAuthenticated(false);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = async (email: string, password: string, role: UserRole) => {
    try {
      console.log(`Attempting to login with email: ${email} and role: ${role}`);
      
      const userCredential = await safeSignIn(email, password);
      const firebaseUser = userCredential.user as FirebaseUser;
      
      console.log("Login successful with Firebase:", firebaseUser);
      
      try {
        // Get user role from Firestore
        const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
        
        if (userDoc.exists()) {
          const userData = userDoc.data();
          
          console.log("User document data:", userData);
          
          // Verify that the user has the role they're trying to log in with
          if (userData.role !== role) {
            // If roles don't match, log them out and throw an error
            console.error(`Role mismatch: user is ${userData.role}, trying to login as ${role}`);
            await signOut(auth);
            throw new Error(`You are registered as a ${userData.role}, not as a ${role}.`);
          }
          
          // Update local state
          setUser({
            id: firebaseUser.uid,
            name: firebaseUser.displayName || '',
            email: firebaseUser.email || '',
            role: userData.role as UserRole
          });
          setIsAuthenticated(true);
          
          console.log("Login successfully completed and state updated");
        } else {
          console.log("User document not found, creating new document");
          
          // If user doesn't exist in Firestore, create a record
          await setDoc(doc(db, 'users', firebaseUser.uid), {
            name: firebaseUser.displayName || '',
            email: firebaseUser.email || '',
            role: role,
            createdAt: serverTimestamp()
          });
          
          setUser({
            id: firebaseUser.uid,
            name: firebaseUser.displayName || '',
            email: firebaseUser.email || '',
            role: role
          });
          setIsAuthenticated(true);
          
          console.log("New user document created and state updated");
        }
      } catch (error: any) {
        // If there's an error with Firestore, we should still keep the user logged in
        // but display an error message
        console.error('Firestore error during login:', error);
        toast({
          title: "Warning",
          description: "Logged in, but user profile could not be loaded. Some features may be limited.",
          variant: "destructive"
        });
        
        // Set minimal user data from Firebase Auth
        setUser({
          id: firebaseUser.uid,
          name: firebaseUser.displayName || '',
          email: firebaseUser.email || '',
          role: role // Use the role they're trying to login with
        });
        setIsAuthenticated(true);
      }
    } catch (error: any) {
      throw new Error(handleLoginError(error));
    }
  };

  const register = async (name: string, email: string, password: string, role: UserRole) => {
    try {
      // Create user in Firebase Auth
      const userCredential = await safeSignUp(email, password);
      const firebaseUser = userCredential.user as FirebaseUser;
      
      // Update profile with name
      await updateProfile(firebaseUser, { displayName: name });
      
      try {
        // Store additional user data in Firestore
        await createUserRecord(firebaseUser, name, email, role);
        
        // Update local state
        setUser({
          id: firebaseUser.uid,
          name,
          email,
          role
        });
        setIsAuthenticated(true);
      } catch (firestoreError) {
        console.error('Firestore error during registration:', firestoreError);
        // If Firestore fails, we should still keep the user registered
        // but show a warning
        toast({
          title: "Registration Partial Success",
          description: "Account created, but profile data couldn't be saved. Some features may be limited.",
          variant: "destructive"
        });
        
        setUser({
          id: firebaseUser.uid,
          name,
          email,
          role
        });
        setIsAuthenticated(true);
      }
    } catch (error: any) {
      throw new Error(handleRegistrationError(error));
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
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
