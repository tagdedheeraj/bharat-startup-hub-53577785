
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ErrorAlert, NetworkStatusAlert, NetworkRetryButton, RegisterTabs } from '@/components/auth';
import { useRegisterForm } from '@/hooks/useRegisterForm';

const Register = () => {
  const {
    name,
    email,
    password,
    confirmPassword,
    isLoading,
    error,
    activeRole,
    isOnline,
    isRetrying,
    setName,
    setEmail,
    setPassword,
    setConfirmPassword,
    setActiveRole,
    retryRegister,
    handleRegister
  } = useRegisterForm();

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
          
          {error && <ErrorAlert message={error} />}
          
          {!isOnline && (
            <div className="mb-4 text-center">
              <NetworkRetryButton isRetrying={isRetrying} onClick={retryRegister} />
            </div>
          )}
          
          <RegisterTabs
            name={name}
            email={email}
            password={password}
            confirmPassword={confirmPassword}
            isLoading={isLoading}
            isOnline={isOnline}
            activeRole={activeRole}
            setName={setName}
            setEmail={setEmail}
            setPassword={setPassword}
            setConfirmPassword={setConfirmPassword}
            setActiveRole={setActiveRole}
            handleRegister={handleRegister}
          />
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
