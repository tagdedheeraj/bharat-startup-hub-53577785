
import React from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Edit, Search, Trash, UserPlus } from 'lucide-react';
import { useAuth } from '@/contexts/auth';

const UsersPage = () => {
  const { user } = useAuth();
  
  // Sample users data for demonstration
  const users = [
    { id: 1, name: 'Rajesh Kumar', email: 'rajesh@example.com', role: 'startup', joinDate: '15 Apr 2023' },
    { id: 2, name: 'Priya Sharma', email: 'priya@example.com', role: 'investor', joinDate: '22 May 2023' },
    { id: 3, name: 'Vikram Singh', email: 'vikram@example.com', role: 'startup', joinDate: '10 Jun 2023' },
    { id: 4, name: 'Neha Patel', email: 'neha@example.com', role: 'investor', joinDate: '05 Jul 2023' },
    { id: 5, name: 'Amit Verma', email: 'amit@example.com', role: 'startup', joinDate: '18 Aug 2023' },
    { id: 6, name: 'Sanjay Gupta', email: 'sanjay@example.com', role: 'startup', joinDate: '30 Sep 2023' },
    { id: 7, name: 'Anjali Desai', email: 'anjali@example.com', role: 'investor', joinDate: '12 Oct 2023' },
    { id: 8, name: 'Kiran Reddy', email: 'kiran@example.com', role: 'startup', joinDate: '25 Nov 2023' },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Manage Users</h1>
          <Button className="flex items-center gap-2">
            <UserPlus className="h-4 w-4" />
            Add User
          </Button>
        </div>
        
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Users</CardTitle>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input 
                  type="search" 
                  placeholder="Search users..." 
                  className="pl-8 w-[250px]" 
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Join Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${
                        user.role === 'startup' ? 'bg-blue-100 text-blue-800' : 'bg-amber-100 text-amber-800'
                      }`}>
                        {user.role}
                      </span>
                    </TableCell>
                    <TableCell>{user.joinDate}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon" className="text-gray-500 hover:text-gray-700">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-gray-500 hover:text-red-600">
                        <Trash className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default UsersPage;
