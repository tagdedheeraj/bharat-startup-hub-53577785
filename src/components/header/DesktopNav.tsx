
import { useState } from 'react';
import { Search, ArrowRight, Bell } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import NavItem from './NavItem';
import AuthButtons from '../AuthButtons';
import { navigationData } from './navigationData';
import { 
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useAuth } from '@/contexts/auth/useAuth';
import { Input } from '@/components/ui/input';

const DesktopNav = () => {
  const location = useLocation();
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  
  // Combined list of all services for search
  const allServices = navigationData.flatMap(nav => 
    nav.children ? nav.children.map(child => ({
      title: child.label,
      url: child.to,
      category: nav.label
    })) : []
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.trim() === '') {
      setSearchResults([]);
      return;
    }
    
    // Filter services based on search query
    const filtered = allServices.filter(service => 
      service.title.toLowerCase().includes(query.toLowerCase()) ||
      service.category.toLowerCase().includes(query.toLowerCase())
    );
    
    setSearchResults(filtered);
  };

  const handleSearchClick = () => {
    if (searchResults.length === 0 && searchQuery.trim() !== '') {
      toast.info("No matching services found", {
        description: "Try a different search term"
      });
    }
  };
  
  const handleNotificationClick = () => {
    if (!user) {
      toast.info("Please log in to view notifications", {
        description: "Sign in to access your personalized notifications."
      });
      return;
    }
    
    toast.info("You have 2 new notifications", {
      description: "Check your notifications panel for updates."
    });
  };

  return (
    <div className="hidden lg:flex justify-between items-center w-full">
      <NavigationMenu>
        <NavigationMenuList className="flex space-x-1">
          {navigationData.map((item) => (
            <NavItem
              key={item.to}
              to={item.to}
              label={item.label}
              active={location.pathname === item.to || (item.children && item.children.some(child => location.pathname === child.to))}
              children={item.children}
            />
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex items-center gap-4">
        <Popover>
          <PopoverTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-foreground/70 hover:text-brand-600 relative group transition-all duration-300"
              onClick={handleSearchClick}
            >
              <Search size={20} className="transition-all group-hover:scale-110" />
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-500 group-hover:w-4/5 transition-all duration-300"></span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80 p-0" align="end">
            <div className="p-4 space-y-4">
              <div className="flex items-center border rounded-md focus-within:ring-1 focus-within:ring-brand-500">
                <Search className="ml-2 h-4 w-4 shrink-0 text-muted-foreground" />
                <Input
                  placeholder="Search services..."
                  className="border-0 focus-visible:ring-0"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </div>
              {searchResults.length > 0 ? (
                <div className="max-h-72 overflow-auto">
                  {searchResults.map((result, idx) => (
                    <Link 
                      key={idx} 
                      to={result.url}
                      className="flex items-center p-2 hover:bg-gray-100 rounded-md gap-2"
                      onClick={() => {
                        setSearchQuery('');
                        setSearchResults([]);
                      }}
                    >
                      <div className="text-xs text-gray-500">{result.category}</div>
                      <div className="text-sm font-medium">{result.title}</div>
                    </Link>
                  ))}
                </div>
              ) : searchQuery.trim() !== '' ? (
                <div className="text-center py-3 text-sm text-gray-500">No results found</div>
              ) : null}
            </div>
          </PopoverContent>
        </Popover>
        
        {user ? (
          <Popover>
            <PopoverTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-foreground/70 hover:text-brand-600 relative group transition-all duration-300"
              >
                <Bell size={20} className="transition-all group-hover:scale-110" />
                <span className="absolute top-1 right-1.5 h-2 w-2 rounded-full bg-red-500"></span>
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-500 group-hover:w-4/5 transition-all duration-300"></span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-0" align="end">
              <div className="p-4">
                <h4 className="font-medium text-sm mb-4 border-b pb-2">Notifications</h4>
                <div className="space-y-3 max-h-72 overflow-auto">
                  <div className="p-3 bg-blue-50 rounded-md">
                    <p className="text-sm font-medium">Application Update</p>
                    <p className="text-xs text-gray-600 mt-1">Your funding application has been received.</p>
                    <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-md">
                    <p className="text-sm font-medium">Certificate Approved</p>
                    <p className="text-xs text-gray-600 mt-1">Your MSME certificate has been approved.</p>
                    <p className="text-xs text-gray-400 mt-1">Yesterday</p>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        ) : (
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-foreground/70 hover:text-brand-600 relative group transition-all duration-300"
            onClick={handleNotificationClick}
          >
            <Bell size={20} className="transition-all group-hover:scale-110" />
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-500 group-hover:w-4/5 transition-all duration-300"></span>
          </Button>
        )}
        
        <AuthButtons />
        <Button asChild className="relative group overflow-hidden">
          <Link 
            to="/contact" 
            className="relative z-10 bg-brand-600 text-black px-6 py-2 rounded-md transition-all duration-300 hover:bg-brand-700"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get Started
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-brand-500 to-brand-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default DesktopNav;
