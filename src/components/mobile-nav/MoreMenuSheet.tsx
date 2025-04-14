
import { useNavigate } from 'react-router-dom';
import { Menu, Star, Receipt, FileSpreadsheet, Shield, Info } from 'lucide-react';
import { 
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function MoreMenuSheet() {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="flex flex-col items-center justify-center w-full h-full text-gray-500 hover:text-brand-500">
          <Menu size={20} />
          <span className="text-xs mt-1">More</span>
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[80%] sm:w-[385px]">
        <div className="py-6">
          <h3 className="text-lg font-medium mb-4">More Options</h3>
          <div className="space-y-3">
            <button 
              className="w-full text-left flex items-center gap-2 py-2 px-3 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => handleNavigation('/success-stories')}
            >
              <Star size={18} className="text-india-saffron" />
              <span>Success Stories</span>
            </button>
            
            <h4 className="font-medium text-india-saffron mt-6 mb-2 border-b pb-1">CA Services</h4>
            <button 
              className="w-full text-left flex items-center gap-2 py-2 px-3 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => handleNavigation('/ca-services/certifications')}
            >
              <Shield size={18} className="text-india-saffron" />
              <span>Certifications</span>
            </button>
            <button 
              className="w-full text-left flex items-center gap-2 py-2 px-3 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => handleNavigation('/ca-services/trademark')}
            >
              <Shield size={18} className="text-india-saffron" />
              <span>Trademark</span>
            </button>
            <button 
              className="w-full text-left flex items-center gap-2 py-2 px-3 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => handleNavigation('/ca-services/income-tax')}
            >
              <Info size={18} className="text-india-saffron" />
              <span>Income Tax</span>
            </button>
            <button 
              className="w-full text-left flex items-center gap-2 py-2 px-3 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => handleNavigation('/ca-services/gst')}
            >
              <Receipt size={18} className="text-india-saffron" />
              <span>GST</span>
            </button>
            <button 
              className="w-full text-left flex items-center gap-2 py-2 px-3 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => handleNavigation('/ca-services/payroll')}
            >
              <FileSpreadsheet size={18} className="text-india-saffron" />
              <span>Payroll</span>
            </button>
            
            <h4 className="font-medium text-india-saffron mt-6 mb-2 border-b pb-1">More Pages</h4>
            <button 
              className="w-full text-left flex items-center gap-2 py-2 px-3 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => handleNavigation('/more/experts')}
            >
              <Info size={18} className="text-india-saffron" />
              <span>Experts</span>
            </button>
            <button 
              className="w-full text-left flex items-center gap-2 py-2 px-3 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => handleNavigation('/more/msme-events')}
            >
              <Info size={18} className="text-india-saffron" />
              <span>MSME Events</span>
            </button>
            <button 
              className="w-full text-left flex items-center gap-2 py-2 px-3 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => handleNavigation('/more/reviews')}
            >
              <Star size={18} className="text-india-saffron" />
              <span>Reviews</span>
            </button>
            <button 
              className="w-full text-left flex items-center gap-2 py-2 px-3 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => handleNavigation('/more/blogs')}
            >
              <Menu size={18} className="text-india-saffron" />
              <span>Blogs</span>
            </button>
            <button 
              className="w-full text-left flex items-center gap-2 py-2 px-3 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => handleNavigation('/more/compliance')}
            >
              <Shield size={18} className="text-india-saffron" />
              <span>Compliance</span>
            </button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
