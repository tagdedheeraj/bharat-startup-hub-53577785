
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

interface Event {
  id: number;
  name: string;
  date: string;
  location: string;
}

const StartupEventsTab = () => {
  // Mock data
  const upcomingEvents = [
    { id: 1, name: "Pitch Day", date: "2024-11-20", location: "Virtual" },
    { id: 2, name: "Networking Event", date: "2024-11-25", location: "Ahmedabad" },
  ];

  return (
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
  );
};

export default StartupEventsTab;
