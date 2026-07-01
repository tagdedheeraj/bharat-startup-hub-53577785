
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from './';

export const setupAdminUser = async () => {
  const email = 'admin@bharatstartupsolution.com';
  const password = 'admin@123';

  try {
    // Check if user already exists in auth
    try {
      // Try to sign in first to check if user exists
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Admin user already exists and credentials are correct');
      
      // Check if user document exists in Firestore
      const userRef = doc(db, 'users', auth.currentUser?.uid || '');
      const userDoc = await getDoc(userRef);
      
      if (!userDoc.exists()) {
        // User exists in auth but not in Firestore, create document
        await setDoc(userRef, {
          email,
          role: 'admin',
          createdAt: new Date(),
          updatedAt: new Date()
        });
        console.log('Added missing admin document to Firestore');
      }
      
      return true;
    } catch (signInError) {
      console.log('Admin user does not exist or credentials are incorrect, creating new user');
      
      // Create user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const { user } = userCredential;

      // Create admin document in Firestore
      await setDoc(doc(db, 'users', user.uid), {
        email,
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      });

      console.log('Admin user created successfully with UID:', user.uid);
      return true;
    }
  } catch (error: any) {
    if (error.code === 'auth/email-already-in-use') {
      console.log('Admin user already exists, but password might be incorrect');
      return true;
    }
    console.error('Error setting up admin user:', error);
    return false;
  }
};
