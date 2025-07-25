
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ErrorAlert } from '@/components/auth';
import { useRegisterForm } from '@/hooks/useRegisterForm';
import RegisterTabs from '@/components/auth/RegisterTabs';

const Register = () => {
  const {
    name,
    email,
    password,
    confirmPassword,
    activeRole,
    isLoading,
    error,
    setName,
    setEmail,
    setPassword,
    setConfirmPassword,
    setActiveRole,
    handleRegister
  } = useRegisterForm();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Create an Account</CardTitle>
          <CardDescription className="text-center">
            Sign up as a startup or investor to get started
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          {error && <ErrorAlert message={error} />}
          
          <RegisterTabs 
            name={name}
            email={email}
            password={password}
            confirmPassword={confirmPassword}
            isLoading={isLoading}
            activeRole={activeRole}
            setName={setName}
            setEmail={setEmail}
            setPassword={setPassword}
            setConfirmPassword={setConfirmPassword}
            setActiveRole={setActiveRole}
            handleRegister={handleRegister}
          />
        </CardContent>
        
        <CardFooter>
          <p className="text-sm text-center w-full">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Log In
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Register;

