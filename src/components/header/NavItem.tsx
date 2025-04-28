
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

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
  isOpen?: boolean;
  onItemClick: () => void;
  onChildClick: (path: string) => void;
}

const NavItem = ({
  to,
  label,
  active,
  children,
  isOpen,
  onItemClick,
  onChildClick
}: NavItemProps) => {

  if (children) {
    return (
      <div className="relative">
        <button
          onClick={onItemClick}
          className={cn(
            "flex items-center px-4 py-2 text-sm font-medium transition-colors outline-none",
            active ? "text-brand-600" : "text-foreground/80 hover:text-brand-600"
          )}
        >
          <span className="mr-1">{label}</span>
          <ChevronDown 
            className={cn(
              "h-4 w-4 transition-transform duration-200",
              isOpen ? "rotate-180" : ""
            )} 
          />
        </button>
        
        {isOpen && (
          <div className="absolute left-0 top-full mt-1 bg-white rounded-md shadow-lg z-50 min-w-[220px] p-3 border border-gray-100">
            <div className="grid gap-2 md:w-[500px] lg:w-[600px] lg:grid-cols-2">
              {children.map((item) => (
                <div 
                  key={item.to} 
                  className="group cursor-pointer"
                  onClick={() => onChildClick(item.to)}
                >
                  <div className="block p-3 rounded-lg hover:bg-brand-50 hover:text-brand-600 transition-all duration-200 group-hover:shadow-md border border-transparent group-hover:border-brand-100/50">
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      to={to}
      className={cn(
        "group flex items-center relative px-4 py-2 text-sm font-medium transition-colors outline-none",
        active ? "text-brand-600" : "text-foreground/80 hover:text-brand-600"
      )}
      onClick={(e) => {
        onItemClick();
      }}
    >
      <span className="relative z-10">{label}</span>
      {active && (
        <span className="absolute inset-0 bg-brand-50 rounded-md -z-0"></span>
      )}
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-500 group-hover:w-4/5 transition-all duration-300"></span>
    </Link>
  );
};

export default NavItem;
