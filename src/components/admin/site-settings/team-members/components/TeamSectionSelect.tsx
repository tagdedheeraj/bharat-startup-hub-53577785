
import React from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { UseFormReturn } from 'react-hook-form';
import { TeamMemberFormData } from '../schema/teamMemberSchema';

interface TeamSectionSelectProps {
  form: UseFormReturn<TeamMemberFormData>;
}

const TeamSectionSelect: React.FC<TeamSectionSelectProps> = ({ form }) => {
  return (
    <FormField
      control={form.control}
      name="teamSection"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Team Section</FormLabel>
          <Select
            onValueChange={field.onChange}
            defaultValue={field.value}
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select a section" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectItem value="leadership">Leadership Team</SelectItem>
              <SelectItem value="domain-experts">Domain Experts</SelectItem>
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default TeamSectionSelect;
