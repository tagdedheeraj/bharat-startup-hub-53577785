
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/auth';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Users, UserPlus, Settings, Home, LogOut } from 'lucide-react';

const AdminPanel = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const [loading, setLoading] = useState(false);
  const [userCount, setUserCount] = useState(0);
  const [activeTab, setActiveTab] = useState('dashboard');
  const navigate = useNavigate();

  // Check authentication and redirect if not admin
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    if (user?.role !== 'admin') {
      toast({
        title: "Access Denied",
        description: "You need admin privileges to access this page.",
        variant: "destructive"
      });
      navigate('/');
    }
  }, [isAuthenticated, user, navigate]);

  // Fetch basic stats
  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        const { count, error } = await supabase
          .from('profiles')
          .select('*', { count: 'exact', head: true });
        
        if (error) throw error;
        setUserCount(count || 0);
      } catch (error) {
        console.error("Error fetching stats:", error);
        toast({
          title: "Error",
          description: "Failed to load admin statistics",
          variant: "destructive"
        });
      } finally {
        setLoading(false);
      }
    };

    if (isAuthenticated && user?.role === 'admin') {
      fetchStats();
    }
  }, [isAuthenticated, user]);

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  if (!isAuthenticated || user?.role !== 'admin') {
    return null; // Don't render anything if not authenticated or not admin
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <Card className="w-full lg:w-64 h-fit">
          <CardHeader>
            <CardTitle className="text-xl">Admin Dashboard</CardTitle>
            <CardDescription>Welcome, {user.name}</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <nav className="space-y-1">
              <Button 
                variant={activeTab === 'dashboard' ? "secondary" : "ghost"} 
                className="w-full justify-start" 
                onClick={() => setActiveTab('dashboard')}
              >
                <Home className="mr-2 h-5 w-5" />
                Dashboard
              </Button>
              <Button 
                variant={activeTab === 'users' ? "secondary" : "ghost"} 
                className="w-full justify-start" 
                onClick={() => setActiveTab('users')}
              >
                <Users className="mr-2 h-5 w-5" />
                Users
              </Button>
              <Button 
                variant={activeTab === 'add-user' ? "secondary" : "ghost"} 
                className="w-full justify-start" 
                onClick={() => setActiveTab('add-user')}
              >
                <UserPlus className="mr-2 h-5 w-5" />
                Add User
              </Button>
              <Button 
                variant={activeTab === 'settings' ? "secondary" : "ghost"} 
                className="w-full justify-start" 
                onClick={() => setActiveTab('settings')}
              >
                <Settings className="mr-2 h-5 w-5" />
                Settings
              </Button>
            </nav>
          </CardContent>
          <CardFooter className="pt-6">
            <Button 
              variant="outline" 
              className="w-full justify-start text-red-500" 
              onClick={handleLogout}
            >
              <LogOut className="mr-2 h-5 w-5" />
              Logout
            </Button>
          </CardFooter>
        </Card>

        {/* Main Content */}
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>
              {activeTab === 'dashboard' && 'Admin Dashboard'}
              {activeTab === 'users' && 'Manage Users'}
              {activeTab === 'add-user' && 'Add New User'}
              {activeTab === 'settings' && 'System Settings'}
            </CardTitle>
            <CardDescription>
              {activeTab === 'dashboard' && 'Overview of your system'}
              {activeTab === 'users' && 'View and manage all users'}
              {activeTab === 'add-user' && 'Create a new user account'}
              {activeTab === 'settings' && 'Configure system settings'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {activeTab === 'dashboard' && (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">
                      Total Users
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{userCount}</div>
                    <p className="text-xs text-muted-foreground">
                      +0.2% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">
                      Active Sessions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+12</div>
                    <p className="text-xs text-muted-foreground">
                      +19% from last hour
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">
                      System Status
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-500">Healthy</div>
                    <p className="text-xs text-muted-foreground">
                      All services operational
                    </p>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === 'users' && (
              <div className="rounded-md border">
                <div className="p-4">
                  <h3 className="text-lg font-medium">User Management</h3>
                  <p className="text-sm text-gray-500">
                    View and manage all users in the system. This feature is under development.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'add-user' && (
              <div className="rounded-md border">
                <div className="p-4">
                  <h3 className="text-lg font-medium">Add New User</h3>
                  <p className="text-sm text-gray-500">
                    Create new user accounts with specific roles and permissions. This feature is under development.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="rounded-md border">
                <div className="p-4">
                  <h3 className="text-lg font-medium">System Settings</h3>
                  <p className="text-sm text-gray-500">
                    Configure global system settings and preferences. This feature is under development.
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminPanel;
