import { useState } from 'react';
import { useForm } from "react-hook-form";
import { Building, User, Send, Users, Phone, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";

type GrievanceFormValues = {
  userType: "startup" | "investor";
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function GrievancesPage() {
  const { toast } = useToast();
  const form = useForm<GrievanceFormValues>();

  const onSubmit = (data: GrievanceFormValues) => {
    console.log(data);
    toast({
      title: "Grievance Submitted",
      description: "We have received your grievance and will respond soon.",
    });
    form.reset();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Submit a Grievance</h1>
            <p className="text-lg text-gray-600">
              We take your concerns seriously. Please fill out the form below and we'll address your grievance as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="userType"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel>Who are you?</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col sm:flex-row gap-4"
                            >
                              <div className="flex items-center space-x-2 bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                                <RadioGroupItem value="startup" id="startup" />
                                <label htmlFor="startup" className="flex items-center gap-2 cursor-pointer">
                                  <Building className="h-5 w-5 text-brand-600" />
                                  <span>Startup</span>
                                </label>
                              </div>
                              <div className="flex items-center space-x-2 bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                                <RadioGroupItem value="investor" id="investor" />
                                <label htmlFor="investor" className="flex items-center gap-2 cursor-pointer">
                                  <Users className="h-5 w-5 text-brand-600" />
                                  <span>Investor</span>
                                </label>
                              </div>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="Enter your email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter the subject of your grievance" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Please describe your grievance in detail" 
                              className="min-h-[150px]" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full">
                      <Send className="w-4 h-4 mr-2" />
                      Submit Grievance
                    </Button>
                  </form>
                </Form>
              </div>
            </div>

            <div className="lg:col-span-1">
              <Card className="bg-white">
                <CardContent className="p-6 space-y-6">
                  <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-brand-50 p-2 rounded-lg">
                        <Phone className="h-5 w-5 text-brand-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Call us at</p>
                        <a href="tel:+919081622284" className="text-brand-600 hover:text-brand-700 font-medium">
                          +91 90816 22284
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="bg-brand-50 p-2 rounded-lg">
                        <Mail className="h-5 w-5 text-brand-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Email us at</p>
                        <a href="mailto:support@bharatstartupsolution.com" className="text-brand-600 hover:text-brand-700 font-medium">
                          support@bharatstartupsolution.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-gray-100">
                    <p className="text-sm text-gray-600">
                      Our support team is available Monday to Friday, 9:00 AM to 6:00 PM IST.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
