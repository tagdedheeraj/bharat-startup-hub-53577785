
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from "./types";

interface ContactFormMessageProps {
  form: UseFormReturn<FormValues>;
}

export default function ContactFormMessage({ form }: ContactFormMessageProps) {
  return (
    <FormField
      control={form.control}
      name="message"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="flex items-center gap-2">
            <MessageSquare size={16} className="text-india-saffron" />
            Message
          </FormLabel>
          <FormControl>
            <Textarea 
              placeholder="Enter your message here..." 
              className="min-h-[120px] focus-visible:ring-india-saffron"
              {...field} 
            />
          </FormControl>
          <FormMessage />
          <p className="text-xs text-muted-foreground text-right mt-1">
            {field.value?.length || 0}/500 characters
          </p>
        </FormItem>
      )}
    />
  );
}
