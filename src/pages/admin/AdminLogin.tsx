
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '@/lib/firebase';
import { setupAdminUser } from '@/lib/firebase/adminSetup';
import AdminLoginForm from '@/components/admin/login/AdminLoginForm';
import AdminLoginError from '@/components/admin/login/AdminLoginError';

const AdminLogin = () => {
  const [email, setEmail] = useState('admin@bharatstartupsolution.com');
  const [password, setPassword] = useState('admin@123');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [setupComplete, setSetupComplete] = useState(false);
  
  const navigate = useNavigate();

  // Run setup on component mount
  useEffect(() => {
    const runSetup = async () => {
      try {
        console.log("Running admin setup...");
        const result = await setupAdminUser();
        setSetupComplete(true);
        console.log("Admin setup complete:", result);
      } catch (err) {
        console.error("Error during admin setup:", err);
        setError("Could not set up admin user. Please check console for details.");
      }
    };
    
    runSetup();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    if (!setupComplete) {
      setError("Admin setup not complete. Please wait a moment and try again.");
      return;
    }
    
    try {
      setIsLoading(true);
      console.log("Attempting login with:", email);
      
      // Sign in with email and password
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      console.log("User authenticated:", user.uid);
      
      // Verify admin role in Firestore
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      const userData = userDoc.data();
      
      console.log("User data from Firestore:", userData);
      
      if (userData && userData.role === 'admin') {
        localStorage.setItem('adminAuth', 'true');
        localStorage.setItem('adminEmail', email);
        localStorage.setItem('adminUid', user.uid);
        
        toast.success("Admin login successful");
        navigate('/admin/dashboard');
      } else {
        console.error("User does not have admin role");
        setError('You do not have admin privileges');
        await signOut(auth);
      }
    } catch (error: any) {
      console.error("Login error:", error);
      setError('Invalid email or password. Please check your credentials and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Admin Login</CardTitle>
          <CardDescription className="text-center">
            Enter your credentials to access the admin panel
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <AdminLoginError error={error || ''} />
          <AdminLoginForm
            email={email}
            password={password}
            isLoading={isLoading}
            onEmailChange={(e) => setEmail(e.target.value)}
            onPasswordChange={(e) => setPassword(e.target.value)}
            onSubmit={handleLogin}
          />
        </CardContent>
        
        <CardFooter>
          <p className="text-sm text-center w-full text-gray-500">
            Access restricted to authorized personnel only
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AdminLogin;
