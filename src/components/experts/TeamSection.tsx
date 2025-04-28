
import React from 'react';
import SectionImage from '@/components/shared/SectionImage';

const team = [
  {
    name: 'Priya Shah',
    position: 'Marketing Director',
    expertise: 'Brand Strategy, Digital Marketing',
    photoUrl: 'priya-shah.png',
    linkedinUrl: 'https://linkedin.com/in/priya-shah'
  },
  {
    name: 'Raj Patel',
    position: 'Operations Manager',
    expertise: 'Process Optimization, Team Management',
    photoUrl: 'raj-patel.png',
    linkedinUrl: 'https://linkedin.com/in/raj-patel'
  },
  {
    name: 'Anjali Kumar',
    position: 'Financial Analyst',
    expertise: 'Investment Analysis, Risk Assessment',
    photoUrl: 'anjali-kumar.png',
    linkedinUrl: 'https://linkedin.com/in/anjali-kumar'
  },
  {
    name: 'Neha Desai',
    position: 'Client Relations',
    expertise: 'Customer Success, Relationship Building',
    photoUrl: 'neha-desai.png',
    linkedinUrl: 'https://linkedin.com/in/neha-desai'
  },
  {
    name: 'Meera Singh',
    position: 'Research Specialist',
    expertise: 'Market Research, Industry Analysis',
    photoUrl: 'meera-singh.png',
    linkedinUrl: 'https://linkedin.com/in/meera-singh'
  },
];

const TeamSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
              Meet Our Core Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dedicated professionals who work behind the scenes to ensure our clients receive exceptional service and support at every step.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <SectionImage
                    pageName="experts"
                    sectionName={`team-${member.name.toLowerCase().replace(/\s+/g, '-')}`}
                    fallbackSrc="/placeholder.svg"
                    alt={`${member.name} - ${member.position}`}
                    className="w-full h-full"
                    objectFit="cover"
                  />
                </div>
                
                <div className="p-4 flex-grow flex flex-col">
                  <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                  <p className="text-brand-600 text-sm mb-2">{member.position}</p>
                  <p className="text-gray-600 text-xs mb-4">{member.expertise}</p>
                  
                  {member.linkedinUrl && (
                    <a 
                      href={member.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center justify-center gap-1 bg-[#0077B5]/10 hover:bg-[#0077B5]/20 text-[#0077B5] py-1.5 px-3 rounded-md transition-colors text-sm"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect width="4" height="12" x="2" y="9"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                      <span>LinkedIn</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
