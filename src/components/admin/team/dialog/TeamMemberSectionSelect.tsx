
import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { TeamMember } from '../types';
import FormSelectField from './fields/FormSelectField';

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
      <FormSelectField
        form={form}
        name="teamSection"
        label="Team Section"
        placeholder="Select team section"
        options={teamSections}
        required
      />
      <FormSelectField
        form={form}
        name="sectionName"
        label="Position Type"
        placeholder="Select a position type"
        options={sectionOptions}
        required
      />
    </div>
  );
};

export default TeamMemberSectionSelect;
