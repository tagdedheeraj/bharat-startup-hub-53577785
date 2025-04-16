
import { useForm } from "react-hook-form";
import { Building, Users, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";

type GrievanceFormValues = {
  userType: "startup" | "investor";
  name: string;
  email: string;
  subject: string;
  message: string;
};

export function GrievanceForm() {
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
  );
}
