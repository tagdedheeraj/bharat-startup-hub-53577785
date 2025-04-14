
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { User, Mail, Phone, Building2 } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from "./types";

interface ContactFormPersonalInfoProps {
  form: UseFormReturn<FormValues>;
}

export default function ContactFormPersonalInfo({ form }: ContactFormPersonalInfoProps) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2">
                <User size={16} className="text-india-saffron" />
                Full Name
              </FormLabel>
              <FormControl>
                <Input 
                  placeholder="Enter your full name" 
                  className="focus-visible:ring-india-saffron" 
                  {...field} 
                />
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
              <FormLabel className="flex items-center gap-2">
                <Mail size={16} className="text-india-saffron" />
                Email Address
              </FormLabel>
              <FormControl>
                <Input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="focus-visible:ring-india-saffron" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="mobile"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2">
                <Phone size={16} className="text-india-saffron" />
                Mobile Number
              </FormLabel>
              <FormControl>
                <Input 
                  type="tel" 
                  placeholder="Enter your mobile number" 
                  className="focus-visible:ring-india-saffron" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2">
                <Building2 size={16} className="text-india-saffron" />
                Company Name
              </FormLabel>
              <FormControl>
                <Input 
                  placeholder="Enter your company name" 
                  className="focus-visible:ring-india-saffron" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </>
  );
}
