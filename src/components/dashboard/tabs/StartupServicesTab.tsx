
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

interface Service {
  id: number;
  name: string;
  description: string;
  link: string;
}

const StartupServicesTab = () => {
  // Mock data
  const services = [
    { 
      id: 1, 
      name: "Startup Registration", 
      description: "Get your startup officially registered with the government.",
      link: "/services/certificate-marketing"
    },
    { 
      id: 2, 
      name: "Funding Consultation", 
      description: "Expert advice on securing funding for your startup.",
      link: "/services/funding-consultation"
    },
    { 
      id: 3, 
      name: "Legal Consultation", 
      description: "Legal advice for startups regarding compliance and more.",
      link: "/services/legal-consultation"
    },
  ];

  return (
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
                    <Link to={service.link} className="w-full">Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default StartupServicesTab;
