
import React, { ReactNode, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '@/lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { toast } from 'sonner';

interface AdminProtectedRouteProps {
  children: ReactNode;
}

const AdminProtectedRoute: React.FC<AdminProtectedRouteProps> = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        console.log("Checking admin status...");
        
        // Check if adminAuth is in localStorage
        const adminAuth = localStorage.getItem('adminAuth');
        const adminUid = localStorage.getItem('adminUid');
        
        if (!adminAuth || !adminUid) {
          console.log("No admin auth in localStorage");
          setIsAdmin(false);
          setIsLoading(false);
          return;
        }
        
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
          if (user) {
            console.log("User is authenticated:", user.uid);
            // Verify UID matches the one in localStorage
            if (user.uid !== adminUid) {
              console.log("User ID doesn't match stored admin ID");
              localStorage.removeItem('adminAuth');
              localStorage.removeItem('adminEmail');
              localStorage.removeItem('adminUid');
              setIsAdmin(false);
              setIsLoading(false);
              return;
            }
            
            // Check if user has admin role in Firestore
            const userDoc = await getDoc(doc(db, 'users', user.uid));
            const userData = userDoc.data();
            const hasAdminRole = userData && userData.role === 'admin';
            
            console.log("User Firestore data:", userData);
            
            if (hasAdminRole) {
              console.log("User confirmed as admin");
              setIsAdmin(true);
            } else {
              console.log("User does not have admin role");
              localStorage.removeItem('adminAuth');
              localStorage.removeItem('adminEmail');
              localStorage.removeItem('adminUid');
              setIsAdmin(false);
              toast.error("You do not have admin privileges");
            }
          } else {
            console.log("No authenticated user");
            localStorage.removeItem('adminAuth');
            localStorage.removeItem('adminEmail');
            localStorage.removeItem('adminUid');
            setIsAdmin(false);
          }
          setIsLoading(false);
        });
        
        return () => unsubscribe();
      } catch (error) {
        console.error("Error checking admin status:", error);
        setIsAdmin(false);
        setIsLoading(false);
      }
    };
    
    checkAdmin();
  }, []);

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin h-8 w-8 border-4 border-blue-500 rounded-full border-t-transparent"></div>
    </div>;
  }

  if (!isAdmin) {
    return <Navigate to="/admin" replace />;
  }

  return <>{children}</>;
};

export default AdminProtectedRoute;
