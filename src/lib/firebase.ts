
import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
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

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Storage
export const storage = getStorage(app);

// Enable offline persistence for Firestore
// This allows the app to work with cached data when offline
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

// Connect to emulators if in development
if (import.meta.env.DEV) {
  try {
    // Uncomment these lines if you're running Firebase emulators locally
    // connectFirestoreEmulator(db, 'localhost', 8080);
    // connectStorageEmulator(storage, 'localhost', 9199);
    // connectAuthEmulator(auth, 'http://localhost:9099');
  } catch (error) {
    console.error("Failed to connect to emulators:", error);
  }
}

// Add network status detection
if (typeof window !== 'undefined') {
  window.addEventListener('online', () => {
    console.log('App is now online');
  });
  
  window.addEventListener('offline', () => {
    console.log('App is now offline');
  });
}

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
