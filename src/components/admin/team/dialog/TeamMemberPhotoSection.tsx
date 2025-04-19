
import React from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { UseFormReturn } from 'react-hook-form';
import { TeamMember } from '../types';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface TeamMemberPhotoSectionProps {
  form: UseFormReturn<TeamMember>;
}

const TeamMemberPhotoSection: React.FC<TeamMemberPhotoSectionProps> = ({ form }) => {
  return (
    <FormField
      control={form.control}
      name="photoUrl"
      rules={{ required: "Photo URL is required" }}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Photo URL</FormLabel>
          <FormControl>
            <Input placeholder="URL to the team member's photo" {...field} />
          </FormControl>
          {field.value && (
            <div className="mt-2">
              <Avatar className="h-20 w-20">
                <AvatarImage src={field.value} alt="Preview" />
                <AvatarFallback>{form.getValues('name')?.slice(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
            </div>
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default TeamMemberPhotoSection;
