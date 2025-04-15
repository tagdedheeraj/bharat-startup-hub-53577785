
import { LucideIcon } from 'lucide-react';

export interface NavItem {
  name: string;
  href: string;
  children?: {
    name: string;
    href: string;
    icon?: LucideIcon;
  }[];
}

export interface DropdownProps {
  item: NavItem;
  isActive: (path: string) => boolean;
  onNavigate: (href: string) => void;
}
