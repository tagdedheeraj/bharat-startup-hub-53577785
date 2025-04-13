
import { 
  getFirestore, 
  connectFirestoreEmulator, 
  enableIndexedDbPersistence 
} from "firebase/firestore";
import { app, useEmulators } from "./app";

// Initialize Firestore
export const db = getFirestore(app);

// Connect to Firestore emulator if in development
if (useEmulators) {
  try {
    connectFirestoreEmulator(db, 'localhost', 8080);
    console.log('Connected to Firebase Firestore emulator successfully');
  } catch (error) {
    console.error("Failed to connect to Firestore emulator:", error);
  }
}

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
