
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageSquare } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from "./types";

interface ContactFormSubjectProps {
  form: UseFormReturn<FormValues>;
}

export default function ContactFormSubject({ form }: ContactFormSubjectProps) {
  return (
    <FormField
      control={form.control}
      name="subject"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="flex items-center gap-2">
            <MessageSquare size={16} className="text-india-saffron" />
            Subject
          </FormLabel>
          <Select 
            onValueChange={field.onChange} 
            defaultValue={field.value}
          >
            <FormControl>
              <SelectTrigger className="focus-visible:ring-india-saffron">
                <SelectValue placeholder="Select a subject" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectItem value="funding">Funding & Investment</SelectItem>
              <SelectItem value="legal">Legal Consultation</SelectItem>
              <SelectItem value="compliance">Compliance Services</SelectItem>
              <SelectItem value="marketing">Marketing Services</SelectItem>
              <SelectItem value="other">Other Inquiry</SelectItem>
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
