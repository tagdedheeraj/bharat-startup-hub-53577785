import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertCircle, Plus, WifiOff, RefreshCw } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { collection, getDocs, doc, deleteDoc, query, orderBy } from 'firebase/firestore';
import { db, isFirestoreAvailable } from '@/lib/firebase';
import { toast } from 'sonner';
import { TeamMember } from './types';
import TeamMemberDialog from './TeamMemberDialog';
import TeamMembersList from './components/TeamMembersList';

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
    fetchTeamMembers();
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
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>Team Members</span>
          <Button onClick={() => setDialogOpen(true)} className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Add Team Member
          </Button>
        </CardTitle>
        <CardDescription>Manage team members displayed on your website</CardDescription>
      </CardHeader>

      <CardContent>
        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        
        {isOffline && (
          <Alert className="mb-4 border-amber-200 bg-amber-50">
            <WifiOff className="h-4 w-4 text-amber-600" />
            <AlertDescription className="text-amber-600">
              You are in offline mode. Some features may be limited.
            </AlertDescription>
          </Alert>
        )}

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
                onEdit={(member) => {
                  setSelectedMember(member);
                  setDialogOpen(true);
                }}
                onDelete={handleDeleteMember}
                onAdd={() => {
                  setSelectedMember(null);
                  setDialogOpen(true);
                }}
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
        onClose={(created) => {
          setDialogOpen(false);
          if (created) {
            fetchTeamMembers();
          }
        }}
        teamMember={selectedMember}
        isOffline={isOffline}
      />
    </Card>
  );
};

export default TeamMembersManager;
