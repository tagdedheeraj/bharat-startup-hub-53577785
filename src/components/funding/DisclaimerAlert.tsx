
import { AlertTriangle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const DisclaimerAlert = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-6">
      <Alert variant="default" className="bg-yellow-50 border-yellow-200">
        <AlertTriangle className="h-5 w-5 text-yellow-600" />
        <AlertDescription className="text-yellow-800 font-medium">
          Please note: We are a startup consultancy service provider and are not affiliated with any government, non-government agencies, institutions, organizations, or departments. We provide consultation services to help businesses navigate funding opportunities.
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default DisclaimerAlert;
