import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User as FirebaseUser,
  updateProfile
} from 'firebase/auth';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '@/lib/firebase';
import { toast } from '@/hooks/use-toast';

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
  logout: () => Promise<void>;
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
  const [loading, setLoading] = useState(true);

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        try {
          // Get additional user data from Firestore
          const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
          
          if (userDoc.exists()) {
            const userData = userDoc.data();
            setUser({
              id: firebaseUser.uid,
              name: firebaseUser.displayName || '',
              email: firebaseUser.email || '',
              role: userData.role as UserRole
            });
            setIsAuthenticated(true);
          } else {
            // User record in Firestore not found
            console.error('User Firestore record not found');
            await logout();
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
          // Don't logout here, as it may be a temporary connectivity issue
          // Just set user to null and isAuthenticated to false
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
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const firebaseUser = userCredential.user;
      
      try {
        // Get user role from Firestore
        const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
        
        if (userDoc.exists()) {
          const userData = userDoc.data();
          
          // Verify that the user has the role they're trying to log in with
          if (userData.role !== role) {
            // If roles don't match, log them out and throw an error
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
        } else {
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
      console.error('Login error:', error);
      
      // Provide more specific error messages
      if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password' || error.code === 'auth/invalid-credential') {
        throw new Error('Invalid email or password. Please try again.');
      } else if (error.code === 'auth/too-many-requests') {
        throw new Error('Too many failed login attempts. Please try again later or reset your password.');
      } else {
        throw error;
      }
    }
  };

  const register = async (name: string, email: string, password: string, role: UserRole) => {
    try {
      // Create user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const firebaseUser = userCredential.user;
      
      // Update profile with name
      await updateProfile(firebaseUser, { displayName: name });
      
      try {
        // Store additional user data in Firestore
        await setDoc(doc(db, 'users', firebaseUser.uid), {
          name,
          email,
          role,
          createdAt: serverTimestamp()
        });
        
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
      console.error('Registration error:', error);
      
      // Provide more specific error messages
      if (error.code === 'auth/email-already-in-use') {
        throw new Error('This email is already registered. Please use a different email or try logging in.');
      } else if (error.code === 'auth/weak-password') {
        throw new Error('Password is too weak. Please choose a stronger password.');
      } else if (error.code === 'auth/invalid-email') {
        throw new Error('Invalid email address. Please check and try again.');
      } else {
        throw error;
      }
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
