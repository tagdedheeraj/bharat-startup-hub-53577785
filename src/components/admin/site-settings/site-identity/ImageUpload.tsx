
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Upload } from 'lucide-react';

interface ImageUploadProps {
  type: 'logo' | 'favicon';
  currentImageUrl?: string;
  uploading: boolean;
  onUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  description: string;
}

const ImageUpload = ({ 
  type, 
  currentImageUrl, 
  uploading, 
  onUpload,
  description 
}: ImageUploadProps) => {
  const id = `${type}Upload`;
  const title = type === 'logo' ? 'Website Logo' : 'Favicon';
  const imageSize = type === 'logo' ? 'h-16 w-16' : 'h-10 w-10';

  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{title}</Label>
      <div className="flex items-center gap-4">
        {currentImageUrl && (
          <div className={`${imageSize} overflow-hidden rounded-md border`}>
            <img 
              src={currentImageUrl} 
              alt={`Current ${type}`} 
              className="h-full w-full object-contain"
            />
          </div>
        )}
        <div className="flex-1">
          <Input
            id={id}
            type="file"
            accept="image/*"
            onChange={onUpload}
            className="hidden"
          />
          <Button 
            disabled={uploading} 
            onClick={() => document.getElementById(id)?.click()}
            variant="outline"
            className="w-full"
          >
            <Upload className="mr-2 h-4 w-4" />
            {uploading ? 'Uploading...' : currentImageUrl ? `Change ${title}` : `Upload ${title}`}
          </Button>
        </div>
      </div>
      <p className="text-xs text-muted-foreground">{description}</p>
    </div>
  );
};

export default ImageUpload;
