
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  BarChart, 
  Users, 
  FileText, 
  Settings, 
  Shield, 
  AlertCircle, 
  Layers, 
  Upload, 
  Database,
  Building,
  Mail,
  Calendar,
  Youtube,
  Globe
} from 'lucide-react';

// Import admin components
import UserManagement from '@/components/admin/UserManagement';
import ApplicationManagement from '@/components/admin/ApplicationManagement';
import AnalyticsDashboard from '@/components/admin/AnalyticsDashboard';
import ContentManagement from '@/components/admin/ContentManagement';
import YouTubeShortsManagement from '@/components/admin/YouTubeShortsManagement';
import SiteSettingsManager from '@/components/admin/site-settings/SiteSettingsManager';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('analytics');
  
  // Check if admin is logged in
  useEffect(() => {
    const isAdmin = localStorage.getItem('adminAuth') === 'true';
    if (!isAdmin) {
      navigate('/admin');
    }
  }, [navigate]);
  
  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    navigate('/admin');
  };
  
  // Stats data for the dashboard
  const stats = [
    { title: 'Total Users', value: '1,248', icon: Users, color: 'bg-blue-100 text-blue-700' },
    { title: 'Pending Applications', value: '43', icon: FileText, color: 'bg-yellow-100 text-yellow-700' },
    { title: 'Active Startups', value: '782', icon: Building, color: 'bg-green-100 text-green-700' },
    { title: 'Active Investors', value: '466', icon: BarChart, color: 'bg-purple-100 text-purple-700' },
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage your website, users, and applications</p>
        </div>
        <Button variant="outline" onClick={handleLogout}>Logout</Button>
      </div>
      
      {/* Stats section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="flex items-center p-6">
              <div className={`p-3 rounded-full mr-4 ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                <h3 className="text-2xl font-bold">{stat.value}</h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Admin tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-1 md:grid-cols-6 mb-8">
          <TabsTrigger value="analytics">
            <BarChart className="w-4 h-4 mr-2" />
            Analytics
          </TabsTrigger>
          <TabsTrigger value="users">
            <Users className="w-4 h-4 mr-2" />
            User Management
          </TabsTrigger>
          <TabsTrigger value="applications">
            <FileText className="w-4 h-4 mr-2" />
            Applications
          </TabsTrigger>
          <TabsTrigger value="content">
            <Layers className="w-4 h-4 mr-2" />
            Content
          </TabsTrigger>
          <TabsTrigger value="site-settings">
            <Globe className="w-4 h-4 mr-2" />
            Site Settings
          </TabsTrigger>
          <TabsTrigger value="settings">
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </TabsTrigger>
        </TabsList>
        
        {/* Analytics Tab */}
        <TabsContent value="analytics">
          <AnalyticsDashboard />
        </TabsContent>
        
        {/* User Management Tab */}
        <TabsContent value="users">
          <UserManagement />
        </TabsContent>
        
        {/* Applications Tab */}
        <TabsContent value="applications">
          <ApplicationManagement />
        </TabsContent>
        
        {/* Content Management Tab */}
        <TabsContent value="content">
          <div className="grid grid-cols-1 gap-6">
            <ContentManagement />
            <YouTubeShortsManagement />
          </div>
        </TabsContent>
        
        {/* Site Settings Tab */}
        <TabsContent value="site-settings">
          <SiteSettingsManager />
        </TabsContent>
        
        {/* Settings Tab */}
        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Site Settings</CardTitle>
              <CardDescription>Configure website settings and preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Site configuration options will appear here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminDashboard;
