
import { Link, useLocation } from 'react-router-dom';
import { Star, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function SecondaryNavSection() {
  const location = useLocation();
  
  const secondaryNavItems = [
    { name: 'Success Stories', icon: Star, to: '/success-stories' },
    { name: 'IT Solutions', icon: FileText, to: '/it-solutions' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <div className="mt-6 px-3">
      <p className="text-xs font-semibold text-gray-500 uppercase px-4 mb-2">Other Services</p>
      <div className="space-y-1">
        {secondaryNavItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={cn(
              "flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors",
              isActive(item.to)
                ? "bg-gradient-to-r from-india-saffron/20 to-transparent text-india-saffron font-medium"
                : "text-gray-700 hover:bg-gray-100"
            )}
          >
            <item.icon size={20} className={isActive(item.to) ? "text-india-saffron" : ""} />
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
