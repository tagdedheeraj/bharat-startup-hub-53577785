
import { Link } from 'react-router-dom';

const Logo = () => (
  <Link to="/" className="relative group z-10">
    <div className="overflow-hidden relative">
      <img 
        src="/lovable-uploads/5aa945b6-f31a-46aa-a7dd-0b27f6c14482.png" 
        alt="Bharat Startup Solution" 
        className="h-14 md:h-16 w-auto transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-india-saffron via-india-white to-india-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </div>
  </Link>
);

export default Logo;
