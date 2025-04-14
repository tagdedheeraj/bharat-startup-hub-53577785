
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Building2, ChevronRight, Filter, Search } from 'lucide-react';

type DealStatus = 'New' | 'Reviewing' | 'Due Diligence' | 'Negotiating' | 'Invested' | 'Rejected';

interface DealItem {
  id: number;
  name: string;
  sector: string;
  stage: string;
  askAmount: string;
  status: DealStatus;
  dateAdded: string;
}

const DealFlowManager = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Mock data for deal flow
  const deals: DealItem[] = [
    { 
      id: 1, 
      name: "AgriConnect", 
      sector: "AgriTech", 
      stage: "Seed", 
      askAmount: "₹80,00,000", 
      status: "New", 
      dateAdded: "2024-04-01" 
    },
    { 
      id: 2, 
      name: "MediTrack", 
      sector: "HealthTech", 
      stage: "Seed", 
      askAmount: "₹90,00,000", 
      status: "Reviewing", 
      dateAdded: "2024-03-28" 
    },
    { 
      id: 3, 
      name: "EduLearn Pro", 
      sector: "EdTech", 
      stage: "Pre-Seed", 
      askAmount: "₹40,00,000", 
      status: "Due Diligence", 
      dateAdded: "2024-03-25" 
    },
    { 
      id: 4, 
      name: "FinSecure", 
      sector: "FinTech", 
      stage: "Series A", 
      askAmount: "₹2,00,00,000", 
      status: "Negotiating", 
      dateAdded: "2024-03-15" 
    },
  ];
  
  const filteredDeals = deals.filter(deal => 
    deal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    deal.sector.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const getStatusColor = (status: DealStatus) => {
    switch(status) {
      case 'New': return 'bg-blue-100 text-blue-800';
      case 'Reviewing': return 'bg-purple-100 text-purple-800';
      case 'Due Diligence': return 'bg-yellow-100 text-yellow-800';
      case 'Negotiating': return 'bg-orange-100 text-orange-800';
      case 'Invested': return 'bg-green-100 text-green-800';
      case 'Rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Building2 className="h-5 w-5" />
          Deal Flow Management
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-3 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search startups or sectors..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="outline" size="sm" className="flex gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
        </div>
        
        <div className="space-y-4">
          {filteredDeals.length > 0 ? (
            filteredDeals.map((deal) => (
              <div 
                key={deal.id} 
                className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <h3 className="font-medium">{deal.name}</h3>
                    <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                      <span>{deal.sector}</span>
                      <span>•</span>
                      <span>{deal.stage}</span>
                      <span>•</span>
                      <span>Added on {deal.dateAdded}</span>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                    <Badge className={getStatusColor(deal.status)} variant="outline">
                      {deal.status}
                    </Badge>
                    <div className="font-semibold">{deal.askAmount}</div>
                    <Button variant="ghost" size="sm" className="md:ml-2">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              No deals match your search. Try different keywords or clear the search.
            </div>
          )}
          
          <div className="flex justify-end mt-4">
            <Button className="gap-2">
              View All Deals
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DealFlowManager;
