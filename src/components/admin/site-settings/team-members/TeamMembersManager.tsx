import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { collection, getDocs, doc, deleteDoc, query, orderBy, setDoc, serverTimestamp } from 'firebase/firestore';
import { db, isFirestoreAvailable } from '@/lib/firebase';
import { toast } from 'sonner';
import { TeamMember } from './types';
import TeamMemberDialog from './TeamMemberDialog';
import TeamMembersList from './components/TeamMembersList';
import TeamMembersHeader from './components/TeamMembersHeader';
import TeamMembersAlerts from './components/TeamMembersAlerts';

const TeamMembersManager = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isOffline, setIsOffline] = useState(false);
  const [activeTab, setActiveTab] = useState('leadership');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const fetchTeamMembers = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const available = await isFirestoreAvailable();
      setIsOffline(!available);
      
      if (!available) {
        setError('Cannot connect to Firestore. Working in offline mode.');
        setLoading(false);
        return;
      }
      
      const teamCollection = collection(db, 'teamMembers');
      const teamQuery = query(teamCollection, orderBy('updatedAt', 'desc'));
      const querySnapshot = await getDocs(teamQuery);
      
      const fetchedMembers: TeamMember[] = [];
      querySnapshot.forEach((doc) => {
        fetchedMembers.push({ id: doc.id, ...doc.data() } as TeamMember);
      });
      
      console.log('Fetched team members:', fetchedMembers);
      setTeamMembers(fetchedMembers);
    } catch (err) {
      console.error('Error fetching team members:', err);
      setError('Failed to load team members. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const initializeCEOProfile = async () => {
      try {
        const teamCollection = collection(db, 'teamMembers');
        const ceoDoc = doc(teamCollection, 'ceo-dhruv-thakar');
        
        await setDoc(ceoDoc, {
          id: 'ceo-dhruv-thakar',
          name: 'Dhruv Thakar',
          position: 'Founder & CEO',
          teamSection: 'leadership',
          experience: '10+ years',
          expertise: 'Business Development, Real Estate, Angel Investment',
          bio: `As a distinguished alumnus of LD College of Engineering and SPIPA, I have cultivated a unique blend of administrative acumen and technological expertise. With a storied career spanning multiple MNCs, including BOB, Chemmanur International, and Quickr, I have honed my skills as a Business Sales Head, driving growth and innovation.

As a trailblazing entrepreneur, I have successfully created my own identity and forged strategic partnerships. My expertise extends to real estate, where I have demonstrated a keen eye for opportunity and investment.

A passionate advocate for startup ecosystems, I have nurtured numerous directors and companies, fostering a culture of innovation and entrepreneurship. As an angel investor, I have supported visionary ventures, empowering them to achieve their full potential.`,
          description: 'Distinguished alumnus and business leader with expertise in sales, real estate, and startup ecosystem development.',
          photoUrl: '/lovable-uploads/41bea343-2e2d-4c51-a6ac-fa0e16b74ea0.png',
          linkedinUrl: 'https://linkedin.com/in/dhruv-thakar',
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        }, { merge: true });

        console.log('CEO profile updated successfully');
        fetchTeamMembers(); // Refresh the team members list
      } catch (err) {
        console.error('Error updating CEO profile:', err);
        setError('Failed to update CEO profile');
      }
    };

    initializeCEOProfile();
  }, []);

  const handleAddMember = () => {
    setSelectedMember(null);
    setDialogOpen(true);
  };

  const handleEditMember = (member: TeamMember) => {
    setSelectedMember(member);
    setDialogOpen(true);
  };

  const handleDeleteMember = async (id: string) => {
    if (!confirm('Are you sure you want to delete this team member?')) return;
    
    try {
      if (isOffline) {
        toast.error('Cannot delete team members while offline');
        return;
      }
      
      await deleteDoc(doc(db, 'teamMembers', id));
      setTeamMembers(prev => prev.filter(member => member.id !== id));
      toast.success('Team member deleted successfully');
    } catch (err) {
      console.error('Error deleting team member:', err);
      toast.error('Failed to delete team member');
    }
  };

  const handleDialogClose = (created: boolean) => {
    setDialogOpen(false);
    if (created) {
      fetchTeamMembers();
    }
  };

  const filteredMembers = teamMembers.filter(member => member.teamSection === activeTab);

  if (loading && teamMembers.length === 0) {
    return (
      <Card>
        <CardContent className="py-8">
          <div className="flex justify-center">
            <div className="animate-spin h-8 w-8 border-4 border-blue-500 rounded-full border-t-transparent"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <TeamMembersHeader onAdd={handleAddMember} />
      <CardContent>
        <TeamMembersAlerts error={error} isOffline={isOffline} />
        
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-4">
            <TabsTrigger value="leadership">Leadership Team</TabsTrigger>
            <TabsTrigger value="domain-experts">Domain Experts</TabsTrigger>
          </TabsList>

          {['leadership', 'domain-experts'].map((section) => (
            <TabsContent key={section} value={section} className="mt-0">
              <TeamMembersList
                members={filteredMembers}
                loading={loading}
                onEdit={handleEditMember}
                onDelete={handleDeleteMember}
                onAdd={handleAddMember}
              />
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="mt-4 flex justify-end">
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
            onClick={fetchTeamMembers}
            disabled={loading}
          >
            <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
        </div>
      </CardContent>

      <TeamMemberDialog
        open={dialogOpen}
        onClose={handleDialogClose}
        teamMember={selectedMember}
        isOffline={isOffline}
      />
    </Card>
  );
};

export default TeamMembersManager;
