
import { getStorage, connectStorageEmulator } from "firebase/storage";
import { app, useEmulators } from "./app";

// Initialize Storage
export const storage = getStorage(app);

// Connect to Storage emulator if in development
if (useEmulators) {
  try {
    connectStorageEmulator(storage, 'localhost', 9199);
    console.log('Connected to Firebase Storage emulator successfully');
  } catch (error) {
    console.error("Failed to connect to Storage emulator:", error);
  }
}
