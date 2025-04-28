
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { navigationData } from './navigationData';
import { useState } from 'react';

export const SearchPopover = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const navigate = useNavigate();
  
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

  const handleResultClick = (url: string) => {
    navigate(url);
    setSearchQuery('');
    setSearchResults([]);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-foreground/70 hover:text-brand-600 relative group transition-all duration-300"
        >
          <Search size={20} className="transition-all group-hover:scale-110" />
          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-500 group-hover:w-4/5 transition-all duration-300"></span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-4" align="end">
        <div className="space-y-4">
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
            <div className="max-h-72 overflow-auto">
              {searchResults.map((result, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center p-2 hover:bg-gray-100 rounded-md gap-2 cursor-pointer"
                  onClick={() => handleResultClick(result.url)}
                >
                  <div>
                    <div className="text-xs text-gray-500">{result.category}</div>
                    <div className="text-sm font-medium">{result.title}</div>
                  </div>
                </div>
              ))}
            </div>
          ) : searchQuery.trim() !== '' ? (
            <div className="text-center py-3 text-sm text-gray-500">No results found</div>
          ) : (
            <div className="text-center py-3 text-sm text-gray-500">Type to search services</div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
};
