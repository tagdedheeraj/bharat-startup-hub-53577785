
import { Link, useLocation } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

type NavItemProps = {
  icon: LucideIcon;
  label: string;
  to: string;
};

export default function NavItem({ icon: Icon, label, to }: NavItemProps) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`flex flex-col items-center justify-center w-full h-full transition-colors ${
        isActive ? 'text-india-saffron' : 'text-gray-500 hover:text-brand-500'
      }`}
    >
      <Icon size={20} className={isActive ? 'text-india-saffron' : ''} />
      <span className="text-xs mt-1">{label}</span>
    </Link>
  );
}
