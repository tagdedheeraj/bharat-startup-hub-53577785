
import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { TeamMember } from '../types';
import FormInputField from './fields/FormInputField';

interface TeamMemberBasicInfoProps {
  form: UseFormReturn<TeamMember>;
}

const TeamMemberBasicInfo: React.FC<TeamMemberBasicInfoProps> = ({ form }) => {
  return (
    <div className="space-y-4">
      <FormInputField
        form={form}
        name="name"
        label="Name"
        placeholder="Enter full name"
        required
      />
      <FormInputField
        form={form}
        name="role"
        label="Role/Position"
        placeholder="e.g., CEO, Director of Marketing"
        required
      />
      <FormInputField
        form={form}
        name="experience"
        label="Experience"
        placeholder="e.g., 20+ years"
        required
      />
      <FormInputField
        form={form}
        name="expertise"
        label="Expertise"
        placeholder="e.g., Venture Capital, Business Strategy"
        required
      />
      <FormInputField
        form={form}
        name="linkedinUrl"
        label="LinkedIn URL"
        placeholder="https://linkedin.com/in/..."
      />
    </div>
  );
};

export default TeamMemberBasicInfo;
