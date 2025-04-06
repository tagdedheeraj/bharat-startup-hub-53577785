
import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator, setPersistence, browserLocalPersistence } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator, enableIndexedDbPersistence } from "firebase/firestore";
import { getStorage, connectStorageEmulator } from "firebase/storage";
import { getAnalytics, isSupported } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAb0wpqDwPPG-oepTYi97BUQtW80-SlW2Y",
  authDomain: "bharat-startup.firebaseapp.com",
  projectId: "bharat-startup",
  storageBucket: "bharat-startup.appspot.com",
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
