
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

type NavSectionItemProps = {
  name: string;
  icon: LucideIcon;
  to: string;
  isActive: boolean;
};

export default function NavSectionItem({ name, icon: Icon, to, isActive }: NavSectionItemProps) {
  return (
    <Link
      to={to}
      className={cn(
        "flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors",
        isActive
          ? "bg-gradient-to-r from-india-saffron/20 to-transparent text-india-saffron font-medium"
          : "text-gray-700 hover:bg-gray-100"
      )}
    >
      <Icon size={20} className={isActive ? "text-india-saffron" : ""} />
      {name}
      {isActive && (
        <ChevronRight size={16} className="ml-auto text-india-saffron" />
      )}
    </Link>
  );
}

import { ChevronRight } from 'lucide-react';
