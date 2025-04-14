
import { Link, useLocation } from 'react-router-dom';
import NavSectionItem from './NavSectionItem';
import { Home, Info, Briefcase, Shield, Phone } from 'lucide-react';

export default function MainNavSection() {
  const location = useLocation();

  const mainNavItems = [
    { name: 'Home', icon: Home, to: '/' },
    { name: 'About', icon: Info, to: '/about' },
    { name: 'Services', icon: Briefcase, to: '/services' },
    { name: 'CA Services', icon: Shield, to: '/ca-services' },
    { name: 'Contact', icon: Phone, to: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <div className="space-y-1 px-3">
      {mainNavItems.map((item) => (
        <NavSectionItem
          key={item.to}
          name={item.name}
          icon={item.icon}
          to={item.to}
          isActive={isActive(item.to)}
        />
      ))}
    </div>
  );
}
