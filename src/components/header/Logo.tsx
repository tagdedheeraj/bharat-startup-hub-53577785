
import { Link } from 'react-router-dom';

const Logo = () => (
  <Link to="/" className="relative group">
    <div className="overflow-hidden relative z-10">
      <img 
        src="/lovable-uploads/5aa945b6-f31a-46aa-a7dd-0b27f6c14482.png" 
        alt="Bharat Startup Solution" 
        className="h-14 md:h-16 w-auto transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-brand-600 via-brand-400 to-brand-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </div>
    <div className="absolute -inset-1 bg-gradient-to-r from-brand-200/20 to-brand-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500 group-hover:duration-200"></div>
  </Link>
);

export default Logo;
