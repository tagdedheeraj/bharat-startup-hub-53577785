
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from '@/hooks/use-toast';
import { PieChart, BarChart3, TrendingUp, Building2, Calendar, Users } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const InvestorDashboard = () => {
  const { user, logout } = useAuth();

  // Mock data
  const portfolioStartups = [
    { id: 1, name: "GreenTech Solutions", industry: "CleanTech", fundingStage: "Seed", investmentDate: "2024-10-15", amount: "₹50,00,000", progress: 75 },
    { id: 2, name: "HealthAI", industry: "HealthTech", fundingStage: "Series A", investmentDate: "2024-09-20", amount: "₹1,20,00,000", progress: 60 },
  ];

  const recommendedStartups = [
    { id: 1, name: "FinLedger", industry: "FinTech", fundingStage: "Seed", targetAmount: "₹75,00,000", pitch: "Blockchain-based financial management system" },
    { id: 2, name: "EduLearn", industry: "EdTech", fundingStage: "Pre-Seed", targetAmount: "₹30,00,000", pitch: "AI-powered personalized learning platform" },
    { id: 3, name: "FarmConnect", industry: "AgriTech", fundingStage: "Seed", targetAmount: "₹60,00,000", pitch: "Digital marketplace for farmers and buyers" },
  ];

  const upcomingEvents = [
    { id: 1, name: "Investor Summit 2024", date: "2024-11-22", location: "Mumbai" },
    { id: 2, name: "Startup Pitch Day", date: "2024-11-28", location: "Virtual" },
  ];

  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Investor Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, {user?.name}</p>
        </div>
        <Button variant="outline" onClick={logout} className="mt-4 md:mt-0">
          Logout
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Portfolio Value</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹1.7 Cr</div>
            <p className="text-xs text-muted-foreground">
              +14% from last quarter
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Investments</CardTitle>
            <Building2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">
              In 2 startups
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Available Deals</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">
              Across multiple sectors
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
              In the next 30 days
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="portfolio" className="w-full">
        <TabsList className="grid grid-cols-1 md:grid-cols-3 mb-4">
          <TabsTrigger value="portfolio">My Portfolio</TabsTrigger>
          <TabsTrigger value="opportunities">Investment Opportunities</TabsTrigger>
          <TabsTrigger value="events">Upcoming Events</TabsTrigger>
        </TabsList>
        
        <TabsContent value="portfolio">
          <Card>
            <CardHeader>
              <CardTitle>Current Investments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {portfolioStartups.map(startup => (
                  <div key={startup.id} className="p-4 border rounded-lg">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                      <div>
                        <h3 className="font-medium text-lg">{startup.name}</h3>
                        <div className="flex space-x-4 text-sm text-muted-foreground mt-1">
                          <span>{startup.industry}</span>
                          <span>•</span>
                          <span>{startup.fundingStage}</span>
                        </div>
                      </div>
                      <div className="mt-2 md:mt-0 text-right">
                        <div className="font-semibold">{startup.amount}</div>
                        <div className="text-sm text-muted-foreground">Invested on {startup.investmentDate}</div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{startup.progress}%</span>
                      </div>
                      <Progress value={startup.progress} className="h-2" />
                    </div>
                    
                    <div className="flex justify-end mt-4">
                      <Button variant="outline" size="sm">View Details</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="opportunities">
          <Card>
            <CardHeader>
              <CardTitle>Recommended Startups</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {recommendedStartups.map(startup => (
                  <Card key={startup.id} className="overflow-hidden border-2">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-semibold text-lg">{startup.name}</h3>
                          <div className="flex space-x-2 text-sm text-muted-foreground mt-1">
                            <span>{startup.industry}</span>
                            <span>•</span>
                            <span>{startup.fundingStage}</span>
                          </div>
                        </div>
                        <div className="py-1 px-3 bg-primary/10 text-primary text-xs font-medium rounded-full">
                          Raising
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <div className="text-sm font-medium">Target Funding</div>
                        <div className="text-lg font-semibold">{startup.targetAmount}</div>
                      </div>
                      
                      <div className="mb-4">
                        <div className="text-sm font-medium">Pitch</div>
                        <p className="text-sm text-muted-foreground">{startup.pitch}</p>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button className="flex-1">Contact</Button>
                        <Button variant="outline" className="flex-1">View Details</Button>
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
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default InvestorDashboard;
