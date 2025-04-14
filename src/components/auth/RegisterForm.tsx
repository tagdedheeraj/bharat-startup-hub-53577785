
import React from 'react';
import { Button } from '@/components/ui/button';
import FormField from './FormField';
import { UserRole } from '@/contexts/auth';

interface RegisterFormProps {
  role: UserRole;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  isLoading: boolean;
  isOnline: boolean;
  setName: (value: string) => void;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  setConfirmPassword: (value: string) => void;
  handleRegister: (e: React.FormEvent) => Promise<void>;
}

const RegisterForm: React.FC<RegisterFormProps> = ({
  role,
  name,
  email,
  password,
  confirmPassword,
  isLoading,
  isOnline,
  setName,
  setEmail,
  setPassword,
  setConfirmPassword,
  handleRegister
}) => {
  const roleCapitalized = role === 'startup' ? 'Startup' : 'Investor';
  const namePlaceholder = role === 'startup' ? 'Your Startup Name' : 'Your Full Name / Firm Name';
  const emailPlaceholder = role === 'startup' ? 'name@company.com' : 'name@investor.com';
  
  return (
    <form onSubmit={handleRegister} className="space-y-4">
      <FormField
        id={`${role}-name`}
        label={`${roleCapitalized} Name`}
        placeholder={namePlaceholder}
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={isLoading}
      />
      
      <FormField
        id={`${role}-email`}
        label="Email"
        type="email"
        placeholder={emailPlaceholder}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={isLoading}
      />
      
      <FormField
        id={`${role}-password`}
        label="Password"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        disabled={isLoading}
      />
      
      <FormField
        id={`${role}-confirm-password`}
        label="Confirm Password"
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        disabled={isLoading}
      />
      
      <Button 
        type="submit" 
        className="w-full" 
        disabled={isLoading || !isOnline}
        aria-label={isLoading ? "Creating account..." : `Register as ${roleCapitalized}`}
      >
        {isLoading ? "Creating Account..." : `Register as ${roleCapitalized}`}
        {!isOnline && !isLoading && " (Offline Mode)"}
      </Button>
      
      {!isOnline && (
        <p className="text-xs text-center text-yellow-600">
          You're currently offline. Connect to the internet to register.
        </p>
      )}
    </form>
  );
};

export default RegisterForm;
