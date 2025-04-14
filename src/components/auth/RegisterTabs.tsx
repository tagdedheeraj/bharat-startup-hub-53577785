
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { RegisterForm } from '@/components/auth';
import { UserRole } from '@/contexts/auth';

interface RegisterTabsProps {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  isLoading: boolean;
  activeRole: UserRole;
  setName: (value: string) => void;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  setConfirmPassword: (value: string) => void;
  setActiveRole: (value: UserRole) => void;
  handleRegister: (e: React.FormEvent) => Promise<void>;
}

const RegisterTabs: React.FC<RegisterTabsProps> = ({
  name,
  email,
  password,
  confirmPassword,
  isLoading,
  activeRole,
  setName,
  setEmail,
  setPassword,
  setConfirmPassword,
  setActiveRole,
  handleRegister
}) => {
  return (
    <Tabs defaultValue={activeRole} onValueChange={(value) => setActiveRole(value as UserRole)}>
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
          setName={setName}
          setEmail={setEmail}
          setPassword={setPassword}
          setConfirmPassword={setConfirmPassword}
          handleRegister={handleRegister}
        />
      </TabsContent>
    </Tabs>
  );
};

export default RegisterTabs;

