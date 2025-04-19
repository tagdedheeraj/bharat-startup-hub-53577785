
import React from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { UseFormReturn } from 'react-hook-form';
import { TeamMember } from '../types';

interface TeamMemberSectionSelectProps {
  form: UseFormReturn<TeamMember>;
}

const teamSections = [
  { value: "leadership", label: "Leadership Team" },
  { value: "domain-experts", label: "Domain Experts" }
];

const sectionOptions = [
  { value: "team-ceo", label: "CEO/Founder" },
  { value: "team-legal", label: "Legal Director" },
  { value: "team-funding", label: "Head of Funding" },
  { value: "team-marketing", label: "Marketing Director" },
  { value: "team-tech", label: "Technology Advisor" },
  { value: "team-finance", label: "Financial Consultant" }
];

const TeamMemberSectionSelect: React.FC<TeamMemberSectionSelectProps> = ({ form }) => {
  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="teamSection"
        rules={{ required: "Team section is required" }}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Team Section</FormLabel>
            <Select
              onValueChange={field.onChange}
              defaultValue={field.value}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select team section" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {teamSections.map(section => (
                  <SelectItem key={section.value} value={section.value}>
                    {section.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="sectionName"
        rules={{ required: "Section name is required" }}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Position Type</FormLabel>
            <Select
              onValueChange={field.onChange}
              defaultValue={field.value}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select a position type" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {sectionOptions.map(option => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default TeamMemberSectionSelect;
