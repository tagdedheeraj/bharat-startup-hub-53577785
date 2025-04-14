
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth, UserRole } from '@/contexts/auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FormField } from '@/components/auth';

interface LoginFormProps {
  email: string;
  password: string;
  isLoading: boolean;
  activeRole: UserRole;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  setActiveRole: (value: UserRole) => void;
  handleLogin: (e: React.FormEvent) => Promise<void>;
}

const LoginForm: React.FC<LoginFormProps> = ({
  email,
  password,
  isLoading,
  activeRole,
  setEmail,
  setPassword,
  setActiveRole,
  handleLogin
}) => {
  return (
    <Tabs defaultValue="startup" onValueChange={(value) => setActiveRole(value as UserRole)}>
      <TabsList className="grid w-full grid-cols-2 mb-4">
        <TabsTrigger value="startup">Startup</TabsTrigger>
        <TabsTrigger value="investor">Investor</TabsTrigger>
      </TabsList>
      
      <TabsContent value="startup">
        <form onSubmit={handleLogin} className="space-y-4">
          <FormField
            id="startup-email"
            label="Email"
            type="email"
            placeholder="name@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="startup-password">Password</Label>
              <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </Link>
            </div>
            <Input 
              id="startup-password" 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login as Startup"}
          </Button>
        </form>
      </TabsContent>
      
      <TabsContent value="investor">
        <form onSubmit={handleLogin} className="space-y-4">
          <FormField
            id="investor-email"
            label="Email"
            type="email"
            placeholder="name@investor.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="investor-password">Password</Label>
              <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </Link>
            </div>
            <Input 
              id="investor-password" 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login as Investor"}
          </Button>
        </form>
      </TabsContent>
    </Tabs>
  );
};

export default LoginForm;
