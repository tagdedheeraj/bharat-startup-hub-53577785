
import { Link, useLocation } from 'react-router-dom';
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { navigationData } from './navigationData';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NavigationDrawer({ isOpen, onClose }: NavigationDrawerProps) {
  const location = useLocation();

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent 
        side="left" 
        className="w-[280px] p-0 bg-gradient-to-b from-white to-gray-50 backdrop-blur-xl border-r border-white/20"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-4 border-b border-gray-100">
            <img 
              src="/lovable-uploads/5aa945b6-f31a-46aa-a7dd-0b27f6c14482.png" 
              alt="Logo" 
              className="h-8 w-auto"
            />
          </div>

          {/* Navigation Content */}
          <div className="flex-1 overflow-y-auto py-6 px-4">
            <nav className="space-y-6">
              {navigationData.map((section) => (
                <div key={section.label} className="space-y-3">
                  <h3 className="text-sm font-semibold text-gray-500 px-2">
                    {section.label}
                  </h3>
                  <div className="space-y-1">
                    {section.children?.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        onClick={onClose}
                        className={cn(
                          "flex items-center justify-between py-2 px-3 rounded-lg text-sm transition-colors",
                          "hover:bg-india-saffron/10 active:bg-india-saffron/20",
                          location.pathname === item.to
                            ? "bg-india-saffron/15 text-india-saffron font-medium"
                            : "text-gray-700"
                        )}
                      >
                        <div className="flex items-center gap-3">
                          {item.icon && (
                            <item.icon 
                              size={18} 
                              className={cn(
                                location.pathname === item.to 
                                  ? "text-india-saffron" 
                                  : "text-gray-500"
                              )} 
                            />
                          )}
                          {item.label}
                        </div>
                        <ChevronRight 
                          size={16} 
                          className={cn(
                            "text-gray-400 transition-transform",
                            location.pathname === item.to && "text-india-saffron"
                          )} 
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </nav>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
