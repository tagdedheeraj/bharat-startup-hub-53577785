import React from 'react';
import TeamHero from '@/components/team/TeamHero';
import LeadershipSection from '@/components/team/LeadershipSection';
import DepartmentSection from '@/components/team/DepartmentSection';
import JoinSection from '@/components/team/JoinSection';
import type { TeamMember } from '@/types/team';

const TeamMembersPage = () => {
  const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'Dhruv Thakar',
      position: 'Founder & CEO',
      department: 'Executive',
      expertise: ['Business Development', 'Real Estate', 'Angel Investment', 'Startup Ecosystem'],
      experience: '10+ years',
      bio: 'A distinguished alumnus of LD College of Engineering and SPIPA with a storied career spanning multiple MNCs. As a trailblazing entrepreneur, he has created his own identity and forged strategic partnerships in real estate and startup ecosystems.',
      photoUrl: '/lovable-uploads/bf4dce02-b165-4d12-a196-e2d67c1b432f.png',
      email: 'dhruv.thakar@bharatstartup.com',
      phone: '+91 98765 43210',
      location: 'Ahmedabad, Gujarat',
      linkedinUrl: 'https://linkedin.com/in/dhruv-thakar',
      achievements: [
        'Distinguished alumnus of LD College of Engineering and SPIPA',
        'Business Sales Head with experience in MNCs like BOB, Chemmanur International, and Quickr',
        'Angel investor in multiple companies'
      ]
    },
    {
      id: '2',
      name: 'Priya Sharma',
      position: 'Legal & Compliance Head',
      department: 'Legal',
      expertise: ['Corporate Law', 'Regulatory Compliance', 'IPR', 'Contract Negotiation'],
      experience: '12+ years',
      bio: 'A seasoned legal professional specializing in corporate law and intellectual property rights. Priya brings extensive experience in handling complex regulatory frameworks and ensuring compliance for businesses across various sectors.',
      photoUrl: '/lovable-uploads/9e5fe674-093d-408f-b174-4f59a6ea7235.png',
      email: 'priya.sharma@bharatstartup.com',
      linkedinUrl: 'https://linkedin.com/in/priya-sharma',
      location: 'Mumbai, Maharashtra'
    },
    {
      id: '3',
      name: 'Rajesh Kumar',
      position: 'Senior Investment Advisor',
      department: 'Finance',
      expertise: ['Investment Strategy', 'Financial Planning', 'Market Analysis', 'Risk Management'],
      experience: '15+ years',
      bio: 'With over 15 years of experience in investment banking and financial markets, Rajesh has guided numerous startups and established businesses in their financial journey. His expertise in market analysis has helped companies raise substantial funding.',
      photoUrl: '/lovable-uploads/6566b2a8-7eca-450d-a989-1c3f27d3fdcd.png',
      email: 'rajesh.kumar@bharatstartup.com',
      linkedinUrl: 'https://linkedin.com/in/rajesh-kumar',
      location: 'Delhi NCR'
    },
    {
      id: '4',
      name: 'Vikram Mehta',
      position: 'Technology Strategist',
      department: 'Technology',
      expertise: ['Digital Transformation', 'AI Implementation', 'Tech Architecture', 'Product Strategy'],
      experience: '14+ years',
      bio: 'Vikram is a technology visionary with expertise in helping businesses navigate digital transformation. His background in AI and machine learning has enabled countless startups to leverage cutting-edge technology for competitive advantage.',
      photoUrl: '/lovable-uploads/1f895d7b-8342-4a9e-8817-3c177ac1b3e4.png',
      email: 'vikram.mehta@bharatstartup.com',
      linkedinUrl: 'https://linkedin.com/in/vikram-mehta',
      location: 'Bangalore, Karnataka'
    },
    {
      id: '5',
      name: 'Ananya Patel',
      position: 'Marketing Director',
      department: 'Marketing',
      expertise: ['Brand Strategy', 'Digital Marketing', 'Content Strategy', 'Growth Marketing'],
      experience: '9+ years',
      bio: 'Ananya is a creative marketing professional with extensive experience in building brand presence for startups and established businesses alike. Her integrated marketing approaches have driven significant growth for numerous companies.',
      photoUrl: '/lovable-uploads/5aa945b6-f31a-46aa-a7dd-0b27f6c14482.png',
      email: 'ananya.patel@bharatstartup.com',
      linkedinUrl: 'https://linkedin.com/in/ananya-patel',
      location: 'Pune, Maharashtra'
    },
    {
      id: '6',
      name: 'Sanjay Gupta',
      position: 'Operations Head',
      department: 'Operations',
      expertise: ['Process Optimization', 'Supply Chain Management', 'Quality Control', 'Team Leadership'],
      experience: '11+ years',
      bio: 'Sanjay brings extensive experience in streamlining operations and optimizing business processes. His methodical approach to operational challenges has helped numerous startups scale efficiently while maintaining quality standards.',
      photoUrl: '/placeholder.svg',
      email: 'sanjay.gupta@bharatstartup.com',
      location: 'Chennai, Tamil Nadu'
    }
  ];

  const departments = Array.from(new Set(teamMembers.map(member => member.department)));
  const leader = teamMembers[0]; // The first team member is the leader

  return (
    <div className="bg-gray-50 min-h-screen">
      <TeamHero />
      <LeadershipSection leader={leader} />
      
      {departments
        .filter(dept => dept !== 'Executive')
        .map(department => (
          <DepartmentSection
            key={department}
            department={department}
            members={teamMembers.filter(member => member.department === department)}
          />
        ))}
      
      <JoinSection />
    </div>
  );
};

export default TeamMembersPage;
