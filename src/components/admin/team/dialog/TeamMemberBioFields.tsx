
import React from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { UseFormReturn } from 'react-hook-form';
import { TeamMember } from '../types';

interface TeamMemberBioFieldsProps {
  form: UseFormReturn<TeamMember>;
}

const TeamMemberBioFields: React.FC<TeamMemberBioFieldsProps> = ({ form }) => {
  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="description"
        rules={{ required: "Description is required" }}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Short Description</FormLabel>
            <FormControl>
              <Textarea 
                placeholder="Brief description (displayed in cards)" 
                className="min-h-[80px]"
                {...field} 
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="bio"
        rules={{ required: "Bio is required" }}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Full Bio</FormLabel>
            <FormControl>
              <Textarea 
                placeholder="Detailed biography" 
                className="min-h-[120px]"
                {...field} 
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default TeamMemberBioFields;
