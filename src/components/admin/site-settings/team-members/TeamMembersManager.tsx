
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertCircle, Plus, Pencil, Trash2, WifiOff } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { collection, getDocs, doc, deleteDoc, query, orderBy, where } from 'firebase/firestore';
import { db, isFirestoreAvailable } from '@/lib/firebase';
import { toast } from 'sonner';
import { TeamMember } from './types';
import TeamMemberDialog from './TeamMemberDialog';

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
      
      // Check if Firestore is available
      const available = await isFirestoreAvailable();
      setIsOffline(!available);
      
      if (!available) {
        setError('Cannot connect to Firestore. Working in offline mode.');
        setLoading(false);
        return;
      }
      
      // Query team members collection
      const teamCollection = collection(db, 'teamMembers');
      const teamQuery = query(teamCollection, orderBy('updatedAt', 'desc'));
      const querySnapshot = await getDocs(teamQuery);
      
      // Transform data and set state
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

  if (loading) {
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
          <Button onClick={handleAddMember} className="flex items-center gap-2">
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
              {filteredMembers.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredMembers.map((member) => (
                    <div key={member.id} className="border rounded-lg p-4 flex">
                      <div className="h-20 w-20 bg-gray-200 rounded-lg overflow-hidden mr-4">
                        {member.photoUrl && (
                          <img
                            src={member.photoUrl}
                            alt={member.name}
                            className="h-full w-full object-cover"
                          />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-medium">{member.name}</h3>
                        <p className="text-sm text-gray-600">{member.position}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          Experience: {member.experience || 'N/A'}
                        </p>
                        <div className="mt-3 flex space-x-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleEditMember(member)}
                            className="h-8 px-2"
                          >
                            <Pencil className="h-3.5 w-3.5 mr-1" />
                            Edit
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleDeleteMember(member.id)}
                            className="h-8 px-2 text-destructive hover:text-destructive"
                          >
                            <Trash2 className="h-3.5 w-3.5 mr-1" />
                            Delete
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 border rounded-lg">
                  <p className="text-gray-500">No team members found in this section.</p>
                  <Button
                    variant="outline"
                    className="mt-4"
                    onClick={handleAddMember}
                  >
                    Add Team Member
                  </Button>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
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
