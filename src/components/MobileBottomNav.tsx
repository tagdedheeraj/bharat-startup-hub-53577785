import { Link, useLocation } from 'react-router-dom';
import { Home, Info, Briefcase, Phone, Menu, Award } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function MobileBottomNav() {
  const location = useLocation();
  const isMobile = useIsMobile();
  
  if (!isMobile) return null;
  
  const navItems = [
    { icon: Home, label: 'Home', to: '/' },
    { icon: Info, label: 'About', to: '/about' },
    { icon: Briefcase, label: 'Services', to: '/services' },
    { icon: Phone, label: 'Contact', to: '/contact' },
  ];

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
                isActive ? 'text-brand-600' : 'text-gray-500 hover:text-brand-500'
              }`}
            >
              <item.icon size={20} className={isActive ? 'text-brand-600' : ''} />
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
                <Link to="/success-stories" className="flex items-center gap-2 py-2 px-3 rounded-md hover:bg-gray-100 transition-colors">
                  <Award size={18} className="text-brand-600" />
                  <span>Success Stories</span>
                </Link>
                <Link to="/more/experts" className="flex items-center gap-2 py-2 px-3 rounded-md hover:bg-gray-100 transition-colors">
                  <Briefcase size={18} className="text-brand-600" />
                  <span>Experts</span>
                </Link>
                <Link to="/more/msme-events" className="flex items-center gap-2 py-2 px-3 rounded-md hover:bg-gray-100 transition-colors">
                  <Info size={18} className="text-brand-600" />
                  <span>MSME Events</span>
                </Link>
                <Link to="/more/reviews" className="flex items-center gap-2 py-2 px-3 rounded-md hover:bg-gray-100 transition-colors">
                  <Home size={18} className="text-brand-600" />
                  <span>Reviews</span>
                </Link>
                <Link to="/more/blogs" className="flex items-center gap-2 py-2 px-3 rounded-md hover:bg-gray-100 transition-colors">
                  <Menu size={18} className="text-brand-600" />
                  <span>Blogs</span>
                </Link>
                <Link to="/more/compliance" className="flex items-center gap-2 py-2 px-3 rounded-md hover:bg-gray-100 transition-colors">
                  <Phone size={18} className="text-brand-600" />
                  <span>Compliance</span>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
}
