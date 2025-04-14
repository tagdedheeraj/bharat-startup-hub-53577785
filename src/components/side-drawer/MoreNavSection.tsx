
import { Link, useLocation } from 'react-router-dom';
import { Info, Star, Menu, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function MoreNavSection() {
  const location = useLocation();
  
  const moreItems = [
    { name: 'Experts', icon: Info, to: '/more/experts' },
    { name: 'MSME Events', icon: Info, to: '/more/msme-events' },
    { name: 'Reviews', icon: Star, to: '/more/reviews' },
    { name: 'Blogs', icon: Menu, to: '/more/blogs' },
    { name: 'Compliance', icon: Shield, to: '/more/compliance' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <div className="mt-6 px-3">
      <p className="text-xs font-semibold text-gray-500 uppercase px-4 mb-2">More</p>
      <div className="space-y-1">
        {moreItems.map((item) => (
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
