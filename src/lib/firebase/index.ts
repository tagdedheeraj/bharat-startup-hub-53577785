
// Re-export Firebase services
export { app, useEmulators, initAnalytics } from './app';
export { 
  auth, 
  safeSignIn, 
  safeSignUp, 
  mockSignIn, 
  mockSignUp, 
  createMockFirebaseUser,
  canConnectToFirebase
} from './auth';
export { db } from './firestore';
export { storage } from './storage';
export { getNetworkStatus } from './network';

// Export default app for compatibility
import { app } from './app';
export default app;
