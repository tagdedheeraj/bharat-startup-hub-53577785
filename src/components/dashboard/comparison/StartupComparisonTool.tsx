
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const StartupComparisonTool = () => {
  // Mock data for startup comparison
  const startups = [
    { id: 1, name: "GreenTech Solutions", industry: "CleanTech", fundingStage: "Seed", valuation: "₹4.5 Cr", traction: "10k users", teamSize: 8, foundedYear: 2023 },
    { id: 2, name: "HealthAI", industry: "HealthTech", fundingStage: "Series A", valuation: "₹12 Cr", traction: "50k users", teamSize: 15, foundedYear: 2022 },
    { id: 3, name: "FinLedger", industry: "FinTech", fundingStage: "Seed", valuation: "₹3.8 Cr", traction: "5k users", teamSize: 6, foundedYear: 2024 },
    { id: 4, name: "EduLearn", industry: "EdTech", fundingStage: "Pre-Seed", valuation: "₹1.5 Cr", traction: "2k users", teamSize: 4, foundedYear: 2024 },
  ];

  const [selectedStartups, setSelectedStartups] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const toggleStartupSelection = (id: number) => {
    if (selectedStartups.includes(id)) {
      setSelectedStartups(selectedStartups.filter(startupId => startupId !== id));
    } else {
      if (selectedStartups.length < 3) {
        setSelectedStartups([...selectedStartups, id]);
      }
    }
  };

  const filteredStartups = startups.filter(startup => 
    startup.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    startup.industry.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedStartupsData = startups.filter(startup => selectedStartups.includes(startup.id));

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Search className="h-5 w-5 text-primary" />
          Startup Comparison Tool
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search startups by name or industry..."
                className="w-full pl-10 p-2 border rounded-md"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-2">Select up to 3 startups to compare:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {filteredStartups.map(startup => (
                <div 
                  key={startup.id} 
                  className={`p-3 border rounded-md cursor-pointer ${
                    selectedStartups.includes(startup.id) ? 'border-primary bg-primary/5' : 'hover:bg-accent'
                  }`}
                  onClick={() => toggleStartupSelection(startup.id)}
                >
                  <div className="font-medium">{startup.name}</div>
                  <div className="text-sm text-muted-foreground">{startup.industry} • {startup.fundingStage}</div>
                </div>
              ))}
            </div>
          </div>
          
          {selectedStartupsData.length > 0 && (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse mt-4">
                <thead>
                  <tr className="bg-muted">
                    <th className="p-2 text-left">Metric</th>
                    {selectedStartupsData.map(startup => (
                      <th key={startup.id} className="p-2 text-left">{startup.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2 font-medium">Industry</td>
                    {selectedStartupsData.map(startup => (
                      <td key={startup.id} className="p-2">{startup.industry}</td>
                    ))}
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium">Funding Stage</td>
                    {selectedStartupsData.map(startup => (
                      <td key={startup.id} className="p-2">{startup.fundingStage}</td>
                    ))}
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium">Valuation</td>
                    {selectedStartupsData.map(startup => (
                      <td key={startup.id} className="p-2">{startup.valuation}</td>
                    ))}
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium">Traction</td>
                    {selectedStartupsData.map(startup => (
                      <td key={startup.id} className="p-2">{startup.traction}</td>
                    ))}
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium">Team Size</td>
                    {selectedStartupsData.map(startup => (
                      <td key={startup.id} className="p-2">{startup.teamSize}</td>
                    ))}
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium">Founded Year</td>
                    {selectedStartupsData.map(startup => (
                      <td key={startup.id} className="p-2">{startup.foundedYear}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default StartupComparisonTool;
