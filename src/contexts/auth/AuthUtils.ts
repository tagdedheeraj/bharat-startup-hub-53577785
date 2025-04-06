
import { 
  User as FirebaseUser
} from 'firebase/auth';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '@/lib/firebase';
import { UserRole, User } from './AuthTypes';
import { toast } from '@/hooks/use-toast';

export const fetchUserData = async (firebaseUser: FirebaseUser): Promise<User | null> => {
  try {
    // Get additional user data from Firestore
    const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
    
    if (userDoc.exists()) {
      const userData = userDoc.data();
      
      return {
        id: firebaseUser.uid,
        name: firebaseUser.displayName || '',
        email: firebaseUser.email || '',
        role: userData.role as UserRole
      };
    }
    
    console.error('User Firestore record not found');
    return null;
  } catch (error) {
    console.error('Error fetching user data:', error);
    
    // If we're in development mode and there's a network error, return a mock user
    if (import.meta.env.DEV && error instanceof Error && 
        (error.message.includes('network') || !navigator.onLine)) {
      console.log('Returning mock user data in development mode');
      return {
        id: firebaseUser.uid,
        name: firebaseUser.displayName || '',
        email: firebaseUser.email || '',
        role: 'startup' // Default role
      };
    }
    
    return null;
  }
};

export const createUserRecord = async (
  firebaseUser: FirebaseUser, 
  name: string, 
  email: string, 
  role: UserRole
): Promise<void> => {
  try {
    // Store additional user data in Firestore
    await setDoc(doc(db, 'users', firebaseUser.uid), {
      name,
      email,
      role,
      createdAt: serverTimestamp()
    });
  } catch (error) {
    console.error('Error creating user record:', error);
    
    // If we're in development mode, don't throw the error
    if (!import.meta.env.DEV) {
      throw error;
    }
    
    toast({
      title: "Warning",
      description: "User profile could not be saved to the database. Some features may be limited in offline mode.",
      variant: "destructive"
    });
  }
};

export const isNetworkError = (error: any): boolean => {
  return (
    error.code === 'auth/network-request-failed' ||
    error.message?.includes('network') ||
    error.message?.includes('internet') ||
    error.message?.includes('offline') ||
    error.code === 'failed-precondition' ||
    !navigator.onLine
  );
};

export const handleLoginError = (error: any): string => {
  console.error('Login error:', error);
  
  // Check for network errors first
  if (isNetworkError(error)) {
    if (!navigator.onLine) {
      return 'You are currently offline. Please connect to the internet to log in.';
    }
    
    // For development mode, provide a special message
    if (import.meta.env.DEV) {
      return 'Network error. Firebase emulators may not be running. In development mode, mock authentication will be used.';
    }
    
    return 'Network error. Please check your internet connection and try again.';
  }
  
  // Provide more specific error messages
  if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password' || error.code === 'auth/invalid-credential') {
    return 'Invalid email or password. Please try again.';
  } else if (error.code === 'auth/too-many-requests') {
    return 'Too many failed login attempts. Please try again later or reset your password.';
  } else {
    return error.message || 'An error occurred during login.';
  }
};

export const handleRegistrationError = (error: any): string => {
  console.error('Registration error:', error);
  
  // Check for network errors first
  if (isNetworkError(error)) {
    if (!navigator.onLine) {
      return 'You are currently offline. Please connect to the internet to register.';
    }
    
    // For development mode, provide a special message
    if (import.meta.env.DEV) {
      return 'Network error. Firebase emulators may not be running. In development mode, mock authentication will be used.';
    }
    
    return 'Network error. Please check your internet connection and try again.';
  }
  
  // Provide more specific error messages
  if (error.code === 'auth/email-already-in-use') {
    return 'This email is already registered. Please use a different email or try logging in.';
  } else if (error.code === 'auth/weak-password') {
    return 'Password is too weak. Please choose a stronger password.';
  } else if (error.code === 'auth/invalid-email') {
    return 'Invalid email address. Please check and try again.';
  } else {
    return error.message || 'An error occurred during registration.';
  }
};

export const retryOperation = async <T>(
  operation: () => Promise<T>,
  maxRetries: number = 3,
  retryDelay: number = 1000
): Promise<T> => {
  let lastError: any;
  
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      return await operation();
    } catch (error: any) {
      console.log(`Attempt ${attempt + 1} failed:`, error);
      lastError = error;
      
      // Only retry for network errors
      if (!isNetworkError(error)) {
        throw error;
      }
      
      // If this isn't the last attempt, wait before retrying
      if (attempt < maxRetries - 1) {
        await new Promise(resolve => setTimeout(resolve, retryDelay * (attempt + 1)));
      }
    }
  }
  
  throw lastError;
};
