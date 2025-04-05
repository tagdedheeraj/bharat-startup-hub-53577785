
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';
import { 
  BarChart, Calendar, FileText, Lightbulb, PieChart, Users, 
  Building, AlertTriangle, CheckCircle, Clock, RefreshCw 
} from 'lucide-react';

const StartupDashboard = () => {
  const { user, logout } = useAuth();

  // Mock data
  const applications = [
    { id: 1, name: "Seed Fund Application", status: "pending", date: "2024-11-15" },
    { id: 2, name: "Startup Registration", status: "approved", date: "2024-10-30" },
    { id: 3, name: "ISO Certificate", status: "rejected", date: "2024-11-05" },
  ];

  const services = [
    { id: 1, name: "Startup Registration", description: "Get your startup officially registered with the government." },
    { id: 2, name: "Funding Consultation", description: "Expert advice on securing funding for your startup." },
    { id: 3, name: "Legal Consultation", description: "Legal advice for startups regarding compliance and more." },
  ];

  const upcomingEvents = [
    { id: 1, name: "Pitch Day", date: "2024-11-20", location: "Virtual" },
    { id: 2, name: "Networking Event", date: "2024-11-25", location: "Ahmedabad" },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className="text-green-500" />;
      case 'rejected':
        return <AlertTriangle className="text-red-500" />;
      case 'pending':
        return <Clock className="text-amber-500" />;
      default:
        return <RefreshCw className="text-blue-500" />;
    }
  };

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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Applications</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">
              +1 from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Services Used</CardTitle>
            <Building className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">
              +1 from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">
              Register for more events
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="applications" className="w-full">
        <TabsList className="grid grid-cols-1 md:grid-cols-3 mb-4">
          <TabsTrigger value="applications">My Applications</TabsTrigger>
          <TabsTrigger value="services">Available Services</TabsTrigger>
          <TabsTrigger value="events">Upcoming Events</TabsTrigger>
        </TabsList>
        
        <TabsContent value="applications">
          <Card>
            <CardHeader>
              <CardTitle>Application Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {applications.map(app => (
                  <div key={app.id} className="flex items-center p-4 border rounded-lg">
                    <div className="mr-4">
                      {getStatusIcon(app.status)}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{app.name}</h3>
                      <p className="text-sm text-muted-foreground">Applied on: {app.date}</p>
                    </div>
                    <div className="capitalize px-3 py-1 rounded-full text-xs font-medium" 
                         style={{
                           backgroundColor: app.status === 'approved' ? 'rgba(0, 200, 0, 0.1)' : 
                                           app.status === 'rejected' ? 'rgba(255, 0, 0, 0.1)' : 
                                           'rgba(255, 180, 0, 0.1)',
                           color: app.status === 'approved' ? 'green' : 
                                 app.status === 'rejected' ? 'red' : 
                                 'orange'
                         }}>
                      {app.status}
                    </div>
                  </div>
                ))}
                <Button className="w-full mt-4">
                  <Link to="/services" className="w-full">Apply for More Services</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="services">
          <Card>
            <CardHeader>
              <CardTitle>Recommended Services</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map(service => (
                  <Card key={service.id} className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="p-6">
                        <h3 className="font-semibold text-lg mb-2">{service.name}</h3>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                        <Button className="mt-4 w-full">
                          Learn More
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="events">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingEvents.map(event => (
                  <div key={event.id} className="flex items-center p-4 border rounded-lg">
                    <div className="mr-4 bg-primary/10 p-2 rounded-full">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{event.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {event.date} • {event.location}
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Register
                    </Button>
                  </div>
                ))}
                <Button variant="outline" className="w-full mt-4">
                  View All Events
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StartupDashboard;
