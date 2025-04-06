
import React, { useState, useEffect, ReactNode } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { UserRole, User, AuthContextType } from './AuthTypes';
import { AuthContext } from './AuthContext';
import { useAuthFunctions } from './useAuthFunctions';

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
    // Set up auth state listener first
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log("Supabase auth state changed:", event, session);
        if (session) {
          // Get user's role from metadata
          const role = session.user?.user_metadata?.role as UserRole || 'startup';

          setUser({
            id: session.user.id,
            name: session.user.user_metadata?.name || '',
            email: session.user.email || '',
            role: role
          });
          setIsAuthenticated(true);
        } else {
          setUser(null);
          setIsAuthenticated(false);
        }
      }
    );

    // Then check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log("Retrieved session:", session);
      if (session) {
        // Get user's role from metadata
        const role = session.user?.user_metadata?.role as UserRole || 'startup';

        setUser({
          id: session.user.id,
          name: session.user.user_metadata?.name || '',
          email: session.user.email || '',
          role: role
        });
        setIsAuthenticated(true);
      }
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const authValue = useAuthFunctions(user, setUser, isAuthenticated, setIsAuthenticated);

  return (
    <AuthContext.Provider value={authValue}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
