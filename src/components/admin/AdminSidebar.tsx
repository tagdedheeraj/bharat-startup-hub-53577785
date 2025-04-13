
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronDown, 
  Home, 
  Users, 
  FileText, 
  Settings, 
  Mail, 
  BarChart2, 
  Calendar, 
  Info,
  Menu,
  X
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const AdminSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openMenus, setOpenMenus] = useState<string[]>(['dashboard']);
  const location = useLocation();

  const toggleMenu = (menu: string) => {
    setOpenMenus(prevState => 
      prevState.includes(menu) 
        ? prevState.filter(item => item !== menu) 
        : [...prevState, menu]
    );
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    {
      title: 'Dashboard',
      icon: Home,
      path: '/admin/dashboard',
      exact: true
    },
    {
      title: 'Users',
      icon: Users,
      path: '/admin/users',
      submenus: [
        { title: 'Startups', path: '/admin/users/startups' },
        { title: 'Investors', path: '/admin/users/investors' }
      ]
    },
    {
      title: 'Content',
      icon: FileText,
      path: '/admin/content',
      submenus: [
        { title: 'Success Stories', path: '/admin/content/success-stories' },
        { title: 'Blogs', path: '/admin/content/blogs' },
        { title: 'FAQs', path: '/admin/content/faqs' }
      ]
    },
    {
      title: 'Events',
      icon: Calendar,
      path: '/admin/events'
    },
    {
      title: 'Messages',
      icon: Mail,
      path: '/admin/messages'
    },
    {
      title: 'Analytics',
      icon: BarChart2,
      path: '/admin/analytics'
    },
    {
      title: 'Settings',
      icon: Settings,
      path: '/admin/settings'
    },
    {
      title: 'Website Info',
      icon: Info,
      path: '/admin/website-info'
    }
  ];

  return (
    <div 
      className={cn(
        "bg-gray-900 text-white flex flex-col transition-all duration-300",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex items-center justify-between h-16 px-4 border-b border-gray-800">
        {!isCollapsed && (
          <span className="text-lg font-semibold">Admin Panel</span>
        )}
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-white hover:bg-gray-800"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? <Menu size={20} /> : <X size={20} />}
        </Button>
      </div>
      
      <div className="flex-1 overflow-y-auto py-4">
        <nav className="px-2 space-y-1">
          {navItems.map((item) => (
            <div key={item.title}>
              {item.submenus ? (
                <>
                  <button
                    onClick={() => toggleMenu(item.title.toLowerCase())}
                    className={cn(
                      "flex items-center w-full px-2 py-2 text-sm rounded-md hover:bg-gray-800 transition-colors",
                      openMenus.includes(item.title.toLowerCase()) && "bg-gray-800"
                    )}
                  >
                    <item.icon className="w-5 h-5 mr-3" />
                    {!isCollapsed && (
                      <>
                        <span className="flex-1 text-left">{item.title}</span>
                        <ChevronDown 
                          className={cn(
                            "w-4 h-4 transition-transform",
                            openMenus.includes(item.title.toLowerCase()) && "transform rotate-180"
                          )} 
                        />
                      </>
                    )}
                  </button>
                  
                  {!isCollapsed && openMenus.includes(item.title.toLowerCase()) && (
                    <div className="mt-1 pl-6 space-y-1">
                      {item.submenus.map((submenu) => (
                        <Link
                          key={submenu.path}
                          to={submenu.path}
                          className={cn(
                            "block px-3 py-2 text-sm rounded-md hover:bg-gray-800 transition-colors",
                            isActive(submenu.path) && "bg-gray-800 text-brand-400"
                          )}
                        >
                          {submenu.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={item.path}
                  className={cn(
                    "flex items-center px-2 py-2 text-sm rounded-md hover:bg-gray-800 transition-colors",
                    isActive(item.path) && "bg-gray-800 text-brand-400"
                  )}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {!isCollapsed && <span>{item.title}</span>}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default AdminSidebar;
