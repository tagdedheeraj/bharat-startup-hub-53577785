
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, PieChart, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Bar, Pie, Line, Cell, Legend } from 'recharts';
import { BarChart3 } from 'lucide-react';
import { ChartContainer, ChartTooltipContent } from '@/components/ui/chart';

const PortfolioVisualization = () => {
  // Mock data for portfolio visualization
  const allocationData = [
    { name: 'FinTech', value: 35, fill: '#8884d8' },
    { name: 'HealthTech', value: 25, fill: '#82ca9d' },
    { name: 'EdTech', value: 15, fill: '#ffc658' },
    { name: 'CleanTech', value: 15, fill: '#ff8042' },
    { name: 'Others', value: 10, fill: '#0088fe' },
  ];

  const performanceData = [
    { month: 'Jan', value: 2000, fill: '#8884d8' },
    { month: 'Feb', value: 2500, fill: '#8884d8' },
    { month: 'Mar', value: 2300, fill: '#8884d8' },
    { month: 'Apr', value: 3000, fill: '#8884d8' },
    { month: 'May', value: 2800, fill: '#8884d8' },
    { month: 'Jun', value: 3500, fill: '#8884d8' },
  ];

  const growthData = [
    { name: 'Q1', value: 100 },
    { name: 'Q2', value: 120 },
    { name: 'Q3', value: 140 },
    { name: 'Q4', value: 170 },
    { name: 'Q1', value: 210 },
    { name: 'Q2', value: 250 },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BarChart3 className="h-5 w-5 text-primary" />
          Interactive Portfolio Visualization
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="allocation">
          <TabsList className="mb-4">
            <TabsTrigger value="allocation">Sector Allocation</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="growth">Portfolio Growth</TabsTrigger>
          </TabsList>
          
          <TabsContent value="allocation">
            <div className="h-[300px] w-full">
              <ChartContainer
                config={{
                  FinTech: { color: '#8884d8' },
                  HealthTech: { color: '#82ca9d' },
                  EdTech: { color: '#ffc658' },
                  CleanTech: { color: '#ff8042' },
                  Others: { color: '#0088fe' },
                }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={allocationData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={100}
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {allocationData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Pie>
                    <Tooltip content={<ChartTooltipContent />} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
          </TabsContent>
          
          <TabsContent value="performance">
            <div className="h-[300px] w-full">
              <ChartContainer config={{ value: { color: '#8884d8' } }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={performanceData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="value" name="Value (₹'000)" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
          </TabsContent>
          
          <TabsContent value="growth">
            <div className="h-[300px] w-full">
              <ChartContainer config={{ value: { color: '#82ca9d' } }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={growthData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip content={<ChartTooltipContent />} />
                    <Line type="monotone" dataKey="value" name="Portfolio Value (₹ Lakhs)" stroke="#82ca9d" />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default PortfolioVisualization;
