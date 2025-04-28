
import { Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useAuth } from '@/contexts/auth';

export const NotificationsPopover = () => {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) return null;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-foreground/70 hover:text-brand-600 relative group transition-all duration-300"
        >
          <Bell size={20} className="transition-all group-hover:scale-110" />
          <span className="absolute top-1 right-1.5 h-2 w-2 rounded-full bg-red-500"></span>
          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-500 group-hover:w-4/5 transition-all duration-300"></span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="end">
        <div className="p-4">
          <h4 className="font-medium text-sm mb-4 border-b pb-2">Notifications</h4>
          <div className="space-y-3 max-h-72 overflow-auto">
            <div className="p-3 bg-blue-50 rounded-md">
              <p className="text-sm font-medium">Application Update</p>
              <p className="text-xs text-gray-600 mt-1">Your funding application has been received.</p>
              <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
            </div>
            <div className="p-3 bg-green-50 rounded-md">
              <p className="text-sm font-medium">Certificate Approved</p>
              <p className="text-xs text-gray-600 mt-1">Your MSME certificate has been approved.</p>
              <p className="text-xs text-gray-400 mt-1">Yesterday</p>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
