
import React from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { UseFormReturn } from 'react-hook-form';
import { TeamMemberFormData } from '../schema/teamMemberSchema';

interface BioSectionProps {
  form: UseFormReturn<TeamMemberFormData>;
}

const BioSection: React.FC<BioSectionProps> = ({ form }) => {
  return (
    <>
      <FormField
        control={form.control}
        name="linkedinUrl"
        render={({ field }) => (
          <FormItem>
            <FormLabel>LinkedIn URL (optional)</FormLabel>
            <FormControl>
              <Input placeholder="https://linkedin.com/in/username" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Short Description</FormLabel>
            <FormControl>
              <Textarea 
                placeholder="A brief description that appears on cards" 
                {...field} 
                className="min-h-[80px]" 
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="bio"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Full Bio</FormLabel>
            <FormControl>
              <Textarea 
                placeholder="A detailed description of the team member's background" 
                {...field} 
                className="min-h-[120px]" 
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export default BioSection;
