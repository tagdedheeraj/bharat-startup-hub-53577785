
import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator, setPersistence, browserLocalPersistence, signInWithEmailAndPassword, createUserWithEmailAndPassword, User } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator, enableIndexedDbPersistence } from "firebase/firestore";
import { getStorage, connectStorageEmulator } from "firebase/storage";
import { getAnalytics, isSupported } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAb0wpqDwPPG-oepTYi97BUQtW80-SlW2Y",
  authDomain: "bharat-startup.firebaseapp.com",
  projectId: "bharat-startup",
  storageBucket: "bharat-startup.firebasestorage.app",
  messagingSenderId: "483893755966",
  appId: "1:483893755966:web:8ab88e30679c35e7d8116f",
  measurementId: "G-7MEXQK6P5K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

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

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Storage
export const storage = getStorage(app);

// Enable offline persistence for Firestore
if (typeof window !== 'undefined') {
  enableIndexedDbPersistence(db)
    .then(() => {
      console.log("Firestore offline persistence enabled");
    })
    .catch((err) => {
      console.error("Error enabling offline persistence:", err);
      if (err.code === 'failed-precondition') {
        console.warn('Multiple tabs open, persistence can only be enabled in one tab at a time.');
      } else if (err.code === 'unimplemented') {
        console.warn('The current browser does not support offline persistence.');
      }
    });
}

// Check if Firebase emulators should be used
const useEmulators = import.meta.env.DEV;

// Connect to emulators if in development
if (useEmulators) {
  try {
    // These lines connect to Firebase emulators
    connectFirestoreEmulator(db, 'localhost', 8080);
    connectStorageEmulator(storage, 'localhost', 9199);
    connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true });
    console.log('Connected to Firebase emulators successfully');
  } catch (error) {
    console.error("Failed to connect to emulators:", error);
  }
}

// Add comprehensive network status detection
let isOnline = navigator.onLine;

if (typeof window !== 'undefined') {
  window.addEventListener('online', () => {
    console.log('App is now online');
    isOnline = true;
    
    // Dispatch a custom event that components can listen for
    window.dispatchEvent(new CustomEvent('app-online'));
  });
  
  window.addEventListener('offline', () => {
    console.log('App is now offline');
    isOnline = false;
    
    // Dispatch a custom event that components can listen for
    window.dispatchEvent(new CustomEvent('app-offline'));
  });
}

export const getNetworkStatus = () => isOnline;

// Improved mock Firebase auth for development mode
// Create a more complete mock user that satisfies the Firebase User interface
const createMockFirebaseUser = (uid: string, email: string, displayName?: string): User => {
  // Create a mock user object with all required properties of Firebase User
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
  
  // Cast the mock user to User type to satisfy TypeScript
  return mockUser as User;
};

// Store mock users for dev environment
let mockUsers: Record<string, {email: string, password: string, displayName?: string}> = {};

export const mockSignUp = async (email: string, password: string, displayName?: string) => {
  console.log("Using mock signup because Firebase is unavailable");
  const mockUid = `mock-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
  mockUsers[email] = { email, password, displayName };
  
  return {
    user: createMockFirebaseUser(mockUid, email, displayName)
  };
};

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

// Override Firebase auth methods for development if needed
// We'll attempt real Firebase first, then fall back to mock in development
export const safeSignUp = async (email: string, password: string, displayName?: string) => {
  try {
    return await createUserWithEmailAndPassword(auth, email, password);
  } catch (error: any) {
    // Only use mock in development and if it's a network error
    if (import.meta.env.DEV && error.code === 'auth/network-request-failed') {
      return mockSignUp(email, password, displayName);
    }
    throw error;
  }
};

export const safeSignIn = async (email: string, password: string) => {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error: any) {
    // Only use mock in development and if it's a network error
    if (import.meta.env.DEV && error.code === 'auth/network-request-failed') {
      return mockSignIn(email, password);
    }
    throw error;
  }
};

// Initialize Analytics conditionally (only in browser environments)
export const initAnalytics = async () => {
  try {
    if (await isSupported()) {
      return getAnalytics(app);
    }
    return null;
  } catch (error) {
    console.error("Firebase Analytics error:", error);
    return null;
  }
};

export default app;
