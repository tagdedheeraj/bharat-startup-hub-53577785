
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PortfolioTab from './tabs/PortfolioTab';
import OpportunitiesTab from './tabs/OpportunitiesTab';
import EventsTab from './tabs/EventsTab';
import PortfolioAnalysis from './PortfolioAnalysis';
import MessagingCenter from './MessagingCenter';
import ToolsTab from './tabs/ToolsTab';
import VisualizationTab from './tabs/VisualizationTab';
import NotificationSystem from './notifications/NotificationSystem';

const InvestorDashboardTabs = () => {
  return (
    <Tabs defaultValue="portfolio" className="w-full">
      <TabsList className="grid grid-cols-1 md:grid-cols-8 mb-4">
        <TabsTrigger value="portfolio">My Portfolio</TabsTrigger>
        <TabsTrigger value="opportunities">Investment Opportunities</TabsTrigger>
        <TabsTrigger value="events">Upcoming Events</TabsTrigger>
        <TabsTrigger value="analytics">Portfolio Analysis</TabsTrigger>
        <TabsTrigger value="visualization">Visualization</TabsTrigger>
        <TabsTrigger value="tools">Investment Tools</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
        <TabsTrigger value="messaging">Messaging</TabsTrigger>
      </TabsList>
      
      <TabsContent value="portfolio">
        <PortfolioTab />
      </TabsContent>
      
      <TabsContent value="opportunities">
        <OpportunitiesTab />
      </TabsContent>
      
      <TabsContent value="events">
        <EventsTab />
      </TabsContent>
      
      <TabsContent value="analytics">
        <PortfolioAnalysis />
      </TabsContent>
      
      <TabsContent value="visualization">
        <VisualizationTab />
      </TabsContent>
      
      <TabsContent value="tools">
        <ToolsTab />
      </TabsContent>
      
      <TabsContent value="notifications">
        <NotificationSystem />
      </TabsContent>
      
      <TabsContent value="messaging">
        <MessagingCenter />
      </TabsContent>
    </Tabs>
  );
};

export default InvestorDashboardTabs;
