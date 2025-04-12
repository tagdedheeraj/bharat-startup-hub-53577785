import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Home, Info, Briefcase, Phone, Menu, Star, Receipt, FileSpreadsheet, Shield, HelpCircle } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function MobileBottomNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  
  if (!isMobile) return null;
  
  const navItems = [
    { icon: Home, label: 'Home', to: '/' },
    { icon: Info, label: 'About', to: '/about' },
    { icon: Briefcase, label: 'Services', to: '/services' },
    { icon: HelpCircle, label: 'Support', to: '#', isSupport: true },
    { icon: Menu, label: 'More', isMenu: true },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40 md:hidden">
      <nav className="flex justify-around items-center h-16">
        {navItems.map((item, index) => {
          if (item.isMenu) {
            return (
              <Sheet key={index}>
                <SheetTrigger asChild>
                  <button className="flex flex-col items-center justify-center w-full h-full text-gray-500 hover:text-brand-500">
                    <item.icon size={20} />
                    <span className="text-xs mt-1">{item.label}</span>
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
                        <Briefcase size={18} className="text-india-saffron" />
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
          
          if (item.isSupport) {
            return (
              <button
                key={index}
                className={`flex flex-col items-center justify-center w-full h-full transition-colors text-india-saffron`}
                onClick={() => {
                  document.dispatchEvent(new Event('open-support-drawer'));
                }}
              >
                <item.icon size={20} />
                <span className="text-xs mt-1">{item.label}</span>
              </button>
            );
          }
          
          const isActive = location.pathname === item.to;
          return (
            <Link
              key={index}
              to={item.to}
              className={`flex flex-col items-center justify-center w-full h-full transition-colors ${
                isActive ? 'text-india-saffron' : 'text-gray-500 hover:text-brand-500'
              }`}
            >
              <item.icon size={20} className={isActive ? 'text-india-saffron' : ''} />
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
