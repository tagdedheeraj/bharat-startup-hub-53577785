
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import InvestorMetricsCards from '@/components/dashboard/InvestorMetricsCards';
import InvestorDashboardTabs from '@/components/dashboard/InvestorDashboardTabs';
import DealFlowManager from '@/components/dashboard/DealFlowManager';
import { Toaster } from '@/components/ui/sonner';

const InvestorDashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="container px-4 py-8 mx-auto">
      <Toaster position="top-right" />
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Investor Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, {user?.name}</p>
        </div>
        <Button variant="outline" onClick={logout} className="mt-4 md:mt-0">
          Logout
        </Button>
      </div>

      <InvestorMetricsCards />
      
      <InvestorDashboardTabs />
      
      <DealFlowManager />
    </div>
  );
};

export default InvestorDashboard;
