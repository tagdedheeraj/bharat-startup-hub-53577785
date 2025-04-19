
import { useEffect, useState } from 'react';
import SectionHeading from '@/components/SectionHeading';
import TeamMember, { TeamMemberProps } from './TeamMember';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db, isFirestoreAvailable } from '@/lib/firebase';

// Default team members as fallback
const defaultTeamMembers: TeamMemberProps[] = [
  {
    name: "Rajesh Sharma",
    role: "Founder & CEO",
    description: "With over 20 years of experience in business consulting and venture capital, Rajesh leads our strategic vision.",
    sectionName: "team-ceo",
    fallbackSrc: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
    delay: "100ms"
  },
  {
    name: "Priya Verma",
    role: "Legal Director",
    description: "A corporate law expert with specialization in startup regulations and compliance frameworks.",
    sectionName: "team-legal",
    fallbackSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
    delay: "200ms"
  },
  {
    name: "Amit Patel",
    role: "Head of Funding",
    description: "Former investment banker with extensive connections in the venture capital and private equity sectors.",
    sectionName: "team-funding",
    fallbackSrc: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
    delay: "300ms"
  }
];

interface DbTeamMember {
  id: string;
  name: string;
  position: string;
  description: string;
  photoUrl: string;
  teamSection: string;
}

const TeamSection = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMemberProps[]>(defaultTeamMembers);
  const [isLoading, setIsLoading] = useState(true);
  
  // Fetch team members from Firestore
  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        // Check if Firestore is available
        const isAvailable = await isFirestoreAvailable();
        
        if (!isAvailable) {
          console.log("Firestore not available, using default team members");
          setTeamMembers(defaultTeamMembers);
          setIsLoading(false);
          return;
        }
        
        // Query team members collection
        const teamCollection = collection(db, 'teamMembers');
        const teamQuery = query(teamCollection, orderBy('updatedAt', 'desc'), limit(6));
        const querySnapshot = await getDocs(teamQuery);
        
        if (querySnapshot.empty) {
          console.log("No team members found in Firestore, using defaults");
          setTeamMembers(defaultTeamMembers);
          setIsLoading(false);
          return;
        }
        
        // Map Firestore data to TeamMemberProps
        const fetchedMembers: TeamMemberProps[] = [];
        let delayCounter = 1;
        
        querySnapshot.forEach((doc) => {
          const data = doc.data() as DbTeamMember;
          fetchedMembers.push({
            name: data.name,
            role: data.position,
            description: data.description,
            sectionName: `team-${data.id}`,
            fallbackSrc: data.photoUrl,
            delay: `${delayCounter * 100}ms`
          });
          delayCounter++;
        });
        
        if (fetchedMembers.length > 0) {
          console.log(`Loaded ${fetchedMembers.length} team members from Firestore`);
          setTeamMembers(fetchedMembers);
        } else {
          setTeamMembers(defaultTeamMembers);
        }
      } catch (error) {
        console.error("Error fetching team members:", error);
        setTeamMembers(defaultTeamMembers);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchTeamMembers();
  }, []);

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subheading="OUR TEAM"
          heading="Meet the Experts Behind Bharat Startup Solution"
          description="A team of dedicated professionals with expertise in various domains of business development."
        />
        
        {isLoading ? (
          <div className="flex justify-center items-center min-h-[300px]">
            <div className="animate-spin h-10 w-10 border-4 border-blue-500 rounded-full border-t-transparent"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={`${member.sectionName || index}`}
                name={member.name}
                role={member.role}
                description={member.description}
                sectionName={member.sectionName}
                fallbackSrc={member.fallbackSrc}
                delay={member.delay}
              />
            ))}
          </div>
        )}
        
        <div className="text-center mt-12">
          <a href="/more/experts" className="btn-primary inline-flex items-center">
            View Full Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
