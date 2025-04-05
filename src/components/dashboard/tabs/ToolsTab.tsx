
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ROICalculator from '../calculators/ROICalculator';
import StartupComparisonTool from '../comparison/StartupComparisonTool';
import { Card, CardContent } from '@/components/ui/card';

const ToolsTab = () => {
  return (
    <Card>
      <CardContent className="pt-6">
        <Tabs defaultValue="roi">
          <TabsList className="mb-4">
            <TabsTrigger value="roi">ROI Calculator</TabsTrigger>
            <TabsTrigger value="comparison">Startup Comparison</TabsTrigger>
          </TabsList>
          
          <TabsContent value="roi">
            <ROICalculator />
          </TabsContent>
          
          <TabsContent value="comparison">
            <StartupComparisonTool />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ToolsTab;
