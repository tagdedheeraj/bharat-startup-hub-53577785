
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from '@/contexts/AuthContext';
import { saveInvestment } from '@/services/firebaseDataService';
import { toast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const portfolioSchema = z.object({
  startupName: z.string().min(3, 'Startup name must be at least 3 characters'),
  amountInvested: z.string().transform((val) => parseFloat(val)),
  equityPercentage: z.string().transform((val) => parseFloat(val)),
  investmentDate: z.string(),
});

type PortfolioFormValues = z.infer<typeof portfolioSchema>;

const AddPortfolioItemForm = () => {
  const { user } = useAuth();
  const form = useForm<PortfolioFormValues>({
    resolver: zodResolver(portfolioSchema),
    defaultValues: {
      startupName: '',
      amountInvested: '',
      equityPercentage: '',
      investmentDate: new Date().toISOString().substring(0, 10),
    },
  });

  const onSubmit = async (data: PortfolioFormValues) => {
    if (!user?.id) {
      toast({
        title: "Authentication Error",
        description: "You must be logged in to add portfolio items",
        variant: "destructive",
      });
      return;
    }
    
    try {
      // Add to Firestore
      await saveInvestment({
        startupName: data.startupName,
        amountInvested: data.amountInvested,
        equityPercentage: data.equityPercentage,
        investmentDate: data.investmentDate,
        investorId: user.id,
        status: 'active'
      });
      
      form.reset();
      
      toast({
        title: "Success",
        description: "Portfolio item added successfully",
      });
    } catch (error) {
      console.error("Error adding portfolio item:", error);
      toast({
        title: "Error",
        description: "Failed to add portfolio item",
        variant: "destructive",
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add New Investment</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="startupName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Startup Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Startup name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="amountInvested"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Amount Invested (₹)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Amount" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="equityPercentage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Equity Percentage (%)</FormLabel>
                  <FormControl>
                    <Input type="number" step="0.01" placeholder="Equity %" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="investmentDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Investment Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button type="submit" className="w-full">Add Investment</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default AddPortfolioItemForm;
