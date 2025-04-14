
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PieChart, BarChart, TrendingUp, BarChart3 } from 'lucide-react';

const PortfolioAnalysis = () => {
  // Mock data for portfolio analysis
  const sectorDistribution = [
    { sector: 'FinTech', percentage: 35 },
    { sector: 'HealthTech', percentage: 25 },
    { sector: 'EdTech', percentage: 15 },
    { sector: 'CleanTech', percentage: 15 },
    { sector: 'Others', percentage: 10 },
  ];

  const stageDistribution = [
    { stage: 'Seed', percentage: 40 },
    { stage: 'Series A', percentage: 30 },
    { stage: 'Series B', percentage: 20 },
    { stage: 'Pre-Seed', percentage: 10 },
  ];

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5" />
          Portfolio Analysis
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="sector">
          <TabsList className="mb-4">
            <TabsTrigger value="sector">Sector Distribution</TabsTrigger>
            <TabsTrigger value="stage">Funding Stage</TabsTrigger>
          </TabsList>
          
          <TabsContent value="sector">
            <div className="space-y-4">
              {sectorDistribution.map((item) => (
                <div key={item.sector} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{item.sector}</span>
                    <span className="font-medium">{item.percentage}%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary" 
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="stage">
            <div className="space-y-4">
              {stageDistribution.map((item) => (
                <div key={item.stage} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{item.stage}</span>
                    <span className="font-medium">{item.percentage}%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-secondary" 
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default PortfolioAnalysis;
