
import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth, UserRole } from '@/contexts/AuthContext';

interface ProtectedRouteProps {
  children: ReactNode;
  allowedRoles?: UserRole[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  allowedRoles = ['startup', 'investor'] 
}) => {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Check if user role is allowed to access this route
  if (user && user.role && !allowedRoles.includes(user.role)) {
    // Redirect to appropriate dashboard based on role
    if (user.role === 'startup') {
      return <Navigate to="/dashboard/startup" replace />;
    } else if (user.role === 'investor') {
      return <Navigate to="/dashboard/investor" replace />;
    }
  }

  return <>{children}</>;
};

export default ProtectedRoute;
