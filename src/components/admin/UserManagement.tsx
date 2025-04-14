
import React, { useState } from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ChevronDown, 
  Search, 
  UserCog, 
  Ban, 
  Check, 
  Trash2, 
  MoreHorizontal 
} from 'lucide-react';

// Mock user data - in a real app, this would come from a database
const mockUsers = [
  { 
    id: '1', 
    name: 'Raj Kumar', 
    email: 'raj@example.com', 
    role: 'startup', 
    status: 'active', 
    registeredOn: '2024-03-15' 
  },
  { 
    id: '2', 
    name: 'Priya Sharma', 
    email: 'priya@example.com', 
    role: 'investor', 
    status: 'active', 
    registeredOn: '2024-02-10' 
  },
  { 
    id: '3', 
    name: 'Aman Gupta', 
    email: 'aman@example.com', 
    role: 'startup', 
    status: 'pending', 
    registeredOn: '2024-04-01' 
  },
  { 
    id: '4', 
    name: 'Neha Patel', 
    email: 'neha@example.com', 
    role: 'investor', 
    status: 'blocked', 
    registeredOn: '2024-01-20' 
  },
];

const UserManagement: React.FC = () => {
  const [users, setUsers] = useState(mockUsers);
  const [filterRole, setFilterRole] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter and search logic
  const filteredUsers = users.filter(user => {
    const matchesRole = filterRole === 'all' || user.role === filterRole;
    const matchesSearch = 
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      user.email.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesRole && matchesSearch;
  });

  // User action handlers
  const toggleUserStatus = (userId: string) => {
    setUsers(users.map(user => {
      if (user.id === userId) {
        const newStatus = user.status === 'active' ? 'blocked' : 'active';
        return { ...user, status: newStatus };
      }
      return user;
    }));
  };

  const approveUser = (userId: string) => {
    setUsers(users.map(user => {
      if (user.id === userId) {
        return { ...user, status: 'active' };
      }
      return user;
    }));
  };

  const deleteUser = (userId: string) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter(user => user.id !== userId));
    }
  };

  // Render badge based on status
  const renderStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-500">Active</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-500">Pending</Badge>;
      case 'blocked':
        return <Badge className="bg-red-500">Blocked</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  // Render badge based on role
  const renderRoleBadge = (role: string) => {
    switch (role) {
      case 'startup':
        return <Badge className="bg-blue-500">Startup</Badge>;
      case 'investor':
        return <Badge className="bg-purple-500">Investor</Badge>;
      default:
        return <Badge>{role}</Badge>;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <UserCog className="h-5 w-5" />
          User Management
        </CardTitle>
        <CardDescription>
          Manage startup and investor users
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search users..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full md:w-auto">
                Filter: {filterRole === 'all' ? 'All Users' : filterRole === 'startup' ? 'Startups' : 'Investors'}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setFilterRole('all')}>
                All Users
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilterRole('startup')}>
                Startups
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilterRole('investor')}>
                Investors
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        {filteredUsers.length > 0 ? (
          <div className="rounded-md border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Registered</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{renderRoleBadge(user.role)}</TableCell>
                    <TableCell>{renderStatusBadge(user.status)}</TableCell>
                    <TableCell>{user.registeredOn}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem 
                            onClick={() => toggleUserStatus(user.id)}
                          >
                            {user.status === 'active' ? (
                              <>
                                <Ban className="mr-2 h-4 w-4" />
                                Block User
                              </>
                            ) : (
                              <>
                                <Check className="mr-2 h-4 w-4" />
                                Activate User
                              </>
                            )}
                          </DropdownMenuItem>
                          
                          {user.status === 'pending' && (
                            <DropdownMenuItem onClick={() => approveUser(user.id)}>
                              <Check className="mr-2 h-4 w-4" />
                              Approve User
                            </DropdownMenuItem>
                          )}
                          
                          <DropdownMenuItem 
                            onClick={() => deleteUser(user.id)}
                            className="text-red-600"
                          >
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete User
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ) : (
          <div className="text-center p-6 border rounded-md">
            <p className="text-muted-foreground">No users found matching your criteria</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default UserManagement;
