
import React from 'react';
import { Button } from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';

interface NetworkRetryButtonProps {
  isRetrying: boolean;
  onClick: () => void;
}

const NetworkRetryButton: React.FC<NetworkRetryButtonProps> = ({ isRetrying, onClick }) => {
  return (
    <Button 
      onClick={onClick} 
      variant="outline" 
      className="mt-2 w-full"
      disabled={isRetrying}
    >
      {isRetrying ? (
        <>
          <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
          Testing Connection...
        </>
      ) : (
        <>
          <RefreshCw className="h-4 w-4 mr-2" />
          Test Connection
        </>
      )}
    </Button>
  );
};

export default NetworkRetryButton;
