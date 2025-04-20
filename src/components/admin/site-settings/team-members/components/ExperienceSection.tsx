
import React from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { UseFormReturn } from 'react-hook-form';
import { TeamMemberFormData } from '../schema/teamMemberSchema';

interface ExperienceSectionProps {
  form: UseFormReturn<TeamMemberFormData>;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ form }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <FormField
        control={form.control}
        name="experience"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Experience</FormLabel>
            <FormControl>
              <Input placeholder="10+ years" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="expertise"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Expertise</FormLabel>
            <FormControl>
              <Input placeholder="Business Strategy, Finance" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default ExperienceSection;
