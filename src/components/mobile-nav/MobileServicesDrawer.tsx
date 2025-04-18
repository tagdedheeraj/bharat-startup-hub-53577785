
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { LayoutGrid, ChevronRight, Briefcase, Shield, FileText, Brain } from "lucide-react";
import { cn } from '@/lib/utils';

const services = [
  {
    category: "Business Services",
    icon: Briefcase,
    items: [
      { name: "AI Services", path: "/ai-services" },
      { name: "Funding Consultation", path: "/services/funding-consultation" },
      { name: "Certificate Marketing", path: "/services/certificate-marketing" },
      { name: "Legal Consultation", path: "/services/legal-consultation" },
      { name: "IT Solutions", path: "/it-solutions" },
    ]
  },
  {
    category: "CA Services",
    icon: Shield,
    items: [
      { name: "Certifications", path: "/ca-services/certifications" },
      { name: "Trademark", path: "/ca-services/trademark" },
      { name: "Income Tax", path: "/ca-services/income-tax" },
      { name: "Accounting", path: "/ca-services/accounting" },
      { name: "GST", path: "/ca-services/gst" },
      { name: "Payroll", path: "/ca-services/payroll" },
      { name: "Compliance", path: "/ca-services/compliance" },
    ]
  },
  {
    category: "Resources",
    icon: FileText,
    items: [
      { name: "Success Stories", path: "/success-stories" },
      { name: "MSME Events", path: "/more/msme-events" },
      { name: "Expert Network", path: "/more/experts" },
      { name: "Blog & News", path: "/more/blogs" },
    ]
  }
];

const MobileServicesDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    setIsOpen(false);
    setTimeout(() => {
      navigate(path);
    }, 300);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="flex flex-col items-center justify-center gap-1 w-12 h-12 rounded-full hover:bg-purple-500/20 active:scale-95"
        >
          <LayoutGrid size={20} className="text-gray-500" />
          <span className="text-xs text-gray-500">Services</span>
        </Button>
      </SheetTrigger>
      
      <SheetContent 
        side="left" 
        className="w-full sm:w-[380px] p-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 backdrop-blur-xl"
      >
        <ScrollArea className="h-full px-4 py-6">
          <div className="space-y-8">
            {services.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={category.category} className="space-y-4">
                  <div className="flex items-center gap-2 px-2">
                    <Icon className="w-5 h-5 text-purple-500" />
                    <h3 className="font-semibold text-purple-500">
                      {category.category}
                    </h3>
                  </div>
                  
                  <div className="space-y-1">
                    {category.items.map((item) => (
                      <Button
                        key={item.path}
                        variant="ghost"
                        className={cn(
                          "w-full justify-between pl-4",
                          "hover:bg-purple-500/10 hover:text-purple-500",
                          "active:scale-98 transition-all duration-200"
                        )}
                        onClick={() => handleNavigation(item.path)}
                      >
                        <span>{item.name}</span>
                        <ChevronRight size={18} className="text-gray-400" />
                      </Button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default MobileServicesDrawer;
