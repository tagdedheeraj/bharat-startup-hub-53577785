
import { 
  User as FirebaseUser
} from 'firebase/auth';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '@/lib/firebase';
import { UserRole, User } from './AuthTypes';

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
    return null;
  }
};

export const createUserRecord = async (
  firebaseUser: FirebaseUser, 
  name: string, 
  email: string, 
  role: UserRole
): Promise<void> => {
  // Store additional user data in Firestore
  await setDoc(doc(db, 'users', firebaseUser.uid), {
    name,
    email,
    role,
    createdAt: serverTimestamp()
  });
};

export const handleLoginError = (error: any): string => {
  console.error('Login error:', error);
  
  // Provide more specific error messages
  if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password' || error.code === 'auth/invalid-credential') {
    return 'Invalid email or password. Please try again.';
  } else if (error.code === 'auth/too-many-requests') {
    return 'Too many failed login attempts. Please try again later or reset your password.';
  } else if (error.code === 'auth/network-request-failed') {
    return 'Network error. Please check your internet connection and try again.';
  } else {
    return error.message || 'An error occurred during login.';
  }
};

export const handleRegistrationError = (error: any): string => {
  console.error('Registration error:', error);
  
  // Provide more specific error messages
  if (error.code === 'auth/email-already-in-use') {
    return 'This email is already registered. Please use a different email or try logging in.';
  } else if (error.code === 'auth/weak-password') {
    return 'Password is too weak. Please choose a stronger password.';
  } else if (error.code === 'auth/invalid-email') {
    return 'Invalid email address. Please check and try again.';
  } else if (error.code === 'auth/network-request-failed') {
    return 'Network error. Please check your internet connection and try again.';
  } else {
    return error.message || 'An error occurred during registration.';
  }
};

