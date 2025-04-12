
import { Link, useLocation } from 'react-router-dom';
import { Phone } from 'lucide-react';

export default function ContactNavItem() {
  const location = useLocation();
  const isActive = location.pathname === '/contact';

  return (
    <Link
      to="/contact"
      className={`flex flex-col items-center justify-center w-full h-full transition-colors ${
        isActive ? 'text-india-saffron' : 'text-gray-500 hover:text-brand-500'
      }`}
    >
      <Phone size={20} className={isActive ? 'text-india-saffron' : ''} />
      <span className="text-xs mt-1">Contact</span>
    </Link>
  );
}
