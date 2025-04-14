
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface NavLinkProps {
  to: string;
  label: string;
  isActive: boolean;
}

const NavLink = ({ to, label, isActive }: NavLinkProps) => {
  return (
    <Link
      to={to}
      className={cn(
        "group relative px-3 py-2 font-medium transition-colors",
        isActive 
          ? "text-india-saffron" 
          : "text-black hover:text-india-saffron"
      )}
    >
      <span className="relative z-10">{label}</span>
      <span className={cn(
        "absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200",
        isActive && "opacity-100"
      )}></span>
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 
        bg-india-saffron group-hover:w-1/2 transition-all duration-300"></span>
    </Link>
  );
};

export default NavLink;
