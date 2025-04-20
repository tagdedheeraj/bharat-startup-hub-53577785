
import React from 'react';
import ExpertCard from './ExpertCard';
import SectionHeading from '@/components/SectionHeading';

const teamMembers = [
  {
    name: 'Raj Patel',
    position: 'IT Manager',
    expertise: 'Infrastructure Management, Cloud Computing, System Security',
    experience: '8+ years',
    bio: 'Experienced IT professional specializing in infrastructure management and system security. Leading our technical operations and ensuring robust, scalable systems.',
    photoUrl: '/lovable-uploads/70c4a292-9b84-464b-9a46-3a8b62b27690.png',
    linkedinUrl: 'https://linkedin.com/in/raj-patel',
  },
  {
    name: 'Priya Shah',
    position: 'Product Manager',
    expertise: 'Product Strategy, Agile Management, User Experience',
    experience: '6+ years',
    bio: 'Strategic product manager with a passion for creating user-centric solutions. Experienced in leading cross-functional teams and delivering successful products.',
    photoUrl: '/lovable-uploads/cdf95c89-ff14-4c31-a432-e302c0e65eb0.png',
    linkedinUrl: 'https://linkedin.com/in/priya-shah',
  },
  {
    name: 'Anjali Kumar',
    position: 'Market Research Analyst',
    expertise: 'Market Analysis, Consumer Behavior, Data Analytics',
    experience: '5+ years',
    bio: 'Detail-oriented market research analyst with expertise in data-driven decision making. Specializing in market trends analysis and consumer insights.',
    photoUrl: '/lovable-uploads/14ddca18-d1d7-40c6-bd1a-ada343cf3d00.png',
    linkedinUrl: 'https://linkedin.com/in/anjali-kumar',
  },
  {
    name: 'Neha Desai',
    position: 'UI/UX Designer',
    expertise: 'User Interface Design, User Experience, Wireframing',
    experience: '7+ years',
    bio: 'Creative UI/UX designer focused on creating intuitive and engaging user experiences. Skilled in modern design tools and user-centered design principles.',
    photoUrl: '/lovable-uploads/f573145f-3f3f-4240-9aba-d8725915db75.png',
    linkedinUrl: 'https://linkedin.com/in/neha-desai',
  },
  {
    name: 'Meera Singh',
    position: 'Customer Support Lead',
    expertise: 'Customer Service, Problem Resolution, Team Management',
    experience: '4+ years',
    bio: 'Dedicated customer support professional committed to delivering exceptional service. Experienced in managing support teams and improving customer satisfaction.',
    photoUrl: '/lovable-uploads/2215a1a8-69a2-41ee-997d-9363be9f99b1.png',
    linkedinUrl: 'https://linkedin.com/in/meera-singh',
  },
];

const TeamSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subheading="OUR TEAM"
          heading="Meet Our Expert Team"
          description="Together, we bring diverse expertise to help your business succeed"
          centered
        />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={member.name} className={`${index >= 3 ? 'lg:col-start-2' : ''}`}>
              <ExpertCard {...member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
