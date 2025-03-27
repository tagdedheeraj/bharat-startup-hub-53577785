
import { Phone, Mail } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="hidden sm:block relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-600 via-brand-500 to-brand-700 animate-gradient-x"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center py-2 text-black">
          <div className="flex items-center space-x-6 text-sm">
            <a href="tel:+911234567890" className="flex items-center gap-1.5 hover:text-black/80 transition-colors group">
              <div className="relative">
                <Phone size={14} className="group-hover:animate-ping absolute opacity-0 group-hover:opacity-75" />
                <Phone size={14} className="relative" />
              </div>
              <span>+91 1234567890</span>
            </a>
            <a href="mailto:info@bharatstartup.com" className="flex items-center gap-1.5 hover:text-black/80 transition-colors group">
              <div className="relative">
                <Mail size={14} className="group-hover:animate-ping absolute opacity-0 group-hover:opacity-75" />
                <Mail size={14} className="relative" />
              </div>
              <span>info@bharatstartup.com</span>
            </a>
          </div>
          <div className="flex items-center">
            <div className="relative px-4 py-1 text-xs font-medium rounded-full text-black border border-white/20 hover:bg-white/10 transition-all cursor-pointer">
              <span className="relative z-10">Join our network</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
