
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Home, Info, Briefcase, Phone, Menu, Star, Receipt, FileSpreadsheet, Shield, HelpCircle } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from 'react';
import { Button } from './ui/button';

export default function MobileBottomNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  if (!isMobile) return null;
  
  const navItems = [
    { icon: Home, label: 'Home', to: '/' },
    { icon: Info, label: 'About', to: '/about' },
    { icon: Briefcase, label: 'Services', to: '/services' },
    { icon: Shield, label: 'CA Services', to: '/ca-services' },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
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
        
        {/* Contact Link */}
        <Link
          to="/contact"
          className={`flex flex-col items-center justify-center w-full h-full transition-colors ${
            location.pathname === '/contact' ? 'text-india-saffron' : 'text-gray-500 hover:text-brand-500'
          }`}
        >
          <Phone size={20} className={location.pathname === '/contact' ? 'text-india-saffron' : ''} />
          <span className="text-xs mt-1">Contact</span>
        </Link>
        
        {/* Support Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <button className="flex flex-col items-center justify-center w-full h-full text-gray-500 hover:text-brand-500">
              <HelpCircle size={20} />
              <span className="text-xs mt-1">Support</span>
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Need Help?</DialogTitle>
              <DialogDescription>
                Our support team is here to assist you. Choose how you'd like to get in touch.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <Button 
                className="w-full flex items-center justify-center gap-2" 
                onClick={() => {
                  setIsDialogOpen(false);
                  navigate('/contact');
                }}
              >
                <Phone size={16} />
                <span>Contact Us</span>
              </Button>
              <Button 
                variant="outline" 
                className="w-full flex items-center justify-center gap-2"
                onClick={() => {
                  window.open('mailto:support@bharatstartup.com', '_blank');
                  setIsDialogOpen(false);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                <span>Email Support</span>
              </Button>
              <Button 
                variant="outline" 
                className="w-full flex items-center justify-center gap-2"
                onClick={() => {
                  window.open('https://wa.me/919876543210', '_blank');
                  setIsDialogOpen(false);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <span>Call Support</span>
              </Button>
            </div>
          </DialogContent>
        </Dialog>
        
        {/* More Menu */}
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
      </nav>
    </div>
  );
}
