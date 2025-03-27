
import { Search, BellRing, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ActionButtons = () => {
  return (
    <div className="hidden lg:flex items-center gap-3">
      <Button variant="ghost" size="icon" className="text-black hover:text-india-saffron 
        hover:bg-white/10 transition-all duration-300">
        <Search size={18} />
      </Button>
      <Button variant="ghost" size="icon" className="text-black hover:text-india-saffron 
        hover:bg-white/10 transition-all duration-300 relative">
        <BellRing size={18} />
        <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-india-saffron 
          animate-pulse"></span>
      </Button>
      <Button variant="ghost" size="icon" className="text-black hover:text-india-saffron 
        hover:bg-white/10 transition-all duration-300">
        <User size={18} />
      </Button>
      <Button 
        className="bg-gradient-to-r from-india-saffron to-india-green text-black hover:from-india-saffron/90 hover:to-india-green/90 backdrop-blur-sm 
          shadow-[0_0_15px_rgba(255,255,255,0.2)] border border-india-white/30 text-sm
          hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all"
        size="sm"
      >
        Get Started
      </Button>
    </div>
  );
};

export default ActionButtons;
