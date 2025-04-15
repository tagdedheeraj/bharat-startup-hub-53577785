
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface SiteNameInputProps {
  siteName: string;
  loading: boolean;
  onSiteNameChange: (value: string) => void;
  onUpdate: () => void;
  currentSiteName?: string;
}

const SiteNameInput = ({ 
  siteName, 
  loading, 
  onSiteNameChange, 
  onUpdate,
  currentSiteName 
}: SiteNameInputProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="siteName">Site Name</Label>
      <div className="flex gap-2">
        <Input 
          id="siteName" 
          value={siteName} 
          onChange={(e) => onSiteNameChange(e.target.value)} 
          placeholder="Enter site name" 
        />
        <Button 
          onClick={onUpdate} 
          disabled={loading || siteName.trim() === currentSiteName}
        >
          Update
        </Button>
      </div>
    </div>
  );
};

export default SiteNameInput;
