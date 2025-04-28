import React from 'react';
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
    <section className="py-24 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -left-10 -top-32 w-96 h-96 bg-purple-300 rounded-full filter blur-3xl"></div>
        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-blue-300 rounded-full filter blur-3xl"></div>
        <div className="absolute left-1/3 top-2/3 w-72 h-72 bg-indigo-300 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          subheading="OUR EXPERT TEAM"
          heading="Meet The Professionals Behind Our Success"
          description="Our diverse team brings specialized expertise across multiple domains to deliver exceptional value to your business"
          centered
        />
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={member.name} 
              className={`transform transition-all duration-300 hover:-translate-y-2 ${
                index >= 3 ? 'md:col-span-2 lg:col-span-1 md:mx-auto' : ''
              }`}
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 h-full flex flex-col group hover:shadow-xl transition-shadow duration-300">
                <div className="h-72 overflow-hidden relative">
                  <img
                    src={member.photoUrl}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      console.error(`Failed to load image for ${member.name} from ${member.photoUrl}`);
                      e.currentTarget.src = "/placeholder.svg";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700 flex items-center space-x-1 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-600">
                      <rect width="16" height="16" x="4" y="4" rx="2"></rect>
                      <rect width="4" height="4" x="9" y="9" rx="0.5"></rect>
                      <path d="M9 15h6"></path>
                    </svg>
                    <span>{member.experience}</span>
                  </div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold mb-1 group-hover:text-brand-600 transition-colors">{member.name}</h3>
                  <p className="text-brand-600 font-medium mb-3">{member.position}</p>
                  
                  <div className="mb-4 flex flex-wrap gap-2">
                    {member.expertise.split(', ').slice(0, 2).map((skill, index) => (
                      <span key={index} className="inline-block bg-gray-100 px-2 py-1 text-xs rounded text-gray-700">
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-gray-600 mb-4 flex-grow leading-relaxed line-clamp-3">{member.bio}</p>
                  
                  <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-gray-100">
                    <a 
                      href={`mailto:${member.name.toLowerCase().replace(' ', '.')}@bharatstartup.com`} 
                      className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-lg transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail">
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </svg>
                      <span className="text-sm">Contact</span>
                    </a>
                    
                    {member.linkedinUrl && (
                      <a 
                        href={member.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-[#0077B5]/10 hover:bg-[#0077B5]/20 text-[#0077B5] p-2 rounded-lg transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect width="4" height="12" x="2" y="9"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                        <span className="text-sm">Connect</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
