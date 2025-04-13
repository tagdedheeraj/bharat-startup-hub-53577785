
import React from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, FileText, Mail, Calendar, BarChart2, TrendingUp, TrendingDown } from 'lucide-react';

const AdminDashboard = () => {
  // Sample data for demonstration
  const stats = [
    {
      title: 'Total Users',
      value: '246',
      icon: Users,
      change: '+12%',
      trend: 'up',
    },
    {
      title: 'New Inquiries',
      value: '38',
      icon: Mail,
      change: '+5%',
      trend: 'up',
    },
    {
      title: 'Content Items',
      value: '72',
      icon: FileText,
      change: '+8%',
      trend: 'up',
    },
    {
      title: 'Upcoming Events',
      value: '6',
      icon: Calendar,
      change: '-2%',
      trend: 'down',
    },
  ];

  // Recent activities
  const activities = [
    { id: 1, text: 'New startup registered: TechInnovate Solutions', time: '2 hours ago' },
    { id: 2, text: 'Funding consultation request from AgroTech Ventures', time: '5 hours ago' },
    { id: 3, text: 'New blog post published: "How to Scale Your MSME"', time: '1 day ago' },
    { id: 4, text: 'New contact form submission from Rajesh Kumar', time: '1 day ago' },
    { id: 5, text: 'Compliance consultation booked for May 15', time: '2 days ago' },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Dashboard Overview</h1>
        
        {/* Stats cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-5 w-5 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="flex items-center mt-1">
                  {stat.trend === 'up' ? (
                    <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                  )}
                  <p className={`text-xs ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                    {stat.change} from last month
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Charts section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>User Registration</CardTitle>
              <CardDescription>Monthly registrations for startups and investors</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80 flex items-center justify-center bg-gray-100 rounded-md">
                <BarChart2 className="h-8 w-8 text-gray-400" />
                <span className="ml-2 text-gray-500">Chart visualization will appear here</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Service Requests</CardTitle>
              <CardDescription>Distribution of service requests by category</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80 flex items-center justify-center bg-gray-100 rounded-md">
                <BarChart2 className="h-8 w-8 text-gray-400" />
                <span className="ml-2 text-gray-500">Chart visualization will appear here</span>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
            <CardDescription>Latest activities across the platform</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {activities.map((activity) => (
                <li key={activity.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                  <p className="text-sm">{activity.text}</p>
                  <span className="text-xs text-gray-500">{activity.time}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
