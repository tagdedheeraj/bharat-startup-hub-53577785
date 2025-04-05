
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const PortfolioTab = () => {
  // Mock data
  const portfolioStartups = [
    { id: 1, name: "GreenTech Solutions", industry: "CleanTech", fundingStage: "Seed", investmentDate: "2024-10-15", amount: "₹50,00,000", progress: 75 },
    { id: 2, name: "HealthAI", industry: "HealthTech", fundingStage: "Series A", investmentDate: "2024-09-20", amount: "₹1,20,00,000", progress: 60 },
  ];

  return (
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
  );
};

export default PortfolioTab;
