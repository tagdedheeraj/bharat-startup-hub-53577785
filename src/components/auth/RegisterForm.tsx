
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { UserRole } from '@/contexts/auth';
import { Loader2 } from 'lucide-react';

interface RegisterFormProps {
  role: UserRole;
  handleRegister: (e: React.FormEvent) => Promise<void>;
  isLoading: boolean;
  // Add the new props to match what's being passed in RegisterTabs
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  setName: (value: string) => void;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  setConfirmPassword: (value: string) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({
  role,
  handleRegister,
  isLoading,
  name,
  email,
  password,
  confirmPassword,
  setName,
  setEmail,
  setPassword,
  setConfirmPassword
}) => {
  const roleCapitalized = role === 'startup' ? 'Startup' : 'Investor';
  const namePlaceholder = role === 'startup' ? 'Your Startup Name' : 'Your Full Name / Firm Name';
  
  return (
    <form onSubmit={handleRegister} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor={`${role}-name`}>{roleCapitalized} Name</Label>
        <Input 
          id={`${role}-name`} 
          name="name"
          placeholder={namePlaceholder} 
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor={`${role}-email`}>Email</Label>
        <Input 
          id={`${role}-email`} 
          name="email"
          type="email" 
          placeholder="email@example.com" 
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor={`${role}-password`}>Password</Label>
        <Input 
          id={`${role}-password`} 
          name="password"
          type="password" 
          placeholder="Create a password (min. 6 characters)" 
          required
          minLength={6}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor={`${role}-confirm-password`}>Confirm Password</Label>
        <Input 
          id={`${role}-confirm-password`} 
          name="confirmPassword"
          type="password" 
          placeholder="Confirm your password" 
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
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
            Creating Account...
          </>
        ) : (
          `Register as ${roleCapitalized}`
        )}
      </Button>
    </form>
  );
};

export default RegisterForm;
