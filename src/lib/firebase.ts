
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getStorage, connectStorageEmulator } from "firebase/storage";
import { getAnalytics, isSupported } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAb0wpqDwPPG-oepTYi97BUQtW80-SlW2Y",
  authDomain: "bharat-startup.firebaseapp.com",
  projectId: "bharat-startup",
  storageBucket: "bharat-startup.appspot.com", // Fixed storage bucket URL
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

// Connect to emulators if in development
if (import.meta.env.DEV) {
  try {
    // Uncomment these lines if you're running Firebase emulators locally
    // connectFirestoreEmulator(db, 'localhost', 8080);
    // connectStorageEmulator(storage, 'localhost', 9199);
  } catch (error) {
    console.error("Failed to connect to emulators:", error);
  }
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
