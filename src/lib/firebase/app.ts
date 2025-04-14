
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu5HXUQrhPnlKXCSOkMrWFzF4dY8CaGTQ",
  authDomain: "bharat-6c047.firebaseapp.com",
  projectId: "bharat-6c047",
  storageBucket: "bharat-6c047.firebasestorage.app",
  messagingSenderId: "847090887386",
  appId: "1:847090887386:web:d4ec3bebd0305ae65313e3",
  measurementId: "G-NRBMXPBVB0"
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
