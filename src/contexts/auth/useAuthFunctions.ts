
import { auth, db, safeSignIn, safeSignUp } from '@/lib/firebase';
import { signOut } from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { toast } from '@/hooks/use-toast';
import { UserRole, User, AuthContextType } from './AuthTypes';

export const useAuthFunctions = (
  user: User | null,
  setUser: React.Dispatch<React.SetStateAction<User | null>>,
  isAuthenticated: boolean,
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
): AuthContextType => {
  
  const login = async (email: string, password: string, role: UserRole): Promise<void> => {
    try {
      console.log(`Attempting to login with email: ${email} and role: ${role}`);
      
      // Attempt to sign in with improved error handling
      const { user: firebaseUser } = await safeSignIn(email, password);
      
      console.log("Login successful:", firebaseUser);
      
      // The AuthStateChanged listener will update user state
      return;
      
    } catch (error: any) {
      console.error('Login error:', error);
      
      // Improve error messaging
      if (error.code === 'auth/invalid-credential' || error.code === 'auth/wrong-password') {
        throw new Error("Invalid email or password. Please check your credentials and try again.");
      } else if (error.code === 'auth/user-not-found') {
        throw new Error("User not found. Please check your email or register for a new account.");
      } else if (error.code === 'auth/too-many-requests') {
        throw new Error("Too many failed login attempts. Please try again later or reset your password.");
      } else if (!navigator.onLine || error.code === 'auth/network-request-failed' || error.message?.includes("connect")) {
        throw new Error("Unable to connect to the authentication service. Please check your internet connection and try again.");
      } else {
        throw new Error(error.message || "Failed to login. Please try again.");
      }
    }
  };

  const register = async (name: string, email: string, password: string, role: UserRole): Promise<void> => {
    try {
      console.log("Starting registration process");
      
      // Create user in Firebase Auth with improved error handling
      const { user: firebaseUser } = await safeSignUp(email, password, name);
      
      console.log("User created in Firebase Auth:", firebaseUser);
      
      // In development mode with mock user, we can skip Firestore
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
          
          console.log("User data stored in Firestore successfully");
        } catch (firestoreError) {
          console.warn("Could not save user data to Firestore, but account was created", firestoreError);
          // Don't fail registration if Firestore fails but auth succeeded
          toast({
            title: "Account Created",
            description: "Your account was created but some profile data couldn't be saved. This will be fixed automatically when you're back online.",
          });
        }
      }
      
      console.log("Registration successful:", firebaseUser);
      
      // The AuthStateChanged listener will update user state
      return;
      
    } catch (error: any) {
      console.error('Registration error:', error);
      
      // Improve error messaging
      if (error.code === 'auth/email-already-in-use') {
        throw new Error("This email is already registered. Please try logging in instead.");
      } else if (error.code === 'auth/weak-password') {
        throw new Error("Password is too weak. Please use a stronger password.");
      } else if (error.code === 'auth/invalid-email') {
        throw new Error("Invalid email format. Please check your email address.");
      } else if (!navigator.onLine || error.code === 'auth/network-request-failed' || error.message?.includes("connect")) {
        throw new Error("Unable to connect to the authentication service. Please check your internet connection and try again.");
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
