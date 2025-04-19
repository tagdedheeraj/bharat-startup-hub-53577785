
import React from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { UseFormReturn } from 'react-hook-form';
import { TeamMember } from '../types';

interface TeamMemberBasicInfoProps {
  form: UseFormReturn<TeamMember>;
}

const TeamMemberBasicInfo: React.FC<TeamMemberBasicInfoProps> = ({ form }) => {
  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="name"
        rules={{ required: "Name is required" }}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input placeholder="Enter full name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="role"
        rules={{ required: "Role is required" }}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Role/Position</FormLabel>
            <FormControl>
              <Input placeholder="e.g., CEO, Director of Marketing" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="experience"
        rules={{ required: "Experience is required" }}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Experience</FormLabel>
            <FormControl>
              <Input placeholder="e.g., 20+ years" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="expertise"
        rules={{ required: "Expertise is required" }}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Expertise</FormLabel>
            <FormControl>
              <Input placeholder="e.g., Venture Capital, Business Strategy" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="linkedinUrl"
        render={({ field }) => (
          <FormItem>
            <FormLabel>LinkedIn URL</FormLabel>
            <FormControl>
              <Input placeholder="https://linkedin.com/in/..." {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default TeamMemberBasicInfo;
