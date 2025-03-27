
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Home, Info, Briefcase, Phone, Menu, Star, Receipt, FileSpreadsheet, Shield } from 'lucide-react';
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
    { icon: Shield, label: 'CA Services', to: '/ca-services' },
    { icon: Phone, label: 'Contact', to: '/contact' },
  ];

  const handleSafeNavigation = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    // Small delay to prevent React unmount issues
    setTimeout(() => {
      navigate(path);
    }, 10);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40 md:hidden">
      <nav className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const isActive = location.pathname === item.to;
          return (
            <Link
              key={item.to}
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
                <a 
                  href="/success-stories" 
                  className="flex items-center gap-2 py-2 px-3 rounded-md hover:bg-gray-100 transition-colors"
                  onClick={(e) => handleSafeNavigation('/success-stories', e)}
                >
                  <Star size={18} className="text-india-saffron" />
                  <span>Success Stories</span>
                </a>
                
                <h4 className="font-medium text-india-saffron mt-6 mb-2 border-b pb-1">CA Services</h4>
                <a 
                  href="/ca-services/certifications" 
                  className="flex items-center gap-2 py-2 px-3 rounded-md hover:bg-gray-100 transition-colors"
                  onClick={(e) => handleSafeNavigation('/ca-services/certifications', e)}
                >
                  <Shield size={18} className="text-india-saffron" />
                  <span>Certifications</span>
                </a>
                <a 
                  href="/ca-services/trademark" 
                  className="flex items-center gap-2 py-2 px-3 rounded-md hover:bg-gray-100 transition-colors"
                  onClick={(e) => handleSafeNavigation('/ca-services/trademark', e)}
                >
                  <Shield size={18} className="text-india-saffron" />
                  <span>Trademark</span>
                </a>
                <a 
                  href="/ca-services/income-tax" 
                  className="flex items-center gap-2 py-2 px-3 rounded-md hover:bg-gray-100 transition-colors"
                  onClick={(e) => handleSafeNavigation('/ca-services/income-tax', e)}
                >
                  <Info size={18} className="text-india-saffron" />
                  <span>Income Tax</span>
                </a>
                <a 
                  href="/ca-services/gst" 
                  className="flex items-center gap-2 py-2 px-3 rounded-md hover:bg-gray-100 transition-colors"
                  onClick={(e) => handleSafeNavigation('/ca-services/gst', e)}
                >
                  <Receipt size={18} className="text-india-saffron" />
                  <span>GST</span>
                </a>
                <a 
                  href="/ca-services/payroll" 
                  className="flex items-center gap-2 py-2 px-3 rounded-md hover:bg-gray-100 transition-colors"
                  onClick={(e) => handleSafeNavigation('/ca-services/payroll', e)}
                >
                  <FileSpreadsheet size={18} className="text-india-saffron" />
                  <span>Payroll</span>
                </a>
                
                <h4 className="font-medium text-india-saffron mt-6 mb-2 border-b pb-1">More Pages</h4>
                <a 
                  href="/more/experts" 
                  className="flex items-center gap-2 py-2 px-3 rounded-md hover:bg-gray-100 transition-colors"
                  onClick={(e) => handleSafeNavigation('/more/experts', e)}
                >
                  <Briefcase size={18} className="text-india-saffron" />
                  <span>Experts</span>
                </a>
                <a 
                  href="/more/msme-events" 
                  className="flex items-center gap-2 py-2 px-3 rounded-md hover:bg-gray-100 transition-colors"
                  onClick={(e) => handleSafeNavigation('/more/msme-events', e)}
                >
                  <Info size={18} className="text-india-saffron" />
                  <span>MSME Events</span>
                </a>
                <a 
                  href="/more/reviews" 
                  className="flex items-center gap-2 py-2 px-3 rounded-md hover:bg-gray-100 transition-colors"
                  onClick={(e) => handleSafeNavigation('/more/reviews', e)}
                >
                  <Star size={18} className="text-india-saffron" />
                  <span>Reviews</span>
                </a>
                <a 
                  href="/more/blogs" 
                  className="flex items-center gap-2 py-2 px-3 rounded-md hover:bg-gray-100 transition-colors"
                  onClick={(e) => handleSafeNavigation('/more/blogs', e)}
                >
                  <Menu size={18} className="text-india-saffron" />
                  <span>Blogs</span>
                </a>
                <a 
                  href="/more/compliance" 
                  className="flex items-center gap-2 py-2 px-3 rounded-md hover:bg-gray-100 transition-colors"
                  onClick={(e) => handleSafeNavigation('/more/compliance', e)}
                >
                  <Shield size={18} className="text-india-saffron" />
                  <span>Compliance</span>
                </a>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
}
