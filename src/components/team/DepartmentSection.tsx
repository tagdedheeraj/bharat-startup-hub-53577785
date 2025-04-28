
import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import TeamMemberCard from './TeamMemberCard';
import type { TeamMember } from '@/types/team';

interface DepartmentSectionProps {
  department: string;
  members: TeamMember[];
}

const DepartmentSection: React.FC<DepartmentSectionProps> = ({ department, members }) => {
  return (
    <section className="py-16 bg-white even:bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subheading={department.toUpperCase()}
          heading={`${department} Team`}
          description={`Meet our dedicated ${department.toLowerCase()} professionals who drive excellence in their domain.`}
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {members.map(member => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DepartmentSection;
