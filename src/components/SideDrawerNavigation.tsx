
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Info, 
  Briefcase, 
  Shield, 
  Phone, 
  Menu, 
  X, 
  Star, 
  FileText, 
  FileSpreadsheet,
  Mail,
  LifeBuoy,
  ChevronRight,
  Receipt
} from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

export default function SideDrawerNavigation() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close drawer when route changes
  useEffect(() => {
    setOpen(false);
  }, [location]);

  const mainNavItems = [
    { name: 'Home', icon: Home, to: '/' },
    { name: 'About', icon: Info, to: '/about' },
    { name: 'Services', icon: Briefcase, to: '/services' },
    { name: 'CA Services', icon: Shield, to: '/ca-services' },
    { name: 'Contact', icon: Phone, to: '/contact' },
  ];

  const secondaryNavItems = [
    { name: 'Success Stories', icon: Star, to: '/success-stories' },
    { name: 'IT Solutions', icon: FileText, to: '/it-solutions' },
  ];

  const caServicesItems = [
    { name: 'Certifications', icon: Shield, to: '/ca-services/certifications' },
    { name: 'Trademark', icon: Shield, to: '/ca-services/trademark' },
    { name: 'Income Tax', icon: Info, to: '/ca-services/income-tax' },
    { name: 'GST', icon: Receipt, to: '/ca-services/gst' },
    { name: 'Payroll', icon: FileSpreadsheet, to: '/ca-services/payroll' },
  ];

  const moreItems = [
    { name: 'Experts', icon: Info, to: '/more/experts' },
    { name: 'MSME Events', icon: Info, to: '/more/msme-events' },
    { name: 'Reviews', icon: Star, to: '/more/reviews' },
    { name: 'Blogs', icon: Menu, to: '/more/blogs' },
    { name: 'Compliance', icon: Shield, to: '/more/compliance' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 md:hidden">
      {/* Floating Action Button for Menu */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button className="h-14 w-14 rounded-full shadow-lg bg-gradient-to-r from-india-saffron to-india-green text-white border-4 border-white">
            <Menu size={24} className="text-black" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[280px] p-0">
          <div className="flex flex-col h-full overflow-auto py-6">
            {/* Header with logo */}
            <div className="px-4 mb-6 flex items-center justify-between">
              <img 
                src="/lovable-uploads/5aa945b6-f31a-46aa-a7dd-0b27f6c14482.png" 
                alt="Bharat Startup Solution" 
                className="h-12 w-auto"
              />
              <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
                <X size={20} />
              </Button>
            </div>

            {/* Main Navigation Links */}
            <div className="space-y-1 px-3">
              {mainNavItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors",
                    isActive(item.to)
                      ? "bg-gradient-to-r from-india-saffron/20 to-transparent text-india-saffron font-medium"
                      : "text-gray-700 hover:bg-gray-100"
                  )}
                >
                  <item.icon size={20} className={isActive(item.to) ? "text-india-saffron" : ""} />
                  {item.name}
                  {isActive(item.to) && (
                    <ChevronRight size={16} className="ml-auto text-india-saffron" />
                  )}
                </Link>
              ))}
            </div>

            {/* Secondary Navigation Links */}
            <div className="mt-6 px-3">
              <p className="text-xs font-semibold text-gray-500 uppercase px-4 mb-2">Other Services</p>
              <div className="space-y-1">
                {secondaryNavItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={cn(
                      "flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors",
                      isActive(item.to)
                        ? "bg-gradient-to-r from-india-saffron/20 to-transparent text-india-saffron font-medium"
                        : "text-gray-700 hover:bg-gray-100"
                    )}
                  >
                    <item.icon size={20} className={isActive(item.to) ? "text-india-saffron" : ""} />
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* CA Services Links */}
            <div className="mt-6 px-3">
              <p className="text-xs font-semibold text-gray-500 uppercase px-4 mb-2">CA Services</p>
              <div className="space-y-1">
                {caServicesItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={cn(
                      "flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors",
                      isActive(item.to)
                        ? "bg-gradient-to-r from-india-saffron/20 to-transparent text-india-saffron font-medium"
                        : "text-gray-700 hover:bg-gray-100"
                    )}
                  >
                    <item.icon size={20} className={isActive(item.to) ? "text-india-saffron" : ""} />
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* More Links */}
            <div className="mt-6 px-3">
              <p className="text-xs font-semibold text-gray-500 uppercase px-4 mb-2">More</p>
              <div className="space-y-1">
                {moreItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={cn(
                      "flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors",
                      isActive(item.to)
                        ? "bg-gradient-to-r from-india-saffron/20 to-transparent text-india-saffron font-medium"
                        : "text-gray-700 hover:bg-gray-100"
                    )}
                  >
                    <item.icon size={20} className={isActive(item.to) ? "text-india-saffron" : ""} />
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Support Section */}
            <div className="mt-auto px-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-800 mb-2">Need Help?</h4>
                <div className="space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start gap-2"
                    asChild
                  >
                    <Link to="/contact">
                      <Phone size={16} />
                      <span>Contact Us</span>
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start gap-2"
                    asChild
                  >
                    <a href="mailto:support@bharatstartup.com">
                      <Mail size={16} />
                      <span>Email Support</span>
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start gap-2"
                    asChild
                  >
                    <a href="https://wa.me/919876543210">
                      <LifeBuoy size={16} />
                      <span>Call Support</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
