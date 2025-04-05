
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const OpportunitiesTab = () => {
  // Mock data
  const recommendedStartups = [
    { id: 1, name: "FinLedger", industry: "FinTech", fundingStage: "Seed", targetAmount: "₹75,00,000", pitch: "Blockchain-based financial management system" },
    { id: 2, name: "EduLearn", industry: "EdTech", fundingStage: "Pre-Seed", targetAmount: "₹30,00,000", pitch: "AI-powered personalized learning platform" },
    { id: 3, name: "FarmConnect", industry: "AgriTech", fundingStage: "Seed", targetAmount: "₹60,00,000", pitch: "Digital marketplace for farmers and buyers" },
  ];

  return (
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
  );
};

export default OpportunitiesTab;
