
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calculator } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ROICalculator = () => {
  const { toast } = useToast();
  const [initialInvestment, setInitialInvestment] = useState<number>(100000);
  const [expectedReturn, setExpectedReturn] = useState<number>(15);
  const [timeframe, setTimeframe] = useState<number>(5);
  const [result, setResult] = useState<number | null>(null);

  const calculateROI = () => {
    // Simple compound interest calculation: A = P(1 + r/100)^t
    const finalValue = initialInvestment * Math.pow(1 + expectedReturn / 100, timeframe);
    const roi = finalValue - initialInvestment;
    setResult(roi);
    
    toast({
      title: "ROI Calculated",
      description: `Potential return of ₹${roi.toLocaleString(undefined, { maximumFractionDigits: 0 })} over ${timeframe} years`,
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="h-5 w-5 text-primary" />
          Investment ROI Calculator
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <label htmlFor="investment" className="block text-sm font-medium mb-1">
              Initial Investment (₹)
            </label>
            <input
              id="investment"
              type="number"
              value={initialInvestment}
              onChange={(e) => setInitialInvestment(Number(e.target.value))}
              className="w-full p-2 border rounded-md"
              min="1000"
            />
          </div>
          
          <div>
            <label htmlFor="return" className="block text-sm font-medium mb-1">
              Expected Annual Return (%)
            </label>
            <input
              id="return"
              type="number"
              value={expectedReturn}
              onChange={(e) => setExpectedReturn(Number(e.target.value))}
              className="w-full p-2 border rounded-md"
              min="1"
              max="100"
            />
          </div>
          
          <div>
            <label htmlFor="timeframe" className="block text-sm font-medium mb-1">
              Investment Timeframe (Years)
            </label>
            <input
              id="timeframe"
              type="number"
              value={timeframe}
              onChange={(e) => setTimeframe(Number(e.target.value))}
              className="w-full p-2 border rounded-md"
              min="1"
              max="30"
            />
          </div>
          
          <Button onClick={calculateROI} className="w-full">
            Calculate ROI
          </Button>
          
          {result !== null && (
            <div className="mt-4 p-4 bg-primary/10 rounded-md">
              <h3 className="font-medium">Potential Return:</h3>
              <div className="text-2xl font-bold text-primary">
                ₹{result.toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </div>
              <p className="text-sm text-muted-foreground">
                over {timeframe} years (total value: ₹{(result + initialInvestment).toLocaleString(undefined, { maximumFractionDigits: 0 })})
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ROICalculator;
