
import { Link, useLocation } from 'react-router-dom';
import { Shield, Info, Receipt, FileSpreadsheet } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function CAServicesSection() {
  const location = useLocation();
  
  const caServicesItems = [
    { name: 'Certifications', icon: Shield, to: '/ca-services/certifications' },
    { name: 'Trademark', icon: Shield, to: '/ca-services/trademark' },
    { name: 'Income Tax', icon: Info, to: '/ca-services/income-tax' },
    { name: 'GST', icon: Receipt, to: '/ca-services/gst' },
    { name: 'Payroll', icon: FileSpreadsheet, to: '/ca-services/payroll' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <div className="mt-6 px-3">
      <p className="text-xs font-semibold text-gray-500 uppercase px-4 mb-2">CA Services</p>
      <div className="space-y-1">
        {caServicesItems.map((item) => (
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
