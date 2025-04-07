
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
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  isOnline?: boolean;
  setName?: (value: string) => void;
  setEmail?: (value: string) => void;
  setPassword?: (value: string) => void;
  setConfirmPassword?: (value: string) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({
  role,
  handleRegister,
  isLoading,
  // Default values for new props
  name = '',
  email = '',
  password = '',
  confirmPassword = '',
  setName,
  setEmail,
  setPassword,
  setConfirmPassword
}) => {
  const roleCapitalized = role === 'startup' ? 'Startup' : 'Investor';
  const namePlaceholder = role === 'startup' ? 'Your Startup Name' : 'Your Full Name / Firm Name';
  
  // Helper functions to handle controlled inputs if setters are provided
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (setName) setName(e.target.value);
  };
  
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (setEmail) setEmail(e.target.value);
  };
  
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (setPassword) setPassword(e.target.value);
  };
  
  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (setConfirmPassword) setConfirmPassword(e.target.value);
  };
  
  return (
    <form onSubmit={handleRegister} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor={`${role}-name`}>{roleCapitalized} Name</Label>
        <Input 
          id={`${role}-name`} 
          name="name"
          placeholder={namePlaceholder} 
          required
          value={setName ? name : undefined}
          onChange={setName ? handleNameChange : undefined}
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
          value={setEmail ? email : undefined}
          onChange={setEmail ? handleEmailChange : undefined}
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
          value={setPassword ? password : undefined}
          onChange={setPassword ? handlePasswordChange : undefined}
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
          value={setConfirmPassword ? confirmPassword : undefined}
          onChange={setConfirmPassword ? handleConfirmPasswordChange : undefined}
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
