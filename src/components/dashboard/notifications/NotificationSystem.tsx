
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bell, CheckCircle2, AlertCircle, TrendingUp, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

type Notification = {
  id: number;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'success';
  date: string;
  read: boolean;
}

const NotificationSystem = () => {
  const { toast } = useToast();
  
  // Mock data for notifications
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      title: "Portfolio Update",
      message: "GreenTech Solutions has raised their Series A round. Your investment has appreciated by 30%.",
      type: "success",
      date: "2024-04-02",
      read: false
    },
    {
      id: 2,
      title: "Meeting Reminder",
      message: "You have a meeting with HealthAI founders tomorrow at 11:00 AM.",
      type: "info",
      date: "2024-04-03",
      read: false
    },
    {
      id: 3,
      title: "Market Alert",
      message: "The FinTech sector experienced a 15% drop in valuations this quarter.",
      type: "warning",
      date: "2024-04-04",
      read: false
    },
    {
      id: 4,
      title: "Due Diligence Completed",
      message: "The due diligence process for EduLearn has been completed. Reports are available.",
      type: "success",
      date: "2024-04-01",
      read: true
    },
  ]);

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, read: true } : notification
    ));
    toast({
      title: "Notification marked as read",
      description: "The notification has been marked as read.",
    });
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({ ...notification, read: true })));
    toast({
      title: "All notifications marked as read",
      description: "All notifications have been marked as read.",
    });
  };

  const getIconForType = (type: string) => {
    switch (type) {
      case 'info':
        return <Calendar className="h-5 w-5 text-blue-500" />;
      case 'warning':
        return <AlertCircle className="h-5 w-5 text-amber-500" />;
      case 'success':
        return <TrendingUp className="h-5 w-5 text-green-500" />;
      default:
        return <Bell className="h-5 w-5 text-gray-500" />;
    }
  };

  const unreadCount = notifications.filter(notification => !notification.read).length;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <Bell className="h-5 w-5 text-primary" />
          Notifications
          {unreadCount > 0 && (
            <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-primary rounded-full">
              {unreadCount}
            </span>
          )}
        </CardTitle>
        {unreadCount > 0 && (
          <Button variant="outline" size="sm" onClick={markAllAsRead}>
            Mark all as read
          </Button>
        )}
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {notifications.length === 0 ? (
            <div className="text-center py-6 text-muted-foreground">
              No notifications to display
            </div>
          ) : (
            notifications.map(notification => (
              <div 
                key={notification.id} 
                className={`p-4 border ${notification.read ? 'bg-background' : 'bg-muted/30'} rounded-md`}
              >
                <div className="flex">
                  <div className="mr-3 mt-1">
                    {getIconForType(notification.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h3 className="font-medium">{notification.title}</h3>
                      <span className="text-xs text-muted-foreground">{notification.date}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
                    {!notification.read && (
                      <div className="mt-2 flex justify-end">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => markAsRead(notification.id)}
                          className="flex items-center gap-1"
                        >
                          <CheckCircle2 className="h-4 w-4" />
                          Mark as read
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default NotificationSystem;
