
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const handleGoHome = () => {
    navigate('/');
  };
  
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-white rounded-lg shadow-sm p-8 m-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-brand-600 mb-4">404</h1>
        <p className="text-2xl text-gray-700 mb-4">Page Not Found</p>
        <p className="text-gray-500 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={handleGoBack} 
            variant="outline"
            className="border-brand-600 text-brand-600 hover:bg-brand-50"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
          <Button 
            onClick={handleGoHome} 
            className="bg-brand-600 hover:bg-brand-700 transition-colors"
          >
            <Home className="mr-2 h-4 w-4" />
            Return to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
