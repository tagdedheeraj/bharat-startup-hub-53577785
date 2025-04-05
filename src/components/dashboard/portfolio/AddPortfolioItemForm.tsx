
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from '@/contexts/AuthContext';
import { saveInvestment } from '@/services/firebaseDataService';
import { toast } from 'sonner';
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
import { Investment } from '@/hooks/useFirebaseData';
import { AlertCircle, Loader2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const portfolioSchema = z.object({
  startupName: z.string().min(3, 'Startup name must be at least 3 characters'),
  amountInvested: z.coerce.number().min(1, 'Amount must be greater than 0'),
  equityPercentage: z.coerce.number().min(0.01, 'Equity must be greater than 0').max(100, 'Equity cannot exceed 100%'),
  investmentDate: z.string(),
});

type PortfolioFormValues = z.infer<typeof portfolioSchema>;

const AddPortfolioItemForm = () => {
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const form = useForm<PortfolioFormValues>({
    resolver: zodResolver(portfolioSchema),
    defaultValues: {
      startupName: '',
      amountInvested: 0,
      equityPercentage: 0,
      investmentDate: new Date().toISOString().substring(0, 10),
    },
  });

  const onSubmit = async (data: PortfolioFormValues) => {
    if (!user?.id) {
      toast.error("Authentication Error", {
        description: "You must be logged in to add portfolio items",
      });
      return;
    }
    
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Add to Firestore
      await saveInvestment({
        startupName: data.startupName,
        amountInvested: data.amountInvested,
        equityPercentage: data.equityPercentage,
        investmentDate: data.investmentDate,
        investorId: user.id,
        status: 'active'
      } as Investment);
      
      form.reset();
      
      toast.success("Success", {
        description: "Portfolio item added successfully",
      });
    } catch (error) {
      console.error("Error adding portfolio item:", error);
      
      // Check for Firebase permission error
      if (error instanceof Error && error.message.includes("permission")) {
        setError("Permission denied. You don't have access to add investments. Please contact support.");
      } else {
        setError("Failed to add portfolio item. Please try again later.");
      }
      
      toast.error("Error", {
        description: "Failed to add portfolio item",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add New Investment</CardTitle>
      </CardHeader>
      <CardContent>
        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        
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
            
            <Button 
              type="submit" 
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Adding...
                </>
              ) : (
                'Add Investment'
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default AddPortfolioItemForm;
