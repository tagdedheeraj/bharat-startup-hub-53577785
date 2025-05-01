
import React from 'react';
import SectionImage from '@/components/shared/SectionImage';
import { storage } from '@/lib/firebase';
import { ref, getDownloadURL } from 'firebase/storage';
import { useState, useEffect } from 'react';

const team = [
  {
    name: 'Bhonde Kinjal',
    position: 'Customer Support',
    expertise: 'Customer Experience, Technical Support, Communication Strategy',
    description: 'Passionate about delivering exceptional customer experiences and resolving technical issues promptly. Skilled in developing communication strategies that enhance client satisfaction.',
    photoUrl: 'https://firebasestorage.googleapis.com/v0/b/bharat-startup.firebasestorage.app/o/profiles%2Fexperts%2FBhondekinjal.jpeg?alt=media&token=28430b97-082d-407e-af11-f3babe63a950'
  },
  {
    name: 'Siddhi Panchal',
    position: 'Product Manager',
    expertise: 'Product Development, Agile Methodologies, User Experience',
    description: 'Expert in product development with a focus on agile methodologies. Creates seamless user experiences by understanding customer needs and implementing effective solutions.',
    photoUrl: 'https://firebasestorage.googleapis.com/v0/b/bharat-startup.firebasestorage.app/o/profiles%2Fexperts%2FSiddhiPanchal.jpeg?alt=media&token=b0b1d7fa-5623-4493-a1ab-5454151e93c8'
  },
  {
    name: 'Leua Rachana',
    position: 'Market Research Analyst',
    expertise: 'Data Analysis, Market Trends, Consumer Behavior Research',
    description: 'Specializes in analyzing market data to identify trends and consumer behaviors. Provides valuable insights that drive strategic business decisions and marketing campaigns.',
    photoUrl: 'https://firebasestorage.googleapis.com/v0/b/bharat-startup.firebasestorage.app/o/profiles%2Fexperts%2FLeuaRachana.jpeg?alt=media&token=e9c4dc07-39d8-4c82-9ff5-16681e6b021a'
  },
  {
    name: 'Gor Palak',
    position: 'UI/UX Designer',
    expertise: 'User Interface Design, User Experience, Design Systems',
    description: 'Creative designer focused on creating intuitive user interfaces and comprehensive design systems. Transforms complex requirements into visually appealing and functional designs.',
    photoUrl: 'https://firebasestorage.googleapis.com/v0/b/bharat-startup.firebasestorage.app/o/profiles%2Fexperts%2Fgorpalak.jpeg?alt=media&token=49317ddf-a87a-4178-8416-26ac9e9afb1c'
  },
  {
    name: 'Ankit Modi',
    position: 'IT Manager',
    expertise: 'Infrastructure Management, Cloud Solutions, IT Strategy',
    description: 'Experienced in managing IT infrastructure and implementing cloud solutions. Develops strategic IT plans that align with business objectives and enhance operational efficiency.',
    photoUrl: 'https://firebasestorage.googleapis.com/v0/b/bharat-startup.firebasestorage.app/o/profiles%2Fexperts%2Fankit.jpeg?alt=media&token=93a27f69-83a5-4112-9491-5aee656029ee'
  },
];

const TeamMemberCard = ({ member }: { member: typeof team[0] }) => {
  const [imageUrl, setImageUrl] = useState<string>('/placeholder.svg');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImage = async () => {
      if (!member.photoUrl) {
        setLoading(false);
        return;
      }

      try {
        if (member.photoUrl.startsWith('http')) {
          setImageUrl(member.photoUrl);
        } else {
          const storageRef = ref(storage, member.photoUrl);
          const url = await getDownloadURL(storageRef);
          setImageUrl(url);
        }
      } catch (error) {
        console.error(`Error loading image for ${member.name}:`, error);
        setImageUrl('/placeholder.svg');
      } finally {
        setLoading(false);
      }
    };

    loadImage();
  }, [member.photoUrl]);

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={`${member.name} - ${member.position}`}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            loading ? 'opacity-0' : 'opacity-100'
          }`}
          onLoad={() => setLoading(false)}
          onError={() => {
            setImageUrl('/placeholder.svg');
            setLoading(false);
          }}
        />
      </div>
      
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="font-bold text-lg mb-1">{member.name}</h3>
        <p className="text-brand-600 text-sm mb-2">{member.position}</p>
        <p className="text-gray-600 text-xs mb-2">{member.expertise}</p>
        <p className="text-gray-700 text-sm mt-auto">{member.description}</p>
      </div>
    </div>
  );
};

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
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
