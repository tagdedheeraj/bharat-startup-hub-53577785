
import React from 'react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const OfflineFirebaseAlert: React.FC = () => (
  <Alert className="mb-4 bg-amber-50 border-amber-200">
    <Info className="h-4 w-4 text-amber-600" />
    <AlertTitle className="text-amber-800">Problème de connexion Firebase</AlertTitle>
    <AlertDescription className="text-amber-700">
      <p className="mb-2">Impossible de se connecter aux services Firebase. Cela peut être dû à :</p>
      <ul className="list-disc pl-5 mb-2 space-y-1">
        <li>Votre connexion internet est hors ligne</li>
        <li>Les services Firebase sont temporairement indisponibles</li>
        <li>Vous êtes en mode développement sans émulateurs Firebase en cours d'exécution</li>
      </ul>
      <p className="font-medium">
        Si vous êtes un développeur travaillant localement, veuillez démarrer les émulateurs Firebase avec :
        <code className="bg-amber-100 px-2 py-1 rounded ml-2 text-sm">firebase emulators:start</code>
      </p>
    </AlertDescription>
  </Alert>
);

export default OfflineFirebaseAlert;
