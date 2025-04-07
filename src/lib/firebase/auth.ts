
import { 
  getAuth, 
  connectAuthEmulator, 
  setPersistence, 
  browserLocalPersistence, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  User,
  updateProfile 
} from "firebase/auth";
import { app, useEmulators } from "./app";

// Initialize Authentication
export const auth = getAuth(app);

// Set local persistence for better offline support
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("Firebase Auth persistence set to local");
  })
  .catch((error) => {
    console.error("Error setting persistence:", error);
  });

// Connect to auth emulator if in development
if (useEmulators) {
  try {
    connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true });
    console.log('Connected to Firebase Auth emulator successfully');
  } catch (error) {
    console.error("Failed to connect to Auth emulator:", error);
  }
}

// Store mock users for dev environment
let mockUsers: Record<string, {email: string, password: string, displayName?: string}> = {};

// Create a mock user that satisfies the Firebase User interface
export const createMockFirebaseUser = (uid: string, email: string, displayName?: string): User => {
  const mockUser: any = {
    uid,
    email,
    displayName,
    emailVerified: false,
    isAnonymous: false,
    metadata: {
      creationTime: Date.now().toString(),
      lastSignInTime: Date.now().toString()
    },
    providerData: [
      {
        providerId: 'password',
        uid: email,
        displayName,
        email,
        phoneNumber: null,
        photoURL: null
      }
    ],
    refreshToken: 'mock-refresh-token',
    tenantId: null,
    delete: async () => Promise.resolve(),
    getIdToken: async () => Promise.resolve('mock-id-token'),
    getIdTokenResult: async () => Promise.resolve({
      token: 'mock-token',
      authTime: new Date().toISOString(),
      issuedAtTime: new Date().toISOString(),
      expirationTime: new Date(Date.now() + 3600000).toISOString(),
      signInProvider: 'password',
      signInSecondFactor: null,
      claims: {}
    }),
    reload: async () => Promise.resolve(),
    toJSON: () => ({}),
    phoneNumber: null,
    photoURL: null,
    providerId: 'firebase'
  };
  
  return mockUser as User;
};

// Helper function to check if the app can connect to Firebase
export const canConnectToFirebase = async (): Promise<boolean> => {
  try {
    const response = await fetch('https://firebase.googleapis.com/v1beta1/projects', {
      method: 'HEAD',
      mode: 'no-cors',
      cache: 'no-store'
    });
    return true;
  } catch (error) {
    console.warn("Cannot connect to Firebase:", error);
    return false;
  }
};

// Mock sign up for development mode when Firebase is unavailable
export const mockSignUp = async (email: string, password: string, displayName?: string) => {
  console.log("Using mock signup because Firebase is unavailable");
  const mockUid = `mock-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
  mockUsers[email] = { email, password, displayName };
  
  return {
    user: createMockFirebaseUser(mockUid, email, displayName)
  };
};

// Mock sign in for development mode when Firebase is unavailable
export const mockSignIn = async (email: string, password: string) => {
  console.log("Using mock signin because Firebase is unavailable");
  const user = mockUsers[email];
  
  if (!user || user.password !== password) {
    throw new Error("Invalid email or password");
  }
  
  return {
    user: createMockFirebaseUser(`mock-${email.replace(/[^a-z0-9]/gi, '')}`, email, user.displayName)
  };
};

// Safe sign up with improved error handling and fallbacks
export const safeSignUp = async (email: string, password: string, displayName?: string) => {
  // First try directly with Firebase - this works in most cases
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    
    // Update profile with displayName if provided
    if (displayName && userCredential.user) {
      await updateProfile(userCredential.user, { displayName });
    }
    
    return userCredential;
  } catch (error: any) {
    console.error("Sign up initial attempt error:", error);
    
    // If we're in development mode and it's a network error, use mock
    if (import.meta.env.DEV && 
        (error.code === 'auth/network-request-failed' || 
         !navigator.onLine || 
         error.message?.includes('fetch'))) {
      console.log("Falling back to mock signup in development mode");
      return mockSignUp(email, password, displayName);
    }
    
    // For production, we need to provide better error messages
    if (error.code === 'auth/network-request-failed' || !navigator.onLine) {
      throw new Error("Unable to connect to authentication service. Please check your internet connection and try again.");
    }
    
    throw error;
  }
};

// Safe sign in with improved error handling and fallbacks
export const safeSignIn = async (email: string, password: string) => {
  // First try directly with Firebase - this works in most cases
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error: any) {
    console.error("Sign in initial attempt error:", error);
    
    // If we're in development mode and it's a network error, use mock
    if (import.meta.env.DEV && 
        (error.code === 'auth/network-request-failed' || 
         !navigator.onLine || 
         error.message?.includes('fetch'))) {
      console.log("Falling back to mock signin in development mode");
      return mockSignIn(email, password);
    }
    
    // For production, we need to provide better error messages
    if (error.code === 'auth/network-request-failed' || !navigator.onLine) {
      throw new Error("Unable to connect to authentication service. Please check your internet connection and try again.");
    }
    
    throw error;
  }
};
