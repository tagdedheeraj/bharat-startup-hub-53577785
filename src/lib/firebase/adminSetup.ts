
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from './';

export const setupAdminUser = async () => {
  const email = 'admin@bharatstartupsolution.com';
  const password = 'admin@123';

  try {
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

    console.log('Admin user created successfully');
    return true;
  } catch (error: any) {
    if (error.code === 'auth/email-already-in-use') {
      console.log('Admin user already exists');
      return true;
    }
    console.error('Error setting up admin user:', error);
    return false;
  }
};
