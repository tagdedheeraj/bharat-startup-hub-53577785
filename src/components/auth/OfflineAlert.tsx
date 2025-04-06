
import React from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { WifiOff } from 'lucide-react';

const OfflineAlert: React.FC = () => (
  <Alert variant="destructive" className="mb-4">
    <WifiOff className="h-4 w-4" />
    <AlertDescription>
      You are currently offline. Please connect to the internet to register.
    </AlertDescription>
  </Alert>
);

export default OfflineAlert;
