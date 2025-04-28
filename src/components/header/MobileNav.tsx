
import { useState } from 'react';
import { Menu, X, Search, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import AuthButtons from '../AuthButtons';
import NavigationDrawer from './NavigationDrawer';
import { useAuth } from '@/contexts/auth/useAuth';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { navigationData } from './navigationData';

interface MobileNavProps {
  toggleMobileMenu: () => void;
  mobileMenuOpen: boolean;
}

const MobileNav = ({ toggleMobileMenu, mobileMenuOpen }: MobileNavProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const { user } = useAuth();
  
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
    setIsSearchOpen(true);
  };
  
  return (
    <div className="lg:hidden flex items-center gap-2">
      <Sheet open={isSearchOpen} onOpenChange={setIsSearchOpen}>
        <SheetTrigger asChild>
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-foreground/70 hover:bg-gray-100/50 hover:text-foreground/90"
            onClick={handleSearchClick}
          >
            <Search size={20} />
          </Button>
        </SheetTrigger>
        <SheetContent side="top" className="h-[60vh] pt-10 z-50">
          <div className="flex flex-col h-full space-y-4">
            <div className="flex items-center border rounded-md focus-within:ring-1 focus-within:ring-brand-500">
              <Search className="ml-2 h-4 w-4 shrink-0 text-muted-foreground" />
              <Input
                placeholder="Search services..."
                className="border-0 focus-visible:ring-0"
                value={searchQuery}
                onChange={handleSearchChange}
                autoFocus
              />
            </div>
            
            {searchResults.length > 0 ? (
              <div className="flex-1 overflow-auto">
                {searchResults.map((result, idx) => (
                  <Link 
                    key={idx} 
                    to={result.url}
                    className="flex items-center p-3 hover:bg-gray-100 rounded-md gap-2 border-b"
                    onClick={() => {
                      setSearchQuery('');
                      setSearchResults([]);
                      setIsSearchOpen(false);
                    }}
                  >
                    <div>
                      <div className="text-xs text-gray-500">{result.category}</div>
                      <div className="text-sm font-medium">{result.title}</div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : searchQuery.trim() !== '' ? (
              <div className="text-center py-10 text-sm text-gray-500">No results found</div>
            ) : (
              <div className="text-center py-10 text-sm text-gray-500">
                Type to search our services
              </div>
            )}
          </div>
        </SheetContent>
      </Sheet>
      
      {user && (
        <Sheet open={isNotificationOpen} onOpenChange={setIsNotificationOpen}>
          <SheetTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-foreground/70 hover:bg-gray-100/50 hover:text-foreground/90 relative"
            >
              <Bell size={20} />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] z-50">
            <h2 className="text-xl font-semibold mb-4 mt-4">Notifications</h2>
            <div className="space-y-3">
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
          </SheetContent>
        </Sheet>
      )}
      
      <AuthButtons />
      
      <Button
        variant="ghost"
        size="icon"
        className="text-gray-600 hover:text-gray-900 transition-colors hover:bg-gray-100/50"
        onClick={toggleMobileMenu}
        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </Button>
    </div>
  );
};

export default MobileNav;
