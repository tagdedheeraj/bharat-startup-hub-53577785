
import React from 'react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle, WifiOff } from 'lucide-react';
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
      />
      
      <FormField
        id={`${role}-email`}
        label="Email"
        type="email"
        placeholder={emailPlaceholder}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      
      <FormField
        id={`${role}-password`}
        label="Password"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      
      <FormField
        id={`${role}-confirm-password`}
        label="Confirm Password"
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      
      <Button type="submit" className="w-full" disabled={isLoading || !isOnline}>
        {isLoading ? "Creating Account..." : `Register as ${roleCapitalized}`}
      </Button>
    </form>
  );
};

export default RegisterForm;
