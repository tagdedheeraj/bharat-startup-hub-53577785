
import React from 'react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Info } from 'lucide-react';

const OfflineFirebaseAlert: React.FC = () => (
  <Alert className="mb-4 bg-amber-50 border-amber-200">
    <Info className="h-4 w-4 text-amber-600" />
    <AlertTitle className="text-amber-800">Firebase Connection Issue</AlertTitle>
    <AlertDescription className="text-amber-700">
      <p className="mb-2">Unable to connect to Firebase services. This could be due to:</p>
      <ul className="list-disc pl-5 mb-2 space-y-1">
        <li>Your internet connection is offline</li>
        <li>Firebase services are temporarily unavailable</li>
        <li>You're in development mode without Firebase emulators running</li>
      </ul>
      <p className="font-medium">
        If you're a developer working locally, please start the Firebase emulators with:
        <code className="bg-amber-100 px-2 py-1 rounded ml-2 text-sm">firebase emulators:start</code>
      </p>
      <p className="mt-2 text-sm">
        Note: In development mode, a mock authentication system will be used if Firebase is unavailable.
        Your login/signup should still work for testing purposes.
      </p>
    </AlertDescription>
  </Alert>
);

export default OfflineFirebaseAlert;
