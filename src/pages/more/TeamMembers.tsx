
import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import { Linkedin, Mail, PhoneCall, Map, Award, Calendar, Star } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  position: string;
  department: string;
  expertise: string[];
  experience: string;
  bio: string;
  photoUrl: string;
  email: string;
  phone?: string;
  location?: string;
  linkedinUrl?: string;
  achievements?: string[];
}

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

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 pt-16 pb-24 md:pt-20 md:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1 rounded-full bg-brand-100 text-brand-600 text-sm font-medium mb-6">Meet Our Team</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">The Talented People Behind Bharat Startup</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our team of dedicated professionals works tirelessly to help entrepreneurs and businesses succeed. 
              With diverse expertise and a shared passion for innovation, we're committed to transforming your vision into reality.
            </p>
          </div>
        </div>
      </section>

      {/* Team Leader Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -left-10 -top-32 w-96 h-96 bg-purple-300 rounded-full filter blur-3xl"></div>
          <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-blue-300 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionHeading
            subheading="LEADERSHIP"
            heading="Our Visionary Leader"
            description="Meet the founder who drives our mission and shapes our vision."
            centered
          />
          
          <div className="max-w-7xl mx-auto mt-12">
            {teamMembers.slice(0, 1).map(leader => (
              <div key={leader.id} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="grid grid-cols-1 lg:grid-cols-5 min-h-[400px]">
                  <div className="lg:col-span-2 h-full">
                    <div className="relative h-full min-h-[400px]">
                      <img 
                        src={leader.photoUrl} 
                        alt={leader.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = "/placeholder.svg";
                          console.error("Failed to load founder image, using placeholder");
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                  
                  <div className="lg:col-span-3 p-8 md:p-10 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-2 mb-6">
                        <span className="px-3 py-1 bg-brand-50 text-brand-600 rounded-full text-sm font-medium">{leader.experience} Experience</span>
                        <span className="px-3 py-1 bg-amber-50 text-amber-600 rounded-full text-sm font-medium">{leader.department}</span>
                      </div>
                      
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{leader.name}</h2>
                      <p className="text-xl text-brand-600 font-medium mb-6">{leader.position}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {leader.expertise.map((skill, index) => (
                          <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-gray-700 text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                      
                      <p className="text-gray-600 leading-relaxed mb-6">{leader.bio}</p>
                      
                      {leader.achievements && (
                        <div className="mb-8">
                          <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                            <Award className="w-5 h-5 mr-2 text-brand-600" /> Key Achievements
                          </h4>
                          <ul className="space-y-2">
                            {leader.achievements.map((achievement, index) => (
                              <li key={index} className="flex items-start">
                                <Star className="w-4 h-4 text-amber-500 mt-1 mr-2 shrink-0" />
                                <span className="text-gray-600">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
                      <div className="flex items-center text-gray-600">
                        <Mail className="w-4 h-4 mr-2" />
                        <a href={`mailto:${leader.email}`} className="hover:text-brand-600 transition-colors">
                          {leader.email}
                        </a>
                      </div>
                      
                      {leader.phone && (
                        <div className="flex items-center text-gray-600">
                          <PhoneCall className="w-4 h-4 mr-2" />
                          <a href={`tel:${leader.phone}`} className="hover:text-brand-600 transition-colors">
                            {leader.phone}
                          </a>
                        </div>
                      )}
                      
                      {leader.location && (
                        <div className="flex items-center text-gray-600">
                          <Map className="w-4 h-4 mr-2" />
                          <span>{leader.location}</span>
                        </div>
                      )}
                      
                      {leader.linkedinUrl && (
                        <a 
                          href={leader.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-[#0077B5] hover:text-[#006396] transition-colors"
                        >
                          <Linkedin className="w-4 h-4 mr-2" />
                          <span>LinkedIn Profile</span>
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

      {/* Team Members By Department */}
      {departments.filter(dept => dept !== 'Executive').map(department => (
        <section key={department} className="py-16 bg-white even:bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              subheading={department.toUpperCase()}
              heading={`${department} Team`}
              description={`Meet our dedicated ${department.toLowerCase()} professionals who drive excellence in their domain.`}
              centered
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {teamMembers
                .filter(member => member.department === department)
                .map(member => (
                  <div key={member.id} className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 flex flex-col group hover:shadow-xl transition-shadow duration-300">
                    <div className="h-64 overflow-hidden relative">
                      <img
                        src={member.photoUrl}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.src = "/placeholder.svg";
                          console.error(`Failed to load image for ${member.name}, using placeholder`);
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700 flex items-center space-x-1 shadow-sm">
                        <Calendar className="w-3 h-3 text-brand-600" />
                        <span>{member.experience}</span>
                      </div>
                    </div>
                    
                    <div className="p-6 flex-grow flex flex-col">
                      <h3 className="text-xl font-bold mb-1 group-hover:text-brand-600 transition-colors">{member.name}</h3>
                      <p className="text-brand-600 font-medium mb-3">{member.position}</p>
                      
                      <div className="mb-4 flex flex-wrap gap-2">
                        {member.expertise.slice(0, 2).map((skill, index) => (
                          <span key={index} className="inline-block bg-gray-100 px-2 py-1 text-xs rounded text-gray-700">
                            {skill}
                          </span>
                        ))}
                      </div>
                      
                      <p className="text-gray-600 mb-4 flex-grow leading-relaxed line-clamp-3">{member.bio}</p>
                      
                      <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-gray-100">
                        <a 
                          href={`mailto:${member.email}`}
                          className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-lg transition-colors"
                        >
                          <Mail size={16} />
                          <span className="text-sm">Email</span>
                        </a>
                        
                        {member.linkedinUrl ? (
                          <a 
                            href={member.linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 bg-[#0077B5]/10 hover:bg-[#0077B5]/20 text-[#0077B5] p-2 rounded-lg transition-colors"
                          >
                            <Linkedin size={16} />
                            <span className="text-sm">LinkedIn</span>
                          </a>
                        ) : (
                          <div className="flex items-center justify-center gap-2 bg-gray-100 text-gray-500 p-2 rounded-lg">
                            <Map size={16} />
                            <span className="text-sm">{member.location?.split(',')[0]}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      ))}

      {/* Join Us Section */}
      <section className="py-16 bg-gradient-to-r from-brand-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Growing Team</h2>
            <p className="text-xl text-white/80 mb-8">
              We're always looking for talented individuals to join our team. If you're passionate about helping startups succeed, we'd love to hear from you.
            </p>
            <a 
              href="/contact"
              className="inline-block px-8 py-3 bg-white text-brand-700 font-medium rounded-lg hover:bg-white/90 transition-colors shadow-lg"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamMembersPage;
