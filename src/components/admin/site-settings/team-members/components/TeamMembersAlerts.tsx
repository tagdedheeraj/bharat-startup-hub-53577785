
import React from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle, WifiOff } from 'lucide-react';

interface TeamMembersAlertsProps {
  error: string | null;
  isOffline: boolean;
}

const TeamMembersAlerts = ({ error, isOffline }: TeamMembersAlertsProps) => {
  if (!error && !isOffline) return null;
  
  return (
    <>
      {error && (
        <Alert variant="destructive" className="mb-4">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      
      {isOffline && (
        <Alert className="mb-4 border-amber-200 bg-amber-50">
          <WifiOff className="h-4 w-4 text-amber-600" />
          <AlertDescription className="text-amber-600">
            You are in offline mode. Some features may be limited.
          </AlertDescription>
        </Alert>
      )}
    </>
  );
};

export default TeamMembersAlerts;
