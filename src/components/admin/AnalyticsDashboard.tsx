
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { BarChart, PieChart, TrendingUp, Users, Building, FileText } from 'lucide-react';
import { ResponsiveContainer, PieChart as RechartsPieChart, Pie, Cell, BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// Mock data for the charts
const userRoleData = [
  { name: 'Startups', value: 65, color: '#3b82f6' },
  { name: 'Investors', value: 35, color: '#8b5cf6' },
];

const applicationStatusData = [
  { name: 'Approved', value: 42, color: '#10b981' },
  { name: 'Pending', value: 28, color: '#f59e0b' },
  { name: 'Rejected', value: 15, color: '#ef4444' },
  { name: 'Under Review', value: 15, color: '#6366f1' },
];

const monthlyRegistrationsData = [
  { name: 'Jan', startups: 5, investors: 3 },
  { name: 'Feb', startups: 7, investors: 4 },
  { name: 'Mar', startups: 10, investors: 6 },
  { name: 'Apr', startups: 8, investors: 5 },
  { name: 'May', startups: 12, investors: 7 },
  { name: 'Jun', startups: 15, investors: 9 },
];

const applicationMonthlyData = [
  { name: 'Jan', funding: 3, certificate: 2, investment: 1 },
  { name: 'Feb', funding: 5, certificate: 3, investment: 2 },
  { name: 'Mar', funding: 7, certificate: 4, investment: 3 },
  { name: 'Apr', funding: 6, certificate: 5, investment: 4 },
  { name: 'May', funding: 8, certificate: 6, investment: 5 },
  { name: 'Jun', funding: 10, certificate: 7, investment: 6 },
];

// Colors for bar charts
const barColors = {
  startups: '#3b82f6',
  investors: '#8b5cf6',
  funding: '#ef4444',
  certificate: '#10b981',
  investment: '#f59e0b',
};

const AnalyticsDashboard: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BarChart className="h-5 w-5" />
          Analytics Dashboard
        </CardTitle>
        <CardDescription>
          Analytics and metrics for startups and investors
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <Tabs defaultValue="users">
          <TabsList className="grid grid-cols-1 md:grid-cols-2 mb-6">
            <TabsTrigger value="users">
              <Users className="mr-2 h-4 w-4" />
              User Analytics
            </TabsTrigger>
            <TabsTrigger value="applications">
              <FileText className="mr-2 h-4 w-4" />
              Application Analytics
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="users">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* User Role Distribution */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">User Distribution</CardTitle>
                  <CardDescription>
                    Breakdown of users by role
                  </CardDescription>
                </CardHeader>
                <CardContent className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsPieChart>
                      <Pie
                        data={userRoleData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {userRoleData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </RechartsPieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
              
              {/* Monthly User Registrations */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Monthly Registrations</CardTitle>
                  <CardDescription>
                    New user registrations by month
                  </CardDescription>
                </CardHeader>
                <CardContent className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsBarChart
                      data={monthlyRegistrationsData}
                      margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="startups" name="Startups" fill={barColors.startups} />
                      <Bar dataKey="investors" name="Investors" fill={barColors.investors} />
                    </RechartsBarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="applications">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Application Status Distribution */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Application Status</CardTitle>
                  <CardDescription>
                    Distribution of applications by status
                  </CardDescription>
                </CardHeader>
                <CardContent className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsPieChart>
                      <Pie
                        data={applicationStatusData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {applicationStatusData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </RechartsPieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
              
              {/* Monthly Applications */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Monthly Applications</CardTitle>
                  <CardDescription>
                    New applications by month and type
                  </CardDescription>
                </CardHeader>
                <CardContent className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsBarChart
                      data={applicationMonthlyData}
                      margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="funding" name="Funding" fill={barColors.funding} />
                      <Bar dataKey="certificate" name="Certificate" fill={barColors.certificate} />
                      <Bar dataKey="investment" name="Investment" fill={barColors.investment} />
                    </RechartsBarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default AnalyticsDashboard;
