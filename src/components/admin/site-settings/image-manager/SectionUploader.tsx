
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Upload } from 'lucide-react';

interface SectionUploaderProps {
  section: {
    id: string;
    name: string;
  };
  pageId: string;
  onUpload: (event: React.ChangeEvent<HTMLInputElement>, sectionId: string, pageId: string) => void;
  uploading: boolean;
}

const SectionUploader = ({ section, pageId, onUpload, uploading }: SectionUploaderProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Label className="text-lg font-medium">{section.name}</Label>
        <div>
          <Input
            id={`${pageId}-${section.id}-upload`}
            type="file"
            accept="image/*"
            onChange={(e) => onUpload(e, section.id, pageId)}
            className="hidden"
          />
          <Button 
            variant="outline" 
            disabled={uploading}
            onClick={() => document.getElementById(`${pageId}-${section.id}-upload`)?.click()}
          >
            <Upload className="h-4 w-4 mr-2" />
            {uploading ? 'Uploading...' : 'Upload Image'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SectionUploader;
