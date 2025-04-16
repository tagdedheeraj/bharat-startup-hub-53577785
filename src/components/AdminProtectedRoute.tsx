
import React, { ReactNode, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '@/lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

interface AdminProtectedRouteProps {
  children: ReactNode;
}

const AdminProtectedRoute: React.FC<AdminProtectedRouteProps> = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
          if (user) {
            // Check if user has admin role in Firestore
            const userDoc = await getDoc(doc(db, 'users', user.uid));
            const userData = userDoc.data();
            const hasAdminRole = userData && userData.role === 'admin';
            
            if (hasAdminRole) {
              localStorage.setItem('adminAuth', 'true');
              localStorage.setItem('adminEmail', user.email || '');
              localStorage.setItem('adminUid', user.uid);
              setIsAdmin(true);
            } else {
              localStorage.removeItem('adminAuth');
              localStorage.removeItem('adminEmail');
              localStorage.removeItem('adminUid');
              setIsAdmin(false);
            }
          } else {
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
