import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Linkedin, Mail, ExternalLink, User, Briefcase, Star } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '@/lib/firebase';

interface TeamMember {
  id: string;
  name: string;
  position: string;
  expertise: string;
  experience: string;
  bio: string;
  photoUrl: string;
  linkedinUrl: string;
  teamSection: string;
  description: string;
}

const ExpertsPage = () => {
  const [experts, setExperts] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchExperts = async () => {
      try {
        setLoading(true);
        const teamCollection = collection(db, 'teamMembers');
        const teamQuery = query(teamCollection, orderBy('teamSection', 'asc'));
        const querySnapshot = await getDocs(teamQuery);
        
        const fetchedExperts: TeamMember[] = [];
        querySnapshot.forEach((doc) => {
          fetchedExperts.push({ id: doc.id, ...doc.data() } as TeamMember);
        });
        
        setExperts(fetchedExperts);
      } catch (err) {
        console.error('Error fetching experts:', err);
        setError('Failed to load team members. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchExperts();
  }, []);

  const leadershipTeam = experts.filter(expert => expert.teamSection === 'leadership');
  const domainExperts = experts.filter(expert => expert.teamSection === 'domain-experts');

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-blue-500 rounded-full border-t-transparent"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-sm text-brand-600 font-medium uppercase tracking-wider">Our Experts</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Meet our Experts</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              The Team that Makes it Happen. Meet the brilliant minds that guide, support, and transform your business into a success story.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="LEADERSHIP"
            heading="Our Core Team"
            description="Meet the visionaries leading Bharat Startup Solution."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {leadershipTeam.map((expert) => (
              <div 
                key={expert.id} 
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 animate-fadeIn h-full flex flex-col"
              >
                <div className="h-72 overflow-hidden">
                  <img
                    src={expert.photoUrl}
                    alt={expert.name}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="bg-brand-50 text-brand-700 text-xs font-medium px-3 py-1 rounded-full mb-3 inline-block">
                    {expert.experience} Experience
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{expert.name}</h3>
                  <p className="text-brand-600 font-medium mb-2">{expert.position}</p>
                  <p className="text-gray-600 mb-4">
                    <span className="font-medium">Expertise: </span>{expert.expertise}
                  </p>
                  <p className="text-gray-600 mb-4 flex-grow">{expert.bio}</p>
                  <div className="flex items-center space-x-4 mt-4">
                    {expert.linkedinUrl && (
                      <a 
                        href={expert.linkedinUrl} 
                        className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-full transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin size={20} />
                      </a>
                    )}
                    <a 
                      href={`mailto:${expert.name.toLowerCase().replace(' ', '.')}@bharatstartup.com`} 
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-full transition-colors"
                    >
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domain Experts */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="DOMAIN EXPERTS"
            heading="Specialists in Their Fields"
            description="Our team of domain experts brings specialized knowledge to address your specific needs."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {domainExperts.map((expert) => (
              <div 
                key={expert.id} 
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 animate-fadeIn h-full flex flex-col"
              >
                <div className="h-72 overflow-hidden">
                  <img
                    src={expert.photoUrl}
                    alt={expert.name}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="bg-brand-50 text-brand-700 text-xs font-medium px-3 py-1 rounded-full mb-3 inline-block">
                    {expert.experience} Experience
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{expert.name}</h3>
                  <p className="text-brand-600 font-medium mb-2">{expert.position}</p>
                  <p className="text-gray-600 mb-4">
                    <span className="font-medium">Expertise: </span>{expert.expertise}
                  </p>
                  <p className="text-gray-600 mb-4 flex-grow">{expert.bio}</p>
                  <div className="flex items-center space-x-4 mt-4">
                    {expert.linkedinUrl && (
                      <a 
                        href={expert.linkedinUrl} 
                        className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-full transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin size={20} />
                      </a>
                    )}
                    <a 
                      href={`mailto:${expert.name.toLowerCase().replace(' ', '.')}@bharatstartup.com`} 
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-full transition-colors"
                    >
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subheading="ADVISORY BOARD"
            heading="Industry Veterans Guiding Our Vision"
            description="Our advisory board comprises industry leaders who provide strategic guidance."
          />
          
          <div className="glass-card rounded-xl p-8 mt-12 animate-fadeIn">
            <p className="text-gray-600 mb-8">
              In addition to our core team and domain experts, Bharat Startup Solution benefits from the guidance of an advisory board comprising industry veterans. These accomplished professionals bring diverse perspectives and rich experience from various sectors, helping shape our strategic direction and enhance our service offerings.
            </p>
            
            <div className="flex justify-center">
              <Link to="/contact" className="btn-primary inline-flex items-center">
                Connect with Our Experts
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Network Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 animate-fadeInLeft">
              <SectionHeading
                subheading="OUR NETWORK"
                heading="Extending Beyond Our Team"
                description=""
                align="left"
              />
              <p className="text-gray-600 mb-6">
                Beyond our in-house experts, we maintain a vast network of industry specialists, consultants, and service providers who can be engaged for specific project requirements.
              </p>
              <p className="text-gray-600 mb-6">
                This extended network allows us to provide comprehensive solutions across various domains, ensuring that your business has access to the best expertise for any challenge it faces.
              </p>
              <p className="text-gray-600 mb-8">
                Our carefully curated network includes:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="bg-brand-100 p-1 rounded mr-3 mt-1">
                    <ArrowRight size={14} className="text-brand-600" />
                  </div>
                  <span>Venture capitalists and angel investors</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-brand-100 p-1 rounded mr-3 mt-1">
                    <ArrowRight size={14} className="text-brand-600" />
                  </div>
                  <span>Industry-specific technical experts</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-brand-100 p-1 rounded mr-3 mt-1">
                    <ArrowRight size={14} className="text-brand-600" />
                  </div>
                  <span>Government liaison specialists</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-brand-100 p-1 rounded mr-3 mt-1">
                    <ArrowRight size={14} className="text-brand-600" />
                  </div>
                  <span>Marketing and branding professionals</span>
                </li>
              </ul>
              <a 
                href="/contact" 
                className="inline-flex items-center text-brand-600 font-medium hover:text-brand-700 transition-colors"
              >
                Explore our extended network
                <ExternalLink size={16} className="ml-2" />
              </a>
            </div>
            <div className="lg:w-1/2 animate-fadeInRight">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-600/20 to-transparent rounded-xl transform -rotate-3"></div>
                <img
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
                  alt="Professional network"
                  className="relative z-10 rounded-xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-brand-600 to-blue-700 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work with Our Experts?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Schedule a consultation with our team and discover how our expertise can help your business grow.
            </p>
            <Link to="/contact" className="px-8 py-3 bg-white text-brand-700 font-medium rounded-lg hover:bg-white/90 transition-colors shadow-lg">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExpertsPage;
