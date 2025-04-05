
import React from 'react';
import { useInvestorPortfolio } from '@/hooks/useFirebaseData';
import AddPortfolioItemForm from '@/components/dashboard/portfolio/AddPortfolioItemForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

const PortfolioTab = () => {
  const { data: investments, loading, error } = useInvestorPortfolio();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>My Investments</CardTitle>
            <CardDescription>Manage your startup investments</CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="flex items-center justify-center h-40">
                <p>Loading investments...</p>
              </div>
            ) : error ? (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                  Failed to load investments. Please try again.
                </AlertDescription>
              </Alert>
            ) : investments && investments.length > 0 ? (
              <Tabs defaultValue="active" className="w-full">
                <TabsList className="grid grid-cols-2 mb-4">
                  <TabsTrigger value="active">Active Investments</TabsTrigger>
                  <TabsTrigger value="all">All Investments</TabsTrigger>
                </TabsList>
                
                <TabsContent value="active">
                  <div className="space-y-4">
                    {investments
                      .filter(investment => investment.status === 'active')
                      .map((investment, index) => (
                        <Card key={index}>
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-medium text-lg">{investment.startupName}</h3>
                                <p className="text-sm text-muted-foreground">
                                  Invested on: {new Date(investment.investmentDate).toLocaleDateString()}
                                </p>
                              </div>
                              <div className="text-right">
                                <p className="font-bold">₹{investment.amountInvested.toLocaleString()}</p>
                                <p className="text-sm">{investment.equityPercentage}% equity</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                      
                    {investments.filter(i => i.status === 'active').length === 0 && (
                      <p className="text-center py-8 text-muted-foreground">
                        No active investments found.
                      </p>
                    )}
                  </div>
                </TabsContent>
                
                <TabsContent value="all">
                  <div className="space-y-4">
                    {investments.map((investment, index) => (
                      <Card key={index}>
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-medium text-lg">{investment.startupName}</h3>
                              <p className="text-sm text-muted-foreground">
                                Invested on: {new Date(investment.investmentDate).toLocaleDateString()}
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="font-bold">₹{investment.amountInvested.toLocaleString()}</p>
                              <p className="text-sm">{investment.equityPercentage}% equity</p>
                              <p className="text-xs text-muted-foreground">Status: {investment.status}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            ) : (
              <div className="flex flex-col items-center justify-center h-40 space-y-4">
                <p className="text-center text-muted-foreground">No investments found.</p>
                <p className="text-center text-sm text-muted-foreground">
                  Use the form on the right to add your first investment.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
      
      <div className="md:col-span-1">
        <AddPortfolioItemForm />
      </div>
    </div>
  );
};

export default PortfolioTab;
