
import React, { useState, useEffect, ReactNode } from 'react';
import { auth, db } from '@/lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { UserRole, User, AuthContextType } from './AuthTypes';
import { AuthContext } from './AuthContext';
import { useAuthFunctions } from './useAuthFunctions';
import { toast } from '@/hooks/use-toast';

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);

  console.log("Auth state:", { user, isAuthenticated }); // Debug auth state

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        try {
          // Try to get user role from Firestore
          const userDocRef = doc(db, 'users', firebaseUser.uid);
          const userDoc = await getDoc(userDocRef);
          
          let role: UserRole = 'startup'; // Default role
          let name = firebaseUser.displayName || '';
          
          if (userDoc.exists()) {
            // Use data from Firestore if available
            const userData = userDoc.data();
            role = userData.role as UserRole;
            name = userData.name || name;
          } else if (firebaseUser.uid.startsWith('mock-')) {
            // This is a mock user in development mode
            console.log("Using mock user data in development mode");
          } else {
            // If no doc exists but not a mock user, set it up
            console.log("User exists in Auth but not in Firestore");
          }
          
          setUser({
            id: firebaseUser.uid,
            name: name,
            email: firebaseUser.email || '',
            role: role
          });
          setIsAuthenticated(true);
          
          // Show welcome toast for sign-in (except initial load)
          if (!loading) {
            toast({
              title: "Signed In",
              description: `Welcome ${name}!`,
            });
          }
          
        } catch (error) {
          console.error("Error getting user data:", error);
          // Still set basic user info even if Firestore fetch fails
          setUser({
            id: firebaseUser.uid,
            name: firebaseUser.displayName || '',
            email: firebaseUser.email || '',
            role: 'startup' // Default role
          });
          setIsAuthenticated(true);
        }
      } else {
        setUser(null);
        setIsAuthenticated(false);
        
        // Show signout toast (except for initial load)
        if (!loading && isAuthenticated) {
          toast({
            title: "Signed Out",
            description: "You have been signed out successfully.",
          });
        }
      }
      
      setLoading(false);
    });

    return () => unsubscribe();
  }, [loading, isAuthenticated]);

  // Use our custom hook to get auth functions
  const authValue = useAuthFunctions(user, setUser, isAuthenticated, setIsAuthenticated);

  return (
    <AuthContext.Provider value={authValue}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
