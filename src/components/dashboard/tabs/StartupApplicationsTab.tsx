
import React from 'react';
import { AlertTriangle, CheckCircle, Clock, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

interface Application {
  id: number;
  name: string;
  status: string;
  date: string;
}

const StartupApplicationsTab = () => {
  // Mock data
  const applications = [
    { id: 1, name: "Seed Fund Application", status: "pending", date: "2024-11-15" },
    { id: 2, name: "Startup Registration", status: "approved", date: "2024-10-30" },
    { id: 3, name: "ISO Certificate", status: "rejected", date: "2024-11-05" },
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
  );
};

export default StartupApplicationsTab;
