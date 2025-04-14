
import { 
  getFirestore, 
  connectFirestoreEmulator, 
  enableIndexedDbPersistence,
  CACHE_SIZE_UNLIMITED,
  doc,
  getDoc
} from "firebase/firestore";
import { app, useEmulators } from "./app";
import { toast } from "sonner";

// Initialize Firestore
export const db = getFirestore(app);

// Connect to Firestore emulator if in development and emulators are enabled
if (useEmulators) {
  try {
    connectFirestoreEmulator(db, 'localhost', 8080);
    console.log('Connected to Firebase Firestore emulator successfully');
  } catch (error) {
    console.error("Failed to connect to Firestore emulator:", error);
    toast.error("Failed to connect to Firebase emulator. Some features may not work correctly.");
  }
} else {
  console.log('Using production Firebase instance');
}

// Enable offline persistence for Firestore with better error handling
if (typeof window !== 'undefined') {
  enableIndexedDbPersistence(db)
    .then(() => {
      console.log("Firestore offline persistence enabled");
    })
    .catch((err) => {
      console.error("Error enabling offline persistence:", err);
      if (err.code === 'failed-precondition') {
        console.warn('Multiple tabs open, persistence can only be enabled in one tab at a time.');
        toast.warning("Multiple tabs open. Offline data may not be available in this tab.");
      } else if (err.code === 'unimplemented') {
        console.warn('The current browser does not support offline persistence.');
        toast.warning("Your browser doesn't support offline functionality. Please stay connected to the internet.");
      }
    });
}

// Function to check if Firestore is accessible
export const isFirestoreAvailable = async (): Promise<boolean> => {
  try {
    // Try a simple operation to test connectivity
    const testDoc = doc(db, '_connectivity_test', 'test');
    await getDoc(testDoc);
    return true;
  } catch (error) {
    console.error("Firestore connectivity test failed:", error);
    return false;
  }
};
