
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
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  Eye, 
  CheckCircle, 
  XCircle, 
  MoreHorizontal,
  ChevronDown
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// Mock application data
const mockApplications = [
  {
    id: '1',
    type: 'funding',
    companyName: 'EcoSolutions',
    applicantName: 'Raj Kumar',
    applicantRole: 'startup',
    amount: '₹25,00,000',
    status: 'pending',
    submittedDate: '2024-04-05',
    details: {
      businessDescription: 'Eco-friendly packaging solutions for e-commerce',
      fundingPurpose: 'Expanding production capacity and R&D',
      projectedROI: '22% over 3 years',
      documents: ['business_plan.pdf', 'financial_projections.xlsx']
    }
  },
  {
    id: '2',
    type: 'certificate',
    companyName: 'TechInnovate',
    applicantName: 'Vikram Singh',
    applicantRole: 'startup',
    amount: 'N/A',
    status: 'approved',
    submittedDate: '2024-03-20',
    details: {
      certificateType: 'ISO 9001',
      businessDescription: 'AI-powered customer service solutions',
      documents: ['company_profile.pdf', 'process_documentation.pdf']
    }
  },
  {
    id: '3',
    type: 'investment',
    companyName: 'HealthBridge',
    applicantName: 'Priya Sharma',
    applicantRole: 'investor',
    amount: '₹50,00,000',
    status: 'rejected',
    submittedDate: '2024-03-15',
    details: {
      investmentPurpose: 'Series A funding for healthcare startup',
      expectedExit: '5 years',
      targetedROI: '30% over investment period',
      documents: ['investment_proposal.pdf', 'risk_assessment.pdf']
    }
  },
  {
    id: '4',
    type: 'funding',
    companyName: 'AgriTech Solutions',
    applicantName: 'Mohan Patel',
    applicantRole: 'startup',
    amount: '₹15,00,000',
    status: 'under_review',
    submittedDate: '2024-04-01',
    details: {
      businessDescription: 'IoT solutions for agriculture',
      fundingPurpose: 'Product development and market expansion',
      projectedROI: '18% over 2 years',
      documents: ['business_plan.pdf', 'prototype_documentation.pdf']
    }
  },
];

const ApplicationManagement: React.FC = () => {
  const [applications, setApplications] = useState(mockApplications);
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [filterType, setFilterType] = useState<string>('all');
  const [selectedApplication, setSelectedApplication] = useState<any>(null);

  // Filter logic
  const filteredApplications = applications.filter(app => {
    const matchesStatus = filterStatus === 'all' || app.status === filterStatus;
    const matchesType = filterType === 'all' || app.type === filterType;
    
    return matchesStatus && matchesType;
  });

  // Action handlers
  const updateApplicationStatus = (appId: string, newStatus: string) => {
    setApplications(applications.map(app => {
      if (app.id === appId) {
        return { ...app, status: newStatus };
      }
      return app;
    }));
  };

  // Render status badge
  const renderStatusBadge = (status: string) => {
    switch (status) {
      case 'approved':
        return <Badge className="bg-green-500">Approved</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-500">Pending</Badge>;
      case 'under_review':
        return <Badge className="bg-blue-500">Under Review</Badge>;
      case 'rejected':
        return <Badge className="bg-red-500">Rejected</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  // Render type badge
  const renderTypeBadge = (type: string) => {
    switch (type) {
      case 'funding':
        return <Badge className="bg-purple-500">Funding</Badge>;
      case 'certificate':
        return <Badge className="bg-indigo-500">Certificate</Badge>;
      case 'investment':
        return <Badge className="bg-green-500">Investment</Badge>;
      default:
        return <Badge>{type}</Badge>;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5" />
          Application Management
        </CardTitle>
        <CardDescription>
          Manage funding, certificate, and investment applications
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full md:w-auto">
                Status: {filterStatus === 'all' ? 'All' : filterStatus.replace('_', ' ')}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setFilterStatus('all')}>
                All Statuses
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilterStatus('pending')}>
                Pending
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilterStatus('under_review')}>
                Under Review
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilterStatus('approved')}>
                Approved
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilterStatus('rejected')}>
                Rejected
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full md:w-auto">
                Type: {filterType === 'all' ? 'All Types' : filterType}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setFilterType('all')}>
                All Types
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilterType('funding')}>
                Funding
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilterType('certificate')}>
                Certificate
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilterType('investment')}>
                Investment
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        {filteredApplications.length > 0 ? (
          <div className="rounded-md border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Type</TableHead>
                  <TableHead>Company</TableHead>
                  <TableHead>Applicant</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Submitted</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredApplications.map((app) => (
                  <TableRow key={app.id}>
                    <TableCell>{renderTypeBadge(app.type)}</TableCell>
                    <TableCell className="font-medium">{app.companyName}</TableCell>
                    <TableCell>{app.applicantName}</TableCell>
                    <TableCell>{app.amount}</TableCell>
                    <TableCell>{renderStatusBadge(app.status)}</TableCell>
                    <TableCell>{app.submittedDate}</TableCell>
                    <TableCell className="text-right">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => setSelectedApplication(app)}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl">
                          <DialogHeader>
                            <DialogTitle>Application Details</DialogTitle>
                            <DialogDescription>
                              Review the application information below
                            </DialogDescription>
                          </DialogHeader>
                          
                          {selectedApplication && (
                            <div className="mt-4 space-y-4">
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <h3 className="font-semibold text-sm text-muted-foreground">Company</h3>
                                  <p>{selectedApplication.companyName}</p>
                                </div>
                                <div>
                                  <h3 className="font-semibold text-sm text-muted-foreground">Application Type</h3>
                                  <p>{renderTypeBadge(selectedApplication.type)}</p>
                                </div>
                                <div>
                                  <h3 className="font-semibold text-sm text-muted-foreground">Applicant</h3>
                                  <p>{selectedApplication.applicantName}</p>
                                </div>
                                <div>
                                  <h3 className="font-semibold text-sm text-muted-foreground">Applicant Role</h3>
                                  <p className="capitalize">{selectedApplication.applicantRole}</p>
                                </div>
                                <div>
                                  <h3 className="font-semibold text-sm text-muted-foreground">Amount</h3>
                                  <p>{selectedApplication.amount}</p>
                                </div>
                                <div>
                                  <h3 className="font-semibold text-sm text-muted-foreground">Status</h3>
                                  <p>{renderStatusBadge(selectedApplication.status)}</p>
                                </div>
                              </div>
                              
                              <div className="border-t pt-4">
                                <h3 className="font-semibold mb-2">Application Details</h3>
                                {selectedApplication.type === 'funding' && (
                                  <div className="space-y-2">
                                    <p><span className="font-medium">Business:</span> {selectedApplication.details.businessDescription}</p>
                                    <p><span className="font-medium">Purpose:</span> {selectedApplication.details.fundingPurpose}</p>
                                    <p><span className="font-medium">Projected ROI:</span> {selectedApplication.details.projectedROI}</p>
                                  </div>
                                )}
                                
                                {selectedApplication.type === 'certificate' && (
                                  <div className="space-y-2">
                                    <p><span className="font-medium">Certificate Type:</span> {selectedApplication.details.certificateType}</p>
                                    <p><span className="font-medium">Business:</span> {selectedApplication.details.businessDescription}</p>
                                  </div>
                                )}
                                
                                {selectedApplication.type === 'investment' && (
                                  <div className="space-y-2">
                                    <p><span className="font-medium">Purpose:</span> {selectedApplication.details.investmentPurpose}</p>
                                    <p><span className="font-medium">Expected Exit:</span> {selectedApplication.details.expectedExit}</p>
                                    <p><span className="font-medium">Target ROI:</span> {selectedApplication.details.targetedROI}</p>
                                  </div>
                                )}
                              </div>
                              
                              <div className="border-t pt-4">
                                <h3 className="font-semibold mb-2">Documents</h3>
                                <ul className="list-disc list-inside">
                                  {selectedApplication.details.documents.map((doc: string, index: number) => (
                                    <li key={index} className="text-blue-600 hover:underline cursor-pointer">{doc}</li>
                                  ))}
                                </ul>
                              </div>
                              
                              <div className="border-t pt-4 flex justify-between">
                                <Button 
                                  variant="destructive"
                                  onClick={() => updateApplicationStatus(selectedApplication.id, 'rejected')}
                                >
                                  <XCircle className="mr-2 h-4 w-4" />
                                  Reject
                                </Button>
                                
                                {selectedApplication.status !== 'approved' && (
                                  <Button 
                                    variant="default"
                                    onClick={() => updateApplicationStatus(selectedApplication.id, 'approved')}
                                    className="bg-green-600 hover:bg-green-700"
                                  >
                                    <CheckCircle className="mr-2 h-4 w-4" />
                                    Approve
                                  </Button>
                                )}
                              </div>
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>
                      
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem 
                            onClick={() => updateApplicationStatus(app.id, 'approved')}
                            className="text-green-600"
                          >
                            <CheckCircle className="mr-2 h-4 w-4" />
                            Approve
                          </DropdownMenuItem>
                          
                          <DropdownMenuItem 
                            onClick={() => updateApplicationStatus(app.id, 'under_review')}
                          >
                            <Eye className="mr-2 h-4 w-4" />
                            Mark as Under Review
                          </DropdownMenuItem>
                          
                          <DropdownMenuItem 
                            onClick={() => updateApplicationStatus(app.id, 'rejected')}
                            className="text-red-600"
                          >
                            <XCircle className="mr-2 h-4 w-4" />
                            Reject
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
            <p className="text-muted-foreground">No applications found matching your criteria</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ApplicationManagement;
