
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
  Globe,
  Wifi,
  WifiOff
} from 'lucide-react';
import { toast } from 'sonner';
import { auth, isFirestoreAvailable } from '@/lib/firebase';
import { signOut } from 'firebase/auth';

// Import admin components
import UserManagement from '@/components/admin/UserManagement';
import ApplicationManagement from '@/components/admin/ApplicationManagement';
import AnalyticsDashboard from '@/components/admin/AnalyticsDashboard';
import ContentManagement from '@/components/admin/ContentManagement';
import YouTubeShortsManagement from '@/components/admin/YouTubeShortsManagement';
import TeamManagement from '@/components/admin/TeamManagement';
import SiteSettingsManager from '@/components/admin/site-settings/SiteSettingsManager';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('analytics');
  const [adminEmail, setAdminEmail] = useState<string>('');
  const [isOffline, setIsOffline] = useState(false);
  const [stats, setStats] = useState([
    { title: 'Total Users', value: '--', icon: Users, color: 'bg-blue-100 text-blue-700' },
    { title: 'Pending Applications', value: '--', icon: FileText, color: 'bg-yellow-100 text-yellow-700' },
    { title: 'Active Startups', value: '--', icon: Building, color: 'bg-green-100 text-green-700' },
    { title: 'Active Investors', value: '--', icon: BarChart, color: 'bg-purple-100 text-purple-700' },
  ]);
  
  // Check if admin is logged in and Firebase connection
  useEffect(() => {
    // Get admin email from localStorage
    const email = localStorage.getItem('adminEmail');
    if (email) {
      setAdminEmail(email);
    }

    // Check Firebase connection
    const checkFirestoreStatus = async () => {
      const available = await isFirestoreAvailable();
      setIsOffline(!available);
      
      if (!available) {
        toast.warning("Running in offline mode. Some features may be limited.");
      }
    };
    
    checkFirestoreStatus();
    
    // Load mock stats for now
    // In a real application, you would fetch these from Firestore
    setTimeout(() => {
      setStats([
        { title: 'Total Users', value: '1,248', icon: Users, color: 'bg-blue-100 text-blue-700' },
        { title: 'Pending Applications', value: '43', icon: FileText, color: 'bg-yellow-100 text-yellow-700' },
        { title: 'Active Startups', value: '782', icon: Building, color: 'bg-green-100 text-green-700' },
        { title: 'Active Investors', value: '466', icon: BarChart, color: 'bg-purple-100 text-purple-700' },
      ]);
    }, 1000);
  }, []);
  
  const handleLogout = async () => {
    try {
      // Sign out from Firebase
      if (!isOffline) {
        await signOut(auth);
      }
      
      // Clear local storage
      localStorage.removeItem('adminAuth');
      localStorage.removeItem('adminEmail');
      localStorage.removeItem('adminUid');
      
      toast.success("Successfully logged out");
      navigate('/admin');
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Error during logout");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome, {adminEmail || 'Admin'}
            {isOffline && <span className="ml-2 text-amber-500 flex items-center gap-1 text-sm">
              <WifiOff size={16} /> Offline Mode
            </span>}
          </p>
        </div>
        <Button variant="outline" onClick={handleLogout}>Logout</Button>
      </div>
      
      {/* Network status alert */}
      {isOffline && (
        <Card className="mb-6 border-amber-200 bg-amber-50">
          <CardContent className="p-4">
            <div className="flex gap-2 items-center text-amber-700">
              <AlertCircle className="h-5 w-5" />
              <p>
                You are in offline mode. Changes to YouTube shorts and other content will be stored locally 
                until a connection to Firebase is established.
              </p>
            </div>
          </CardContent>
        </Card>
      )}
      
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
        <TabsList className="grid grid-cols-1 md:grid-cols-7 mb-8">
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
          <TabsTrigger value="team">
            <Users className="w-4 h-4 mr-2" />
            Team
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
            <YouTubeShortsManagement isOffline={isOffline} />
          </div>
        </TabsContent>
        
        {/* Team Management Tab */}
        <TabsContent value="team">
          <TeamManagement isOffline={isOffline} />
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
              <div className="mt-4 flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${isOffline ? 'bg-red-500' : 'bg-green-500'}`}></div>
                <span>{isOffline ? 'Firebase Offline' : 'Firebase Connected'}</span>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminDashboard;
