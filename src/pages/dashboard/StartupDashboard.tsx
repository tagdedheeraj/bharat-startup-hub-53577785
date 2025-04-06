
import React from 'react';
import { useAuth } from '@/contexts/auth';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import StartupMetricCards from '@/components/dashboard/StartupMetricCards';
import StartupApplicationsTab from '@/components/dashboard/tabs/StartupApplicationsTab';
import StartupServicesTab from '@/components/dashboard/tabs/StartupServicesTab';
import StartupEventsTab from '@/components/dashboard/tabs/StartupEventsTab';

const StartupDashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Startup Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, {user?.name}</p>
        </div>
        <Button variant="outline" onClick={logout} className="mt-4 md:mt-0">
          Logout
        </Button>
      </div>

      <StartupMetricCards />

      <Tabs defaultValue="applications" className="w-full">
        <TabsList className="grid grid-cols-1 md:grid-cols-3 mb-4">
          <TabsTrigger value="applications">My Applications</TabsTrigger>
          <TabsTrigger value="services">Available Services</TabsTrigger>
          <TabsTrigger value="events">Upcoming Events</TabsTrigger>
        </TabsList>
        
        <TabsContent value="applications">
          <StartupApplicationsTab />
        </TabsContent>
        
        <TabsContent value="services">
          <StartupServicesTab />
        </TabsContent>
        
        <TabsContent value="events">
          <StartupEventsTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StartupDashboard;
