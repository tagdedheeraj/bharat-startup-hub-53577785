
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2 } from 'lucide-react';
import FormField from '@/components/auth/FormField';

interface AdminLoginFormProps {
  email: string;
  password: string;
  isLoading: boolean;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const AdminLoginForm: React.FC<AdminLoginFormProps> = ({
  email,
  password,
  isLoading,
  onEmailChange,
  onPasswordChange,
  onSubmit
}) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <FormField
        id="email"
        label="Email"
        type="email"
        value={email}
        onChange={onEmailChange}
        placeholder="Enter your email"
        required
      />
      
      <FormField
        id="password"
        label="Password"
        type="password"
        value={password}
        onChange={onPasswordChange}
        placeholder="Enter your password"
        required
      />
      
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
  );
};

export default AdminLoginForm;
