
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db, isFirestoreAvailable } from '@/lib/firebase';
import OfflineFirebaseAlert from '@/components/auth/OfflineFirebaseAlert';
import NetworkStatusAlert from '@/components/auth/NetworkStatusAlert';
import ErrorAlert from '@/components/auth/ErrorAlert';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isOffline, setIsOffline] = useState(false);
  const [showHelpDialog, setShowHelpDialog] = useState(false);
  
  const navigate = useNavigate();

  useEffect(() => {
    const checkFirebaseConnection = async () => {
      const available = await isFirestoreAvailable();
      setIsOffline(!available);
    };
    
    checkFirebaseConnection();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    try {
      setIsLoading(true);
      
      if (isOffline) {
        if (email === 'admin@example.com' && password === 'admin123') {
          localStorage.setItem('adminAuth', 'true');
          localStorage.setItem('adminEmail', email);
          
          toast.success("Admin login successful (Development Mode)");
          navigate('/admin/dashboard');
        } else {
          setError('Invalid admin credentials');
        }
      } else {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        const userData = userDoc.data();
        
        if (userData && userData.role === 'admin') {
          localStorage.setItem('adminAuth', 'true');
          localStorage.setItem('adminEmail', email);
          localStorage.setItem('adminUid', user.uid);
          
          toast.success("Admin login successful");
          navigate('/admin/dashboard');
        } else {
          setError('You do not have admin privileges');
          await auth.signOut();
        }
      }
    } catch (error: any) {
      console.error("Login error:", error);
      
      if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password' || error.code === 'auth/invalid-credential') {
        setError('Invalid email or password. Please check your credentials and try again.');
      } else if (error.code === 'auth/network-request-failed') {
        setError('Network error. Please check your connection');
        setIsOffline(true);
      } else {
        setError(error.message || 'Login failed. Please try again.');
      }
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
          <NetworkStatusAlert />
          
          {isOffline && (
            <div className="mb-4">
              <OfflineFirebaseAlert />
              <Alert className="mt-2">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  Using offline mode. Default admin: admin@example.com / admin123
                </AlertDescription>
              </Alert>
            </div>
          )}
          
          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email" 
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password" 
                required
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full" 
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Logging in...
                </>
              ) : (
                'Login to Admin Panel'
              )}
            </Button>
          </form>
          
          <div className="mt-4 text-center">
            <Button 
              variant="link" 
              className="text-sm text-blue-600"
              onClick={() => setShowHelpDialog(true)}
            >
              Need help accessing the admin panel?
            </Button>
          </div>
        </CardContent>
        
        <CardFooter>
          <p className="text-sm text-center w-full text-gray-500">
            Access restricted to authorized personnel only
          </p>
        </CardFooter>
      </Card>
      
      <Dialog open={showHelpDialog} onOpenChange={setShowHelpDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Admin Access Help</DialogTitle>
            <DialogDescription>
              If you're having trouble logging in, please try the following:
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div>
              <h3 className="font-medium mb-1">Online Mode:</h3>
              <p className="text-sm text-gray-600">
                You need a Firebase account with admin privileges to access the admin panel. 
                Contact your system administrator if you need access.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-1">Offline/Development Mode:</h3>
              <p className="text-sm text-gray-600">
                If Firebase is unavailable, you can use the development credentials:
                <br />
                Email: admin@example.com
                <br />
                Password: admin123
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-1">Common Issues:</h3>
              <ul className="list-disc pl-5 text-sm text-gray-600">
                <li>Check if your account has admin privileges</li>
                <li>Verify your internet connection</li>
                <li>Make sure your email and password are entered correctly</li>
                <li>Check if Firebase services are accessible</li>
              </ul>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminLogin;
