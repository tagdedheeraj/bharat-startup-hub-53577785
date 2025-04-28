
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAb0wpqDwPPG-oepTYi97BUQtW80-SlW2Y",
  authDomain: "bharat-startup.firebaseapp.com",
  projectId: "bharat-startup",
  storageBucket: "bharat-startup.firebasestorage.app",  // Updated correct bucket
  messagingSenderId: "483893755966",
  appId: "1:483893755966:web:8ab88e30679c35e7d8116f",
  measurementId: "G-7MEXQK6P5K"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Use emulators only if specifically enabled via env var
export const useEmulators = import.meta.env.DEV && 
  import.meta.env.VITE_USE_FIREBASE_EMULATOR === 'true';

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
