
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { UserRole } from '@/contexts/auth';
import { Loader2 } from 'lucide-react';

interface LoginFormProps {
  activeRole: UserRole;
  handleLogin: (e: React.FormEvent) => Promise<void>;
  isLoading: boolean;
}

const LoginForm: React.FC<LoginFormProps> = ({
  activeRole,
  handleLogin,
  isLoading
}) => {
  const roleCapitalized = activeRole === 'startup' ? 'Startup' : 'Investor';
  
  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input 
          id="email" 
          name="email"
          type="email" 
          placeholder="email@example.com" 
          required
        />
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="password">Password</Label>
          <Link to="/forgot-password" className="text-xs text-blue-600 hover:underline">
            Forgot password?
          </Link>
        </div>
        <Input 
          id="password" 
          name="password"
          type="password" 
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
          `Login as ${roleCapitalized}`
        )}
      </Button>
    </form>
  );
};

export default LoginForm;
