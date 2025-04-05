
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

const EventsTab = () => {
  // Mock data
  const upcomingEvents = [
    { id: 1, name: "Investor Summit 2024", date: "2024-11-22", location: "Mumbai" },
    { id: 2, name: "Startup Pitch Day", date: "2024-11-28", location: "Virtual" },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Investor Events</CardTitle>
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
  );
};

export default EventsTab;
