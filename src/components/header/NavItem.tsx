
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

interface NavItemProps {
  to: string;
  label: string;
  active: boolean;
  children?: {
    to: string;
    label: string;
    description?: string;
    icon?: React.ComponentType<any>;
  }[];
  toggleMobileMenu?: () => void;
}

const NavItem = ({ to, label, active, children, toggleMobileMenu }: NavItemProps) => {
  if (children) {
    return (
      <NavigationMenuItem>
        <NavigationMenuTrigger 
          className={`${active ? 'text-brand-600 font-medium' : 'text-foreground/80'} hover:text-brand-600 transition-all duration-300`}
        >
          {label}
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid gap-3 p-6 md:w-[500px] lg:w-[600px] lg:grid-cols-2">
            {children.map((item) => (
              <li key={item.to} className="group">
                <NavigationMenuLink asChild>
                  <Link
                    to={item.to}
                    className="block p-4 rounded-lg hover:bg-brand-50 hover:text-brand-600 transition-all duration-200 relative overflow-hidden group-hover:shadow-md border border-transparent group-hover:border-brand-100/50"
                    onClick={toggleMobileMenu}
                  >
                    <div className="flex items-center gap-3">
                      {item.icon && <item.icon className="h-5 w-5 text-brand-500" />}
                      <div>
                        <div className="font-medium leading-none mb-1">{item.label}</div>
                        {item.description && (
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 absolute right-4 top-1/2 -translate-y-1/2 opacity-0 transform translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-brand-500" />
                  </Link>
                </NavigationMenuLink>
              </li>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem>
      <Link
        to={to}
        className={cn(
          "group flex items-center relative px-4 py-2 text-sm font-medium transition-colors outline-none",
          active ? "text-brand-600" : "text-foreground/80 hover:text-brand-600"
        )}
        onClick={toggleMobileMenu}
      >
        <span className="relative z-10">{label}</span>
        {active && (
          <span className="absolute inset-0 bg-brand-50 rounded-md -z-0"></span>
        )}
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-500 group-hover:w-4/5 transition-all duration-300"></span>
      </Link>
    </NavigationMenuItem>
  );
};

export default NavItem;
