
import React, { useState, useEffect, ReactNode } from 'react';
import { supabase } from '@/integrations/supabase/client';
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
          
          // Show toast on successful login or signup (except for initial session)
          if (event === 'SIGNED_IN' && !loading) {
            toast({
              title: "Successfully Signed In",
              description: `Welcome ${session.user.user_metadata?.name || ''}!`,
            });
          } else if (event === 'SIGNED_UP') {
            toast({
              title: "Account Created",
              description: "Your account has been created successfully!",
            });
          }
        } else {
          setUser(null);
          setIsAuthenticated(false);
          
          // Show toast on sign out (except for initial session check)
          if (event === 'SIGNED_OUT' && !loading) {
            toast({
              title: "Signed Out",
              description: "You have been signed out successfully.",
            });
          }
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
  }, [loading]);

  const authValue = useAuthFunctions(user, setUser, isAuthenticated, setIsAuthenticated);

  return (
    <AuthContext.Provider value={authValue}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
