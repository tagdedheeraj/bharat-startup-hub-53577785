
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AuthButtons from '../AuthButtons';
import { MainNavigation } from './MainNavigation';
import { SearchPopover } from './SearchPopover';
import { NotificationsPopover } from './NotificationsPopover';

const DesktopNav = () => {
  const navigate = useNavigate();

  return (
    <div className="hidden lg:flex justify-between items-center w-full">
      <MainNavigation />

      <div className="flex items-center gap-4">
        <SearchPopover />
        <NotificationsPopover />
        <AuthButtons />
        
        <Button 
          className="bg-gradient-to-r from-india-saffron to-india-green text-black hover:from-india-saffron/90 hover:to-india-green/90 backdrop-blur-sm 
            shadow-[0_0_15px_rgba(255,255,255,0.2)] border border-india-white/30 text-sm
            hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all"
          size="sm"
          onClick={() => navigate('/contact')}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default DesktopNav;
