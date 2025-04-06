import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth, UserRole } from '@/contexts/auth';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Info } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { RegisterForm, ErrorAlert, NetworkStatusAlert, OfflineFirebaseAlert } from '@/components/auth';
import { retryOperation, isEmulatorEnvironment } from '@/contexts/auth/AuthUtils';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeRole, setActiveRole] = useState<UserRole>('startup');
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showFirebaseAlert, setShowFirebaseAlert] = useState(false);
  const [isEmulator, setIsEmulator] = useState(isEmulatorEnvironment());
  
  const { register } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setShowFirebaseAlert(false);
    
    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields");
      return;
    }
    
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }
    
    try {
      setIsLoading(true);
      
      await retryOperation(async () => {
        await register(name, email, password, activeRole);
      }, 3);
      
      toast({
        title: "Registration Successful",
        description: `Your ${activeRole} account has been created successfully.`,
      });
      
      navigate(`/dashboard/${activeRole}`);
    } catch (error: any) {
      console.error('Registration error:', error);
      setError(error.message || "Unable to create your account. Please try again.");
      
      if (error.code === 'auth/network-request-failed' || 
          error.message?.includes("network") || 
          error.message?.includes("Failed to fetch") || 
          !navigator.onLine) {
        setShowFirebaseAlert(true);
        
        if (isEmulator) {
          toast({
            title: "Developer Note",
            description: "You need to run Firebase emulators for local development. Run 'firebase emulators:start' in your terminal.",
          });
        }
      }
      
      if (error.message?.includes("Network error") || error.message?.includes("internet connection") || error.message?.includes("offline")) {
        toast({
          title: "Network Error",
          description: "Could not connect to authentication service. Please check your internet connection and try again.",
          variant: "destructive"
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Create an Account</CardTitle>
          <CardDescription className="text-center">
            Register to access exclusive features
          </CardDescription>
        </CardHeader>
        <CardContent>
          <NetworkStatusAlert />
          
          {showFirebaseAlert && <OfflineFirebaseAlert />}
          
          {error && <ErrorAlert message={error} />}
          
          {isEmulator && (
            <Alert className="mb-4 bg-blue-50 border-blue-200">
              <Info className="h-4 w-4 text-blue-600" />
              <AlertDescription className="text-blue-700">
                You're in development mode. To use Firebase features, start the emulators with:<br/>
                <code className="bg-blue-100 px-2 py-1 rounded text-sm">firebase emulators:start</code>
              </AlertDescription>
            </Alert>
          )}
          
          <Tabs defaultValue="startup" onValueChange={(value) => setActiveRole(value as UserRole)}>
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="startup">Startup</TabsTrigger>
              <TabsTrigger value="investor">Investor</TabsTrigger>
            </TabsList>
            
            <TabsContent value="startup">
              <RegisterForm
                role="startup"
                name={name}
                email={email}
                password={password}
                confirmPassword={confirmPassword}
                isLoading={isLoading}
                isOnline={isOnline}
                setName={setName}
                setEmail={setEmail}
                setPassword={setPassword}
                setConfirmPassword={setConfirmPassword}
                handleRegister={handleRegister}
              />
            </TabsContent>
            
            <TabsContent value="investor">
              <RegisterForm
                role="investor"
                name={name}
                email={email}
                password={password}
                confirmPassword={confirmPassword}
                isLoading={isLoading}
                isOnline={isOnline}
                setName={setName}
                setEmail={setEmail}
                setPassword={setPassword}
                setConfirmPassword={setConfirmPassword}
                handleRegister={handleRegister}
              />
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-sm text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Register;
